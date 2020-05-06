$(document).ready(function () {

  $('#Fishing').click(function () {
    $('#iframe').attr('src', 'https://www.youtube.com/embed/6SJS1XHw8-Y')
  });
  $('#Trucker').click(function () {
    $('#iframe').attr('src', 'https://www.youtube.com/embed/2jTLMM2mOiU')
  });
  $('#Power').click(function () {
    $('#iframe').attr('src', 'https://www.youtube.com/embed/F3Eq9_Gdz3U')
  });

  $('#img_Fishing').click(function () {
    $('#main-card-img').attr('src', 'img/Fish.gif')
  });
  $('#img_Trucker').click(function () {
    $('#main-card-img').attr('src', 'img/Truck.gif')
  });
  $('#img_Shveik').click(function () {
    $('#main-card-img').attr('src', 'img/2.png')
  });
  $('#img_Power').click(function () {
    $('#main-card-img').attr('src', 'img/1.png')
  });

  $('.button-buy').click(function () {
    $('.popup__wrapper').css('display', 'flex')
  });
  $('.popup__close').click(function () {
    $('.popup__wrapper').css('display', 'none')
  });

  $(".clickscroll").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 500);
  });

  $('.spoilertitle').click(function () {
    $('.spoiler').slideDown({
      duration: 200,
      start: function () {
        $(this).css({
          display: 'block'
        })
      }
    });
  });

  let btn = $('.buttonTop');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      btn.addClass('buttonTopshow');
    } else {
      btn.removeClass('buttonTopshow');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  $(".form-element").submit(function () {
    let formID = $(this).attr('id');
    let formNm = $('#' + formID);
    $.ajax({
      type: "POST",
      url: '../php/telegram_contact.php',
      data: formNm.serialize(),
      success: function (data) {
        // Вывод сообщения об успешной отправке
        $('.form-message__success').slideDown({
          duration: 100,
          start: function () {
            $(this).css({
              display: 'block'
            })
          }
        });
      },
      error: function (error) {
        // Вывод сообщения об ошибке отправки
        $('.form-message__error').slideDown({
          duration: 100,
          start: function () {
            $(this).css({
              display: 'block'
            })
          }
        });
      }
    });
    return false;
  });

});