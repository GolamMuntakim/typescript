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
// interface product { name:string, stock: number, price:number }
// type GetDataTYpe = (product:product)=> void
// const getData:GetDataTYpe = (product) => {
// console.log(product)
// }
// const productOne:product = {
//     name:"Mackbook", price:46, stock:45
// }
// getData(productOne)


//Never type 
// const errorHandler = () =>{
//     throw new Error()
// }

// type themeMode = "light" | "dark"
// const mode:themeMode = "dark"



//classes in typescript
// class Player {
//     public readonly id: string
//     constructor(private height:number, public weight:number,protected power?:number){
//         this.id = String(Math.random()*100)
//     }
//    get getMyHeight():number {
//     return this.height
//    } 
//    set changeHeight(value:number) {
//      this.height = value
//    } 
// }
// const siam = new Player(100,250, 23);
// console.log("height", siam.getMyHeight)
// siam.changeHeight = 500
// console.log("height", siam.getMyHeight)
// class player2 extends Player{
//     special : boolean
//     constructor(special : boolean, height: number ,power: number , weight : number ){
//         super(height, weight , power)
//         this.special = special
//     }
//     getMyPower=()=> this.power
// }
// const result = new player2(true, 100,250, 23);
// console.log("result", result.weight)
// console.log("power", result.getMyPower())
// console.log("id", result.id)

interface ProductType{
    name : string,
    price : number,
    stock : number,
    offer?: boolean,
}
interface GiveId{
    getId: ()=> string;
}
class Product implements ProductType, GiveId{
    private id : string = String(Math.random()*1000);
    constructor(public name:string,public price:number,public stock:number){}
    getId = () => this.id;
    
}
const product1 = new Product("Mackbook", 2000, 20)
console.log(product1)
