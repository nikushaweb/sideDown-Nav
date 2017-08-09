// Code By Nikusha 2017 ^_^
$('#sideDown-menu').hide();
$('#navBtn').on('click', function(){
$(this).toggleClass('toggle');
$('#sideDown-menu').slideToggle('slow', function(){
    $(window).bind('resize', function(){
      if($(window).width() > 1024){
        $('#sideDown-menu').hide();
      }
    });
  });
});
