import express from "express";
import RegisterController from '../controllers/user/RegisterController';
import RegisterValidator from '../middleware/user/RegisterValidator';
import LoginController from "../controllers/user/LogInController";
import LoginValidator from "../middleware/user/LoginValidator";
const router = express.Router();


router.post('/register', RegisterValidator.validatorParams, RegisterValidator.validator, RegisterController);
router.post('/login', LoginValidator.validatorParams, LoginValidator.validator, LoginController);


export default router;