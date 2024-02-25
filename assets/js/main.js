//use static 

function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
    const afterElement = document.getElementById('afterElement');
    // const percentage = (value - 1) / (100 - 1) * 100; // Adjusted for min value
    afterElement.style.width = value + '%';

}

$(document).on('click', '.drop_down_item', function (event) {
    // Check if the event target is .drop_down_navs
    if ($(event.target).closest('.drop_down_navs').length) {
        // If the event target is .drop_down_navs, don't do anything
        return;
    }

    // Otherwise, toggle the visibility of .drop_down_navs
    $(this).find('.drop_down_navs').toggle();
    return false;
});

// Event listener for .close_dropdown_btn
$(document).on('click', '.close_dropdown_btn', function (event) {
    // Find the dropdown associated with the button
    var dropdown = $(this).closest('.drop_down_item').find('.drop_down_navs');

    // Toggle the visibility of the dropdown
    dropdown.toggle();
});

$(document).on('keyup', 'textarea', function () {
    var value = $(this).val();
    var fillIconElement = $(this).parent().find('.fill_by_input');
    if (fillIconElement.length !== 0) {
        if (value.length > 0) {
            $(fillIconElement).addClass('filled');
        } else {
            $(fillIconElement).removeClass('filled');
        }
    }

});

$(document).ready(function() {
    // Open modal when clicking the button
    $(document).on("click", ".openModal", function() {
      var targetModal = $(this).data("target-modal");
      $("#" + targetModal).fadeIn();
      $("#" + targetModal).addClass('show_modal');
      $("body").css("overflow", "hidden");
      return false;
    });
  
    // Close modal when clicking the Ok button
    $(document).on("click", ".closeModal", function() {
      $(this).closest(".custom_modal").fadeOut();
      $(this).closest(".custom_modal").removeClass('show_modal');
      $("body").css("overflow", "auto");
    });
  
    // Close modal when clicking outside the modal content
    $(document).on("mouseup", function(e) {
      var container = $(".modal_content");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".custom_modal").fadeOut();
        $(".custom_modal").removeClass('show_modal');
        $("body").css("overflow", "auto");
      }
    });
  });;



  // For Toggle Passord Eye button
  function togglePassword() {
    const passwordInput = document.getElementById("passwordInput");
    const toggleIcon = document.getElementById("toggleIcon");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.src = "assets/images/icons/eye.svg";
    } else {
      passwordInput.type = "password";
      toggleIcon.src = "assets/images/icons/eye-off.svg";
    }
  }

  
  $(document).ready(function () {
    $(".ctaSlide").owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 3,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
    $(".owl-prev").html('<i class="fas fa-arrow-left"></i>');
    $(".owl-next").html('<i class="fas fa-arrow-right"></i>');
  });
  $(document).ready(function () {
    $(".resume_slider").owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        700: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
      onInitialized: callback,
      onTranslated: callback,
    });

    function callback(event) {
      var $middleItem = $(event.target).find(".owl-item.active").eq(1);
      $(event.target).find(".owl-item").removeClass("middle-active");
      $middleItem.addClass("middle-active");
    }

    $(".owl-prev").html('<i class="fas fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fas fa-chevron-right"></i>');
  });

  $(document).ready(function () {
    if ($(window).width() < 768) {
      pricing_caousel();
    }

    $(window).resize(function () {
      if ($(window).width() < 768) {
        pricing_caousel();
      } else {
        // Remove Owl Carousel classes and destroy the instance
        $(".pricings_cards").removeClass("owl-carousel owl-theme");
        $(".pricings_cards").trigger("destroy.owl.carousel");
      }
    });

    function pricing_caousel() {
      $(".pricings_cards").addClass("owl-carousel owl-themes");
      $(".pricings_cards").owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          700: {
            items: 1,
          },
          900: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
        onInitialized: callback,
        onTranslated: callback,
      });

      function callback(event) {
        var $middleItem = $(event.target).find(".owl-item.active").eq(1);
        $(event.target).find(".owl-item").removeClass("middle-active");
        $middleItem.addClass("middle-active");
      }

      $(".owl-prev").html('<i class="fas fa-chevron-left"></i>');
      $(".owl-next").html('<i class="fas fa-chevron-right"></i>');
    }
  });

  function playVideo() {
    let url = document.querySelector('.vedio__thumb').getAttribute('data-embed-url');
    // Hide the thumbnail
    document.querySelector('.vedio__thumb').style.display = 'none';
    
    // Get the iframe element
    var iframe = document.getElementById('videoFrame');
    
    // Update the source of the iframe to start playing the video
    iframe.src =  url || "";
    
    // Display the iframe
    iframe.style.display = 'block';
  }

