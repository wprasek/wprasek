/*
    Project Name : Business
    Author Company : SpecThemes
    Project Date: 5 Feb, 2017
    Template Developer: vsafaryan50@gmail.com
*/


/*
==============================================
TABLE OF CONTENT
==============================================

1. Owl Carousels
2. CountUp
3. WOW
4. Navbar (Menu)
5. Scroll To Top
6. Video Modal
7. Preloader


==============================================
[END] TABLE OF CONTENT
==============================================
*/

"use strict";



$(document).ready(function() {


/*------------------------------------
    1. Owl Carousel
--------------------------------------*/  


/*---------------------
Testmonials carousel
-----------------------*/

  $('#testmonials-carousel').owlCarousel({
    loop: false,
    nav: false,
    responsiveClass: true,
    nav:false,
    navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],    
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        margin: 10,
      },
      600: {
        items: 1,
        nav: false,
        dots: true,        
        margin: 15,
      },
      1000: {
        items: 2,
        dots: true,
        margin: 10,
      }
    }
  })


/*---------------------
Screenshots carousel
-----------------------*/

  $('#screenshots').owlCarousel({
    center: true,
    loop:true,
    nav: true,
    dots: false,
    autoplay:true,
    autoplayTimeout:2100,
    autoplayHoverPause:true,
    margin:10,

    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
            margin:60
        },
        1000:{
            items:4
        }
    }
  })


/*---------------------
Clients carousel
-----------------------*/

  $('#clients').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,  
    responsiveClass: true,
    autoplayHoverPause:false,
    responsive: {
      0: {
        items: 2,
        margin: 50,
      },
      600: {
        items: 3,
        margin: 30,
      },
      1000: {
        items: 6,
        margin: 40,
      }
    }
  })



/*---------------------
Project Single carousel
-----------------------*/
  $('#project-single').owlCarousel({
    loop: false,
    nav: false,    
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      600: {
        items: 2,
        margin: 15,
      },
      1000: {
        items: 3,
        margin: 15
      }
    }
  })  


/*------------------------------------
    2. CountUp
--------------------------------------*/  

    $('.countup').counterUp({
        delay: 25,
        time: 2000
    });



/*------------------------------------
    3. WOW
--------------------------------------*/ 

    new WOW().init();

/*------------------------------------
    4. Navbar
--------------------------------------*/    

  if ($(window).width() > 1200) {
    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
    });
  }

  if ($(window).width() < 991) {
    $(".logo_main").css("display" , "inline-block"); 
    $(".logo_light").css("display" , "none"); 
  }  

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if ($(window).width() > 991){
      if (scroll > 30) {
        $(".navbar-custom").css("background" , "#fff");
        $(".navbar-links-custom a").css("color" , "#3b3b3b");
        $(".dropdown-menu a").css("color" , "#999"); 
        $(".navbar-custom").css("border-bottom" , "1px solid #eee"); 
        $(".logo_main").css("display" , "inline-block"); 
        $(".logo_light").css("display" , "none");
      }
      else{
        $(".navbar-custom").css("background" , "transparent");  
        $(".navbar-links-custom a").css("color" , "rgba(255, 255, 255, 1)"); 
        $(".dropdown-menu a").css("color" , "#999"); 
        $(".navbar-custom").css("border-bottom" , "1px solid transparent"); 
        $(".logo_main").css("display" , "none"); 
        $(".logo_light").css("display" , "inline-block");         
      }
    }
  });

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });



/*------------------------------------
    5. Scroll To Top
--------------------------------------*/ 
    $(window).scroll(function(){
        if($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(400);
            
        } else {
            $(".scroll-to-top").fadeOut(400);
        }
    });
 
    $(".scroll-to-top").on('click', function(event){
        event.preventDefault();
        $("html, body").animate({scrollTop: 0},600);
    });


/*------------------------------------
    6. Video Modal
--------------------------------------*/ 

  $('.modal').on('hidden.bs.modal', function() {
    var $this = $(this).find('iframe'),
      tempSrc = $this.attr('src');
    $this.attr('src', "");
    $this.attr('src', tempSrc);
  });


/*------------------------------------
    7. Preloader
--------------------------------------*/ 

  $('#preloader').fadeOut('normall', function() {
      $(this).remove();
  });



});
