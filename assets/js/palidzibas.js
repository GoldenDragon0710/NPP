var acc = document.getElementsByClassName("palidzibas-main-accordion-title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = "100%";
    }
  });
}

acc[0].click();

var subacc = document.getElementsByClassName(
  "palidzibas-main-accordion-description-subtitle"
);
var j;

for (j = 0; j < subacc.length; j++) {
  subacc[j].addEventListener("click", function () {
    this.classList.toggle("active");
    // console.log("this.parentElement.children-----", this.parentElement.children);
    // var panel1 = this.parentElement.children;
    // if (panel1[1].style.maxHeight) {
    //     for(k = 1; k < panel1.length; k++) {
    //         panel1[i].style.maxHeight = null;
    //     }
    // } else {
    //     for(k = 1; k < panel1.length; k++) {
    //         panel1[i].style.maxHeight = "100%";
    //     }
    // }
    var panel1 = this.nextElementSibling;
    if (panel1.style.maxHeight) {
      panel1.style.maxHeight = null;
    } else {
      panel1.style.maxHeight = "100%";
    }
    var panel2 = panel1.nextElementSibling;
    if (panel2.style.maxHeight) {
      panel2.style.maxHeight = null;
    } else {
      panel2.style.maxHeight = "100%";
    }
  });
}

subacc[0].click();