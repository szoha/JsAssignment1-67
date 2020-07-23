// ------------ Chapter No 1------------------

// 1- Write a script to greet your website visitor using JS alert box.
// var name = prompt("what is your name");
// alert("welcome " + name);

// 2- Write a script to display following message on your web page:
//alert("Error! Please enter a valid password.");

// 3- Write a script to display following message on your web page: (Hint : Use line break)
//alert("Welcome to JS Land... \n Happy Coding!");

// 4- Write a script to display following messages in sequence:
//alert("welcome to JS Land...");
//alert("Happy Coding!");

// 5- Generate the following message through browser’s developer console:
//console.log("Hello... I can run JS through my web browser's console");

 

// ------------ Chapter No 2------------------

// 1 - Declare a variable called username.
//var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name
//var myName = "Zohaib Sajjad Shah";


// 3. Write script to
//a) Declare a JS variable, titled message.
//b) Assign “Hello World” to variable message
//c) Display the message in alert box.

//var message;
//message = "Hello World";
//alert(message);


// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

/*var studentName = "Jhone Doe";
var age = "15 years old";
var certificate = "Certified Mobile Application Development"

alert(studentName);
alert(age);
alert(certificate);
*/


// 5. Write a script to display the following alert using one JS variable:
/* alert("PIZZA \nPIZZ \nPIZ\nPI\nP") */


// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)

/* var email = "szohaibs@gmail.com";
alert("My email address is "+ email); */



// 7- Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

/* var book;
book = "A smarter way to learn JavaScript";
alert(book);
 */



 // 8- Write a script to display this in browser through JS

 /* document.write("Yah! I can write HTML content through JavaScript"); */





// ------------ Chapter No 3------------------

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

/* var age = 29;
alert("I am "+age+" years old"); */


// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.


/* var visit = 19;
alert("You have visited this site "+visit+ " times"); */




//3-  Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:


/* var birthYear = 1991;
document.write("My birth year is "+birthYear + "<br>");

document.write("Data type of my declared variable is number"); */

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

/* var visitorname = "Zohaib";
var productTitle ="T-shirt(s)";
var quantity = 10;
document.write(visitorname + " ordered " + quantity+" "+productTitle +" on XYZ Clothing store"); */



// ------------ Chapter No 4------------------

// 1. Declare 3 variables in one statement.
/* var a = 10 , b=5 , c=1; */


// 2. Declare 5 legal & 5 illegal variable names.
// legal variables

/* var a =0;
var cloth=1;
var First_name=2;
var Number1=3;
var Many_number_in_1=4; */

// Illegal Variables

/* var 1number;
var first name;
var %this;
var this ;
var @firstname;
 */


// 3. Display this in your browser
//a) A heading stating “Rules for naming JS variables”
//b) Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable
//c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
//d) Variable names are case _________
//e) Variable names should not be JS _________


/* document.write("<strong> Rules for naming JS variables </strong><br>");
document.write("Variable names can only contain numbers, $, and _. For example $my_1stVariable<br>")
document.write("Variable names are case sensitive <br>")
document.write("variable names should not be JS Keywords") */


// ------------ Chapter No 5------------------

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

/* var a = 10;
var b= 20;
var sum = a+b;
document.write("Sum of "+a+" and "+b+ " is "+sum) */


// 2. Repeat task1 for subtraction, multiplication, division & modulus. 

// substration
/* var a = 100;
var b= 20;
var sub = a-b;
document.write("Substration of "+a+" and "+b+ " is "+sub) */ 

// Multiplication
/* var a = 100;
var b= 20;
var mul = a*b;
document.write("Multiplication of "+a+" and "+b+ " is "+mul) */

// Division
/* var a = 100;
var b= 20;
var div = a/b;
document.write("Divison of "+a+" and "+b+ " is "+div) */

// 3. Do the following using JS Mathematic Expressions a. Declare a variable. b. Show the value of variable in your browser like “Value after variable declaration is: ??”. c. Initialize the variable with some number. d. Show the value of variable in your browser like “Initial value: 5”. e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 6”. g. Add 7 to the variable. h. Show the value of variable in your browser like “Value after addition is: 13”. i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3.l. Output : “The remainder is : 0”.


/* var count;
document.write("Value after variable declaration is "+ count+"<br>");
count=5;
document.write("Initial value: "+ count+"<br>");
count++;
document.write("Value after increament is: "+ count+"<br>");
count = count+7;
document.write("Value after addition is: "+ count+"<br>");
count--;
document.write("Value after decrement is: "+ count+"<br>");
count = count%3;
document.write("The remainder is: "+ count+"<br>"); */


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

/* cost = 600;
tickets = 5;
document.write("Total cost to buy "+tickets+ " tickets to a movie is "+cost*tickets +"PKR") */


 // 5. Write a script to display multiplication table of any number in your browser. E.g

/*  var n = prompt("Enter number ");
 document.write("Table of "+n+"<br>")
 document.write(n +"x1="+n*1+"<br>");
 document.write(n +"x2="+n*2+"<br>");
 document.write(n +"x3="+n*3+"<br>");
 document.write(n +"x4="+n*4+"<br>");
 document.write(n +"x5="+n*5+"<br>");
 document.write(n +"x6="+n*6+"<br>");
 document.write(n +"x7="+n*7+"<br>");
 document.write(n +"x8="+n*8+"<br>");
 document.write(n +"x9="+n*9+"<br>");
 document.write(n +"x10="+n*10+"<br>"); */



 // 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.
