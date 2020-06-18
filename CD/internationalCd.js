"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterNationalCd = void 0;
var cd_1 = require("./cd");
var InterNationalCd = /** @class */ (function (_super) {
    __extends(InterNationalCd, _super);
    function InterNationalCd(intrCdId, intrCdName, intrCdGenre, intrCdReleaseDate, _language) {
        var _this = _super.call(this, intrCdId, intrCdName, intrCdGenre, intrCdReleaseDate) || this;
        _this._language = _language;
        return _this;
    }
    Object.defineProperty(InterNationalCd.prototype, "language", {
        get: function () {
            return this._language;
        },
        set: function (value) {
            this._language = value;
        },
        enumerable: false,
        configurable: true
    });
    InterNationalCd.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + (", Language = " + this._language);
    };
    return InterNationalCd;
}(cd_1.CD));
exports.InterNationalCd = InterNationalCd;
