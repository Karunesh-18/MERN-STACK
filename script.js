// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3));

// var sub=function(a,b){
//     return a-b;
// }
// var subtract=sub(5,2);
// console.log(subtract);

// var minus= (a,b)=> a-b;
// console.log(minus(10,4));

// for(let i=2;i<=20;i+=2){
//     console.log("Number",i);
// }

// console.log("While loop");

// let j=2;
// while(j<=20){
//     console.log("Value",j);
//     j+=2;
// }

// var arr = ['Hello', 'World', 101,2.34,true];
// for(var k=0;k<arr.length;k++){
//     console.log(arr[k]);
// }

// let arr1=['a','b','c'];
// arr1.push('d');
// console.log(arr1);

// arr1.unshift('z');
// console.log(arr1);

// arr1.pop();
// console.log(arr1);

// arr1.shift();
// console.log(arr1);

// function a(x,y,z){
//     console.log("Inside function a",y);
//     b(z);
// }

// function b(z){
//     console.log("Inside function b",z);
// }

// a(b,10,20);

// //callback function
// function c(arg1,arg2,arg3){
//     console.log("Inside function c",arg2);
//     if(arg3>10){
//         arg1(arg3);
//     }
// }

// function d(arg){
//     console.log("Inside function d",arg);
// }

// c(d,5,15);

// function multiplyBy(factor){
//     return function(x){
//         return x*factor;
//     }
// }

// const mulBy2 = multiplyBy(2);
// const mulBy3 = multiplyBy(3);

// console.log(mulBy2(5));
// console.log(mulBy3(5));

// const arr2=[1,2,3,4,5];
// arr2.forEach((el) => {
//     console.log("el=>",el);
// });

// const arr3 = [1,2,3,4,5];

// const arr4 = [];
// arr3.forEach((el) => arr4.push(el*2));
// console.log(arr4);

// const arr5 = arr3.map((el) => el*2);
// console.log(arr5);

// const arr6 = [1,2,3,4,5];

// const res = arr6.filter((el) => el%2===0);
// console.log(res);

// const arr7 = [10, 20, 'J', 30, 'A','V','A'];

// const reult = arr7.filter((el)=> typeof el === 'string');
// console.log(reult);

// const res2 = arr7.filter((el)=>{
//     return el;
// })
// console.log(res2);

// const arr8 = [10,false,1.2,null,'',undefined,'Hello',true];
// const res3 = arr8.filter((el)=> el);
// console.log(res3);

// const firstname = "Jhon";
// const lastname = "Doe";

// const fullnmae = 'Full Name is:' + firstname + ' ' + lastname;
// console.log(fullnmae);

// var str = 'Hello World from JavaScript';
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.substring(6,11));
// console.log(str.split(' '));
// console.log(str.replace("World", "Universe"));

// const countwords = (str) => {
//     return str.split(' ').length;
// }

// console.log(countwords("The Quick Brown Fox"));

// let person ={
//     name: 'Jhon Doe',
//     age: 15,
//     isStudent: true,
// }

// const variable = 'age';
// console.log(person[variable]);
// console.log(person.name);

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// let marks ={
//     math: 90,
//     physics: 85,
//     chemistry: 88,
// }

// for(let i in marks) console.log(i,"=>", marks[i]);

// let students =[
//     {name: 'Alice', age: 20, grade: 9},
//     {name: 'Emma', age: 21, grade: 8.5},
//     {name: 'Mike', age: 19, grade: 7.5}
// ]

// console.log(students[0].name);

// for(let i=0;i<students.length;i++) console.log('${students[i].name} is ${students[i].age} ');

// students.forEach((student) => console.log('${student.name} is ${student.age}'));

// const res4 = students.filter((student) => student.grade >=8);
// console.log(res4);

// students.forEach((student) => {
//     if(student.grade>=8){
//         console.log('${student.name}');
//     }
// });

// // const headingElement = document.getElementById('heading');
// // console.log(headingElement);
// // headingElement.innerHTML = "No heading";
// // headingElement.style.color = "red";
// // headingElement.style.border = "1px solid black";
// // headingElement.className="new-class"

