import { CD } from './cd';

export class SpecialCd extends CD
{
    constructor(splCdId: number, splCdName: string, splCdGenre: string, splCdReleaseDate: Date, private _splFeature: string)
    {
        super(splCdId,splCdName,splCdGenre,splCdReleaseDate);
    }

    public get splFeature(): string {
        return this._splFeature;
    }
    
    public set splFeature(value: string) {
        this._splFeature = value;
    }

    getInfo(): string {
        return super.getInfo() + `, Special Feature = ${this._splFeature}`;
    }
}