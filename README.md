<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - TooltipJS</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: auto;
            padding: 20px;
        }
        pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        code {
            color: #c7254e;
            background: #f9f2f4;
            padding: 2px 5px;
            border-radius: 3px;
        }
        h1, h2 {
            color: #333;
        }
    </style>
</head>
<body>

    <h1>TooltipJS - Un Tooltip en JavaScript Pur</h1>

    <h2>📌 Description</h2>
    <p><strong>TooltipJS</strong> est une bibliothèque légère en JavaScript pur permettant d'ajouter facilement des infobulles personnalisables à vos éléments HTML.</p>

    <h2>✨ Fonctionnalités</h2>
    <ul>
        <li>Aucune dépendance requise</li>
        <li>Facile à intégrer et à utiliser</li>
        <li>Personnalisation des styles via CSS</li>
        <li>Gestion des événements <code>hover</code> et <code>focus</code></li>
    </ul>

    <h2>🚀 Installation</h2>
    <p>Ajoutez simplement le fichier <code>tooltip.js</code> à votre projet :</p>
    <pre><code>&lt;script src="tooltip.js"&gt;&lt;/script&gt;
&lt;link rel="stylesheet" href="tooltip.css"&gt;</code></pre>

    <h2>🎯 Utilisation</h2>
    <p>Ajoutez l'attribut <code>data-tooltip</code> à vos éléments :</p>
    <pre><code>&lt;button data-tooltip="Ceci est une infobulle !"&gt;Survolez-moi&lt;/button&gt;</code></pre>
    
    <p>Puis, initialisez TooltipJS dans votre script :</p>
    <pre><code>document.addEventListener("DOMContentLoaded", function () {
    TooltipJS.init();
});</code></pre>

    <h2>⚙️ Personnalisation</h2>
    <p>Modifiez <code>tooltip.css</code> pour personnaliser l'apparence des infobulles :</p>
    <pre><code>.tooltip {
    background-color: black;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
}</code></pre>

    <h2>📜 Licence</h2>
    <p>Ce projet est sous licence <strong>MIT</strong>.</p>

</body>
</html>
