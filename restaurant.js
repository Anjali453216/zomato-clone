const restaurantName =
    localStorage.getItem("selectedRestaurant") ||
    "Popular Restaurant";

document.getElementById("restaurantName").innerText =
    restaurantName;


/* ================= ADD ITEM ================= */

function addItem(name,price){

    let cart =
        JSON.parse(localStorage.getItem("zomatoCart")) || [];

    const existing =
        cart.find(item => item.name === name);

    if(existing){

        existing.quantity++;

    }
    else{

        cart.push({
            name:name,
            price:price,
            quantity:1
        });

    }

    localStorage.setItem(
        "zomatoCart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart!");

}
