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

// interface ProductType{
//     name : string,
//     price : number,
//     stock : number,
//     offer?: boolean,
// }
// interface GiveId{
//     getId: ()=> string;
// }
// class Product implements ProductType, GiveId{
//     private id : string = String(Math.random()*1000);
//     constructor(public name:string,public price:number,public stock:number){}
//     getId = () => this.id;
    
// }
// const product1 = new Product("Mackbook", 2000, 20)
// console.log(product1)


//Type assertion
// const btn = document.getElementById("#btn")! ;
// const btn = document.getElementById("#btn") as HTMLElement ;
// const btn = <HTMLElement>document.getElementById("#btn") ;
// btn.onclick
// const img = document.getElementById("#myImg") as HTMLImageElement ;
// const img = document.querySelector("img")!;
// img.src

// const form = document.getElementById("myform") as HTMLFormElement ;
// const myInput = document.querySelector("form > input") as HTMLInputElement ;
// form.onsubmit = (e:SubmitEvent) =>{
//     e.preventDefault()
//     const value = Number(myInput.value)
//     const h2 = document.createElement("h2");
//     h2.textContent = String(value + 20)
//     const body = document.querySelector('body')!;
//     body.append(h2)
// }
// interface person{
//     [key:string] : string,
// }
// const myObj:person = {
//     name : "siam",
//     email : "siam@gmail.com"
// }
// const getName = ():string =>{
//     return myObj["name"]
// }
// const getEmail = ():string  =>{
//     return myObj["email"]
// }
// const getData = (key: keyof person):string =>{
//     return myObj[key];
// }
// getData("name")



//Type utility
// -- Partial type
// type User = {
//     name : string,
//     email : string
// }
// type User2 = Partial<User>


//Required Type -- oposite of person
// type User = {
//     name?: string,
//     email: string
// }
// const User : Required<User>={
//     name : "siam",
//     email : "siam@gmail.com"
// }


//Readonly<Type> -- makes every property readonly 
// type User = {
//     name : string,
//     email : string
// }
// const user:Readonly<User>={
//     name : "siam",
//     email : "siam@gmail.com"
// }



//Record<keys, Type>
// type User = {
//     name : string;
//     email : string;
// }
// type User2 = Record<"name" | "email" , string>


//Example 
// interface UserInfo {
//     age : number;
// }
// type UserName = "john" | "andrew" | "elon";

// const users:Record<UserName, UserInfo> = {
//     john : {age : 34},
//     andrew : {age : 34},
//     elon : {age : 34}
// }




//pick<Type , keys>
// interface OrderInfo {
//     readonly id : string;
//     user : string ;
//     city : string ;
//     state : string ;
//     country : string ;
//     status : string ;
// }
// type shippingInfo = Pick<OrderInfo , "city" | "state" | "country">


//Omit<Type , keys>
// interface OrderInfo {
//     readonly id : string;
//     user : string ;
//     city : string ;
//     state : string ;
//     country : string ;
//     status : string ;
// }
// type Random = Omit<OrderInfo , "city" | "state" | "country">



//Exclude<Type , ExcludeUnion>
// type union = string | number | boolean
// type Random = Exclude<union , boolean>

//Extract<Type , Union>
// type union = string | number | boolean
// type Random = Extract<union , boolean>

//NonNullable<Type>
// type union = string | number | boolean | null | undefined
// type random = NonNullable<union>



//parameters<Type>
// const myfunc = (a:number , b:string) =>{
//     console.log(a+b)
// }
// type Random = Parameters<typeof myfunc>


//ConstructorParameters<Type>
// class SampleClass{
//     constructor(public s:string , public t:string){}
// }
// type random = ConstructorParameters<typeof SampleClass>


//ReturnType<Type>
// const myfunc = (a : number , b:string ):string =>{
//    return a + b
// }
// type FuncType = ReturnType<typeof myfunc>



// InstanceType<Type>
// class SampleClass{
//     constructor(public s:string , public t:string){}
// }
// type random = InstanceType<typeof SampleClass>

// const user:random = {
//     s:"44",
//     t:"34"
// }
