window.onload = () => {
  setTimeout(() => {
    document.querySelector('.loading').style.display = 'none';

    for (const child of document.querySelector('body').children) {
      if (child.tagName !== 'SCRIPT' && child.className !== "loading") {
        child.style.display = 'block';
      }
    } 

    document.querySelector('main').classList.add('profile-section');

  }, 200);
}
