// רשימת מוצרים לדוגמה
const products = [
    { id: 1, name: "אדנית שחר", clientPrice: 120, costPrice: 55, image: "photos/product1.jpg"},
    { id: 2, name: "אדנית עדן", clientPrice: 250, costPrice: 100, image: "photos/product2.jpg" },
    { id: 4, name: "אדנית איתן", clientPrice: 350, costPrice: 150, image: "photos/product3.jpg" },
    { id: 5, name: "אדנית אלמוג", clientPrice: 350, costPrice: 150, image: "photos/product4.jpg" },
    { id: 5, name: "זולה יחיד", clientPrice: 250, costPrice: 75, image: "photos/product5.jpg" },
    { id: 6, name: "זולה זוגי", clientPrice: 320, costPrice: 110, image: "photos/product6.jpg" },
    { id: 7, name: "שולחן זולה", clientPrice: 300, costPrice: 75, image: "photos/product7.jpg" },
    { id: 8, name: "ספסל גן יחיד", clientPrice: 430, costPrice: 145, image: "photos/product8.jpg" },
    { id: 9, name: "ספסל גן זוגי", clientPrice: 500, costPrice: 200, image: "photos/product9.jpg" },
    { id: 10, name: "שולחן גן", clientPrice: 320, costPrice: 85, image: "photos/product10.jpg" },
    { id: 11, name: "ספסל המתנה", clientPrice: 350, costPrice: 135, image: "photos/product11.jpg" },
    { id: 12, name: "שולחן קקל ילדים", clientPrice: 480, costPrice: 150, image: "photos/product12.jpg" },
    { id: 13, name: "שולחן קקל", clientPrice: 850, costPrice: 355, image: "product3.jpg" },
    { id: 14, name: "שולחן קקל מונגש", clientPrice: 1000, costPrice: 420, image: "product3.jpg" },
    { id: 15, name: "ספסל נדנדה", clientPrice: 1850, costPrice: 700, image: "photos/product15.jpg" },
    { id: 14, name: "שולחן קקל ששבש / דמקה", clientPrice: 950, costPrice: 450, image: "photos/product16.jpg" },

];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalClientPrice = document.getElementById("total-client-price");
const totalCostPrice = document.getElementById("total-cost-price");

let cart = [];

// הצגת מוצרים
products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>מחיר ללקוח: ${product.clientPrice} ש"ח</p>
        <p>עלות גולמית: ${product.costPrice} ש"ח</p>
        <button onclick="addToCart(${product.id})">הוסף לעגלה</button>
    `;
    productList.appendChild(productElement);
});

// הוספת מוצר לעגלה
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// הסרת מוצר מהעגלה
function removeFromCart(index) {
    cart.splice(index, 1); // הסרה על פי האינדקס של המוצר
    updateCart();
}

// עדכון עגלה
function updateCart() {
    cartItems.innerHTML = "";
    let clientTotal = 0;
    let costTotal = 0;

    cart.forEach((item, index) => {
        clientTotal += item.clientPrice;
        costTotal += item.costPrice;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.clientPrice} ש"ח</td>
            <td>${item.costPrice} ש"ח</td>
            <td><button onclick="removeFromCart(${index})">הסר</button></td>
        `;
        cartItems.appendChild(row);
    });

    totalClientPrice.textContent = clientTotal;
    totalCostPrice.textContent = costTotal;
}