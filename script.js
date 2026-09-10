const products = [
  // ===== Mobiles =====
  { id: 1, name: "Smartphone", price: 15000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5vZju6f6-UdMhVn-dY2pbNLWxcN2aP-wwyA&s", category: "Mobiles" },
  { id: 7, name: "iPhone 15 Pro", price: 120000, img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-9inch-silver_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80", category: "Mobiles" },
  { id: 8, name: "Samsung Galaxy S23", price: 90000, img: "https://media.flixcar.com/webp/synd-asset/Samsung-141435966-in-galaxy-s24-s928-sm-s928bzkqins-539573273--Download-Source--zoom.png", category: "Mobiles" },
  { id: 9, name: "OnePlus 11", price: 65000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnma55fG6QyDN3Q2lxKke7Zu_vmul4sFlF2w&s", category: "Mobiles" },
  { id: 10, name: "Google Pixel 10", price: 80000, img: "https://imageio.forbes.com/specials-images/imageserve/66c7bf2f9eecea6b0c81ad45/Pixel-9-Pro-XL/960x0.jpg?height=399&width=711&fit=bounds", category: "Mobiles" },

  // ===== Electronics =====
  { id: 2, name: "Laptop", price: 50000, img: "https://assets.telegraphindia.com/telegraph/2020/Nov/1605478088_6c-acer.jpg", category: "Electronics" },
  { id: 5, name: "Headphones", price: 2000, img: "https://p.globalsources.com/IMAGES/PDT/B1211109749/Wholesale-Factory-Price-Headphones.png", category: "Electronics" },
  { id: 11, name: "Gaming PC", price: 90000, img: "https://www.cyberpowerpc.com/blog/w/wp-content/uploads/2021/08/How-to-Quickly-Speed-Up-Your-Gaming-PC-512337236-1630170304996-scaled.jpg", category: "Electronics" },
  { id: 12, name: "Smart Watch", price: 15000, img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-card-40-compare-202509_GEO_IN_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=MHRQLytDVGpzanZQOHZNM1JPY0puZStCWEw0aFlCQTRuS29hNFhhLzZVZFpTYmxNa1FMbVU4TldaMkRFNHB5eGlKajJrWE1laEVSL0xjK1hPMUNLMkV0RmgycTRGTHI3SUVxVFVFNFI5Qy83WXBBQmdLWXZaQWhvSU9uSnNoTXY", category: "Electronics" },
  { id: 13, name: "Bluetooth Speaker", price: 4000, img: "https://www.jbl.com/on/demandware.static/-/Library-Sites-SharedLibrary-JB/default/dw2a4d57a1/glp/portables-emea-ccpi-v2/images/main-products/boombox3.png", category: "Electronics" },
  { id: 14, name: "Tablet", price: 30000, img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-40-ipad-202410_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=SFZodklRUStGeVJpUE9iYTA5SFFYay9QT3EzOEVhTmwyMUJSTjlXV3hGdGZMQnBkTWowcTVzai9uUEgzVDdYM3NtS0NkZnlUKzBRdlpRai9zMDR0cS9TN0NVaEVIU09sK0c2RHUvMlFZREoxWnZFQ2ozaVJXS3R0eUNrSXRjUEo", category: "Electronics" },
  { id: 15, name: "Monitor", price: 18000, img: "https://www.lg.com/content/dam/channel/wcms/in/images/monitors/27gs60f-b_atr_eail_in_c/gallery/27GS60F-B-DZ-1.jpg/jcr:content/renditions/thum-1600x1062.jpeg", category: "Electronics" },
  { id: 16, name: "Keyboard", price: 1500, img: "https://www.charachorder.com/cdn/shop/files/cclm_48dc687f-fe16-4336-8249-1cbfaf629f11.jpg?v=1715446543&width=5760", category: "Electronics" },
  { id: 17, name: "Mouse", price: 800, img: "https://images-cdn.ubuy.co.in/66b6b237c0e4d45f681cbe38-luminous-wired-mouse-mechanical-mute.jpg", category: "Electronics" },
  { id: 18, name: "Camera DSLR", price: 55000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2FNCOcvvXhGvLBiQoDDADJXYeL8Osdnjs6A&s", category: "Electronics" },

  // ===== Home Appliances =====
  { id: 4, name: "Washing Machine", price: 35000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9yLmcFhcTOvA2w1BgvwMpm0uKQ21m2wsFw&s", category: "Home" },
  { id: 6, name: "Microwave Oven", price: 15000, img: "https://mahajanelectronics.com/cdn/shop/products/3_b97987bc-9e39-4824-95f4-dd888be2d0f4.jpg?v=1755488083&width=1500", category: "Home" },
  { id: 19, name: "Gas Stove", price: 12000, img: "https://sigriwala.com/wp-content/uploads/2025/04/6burner-manual-gas-stove-orchid-black-sigriwala-1.jpeg", category: "Home" },
  { id: 20, name: "Refrigerator", price: 50000, img: "https://m.media-amazon.com/images/I/41lXiiJlmAL._UF1000,1000_QL80_.jpg", category: "Home" },
  { id: 21, name: "Vacuum Cleaner", price: 10000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmd6i4AOTv0mjpUnMyEuq-OJcfcEUw59RC0w&s", category: "Home" },
  { id: 22, name: "Water Purifier", price: 12000, img: "https://www.pureitwater.com/media/catalog/product/e/c/echowaterhero.jpg", category: "Home" },
  { id: 23, name: "Iron", price: 2000, img: "https://m.media-amazon.com/images/I/41HxU-FepEL._SR290,290_.jpg", category: "Home" },
  { id: 24, name: "Ceiling Fan", price: 3000, img: "https://haroldelectricals.com/cdn/shop/files/NewfanwoodenCrystalchandelier5_1080x.jpg?v=1708415312", category: "Home" },
  { id: 25, name: "Mixer Grinder", price: 4000, img: "https://judge.ttkprestige.com/media/catalog/product/6/6/6617-50116-IMG1.jpg", category: "Home" },
  { id: 26, name: "Dishwasher", price: 45000, img: "https://media3.bsh-group.com/Product_Shots/5120x/23597097_SN27ZI00VI_PGA1_def.webp", category: "Home" },

  // ===== AC & Cooling =====
  { id: 3, name: "Air Conditioner", price: 55000, img: "https://aws-obg-image-lb-4.tcl.com/content/dam/brandsite/global/images-for-blog/ac-maintenance-for-lasting-system-pc.jpg", category: "AC" },
  { id: 27, name: "Cooler", price: 7000, img: "https://consumer.bluestarindia.com/cdn/shop/files/CA140PMH_Right_View.jpg?v=1729575407&width=1200", category: "AC" },
  { id: 28, name: "Tower Fan", price: 6000, img: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Fans/Images/275972_0_j6pyde.png?tr=w-600", category: "AC" },
  { id: 29, name: "Dehumidifier", price: 12000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVnQlrVirn4fwUz0CD1BCwi6kbpLEhpvOSw&s", category: "AC" },

  // ===== Kitchen =====
  { id: 30, name: "Toaster", price: 2500, img: "https://myborosil.com/cdn/shop/files/my-borosil-toasters-grills-borosil-krispy-pop-up-toaster-black-33330162106506.jpg", category: "Kitchen" },
  { id: 31, name: "Coffee Maker", price: 5000, img: "https://caramelly.in/cdn/shop/files/caramelly-latte-touch-coffee-machine-with-precision-grinding-and-touchscreen-3018893_600x.jpg?v=1753952114", category: "Kitchen" },
  { id: 32, name: "Blender", price: 3500, img: "https://decure.in/cdn/shop/files/cta_haf_chromatic_hand_blender_bc94efcc-60d4-4ff2-bc42-a39007058e24.jpg?v=1722429289", category: "Kitchen" },
  { id: 33, name: "Rice Cooker", price: 3000, img: "https://s3.ap-south-1.amazonaws.com/assetsv1.viveks.com/product/2791/8JfVXiYy7kBrasMZlrTX8JncRy4nc4kbLmZTyYR9.webp", category: "Kitchen" },
  { id: 34, name: "Electric Kettle", price: 1500, img: "https://judge.ttkprestige.com/media/catalog/product/0/2/0227-50321-IMG1.jpg", category: "Kitchen" },
  { id: 35, name: "Juicer", price: 4500, img: "https://steelhouse.shop/wp-content/uploads/2024/04/d1.jpg", category: "Kitchen" },

  // ===== Furniture =====
  { id: 36, name: "Office Chair", price: 8000, img: "https://cellbell.in/cdn/shop/files/B08R5GR57J.MAIN.png?v=1734437270", category: "Furniture" },
  { id: 37, name: "Sofa Set", price: 45000, img: "https://shopps.in/wp-content/uploads/2023/10/CF45801A-6AF6-4D32-A651-506EFAA90744.webp", category: "Furniture" },
  { id: 38, name: "Dining Table", price: 20000, img: "https://www.getmycouch.com/cdn/shop/files/Brown_Dark_Brown_Elegant_Furniture_Catalog_Bi-Fold_Brochure.png?v=1746182411", category: "Furniture" },
  { id: 39, name: "Bookshelf", price: 7000, img: "https://pritihome.com/wp-content/uploads/2024/03/1-18-1.webp", category: "Furniture" },
  { id: 40, name: "Bed King Size", price: 50000, img: "https://www.royaloakindia.com/media/catalog/product/b/s/bs-120b_8s_9l_11_copy_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300", category: "Furniture" },

  // ===== Fashion =====
  { id: 41, name: "T-Shirt", price: 500, img: "https://prabhubhakti.com/cdn/shop/files/fghh.png?v=1713858373", category: "Fashion" },
  { id: 42, name: "Jeans", price: 1500, img: "https://www.realsimple.com/thmb/pylBi8okBliW5e5qvCQFWPQatoc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/types-of-denim-GettyImages-598820544-c87ecea4d6454e4a9184a35226c97735.jpg", category: "Fashion" },
  { id: 43, name: "Sneakers", price: 3000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2z0tK8kU8dnzITSZihjAt2lGRpwgNSQzaaA&s", category: "Fashion" },
  { id: 44, name: "Jacket", price: 3500, img: "https://m.media-amazon.com/images/I/41x1e6eIYnL._SR290,290_.jpg", category: "Fashion" },
  { id: 45, name: "Watch", price: 7000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtW0E3itYQnQDbmonHfcbJ5Kvfi_Ke7QOG_w&s", category: "Fashion" },

  // ===== Books =====
  { id: 46, name: "Novel", price: 400, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSePd2hTAbt6bWR0aH0MX2zhlh200gkmK9scQ&s", category: "Books" },
  { id: 47, name: "Science Book", price: 800, img: "https://m.media-amazon.com/images/I/71lDUGfRa8L._UF1000,1000_QL80_.jpg", category: "Books" },
  { id: 48, name: "Math Textbook", price: 1000, img: "https://images-cdn.ubuy.co.in/66d7fb25bd9fc24e590bbff4-real-analysis-a-long-form-mathematics.jpg", category: "Books" },
  { id: 49, name: "Comics", price: 300, img: "https://m.media-amazon.com/images/I/813JTCG1nwL._UF1000,1000_QL80_.jpg", category: "Books" },
  { id: 50, name: "Biography", price: 600, img: "https://m.media-amazon.com/images/I/6191kgDNi4L._UF1000,1000_QL80_.jpg", category: "Books" },

  // ===== Sports =====
  { id: 51, name: "Cricket Bat", price: 2500, img: "https://www.cielsports.in/cdn/shop/files/player-edition-bat-three-profiles-side-back-front.png?v=1746327664", category: "Sports" },
  { id: 52, name: "Football", price: 1500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Xv5vxs84doIRq3u1hKcZNzaendHsB3ADiA&s", category: "Sports" },
  { id: 53, name: "Tennis Racket", price: 3500, img: "https://images-cdn.ubuy.co.in/67cd303fb1b7e335bf559dd9-wilson-tour-slam-lite-adult-tennis.jpg", category: "Sports" },
  { id: 54, name: "Basketball", price: 1800, img: "https://img.freepik.com/premium-vector/basketball-hoop-with-net-that-says-basketball-it_1249733-805.jpg?semt=ais_incoming&w=740&q=80", category: "Sports" },
  { id: 55, name: "Yoga Mat", price: 1200, img: "https://iklstore.com/wp-content/uploads/2023/10/41qB-OiHs9L._AC_UF8941000_QL80_.jpg", category: "Sports" },

  // ===== Beauty =====
  { id: 56, name: "Lipstick", price: 700, img: "https://images.ctfassets.net/wlke2cbybljx/6Z75K7EQh8g4FfDz4TrtyZ/db8c19ba086ca39a187640400ba323b3/LIPSTICKS_X10_Square_RGB.jpg", category: "Beauty" },
  { id: 57, name: "Perfume", price: 2500, img: "https://beardo.in/cdn/shop/files/Beardo_WS_EDP_100ml_2160_x_2160.webp?v=1742191482&width=1946", category: "Beauty" },
  { id: 58, name: "Face Cream", price: 1000, img: "https://gleuhr.com/wp-content/uploads/2021/04/5-night-cream.jpg", category: "Beauty" }
];
// ==================== LOCAL STORAGE ====================
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];
let loggedInUser = localStorage.getItem("loggedInUser") || null;

// ==================== PRODUCT RENDERING ====================
function renderProducts(category = "All") {
  const productList = document.getElementById("product-list");
  if (!productList) return;
  productList.innerHTML = "";

  const filtered = category === "All" ? products : products.filter(p => p.category === category);

  filtered.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
      <button onclick="addToWishlist(${product.id})">❤️ Wishlist</button>
    `;
    productList.appendChild(div);
  });
  updateCartCount();
  renderCategories();
}

// ==================== CART ====================
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
  updateCartCount();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  if (!cartItems) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ₹${item.price} 
      <button onclick="removeFromCart(${index})">Remove</button>`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total;
}

// ==================== WISHLIST ====================
function addToWishlist(id) {
  const product = products.find(p => p.id === id);
  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert(`${product.name} added to wishlist!`);
}

function removeFromWishlist(index) {
  wishlist.splice(index, 1);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  renderWishlist();
}

function renderWishlist() {
  const wishlistItems = document.getElementById("wishlist-items");
  if (!wishlistItems) return;

  wishlistItems.innerHTML = "";
  wishlist.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ₹${item.price} 
      <button onclick="removeFromWishlist(${index})">Remove</button>`;
    wishlistItems.appendChild(li);
  });
}

// ==================== PAYMENT ====================
function goToPayment() {
  window.location.href = "payment.html";
}

function processPayment() {
  alert("Payment successful! Thank you for shopping.");
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "index.html";
}

// ==================== SEARCH & FILTER ====================
function searchProducts() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(searchInput));

  const productList = document.getElementById("product-list");
  if (!productList) return;
  productList.innerHTML = "";

  filtered.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
      <button onclick="addToWishlist(${product.id})">❤️ Wishlist</button>
    `;
    productList.appendChild(div);
  });
}

function filterCategory(category) {
  renderProducts(category);
}

// Auto-generate category buttons
function renderCategories() {
  const categorySection = document.querySelector(".categories");
  if (!categorySection) return;

  categorySection.innerHTML = "";
  let categories = ["All", ...new Set(products.map(p => p.category))];
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.onclick = () => filterCategory(cat);
    categorySection.appendChild(btn);
  });
}

// ==================== LOGIN & SIGNUP ====================
function signup() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  if (username && password) {
    let existing = users.find(u => u.username === username);
    if (existing) {
      alert("Username already exists. Please choose another.");
      return;
    }
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Account created successfully! Please log in.");
    window.location.href = "login.html";
  } else {
    alert("Please enter valid details");
  }
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert(`Welcome, ${username}!`);
    localStorage.setItem("loggedInUser", username);
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password");
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  alert("Logged out successfully.");
  window.location.href = "index.html";
}

// ==================== NAVBAR USER DISPLAY ====================
function showUser() {
  const nav = document.querySelector("nav ul");
  if (!nav) return;

  const user = localStorage.getItem("loggedInUser");
  if (user) {
    const li = document.createElement("li");
    li.innerHTML = `Hello, <strong>${user}</strong> 
      <button onclick="logout()">Logout</button>`;
    nav.appendChild(li);
  }
}

// ==================== INITIALIZE ====================
renderProducts();
renderCart();
renderWishlist();
updateCartCount();
showUser();

/* CART COUNT */
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.textContent = cart.length;
}