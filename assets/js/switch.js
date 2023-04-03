let button = document.querySelector(".catalog-main-filter-option-checkbox-btn")
let switcher = document.querySelector(".catalog-main-filter-option-checkbox-switcher")
switcher.addEventListener('click', event => {
    button.classList.toggle("catalog-main-filter-option-checkbox-checkT")
    switcher.classList.toggle("catalog-main-filter-option-checkbox-checkF")
  });