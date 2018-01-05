'use strict';
import Person from "../../src/practice_10/person.js";

class Student extends Person {
    constructor (id, name, age, class_number) {
        super(id, name, age);
        this.klass = class_number;
    }
    introduce() {
        if (this.klass.leader === this)
            return super.introduce() + " " + "I am a Student. I am Leader of Class "+ this.klass.number+".";
        else
            return super.introduce() + " " + "I am a Student. I am at Class " +this.klass.number+".";
    }
}


module.exports =  Student;