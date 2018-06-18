# Good Burger WebApp
Node | Express | MySQL | Handlebars

## Description

This application demonstrates a simple full stack application.

Any user may add a burger name to the menu. This input also adds the burger into a MySQL database. The initial burger entry is added as *available*. The user may then "devour" any burger by clicking on the 'devour button' next to the burger's name, which moves it into the adjacent column and updates the status accordingly, in the database.

## Demo

You can demo this web app on heroku at:  [Good Burger](https://google.com).

## Installation

To run the application locally, first clone this repository with the following command:

	git clone https://github.com/mercerbe/GoodBurger.git

Next, install the application dependencies:

	* cd path/to/GoodBurger
	* npm install

Finally, run the node server locally:

	node server.js

Now, open the local application on port 3000 at the URL: `http://localhost:3000/`.
