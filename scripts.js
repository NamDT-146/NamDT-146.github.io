

const button = document.getElementById("button1");

button.addEventListener("mouseover", function() {
  this.textContent = "NO";
});

button.addEventListener("mouseout", function() {
  this.textContent = "YES";
});



