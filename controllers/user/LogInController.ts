import { Request, Response } from "express";
import User from '../../Dto/UserDto';
import UserService from '../../services/UserServices';
import generateToken from '../../Helpers/generateToken';
import logIn from "../../Dto/LogInDTO";


let login = async (req: Request, res: Response) => {
  try {
    const {
      email,
      password
    } = req.body;
    const login = await UserService.logIn(new logIn(email, password))
    const TOKEN_DURATION = 60
    if (login.logged) {
      let token = generateToken({ id: login.data.id, role: login.data.role }, process.env.KEY_TOKEN, TOKEN_DURATION)
      return res.status(200).json({
        status: login.status,
        token: token
      });
    }
    return res.status(401).json({
      status: login.status
    });
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default login;