//Conversion Formulae:

/* var cel = 25;
var far = (cel*9/5)+32;

var far2 = 70;
var cel2 = (far2-32)*5/9;


document.write(cel+"<span>&#8451;</span> " +"  is " +far+" <span>&#8457;</span><br>");
document.write(far2+"<span>&#8457;</span> " +"  is " +cel2+" <span>&#8451;</span>"); */


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
//a. Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges

/* item1 = 650;
quantity1 = 3;
total1= item1*quantity1;

item2 = 100;
quantity2= 7;
total2 = item2*quantity2;

shipping = 100;

total= total1+total2+shipping;

document.write("Price of item 1 is "+ item1+"<br>");

document.write("Quantity of item 1 is"+ quantity1+"<br>");

document.write("Price of item 2 is"+ item2+"<br>");

document.write("Quantity of item 2 is"+ quantity2+"<br>");

document.write("Shipping Charges "+ shipping+"<br>");

document.write("<br>")

document.write("Total cost of your order is "+  total); */




// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser


/* var totalmarks = 980;
var obtained = 804;
var percent = (obtained*100)/totalmarks;

document.write("Total marks: "+totalmarks+"<br>" )
document.write("Marks obtained: "+obtained+"<br>" )
document.write("Percentage: "+percent ) */



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

/* var dollarrate = 104.80;
var saudirate = 28;

var dollarihave = 10;
var riyalihave = 25;

var dollartotal = dollarrate*dollarihave;
var riyaltotal = saudirate * riyalihave;
var sum =dollartotal + riyaltotal;

document.write("Total Currency in PKR: "+ sum); */



// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression

/* var number = 10;
var  final = ((10+5)*10)/2
document.write(final); */



// 11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values.
//Output them to the screen like so: “They are either NN or NN years old”.


/* var cy = 2020;
var by = 1991;
var age = cy - by;

document.write("<h2>Age Calculator</h2><br>");
document.write("<br><br>")
document.write("Current Year: "+cy+"<br>");
document.write("Birth Year: "+by+"<br>");
document.write("Your age is:"+age+"<br>");
 */


 // 12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.
 //b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

 /* var r = 20;
 var pi = 3.142;
 var c = 2 * r * pi;
 var a = pi * r*r ;

 document.write("<h2>The Geometrizer </h2>");
 document.write("<br><br>");
 document.write("Radius of a circle:" + r+"<br>");
 document.write("The circumference is:" + c+"<br>");
 document.write("The area is: " + a+"<br>"); */


 // 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

/* var snack = "BBQ lays";
var age = 29;
var maxage = 80;
var amountperday = 2;
var total = (maxage - age)*2;

document.write("<h2>The Lifetime Supply Calculator</h2><br>");
document.write("<br><br>")
document.write("Favorite Snack: "+snack+"<br>");
document.write("Current age: "+age+"<br>");
document.write("Estimated Maximum Age:"+maxage+"<br>");
document.write("Amount of snacks per day: "+amountperday+"<br>");
document.write("You will need "+total +" "+ snack +" to last you until the ripe old age of "+ maxage +"<br>"); */




// ------------ Chapter No 6 - 9 --------


// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

/* var x = 10;

document.write("Result<br>");
document.write("The value of x is:" + x +"<br>");
document.write("<br>");
document.write("------------------------------");
document.write("<br>");

document.write("The value of ++x is:" + ++x +"<br>");
document.write("Now the value of x is:" + x +"<br>");
document.write("<br>");

document.write("The value of x++ is:" + x++ +"<br>");
document.write("Now the value of x is:" + x +"<br>");
document.write("<br>");

document.write("The value of --x is:" + --x +"<br>");
document.write("Now the value of x is:" + x+"<br>");
document.write("<br>");


document.write("The value of x-- is:" + x-- +"<br>");
document.write("Now the value of x is:" + x+"<br>");
document.write("<br>"); */


// What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;

/* var a =2;
var b=1;
var result = --a - --b + ++b + b--;


document.write("a is " +a+"<br>");
document.write("b is " +b+"<br>");
document.write("result is " +result+"<br>");
// 1 - 0 + 1 + 1 = result = 3
// a is 2, after --a , now a is 1 a=1
// b = 1 , after --b b=0, 
// ++b now b=1
//b-- 1 b=0

 */


 //3. Write a program that takes input a name from user & greet the user.

 /* var username = prompt("Enter your name:");
 document.write("Welcome "+username); */



 //5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.


 /* var n = prompt("Enter number ");
 if (n === ""){
    n=5
 };
 document.write("Table of "+n+"<br>")
 document.write(n +"x1="+n*1+"<br>");
 document.write(n +"x2="+n*2+"<br>");
 document.write(n +"x3="+n*3+"<br>");
 document.write(n +"x4="+n*4+"<br>");
 document.write(n +"x5="+n*5+"<br>");
 document.write(n +"x6="+n*6+"<br>");
 document.write(n +"x7="+n*7+"<br>");
 document.write(n +"x8="+n*8+"<br>");
 document.write(n +"x9="+n*9+"<br>");
 document.write(n +"x10="+n*10+"<br>"); */
 
 
 // 6. Take
