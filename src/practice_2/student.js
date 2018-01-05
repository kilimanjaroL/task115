"use strict";
import Person from "./person.js";
class Student extends Person{
    constructor(name,age,c){
        super(name,age);
        this.klass = c;
    }
    introduce(){
        return "I am a Student. I am at Class "+this.klass+".";
    }
}
module.exports = Student;
