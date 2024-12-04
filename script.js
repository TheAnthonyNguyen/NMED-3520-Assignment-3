$(document).ready(() => {
  // Smooth scrolling for navigation links
  $('nav a').on('click', function (e) {
    e.preventDefault(); 
    const targetSection = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(targetSection).offset().top
    }, 800); 
  });

  $(document).ready(function() {
    // Play sound when the play button is clicked
    $(".sound-btn").click(function() {
      var audioElement = $(this).siblings(".car-sound")[0]; // Find the corresponding audio element
      if (audioElement.paused) {
        audioElement.play(); // Play the audio if it's paused
        $(this).text("Pause Sound"); // Change button text to "Pause"
      } else {
        audioElement.pause(); // Pause the audio if it's playing
        audioElement.currentTime = 0; // Reset audio to the start
        $(this).text("Play Sound"); // Change button text back to "Play"
      }
    });
  });
  

  // Open modal with car details
  $('.details-btn').on('click', function () {
    const carTitle = $(this).siblings('h3').text();
    const carDescription = $(this).parent().data('description');
    const carEngine = $(this).parent().data('engine');
    const carPower = $(this).parent().data('power');
    const carElectricMotor = $(this).parent().data('electric-motor');
    const carTransmission = $(this).parent().data('transmission');
    const carWeight = $(this).parent().data('weight');
    const carBrakes = $(this).parent().data('brakes');
  
    $('#modal-title').text(carTitle);
    $('#modal-description').html(`
      <p>${carDescription}</p>
      <p><strong>Engine:</strong> ${carEngine}</p>
      <p><strong>Power:</strong> ${carPower}</p>
      <p><strong>Electric Motor:</strong> ${carElectricMotor}</p>
      <p><strong>Transmission:</strong> ${carTransmission}</p>
      <p><strong>Weight:</strong> ${carWeight}</p>
      <p><strong>Brakes:</strong> ${carBrakes}</p>
    `);
    $('#modal').removeClass('hidden');
  });

  // Close modal when clicking the close button
  $('#close-modal').on('click', function () {
    $('#modal').addClass('hidden');
  });

  // Close modal when clicking outside of the modal content
  $('#modal').on('click', function (e) {
    if ($(e.target).is('#modal') || $(e.target).is('#close-modal')) {
      $('#modal').addClass('hidden');
    }
  });

  // Filter functionality
  $('#filter-form').on('submit', function (e) {
    e.preventDefault();
    const manufacturer = $('#manufacturer-filter').val();
    const year = $('#year-filter').val();

    $('.car-card').each(function () {
      const matchesManufacturer = manufacturer === 'all' || $(this).data('manufacturer') === manufacturer;
      const matchesYear = year === 'all' || $(this).data('year') == year;

      $(this).toggle(matchesManufacturer && matchesYear);
    });
  });
});
