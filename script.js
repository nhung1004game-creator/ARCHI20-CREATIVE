const products = [
  {
    id: 1,
    name: "Khung Người Gỗ Phác Thảo",
    price: 150000,
    category: "trang-tri",
    badge: "Độc bản",
    optionLabel: "Phân loại",
    options: [
      "Loại 2 người gỗ (150K)",
      "Loại 3 người gỗ (180K)",
      "Loại 4 người gỗ (200K)",
      "Loại 6 người gỗ (250K)"
    ],
    optionPrices: {
      "Loại 2 người gỗ (150K)": 150000,
      "Loại 3 người gỗ (180K)": 180000,
      "Loại 4 người gỗ (200K)": 200000,
      "Loại 6 người gỗ (250K)": 250000
    },
    description: "Mô hình khung người gỗ khớp xoay linh hoạt dùng cho phác thảo hình họa và trang trí bàn làm việc kiến trúc (Gồm 4 phân loại: 2, 3, 4 và 6 người gỗ).",
    image: "KHUNG NGƯỜI GỖ 250K.jpg"
  },
  {
    id: 2,
    name: "Áo Polo Trường ĐH Kiến Trúc Đà Nẵng",
    price: 175000,
    category: "phu-kien",
    badge: "Kỷ niệm 20 năm",
    optionLabel: "Kích cỡ",
    options: ["S", "M", "L", "XL", "2XL", "3XL"],
    description: `Áo Polo đồng phục & kỷ niệm Trường Đại học Kiến trúc Đà Nẵng (DAU), form chuẩn lịch sự.<br>
    <img src="bang-size.jpg" alt="Bảng hướng dẫn chọn size áo" style="width: 100%; margin-top: 10px; border-radius: 6px; border: 1px solid #e5dec9; cursor: zoom-in;" onclick="window.open(this.src, '_blank')" title="Bấm vào ảnh để phóng to" onerror="this.src='bang-size.png'">`,
    image: "polo.jpg",
    fallbackImages: [
      "polo.jpg",
      "polo.png",
      "áo polo trường đại học kiến trúc đà nẵng 175k.jpg",
      "áo polo trường đại học kiến trúc đà nẵng 175K.jpg",
      "áo polo trường đại học kiến trúc đà nẵng 150k.jpg",
      "áo polo trường đại học kiến trúc đà nẵng 1.jpg",
      "ao-polo.jpg"
    ]
  },
  {
    id: 3,
    name: "Đồng Hồ Treo Tường Kỷ Niệm 20 Năm DAU",
    price: 200000,
    category: "trang-tri",
    badge: "Kỷ niệm 20 năm",
    optionLabel: "Phiên bản",
    options: ["Đỏ - Trắng DAU"],
    description: "Đồng hồ treo tường kỷ niệm 20 năm thành lập Trường Đại học Kiến trúc Đà Nẵng (2006 - 2026).",
    image: "đồng hồ kỉ niệm 20 năm .jpg"
  },
  {
    id: 4,
    name: "Keycap Logo Trường DAU",
    price: 55000,
    category: "phu-kien",
    badge: "Mới",
    optionLabel: "Mẫu",
    options: ["Logo DAU"],
    description: "Keycap bàn phím cơ khắc nổi biểu tượng Trường Đại học Kiến trúc Đà Nẵng độc đáo.",
    image: "keycap logo trường 55k.jpg"
  },
  {
    id: 5,
    name: "Cúp Lưu Niệm (Mẫu 1)",
    price: 0,
    category: "trang-tri",
    badge: "Kỷ niệm 20 năm",
    optionLabel: "Phiên bản",
    options: ["Tiêu chuẩn"],
    description: "Cúp pha lê lưu niệm kỷ niệm 20 năm thành lập Trường Đại học Kiến trúc Đà Nẵng (2006 - 2026).",
    image: "cúp lưu niệm (1).jpg"
  },
  {
    id: 6,
    name: "Cúp Lưu Niệm (Mẫu 2)",
    price: 0,
    category: "trang-tri",
    badge: "Kỷ niệm 20 năm",
    optionLabel: "Phiên bản",
    options: ["Tiêu chuẩn"],
    description: "Cúp lưu niệm thiết kế độc quyền đánh dấu hành trình 20 năm kiến tạo DAU.",
    image: "cúp lưu niệm.jpg"
  },
  {
    id: 7,
    name: "Dây Đeo Thẻ DAU",
    price: 40000,
    category: "phu-kien",
    badge: "Bán chạy",
    optionLabel: "Mẫu",
    options: ["Đỏ DAU"],
    description: "Dây đeo thẻ sinh viên và sự kiện chất liệu bền đẹp, in sắc nét.",
    image: "DÂY ĐEO THẺ - 40K.jpg"
  },
  {
    id: 8,
    name: "Ghim Cài Áo Archi",
    price: 15000,
    category: "phu-kien",
    badge: "Mới",
    optionLabel: "Mẫu",
    options: ["Tiêu chuẩn"],
    description: "Ghim cài áo, balo, túi tote mang biểu tượng đặc trưng.",
    image: "GHIM CÀI 15K.jpg"
  },
  {
    id: 9,
    name: "Móc Khóa Len KTD (Thủ Công)",
    price: 50000,
    category: "moc-khoa",
    badge: "Handmade",
    optionLabel: "Chọn mẫu",
    options: [
      "Móc khóa KTD 1 (50K)",
      "Móc khóa KTD 2 (40K)"
    ],
    optionPrices: {
      "Móc khóa KTD 1 (50K)": 50000,
      "Móc khóa KTD 2 (40K)": 40000
    },
    optionImages: {
      "Móc khóa KTD 1 (50K)": "ktd1.png",
      "Móc khóa KTD 2 (40K)": "móc khóa ktd 2.png"
    },
    fallbackImages: [
      "ktd1.png",
      "ktd1.jpg",
      "móc khóa KTD 1 .jpg",
      "móc khóa KTD 1.jpg",
      "móc khóa ktd 2.png"
    ],
    description: "Móc khóa len đan thủ công tỉ mỉ, đáng yêu với 2 mẫu lựa chọn.",
    image: "ktd1.png"
  },
  {
    id: 10,
    name: "Móc Khóa Thông Điệp",
    price: 15000,
    category: "moc-khoa",
    badge: "",
    optionLabel: "Mẫu",
    options: ["Ngẫu nhiên"],
    description: "Móc khóa khắc thông điệp ý nghĩa dành tặng bạn bè.",
    image: "Móc khóa thông điệp 15k_.jpg"
  },
  {
    id: 11,
    name: "Móc Khóa Palet Gỗ",
    price: 10000,
    category: "moc-khoa",
    badge: "",
    optionLabel: "Mẫu",
    options: ["Palet Gỗ"],
    description: "Móc khóa tạo hình bảng pha màu (palette) đậm chất nghệ thuật.",
    image: "MÓC PALET 10K .jpg"
  },
  {
    id: 13,
    name: "Nón Lá Việt Nam Mini",
    price: 15000,
    category: "phu-kien",
    badge: "",
    optionLabel: "Mẫu",
    options: ["Tiêu chuẩn"],
    description: "Phụ kiện nón lá Việt Nam trang trí thủ công truyền thống.",
    image: "NÓN VIỆT NAM - 15K .jpg"
  },
  {
    id: 14,
    name: "Tranh Hoa Nghệ Thuật",
    price: 75000,
    category: "trang-tri",
    badge: "Handmade",
    optionLabel: "Mẫu",
    options: ["Tiêu chuẩn"],
    description: "Tranh hoa trang trí góc học tập và làm việc.",
    image: "Tranh hoa -75k .jpg",
    fallbackImages: [
      "Tranh hoa -75k .jpg",
      "Tranh hoa -75k.jpg",
      "Tranh hoa -70k .jpg"
    ]
  },
 {
    id: 15,
    name: "Quạt Cầm Tay",
    price: 20000,
    category: "trang-tri",
    badge: "Kỷ niệm 20 năm",
    optionLabel: "Phiên bản",
    options: ["Đỏ - Trắng DAU"],
    description: "Quạt cầm tay kỷ niệm 20 năm thành lập Trường Đại học Kiến trúc Đà Nẵng (2006 - 2026).",
    image: "quat .png", // Thử đổi thành .png nếu ảnh của bạn là png
    fallbackImages: [
      "quat .png",
      "quat.png",
      "quat .jpg",
      "quat.jpg",
      "quat  .jpg",
      "quat   .jpg"
    ]
  },
  {
    id: 16,
    name: "Móc Khóa Len Cookuu",
    price: 65000,
    category: "moc-khoa",
    badge: "Mới",
    optionLabel: "Chọn mẫu",
    options: [
      "Áo đồng phục (65K)",
      "Đầu basic (50K)"
    ],
    optionPrices: {
      "Áo đồng phục (65K)": 65000,
      "Đầu basic (50K)": 50000
    },
    optionImages: {
      "Áo đồng phục (65K)": "móc khóa cookuu áo đồng phục 65k.jpg",
      "Đầu basic (50K)": "móc khóa cookuu đầu basic.jpg"
    },
    fallbackImages: [
      "móc khóa cookuu áo đồng phục 65k.jpg",
      "móc khóa cookuu đầu basic.jpg"
    ],
    description: "Móc khóa len đan thủ công hình mascot Cookuu cực kỳ đáng yêu, mang đậm chất sinh viên Kiến trúc.",
    image: "móc khóa cookuu áo đồng phục 65k.jpg"
  }
];

