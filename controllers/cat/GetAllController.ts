import { Request, Response } from "express";
import CatService from "../../services/CatServices";


let getCats = async (_: Request, res: Response) => {
  try {
    const cats = await CatService.get()

    return res.status(200).json(
      {
        status: 'query ok',
        cats: cats[0]
      }
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default getCats;