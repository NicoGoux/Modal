let openModalButton = document.querySelector(".activate-modal-button");
let closeModalButton = document.querySelector(".close-button");
let modal = document.querySelector(".modal");

openModalButton.addEventListener("click", () => {
	modal.classList.add("show-modal");
});

closeModalButton.addEventListener("click", () => {
	modal.classList.remove("show-modal");
});
