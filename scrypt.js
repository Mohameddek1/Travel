
if (document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', ready)
}
else{
    ready()
}

function ready(){
    // cart page functionality
    
    // remove button 
    let cartRemove = document.getElementsByClassName("fa-trash")
    console.log(cartRemove)    
    for (var i = 0; i < cartRemove.length; i++){
        var button = cartRemove[i]
    
        button.addEventListener('click', removeItem)
        
    }
    var quantityInput = document.getElementsByClassName("cart-quantity")
    for (var i = 0; i < quantityInput.length; i++){
        var input = quantityInput[i]
    
        input.addEventListener('change', quantityUpdate)
        
    }
    var addCartButton = document.getElementsByClassName("book-btn")
    for (var i = 0; i < addCartButton.length; i++){
        var button = addCartButton[i]
    
        button.addEventListener('click', addCart)
        
    }    
    document.getElementsByClassName("purchase")[0].addEventListener('click', purchaseClicked)
}



// purchas function

function purchaseClicked(){
    alert("Thank you for purchasing the ticket(s)")
    var cartItem = document.getElementsByClassName("cart-container")[0]
    while(cartItem.hasChildNodes()){
        cartItem.removeChild(cartItem.firstChild)
    }
    updateCart()

}




// AddToCart
function addCart(event){
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName("title")[0].innerText
    var priceItem = shopItem.getElementsByClassName("price")[0].innerText
    var dateItem = shopItem.getElementsByClassName("date")[0].innerText
    addItemToCart(title, priceItem, dateItem)
    updateCart()
}

function addItemToCart(title, priceItem, dateItem) {
  var cart_item = document.createElement('div');
  cart_item.classList.add("cart-item");

  var cartContainer = document.getElementsByClassName('cart-container')[0];
  var cartItemNames = cartContainer.getElementsByClassName("title-place");

  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("Item is already added to the cart");
      return;
    }
  }

  var cartItemContent = `
    <h2 class="title-place">${title}</h2>
    <div class="price"><h2>${priceItem}</h2></div>
    <div class="date"><p>${dateItem}</p></div>
    <input type="number" class="cart-quantity" value="1">
    <div class="button"><button class="remove-btn"><i class="fa-solid fa-trash" style="color: #000000;"></i></button></div>
  `;

  cart_item.innerHTML = cartItemContent;
  cartContainer.append(cart_item);

  // Add event listener to the quantity input field for the newly added item
  cart_item.getElementsByClassName("cart-quantity")[0].addEventListener('change', quantityUpdate);

  // Add event listener to the remove button for the newly added item
  cart_item.getElementsByClassName("fa-trash")[0].addEventListener('click', removeItem);
}

// quantity change
function quantityUpdate(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCart()
}


// removeItem function

function removeItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
    updateCart()
}


// updating the total
function updateCart() {
  var CartContainer = document.getElementsByClassName("cart-container")[0];
  var cartItems = CartContainer.getElementsByClassName("cart-item"); // Rename the variable to cartItems
  var total = 0;

  for (var i = 0; i < cartItems.length; i++) { // Use cartItems instead of cartItem
    var cartItem = cartItems[i]; // Rename the variable to cartItem for the current item
    var cartPrice = cartItem.getElementsByClassName("price")[0];
    var quantityElement = cartItem.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(cartPrice.innerText.replace('$', ''));
    var quantity = quantityElement.value;
    total = total + (quantity * price);
  }

  document.getElementsByClassName("total-price")[0].innerText = '$' + total.toFixed(2); // Use toFixed() to display total with two decimal places
}






// cart page

const open_btn = document.querySelector(".open-button");
const close_btn = document.querySelector(".close");
const cart = document.querySelector(".cart-booking");

// Adding event listener for opening the cart
open_btn.addEventListener('click', open);

// Function to open the cart
function open() {
    cart.style.transform = 'translateX(0%)';
}

// Adding event listener for closing the cart
close_btn.addEventListener('click', close);

// Function to close the cart
function close() {
    cart.style.transform = 'translateX(100%)';
}



// Initialize Swiper
const swiper3 = new Swiper(".slider-3", {
    autoHeight: true,
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    pagination: {
      el: ".custom-pagination",
    },
  });