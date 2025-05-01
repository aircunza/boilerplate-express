import { Request, Response } from "express";

export class StatusGetCtrl {
  run(req: Request, res: Response) {
    res.status(200).json({ message: "ok" });
  }
}
