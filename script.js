let userName = prompt("Welcome to GC mini golf! What is your name?");
let holeCount = prompt(`Hi, ${userName}! Would you like to play 3 or 6 holes today?`);
let total = 0;

console.log(`Name: ${userName}`);
console.log(`Playing ${holeCount} holes`);

for (let i = 1; i <= holeCount; i++) {
    let puttCount = Number( prompt(`How many putts for hole ${i}? (par is 3)`));
    total += puttCount;
    console.log(puttCount);
}

let par = (holeCount * 3);
let overPar = (total - par);
console.log("Your total score is " + total + ".");

if (total === par) {
    console.log(`Good game, ${userName}. Your total par was: 0.`);
} else if (total > par) {
    console.log(`Nice try ${userName}... Your total par was: +${overPar}`);
} else if (total < par) {
    console.log(`Great job, ${userName}! Your total par was: ${overPar}`);
};