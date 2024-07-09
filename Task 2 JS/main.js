var products = [];
var currentIndex = -1; // To keep track of the index of the product being updated
var productContainer = document.getElementById("product-table-container");
var warningMessage = document.getElementById("warning-msg");
var tableBody = document.getElementById("table-body");

function handleRenderData() {
    if (products && products.length !== 0) {
        productContainer.classList.add("d-block");
        productContainer.classList.remove("d-none");
        warningMessage.classList.add("d-none");
        warningMessage.classList.remove("d-block");

        var rows_elements = "";
        for (var i = 0; i < products.length; i++) {
            rows_elements += `
             <tr>
            <th>${i + 1}</th>
            <td>${products[i].name}</td>
            <td>${products[i].category}</td>
            <td>${products[i].price}</td>
            <td>${products[i].desc}</td>
            <td>
              <button class="btn btn-outline-success" onclick="editProduct(${i})">
                <i class="fas fa-pen-square"></i>
              </button>
            </td>
            <td>
              <button class="btn btn-outline-danger" onclick="deleteProduct(${i})">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        `;
        }
        tableBody.innerHTML = rows_elements;
    } else {
        productContainer.classList.add("d-none");
        productContainer.classList.remove("d-block");
        warningMessage.classList.add("d-block");
        warningMessage.classList.remove("d-none");
    }
}

function editProduct(index) {
    var product = products[index];
    productName.value = product.name;
    productCategory.value = product.category;
    productPrice.value = product.price;
    productDesc.value = product.Describtion;

    currentIndex = index;
    createBtn.textContent = "Update Product";
}

function deleteProduct(index) {
    products.splice(index, 1);
    handleRenderData();
}

handleRenderData();

var productName = document.getElementById("product_name");
var productCategory = document.getElementById("product_category");
var productPrice = document.getElementById("product_price");
var productDescribtion = document.getElementById("product_Describtion");
var createBtn = document.getElementById("create-btn");
var productForm = document.getElementById("product-form");

productForm.onsubmit = function (event) {
    event.preventDefault();

    var name = productName.value.trim();
    var category = productCategory.value.trim();
    var price = productPrice.value.trim();
    var Describtion = productDescribtion.value.trim();

    if (name === "" && category === "" && price === "" && Describtion === "") {
        alert("All fields must be filled out");
        return; 
    }

    var product = {
        name: name,
        category: category,
        price: price,
        Describtion: Describtion
    };

    if (currentIndex >= 0) {
        
        products[currentIndex] = product;
        currentIndex = -1; 
        createBtn.textContent = "Add Product";
    } else {
        
        products.push(product);
    }

    handleRenderData();
    productForm.reset();
};
