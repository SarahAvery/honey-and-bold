(function ($) {
  $(document).ready(function () {
    // import header and footer into page
    $("#header").load("./header.html");
    $("#footer").load("./footer.html"); // After loading header and footer...

    setTimeout(function () {
      // toggle small menu
      $("#site-navigation").on("click", "button", function () {
        $(".main-navigation").toggleClass("toggled"); // if class Toggled, Aria-Expanded is set to true

        if ($(".main-navigation").hasClass("toggled")) {
          $("button").attr("aria-expanded", "true");
        } else if (!$(".main-navigation").hasClass("toggled")) {
          $("button").attr("aria-expanded", "false");
        }
      });
      var themes = {
        dark: {
          classList: ["dark-theme", ""],
          controlClassList: ["dark"]
        },
        "default": {
          classList: [],
          controlClassList: []
        }
      }; // Local Storage Toggle Theme

      var initialTheme = localStorage.getItem("theme") || "default";
      themes[initialTheme].classList.forEach(function (className) {
        $("body").addClass(className);
      });
      themes[initialTheme].controlClassList.forEach(function (className) {
        $(".theme .sun").addClass(className);
      }); // Toggle Dark Theme

      $("body .site-header .theme .sun").on("click", function () {
        $("body").toggleClass("dark-theme");
        $(".theme .sun").toggleClass("dark");
        var isDark = $("body").hasClass("dark-theme");
        localStorage.setItem("theme", isDark ? "dark" : "");
      });
    }, 300); // Image on click full size if screen is more than 500px

    $(window).on("load resize", function () {
      var width = $(window).width();

      if (width >= 500) {
        $(".gallery .container li").on("click", function (e) {
          if ($(this).hasClass("full-screen")) {
            $(this).removeClass("full-screen");
          } else if (!$(this).hasClass("full-screen")) {
            $(this).addClass("full-screen").siblings().removeClass("full-screen");
          }
        });
      } else {
        console.log("too small");
      }
    });
  });
})(jQuery);