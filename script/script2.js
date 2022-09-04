class Userinfo{
    constructor(){
        this.timeOpened = new Date();
        this.timezone = (new Date()).getTimezoneOffset()/60;
        
    }
    async ip(){
        let res = await(await fetch('https://api.db-ip.com/v2/free/self'));
        let data = await res.json();
        
        
        return {city:data.city, country:data.countryName};
        
    }
}
var city;
 async function t1(){
    var lol = (await info.ip());
    console.log(lol);
    eskeit = document.getElementById("city")
   
    var lol2 = lol.city;
    var lol3 = lol.country;
    eskeit.innerText = " " + lol2+ " " + ", " + lol3;
    // console.log(res);
    // console.log(data);

}
let info = new Userinfo();



t1();
$(function() {
  $("#thankyou").fadeOut(1)
  });
$(function() {
    $('.marquee').marquee({
      duration: 10000,
      startVisible: true,
      duplicated: true,
      
    });
    return
  });
var cityT;
 function ole(){
    
    let cityy =document.getElementById("city")
  var textcity = cityy.outerText;
  console.log(textcity)
  window.cityT = textcity;
 
  }

  setTimeout(ole,1000)
  function show(){
   
  }
  setTimeout(show, 1500)
  cities = document.getElementById("cities")
  citiesAL = document.getElementById("citiesAL")
  
    $(function(){
        $("#yes").click(function(){
            $("#yesorno").fadeOut();
            
            $("#thankyou").fadeIn();
            $("#cityquest").text("Your city is")
            $("#cityquest2").text("")
            var text21 = $("#city").text();
           
            localStorage.setItem("city",text21)
           
        })
        
    }) 
    $(function(){
        $("#city").click(function(){
           $("#citiesAL").css("left","10%")
            $("#yesorno").css("display","none")
           
        })
        
    }) 
    $(function(){
        $("#no").click(function(){
           $("#citiesAL").css("left","10%")
            $("#yesorno").css("display","none")
           
        })
        
    }) 
    // noob = document.getElementById("noob")
    // console.log(noob)
 
    cities.addEventListener("click",function(event){
        if(event.target.className === "butt2" || event.target.tagName === "H2" ){
            let yesornohelp = document.getElementById("yesorno")
            let cityy =document.getElementById("city")
            var localcity = event.target.innerText;
            cities.style.left =  "-2000px"
            citiesAL.style.left = "-2000px"
            cityy.innerText = localcity
            yesornohelp.style.display = "flex"
            localStorage.setItem("city",localcity);
            $
            // thankyou.style.display = "flex"
        }
        
    }
    )
    
    