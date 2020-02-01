"use strict";
exports.__esModule = true;
function info(number1, number2) {
    return number1 + number2;
}
console.log(info(4, 5));
;
function fullName(person /*{firstName:string, lastName:string}*/) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Nguyễn Tự',
    lastName: 'Tuyên'
};
fullName(p);
