const SHOP = {
  facebookUrl: "https://www.facebook.com/profile.php?id=61552352486715",
  messengerUrl: "https://www.facebook.com/profile.php?id=61552352486715",
  formspreeUrl: "https://formspree.io/f/xdegylyq",   // <- ilagay ang link mo dito
  leadTime: "Please order at least 2 days ahead."
};

const CATEGORIES = ["Roses", "Tulips", "Sunflowers", "Money Bouquets", "Gifts & Specials"];

const PRODUCTS = [
{ id: "p01", name: "Rose & Butterfly Bouquet", price: 949, category: "Roses", image: "images/p01.jpg", description: "Handmade satin roses in purple with gold butterflies and a birthday card." },
  { id: "p02", name: "Blush Pink Rose Bouquet", price: 899, category: "Roses", image: "images/p02.jpg", description: "Pearl-centered pink satin roses in soft pink wrapping." },
  { id: "p03", name: "Red Rose Black Bouquet", price: 899, category: "Roses", image: "images/p03.jpg", description: "Bold red satin roses in elegant black wrapping." },
  { id: "p04", name: "Pink Trio Rose Bouquet", price: 299, category: "Roses", image: "images/p04.jpg", description: "Three pink and white satin roses with baby's breath." },
  { id: "p05", name: "Sky Blue Rose Bouquet", price: 499, category: "Roses", image: "images/p05.jpg", description: "Five blue satin roses in sky blue and white wrapping." },
  { id: "p06", name: "Royal Purple Rose Bouquet", price: 599, category: "Roses", image: "images/p06.jpg", description: "Deep purple satin roses with a white ribbon." },
  { id: "p07", name: "Single Red Rose Bouquet", price: 149, category: "Roses", image: "images/p07.jpg", description: "A single red satin rose with lace-net wrap and cream ribbon." },
  { id: "p08", name: "Purple Rose Bouquet", price: 289, category: "Roses", image: "images/p08.jpg", description: "Three purple satin roses with a Happy Birthday card." },
  { id: "p09", name: "Red Single Rose Bouquet", price: 89, category: "Roses", image: "images/p09.jpg", description: "One red satin rose with a bold red ribbon." },
  { id: "p10", name: "Single Pink Tulip Bouquet", price: 99, category: "Tulips", image: "images/p10.jpg", description: "A single pink tulip in pink and white wrapping." },
  { id: "p11", name: "Single Blue Tulip Bouquet", price: 99, category: "Tulips", image: "images/p11.jpg", description: "A single blue tulip with a soft lavender ribbon." },
  { id: "p13", name: "Sunflower Trio Bouquet", price: 499, category: "Sunflowers", image: "images/p13.jpg", description: "Three handmade satin sunflowers with a yellow ribbon." },
  { id: "p14", name: "Pink Butterfly Bouquet", price: 199, category: "Gifts & Specials", image: "images/p14.jpg", description: "Pink wrapping with shimmering butterflies and tulle." },
  { id: "p15", name: "KitKat Chocolate Bouquet", price: 199, category: "Gifts & Specials", image: "images/p15.jpg", description: "KitKat bars and a red satin rose in white wrapping." },
  { id: "p16", name: "Money & Sunflower Bouquet", price: 1000, category: "Money Bouquets", image: "images/p16.jpg", description: "Large money bouquet with a satin sunflower centerpiece." },
  { id: "p17", name: "Red Money Bouquet", price: 580, category: "Money Bouquets", image: "images/p17.jpg", description: "Money bouquet in black and red wrapping with a red rose." },
  { id: "p18", name: "Lilac Money Bouquet", price: 1000, category: "Money Bouquets", image: "images/p18.jpg", description: "Large money bouquet in lilac wrapping with a rose center." },
  { id: "p19", name: "Money Bouquet (Mixed Bills)", price: 400, category: "Money Bouquets", image: "images/p19.jpg", description: "Mixed-bill money bouquet in lilac wrapping." },
  { id: "p20", name: "Money Bouquet (Full Bills)", price: 900, category: "Money Bouquets", image: "images/p20.jpg", description: "Full money bouquet with a lilac and violet ribbon." },
  { id: "p21", name: "Sky Blue Butterfly Bouquet", price: 99, category: "Gifts & Specials", image: "images/p21.jpg", description: "Blue butterflies and iridescent wrap with a satin ribbon." },
  { id: "p22", name: "Pink Rose Trio with Mesh", price: 289, category: "Roses", image: "images/p22.jpg", description: "Three pink satin roses in peach and pink wrap with a 'Just for you' ribbon." },
  { id: "p23", name: "Pink Roses with Ribbon Bows", price: 1099, category: "Roses", image: "images/p23.jpg", description: "Large pink satin rose bouquet in cream wrap with pink bows." },
  { id: "p24", name: "Aqua Money Bouquet", price: 400, category: "Money Bouquets", image: "images/p24.jpg", description: "Large money bouquet in aqua wrapping with a satin bow." },
  { id: "p25", name: "Lilac Money Bouquet", price: 600, category: "Money Bouquets", image: "images/p25.jpg", description: "Mixed-bill money bouquet in lilac wrapping with a ribbon skirt." },
  { id: "p26", name: "Sunflower Money Bouquet", price: 500, category: "Money Bouquets", image: "images/p26.jpg", description: "Money bouquet in cream and yellow with a satin sunflower." },
  { id: "p27", name: "Red & White Rose Bouquet", price: 289, category: "Roses", image: "images/p27.jpg", description: "Red and white satin roses in red and black wrapping with lace net." },
  { id: "p28", name: "Giant Pink Rose Bouquet", price: 1800, category: "Roses", image: "images/p28.jpg", description: "Extra-large bouquet filled with pink satin roses." },
  { id: "p29", name: "Green Rose Bouquet", price: 149, category: "Roses", image: "images/p29.jpg", description: "Green satin rose in sage wrapping with a Valentine's card." },
  { id: "p30", name: "Brown Rose Bouquet", price: 149, category: "Roses", image: "images/p30.jpg", description: "Brown satin rose in kraft wrapping with a Valentine's card." },
  { id: "p31", name: "Pink Butterfly Bouquet", price: 499, category: "Gifts & Specials", image: "images/p34.jpg", description: "Pink butterflies with iridescent wrap and sparkle tulle." },
  { id: "p32", name: "Red Tulip Trio Bouquet", price: 299, category: "Tulips", image: "images/p32.jpg", description: "Three red tulips in red and burgundy wrap with a white bow." },
  { id: "p33", name: "Pink Tulip Trio Bouquet", price: 299, category: "Tulips", image: "images/p33.jpg", description: "Three pink tulips in blush wrap with sparkle tulle and a lilac bow." }
];
/* ---- Click image to enlarge ---- */
function openLightbox(p) {
  let box = document.getElementById("lightbox");
  if (!box) {
    box = document.createElement("div");
    box.id = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    document.body.appendChild(box);
  }
  box.innerHTML = `<div class="lightbox-inner">
    <button class="lightbox-close" data-close aria-label="Close">✕</button>
    <img src="${p.image}" alt="${p.name}">
    <div class="lightbox-info">
      <div><h3>${p.name}</h3><p>${p.description}</p></div>
      <div class="lightbox-buy"><strong>${money(p.price)}</strong>
      <button class="btn btn-dark" id="lightbox-add">Add to bag</button></div>
    </div></div>`;
  box.classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("lightbox-add").onclick = e => {
    addToCart(p.id);
    e.target.textContent = "Added ✓";
  };
}
function closeLightbox() {
  const box = document.getElementById("lightbox");
  if (box) box.classList.remove("open");
  document.body.style.overflow = "";
}
document.addEventListener("click", e => {
  const photo = e.target.closest(".product-photo");
  if (photo) {
    e.preventDefault();
    const id = photo.closest(".product-card").querySelector("[data-add]").dataset.add;
    const p = PRODUCTS.find(x => x.id === id);
    if (p) openLightbox(p);
    return;
  }
  if (e.target.id === "lightbox" || e.target.closest("[data-close]")) closeLightbox();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });