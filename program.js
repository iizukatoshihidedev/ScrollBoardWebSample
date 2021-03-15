//====================================
//
//超簡単電光掲示板
//Toshihide Iizuka
//
//2021/03/15
//
//====================================

//Main
function init() {
    var params = (new URL(document.location)).searchParams;
    var text = removehtml(params.get('text'));
    var bodyclear = removehtml(params.get('bodyclear'));
    var textcolor = removehtml(params.get('textcolor'));
    var backgroundcolor = removehtml(params.get('backgroundcolor'));
    
    if ( text != "" ) {
        const message = document.getElementById("message");
        message.value = text;
        
        post();
    
        var body = document.body;
        if ( bodyclear == "true" ) {
            body.innerHTML = "<div id='board'><p>" + text + "</p></div>";
        }
        
        var board = document.getElementById("board");
        if ( textcolor != "" ) {
            board.style.color = textcolor;
        }
        if ( backgroundcolor != "" ) {
            body.style.backgroundColor = backgroundcolor;
        }
    }
}

function post() {
    const msg = removehtml(document.getElementById("message").value);
    
    if ( msg != "" ) {
        var board = document.getElementById("board");
        board.innerHTML = "<p>" + msg + "</p>";
    } else {
        alert("名前とメッセージを入力してください");
    }
}
        
function removehtml(str) {
    return str.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'');
}