const categories = {
  restoration: {
    title: "Restoration",
    icon: "M12 4.5c2.8 0 5 2.2 5 5 0 3.7-5 10-5 10s-5-6.3-5-10c0-2.8 2.2-5 5-5z",
    services: [
      { name: "Heirloom rebuild", price: 420 },
      { name: "Prong reconstruction", price: 210 },
      { name: "Clasp renewal", price: 145 },
      { name: "Locket hinge repair", price: 175 },
      { name: "Chain reinforcement", price: 160 },
      { name: "Antique polish", price: 120 },
    ],
  },
  stones: {
    title: "Stone Care",
    icon: "M12 3.5l6 6-6 11-6-11 6-6z",
    services: [
      { name: "Diamond reset", price: 310 },
      { name: "Gem replacement", price: 280 },
      { name: "Stone tightening", price: 90 },
      { name: "Halo alignment", price: 135 },
      { name: "Bespoke setting", price: 360 },
    ],
  },
  metal: {
    title: "Metalwork",
    icon: "M6 7h12l-2 10H8L6 7zm2-3h8v2H8V4z",
    services: [
      { name: "Gold re-polish", price: 140 },
      { name: "Micro-weld repair", price: 230 },
      { name: "Shank rebuild", price: 255 },
      { name: "Engraved band restore", price: 190 },
      { name: "Plate reinforcement", price: 175 },
    ],
  },
  watches: {
    title: "Watch Atelier",
    icon: "M9 2h6l1 3h3v14h-3l-1 3H9l-1-3H5V5h3l1-3zm3 6a4 4 0 100 8 4 4 0 000-8z",
    services: [
      { name: "Crystal seating", price: 160 },
      { name: "Bracelet restoration", price: 220 },
      { name: "Crown replacement", price: 240 },
      { name: "Luxury strap fit", price: 95 },
    ],
  },
  engraving: {
    title: "Engraving",
    icon: "M5 18l7-7 4 4-7 7H5v-4zm9-9l2-2 3 3-2 2-3-3z",
    services: [
      { name: "Monogram refresh", price: 110 },
      { name: "Signet detailing", price: 185 },
      { name: "Custom initials", price: 150 },
    ],
  },
  cleaning: {
    title: "Cleaning",
    icon: "M4 14l8-8 8 8-8 8-8-8zm8-4l4 4-4 4-4-4 4-4z",
    services: [
      { name: "Ultrasonic cleanse", price: 80 },
      { name: "Pearl care ritual", price: 120 },
      { name: "Platinum bright", price: 95 },
      { name: "Velvet polish", price: 110 },
    ],
  },
  resize: {
    title: "Resizing",
    icon: "M4 6h6V4H2v8h2V6zm16 0v6h2V4h-8v2h6zm0 12h-6v2h8v-8h-2v6zm-16-6H2v8h8v-2H4v-6z",
    services: [
      { name: "Ring expand", price: 150 },
      { name: "Ring reduce", price: 145 },
      { name: "Bracelet adjust", price: 125 },
    ],
  },
  heritage: {
    title: "Heritage",
    icon: "M12 3l8 4v10l-8 4-8-4V7l8-4zm0 4.2L7 9v6l5 2.8 5-2.8V9l-5-1.8z",
    services: [
      { name: "Museum conservation", price: 480 },
      { name: "Archival housing", price: 210 },
      { name: "Certificate prep", price: 160 },
    ],
  },
};

const state = {
  activeCategory: "restoration",
  selections: new Set(),
  multiplier: 1,
  shipping: false,
};

const iconScroll = document.getElementById("iconScroll");
const tooltip = document.getElementById("tooltip");
const scrollIndicator = document.getElementById("scrollIndicator");
const categoryWindow = document.getElementById("categoryWindow");
const categoryTitle = document.getElementById("categoryTitle");
const categoryIcon = document.getElementById("categoryIcon");
const serviceList = document.getElementById("serviceList");
const closeCategory = document.getElementById("closeCategory");
const searchButton = document.getElementById("searchButton");
const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const adminButton = document.getElementById("adminButton");
const adminOverlay = document.getElementById("adminOverlay");
const adminLogin = document.getElementById("adminLogin");
const adminError = document.getElementById("adminError");
const adminUser = document.getElementById("adminUser");
const adminPass = document.getElementById("adminPass");
const multiplierOverlay = document.getElementById("multiplierOverlay");
const multiplierInput = document.getElementById("multiplierInput");
const saveMultiplier = document.getElementById("saveMultiplier");
const printButton = document.getElementById("printButton");
const preInvoiceOverlay = document.getElementById("preInvoiceOverlay");
const preInvoiceBody = document.getElementById("preInvoiceBody");
const shippingToggle = document.getElementById("shippingToggle");
const shippingCost = document.getElementById("shippingCost");
const totalAmount = document.getElementById("totalAmount");
const generateInvoice = document.getElementById("generateInvoice");
const invoiceStage = document.getElementById("invoiceStage");
const invoiceMeta = document.getElementById("invoiceMeta");
const invoiceServices = document.getElementById("invoiceServices");
const invoiceSummary = document.getElementById("invoiceSummary");
const savePdf = document.getElementById("savePdf");

