document.getElementById("timestamp").value = new Date().toISOString();

document.querySelectorAll("[data-modal]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.modal).showModal();
  });
});
