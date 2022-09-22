import { Request, Response } from "express";
import { User } from "../interfaces/Users";
import bcrypt from "bcrypt";
import { loginSchema, registerSchema } from "../Helpers/userValidation";
import jwt from "jsonwebtoken";

import Connection from "../Helpers/database";

const db = new Connection();

export const getusers = (req: Request, res: Response) => {
  res.status(200).json({ message: "all users" });
};

export const signUp = async (req: User, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const { error, value } = registerSchema.validate(req.body);

    if (error) {
      res.status(500).json(error.details[0].message);
    }



    const userIndatabase = await db.exec('userLookUp',{email})

    if(userIndatabase.recordset.length){

      res.status(200).json({message:"exist"})
    }else{
    

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.exec("signup", {
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message:'success'});

    

  }
  } catch (error) {
    res.status(500).json({ message: "server is unable to handle request" });
  }
};

export const signIn = async (req: User, res: Response) => {
  const { email, password } = req.body;

  try {
    const { error, value } = loginSchema.validate(req.body);

    const user = await db.exec("signin", { email });

    if (!user?.recordset[0]) {
      return res.status(404).json({ message: "user is not found" });
    }

    const userData = user?.recordset[0] as {
      id: number;
      name: string;
      email: string;
      password: string;
      role: string;
    };

    bcrypt.compare(password, userData.password, (err, data) => {
      if (data) {
        const { role, name, id, email, ...others } = userData;

        const user = { role, name, id, email };

        const token = jwt.sign(user, process.env.KEY as string, {
          expiresIn: "30days",
        });

        res.status(200).json({ user, token });
      } else {
        res.status(200).json({ message: "wrong password" });
      }
    });

    if (error) {
      res.status(500).json(error.details[0].message);
    }
  } catch (error) {}
};
