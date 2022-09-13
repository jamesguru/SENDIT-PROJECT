import mssql from "mssql";
import { sqlconfig } from "../config/config";

export const connectDB = async () => {
 

  try {
    const pool = await mssql.connect(sqlconfig);

    if ((await pool).connected) {
      console.log("DB connected");
      return pool;
    }
  } catch (error) {
    console.log("pool was never created");
  }
};
