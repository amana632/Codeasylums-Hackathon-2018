$(document).ready(function(){
  /* =================================
      Loader 
  =================================== */
  jQuery(window).load(function() {
    jQuery(".status").fadeOut();
    jQuery(".preloader").delay(500).fadeOut("slow");
  })

  /* =================================
      Totop 
  =================================== */
  $().UItoTop({     
    scrollSpeed:500,
    easingType:'linear'
  });

  $(".navbar-nav li a").click(function(e){$(".navbar-collapse").collapse("hide")})
  
  /* =================================
      Tabs 
  =================================== */
  $('.tab-label-2').click(function() {
    $('.tab-label-1').removeClass('arrow-tabs').addClass('active-tabs');
    $(this).addClass('arrow-tabs').removeClass('active-tabs');
  });

  $('.tab-label-1').click(function() {
    $('.tab-label-2').removeClass('arrow-tabs').addClass('active-tabs');
    $(this).addClass('arrow-tabs').removeClass('active-tabs');
  });

  /* =================================
      Flikr Feed 
  =================================== */
  $('#flickr').jflickrfeed({
     limit: 8,
     qstrings: {
        author: 'youngrobv'
     },
     itemTemplate: '<li><a href="{{image_b}}" class="fancybox"><img src="{{image_s}}" alt="{{title}}"/></a></li>'
   });

  /* =================================
    Newsletter
  =================================== */
  $('#newsletterForm').submit(function(event) {  
    event.preventDefault();  
    var url = $(this).attr('action');
    var datos = $(this).serialize();  
     $.get(url, datos, function(resultado) {  
      $('#result-newsletter').html(resultado);  
    });
  }); 
  
  /* =================================
    STELLAR                    
  =================================== */
  $(window).stellar({ 
    horizontalScrolling: false 
  });

  /* =================================
    SMOOTH SCROLL             
  =================================== */
  var scrollAnimationTime = 1200,
      scrollAnimation = 'easeInOutExpo';
  $('a.scrollto').bind('click.smoothscroll', function (event) {
      event.preventDefault();
      var target = this.hash;
      $('html, body').stop().animate({
          'scrollTop': $(target).offset().top
      }, scrollAnimationTime, scrollAnimation, function () {
          window.location.hash = target;
      });
  });

  /* =================================
     VIDEO BACKGROUND           
  =================================== */
  if (matchMedia('(min-width: 640px)').matches) {
     
     $(document).ready(function() {
      var videobackground = new $.backgroundVideo($('body'), {
        "align": "centerXY",
        "width": 1280,
        "height": 720,
        "path": "video/",
        "filename": "video",
        "types": ["mp4","ogg","webm"]
      });
    });

  }

  /* =================================
    Animations
  =================================== */
  wow = new WOW({
    mobile: false
  });wow.init();

  /* =================================
    Counter
  =================================== */
  $('#event-one').countdown('2017/12/12', function(event) {
    var $this = $(this).html(event.strftime(''
    + '<span>%D : <br> <small>Days </small></span>  '
    + '<span>%H : <br> <small>Hr</small> </span>  '
    + '<span>%M : <br> <small>Min</small> </span>  '
    + '<span>%S <br> <small>Sec</small></span> '));
  });7
  $('#event-two').countdown('2016/11/12', function(event) {
    var $this = $(this).html(event.strftime(''
    + '<span>%D : <br> <small>Days </small></span>  '
    + '<span>%H : <br> <small>Hr</small> </span>  '
    + '<span>%M : <br> <small>Min</small> </span>  '
    + '<span>%S <br> <small>Sec</small></span> '));
  });

  $('#event-three').countdown('2017/12/12', function(event) {
    var $this = $(this).html(event.strftime(''
    + '<span>%D : <br> <small>Days </small></span>  '
    + '<span>%H : <br> <small>Hr</small> </span>  '
    + '<span>%M : <br> <small>Min</small> </span>  '
    + '<span>%S <br> <small>Sec</small></span> '));
  });

  $('#event-four').countdown('2017/12/12', function(event) {
    var $this = $(this).html(event.strftime(''
    + '<span>%D : <br> <small>Days </small></span>  '
    + '<span>%H : <br> <small>Hr</small> </span>  '
    + '<span>%M : <br> <small>Min</small> </span>  '
    + '<span>%S <br> <small>Sec</small></span> '));
  });

  /* =================================
    Speakers
  =================================== */
  $("#gallery-people").owlCarousel({
    autoPlay: 3500, 
    items : 7,
    navigation: false,
    navigationText: false,
    pagination: false, 
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [1000,3],
    itemsTablet : [720, 2],
    itemsMobile : [384, 1],
    stopOnHover : true
  });

  /* =================================
    Videos 
  =================================== */
  $("#gallery-videos").owlCarousel({
    autoPlay: 4000, 
    items : 2,
    navigation: false,
    navigationText: false,
    pagination: true, 
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [1000,1],
    itemsTablet : [768, 1],
    itemsMobile : [720, 1],
    stopOnHover : true
  });

  /* =================================
    Albums 
  =================================== */
  $("#gallery-albums").owlCarousel({
    autoPlay: 3500, 
    items : 3,
    navigation: false,
    navigationText: false,
    pagination: true, 
    itemsDesktop : [1199,2],
    itemsDesktopSmall : [1000,2],
    itemsTablet : [768, 1],
    itemsMobile : [720, 1],
    stopOnHover : true
  });
  
  /* =================================
    Testimonials
  =================================== */
  $(".testimonials").owlCarousel({
    items : 1,
    pagination: false,
    navigation: false,
    singleItem: true,
    stopOnHover : true,
    autoPlay: 3000
  });

  /* =================================
    Sponsors Carousel
  =================================== */
  $(".sponsor-list").owlCarousel({
    autoPlay: 3000, 
    items : 7,
    navigation: false,
    navigationText: true, 
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [1000,3],
    itemsMobile : [568,2],
    stopOnHover : true
  });
  
  /* =================================
    Lightbox
  =================================== */
  $(".iframe_video").fancybox({
    'width'       : '75%',
    'height'      : '75%',
    'autoScale'     : false,
    'transitionIn'    : 'none',
    'transitionOut'   : 'none',
    'type'        : 'iframe'
  });
  jQuery("a[class*=fancybox]").fancybox({
    'overlayOpacity'  : 0.7,
    'overlayColor'    : '#000000',
    'transitionIn'    : 'elastic',
    'transitionOut'   : 'elastic',
    'easingIn'        : 'easeOutBack',
    'easingOut'       : 'easeInBack',
    'speedIn'       : '700',
    'centerOnScroll'  : true,
    'titlePosition'     : 'over'
  });

  /* =================================
    Tooltips
  =================================== */
  if( $.fn.tooltip() ) {
    $('[class="tooltip_hover"]').tooltip();
  }  

  /* =================================
    Subtmit Forms
  =================================== */
  $('.form-contact').submit(function(event) {  
    event.preventDefault();  
    var url = $(this).attr('action');  
    var datos = $(this).serialize();  
    $.get(url, datos, function(resultado) {  
      $('.result').html(resultado);  
    });  
  }); 

  $('.form-contact-register').submit(function(event) {  
    event.preventDefault();  
    var url = $(this).attr('action');  
    var datos = $(this).serialize();  
    $.get(url, datos, function(resultado) {  
      $('.result-register').html(resultado);  
    });  
  });   
 
  /* =================================
    Nav
  =================================== */

  if (window.matchMedia("(max-width: 768px)").matches) {
      $('.nav').removeClass('navbar-right').addClass('navbar-left right');
  } else {
    $('.nav').removeClass('navbar-left right').addClass('navbar-right');
  }

  $(document).ready(function() {
    $('.main-navigation').onePageNav({
      filter: ':not(.external)',
      changeHash: true
    });
  });
  if (matchMedia('(max-width: 480px)').matches) {
      $('.main-navigation a').on('click', function () {
          $(".navbar-toggle").click();
      });
  }
  $(document).ready(function () {
      mainNav();
  });

  $(window).scroll(function () {
      mainNav();
  });
  if (matchMedia('(min-width: 992px), (max-width: 768px)').matches) {
    function mainNav() {
      var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'});

      else $('.sticky-navigation').stop().animate({"top": '-60'});
    }
  }

  if (matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
    function mainNav() {
      var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'});

      else $('.sticky-navigation').stop().animate({"top": '-1200'});
    }
  }

  /* =================================
    Google Maps
        Map Settings
        Find the Latitude and Longitude of your address:    
        - http://universimmedia.pagesperso-orange.fr/geo/loc.htm    
        - http://www.findlatitudeandlongitude.com/find-address-from-latitude-and-longitude/
  =================================== */

  // Map Markers
  var mapMarkers = [{
    address: "217 Summit Boulevard, Birmingham, AL 35243",
    html: "<strong>Alabama Office</strong><br>217 Summit Boulevard, Birmingham, AL 35243<br><br><a href='#' onclick='mapCenterAt({latitude: 33.44792, longitude: -86.72963, zoom: 16}, event)'>[+] zoom here</a>",
    icon: {
        image: "img/pin.png",
        iconsize: [26, 46],
        iconanchor: [12, 46]
    }
  },{
    address: "645 E. Shaw Avenue, Fresno, CA 93710",
    html: "<strong>California Office</strong><br>645 E. Shaw Avenue, Fresno, CA 93710<br><br><a href='#' onclick='mapCenterAt({latitude: 36.80948, longitude: -119.77598, zoom: 16}, event)'>[+] zoom here</a>",
    icon: {
        image: "img/pin.png",
        iconsize: [26, 46],
        iconanchor: [12, 46]
    }
  },{
    address: "New York, NY 10017",
    html: "<strong>New York Office</strong><br>New York, NY 10017<br><br><a href='#' onclick='mapCenterAt({latitude: 40.75198, longitude: -73.96978, zoom: 16}, event)'>[+] zoom here</a>",
    icon: {
        image: "img/pin.png",
        iconsize: [26, 46],
        iconanchor: [12, 46]
    }
  }];

  // Map Initial Location
  var initLatitude = 38.09024;
  var initLongitude = -98.71289;

  // Map Extended Settings
  var mapSettings = {
    controls: {
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true
    },
    scrollwheel: false,
    markers: mapMarkers,
    latitude: initLatitude,
    longitude: initLongitude,
    zoom: 3
  };
    
  $("#map").gMap(mapSettings);

  // Map Center At
  var mapCenterAt = function(options, e) {
      e.preventDefault();
      $("#map").gMap("centerAt", options);
  }
});