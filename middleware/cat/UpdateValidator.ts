import { check, param, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorParams = [
    param('id')
        .isInt({ min: 1 })
        .withMessage('El ID debe ser un número entero positivo.'),

    check('name')
        .trim()
        .isLength({ min: 3, max: 100 })
        .matches(/^[a-zA-Z\s]+$/)
        .withMessage('El nombre debe tener entre 3 y 100 caracteres y solo puede contener letras y espacios.'),

    check('description')
        .trim()
        .isLength({ max: 500 })
        .withMessage('La descripción no puede exceder los 500 caracteres.'),

    check('age')
        .isInt({ min: 0 })
        .withMessage('La edad debe ser un número entero positivo.'),

    check('weight')
        .isInt({ min: 0 })
        .withMessage('El peso debe ser un número entero positivo.'),

    check('sex')
        .trim()
        .toUpperCase()
        .isLength({ min: 1, max: 1 })
        .isIn(['M', 'H'])
        .withMessage('El sexo debe ser "M" (macho) o "H" (hembra).'),


    check('dateRegister')
        .trim()
        .isDate()
        .withMessage('La fecha de registro debe ser una fecha válida en formato AAAA-MM-DD.')
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