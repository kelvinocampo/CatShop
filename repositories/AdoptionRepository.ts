import db from '../config/config-db';
import Adoption from '../Dto/AdoptionDto';


class AdoptionRepository {

    static async get() {
        const sql = 'SELECT * FROM adoption';
        return db.execute(sql);
    }

    static async register(adoption: Adoption) {
        const sql = 'INSERT INTO adoption (cat,user,dateAdoption,status) VALUES (?, ?, ?, ?)';
        const values = [adoption.catId, adoption.userId, adoption.dateAdoption, "IN PROGRESS"];
        return db.execute(sql, values);
    }

    static async delete(id: number) {
        const sql = 'DELETE FROM adoption WHERE id = ?';
        const values = [id];
        return db.execute(sql, values);
    }

    static async update(id: number) {
        const sql = 'UPDATE adoption SET status = ? WHERE id = ?';
        const values = ["COMPLETE", id];
        return db.execute(sql, values);
    }
}


export default AdoptionRepository;