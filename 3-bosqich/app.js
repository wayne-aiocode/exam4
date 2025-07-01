const SearchMenu = document.querySelector(".menu-search");
const SearchButton = document.querySelector(".search-button");
const SearchCloseButton = document.querySelector(".search-close-button");

const RunMenu = document.querySelector(".menu-run");
const RunButton = document.querySelector(".run-button");
const RunCloseButton = document.querySelector(".run-close-button");

function openSearch() {
    SearchMenu.classList.toggle("active");
}

function closeSearch() {
    SearchMenu.classList.remove("active");
}

function openRun() {
    RunMenu.classList.toggle("active");
}

function closeRun() {
    RunMenu.classList.remove("active");
}

SearchButton.addEventListener("click", openSearch);

SearchCloseButton.addEventListener("click", closeSearch);

RunButton.addEventListener("click", openRun);

RunCloseButton.addEventListener("click", closeRun);