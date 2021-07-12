hidePopup();

$('#header-slider').slick();


$('#any-object-slider').slick({
	appendArrows: $('#any-object-btn'),
	slidesToShow: 2,
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><</button>',
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button">></button>',
	infinite: false,
	variableWidth: true,
	autoplay:true,
  	autoplaySpeed:3000,
});

$('#different-walls-slider').slick({
	appendArrows: $('#different-walls-btn'),
	slidesToShow: 2,
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><</button>',
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button">></button>',
	infinite: false,
	variableWidth: true,
	autoplay:true,
  	autoplaySpeed:3000,
});

$('#standard-project-slider').slick({
	appendArrows: $('#standard-project-btn'),
	slidesToShow: 2,
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><</button>',
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button">></button>',
	infinite: false,
	variableWidth: true,
	autoplay:true,
  	autoplaySpeed:3000,
});

$('#photo-list-slider').slick({
	appendArrows: $('#nav-block-btn'),
	slidesToShow: 3,
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><</button>',
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button">></button>',
	infinite: false,
	variableWidth: true,
	autoplay:true,
  	autoplaySpeed:3000,
});

$('#masters-slider').slick({
	appendArrows: $('#masters-slider-btn'),
	slidesToShow: 3,
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><</button>',
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button">></button>',
	infinite: false,
	variableWidth: true,
	autoplay:true,
  	autoplaySpeed:3000,
});

$('#services-slider').slick({
	appendArrows: $('#services-btn'),
	slidesToShow: 2,
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><</button>',
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button">></button>',
	infinite: false,
	variableWidth: true,
	autoplay:true,
  	autoplaySpeed:3000,
});

$('#hacks-slider').slick({
	appendArrows: $('#hacks-btn'),
	slidesToShow: 2,
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><</button>',
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button">></button>',
	infinite: false,
	variableWidth: true,
	autoplay:true,
  	autoplaySpeed:3000,
});

$('#questions-slider').slick({
	appendArrows: $('#questions-btn'),
	slidesToShow: 2,
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><</button>',
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button">></button>',
	infinite: false,
	variableWidth: true,
	autoplay:true,
  	autoplaySpeed:3000,
});
$('#finished-work-slider').slick({
	appendArrows: $('#finished-work-btn'),
	slidesToShow: 1,
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><</button>',
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button">></button>',
	infinite: false,
	variableWidth: true,
	autoplay:true,
  	autoplaySpeed:3000,
});

$('.finished-work-item-slider').slick({
	dots: true,
	arrows: false,
  	fade: true,
	slidesToShow: 1,
	infinite: false,
	autoplay:true,
  	autoplaySpeed:3000,
});

$('.header-slider-block').slick({
	dots: true,
	arrows: false,
  	fade: true,
	slidesToShow: 1,
	infinite: false,
	autoplay:true,
  	autoplaySpeed:3000,
});


// калькулятор 

$('.roset .minus').click( function() {
	$('.roset input').attr('value', +$('.roset input').attr('value') - 1);
})
$('.roset .plus').click( function() {
	$('.roset input').attr('value', +$('.roset input').attr('value') + 1);
})


$('.switches .minus').click( function() {
	$('.switches input').attr('value', +$('.switches input').attr('value') - 1);
})
$('.switches .plus').click( function() {
	$('.switches input').attr('value', +$('.switches input').attr('value') + 1);
})


$('.chandeliers .minus').click( function() {
	$('.chandeliers input').attr('value', +$('.chandeliers input').attr('value') - 1);
})
$('.chandeliers .plus').click( function() {
	$('.chandeliers input').attr('value', +$('.chandeliers input').attr('value') + 1);
})


$('.point-of-light .minus').click( function() {
	$('.point-of-light input').attr('value', +$('.point-of-light input').attr('value') - 1);
})
$('.point-of-light .plus').click( function() {
	$('.point-of-light input').attr('value', +$('.point-of-light input').attr('value') + 1);
})


$('.I-roset .minus').click( function() {
	$('.I-roset input').attr('value', +$('.I-roset input').attr('value') - 1);
})
$('.I-roset .plus').click( function() {
	$('.I-roset input').attr('value', +$('.I-roset input').attr('value') + 1);
})


$('.rubbed-reg .minus').click( function() {
	$('.rubbed-reg input').attr('value', +$('.rubbed-reg input').attr('value') - 1);
})
$('.rubbed-reg .plus').click( function() {
	$('.rubbed-reg input').attr('value', +$('.rubbed-reg input').attr('value') + 1);
})

$('.questions-item p').hide();
// $('.questions-item-dot').addClass();

$('.questions-item-line').click( function () {

	var tempThis = $(this);

	tempThis.siblings('p').slideToggle(300);

	if (!tempThis.find('div').hasClass('open')) {
		tempThis.find('div').css({transition: ".4s", transform: "rotate(0deg)"});
		tempThis.find('div').addClass('open');
	} else if (tempThis.find('div').hasClass('open')) {
		tempThis.find('div').css({transition: ".4s", transform: "rotate(-90deg)"});
		tempThis.find('div').removeClass('open');
	}
});

// popup



function showPopup() {
	$('#popap').show();
	$("body").css("overflow","hidden"); 
}
function hidePopup() {
	$('#popap').hide();
	$("body").css("overflow","auto"); 
}

// плавное перемещение страницы к нужному блоку 
$("#nav li a").click(function () { 
	elementClick = $(this).attr("href"); 
	destination = $(elementClick).offset().top; 
	$("body,html").animate({scrollTop: destination }, 800); 
});
