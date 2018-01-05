"use strict";
import Person from "./person.js";
class Worker extends Person{
    constructor(name,age,){
        super(name,age);
    }
    introduce(){
        let p = super.introduce();
        return p+" I am a Teacher. I have a job.";
    }
}
module.exports = Worker;
