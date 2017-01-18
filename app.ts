
let myAge = 34;
let myName = 'Mayur';
//myAge = "ageless";

let realyAge = "ageless";
//realyAge = 34;

//Array of String only
let sampleArray = ["test", "data"];
//sampleArray = [10];

//Tuple type
let address:any[] = ["Link Road",602];

//Enum
enum Color{
    Green, //0 - This is by default value
    Blue = 101, //101 - If I declare blue 101, then Red will become 102
    Red
};

let myColor:Color = Color.Red;
console.log(myColor);

//Any Type

var phone:any = "OnePlusX";
console.log(phone);
phone = ["One plus X", "One plus 3","One plus 2","One plus 1"];
console.log(phone[1]);


//functions
function returnMyName() : string {
    return myName;
}

console.log(returnMyName());

function sayHello() : void {
    //Function not returning anything
    console.log("Say Hellow");
}

//Argument Types

function multiply(val1:number, val2:number): number{
    return val1 * val2;
}

console.log(multiply(5,2));

//function as a type
let myMultiply : (a:number, b:number)=> number;
//will give error //myMultiply = sayHello();
myMultiply = multiply;
console.log(myMultiply(6,3));

//objects
let userData : {name:string,age:number} = {
    name:"Mayur",
    age:34
};


//complex Object
let complex : {data:number[],output: (all: boolean) => number[]} = {
	data: [10,3.9,11],
	output: function (all: boolean) : number[] {
		return this.data;
	}
}

//type alieas

type Complex = {data:number[],output: (all: boolean) => number[]}

let complex2 : Complex  = {
	data:[10,3.9,11],
	output: function (all: boolean) : number[] {
		return this.data;
	}	
}

//Union types

let myUnionType : number | string = 27;

myUnionType = "28";

//Check type od variable
if(typeof myUnionType == "string"){
	console.log("its string");
}

//classes
class Person {
	name:string;
	private type:string;
	protected age:number;

	constructor(name:string, public userName:string){
		this.name = name;
		this.userName = userName;
	}

	printAge(){
		console.log(this.age);
	}

	setType(type:string){
		this.type = type;
		console.log(this.type);
	}
}

let person = new Person("Mayur","mayurthakor");
console.log(person);
person.printAge();
person.setType("Awesome bro");


//Inheritence
class Mayur extends Person {
	name = "Mayur";
}

const mark = new Mayur("Anna", "mark");

console.log(mark)

//Abstract classes
abstract class Project {
	projectName : string = "Default";
	budget : number;

	abstract changeName(name:string) : void;

	calcBudget(){
		return this.budget * 2;
	}
}

class RiverProject extends Project{
	changeName(name:string):void{
		this.projectName = name;
	}
}

let newProject = new RiverProject();
console.log(newProject);
newProject.changeName("Narmdada River Project");
console.log(newProject);