class Contact{
    id;
    name;
    birthDate;
}

//here you set x to the value 5, a number
let x = 5
//here b has ANY type
let b 
//here you set c to the type number, so it cannot be any other type
let c: number
let d: string
let e: boolean
let f: Date
let g: string[]

//here h can be any type
let h: any
// you can also cast to the any type(Power of JavaScript), but this means you are not checking the type anymore, which is the point of typescript
c = "1234" as any
