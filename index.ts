import inquirer from "inquirer";
import chalk from "chalk";

let  myBalance = 10000;
let myPin = 1234;

console.log(chalk.green("\n \twelcome to Mehak shahbaz ATM machine\n"));

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.blue("Enter your pin code")
    }
]);
console.log(pinAnswer);

if(pinAnswer.pin === myPin){
    console.log(chalk.green("Pin is correct,login successfully!"));

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: chalk.blue("Select an operation"),
            choices: ["withdraw Amount","Check Balance"]
        }

    ])    
    if(operationAns.operation === "withdraw Amount"){
        let withdrawalAns = await inquirer.prompt([
            {
              name:"withdrawalMethod",
              type:"list",
              message:chalk.green("Select a withdrawal method:"),
              choices:["Fast Cash","Enter Amount"]  
            }
        ])
        if(withdrawalAns.withdrawalMethod === "Fast Cash"){
            let fastCashAns = await inquirer.prompt([
                {
                    name:"fastCash",
                    type:"list",
                    message:chalk.green("Select Amount:"),
                    choices:[1000,2000,4000,5000,8000,50000]
                }
            ])
            if(fastCashAns.fastCash > myBalance){
                console.log(chalk.red("Insufficent Balance"));
            }
            else{
                myBalance -= fastCashAns.fastCash
                console.log(`${fastCashAns.fastCash} witdraw successsfully!!`);
                console.log(`your remaining balance is ${myBalance}`);
                
                
            }
        }
    else if(withdrawalAns.withdrawalMethod === "Enter Amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: chalk.blue("Enter the amount to withdraw:")
            }
        ]);
        
        
        if(amountAns.amount > myBalance){
            console.log(chalk.red("Insufficient Balance"));
            
        }
        else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully!!`);
            console.log(`your remaining balance is: ${myBalance}`);
            }
               
        }
     
    }
else if (operationAns.operation === chalk.red("Check Balance")){
    console.log(`Your Account Balance is : ${myBalance}`);
    }

}
else{
    console.log(chalk.red("Pin is incorrect, try again"));
}
