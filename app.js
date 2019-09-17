/* inscription service worker */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
  .then(function() {
    console.log("SW inscrit");
  });
}
/* switch.js est le fichier qui va donner les infos de traitement au worker*/

/* gestion affichage menu */
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
