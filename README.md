TooltipJS - Un Tooltip en JavaScript Pur
📌 Description
TooltipJS est une bibliothèque légère en JavaScript pur permettant d'ajouter facilement des infobulles personnalisables à vos éléments HTML.

✨ Fonctionnalités
Aucune dépendance requise

Facile à intégrer et à utiliser

Personnalisation des styles via CSS

Gestion des événements hover et focus

🚀 Installation
Ajoutez simplement le fichier tooltip.js à votre projet :

html
Copier
Modifier
<script src="tooltip.js"></script>
<link rel="stylesheet" href="tooltip.css">
🎯 Utilisation
Ajoutez l'attribut data-tooltip à vos éléments :

html
Copier
Modifier
<button data-tooltip="Ceci est une infobulle !">Survolez-moi</button>
Puis, initialisez TooltipJS dans votre script :

js
Copier
Modifier
document.addEventListener("DOMContentLoaded", function () {
    TooltipJS.init();
});
⚙️ Personnalisation
Modifiez tooltip.css pour personnaliser l'apparence des infobulles :

css
Copier
Modifier
.tooltip {
    background-color: black;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
}
📜 Licence
Ce projet est sous licence MIT.
