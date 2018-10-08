$(document).ready(function() {
    
var wins = 0;
var losses = 0;
var totalScore = 0;
var b1;
var b2;
var b3;
var b4;
targetNumber = [Math.floor(Math.random() * 120) + 19];
    b1 = Math.floor(Math.random() *12) +1;
    b2 = Math.floor(Math.random() *12) +1;
    b3 = Math.floor(Math.random() *12) +1;
    b4 = Math.floor(Math.random() *12) +1;
    $("#targetNumber").append(targetNumber);

$("#button1").on("click", function () {
    totalScore = totalScore + b1;
    $("#totalScore").text(totalScore);
    console.log(b1);
    if (totalScore === targetNumber) {
     wins++;
     console.log(wins);
     $("#wins").text("Here are your wins so far: " + wins);
     }
    else if (totalScore > targetNumber){
    losses++;
    console.log(losses);
    $("#losses").text("Here are your losses so far: " + losses);
    }
});

$("#button2").on("click", function () {
    totalScore = totalScore + b2;
    $("#totalScore").text(totalScore);
    console.log(b2);
    if (totalScore === targetNumber) {
        wins++;
        console.log(wins);
        $("#wins").text("Here are your wins so far: " + wins);
        }
       else if (totalScore > targetNumber){
       losses++;
       console.log(losses);
       $("#losses").text("Here are your losses so far: " + losses);
       }
}
);

$("#button3").on("click", function () {
    totalScore = totalScore + b3;
    $("#totalScore").text(totalScore);
    console.log(b3);
    if (totalScore === targetNumber) {
        wins++;
        console.log(wins);
        $("#wins").text("Here are your wins so far: " + wins);
        }
       else if (totalScore > targetNumber){
       losses++;
       console.log(losses);
       $("#losses").text("Here are your losses so far: " + losses);
       }
}
);

$("#button4").on("click", function () {
    totalScore = totalScore + b4;
    $("#totalScore").text(totalScore);
    console.log(b4);
    if (totalScore === targetNumber) {
        wins++;
        console.log(wins);
        $("#wins").text("Here are your wins so far: " + wins);
        }
       else if (totalScore > targetNumber){
       losses++;
       console.log(losses);
       $("#losses").text("Here are your losses so far: " + losses);
       }
}
);

$("#reset").on("click", function() {
    targetNumber = [Math.floor(Math.random() * 101) + 19];
    $("#targetNumber").html(targetNumber);
    totalScore =0;
    $("#totalScore").html(totalScore);
    b1 = Math.floor(Math.random() *12);
    b2 = Math.floor(Math.random() *12);
    b3 = Math.floor(Math.random() *12);
    b4 = Math.floor(Math.random() *12);
})

});