// // ???? some input output function function ????  //
// confirm("Do you want to continue?");
// alert("This is an alert!");
// //document.write("<h1>hello</h1>");
// //var a = parseInt(prompt());
// console.log(prompt("Write your starting Msg"));



// ???? variable in js ???? // 
//global variable --not in any function
var demo = "abid afnan";
const demo1 = 20;
let demo2 = 2.3;



// ???? basic DOM functions ???? //
document.getElementById("id_0").innerHTML = "Welcome";
//for multiple div there can be same class name, so put value like array accesing
document.getElementsByClassName("js_h2")[1].innerHTML = "$ Abid";
document.getElementsByClassName("js_h2")[2].innerHTML = "$ Afnan";
function getname(){
    var inp_name = document.getElementsByName('js_name')[0].value;
    document.getElementsByName('js_name')[0].value ="";
    document.getElementsByTagName('h2')[1].innerHTML =`$ ${inp_name}`;
}


// ???? String in Js ???? //
//concatantion in string
var s1 = "abid";
var s2 = "afnan";
var s3 = s1 + " " + s2;
console.log(s3);



// ???? Operator in js ???? //
var w = 10;
var x = 15;
var y = 5;
var z;
document.getElementById("op_1").innerHTML = x+y;
document.getElementById("op_2").innerHTML = x*y;
document.getElementById("op_3").innerHTML = ++x;
document.getElementById("op_4").innerHTML = x<=y;
document.getElementById("op_5").innerHTML = z = x&&y;
document.getElementById("op_6").innerHTML = z = x>y ? "yes":"no";
document.getElementById("op_7").innerHTML = w/=5;



// ???? function in js ???? //
function Odd_Even(val1){
    if(val1 %2 == 0){
        return "EVEN";
    }
    else{
        return "ODD"
    }
}
let func_value = Odd_Even(6);
console.log(func_value); //show in console

function greeting(){
    var x = document.getElementById('func_1').value;
    document.getElementsByClassName("greet")[0].innerHTML = `Greeting ${x}`;
}


// Calculator in js
//Bellow Functions are Called Arrow Functions
// function calculator (){}
calculator = ()=>{
    const value1 = parseInt(document.getElementById('cal_num1').value);
    const operator = document.getElementById('cal_ope').value;
    const value2 = parseInt(document.getElementById('cal_num2').value);
    var res;
    if(operator == '+'){
        res = value1 + value2;
    }
    else if(operator == '-'){
        res = value1 - value2;
    }
    else if(operator == '*'){
        res = value1 * value2;
    }
    else if(operator == '/'){
        res = value1 / value2;
    }
    else if(operator == '%'){
        res = value1 % value2;
    }
    document.getElementById('cal_res').innerHTML = res;
}
InputName = ()=>{
    const input = prompt("Enter your name ");
    document.getElementById('inp_name').innerHTML = input;
}




// ???? JS conditional Statement ???? //
let age = 60;
if(age>=18 && age<60){
    document.querySelector(".condition h2").innerHTML = "Adult";
}
else if(age>=60){
    document.querySelector(".condition h2").innerHTML = "Old";
}
else{
    document.querySelector(".condition h2").innerHTML = "Teenager";
}




// ???? JS loop ???? //
var buses = ["Soudia","Star Line", "Hanif", "Ena", "Green Line"];
for(var i =0; i<10; i++){
    document.getElementById('for').innerHTML += i+" ";
}
var count = 10;
while(count > 0){
    document.getElementById('while').innerHTML += count+" ";
    count--;
}
buses.forEach(bus);
function bus (item,index){
    document.getElementById('for_each').innerHTML += index + " " + item + "<br>";
}
for(let i=0; i<20; i++){
    if(i%2==0)
    continue;
    else
    document.getElementById('continue').innerHTML += i+" ";
}
ite = 0;
while(ite < 20){
    if(ite == 11)
    break;
    else
    document.getElementById('break').innerHTML += ite+" ";
    ite++;
}



// ???? JS Array ???? //
var fruits = ["JackFruit", "Mangoe", "Apple", "Banana", "Lichi"];
var food = ["Rich", "Chicken", "Beep", "Kacchi", "Coaca-cola"];
console.log(Array.isArray(fruits));
var shop = food.concat(fruits); //concating food + fruits array
document.getElementById('arr0').innerHTML = shop;
document.getElementById('arr1').innerHTML = shop.indexOf('Apple'); // in concated array apple is in 7 index
document.getElementById('arr2').innerHTML = fruits.indexOf('Apple'); // in actual array apple is in 2 index

