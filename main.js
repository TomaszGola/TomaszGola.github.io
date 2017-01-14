$(document).ready(function () {
  var $hiddenSection = $('.hidden');
  var $window = $(window);
  $window.on('scroll load', check_if_in_view);

  function check_if_in_view() {
    var windowHeight = $window.height();
    console.log('wysokosc okna'+windowHeight);
    var windowTopPosition = $window.scrollTop();
    console.log('wspolrzedna gory okna'+windowTopPosition);
    var windowBottomPosition = (windowTopPosition + windowHeight);
    console.log('wspolrzedna dolu okna'+windowBottomPosition)
    console.error('dupa');

    $.each($hiddenSection, function() {
      var $element = $(this);
      var elementHeight = $element.outerHeight();
      var elementTopPosition = $element.offset().top;
      var elementBottomPosition = (elementTopPosition + elementHeight);

      //check to see if this current container is within viewport
      if ((elementBottomPosition >= windowTopPosition) &&
        (elementTopPosition <= windowBottomPosition)) {
        $element.toggleClass('visible');
      } else {
        // $element.removeClass('in-view');
      }
    });
  }
});
