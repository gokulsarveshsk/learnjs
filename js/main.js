// // console.log("Sarvesh");
// // console.log(typeof("Sarvesh"));
// // console.log(typeof(1));

//********************String*********************************************
// const myVariable = "King Gokulsarveshsk";
// console.log(myVariable);
// //length property
// console.log(myVariable.length);
// console.log("Sarvesh is rockkingg".length);

//****************String methods***********************************

// console.log(myVariable.charAt(0));
// console.log(myVariable.indexOf("vesh"));
// console.log(myVariable.lastIndexOf("s"));
// console.log(myVariable.slice(0, 5));
// console.log(myVariable.toUpperCase());
// console.log(myVariable.toLowerCase());
// console.log(myVariable.includes("sarvesh"));
// console.log(myVariable.includes("Happy"));
// console.log(myVariable.replace("sarvesh", "Happy"));
// console.log(myVariable.split("sarvesh"));
// console.log(myVariable.split(""));
// console.log(myVariable.split(" "));
// console.log("You,gonna,rockk".split(","));

// //Number methods ***********************************

// const myNumber = 3.14;
// console.log(myNumber.toFixed(2));  //3.14
// console.log(Math.PI);  //3.141592653589793
// console.log(Math.trunc(Math.PI));  //3
// console.log(Math.round(5.74)); //6
// console.log(Math.floor(4.8)); //4
// console.log(Math.ceil(4.5));  ///5
// console.log(Math.pow(2, 3));  //8
// console.log(Math.sqrt(9));  //3
// console.log(Math.min(9,12,3,4,5,6,7,8,9,10));  //3
// console.log(Math.max(9,12,3,4,5,6,7,8,9,10));  //12
// console.log(Math.random());  //random 0 to 1
// console.log(Math.floor(Math.random() * 10)+1);  //random 1 to 10
// console.log(Math.floor(Math.random() * 100)+1);  //random 1 to 100

// let myName = "Sarvesh";
// console.log(myName.charAt(Math.random() * myName.length));

// /// if else statement***********************************
// let constumerIsBanned = false;
// let viewer ="Reqested Reels";
// let photos = true;

// if(constumerIsBanned){
//     console.log("You are banned");
// }
// else if(viewer && photos){
//     console.log(`You are not banned and you can see ${viewer} and pictures`);
// }
// else if(viewer){
//     console.log(`You are not banned and you can see ${viewer}`);
// }
// else{
//     console.log("Still working on your reqested one");
// }

// let testmark = 28;
// let grade;
// let isCollegeStudent = true;

// if(testmark >= 90){
//     grade = 'A';
// }
// else if(testmark >= 80){
//     grade = 'B';
// }
// else if(testmark >= 70){
//     grade = 'C';
// }
// else if(testmark >= 60){
//     grade = 'D';
// }
// else{
//     if(isCollegeStudent){
//         grade = 'RA';
//     }
//     else{

//         grade = 'F';
//     }
// }
// console.log(grade);

// // switch statement***********************************

// //grade is condition

// switch(grade){
//     case 'A':
//         console.log("You got A");
//         break;
//     case 'B':

//         console.log("You got B");
//         break;
//     case 'C':
//         console.log("You got C");
//         break;
//     case 'D':
//         console.log("You got D");
//         break;
//     case 'F':
//         console.log("You got F");
//         break;
//     default:
//         console.log("You got RA");
// }

// let player = "rock";
// let computer = "rock";

// switch(player){
//     case "rock":
//         if(computer === "rock"){
//             console.log("Draw");
//         }
//         else if(computer === "scissors"){
//             console.log("player wins");
//         }
//         else{
//             console.log("computer wins");
//         }
//         break;
//     case "scissors":
//         if(computer === "rock"){
            
//             console.log("Computer wins");
//         }
//         else if(computer === "scissors"){
//             console.log("Draw");
//         }
//         else{
//             console.log("computer wins");
//         }
//         break;

// }

// //Ternary operator***********************************

// let mark =80;
// let grade = mark>=90 ? "A": mark>=80 ? "B": mark>=70 ? "C": mark>=60 ? "D": "F";
// console.log(grade);

// let player = "rock";
// let computer = "rock";
// let result;

// switch(player){
//     case "rock":
//         result = computer === "rock" ? "Draw":computer ==="scissors" ? "player wins": "computer wins";
//         console.log(result);
//         break;
    
