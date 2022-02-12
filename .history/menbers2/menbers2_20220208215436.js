let content = `<h1 class="member_name">プロダクトタイトル</h1>
<section class="section_member">
<img src="../img/9.jpg" alt="" class="member_img">
<div class="member_content">
        <p class="content">テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        <p class="content">テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        <p>¥99,999 +tax</p>
        <p>SIZE: </p>
        <p>COLOR: </p>
        <p>MATERIAL:</p>
</div>
</section>
<button class="page_back">Back To Products</button>
`

let content2 = document.getElementById("content2");
content2.insertAdjacentHTML("beforebegin", content);