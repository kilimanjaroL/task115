"use strict";
import Person from "./person.js";
class Student extends Person{
    constructor(prosition,name,age,c){
        super(prosition,name,age);
        this.klass = c;
    }
    introduce(){
        let p = super.introduce();
        if(this.hasOwnProperty("klass")&&this.klass.leader===this){
            return p+" I am a Student. I am Leader of "+this.klass.getDisplayName()+".";
        }
        else{
            return p+" I am a Student. I am at "+this.klass.getDisplayName()+".";
        }

    }
}
module.exports = Student;
