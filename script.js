const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
const imgFile = document.querySelector(".img-file")
const filters = document.querySelector(".filters")
const removeBtn = document.querySelector(".remove-btn")


imgFile.addEventListener("input", (e) => {
  console.log(e.target.value)
})
