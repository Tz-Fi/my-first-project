var enemy_positions_i = [];
var enemy_positions_j = [];
var user_positions_i = [];
var user_positions_j = [];
var n = 5;//number of ships
var N = 7;//Length of map
//var string_stack = [];
var game_on = 0;
var enemy_bombed_i = [];//stores i coordinates that were bombed by enemy
var enemy_bombed_j = [];//stores j coordinates that were bombed by enemy
var command;


var initialize_consol = function(){
	$("#console").empty();
	for(consol_id = 0; consol_id < 18; consol_id++){
		$("#console").prepend("<div id=id"+consol_id+" ></div>");
	}
	
}

var disp = function(string){
	let temp_id = consol_id-17;
	$("#id"+temp_id).remove();
	consol_id++;
	$("#console").prepend("<div id=id"+consol_id+" ></div>");
	//$("#id"+consol_id).append("<br />");
	command = "$('#id"+consol_id+"')";
	for(var w = 0; w < string.length;w++){
		//command+= ".append('"+string[w]+"').delay(500)";
		command+= ".delay(1000/60).queue(function (next"+w+") {$(this).append('"+string[w]+"');next"+w+"();})";
	}
	command+=";";
	eval(command);
}
/*
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
*/

var update_stats = function(){
  $("#enemy_i").html(enemy_positions_i.length);
  $("#user_i").html(user_positions_i.length);
  if(user_positions_i.length ==0 || enemy_positions_i.length == 0){
	end_game();
  }
}

var initialize = function(){
  enemy_positions_i = [];
  enemy_positions_j = [];
  enemy_bombed_i = [];
  enemy_bombed_j = [];
  
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
  var miss = 1;
  for(var g = 0; g<n; g++){
      if( user_positions_j[g] == j && user_positions_i[g] == i){
        $("#drow"+i+"column"+j).empty();
        disp("Enemy sunk your submarine ");
		user_positions_j.splice(g,1);
		user_positions_i.splice(g,1);
		miss = 0;
      }
  }
  if(miss){
	 $("#drow"+i+"column"+j).html("<img src=sea1.jpg style='height:20px;width:25px;' />");
  }
  disp("Enemy chose to fire at: "+i+","+j+"!");
  update_stats();
}

var bomb = function(i,j){
  $("#row"+i+"column"+j).empty();
  $("#row"+i+"column"+j).append("0");
  var hit = 0;
  for(var k = 0; k<N; k++){
    if(enemy_positions_i[k] == i && enemy_positions_j[k] == j){
      disp("You hit an enemy submarine!");
      enemy_positions_i.splice(k,1);
      enemy_positions_j.splice(k,1);   
      $("#row"+i+"column"+j).empty();
      $("#row"+i+"column"+j).append("<div style='color:red;'>X</div>");
	  hit = 1;
    }
  }
  if(!hit){
	$("#row"+i+"column"+j).html("<img src=sea1.jpg style='height:20px;width:25px;' />");
  }
  disp("You chose to fire at: "+i+","+j+"!");
  enemy_bomb();
}

var select = function(i,j){
  $("#drow"+i+"column"+j).empty();
  $("#drow"+i+"column"+j).append("<img src=submarine1.jpg style='height:20px;width:25px;' />");
  user_positions_i.push(i);
  user_positions_j.push(j);
  
  if(user_positions_i.length == n){
    game_on = 1;
	var replace = 1;
	for(var b = 1; b <= N; b++){
		for(var h = 1; h <= N; h++){
			replace = 1;
			for(var i=0; i < n; i++){
				if(user_positions_i[i] == h&& user_positions_j[i] == b){
					replace = 0;
				}	
			}
			if(replace){
				$("#drow"+h+"column"+b).html("<img src=sea3.jpg style='height:20px;width:25px;' />");
			}
		}
	}
  }
  
}

function set_game () {
  $("#main_table").empty();	
  $("#n").html(n);
  $("#main_table").append("<h2>Enemy Map:</h2>");
  $("#main_table").append("<table id=target ></table>");
  for(var i = 1; i <= N; i++){
    $("#target").append("<tr id=row"+i+" ></tr>");
    for(var j = 1; j <= N; j++){
      $("#row"+i).append("<td id=row"+i+"column"+j+" ><button style='height:20px;width:25px;' id=btnrow"+i+"column"+j+">?</button></td>");
      let m = i;
      let l = j;
      $("#btnrow"+i+"column"+j).click(function(){
        if(game_on){
          bomb(m,l);
        }else{
          disp("click on your map at the desired positions");
          disp("To select your positions,");
          disp("Please select your positions before attacking. ");
        }
      });  
    }
  }
  $("#main_table").append("<h2>Your Map:</h2>")
  $("#main_table").append("<table id=defender ></table>");
  for(var i = 1; i <= N; i++){
    $("#defender").append("<tr id=drow"+i+" ></tr>");
    for(var j = 1; j <= N; j++){
      $("#drow"+i).append("<td id=drow"+i+"column"+j+" ><button style='height:20px;width:25px;' id=dbtnrow"+i+"column"+j+">+</button></td>");
      let m = i;
      let l = j;
      $("#dbtnrow"+i+"column"+j).click(function(){
        if(user_positions_i.length<n){
          select(m,l);
        }
      }); 
    }
  }
  initialize_consol();
  initialize();//sets enemy positions.
}

var initialize2 = function(){
	N = document.getElementById("select_N").value;
	n = document.getElementById("select_n").value;
	$("#initialize").css("display","none");
	$("#div1").css("display","inline");
	$("#stats").css("display","inline");
	$("#console").css("display","inline");
	set_game();
}

function end_game (){
	if(enemy_positions_i.length == user_positions_i.length){
		alert("tie");
	}else if(enemy_positions_i.length < user_positions_i.length){
		alert("You won");
	}else{
		alert("You lost");
	}
	$("#initialize").css("display","inline");
	$("#div1").css("display","none");
	$("#stats").css("display","none");
	$("#console").css("display","none");
}

document.getElementById("btn1").onclick = function(){initialize2();};
