import { Request, Response } from "express";
import Adoption from "../../Dto/AdoptionDto";
import AdoptionService from "../../services/AdoptionService";
import CatService from "../../services/CatServices";
import UserService from "../../services/UserServices";


let RegisterAdoption = async (req: Request, res: Response) => {
    try {
        const { dateAdopt } = req.body
        const { id } = req.params
        const idUser = req.body.id

        const existCat: any = await CatService.getByID(Number(id))
        const existUser: any = await UserService.getByID(Number(idUser))

        if (existCat[0].length == 0) {
            return res.status(404).json({ status: 'cat not found' });
        }
        if (existUser[0].length == 0) {
            return res.status(404).json({ status: 'user not found' });
        }

        const registerAdoption = await AdoptionService.register(new Adoption(Number(id), idUser, dateAdopt))

        return res.status(201).json({ status: 'adoption ok' });
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage }
            );
        }
    }
}


export default RegisterAdoption;