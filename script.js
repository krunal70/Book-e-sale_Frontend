let searchInput = document.getElementById("search-text");
let productList = document.getElementById("productList");

searchInput.addEventListener('click',toggleList);

function toggleList(){
    if(productList.hidden==true){
        productList.hidden=false;
    }
    else{
        productList.hidden=true;
    }
}