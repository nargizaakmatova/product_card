const recolorFirstCardButton = document.getElementById('recolor-button');
const firstCatalogCard = document.querySelector('.product-card');
const blueHashColor = "#0000ff";

recolorFirstCardButton.addEventListener('click', ()=>{
  firstCatalogCard.style.backgroundColor = blueHashColor;
});

const greenHashColor = '#00ff44';

const catalogCards = document.querySelectorAll('.product-card');
const recolorAllCardButton = document.getElementById('recolor-all-button');

recolorAllCardButton.addEventListener('click', ()=>{
    catalogCards.forEach(
    card => card.style.backgroundColor = greenHashColor) })
  const googleOpenButton = document.getElementById('open-google-button');
  googleOpenButton.addEventListener('click', openGoogle)
  function openGoogle() {
    const answer = confirm('Вы действительно хотите перейти на сайт Google?')
    if (answer === true) {
      window.open('https://google.com');
    }
  }
