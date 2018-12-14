
// ダイアログ
if( confirm('名前入力に遷移します') ){
  // 「OK」時の処理
  var name = prompt('名前を入力してください', 'キラメキタロウ');
  document.getElementById('box').innerHTML = new Date().toLocaleString() + '<br>Hello World!<br>' + name + 'さん。<br><br>';
} else {
  // 「キャンセル」時の処理
	alert('キャンセルされました');
}


// 要素追加
for(var i = 0; i < 5; i++) {
  var p = document.createElement('p');
  document.getElementById('box').appendChild(p);  // 空のp要素をboxに追加
  p.appendChild( document.createTextNode('Hello world') );  // p要素直下のテキストを作成
  p.setAttribute('class', 'bordered');  // class属性にborderedを設定
}


// 時限式実行
var count = 0;
setInterval(function() {
  count++;
  document.getElementById('box').innerHTML += count + '秒<br>';
}, 1000); // 1000ミリ秒（1秒）ごとに実行するよう予約


// 自作関数定義
function addText(text) {
  setTimeout(function() {
    document.getElementById('box').innerHTML += text + '<br>';
  }, 1000); // 1000ミリ秒（1秒）後に実行するよう予約
}


// 以下イベントハンドラ
document.getElementById('target-button').onclick = function() {
  var targetText = document.getElementById('target-text').value;
  addText(targetText);
};
document.getElementById('button1').onclick = function() {
  addText('どん！');
};
document.getElementById('button2').onclick = function() {
  addText('かっ！');
};
document.getElementById('button3').onclick = function() {
  addText('ぷしゅ');
};

document.getElementById('target-select').onchange = function() {
  console.log("value : " + this.value);
};
document.getElementById('target-select').onmouseover = function() {
  console.log("mouse over " + this.id);
};
document.getElementById('target-select').onmouseout = function() {
  console.log("mouse out " + this.id);
};
