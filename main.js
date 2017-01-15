$(document).ready(function () {
  var $window = $(window);
  $window.on('scroll load', check_if_in_view);

  function check_if_in_view() {
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);


    if (windowBottomPosition > windowHeight && windowBottomPosition < windowHeight*2 ) {
      $('.aboutMe').stop().css({
        marginRight: 0})
    } else {
      $('.aboutMe').stop().css({
          marginRight: -250})
    }
    if (windowBottomPosition > windowHeight*2 && windowBottomPosition < windowHeight*3 ) {
      $('.education').stop().css({
          marginLeft: 0})
    } else {
      $('.education').stop().css({
          marginLeft: -250})
    }
    if (windowBottomPosition > windowHeight*3 && windowBottomPosition < windowHeight*4 ) {
      $('.skills').stop().css({
          marginRight: 0})
    } else {
      $('.skills').stop().css({
          marginRight: -250})
    }
  }
});
