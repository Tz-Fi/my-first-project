//Relevant variables are declared to store various parameters.
var goats = 0;//Number of losses, or "goats won".
var cars = 0;//Number of wins, or "cars won".
var goat = 0;//Variable used to store which door is opened to reveal a goat.
var game_on = 1;//Flag used to prevent use of initial choice buttons.
var prize = "goat";//Variable to store the "prize" that is won. Initialized to goat.
var comp_choice = Math.floor(Math.random()*3)+1;// Door which contains the car, 1-3
var temp;//Used to store door numbers for second chance.

//Displays end result
var show_results = function(r){
  $("#div1").empty();
  let q  = comp_choice;
  if(q==r){
    prize="car";
    cars++;
  }else{
    prize = "goat";
    goats++;
  }
  game_on = 1;//Allows another initial choice, for the next round, should the user choose to continue.
  $("#div1").append("<h5>The car was behind door #"+q+"<br />You won a "+prize+"</h5><br />");
  $("#div1").append("<h5>With your current strategy, you won "+goats+" goats and "+cars+" cars!");
  document.getElementById("btn1").type="button";//Reveals btn1
  document.getElementById("btn1").value = "Continue";
  comp_choice = Math.floor(Math.random()*3)+1;//Resets the door with the car behind it to a random value 1-3, for next round.
 }

//Reveals one of the goats. (Chosen in choice_1_made)
var reveal_goat = function(){
  let g = goat;
  $("#div1").empty();
  $("#div1").append("<br /><h5>Door #"+g+" has a goat behind it!</h5>");
  $("#div1").append("<br /><h5>Given this information, what is your current choice?</h5><br />");
}

//Gives second chance to choose a door.
var give_second_choice = function(){
  for(var i = 4; i<= 6; i++){
    temp = i - 3 ;
     $("#div1").append("<button id=door"+i+">Door #"+temp+"</button><br />")
     let j=i;
     $("#door"+i).click(function(){
        show_results(j-3);
     });  
  }
}

//Chooses which door to 'open' and reveal a goat. Stored in variable 'goat'. Also calls function to give second chance.
var choice_1_made = function(c){
  let k = comp_choice;
  if(c==3){
    if(k==2){
      goat=1;
    }else if(k==1){
      goat=2;
    }else{
      goat = math.floor(Math.random()*2+1);//1 or 2
    }
  }else if(c==2){
    if(k==1){
      goat=3;
    }else if(k==3){
      goat=1;
    }else{
      goat= Math.floor(Math.random()*2)*2+1;//1 or 3
    }  
  }else if(c==1){
      if(k==2){
        goat=3;
      }else if(k==3){
        goat = 2;
      }else{
        goat = Math.floor(Math.random()*2)+2;//2 or 3
      }
  }else{
    throw new Error("Invalid Choice for Door");
  }

  reveal_goat();
  give_second_choice();
}


var give_initial_choice = function(){
  $("#div1").append("<h5>Choose A Door:</h5><br />");
  for(var i = 1; i<= 3; i++){
     $("#div1").append("<button id=door"+i+">Door #"+i+"</button><br />")
     let j=i;
     $("#door"+i).click(function(){
       if(game_on){
        choice_1_made(j);
        game_on = 0;
       }
     });


  }
}
$("#btn1").click(function(){
  give_initial_choice();
  document.getElementById("btn1").type = "hidden";
});
