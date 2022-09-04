// let element1 = document.getElementById('menuitem1').previousElementSibling.previousElementSibling
// let element3 = document.querySelector('#menuitem1');
// let parent = element3.closest('.menuitem')
// let parentnodes = parent.closest('P');
// console.log(parent)
// console.log(parentnodes)
let menu = document.getElementById("menu");
var cartelem = document.getElementById("cartmenu");
// console.log(cartelem);






menu.addEventListener('click', function(event){
    if(event.target.className === "button"){
      
    // var array11 =["Napoli","Funghi","Margherita","Diavola"]
    // var array22 = document.getElementsByClassName("wrapperforElement")
   

    

    // var buttontarget;
    // var quantity;
    // var parent;
    // var parent2;
    // var pNode;
    
    
    let countse = 0;
    let stringprize = `<p class= "h26">Prize for one </p>`
    let string = '<p class="h23">';
    let stringp = '<p class="h24">';
    let string3 = ":";
    let string2 ="</p>";

    let deletefromcart = `<div class="delete" ><p class = "delete2 h22">x</p></div>`
 
    var buttontarget = event.target;
    var priceOF = buttontarget.previousElementSibling.previousElementSibling.previousElementSibling
    
    priceOF = parseInt(priceOF.innerText)

    var parent = buttontarget.parentNode;
    var parent2= parent.parentNode;
    var pNode = parent2.firstElementChild.firstElementChild.innerText;
    var quantity = buttontarget.previousElementSibling.previousElementSibling;
    quantity = quantity.value;
    var array33 = document.querySelectorAll(`div[data-pizza = ${pNode}]`)
    countse = quantity*priceOF;
        
    
    if(array33.length<1){

     
        // buttontarget = event.target;
        // parent = buttontarget.parentNode;
        // parent2= parent.parentNode;
        // pNode = parent2.firstElementChild.firstElementChild.innerText;
        // quantity = buttontarget.previousElementSibling.previousElementSibling;
        // quantity = quantity.value;
        
       
        let elementdlavstavki = document.createElement('div');
        elementdlavstavki.className = "wrapperforElement"
        elementdlavstavki.dataset.pizza = pNode;
        elementdlavstavki.innerHTML = `${deletefromcart}${string}${pNode}${string3}${string2}${string}${quantity}${string2}${stringprize}${stringp}${priceOF}${string2}`
        cartelem.appendChild(elementdlavstavki)
        
        
         
        }
        else{
            
            var elem33 = document.querySelector(`div[data-pizza = ${pNode}]`)
            var elem33p = elem33.children[2];
           
            quantity = parseInt(quantity)
            var quantity2  = parseInt((elem33.innerText).match(/\d+/))
            var sum = quantity + quantity2
            elem33p.innerHTML = `${sum}`

            
            // elem33.innerHTML = `${pNode}${string3}${quantity}`
           
        }
        


   
    
    }
})

cart.addEventListener("click", function(event){
    //    var classLOL = event.target.classList;
        // var trufalse = classLOL.includes("delete2");
        // console.log(trufalse)
        
        if(event.target.classList[0] === "delete2"){
            var deleteeleme = event.target
            
            deleteeleme.parentNode.parentNode.remove()
            
        }
        
})
showCart.addEventListener("click",function(){
    cart.scrollIntoView();
    if(showCart.innerText ==="SHOW CART"){
        
        showCart.innerText = "HIDE CART";
        cart.style.left = "0";
    }
    else{
        showCart.innerText = "SHOW CART";
        cart.style.left = "-2000px";
    }
})
