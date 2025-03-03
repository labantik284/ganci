
const products = [
    { id: 1, name: "Ganci A", price: 10000 },
    { id: 2, name: "Ganci B", price: 15000 }
];

let cartCount = 0;

function renderProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Rp ${product.price}</p>
            <button onclick="addToCart()">Tambah ke Keranjang</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

renderProducts();
