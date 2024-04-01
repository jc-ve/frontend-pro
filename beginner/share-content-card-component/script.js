"use strict";

const inputGroup = document.querySelector(".input-group");
const input = document.querySelector(".input");

// const Toast = Swal.mixin({
//   toast: true,
//   icon: "success",
//   title: "Text copied successfully",
//   showConfirmButton: false,
//   timer: 2000,
//   didOpen: (toast) => {
//     toast.onmouseenter = Swal.stopTimer;
//     toast.onmouseleave = Swal.resumeTimer;
//   },
// });

inputGroup.addEventListener("click", () => {
  navigator.clipboard.writeText(input.value);

  // Toast.fire({
  //   target: document.querySelector(".share"),
  //   position: "top-end",
  //   customClass: {
  //     container: "share",
  //   },
  // });
});

input.addEventListener("click", () => {
  navigator.clipboard.writeText(input.value);
});
