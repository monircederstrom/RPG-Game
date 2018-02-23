type="text/javascript"

var jjhp = 180;
var jchp = 150;
var jwhp = 100;
var dwhp = 120
// on.click (links id) function to start the game that encapuslates the entire game
$(document).ready(function(){
    $(".enemies").hide();
    $("#button").hide();
    $(".fight").hide();
    $(".outcome").hide();
    $(".defender").hide();

    $(".jjhp").append("JJ WATT: " + jjhp);
    $(".jchp").append("Jadeveon Clowney: " + jchp);  
    $(".jwhp").append("Jon Weeks: " + jwhp);  
    $(".dwhp").append("Deshaun Watson: " + dwhp);





//If JJ is chosen, push selectec character to Your Character div
$("#jj").click(function() {
    // push remaining characters to Enemies avaliable
    $(".enemies").show();
    $("#jc").appendTo(".enemies");
    $("#jw").appendTo(".enemies");
    $("#dw").appendTo(".enemies");
// on.click function to select enemy and push to defender and hide other characters
    $("#jc").click(function(){
        $("#jc").appendTo(".defender");
        $(".defender").show();
        $("#button").show();
        $("#jw").hide();
        $("#dw").hide();
        
    });

    $("#jw").click(function(){
        $("#jw").appendTo(".defender");
        $(".defender").show();
        $("#button").show();
        $("#jc").hide();
        $("#dw").hide();
    });
    $("#dw").click(function(){
        $("#dw").appendTo(".defender");
        $(".defender").show();
        $("#button").show();
        $("#jw").hide();
        $("#jc").hide();
    });
    
});
//If Clowney is chosen, push selectec character to Your Character div
$("#jc").click(function() {
    $(".enemies").show();
    $("#jj").appendTo(".enemies");
    $("#jw").appendTo(".enemies");
    $("#dw").appendTo(".enemies");

   // push remaining characters to Enemies avaliable
    $("#jj").click(function(){
        $("#jj").appendTo(".defender");
        $(".defender").show();
        $("#button").show();
        $("#jw").hide();
        $("#dw").hide();
    });
// on.click function to select enemy and push to defender and hide other characters
    $("#jw").click(function(){
        $("#jw").appendTo(".defender");
        $(".defender").show();
        $("#button").show();
        $("#jj").hide();
        $("#dw").hide();
    });
    $("#dw").click(function(){
        $("#dw").appendTo(".defender");
        $(".defender").show();
        $("#button").show();
        $("#jw").hide();
        $("#jj").hide();
    });



});
//If Weeks is chosen, push selectec character to Your Character div
$("#jw").click(function() {
    // push remaining characters to Enemies avaliable
    $(".enemies").show();
    $("#jc").appendTo(".enemies");
    $("#jj").appendTo(".enemies");
    $("#dw").appendTo(".enemies");


    $("#jc").click(function(){
        $("#jc").appendTo(".defender");
        $(".defender").show();
        $("#button").show();
        $("#jj").hide();
        $("#dw").hide();
    });
// on.click function to select enemy and push to defenderand hide other characters
    $("#jj").click(function(){
        // push remaining characters to Enemies avaliable
        $("#jj").appendTo(".defender");
        $(".defender").show();
        $("#button").show();
        $("#jc").hide();
        $("#dw").hide();
    });
    $("#dw").click(function(){
        $("#dw").appendTo(".defender");
        $(".defender").show();
        $("#button").show();
        $("#jj").hide();
        $("#jc").hide();
    });
    
});
//If Watson is chosen, push selectec character to Your Character div
$("#dw").click(function() {

// push remaining characters to Enemies avaliable
    $(".enemies").show();
    $("#jc").appendTo(".enemies");
    $("#jw").appendTo(".enemies");
    $("#jj").appendTo(".enemies");

    $("#jc").click(function(){
        $("#jc").appendTo(".defender");
        $(".defender").show();
        $("#button").show();
        $("#jw").hide();
        $("#jj").hide();
    });
// on.click function to select enemy and push to defender and hide other characters
    $("#jw").click(function(){
        $("#jw").appendTo(".defender");
        $(".defender").show();
        $("#button").show();
        $("#jc").hide();
        $("#jj").hide();
    });
    $("#jj").click(function(){
        $("#jj").appendTo(".defender");
        $(".defender").show();
        $("#button").show();
        $("#jw").hide();
        $("#jc").hide();
    });
    
});

});

 


