const input = ``

//max consts
const maxPossibleColorValues = {
    red: 12,
    green: 13,
    blue: 14
}

let gameRowPossible = true

let totalPossible = 0

const splitInput = input.split('\n')

const checkIfCubeCombosArePossible = (shownCubesByColor, gameNum) => {
    for (let colorSets of shownCubesByColor) {
        const splitColorSets = colorSets.split(' ').slice(1)
        const colorNum = Number(splitColorSets[0])
        const colorColor = splitColorSets[1]
        if (Number(colorNum) > maxPossibleColorValues[colorColor]) {
            gameRowPossible = false
            return
        } 
    }
    return gameNum
}

const splitInputIntoRows = (gameInput, gameNum) => {
    for (let shownCubes of gameInput) {
        if (!gameRowPossible) {
            return
        }
        const shownCubesByColor = shownCubes.split(',')
        checkIfCubeCombosArePossible(shownCubesByColor, gameNum)
    }
    return gameNum
}

const processEachGame = (splitInput, gameNum = 0) => {
    for (let i = 0; i <= splitInput.length; i++) {
        if (gameRowPossible && gameNum > 0) {
            totalPossible += gameNum
        } else {
            gameRowPossible = true
        }
    
        if (!splitInput[i]) {
            return totalPossible
        }
    
        gameNum = Number(splitInput[i].split(':')[0].split(' ')[1])
        const gameInput = splitInput[i].split(':').slice(1).join().split(';')
        splitInputIntoRows(gameInput, gameNum)
    }
}





console.log(processEachGame(splitInput))
