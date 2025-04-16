const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const machineResult = document.querySelector('.machine-result')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    const machineChoice = playMachine()
    compareResults(humanChoice, machineChoice)
}

const playMachine = (machineChoice) => {
    const choices = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const compareResults = (human, machine) => {
    machineResult.innerHTML = getEmoji(machine)

    if (human === machine) {
        result.innerHTML = "Deu empate! &#x1F605;"
    } else if
        ((human === 'pedra' && machine === 'tesoura') ||
        (human === 'papel' && machine === 'pedra') ||
        (human === 'tesoura' && machine === 'papel')) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou! &#x1F60E;"
    }
    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu! &#x1F62D;"
    }

}

function getEmoji(choice) {
    switch (choice) {
        case 'pedra': return '&#x1F44A;'
        case 'papel': return '&#x1F590;'
        case 'tesoura': return '&#x270C;'
    }
}