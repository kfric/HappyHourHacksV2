using System;

namespace HappyHourHacksV2.Models
{
    public class Review
    {
        public int ReviewId { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public int Stars { get; set; }
        public DateTime CreationDate { get; set; } = DateTime.Now;
        public int BarId { get; set; }

    }
}