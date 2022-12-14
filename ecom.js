
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    const bar = document.getElementById('bar');
    const nav = document.getElementById('navbar');
    const close = document.getElementById('close');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        })
    }
    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        })
    }

    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', function (event) {
            var buttonClicked = event.target
            var temp = buttonClicked.id
            console.log(temp)
            buttonClicked.parentElement.parentElement.remove()
            deleteCartElement(temp)
        })
    }

    var purchaseButton = document.getElementsByClassName('btn-purchase')[0]
    purchaseButton.addEventListener('click',function(event){
        alert('ThankYou For your Purchase')
        localStorage.clear()
        window.location.reload()

    })

    /*Customrer Response*/
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
   
}


function getid(obj) {
    alert('Product added to Cart')
    var id = obj.id
    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers)
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
    } else {
        localStorage.setItem('cartNumbers', 1)
    }

    let products = [
        {
            id: 1,
            name: "Men's Fashion T Shirt",
            tag: "fp1",
            price: 10,
            incart: 0
        },
        {
            id: 2,
            name: "Men's Fashion T Shirt",
            tag: "fp2",
            price: 12,
            incart: 0
        },
        {
            id: 3,
            name: "Men's Oversized full sleeve Shirt",
            tag: "fp3",
            price: 18,
            incart: 0
        },
        {
            id: 4,
            name: "Women's Full Sleeve T Shirt",
            tag: "fp4",
            price: 18,
            incart: 0
        },
        {
            id: 5,
            name: "Women's Dolman Sleeve T Shirt",
            tag: "fp8",
            price: 15,
            incart: 0
        },
        {
            id: 6,
            name: "Men's Fashion T Shirt",
            tag: "fp5",
            price: 10,
            incart: 0
        },
        {
            id: 7,
            name: "Men's Full Sleeve T Shirt",
            tag: "fp6",
            price: 20,
            incart: 0
        },
        {
            id: 8,
            name: "Men's Fashion T Shirt",
            tag: "fp7",
            price: 12,
            incart: 0
        }

    ]

    if (id === 'a') {
        console.log(id)
        console.log('product details are ', products[0])
        let cartItems = localStorage.getItem('productsInCart')
        cartItems = JSON.parse(cartItems)

        if (cartItems != null) {

            if (cartItems[products[0].tag] == undefined) {
                cartItems = {
                    ...cartItems,
                    [products[0].tag]: products[0]
                }
            }
            cartItems[products[0].tag].incart += 1
        }
        else {
            products[0].incart = 1
            cartItems = { [products[0].tag]: products[0] }
        }

        localStorage.setItem('productsInCart', JSON.stringify(cartItems))

        let cartCost = localStorage.getItem('totalCost')

        if (cartCost != null) {
            cartCost = parseInt(cartCost)
            localStorage.setItem('totalCost', cartCost + products[0].price)
        }
        else {
            localStorage.setItem('totalCost', products[0].price)
        }
    }
    else if (id === 'b') {
        console.log(id)
        console.log('product details are ', products[1])
        let cartItems = localStorage.getItem('productsInCart')
        cartItems = JSON.parse(cartItems)

        if (cartItems != null) {

            if (cartItems[products[1].tag] == undefined) {
                cartItems = {
                    ...cartItems,
                    [products[1].tag]: products[1]
                }
            }
            cartItems[products[1].tag].incart += 1
        }
        else {
            products[1].incart = 1
            cartItems = { [products[1].tag]: products[1] }
        }

        localStorage.setItem('productsInCart', JSON.stringify(cartItems))

        let cartCost = localStorage.getItem('totalCost')

        if (cartCost != null) {
            cartCost = parseInt(cartCost)
            localStorage.setItem('totalCost', cartCost + products[1].price)
        }
        else {
            localStorage.setItem('totalCost', products[1].price)
        }
    }
    else if (id === 'c') {
        console.log(id)
        console.log('product details are ', products[2])
        let cartItems = localStorage.getItem('productsInCart')
        cartItems = JSON.parse(cartItems)

        if (cartItems != null) {

            if (cartItems[products[2].tag] == undefined) {
                cartItems = {
                    ...cartItems,
                    [products[2].tag]: products[2]
                }
            }
            cartItems[products[2].tag].incart += 1
        }
        else {
            products[2].incart = 1
            cartItems = { [products[2].tag]: products[2] }
        }

        localStorage.setItem('productsInCart', JSON.stringify(cartItems))

        let cartCost = localStorage.getItem('totalCost')

        if (cartCost != null) {
            cartCost = parseInt(cartCost)
            localStorage.setItem('totalCost', cartCost + products[2].price)
        }
        else {
            localStorage.setItem('totalCost', products[2].price)
        }
    }
    else if (id === 'd') {
        console.log(id)
        console.log('product details are ', products[3])
        let cartItems = localStorage.getItem('productsInCart')
        cartItems = JSON.parse(cartItems)

        if (cartItems != null) {

            if (cartItems[products[3].tag] == undefined) {
                cartItems = {
                    ...cartItems,
                    [products[3].tag]: products[3]
                }
            }
            cartItems[products[3].tag].incart += 1
        }
        else {
            products[3].incart = 1
            cartItems = { [products[3].tag]: products[3] }
        }

        localStorage.setItem('productsInCart', JSON.stringify(cartItems))

        let cartCost = localStorage.getItem('totalCost')

        if (cartCost != null) {
            cartCost = parseInt(cartCost)
            localStorage.setItem('totalCost', cartCost + products[3].price)
        }
        else {
            localStorage.setItem('totalCost', products[3].price)
        }
    }
    else if (id === 'e') {
        console.log(id)
        console.log('product details are ', products[4])
        let cartItems = localStorage.getItem('productsInCart')
        cartItems = JSON.parse(cartItems)

        if (cartItems != null) {

            if (cartItems[products[4].tag] == undefined) {
                cartItems = {
                    ...cartItems,
                    [products[4].tag]: products[4]
                }
            }
            cartItems[products[4].tag].incart += 1
        }
        else {
            products[4].incart = 1
            cartItems = { [products[4].tag]: products[4] }
        }

        localStorage.setItem('productsInCart', JSON.stringify(cartItems))

        let cartCost = localStorage.getItem('totalCost')

        if (cartCost != null) {
            cartCost = parseInt(cartCost)
            localStorage.setItem('totalCost', cartCost + products[4].price)
        }
        else {
            localStorage.setItem('totalCost', products[4].price)
        }
    }
    else if (id === 'f') {
        console.log(id)
        console.log('product details are ', products[5])
        let cartItems = localStorage.getItem('productsInCart')
        cartItems = JSON.parse(cartItems)

        if (cartItems != null) {

            if (cartItems[products[5].tag] == undefined) {
                cartItems = {
                    ...cartItems,
                    [products[5].tag]: products[5]
                }
            }
            cartItems[products[5].tag].incart += 1
        }
        else {
            products[5].incart = 1
            cartItems = { [products[5].tag]: products[5] }
        }

        localStorage.setItem('productsInCart', JSON.stringify(cartItems))

        let cartCost = localStorage.getItem('totalCost')

        if (cartCost != null) {
            cartCost = parseInt(cartCost)
            localStorage.setItem('totalCost', cartCost + products[5].price)
        }
        else {
            localStorage.setItem('totalCost', products[5].price)
        }
    }
    else if (id === 'g') {
        console.log(id)
        console.log('product details are ', products[6])
        let cartItems = localStorage.getItem('productsInCart')
        cartItems = JSON.parse(cartItems)

        if (cartItems != null) {

            if (cartItems[products[6].tag] == undefined) {
                cartItems = {
                    ...cartItems,
                    [products[6].tag]: products[6]
                }
            }
            cartItems[products[6].tag].incart += 1
        }
        else {
            products[6].incart = 1
            cartItems = { [products[6].tag]: products[6] }
        }

        localStorage.setItem('productsInCart', JSON.stringify(cartItems))

        let cartCost = localStorage.getItem('totalCost')

        if (cartCost != null) {
            cartCost = parseInt(cartCost)
            localStorage.setItem('totalCost', cartCost + products[6].price)
        }
        else {
            localStorage.setItem('totalCost', products[6].price)
        }
    }
    else if (id === 'h') {
        console.log(id)
        console.log('product details are ', products[7])
        let cartItems = localStorage.getItem('productsInCart')
        cartItems = JSON.parse(cartItems)

        if (cartItems != null) {

            if (cartItems[products[7].tag] == undefined) {
                cartItems = {
                    ...cartItems,
                    [products[7].tag]: products[7]
                }
            }
            cartItems[products[7].tag].incart += 1
        }
        else {
            products[7].incart = 1
            cartItems = { [products[7].tag]: products[7] }
        }

        localStorage.setItem('productsInCart', JSON.stringify(cartItems))

        let cartCost = localStorage.getItem('totalCost')

        if (cartCost != null) {
            cartCost = parseInt(cartCost)
            localStorage.setItem('totalCost', cartCost + products[7].price)
        }
        else {
            localStorage.setItem('totalCost', products[7].price)
        }
    }



}

