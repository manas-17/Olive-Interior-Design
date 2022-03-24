let products= [
	{
		tag: "background",
		name: "Background Coffee Table",
		price: 20000
		
	},
	
	{
		tag: "dcode",
		name: "D Code Coffee Table",
		price: 22000
	},
		
	{
		tag: "blown",
		name: "Blown Out Coffee Table",
		price: 23000
	},
		
	{
		tag: "gibson",
		name: "Gibson Coffee Table",
		price: 30000
	},
	
	{
		tag: "mushroom",
		name: "Mushroom Coffee Table",
		price: 30000
	},
	{
		tag: "puddle",
		name: "Puddle Coffee Table",
		price: 23000
	},
		
	{
		tag: "touch",
		name: "Touch Coffee Table",
		price: 37000
	},
	
	{
		tag: "w",
		name: "W Coffee Table",
		price: 31000
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
