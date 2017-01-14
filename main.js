$(document).ready(function () {
  // var $hiddenSection = $('.hidden');
  var $window = $(window);
  $window.on('scroll load', check_if_in_view);

  function check_if_in_view() {
    var windowHeight = $window.height();
    console.log('wysokosc okna'+windowHeight);
    var windowTopPosition = $window.scrollTop();
    // console.log('wspolrzedna gory okna'+windowTopPosition);
    var windowBottomPosition = (windowTopPosition + windowHeight);
    console.log('wspolrzedna dolu okna'+windowBottomPosition);
    console.error('</br>');


    if (windowBottomPosition === windowHeight+2) {
      $('.hidden').addClass('visible')
    }




  }

});



