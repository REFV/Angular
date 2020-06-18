"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cd_1 = require("./cd");
var internationalCd_1 = require("./internationalCd");
var specialCd_1 = require("./specialCd");
var myCd = new cd_1.CD(1, "Avengers1", "Action", new Date());
var mySplCd = new specialCd_1.SpecialCd(2, "Avengers2", "Action", new Date(), "3D");
var myIntrCd = new internationalCd_1.InterNationalCd(3, "Avengers endgame", "Action", new Date(), "English");
var theCd = [];
theCd.push(myCd);
theCd.push(mySplCd);
theCd.push(myIntrCd);
for (var _i = 0, theCd_1 = theCd; _i < theCd_1.length; _i++) {
    var tempCd = theCd_1[_i];
    console.log(tempCd.getInfo());
}
