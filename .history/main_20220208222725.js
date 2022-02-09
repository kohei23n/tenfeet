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


let content = `<li>
<a href="/members1/index.html?id=8">
  <img src="/img/8.jpg" alt="8">
  <p class="name">JIN</p>
</a>
</li>`;




let content2 = document.getElementById('member_list_2');
content2.insertAdjacentHTML("beforebegin", content)


