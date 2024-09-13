import { Request, Response } from "express";
import CatService from "../../services/CatServices";
import Cat from "../../Dto/CatDto";


let registerCat = async (req: Request, res: Response) => {
    try {
        const {
            name,
            description,
            dateRegister,
            age,
            weight,
            sex
        } = req.body

        const registerCat = await CatService.register(new Cat(name, description, sex, age, weight, dateRegister))

        return res.status(201).json(
            {
                status: 'register ok'
            }
        );
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage }
            );
        }
    }
}


export default registerCat;