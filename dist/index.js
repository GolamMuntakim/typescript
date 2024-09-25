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
const users = [
    {
        name: "siam",
        age: 36
    },
    {
        name: "arman",
        age: 16
    }
];
const filterBypeoples = (arr, property, value) => {
    return arr.filter(item => item[property] === value);
};
const filteredPeopleByName = filterBypeoples(users, "name", "arman");
console.log(filteredPeopleByName);
