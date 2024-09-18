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

    static async getByID(id: number) {
        const sql = 'SELECT * FROM user WHERE id = ?';
        const values = [id];
        return db.execute(sql, values);
    }
    
    static async logIn(user: logIn) {
        const sql = 'SELECT id, password, role FROM user WHERE email = ?';
        const values = [user.email];
        const result: any = await db.execute(sql, values);

        if (result[0].length > 0) {
            const isPasswordValid = await bcrypt.compare(user.password, result[0][0].password);

            if (isPasswordValid) {
                return { logged: true, status: "Successful authentication", data: result[0][0] }
            }
            return { logged: false, status: "Invalid username or password" };
        }
        return { logged: false, status: "Invalid username or password" };
    }
}


export default UserRepository;