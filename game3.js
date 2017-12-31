var bomb = function(i,j){
  alert("bombing "+i+"x"+j+"!");
  
  
}

var set_game = function(){
  $("#div1").append("<table id=target style='margin-left:auto;margin-right:auto;' >");
  for(var i = 1; i <= 5; i++){
    $("#target").append("<tr id=row"+i+" ></tr>");
    for(var j = 1; j <= 5; j++){
      $("#row"+i).append("<td id=row"+i+"column"+j+" ><button id=btnrow"+i+"column"+j+">"+i+"x"+j+" </button></td>");
      let m = i;
      let n = j;
      $("#btnrow"+i+"column"+j).click(function(){
        bomb(m,n);
      });  
    }
  }
  $("#div1").append("</table><br />");
  
  $("#div1").append("<table id=defender style='margin-left:auto;margin-right:auto;' >");
  for(var i = 1; i <= 5; i++){
    $("#defender").append("<tr id=drow"+i+" >");
    for(var j = 1; j <= 5; j++){
      $("#drow"+i).append("<td id=row"+i+"column"+j+" ><button id=btnrow"+i+"column"+j+">"+i+"x"+j+" </button></td>");
    }
    $("#div1").append("</tr>");
  }
  $("#div1").append("</table>");
}


