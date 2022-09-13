import mssql from 'mssql';
import {sqlconfig} from '../config/config'



export const connectDB = async() => {


    const pool = await mssql.connect(sqlconfig);


    if((await pool).connected){


    return pool;

    }



}