let cart = JSON.parse(localStorage.getItem("aura_concept_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("archi20_wishlist")) || [];
let orderHistory = JSON.parse(localStorage.getItem("archi20_orders")) || [];

const urlParams = new URLSearchParams(window.location.search);
let currentCategory = urlParams.get('category') || "all";
let searchKeyword = "";
let currentSort = "default";
let appliedDiscount = 0;

const productListEl = document.getElementById("product-list");
const resultsInfoEl = document.getElementById("results-info");
const cartCountEl = document.getElementById("cart-count");
const wishlistCountEl = document.getElementById("wishlist-count");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const cartModal = document.getElementById("cart-modal");
const productModal = document.getElementById("product-modal");
const productModalBody = document.getElementById("product-modal-body");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");

filterButtons.forEach(btn => {
  btn.classList.toggle("active", btn.getAttribute("data-category") === currentCategory);
});

const BANK_ID = "MB";
const ACCOUNT_NO = "0905123456";
const ACCOUNT_NAME = "PHAM HONG NHUNG";
const YOUR_EMAIL = "khoakientrucstu@gmail.com";

const bankLabel = document.getElementById("bank-label");
const accNoLabel = document.getElementById("acc-no-label");
const accNameLabel = document.getElementById("acc-name-label");
if (bankLabel) bankLabel.textContent = BANK_ID + " Bank";
if (accNoLabel) accNoLabel.textContent = ACCOUNT_NO;
if (accNameLabel) accNameLabel.textContent = ACCOUNT_NAME;

function formatCurrency(amount) {
  if (!amount || amount === 0) return "Đang cập nhật giá";
  return amount.toLocaleString("vi-VN") + " ₫";
}

function getProductOptionPrice(product, selectedOption) {
  if (product.optionPrices && product.optionPrices[selectedOption] !== undefined) {
    return product.optionPrices[selectedOption];
  }
  return product.price || 0;
}

function getProductOptionImage(product, selectedOption) {
  if (product.optionImages && product.optionImages[selectedOption]) {
    return product.optionImages[selectedOption];
  }
  return product.image;
}

function updateProductVariant(productId, selectEl, priceElementId, imgElementId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const selectedOpt = selectEl.value;

  const newPrice = getProductOptionPrice(product, selectedOpt);
  const priceEl = document.getElementById(priceElementId);
  if (priceEl) {
    priceEl.textContent = formatCurrency(newPrice);
  }

  const newImgSrc = getProductOptionImage(product, selectedOpt);
  const imgEl = document.getElementById(imgElementId);
  if (imgEl && newImgSrc) {
    imgEl.dataset.retry = "0";
    imgEl.dataset.originalSrc = newImgSrc;
    imgEl.src = newImgSrc;
  }
}

// HÀM DÒ ẢNH ĐÃ SỬA TRIỆT ĐỂ LỖI NHẢY CÓC INDEX
function handleImageError(imgEl, productId) {
  const product = products.find(p => p.id === productId);
  const baseName = imgEl.dataset.originalSrc || (product ? product.image : "");
  const customFallbacks = (product && product.fallbackImages) ? product.fallbackImages : [];

  const rawAttempts = [
    ...customFallbacks,
    baseName,
    baseName.replace(/\s+\./g, "."),
    baseName.replace(/\.(jpg|png|jpeg)$/i, " .$1"),
    baseName.replace(/\.(jpg|png|jpeg)$/i, "  .$1"),
    baseName.replace(/\.jpg$/i, ".png"),
    baseName.replace(/\.png$/i, ".jpg"),
    baseName.replace(/\s+\./g, ".").replace(/\.jpg$/i, ".png"),
    baseName.replace(/\s+\./g, ".").replace(/\.png$/i, ".jpg")
  ].filter(Boolean);

  const attempts = [...new Set(rawAttempts)];
  let step = parseInt(imgEl.dataset.retry || "0", 10);

  if (step < attempts.length) {
    imgEl.dataset.retry = step + 1;
    imgEl.src = attempts[step];
  }
}

function showToast(message, isError = false) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  if (isError) toast.style.backgroundColor = "#d93025";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
}

function saveCartToStorage() {
  localStorage.setItem("aura_concept_cart", JSON.stringify(cart));
}

function removeVietnameseTones(str) {
  return (str || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();
}

function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();
  const idx = wishlist.indexOf(productId);
  const product = products.find(p => p.id === productId);

  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast(`Đã bỏ "${product.name}" khỏi mục Yêu thích`);
  } else {
    wishlist.push(productId);
    showToast(`♥ Đã lưu "${product.name}" vào Yêu thích!`);
  }
  localStorage.setItem("archi20_wishlist", JSON.stringify(wishlist));
  if (wishlistCountEl) wishlistCountEl.textContent = wishlist.length;
  renderProducts();
}

