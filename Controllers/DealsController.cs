using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HappyHourHacksV2.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace HappyHourHacksV2.Controllers
{
    // All of these routes will be at the base URL:     /api/Deals
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case DealsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class DealsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public DealsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Deals
        //
        // Returns a list of all your Deals
        //
        [HttpGet]

        public async Task<ActionResult<IEnumerable<Deal>>> GetDeals()
        {
            // Uses the database context in `_context` to request all of the Deals, sort
            // them by row id and return them as a JSON array.
            return await _context.Deals.OrderBy(row => row.Id).ToListAsync();
        }

        // GET: api/Deals/5
        //
        // Fetches and returns a specific deal by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Deal>> GetDeal(int id)
        {
            // Find the deal in the database using `FindAsync` to look it up by id
            var deal = await _context.Deals.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (deal == null)
            {
                // Return a `404` response to the client indicating we could not find a deal with this id
                return NotFound();
            }

            //  Return the deal as a JSON object.
            return deal;
        }

        // PUT: api/Deals/5
        //
        // Update an individual deal with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Deal
        // variable named deal. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Deal POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDeal(int id, Deal deal)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != deal.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in deal to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from deal
            _context.Entry(deal).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!DealExists(id))
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
            return Ok(deal);
        }

        // POST: api/Deals
        //
        // Creates a new deal in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Deal
        // variable named deal. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Deal POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult<Deal>> PostDeal(Deal deal)
        {

            deal.UserId = GetCurrentUserId();

            // Indicate to the database context we want to add this new record
            _context.Deals.Add(deal);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetDeal", new { id = deal.Id }, deal);
        }

        // DELETE: api/Deals/5
        //
        // Deletes an individual deal with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

        public async Task<IActionResult> DeleteDeal(int id)
        {
            // Find this deal by looking for the specific id
            var deal = await _context.Deals.FindAsync(id);
            if (deal == null)
            {
                // There wasn't a deal with that id so return a `404` not found
                return NotFound();
            }

            if (deal.UserId != GetCurrentUserId())
            {
                // Make a custom error response
                var response = new
                {
                    status = 401,
                    errors = new List<string>() { "Not Authorized" }
                };

                // Return our error with the custom response
                return Unauthorized(response);
            }

            // Tell the database we want to remove this record
            _context.Deals.Remove(deal);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(deal);
        }

        // Private helper method that looks up an existing deal by the supplied id
        private bool DealExists(int id)
        {
            return _context.Deals.Any(deal => deal.Id == id);
        }
        private int GetCurrentUserId()
        {
            // Get the User Id from the claim and then parse it as an integer.
            return int.Parse(User.Claims.FirstOrDefault(claim => claim.Type == "Id").Value);
        }
    }
}
