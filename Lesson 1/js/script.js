'use strict';

let money, time ;
function start() {
    money = +prompt("Your budget for the month?", "");
    time = prompt("Enter the date in the format YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Your budget for the month?", "");
    }

}

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

///////1 type of cycle
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {

        let expQuestion1 = prompt("Enter a mandatory expense item for this month.", ""),
            expQuestion2 = prompt("How much will it cost?", "");

        if ((typeof (expQuestion1)) === 'string' && (typeof (expQuestion1)) != null && (typeof (expQuestion2)) != null &&
            expQuestion1 != '' && expQuestion2 != '' && expQuestion1.length < 50) {
            console.log("done");
            appData.expenses[expQuestion1] = expQuestion2;

        } else {
            alert("You entered something wrong!")
            i--;

        }


    }
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("Daily budget : " + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay <= 100) {
        console.log("Minimum level of wealth.");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
        console.log("Average level of affluence.");
    } else if (appData.moneyPerDay >= 2000) {
        console.log("High level of affluence.");
    } else {
        console.log("Error");
    }

}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("What is the amount of savings?", ""),
            precent = +prompt("What percentage?", "")

        appData.monthIncome = save / 100 / 12 * precent;
        alert("Monthly income from your deposit")
    }
}


function chooseOptExpenses() {
    for(let i = 1; i < 4; i++){
        let a = +prompt("An optional expense?", "");
        appData.optionalExpenses[i] = a;
    console.log(appData.optionalExpenses[i]);
    }
    
}
// start();
// chooseExpenses();
// detectDayBudget();
// detectLevel();
// checkSavings();
chooseOptExpenses();

//////// 2 type of cycle
// let i = 0;
// while (i < 2) {

//     let expQuestion1 = prompt("Enter a mandatory expense item for this month.", ""),
//         expQuestion2 = prompt("How much will it cost?", "");
//     i++;
//     if ((typeof (expQuestion1)) === 'string' && (typeof (expQuestion1)) != null && (typeof (expQuestion2)) != null &&
//         expQuestion1 != '' && expQuestion2 != '' && expQuestion1.length < 50) {
//         console.log("done");
//         appData.expenses[expQuestion1] = expQuestion2;

//     } else {
//         alert("You entered something wrong!")
//         i--;

//     }
// }

//////////////3 type of cycle
// let i = 0;
//  do{

//     let expQuestion1 = prompt("Enter a mandatory expense item for this month.", ""),
//         expQuestion2 = prompt("How much will it cost?", "");
//     i++;
//     if ((typeof (expQuestion1)) === 'string' && (typeof (expQuestion1)) != null && (typeof (expQuestion2)) != null &&
//         expQuestion1 != '' && expQuestion2 != '' && expQuestion1.length < 50) {
//         console.log("done");
//         appData.expenses[expQuestion1] = expQuestion2;

//     } else {
//         alert("You entered something wrong!")
//         i--;

//     }
// }while (i < 2);