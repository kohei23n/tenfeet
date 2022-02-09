let content = `<h1 class="member_name">プロダクトタイトル</h1>
<section class="section_member">
<img src="../img9jpg" alt="" class="member_img">
<div class="member_content">
        <p>あああああああ</p>
        <p>あああああああ</p>
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