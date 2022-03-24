function displayCart(){
    let productContainer = document.querySelector(".products");
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem("totalCost")
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item =>{
            
                    productContainer.innerHTML +=`
                    <div class="cart-items">
                        <div class="product">
                        <button class="removebtn"><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                        
                        <span>${item.name}</span>
                        </div>
                        <div class="price">Rs.${item.price}</div>
                        
                        
                    </div>
                    `
        });
        productContainer.innerHTML +=`
            <div class="grandtotalcontainer">
                <h4 class="grandtotaltitle">
                Grand Total 
                </h4>
                <h4 class="grandtotal">
                    Rs.${cartCost}.00
                </h4>
            </div>
            <div class="checkoutbtn">
                <button onclick="document.location='form2.html'" class="checkout">PROCEED</button>
            </div>
        `
    }
    else{
        document.querySelector(".products-container").innerHTML='<h1>YOUR CART IS EMPTY</h1>'
    }
}
displayCart();


let removebtn = document.querySelectorAll('.removebtn');
removebtn.forEach(function(element){
    element.addEventListener('click',() =>{
        removeItem(element);
    })
})

function removeItem(element){
    let removedItem = element.parentElement.parentElement;
    let name = removedItem.querySelector('span').textContent
    removedItem.parentNode.removeChild(removedItem);
    let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
    Object.values(cartItems).map(item =>{
        
            if(item.name === name){
               
                localStorage.setItem("cartNumbers", Number(localStorage.getItem('cartNumbers'))-1);
                localStorage.setItem("productsInCart", JSON.stringify(cartItems));
                let newPrice = Number(localStorage.getItem("totalCost")) - (item.price);
                localStorage.setItem("totalCost", newPrice);
                document.querySelector('.grandtotal').innerHTML= "Rs." + newPrice + ".00";
            }
        
    });
    if(localStorage.getItem('cartNumbers') === "0")
    {
        localStorage.clear();
        document.querySelector(".products-container").innerHTML='<h1>YOUR CART IS EMPTY</h1>'
    } 
}

