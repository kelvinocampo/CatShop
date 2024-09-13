import { Request, Response } from "express";
import UserService from "../../services/UserServices";
import User from "../../Dto/UserDto";


let register = async (req: Request, res: Response) => {
  try {
    const {
      email,
      name,
      password,
      address,
      age,
      sex,
      dateRegister,
      role,
      phoneNumber
    } = req.body;
    const registerUser = await UserService.register(new User(name, password, address, age, sex, dateRegister, role, phoneNumber, email))
    
    return res.status(201).json(
      { status: 'register ok' }
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}
export default register;