function renderProducts() {
  if (wishlistCountEl) wishlistCountEl.textContent = wishlist.length;
  const normalizedKeyword = removeVietnameseTones(searchKeyword.trim());

  let filtered = products.filter(product => {
    const matchCategory =
      currentCategory === "all" ||
      (currentCategory === "wishlist" ? wishlist.includes(product.id) : product.category === currentCategory);
    const matchName = removeVietnameseTones(product.name).includes(normalizedKeyword);
    return matchCategory && matchName;
  });

  if (currentSort === "price-asc") filtered.sort((a, b) => (a.price || 9999999) - (b.price || 9999999));
  else if (currentSort === "price-desc") filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
  else if (currentSort === "name-asc") filtered.sort((a, b) => a.name.localeCompare(b.name, "vi"));

  if (resultsInfoEl) resultsInfoEl.textContent = `Đang hiển thị ${filtered.length} ấn phẩm`;

  if (filtered.length === 0) {
    productListEl.innerHTML = `<p class="no-result">Không tìm thấy ấn phẩm nào phù hợp.</p>`;
    return;
  }

  productListEl.innerHTML = filtered.map(product => {
    const optionsList = product.options && product.options.length > 0 ? product.options : ["Tiêu chuẩn"];
    const optionLabel = product.optionLabel || "Phân loại";
    const badgeHtml = product.badge ? `<span class="product-badge">${product.badge}</span>` : "";
    const initialOption = optionsList[0];
    const initialPrice = getProductOptionPrice(product, initialOption);
    const initialImage = getProductOptionImage(product, initialOption);
    const isLiked = wishlist.includes(product.id);

    return `
      <div class="product-card">
        ${badgeHtml}
        <button class="wishlist-btn ${isLiked ? 'active' : ''}" onclick="toggleWishlist(${product.id}, event)" title="Yêu thích">
          ${isLiked ? '♥' : '♡'}
        </button>
        <div class="product-img-wrapper" onclick="openProductModal(${product.id})">
          <img src="${initialImage}" alt="${product.name}" class="product-img" id="img-card-${product.id}" loading="lazy" data-original-src="${initialImage}" onerror="handleImageError(this, ${product.id})">
        </div>
        <div class="product-info">
          <div>
            <h3 class="product-name" onclick="openProductModal(${product.id})">${product.name}</h3>
            <p class="product-price" id="price-card-${product.id}">${formatCurrency(initialPrice)}</p>
          </div>
          <div>
            <div class="option-row">
              <label for="opt-${product.id}">${optionLabel}:</label>
              <select id="opt-${product.id}" class="option-select" onchange="updateProductVariant(${product.id}, this, 'price-card-${product.id}', 'img-card-${product.id}')">
                ${optionsList.map(opt => `<option value="${opt}">${opt}</option>`).join("")}
              </select>
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id}, 'opt-${product.id}')">
              + Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const optionsList = product.options && product.options.length > 0 ? product.options : ["Tiêu chuẩn"];
  const optionLabel = product.optionLabel || "Phân loại";
  const badgeHtml = product.badge ? `<span class="modal-badge">${product.badge}</span>` : "";
  const descText = product.description || "Ấn phẩm thuộc bộ sưu tập kỷ niệm 20 năm ARCHI20 CREATIVE - Đại học Kiến trúc Đà Nẵng.";
  
  const cardSelect = document.getElementById(`opt-${product.id}`);
  const currentSelectedOpt = cardSelect ? cardSelect.value : optionsList[0];

  const initialPrice = getProductOptionPrice(product, currentSelectedOpt);
  const initialImage = getProductOptionImage(product, currentSelectedOpt);

  productModalBody.innerHTML = `
    <img src="${initialImage}" alt="${product.name}" class="modal-img" id="img-modal-${product.id}" loading="lazy" data-original-src="${initialImage}" onerror="handleImageError(this, ${product.id})">
    <div class="modal-details">
      ${badgeHtml}
      <h2 class="modal-title">${product.name}</h2>
      <p class="modal-price" id="price-modal-${product.id}">${formatCurrency(initialPrice)}</p>
      <div class="modal-desc" style="font-size: 0.92rem; line-height: 1.6; color: #555; margin-bottom: 20px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; padding: 14px 0;">
        ${descText}
      </div>
      
      <div class="modal-option-row" style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
        <label for="modal-opt-${product.id}"><strong>${optionLabel}:</strong></label>
        <select id="modal-opt-${product.id}" class="option-select" onchange="updateProductVariant(${product.id}, this, 'price-modal-${product.id}', 'img-modal-${product.id}')" style="padding: 5px 10px; border: 1px solid #ccc; border-radius: 4px; background: #fff; cursor: pointer;">
          ${optionsList.map(opt => `<option value="${opt}" ${opt === currentSelectedOpt ? 'selected' : ''}>${opt}</option>`).join("")}
        </select>
      </div>

      <button class="checkout-btn" onclick="addToCart(${product.id}, 'modal-opt-${product.id}', true)">
        Thêm Vào Giỏ Hàng
      </button>
    </div>
  `;
  productModal.classList.add("active");
}

document.getElementById("close-product-modal")?.addEventListener("click", () => productModal.classList.remove("active"));
productModal?.addEventListener("click", (e) => {
  if (e.target === productModal) productModal.classList.remove("active");
});

function addToCart(productId, selectElementId, closeModalAfter = false) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const selectEl = document.getElementById(selectElementId);
  const selectedOption = selectEl ? selectEl.value : (product.options[0] || "Tiêu chuẩn");
  const finalOptionPrice = getProductOptionPrice(product, selectedOption);
  
  if (finalOptionPrice === 0) {
    showToast(`⛔ "${product.name}" đang cập nhật giá, chưa thể đặt hàng!`, true);
    return;
  }

  const existingItem = cart.find(item => item.id === productId && item.option === selectedOption);

  if (existingItem && existingItem.quantity >= 20) {
    showToast(`⛔ Bạn chỉ được mua tối đa 20 sản phẩm loại này!`, true);
    return;
  }

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: finalOptionPrice,
      option: selectedOption,
      image: getProductOptionImage(product, selectedOption),
      quantity: 1
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`✓ Đã thêm "${product.name} - ${selectedOption}" vào giỏ!`);

  if (closeModalAfter) {
    productModal.classList.remove("active");
    cartModal.classList.add("active");
  }
}

function changeQuantity(index, delta) {
  const newQty = cart[index].quantity + delta;
  if (newQty > 20) {
    showToast(`⛔ Số lượng tối đa cho phép là 20!`, true);
    return;
  }
  cart[index].quantity = newQty;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  saveCartToStorage();
  updateCartUI();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCartToStorage();
  updateCartUI();
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);

  if (cartCountEl) cartCountEl.textContent = totalCount;
  if (cartTotalEl) cartTotalEl.textContent = totalPrice > 0 ? totalPrice.toLocaleString("vi-VN") + " ₫" : "0 ₫";
  if (!cartItemsEl) return;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="empty-msg">Chưa có sản phẩm nào trong giỏ.</p>';
    return;
  }

  cartItemsEl.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div>
        <h4>${item.name}</h4>
        <div class="cart-item-meta">${item.option} | ${formatCurrency(item.price)}</div>
      </div>
      <div class="cart-item-actions">
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
          <span class="qty-number">${item.quantity}</span>
          <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${index})">Xóa</button>
      </div>
    </div>
  `).join("");
}

let searchTimeout;
searchInput?.addEventListener("input", (e) => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    searchKeyword = e.target.value;
    renderProducts();
  }, 150);
});

