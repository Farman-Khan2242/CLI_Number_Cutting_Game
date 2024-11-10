#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"
let num: number[] = []
for(let i = 1; i <= 30;i++){
    num.push(i);
}

console.log(chalk.bold.greenBright(`Welome to the number cutting game!..`));
let condition = true;
let player1 = await inquirer.prompt([
  {
    name: "player1num",
    type: "password",
    message: "Player 1 Choose Your Number between 1-30:",
    validate:(input:number)=>{
      if(isNaN(input)){
        return "Please enter valid number:"
      }
      return true
    }
  },
]);
let player2 = await inquirer.prompt([
  {
    name: "player2num",
    type: "password",
    message: "Player 2 Choose Your Number between 1-30:",
    validate:(input:number)=>{
      if(isNaN(input)){
        return "Please enter valid number:"
      }
      return true
    }
  },
]);

// if u want to play with 3 player just uncomment player 3 input & line no 76 to 79
// let player3 = await inquirer.prompt([
//   {
//     name: "player3num",
//     type: "password",
//     message: "Player 3 Choose Your Number between 1-30:",
//     validate:(input:number)=>{
//       if(isNaN(input)){
//         return "Please enter valid number:"
//       }
//       return true
//     }
//   },
// ]);
while (condition) {
  let number_answer = await inquirer.prompt([
    {
      name: "numbers",
      type: "list",
      message: "Cut your number:",
      choices: num,
    },
  ]);

if (parseInt(number_answer.numbers) === parseInt(player1.player1num)) {
    console.log(chalk.blueBright(
        `Congratulation! PLayer 1 wins \n his number was ${player1.player1num}:`
      ));
    condition = false;
    }

if (parseInt(number_answer.numbers) === parseInt(player2.player2num)) {
     console.log(chalk.blueBright(
      `Congratulation! PLayer 2 wins \n his number was ${player2.player2num}:`
     ));
     condition = false;
   }

// if (parseInt(number_answer.numbers) === parseInt(player3.player3num)){
//         console.log(chalk.blueBright(`Congratulation! Player 3 wins \n his number was ${player3.player3num}`));
//         condition = false;
//     }
    
  for (let i of num){
    if (number_answer.numbers === i) {
      num.splice(num.indexOf(i), 1);
    }
  }
}