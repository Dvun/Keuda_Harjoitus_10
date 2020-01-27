$('#myForm').trigger('reset');
$(function() {
  'use strict';
  $('#myForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: './php/mail.php',
      type: 'POST',
      contentType: false,
      processData: false,
      data: new FormData(this),
      success: function(msg) {
        console.log(msg);
        if (msg == 'ok') {    
      document.querySelector('.orderResult').style.display = 'block'
      setTimeout (() => {
        document.querySelector('.orderResult').style.display = 'none'
      }, 3000)
      $('#myForm').trigger('reset'); // очистка формы
    } else {
          alert('Ошибка');
        }
      }
    });
  });
});