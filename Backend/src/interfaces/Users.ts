import { Request } from "express";

export interface User extends Request{

body:{


        id:number,

        name:string,

        email:string,
        role:string,

        password:string
    }
}