function searchButton (event) {
    event.preventDefault();
    let searchInput =document.querySelector("#search-input");
    let cityElement= document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
}

let searchFornElement = document.querySelector("#search-form");
searchFornElement.addEventListener("submit", searchButton);