using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace HappyHourHacksV2.Models
{
    public class Bar
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Phone { get; set; }

        [Required]
        public string Address { get; set; }

        public string Website { get; set; }

        [Required]
        public string Style { get; set; }

        // user Id of the user that created this bar
        public int UserId { get; set; }

        public double Latitude { get; set; }
        public double Longitude { get; set; }

        public string PhotoURL { get; set; }

        public List<Review> Reviews { get; set; }
        public List<Deal> Deals { get; set; }
        public List<Photo> Photos { get; set; }
    }
}