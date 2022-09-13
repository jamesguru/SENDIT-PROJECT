import { Request, Response } from "express";
import { connectDB } from "../Helpers/connect_db";
import { User } from "../interfaces/Users";
import mssql, { RequestError } from "mssql";
import bcrypt from "bcrypt";
import { loginSchema, registerSchema } from "../Helpers/userValidation";
import jwt from "jsonwebtoken";
import sendWelcomeEmail from "../SendEmailService/welcomemail";

export const getusers = (req: Request, res: Response) => {
  res.status(200).json({ message: "all users" });
};

export const signUp = async (req: User, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const { error, value } = registerSchema.validate(req.body);

    

    const pool = await connectDB();


   

    if (error) {
      res.status(500).json(error.details[0].message);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await pool
      ?.request()
      .input("name", mssql.NVarChar, name)
      .input("email", mssql.NVarChar, email)
      .input("password", mssql.NVarChar, hashedPassword)
      .execute("signup");

    res.status(201).json({ user });

    await sendWelcomeEmail(name,email)
  } catch (error) {
    res.status(500).json({message:"something went wrong"});
  }
};

export const signIn = async (req: User, res: Response) => {
  const { email, password } = req.body;

  try {
    const { error, value } = loginSchema.validate(req.body);

    const pool = await connectDB();

    const user = await pool
      ?.request()
      .input("email", mssql.NVarChar, email)
      .input('password',mssql.NVarChar,password)
      .execute("signin");

    if (!user?.recordset[0]) {
      return res.status(400).json({ message: "user is not defined" });
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
        const { role, name, id, ...others } = userData;

        const data = { role, name, id };

        const token = jwt.sign(data, process.env.KEY as string, {
          expiresIn: "30days",
        });

        res.status(200).json({
          message: "Logged in",

          data,

          token,
        });
      } else {
        res.json({ wrongPassword: "You entered wrong password" });
      }
    });

    if (error) {
      res.status(500).json(error.details[0].message);
    }
  } catch (error) {}
};
