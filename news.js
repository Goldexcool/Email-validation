var btn = document.getElementById("btn");
var error = document.querySelector(".errormess")
var pop = document.querySelector(".popup")
var section = document.querySelector(".section")
// var popWrapper = document.querySelector(".pop_wrapper")
var openup = document.querySelector(".open")
var button = document.querySelector(".popup_btn")
btn.addEventListener("click", function (e) {
    e.preventDefault()
    var valid = document.getElementById("validemail").value

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valid)) {
   pop.classList.add("up")
   section.classList.add("rem")
    return true;
  } else {
    error.classList.add("error")
    return false;
  }
});

button.addEventListener("click", function(e){
    e.preventDefault()
    pop.classList.remove("up")
    section.classList.remove("rem")
})

