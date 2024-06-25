const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});

 // JavaScript function to handle category selection
 function selectCategory(category) {
  alert("Selected category: " + category);
   // You can perform additional actions here based on the selected category
 }



function search_book() {
  let input = document.getElementById('input').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('items');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "list-item";
    }
  }
}
