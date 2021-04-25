//ゲームをスタートさせる
const $startBtn = document.getElementById('quiz-btn');
$startBtn.addEventListener('click', (e) => {
    document.getElementById("quiz").classList.add("slidein");
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
//クイズの内容

const quiz = [{
        question: 'このクイズはなんのクイズ？',
        answers: [
            'ボルビック',
            'クリスタルガイザー',
            '水',
            'おみず'
        ],
        correct: 'おみず'
    },
    {
        question: '水の化学式は？',
        answers: [
            'H₂O',
            'CO₂',
            'プラスチック',
            '目覚まし時計'
        ],
        correct: 'H₂O'
    },
    {
        question: '水が凍ると何になる？',
        answers: [
            'おにぎり',
            '小売',
            'いろはす',
            '氷'
        ],
        correct: '氷'
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
        window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！');
        quizIndex = 0;
    }
}

for (let i = 0; i < buttonLength; i++) {
    $button[i].addEventListener('click', (e) => {
        clickHandler(e);
    });
}