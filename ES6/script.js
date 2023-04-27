"use strict" // strict mode use to strict the syntex of js. e.g: "x = 20 "; Here x is not declare in any var, let, const keyword;
// strict = 20;
// console.log(strict);

// ???????????????? variable declare ????????????????????
console.log("????? ES6 Variable ?????");
// var type variable  can use anywhere and can reinitialize same variable from anywhere
va = 10;
console.log(va);
var va;
// Let have to be initialize top of the variable name or when variable is initializing, otherwise not more limitation
let le;
le = 20;
console.log(le);
le = 30;
console.log(le);
// Const  must be use when variable is initializing, and can't be reinitialize same variable after declaration
const co = 5;
console.log(co);
// co = 6 ;// this line will show error
// console.log(co);
console.log('\n');



// ??????????????????? Default and rest ?????????????????
console.log("????? ES6 Default and rest ?????");
// In ES6 we can give default value to a parameter. This is Default
function def(text = "send a text") {
    console.log(text);
}
def();
def('this is abid');
// In ES6 we can send any number of value without calling each parameter specifically, and it will converted to array. This is rest
function res(...z) {
    console.log(z)
}
res(1, 2, 3, 4, 5);
console.log('\n');



// ????????????????? spread operator ????????????????????
console.log("????? ES6 spread operator ?????");
// we can concat or call whole oblect, array using spread, spread can use any position, but rest have to declare last;
let num1 = [1, 2, 3]
let num2 = [4, 5, 6]
let num = [...num1, ...num2];
console.log(num)

let ob1 = {
    name: "abid",
    age: 19
}
let ob2 = {
    country: "BD",
    city: "Dhaka"
}
let ob = { ...ob1, ...ob2, gender: "male" };
console.log(ob);
console.log('\n');



// ?????????????????????? object literal ?????????????????
console.log("????? ES6 object literal ?????");
//  In ES6  we can return parameter value without putting that parameter in new variable
function obj(name, age) {
    return {
        name,
        age
    }
}
const func_obj = obj("abid", 19);
console.log(func_obj, typeof (func_obj));

// In ES6 we can declare method/function in object more easily without writing "function" keyword
const meth_obj = {
    body() {
        return "this is meth_obj body";
    }
}
console.log(meth_obj.body());
console.log('\n');



// ???????????????? for-of and for-in loop ??????????????????
console.log("????? ES6 for-of and for-in loop ?????")
// for-of basically use for work with array
let luparr = [1, 2, 3, "abid", 4, 5];
for (const [i, v] of luparr.entries()) {
    console.log(v);
}
// for-in basically use for itterate on object
let lupobj = {
    company: "TATA",
    product: "car",
    number: "1-3-la"
}
for (const x in lupobj) {
    console.log(`${x} : ${lupobj[x]}`);
}
console.log('\n');



// ?????????????????? for-each loop ???????????????????????
console.log("????? ES6 for-each loop ?????");
// by for-each loop we can iterate on array more easily
let each_arr = ['b', 'c', 'd', { ty: 'Hi' }, 1, 0.5]
each_arr.forEach((element, index, arr) => {
    if (typeof (element) == "object") {
        arr[index] = element.ty + '  updated';
    }
    else {
        arr[index] = element + '  updated';
    }
});
console.log(each_arr);
console.log('\n');



// ??????????????????? Map, filter ???????????????????????
console.log("????? ES6 Map, filter ?????");
// map and filter return new array after completing operation, but do not change previous
let new_arr = [2, 7, 9, 5, 10];
const map_arr = new_arr.map((x) => {
    return x * x;
})
console.log(`map : ${map_arr}`);

const filt_arr = new_arr.filter((x) => {
    return x > 5;
})
console.log(`filter : ${filt_arr}`);
console.log(new_arr);
console.log('\n');



// ?????????????????????? arrow function ??????????????????????
console.log("????? ES6 arrow function ?????");
//we can simplepy and sorter code by using arrow function where traditonal function need so many line
let student = [
    {
        id: 2,
        name: 'abid',
        gpa: 3.1
    },
    {
        id: 6,
        name: 'afnan',
        gpa: 3.5
    },
    {
        id: 3,
        name: 'pranto',
        gpa: 3.6
    }
]
// for multiline code arrow function need second bracket {} and "return" keyword to return something
const arrow_func = () => {
    return student.filter((x) => x.gpa >= 3.5).map((y) => [y.name, y.id]);
    // in this code filter and map codes can write in one line inside
    // arrow funtion so no need for return and {}
};
const result = arrow_func();
console.log(result);
console.log('\n');



//  ???????????????????? Destructing array, object, function parameter ???????????????????
console.log("????? ES6 Destructing array, object, function parameter ?????");
let a = 10, b = 20;
[a, b] = [b, a];
console.log(`swap : ${a, b}`);

