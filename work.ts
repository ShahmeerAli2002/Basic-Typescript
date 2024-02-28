//Typescript Annotation
//Interface
//Classes
//Types Alias
// Generics

let fullName : string ="jack";
 fullName = 'jhon';

 let num : number;
 num = 1;

 const names: string[] = [];
 names.push("h1");
 
 function sum (a:number,b:number): number{
    return a+b;

 }
 //tuples
 let address : [ number, string, number];
 address = [111,"karachi",31111]

//object
 let person : {name: String};
 person = {name: 'jhon'};
 
 //optional property
 

 let anotherperson: {name: string, age?:number};
anotherperson = {name: 'jhon', age:21};
anotherperson = {name: 'cena'};

function add (a: string, b?: string){
    return b? a+b :a;

}

console.log(add('1','2'))
console.log(add('1',))
 //Interface


interface person{
    name: string;
    id: number;
    age: number;

}

let p: person;
p = {name : 'jhon',age:21, id:1};

//union and intersections type
interface student{
    name: string;
    rollNum: number;
    age: number;
}
 let p1: person | student;
 p1 ={name:'jack',age:2, rollNum:1}

 let p2 : person & student;
 p1 ={name:'jack',age:2, id:1, rollNum:1}


//type alias

type Count = string | number ;
let c: Count;
c = 1;
c = "one"
// c = faslse ; error

 type x = string & number; 

 const n:[]=[]; // never arry
 //n.push("h1");


//class
class Car {
    brand;
  
    constructor(brand :string) {
      this.brand = brand;
    }
  
    getBrand() {
      console.log(this.brand);
    }
  }
  
  let c1 = new Car('Audi');
  c1.getBrand();



  class CarX{    
    constructor(public brand : string) {
      
    }
  
    getBrand() {
      console.log(this.brand);
    }
  }
  
  let c2 = new CarX('BMW');
  c2.getBrand( );                                                                                                                                        
                                                                                                                   


  let myName = ""












  



















































