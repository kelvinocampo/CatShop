import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorParams = [
    check('name')
        .trim()
        .isLength({ min: 3, max: 100 })
        .withMessage('El nombre debe tener entre 3 y 100 caracteres.')
        .matches(/^[a-zA-Z\s]+$/)
        .withMessage('El nombre solo puede contener letras y espacios.'),

    check('email')
        .trim()
        .isLength({ max: 100 })
        .withMessage('El email no puede exceder los 100 caracteres.')
        .isEmail()
        .withMessage('Debe proporcionar un correo electrónico válido.'),

    check('password')
        .trim()
        .isLength({ min: 8, max: 100 })
        .withMessage('La contraseña debe tener entre 8 y 100 caracteres.')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        .withMessage('La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial.'),

    check('confirmPassword')
        .custom((value, { req }) => value === req.body.password)
        .withMessage('Las contraseñas no coinciden.'),

    check('age')
        .isInt({ min: 18, max: 100 })
        .withMessage('La edad debe ser un número entero entre 18 y 100.'),

    check('phoneNumber')
        .trim()
        .isLength({ min: 10, max: 20 })
        .withMessage('El número de teléfono debe tener entre 10 y 20 caracteres.')
        .matches(/^\d+$/)
        .withMessage('El número de teléfono solo puede contener dígitos.'),

    check('address')
        .trim()
        .isLength({ min: 10, max: 100 })
        .withMessage('La dirección debe tener entre 10 y 100 caracteres.')
        .matches(/^[a-zA-Z0-9\s,.-]+$/)
        .withMessage('La dirección solo puede contener letras, números, espacios y los caracteres , . -'),

    check('sex')
        .toUpperCase()
        .isLength({ min: 1, max: 1 })
        .withMessage('El sexo debe ser "M" o "F".')
        .isIn(['M', 'F'])
        .withMessage('El sexo debe ser "M" (masculino) o "F" (femenino).'),

    check('role')
        .isLength({ min: 4, max: 5 })
        .withMessage('El rol debe ser "user" o "admin".')
        .isIn(['user', 'admin'])
        .withMessage('El rol debe ser "user" (usuario) o "admin" (administrador).'),

    check('dateRegister')
        .trim()
        .isDate()
        .withMessage('La fecha de registro debe ser una fecha válida en formato AAAA-MM-DD.'),

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