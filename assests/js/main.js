//------ DrowpDown Mode Buttom-------
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches("nav__dropdown-btn")) {
    var nav__dropdown = document.getElementsByClassName(
      "nav__dropdown-content"
    );
    var i;
    for (i = 0; i < nav__dropdown.length; i++) {
      var openDropdown = nav__dropdown[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//------ Menu Item Active-------
var btnContainer = document.getElementById("mainmenu");
var btns = btnContainer.getElementsByClassName("navbar__menu--links");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
