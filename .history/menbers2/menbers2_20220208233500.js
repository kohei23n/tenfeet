// $(function () {

//     $('.button').on("click", function () {
//         if ($('#header').hasClass('open')) {
//             $('header').removeClass('open');
//         } else {
//             $('header').addClass('open');
//         }
//     });

//     $('#mask').on("click", function () {
//         $('header').removeClass('open');
//     });
// })

function GetQueryString()
{
    var result = {};
    if( 1 < window.location.search.length )
    {
        // 最初の1文字 (?記号) を除いた文字列を取得する
        var query = window.location.search.substring( 1 );

        // クエリの区切り記号 (&) で文字列を配列に分割する
        var parameters = query.split( '&' );

        for( var i = 0; i < parameters.length; i++ )
        {
            // パラメータ名とパラメータ値に分割する
            var element = parameters[ i ].split( '=' );

            var paramName = decodeURIComponent( element[ 0 ] );
            var paramValue = decodeURIComponent( element[ 1 ] );

            // パラメータ名をキーとして連想配列に追加する
            result[ paramName ] = paramValue;
        }
    }
    return result;
}

let result = GetQueryString();


let content = `<h1 class="member_name">プロダクトタイトル</h1>
<section class="section_member">
<img src="../img/${result["id"]}.jpg" alt="" class="member_img">
<div class="member_content">
        <p class="message_top">テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        <p class="message">テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        <p class="message">¥99,999 +tax</p>
        <p class="message">SIZE:      W999 × D999 × H999<br>
        COLOR:       テキスト<br>
        MATERIAL:       テキストテキストテキスト</p>
</div>
</section>

<a href="../index.html" class="page_back">Back To Products</a>
`

let content2 = document.getElementById("content2");
content2.insertAdjacentHTML("beforebegin", content);