" use strict ";

var display = document.getElementById("display");

function oneToTen(){
  var answer = "\*\*\*Output\*\*\*<br>";
  for(i = 1; i <= 10; i++) {
    answer += i + "<br>";
    document.getElementById("display").innerHTML = answer;
  }
}

function oddNumbers() {
  answer = "\*\*\*Output\*\*\*<br>";
  for(i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
    answer += i + "<br>";
    document.getElementById("display").innerHTML = answer;
    }
  }
}

function squares() {
  var square = 0;
  answer = "\*\*\*Output\*\*\*<br>";
  for(i = 1; square < 100; i++) {
    square = Math.pow(i, 2);
    answer += square + "<br>";
    document.getElementById("display").innerHTML = answer;
  }
}

function random4() {
  answer = "\*\*\*Output\*\*\*<br>";
  for(i = 0; i < 5; i++) {
    answer += Math.round(Math.random() * 100) + "<br>";
    document.getElementById("display").innerHTML = answer;
  }
}

function even(n) {
  answer = "\*\*\*Output\*\*\*<br>";
  for(i = 1; i < n; i++) {
    if(i % 2 == 0) {
      answer += i + "<br>";
      document.getElementById("display").innerHTML = answer;
    }
  }
}

function power(n) {
  answer = "\*\*\*Output\*\*\*<br>";
  for(i = 1; i <= n; i++) {
    answer += Math.pow(2,i) + "<br>";
    document.getElementById("display").innerHTML = answer;
  }
}

function arewethereyet() {
var print = "Arewethereyet?<br>";
var answer = "Yes";
var userInput = prompt("Arewethereyet?");

while (answer != userInput) {
  if (answer != userInput) {
  print += userInput + "<br>" + "Arewethereyet?<br>";
  userInput = prompt("Arewethereyet?");
}
}
  print += userInput;
  document.getElementById("display").innerHTML = print;
}

function triangle(n) {
var answer = "\*\*\*Output\*\*\*<br>";
  for(i = 1; i <= n; i++) {
    var line = "";
    for(j = 0; j < i; j++) {
      line += "*";
    }
    answer += line + "<br>";
  }
  document.getElementById("display").innerHTML = answer;
}

function tableSquare(n) {
var answer = "\*\*\*Output\*\*\*<br>";
  for(i = 1; i < n + 1; i++) {
    var line = "";
    for(j = 1; j < n + 1; j++) {
      line += "| " + (i*j) + " ";
    }
    line += "|";
    answer += line + "<br>";
  }
  document.getElementById("display").innerHTML = answer;
}

function tableSquares(n) {
  var answer = "\*\*\*Output\*\*\*<br>";

  for(i = 1; i <= n; i++) {
  var line = "";
    for(j = 1; j <= n; j++) {
      if ( (i*j).toString().length == 1) {
        if (j > 1) {
          line += "|   " + (i*j);
        } else {
          line += "| " + (i*j);
        }
      } else {
        line += "|" + (i*j);
      }
    }
    answer += line + "|<br>";
  }
  document.getElementById("display").innerHTML = answer;
}
