

const products = [
  {
    id: 1,
    title: "Fjallraven Backpack",
    price: 109.95,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Slim Fit T-Shirt",
    price: 22.3,
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Cotton Jacket",
    price: 55.99,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    rating: { rate: 4.7, count: 500 },
  },
];


const formatText = (str) => str.replace(/\b\w/g, (c) => c.toUpperCase());

const trendingContainer = document.getElementById("trending_card_container");


products.forEach((item) => {
  trendingContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="bg-white border border-blue-500 rounded-lg p-4 hover:shadow-md transition group">
      
      <!-- image -->
      <div class="h-60 bg-gray-50 p-4 rounded mb-4 group-hover:scale-105 transition duration-300">
        <img src="${item.image}" class="w-full h-full object-contain" />
      </div>

      <!-- category + rating -->
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded">
          ${formatText(item.category)}
        </span>

        <div class="flex items-center gap-1 text-sm">
          <i class="ri-star-fill text-yellow-400"></i>
          <span class="font-medium">${item.rating.rate}</span>
        </div>
      </div>

      <!-- title -->
      <h3 class="text-sm font-semibold text-gray-800 line-clamp-1 mb-1">
        ${item.title}
      </h3>

      <!-- price -->
      <p class="font-bold text-gray-900 mb-3">$${item.price}</p>

      <!-- buttons -->
      <div class="flex gap-2">
        <button onclick="loadProductDetails(${item.id})"
          class="flex-1 border border-blue-500 text-sm py-2 rounded hover:bg-gray-100 text-black">
          Details
        </button>

        <button
          class="flex-1 bg-indigo-600 text-white text-sm py-2 rounded hover:bg-indigo-700">
          Add
        </button>
      </div>

    </div>
    `,
  );
});
