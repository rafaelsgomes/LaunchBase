const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (card of cards) {
    const cardId = card.getAttribute('id')
    card.addEventListener('click', () => {
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${cardId}`
    })
}

document.querySelector('.modal-open').addEventListener('click', () => {
    modal.classList.toggle('maxmize')
})

document.querySelector('.modal-close').addEventListener('click', () => {
    modalOverlay.classList.remove('active')
    modal.classList.remove('maxmize')
})