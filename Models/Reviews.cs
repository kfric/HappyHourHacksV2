using System;
using System.ComponentModel.DataAnnotations;

namespace HappyHourHacksV2.Models
{
    public class Review
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Body { get; set; }
        public int Stars { get; set; }
        public DateTime CreationDate { get; set; } = DateTime.Now;
        public int BarId { get; set; }

        // user Id of the user that created this review
        public int UserId { get; set; }
    }
}