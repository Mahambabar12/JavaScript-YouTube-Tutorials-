 //Loops//
//  For loop
//  while loop
//  do while loop

// For loop
// for (initial expression; condition; increment & decrement){
//     "Statement"
// }
// for (let i = 1 ; i <= 5 ; i++){
//     document.write(i + "<br>")
// }

// While Loop
let i = 1 ; 
while(i <= 5){
    console.log(i + "<br>")
i++;
}
// //do while loop
let x = 10;
do{
    document.write(x + "<br>")
    i++
}while (x <= 5)
//program to generate a multiplication table

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 50; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} x ${i} = ${result}`);
}