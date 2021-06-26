TRUNCATE TABLE "Bars", "Reviews", "Deals", "Users" RESTART IDENTITY;

INSERT INTO "Bars" ("Name", "Phone", "Address", "Website", "Style") VALUES ('MacDinton''s', '727-201-9783', '242 1st Ave N, St. Petersburg, FL 33701', 'macdintons.com', 'Irish Pub');
INSERT INTO "Bars" ("Name", "Phone", "Address", "Website", "Style") VALUES ('Bar Louie', '813-519-1900', '2223 N Westshore Blvd Suite B - 202, Tampa, FL 33607', 'barlouie.com', 'American');
INSERT INTO "Bars" ("Name", "Phone", "Address", "Website", "Style") VALUES ('The Avenue DTSP', '727-851-9531', '242 1st Ave N, St. Petersburg, FL 33701', 'theavenuedtsp.com', 'American');
INSERT INTO "Bars" ("Name", "Phone", "Address", "Website", "Style") VALUES ('Five Bucks Drinkery', '727-896-5118', '247 Central Ave N, St. Petersburg, FL 33701', 'fivebucksdrinkery.com', 'American');

INSERT INTO "Users" ("FullName", "Email", "HashedPassword") VALUES ('Karl', 'karl@gmail.com', 'xxxxx');

INSERT INTO "Reviews" ("BarId", "Title", "Body", "Stars", "CreationDate", "UserId") VALUES (1, 'Friendly staff!', 'Everyone was v happy', 5, '2020-01-01 14:23:55', 1);
INSERT INTO "Reviews" ("BarId", "Title", "Body", "Stars", "CreationDate", "UserId") VALUES (2, 'Clean bathrooms', 'They were cleeeeeean', 5, '2020-06-07 14:23:55', 1);
INSERT INTO "Reviews" ("BarId", "Title", "Body", "Stars", "CreationDate", "UserId") VALUES (1, 'The food was great!', 'everything was cooked just right!', 4, '2020-06-09 14:23:55', 1);
INSERT INTO "Reviews" ("BarId", "Title", "Body", "Stars", "CreationDate", "UserId") VALUES (4, 'Open late', 'Open until 3am', 4, '2020-01-10 14:23:55', 1);


INSERT INTO "Deals" ("BarId", "Details", "Start", "End", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "CreationDate") VALUES (1, 'BOGO wells!', '12pm', '3pm', true, false, true, true, true, false, true, '2020-01-01 14:23:55');
INSERT INTO "Deals" ("BarId", "Details", "Start", "End", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "CreationDate") VALUES (2, '$1 beers', '8pm', '10pm', true, true, true, true, true, true, true, '2020-06-01 14:23:55');
INSERT INTO "Deals" ("BarId", "Details", "Start", "End", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "CreationDate") VALUES (3, 'All you can drink!', '8pm', '10pm', false, false, false, false, false, false, false, '2020-06-07 14:23:55');
INSERT INTO "Deals" ("BarId", "Details", "Start", "End", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "CreationDate") VALUES (4, '$1 margaritas', '3pm', '5pm', true, true, true, false, false, false, false, '2020-06-20 14:23:55');

-- psql --file=Models/exampledata.sql HappyHourHacksV2Database