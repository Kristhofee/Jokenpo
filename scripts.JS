const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const machineResult = document.querySelector('.machine-result')
const drawScore = document.querySelector('#draw-score')

let humanScoreNumber = 0
let machineScoreNumber = 0
let drawScoreNumber = 0

const GAME_OPTIONS = {
    ROCK: 'pedra',
    PAPER: 'papel',
    SCISSORS: 'tesoura'
}

const playHuman = (humanChoice) => {
    const machineChoice = playMachine()
    compareResults(humanChoice, machineChoice)
}

const playMachine = (machineChoice) => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const compareResults = (human, machine) => {
    machineResult.innerHTML = getEmoji(machine)

    if (human === machine) {
        drawScoreNumber++
        drawScore.innerHTML = drawScoreNumber
        result.innerHTML = "Deu empate! &#x1F605;"
    } else if
        ((human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {
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
        case GAME_OPTIONS.ROCK: return '&#x1F44A;'
        case GAME_OPTIONS.PAPER: return '&#x1F590;'
        case GAME_OPTIONS.SCISSORS: return '&#x270C;'
    }
}