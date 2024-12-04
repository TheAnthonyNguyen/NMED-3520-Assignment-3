$(document).ready(() => {
    $('nav a').on('click', function (e) {
      e.preventDefault(); 
      const targetSection = $(this).attr('href');
  
      $('html, body').animate({
        scrollTop: $(targetSection).offset().top
      }, 800); 
    });
  
    $('.details-btn').on('click', function () {
      const carTitle = $(this).siblings('h3').text();
      const carDescription = $(this).parent().data('description');
  
      $('#modal-title').text(carTitle);
      $('#modal-description').text(carDescription);
      $('#modal').removeClass('hidden');
    });
  
    $('#close-modal').on('click', () => {
      $('#modal').addClass('hidden');
    });
  
    $('#filter-form').on('submit', function (e) {
      e.preventDefault();
      const manufacturer = $('#manufacturer-filter').val();
      const year = $('#year-filter').val();
  
        $('.car-card').each(function () {
        const matchesManufacturer = manufacturer === 'all' || $(this).data('manufacturer') === manufacturer;
        const matchesYear = !year || $(this).data('year') == year;
  
        $(this).toggle(matchesManufacturer && matchesYear);
      });
    });
  });
  