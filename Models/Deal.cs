using System;
using System.ComponentModel.DataAnnotations;

namespace HappyHourHacksV2.Models
{
    public class Deal
    {
        public int Id { get; set; }

        [Required]
        public string Details { get; set; }
        public string Start { get; set; }
        public string End { get; set; }

        [Required]
        public string Days { get; set; }
        public DateTime CreationDate { get; set; } = DateTime.Now;
        public int BarId { get; set; }

    }
}