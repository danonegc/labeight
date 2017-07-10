




var header = document.createElement('h1');
header.style.fontsize = '50%';
header.style.color = 'red';
header.style.fontFamily = 'Kanit';
header.style.width = '1220px';
header.style.height = '300px';
header.style.backgroundColor = 'lightgray';




document.body.appendChild(header);
document.title = "Danone's Shopping Cart";



var text1 = document.createElement('p');

var cart = [];

var item1 = function (name, price, count) {
    this.name = name
    this.price = price
    this.count = count
  };

function addItemToCart(name, price, count) {
  for (var a in cart) {
    console.log(cart.length)
    if (cart[a].name === name) {
      cart[a].count ++;
      return;
    }
  }
var item2 = new item1(name, price, count);
  cart.push(item);
}

var cart = document.createElement('cart');
document.body.appendChild(cart);

var cart = [
  {
    name: "Milk",
    price: 4.25
  },
  {
    name: "Eggs",
    price: 2.15
  },
  {
    name: "Captain Crunch",
    price: 5.25
  },
  {
    name: "Bananas",
    price: 2.25
  },
  {
    name: "Chicken breast",
    price: 4.55
  }
]

var arrayLength = cart.length;

var item = cart;

var total = 0

var tax = 1.06;

for (a = 0; a < cart.length; a++) {
  item = cart[a];
  console.log( item.name + ' : $' + item.price);
}



function removeItemFromCart(name) {
  for (var a in cart) {
    if (cart[a].name === name) {
        cart[a].count --;
        if (cart[a].count === 0) {
            cart.splice(a, 1);
        }
        break;
    }
  }
}







function countCart() {
  var totalCount = 0;
  for (var a in cart) {
    totalCount += cart[a].count;

  }
  return totalCount;
}
  console.log( countCart() );

function totalCart() {
  var totalCost = 0;
  for (var i in cart) {
    totalCost += cart[a].price;
  }
  return totalCost;
}
  console.log ( totalcart() );



//displayCart()
