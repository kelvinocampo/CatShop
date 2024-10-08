import UserRepository from '../repositories/UserRepository';
import User from '../Dto/UserDto';
import generateHash from '../Helpers/generateHash';
import logIn from '../Dto/LogInDTO';


class UserService {
    static async register(user: User) {
        user.password = await generateHash(user.password);
        return await UserRepository.add(user);
    }
    static async getByID(id:number) {
        return await UserRepository.getByID(id);
    }
    
    static async logIn(user: logIn) {
        return await UserRepository.logIn(user);
    }
}

export default UserService;