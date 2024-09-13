import Adoption from '../Dto/AdoptionDto';
import AdoptionRepository from '../repositories/AdoptionRepository';


class AdoptionService {
    static async get() {
        return await AdoptionRepository.get();
    }

    static async register(adoption: Adoption) {
        return await AdoptionRepository.register(adoption);
    }

    static async update(id:number) {
        return await AdoptionRepository.update(id);
    }

    static async delete(id: number) {
        return await AdoptionRepository.delete(id);
    }
}

export default AdoptionService;