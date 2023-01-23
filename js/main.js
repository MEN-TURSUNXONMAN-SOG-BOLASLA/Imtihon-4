let opBtn = document.querySelector(".opBtn")
let clBtn = document.querySelector(".clBtn")
let listJs = document.querySelector(".list-js")

opBtn.addEventListener("click", function() {
    opBtn.classList.add("open-cl");
    opBtn.classList.remove("open-btn")
    clBtn.classList.add("close-btn");
    clBtn.classList.remove("close-cl")
    listJs.classList.add("list")
    listJs.classList.remove("list-none")
})

clBtn.addEventListener("click", function() {
    opBtn.classList.remove("open-cl");
    opBtn.classList.add("open-btn")
    clBtn.classList.remove("close-btn");
    clBtn.classList.add("close-cl")
    listJs.classList.remove("list")
    listJs.classList.add("list-none")
})