sortSelect?.addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderProducts();
});

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.getAttribute("data-category");
    
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('category', currentCategory);
    window.history.pushState({}, '', newUrl);

    renderProducts();
  });
});

document.getElementById("filter-wishlist-btn")?.addEventListener("click", () => {
  filterButtons.forEach(b => b.classList.remove("active"));
  const wishTab = document.querySelector('.filter-btn[data-category="wishlist"]');
  if (wishTab) wishTab.classList.add("active");
  currentCategory = "wishlist";
  renderProducts();
  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
});

const checkoutModal = document.getElementById("checkout-modal");
const deliveryMethodSelect = document.getElementById("delivery-method");
const paymentRadios = document.querySelectorAll('input[name="payment-method"]');
const qrPaymentBox = document.getElementById("qr-payment-box");

document.getElementById("open-cart-btn")?.addEventListener("click", () => cartModal.classList.add("active"));
document.getElementById("close-cart-btn")?.addEventListener("click", () => cartModal.classList.remove("active"));

const savedCustomer = JSON.parse(localStorage.getItem("archi20_customer")) || {};
if (savedCustomer.name && document.getElementById("cust-name")) document.getElementById("cust-name").value = savedCustomer.name;
if (savedCustomer.phone && document.getElementById("cust-phone")) document.getElementById("cust-phone").value = savedCustomer.phone;
if (savedCustomer.email && document.getElementById("cust-email")) document.getElementById("cust-email").value = savedCustomer.email;
if (savedCustomer.address && document.getElementById("cust-address")) document.getElementById("cust-address").value = savedCustomer.address;

