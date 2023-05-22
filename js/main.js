var user = {
  name: "abdo",
  age: 27,
  salary: 7000,
  working: true,
  work: function () {
    window.alert("abdo is working....");
  },
  child: {
    name: "khaled",
    age: 3,
  },
};
console.log(user);
console.log(user.working, user.salary);
// user.work();
console.log(user.child);
var colors = ["red", "green", "blue", "white"];
for (var i = 0; i < colors.length; i++) console.log(colors[i]);
var empolyees = [
  { name: "abdo", age: 27, isWorking: true },
  { name: "adel", age: 13, isWorking: false },
  { name: "alaa", age: 17, isWorking: false },
];
for (var i = 0; i < empolyees.length; i++) {
  console.log(empolyees[i]);
}
for (var i = 0; i < empolyees.length; i++) {
  console.log(empolyees[i].name);
}

//////////////////////////////////////////////////////////////////////
var fristNameInput = document.getElementById("fristName");
var lastNameInput = document.getElementById("lastName");

function sayHello() {
  var userFullName = fristNameInput.value + " " + lastNameInput.value;
  document.getElementById("demo").innerHTML = userFullName;
}
////////////////////////////////////////////////////////////////////
///////////// CRUD Start  //////////////////

var productNameInput = document.getElementById("productName");
var productPricesInput = document.getElementById("productPrices");
var productCategoryInput = document.getElementById("productCategory");
var productDescriptionInput = document.getElementById("productDescription");
var addBtn = document.getElementById("addBtn");
var inputs = document.getElementsByClassName("form-control");
var currentIndex; // for updata the prodcut
var prodcuts = [];
if (JSON.parse(localStorage.getItem("productsList")) != null) {
  prodcuts = JSON.parse(localStorage.getItem("productsList"));
  displayData();
}
addBtn.onclick = function () {
  if (addBtn.innerHTML == "Add Product") {
    //innerhtml not the best for now
    addProdcut();
  } else {
    updataProdcut();
  }
  displayData();
  resetForm();
};
function addProdcut() {
  var prodcut = {
    name: productNameInput.value,
    price: productPricesInput.value,
    category: productCategoryInput.value,
    description: productDescriptionInput.value,
  };
  prodcuts.push(prodcut);
  localStorage.setItem("productsList", JSON.stringify(prodcuts));
}
function displayData() {
  var cartona = "";
  for (i = 0; i < prodcuts.length; i++) {
    cartona += `<tr>
    <td>${prodcuts[i].name}</td>
    <td>'${prodcuts[i].price}</td>
    <td>${prodcuts[i].category}</td>
    <td>${prodcuts[i].description}</td>
    <td><button onclick="getProductInfo(${i})" class="btn btn-outline-warning">Updata</button></td>
    <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
    </tr>`;
  }
  document.getElementById("tableBody").innerHTML = cartona;
}

function deleteProduct(index) {
  prodcuts.splice(index, 1);
  displayData();
  localStorage.setItem("productsList", JSON.stringify(prodcuts));
}

function getProductInfo(index) {
  currentIndex = index;
  var currentProduct = prodcuts[index];
  productNameInput.value = currentProduct.name;
  productPricesInput.value = currentProduct.price;
  productCategoryInput.value = currentProduct.category;
  productDescriptionInput.value = currentProduct.description;
  addBtn.innerHTML = "Updata Product";
}
function updataProdcut() {
  var prodcut = {
    name: productNameInput.value,
    price: productPricesInput.value,
    category: productCategoryInput.value,
    description: productDescriptionInput.value,
  };
  prodcuts[currentIndex] = prodcut;
  localStorage.setItem("productsList", JSON.stringify(prodcuts));
  addBtn.innerHTML = "Add Product";
}
function resetForm() {
  for (i = 0; i < inputs.length; i++) inputs[i].value = "";
  // productNameInput.value='';
  // productPricesInput.value='';
  // productCategoryInput.value='';
  // productDescriptionInput.value='';
}
function search(searchText) {
  var cartona = "";
  for (i = 0; i < prodcuts.length; i++) {
    if (
      prodcuts[i].name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    ) {
      cartona += `<tr>
    <td>${prodcuts[i].name}</td>
    <td>'${prodcuts[i].price}</td>
    <td>${prodcuts[i].category}</td>
    <td>${prodcuts[i].description}</td>
    <td><button onclick="getProductInfo(${i})" class="btn btn-outline-warning">Updata</button></td>
    <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
    </tr>`;
    }
    document.getElementById("tableBody").innerHTML = cartona;
  }
}
///////////// CRUD end  //////////////////
var userName = "Abdo Khaled Abdo";
// console.log(userName.indexOf('b'));
// console.log(userName.lastIndexOf('b'));
// console.log(userName.search('b'));
// console.log(userName.charAt('5'));
/* for(i=0;i<userName.length;i++){
        console.log(userName.charAt(i));}
*/
// console.log(userName.concat(' Khaled'))
// console.log(userName.substr(5,6))
// console.log(userName.substring(15,5))
// console.log(userName.slice(5,15))
// console.log(userName.includes('a'));
// console.log(userName.startsWith('A'));
// console.log(userName.endsWith('o'));
// console.log(userName.toLocaleUpperCase());
// console.log(userName.toLocaleLowerCase());
