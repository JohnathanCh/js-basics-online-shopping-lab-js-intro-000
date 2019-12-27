var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
let obj = {'itemName': `${item}` , 'itemPrice': Math.floor((Math.random() * 100) + 1)}
cart.push(obj)
return `${item} has been added to your cart.`
}

function viewCart() {
  var items=[]
  for(let i=0;i<cart.length;i++){
    items.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    if((i+1)===cart.length && cart.length>1){
      items[items.length-1] = ` and${items[items.length-1]}.`
    }else if(i+1 === cart.length){
      items[items.length-1]=items[items.length-1].concat('.')
    }
  }
  if(cart.length>0){
    return `In your cart, you have${items}`
  }else{
    return 'Your shopping cart is empty.'
  }
}

function total() {
let totalPrice=0;
for(let i =0;i<cart.length;i++){
  totalPrice += cart[i].itemPrice
}
return totalPrice
}

function removeFromCart(name) {
    for(let i =0;i<cart.length;i++){
      if(cart[i].itemName === name){
         cart.splice(i,1)
         return cart
      }else{
        return "That item is not in your cart."
      }
    }
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    cart = [];
    var totalCost = total()
    return `Your total cost is ${total()}, which will be charged to the car ${cardNumber}`
  }
}
