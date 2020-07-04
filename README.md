# Node-Postgres-REST
The repository contains the source code for RESTful web services using Node.js and PostgreSQL for a simple todo app. The aapplication supports all the CRUD operations along with parametric endpoints.

To get started:

Setup postgres on your system and run the two queries from "queries.sql" file.

git clone <url>

npm install

npm start

To test operations:

Install postman or any other similar application and hit endpoints with desired method and data.

Exanple:

> POST http://localhost:5000/todos

and pass

{
  "description": "Workout"
}

in the body as "raw" and "json" type
