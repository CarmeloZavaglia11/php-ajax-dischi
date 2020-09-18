<!-- Stampare a schermo una decina di dischi
musicali (vedi screenshot) in due modi diversi:
- Solo con l’utilizzo di PHP, che stampa
direttamente i dischi in pagina: al
caricamento della pagina ci saranno tutti
i dischi.                                                <====****THIS****
- Attraverso l’utilizzo di AJAX: al
caricamento della pagina ajax chiederà
attraverso una chiamata i dischi a php e
li stamperà attraverso handlebars.
Utilizzare: Html, Sass, JS, jQuery, handlebars,
Php
Opzionale:
- Attraverso un’altra chiamata ajax, filtrare
gli album per artista -->

<?php 

    include 'db.php';

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Dischi-Musicali</title>
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

                <?php foreach ($albums as $album) {?>
                    <div class="cd <?php echo $album['genre'] ?> active">
                        <img src="<?php echo $album['poster'] ?>" alt="<?php echo $album['title'] ?>">
                        <h3><?php echo $album['title'] ?></h3>
                        <span class="author"><?php echo $album['author'] ?></span>
                        <span class="year"><?php echo $album['year'] ?></span>
                    </div>
                <?php } ?>
                          
        </div>
        

        <script src="dist/app.js" charset="utf-8"></script>
    </body>
</html>