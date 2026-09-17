let cart =
    JSON.parse(localStorage.getItem("zomatoCart")) || [];


/* ================= DISPLAY CART ================= */

function displayCart(){

    const container =
        document.getElementById("cartItems");

    const bill =
        document.getElementById("bill");

    if(cart.length === 0){

        container.innerHTML = `
            <div class="empty">
                <h2>Your cart is empty 🛒</h2>
                <p>Add some delicious food to continue.</p>
                <br>
                <a href="index.html"
                   class="primary-btn"
                   style="display:inline-block;width:220px;text-decoration:none;">
                   Explore Restaurants
                </a>
            </div>
        `;

        bill.innerHTML = "";

        return;
    }


    container.innerHTML = "";


    let subtotal = 0;


    cart.forEach(function(item,index){

        const itemTotal =
            item.price * item.quantity;

        subtotal += itemTotal;


        container.innerHTML += `

        <div class="cart-item">

            <div>
                <h3>${item.name}</h3>
                <p>₹${item.price} each</p>
            </div>

            <div class="quantity">

                <button onclick="changeQuantity(${index},-1)">
                    −
                </button>

                <strong>${item.quantity}</strong>

                <button onclick="changeQuantity(${index},1)">
                    +
                </button>

            </div>

            <strong>
                ₹${itemTotal}
            </strong>

        </div>

        `;

    });


    const delivery =
        subtotal >= 499 ? 0 : 40;

    const taxes =
        Math.round(subtotal * 0.05);

    const total =
        subtotal + delivery + taxes;


    bill.innerHTML = `

        <div class="bill">

            <h2>Bill Details</h2>

            <div class="bill-row">
                <span>Item Total</span>
                <span>₹${subtotal}</span>
            </div>

            <div class="bill-row">
                <span>Delivery Fee</span>
                <span>${delivery === 0 ? "FREE" : "₹"+delivery}</span>
            </div>

            <div class="bill-row">
                <span>Taxes</span>
                <span>₹${taxes}</span>
            </div>

            <div class="bill-row total">
                <span>Total</span>
                <span>₹${total}</span>
            </div>

            <button
                class="primary-btn"
                onclick="goCheckout()">
                Proceed to Checkout
            </button>

        </div>

    `;

}


function changeQuantity(index,change){

    cart[index].quantity += change;

    if(cart[index].quantity <= 0){

        cart.splice(index,1);

    }

    localStorage.setItem(
        "zomatoCart",
        JSON.stringify(cart)
    );

    displayCart();

}


function goCheckout(){

    if(cart.length === 0){
        alert("Your cart is empty.");
        return;
    }

    window.location.href =
        "checkout.html";
}


displayCart();
