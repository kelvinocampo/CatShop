import { Request, Response } from "express";
import AdoptionService from "../../services/AdoptionService";


let updateCat = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const deletedoption: any = await AdoptionService.delete(Number(id))

        if (deletedoption[0].affectedRows > 0) {
            return res.status(200).json({ status: 'Adopcion rechazada correctamente' });
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