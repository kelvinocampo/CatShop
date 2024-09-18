import Cat from '../Dto/CatDto';
import CatRepository from '../repositories/CatRepository';


class CatService {
    static async get() {
        return await CatRepository.get();
    }

    static async getByID(id:number) {
        return await CatRepository.getByID(id);
    }

    static async register(cat: Cat) {
        return await CatRepository.register(cat);
    }

    static async update(cat: Cat, id: number) {
        return await CatRepository.update(cat, id);
    }

    static async delete(id: number) {
        return await CatRepository.delete(id);
    }
}

export default CatService;