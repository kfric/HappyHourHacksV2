namespace HappyHourHacksV2.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public int BarId { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}