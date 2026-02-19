export function setupModal(modal, id) {
    modal.innerHTML = `
        <h2>Program Details</h2>
        <p>You selected program ID: ${id}</p>
        <button id="closeModal">Close</button>
    `;
    modal.showModal();
    document.querySelector("#closeModal").addEventListener("click", () => {
        modal.close();
    });
}
