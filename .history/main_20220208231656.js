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

let images = ["/img/9.jpg","/img/10.jpg","/img/11.jpg","/img/12.jpg","/img/13.jpg","/img/14.jpg","/img/15.jpg","/img/16.jpg"];
let names = ["NAOKI","KASHIKEN","SACCHAN","REIREI","KENTHI","TSUYOCHAN","KAZUNORI","KAZUKI"];


let content = ''
for(let i =0; i<images.length; i++){
  content +=
`<div id="top" class="wrapper2">
<ul class="product_list"><li>
<a href="/members1/index.html?id=8">
  <img src="`images[i]`" alt="``">
  <p class="name">`names[i]`</p>
</a>
</li>
</ul></div>`};




let content2 = document.getElementById('member_list_2');
content2.insertAdjacentHTML("beforebegin", content)