//a) Take three subjects name from user and store them in 3 different variables.
//b) Total marks for each subject is 100, store it in another variable.
//c) Take obtained marks for first subject from user and stored it in different variable.
//d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)



/* var sub1 = prompt("Enter first subject");
var sub2 = prompt("Enter second subject");
var sub3 = prompt("Enter third subject");

var totalmarks = 100;
var totalmarksall = 100*3;
var obtmarks1 = prompt("Enter marks for subject 1");
var per1 = (obtmarks1*totalmarks)/100;
var obtmarks2 = prompt("Enter marks for subject 2");
var per2 = (obtmarks2*totalmarks)/100;
var obtmarks3 = prompt("Enter marks for subject 3");
var per3 = (obtmarks3*totalmarks)/100;

var totalpercent = (per1+per2+per3)/3;
var totalobtained = obtmarks1+obtmarks2+obtmarks3;

document.write("<table> <th><td>Subjects</td><td>total Marks</td><td>Marks Obtained</td><td>percentage</td></th>")


document.write("<tr><td> </td><td>"+sub1+"</td> <td>"+totalmarks+"</td> <td>"+obtmarks1+"</td> <td>"+per1+"%</td></tr>")

document.write("<tr><td> </td><td>"+sub2+"</td> <td>"+totalmarks+"</td> <td>"+obtmarks2+"</td> <td>"+per2+"%</td></tr>")

document.write("<tr><td> </td><td>"+sub3+"</td> <td>"+totalmarks+"</td> <td>"+obtmarks3+"</td> <td>"+per3+"%</td></tr>")

document.write("<tr><td> </td><td> </td> <td>"+totalmarksall+"</td> <td>"+totalobtained+"</td> <td>"+totalpercent+"%</td></tr></table>") */


// ---------------------- Chapter 9 - 10


//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

/* var city = prompt("Enter City name")

if (city === "Karachi"){
    alert("Welcome to city of lights")
} */





// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.


/* var gender = prompt("Enter Gender")
if(gender === "male"){
    alert("Good Morning Sir")
}
if (gender === "female") {
    
    alert("Good Morning Ma'am")
} */



// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

/* var color = prompt("Enter Traffic Color");

if (color==="Red") {
    alert("Must Stop")
} 
if (color==="Yellow") {
    alert("Ready to move")
} 
if (color==="Green") {
    alert("Move now")
} 
 */


 //4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”


 /* var fuel = prompt("Enter fuel");

 if (fuel < 0.25){
     alert("Please refill the fuel in your car")
 } */




 // 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

/* var a = 4;
if (++a === 5){ alert("given condition for variable a is true"); }
// alert generated    


 var b = 82; 
 if (b++ === 83){ alert("given condition for variable b is true"); }
// alert not generated

 var c = 12;
  if (c++ === 13){ alert("condition 1 is true"); }
   if (c === 13){ alert("condition 2 is true"); }
    if (++c < 14){ alert("condition 3 is true"); }
     if(c === 14){ alert("condition 4 is true"); }
// condition 2 and 4 are true
    
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
//alert shown
  if (true){ alert("True"); }
   if (false){ alert("False"); }
// true
if("car" < "cat"){ alert("car is smaller than cat"); } 
//alert shown */








//Task 6

// var sub1 =parseInt( prompt("Enter subject 1 marks"));
// var sub2 = parseInt(prompt("Enter subject 2 marks"));
// var sub3 = parseInt(prompt("Enter subject 3 marks"));
// var obtainedtotal = sub1+sub2+sub3;
// var grade;
// var remarks;
// var totalmarks = prompt("Enter Total marks");
// var percent = (obtainedtotal/totalmarks)*100;

// document.write("<h2>Marks Sheet</h2><br><br>");
// document.write("Total Marks: "+ totalmarks +"<br>");
// document.write("Marks obtained: "+ obtainedtotal +"<br>");
// document.write("Percentage: "+ percent +"<br>");

// if (percent >=80 && percent <100 ){grade="A-one";remarks="Excellent"; }
// if (percent >=70 && percent<80){grade="A";remarks="Good";}
// if (percent >=60 && percent < 70){grade="B";remarks="You need to imporve"; }
// if (percent <60){grade="Fail";remarks="Sorry"}

// document.write("Grade: "+ grade +"<br>");
// document.write("Remarks: "+ remarks +"<br>"); 






/* Chapter 12-13 */

// Task 1

// var character = prompt("Enter Character (number or string) e.g A, a or 11");

// if( character*1) {
// 	console.log(character + " is a number");
// } else {

// 	console.log(character + " is string" + "<br/>");
// 	if(character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) {
// 		console.log(character + " is uppercase letter");
// 	}
// 	else {
// 		console.log(character + " is lowercase letter");
// 	}
// }



// Task 2

// var num1 = parseInt(prompt("Enter first number"));
// var num2 = prompt("Enter second number");

// if(num1 > num2) {
// 	console.log(num1 + " num1 is greater");
// } else if(num1 < num2) {
// 	console.log(num2 + " num2 is greater");
// } else {
// 	console.log("They are equal");
// }



// Task 3

// var num = prompt("Enter number");


// if(num > 0) {
// 	console.log(num + " num is Positive");
// } else if(num < 0) {
// 	console.log(num + " num is Negative");
// } else {
// 	console.log("It is zero");
// }



