var game_on = 1;//Used as flag to determine if the game requires reseting.
var comp_choice = Math.floor(Math.random()*3);//Computers choise, 0-2.

//Defines what to do if the user wins, loses, or ties.
var user_win = function(){
  $(div4).append("<br /><h2 style='background-color:yellow;' >You Win!</h2>");
}
var tie = function(){
  $(div4).append("<br /><h2 style='background-color:blue;' >It's a Tie!</h2>");
}
var comp_win = function(){
  $(div4).append("<br /><h2 style='background-color:red;' >You Lose!</h2>");
}

//defines what must be done once the user selects a choice
var choices = ["Rock","Paper","Scissors"];
var choice_was_made = function(i){
  let j = comp_choice;
  game_on = 0;//Sets the game_on flag to zero, so that the user cannot make another choice without reseting.
  //For debugging:
  /* 
  console.log("Users Choice: "+i);
  console.log("Computers Choice: "+j);
  */
  $("#div3").append( "<br /><h5>Your Choide was: "+choices[i]+"<br />Computers choice was: "+choices[j]+"</h5>");
  if(i ==(j+1)||i==(j-2)){
     user_win();
  }else if(i==j){
    tie();
  }else{
    comp_win();
  }
}


//Starts game when told to by clicking the "Click to play" button (btn1)
var btn1_clicked = 0;//Flag to determine if btn1 is functioning as start or reset button.

$("#btn1").click(function(){
  //alert("Button #1 clicked!");
  if(btn1_clicked == 0){
    $("#div1").append("<p>Choose one:</p>");

    for(var i = 0; i<3;i++){
      let j=i;
      $("#div2").append( "<br/><button id="+choices[i]+" >"+choices[i]+"</button>");
      $("#"+choices[i]).click(function(){
      //document.getElementById(choices[i]).onclick= function(){
        if(game_on){

          //alert(choices[j]+" was chosen");
          choice_was_made(j);
        }
      //};
      });
    }

    $("#btn1").val("Reset");
    btn1_clicked = 1;
  }else{
    game_on = 1;
    comp_choice = Math.floor(Math.random()*3);
    $("#div3").empty();
    $(div4).empty();
  }
});
