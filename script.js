const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
const imgFile = document.querySelector(".img-file")
const filters = document.querySelector(".filters")
const removeBtn = document.querySelector(".remove-btn")


imgFile.addEventListener("input", (e) => {
  const input = e.target
  if (input.files && input.files[0]) {
    const blob = window.URL.createObjectURL(input.files[0])
    const myImage = new Image()
    myImage.src = blob
    console.log(ratio)
    myImage.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height) 
    };
 }
})
