TRUNCATE TABLE "Bars", "Reviews" RESTART IDENTITY;

INSERT INTO "Bars" ("Name", "Phone", "Address", "Website", "Style") VALUES ('MacDinton''s', '727-201-9783', '242 1st Ave N, St. Petersburg, FL 33701', 'macdintons.com', 'Irish Pub');
INSERT INTO "Bars" ("Name", "Phone", "Address", "Website", "Style") VALUES ('Bar Louie', '813-519-1900', '2223 N Westshore Blvd Suite B - 202, Tampa, FL 33607', 'barlouie.com', 'American');
INSERT INTO "Bars" ("Name", "Phone", "Address", "Website", "Style") VALUES ('The Avenue DTSP', '727-851-9531', '242 1st Ave N, St. Petersburg, FL 33701', 'theavenuedtsp.com', 'American');
INSERT INTO "Bars" ("Name", "Phone", "Address", "Website", "Style") VALUES ('Five Bucks Drinkery', '727-896-5118', '247 Central Ave N, St. Petersburg, FL 33701', 'fivebucksdrinkery.com', 'American');


INSERT INTO "Reviews" ("BarId", "Title", "Body", "Stars", "CreationDate") VALUES (1, 'Friendly staff!', 'Everyone was v happy', 5, '2020-01-01 14:23:55');
INSERT INTO "Reviews" ("BarId", "Title", "Body", "Stars", "CreationDate") VALUES (2, 'Clean bathrooms', 'They were cleeeeeean', 5, '2020-06-07 14:23:55');
INSERT INTO "Reviews" ("BarId", "Title", "Body", "Stars", "CreationDate") VALUES (1, 'The food was great!', 'everything was cooked just right!', 4, '2020-06-09 14:23:55');
INSERT INTO "Reviews" ("BarId", "Title", "Body", "Stars", "CreationDate") VALUES (4, 'Open late', 'Open until 3am', 4, '2020-01-10 14:23:55');

-- psql --file=Models/exampledata.sql HappyHourHacksV2Database