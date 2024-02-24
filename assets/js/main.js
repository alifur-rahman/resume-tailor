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