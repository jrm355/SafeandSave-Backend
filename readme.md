# LINK TO FRONTEND https://github.com/jrm355/SafeandSave-Frontend

# Fridge Friend, your one stop guide to keep track of your food and basic food safety

## Front End CRUD Pantry; Ability to input items in pantry, Get information from API about said items, Change the items, and Delete Items. Completely manipulatable on the users end.

### Connected to mongo DB and stored there. Allows manipulation of mongoDB from the front end and back end, editing, deleting, adding, and viewing items. 

## Front end CRUD DogFood ability to pick food, read information about whether it is safe for dog, remove the item, and select a new one. Dropdown accessible with autofill, this was important for functionality. 

### connected to mongoDB with an API stored there. There are approx 70 foods that can be looked up. The files are available on Dog.mjs. There are two get routes, one to get individual foods and one to get all of them. Full CRUD on backend. 

## Front end Food Safety. Has a table that is manipulatable and searchable. Does not have a backend component, directly built in react. 

## Home Page is using the external Dog API to fetch a random image. I really wish I could have found a good food API in the time period this assignment was due, but dogs are a theme of this project, so I'm content with it for now.

## Front End About, instructions on how to use the website.

## Commented out Code: I attempted to interact with an API on the backend and forward it to the front for the food safety page. Unfortunately I did not find a good API code in time, I left the files and the code (aside from the keys) to be used later or not. They are separated and commented out, so they do not interfere with the functionality.

#### Tools used, lots of online data bases, Source Code from past lesson etc. I worked with whatever tools I had, this website is putting together certain pieces a lot of other people put together before me, I worked with what I had, stylized it how I wanted to, and this is what came up.

#### Technologies used include VS code, thundercloud, and postman. 

#### Please use best practice using this site. I cannot guarantee everything is a hundred percent correct but I did my best to get factual information. 

## Other notes. CSS stylization for the most part is linked to pages of the same name. Most fields are labeled for easy stylization changes. 

## GETTING SITE TO WORK: my .env file has PORT, mongo URI, and REACT_APP_BACKEND_URL. These need to be replaced to make the backend functional. The Dog.mjs field has data that can be directly inserted into MongoDB. The schemas should be utilizable for inputting data into thundercloud (or whatever extension you choose to insert routes)

#### Personal Note: This is a nice little website, and I'm proud of what I put together. This is kind of like anything else, it's only finished until it feels complete and this feels mostly complete. 