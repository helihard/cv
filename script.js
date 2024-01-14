const container = document.querySelector("#container");
container.style.display = "none";

function validatePassword() {
  const form = document.querySelector("form");
  const userInput = document.querySelector("#pass").value;
  const myPassword = "fr33P4l3s7!n3";
  if (userInput === myPassword) {
    container.style.display = "block";
    form.style.display = "none";
  }
}

function displayMainContent(event, contentNameID) {
  let mainContentFull = document.querySelectorAll(".main-content-full");
  for (let i = 0; i < mainContentFull.length; i++) {
    mainContentFull[i].style.display = "none"
  }
  let mainContentTabs = document.querySelectorAll(".main-content-tab");
  for (let i = 0; i < mainContentTabs.length; i++) {
    mainContentTabs[i].classList.remove("active");
  }
  document.getElementById(contentNameID).style.display = "block";
  event.currentTarget.classList.add("active");
}