const goldGradient = `
  <svg id="goldDefs" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#F6EBCF" />
        <stop offset="55%" stop-color="#D9B56A" />
        <stop offset="100%" stop-color="#9E7626" />
      </linearGradient>
    </defs>
  </svg>
`;

document.body.insertAdjacentHTML("beforeend", goldGradient);

const formatPrice = (value) => `$${value.toFixed(0)}`;

const roundToFive = (value) => Math.round(value / 5) * 5;

const scaledPrice = (price) => roundToFive(price * state.multiplier);

const updateCategoryWindow = () => {
  const category = categories[state.activeCategory];
  categoryTitle.textContent = category.title;
  categoryIcon.innerHTML = `<svg viewBox="0 0 24 24"><path d="${category.icon}"/></svg>`;
  categoryWindow.style.display = "flex";
  serviceList.innerHTML = "";

  category.services.forEach((service) => {
    const id = `${state.activeCategory}-${service.name}`;
    const row = document.createElement("div");
    row.className = "service-row";
    if (state.selections.has(id)) {
      row.classList.add("selected");
    }

    row.innerHTML = `
      <div class="service-info">
        <span class="service-name">${service.name}</span>
      </div>
      <div class="service-meta">
        <span class="service-price">${formatPrice(scaledPrice(service.price))}</span>
      </div>
      <svg class="checkmark" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M4 8.5l2.5 2.5 5.5-6" />
      </svg>
    `;

    row.addEventListener("click", () => {
      if (state.selections.has(id)) {
        state.selections.delete(id);
      } else {
        state.selections.add(id);
      }
      updateCategoryWindow();
    });

    serviceList.appendChild(row);
  });
};

const updateScrollIndicator = () => {
  const maxScroll = iconScroll.scrollHeight - iconScroll.clientHeight;
  if (maxScroll <= 0) {
    scrollIndicator.classList.remove("visible");
    return;
  }
  if (iconScroll.scrollTop > 0) {
    scrollIndicator.style.top = "10px";
    scrollIndicator.style.transform = "rotate(0deg)";
    scrollIndicator.classList.add("visible");
  } else if (iconScroll.scrollTop < maxScroll) {
    scrollIndicator.style.top = "calc(100% - 14px)";
    scrollIndicator.style.transform = "rotate(180deg)";
    scrollIndicator.classList.add("visible");
  } else {
    scrollIndicator.classList.remove("visible");
  }
};

const showTooltip = (text, target) => {
  tooltip.textContent = text;
  const rect = target.getBoundingClientRect();
  tooltip.style.top = `${rect.top + rect.height / 2 - 18}px`;
  tooltip.classList.add("visible");
  clearTimeout(tooltip.timeout);
  tooltip.timeout = setTimeout(() => tooltip.classList.remove("visible"), 2000);
};

iconScroll.addEventListener("scroll", () => {
  updateScrollIndicator();
  scrollIndicator.classList.add("visible");
  clearTimeout(scrollIndicator.timeout);
  scrollIndicator.timeout = setTimeout(() => scrollIndicator.classList.remove("visible"), 1000);
});

iconScroll.querySelectorAll(".icon-button").forEach((button) => {
  button.addEventListener("click", () => {
    iconScroll.querySelectorAll(".icon-button").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    state.activeCategory = button.dataset.category;
    updateCategoryWindow();
    showTooltip(button.dataset.tooltip, button);
  });

  button.addEventListener("mouseenter", () => {
    showTooltip(button.dataset.tooltip, button);
  });
});

closeCategory.addEventListener("click", () => {
  categoryWindow.style.display = "none";
});

searchButton.addEventListener("click", () => {
  searchOverlay.classList.add("visible");
  searchInput.value = "";
  renderSearchResults("");
});

searchOverlay.addEventListener("click", (event) => {
  if (event.target === searchOverlay) {
    searchOverlay.classList.remove("visible");
  }
});

