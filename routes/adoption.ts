import express from "express";

import GetAllController from "../controllers/adoption/GetAllController";

import RegisterController from "../controllers/adoption/RegisterController";
import RegisterValidator from "../middleware/adoption/RegisterValidator";

import UpdateController from "../controllers/adoption/PutController";
import UpdateValidator from "../middleware/adoption/PutValidator";

import DeleteController from "../controllers/adoption/DeleteController";
import DeleteValidator from "../middleware/adoption/DeleteValidator";
import verifyToken from "../middleware/VerifyToken";

import GetValidator from "../middleware/adoption/GetValidator";

const router = express.Router();

router.get('/', verifyToken, GetValidator.validatorParams, GetValidator.validator, GetAllController);
router.post('/:id', verifyToken, RegisterValidator.validatorParams, RegisterValidator.validator, RegisterController);
router.put('/:id', verifyToken, UpdateValidator.validatorParams, UpdateValidator.validator, UpdateController);
router.delete('/:id', verifyToken, DeleteValidator.validatorParams, DeleteValidator.validator, DeleteController);

export default router;