var enemy_positions_i = [];
var enemy_positions_j = [];
var user_positions_i = [];
var user_positions_j = [];
var n = 5;//number of ships
var N = 7;//Length of map
var string_stack = [];
var game_on = 0;
var enemy_bombed_i = [];//stores i coordinates that were bombed by enemy
var enemy_bombed_j = [];//stores j coordinates that were bombed by enemy

var update_stats = function(){
  $("#enemy_i").html(enemy_positions_i.length);
  $("#user_i").html(user_positions_i.length);
}

var disp = function(string){
  string_stack.unshift("<br />"+string);
  $("#console").empty();
  for(i = 0; i< string_stack.length; i++){
     $("#console").append(string_stack[i]);
     if(i > 16){
       break;
     }
  }
 
}


var initialize = function(){
  
  for(var i = 0; i<n; i++){
    enemy_positions_i[i] = Math.floor(Math.random()*N)+1;
    enemy_positions_j[i] = Math.floor(Math.random()*N)+1;
  }
  var recheck = 1;//flag if the arrays require rechecking;
  while(recheck){
    recheck = 0;
    for(var i = 0; i<n; i++){
      for(var j = i+1; j<n; j++){
        if(enemy_positions_i[i]==enemy_positions_i[j] &&enemy_positions_j[i]==enemy_positions_j[j]){
          enemy_positions_i[j] = Math.floor(Math.random()*N)+1;
          enemy_positions_j[j] = Math.floor(Math.random()*N)+1;
          recheck = 1;
        }
      }
    }
   }
}
var enemy_bomb = function(){
  let i = Math.floor(Math.random()*N)+1;
  let j = Math.floor(Math.random()*N)+1;
  var reverify = 1;
  while(reverify){
    reverify = 0;
    for(var g = 0; g<enemy_bombed_j.length; g++){
      if( enemy_bombed_j[g] == j && enemy_bombed_i[g] == i){
        i = Math.floor(Math.random()*N)+1;
        j = Math.floor(Math.random()*N)+1;
        reverify = 1;
      }
    }
  }
  enemy_bombed_j.push(j);
  enemy_bombed_i.push(i);
  
  for(var g = 0; g<n; g++){
      if( user_positions_j[g] == j && user_positions_i[g] == i){
        $("#drow"+i+"column"+j).empty();
        disp("Enemy sunk your submarine ");
      }
  }
  disp("Enemy bombed "+i+","+j);
}

var bomb = function(i,j){
  $("#row"+i+"column"+j).empty();
  $("#row"+i+"column"+j).append("0");
  for(var k = 0; k<N; k++){
    if(enemy_positions_i[k] == i && enemy_positions_j[k] == j){
      disp("You hit an enemy submarine!");
      enemy_positions_i.splice(k,1);
      enemy_positions_j.splice(k,1);   
      $("#row"+i+"column"+j).empty();
      $("#row"+i+"column"+j).append("<div style='color:red;'>X</div>");
    }
  }
  disp("You chose to fire at: "+i+","+j+"!");
  enemy_bomb();
}

var select = function(i,j){
  $("#drow"+i+"column"+j).empty();
  $("#drow"+i+"column"+j).append("<div></div>");
  user_positions_i.push(i);
  user_positions_j.push(j);
  if(user_positions_i.length == n){
    game_on = 1;
  }
  
}


var set_game = function(){
  $("#n").html(n);
  $("#div1").append("<h2>Enemy Map:</h2>");
  $("#div1").append("<table id=target style='margin-left:auto;margin-right:auto;' ></table>");
  for(var i = 1; i <= N; i++){
    $("#target").append("<tr id=row"+i+" ></tr>");
    for(var j = 1; j <= N; j++){
      $("#row"+i).append("<td id=row"+i+"column"+j+" ><button id=btnrow"+i+"column"+j+">?</button></td>");
      let m = i;
      let l = j;
      $("#btnrow"+i+"column"+j).click(function(){
        if(game_on){
          bomb(m,l);
        }else{
          disp(" click on your map at the desired positions");
          disp("To select your positions,");
          disp("Please select your positions before attacking. ");
        }
      });  
    }
  }
  $("#div1").append("<h2>Your Map:</h2>")
  $("#div1").append("<table id=defender style='margin-left:auto;margin-right:auto;' ></table>");
  for(var i = 1; i <= N; i++){
    $("#defender").append("<tr id=drow"+i+" ></tr>");
    for(var j = 1; j <= N; j++){
      $("#drow"+i).append("<td id=drow"+i+"column"+j+" ><button id=dbtnrow"+i+"column"+j+">+</button></td>");
      let m = i;
      let l = j;
      $("#dbtnrow"+i+"column"+j).click(function(){
        if(user_positions_i.length<n){
          select(m,l);
        }else{
          disp("You have already chosen the maximum number of submarines");
        }
      }); 
    }
  }
  initialize();//sets enemy positions.
}



