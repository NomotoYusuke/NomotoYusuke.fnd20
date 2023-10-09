'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const correct = `正解です` ;
const incorrect = `不正解です` ;

function question(){
    const quiz_1 = document.getElementById(`quiz-1`);
    //const select = "1問目:" + quiz_1.answer.value + "を選択しました";
    if (quiz_1.answer.value === 'a') {
        alert("❌不正解❌ 青虫には葉をいっぱい食べられてツルツルてんになってしまいました");
      // 正解はB
    } else if (quiz_1.answer.value === 'b') {
        alert("💮正解㊗ てんとう虫は何も悪くないです！");
    } else if (quiz_1.answer.value === 'c') {
        alert("❌不正解❌ 今も戦っています。気持ち悪い虫です");
    } else{
        alert("答えを選択してください");
    }
}

