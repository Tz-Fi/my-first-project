var enemy_positions_i = [];
var enemy_positions_j = [];
var n = 5;//number of ships
var N = 5;//Length of map

var disp = function(string){
  $("#console").append("<br />"+string);
}


var initialize = function(){
  
  for(var i = 0; i<n; i++){
    enemy_positions_i[i] = Math.floor(Math.random()*5)+1;
    enemy_positions_j[i] = Math.floor(Math.random()*5)+1;
  }
  //need to verify that a set of coordinates isn't repeated
}


var bomb = function(i,j){
  alert("bombing "+i+"x"+j+"!");
  
  
}

var set_game = function(){
  $("#div1").append("<h2>Enemy Map:</h2>");
  $("#div1").append("<table id=target style='margin-left:auto;margin-right:auto;' ></table>");
  for(var i = 1; i <= N; i++){
    $("#target").append("<tr id=row"+i+" ></tr>");
    for(var j = 1; j <= N; j++){
      $("#row"+i).append("<td id=row"+i+"column"+j+" ><button id=btnrow"+i+"column"+j+">?</button></td>");
      let m = i;
      let n = j;
      $("#btnrow"+i+"column"+j).click(function(){
        bomb(m,n);
      });  
    }
  }
  $("#div1").append("<h2>Your Map:</h2>")
  $("#div1").append("<table id=defender style='margin-left:auto;margin-right:auto;' ></table>");
  for(var i = 1; i <= N; i++){
    $("#defender").append("<tr id=drow"+i+" ></tr>");
    for(var j = 1; j <= N; j++){
      $("#drow"+i).append("<td id=row"+i+"column"+j+" ><button id=btnrow"+i+"column"+j+">+</button></td>");
    }
  }
}


