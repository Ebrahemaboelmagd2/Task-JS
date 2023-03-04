var card = document.querySelectorAll(".card");
var img = document.querySelectorAll("img");
var btn = document.querySelectorAll(".btn");//Add To Card
var price = document.querySelector(".total-price");// Show Total Price
var content = document.querySelector(".content");
var basket = document.querySelector(".fa-basket-shopping");
var after = document.querySelector(".after");
var par = document.querySelectorAll("p");
var totalprice = document.querySelector(".total");// li a total:
var allprice = 0;
var alllength = 0;
console.log(after); 
btn.forEach(function (item){
    item.onclick = function (){
        totalprice.textContent = "Total:" ;
        after.textContent = ++alllength;
        allprice += +(item.getAttribute("price"));
        content.innerHTML +=  item.getAttribute("name") + " + ";
        if (content.innerHTML != "" ) {
            content.style.display = "block";
            price.style.display = "block";
            after.style.display = "block";
        };
    };
}); 
price.onclick = function (){
    totalprice.innerHTMl = allprice ;
    totalprice.innerHTML +=  +allprice
}