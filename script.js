const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');

function openModal(card) {
  const title = card.querySelector('h2').innerText;
  const text = card.getAttribute('data-modal-text');

  // Récupère la couleur de fond de la card
  const cardBgColor = window.getComputedStyle(card).backgroundColor;

  modalTitle.innerText = title;
  modalText.innerText = text;

  // Applique la couleur au modal
  document.querySelector('.modal-content').style.backgroundColor = cardBgColor;

  modal.style.display = 'flex';
}




function closeModal() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if(event.target === modal) closeModal();
}
