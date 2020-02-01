"use strict";
exports.__esModule = true;
var message = "Hello Tuyen";
console.log(message);
var name = "Tuyen";
console.log(name);
(function myFunction(params, params2) {
    console.log(params + params2);
})(5, 6);
var isBeginner = true;
var total = 10;
var firstName = "Nguyễn Tự";
console.log('firstName :', firstName);
var aboutMess = "My Name is " + name + " " + firstName + ". I am a beginner in TypeScipts";
console.log(total.toString());
console.log(aboutMess);
console.log(firstName.indexOf("ự"));
var n = null;
var u = undefined;
var person = {};
person.name = "Tự Tuyên";
person.age = 18;
console.log(person.name + " " + person.age);
var list_1 = [1, 3, 2, 4, 5];
var list_2 = [1, 3, 2, 5, 21];
var person_1 = [person.name, person.age];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["White"] = 3] = "White";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
// any
var randomValue = 10;
randomValue = true;
randomValue = undefined;
randomValue = "Tuyên";
console.log(randomValue);
var ObjectPerson = /** @class */ (function () {
    function ObjectPerson(name, age, address) {
        this.name = name,
            this.age = age,
            this.address = address;
    }
    ObjectPerson.prototype.getInfo = function () {
        return "Hello: " + this.name;
    };
    return ObjectPerson;
}());
var Tuyen = new ObjectPerson("Tuyên", 22, "Hà Nội");
console.log(Tuyen.name.toUpperCase());
console.log(Tuyen.getInfo());
//convert
var varConvert = 10;
// var convert = (varConvert as string).toUpperCase();
// console.log(typeof(convert));
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(varConvert)) {
    console.log(varConvert.name);
}
var multiType;
multiType = 12;
multiType = true;
