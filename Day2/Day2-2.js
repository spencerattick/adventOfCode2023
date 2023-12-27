const input = ``

const splitInput = input.split('\n')

const calculateTotalPerGame = nums => {
    let total = 1
    for (let num of nums) {
        total *= num
    }
    console.log('TOTAL ', total)
    return total 
}


const getMaxColorsPerGame = (gameInput) => {
    const maxColorsPerGame = {
        red: 0, 
        green: 0, 
        blue: 0
    }
    for (let round of gameInput.split(';')) {
        for (let color of round.split(',')) {
            color = color.split(' ').splice(1)
            const colorNum = Number(color[0])
            const colorColor = color[1]
            if (maxColorsPerGame[colorColor] < colorNum) {
                maxColorsPerGame[colorColor] = colorNum
            }
        }
    }

    return calculateTotalPerGame(Object.values(maxColorsPerGame))
    
}

const processEachGame = (splitInput) => {
    let totalResult = 0
    for (let game of splitInput) {
        game = game.split(':').splice(1)
        totalResult += getMaxColorsPerGame(game.join(''))
    }
    return totalResult
}





console.log(processEachGame(splitInput))
