# Simple RESTful API CRUD with NodeJs, Express and MongoDB
------------

The routes are placed on the index.js file, the node modules required are:
1. Express 
2. Method-Override
3. Mongoose.

To install the packages run the command 'npm install' on the root directory in order to download the dependencies.
Then change the route and password for your mongoDB database on the models/user.js file and you are good to go.


### Create a new user
------------



* **URL**
/users

* **Method:**
	`POST`

*  **URL Params**
	none

* **Data Params**

	**Required:**
	`nombre=[String]`
	`apellido=[String]`


* **Success Response:**
 * **Code:** 200
    **Content:** `{ success : true, message : "Tus datos fueron guardados correctamente" }`


### Get Users information
------------

Shows all the users information if you don't specify one placing the user id on the url.

* **URL**
/users/{id?}

* **Method:**
	`GET`

*  **URL Params**
	none

* **Data Params**
	none

* **Success Response:**
 * **Code:** 200 
    **Content:** `{ success : true, id : 1, nombre: "Bryan", apellido:"Recinos"}`

### Update Users information
------------

Update the information of an specific user

* **URL**
/users/{id}

* **Method:**
	`PUT`

*  **URL Params**
	none

* **Data Params**
	**Optional**
	`nombre=[String]`
	`apellido=[String]`

* **Success Response:**
 * **Code:** 200 
    **Content:** `{ success : true, message: "Usuario actualizado correctament"}`


### Delete User
------------

Delete user from the database.

* **URL**
/users/{id}

* **Method:**
	`DELETE`

*  **URL Params**
	none

* **Data Params**
	none

* **Success Response:**
 * **Code:** 200 
    **Content:** `{ success : true, message: "Se elimino el usuario correctament"}`