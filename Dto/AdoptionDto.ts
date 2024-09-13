class Adoption {
    private _catId: number;
    private _userId: number;
    private _dateAdoption: string;

    // Constructor
    constructor(
        catId: number,
        userId: number,
        dateAdoption: string
    ) {
        this._catId = catId;
        this._userId = userId;
        this._dateAdoption = dateAdoption;
    }

    // Properties
    get catId(): number {
        return this._catId;
    }

    set catId(catId: number) {
        this._catId = catId;
    }

    get userId(): number {
        return this._userId;
    }

    set userId(userId: number) {
        this._userId = userId;
    }

    get dateAdoption(): string {
        return this._dateAdoption;
    }

    set dateAdoption(dateAdoption: string) {
        this._dateAdoption = dateAdoption;
    }
}

export default Adoption;
