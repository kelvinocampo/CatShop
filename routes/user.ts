import express from "express";
import RegisterController from '../controllers/user/RegisterController';
import RegisterValidator from '../middleware/user/RegisterValidator';
import LoginController from "../controllers/user/LogInController";
import LoginValidator from "../middleware/user/LoginValidator";
import ProfileController from "../controllers/user/ProfileController";
import verifyToken from "../middleware/VerifyToken";
const router = express.Router();


router.post('/register', RegisterValidator.validatorParams, RegisterValidator.validator, RegisterController);
router.post('/login', LoginValidator.validatorParams, LoginValidator.validator, LoginController);
router.get('/profile', verifyToken, ProfileController);


export default router;