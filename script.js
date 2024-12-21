$('.button').on('click', function(event){
    var type = $(this).data('type');
    var status = $(this).data('status');
    
    $('.button').removeClass('is-active');
    $(this).addClass('is-active');
    
    $('.notify')
      .removeClass()
      .attr('data-notification-status', status)
      .addClass(type + ' notify')
      .addClass('do-show'); 
    
    event.preventDefault();
  })