// Task 4

// var chracter = prompt("Enter alphabet to check vowel");

// if(chracter == 'a' || chracter == 'e' || chracter == 'i' || chracter == 'o' || chracter == 'u') {
// 	console.log(chracter + " is vowel");
// } else {
// 	console.log(chracter + " is not vowel");
// }



// Task 6

// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// 	greeting = "Good day"; 
// } else { 
// 	greeting = "Good evening"; 
// }

// alert(greeting);



// Task 7

// var time = prompt("Enter Time in 24 hours (e.g. 0000 - 2300.  i.e 1900 = 7pm)");

// if(time >= 0000 && time < 1200) {
// 	console.log("Good Morning");
// } else if(time >= 1200 && time < 1700) {
// 	console.log("Good Afternoon");
// } else if(time >= 1700 && time < 2100) {
// 	console.log("Good Evening");
// } else {
// 	console.log("Good Night");
// }

// ----------------------------------------------- CHAPTER 12-13 END





/* CHAPTER 14-16 Arrays */

// TASK 1

/* var student_names = ["Michael", "John", "Tony"]; */

// Task2

/* var students = new Array(); */

// Task3

/* var strings = ["Saab", "Volvo", "BMW"]; */



// Task4

/* var numbers = [2,6,3,3,11,7,28,26]; */



// Task5

/* var booleans = [false, true, false, false, true] */;



// Task6

/* var mixed_array = ["Audi", true, 11]; */



// Task7

/* var education_qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]; */

// for(edu in education_qualifications) {
// 	console.log((+edu+1) + '). ',education_qualifications[edu]);
// }


// Task8

/* var scores = [320, 230, 480]; */

// function calculate_percentage(value) {
// 	return (value/500) * 100 + "%";
// }

// document.write("Score of " + student_names[0] + "is " + scores[0] + ". Percentage: " + calculate_percentage(scores[0]) + "<br/>" );
// document.write("Score of " + student_names[1] + "is " + scores[1] + ". Percentage: " + calculate_percentage(scores[1]) + "<br/>" );
// document.write("Score of " + student_names[2] + "is " + scores[2] + ". Percentage: " + calculate_percentage(scores[2]) + "<br/>" );



// Task 9

/* var colors = ["red", "green", "blue", "black", "yellow"]; */



// Task 10

// function sorting_scores() {

// 	document.write("Scores of Students: " + scores + " <br/>");

// 	scores.sort();

// 	document.write("Ordered Scores Of Students " + scores  );
// }
// sorting_scores();


// Task 11

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// function initialize_array() {

// 	var selectedCities = cities.slice(2,4);

// 	document.write("Selected Cities " + selectedCities  );
// }
// initialize_array();


// Task 12

// var arr = ["This ", " is ", " my ", " cat"];

// function join_array() {

// 	var joined = arr.join(" ");

// 	document.write("Selected Cities " + joined  );
// }
// join_array();


// Task 13 


// var devices = ["keyboard", "mouse", "printer", "monitor"];

// function FIFO() {

// 	console.log(devices.shift());

// }
// FIFO();
// FIFO();
// FIFO();
// FIFO();


// Task 14

// var devices1 = ["keyboard", "mouse", "printer", "monitor"];
// function LIFO() {

// console.log(devices1.pop());


// }
// LIFO();
// LIFO();
// LIFO();
// LIFO();


// Task 15

// var phones = ["Apple", "Samsung", "Motorolla", "Nokia", "Sony & Haeir"];



// document.write("<select>");
// for(i in phones) {
// 	document.write("<option>" + phones[i] + "</option>" );
// }
// document.write("</select>");



/////////////////////////////////////////////
// Chapter no 21-25
/////////////////////////////////////////////

//  Task-1  

// var first = prompt("Enter First Name");
// var last = prompt("Enter Last Name");

// var fullname = last +" " + first;

// document.write("Welcome " + fullname );



// Task-2

// var mobile = prompt("Enter your favoriate mobile model:");
// document.write("My favoriate mobile is:" + mobile);
// document.write("<br>");
// document.write("Length of string: "+mobile.length);



// Task-3

// var x = "Pakistani";
// var indexofn = x.indexOf("n");
// document.write("String: Pakistani<br>");
// document.write("Index of 'n':"+indexofn);



// Task-4

//  var x = "Hello World";
//  

//  for (var i = lenofx-1;i>=0;i--){
//      if(x[i] == "l"){
//          var indexofx = x-i
//          var     }
//  }
//  var indexofn = x.indexOf("i",);
//  document.write("String: Pakistani<br>");
//  document.write("Index of 'n':"+indexofn);

// var str = "Hello World";
// var indices = [];
// for(var i=0; i<str.length;i++) {
//     if (str[i] === "l") indices.push(i);
// }
// document.write("String:"+str);
// document.write("<br>");
// var lenofindices = indices.length;
// document.write("Last index of 'l':" + indices[lenofindices-1]);




// Task-5

// var str = "Pakistani";
// var ch = str[3];
// document.write("String:Pakistani <br>");
// document.write("Character at index 3:"+ch)


// Task-6
//  var first = prompt("Enter First Name");
//  var last = prompt("Enter Last Name");
//  var fullname = first.concat(last);
//  document.write("Welcome " + fullname );



// Task-7

