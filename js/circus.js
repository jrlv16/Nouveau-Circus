$(document).ready(function() {
	
		var hauteur= $(window).height();

		if (hauteur < 700) {

				$('.menu').on('click','.introduce', function(){
				$('contenu:not(.introduce)').slideUp();
				$('.contenu').filter('.introduce').slideToggle()
				});

				$('.menu').on('click','.best', function(){
				$('.contenu:not(.best)').slideUp();
				$('.contenu').filter('.best').slideToggle();
				});

				$('.menu').on('click','.souvenir', function(){
					$('.contenu:not(.souvenir)').slideUp();
				$('.contenu').filter('.souvenir').slideToggle();
				});
				
				}	

			else {

			
			
		

	
				$('.menu').on('click','.introduce', function(){
				$('.contenu').filter('.introduce').slideDown()
				});
			$('.menu').on('mouseleave','.introduce', function(){
				$('.contenu').filter('.introduce').slideUp();
				});
			$('.menu').on('click','.best', function(){
				$('.contenu').filter('.best').slideDown();
				});
			$('.menu').on('mouseleave','.best', function(){
				$('.contenu').filter('.best').slideUp();
				});
			$('.menu').on('click','.souvenir', function(){
				$('.contenu').filter('.souvenir').slideDown();
				});
			$('.menu').on('mouseleave','.souvenir', function(){
				$('.contenu').filter('.souvenir').slideUp();
				});
			
			}
		
});