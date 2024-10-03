//                           CHAPTER NO 17-20
//                           ARRAYS AND LOOP

//                            ANSWER NO 1:

// let multiArray = [[]];
//                            ANSWER NO 2:

// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2 ],
//     [2, 1, 0, 1]
// ];
// console.log(matrix); 

//                            ANSWER NO 3:

    // for ( let i = 1; i <= 10; i++){
    //  console.log (i);}

//                            ANSWER NO 4:
// let tableNumber = parseInt(prompt("Enter your table number"))
// let tableLenght = parseInt( prompt("Enter your table lenght"))
// for (let i=0; i <= tableLenght ; i++)
// {
//     console.log(`${tableNumber} * ${i} = ${tableNumber * i}`);
// }

//                            ANSWER NO 5:
// let fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Stawberry"];
// for( let i = 0; i < fruits.length; i++){
// console.log(fruits[i])
// };
//                            ANSWER NO 6 part(A):

// for (let i = 1 ; i<=15 ; i++)
// {
//     console.log(i)
// }
//                            ANSWER NO 6 part(B):
// for (let i = 10 ; i>=1 ; i--)
//     {
//         console.log(i)
//     }
                    
//                            ANSWER NO 6 part(C):
    // for(let i=0; i<=20; i+=2){
    //     console.log(i)
    // }
//                            ANSWER NO 6 part(D):
// for(let i=1; i<=19; i+=2){
//     console.log(i)
// }
//                            ANSWER NO 6 part(E):
// for (let i = 0; i <=20 ; i +=2){
//     console.log(i + "k")
// }

//                           CHAPTER NO 21-25
//                           STRING METHOD
//                            ANSWER NO 1:

// let firstName = prompt("Enter your first Name");
// let lastName = prompt("Enter your last Name");
// document.write(firstName+ " " + lastName);

//                            ANSWER NO 2:

    // let phoneModel = prompt("Please enter your favorite mobile phone model:");
    // let modelLength = phoneModel.length;
    // document.write( phoneModel + `Lenght of string is: ${modelLength} characters.`);

//                            ANSWER NO 3:
// var xy = "Pakistani";
// var z = xy.lastIndexOf("n");
// document.write("String : Pakistani <br> Last index of 'n' is" + " " + z)

//                            ANSWER NO 4:
// var xy = "Hello World";
// var z = xy.lastIndexOf("l");
// document.write("String: Hello World <br> Last index of 'l':" + " " +z)

//                            ANSWER NO 5:
// var xy = "Pakistani";
// var z = xy.indexOf("i");
// document.write("String : Pakistani <br> Character at index 'i' is" + " "+ z)

//                            ANSWER NO 6:
// let firstName = prompt("Enter your first Name");
// let lastName = prompt("Enter your last Name");
// document.write(firstName+ lastName);

//                            ANSWER NO 7:
// let city = "Hyderabad"
// let cityTwo = "Islamabad"
// let replace = city.replace(`Hyder` , `Islam`)
// document.write(replace)

//                            ANSWER NO 8:
// var message = "Ali and Sami are best friends. They play cricket and football together";
// var replace = message.replaceAll(/and/g, "&")
// document.write(replace)
//                            ANSWER NO 9:
// var string = "4747";
// var num = Number(4747);
// document.write("value" + string  +"<br>" +"type" + "string:" + "<br> " + " value :" +num + "<br>"+ "Type:" +" number");

//                            ANSWER NO 10:
// var nut = ("peanuts");
// var nutt = nut.toUpperCase("peanuts");
// document.write(nutt)
//                            ANSWER NO 11:
// var userInput = "javascript"
// var firstChar = userInput.slice(0,1).toUpperCase();
// var remainingChar = userInput.slice(1).toLowerCase();
// var updatedValue = firstChar + remainingChar;
// document.write(updatedValue);

//                           CHAPTER NO 26-30
//                             Maths Method
//                             ANSWER NO 1 part (A):

// let num = parseFloat(prompt("Enter a number"));
// document.write("Number:" + num);
//                             ANSWER NO 1 part (B):
// let x = Math.round((prompt)("Enter positive integer"));
// document.write ( "floor value is:" + x);

//                             ANSWER NO 1 part (C):
// let x = Math.floor((prompt)("Enter positive integer"));
// document.write ( "floor value is:" + x);

//                             ANSWER NO 1 part (D):
// let x = Math.ceil((prompt)("Enter positive integer"));
// document.write ( "floor value is:" + x);

//                         ANSWER NO 2 part (A):

// let num = parseFloat(prompt("Enter a negative number "));
// document.write("Number:" + num);
                         // ANSWER NO 2 part (B):
// let x = Math.round((prompt)("Enter negative integer"));
// document.write ( "floor value is:" + x);

                         // ANSWER NO 2 part (C):
// let x = Math.floor((prompt)("Enter negative integer"));
// document.write ( "floor value is:" + x);

                         // ANSWER NO 2 part (D):
// let x = Math.ceil((prompt)("Enter negative integer"));
// document.write ( "floor value is:" + x);

//                         ANSWER NO 3:

// let x = (prompt("Enter a number:"));
// let y = Math.abs(x);
// alert("The absolute value of" + " " + x + " "+ "is" + " "+ y)

//                         ANSWER NO 4:
// let x = Math.floor(Math.random()*6)+1;
// document.write("Random dice value : " + " " + x);

//                         ANSWER NO 5:
// var headUser = prompt("Enter head username");
// var tailUser = prompt("Enter tail username");
// var toss = Math.floor(Math.random() * 2 + 1);
// console.log(toss);
// if (toss === 2) {
//   document.write(headUser + "Random coin value: Heads");
// } else {
//   document.write(tailUser + "Random coin value: Tails");
// }

//                         ANSWER NO 6:

// let x = Math.floor(Math.random()*100)+1;
// document.write("Random number between 1 & 100: " + " " + x);

//                         ANSWER NO 7
// var weighht =prompt("Enter your weight in kilograms  50  50kg 50.2kgs 50.2kilograms")
// if (weighht === 50){
//     document.write("The weight of user is 50")
// } else if(weighht==="50kg"){
//     document.write("The weight of user is 50 kg")
// } else if(weighht==="50.2kgs"){
//     document.write("The weight of user is 50.2 kgs")
// }
//  else if(weighht==="50.2kilograms"){
//     document.write("The weight of user is 50.2 kilograms")
// } else{
//     alert("your weight is incorrect!")
// }
//                       Answer No 8

// const secretNumber = Math.floor(Math.random() * 10) + 1;
// const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
// if (userGuess < 1 ) {
//     console.log("Please enter a valid number between 1 and 10.");}
//    else if (userGuess >10 ) {
//         console.log("Please enter a valid number between 1 and 10."); 

// } else if (userGuess === 6) {
//     console.log("Congratulations! You guessed the right number: " );
// } else {
//     console.log("Sorry, the secret number was: 6" );
// }




