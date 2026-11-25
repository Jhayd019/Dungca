
(function () {
  const endpoint = () => (typeof SHOP !== "undefined" && SHOP.formspreeUrl) || "";
  const messenger = () => (typeof SHOP !== "undefined" && SHOP.messengerUrl) || "";
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const messengerLink = () => messenger()
    ? `<a class="btn btn-light btn-outline" target="_blank" rel="noopener" href="${esc(messenger())}">Chat with us on Messenger</a>`
    : "";

  async function send(data) {
    const res = await fetch(endpoint(), {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error("send failed");
  }

  async function handleContact(form) {
    const out = document.getElementById("contact-result");
    const btn = form.querySelector('button[type="submit"]');
    const label = btn.textContent;
    btn.disabled = true; btn.textContent = "Sending…";
    try {
      const d = Object.fromEntries(new FormData(form).entries());
      await send({ ...d, _subject: "New inquiry from the website" });
      out.textContent = "Thank you! Your message was sent. We will reply as soon as we can.";
      form.reset();
    } catch {
      out.innerHTML = `Sorry, your message was not sent. Please try again, or message us directly. ${messengerLink()}`;
    }
    btn.disabled = false; btn.textContent = label;
  }

  async function handleOrder(form) {
    const out = document.getElementById("order-result");
    const cart = getCart();
    if (!cart.length) { out.innerHTML = '<p class="error">Your bag is empty. Please add a bouquet first.</p>'; return; }
    const btn = form.querySelector('button[type="submit"]');
    const label = btn.textContent;
    btn.disabled = true; btn.textContent = "Sending…";
    const d = Object.fromEntries(new FormData(form).entries());
    let total = 0;
    const lines = cart.map(item => {
      const p = PRODUCTS.find(x => x.id === item.id);
      total += p.price * item.qty;
      return `${p.name} x ${item.qty} — ${money(p.price * item.qty)}`;
    });
    try {
      await send({
        name: d.name, email: d.email, phone: d.phone, preferred_date: d.date,
        address_or_pickup: d.address, payment_preference: d.payment,
        gift_message: d.message || "None",
        order: lines.join("\n"), subtotal: money(total),
        _subject: `New order from ${d.name}`
      });
      saveCart([]); renderCheckout(); form.reset();
      out.innerHTML = `<div class="confirmation"><h3>Thank you, ${esc(d.name.split(" ")[0])}!</h3>
        <p>Your order request was sent. We will contact you to confirm availability, delivery fee, and payment.</p>${messengerLink()}</div>`;
    } catch {
      out.innerHTML = `<p class="error">Sorry, your order was not sent. Please try again, or message us directly.</p>${messengerLink()}`;
    }
    btn.disabled = false; btn.textContent = label;
  }

  // Capture phase: runs before the older copy-message handlers in script.js
  document.addEventListener("submit", e => {
    if (!endpoint()) return;
    const form = e.target;
    if (form.id === "contact-form") { e.preventDefault(); e.stopPropagation(); handleContact(form); }
    else if (form.id === "order-form") { e.preventDefault(); e.stopPropagation(); handleOrder(form); }
  }, true);
})();
