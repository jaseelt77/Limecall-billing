$( document ).ready(function() {

    // Add amount active

    $('.add_amount a').on('click', function () {
        $('.add_amount a').removeClass('active');
        $(this).toggleClass('active');
    });

   //saved Cards active

   $('.saved_cards__title').on('click', function () {
       $(this).toggleClass('active');
       $('.new_cards__title').removeClass('active');
       $('.new_cards').find('.saved_info').slideUp();
       $(this).parent('.saved_cards').find('.saved_info').slideToggle();
       $('.saved_info__details').removeClass('active');
      
   });
 // new cards active

 $('.new_cards__title').on('click', function () {
 $(this).toggleClass('active');
 $('.saved_cards__title').removeClass('active');
 $('.saved__cards').find('.saved_info').slideUp();
 $(this).parent('.new_cards').find('.saved_info').slideToggle();
 $('.saved_info__details').removeClass('active');

 });
   // saved info active

   $('.saved__info__details').on('click', function () {
       $(this).toggleClass('active');
   });


//update payment
$('.saved_info a').on('click', function () {
 $('.update_list').hide();
 $('.update_edit').show();
});
$('.update_form__btns button').on('click', function () {
$('.update_list').hide();
$('.update_list').show()
});


//phone input
var input = document.querfySelector("#phone");
window.intlTelInput(input);

});
