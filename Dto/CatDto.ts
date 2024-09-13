class Cat {
    private _name: string;
    private _description: string;
    private _sex: string;
    private _age: number;
    private _weight: number;
    private _dateRegister: string;

    // Constructor
    constructor(
        name: string,
        description: string,
        sex: string,
        age: number,
        weight: number,
        dateRegister: string
    ) {
        this._name = name;
        this._description = description;
        this._sex = sex;
        this._age = age;
        this._weight = weight;
        this._dateRegister = dateRegister;
    }

    // Properties
    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get sex(): string {
        return this._sex;
    }

    set sex(sex: string) {
        this._sex = sex;
    }

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        this._age = age;
    }

    get weight(): number {
        return this._weight;
    }

    set weight(weight: number) {
        this._weight = weight;
    }

    get dateRegister(): string {
        return this._dateRegister;
    }

    set dateRegister(dateRegister: string) {
        this._dateRegister = dateRegister;
    }
}

export default Cat;