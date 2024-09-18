//object in typescript
// interface Obj  {
//     height : number;
//     weight : number ;
//     gender? : boolean;
// };
// const obj:Obj = {
//     height : 434,
//     weight : 345,
   
// }
// const obj2:Obj = {
//     height : 434,
//     weight : 345, 
  
// }

// function in typescript
// type FuncType = (n:number , m:number) => number
// const func:FuncType = (a,b) =>{
//     return a*b;
// };
// console.log(func(2,3))

//parameter 
// type FuncType = (n:number , m:number ,l?:number) => number ;
// const func:FuncType = (n,m,l=20) =>{
//     return n*m*l;
// }
//  func(25,23);


 // Rest operator 
//  type FuncType = (...m : number[]) => number[];
//  const func:FuncType = (...m) =>{
//     return m
//  }
//  func(23,2,344,5,5,4)


//fuction with object 
interface product { name:string, stock: number, price:number }
type GetDataTYpe = (product:product)=> void
const getData:GetDataTYpe = (product) => {
console.log(product)
}
const productOne:product = {
    name:"Mackbook", price:46, stock:45
}
getData(productOne)