"use strict";
//object in typescript
// interface Obj  {
//     height : number;
//     weight : number ;
//     gender? : boolean;
// };
// const obj:Obj = {
//     height : 434,
//     weight : 345,
const myObj = {
    name: "siam",
    email: "siam@gmail.com"
};
const getName = () => {
    return myObj["name"];
};
const getEmail = () => {
    return myObj["email"];
};
const getData = (key) => {
    return myObj[key];
};
