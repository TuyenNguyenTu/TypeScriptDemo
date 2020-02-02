export{}
function info(number1:number, number2:number) {
    return number1+number2;
}
console.log(info(4,5));


//interface
interface Person {
    firstName:string;
    lastName? : string;
};


function fullName(person: Person/*{firstName:string, lastName:string}*/) {
    console.log(person.firstName +" "+ person.lastName)
    
}

let p = {
    firstName:'Nguyễn Tự',
    lastName:'Tuyên'
}
let tuyen = {
    firstName:"Nguyễn Tự"
}
fullName(tuyen);
fullName(p);


/// Class
class Employee {
    employeeName:string;
    employeeAge:number;
    /**
     *
     */
    constructor(name:string, age:number) {
        this.employeeName = name;
        this.employeeAge = age;
    }
    greet(){
        console.log(`Good morning ${this.employeeName} --- ${this.employeeAge} years old`);
    }
}

let emp = new Employee("Tuyên",22);
let emp2 = new Employee("Việt",21);
emp.greet();
emp2.greet();

class Manager extends Employee{
    /**
     *
     */
    private isManager :boolean
    public get value() : boolean {
        return 
    }
    
    public set value(v : boolean) {
        this.isManager = v;
    }
    
    
    constructor(managerName:string, managerAge:number) {
        super(managerName,managerAge);
        
    }
    
    delegateWork(){
        console.log(`Manager delegating task`);
    }
}
let m1 = new Manager("Tuyên",12);


class Animal{
    animalName:string;
    Weight:number;
    Height:number;
    /**
     *
     */
    constructor(name:string, weight:number, height:number) {
        this.animalName = name;
        this.Height = height;
        this.Weight  = weight;
        
    }
}
class Dog extends Animal{
    /**
     *
     */
    private Skin : string;
    constructor(name,weigh,height,skin:string) {
        super(name,weigh,height);
        this.Skin = skin;
        
    }
    bark(){
        console.log(`${this.animalName} kêu gâu gâu cậu ${this.Skin}`);
    }
}
let dog = new Dog("chó",12,21,"Vàng");
dog.bark();
/// const phải gán g.trị ngay sau khi nó khởi tạo, mặc định const là static
/// readonly Một biến Readonly có thể được khởi tạo vào thời điểm khai báo hoặc trong constructor của class đó