let vehicles = ["Car", "Rickshaw", "Cylce", "Bus", "Truck", "CNG"];
document.getElementById('arr3').innerHTML = vehicles;
push_value =()=>{
    var veh = prompt("Enter your vehicle name ");
    vehicles.push(veh);
    document.getElementById('arr3').innerHTML = vehicles;
}
pop_value =()=>{
    vehicles.pop();
    document.getElementById('arr3').innerHTML = vehicles;
}
slice_value =()=>{
    var start = prompt("Enter starting position to slice. Note:[Array index start from 0]");
    var end = prompt("Enter ending position to slice.");
    var sliced = vehicles.slice(start, end);
    document.getElementById('arr3').innerHTML = sliced;
}
reverse_value =()=>{
    vehicles.reverse();
    document.getElementById('arr3').innerHTML = vehicles;
}
shift_value =()=>{
    vehicles.shift();
    document.getElementById('arr3').innerHTML = vehicles;
}



// ???? Date Method in JS ???? //
let months =["January","February","March","April","May","June","July",
"August","September","October","November","December"];
let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var date = new Date();
document.getElementById('date').innerText = date;
document.getElementById('year').innerText = date.getFullYear();
document.getElementById('month').innerText = months[date.getMonth()];
document.getElementById('day').innerText = days[date.getDay()];
document.getElementById('hours').innerText = date.getHours();
document.getElementById('minutes').innerText = date.getMinutes();
document.getElementById('seconds').innerText = date.getSeconds();
document.getElementById('milliseconds').innerText = date.getMilliseconds();




//???? setInterval, setTimeout, clearTimeout, clearInterval methods ???? //
//setInterval like a loop, with delay perameter.
//By this methods we can perform task in repetition with time delay
var setin;
setinter =()=>{
    setin = setInterval(() => {
        alert("This is setInterval Alert");
    }, 4000);
}
//clearInterval stoping the repetation of setinterval
stopinter=()=>{
    clearInterval(setin);
}
// setTimeout perform a task without repetition.
// But it also have time delay parameter to delay on its task
var setti;
settimeo =()=>{
    setti = setTimeout(() => {
        alert("This is setTimeout Alert");
    }, 3000);
}
stoptimeo =()=>{
    clearTimeout(setti);
} 



// ???? CLock with JS ???? //
clock = () => {
    var d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    if (h > 12) {
        h = h - 12;
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    let time = h + " : " + m + " : " + s;
    document.querySelector('.clock h1').innerHTML = time;
    setTimeout(clock, 1000);
}



//???? CSS Modify with js ???? //
function modify() {
    let x = document.getElementById('css');
    x.style.fontSize = "30px";
    x.style.color = "red";
    x.style.transition = "0.3s ease";
}
function unmodify() {
    let x = document.getElementById('css');
    x.style.fontSize = "20px";
    x.style.color = "";
    x.style.transition = "0.3s ease";
}



// ???? Window method in JS ???? //
var win;
openwin =()=>{
    win = window.open("https://github.com/abid211051", "width=200px","height=200px");
}
closewin=()=>{
    win.close();
}



// ???? Problem solve with JS ???? //
// Print any number from 1 to 6 randomly with JS
function randomNumber(min, max){
    return Math.floor(Math.random()*(max - min + 1) ) + min;
}
document.getElementById('random').innerText = randomNumber(1, 6);

//Sort all the name from array in acending order
function sortName(stuName){
    // return stuName.sort(function(a,b){return a-b}); For numercial value sort
    return stuName.sort();
}
const stuName = ["Pranto","Abid", "Mahi", "Josim", "Afnan", "Rakib", "Roni"];
let xs = sortName(stuName);
document.getElementById('sort').innerText = xs;

// Leap year or not
function isLeapYear(year){
    let x = document.getElementById('leap');
    if((year % 400 === 0) || ((year % 4 === 0)&& (year % 100 != 0))){
        x.innerText = year + " is a leap year";
    }
    else{
        x.innerText = year + " is not a leap year";
    }
}
isLeapYear(2023);

//count vowel from a sentence
const vowel = ['a', 'e','i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
function vowelWord(sen){
    let cnt =0;
    // for(let i=0;i<sen.length;i++){
    //     if(sen[i] =='a' || sen[i]=='e' || sen[i]=='i' || sen[i]=='o' || sen[i]=='u'){
    //         cnt ++;
    //     }
    // }
    // altenative way
    const letter = Array.from(sen);
    letter.forEach(value => {
        console.log(value);
        if(vowel.includes(value)){
            cnt++;
        }
    });
    return cnt;
}
var sen = "Abid is not a good boy";
document.getElementById('vowel').innerText = vowelWord(sen);
