var acc = document.getElementsByClassName("card-content-detail-tab-tabpane-content-accordion-title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.margin = "unset";
      document.getElementsByClassName("accordion-open-icon").src = "assets/img/plus.svg";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.margin = "30px 0";
      document.getElementsByClassName("accordion-open-icon").src = "assets/img/minus.svg";
    } 
  });
}