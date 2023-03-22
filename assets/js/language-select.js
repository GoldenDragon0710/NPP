var dropdownElements = document.getElementsByClassName('lang-dropdown');
for (var i=0; i<dropdownElements.length; i++) {
    dropdownElements[i].addEventListener("click", function(){
        this.classList.toggle('active');
    });
}