import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXzpr1w-PzfuCpwQUn0sDBWHi2kGyPnqE",
  authDomain: "wellmarktechnologies-e8d72.firebaseapp.com",
  databaseURL:
    "https://wellmarktechnologies-e8d72-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wellmarktechnologies-e8d72",
  storageBucket: "wellmarktechnologies-e8d72.appspot.com",
  messagingSenderId: "412011432367",
  appId: "1:412011432367:web:b77a92aafef3ff6050075a",
  measurementId: "G-0EVDCFKTYP",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Function to get the product ID from the URL
function getCategoryIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  console.log(params.get("id"));
  return params.get("id");
}

// Function to display the product details
function displayProductDetails(product) {
  const productHeading = document.getElementById("product-heading");
  productHeading.innerText = product.title;
  const productTitle = document.getElementById("product-title");
  productTitle.innerText = product.title;
  const productDetail = document.getElementById("category-product");

  product.prod.forEach((sproduct) => {
    const productItem = document.createElement("div");
    productItem.classList.add("col-lg-4", "col-md-6");
    productItem.innerHTML = `
        <div class="services-item">
          <div class="background-img">
            <img
              src="../assets/images/products/olt/sy-gpon-16olt.webp"
              alt=""
            />
          </div>
          <!-- <div class="icon"><span class="icon-idea"></span></div> -->
          <h4 class="title">${sproduct.title}</h4>
          <p class="para">
            ${sproduct.description}
          </p>
          <a href="../product/product.html?category=${product.id}&id=${sproduct.id}" class="btn--base-two style-two">
            <i class="fas fa-circle"></i>Shop OLT<i class="fas fa-circle"></i
          ></a>
        </div>
      `;
    productDetail.appendChild(productItem);
  });
}

// Fetch product details on page load
async function fetchProductDetails() {
  const categoryId = getCategoryIdFromUrl();
  console.log("CATEGORY ID", categoryId);
  const productRef = ref(db, `products/${categoryId}`);
  const snapshot = await get(productRef);
  let title = "";
  if (snapshot.exists()) {
    const product = snapshot.val();
    console.log("PRODYCTS", product);
    displayProductDetails(product);
    title = `${product.title} | Wellmark Technoogies | Distributors & Partners`;
  } else {
    document.getElementById("product-detail").innerText = "Product not found";
    title = "Not found | Wellmark Technologies | Distributors & Partners";
  }
  document.title = title;
}

// Initialize product details
fetchProductDetails();
