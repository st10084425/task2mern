import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();


const variable = process.env.MONGO_CONN_STRING
console.log(variable);
//const connectionString ="mongodb+srv://Sideeka:tatamic17@cluster0.dkb81f7.mongodb.net/";
//ATLAS_URI = mongodb+srv://Sideeka:tatamic17@cluster0.dkb81f7.mongodb.net/
//process.env.ATLAS_URI || "";

//const client = new MongoClient(connectionString);
const client= new MongoClient(variable);

let conn;
try {
  conn = await client.connect();
  console.log("connected to db");
} catch(e) {
  console.error(e);
}

let db = conn.db("newmern");

export default db;