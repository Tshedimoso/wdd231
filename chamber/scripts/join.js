
document.getElementById("timestamp").value = new Date().toISOString();


document.querySelectorAll("[data-modal]").forEach(button => {
  button.addEventListener("click", () => {
    const modal = document.getElementById(button.dataset.modal);
    modal.showModal();
  });
});


document.querySelectorAll(".close-modal").forEach(button => {
  button.addEventListener("click", (event) => {
    event.target.closest("dialog").close();
  });
});
