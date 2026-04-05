const firstCatalogCard = document.querySelector('.product-card');
const catalogCards = document.querySelectorAll('.product-card');

const recolorFirstCardButton = document.querySelector('#recolor-button');
const recolorAllCardButton = document.querySelector('#recolor-all-button');
const openGoogleButton = document.querySelector('#open-google-button');

recolorFirstCardButton.addEventListener('click', () => {
    if (firstCatalogCard.style.backgroundColor === 'blue') {
        firstCatalogCard.style.backgroundColor = '';
    } else {
        firstCatalogCard.style.backgroundColor = 'blue';
    }
});

recolorAllCardButton.addEventListener('click', () => {
    catalogCards.forEach(card => {
        if (card.style.backgroundColor === 'green') {
            card.style.backgroundColor = '';
        } else {
            card.style.backgroundColor = 'green';
        }
    });
});

catalogCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const title = card.querySelector('.product-card__title').textContent;
        console.log(title);
    });
});

openGoogleButton.addEventListener('click', () => {
    const userAgreed = confirm('Вы действительно хотите перейти на страницу Google?');
    if (userAgreed) {
        console.log('Переход в Google...');
        window.open('https://www.google.com', '_blank');
    } else {
        console.log('Переход отменен');
    }
});