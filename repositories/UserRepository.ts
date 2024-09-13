import db from '../config/config-db';
import logIn from '../Dto/LogInDTO';
import User from '../Dto/UserDto';
import bcrypt from 'bcryptjs';


class UserRepository {

    static async add(user: User) {
        const sql = 'INSERT INTO user (email,name,password,address,age,sex,dateRegister,role,phoneNumber) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [user.email, user.name, user.password, user.address, user.age, user.sex, user.dateRegister, user.role, user.phoneNumber];
        return db.execute(sql, values);
    }
    static async getID(email:string) {
        const sql = 'SELECT id FROM user WHERE email = ?';
        const values = [email];
        return db.execute(sql, values);
    }

    static async logIn(user: logIn) {
        const sql = 'SELECT id, password FROM user WHERE email = ?';
        const values = [user.email];
        const result: any = await db.execute(sql, values);

        if (result[0].length > 0) {
            const isPasswordValid = await bcrypt.compare(user.password, result[0][0].password);

            if (isPasswordValid) {
                return { logged: true, status: "Successful authentication", id: result[0][0].id }
            }
            return { logged: false, status: "Invalid username or password" };
        }
        return { logged: false, status: "Invalid username or password" };
    }
}


export default UserRepository;