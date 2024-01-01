const headerContainerCard = document.getElementById('header_container_card'); 
const headerContainerCardItems = document.getElementById('card_items'); 
const headerContainerToggle = document.getElementById('header_container_toggle');

var toggleHeaderContainerCard = false;
var toggleHeaderContainerToggle = false;

headerContainerCardItems.classList.add('toggle-card_items-off');

headerContainerToggle.addEventListener('click', () => {

  toggleHeaderContainerToggle = !toggleHeaderContainerToggle;
  toggleHeaderContainerCard = !toggleHeaderContainerCard;

  if (toggleHeaderContainerToggle) {
    headerContainerToggle.classList.remove('toggle-arrow-off');
    headerContainerToggle.classList.add('toggle-arrow-on');
  } else {
    headerContainerToggle.classList.remove('toggle-arrow-on');
    headerContainerToggle.classList.add('toggle-arrow-off');
  }

  if (toggleHeaderContainerCard) {
    headerContainerCard.classList.remove('toggle-card-off');
    headerContainerCard.classList.add('toggle-card-on');
    
    headerContainerCardItems.classList.remove('toggle-card_items-off');
    headerContainerCardItems.classList.add('toggle-card_items-on');

  } else {
    headerContainerCard.classList.remove('toggle-card-on');
    headerContainerCard.classList.add('toggle-card-off');

    headerContainerCardItems.classList.remove('toggle-card_items-on');
    headerContainerCardItems.classList.add('toggle-card_items-off');
  }

});


