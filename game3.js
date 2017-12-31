var set_game = function(){
  $("#div1").append("<table id=target style='width:50%'>");
  for(var i = 1; i <= 5; i++){
    $("#div1").append("<tr id=row"+i+" >");
    for(var j = 0; j <= 4; j++){
      $("#div1").append("<td id=row"+i+"column"+j+" ><button id=btnrow"+i+"column"+j+">"+i+"x"+j+" </button></td>");
    }
    $("#div1").append("</tr>");
  }
  $("#div1").append("</table><br />");
  
  $("#div1").append("<table id=defender style='width:100%' >");
  for(var i = 1; i <= 5; i++){
    $("#div1").append("<tr id=row"+i+" >");
    for(var j = 0; j <= 4; j++){
      $("#div1").append("<td id=row"+i+"column"+j+" ><button id=btnrow"+i+"column"+j+">"+i+"x"+j+" </button></td>");
    }
    $("#div1").append("</tr>");
  }
  $("#div1").append("</table>");
}
