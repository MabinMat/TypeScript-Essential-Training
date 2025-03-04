type ContactName = string;
type ContactStatus = "active" | "inactive" | "new";
type ContactBirthDate = Date | number | string;

interface Contact1 {
    idNum: number;
    nam: ContactName;
    birthdate?: ContactBirthDate;
    status?: ContactStatus;
}

let primaryContact: Contact1 = {
    idNum: 123,
    nam: "Jamie John",
    status: "active"}


//This type can only be types that are in the Contact1 interface
type ContactFields = keyof Contact1;

//this function will accept a type T and only return a value if propertyName is an actual property of T
function getValue<T>(source: T, propertyName: keyof T){
    return source[propertyName];
}

const value = getValue(primaryContact, "status" )


// the record tpye helps bring the flexibility of JavaScript objects to TypeScript
// the first string is the property(name is a valid string), and the second string is the value(bruce wayne)
let s : Record<string,string>= {name: "bruce Wayne"};
 
// the first string is the property(name is a valid string), and the value assgined to the string can be a string or a number
let y : Record<string,string | number>= {name: "bruce Wayne"};
y.number = 1234;

// the first string is the property(name is a valid string), and the value assgined to the string can be a string,numberbool, or func
let z : Record<string,string | number | boolean | Function>= {name: "bruce Wayne"};
z.number = 1234;
z.active = true;
z.log = () => console.log("Awesome!");
