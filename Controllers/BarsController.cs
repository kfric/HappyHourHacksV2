using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HappyHourHacksV2.Models;

namespace HappyHourHacksV2.Controllers
{
    // All of these routes will be at the base URL:     /api/Bars
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case BarsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class BarsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public BarsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Bars
        //
        // Returns a list of all your Bars
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bar>>> GetBars(string filter)
        {
            // Uses the database context in `_context` to request all of the Farms, sort
            // them by row id and return them as a JSON array.
            if (filter == null)
            {
                return await _context.Bars.OrderBy(row => row.Id).Include(bar => bar.Reviews).
                                                                  Include(bar => bar.Deals).ToListAsync();
            }
            else
            {
                // uses the filter
                return await _context.Bars.Where(bar => bar.Name.ToLower().Contains(filter.ToLower()) ||
                                                        bar.Address.ToLower().Contains(filter.ToLower()) ||
                                                        bar.Style.ToLower().Contains(filter.ToLower())).Include(bar => bar.Reviews).
                                                                                                        Include(bar => bar.Deals).ToListAsync();
            }
        }

        // GET: api/Bars/5
        //
        // Fetches and returns a specific bar by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Bar>> GetBar(int id)
        {
            // Find the bar in the database using `FindAsync` to look it up by id
            // Find the restaurant in the database using Include to ensure we have the associated reviews
            var bar = await _context.Bars.Include(bar => bar.Reviews).
                                            Include(bar => bar.Deals).
                                            Where(bar => bar.Id == id).FirstOrDefaultAsync();
            // If we didn't find anything, we receive a `null` in return
            if (bar == null)
            {
                // Return a `404` response to the client indicating we could not find a bar with this id
                return NotFound();
            }

            //  Return the bar as a JSON object.
            return bar;
        }

        // PUT: api/Bars/5
        //
        // Update an individual bar with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Bar
        // variable named bar. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Bar POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBar(int id, Bar bar)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != bar.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in bar to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from bar
            _context.Entry(bar).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!BarExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // Return a copy of the updated data
            return Ok(bar);
        }

        // POST: api/Bars
        //
        // Creates a new bar in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Bar
        // variable named bar. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Bar POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Bar>> PostBar(Bar bar)
        {
            // Indicate to the database context we want to add this new record
            _context.Bars.Add(bar);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetBar", new { id = bar.Id }, bar);
        }

        // DELETE: api/Bars/5
        //
        // Deletes an individual bar with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBar(int id)
        {
            // Find this bar by looking for the specific id
            var bar = await _context.Bars.FindAsync(id);
            if (bar == null)
            {
                // There wasn't a bar with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Bars.Remove(bar);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(bar);
        }

        // Private helper method that looks up an existing bar by the supplied id
        private bool BarExists(int id)
        {
            return _context.Bars.Any(bar => bar.Id == id);
        }
    }
}
