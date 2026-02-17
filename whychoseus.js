
const featuresData = [
  {
    id: 1,
    icon: `<i class="ri-truck-line text-xl text-indigo-600"></i>`,
    title: "Quick Delivery",
    description: "Fast and reliable delivery to your doorstep.",
  },
  {
    id: 2,
    icon: `<i class="ri-customer-service-line text-xl text-indigo-600"></i>`,
    title: "Always Available",
    description: "Support team ready to help anytime.",
  },
  {
    id: 3,
    icon: `<i class="ri-shield-check-line text-xl text-indigo-600"></i>`,
    title: "Safe Payment",
    description: "Secure and trusted payment system.",
  },
  {
    id: 4,
    icon: `<i class="ri-loop-right-line text-xl text-indigo-600"></i>`,
    title: "Easy Returns",
    description: "Simple and hassle-free return process.",
  },
];

// renamed container id
const featuresContainer = document.getElementById("features_container");

// render cards (simplified)
featuresData.forEach((item) => {
  featuresContainer.innerHTML += `
    <div class="border border-blue-500 rounded-lg p-5">
      <div class="mb-4 bg-indigo-50 w-10 h-10 grid place-items-center rounded">
        ${item.icon}
      </div>
      <h3 class="font-semibold text-gray-800">${item.title}</h3>
      <p class="text-sm text-gray-500">${item.description}</p>
    </div>
  `;
});
