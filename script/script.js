window.addEventListener('load',function(){
    preloader.style.display = 'none';
})
let elem = document.getElementById("but1");
let elem3 = document.getElementById("but2");
let elem2 = document.getElementById("cont-head");
const elemh2 = document.getElementById("h2_1");
let elemh3 = document.getElementById("h2_2");
let elema1 = document.getElementById("st1");
let elema2 = document.getElementById("st2");
let img1 = document.getElementById("img1");
var i = 1;
var k = 5;
var img2 = document.getElementById("img2");
var elema3 = document.getElementById("st3");
var elema4 = document.getElementById("st4");
var zag = document.getElementById("zag");
var windowOuterWidth = window.innerWidth;
window.addEventListener("resize",function(){
    windowOuterWidth = document.documentElement.clientWidth;
})
console.log(windowOuterWidth);

elem.addEventListener("click",function(){
    width2 = String(zag.scrollWidth);
    if(windowOuterWidth <=900){
    elem.style.display = "none";
    elem2.style.display = "flex";
    elem2.style.width= width2 +"px";
    elem2.style.top = "120px"
    elem2.style.position = "fixed"
    elem3.style.display = "flex"}
    else{

        elem.style.display = "none";
        elem2.style.display = "flex";
        elem2.style.width= width2 +"px";
        elem2.style.top = "50px";
        elem2.style.position = "fixed";
        elem3.style.display = "flex";
        elem3.style.zIndex = 4000;
        elem.style.zIndex = 4001;
    }
})
elem3.addEventListener("click",function(){
    elem3.style.display = "none";
    elem.style.display = "flex";
    elem2.style.top = "-550px";
    elem2.style.width = 0;
    elem2.style.position = "absolute";
    
})

let load = function(){
    preloader.style.display = 'none';
    setTimeout(elemh2.style.left = "0", 10000)
    setTimeout(elemh3.style.left = "0", 10000)
    img1.src = "pizza1.png"
    img2.src = "pizza5.png"


}
window.onload = load;

elema2.addEventListener("click",function(){
  
    if(i<4){
        
    i++
    
    let str = "pizza"+(i)+".png";
    img1.src= str;
    
    
  }
    if(i===4){
        i=0;
    }
}
)
elema1.addEventListener("click",function(){
    if(i>1){
        i--
        let str = "pizza"+(i)+".png";
        
        img1.src = str;
        
        
       
    }
    if(i===1){
        i=5;
    }
})
elema4.addEventListener("click",function(){
  
    if(k<8){
        
    k++
    
    let str = "pizza"+(k)+".png";
    img2.src= str;
    
    
    }
    if(k===8){
        k=4;
    }
}
)
elema3.addEventListener("click",function(){
    if(k>5){
        k--
        let str = "pizza"+(k)+".png";
        
        img2.src = str;
        
        
        
    }
    if(k===5){
        k=9;
    }
})
// 
// var lolik=document.getElementById("city");
// lolik.innerText = "lol";