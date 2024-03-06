const inputText = document.getElementById('inputText')
const letSum = document.getElementById('letSum')
const letWords = document.getElementById('letWords')
const letSentences = document.getElementById('letSentences')


inputText.addEventListener('keyup', (event) => {
    if (inputText.value.length === 0) {
        letSum.innerHTML = 0
        letWords.innerHTML = 0
        letSentences.innerHTML = 0
        return
    }
    letters(inputText.value)
    words(inputText.value)
    sentences(inputText.value)
})


function letters(str) {
    let sum = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i)) {
            sum++
        }
    }
    letSum.innerHTML = sum;
}

function words(str) {
    const array = str.trim().split(/\s+/);
    letWords.innerHTML = array.length
}

function sentences(str) {
    const array = str.trim().split('.');
    letSentences.innerHTML = array.filter(i => i).length
}

