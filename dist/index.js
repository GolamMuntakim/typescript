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
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = String(Math.random() * 1000);
        this.getId = () => this.id;
    }
}
const product1 = new Product("Mackbook", 2000, 20);
console.log(product1);
