let content = `<h1 class="member_name">プロダクトタイトル</h1>
<section class="section_member">
<img src="../img/9.jpg" alt="" class="member_img">
<div class="member_content">
        <p class="message">テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        <p class="message">テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        <p class="message">¥99,999 +tax</p>
        <p class="message">SIZE:      W999 × D999 × H999<br>
        COLOR:       テキスト<br>
        MATERIAL:</p>
</div>
</section>
<button class="page_back">Back To Products</button>
`

let content2 = document.getElementById("content2");
content2.insertAdjacentHTML("beforebegin", content);