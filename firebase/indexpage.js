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
function displayNavbarProducts(titles) {
  const productList = document.querySelector(".products-dropdown-content");

  titles.forEach((title) => {
    const productItem = document.createElement("li");
    productItem.innerHTML = `
          <a class="dropdown-item" href="products/products.html?id=${title.id}"
            >${title.title}</a
          >
      `;
    console.log("PRODUCTITEM", productItem);
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

      // Create a new array of the title, and id of the products in a single array from the productsArray
      const productsTitleArray = productsArray.map((product) => ({
        title: product.title,
        id: product.id,
      }));

      console.log("PRODUCTSTITLEARRAY", productsTitleArray);
      console.log("PRODUCTSARRAY", productsArray);

      displayNavbarProducts(productsTitleArray);
    }
  });
}

fetchProducts();
