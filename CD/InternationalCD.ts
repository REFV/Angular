import { CD } from './cd';

export class InterNationalCd extends CD
{
    constructor(intrCdId: number, intrCdName: string, intrCdGenre: string, intrCdReleaseDate: Date, private _language: string)
    {
        super(intrCdId,intrCdName,intrCdGenre,intrCdReleaseDate);
    }

    public get language(): string {
        return this._language;
    }
    
    public set language(value: string) {
        this._language = value;
    }

    getInfo(): string {
        return super.getInfo() + `, Language = ${this._language}`;
    }
}