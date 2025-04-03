

document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById("products-container");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("research");
    
    const form = document.querySelector("form");
    const nomInput = document.getElementById("nom");
    const titleInput = document.getElementById("titre");
    const priceInput = document.getElementById("prix");

    const cartContainer = document.getElementById("cart-container");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");
    const toggleCartButton = document.getElementById("toggle-cart");
    const clearCartButton = document.getElementById("clear-cart");

    let products = [
        { image: "https://picsum.photos/200/300?random=1", type: "fruit", nom: "Banane", prix: 2.99 },
        { image: "https://picsum.photos/200/300?random=2", type: "fruit", nom: "Pomme", prix: 2.99 },
        { image: "https://picsum.photos/200/300?random=3", type: "fruit", nom: "Ananas", prix: 2.99 },
        { image: "https://picsum.photos/200/300?random=4", type: "Légume", nom: "Haricot vert", prix: 3.99 },
        { image: "https://picsum.photos/200/300?random=5", type: "Légume", nom: "Aubergine", prix: 2.99 },
        { image: "https://picsum.photos/200/300?random=6", type: "Légume", nom: "Patate", prix: 2.99 }
    ];

    let cart = [];

    function displayProducts(filteredProducts = products) {
        productsContainer.innerHTML = "";

        if (filteredProducts.length === 0) {
            productsContainer.innerHTML = "<p>Aucun produit trouvé.</p>";
            return;
        }

        filteredProducts.forEach(product => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");
            cardElement.innerHTML = `
                <img src="${product.image}" alt="${product.nom}">
                <h2>${product.type}</h2>
                <p><strong>${product.nom}</strong></p>
                <p>${product.prix.toFixed(2)} €</p>
                <button onclick="addToCart('${product.nom}', ${product.prix}, '${product.image}')">Ajouter au panier</button>
            `;
            productsContainer.appendChild(cardElement);
        });
    }

    window.addToCart = function(nom, prix, image) {
        cart.push({ nom, prix, image });
        updateCart();
    };

    function updateCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            total += item.prix;
            const li = document.createElement("li");
            li.innerHTML = `
                <img src="${item.image}" alt="${item.nom}" style="width:50px; border-radius:5px;">
                <strong>${item.nom}</strong> - ${item.prix.toFixed(2)} €
            `;
            cartItemsContainer.appendChild(li);
        });

        cartCount.textContent = cart.length;
        cartTotal.textContent = total.toFixed(2) + " €";
    }

    searchButton.addEventListener("click", function () {
        let searchQuery = searchInput.value.toLowerCase();
        let filteredProducts = products.filter(product => 
            product.nom.toLowerCase().includes(searchQuery)
        );
        displayProducts(filteredProducts);
    });

    toggleCartButton.addEventListener("click", function() {
        cartContainer.classList.toggle("hidden");
    });

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const newProduct = {
            image: `https://picsum.photos/200/300?random=${Math.random()}`,
            type: titleInput.value,
            nom: nomInput.value,
            prix: parseFloat(priceInput.value)
        };

        products.push(newProduct);
        displayProducts();

        form.reset();
    });

    displayProducts();

    clearCartButton.addEventListener("click", function() {
        cart = []; // Vider le panier
        updateCart();
    });
});

//////////////////////////////////////////////////////////////////////////////////////








// const productsContainer = document.getElementById("products-container");
// const searchInput = document.getElementById("search-input");
// const searchButton = document.getElementById("research");
// const form = document.querySelector('form');
// const nom = document.querySelector('#nom');
// const title = document.querySelector('#titre');
// const price = document.querySelector('#prix');

// let products = [  // Liste initiale de produits
//     { image: "https://picsum.photos/200/300?random=1", type: "fruit", nom: "Banane", prix: "2,99" },
//     { image: "https://picsum.photos/200/300?random=2", type: "fruit", nom: "Pomme", prix: "2,99" },
//     { image: "https://picsum.photos/200/300?random=3", type: "fruit", nom: "Ananas", prix: "2,99" },
//     { image: "https://picsum.photos/200/300?random=4", type: "Legumes", nom: "Haricot vert", prix: "3,99" },
//     { image: "https://picsum.photos/200/300?random=5", type: "Legumes", nom: "Aubergine", prix: "2,99" },
//     { image: "https://picsum.photos/200/300?random=6", type: "Legumes", nom: "Patate", prix: "2,99" },
//     { image: "https://picsum.photos/200/300?random=7", type: "Legumes", nom: "Poire", prix: "2,99" },
//     { image: "https://picsum.photos/200/300?random=8", type: "Legumes", nom: "Tomate", prix: "2,99" }
// ];

// // Fonction pour afficher les produits
// function displayProducts(filteredProducts) {
//     productsContainer.innerHTML = ""; 

//     if (filteredProducts.length === 0) {
//         productsContainer.innerHTML = "<p>Aucun produit trouvé.</p>";
//         return;
//     }

//     filteredProducts.forEach(product => {
//         const cardElement = document.createElement("div");
//         cardElement.classList.add("card");
//         cardElement.innerHTML = `
//             <img src="${product.image}" alt="${product.nom}" >
//             <h2>${product.type}</h2>
//             <p><strong>${product.nom}</strong></p>
//             <p>${product.prix} €</p>
//         `;
//         productsContainer.appendChild(cardElement);
//     });
// }

// // Afficher les produits au chargement
// displayProducts(products);

// // Fonction de recherche
// searchButton.addEventListener("click", function () {
//     let searchQuery = searchInput.value.toLowerCase();

//     let filteredProducts = products.filter(product => 
//         product.nom.toLowerCase().includes(searchQuery)
//     );

//     displayProducts(filteredProducts);
// });  

// // Ajouter un nouveau produit via le formulaire
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // Création d'un nouvel objet produit
//     const newProduct = {
//         image: `https://picsum.photos/200/300?random=${Math.random()}`,
//         type: title.value,
//         nom: nom.value,
//         prix: price.value
//     };

//     // Ajouter le produit à la liste principale
//     products.push(newProduct);

//     // Réafficher tous les produits, y compris le nouveau
//     displayProducts(products);

//     // Réinitialiser le formulaire
//     form.reset();
// });

