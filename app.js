const quiz = [
    {
        question : '私がよく飲む水は？',
        answers : [
                    'ボルビック',
                    'クリスタルガイザー',
                    'いろはす',
                    '雨水'
            ],
        correct : 'クリスタルガイザー'
    },
    {
        question : '水の化学式は？',
        answers : [
                    'H₂O',
                    'CO₂',
                    'プラスチック',
                    '目覚まし時計'
            ],
        correct : 'H₂O'
    },
    {
        question : '水が凍ると何になる？',
        answers : [
                    'おにぎり',
                    '小売',
                    'いろはす',
                    '氷'
            ],
        correct : '氷'
    }
];


const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文と選択肢を定義する
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    for (let i = 0; i < buttonLength; i++) {
        $button[i].textContent = quiz[quizIndex].answers[i];
    }
}
setupQuiz();


//クリックされたら正誤判定をする
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解です！');
        score++;
    } else {
        window.alert('不正解です！');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数がまだあるときの処理
        setupQuiz();
    }else{
        //問題数がもうないときの処理
        window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
}

for (let i = 0; i < buttonLength; i++) {
    $button[i].addEventListener('click', (e) => {
        clickHandler(e);
    });
}