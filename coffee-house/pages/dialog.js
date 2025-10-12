//modal

const dialog = document.querySelector("dialog");
const modalButtons = document.querySelectorAll(".menu-item");
const closeModal = document.querySelector("dialog .dialog__text-container .close-button");

modalButtons.forEach((modalButton) => {
    modalButton.addEventListener("click", () => {
        dialog.showModal();
        dialog.classList.toggle("active");
        body.classList.toggle('wrapper-active');
    })
})

closeModal.addEventListener("click", () => {
    dialog.classList.toggle("active");
    body.classList.toggle('wrapper-active');
    dialog.close();
});

dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
        dialog.classList.toggle("active");
        body.classList.toggle('wrapper-active');
        dialog.close();
    }
})