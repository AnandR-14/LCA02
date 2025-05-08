// script.js


function handleProductClick(event) {
    const product = event.currentTarget;
    console.log("Clicked product:", product.querySelector("h4").innerText);
  
    document
      .querySelectorAll(".product-item")
      .forEach((item) => item.classList.remove("selected"));
    product.classList.add("selected");
  
   
    const firstChild = product.firstElementChild;
    console.log("First element inside clicked product:", firstChild.tagName);
  
    
    const parent = product.parentElement;
    console.log("Parent element:", parent.className);
  }
  
  
  const products = document.querySelectorAll(".product-item");
  products.forEach((product) => {
    
    product.addEventListener("click", handleProductClick);
  
    
    product.addEventListener("mouseover", () => {
      product.classList.add("hovered");
     
      const nextSibling = product.nextElementSibling;
      if (nextSibling) {
        nextSibling.classList.add("next-to-hover");
      }
    });
    product.addEventListener("mouseout", () => {
      product.classList.remove("hovered");
      const nextSibling = product.nextElementSibling;
      if (nextSibling) {
        nextSibling.classList.remove("next-to-hover");
      }
    });
  });
  
  
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const firstProduct = document.querySelector(".product-item");
      if (firstProduct) {
        firstProduct.classList.toggle("highlight");
      }
    }
  });
  

  const addShirtButton = document.createElement("button");
  addShirtButton.innerText = "Add New Shirt";
  addShirtButton.classList.add("add-shirt-button");
  document.body.prepend(addShirtButton);
  
  addShirtButton.addEventListener("click", () => {
    const newProduct = document.createElement("div");
    newProduct.classList.add("product-item");
  
    const img = document.createElement("img");
    img.src = "/Page_images/download (1).png";
    img.alt = "New Shirt";
  
    const title = document.createElement("h4");
    title.innerText = "Fresh Addition";
  
    const desc = document.createElement("p");
    desc.innerText = "New limited edition formal shirt.";
  
    const button = document.createElement("button");
    button.innerText = "Buy Now";
    button.classList.add("buy-now-button");
  
    newProduct.append(img, title, desc, button);
  
    
    const productsGrid = document.querySelector(".products-grid");
    if (productsGrid) {
      productsGrid.append(newProduct);
    } else {
      
      const newGrid = document.createElement("div");
      newGrid.classList.add("products-grid");
      newGrid.append(newProduct);
      document.body.append(newGrid);
    }
  
    
    newProduct.addEventListener("click", handleProductClick);
    newProduct.addEventListener("mouseover", () =>
      newProduct.classList.add("hovered")
    );
    newProduct.addEventListener("mouseout", () =>
      newProduct.classList.remove("hovered")
    );
  });

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      form.style.display = 'none'; 
      thankYouMessage.style.display = 'block';
    });
  });