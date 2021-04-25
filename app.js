//ゲームをスタートさせる
const $startBtn = document.getElementById('quiz-btn');
$startBtn.addEventListener('click', (e) => {
    document.getElementById("quiz").classList.add("slidein");
    document.getElementById("result").classList.remove("slidein");
    document.getElementById("result").classList.remove("slideout");
    document.getElementById("quiz").classList.remove("slideout");
    setupQuiz();
    return false;
});

//ゲームをリセットする
const $resetBtn = document.getElementById('reset');
$resetBtn.addEventListener('click', (e) => {
    document.getElementById("quiz").classList.add("slideout");
    document.getElementById("quiz").classList.remove("slidein");
    resetQuiz();
    return false;
});

const $restartBtn = document.getElementById('restart');
$restartBtn.addEventListener('click', (e) => {
    document.getElementById("quiz").classList.add("slideout");
    document.getElementById("quiz").classList.remove("slidein");
    document.getElementById("result").classList.add("slideout");
    document.getElementById("result").classList.remove("slidein");
    
    resetQuiz();
    return false;
});
//クイズの内容

const quiz = [{
        question: '広島県の特産物はどれ？',
        answers: [
            'ボルビック',
            'クリスタルガイザー',
            '牡蠣',
            'いろはす'
        ],
        correct: '牡蠣'
    },
    {
        question: '世界トップシェアを持つ筆の産地の名前は？',
        answers: [
            '札幌',
            'サン・フランシスコ',
            '熊野',
            'カイロ'
        ],
        correct: '熊野'
    },
    {
        question: 'もみじ饅頭を作っている会社は？',
        answers: [
            'にしき堂',
            '松屋',
            'すき屋',
            '吉野家'
        ],
        correct: 'にしき堂'
    }
];


const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文と選択肢を定義する
const setupQuiz = () => {
    document.getElementById('js-question').textContent = "Q" + (quizIndex + 1) + " " + quiz[quizIndex].question;
    for (let i = 0; i < buttonLength; i++) {
        $button[i].textContent = quiz[quizIndex].answers[i];
    }
}


//クイズをリセットする
const resetQuiz = () => {
    quizIndex = 0;
    score = 0;
}


//クリックされたら正誤判定をする
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解です！');
        score++;
    } else {
        window.alert('不正解です！');
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        //問題数がまだあるときの処理
        setupQuiz();
    } else {
        //問題数がもうないときの処理
        document.getElementById("result").classList.add("slidein");
        document.getElementById("q_len").innerHTML = quizLength;
        document.getElementById("score").innerHTML = score;
        quizIndex = 0;
    }
}

for (let i = 0; i < buttonLength; i++) {
    $button[i].addEventListener('click', (e) => {
        clickHandler(e);
    });
}