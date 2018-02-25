type="text/javascript"

var jjhp = 180;
var jchp = 150;
var jwhp = 120;
var dwhp = 130;
var clicks = 0;

// on.click (links id) function to start the game that encapuslates the entire game
$(document).ready(function(){
    $(".enemies").hide();
    $("#button").hide();
    $(".fight").hide();
    $(".outcome").hide();
    $(".defender").hide();
    $("#reset").hide();

    $(".jjhp").append("JJ Watt: " + jjhp);
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
            $("#jw").hide();
            $("#dw").hide();
            $("#button").show();
        //attack button function
            $("#button").click(function() 
            { 
                if (jchp > 0) {
                clicks = clicks + 1;
                console.log(clicks);
                jjhp = jjhp - (10 * clicks); 
                jchp = jchp - (10 * clicks); 
            
            $(".jjhp").text("JJ Watt: " + jjhp);
            $(".jchp").text("Jadeveon Clowney:" + jchp);
                }
            else {
                $(".outcome").show()
                $(".outcome").text("Outcome: JJ WATT WINS AGAIN!");
                $("#reset").show();
              $("#reset").click(function() {
                  location.reload(true);
              });
            }
        });
        });

        

        $("#jw").click(function(){
            $("#jw").appendTo(".defender");
            $(".defender").show();
            $("#button").show();
            $("#jc").hide();
            $("#dw").hide();
                //attack button function
            $("#button").click(function() 
            { 
                if (jwhp > 0) {
                clicks = clicks + 1;
                console.log(clicks);
                jjhp = jjhp - (10 * clicks); 
                jwhp = jwhp - (10 * clicks); 
            
            $(".jjhp").text("JJ Watt: " + jjhp);
            $(".jwhp").text("Jon Weeks:" + jwhp);
                }
            else {
                $(".outcome").show()
                $(".outcome").text("Outcome: JJ WATT WINS AGAIN!")
                $("#reset").show();
              $("#reset").click(function() {
                  location.reload(true);
              });
            }

        });
        });
        $("#dw").click(function(){
            $("#dw").appendTo(".defender");
            $(".defender").show();
            $("#button").show();
            $("#jw").hide();
            $("#jc").hide();

             //attack button function
            $("#button").click(function() 
            { 
                if (dwhp > 0) {
                clicks = clicks + 1;
                console.log(clicks);
                jjhp = jjhp - (10 * clicks); 
                dwhp = dwhp - (10 * clicks); 
            
            $(".jjhp").text("JJ Watt: " + jjhp);
            $(".dwhp").text("Deshaun Watson:" + dwhp);
                }
            else {
                $(".outcome").show()
                $(".outcome").text("Outcome: JJ WATT WINS AGAIN!")
                $("#reset").show();
              $("#reset").click(function() {
                  location.reload(true);
              });
            }

        });
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
            
            //attack button function           
            $("#button").click(function() 
            { 
                if (jchp > 0) {
                clicks = clicks + 1;
                console.log(clicks);
                jjhp = jjhp - (10 * clicks); 
                jchp = jchp - (10 * clicks); 
            
            $(".jjhp").text("JJ Watt: " + jjhp);
            $(".jchp").text("Jadeveon Clowney:" + jchp);
                }
            else {
                $(".outcome").show()
                $(".outcome").text("Outcome: JJ WATT WINS AGAIN!")
                $("#reset").show();
              $("#reset").click(function() {
                  location.reload(true);
              });
            }
        });

        });
    // on.click function to select enemy and push to defender and hide other characters
        $("#jw").click(function(){
            $("#jw").appendTo(".defender");
            $(".defender").show();
            $("#button").show();
            $("#jj").hide();
            $("#dw").hide();

            //attack button function           
            $("#button").click(function() 
            { 
                if (jwhp > 0) {
                clicks = clicks + 1;
                console.log(clicks);
                jwhp = jwhp - (8 * clicks); 
                jchp = jchp - (8 * clicks); 
            
                 $(".jwhp").text("Jon Weeks: " + jwhp);
                $(".jchp").text("Outcome: Jadeveon Clowney:" + jchp);
            }
            else {
                $(".outcome").show()
                $(".outcome").text("He's not Clowning around! Jadeveon WINS!")
                $("#reset").show();
              $("#reset").click(function() {
                  location.reload(true);
              });
            }
        });
        });
        $("#dw").click(function(){
            $("#dw").appendTo(".defender");
            $(".defender").show();
            $("#button").show();
            $("#jw").hide();
            $("#jj").hide();

            //attack button function           
            $("#button").click(function() 
            { 
                if (dwhp > 0) {
                clicks = clicks + 1;
                console.log(clicks);
                dwhp = dwhp - (7 * clicks); 
                jchp = jchp - (7 * clicks); 
            
                 $(".dwhp").text("Deshaun Watson: " + dwhp);
                $(".jchp").text("Jadeveon Clowney:" + jchp);
            }
            else {
                $(".outcome").show()
                $(".outcome").text("Outcome: He's not Clowning around! Jadeveon WINS!")
                $("#reset").show();
                $("#reset").click(function() {
                    location.reload(true);
                });
            }
        });
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
            //attack button function           
            $("#button").click(function() 
            { 
                if (jwhp > 0) {
                clicks = clicks + 1;
                console.log(clicks);
                jwhp = jwhp - (8 * clicks); 
                jchp = jchp - (8 * clicks); 
            
                 $(".jwhp").text("Jon Weeks: " + jwhp);
                $(".jchp").text("Jadeveon Clowney:" + jchp);
            }
            else {
                $(".outcome").show()
                $(".outcome").text("Outcome: He's not Clowning around! Jadeveon WINS!")
                $("#reset").show();
              $("#reset").click(function() {
                  location.reload(true);
              });
            }
        });
    });
