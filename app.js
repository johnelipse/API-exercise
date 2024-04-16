const sectionCategories=document.querySelector(".sectionCategories");
const sectionProducts=document.querySelector(".sectionProducts");
const sectionUsers=document.querySelector(".sectionUsers");
// console.log(sectionCategories,sectionProducts,sectionUsers);
const endpointOne="https://api.escuelajs.co/api/v1/categories";
const endpointTwo=" https://api.escuelajs.co/api/v1/products";
const endpointThree="https://fakestoreapi.com/users";
 const categories=[]
 const products=[]
 const newCategories=[] 
async function fetchCategories(){
const response=await fetch(endpointOne);
const categories=await response.json();
const newCategories=categories.splice(5,4)
// console.log(categories);
console.log(newCategories);
renderCategories(newCategories)
}
fetchCategories()
function renderCategories(newCategories){
    sectionCategories.innerHTML=""
newCategories.forEach((category)=>{
    const categoryHtml=`<div class="category-card">
    <div class="category-card-img">
        <img src="${category.image}" alt="loading">
    </div>
    <div class="category-card-content">
        <h3>${category.name}</h3>
</div>
</div>`; 
sectionCategories.insertAdjacentHTML("beforeend",categoryHtml)
})
}
async function fetchProducts(){
    const response=await fetch(endpointTwo);
    const products=await response.json();
    console.log(products);
    renderProducts(products)
renderProducts(products)
}
fetchProducts()

function renderProducts(products){
sectionProducts.innerHTML=""
products.forEach((product)=>{
    const productHtml=`    <div class="product-card">
    <div class="product-card-img">
        <img src="images/image copy.png" alt="loading">
    </div>
    <div class="product-card-content">
        <h3>Number: ${product.id}</h3>
        <h3>${product.title}</h3>
    <div class="stars">
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
    </div>
        <h3>${product.price}</h3>
    </div>

</div> `;
    sectionProducts.insertAdjacentHTML("beforeend",productHtml)
})
}

async function fetchUsers(){
const response=await fetch(endpointThree);
const users=await response.json()
console.log(users);
renderUsers(users)
}
fetchUsers()

function renderUsers(users){
    sectionUsers.innerHTML=""
users.forEach((user)=>{
    const userHtml=`    <div class="user">
    <div class="user-img">
        <img src="images/image copy 2.png" alt="loading">
    </div>
    <div class="user-content">
        <h3>ID:${user.id}</h3>
        <h4>Username:${user.username}</h4>
        <h4>Email:${user.email}</h4>
        <h4>Password:${user.password}</h4>
        </div>
</div>`;
    sectionUsers.insertAdjacentHTML("beforeend",userHtml)
})
}