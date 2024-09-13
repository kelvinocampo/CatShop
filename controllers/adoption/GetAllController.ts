import { Request, Response } from "express";
import AdoptionService from "../../services/AdoptionService";


let getAdoptionsReq = async (req: Request, res: Response) => {
  try {
    let adoptionsReq = await AdoptionService.get()
    return res.status(200).json(
      {
        status: 'query ok',
        adoptionsReq: adoptionsReq[0]
      }
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default getAdoptionsReq;