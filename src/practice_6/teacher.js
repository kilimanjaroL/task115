"use strict";
import Person from "./person.js";
class Teacher extends Person{
    constructor(name,age,c=null){
        super(name,age);
        this.klass = c;
    }
    introduce(){
        let p = super.introduce();
        if(this.klass!==null){
            return p+" I am a Teacher. "+ "I teach Class "+this.klass+".";
        }
        else
            return p+" I am a Teacher. "+ "I teach No Class.";
    }
}
module.exports =Teacher;
