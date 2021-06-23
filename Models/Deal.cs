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
        public bool Sunday { get; set; }
        public bool Monday { get; set; }
        public bool Tuesday { get; set; }
        public bool Wednesday { get; set; }
        public bool Thursday { get; set; }
        public bool Friday { get; set; }
        public bool Saturday { get; set; }
        public DateTime CreationDate { get; set; } = DateTime.Now;
        public int BarId { get; set; }

    }
}