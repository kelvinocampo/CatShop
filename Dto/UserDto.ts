class User {
    private _name: string;
    private _password: string;
    private _address: string;
    private _age: number;
    private _sex: string;
    private _dateRegister: string;
    private _role: string;
    private _phoneNumber: string;
    private _email: string;

    // Constructor
    constructor(
        name: string,
        password: string,
        address: string,
        age: number,
        sex: string,
        dateRegister: string,
        role: string,
        phoneNumber: string,
        email: string
    ) {
        this._name = name;
        this._password = password;
        this._address = address;
        this._age = age;
        this._sex = sex;
        this._dateRegister = dateRegister;
        this._role = role;
        this._phoneNumber = phoneNumber;
        this._email = email;
    }

    // Properties
    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }

    get address(): string {
        return this._address;
    }

    set address(address: string) {
        this._address = address;
    }

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        this._age = age;
    }

    get sex(): string {
        return this._sex;
    }

    set sex(sex: string) {
        this._sex = sex;
    }

    get dateRegister(): string {
        return this._dateRegister;
    }

    set dateRegister(dateRegister: string) {
        this._dateRegister = dateRegister;
    }

    get role(): string {
        return this._role;
    }

    set role(role: string) {
        this._role = role;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber: string) {
        this._phoneNumber = phoneNumber;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }
}

export default User;