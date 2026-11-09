const products = [
 // --- NHÓM MÓC KHÓA ARCHI ---
  {
    id: 101,
    name: "Móc Khóa Archi - Mẫu Đầu Cú Basic",
    price: 35000,
    category: "moc-khoa",
    badge: "Handmade",
    optionLabel: "Phiên bản",
    options: ["Mẫu 1 - Đầu Basic", "Kèm túi quà"],
    description: "Móc khóa len móc thủ công hình đầu cú Archi tông đỏ trắng tối giản với đôi mắt đen tròn nổi bật, đi kèm khoen kim loại chắc chắn.",
    image: "archi1.jpg"
  },
  {
    id: 102,
    name: "Móc Khóa Archi - Mẫu Đầu Cú Lửa",
    price: 35000,
    category: "moc-khoa",
    badge: "Handmade",
    optionLabel: "Phiên bản",
    options: ["Mẫu 2 - Đầu Lửa", "Kèm túi quà"],
    description: "Móc khóa len móc thủ công hình đầu cú Archi phiên bản mắt vàng rực rỡ, điểm xuyết họa tiết lông mày phối 3 tông màu đỏ, vàng và đen sắc nét.",
    image: "archi2.jpg"
  },
  {
    id: 103,
    name: "Móc Khóa Archi - Mẫu Áo Đỏ Cổ Trắng",
    price: 35000,
    category: "moc-khoa",
    badge: "Best Seller",
    optionLabel: "Phiên bản",
    options: ["Mẫu 3 - Áo Đỏ", "Kèm túi quà"],
    description: "Móc khóa len cú Archi tạo hình toàn thân mặc áo đỏ cổ trắng thanh lịch kèm chi tiết hàng cúc và logo túi ngực độc đáo.",
    image: "archi3.jpg"
  },
  {
    id: 104,
    name: "Móc Khóa Archi - Mẫu Chiến Binh",
    price: 35000,
    category: "moc-khoa",
    badge: "Limited",
    optionLabel: "Phiên bản",
    options: ["Mẫu 4 - Chiến Binh", "Kèm túi quà"],
    description: "Móc khóa len cú Archi toàn thân phối họa tiết giáp ngực trắng - đỏ - vàng tỉ mỉ từng mũi móc, thích hợp treo balo hoặc làm quà tặng kỷ niệm.",
    image: "archi4.jpg"
  },
  // --- NHÓM DÂY ĐEO THẺ SINH VIÊN ---
  {
    id: 105,
    name: "Dây Đeo Sinh Viên DAU - Khoa Kiến Trúc",
    price: 25000,
    category: "day-deo",
    badge: "DAU Merch",
    optionLabel: "Tùy chọn",
    options: ["Dây đeo lẻ", "Kèm bao thẻ đứng", "Kèm bao thẻ ngang"],
    description: "Dây đeo thẻ sinh viên DAU phối hai tông màu đỏ đô và trắng nổi bật, in sắc nét dòng chữ KHOA KIẾN TRÚC cùng logo đặc trưng của khoa và đầu móc xoay kim loại bền chắc.",
    image: "day-deo-dau.png"
  },
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
  return amount.toLocaleString("vi-VN") + " ₫";
}

function saveCartToStorage() {
  localStorage.setItem("aura_concept_cart", JSON.stringify(cart));
}