function displayCart() {
    let setCartItems = localStorage.getItem('productsInCart')
    setCartItems = JSON.parse(setCartItems)
    let productContainer = document.querySelector(".products")
    let costContainer = document.querySelector(".cart-total-price")
    console.log(setCartItems)
    let cost = localStorage.getItem('totalCost')
    if (setCartItems && productContainer) {
        console.log('running')
        productContainer.innerHTML = ''
        Object.values(setCartItems).map(item => {


            productContainer.innerHTML += `

            <div class="cart-row">
                <div class="cart-item cart-column">
                <img class="cart-item-image" src="Images/${item.tag}.jpg" width="100" height="100">
                <span class="cart-item-title">${item.name}</span>
                </div>
                <span class="cart-price cart-column">${item.incart * item.price}</span>
                <div class="cart-quantity cart-column" >
                <input class="cart-quantity-input" type="text" value="${item.incart}">
                <button class="btn btn-danger" type="button" id="${item.id}">REMOVE</button>
                </div>
            
            </div>      
            `

            costContainer.innerHTML = `$${cost}`
        })
    }
}

function deleteCartElement(temp) {
    let items = []
    let CartItems = JSON.parse(localStorage.getItem('productsInCart'))
    let CartTotal = JSON.parse(localStorage.getItem('totalCost'))
    CartTotal = parseInt(CartTotal)
    let CartQuantity = JSON.parse(localStorage.getItem('cartNumbers'))
    CartQuantity = parseInt(CartQuantity)
    if (temp == 1) {
        Object.values(CartItems).map(item => {
            if (item.id != 1) {
                items.push(item)
            }
            else {
                CartTotal = CartTotal - (item.incart * item.price)
                CartQuantity = CartQuantity - (item.incart)
            }
        })

        localStorage.setItem('productsInCart', JSON.stringify(items))
        localStorage.setItem('totalCost', CartTotal)
        localStorage.setItem('cartNumbers', CartQuantity)
        window.location.reload()

    }
    if (temp == 2) {
        Object.values(CartItems).map(item => {
            if (item.id != 2) {
                items.push(item)
            }
            else {
                CartTotal = CartTotal - (item.incart * item.price)
                CartQuantity = CartQuantity - (item.incart)
            }
        })
        localStorage.setItem('productsInCart', JSON.stringify(items))
        localStorage.setItem('totalCost', CartTotal)
        localStorage.setItem('cartNumbers', CartQuantity)
        window.location.reload()
    }
    if (temp == 3) {
        Object.values(CartItems).map(item => {
            if (item.id != 3) {
                items.push(item)
            }
            else {
                CartTotal = CartTotal - (item.incart * item.price)
                CartQuantity = CartQuantity - (item.incart)
            }
        })
        localStorage.setItem('productsInCart', JSON.stringify(items))
        localStorage.setItem('totalCost', CartTotal)
        localStorage.setItem('cartNumbers', CartQuantity)
        window.location.reload()
    }
    if (temp == 4) {
        Object.values(CartItems).map(item => {
            if (item.id != 4) {
                items.push(item)
            }
            else {
                CartTotal = CartTotal - (item.incart * item.price)
                CartQuantity = CartQuantity - (item.incart)
            }
        })
        localStorage.setItem('productsInCart', JSON.stringify(items))
        localStorage.setItem('totalCost', CartTotal)
        localStorage.setItem('cartNumbers', CartQuantity)
        window.location.reload()
    }
    if (temp == 5) {
        Object.values(CartItems).map(item => {
            if (item.id != 5) {
                items.push(item)
            }
            else {
                CartTotal = CartTotal - (item.incart * item.price)
                CartQuantity = CartQuantity - (item.incart)
            }
        })
        localStorage.setItem('productsInCart', JSON.stringify(items))
        localStorage.setItem('totalCost', CartTotal)
        localStorage.setItem('cartNumbers', CartQuantity)
        window.location.reload()
    }
    if (temp == 6) {
        Object.values(CartItems).map(item => {
            if (item.id != 6) {
                items.push(item)
            }
            else {
                CartTotal = CartTotal - (item.incart * item.price)
                CartQuantity = CartQuantity - (item.incart)
            }
        })
        localStorage.setItem('productsInCart', JSON.stringify(items))
        localStorage.setItem('totalCost', CartTotal)
        localStorage.setItem('cartNumbers', CartQuantity)
        window.location.reload()
    }
    if (temp == 7) {
        Object.values(CartItems).map(item => {
            if (item.id != 7) {
                items.push(item)
            }
            else {
                CartTotal = CartTotal - (item.incart * item.price)
                CartQuantity = CartQuantity - (item.incart)
            }
        })
        localStorage.setItem('productsInCart', JSON.stringify(items))
        localStorage.setItem('totalCost', CartTotal)
        localStorage.setItem('cartNumbers', CartQuantity)
        window.location.reload()
    }
    if (temp == 8) {
        Object.values(CartItems).map(item => {
            if (item.id != 8) {
                items.push(item)
            }
            else {
                CartTotal = CartTotal - (item.incart * item.price)
                CartQuantity = CartQuantity - (item.incart)
            }
        })
        localStorage.setItem('productsInCart', JSON.stringify(items))
        localStorage.setItem('totalCost', CartTotal)
        localStorage.setItem('cartNumbers', CartQuantity)
        window.location.reload()

    }
}




displayCart()