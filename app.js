/* ================= CART ================= */

function getCart(){
    return JSON.parse(localStorage.getItem("zomatoCart")) || [];
}

function saveCart(cart){
    localStorage.setItem("zomatoCart", JSON.stringify(cart));
}

function updateCartCount(){

    const cart = getCart();

    const count = cart.reduce(function(total,item){
        return total + item.quantity;
    },0);

    const counter = document.getElementById("cartCount");

    if(counter){
        counter.innerText = count;
    }
}

updateCartCount();


/* ================= SEARCH ================= */

function performSearch(){

    const input =
        document.getElementById("heroSearch");

    if(!input) return;

    const query =
        input.value.toLowerCase().trim();

    if(query === ""){
        goRestaurants();
        return;
    }

    localStorage.setItem("restaurantSearch",query);

    window.location.href = "restaurant.html";
}


/* ================= HOME SEARCH ================= */

const homeSearch =
    document.getElementById("homeSearch");

if(homeSearch){

    homeSearch.addEventListener("keyup",function(e){

        if(e.key === "Enter"){
            localStorage.setItem(
                "restaurantSearch",
                this.value.toLowerCase()
            );

            window.location.href = "restaurant.html";
        }

    });

}


/* ================= FILTER ================= */

function filterRestaurants(category){

    const cards =
        document.querySelectorAll(".restaurant-card");

    cards.forEach(function(card){

        if(
            category === "all" ||
            card.dataset.category === category
        ){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });
}


/* ================= FAVORITES ================= */

function toggleFavorite(button,name){

    let favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    if(favorites.includes(name)){

        favorites =
            favorites.filter(item => item !== name);

        button.classList.remove("active");
        button.innerText = "♡";

    }
    else{

        favorites.push(name);

        button.classList.add("active");
        button.innerText = "♥";

    }

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );
}


/* ================= RESTAURANT ================= */

function openRestaurant(name){

    localStorage.setItem(
        "selectedRestaurant",
        name
    );

    window.location.href = "restaurant.html";
}


/* ================= CART ================= */

function goCart(){

    window.location.href = "cart.html";
}


/* ================= LOGIN ================= */

function openLogin(){

    const modal =
        document.getElementById("loginModal");

    if(modal){
        modal.style.display = "flex";
    }
}

function closeLogin(){

    const modal =
        document.getElementById("loginModal");

    if(modal){
        modal.style.display = "none";
    }
}

function loginUser(){

    localStorage.setItem(
        "loggedIn",
        "true"
    );

    alert("Login successful!");

    closeLogin();
}


/* ================= DARK MODE ================= */

function toggleDarkMode(){

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark")
    );
}

if(localStorage.getItem("darkMode") === "true"){
    document.body.classList.add("dark");
}


/* ================= SCROLL ================= */

function goRestaurants(){

    const section =
        document.getElementById("restaurants");

    if(section){
        section.scrollIntoView({
            behavior:"smooth"
        });
    }
}
