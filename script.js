const CART_KEY = "js-handmade-cart";
const FAVORITE_IDS = ["p03", "p01", "p06", "p10", "p23", "p16", "p17", "p18"];
const money = n => !n ? "Ask for price" : new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 }).format(n);
const getCart = () => { try { const c = JSON.parse(localStorage.getItem(CART_KEY) || "[]"); return Array.isArray(c) ? c.filter(i => PRODUCTS.some(p => p.id === i.id)) : []; } catch { return []; } };
const saveCart = cart => { localStorage.setItem(CART_KEY, JSON.stringify(cart)); updateCartCount(); };
function updateCartCount() { const count = getCart().reduce((s, p) => s + p.qty, 0); document.querySelectorAll(".cart-count").forEach(el => el.textContent = count); }
function addToCart(id) { const cart = getCart(); const found = cart.find(p => p.id === id); if (found) found.qty++; else cart.push({ id, qty: 1 }); saveCart(cart); const btn = document.querySelector(`[data-add="${id}"]`); if (btn) { const old = btn.textContent; btn.textContent = "Added ✓"; setTimeout(() => btn.textContent = old, 1100); } }
function productCard(p) { return `<article class="product-card"><a class="product-photo" href="shop.html" aria-label="${p.name}"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="product-tag">${p.category}</span></a><div class="product-info"><div><h3>${p.name}</h3><p>${p.description}</p></div><div class="product-bottom"><strong>${money(p.price)}</strong><button class="add-button" data-add="${p.id}" aria-label="Add ${p.name} to bag">Add to bag</button></div></div></article>`; }
function renderProducts(target, filter = "All", query = "") { const el = document.getElementById(target); if (!el) return; const source = target === "featured-products" ? FAVORITE_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean) : PRODUCTS; const list = source.filter(p => (filter === "All" || p.category === filter) && (p.name + " " + p.description).toLowerCase().includes(query.toLowerCase())); el.innerHTML = list.length ? list.map(productCard).join("") : '<p class="empty-state">No bouquets found. Try another search.</p>'; el.querySelectorAll("[data-add]").forEach(b => b.addEventListener("click", () => addToCart(b.dataset.add))); }
function renderCart() { const el = document.getElementById("cart-content"); if (!el) return; const cart = getCart(); if (!cart.length) { el.innerHTML = '<div class="empty-cart"><div>✿</div><h2>Your bag is waiting for something lovely.</h2><p>Explore our collection and add a bouquet you love.</p><a class="btn btn-dark" href="shop.html">Shop flowers</a></div>'; return; } let total = 0; el.innerHTML = `<div class="cart-table">${cart.map(item => { const p = PRODUCTS.find(x => x.id === item.id); if (!p) return ""; total += p.price * item.qty; return `<div class="cart-row"><img src="${p.image}" alt=""><div class="cart-product"><strong>${p.name}</strong><small>${money(p.price)} each</small></div><div class="qty-control"><button data-dec="${p.id}" aria-label="Decrease quantity">−</button><span>${item.qty}</span><button data-inc="${p.id}" aria-label="Increase quantity">＋</button></div><strong>${money(p.price * item.qty)}</strong><button class="remove-button" data-remove="${p.id}">Remove</button></div>`; }).join("")}</div><div class="cart-total"><span>Subtotal</span><strong>${money(total)}</strong></div><p class="form-note">Delivery fees, if applicable, will be confirmed separately.</p><div class="cart-actions"><a class="text-link" href="shop.html">← Continue shopping</a><a class="btn btn-dark" href="checkout.html">Proceed to order form</a></div>`; el.querySelectorAll("[data-inc]").forEach(b => b.onclick = () => changeQty(b.dataset.inc, 1)); el.querySelectorAll("[data-dec]").forEach(b => b.onclick = () => changeQty(b.dataset.dec, -1)); el.querySelectorAll("[data-remove]").forEach(b => b.onclick = () => { saveCart(getCart().filter(x => x.id !== b.dataset.remove)); renderCart(); }); }
function changeQty(id, d) { const cart = getCart(); const item = cart.find(x => x.id === id); if (item) item.qty += d; saveCart(cart.filter(x => x.qty > 0)); renderCart(); }
function renderCheckout() { const el = document.getElementById("checkout-summary"); if (!el) return; const cart = getCart(); if (!cart.length) { el.innerHTML = '<p>Your bag is empty. <a href="shop.html">Shop flowers</a>.</p>'; return; } let total = 0; el.innerHTML = cart.map(item => { const p = PRODUCTS.find(x => x.id === item.id); if (!p) return ""; total += p.price * item.qty; return `<div class="summary-line"><span>${p.name} × ${item.qty}</span><strong>${money(p.price * item.qty)}</strong></div>`; }).join("") + `<div class="summary-total"><span>Subtotal</span><strong>${money(total)}</strong></div><small>Delivery fee, if any, will be confirmed by the shop.</small>`; }
function setupForms() { const form = document.getElementById("order-form"); if (form) form.addEventListener("submit", e => { e.preventDefault(); const cart = getCart(); if (!cart.length) { document.getElementById("order-result").innerHTML = '<p class="error">Your bag is empty. Please add a bouquet first.</p>'; return; } const data = Object.fromEntries(new FormData(form).entries()); let total = 0; const lines = cart.map(item => { const p = PRODUCTS.find(x => x.id === item.id); total += p.price * item.qty; return `${p.name} x ${item.qty} — ${money(p.price * item.qty)}`; }); const summary = `J & S HANDMADE FLOWERS — ORDER REQUEST\nCustomer: ${data.name}\nEmail: ${data.email}\nMobile: ${data.phone}\nPreferred date: ${data.date}\nAddress / pickup: ${data.address}\nPayment preference: ${data.payment}\n\n${lines.join("\n")}\nSubtotal: ${money(total)}\nGift message: ${data.message || "None"}\n\nPlease confirm availability and delivery fee.`; document.getElementById("order-result").innerHTML = `<div class="confirmation"><h3>Order summary ready, ${data.name.split(" ")[0]}!</h3><p>Please copy this summary and send it to the shop to confirm your order.</p><textarea id="order-copy" rows="10" readonly></textarea><button type="button" class="btn btn-dark" id="copy-order">Copy order summary</button>${SHOP.messengerUrl ? `<a class="btn btn-light btn-outline" target="_blank" rel="noopener" href="${SHOP.messengerUrl}">Send via Messenger</a>` : ""}<p class="form-note">Your order is not submitted until the shop receives and confirms it.</p></div>`; document.getElementById("order-copy").value = summary; document.getElementById("copy-order").onclick = async () => { try { await navigator.clipboard.writeText(summary); document.getElementById("copy-order").textContent = "Copied ✓"; } catch { document.getElementById("order-copy").select(); document.execCommand("copy"); } }; }); const cf = document.getElementById("contact-form"); if (cf) cf.addEventListener("submit", e => { e.preventDefault(); const d = Object.fromEntries(new FormData(cf).entries()); const msg = `Hello J & S Handmade Flowers!\nName: ${d.name}\nEmail: ${d.email}\nMessage: ${d.message}`; document.getElementById("contact-result").innerHTML = `Your message is ready. <button type="button" class="inline-copy" id="copy-contact">Copy message</button>`; document.getElementById("copy-contact").onclick = () => navigator.clipboard.writeText(msg).then(() => document.getElementById("copy-contact").textContent = "Copied ✓"); }); }
document.addEventListener("DOMContentLoaded", () => { const fb = document.getElementById("category-filters"); if (fb) fb.innerHTML = ["All", ...CATEGORIES].map((c, i) => `<button class="filter${i ? "" : " active"}" data-category="${c}">${c}</button>`).join(""); const dt = document.querySelector('input[name="date"]'); if (dt) dt.min = new Date().toISOString().split("T")[0]; document.querySelectorAll("[data-fb]").forEach(a => a.href = SHOP.facebookUrl); document.querySelectorAll("[data-leadtime]").forEach(x => x.textContent = SHOP.leadTime); updateCartCount(); document.querySelectorAll("[data-year]").forEach(x => x.textContent = new Date().getFullYear()); const toggle = document.querySelector(".menu-toggle"), nav = document.querySelector(".nav-links"); if (toggle && nav) toggle.addEventListener("click", () => { const open = nav.classList.toggle("open"); toggle.setAttribute("aria-expanded", open); }); renderProducts("featured-products"); renderProducts("shop-products"); const search = document.getElementById("product-search"); let category = "All"; if (search) search.addEventListener("input", () => renderProducts("shop-products", category, search.value)); document.querySelectorAll(".filter").forEach(b => b.addEventListener("click", () => { document.querySelectorAll(".filter").forEach(x => x.classList.remove("active")); b.classList.add("active"); category = b.dataset.category; renderProducts("shop-products", category, search?.value || ""); })); renderCart(); renderCheckout(); setupForms(); });
document.addEventListener("DOMContentLoaded", function () {
  var box = document.querySelector(".hero-image");
  if (!box) return; // para sa ibang pages na walang hero image

  var firstImg = box.querySelector("img");
  var firstSrc = firstImg ? firstImg.getAttribute("src") : "p03.jpg";

  // Ilagay dito ang mga picture na gusto mong lumabas
  var files = [
    firstSrc,
    "p10.jpg",
"p13.jpg",
"p16.jpg",
"p34.jpg"
  ];

  box.innerHTML = "";
  var slides = files.map(function (src, i) {
    var img = document.createElement("img");
    img.src = src;
    img.alt = "J & S Handmade Flowers bouquet";
    img.className = "hero-slide" + (i === 0 ? " active" : "");
    box.appendChild(img);
    return img;
  });

    var current = 0;
  var timer = setInterval(function () {
    slides[current].classList.remove("active");
    current = current + 1;

    if (current >= slides.length) {
      current = 0; // balik sa main picture
      slides[current].classList.add("active");
      clearInterval(timer); // stop na
      return;
    }

    slides[current].classList.add("active");
  }, 1500);
});
