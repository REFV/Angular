import { CD } from './cd';
import { InterNationalCd } from './internationalCd';
import { SpecialCd } from './specialCd';

let myCd = new CD(1,"Avengers1","Action",new Date());
let mySplCd = new SpecialCd(2,"Avengers2","Action",new Date(),"3D");
let myIntrCd = new InterNationalCd(3,"Avengers endgame","Action",new Date(),"English");

let theCd: CD[] = [];

theCd.push(myCd);
theCd.push(mySplCd);
theCd.push(myIntrCd);

for (let tempCd of theCd) {
    console.log(tempCd.getInfo());
}

