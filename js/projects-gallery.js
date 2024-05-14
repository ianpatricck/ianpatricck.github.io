const itemsWrapper = document.querySelectorAll(".content_gallery_items_wrapper");

// Opacidade de todos os textos dos cards de projetos zerada
itemsWrapper.forEach(itemWrapper => {
  itemWrapper.children[1].children[0].style.opacity = 0;
  itemWrapper.children[1].children[1].style.opacity = 0;
});

itemsWrapper.forEach(itemWrapper => {

  // Opacidade das imagens em 20% e opacidade dos textos em 100%
  itemWrapper.addEventListener("mouseover", (event) => {
    event.currentTarget.children[0].style.opacity = .2; 
    event.currentTarget.children[0].style.transition = ".5s"; 

    event.currentTarget.children[1].children[0].style.opacity = 1;
    event.currentTarget.children[1].children[1].style.opacity = 1;
  });

  // Opacidade das imagens em 100% e opacidade dos textos em 0%
  itemWrapper.addEventListener("mouseout", (event) => {
    event.currentTarget.children[0].style.opacity = 1; 
    event.currentTarget.children[1].children[0].style.opacity = 0;
    event.currentTarget.children[1].children[1].style.opacity = 0;
  });

});

