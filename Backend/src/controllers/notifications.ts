import { Request, RequestHandler, Response } from "express";
import Connection from "../Helpers/database";
const db = new Connection();

export const getNotifications = async (req: Request, res: Response) => {
  try {
    const notification = await db.exec("getNotifications");

    res.status(200).json(notification.recordset);
  } catch (error) {
    res.status(404).json({ message: "no notifications" });
  }
};

export const addNotifications = async (req: Request, res: Response) => {
  const { trackId, email, message } = req.body;

  console.log("helooo");
  console.log(message);

  try {
    await db.exec("addNotifications", { trackId, email, message });

    res.status(200).json("notification emitted");
  } catch (error) {
    res.status(500).json("something went wrong");
  }
};

export const deleteNotifications: RequestHandler<{ id: string }> = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;

  try {
    await db.exec("deleteNotifications", { id });

    res
      .status(201)
      .json({ message: "notifications were deleted successfully" });
  } catch (error) {
    res.status(403).json({ message: "notifications was not deleted" });
  }
};
