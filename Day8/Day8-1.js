const input = ``



const loopThroughInstructions = (map, instructions) => {
    let currentPosition = 'AAA'
    let instructionsPointer = 0
    let moveCounter = 0

    while (currentPosition !== 'ZZZ') {
        if (instructions[instructionsPointer] === 'L') {
            currentPosition = map[currentPosition][0]
        } else {
            currentPosition = map[currentPosition][1]
        }

        if (instructionsPointer + 1 >= instructions.length) {
            instructionsPointer = 0
        } else {
            instructionsPointer++
        }
        moveCounter++
    }
    return moveCounter
}

const parseInputIntoMap = input => {
    const instructions = input.split('\n')[0]
    const map = {}
    const splitInput = input.split('\n')
    splitInput.splice(0, 2)

    for (let line of splitInput) {
        const splitLine = line.split(' ')
        const valueArr = []
        const key = splitLine[0]
        const leftSplit = splitLine[2].split('')
        leftSplit.shift()
        leftSplit.pop()
        valueArr.push(leftSplit.join(''))
        const rightSplit = splitLine[3].split('')
        rightSplit.pop()
        valueArr.push(rightSplit.join(''))
        map[key] = valueArr
    }

    return loopThroughInstructions(map, instructions)
}

console.log(parseInputIntoMap(input))

