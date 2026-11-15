const products = [
  {
    id: 1,
    name: "Cúp Lưu Niệm (Mẫu 1)",
    price: 0, // Điền giá sau
    category: "trang-tri",
    badge: "Kỷ niệm 20 năm",
    optionLabel: "Phiên bản",
    options: ["Tiêu chuẩn"],
    description: "Cúp pha lê lưu niệm kỷ niệm 20 năm thành lập Trường Đại học Kiến trúc Đà Nẵng (2006 - 2026).",
    image: "cúp lưu niệm (1).jpg"
  },
  {
    id: 2,
    name: "Cúp Lưu Niệm (Mẫu 2)",
    price: 0, // Điền giá sau
    category: "trang-tri",
    badge: "Kỷ niệm 20 năm",
    optionLabel: "Phiên bản",
    options: ["Tiêu chuẩn"],
    description: "Cúp lưu niệm thiết kế độc quyền đánh dấu hành trình 20 năm kiến tạo DAU.",
    image: "cúp lưu niệm(2).jpg"
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
    name: "Khung Người Gỗ Phác Thảo",
    price: 250000,
    category: "trang-tri",
    badge: "Độc bản",
    optionLabel: "Kích thước",
    options: ["Tiêu chuẩn"],
    description: "Mô hình người gỗ khớp xoay linh hoạt dùng cho phác thảo hình họa và trang trí bàn làm việc kiến trúc.",
    image: "KHUNG NGƯỜI GỖ 250K.jpg"
  },
  {
    id: 6,
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
    id: 7,
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
    id: 8,
    name: "Mũ Kỷ Niệm 20 Năm",
    price: 0, // Điền giá sau
    category: "phu-kien",
    badge: "Kỷ niệm 20 năm",
    optionLabel: "Kích cỡ",
    options: ["Freesize"],
    description: "Mũ lưỡi trai kỷ niệm 20 năm DAU, form chuẩn năng động.",
    image: "mũ kỉ niệm 20namw.jpg"
  },
  {
    id: 9,
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
    id: 10,
    name: "Tranh Hoa Nghệ Thuật",
    price: 70000,
    category: "trang-tri",
    badge: "Handmade",
    optionLabel: "Mẫu",
    options: ["Tiêu chuẩn"],
    description: "Tranh hoa trang trí góc học tập và làm việc.",
    image: "Tranh hoa -70k .jpg"
  }
];

let cart = JSON.parse(localStorage.getItem("aura_concept_cart")) || [];
let currentCategory = "all";
let searchKeyword = "";

const productListEl = document.getElementById("product-list");
const cartCountEl = document.getElementById("cart-count");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const cartModal = document.getElementById("cart-modal");
const productModal = document.getElementById("product-modal");
const productModalBody = document.getElementById("product-modal-body");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("search-input");

function formatCurrency(amount) {
  if (!amount || amount === 0) return "Đang cập nhật giá";
  return amount.toLocaleString("vi-VN") + " ₫";
}

function saveCartToStorage() {
  localStorage.setItem("aura_concept_cart", JSON.stringify(cart));
}

