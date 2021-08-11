using Microsoft.EntityFrameworkCore.Migrations;

namespace HappyHourHacksV2.Migrations
{
    public partial class AddPhotoURLToBars : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PhotoURL",
                table: "Bars",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhotoURL",
                table: "Bars");
        }
    }
}
