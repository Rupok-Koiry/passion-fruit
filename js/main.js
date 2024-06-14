$(window).on("load", function () {
  /*------------Preloader-----------*/
  $(".preloader").fadeOut("slow");
});
$(document).ready(function () {
  /* Navbar Shirnk*/
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
      $("#logo").css("width", "60px");
    } else {
      $(".navbar").removeClass("navbar-shrink");
      $("#logo").css("width", "80px");
    }
  });
  /* Video Popup*/
  const videoSrc = $("#player-1").attr("src");
  $(".video-play-btn, .video-popup").on("click", function () {
    if ($(".video-popup").hasClass("open")) {
      $(".video-popup").removeClass("open");
    } else {
      $(".video-popup").addClass("open");
      if ($("#player-1").attr("src") == "") {
        $("#player").attr("src", videoSrc);
      }
    }
  });
  /* Features Carousel*/
  $(".features-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  /* App Screenshot Carousel*/
  $(".screenshots-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  /* Testmonial Carousel*/
  $(".testimonials-carouel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  /* Team Carousel*/
  $(".team-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  /* Page Scrolling*/
  $.scrollIt({
    topOffset: -100,
  });
  /* Page Scrolling*/
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
  /* Team Carousel*/
  function toggleTheme() {
    if (localStorage.getItem("passion-fruit-theme") !== null) {
      if (localStorage.getItem("passion-fruit-theme") == "dark") {
        $("body").addClass("dark");
      } else {
        $("body").removeClass("dark");
      }
    }
    updateIcon();
  }
  toggleTheme();
  $(".toggle-theme").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
      localStorage.setItem("passion-fruit-theme", "dark");
    } else {
      localStorage.setItem("passion-fruit-theme", "light");
    }
    updateIcon();
  });
  function updateIcon() {
    if ($("body").hasClass("dark")) {
      $(".toggle-theme i").removeClass("fa-moon");
      $(".toggle-theme i").addClass("fa-sun");
    } else {
      $(".toggle-theme i").addClass("fa-moon");
      $(".toggle-theme i").removeClass("fa-sun");
    }
  }
});
