$(function(){
  
  $('.button').on("click", function() {
    if ($('#header').hasClass('open')) {
      $('header').removeClass('open');
    } else {
      $('header').addClass('open');
    }
  });

  $('#mask').on("click", function() {
    $('header').removeClass('open');
  });
})


'member_list_2'




let content2 = document.getElementById('member_list_2');