//array destruct 
let des_arr = [10, 20, 30, 40, 50,];
let [des1, des2, des3, ...des4] = des_arr;
console.log(`${des3}, ${des4}`);

//object destruct
let des_obj = {
    des_id: 2,
    des_name: 'abid',
    des_gpa: 3.1,
    des_language: {
        native: "bangla",
        second: "english"
    }
}
let { des_id, des_name, des_gpa, des_language } = des_obj;
console.log(des_id, des_name, des_gpa, des_language);

//function parameter destruct
const des_func = ({ des_language, des_name }) => {
    console.log(des_language.native, des_name);
}
des_func(des_obj);
console.log('\n');



// ?????????????????? array and string methods ?????????????????
console.log("????? ES6 array and string methods ?????");

let ser_arr = [1, 2, 3, 4, 9, 6, 8]
console.log(`arr includes: ${ser_arr.includes(3)}`);
console.log(`arr indexOf: ${ser_arr.indexOf(3)}`);
console.log(`arr find: ${ser_arr.find((num) => num === 3)}`);
console.log(`arr findIndex: ${ser_arr.findIndex((num) => num === 3)}`);
const rev_arr = ser_arr.reverse();
console.log(`arr reverse: ${rev_arr}`);

let ser_str = "Hello, world! Hello!";
console.log(`str includes: ${ser_str.includes("dorld")}`);
console.log(`str indexOf: ${ser_str.indexOf("Hello")}`);
console.log(`str startwith : ${ser_str.startsWith("world")}`);
const rev_str = Array.from(ser_str).reverse().join('');
console.log(`str reverse: ${rev_str} \n`);



// ?????????????????? ES6 module export import ??????????????????
// not support with nodeJS terminal, have to show in browser conole.
// Have to set type="module" when linking file in HTML script tag/
// import { add, subtract } from './module.js';
// console.log(add(2, 3));
// console.log(subtract(5, 3));



// ??????????????????? Class in ES6 ????????????????????????
console.log("????? ES6 Class ?????");
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person1 = new Person('John', 30);
person1.sayHello();
const person2 = new Person('Alice', 25);
person2.sayHello();
console.log('\n');



// ???????????????? Asyncronus and callback function ?????????????????
console.log("????? ES6 Asyncronus and callback function ?????");
// by default JS execute as syncronus manner -> after completing one line of code then another line
// setTimeOut, clearTimeout, eventlistener and many fuction work as asyncronus
// Asyncronus function output will show-up after all the syncronus code execution
// if two or more asyncronus code occur, then first asyncronus code will execute
// after completing all the syncronus code until the second asyncronus code came.
const asyn1 = () => {
    console.log('asyn1 complete');
}
// here task2 will work as asyncronus function
const asyn2 = () => {
    // This code is comment out to maintain output. this code will execute last as asyncronus
    // setTimeout(() => {
    //     console.log('asyn2 complete');
    // }, 0)
}
const asyn3 = () => {
    console.log('asyn3 complete');
}
const asyn4 = () => {
    console.log('asyn4 complete');
}
asyn1();
asyn2();
asyn3();
asyn4();

// Now using callback function we can control this asyncronus
const callb1 = (callback) => {
    console.log('callback1 complete');
    callback();
}
// here task2 will work as asyncronus function
const callb2 = (callback) => {
    callback();
    // This code is comment out to maintain output. this code will execute last as asyncronus
    // setTimeout(() => {
    //     console.log("callback2 complete");
    //     callback();
    // }, 600)
}
const callb3 = (callback) => {
    console.log('callback3 complete');
    callback()
}
const callb4 = () => {
    console.log('callback4 complete');
}

callb1(() => {
    callb2(() => {
        callb3(() => {
            callb4()
        })
    })
})
console.log('\n');



// ??????????????????? Promise ???????????????????
console.log("????? ES6 Promise ?????");
const promise1 = new Promise((resolve, reject)=>{
    let value = true;
    if(value){
        resolve("Resolve called");
    }
    else{
        reject("reject called");
    }
})
promise1.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err);
})

const taskone =()=>{
    return new Promise((resolve, reject)=>{
        resolve("task1 is complete");
    })
}
const tasktwo =()=>{
    return new Promise((resolve, reject)=>{
        resolve("task2 is complete");
    })
}
const taskthree =()=>{
    return new Promise((resolve, reject)=>{
        resolve("task3 is complete");
    })
}
const taskfour =()=>{
    return new Promise((resolve, reject)=>{
        resolve("task4 is complete");
    })
}
const alltask = async ()=>{
    try{
        const t1 = taskone();
        console.log(t1);
        const t2 = tasktwo();
        console.log(t2);
        const t3 = taskthree();
        console.log(t3);
        const t4 = taskfour();
        console.log(t4);
    }
    catch(error){
        console.log(error);
    }
}
alltask();