var initialize = function(){
  var enemy_positions_i = [];
  var enemy_positions_j = [];
  var n = 5;
  for(var i = 0; i<n; i++){
    enemy_positions_i.push(Math.floor(Math.random(0,5))+1);
    enemy_positions_j.push(Math.floor(Math.random(0,5))+1);
  }
  //need to verify that a set of coordinates isn't repeated
}


var bomb = function(i,j){
  alert("bombing "+i+"x"+j+"!");
  
  
}

var set_game = function(){
  $("#div1").append("<h2>Enemy Map:</h2>");
  $("#div1").append("<table id=target style='margin-left:auto;margin-right:auto;' ></table>");
  for(var i = 1; i <= 5; i++){
    $("#target").append("<tr id=row"+i+" ></tr>");
    for(var j = 1; j <= 5; j++){
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
  for(var i = 1; i <= 5; i++){
    $("#defender").append("<tr id=drow"+i+" ></tr>");
    for(var j = 1; j <= 5; j++){
      $("#drow"+i).append("<td id=row"+i+"column"+j+" ><button id=btnrow"+i+"column"+j+">+</button></td>");
    }
  }
}


