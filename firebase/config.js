import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
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

// Function to display products
function displayProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear any existing content

  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("col-lg-4", "col-md-6");
    productItem.innerHTML = `
        <div class="services-item">
          <div class="background-img">
            <img
              src="assets/images/products/olt/sy-gpon-16olt.webp"
              alt=""
            />
          </div>
          <!-- <div class="icon"><span class="icon-idea"></span></div> -->
          <h4 class="title">${product.title}</h4>
          <p class="para">
            ${product.description}
          </p>
          <a href="products/products.html?id=${product.id}" class="btn--base-two style-two">
            <i class="fas fa-circle"></i>Shop OLT<i class="fas fa-circle"></i
          ></a>
        </div>
      `;
    productList.appendChild(productItem);
  });
}

function fetchProducts() {
  const productsRef = ref(db, "products");
  onValue(productsRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    if (data) {
      const productsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      console.log("PRODUCTSARRAY", productsArray);

      displayProducts(productsArray);
    }
  });
}

fetchProducts();

export { db };