function removeVietnameseTones(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

// 1. Hiển thị danh sách sản phẩm (Bấm vào ảnh hoặc tên sẽ mở Modal chi tiết)
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

  productListEl.innerHTML = filtered.map(product => `
    <div class="product-card">
      <span class="product-badge">${product.badge}</span>
      <div class="product-img-wrapper" onclick="openProductModal(${product.id})">
        <img src="${product.image}" alt="${product.name}" class="product-img">
      </div>
      <div class="product-info">
        <div>
          <h3 class="product-name" onclick="openProductModal(${product.id})">${product.name}</h3>
          <p class="product-price">${formatCurrency(product.price)}</p>
        </div>
        <div>
          <div class="option-row">
            <label for="opt-${product.id}">${product.optionLabel}:</label>
            <select id="opt-${product.id}" class="option-select">
              ${product.options.map(opt => `<option value="${opt}">${opt}</option>`).join("")}
            </select>
          </div>
          <button class="add-to-cart" onclick="addToCart(${product.id}, 'opt-${product.id}')">
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// 2. Mở cửa sổ xem chi tiết sản phẩm
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  productModalBody.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="modal-img">
    <div class="modal-details">
      <span class="modal-badge">${product.badge}</span>
      <h2 class="modal-title">${product.name}</h2>
      <p class="modal-price">${formatCurrency(product.price)}</p>
      <p class="modal-desc">${product.description}</p>
      
      <div class="modal-option-row">
        <label for="modal-opt-${product.id}"><strong>${product.optionLabel}:</strong></label>
        <select id="modal-opt-${product.id}" class="option-select">
          ${product.options.map(opt => `<option value="${opt}">${opt}</option>`).join("")}
        </select>
      </div>

      <button class="checkout-btn" onclick="addToCart(${product.id}, 'modal-opt-${product.id}', true)">
        Thêm Vào Giỏ Hàng
      </button>
    </div>
  `;

  productModal.classList.add("active");
}

// Đóng cửa sổ chi tiết sản phẩm
document.getElementById("close-product-modal").addEventListener("click", () => {
  productModal.classList.remove("active");
});

productModal.addEventListener("click", (e) => {
  if (e.target === productModal) {
    productModal.classList.remove("active");
  }
});

// 3. Thêm sản phẩm vào giỏ (Hỗ trợ thêm từ thẻ ngoài hoặc từ trong Modal)
function addToCart(productId, selectElementId, closeModalAfter = false) {
  const product = products.find(p => p.id === productId);
  const selectEl = document.getElementById(selectElementId);
  const selectedOption = selectEl ? selectEl.value : product.options[0];

  const existingItem = cart.find(
    item => item.id === productId && item.option === selectedOption
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
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

  // Nếu số lượng giảm về 0 thì tự động xóa khỏi giỏ
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

// 5. Cập nhật giao diện giỏ hàng kèm nút +/-
function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCountEl.textContent = totalCount;
  cartTotalEl.textContent = formatCurrency(totalPrice);

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
searchInput.addEventListener("input", (e) => {
  searchKeyword = e.target.value;
  renderProducts();
});

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.getAttribute("data-category");
    renderProducts();
  });
});

// Đóng / Mở giỏ hàng và Thanh toán
document.getElementById("open-cart-btn").addEventListener("click", () => {
  cartModal.classList.add("active");
});

document.getElementById("close-cart-btn").addEventListener("click", () => {
  cartModal.classList.remove("active");
});

document.getElementById("checkout-btn").addEventListener("click", async () => {
  if (cart.length === 0) {
    alert("Giỏ hàng của bạn đang trống!");
    return;
  }

  const name = document.getElementById("cust-name").value.trim();
  const phone = document.getElementById("cust-phone").value.trim();
  const address = document.getElementById("cust-address").value.trim();

  if (!name || !phone || !address) {
    alert("Vui lòng điền đầy đủ Họ tên, Số điện thoại và Địa chỉ nhận hàng!");
    return;
  }

  const phoneRegex = /^[0-9]{9,11}$/;
  if (!phoneRegex.test(phone)) {
    alert("Số điện thoại không hợp lệ! Vui lòng chỉ nhập từ 9 đến 11 chữ số.");
    return;
  }

  const checkoutBtn = document.getElementById("checkout-btn");
  checkoutBtn.textContent = "Đang xử lý đơn hàng...";
  checkoutBtn.disabled = true;

  // Gộp danh sách sản phẩm trong giỏ thành chuỗi văn bản dễ đọc
  const orderItemsText = cart
    .map(item => `- ${item.name} (${item.option}) x ${item.quantity}: ${formatCurrency(item.price * item.quantity)}`)
    .join("\n");

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
        _subject: `Đơn hàng mới từ ${name} - AURA STUDIO`,
        "Khách hàng": name,
        "Số điện thoại": phone,
        "Địa chỉ giao hàng": address,
        "Chi tiết sản phẩm": orderItemsText,
        "Tổng thanh toán": formatCurrency(totalPrice)
      })
    });

    if (response.ok) {
      alert("ĐẶT HÀNG THÀNH CÔNG! Đơn hàng đã được gửi tới hệ thống AURA STUDIO.");
      cart = [];
      saveCartToStorage();
      updateCartUI();
      document.getElementById("cust-name").value = "";
      document.getElementById("cust-phone").value = "";
      document.getElementById("cust-address").value = "";
      cartModal.classList.remove("active");
    } else {
      alert("Có lỗi xảy ra khi gửi đơn hàng. Vui lòng thử lại!");
    }
  } catch (error) {
    alert("Không thể kết nối mạng. Vui lòng kiểm tra kết nối Internet!");
  } finally {
    checkoutBtn.textContent = "Xác Nhận Đặt Hàng";
    checkoutBtn.disabled = false;
  }
});

// Khởi chạy ban đầu
renderProducts();
updateCartUI();