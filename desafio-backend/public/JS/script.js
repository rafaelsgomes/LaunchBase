const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (card of cards) {
    const cardId = card.getAttribute('id')
    card.addEventListener('click', () => {
        window.location.href = `/course/${cardId}`
    })
}