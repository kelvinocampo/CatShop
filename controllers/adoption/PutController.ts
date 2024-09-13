import { Request, Response } from "express";
import AdoptionService from "../../services/AdoptionService";

let updateCat = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const updateAdoption: any = await AdoptionService.update(Number(id))

        if (updateAdoption[0].affectedRows > 0) {
            return res.status(200).json({ status: 'Adopcion aceptada correctamente' });
        } else {
            return res.status(404).json({ status: 'Adopcion no encontrada' });
        }
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage }
            );
        }
    }
}


export default updateCat;