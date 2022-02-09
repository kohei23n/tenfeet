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
for(let i =0; i<4; i++){
  content +=
`<li>
<a href="/members2/index.html?id=${i+9}">
  <img src="${images[i]}" alt="${i}" class="image">
  <p class="name">${names[i]}</p>
</a>
</li>
`};

// var show = 4; //最初に表示する件数
// var num = 3;  //clickごとに表示したい件数
// var contents = '.product_list li'; // 対象のlist
// $(contents + ':nth-child(n + ' + (show + 1) + ')').addClass('is-hidden');
// $('.more').on('click', function () {
//   $(contents + '.is-hidden').slice(0, num).removeClass('is-hidden');
//   if ($(contents + '.is-hidden').length == 0) {
//     $('.more').fadeOut();
//   }
// });




let content2 = document.getElementById('member_list_3');
content2.insertAdjacentHTML("beforebegin", content);

let content3 = ''
for(let i =4; i<images.length; i++){
  content +=
`<li>
<a href="/members2/index.html?id=${i+9}">
  <img src="${images[i]}" alt="${i}" class="image">
  <p class="name">${names[i]}</p>
</a>
</li>
`};

let content4 = document.getElementById('member_list_2');
content4.insertAdjacentHTML("beforebegin", content3);