document.getElementById("open-checkout-btn")?.addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Giỏ hàng đang trống! Hãy chọn sản phẩm trước.", true);
    return;
  }
  cartModal.classList.remove("active");
  renderCheckoutSummary();
  checkoutModal.classList.add("active");
});

document.getElementById("close-checkout-btn")?.addEventListener("click", () => checkoutModal.classList.remove("active"));
document.getElementById("back-to-cart-btn")?.addEventListener("click", () => {
  checkoutModal.classList.remove("active");
  cartModal.classList.add("active");
});

function renderCheckoutSummary() {
  const summaryListEl = document.getElementById("checkout-summary-list");
  if (!summaryListEl) return;

  const subtotal = cart.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  const deliveryVal = deliveryMethodSelect ? deliveryMethodSelect.value : "";
  let shippingFee = 0;
  if (deliveryVal.includes("Đà Nẵng")) shippingFee = 15000;
  else if (deliveryVal.includes("toàn quốc")) shippingFee = 30000;

  const finalTotal = Math.max(0, subtotal - appliedDiscount + shippingFee);

  summaryListEl.innerHTML = cart.map(item => {
    const imgSrc = item.image;
    return `
      <div class="summary-item">
        <div class="summary-item-left">
          <img src="${imgSrc}" alt="${item.name}" class="summary-item-img" loading="lazy" data-original-src="${imgSrc}" onerror="handleImageError(this, ${item.id})">
          <div>
            <strong>${item.name}</strong>
            <div style="font-size: 0.78rem; color: #666;">${item.option} &times; ${item.quantity}</div>
          </div>
        </div>
        <span>${formatCurrency((item.price || 0) * item.quantity)}</span>
      </div>
    `;
  }).join("");

  document.getElementById("summary-subtotal").textContent = subtotal.toLocaleString("vi-VN") + " ₫";
  const discountEl = document.getElementById("summary-discount");
  if (discountEl) discountEl.textContent = "- " + appliedDiscount.toLocaleString("vi-VN") + " ₫";
  document.getElementById("summary-shipping").textContent = shippingFee === 0 ? "Miễn phí" : shippingFee.toLocaleString("vi-VN") + " ₫";
  document.getElementById("summary-total").textContent = finalTotal > 0 ? finalTotal.toLocaleString("vi-VN") + " ₫" : "Đang cập nhật giá";

  const randomOrderCode = "ARCHI" + Math.floor(1000 + Math.random() * 9000);
  document.getElementById("qr-amount").textContent = finalTotal.toLocaleString("vi-VN") + " ₫";
  document.getElementById("qr-memo").textContent = randomOrderCode;
  document.getElementById("vietqr-img").src = `https://img.vietqr.io/image/${BANK_ID}-${ACCOUNT_NO}-compact2.png?amount=${finalTotal}&addInfo=${encodeURIComponent(randomOrderCode)}&accountName=${encodeURIComponent(ACCOUNT_NAME)}`;
}

