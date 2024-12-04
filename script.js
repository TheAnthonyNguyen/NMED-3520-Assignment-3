$(document).ready(() => {
  $('nav a').on('click', function (e) {
    e.preventDefault(); 
    const targetSection = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(targetSection).offset().top
    }, 800); 
  });

  $(document).ready(function() {
  $(".sound-btn").click(function() {
    var audioElement = $(this).siblings(".car-sound")[0];
    if (audioElement.paused) {
      audioElement.play();
      $(this).text("Pause Sound");
    } else {
      audioElement.pause();
      audioElement.currentTime = 0;
      $(this).text("Play Sound");
    }
  });
});

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
      <p><strong>Description:</strong> ${carDescription}</p>
      <p><strong>Engine:</strong> ${carEngine}</p>
      <p><strong>Power:</strong> ${carPower}</p>
      <p><strong>Electric Motor:</strong> ${carElectricMotor}</p>
      <p><strong>Transmission:</strong> ${carTransmission}</p>
      <p><strong>Weight:</strong> ${carWeight}</p>
      <p><strong>Brakes:</strong> ${carBrakes}</p>
    `);
    $('#modal').removeClass('hidden');
  });

  $('#close-modal').on('click', function () {
    $('#modal').addClass('hidden');
  });

  $('#modal').on('click', function (e) {
    if ($(e.target).is('#modal') || $(e.target).is('#close-modal')) {
      $('#modal').addClass('hidden');
    }
  });

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

// $('#filter-form, #clear-button').on('submit', function (e) {
//   e.preventDefault();
//   const manufacturer = $('#manufacturer-filter').val('all');
//   const year = $('#year-filter').val('all');

//   $('.car-card').each(function () {
//     const matchesManufacturer = manufacturer === 'all' || $(this).data('manufacturer') === manufacturer;
//     const matchesYear = year === 'all' || $(this).data('year') == year;

//     $(this).toggle(matchesManufacturer && matchesYear);
//   });
// });
