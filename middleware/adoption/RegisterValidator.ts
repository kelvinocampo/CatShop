import { check, param, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorParams = [

    param('id')
        .isInt({ min: 1 })
        .withMessage('El ID debe ser un número entero positivo.'),

    check('dateAdopt')
        .trim()
        .isDate()
        .withMessage('La fecha de adopcion debe ser una fecha válida en formato AAAA-MM-DD.')

];


function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}


export default {
    validatorParams,
    validator
};