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

        public List<Review> Reviews { get; set; }

        public List<Deal> Deals { get; set; }
    }
}