window.onbeforeunload = function () {
  // $(window).animate({
  //     scrollTop: 0
  // }, 0);
};

$( document ).ready(function() {
    $('html,body').animate({
      scrollTop:0
    }, 800);

    $('ul.topnav li.li-nav a').on('click', function(event) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');

      $('html, body').animate({
          scrollTop: ($( $.attr(this, 'href') ).offset().top - 60)
      }, 700);
      event.preventDefault();
    });

    $('ul.topnav li.icon').on('click', function() {
      $('.topnav').toggleClass('responsive');
    });

    $('body').on('click', '.responsive li.li-nav', function() {
      $('.topnav').toggleClass('responsive');
    });

    $('ul.topnav li:eq(2)').on('click', function() {
      setTimeout(function() {
        drawSkills();
      }, 500);
    });

    function drawSkills() {
      Circles.create({
          id:                  'circles-1',
          radius:              60,
          value:               40,
          maxValue:            100,
          width:               10,
          text:                function(value){return value + '%';},
          colors:              ['#d8f3f1', '#67d3c9'],
          duration:            400,
          wrpClass:            'circles-wrp',
          textClass:           'circles-text',
          valueStrokeClass:    'circles-valueStroke',
          maxValueStrokeClass: 'circles-maxValueStroke',
          styleWrapper:        true,
          styleText:           true
      });

      Circles.create({
          id:                  'circles-2',
          radius:              60,
          value:               85,
          maxValue:            100,
          width:               10,
          text:                function(value){return value + '%';},
          colors:              ['#d8f3f1', '#67d3c9'],
          duration:            400,
          wrpClass:            'circles-wrp',
          textClass:           'circles-text',
          valueStrokeClass:    'circles-valueStroke',
          maxValueStrokeClass: 'circles-maxValueStroke',
          styleWrapper:        true,
          styleText:           true
      });

      Circles.create({
          id:                  'circles-3',
          radius:              60,
          value:               80,
          maxValue:            100,
          width:               10,
          text:                function(value){return value + '%';},
          colors:              ['#d8f3f1', '#67d3c9'],
          duration:            400,
          wrpClass:            'circles-wrp',
          textClass:           'circles-text',
          valueStrokeClass:    'circles-valueStroke',
          maxValueStrokeClass: 'circles-maxValueStroke',
          styleWrapper:        true,
          styleText:           true
      });

      Circles.create({
          id:                  'circles-4',
          radius:              60,
          value:               70,
          maxValue:            100,
          width:               10,
          text:                function(value){return value + '%';},
          colors:              ['#d8f3f1', '#67d3c9'],
          duration:            400,
          wrpClass:            'circles-wrp',
          textClass:           'circles-text',
          valueStrokeClass:    'circles-valueStroke',
          maxValueStrokeClass: 'circles-maxValueStroke',
          styleWrapper:        true,
          styleText:           true
      });

      Circles.create({
          id:                  'circles-5',
          radius:              60,
          value:               40,
          maxValue:            100,
          width:               10,
          text:                function(value){return value + '%';},
          colors:              ['#d8f3f1', '#67d3c9'],
          duration:            400,
          wrpClass:            'circles-wrp',
          textClass:           'circles-text',
          valueStrokeClass:    'circles-valueStroke',
          maxValueStrokeClass: 'circles-maxValueStroke',
          styleWrapper:        true,
          styleText:           true
      });
    }

    drawSkills();

    $(window).scroll(function() {
      if ($(this).scrollTop() >= 300) {        // If page is scrolled more than 50px
          $('#return-to-top').fadeIn(200);    // Fade in the arrow
      } else {
          $('#return-to-top').fadeOut(200);   // Else fade out the arrow
      }
    });

    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
        $('ul.topnav li').removeClass('active');
        $('ul.topnav li:eq(0)').addClass('active');
    });

    //events for project detaials actions
    $('#proj1').on( 'click', function() {
      $('#proj1Details').css('display', 'block');
    });

    $('#proj2').on( 'click', function() {
      $('#proj2Details').css('display', 'block');
    });

    $('#proj3').on( 'click', function() {
      $('#proj3Details').css('display', 'block');
    });

    $('#proj4').on( 'click', function() {
      $('#proj4Details').css('display', 'block');
    });

    $('.clsBtn').on('click', function () {
      $('.modal').css('display', 'none');
    });
});
