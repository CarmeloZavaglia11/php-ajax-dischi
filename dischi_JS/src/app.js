$(document).ready(function() {

	$('.select ul li').click(function(){

		$('.select ul li').removeClass('selected');

		$(this).addClass('selected');

		$('.cd').removeClass('active');

		var genre = $(this).text();

		if (genre == 'All') {
			$('.cd').addClass('active')
		}  else {
			$('.cd.' + genre).addClass('active');
		}

    });

	// CHIAMATA AJAX GET CD

	$.ajax(
		{
			url: 'http://localhost/php/04/php-ajax-dischi/dischi_JS/db.php',
			method: "GET",
			success: function (data) {
				for (let i = 0; i < data.length; i++) {
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

});