let counter = 0;

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").onclick = count;
});

function count() {
  counter++;

  if (counter % 5 === 0) {
    alert("SEAL would like to thank you for the food 🥙");
  }

  document.querySelector(".counter").innerHTML = counter;
}
