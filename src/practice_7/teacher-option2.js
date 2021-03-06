"use strict";
import Person from "./person.js";
import Class from "./class.js";
class Teacher extends Person{
    constructor(name,age,c=null){
        super(name,age);
        if(c!==null) {
            this.klass = c;
        }
        else{
            this.klass = null;
        }
    }
    introduce(){
        let p = super.introduce();
        if(this.klass!==null){
            return p+" I am a Teacher. I teach "+this.klass.getDisplayName()+".";
        }
        else{
            return p+" I am a Teacher. I teach No Class.";
        }
    }
    introduceWith(student){
        let p = super.introduce();
        let classOne = student.klass.number;
        let classTwo = this.klass.number;
        if(classOne===classTwo){
            return p+" I am a Teacher. I teach "+student.name+".";
        }
        else{
            return p+" I am a Teacher. I don't teach "+student.name+".";
        }
    }
}

module.exports = Teacher;