const renderSearchResults = (query) => {
  const results = [];
  Object.entries(categories).forEach(([key, category]) => {
    category.services.forEach((service) => {
      if (!query || service.name.toLowerCase().includes(query.toLowerCase())) {
        results.push({ categoryKey: key, service });
      }
    });
  });

  searchResults.innerHTML = "";

  results.forEach((result) => {
    const item = document.createElement("div");
    item.className = "search-result";
    const highlighted = query
      ? result.service.name.replace(new RegExp(query, "ig"), (match) => `<mark>${match}</mark>`)
      : result.service.name;
    item.innerHTML = `
      <span>${highlighted}</span>
      <span>${formatPrice(scaledPrice(result.service.price))}</span>
    `;
    item.addEventListener("click", () => {
      state.activeCategory = result.categoryKey;
      updateCategoryWindow();
      searchOverlay.classList.remove("visible");
    });
    searchResults.appendChild(item);
  });
};

searchInput.addEventListener("input", (event) => {
  renderSearchResults(event.target.value);
});

adminButton.addEventListener("click", () => {
  adminOverlay.classList.add("visible");
  adminError.classList.remove("visible");
  adminUser.value = "";
  adminPass.value = "";
});

adminOverlay.addEventListener("click", (event) => {
  if (event.target === adminOverlay) {
    adminOverlay.classList.remove("visible");
  }
});

adminLogin.addEventListener("click", () => {
  if (adminUser.value === "BL" && adminPass.value === "2026") {
    adminOverlay.classList.remove("visible");
    multiplierOverlay.classList.add("visible");
    adminError.classList.remove("visible");
  } else {
    adminError.classList.add("visible");
  }
});

multiplierOverlay.addEventListener("click", (event) => {
  if (event.target === multiplierOverlay) {
    multiplierOverlay.classList.remove("visible");
  }
});

saveMultiplier.addEventListener("click", () => {
  const value = parseFloat(multiplierInput.value);
  if (!Number.isNaN(value) && value >= 0.01 && value <= 99.99) {
    state.multiplier = value;
    updateCategoryWindow();
  }
  multiplierOverlay.classList.remove("visible");
});

const buildReceiptLines = () => {
  preInvoiceBody.innerHTML = "";
  let subtotal = 0;
  const selected = [];

  Object.entries(categories).forEach(([key, category]) => {
    category.services.forEach((service) => {
      const id = `${key}-${service.name}`;
      if (state.selections.has(id)) {
        const price = scaledPrice(service.price);
        subtotal += price;
        selected.push({ name: service.name, price });
        const line = document.createElement("div");
        line.className = "receipt-line";
        line.innerHTML = `<span>${service.name}</span><span>${formatPrice(price)}</span>`;
        preInvoiceBody.appendChild(line);
      }
    });
  });

  const tax = subtotal * 0.07;
  const shipping = state.shipping ? 0 : 0;
  const total = subtotal + tax + shipping;

  preInvoiceBody.insertAdjacentHTML(
    "beforeend",
    `<div class="receipt-line"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
     <div class="receipt-line"><span>Tax (7%)</span><span>${formatPrice(tax)}</span></div>`
  );

  shippingCost.textContent = `$${shipping.toFixed(0)}`;
  totalAmount.textContent = formatPrice(total);

  return { selected, subtotal, tax, shipping, total };
};

printButton.addEventListener("click", () => {
  preInvoiceOverlay.classList.add("visible");
  buildReceiptLines();
});

preInvoiceOverlay.addEventListener("click", (event) => {
  if (event.target === preInvoiceOverlay) {
    preInvoiceOverlay.classList.remove("visible");
  }
});

shippingToggle.addEventListener("change", (event) => {
  state.shipping = event.target.checked;
  buildReceiptLines();
});

generateInvoice.addEventListener("click", () => {
  const { selected, subtotal, tax, shipping, total } = buildReceiptLines();
  preInvoiceOverlay.classList.remove("visible");
  invoiceStage.classList.add("visible");
  document.querySelector(".device").classList.add("fade-out");

  const today = new Date();
  invoiceMeta.innerHTML = `<span>${today.toLocaleDateString()}</span><span>Order #78452</span>`;
  invoiceServices.innerHTML = selected
    .map((item) => `<div class="receipt-line"><span>${item.name}</span><span>${formatPrice(item.price)}</span></div>`)
    .join("");
  invoiceSummary.innerHTML = `
    <div class="receipt-line"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
    <div class="receipt-line"><span>Tax (7%)</span><span>${formatPrice(tax)}</span></div>
    ${state.shipping ? `<div class="receipt-line"><span>FedEx</span><span>${formatPrice(shipping)}</span></div>` : ""}
    <div class="receipt-line total"><span>Total</span><span>${formatPrice(total)}</span></div>
  `;
});

savePdf.addEventListener("click", () => {
  window.print();
});

updateCategoryWindow();
updateScrollIndicator();
