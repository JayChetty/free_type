
var l = 0;
var keysDown = [false,false,false,false,false];

$(document).ready(function(){
  $(".l0").addClass("highlight")  
});
document.onkeydown=function(e){
  $(".l0").removeClass("highlight")  
  var e = window.event || e;v

    if (e.keyCode == 86 && keysDown[0]==false)  {l = l + 1; keysDown[0]=true; $(".l1").addClass("highlight");}
    if (e.keyCode == 82 && keysDown[1]==false)  {l = l + 2; keysDown[1]=true; $(".l2").addClass("highlight");}
    if (e.keyCode == 69 && keysDown[2]==false)  {l = l + 4; keysDown[2]=true; $(".l3").addClass("highlight");}
    if (e.keyCode == 87 && keysDown[3]==false)  {l = l + 8; keysDown[3]=true; $(".l4").addClass("highlight");}
    if (e.keyCode == 81 && keysDown[4]==false)  {l = l + 16;keysDown[4]=true; $(".l5").addClass("highlight");}

  console.debug("down" + l)

  if (l==0){
    if (e.keyCode==77) {$("#text").append(" ");}
    if (e.keyCode==73) {$("#text").append(".");}
    if (e.keyCode==79) {$("#text").append(",");}
    if (e.keyCode==80) {$("#text").append("'");}  
    if (e.keyCode==219) {var text = $("#text").text();
                         var textin = text.slice(0,-1);
                         $("#text").text(textin);}
  }

if (l==1){
    
  if (e.keyCode==77) {$("#text").append("a");}
  if (e.keyCode==73) {$("#text").append("b");}
  if (e.keyCode==79) {$("#text").append("c");}
  if (e.keyCode==80) {$("#text").append("d");}
  if (e.keyCode==219) {$("#text").append("e");}
  }
  
  if (l==2){
  if (e.keyCode==77) {$("#text").append("f");}
  if (e.keyCode==73) {$("#text").append("g");}
  if (e.keyCode==79) {$("#text").append("h");}
  if (e.keyCode==80) {$("#text").append("i");}
  if (e.keyCode==219) {$("#text").append("j");}
  }
  
  if (l==4){
  if (e.keyCode==77) {$("#text").append("k");}
  if (e.keyCode==73) {$("#text").append("l");}
  if (e.keyCode==79) {$("#text").append("m");}
  if (e.keyCode==80) {$("#text").append("n");}
  if (e.keyCode==219) {$("#text").append("o");}
  }
  
  if (l==8){
  if (e.keyCode==77) {$("#text").append("p");}
  if (e.keyCode==73) {$("#text").append("q");}
  if (e.keyCode==79) {$("#text").append("r");}
  if (e.keyCode==80) {$("#text").append("s");}
  if (e.keyCode==219) {$("#text").append("t");}
  }
  
  if (l==16){
  if (e.keyCode==77) {$("#text").append("u");}
  if (e.keyCode==73) {$("#text").append("v");}
  if (e.keyCode==79) {$("#text").append("w");}
  if (e.keyCode==80) {$("#text").append("x");}
  if (e.keyCode==219) {$("#text").append("y");}
  }

if (l==17){
    
  if (e.keyCode==77) {$("#text").append("A");}
  if (e.keyCode==73) {$("#text").append("B");}
  if (e.keyCode==79) {$("#text").append("C");}
  if (e.keyCode==80) {$("#text").append("D");}
  if (e.keyCode==219) {$("#text").append("E");}
  }

  if (l==18){
  if (e.keyCode==77) {$("#text").append("F");}
  if (e.keyCode==73) {$("#text").append("G");}
  if (e.keyCode==79) {$("#text").append("H");}
  if (e.keyCode==80) {$("#text").append("I");}
  if (e.keyCode==219) {$("#text").append("J");}
  }
  
  if (l==20){
  if (e.keyCode==77) {$("#text").append("K");}
  if (e.keyCode==73) {$("#text").append("L");}
  if (e.keyCode==79) {$("#text").append("M");}
  if (e.keyCode==80) {$("#text").append("N");}
  if (e.keyCode==219) {$("#text").append("O");}
  }
  
  if (l==24){
  if (e.keyCode==77) {$("#text").append("P");}
  if (e.keyCode==73) {$("#text").append("Q");}
  if (e.keyCode==79) {$("#text").append("R");}
  if (e.keyCode==80) {$("#text").append("S");}
  if (e.keyCode==219) {$("#text").append("T");}
  }
  
  if (l==25){
  if (e.keyCode==77) {$("#text").append("U");}
  if (e.keyCode==73) {$("#text").append("V");}
  if (e.keyCode==79) {$("#text").append("W");}
  if (e.keyCode==80) {$("#text").append("X");}
  if (e.keyCode==219) {$("#text").append("Y");}
  }
  
 
  if (l==3){
  if (e.keyCode==77) {$("#text").append("1");}
  if (e.keyCode==73) {$("#text").append("2");}
  if (e.keyCode==79) {$("#text").append("3");}
  if (e.keyCode==80) {$("#text").append("4");}
  if (e.keyCode==219) {$("#text").append("5");}
  }
  
  if (l==5){
  if (e.keyCode==77) {$("#text").append("6");}
  if (e.keyCode==73) {$("#text").append("7");}
  if (e.keyCode==79) {$("#text").append("8");}
  if (e.keyCode==80) {$("#text").append("9");}
  if (e.keyCode==219) {$("#text").append("0");}
  }
  
  if (l==19){
  if (e.keyCode==77) {$("#text").append("£");}
  if (e.keyCode==73) {$("#text").append("&");}
  if (e.keyCode==79) {$("#text").append("@");}
  if (e.keyCode==80) {$("#text").append("Z");}
  if (e.keyCode==219) {$("#text").append("z");}
  }
  
  if (l==21){
  if (e.keyCode==77) {$("#text").append("?");}
  if (e.keyCode==73) {$("#text").append("!");}
  if (e.keyCode==79) {$("#text").append(";");}
  if (e.keyCode==80) {$("#text").append(":");}
  if (e.keyCode==219) {$("#text").append("_");}
  }
  
  if (l==10){
  if (e.keyCode==77) {$("#text").append("z");}
  if (e.keyCode==73) {$("#text").append("{");}
  if (e.keyCode==79) {$("#text").append("}");}
  if (e.keyCode==80) {$("#text").append("(");}
  if (e.keyCode==219) {$("#text").append(")");}
  }


}

document.onkeyup=function(e){
  var e = window.event || e;
  if (e.keyCode ==86)  {l = l-1; keysDown[0]=false; $(".l1").removeClass("highlight");}
  if (e.keyCode ==82)  {l = l-2; keysDown[1]=false; $(".l2").removeClass("highlight");}
  if (e.keyCode ==69)  {l = l-4; keysDown[2]=false; $(".l3").removeClass("highlight");}
  if (e.keyCode ==87)  {l = l-8; keysDown[3]=false; $(".l4").removeClass("highlight");}
  if (e.keyCode ==81)  {l = l-16;keysDown[4]=false; $(".l5").removeClass("highlight");}
  if (l == 0) {$(".l0").addClass("highlight");}
  console.debug("up" + l)
  console.debug(e.keyCode)
}








