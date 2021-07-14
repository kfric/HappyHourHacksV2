# HappyHourHacksV2

Welcome new user! Happy Hour Hacks is a full CRUD application where anyone can have access to a database of Bars and Resturants in your local area and view their current deal, reviews and any pictures asscoaited with that location. To add a bar, deal, review or picture the user must create and account and sign in. Everything the user creates can ONLY be deleted by that user.

This list page has a functioning search bar, ADD button and a RANDOM button.

![Screen Shot 2021-07-14 at 12 19 00 PM](https://user-images.githubusercontent.com/80732054/125656855-d350700f-2274-4a83-acb2-8462983246dd.png)

If the length of the text in the search bar is equal to 0, the entire 'Bars' list will return. Adding text creates query search url. This url becomes the new api request.

<img width="420" alt="Screen Shot 2021-07-14 at 12 12 53 PM" src="https://user-images.githubusercontent.com/80732054/125656663-47074b9e-a7bd-49b8-884b-564b23751d4f.png">

Details page has fully functional: add deal, add review, add picture, call location, vist company website, edit and delete (if current user Id matches the creator), and an interactive map (Gecoding.Core & mapbox). 

![Screen Shot 2021-07-14 at 12 10 44 PM](https://user-images.githubusercontent.com/80732054/125657203-01304f9d-75b1-49cc-a2f9-fe68d60918de.png)

Wesbite - http://www.happyhourhacks.herokuapp.com/

Geocodeing.Core - https://github.com/chadly/Geocoding.net

mapbox - https://www.mapbox.com
