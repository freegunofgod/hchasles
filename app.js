document.addEventListener('click', afficherMenu);
document.addEventListener('touchend', afficherMenu);

function afficherMenu() {
	var menu = document.querySelector('header nav');

  console.log( event.target.matches("header") );

  if( event.target.matches(".menu-burger") || event.target.matches("header nav") ) {
    menu.classList.add('active');
  }
  else {
    menu.classList.remove('active');
  }

};
