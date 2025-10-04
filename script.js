//your JS code here. If required.
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeModal');

openBtn.onclick = () => {
    modal.classList.add('show');
};

closeBtn.onclick = () => {
    modal.classList.remove('show');
};

// Click outside modal-content to close
window.onclick = (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
};
