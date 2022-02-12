let posse_names = ['KOHEI', 'ONOKAN', 'TAIKI', 'EIKI', 'KAREN', 'AKIRA', 'MOMO', 'JIN']
let posse_description = ['おいしい！', '楽しい！', '嬉しい！', '今から', '今から', '今から', '今から', '今から'];

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
console.log(result["id"]);

let text = 
'<div class="content wrapper">'
+ '<h1 class="title">プロダクトタイトル</h1>'

+ '<div id="item">'

+ '<div class="item_img">'
+ `<img src="/img/${result["id"]}.jpg">`
+ '</div>'

+ '<div class="item_text">'
+ `<p>${posse_names[result["id"] - 1]}</p>`
+ `<p>${posse_description[result["id"] - 1]}</p>`
+ '</div>'

+ '</div>'

+ '</div>'
// + `<h1>このページ番号は ${result["id"]} です！</h1>`


let content = document.getElementById('content1');
content.insertAdjacentHTML("beforeend", text);