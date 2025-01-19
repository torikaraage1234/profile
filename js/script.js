$(function(){
  $('#main-visual').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  arrows: false,
  });

  $('#headertitle').on('mouseover', function(){
    $(this).animate({
      opacity: 0.5,
    }, 100);
  });

  $('#headertitle').on('mouseout', function(){
    $(this).animate({
      opacity: 1,
    }, 100);
  });

  $('.nav-content').on('mouseover', function(){
    $(this).animate({
      opacity: 0.5,
    }, 100);
  });

  $('.nav-content').on('mouseout', function(){
    $(this).animate({
      opacity: 1,
    }, 100);
  });

  $(window).scroll(function(){
    const backBtn = document.scrollingElement.scrollTop;
    if (backBtn >= 100) {
      $('#top').fadeIn();
    } else {
      $('#top').fadeOut();  
    }
  });


  $('a[href^="#"]').on('click', function(){
    const href = $(this).attr('href'); 

    if (href == '#') {
      $target = $('html');
    } else {
      $target = $(href);
    }
      const position = $target.offset().top;
      $('html, body').animate({ 'scrollTop': position }, 500, 'swing');
      return false;
  });

  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();

    const aboutposition = $('#about').offset().top;
    const worksposition = $('#works').offset().top;

    if (scrollAmount > aboutposition - windowHeight + 150){
      $('#about').removeClass('fadeout');
      $('#about').addClass('fadein');
    }

    if (scrollAmount > worksposition - windowHeight + 150){
      $('#works').removeClass('fadeout');
      $('#works').addClass('fadein');
    }
  });

  $('.workimage').on('click', function(){
    const imgsrc = $(this).attr('src');
    const imgalt = $(this).attr('alt');
    $('#modalimg').attr({
      src: imgsrc,
      alt: imgalt,
    });
    $('#modal').fadeIn();
  });

  $('#close').on('click', function(){
    $('#modal').fadeOut();
  });


});


