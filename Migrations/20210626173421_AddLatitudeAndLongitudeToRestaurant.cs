using Microsoft.EntityFrameworkCore.Migrations;

namespace HappyHourHacksV2.Migrations
{
    public partial class AddLatitudeAndLongitudeToRestaurant : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Latitude",
                table: "Bars",
                type: "double precision",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Longitude",
                table: "Bars",
                type: "double precision",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "Bars");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "Bars");
        }
    }
}
