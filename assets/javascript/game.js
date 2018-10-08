$(document).ready(function() {
    
var wins = 0;
var losses = 0;
var targetNumber = 0;
var randomX = 19;
var totalScore = 0;
var b1 = 0;
var b2 = 0;
var b3 = 0;
var b4 = 0;

// console.log(totalScore);

$("#start").on("click", function() {
    targetNumber = 0;
    randomX = [Math.floor(Math.random() * 120)];
    targetNumber = randomX;
    $("#targetNumber").append(targetNumber);
})

$("#button1").on("click", function () {
    if (b1) {
        totalScore = totalScore + b1;
    }
    else {
        b1 = Math.floor(Math.random() * 12);
    } 
    $("#totalScore").text("Your Total Score so far is: "+ totalScore);
    console.log(b1);
}
);

$("#button2").on("click", function () {
    if (b2) {
        totalScore = totalScore + b2;
    }
    else {
        b2 = Math.floor(Math.random() * 12);
    } 
    $("#totalScore").text("Your Total Score so far is: "+ totalScore);
    console.log(b2);
}
);

$("#button3").on("click", function () {
    if (b3) {
        totalScore = totalScore + b3;
    }
    else {
        b3 = Math.floor(Math.random() * 12);
    } 
    $("#totalScore").text("Your Total Score so far is: "+ totalScore);
    console.log(b3);
}
);

$("#button4").on("click", function () {
    if (b4) {
        totalScore = totalScore + b4;
    }
    else {
        b4 = Math.floor(Math.random() * 12);
    } 
    $("#totalScore").text("Your Total Score so far is: "+ totalScore);
    console.log(b4);
}
);

if (totalScore === targetNumber) {
     wins++;
     console.log(wins);
     $("#wins").html("Here are your wins so far: " + wins);
     }
    else if (totalScore > targetNumber){
    losses++;
    console.log(losses);
    $("#losses").html("Here are your losses so far: " + losses);
    }


$("#reset").on("click", function() {
    targetNumber="";
    $("#targetNumber").html(targetNumber);
})



});