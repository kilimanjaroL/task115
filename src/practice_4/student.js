"use strict";
import Person from "./person.js";
class Student extends Person{
    constructor(name,age,c){
        super(name,age);
        this.klass = c;
    }
    introduce(){
        return "My name is "+this.name+". I am "+this.age+" years old. "+"I am a Student. I am at Class "+this.klass+".";
    }
}
module.exports = Student;