deliveryMethodSelect?.addEventListener("change", renderCheckoutSummary);

paymentRadios.forEach(radio => {
  radio.addEventListener("change", (e) => {
    document.querySelectorAll(".payment-option").forEach(el => el.classList.remove("active"));
    e.target.closest(".payment-option").classList.add("active");
    if (e.target.value.includes("QR")) qrPaymentBox.classList.add("active");
    else qrPaymentBox.classList.remove("active");
  });
});

const orderModal = document.getElementById("order-modal");
const orderModalBody = document.getElementById("order-modal-body");

function openOrderHistoryModal() {
  if (orderHistory.length === 0) {
    orderModalBody.innerHTML = `<p style="text-align:center; color:#666; padding: 20px 0;">Bạn chưa có đơn hàng nào được lưu trên thiết bị này.</p>`;
  } else {
    orderModalBody.innerHTML = orderHistory.map(ord => `
      <div class="order-card">
        <div class="order-card-header">
          <span>Mã đơn: #${ord.code}</span>
          <span>${ord.date}</span>
        </div>
        <p><strong>Người nhận:</strong> ${ord.name} (${ord.phone})</p>
        <p><strong>Nhận hàng:</strong> ${ord.delivery} — ${ord.address}</p>
        <p><strong>Thanh toán:</strong> ${ord.payment}</p>
        <p style="margin-top:6px;"><strong>Sản phẩm:</strong><br>${ord.items.replace(/\n/g, "<br>")}</p>
        <p style="margin-top:8px; font-size:1rem; color:#b32d1e;"><strong>Tổng cộng: ${ord.total}</strong></p>
      </div>
    `).join("");
  }
  orderModal.classList.add("active");
}

