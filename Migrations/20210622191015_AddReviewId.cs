using Microsoft.EntityFrameworkCore.Migrations;

namespace HappyHourHacksV2.Migrations
{
    public partial class AddReviewId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ReviewId",
                table: "Reviews",
                newName: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_BarId",
                table: "Reviews",
                column: "BarId");

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_Bars_BarId",
                table: "Reviews",
                column: "BarId",
                principalTable: "Bars",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_Bars_BarId",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_Reviews_BarId",
                table: "Reviews");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Reviews",
                newName: "ReviewId");
        }
    }
}
