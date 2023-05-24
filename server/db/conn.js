import { MongoClient } from "mongodb";

console.log(process.env.ATLAS_URI)

const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);

let conn;

try {
    console.log("Connected to DB --- 1")
    conn = await client.connect();
    console.log("Connected to DB")
} catch (e) {
    console.error(e);
}

let db = conn.db("TwitterDB");

export default db;