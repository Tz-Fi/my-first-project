var set_game = function(){
  $("#div1").append("<table id=target style='width:50%'>");
  for(var i = 0; i <= 4; i++){
    $("#div1").append("<tr id=row"+i+" >");
    for(var j = 0; j <= 4; j++){
      $("#div1").append("<td id=row"+i+"column"+j+" >"+i+"x"+j+"</td>");
    }
    $("#div1").append("</tr>");
  }
  $("#div1").append("</table>");
  
  $("#div1").append("<table id=defender style='width:100%' >");
  for(var i = 0; i <= 4; i++){
    $("#div1").append("<tr id=row"+i+" >");
    for(var j = 0; j <= 4; j++){
      $("#div1").append("<td id=row"+i+"column"+j+" >"+i+"x"+j+"</td>");
    }
    $("#div1").append("</tr>");
  }
  $("#div1").append("</table>");
}
