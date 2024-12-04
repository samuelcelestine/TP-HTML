<!DOCTYPE html>
<!--Langue du site internet défini sur le français-->
<html lang="fr">
<head>
    <!--Feuille de style w3-school-->
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <!--Feuille de style css du site Internet-->
    <link rel="stylesheet" href="CJJK.css">
    <!--Favicon du site Internet-->
    <link rel="icon" type="image/vnd.png" href="https://static.tvtropes.org/pmwiki/pub/images/jujutsu_logo.png">
    
<!--Permet d'utiliser tout les caractères spéciaux et utiliser sur plusieurs navigateurs.-->
<meta charset="utf-8">
<meta name="description" content="Site Internet créer par CELESTINE Samuel & DIAZ Gwenn sur l'animé et le manga Jujutsu Kaisen. Nous allons vous montrez plusieurs aspect de l'oeuvre ainsi que nos connaissances en html css.">
<!--Permet que le site soit responsive.-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Accueil Jujutsu Kaisen</title>
<link id="jjk-style" rel="stylesheet" href="jjk.css">
</head>
<body>
    <div id="top"></div>
    <!--Créer une barre de navigation au dessus de la page internet. C'est le menu.-->
    <div class=" coucou barre barrep">
        <a href="Accueil_JJK.html" class="hautpage w3-center">Accueil</a>
        <a href="#" class="hautpage w3-center">Synopsis</a>
        <a href="#" class="hautpage w3-center">Anime</a>
        <a href="#" class="hautpage w3-center">Manga</a>
        <a href="#" class="hautpage w3-center">Film</a>
        <a href="jjk2.css" id="autre-style" class="w3-right">
            <img 
            src="https://static.tvtropes.org/pmwiki/pub/images/jujutsu_logo.png" 
            alt="Bouton pour changer de thème" 
            title="Changez de thème"
            class="theme">
        </a>
        <script src="jjkstyle.js"></script>
    </div>


<!-- Page de présentation à partir d'ici -->
<h1 class="w3-center mega-giant-text w3-hide-small w3-hide-medium w3-cursive titreg">Accueil Jujutsu Kaisen</h1>
<!-- Responsive Telephone tablette --> 
<h1 class="w3-center mega-giant-text w3-hide-medium w3-hide-large w3-cursive titreg">Accueil Jujutsu Kaisen</h1>
<h1 class="w3-center mega-giant-text w3-hide-small w3-cursive w3-hide-large titreg">Accueil Jujutsu Kaisen</h1>

<p class="w3-center coucou1">
    <b>
        Nous sommes des étudiants en première année de BUT Informatique à l'IUT Aix-Marseille. 
        Nous avons créé un site internet sur le thème de Jujutsu Kaisen.
        Ce site mettra également en avant nos compétences en HTML et CSS. 
        Le site respectera tous les critères de notation et proposera, à la fin, un quiz pour évaluer votre compréhension des différentes pages du site.
    </b>
</p>
<p class="w3-center coucou1">
    <b>
        Nous allons vous laisser découvrir le trailer de la saison 1 de Jujutsu Kaisen avant de commencer notre présentation.
    </b>
</p>

<!--<div class="alignvideo">
    <video controls>
        <source src="https://youtu.be/Xz5bOFNbjnI?si=eI_4Q22DRj3iPHtp" 
        type="video/url">
        <p>
            Malheureusement, tu ne peux pas visionner cette vidéo.
        </p>
    </video>
</div>-->
<div class="alignvideo">
    <iframe  
        src="https://www.youtube.com/embed/Xz5bOFNbjnI" 
        title="JJK Trailer" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
    </iframe>
</div>

<div class="coucou w3-content">
    <p class="w3-center">
        <b>
            Voici désormais les informations de notre IUT :
        </b>
    </p>
        <ul>
            <li>
                <a href="https://iut.univ-amu.fr/fr/formations/bachelor-universitaire-de-technologie/but-informatique/but-info-aix">Département Informatique</a>
            </li>    
            <li>
                <a href="https://www.instagram.com/iutaixmars/">Instagram IUT Aix-Marseille</a>
            </li>       
            <li>
                <a href="https://mickael-martin-nevot.com/">Site du professeur Mickael Martin-Nevot</a>
            </li>           
            <li>
                <a href="https://ens.casali.me/">Site du professeur Alain Casali</a>
            </li>
        </ul>
</div>

<br> 

    <!--Un ancrage pour remonter tout en haut de la page.-->
    <a href="#top">
        <img 
            src="https://cdn-icons-png.flaticon.com/512/6364/6364313.png" 
            alt="Bouton pour aller en haut"
            title="Remonter en haut"
            class="ancrage">
    </a>

    <!-- Une barre en bas de la page avec nos informations-->
    <div class="w3-container w3-center baspage">
        <h5>
            <b><a href="mailto:samuel.celestine@etu.univ-amu.fr">CELESTINE Samuel</a> & <a href="mailto:gwenn.diaz@etu.univ-amu.fr">DIAZ Gwenn</a>
            </b>
        </h5>
        <p>
            <u>© 2024-2025 - Tout droit réservé.</u>
        </p>
    </div>
</body>
</html>
