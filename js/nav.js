// dropdown dektop nav
$('.dropdown-toggle').mouseenter(function() {
  $('.dropdown-menu').css('opacity', 1);
});

$('.dropdown-menu').mouseleave(function() {
  $('.dropdown-menu').css('opacity', 0);
});


// mobile toggle
$('.js-toggle-menu').click(function(e){
  e.preventDefault();
  $(this).toggleClass('open');
  $('.page-wrap').toggleClass('disabled');
  $('body').toggleClass('disabled');
});



  $('.open-terms-modal').click(function(e) {
    e.preventDefault();
    $('.terms-modal-container').fadeIn();
  });

  $('.open-help-modal').click(function(e) {
    e.preventDefault();
    $('.help-modal-container').fadeIn();
  });

  $('.close-button').click(function(e) {
    e.preventDefault();
    $('.modal-container').fadeOut();
  });
