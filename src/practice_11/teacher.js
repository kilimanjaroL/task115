"use strict";
import Person from "./person.js";
class Teacher extends Person{
    constructor(nouse,name,age,c=null){
        super(nouse,name,age);
        if(c!==null) {
            this.klasses = [];
            for(let i=0;i<c.length;i++){
                this.klasses.push(c[i]);
            }
        }
        else{
            this.klasses = null;
        }
    }
    introduce(){
        let p = super.introduce();
        if(this.klasses!==null){
            let result = p+" I am a Teacher. I teach Class";
            for(let i=0;i<this.klasses.length;i++){
                if(i<this.klasses.length-1){
                    result=result +" "+this.klasses[i].number+",";
                }
                else{
                    result=result +" "+this.klasses[i].number+".";
                }
            }
            return result;
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
