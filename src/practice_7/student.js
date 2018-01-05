"use strict";
import Person from "./person.js";
class Student extends Person{
    constructor(name,age,c){
        super(name,age);
        this.klass = c;
    }
    introduce(){
        let p = super.introduce();
        return p+" I am a Student. I am at "+this.klass.getDisplayName()+".";
    }
}
module.exports = Student;