function removeVietnameseTones(str) {
  return (str || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

// Tự động dò và sửa lỗi đường dẫn ảnh nếu lệch dấu cách hoặc đuôi file
function handleImageError(imgEl, originalName) {
  const attempts = [
    originalName,
    originalName.replace(/\s+\./g, '.'),
    originalName.replace(/\(/g, ' (').replace(/\s+/g, ' '),
    originalName.replace(/\s*\(/g, '('),
    "cúp lưu niệm.jpg",
    originalName.replace('.jpg', '.png'),
    originalName.replace('.png', '.jpg')
  ];

  let step = parseInt(imgEl.dataset.retry || "0", 10) + 1;
  if (step < attempts.length) {
    imgEl.dataset.retry = step;
    imgEl.src = attempts[step];
  }
}

// 1. Hiển thị danh sách sản phẩm
function renderProducts() {
  const normalizedKeyword = removeVietnameseTones(searchKeyword.trim());

  const filtered = products.filter(product => {
    const matchCategory = currentCategory === "all" || product.category === currentCategory;
    const matchName = removeVietnameseTones(product.name).includes(normalizedKeyword);
    return matchCategory && matchName;
  });

  if (filtered.length === 0) {
    productListEl.innerHTML = `
      <p class="no-result">Không tìm thấy sản phẩm nào phù hợp với từ khóa "${searchKeyword}".</p>
    `;
    return;
  }

  productListEl.innerHTML = filtered.map(product => {
    const optionsList = product.options && product.options.length > 0 ? product.options : ["Tiêu chuẩn"];
    const optionLabel = product.optionLabel || "Phân loại";
    const badgeHtml = product.badge ? `<span class="product-badge">${product.badge}</span>` : "";
    const safeImgName = product.image.replace(/'/g, "\\'");

    return `
      <div class="product-card">
        ${badgeHtml}
        <div class="product-img-wrapper" onclick="openProductModal(${product.id})">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="product-img"
            onerror="handleImageError(this, '${safeImgName}')"
          >
        </div>
        <div class="product-info">
          <div>
            <h3 class="product-name" onclick="openProductModal(${product.id})">${product.name}</h3>
            <p class="product-price">${formatCurrency(product.price)}</p>
          </div>
          <div>
            <div class="option-row">
              <label for="opt-${product.id}">${optionLabel}:</label>
              <select id="opt-${product.id}" class="option-select">
                ${optionsList.map(opt => `<option value="${opt}">${opt}</option>`).join("")}
              </select>
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id}, 'opt-${product.id}')">
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// 2. Mở cửa sổ xem chi tiết sản phẩm
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const optionsList = product.options && product.options.length > 0 ? product.options : ["Tiêu chuẩn"];
  const optionLabel = product.optionLabel || "Phân loại";
  const badgeHtml = product.badge ? `<span class="modal-badge">${product.badge}</span>` : "";
  const descText = product.description || "Ấn phẩm thuộc bộ sưu tập kỷ niệm 20 năm ARCHI20 CREATIVE - Đại học Kiến trúc Đà Nẵng.";
  const safeImgName = product.image.replace(/'/g, "\\'");

  productModalBody.innerHTML = `
    <img 
      src="${product.image}" 
      alt="${product.name}" 
      class="modal-img"
      onerror="handleImageError(this, '${safeImgName}')"
    >
    <div class="modal-details">
      ${badgeHtml}
      <h2 class="modal-title">${product.name}</h2>
      <p class="modal-price">${formatCurrency(product.price)}</p>
      <p class="modal-desc">${descText}</p>
      
      <div class="modal-option-row">
        <label for="modal-opt-${product.id}"><strong>${optionLabel}:</strong></label>
        <select id="modal-opt-${product.id}" class="option-select">
          ${optionsList.map(opt => `<option value="${opt}">${opt}</option>`).join("")}
        </select>
      </div>

      <button class="checkout-btn" onclick="addToCart(${product.id}, 'modal-opt-${product.id}', true)">
        Thêm Vào Giỏ Hàng
      </button>
    </div>
  `;

  productModal.classList.add("active");
}

const closeProductModalBtn = document.getElementById("close-product-modal");
if (closeProductModalBtn) {
  closeProductModalBtn.addEventListener("click", () => {
    productModal.classList.remove("active");
  });
}

if (productModal) {
  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) {
      productModal.classList.remove("active");
    }
  });
}

// 3. Thêm sản phẩm vào giỏ
function addToCart(productId, selectElementId, closeModalAfter = false) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const optionsList = product.options && product.options.length > 0 ? product.options : ["Tiêu chuẩn"];
  const selectEl = document.getElementById(selectElementId);
  const selectedOption = selectEl ? selectEl.value : optionsList[0];

  const existingItem = cart.find(
    item => item.id === productId && item.option === selectedOption
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price || 0,
      option: selectedOption,
      quantity: 1
    });
  }

  saveCartToStorage();
  updateCartUI();

  if (closeModalAfter) {
    productModal.classList.remove("active");
    cartModal.classList.add("active");
  }
}

// 4. Tăng / Giảm số lượng sản phẩm trong giỏ hàng
function changeQuantity(index, delta) {
  cart[index].quantity += delta;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCartToStorage();
  updateCartUI();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCartToStorage();
  updateCartUI();
}

// 5. Cập nhật giao diện giỏ hàng
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
        <div class="cart-item-meta">
          ${item.option} | ${formatCurrency(item.price)}
        </div>
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

// Tìm kiếm & Bộ lọc
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchKeyword = e.target.value;
    renderProducts();
  });
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.getAttribute("data-category");
    renderProducts();
  });
});

// ================= XỬ LÝ GIỎ HÀNG & CỬA SỔ THANH TOÁN =================
const checkoutModal = document.getElementById("checkout-modal");
const openCheckoutBtn = document.getElementById("open-checkout-btn");
const closeCheckoutBtn = document.getElementById("close-checkout-btn");
const backToCartBtn = document.getElementById("back-to-cart-btn");
const deliveryMethodSelect = document.getElementById("delivery-method");
const paymentRadios = document.querySelectorAll('input[name="payment-method"]');
const qrPaymentBox = document.getElementById("qr-payment-box");

// Cấu hình tài khoản nhận tiền VietQR
const BANK_ID = "MB";
const ACCOUNT_NO = "0905123456";
const ACCOUNT_NAME = "PHAM HONG NHUNG";

const openCartBtn = document.getElementById("open-cart-btn");
if (openCartBtn) {
  openCartBtn.addEventListener("click", () => {
    cartModal.classList.add("active");
  });
}

const closeCartBtn = document.getElementById("close-cart-btn");
if (closeCartBtn) {
  closeCartBtn.addEventListener("click", () => {
    cartModal.classList.remove("active");
  });
}

if (openCheckoutBtn && checkoutModal) {
  openCheckoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Giỏ hàng của bạn đang trống! Vui lòng chọn sản phẩm trước.");
      return;
    }
    cartModal.classList.remove("active");
    renderCheckoutSummary();
    checkoutModal.classList.add("active");
  });
}

if (closeCheckoutBtn) {
  closeCheckoutBtn.addEventListener("click", () => {
    checkoutModal.classList.remove("active");
  });
}

if (backToCartBtn) {
  backToCartBtn.addEventListener("click", () => {
    checkoutModal.classList.remove("active");
    cartModal.classList.add("active");
  });
}

function renderCheckoutSummary() {
  const summaryListEl = document.getElementById("checkout-summary-list");
  if (!summaryListEl) return;

  const subtotal = cart.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  const deliveryVal = deliveryMethodSelect ? deliveryMethodSelect.value : "";
  
  let shippingFee = 0;
  if (deliveryVal.includes("Đà Nẵng")) shippingFee = 15000;
  else if (deliveryVal.includes("toàn quốc")) shippingFee = 30000;

  const finalTotal = subtotal + shippingFee;

  summaryListEl.innerHTML = cart.map(item => {
    const productObj = products.find(p => p.id === item.id);
    const imgSrc = productObj ? productObj.image : "";
    const safeImgName = imgSrc.replace(/'/g, "\\'");
    return `
      <div class="summary-item">
        <div class="summary-item-left">
          <img src="${imgSrc}" alt="${item.name}" class="summary-item-img" onerror="handleImageError(this, '${safeImgName}')">
          <div>
            <strong>${item.name}</strong>
            <div style="font-size: 0.78rem; color: #666;">${item.option} &times; ${item.quantity}</div>
          </div>
        </div>
        <span>${formatCurrency((item.price || 0) * item.quantity)}</span>
      </div>
    `;
  }).join("");

  document.getElementById("summary-subtotal").textContent = subtotal > 0 ? subtotal.toLocaleString("vi-VN") + " ₫" : "0 ₫";
  document.getElementById("summary-shipping").textContent = shippingFee === 0 ? "Miễn phí" : shippingFee.toLocaleString("vi-VN") + " ₫";
  document.getElementById("summary-total").textContent = finalTotal > 0 ? finalTotal.toLocaleString("vi-VN") + " ₫" : "Đang cập nhật giá";

  const randomOrderCode = "ARCHI" + Math.floor(1000 + Math.random() * 9000);
  const qrAmountEl = document.getElementById("qr-amount");
  const qrMemoEl = document.getElementById("qr-memo");
  const vietqrImgEl = document.getElementById("vietqr-img");

  if (qrAmountEl) qrAmountEl.textContent = finalTotal.toLocaleString("vi-VN") + " ₫";
  if (qrMemoEl) qrMemoEl.textContent = randomOrderCode;
  if (vietqrImgEl) {
    vietqrImgEl.src = `https://img.vietqr.io/image/${BANK_ID}-${ACCOUNT_NO}-compact2.png?amount=${finalTotal}&addInfo=${encodeURIComponent(randomOrderCode)}&accountName=${encodeURIComponent(ACCOUNT_NAME)}`;
  }
}

if (deliveryMethodSelect) {
  deliveryMethodSelect.addEventListener("change", renderCheckoutSummary);
}

paymentRadios.forEach(radio => {
  radio.addEventListener("change", (e) => {
    document.querySelectorAll(".payment-option").forEach(el => el.classList.remove("active"));
    e.target.closest(".payment-option").classList.add("active");

    if (qrPaymentBox) {
      if (e.target.value.includes("QR")) {
        qrPaymentBox.classList.add("active");
      } else {
        qrPaymentBox.classList.remove("active");
      }
    }
  });
});

// Gửi đơn hàng (tương thích với cả giao diện cũ và cửa sổ thanh toán mới)
const checkoutBtn = document.getElementById("checkout-btn");
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", async () => {
    if (cart.length === 0) {
      alert("Giỏ hàng của bạn đang trống!");
      return;
    }

    const name = document.getElementById("cust-name").value.trim();
    const phone = document.getElementById("cust-phone").value.trim();
    const address = document.getElementById("cust-address").value.trim();
    const emailEl = document.getElementById("cust-email");
    const noteEl = document.getElementById("cust-note");
    const checkedPayment = document.querySelector('input[name="payment-method"]:checked');

    const email = emailEl ? emailEl.value.trim() : "";
    const note = noteEl ? noteEl.value.trim() : "";
    const deliveryMethod = deliveryMethodSelect ? deliveryMethodSelect.value : "Giao hàng tiêu chuẩn";
    const paymentMethod = checkedPayment ? checkedPayment.value : "Thanh toán khi nhận hàng (COD)";

    if (!name || !phone || !address) {
      alert("Vui lòng điền đầy đủ Họ tên, Số điện thoại và Địa chỉ/Lớp nhận hàng!");
      return;
    }

    const phoneRegex = /^[0-9]{9,11}$/;
    if (!phoneRegex.test(phone)) {
      alert("Số điện thoại không hợp lệ! Vui lòng nhập từ 9 đến 11 chữ số.");
      return;
    }

    checkoutBtn.textContent = "ĐANG XỬ LÝ ĐƠN HÀNG...";
    checkoutBtn.disabled = true;

    const orderItemsText = cart
      .map(item => `- ${item.name} (${item.option}) x ${item.quantity}: ${formatCurrency(item.price * item.quantity)}`)
      .join("\n");

    const summaryTotalEl = document.getElementById("summary-total");
    const totalPrice = cart.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
    const finalTotalText = summaryTotalEl ? summaryTotalEl.textContent : totalPrice.toLocaleString("vi-VN") + " ₫";

    // THAY ĐỊA CHỈ GMAIL CỦA BẠN VÀO DÒNG DƯỚI ĐÂY
    const YOUR_EMAIL = "email_cua_ban@gmail.com";

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `[ARCHI20 CREATIVE] Đơn hàng mới từ ${name}`,
          "Khách hàng": name,
          "Số điện thoại": phone,
          "Email": email || "Không cung cấp",
          "Hình thức nhận hàng": deliveryMethod,
          "Địa chỉ / Lớp": address,
          "Phương thức thanh toán": paymentMethod,
          "Ghi chú": note || "Không có",
          "Danh sách sản phẩm": orderItemsText,
          "Tổng thanh toán": finalTotalText
        })
      });

      alert("ĐẶT HÀNG THÀNH CÔNG! Cảm ơn bạn đã ủng hộ chiến dịch ARCHI20 CREATIVE.");
      cart = [];
      saveCartToStorage();
      updateCartUI();
      document.getElementById("cust-name").value = "";
      document.getElementById("cust-phone").value = "";
      document.getElementById("cust-address").value = "";
      if (cartModal) cartModal.classList.remove("active");
      if (checkoutModal) checkoutModal.classList.remove("active");
    } catch (error) {
      alert("Không thể kết nối mạng. Vui lòng kiểm tra kết nối Internet!");
    } finally {
      checkoutBtn.textContent = "HOÀN TẤT ĐẶT HÀNG";
      checkoutBtn.disabled = false;
    }
  });
}

// Khởi chạy ban đầu
renderProducts();
updateCartUI();