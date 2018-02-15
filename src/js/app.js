$(document).ready(function() {
  function heightDetect() {
    if($(window).width() < 727) {
    	 $('.info').height(250);
    	 $('.info__text').css({'top': '70px', 'text-align': 'center'});
    	 $('.info').css({'opacity': '0','z-index': '-1'});
    }
    else if ($(window).width() < 960) {$('.info__text').css('top', '120px');
    				$('.info').height($('.content').height());
    				$('.info').css({'opacity': '1','z-index': '1'});
    }
    else{ $('.info').height($('.content').height());
    			$('.info__text').css({'top': '200px', 'text-align': 'left'});
    			$('.info').css({'opacity': '1','z-index': '1'});
  	};
  	if ($(window).height() > $('body').height()) {
  		$('.container').height($('.container').height() + $(window).height() - $('body').height());
  	};
  };
  heightDetect();
  $(window).resize(function() {
  	heightDetect();
  	if ($(window).width() < 720) {$('.line').css('display', 'none');}
  	else {$('.line').css('display', 'block');};
  });
  $(window).resize(function() {
  	lineWidth();
  });
  function lineWidth() {
  	var linksWidth = [],
  			counter = 0;  
  	$('.content__link').each(function() {
  		linksWidth.push($(this).width());	
  	});
  	$('.line').each(function() {
  		$(this).width($('.content__list').width() - linksWidth[counter] - 35);
  		counter++;
  	});
  	if ($(window).width() < 720) {$('.line').css('display', 'none');}
  	else {$('.line').css('display', 'block');};	
  };
  lineWidth();
  function eventClick() {
  	$('.content__link').on('click', function(e) {
  		e.preventDefault();
  		if ($(window).width() < 720) {$('.info').css({'opacity': '1','z-index': '1'});};
  		$('.content__link').each(function() {
  			if ($(this).hasClass('active')) {
  				$(this).removeClass('active');
  				$(this).siblings('.line').removeClass('show');

  			};
  		});
  		$(this).toggleClass('active');
  		$(this).siblings('.line').toggleClass('show');
  		$('.close').addClass('show');
  		$('.info').addClass('dark');

  		var data = $(this).data('info');
  		$('.info__text').each(function() {
  			if($(this).data('info') === data) {
  				$(this).addClass('show');
  			}	
  			else {$(this).removeClass('show');}
  		});
  	});
  };
  eventClick();

  function closeButton() {
  	$('.close').on('click', function() {
  		if ($(window).width() < 720) {$('.info').css({'opacity': '0','z-index': '-1'});};
  		$('.content__link').removeClass('active');
  		$('.line').removeClass('show');
  		$('.info').removeClass('dark');
  		$('.close').removeClass('show');
  		$('.info__text').removeClass('show');
  	});
  };
  closeButton();

  function menu() {
  	if($(window).width() < 860) {
  		$('.menu').removeClass('hidden');
  		$('.nav').addClass('small');
  		$('.nav').height($(window).height());
  	}
  	else {
  		$('.menu').addClass('hidden');
  		$('.nav').removeClass('small');
  	};
  	$(window).resize(function() {
  		if ($(window).width() < 860 && $('.menu').hasClass('hidden')) {
  			$('.menu').removeClass('hidden');
  			$('.nav').addClass('small');
  			$('.nav').height($(window).height());	
  		}
  		else if ($(window).width() > 860 && !$('.menu').hasClass('hidden')) {
  			$('.menu').addClass('hidden');
  			$('.nav').removeClass('small');	
  			$('.nav').css('height', '');
  		};
  	});
  	$('.menu').on('click', function() {
  		$('.menu span').toggleClass('open');
  		if($('.menu span').hasClass('open')) {
  			$('.nav').css('right', '0');
  		}		
  		else{
  			$('.nav').css('right', '-50%');
  		}
  	});
  };
  menu();
  if ($(window).height() > $('body').height()) {
  		$('.container').height($('.container').height() + $(window).height() - $('body').height());
 	};  
});
