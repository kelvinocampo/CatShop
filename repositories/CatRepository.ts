import db from '../config/config-db';
import Cat from '../Dto/CatDto';


class CatRepository {

    static async get() {
        const sql = 'SELECT * FROM cat';
        return db.execute(sql);
    }

    static async register(cat: Cat) {
        const sql = 'INSERT INTO cat (name, description, sex, age, weight, dateRegister) VALUES (?,?,?,?,?,?)';
        const values = [cat.name, cat.description, cat.sex, cat.age, cat.weight, cat.dateRegister];
        return db.execute(sql, values);
    }

    static async delete(id: number) {
        const sql = 'DELETE FROM cat WHERE id = ?';
        const values = [id];
        return db.execute(sql, values);
    }

    static async update(cat: Cat, id: number) {
        const sql = 'UPDATE cat SET name = ?, description = ?, sex = ?, age = ?, weight = ?, dateRegister = ? WHERE id = ?';
        const values = [cat.name, cat.description, cat.sex, cat.age, cat.weight, cat.dateRegister, id];
        return db.execute(sql, values);
    }

}


export default CatRepository;