import { Request, Response } from "express";
import CatService from "../../services/CatServices";


let updateCat = async (req: Request, res: Response) => {
    try {
        const {
            id
        } = req.params

        const deleteCat: any = await CatService.delete(Number(id))

        if (deleteCat[0].affectedRows > 0) {
            return res.status(200).json({ status: 'Gato eliminado correctamente' });
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