//     case "scissors":
//         result = computer === "rock" ? "Computer win": computer === "scissors" ? "Draw": "player wins";
//         console.log(result);
//         break;
// }


// let my = prompt("Enter your name:");
// if(my){
//     console.log(my ?? "didn't enter name");
// }
// else{
//     console.log("didn't enter name");
// }

// let my = prompt("Enter your name:");
// console.log(my ?? "didn't enter name");


//////////////////////////////////////////////// STONE PAPER SCISSORS GAME////////////////////////////////////////////////////

// let my = confirm("Lets play a game");
// if(my){
//     let play = prompt("choose rock, paper or scissors");
//     if(play){
//         let playerOne = play.trim().toLowerCase();
//         if(
//             playerOne==="rock" ||
//             playerOne==="paper" ||
//             playerOne==="scissors"
//         ){
//             let computerChoice = Math.floor(Math.random() *3 +1);
//             let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
//             let result = playerOne === computer ? "Draw" : playerOne === "rock" && computer === "scissors" ? "Player wins" : playerOne === "scissors" && computer === "paper" ? "Player wins" :  playerOne === "paper" && computerChoice === "rock" ? "Player wins" : "Computer wins";
//             alert(`Computer choose ${computer} and ${result}`);
//             let playAgain = confirm("Do you want to play again");
//             playAgain ? location.reload() : alert("Bye");

//         }
//         else{
//             // again start the game
//             alert("You have entered wrong choice");
//             let playAgain = confirm("Do you want to play again");
//             playAgain ? locatio.reload():"Bye";
//         }
//     }
//     else{
//         alert("i guess you don't want to play");
//     }
// }
// else{
//     alert("Bye");
// }

// let num = 0;
// while(num<=50){
//     console.log(num);
//     num++;
// }

//do while loop*************

// let i=50;
// do{
//     console.log(i);
// }
// while(i<50){
// }

// for loop********
// let i=1
// for(;i<10;i++){
//     console.log(i);
// }

// let name = "Sarvesh";
// for(let i=0;i<=name.length;i++){
//     console.log(name.charAt(i));
// }   

// let text='';
// for(let i=0;i<10;i++){
//     if(i===3){
//         continue;
//     }
//     text = text + i;
// }
// console.log(text);

// for(let i=0;i<7;i++){
//     if(i===3){
//         break;
//     }
//     console.log(i);
// }

// functions **********************
// console.log("Hello".toLowerCase());
// console.log("Hello".toUpperCase());

// //sum of two numbers
// function sum(a,b){
//     if(b===undefined){
//         return a;
//     }
//     return a+b; 
// }
// console.log(sum(45,3));
// console.log(sum(456,3));
// console.log(sum(45,356));
// console.log(sum(42));

//////////////////////////////////////// slice email*******************

// function getUserNameFromEmail(email){
//     return email.slice(0,email.indexOf("@"));
// }
// console.log(getUserNameFromEmail( "gokulsarvesh@gmail.com"));
// console.log(getUserNameFromEmail( "sarvesh@gmail.com"));
// console.log(getUserNameFromEmail( "google@gmail.com"));
// console.log(getUserNameFromEmail( "happyman@gmail.com"));

// function toProperCase(name){
//    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }
// console.log(toProperCase("gFGR"));

//****** */ declartion of function 2////////////////************* */

// const toProperCase = function (name){
//    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }
// console.log(toProperCase("gFGR"));

//********declaration of function 3////////////////////
 
// const toProperCase = (name)=>{
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }
// console.log(toProperCase("gFGR"));


// **********************Scope var and let const **********************
// var x=1;
// var x=2;
// console.log(x); //2

// let y=1;
// let y=2;
// console.log(y); //error

// let x =2;
// x=4;
// console.log(x); //4

// const x =1;
// x=0;
// console.log(x); //error

// const z=1;
// const z=2;
// console.log(z); //error

// const x= 1;
// console.log(x); //1

// var x=2;
// const x=1;
// console.log(x); //error

//global scope
// var x=1;
// let y=2;
// const z=3;

// //local scope
// {
//     let y=1;
//     console.log(y); //1
// }
// console.log(y); //2

// // local scope function scope

// function myFun(){
//     const z=5;
//     console.log(z); //5
// }
// myFun();
// console.log(z); //3

// global scope

