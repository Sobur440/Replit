let Ham1 = document.querySelector(".hamburger")
let Ham2 = document.querySelector(".ham2")
let barOpen = document.querySelector(".bar-open")
let codeBox = document.querySelector(".code")


Ham1.addEventListener("click", show)
Ham2.addEventListener("click", disappear)
barOpen.addEventListener("click", poof)


let num = 0

function show() {
  barOpen.classList.add("active")
}

function disappear() {
  barOpen.classList.remove("active")
}

function poof() {
  barOpen.classList.remove("active")
}
