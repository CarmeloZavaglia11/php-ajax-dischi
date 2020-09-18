$(document).ready(function() {

	$('.select ul li').click(function(){

		$('.select ul li').removeClass('selected');

		$(this).addClass('selected');

		$('.cd').removeClass('active');

		var genre = $(this).text();

		// if (genre == 'All') {
		// 	$('.cd').addClass('active')
		// }  else {
		// 	$('.cd.' + genre).addClass('active');
		// }

		ajaxGenre(genre);

	});	

	// CHIAMATA AJAX GET CD

	ajaxCd();

	// SETTO LA SELECT A GENERI

	$('.options select').val('Genere');

	

	
});

function ajaxCd() {

	$.ajax(
		{
			url: 'http://localhost/php/04/php-ajax-dischi/dischi_JS/db.php',
			method: "GET",
			success: function (data) {
				for (let i = 0; i < data.length; i++) {

					var source = $("#authors").html();
	                var template = Handlebars.compile(source);
					var context = {'author': data[i].author};
					var html = template(context);
					$('.select_2 ul').append(html)		

					var source = $("#entry-template").html();
	                var template = Handlebars.compile(source);
					var context = data[i];
					var html = template(context);
					$('.cds-container').append(html)					
				}
			},
			error: function (errori) {
				alert("ERRORE!: " + errori);
			}
		}
	);

}

function ajaxAuthors(autore) {
	$.ajax(
		{
			url: 'http://localhost/php/04/php-ajax-dischi/dischi_JS/db.php',
			method: "GET",
			success: function (data) {
				
				for (let i = 0; i < data.length; i++) {	



					if (data[i].author == autore) {
						var source = $("#entry-template").html();
						var template = Handlebars.compile(source);
						var context = data[i];
						var html = template(context);
						$('.cds-container').append(html);
					}

					

				}
			},
			error: function (errori) {
				alert("ERRORE!: " + errori);
			}
		}
	);
}

function ajaxGenre(genere) {
	$.ajax(
		{
			url: 'http://localhost/php/04/php-ajax-dischi/dischi_JS/db.php',
			method: "GET",
			success: function (data) {
				
				for (let i = 0; i < data.length; i++) {	



					if ((data[i].genre == genere) || (genere == 'All')) {
						var source = $("#entry-template").html();
						var template = Handlebars.compile(source);
						var context = data[i];
						var html = template(context);
						$('.cds-container').append(html);
					}

					

				}
			},
			error: function (errori) {
				alert("ERRORE!: " + errori);
			}
		}
	);
}

	// CHIAMATA AJAX GET AUTHORS

	$(document).on('click','.select_2 ul li',function() {

		$('.cds-container').empty();

		$('.select_2 ul li').removeClass('selected');

		$(this).addClass('selected');

		var authorSelected = $(this).text();

		ajaxAuthors(authorSelected);


	});

	// OPZIONI SCELTA

	$('.options select').click(function() {

		if ($(this).val() == 'Genere') {
			$('.select').addClass('active');
			$('.select_2').removeClass('active');
		} else if ($(this).val() == 'Autore'){
			$('.cds-container').empty();
			$('.select_2').addClass('active');	
			$('.select').removeClass('active');		
		}	

	});

	
