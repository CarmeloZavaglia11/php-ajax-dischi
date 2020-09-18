<!-- Stampare a schermo una decina di dischi
musicali (vedi screenshot) in due modi diversi:
- Solo con l’utilizzo di PHP, che stampa
direttamente i dischi in pagina: al
caricamento della pagina ci saranno tutti
i dischi.                                                
- Attraverso l’utilizzo di AJAX: al
caricamento della pagina ajax chiederà
attraverso una chiamata i dischi a php e
li stamperà attraverso handlebars.                       <====****THIS****
Utilizzare: Html, Sass, JS, jQuery, handlebars,
Php
Opzionale:
- Attraverso un’altra chiamata ajax, filtrare
gli album per artista -->

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Dischi-Musicali</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="dist/app.css">
    </head>
    <body>
        <header>
            <div class="container">
                <img src="img/logo.png" alt="logo" />
            </div>
        </header>
        <div class="select">
            <ul>
                <li>Rock</li>
                <li>Pop</li>
                <li>Jazz</li>
                <li>Metal</li>
                <li class="selected">All</li>
            </ul>
        </div>

        <div class="cds-container container">
                      
        </div>

        <script id="entry-template" type="text/x-handlebars-template">
                    <div class="cd {{genre}} active">
                        <img src="{{poster}}" alt="{{title}}">
                        <h3>{{title}}</h3>
                        <span class="author">{{author}}</span>
                        <span class="year">{{year}}</span>
                    </div>
        </script> 
        

        <script src="dist/app.js" charset="utf-8"></script>
    </body>
</html>