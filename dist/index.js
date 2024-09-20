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
const user = { name: "siam", age: 20 };
const func = (n, o) => {
    return { n, o };
};
const ans = func(user, user);
console.log(ans);
