
const toggleCardMobile = () => {
  let toggleToMobileBtn = document.querySelector(".navbar_container__toggle");
  let cardMobile = document.querySelector(".navbar_container_card-mobile");

  if (toggleToMobileBtn.classList.contains("toggle-isoff")) {
    toggleToMobileBtn.classList.remove("toggle-isoff");
    toggleToMobileBtn.classList.add("toggle-ison");
  } else if (toggleToMobileBtn.classList.contains("toggle-ison")) {
    toggleToMobileBtn.classList.remove("toggle-ison");
    toggleToMobileBtn.classList.add("toggle-isoff");
  }

  if (cardMobile.classList.contains("toggle-card-mobile-off")) {
    cardMobile.classList.remove("toggle-card-mobile-offset");
    cardMobile.classList.remove("toggle-card-mobile-off");
    cardMobile.classList.add("toggle-card-mobile-on");
  } else if (cardMobile.classList.contains("toggle-card-mobile-on")) {
    cardMobile.classList.remove("toggle-card-mobile-on");
    cardMobile.classList.add("toggle-card-mobile-off");

    setTimeout(() => {
      cardMobile.classList.add("toggle-card-mobile-offset");
    }, 1400);

  } 

}

