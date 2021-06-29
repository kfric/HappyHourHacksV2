using Microsoft.EntityFrameworkCore.Migrations;

namespace HappyHourHacksV2.Migrations
{
    public partial class AddUserIdToDeals : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Deals",
                type: "integer",
                nullable: true,
                defaultValue: null);

            migrationBuilder.CreateIndex(
                name: "IX_Deals_UserId",
                table: "Deals",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Deals_Users_UserId",
                table: "Deals",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Deals_Users_UserId",
                table: "Deals");

            migrationBuilder.DropIndex(
                name: "IX_Deals_UserId",
                table: "Deals");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Deals");
        }
    }
}
