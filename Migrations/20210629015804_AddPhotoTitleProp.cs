using Microsoft.EntityFrameworkCore.Migrations;

namespace HappyHourHacksV2.Migrations
{
    public partial class AddPhotoTitleProp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Photos",
                type: "text",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Photos_BarId",
                table: "Photos",
                column: "BarId");

            migrationBuilder.AddForeignKey(
                name: "FK_Photos_Bars_BarId",
                table: "Photos",
                column: "BarId",
                principalTable: "Bars",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Photos_Bars_BarId",
                table: "Photos");

            migrationBuilder.DropIndex(
                name: "IX_Photos_BarId",
                table: "Photos");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Photos");
        }
    }
}
