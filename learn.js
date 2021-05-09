/*console.log('ahmad')

alert("by")
//document.write() //for testing

//variable is a data box for when you need to edit any thhing, edit it  by the var
//var myprice = 100; 
//undefined (myprice) = name of the var ; (=) = assignment operator ; (100) = value;


var x = document.getElementById('test3');

x.innerHTML = "2";

//if / else
if( x<2 ){
alert( 'yes' );

}else{
    alert( 'no' )
};


//data type: number - string - 

//(=) assignment operator اداة تعريف
// (==) comparison operator 
// (===) identity operator (identify the data type)
// (!=) not equale
// (!==) not identical
//(&&) and 
// (||) or


//function = function keyword in java script
var x = document.getElementById('test4');
function ahmad(){

    var x = document.getElementById('test1');

    x.innerHTML = "2";
    
    //if / else
    if( x<2 ){
    alert( 'yes' );
    
    }else{
        alert( 'no' )
    };
}
function Myageinhour(){
var myage = 18 ;
    return myage*365*24;
}
 var start = Myageinhour();
 document.getElementById("test2").innerHTML= "My age in hour is "+ start +" hours";
 
function calcage(myage){
    return myage * 365+ "in day";
}
document.getElementById('test').innerHTML= calcage (18);
function discount(price){
    var TVA = 330;
    return price - TVA;
}
x.innerHTML = discount(40000);


function calcAGE(age){
    var year = 365;
    return age * year;
}
var dynamic= prompt("what's your age?")
x.innerHTML = calcAGE(dynamic);

function calcage(myage){
var year = 365;
return myage * year;

}
var dynamic = prompt("what's your age by year?");
document.getElementById('test').innerHTML = calcage(dynamic);

/*global console / alert / prompt */

var mydate = new Date();

function convertUStolira(){
    var x = document.getElementById('test1'),
        y = document.getElementById('test2'),
        z = document.getElementById('test3')
        joudy = document.getElementById('dollar').value,

        result = joudy*365,
        result1 = result * 24;
        result2 = result1 * 60;
        result3 = result2 * 60;

        message = joudy + " years old " + " is about " + result +" days " ,
        message1 = joudy + " years old " + " is about " + result1 +" hour " ,
        message2 = joudy + " years old " + " is about " + result2 +" minutes " ,
        message3 = joudy + " years old " + " is about " + result3 +" secondes" ;

    document.getElementById('test').innerHTML= message;
    x.innerHTML = message1;
    y.innerHTML = message2;
    z.innerHTML = message3;
    
};
function recovery(){
    var valeur = document.getElementById('ll').value,
    dollar = valeur * 8000,
    euro = dollar * 1.15;
    
    document.getElementById('test11').innerHTML= dollar;
    document.getElementById('test12').innerHTML= euro;

}

var season = prompt("what's your favorite season?");
switch(season){
    case "winter":
        alert('it is very cold');
        break;
        case "fall":
            alert('it is cold');
            break;
            case "summer":
                case "spring":
                alert('it is very good');
                break;
                default:
                    alert('you do not type a season');
}
//the order can not interaction with the content of function unless you call it; for exemple the var in a function is for the function only;

var x = 2;
//scope A
// x is Accessed from everywhere

function testparent(){

    var x = 5;
//scope B
//x is Accessed from scope B and scope c

    function testchild(){


//scope c
//you can Accessed only from scope c;

    var calc = x + 100;
    
    console.log( calc );
    }
    console.log(x + 1);
    return testchild();
}

console.log( x +2 );
testparent();
 var hover = document.getElementById('test11');
  
 hover.onmouseover = function(){
     hover.innerHTML = "you hovered on me";
 }
 //Element.event = function(){code};
 //onclick / onkeydown / onkeyup / onkeypress / onmouseover / onmouseout / onm

 var input = document.getElementById('test13'),
     div = document.getElementById('test14');

     input.onkeyup = function(){

        div.innerHTML = input.value*8400;
     }

     var myinput = document.getElementById('test15'),
     mydiv = document.getElementById('test16');

     myinput.onkeydown = function(){

        mydiv.innerHTML = myinput.value*8400;
     }
var myinput1 = document.getElementById('input22'),
    mydiv2 = document.getElementById('test17'),
    currency = document.getElementById('s1');
    function ahmad(){
        mydiv2.innerHTML = myinput1.value * currency.value;
    }
    myinput1.onchange = ahmad();

    //Aray
    // literal way
    //var arrayname [element1,element2..]
    var friends = [
        "ahmad",
        "walid",
        "zahir",
        "ali",
        "mouhammad",
        "omar",
        "bachir",

    ];
    

   /*1*/ console.log(friends);
  
/*3*/console.log(friends.length);//get lengt (the number of the array)
friends.length = 2;//select the first 2 array
console.log(friends) ;

/*4*/friends.splice(5,0,"obayda");
console.log(friends)