// var str = "Hyderabad";
// var t = str.replace("Hydera","Islam");
// document.write("City: Hyderabad <br>");
// document.write("After replacement:" +t);


// Task-8

// var message = "Ali and Sami are best friends.They play cricket and football together.";

// var t = message.split("and").join(" & ");
// document.write(message+"<br>");
// document.write(t)


//Task-9

// var value = "472";
// document.write("value:"+value);
// document.write("<br>");
// document.write("Type:" + typeof(value));
// document.write("<br>");
// var intvalue = parseInt(value);
// document.write("value:"+intvalue);
// document.write("<br>");
// document.write("value:"+ typeof(intvalue));

// Task-10

// var u = prompt("Enter someting");
// var v = u.toUpperCase();
// document.write("User input:"+u)
// document.write("<br>");
// document.write("Upper case:"+v);


// Task-11

//  var u = prompt("Enter someting");
//  var v = u.toLowerCase();
//  document.write("User input:"+u);
//  document.write("<br>");
//  var b = v.charAt(0).toUpperCase();
// //  v.charAt(0) = b.toUpperCase();
//  document.write(" case:"+b);


//Task - 12

// var num = 35.36;
// var str = num.toString();
// var final = str.replace(".","");
// document.write("Number:"+str);
// document.write("<br>");
// document.write("Result:" + final);


//Task - 13

// var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
// var checkForSpecialChar = function(string){
//  for(i = 0; i < specialChars.length;i++){
//    if(string.indexOf(specialChars[i]) > -1){
//        return true
//     }
//  }
//  return false;
// }

// var str = prompt("Enter Username");
// if(checkForSpecialChar(str)){
//   alert("Enter valid username");
// } 




// Task-14

// var a = ["cake","apple pie", "cookie","chips","patties"];

// var userinput = prompt("Welcome to ABC bakery. What do you want to order sir/mam ?");

// userinput = userinput.toLowerCase();

// for(var i=0; i<a.length;i++) {
//        if (a[i] === userinput) {
//         document.write(userinput+" is available at index "+ i +" in our bakery")
//        }
//        else{
//         document.write("We are sorry."+userinput+" available is not available in our bakery.")
//        }
//        break;
//     }



// task-15


//  var password = prompt("Enter Password");
//  var firstchar =  password.charCodeAt(0);
//  var list = new Array ("/","!", "@", "#","$","%","%","^","&","*","(",")","_","+","=","-","`","~",";","<",">",".","?","[","]","{","}",",");
//  if(firstchar >=48 && firstchar<= 57){
//  alert("Password cannot begin with number.");
 
//  }
//  else if (password.length >6)
//      {
//          alert("Password length should be less than 7.");
        
//      }
// else if(password!=" ")
// {
//     var i;
//     var llength = list.length;
    
//     for(i=0; i<llength;i++){
//         if(password === list[i])
//         {
//             alert("Special symbols are not allowed.");
            
            
//         }
        
    
//         }
        
     
        
//     }

  
  
    
 


// Task-16

// var university = "University of Karachi";
// var arr = [];
// arr = university.split("");
// // document.write(arr.length)
//  for(var i=0; i <arr.length;i++){
//      document.write(arr[i]+"<br>");
//  }


// Task-17

// var input = prompt("Enter something");

// var lastchar = input.charAt(input.length-1);

// document.write("User input:" + input+"<br>");
// document.write("Last Character of input: " + lastchar);



// Task-18

// var t = "The quick brown fox jumps over the lazy dog";
// t = t.toLowerCase();
// var check = "the";

// var arr = [];
// var count=0;
// arr = t.split(" ");
// var arrlen = arr.length;

// for(var i =0 ; i <arrlen ; i++){
//     if(arr[i]==="the"){
//         count++;
//     }

// }

// document.write("Text: The quick brown fox jumps over the lazy dog <br>");
// document.write("There are "+count +" occurrence(s) of word 'the'");


/* <--:: Chapter 26-30  */


// Task 1 ---------------------------------------

// function positiveInteger() {
//   var number = prompt("Enter a positive integer");

//   if (number > 0) {
//       console.log(number + " is a positive");
//       console.log(Math.round(number));
//       console.log(Math.floor(number));
//       console.log(Math.ceil(number));
//   } else {
//       alert("you can't enter negative number")
//       console.log(number + " is negative" + "<br/>");
//       positiveInteger(); 
//   }
// }

// positiveInteger();



//  Task 2 -------------------------------------------

// function negativeInteger() {
//   var number = prompt("Enter a negative floating point number");

//   if (number < 0) {
//       console.log(number + " is -ve");
//       console.log(Math.round(number));
//       console.log(Math.floor(number));
//       console.log(Math.ceil(number));
//   } else {
//       alert("you can't enter positive number")
//       console.log(number + " is positive" + "<br/>");
//       negativeInteger(); 
//   }
// }
// negativeInteger();



//  Task 3 -------------------------------------------------------


// const absolute = () => {

// var num = prompt("Enter number");

// if(num > 0) {
//   Math.abs(num);
//   console.log(num + " is absolute");
// } else {
//   console.log("It is -ve");
//   let absolute = Math.abs(num);
//   console.log({absolute});
// }
// }
// absolute();





//  Task 4 ---------------------------------------------------


// const rollDice = () => {

