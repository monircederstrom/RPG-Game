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
                $(".outcome").text("Outcome: JJ WATT WINS AGAIN! Choose a new character to fight.");
                $("#jw").show();
                $("#dw").show();
                $("#jj").hide();
                jjhp = 180;


                //round two battle
                $("#jw").click(function() {
                    $(".jjhp").text("JJ Watt: " + jjhp);
                    $("#jc").hide();
                    $("#jj").show();
                    $(".outcome").text(" ");
                    $("#jw").prependTo("#defenders");
                });
                $("#dw").click(function() {
                    $(".jjhp").text("JJ Watt: " + jjhp);
                    $("#jc").hide();
                    $("#jj").show();
                    $(".outcome").text(" ");
                    $("#dw").prependTo("#defenders");
                });
                //reset button
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
                $(".outcome").text("Outcome: JJ WATT WINS AGAIN! Choose a new character to fight.")
                $("#jc").show()
                $("#dw").show()
                $("#jj").hide();
                jjhp = 180;
                //round two battle
                $("#jc").click(function() {
                    $(".jjhp").text("JJ Watt: " + jjhp);
                    $("#jw").hide();
                    $("#jj").show();
                    $(".outcome").text(" ");
                    $("#jc").prependTo("#defenders");
                });
                $("#dw").click(function() {
                    $(".jjhp").text("JJ Watt: " + jjhp);
                    $("#jw").hide();
                    $("#jj").show();
                    $(".outcome").text(" ");
                    $("#dw").prependTo("#defenders");
                });

                //reset button
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
                $(".outcome").text("Outcome: JJ WATT WINS AGAIN! Choose a new character to fight.");
                $("#jw").show()
                $("#jc").show()
                $("#jj").hide();
                jjhp = 180;
                 //round two battle
                 $("#jc").click(function() {
                    $(".jjhp").text("JJ Watt: " + jjhp);
                    $("#dw").hide();
                    $("#jj").show();
                    $(".outcome").text(" ");
                    $("#jc").prependTo("#defenders");
                });
                $("#jw").click(function() {
                    $("#dw").hide();
                    $("#jj").show();
                    $(".outcome").text(" ");
                    $("#jw").prependTo("#defenders");
                    $(".jjhp").text("JJ Watt: " + jjhp);
                });

                //reset button
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
                $(".outcome").text("Outcome: JJ WATT WINS AGAIN! Choose a new character to fight.");
                $("#jw").show();
                $("#dw").show();
                $("#jc").hide();
                jchp = 150;
                 //round two battle
                 $("#jw").click(function() {
                    $(".jchp").text("Jadeveon Clowney:: " + jchp);
                    $("#jj").hide();
                    $("#jc").show();
                    $(".outcome").text(" ");
                    $("#jw").prependTo("#defenders");
                });
                $("#dw").click(function() {
                    $(".jchp").text("Jadeveon Clowney:: " + jchp);
                    $("#jj").hide();
                    $("#jc").show();
                    $(".outcome").text(" ");
                    $("#dw").prependTo("#defenders");
                });

                //reset button
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
                $(".outcome").text("He's not Clowning around! Jadeveon WINS! Choose a new character to fight.");
                $("#jj").show();
                $("#dw").show();
                $("#jc").hide();
                jchp = 150;
                 //round two battle
                 $("#dw").click(function() {
                    $(".jchp").text("Jadeveon Clowney:: " + jchp);
                    $("#jw").hide();
                    $("#jc").show();
                    $(".outcome").text(" ");
                    $("#dw").prependTo("#defenders");
                });
                $("#jj").click(function() {
                    $(".jchp").text("Jadeveon Clowney:: " + jchp);
                    $("#jw").hide();
                    $("#jc").show();
                    $(".outcome").text(" ");
                    $("#jj").prependTo("#defenders");
                });

                //reset button
                $("#reset").show();
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
                $(".outcome").text("Outcome: He's not Clowning around! Jadeveon WINS! Choose a new character to fight.");
                $("#jw").show();
                $("#jj").show();
                $("#jc").hide();
                jchp = 150;
                 //round two battle
                 $("#jj").click(function() {
                    $(".jchp").text("Jadeveon Clowney:: " + jchp);
                    $("#dw").hide();
                    $("#jc").show();
                    $(".outcome").text(" ");
                    $("#jj").prependTo("#defenders");
                });
                $("#jw").click(function() {
                    $(".jchp").text("Jadeveon Clowney:: " + jchp);
                    $("#dw").hide();
                    $("#jc").show();
                    $(".outcome").text(" ");
                    $("#jw").prependTo("#defenders");
                });

                //reset button
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
                $(".outcome").text("Outcome: He's not Clowning around! Jadeveon WINS! Choose a new character to fight.");
                $("#jj").show();
                $("#dw").show();
                $("#jw").hide();
                jwhp =120;
                 //round two battle
                 $("#jj").click(function() {
                    $(".jwhp").text("Jon Weeks: " + jwhp);
                    $("#jc").hide();
                    $("#jw").show();
                    $(".outcome").text(" ");
                    $("#jj").prependTo("#defenders");
                });
                $("#dw").click(function() {
                    $(".jwhp").text("Jon Weeks: " + jwhp);
                    $("#jc").hide();
                    $("#jw").show();
                    $(".outcome").text(" ");
                    $("#dw").prependTo("#defenders");
                });

                //reset button
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
            $(".outcome").text("Outcome: JJ WATT WINS AGAIN! Choose a new character to fight.");
            $("#jc").show();
            $("#dw").show();
            $("#jw").hide();
            jwhp = 120;
             //round two battle
             $("#jc").click(function() {
                $(".jwhp").text("Jon Weeks: " + jwhp);
                $("#jj").hide();
                $("#jw").show();
                $(".outcome").text(" ");
                $("#jc").prependTo("#defenders");
            });
            $("#dw").click(function() {
                $(".jwhp").text("Jon Weeks: " + jwhp);
                $("#jj").hide();
                $("#jw").show();
                $(".outcome").text(" ");
                $("#dw").prependTo("#defenders");
            });

            //reset button
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
                $(".outcome").text("Outcome: The rookie amazes us again! Watson's the WINNER! Choose a new character to fight.");
                $("#jj").show();
                $("#jc").show();
                $("#jw").hide();
                jwhp = 120;
                 //round two battle
                 $("#jj").click(function() {
                    $(".jwhp").text("Jon Weeks: " + jwhp);
                    $("#dw").hide();
                    $("#jw").show();
                    $(".outcome").text(" ");
                    $("#jj").prependTo("#defenders");
                });
                $("#jc").click(function() {
                    $(".jwhp").text("Jon Weeks: " + jwhp);
                    $("#dw").hide();
                    $("#jw").show();
                    $(".outcome").text(" ");
                    $("#jc").prependTo("#defenders");
                });

                //reset button
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
            $(".outcome").text("Outcome: He's not Clowning around! Jadeveon WINS! Choose a new character to fight.");
            $("#jj").show();
            $("#jw").show();
            $("#dw").hide();
            dwhp = 130;
             //round two battle
             $("#jj").click(function() {
                $(".dwhp").text("Deshaun Watson: " + dwhp);
                $("#jc").hide();
                $("#dw").show();
                $(".outcome").text(" ");
                $("#jj").prependTo("#defenders");
            });
            $("#jw").click(function() {
                $(".dwhp").text("Deshaun Watson: " + dwhp);
                $("#jc").hide();
                $("#dw").show();
                $(".outcome").text(" ");
                $("#jw").prependTo("#defenders");
            });

            //reset button
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
            $(".outcome").text("Outcome: The rookie amazes us again! Watson's the WINNER! Choose a new character to fight.");
            $("#jj").show();
            $("#jc").show();
            $("#dw").hide();
            dwhp =130; 
            //round two battle
             $("#jj").click(function() {
                $(".dwhp").text("Deshaun Watson: " + dwhp);
                $("#jw").hide();
                $("#dw").show();
                $(".outcome").text(" ");
                $("#jj").prependTo("#defenders");
            });
            $("#jc").click(function() {
                $(".dwhp").text("Deshaun Watson: " + dwhp);
                $("#jw").hide();
                $("#dw").show();
                $(".outcome").text(" ");
                $("#jc").prependTo("#defenders");
            });

            //reset button
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
                 $(".outcome").text("Outcome: JJ WATT WINS AGAIN! Choose a new character to fight.");
                 $("#jc").show();
                 $("#jw").show();
                 $("#dw").hide();
                 dwhp =130;
                 //round two battle
                  $("#jc").click(function() {
                    $(".dwhp").text("Deshaun Watson: " + dwhp);
                    $("#jj").hide();
                    $("#dw").show();
                    $(".outcome").text(" ");
                    $("#jc").prependTo("#defenders");
                });
                $("#jw").click(function() {
                    $(".dwhp").text("Deshaun Watson: " + dwhp);
                    $("#jj").hide();
                    $("#dw").show();
                    $(".outcome").text(" ");
                    $("#jw").prependTo("#defenders");
                });

                //reset button
                 $("#reset").show();
              $("#reset").click(function() {
                  location.reload(true);
              });
             }
 
         });
    });

});    

});



 


