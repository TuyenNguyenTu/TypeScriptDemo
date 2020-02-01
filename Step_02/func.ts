export{}
function info(number1:number, number2:number) {
    return number1+number2;
}
console.log(info(4,5));


//interface
interface Person {
    firstName:string;
    lastName : string;
};


function fullName(person: Person/*{firstName:string, lastName:string}*/) {
    console.log(person.firstName +" "+ person.lastName)
    
}

let p = {
    firstName:'Nguyễn Tự',
    lastName:'Tuyên'
}
fullName(p);

