"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CD = void 0;
var CD = /** @class */ (function () {
    function CD(_cdId, _cdName, _genre, _releaseDate) {
        this._cdId = _cdId;
        this._cdName = _cdName;
        this._genre = _genre;
        this._releaseDate = _releaseDate;
    }
    Object.defineProperty(CD.prototype, "cdId", {
        get: function () {
            return this._cdId;
        },
        set: function (value) {
            this._cdId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CD.prototype, "cdName", {
        get: function () {
            return this._genre;
        },
        set: function (value) {
            this._cdName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CD.prototype, "genre", {
        get: function () {
            return this._cdName;
        },
        set: function (value) {
            this._genre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CD.prototype, "releaseDate", {
        get: function () {
            return this._releaseDate;
        },
        set: function (value) {
            this._releaseDate = value;
        },
        enumerable: false,
        configurable: true
    });
    CD.prototype.getInfo = function () {
        return "CD Id = " + this._cdId + ", CD Name = " + this._cdName + ",Genre = " + this._genre + ",Release Date = " + this._releaseDate;
    };
    return CD;
}());
exports.CD = CD;
