import { Request, Response } from "express";
import Adoption from "../../Dto/AdoptionDto";
import AdoptionService from "../../services/AdoptionService";
import UserService from "../../services/UserServices";


let RegisterAdoption = async (req: Request, res: Response) => {
    try {
        const { email, dateAdopt } = req.body
        const { id } = req.params
        const idUser: any[] = await UserService.getID(email)

        const registerAdoption = await AdoptionService.register(new Adoption(Number(id), idUser[0][0].id, dateAdopt))

        return res.status(201).json(
            {
                status: 'adoption ok'
            }
        );
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage }
            );
        }
    }
}


export default RegisterAdoption;