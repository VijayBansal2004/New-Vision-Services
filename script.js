// file Upload

const inputFile = document.getElementById("file-upload");
const btn = document.getElementById("btn");

inputFile.addEventListener("change", () => {
  btn.classList.toggle("bg-primary");
  btn.style.color = "white";
});

// Hiding Container and showing success_container using Submit btn

// const success_container = document.getElementsByClassName(".success-container");
// const container = document.getElementsByClassName(".container");
// btn.addEventListener("click", () => {
//   if (btn.classList.contains("bg-success")) {
//     container.style.display = "none";
//     success_container.style.display = "flex";
//   }
// });

// Hiding success_container

// const cross = document.getElementById("cross");
// cross.addEventListener("click", () => {
//   success_container.style.display = "none";
// success_container.classList.toggle("none");
// });
const uploadProfile = document.getElementById("uploadProfile");

inputFile.onchange = function () {
  uploadProfile.src = URL.createObjectURL(inputFile.files[0]);
  uploadProfile.style.maxWidth = "100px";
  uploadProfile.style.borderRadius = "10px";
};
