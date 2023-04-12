interface User  {
    fname:string,
    lname:string,
    age:number
    city?:string,
    dob:Date
}

const user = {
    fname:"Jhon",
    lname:"doe",
    age:21,
    city:'hgihi',
    dob: new Date()
}
interface User  {
    
}

console.log('user :>> ', user);