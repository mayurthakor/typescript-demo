var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var myAge = 34;
var myName = 'Mayur';
//myAge = "ageless";
var realyAge = "ageless";
//realyAge = 34;
//Array of String only
var sampleArray = ["test", "data"];
//sampleArray = [10];
//Tuple type
var address = ["Link Road", 602];
//Enum
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
    Color[Color["Red"] = 102] = "Red";
})(Color || (Color = {}));
;
var myColor = Color.Red;
console.log(myColor);
//Any Type
var phone = "OnePlusX";
console.log(phone);
phone = ["One plus X", "One plus 3", "One plus 2", "One plus 1"];
console.log(phone[1]);
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
function sayHello() {
    //Function not returning anything
    console.log("Say Hellow");
}
//Argument Types
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(5, 2));
//function as a type
var myMultiply;
//will give error //myMultiply = sayHello();
myMultiply = multiply;
console.log(myMultiply(6, 3));
//objects
var userData = {
    name: "Mayur",
    age: 34
};
//complex Object
var complex = {
    data: [10, 3.9, 11],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [10, 3.9, 11],
    output: function (all) {
        return this.data;
    }
};
//Union types
var myUnionType = 27;
myUnionType = "28";
//Check type od variable
if (typeof myUnionType == "string") {
    console.log("its string");
}
//classes
var Person = (function () {
    function Person(name, userName) {
        this.userName = userName;
        this.name = name;
        this.userName = userName;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Mayur", "mayurthakor");
console.log(person);
person.printAge();
person.setType("Awesome bro");
//Inheritence
var Mayur = (function (_super) {
    __extends(Mayur, _super);
    function Mayur() {
        var _this = _super.apply(this, arguments) || this;
        _this.name = "Mayur";
        return _this;
    }
    return Mayur;
}(Person));
var mark = new Mayur("Anna", "mark");
console.log(mark);
//Abstract classes
var Project = (function () {
    function Project() {
        this.projectName = "Default";
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var RiverProject = (function (_super) {
    __extends(RiverProject, _super);
    function RiverProject() {
        return _super.apply(this, arguments) || this;
    }
    RiverProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return RiverProject;
}(Project));
var newProject = new RiverProject();
console.log(newProject);
newProject.changeName("Narmdada River Project");
console.log(newProject);
