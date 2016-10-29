$(function(){

// on typing list-name
var tickcount=0;
  var count = 0;
  var form = $('.list-name');
  $('.list-name').on('focus', function(){
    $(form).on('input', function(){
      var value = $(form).val();
      var length = value.length;
      console.log(length);
      if(length >= 1){
        $('input[type="button"]').css('opacity', '1');
        // $('input[type="button"]').css('height', '35px');
        $('input[type="button"]').css('pointer-events', 'all');
      }
      else{
        $('input[type="button"]').css('opacity', '0');
        // $('input[type="button"]').css('height', '0px');
        $('input[type="button"]').css('pointer-events', 'none');
      }
    })
  })

// on list-name submit

  $('input[type="button"]').on('click', function(){
    var value = $(form).val();
    var length = value.length;
    console.log(value);
    if(length>=1){
      $('.list-name-div').text(value);
      $(form).css('opacity','0');
      $(form).css('pointer-events','none');
      $('.list').css('opacity', '1');
      $('.list').css('marginLeft', '0px');
      $('.list').css('pointer-events', 'all');
      $(':button').css('opacity','0');
      $(':button').css('pointer-events', 'none');
      $('.list-item').css({
        opacity: 1,
        pointerEvents: 'all',
      });
      $('.list-item-input').css({
        opacity: 1,
        pointerEvents: 'all',
        height: 'fit-content',
      });
      $('.add-list').css({
        opacity: 0,
        pointerEvents: 'none',
        height: '0px',
        marginTop: '0px',
        padding: '0px',
      });
      $('.list-item').css({
        marginTop: '20px',
      });
    }
  })

  // on click delete

  $('.delete-img').on('click', function(){
    console.log('sup');
    i=-1;
    n=0;
    $('.list').css({
      marginLeft: '-1000px',
      opacity: 0,
      pointerEvents: 'none',
    });
    $(form).css({
      opacity: 1,
      pointerEvents: 'all',
    });
    $(form).val('');
    setTimeout(function(){
      $('.list-name-div').html('');
    }, 200);
    setTimeout(function(){
      $('.list').css({
        marginLeft: '0px',
        pointerEvents: 'none',});
    }, 300);
    $('.list-item').val('');
    $('.list-item-container i').css({
      opacity: 0,
      pointerEvents: 'none',
      height: '0px',
    });
    $('.list-item-container li').each(function(){
      $(this).remove();
    });
    $('.list-item').css({
      opacity: 0,
      pointerEvents: 'none',
    });
    $('.list-item-input').css({
      opacity: 0,
      pointerEvents: 'none',
    });
    $('.add-list').css({
      opacity: 0,
      pointerEvents: 'none',
    });
    $('.ion-compose').remove();
    count=0;
  })

// NO NEED FOR NOW
  // // on span click
  //
  // $('.list-name-div').on('click', function(){
  //   $('.list').css({
  //     opacity: 0,
  //     pointerEvents: 'none',
  //   });
  //   $(form).css({
  //     opacity: 1,
  //     pointerEvents: 'all',
  //   });
  //   $(':button').css({
  //     opacity: 1,
  //     pointerEvents: 'all',
  //   });
  //   $('.list-item-container i').css({
  //     opacity: 0,
  //     pointerEvents: 'none',
  //     height: '0px',
  //   });
  //   $('.list-item-container li').each(function(){
  //     $(this).css({
  //       opacity: 0,
  //       pointerEvents: 'none',
  //     });
  //   });
  //   $('.list-item').css({
  //     opacity: 0,
  //     pointerEvents: 'none',
  //   });
  //   $('.list-item-input').css({
  //     opacity: 0,
  //     pointerEvents: 'none',
  //   });$('.list-item-container i').css({
  //     opacity: 0,
  //     pointerEvents: 'none',
  //     height: '0px',
  //   });
  //   // $('.list-item-container li').each(function(){
  //   //   $(this).remove();
  //   // });
  //   $('.list-item').css({
  //     opacity: 0,
  //     pointerEvents: 'none',
  //   });
  //   $('.add-list').css({
  //     opacity: 0,
  //     pointerEvents: 'none',
  //   });
  //   $('.list-item-input').css({
  //     opacity: 0,
  //     pointerEvents: 'none',
  //   });
  //   $('.list-name').focus();
  // })

  // on add list item focus
  $('.list-item-container .list-item').on('focus', function(){
    $('.list-item').on('input', function sup(){
      var value = $('.list-item').val();
      var length = value.length;
      console.log(length);
      if(length >= 1){
        $('.ion-close, .ion-checkmark').css({
          opacity: 1,
          pointerEvents: 'all',
          height: '25px',
        });
      }
      else{
          $('.ion-close').css({
            opacity: 0,
            pointerEvents: 'none',
            height: '0px',
          });
          $('.ion-checkmark').css({
            opacity: 0,
            pointerEvents: 'none',
            height: '0px',
          });

        }
    })
  })

  // on tick click

  $('.ion-checkmark').on('click', function(){
    ++tickcount;
    $('.ion-checkmark').css({
      opacity: 0,
      pointerEvents: 'none',
      height: '0px',
    });
    $('.ion-close').css({
      opacity: 0,
      pointerEvents: 'none',
      height: '0px',
    });
    $('.list-item-input').css({
      opacity: 0,
      pointerEvents: 'none',
      height: '0px',
    });
    $('.list-item').css({
      opacity: 0,
      pointerEvents: 'none',
    });
    $('.add-list').css({
      opacity: 1,
      pointerEvents: 'all',
      height: '40px',
      marginTop: '10px',
      padding: '10px',
    });
    var length = $('.list-item').val().length;
    var item_content = $('.list-item').val();
    ++i;
    if(length>=1){
      console.log('hi');
      var new_li = $('<li>');
      $(new_li).html(item_content);
      $('.list-item-input').before(new_li);
      $('.list-item').val('');
      $(new_li).each(function(){
        console.log('fml' + i);
        var compose = $('<i>');
        $(compose).addClass('ion-compose');
        $('.list-item-container li').eq(i).prepend(compose);
      })
    }
  })

  // ON add list div click
  var i = -1; //ion-compose create counter
  $('.add-list').on('click', function(){
    $('.list-item-input').css({
      opacity: 1,
      pointerEvents: 'all',
      height: 'fit-content',
    });
    $('.list-item').css({
      marginTop: '10px',
    });
    $('.list-item').css({
      opacity: 1,
      pointerEvents: 'all',
    });
    $('.add-list').css({
      opacity: 0,
      pointerEvents: 'none',
      height: '0px',
      padding: '0px',
    });
    $('.list-item').focus();
  })

  // ON ion close click

  $('.ion-close').on('click', function(){
    $('.list-item').val('');
    $('.ion-checkmark').css({
      opacity: 0,
      pointerEvents: 'none',
      height: '0px',
    });
    $('.ion-close').css({
      opacity: 0,
      pointerEvents: 'none',
      height: '0px',
    });
    $('.list-item-input').css({
      opacity: 0,
      pointerEvents: 'none',
      height: '0px',
    });
    $('.list-item').css({
      opacity: 0,
      pointerEvents: 'none',
    });
    $('.add-list').css({
      opacity: 1,
      pointerEvents: 'all',
      height: '40px',
      marginTop: '10px',
      padding: '10px',
    });
    var compose = $('<i>');
    $(compose).attr('class', 'ion-compose');
    $('.list-item-container li').prepend(compose);
  })

  // ON ion compose click
  // HAVE TO LEARN ABOUT EVENT DELEGATION AND EVENT HANDLER PARAMETERS
  var n = 0; //line-through counter
  $('.list-item-container').on('click', '.ion-compose', function(){
    console.log('batman');
    $(event.target).parent().css({
      textDecoration: 'line-through',
    });
    $(event.target).parent().appendTo('.list-item-container');
    $(event.target).parent().css({
      fontStyle: 'italic',
      color: 'gray',
      backgroundColor: 'rgb(240, 240, 240)',
      display: 'flex',
      justifyContent: 'space-between',
    });
    var ionup = $('<i>');
    $(ionup).addClass('ion-arrow-up-b');
    $(event.target).parent().append(ionup);
    $(event.target).remove();
    --i;
  })

  // ON ion-arrow-up-b click
  $('.list-item-container').on('click', '.ion-arrow-up-b', function(){
    $(event.target).parent().css({
      textDecoration: 'none',
    });
    $('.list-item-input').before($(event.target).parent());
    $(event.target).parent().css({
      fontStyle: 'normal',
      color: 'black',
      backgroundColor: 'white',
      justifyContent: 'flex-start',
    });
    var compose = $('<i>');
    $(compose).addClass('ion-compose');
    $(event.target).parent().prepend(compose);
    $(event.target).remove();
    ++i;
  })
})
