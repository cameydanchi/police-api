import express from 'express';
import routeApp from './routes/routes.js';
import 'dotenv/config'
import { dbConnection } from './confing/db.js';



// creatte express app
const app = express();
app.use(express.json());

const connectionString =process.env.Mongo_url


dbConnection()

app.use(routeApp);
const port = 4000

app.listen(port, () =>{
console.log(`Listening on port: ${port}`);
});


// yNv7JqGccgD0zItB  -ps