// // const buttonElement = document.getElementById('btn');
// // buttonElement.addEventListener('click', () => {
// //     headingElement.innerHTML = "Heading Changed";
// //     headingElement.style.color = "blue";
// //     headingElement.style.border = "2px solid green";
// // });

// // const containerElement = document.getElementsByClassName('container');
// // console.log(containerElement[0]);

// const Inname = document.getElementById("name");
// const error = document.getElementById("error");
// const submit = document.getElementById("submit");
// const password = document.getElementById("password");

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(Inname.value);
//   if (Inname.value === password.value && Inname.value !== "") {
//     error.innerHTML = "Login Successful";
//     error.className = error.className + " text-green-500";
//     // error.style.color = "green";
//   } else {
//     error.innerHTML = "Invalid password";
//     error.className = error.className + " text-red-500";
//   }
// });

// const arr9 = [1, 2, 3];
// const arr10 = [...arr9];
// arr9.push(4);
// console.log(arr10);

// const obj1 = {
//   a: 10,
//   b: 20,
// };

// const obj2 = { ...obj1 };
// obj1.c = 10;
// console.log(obj2);

// //var can be redeclared and updated -- let can be updated but not redeclared -- const cannot be updated nor redeclared
// var a = 10;
// var a = 20;
// console.log(a);

// //Hoisting
// console.log(b);
// var b = 10;
//Hoisting moves the declaration to the top but not the assignment

// console.log(d);
// let d = 10;
// // let and const are not hoisted -- They are in a temporal dead zone until they are declared

// const user = { Name: "Alice", age: 25 };
// console.log(JSON.stringify(user));
// const user2 = JSON.parse('{"Name":"Alice","age":25}');
// console.log(user2);

// const arr = [1, 2, 3, 4, 5];
// const [a, b, ...rest] = arr;
// console.log(a);
// console.log(b);
// console.log(rest);

// const colors = ["red", "green", "blue"];
// const [first, second] = colors;
// console.log(first);
// console.log(second);

// const person = { name: "Bob", age: 30, height: 175, weight: 65};
// // const { name, age, height: h, weight= 70 } = person;
// const { name, age, ...rest } = person; 
// console.log(name);
// console.log(rest);

// import print, { add, subtract, NUM, mul, div} from './maths.js';

// console.log("Addition:", add(5, 3));
// console.log("Subtraction:", subtract(10, 4));
// console.log("Multiplication:", mul(6, 7));
// console.log("Division:", div(20, 4));
// console.log("NUM:", NUM);
// print("This is the default export function.");

// console.log("START")
// setTimeout(() => {
//     console.log("INSIDE");
// },3000);
// console.log("STOP");

// let a = 8;
// const p1 = new Promise((resolve,reject)=>{
//   setTimeout((num) => (num % 2 === 0) ? resolve("Even") : reject("Odd"), 3000);
// });

// p1(a).then((res)=>{
//   console.log(p1)
//   console.log("Result:",res)
// }).catch((err)=>{
//   console.log("Error:",err)
// })
// console.log(p1)


// const CheckLessThan10 = new Promise((resolve,reject)=>{
//   setTimeout((num)=>(num < 10)? resolve('Less Than 10'):reject('Greater Than 10'),1000);
// });

// CheckLessThan10(a).then((res)=>{
//   // console.log(CheckLessThan10)
//   console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })

// checkEven(a).then((res)=>{
//   console.log(res);
//   return CheckLessThan10(a);
// }).catch((err)=>{
//   console.log(err);
//   return CheckLessThan10(a);
// }).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });


// const CheckConditions = async () => {
//   let a=10;
//   console.log("STARTING...");
//   try{
//     const res = await checkEven(a);
//     console.log("Result:", res);
//   }catch(err){
//     console.log("Error:",err);
//   }
//   try{
//     const res2 = await CheckLessThan10(a);
//     console.log("Result 2:",res2)
//   }catch(err){
//     console.log("Error:",err);
//   }
// }
// CheckConditions()

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(res=> {
//     console.log(res);
//     return res.json();
//   }).then(json =>{
//     console.log(json);
//   }).catch((err)=>{
//     console.log("Error:",err);
//   })

// const fetchData = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const json = await res.json();
//     console.log(json)
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

// // Run the fetch when this script is executed
// fetchData();

// setTimeout()