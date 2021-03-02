# Hot Sauce Project Challenge

## Project Overview
This is a code challenge geared toward design and user experience. Given the image templates as a reference, the challenge is to create a site that a user would enjoy. Using React.js as the frontend language, 

### Screen shots of stock templates: 
<img src='./uml/grid.jpg' width='408' height='308'></img>
<img src='./uml/detail.jpg' width='408' height='308'></img>

### Project Objectives:
1. Landing page will display all hot sauce's in json file. 
2. User will have the option to delete any item in the list. 
3. If any item is clicked, user will be taken to single product page with chosen product displayed. All
details should be available to view. 
4. From the landing page, user should contain a add to sauce list link. 
5. The add sauce page will contain a form with all the necessary inputs to add a new sauce to existing list. 

## Project Functionality
1. App.js will initialize json file to localStorage
2. Landing page actions: delete item, render items from localStorage, sends Card.js items from list as props.
3. Add product page: takes all values for adding new item to sauce list, saves to localStorage
4. Single product page: gets url params (product name) and filters from product list matching product name, displays single product returned. 


## Run Project Locally

#### Steps: 
1. git clone from repo
*install dependencies* 
2. From your terminal, in the project root folder,
run: $ npm i
*after dependencies install* 
3. From your terminal, run $ npm start.
** Hot Sauce app will run on localhost in browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

