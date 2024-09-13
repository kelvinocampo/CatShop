class logIn {
    private _password: string;
    private _email: string;

    // Constructor
    constructor(
        email: string,
        password: string
    ) {
        this._password = password;
        this._email = email;
    }

    // Properties
    get password(): string {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }
}

export default logIn;