
const loadCategoryButtons = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const categories = await res.json();
    displayCategoryButtons(categories);
  } catch (err) {
    console.error("Error loading categories:", err);
  }
};

const displayCategoryButtons = (categories) => {
  const container = document.getElementById("category_buttons_container");

  const allBtn = document.createElement("button");
  allBtn.id = "all_products";
  allBtn.className =
    "btn btn-outline btn-sm category_btn border border-blue-500";
  allBtn.textContent = "All";
  allBtn.addEventListener("click", loadAllProducts);
  container.appendChild(allBtn);


  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.id = `category_btn_${cat}`;
    btn.className =
      "btn btn-outline btn-sm category_btn border border-blue-500";
    btn.textContent = makeUpperCase(cat);
    btn.addEventListener("click", () => loadCategoryProducts(cat));
    container.appendChild(btn);
  });


  loadAllProducts();
};


const removeActiveClassFromCategoryButton = () => {
  document.querySelectorAll(".category_btn").forEach((btn) => {
    btn.classList.remove("active_category");
  });
};

const makeUpperCase = (str) =>
  str
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");


const manageLoading = (status) => {
  const loading = document.getElementById("loading_container");
  const productsContainer = document.getElementById("products_card_container");
  if (status) {
    loading.classList.remove("hidden");
    productsContainer.classList.add("hidden");
  } else {
    loading.classList.add("hidden");
    productsContainer.classList.remove("hidden");
  }
};


const loadAllProducts = async () => {
  try {
    manageLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    removeActiveClassFromCategoryButton();
    const allBtn = document.getElementById("all_products");
    if (allBtn) allBtn.classList.add("active_category");

    displayProducts(data);
  } catch (err) {
    console.error("Error loading products:", err);
  }
};

const loadCategoryProducts = async (category) => {
  try {
    manageLoading(true);
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`,
    );
    const data = await res.json();

    removeActiveClassFromCategoryButton();
    const categoryBtn = document.getElementById(`category_btn_${category}`);
    if (categoryBtn) categoryBtn.classList.add("active_category");

    displayProducts(data);
  } catch (err) {
    console.error("Error loading category products:", err);
  }
};

const displayProducts = (products) => {
  const container = document.getElementById("products_card_container");
  container.innerHTML = "";

  products.forEach((p) => {
    const card = document.createElement("div");
    card.className =
      "card bg-base-100 shadow hover:shadow-lg transition duration-200 group";

    card.innerHTML = `
      <figure class="p-4 bg-gray-50 h-64 flex items-center justify-center">
        <img src="${p.image}" alt="${p.title}" class="object-contain h-full group-hover:scale-105 transition duration-200"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title text-sm line-clamp-1">${p.title}</h2>
        <p class="text-gray-600 text-xs">${makeUpperCase(p.category)}</p>
        <p class="text-lg font-bold">$${p.price}</p>
        <div class="card-actions justify-between mt-2">
          <button class="btn btn-outline btn-sm border border-blue-500 " onclick="loadProductDetails(${p.id})">
            Details <i class="ri-eye-line"></i>
          </button>
          <button class="btn btn-primary btn-sm">
            <i class="ri-shopping-cart-line"></i> Add
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  manageLoading(false);
};


const loadProductDetails = async (id) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
    displayProductModal(product);
  } catch (err) {
    console.error("Error loading product details:", err);
  }
};

const displayProductModal = (p) => {
  const modalContainer = document.getElementById("modal_container");
  modalContainer.innerHTML = `
    <figure class="p-4 bg-gray-50 h-64 flex items-center justify-center">
      <img src="${p.image}" alt="${p.title}" class="object-contain h-full"/>
    </figure>
    <h2 class="text-xl font-bold mt-4">${p.title}</h2>
    <p class="text-gray-600 mt-2">${makeUpperCase(p.category)}</p>
    <p class="text-gray-700 mt-2">${p.description}</p>
    <p class="text-lg font-bold mt-2">$${p.price}</p>
  `;
  document.getElementById("product_modal").showModal();
};


loadCategoryButtons();
