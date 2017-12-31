var set_game = function(){
  $("#div1").append("<table id=target style='margin:1em auto;'>");
  for(var i = 1; i <= 5; i++){
    $("#div1").append("<tr id=row"+i+" >");
    for(var j = 1; j <= 5; j++){
      $("#div1").append("<td id=row"+i+"column"+j+" ><button id=btnrow"+i+"column"+j+">"+i+"x"+j+" </button></td>");
      let m = i;
      let n = j;
      $("#btnrow"+i+"column"+j).click(bomb(m,n););
    }
    $("#div1").append("</tr>");
  }
  $("#div1").append("</table><br />");
  
  $("#div1").append("<table id=defender style='margin:1em auto;' >");
  for(var i = 1; i <= 5; i++){
    $("#div1").append("<tr id=row"+i+" >");
    for(var j = 1; j <= 5; j++){
      $("#div1").append("<td id=row"+i+"column"+j+" ><button id=btnrow"+i+"column"+j+">"+i+"x"+j+" </button></td>");
    }
    $("#div1").append("</tr>");
  }
  $("#div1").append("</table>");
}

var bomb = function(i,j){
  alert("bombing "+i+"x"+j+"!");
  
  
}
