const input = ``

const splitInput = input.split('\n')

let partSum = 0

const loopInput = splitInput => {
    for (let i = 0; i < splitInput.length; i++) {
        getNumAndCoordinates(splitInput[i].split('.'), i)
    }
    console.log('SOMETHING')
    return partSum
}

const getNumAndCoordinates = (row, rowNum) => {
    let num, startCoordinate, endCordinate, numOfCharsInNum

    for (let i = 0; i < row.length; i++) {
        if (Number(row[i]) || row[i].length > 1) {
            if (!Number(row[i])) {
                num = ''
                for (let char of row[i].split('')) {
                    if (Number(char)) {
                        num+=char
                    }
                }
                num = Number(num)
            } else {
                num = Number(row[i])
            }
            startCoordinate = row.join('.').indexOf(num.toString())
            numOfCharsInNum = num.toString().length - 1
            endCordinate = startCoordinate + numOfCharsInNum

            if (isSymbolLeftOfNum(startCoordinate,rowNum)) {
                partSum+=num
            } else if (isSymbolRightOfNum(endCordinate, rowNum)) {
                partSum+=num
            } else if (isSymbolAboveNum(startCoordinate, endCordinate, rowNum)) {
                partSum+=num
            } else if (isSymbolBelowNum(startCoordinate, endCordinate, rowNum)) {
                partSum+=num
            }
            // console.log('NUM ', num)
            // console.log('START ', startCoordinate)
            // console.log('LENGTH ', numOfCharsInNum)
            // console.log('END ', endCordinate)
        }
    }

}

const isSymbolLeftOfNum = (startCoordinate, rowNum) => {
    if (!splitInput[rowNum][startCoordinate - 1]) {
        return false
    }

    if (!Number(splitInput[rowNum][startCoordinate - 1]) && splitInput[rowNum][startCoordinate - 1] !== '.') {
        return true
    } else {
        return false
    }
}

const isSymbolRightOfNum = (endCordinate, rowNum) => {
    if (!splitInput[rowNum][endCordinate + 1]) {
        return false
    }

    if (!Number(splitInput[rowNum][endCordinate + 1]) && splitInput[rowNum][endCordinate + 1] !== '.') {
        return true
    } else {
        return false
    }
}


const isSymbolAboveNum = (startCoordinate, endCordinate, rowNum) => {
    if (rowNum - 1 < 0) {
        return false
    }

    let loopStart

    if (startCoordinate - 1 >= 0) {
        loopStart = startCoordinate - 1
    } else {
        loopStart = 0
    }

    let loopEnd

    if (endCordinate + 1 <= splitInput[0].length - 1) {
        loopEnd = endCordinate + 1
    } else {
        loopEnd = splitInput[0].length - 1
    }

    for (let i = loopStart; i <= loopEnd; i++) {
        if (!Number(splitInput[rowNum - 1][i]) && splitInput[rowNum - 1][i] !== '.') {
            return true
        }
    }

    return false

}

const isSymbolBelowNum = (startCoordinate, endCordinate, rowNum) => {
    if (rowNum + 1 > splitInput.length) {
        return false
    }

    let loopStart

    if (startCoordinate - 1 >= 0) {
        loopStart = startCoordinate - 1
    } else {
        loopStart = 0
    }

    let loopEnd

    if (endCordinate + 1 <= splitInput[0].length - 1) {
        loopEnd = endCordinate + 1
    } else {
        loopEnd = splitInput[0].length - 1
    }

    for (let i = loopStart; i <= loopEnd; i++) {
        if (!Number(splitInput[rowNum + 1][i]) && splitInput[rowNum + 1][i] !== '.') {
            return true
        }
    }
    return false

}

console.log(loopInput(splitInput))