document.getElementById("open-orders-btn")?.addEventListener("click", openOrderHistoryModal);
document.getElementById("close-order-modal")?.addEventListener("click", () => orderModal.classList.remove("active"));

document.getElementById("checkout-btn")?.addEventListener("click", async () => {
  if (cart.length === 0) return;

  const name = document.getElementById("cust-name").value.trim();
  let phone = document.getElementById("cust-phone").value.trim();
  const address = document.getElementById("cust-address").value.trim();
  const email = document.getElementById("cust-email")?.value.trim() || "";
  const note = document.getElementById("cust-note")?.value.trim() || "";
  const deliveryMethod = deliveryMethodSelect.value;
  const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

  let cleanPhone = phone.replace(/[\s\.\-\+]/g, '');

  if (!name || !cleanPhone || !address) {
    showToast("Vui lòng điền đủ Họ tên, SĐT và Địa chỉ/Lớp!", true);
    document.getElementById("cust-name").focus();
    return;
  }

  if (!/^0[0-9]{9}$/.test(cleanPhone)) {
    showToast("Số điện thoại không hợp lệ (Bắt buộc 10 số, bắt đầu bằng số 0)!", true);
    document.getElementById("cust-phone").focus();
    return;
  }

  phone = cleanPhone;
  localStorage.setItem("archi20_customer", JSON.stringify({ name, phone, email, address }));

  const checkoutBtn = document.getElementById("checkout-btn");
  checkoutBtn.textContent = "ĐANG GỬI ĐƠN HÀNG...";
  checkoutBtn.disabled = true;

  const orderCode = document.getElementById("qr-memo")?.textContent || ("ARCHI" + Math.floor(1000 + Math.random() * 9000));
  const orderItemsText = cart.map(item => `- ${item.name} (${item.option}) x ${item.quantity}: ${formatCurrency(item.price * item.quantity)}`).join("\n");
  const finalTotalText = document.getElementById("summary-total").textContent;

  const newOrder = {
    code: orderCode,
    date: new Date().toLocaleString("vi-VN"),
    name,
    phone,
    delivery: deliveryMethod,
    address,
    payment: paymentMethod,
    items: orderItemsText,
    total: finalTotalText
  };

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        _subject: `[ARCHI20] Đơn hàng #${orderCode} từ ${name}`,
        "Mã đơn hàng": orderCode,
        "Khách hàng": name,
        "Số điện thoại": phone,
        "Email": email || "Không có",
        "Hình thức nhận": deliveryMethod,
        "Địa chỉ / Lớp": address,
        "Thanh toán": paymentMethod,
        "Ghi chú": note || "Không có",
        "Sản phẩm": orderItemsText,
        "Tổng thanh toán": finalTotalText
      })
    });

    if (!response.ok) throw new Error("Mạng lỗi");

    orderHistory.unshift(newOrder);
    localStorage.setItem("archi20_orders", JSON.stringify(orderHistory));
    cart = [];
    appliedDiscount = 0;
    saveCartToStorage();
    updateCartUI();
    checkoutModal.classList.remove("active");
    showToast(`🎉 Đặt hàng thành công! Mã đơn: #${orderCode}`);
    openOrderHistoryModal();

  } catch (error) {
    showToast("Đường truyền không ổn định. Vui lòng kiểm tra WiFi/4G và thử lại!", true);
  } finally {
    checkoutBtn.textContent = "HOÀN TẤT ĐẶT HÀNG";
    checkoutBtn.disabled = false;
  }
});

const backToTopBtn = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (backToTopBtn) {
    backToTopBtn.style.display = window.scrollY > 350 ? "block" : "none";
  }
});
backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderProducts();
updateCartUI();