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

let images = ["/img/9.jpg",]


let content = `<div id="top" class="wrapper2">
<ul class="product_list"><li>
<a href="/members1/index.html?id=8">
  <img src="/img/8.jpg" alt="8">
  <p class="name">JIN</p>
</a>
</li>
</ul></div>`;




let content2 = document.getElementById('member_list_2');
content2.insertAdjacentHTML("beforebegin", content)


