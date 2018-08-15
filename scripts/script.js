let time = 5
let score = 0
let isPlaying // true - false

const wordInput = document.querySelector('#word-input')
const currentWord = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message')
const seconds = document.querySelector('#seconds')
const exitBtn = document.querySelector('.exit-btn')


const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
]
const hideModal = () => {
    document.querySelector('.myModal').style.opacity = 0
   setTimeout(()=>{
    document.querySelector('.myModal').style.display = 'none'
   },1000)
    
}

const showWord = () => {
    const randIndex = Math.floor(Math.random() * words.length)
    currentWord.innerHTML = words[randIndex]
}

const init = () => {
    showWord(words)
    wordInput.addEventListener('input', startMatch)
    setInterval(countDown, 1000)
    setInterval(checkGameStatus, 50)
}
const countDown = () => {
    if (time > 0) {
        time--
    } else if (time === 0) {
        console.log('GAME OVER')
        isPlaying = false

    }
    if(score<0){
        scoreDisplay.innerHTML = 0
    }
    timeDisplay.innerHTML = time

}
const checkGameStatus = () => {
    if (!isPlaying && time === 0) {
        message.innerHTML =  'game over'
        score = -1;
    }
}
const matchWords = () => {
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'correct'
        return true
    } else {
        message.innerHTML = ''
        return false
    }
}
const startMatch = () => {
    if(matchWords()){
        isPlaying = true
        time = 6
        showWord(words)
        wordInput.value = ''
        score++

    }
    scoreDisplay.innerHTML = score
}

exitBtn.addEventListener('click', hideModal)
window.addEventListener('load', init)