// let random = Math.random() * 6;
// console.log(random);
// let dice = Math.ceil(random);
// console.log('Dice Shows', dice);
// alert('Dice rolled and shows ' + dice);
// }
// rollDice();




//  Task 5 ------------------------------------------------------

// const flipCoin = () => {

// let random = Math.random() * 2;
// let coin = Math.ceil(random);

// if(coin == 2) {
//   alert(coin + " Its Heads");
// } else {
//   alert( coin + " Its Tails");
// }
// }

// flipCoin();




//  Task 6 ----------------------------------------------------------

// const randomNumber = () => {

// let random = Math.random() * 100;
// let number = Math.ceil(random);

// alert( "Random number between 1 and 100 ==> " + number);
// console.log( "Random number between 1 and 100 ==> " , number);

// }
// randomNumber();



//  Task 7 -----------------------------------------------------

// const weightFunc = () => {

// var weight = prompt("Enter you weight (50, 50kgs, 50.5kgs or 50.2kilograms)");

// if(weight * 1) {
//   console.log("The weight is " + weight + " kilograms");
// } else if (weight.indexOf(' ')) {
//   alert("There is a space in your entry, enter the mentioned format");
//   weightFunc();
// } else {
//   let extracted = weight.split('k');
  
//   console.log("It was string", weight);
//   console.log("Extracted weight " + extracted[0] + " kilograms");
// }
// }

// weightFunc();




//  task 8 -----------------------------------------------


// const randomSecretNumber = () => {

// let random = Math.random() * 10;
// let secretNumber = Math.ceil(random);

// let userInput = prompt('Enter number between 1 and 10');

// if(userInput < 1 || userInput > 10) {
//   alert("you can not enter number less than 1 and greater than 10!");
//   randomSecretNumber();
// } else {
//   if(userInput == secretNumber) {
//     alert("Wow you must be a psychopath xD!");
//   } else {
//     alert("Try Again");
//     randomSecretNumber();
//   }
// }


// }
// randomSecretNumber();




/////////////////////////////////////////////
// Chapter no 31-34
/////////////////////////////////////////////




// Task-1

// var now = new Date();
// document.write(now)



// Task-2
// var monthsNames = ["Jan", "feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// var month = new Date();
// var monthnumber = month.getMonth();
// document.write(monthsNames[monthnumber]);


// Task-3
// var dayNames = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];

// var day = new Date();
// var daynumber = day.getDay();
//  document.write("Today is "+dayNames[daynumber]);


// Task-4
// var day = new Date();
// var daynumber = day.getDay();
// if( daynumber === 0 || daynumber===7){
//     document.write("It's Fun day");
// }


// Task-5

// var day = new Date();
// var daynumber = day.getDate();
// if(daynumber <16){
// document.write("First fifteen days of the month");
// }
// else
// {
//     document.write("Last days of the month");
// }



// Task-6
// var currentdate = new Date();
// var ms = currentdate.getTime();
// var min = currentdate.getTime()/(1000*60);


// document.write("Current Date: "+currentdate+"<br>");
// document.write("Elapsed milliseconds since January 1,1970: "+ ms+"<br>");
// document.write("Elapsed minutes since January 1, 1970: " + min)



// Task-7
// var day = new Date();
// var ch = day.getHours();

// if(ch <12){
//     document.write("It's AM");
// }
// else{
//     document.write("It's PM");
// }


// Task-8
// var LaterDate = new Date("Dec 31,2020");
// document.write("Later date: " +LaterDate);




//Task-9
// var firstday = new Date("June 18,2015");
// var firstdayday = firstday.getTime();

// var day = new Date();
// var cd = day.getTime();
// var diff = cd - firstdayday;

// var diffday = diff/(1000*60*60*24);

// document.write(diffday.toFixed(0)+" days have passed since 1st Ramadan,2015");




// Task-10
// var firstday = new Date("Jan 1,2015");
// var firstdayday = firstday.getTime();

// var day = new Date();
// var cd = day.getTime();
// var diff = cd-firstdayday;

// var diffday = diff/(1000);
// diffday = diffday.toFixed(0);

// document.write("On reference date "+firstday+" , "+ diffday + " seconds had passed since beginning of 2015");





// Task-11
//  var day = new Date();
//  var hours = day.getHours();
//  var newday = new Date();
//  newday.setHours(hours-1);
//  document.write("Current Date: "+day+"<br>");
//  document.write("1 hour ago,it was: "+newday);


// Task-12
//    var day = new Date();
//    var hours = day.getFullYear();
//    var newday = new Date();
//    newday.setFullYear(hours-100);
//    alert("Current Date: "+day+"\n100 years back,it was: "+newday);




// Task-13
//  var userage = prompt("Enter your age");
//  var d = new Date().getFullYear();
// var by = d-userage;
//  document.write("Your age is "+userage+"<br>");
//  document.write("Your birth year is "+by );


//Task-14
// var monthsNames = ["Jan", "feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// var name = "Zohaib Shah";
// var d = new Date().getMonth();
// var units = 450;
// var unitcharges = 16;
// var extracharges = 350;
// var totalcharges = units*unitcharges+extracharges;

// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: <strong>"+name+"</strong><br>");
// document.write("Month: <strong>"+monthsNames[d]+"</strong><br>");
// document.write("Number of units: <strong>"+units+"</strong><br>");
// document.write("Charges per unit: <strong>"+unitcharges+"</strong><br><br>");
// document.write("Net Amount Payable (within Due Date): <strong>"+units*unitcharges+"</strong><br>");
// document.write("Lat payment surcharge: <strong> 350 </strong><br>");
// document.write("Gross Amount Payable(afer Due Date): <strong>"+totalcharges+"</strong><br>");




//  Chapter No  35-38 

//  TASK1 -----------------------------

// const dateTime = () => {
// let date = new Date();
// console.log(date);
// }
// dateTime();




// Task 2 ---------------------------------

// const greet = () => {
// let firstName = prompt("Enter First Name");
// let lastName = prompt("Enter Last Name");

// alert('Welcome ' + firstName + ' ' + lastName);
// }




//  Task 3 --------------------------------------

// const sum = () => {
// let firstNumber = prompt("Enter First Number");
// let lastNumber = prompt("Enter Last Number");

// let sum = Number(firstNumber) + Number(lastNumber);

// return sum;
// }
// document.write(sum());



// Task 4 -------------------------------------------


// Calculator

// let num_1 = prompt('Enter number 1');
// let operator = prompt('Enter Operator');
// let num_2 = prompt('Enter number 2');

// const calc = (num1, opr, num2) => {


// 	if(opr === '+') {
// 		alert('Sum is: ' + num1 + num2);
// 	} else if(opr === '-') {
// 		alert('Difference is: ' + num1 - num2);
// 	} else if(opr === '*') {
// 		alert('Product is: ' + num1 * num2);
// 	} else if(opr === '/') {
// 		alert('Division is: ' + num1 / num2);
// 	} else {
// 		alert('Invalid Operator: ' + operator + ' passed as operator!');
// 	}

// }

// calc(num1, operator, num2);



// Task 5 --------------------------------------------


// var num = prompt("Enter number to be squared");

// const square = (a) => {

//   let square = a * a;
//   return square;
// }
// document.write(square(num));
// alert(square(num));





// Task 6 ----------------------------------------

// var input = prompt("Enter a number to calculate factorial!");

// const factorial = (num) => {

// 	if(num > 1) {
// 		return (num * factorial(num-1));
// 	}else {
// 		return 1;
// 	}

// }

// document.write(factorial(input));




//  Task 7 -----------------------------------


// const counting = () => {

// var startNumber = prompt("Enter Start Number");
// var endNumber = prompt("Enter End Number");

// for(var i = startNumber; i < endNumber; i++ ) {
//   console.log(i);
// }


// }
// counting();





//  Task 8 ---------------------------------------------

// var base = prompt("Enter Base");
// var perpendicular = prompt("Enter perpendicular");


// const calculateSquare = (b, p) => {
// 	return ((b*b) + (p*p));
// }

// const calcHypo = (b, p) => {
//  	let squaresSum = calculateSquare(b,p);
//  	let h = Math.sqrt(squaresSum);

// 	return h;
// }

// var hypo = calcHypo(base, perpendicular);
// console.log('Hypotenuse is: ', hypo);





//  Task 9 ---------------------------------------------


// var width = 20;
// var height = 30;

// const areaOfRectangle = (width, height) => {

// 	return width * height;

// }
// console.log('By Variables =>', areaOfRectangle(width,height));
// console.log('By Values => ' , areaOfRectangle(12, 12));





//Task 10 ----------------------------------------


// const palindrome = () => {
// var word = prompt('Enter a word to check if it is a palindrome');

// let reverseWord = word.split("").reverse().join("");

// if(word == reverseWord) {
//   alert(word + " is palindrom");
// } else {
//   alert(word + " and " + reverseWord + " are not palindrome");
// }

// }

// palindrome();




//  task 11 --------------------------------------


// const capitalize = () => {
// var sentence = prompt('Enter a sentence to make its first letter in uppercase');

// var modifiedSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

// alert('original sentence ' + sentence);
// alert('capitalized sentence ' + modifiedSentence);

// }

// capitalize();




//  Task 12 ---------------------------------------


// function findLongestWord(str) {
// var strSplit = str.split(' ');
// var longestWord = 0;
// var longestWordValue = '';
// for(var i = 0; i < strSplit.length; i++){
//   if(strSplit[i].length > longestWord){
//   longestWord = strSplit[i].length;
//   longestWordValue = strSplit[i];
//    }
// }
// // console.log({longestWord});
// return longestWordValue;
// }

// var longest_word = findLongestWord("The quick brown fox jumped over the lazy dog");
// console.log({longest_word});




//  Task 13 --------------------------------------

// function char_count(str, letter) 
// {
// var letter_Count = 0;
// for (var position = 0; position < str.length; position++) 
// {
//   if (str.charAt(position) == letter) {
//     letter_Count += 1;
//    }
// }
//   return letter_Count;
// }

// console.log('Repeated word "o" in  "oll Vowels JSResourceSo.com" =>> ',char_count('Oll Vowels JSResourceSo.com', 'o'));





//  task 14 ---------------------------------------------

// var radius = prompt('Enter radius of a circle');

// const circumference = (r) => {

// 	var circumference = (2 * 22/7 * r).toFixed(2);

// 	alert('Circumference is ' + circumference);

// }


// const area = (r) => {

// 	var area = (22/7 * r * r).toFixed(2);

// 	alert('Area is ' + area);

// }

