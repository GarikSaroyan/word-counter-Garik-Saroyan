const inputText = document.getElementById('inputText')
const letSum = document.getElementById('letSum')
const letWords = document.getElementById('letWords')
const letSentences = document.getElementById('letSentences')


inputText.addEventListener('keyup', (event) => {
    console.log('inputText', inputText.value)
    letters(inputText.value)
})


function letters(str) {
    if (str.length === 0) {
        letSum.innerHTML=0;

        return
    }

    let sum=0

    for (let i = 0; i < str.length; i++){
        if (str[i].match(/[a-z]/i)){
            sum++
        }
    }

    console.log('sum',sum )

    letSum.innerHTML=sum;
}

function words(str) {

}

function sentences() {

}


