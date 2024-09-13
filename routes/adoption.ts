import express from "express";

import GetAllController from "../controllers/adoption/GetAllController";

import RegisterController from "../controllers/adoption/RegisterController";
import RegisterValidator from "../middleware/adoption/RegisterValidator";

import UpdateController from "../controllers/adoption/PutController";
import UpdateValidator from "../middleware/adoption/PutValidator";

import DeleteController from "../controllers/adoption/DeleteController";
import DeleteValidator from "../middleware/adoption/DeleteValidator";

const router = express.Router();

router.get('/', GetAllController);
router.post('/:id', RegisterValidator.validatorParams, RegisterValidator.validator, RegisterController);
router.put('/:id', UpdateValidator.validatorParams, UpdateValidator.validator, UpdateController)
router.delete('/:id', DeleteValidator.validatorParams, DeleteValidator.validator, DeleteController)

export default router;