/*5*/if(Array.isArray(friends)){
     console.log("this is an array")
 }else{
    console.log("this is not an array")
 }
 if(Array.constructor === Array){
    console.log("this is an array");
 }
  /*2*/friends.sort();//for  order the array A->Z ; 1->100
  console.log(friends);


  var otherfriends = [
      "walaa",
      "jad",
      "alaa",
  ]
 
  var allfriend = friends.concat(otherfriends)


 var specialfriend = allfriend.indexOf("walid");// done the number of index
 specialfriends = allfriend.splice(3,5);
allfriend.sort();
 document.getElementById('test18').innerHTML="my friends are: " + allfriend;
 document.getElementById('test19').innerHTML="my specialfriends are: " + specialfriends;
 

 //practice

 var mymsg = [
     "msg1",
     "msg2",
     "msg3",
     "msg4",
 ];
 mymsg[0] = "msg5";//replace
 console.log(mymsg);

 mymsg.push("msg6");
 console.log(mymsg);

 mymsg.unshift("msg7");
 console.log(mymsg);

 mymsg.splice(1,2);
 console.log(mymsg);
 
 mymsg.splice(1,0,"let1","let2");

 if(Array.isArray(mymsg)){
     console.log("this is an array");
 }else{
     console.log("this is not an array");
 }
console.log(mymsg.length);

console.log(mymsg);

 mymsg.length = 2;
 console.log(mymsg);

console.log(mymsg.join("-"));



var mydate = new Date(),
mystring = mydate.toLocaleString();
console.log(mystring);



var number = 33;
var mynumber = number.toString();
console.log(typeof(mynumber));

//loop

/*
syntax for loop
it use to loop in an array
for (insialisation ; condition ; final expression){
    //statement
}
    insialisation: Eecuted before the loop once;
    condition شرط : for not repeat for the finity
final expression : (i++) == (i+=1) == (i=i+1);
*/

for (i=0 ; i<mymsg.length ; i++){
    console.log(mymsg[i]);

    
}

/* for/In loop syntax;
it use to loop in an object
for (variable in object){
    //statement
}
}*/

var car = {type:"honda" , model:"accord 1994", color:"gold" , price:"2000"}
var prop;
for(prop in car){
    console.log(prop + ":" + car[prop]);
}

/*advenced */
var i = 0;
for(;;){

if(i>10)break;

console.log(i);

i++;
}


/*practice*/

function generatoryears(start , end){
    "use strict";
var  years;
document.write("<select>");
    for(years = start ; years<=end ; years++){
      
       
document.write("<option value=\""+years+"\">" + years + "</option>");
    }
    document.write("/select");

}
generatoryears(1990,2020);


/*while syntax
while(condition){
    statement
}
*/

/*do while

do{
    statement
}
while(condition)*/

//continue| break;

var i , x;
mainloop:
for (i = 0 ; i <5 ; i++){

    childloop:
    for(x=15 ; x<20 ; x++){
        if(x===16){
           continue childloop;
        }
        if(x===18){
            break childloop;
         }
        console.log(i + "=>" + x);
    }
}
function f(){
    console.log("#");
}

for(j=1 ; j<=8 ; j++)
    for(i=8-j;i>=1 ; i--){

        console.log(j+ "=>" + i);
    }
/*jslint plusplus:true, evil:true*/

//ceil ; floor ; round ; min ; max ; random;

var x = Math.ceil(4.2);
console.log(x);

var y = Math.floor(4.2);
console.log(y);

var z = Math.round(4.5);
console.log(z);

var a = Math.max(1000.2 , 223, 100 ,320);
console.log(Math.round(a));

var b = Math.random();
console.log(Math.round(b*50));

/*regular expression syntax
pattern / attributes
search | replace | match | split | test
*/

/*[i] => case insensitive | for searching all letter whether it was upercase or loweracse
/*[g] => global searchfor | search all string;
//[m]  => multi line search
[...] character
[^...] not character
[a-z] range ex:replace "a" to "z"

letter+ => word contain one letter
letter {number} => word contain number of letter
letter{number , number} => word contain number or number of letter 
*/
var string = "i love elzero academi",
results = string.replace(/L/gi , "@");
console.log(results);

var string2 = "ahmed 446sarraj",
results2 = string2.replace(/[^0-5]/g , "a");
console.log(results2);

var string3 = "ahmaad saaarraj",
results3 = string3.replace(/a{2,}/g,"@" );
console.log(results3);

var df = true;

console.log(typeof(df));

//indexof | lastindexof for searching on the number of the  string
/*syntax : var x = "",
y = x.indexof("the string searching , number start");*/


//split convert string to array

var string = "i love json" ,
array = string.split("");

console.log(array);

var d = 3, 
f = d.toString();
console.log(typeof(f));

//date/time
/*
  new Date(); //print current date and time;
new Date(year , month , day[hour , minutes , second , millsecondes]); //
  */

  var datetime = new Date(2002 , 1 , 14 , 9);
  console.log(datetime);

  /* full format
    long format
    short format
    iso format
    */

    /*
    getDate();//the day of the month 1-31;
    getDay(); //the day of the week 0-6;
    getFull(); //get full year;
    getHours(); 
    getMinutes();
    getseconds();
    getMillseconds();    
    */
 var df = mydate.getSeconds();
 console.log(df);
