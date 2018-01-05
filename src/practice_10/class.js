'use strict';

class Class {
    constructor(number) {
        this.number = number;
    }
    getDisplayName() {
        return `Class ${this.number}`;
    }
    assignLeader(student) {
        if (student.klass === this)
            this.leader = student;
        else
            console.log("It is not one of us.");
    }
    appendMember(student) {
        if (student.klass !== this)
            student.klass = this;
    }
    isIn (student) {
        if (student.klass === this) {
            return true;
        }
        else {
            return false;
        }
    }
}

module.exports =  Class;