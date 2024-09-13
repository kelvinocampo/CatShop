import { Request, Response } from "express";
import Cat from "../../Dto/CatDto";
import CatService from "../../services/CatServices";


let updateCat = async (req: Request, res: Response) => {
    try {
        const {
            name,
            description,
            age,
            weight,
            sex,
            dateRegister
        } = req.body
        const { id } = req.params

        const updateCat: any = await CatService.update(new Cat(name, description, sex, age, weight, dateRegister), Number(id))

        if (updateCat[0].affectedRows > 0) {
            return res.status(200).json({ status: 'Gato actualizado correctamente' });
        } else {
            return res.status(404).json({ status: 'Gato no encontrado' });
        }

    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage }
            );
        }
    }
}


export default updateCat;