// on.click function to select enemy and push to defenderand hide other characters
    $("#jj").click(function(){
        // push remaining characters to Enemies avaliable
        $("#jj").appendTo(".defender");
        $(".defender").show();
        $("#button").show();
        $("#jc").hide();
        $("#dw").hide();
        //attack button function
        $("#button").click(function() 
        { 
            if (jwhp > 0) {
            clicks = clicks + 1;
            console.log(clicks);
            jjhp = jjhp - (10 * clicks); 
            jwhp = jwhp - (10 * clicks); 
        
        $(".jjhp").text("JJ Watt: " + jjhp);
        $(".jwhp").text("Jon Weeks:" + jwhp);
            }
        else {
            $(".outcome").show()
            $(".outcome").text("Outcome: JJ WATT WINS AGAIN!")
            $("#reset").show();
              $("#reset").click(function() {
                  location.reload(true);
              });
        }

    });
    });
    $("#dw").click(function(){
        $("#dw").appendTo(".defender");
        $(".defender").show();
        $("#button").show();
        $("#jj").hide();
        $("#jc").hide();
            //attack button function           
            $("#button").click(function() 
            { 
                if (jwhp > 0) {
                clicks = clicks + 1;
                console.log(clicks);
                jwhp = jwhp - (8 * clicks); 
                dwhp = dwhp - (8 * clicks); 
            
                 $(".jwhp").text("Jon Weeks: " + jwhp);
                $(".dwhp").text("Deshaun Watson:" + dwhp);
            }
            else {
                $(".outcome").show()
                $(".outcome").text("Outcome: The rookie amazes us again! Watson's the WINNER!")
                $("#reset").show();
              $("#reset").click(function() {
                  location.reload(true);
              });
            }
        });
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
        //attack button function           
        $("#button").click(function() 
        { 
            if (dwhp > 0) {
            clicks = clicks + 1;
            console.log(clicks);
            dwhp = dwhp - (7 * clicks); 
            jchp = jchp - (7 * clicks); 

            $(".dwhp").text("Deshaun Watson: " + dwhp);
            $(".jchp").text("Jadeveon Clowney:" + jchp);
        }
        else {
            $(".outcome").show()
            $(".outcome").text("Outcome: He's not Clowning around! Jadeveon WINS!")
            $("#reset").show();
              $("#reset").click(function() {
                  location.reload(true);
              });
        }
        });
    });
// on.click function to select enemy and push to defender and hide other characters
    $("#jw").click(function(){
        $("#jw").appendTo(".defender");
        $(".defender").show();
        $("#button").show();
        $("#jc").hide();
        $("#jj").hide();
        //attack button function           
        $("#button").click(function() 
        { 
            if (jwhp > 0) {
            clicks = clicks + 1;
            console.log(clicks);
            jwhp = jwhp - (8 * clicks); 
            dwhp = dwhp - (8 * clicks); 
        
                $(".jwhp").text("Jon Weeks: " + jwhp);
            $(".dwhp").text("Deshaun Watson:" + dwhp);
        }
        else {
            $(".outcome").show()
            $(".outcome").text("Outcome: The rookie amazes us again! Watson's the WINNER!")
            $("#reset").show();
              $("#reset").click(function() {
                  location.reload(true);
              });
        }
    });
    });
    $("#jj").click(function(){
        $("#jj").appendTo(".defender");
        $(".defender").show();
        $("#button").show();
        $("#jw").hide();
        $("#jc").hide();
             //attack button function
             $("#button").click(function() 
             { 
                 if (dwhp > 0) {
                 clicks = clicks + 1;
                 console.log(clicks);
                 jjhp = jjhp - (10 * clicks); 
                 dwhp = dwhp - (10 * clicks); 
             
             $(".jjhp").text("JJ Watt: " + jjhp);
             $(".dwhp").text("Deshaun Watson:" + dwhp);
                 }
             else {
                 $(".outcome").show()
                 $(".outcome").text("Outcome: JJ WATT WINS AGAIN!")
                 $("#reset").show();
              $("#reset").click(function() {
                  location.reload(true);
              });
             }
 
         });
    });

});    

});



 


