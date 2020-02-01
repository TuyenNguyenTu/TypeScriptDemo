export {}
let message = "Hello Tuyen";
console.log(message);
var name = "Tuyen";
console.log(name);

(function myFunction(params, params2) {
    console.log(params+params2);
})(5,6)

let isBeginner :boolean = true;
let total:number = 10;
let firstName : string ="Nguyễn Tự"
console.log('firstName :', firstName)
let aboutMess = `My Name is ${name} ${firstName}. I am a beginner in TypeScipts`;
console.log(total.toString())
console.log(aboutMess);
console.log(firstName.indexOf("ự"));

let n : null = null;
let u : undefined = undefined;
interface Person{
    name : string,
    age :number
}
let person = <Person>{};
person.name = "Tự Tuyên";
person.age = 18
console.log(person.name + " "+ person.age);


let list_1 : number[] =[1,3,2,4,5];
let list_2 :Array<number> = [1,3,2,5,21];
let person_1 : [string,number] = [person.name,person.age];


//Enum

enum Color{Red, Green, Blue, White};
let c: Color = Color.Green;
console.log(c);


// any
let randomValue :any = 10;
randomValue =true;
randomValue = undefined;
randomValue = "Tuyên";
console.log(randomValue);

class ObjectPerson {
    /**
     *
     */
    name :string;
    age:number;
    address:string
    
    constructor(name:string,age:number,address:string) {

        this.name = name,
        this.age = age,
        this.address = address;
    }
    getInfo(){
        return "Hello: "+ this.name;
    }
}
let Tuyen = new ObjectPerson("Tuyên",22,"Hà Nội");
console.log(Tuyen.name.toUpperCase());
console.log(Tuyen.getInfo());

//convert
let varConvert :unknown = 10;
// var convert = (varConvert as string).toUpperCase();
// console.log(typeof(convert));


function hasName(obj:any): obj is{name:string} {
    return !!obj&& typeof obj==="object" && "name" in obj
}
if(hasName(varConvert)){
    console.log(varConvert.name);
}
let multiType :number|boolean
multiType = 12;
multiType = true;