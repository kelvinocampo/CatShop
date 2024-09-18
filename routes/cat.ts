import express from "express";

import GetAllController from "../controllers/cat/GetAllController";

import RegisterController from "../controllers/cat/RegisterController";
import RegisterValidator from "../middleware/cat/RegisterValidator";

import UpdateController from "../controllers/cat/UpdateController";
import UpdateValidator from "../middleware/cat/UpdateValidator";

import DeleteController from "../controllers/cat/DeleteController";
import DeleteValidator from "../middleware/cat/DeleteValidator";
import verifyToken from "../middleware/VerifyToken";

const router = express.Router();

router.get('/', GetAllController);
router.post('/', verifyToken, RegisterValidator.validatorParams, RegisterValidator.validator, RegisterController);
router.put('/:id', verifyToken, UpdateValidator.validatorParams, UpdateValidator.validator, UpdateController)
router.delete('/:id', verifyToken, DeleteValidator.validatorParams, DeleteValidator.validator, DeleteController)

export default router;