// var x=1;
// let y=2;
// const z=3;

// console.log(`Global scope: \nx=${x},\ny=${y},\nz=${z}`);

// function myFun(){
//     const z=5;
//     console.log(`Function scope: \nx=${x}, \ny=${y}, \nz=${z}`);
// if(true){
//     const y=4;
//     console.log(`Block scope: \nx=${x}, \ny=${y}, \nz=${z}`);
// }
// console.log(`Function scope: \nx=${x}, \ny=${y}, \nz=${z}`);

// }
// myFun();
// console.log(`Global scope: \nx=${x},\ny=${y},\nz=${z}`);

///******************************ARRAYS *///////////////////

// const myArr=[];
// console.log(myArr); //[]
// myArr[0]="Sarvesh";
// myArr[1]="Gokul";
// myArr[2]=true;
// myArr[3]=20;
// console.log(myArr); //["Sarvesh", "Gokul", 20, true]
// console.log(myArr.length); //4
// console.log(myArr[myArr.length-1]); //20

// myArr.push("click");
// console.log(myArr); //["Sarvesh", "Gokul", true, 20, "click"]

// myArr.pop();
// console.log(myArr); //["Sarvesh", "Gokul", true, 20]

// myArr.unshift("click"); 
// console.log(myArr); //["click", "Sarvesh", "Gokul", true, 20]

// myArr.shift();
// console.log(myArr); //["Sarvesh", "Gokul", true, 20]

// const lastItem = myArr.push("lasthappy");
// console.log(lastItem); //5

// const firstItem = myArr.unshift("firstHappy");
// console.log(firstItem); //6

// const lastItemremoved = myArr.pop();
// console.log(lastItemremoved); //lasthappy

// const firstItemremoved = myArr.shift();
// console.log(firstItemremoved); //firstHappy

// console.log(myArr); //["Sarvesh", "Gokul", true, 20]

// const lastItems = myArr.pop();
// console.log(lastItems); //20
// console.log(myArr); //["Sarvesh", "Gokul", true]

// delete myArr[1];
// console.log(myArr); //["Sarvesh", empty, true]
// console.log(myArr[1]); //undefined

// myArr[1]="Gokul";
// console.log(myArr); //["Sarvesh", "Gokul", true]

// myArr.splice(1,1);
// console.log(myArr); //["Sarvesh", true]

// myArr.splice(1,2);
// console.log(myArr); //["Sarvesh"]

// myArr.splice(1,1,"Gokul");
// console.log(myArr); //["Sarvesh", "Gokul"]

// myArr.splice(1,0,"Gokul");
// console.log(myArr); //["Sarvesh", "Gokul", "Gokul"]

// const newArr = myArr.slice(1,2);
// console.log(newArr); //["Gokul"]

// const newArr1 = myArr.reverse();
// console.log(newArr1); //["Gokul", "Gokul", "Sarvesh"]

// const newArr2 = myArr.join();
// console.log(newArr2); //Gokul,Gokul,Sarvesh

// const newArr3 = myArr.join(" ");
// console.log(newArr3); //Gokul Gokul Sarvesh

// const newArr4 = newArr2.split(',');
// console.log(newArr4); //["Gokul", "Gokul", "Sarvesh"]

/////////*********************/Objects**************************/////////////////////

const myObi = {name:"Sarvesh", age:20, isHappy:true};
console.log(myObi); //{name: "Sarvesh", age: 20, isHappy: true}
console.log(myObi.name); //Sarvesh
console.log(myObi.isHappy); //true

myObi.name="Gokul";
console.log(myObi); //{name: "Gokul", age: 20, isHappy: true}

const anotherObj = {
    name:"Sarvesh",
    isHappy: function(){
        return "Yes I am happy"
    }
}
console.log(anotherObj.isHappy()); //Yes I am happy

const anotherObj1 = {
    name:"Sarvesh",
    isHappy:{
        holiday:true
    },
    isSad:{
        holiday:false
    }
}
console.log(anotherObj1.isHappy.holiday); //true
console.log(anotherObj1.isSad.holiday); //false

const anotherObj2 = {
    name:"sarvesh",
    dob:[27,07,2002],
}
console.log(anotherObj2.dob); //[27, 07, 2002]
console.log(anotherObj2.dob[0]); //27
console.log(anotherObj2.dob[1]); //07
console.log(anotherObj2.dob[2]); //2002


