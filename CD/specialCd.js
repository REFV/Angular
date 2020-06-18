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
exports.SpecialCd = void 0;
var cd_1 = require("./cd");
var SpecialCd = /** @class */ (function (_super) {
    __extends(SpecialCd, _super);
    function SpecialCd(splCdId, splCdName, splCdGenre, splCdReleaseDate, _splFeature) {
        var _this = _super.call(this, splCdId, splCdName, splCdGenre, splCdReleaseDate) || this;
        _this._splFeature = _splFeature;
        return _this;
    }
    Object.defineProperty(SpecialCd.prototype, "splFeature", {
        get: function () {
            return this._splFeature;
        },
        set: function (value) {
            this._splFeature = value;
        },
        enumerable: false,
        configurable: true
    });
    SpecialCd.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + (", Special Feature = " + this._splFeature);
    };
    return SpecialCd;
}(cd_1.CD));
exports.SpecialCd = SpecialCd;
