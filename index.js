var readlineSync = require("readline-sync");
const chalk = require('chalk');

score=0;
var username=readlineSync.question(chalk.bold.yellow("Please Enter your name? "));
console.log(" ");

console.log(chalk.bold.black.bgYellowBright("###---- Wellcome! to the MARVEL QUIZ ----###"));
console.log(" ");
 
 console.log(chalk.bold.magentaBright("Hello! " +username ));
 console.log(" ");
 console.log(chalk.bold.blackBright("* There are only TEN questions. Choose the right option, Each question having 1 mark. *"));
 console.log(" ");

function play(question,answer){
   
  var userAns = readlineSync.question(question);
   

  if(userAns===answer){
    console.log(chalk.bold.green("Congrats! You are right :) "));
    score=score+1;
  }
  else{
    console.log(chalk.bold.red("Oops! You are wrong :( "));
  }
  console.log(chalk.bold.bgMagenta("Your current score is : " + score));
  console.log("--------*---------");
  console.log(" ")
} 

var questions = [
{
  question : (chalk.bold.cyanBright('1.What was the first film in the Marvel Cinematic Universe?\n')) + (chalk.bold.cyan(' a:Thor\n b:The Incredeble Hulk\n c:Iron Man\n d:Captan America:The First Avenger\n')) + (chalk.bold.yellowBright('Ans:')),
  answer:"c"
},
{
  question:(chalk.bold.cyanBright('2.What is Thor’s hammer called?\n')) + (chalk.bold.cyan(' a:Lightbringer\n b:Mjolnir\n c:Gjallerhorn\n d:Strombringer\n')) + (chalk.bold.yellowBright('Ans:')),
  answer:"b"
},
{
  question : (chalk.bold.cyanBright('3.What year was the first Iron Man movie released kicking off the Marvel Cinematic Universe?\n')) + (chalk.bold.cyan(' a:2007\n b:2008\n c:2009\n d:2010\n')) +    (chalk.bold.yellowBright('Ans:')),
  answer : 'b'
},
{
  question:(chalk.bold.cyanBright('4.What fictional metal is found in Wakanda?\n'))+ (chalk.bold.cyan(' a:Unobatanium\n b:Nth meta\n c:Vibranium\n d:Mithril\n')) + (chalk.bold.yellowBright('Ans:')),
  answer:"c"

},
  
  {
  question : (chalk.bold.cyanBright('5.Whois the leader of S.H.I.E.L.D?\n'))+ (chalk.bold.cyan(' a:Nick Fury\n b:Tony Stark\n c:Bruce Banner\n d:Diana Prince\n')) + (chalk.bold.yellowBright('Ans:')),
  answer : "a"
},
{
  question:(chalk.bold.cyanBright('6.In Avengers: Infinity War, what is the name of the villain whos on a mission to collect the infinity stones?\n'))+ (chalk.bold.cyan(' a:Malekith\n b:Thanos\n c:Darren Cross\n d:Helmut Demo\n')) + (chalk.bold.yellowBright('Ans:')),
  answer:"b"
},
{
  question:(chalk.bold.cyanBright('7.Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?\n'))+ (chalk.bold.cyan(' a:Loki\n b:Thor\n c:Collector\n d:Vision\n')) + (chalk.bold.yellowBright('Ans:')),
  answer:"a"
},
{
  question:(chalk.bold.cyanBright('8.Who is Black Panther’s sister?\n '))+ (chalk.bold.cyan('a:Natasha\n b:Shuri\n c:Paper\n d:Gamora\n ')) + (chalk.bold.yellowBright('Ans:')),
  answer:"b"
},
{
  question:(chalk.bold.cyanBright('9.How many Infinity Stones are there?\n'))+ (chalk.bold.cyan(' a:5\n b:7\n c:6\n d:8\n')) + (chalk.bold.yellowBright('Ans:')),
  answer:"c"
},
{
  question:(chalk.bold.cyanBright('10.Which of the infinity stones is hidden on Vormir?\n'))+ (chalk.bold.cyan(' a:Mind Stone\n b:Power Stone\n c:Time Stone\n d:Soul Stone\n')) + (chalk.bold.yellowBright('Ans:')),
  answer:"d"
}
]

for(var i=0;i<questions.length;i++)
{
 var currentQuestion = questions[i];
 play(currentQuestion.question,currentQuestion.answer)
}

console.log(chalk.bold.black.bgRgb(255,255,0)("Final Score is :"+score+ " out of 10"));
console.log(" ");
console.log(chalk.italic.red ("Thanks For Playing....... Hope you enjoyed it!"))