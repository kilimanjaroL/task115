'use strict';
import Person from "../../src/practice_10/person.js";

class Teacher extends Person {
    constructor (id, name, age, class_number) {
        super(id, name, age);
        this.klasses = class_number;
    }

    introduce(){
        if (this.klasses === undefined )
            return super.introduce() + " I am a Teacher. I teach No Class.";
        else
            return super.introduce() + " I am a Teacher. I teach Class "+this.klasses[0].number + ", " + this.klasses[1].number+".";
    }
    isTeaching (student) {
        for (let i in this.klasses)
            if (this.klasses[i].isIn(student))
                return true;
        return false;
    }
}

module.exports = Teacher;