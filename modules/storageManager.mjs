import pg from "pg";

class DBManager {
  #pool;


}

let connectionString =
  process.env.ENVIRONMENT === "production"
    ? process.env.DB_CONNECTIONSTRING_PROD
    : process.env.DB_CONNECTIONSTRING_LOCAL;

if (process.env.ENVIRONMENT === "production" && connectionString === undefined) {
  throw new Error("You forgot the db connection string for production environment");
}


export default new DBManager(connectionString);