// circumference(radius);
// area(radius);











// ======================================================================================
//===============================================================================
//==================

// Chapter 38 to 42

// Task-1
// var a;
// var b;
// a = prompt("Enter value for base")
// b= prompt("Enter value for power")
// power(a,b)
// function power(a,b){
//     var c = a**b;
//     alert(c)
// }

//===========================================================================
// Task-2
// var year = prompt("Enter year");
// a = leapyear(year);

// if (a ){
//     alert(year + " is Leap year" )
// }
// else{
//     alert(year + " is not Leap year")
// }


// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }

//===========================================================================

// Task-3
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// var a = parseInt (prompt("Enter value for triangle side1"));
// var b = parseInt (prompt("Enter value for triangle side2"));
// var c = parseInt (prompt("Enter value for triangle side3"));




// function sfun(a,b,c){
    
//     return (a+b+c)/2;
// }

// function area(a,b,c,s){
//          return Math.sqrt(s* (s - a) * (s - b) * (s - c))}


// var s = sfun(a,b,c);
// var area = area(a,b,c,s);

// alert("area of triangle is: " + area);


//===========================================================================

// Task-4
// var sub1 = parseInt(prompt("Enter marks of subject1."));
// var sub2 = parseInt(prompt("Enter marks of subject2."));
// var sub3 = parseInt(prompt("Enter marks of subject3."));

// mainfun(sub1,sub2,sub3);

// function mainfun(sub1,sub2,sub3){
//     alert("Average is : " + avg(sub1,sub2,sub3));
//     alert("Percentage is : " + percent(sub1,sub2,sub3));
    
// }

// function avg(sub1,sub2,sub3){
//     return (sub1+sub2+sub3)/3
// }

// function percent(sub1,sub2,sub3){
//     return ((sub1+sub2+sub3)*100)/300;
   
// }


//===========================================================================


//Task-5

    //  var a = prompt("Enter String");
    //  var b = prompt("Enter char you want to check");

//   alert(a.length);
//  
//function indexof(a,b){
//for(var i = 0 ; i <= a.length;i++){
 //    if(a[i] === b){
   //      alert("Index position of: "+b +" is " + i);
     //    break;
   //  }
    // if(i === a.length){
        
  //alert("Not Found");
 
    // }
 // }
//}

//===========================================================================


//Task-6
// var s = prompt("Enter Sentence");
// function disemvowel(str) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
  
//   return str.split('').filter(function(el) {
//     return vowels.indexOf(el.toLowerCase()) == -1;
//   }).join('');
// }

// alert(disemvowel(s));
    
//===========================================================================

//Task-7









//===========================================================================

//Task-8

// var d = parseInt(prompt("Enter distance between 2 cities."));

// meter(d)
// feet(d)
// inches(d)
// cm(d)

// function meter(km){
//   alert ("Meters are : "+ km*1000);
// }

// function feet(km){
//   alert("Feets are : "+km*3280.84);
  
// }

// function inches(km){
//   alert("Inches are : "+km*39370.1);
// }

// function cm(km){
//   alert("Centimeter are : "+km * 100000);
// }




//===========================================================================

//Task-9

// var w = parseInt(prompt("Enter worked hours: "));

// if(w>40){
// t = (w - 40)*12;
// alert("Over time Rs: " + t)
// }


//===========================================================================

//Task-10

// var a = parseInt(prompt("Enter amount: "));
// var ca = 0;
// var cb = 0;
// var cc = 0;

//    while(a >= 100){
//      a = a-100;
//      ca++;
//    }

//    if (a < 100 && a >=50 ){
//      while(a >=50) {
//         a = a-50;
//       cb++;
//      }
//   }

//   if (a <50){
//     while(a < 50){
//        a = a-10;
//         cc++;
//        if ( a == 0){
//          break;
//        } 
//      }
//     }

// document.writeln("You will have "+ ca +" hundreds notes, "+ cb +" fifty notes, "+ cc + " ten notes");



//===========================================================================
//===========================================================================
//===========================================================================
//===========================================================================


// Chapter 43 - 48

// Task-1

// function welcome()
// {
//   alert("Welcome to this website.")
// }


//===========================================================================

//Task-2

//  function welcome()
//  {
//    alert("Thanks for purchasing this mobile phone.")
//  }

//=================================================================================


// Task-3

// function deleted(e){
  
//   e.parentNode.parentNode.remove();
// }



//=================================================================================

// Task - 4 done in Index.html page.row



//=================================================================================

// Task -5 

// function increment(){
//   var count =document.getElementById('counter');
//   count.value =+ count.value+1
//  }

//  function decrement(){
//   var count =document.getElementById('counter');
//   count.value = count.value-1;
//  }



////////////////////////////////////// 

// Chapter 49 - 52

//task -1 

// function signup(){

//   var username = document.getElementById('name');
//   var user = username.value;
//   var email = document.getElementById('email');
//   var em = email.value;
//   var pass = document.getElementById('password');
//   var pas = pass.value;

//   document.writeln("Username :" + user  );
//   document.write("<br>")
//   document.writeln(" email is : "+ em );
//   document.write("<br>")
//   document.writeln( " Password is : " + pas);

// }


//================================================
// task-2


// function myFunction() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more"; 
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less"; 
//     moreText.style.display = "inline";
//   }
// }




//================================================
// task-3




