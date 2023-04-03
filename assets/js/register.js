const progressBar = document.getElementById("progress-bar");
const progressBarGray = document.getElementById("progress-bar-gray");
const progressNext1 = document.getElementById("progress-next1-first");
const progressNext2 = document.getElementById("progress-next1-second");
const progressNext3 = document.getElementById("progress-next1-third");
const progressNext4 = document.getElementById("progress-next1-fourth");
const progressNext5 = document.getElementById("progress-next1-fifth");

const progressNext21 = document.getElementById("progress-next2-first");
const progressNext22 = document.getElementById("progress-next2-second");
const progressNext23 = document.getElementById("progress-next2-third");

const steps = document.querySelectorAll(".register-info-left-steps-item-icon-circle");
const step_labels = document.querySelectorAll(".register-info-left-steps-item-label");
const step_label_header = document.querySelectorAll(".steps-label-header");
const step_label_description = document.querySelectorAll(".steps-label-description");
const steplist = document.querySelectorAll(".register-info-right");
const steplistDN = document.querySelectorAll("#DN");
const steplistDD = document.querySelectorAll("#DD");

let active = 1;

progressNext1.addEventListener("click", () => {
  active++;
  steps.forEach((item, i) => {
    item.style.opacity = 1;
    step_labels[i].style.opacity = 1;
    progressBar.style.opacity = 1;
    progressBarGray.style.opacity = 1;
    
    if (i < active) {
      item.classList.add("active");
    }
  });

  for (let index = 0; index < steplist.length; index++) {
    steplist[index].style.display = 'none';
  }
  steplistDN[0].style.display = "block";
  
  pos1 = steps[2].getBoundingClientRect().top;
  pos2 = steps[0].getBoundingClientRect().top;

  progressBar.style.height = (pos1 - pos2) + "px";
});

progressNext2.addEventListener("click", () => {
  active++;
  steps.forEach((item, i) => {
    if (i < active) {
      item.classList.add("active");
    }
  });
  steplistDN[0].style.display = "none";
  steplistDN[1].style.display = "block";
  pos1 = steps[3].getBoundingClientRect().top;
  pos2 = steps[0].getBoundingClientRect().top;
  progressBar.style.height = (pos1 - pos2) + "px";
});

progressNext3.addEventListener("click", () => {
  active++;
  steps.forEach((item, i) => {
    if (i < active) {
      item.classList.add("active");
    }
  });

  steplistDN[1].style.display = "none";
  steplist[5].style.display = "block";

  pos1 = steps[4].getBoundingClientRect().top;
  pos2 = steps[0].getBoundingClientRect().top;

  progressBar.style.height = (pos1 - pos2) + "px";
});

progressNext4.addEventListener("click", () => {
  active++;
  steps.forEach((item, i) => {
    if (i < active) {
      item.classList.add("active");
    }
  });

  steplist[5].style.display = "none";
  steplist[6].style.display = "block";
  
  pos1 = steps[5].getBoundingClientRect().top;
  pos2 = steps[0].getBoundingClientRect().top;

  progressBar.style.height = (pos1 - pos2) + "px";
});

progressNext5.addEventListener("click", () => {
  steplist.forEach((item, i) => {
    if (i == 7) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

progressNext21.addEventListener("click", () => {
  active++;
  steps.forEach((item, i) => {
    item.style.opacity = 1;
    step_labels[i].style.opacity = 1;
    progressBar.style.opacity = 1;
    progressBarGray.style.opacity = 1;
    step_label_header[0].textContent = "Norādiet e-pastu";
    step_label_description[0].textContent = "Turpmākai saziņai ar lietotāju tiks izmantots viņa e-pasts.";
    step_label_header[1].textContent = "Piekrišana noteikumiem";
    step_label_description[1].textContent = "Lai lietotu NPP platformu, Jums jāpiekrīt tās noteikumiem.";
    if (i < active) {
      item.classList.add("active");
    }
  });

  for (let index = 0; index < steplist.length; index++) {
    steplist[index].style.display = 'none';
  }
  steplistDD[0].style.display = "block";
  
  pos1 = steps[2].getBoundingClientRect().top;
  pos2 = steps[0].getBoundingClientRect().top;

  progressBar.style.height = (pos1 - pos2) + "px";
});

progressNext22.addEventListener("click", () => {
  active++;
  steps.forEach((item, i) => {
    if (i < active) {
      item.classList.add("active");
    }
  });
  steplistDD[0].style.display = "none";
  steplistDD[1].style.display = "block";
  pos1 = steps[3].getBoundingClientRect().top;
  pos2 = steps[0].getBoundingClientRect().top;
  progressBar.style.height = (pos1 - pos2) + "px";
});

progressNext23.addEventListener("click", () => {
  active++;
  steps.forEach((item, i) => {
    if (i < active) {
      item.classList.add("active");
    }
  });

  steplistDD[1].style.display = "none";
  steplist[5].style.display = "block";

  pos1 = steps[4].getBoundingClientRect().top;
  pos2 = steps[0].getBoundingClientRect().top;

  progressBar.style.height = (pos1 - pos2) + "px";
});

pos1 = steps[steps.length - 1].getBoundingClientRect().top;
pos2 = steps[0].getBoundingClientRect().top;
progressBarGray.style.height = (pos1 - pos2) + "px";
progressBarGray.style.opacity = 0;

pos1 = steps[1].getBoundingClientRect().top;
pos2 = steps[0].getBoundingClientRect().top;
progressBar.style.height = (pos1 - pos2) + "px";

steps.forEach((item, i) => {
  if (i != 0) {
    item.style.opacity = 0;
    step_labels[i].style.opacity = 0;
  }
});

steplist[0].style.display = "block";
