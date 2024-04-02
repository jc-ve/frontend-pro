"use strict";

const inputGroup = document.querySelector(".input-group");
const input = document.querySelector(".input");
const share = document.querySelector(".share");

const Toast = Swal.mixin({
  toast: true,
  icon: "success",
  color: "#ede9e2",
  background: "#1e1411",
  width: "12em",
  title: "Text copied successfully",
  showConfirmButton: false,
  position: "top-end",
  timer: 2000,
  target: share,
  customClass: {
    container: "position-absolute",
  },
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

inputGroup.addEventListener("click", () => {
  navigator.clipboard.writeText(input.value);
  Toast.fire();
});
