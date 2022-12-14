import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  let age: number = 84;
  let showOld: boolean = false;

  if (age > 35) {
    showOld = true;
  }

  res.render("pages/home", {
    firstName: "Nome",
    lastName: "Sobrenome",
    showOld
  });
};
