export class CD {

    constructor(private _cdId: number, private _cdName: string, private _genre: string, private _releaseDate: Date) {
    }

    public get cdId(): number {
        return this._cdId;
    }

    public set cdId(value: number) {
        this._cdId = value;
    }

    public get cdName(): string {
        return this._genre;
    }

    public set cdName(value: string) {
        this._cdName = value;
    }

    public get genre(): string {
        return this._cdName;
    }

    public set genre(value: string) {
        this._genre = value;
    }

    public get releaseDate(): Date {
        return this._releaseDate;
    }

    public set releaseDate(value: Date) {
        this._releaseDate = value;
    }

    getInfo(): string {
        return `CD Id = ${this._cdId}, CD Name = ${this._cdName},Genre = ${this._genre},Release Date = ${this._releaseDate}`;
    }
}