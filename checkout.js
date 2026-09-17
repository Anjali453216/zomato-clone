function placeOrder(){

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const address =
        document.getElementById("address").value.trim();


    if(name === "" || phone === "" || address === ""){

        alert("Please fill in all delivery details.");

        return;
    }


    const orderId =
        "ZM" + Math.floor(100000 + Math.random()*900000);


    localStorage.setItem(
        "orderId",
        orderId
    );


    localStorage.setItem(
        "orderStatus",
        "Order Confirmed"
    );


    localStorage.removeItem("zomatoCart");


    window.location.href =
        "order.html";
}
