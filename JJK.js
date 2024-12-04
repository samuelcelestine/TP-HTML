// Fonction pour changer le thème
document.getElementById('autre-style').addEventListener('click', function (e) {
  e.preventDefault();
  const themeLink = document.getElementById('jjk-style');
  
  // Vérifier le thème actuel et basculer
  if (themeLink.getAttribute('href') === 'CJJK.css') {
    themeLink.setAttribute('href', 'CJJK2.css');  // Change vers le thème alternatif
    localStorage.setItem('theme', 'CJJK2.css');  // Enregistrer le thème choisi dans localStorage
  } else {
    themeLink.setAttribute('href', 'CJJK.css');  // Revenir au thème par défaut
    localStorage.setItem('theme', 'CJJK.css');  // Enregistrer le thème choisi dans localStorage
  }
});

// Appliquer le thème sauvegardé lors du chargement de la page
window.addEventListener('load', function () {
  const savedTheme = localStorage.getItem('theme');  // Lire le thème sauvegardé
  
  if (savedTheme) {
    document.getElementById('jjk-style').setAttribute('href', savedTheme);  // Appliquer le thème sauvegardé
  }
});
