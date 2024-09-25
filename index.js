
     let  link = document.querySelector(".link");
     let  p = document.querySelector("p");
     let  dld = document.querySelector(".dld");
     let  bar = document.querySelector(".bar");
     let  prog = document.querySelector(".prog");
     let  h4 = document.querySelector("h4");

let linkZ = 2;
let pZ = 1;
let dldZ = 1;
let countNum = 11
   
link.addEventListener("click", count);
function count(){

 setInterval(function(){
 if (countNum >= 0){
p.style.zIndex = "10";
link.style.zIndex = "-10"
    	    countNum--;
p.innerHTML = `You can download in ${countNum} seconds`
         }
 if (countNum < 0){
  p.innerHTML  = "";
  dld.style.zIndex= "10";
}
          },1000); 
}




// DOWNLOAD BUTTON HERE
dld.addEventListener("click",download)
dld.addEventListener("click",time)

var progNum = 0;
// (file size in MB)

let fileSize = 5

// ( speed = how many MB per second)
let speed = 1
let sec = fileSize / speed;
// Time in seconds

var finish = false
var t = 0
function time(){
   
    setInterval(function (){
    if (finish == false){
    
   t++
    console.log(t)
    
    }
         },1000)
}



function download(){
    dld.style.display = "none";
    //progNum = 0;
    bar.style.zIndex = "1"
    
 let inter =  setInterval(function(){
    progNum++;
   
       prog.style.width =  progNum.toFixed()+"%";
  h4.innerHTML = `${progNum} % Completed` ; 
    if (progNum == 100){
        clearInterval(inter);
        h4.innerHTML = `Download Complated ✅</br> in ${parseInt(sec)} Seconds`;
        finish = true
    }
    },sec*10)       
   
}

