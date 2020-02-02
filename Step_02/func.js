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
var tuyen = {
    firstName: "Nguyễn Tự"
};
fullName(tuyen);
fullName(p);
/// Class
var Employee = /** @class */ (function () {
    /**
     *
     */
    function Employee(name, age) {
        this.employeeName = name;
        this.employeeAge = age;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning " + this.employeeName + " --- " + this.employeeAge + " years old");
    };
    return Employee;
}());
var emp = new Employee("Tuyên", 22);
var emp2 = new Employee("Việt", 21);
emp.greet();
emp2.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName, managerAge) {
        return _super.call(this, managerName, managerAge) || this;
    }
    Object.defineProperty(Manager.prototype, "value", {
        get: function () {
            return;
        },
        set: function (v) {
            this.isManager = v;
        },
        enumerable: true,
        configurable: true
    });
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating task");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Tuyên", 12);
var Animal = /** @class */ (function () {
    /**
     *
     */
    function Animal(name, weight, height) {
        this.animalName = name;
        this.Height = height;
        this.Weight = weight;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, weigh, height, skin) {
        var _this = _super.call(this, name, weigh, height) || this;
        _this.Skin = skin;
        return _this;
    }
    Dog.prototype.bark = function () {
        console.log(this.animalName + " k\u00EAu g\u00E2u g\u00E2u c\u1EADu " + this.Skin);
    };
    return Dog;
}(Animal));
var dog = new Dog("chó", 12, 21, "Vàng");
dog.bark();
/// const phải gán g.trị ngay sau khi nó khởi tạo, mặc định const là static
/// readonly Một biến Readonly có thể được khởi tạo vào thời điểm khai báo hoặc trong constructor của class đó
