let products= [
    {
        tag: "bistrots",
        name: "Bistrot S Bookshelf",
        price: 10000

    },

    {
        tag: "cageb",
        name: "Cage B Bookshelf",
        price: 15000
    },

    {
        tag: "cagec",
        name: "Cage C Bookshelf",
        price: 20000
    },

    {
        tag: "styleset",
        name: "Style Set Bookshelf",
        price: 17000
    },

    {
        tag: "tangram",
        name: "Tangram Bookshelf",
        price: 25000
    },

]
let cartbtn=document.querySelectorAll('.cartbutton')
for(let i=0;i<cartbtn.length;i++){
        cartbtn[i].addEventListener('click', ()=>{
            cartitems(products[i]);
            totalCost(products[i]);
        })
    }

function cartitems(product){
    let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);
        if(productNumbers)
        {
            localStorage.setItem('cartNumbers', productNumbers + 1);
            //document.querySelector('.cart span').textContent = productNumbers + 1;
        }
        else
        {
            localStorage.setItem('cartNumbers', 1);
            //document.querySelector('.cart span').textContent = 1;
        }
        setitems(product)

}
function setitems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems!=null){
        if (cartItems[product.tag]==undefined){
            cartItems={
                ...cartItems, [product.tag]:product
            }
        }
    }
    else{
        cartItems={[product.tag]:product}
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + (product.price));
    }
    else{
        localStorage.setItem("totalCost", (product.price));
    } 
}
