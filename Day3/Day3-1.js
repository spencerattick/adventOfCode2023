const input = ``

const splitInput = input.split('\n')


const checkAboveSpecialChars = (start, end, rowNum) => {
    if (rowNum <= 0) {
        return false 
    } 

    if (start > 0) {
        start--
    }

    if (end < splitInput[0].length - 1) {
        end++
    }
    
    for (let i = start; i <= end; i++) {
        const currentChar = splitInput[rowNum - 1][i]
        if (!Number(currentChar) && currentChar !== '.') {
            console.log('ABOVE')
            return true
        }
    }

    return false
}

const checkBelowSpecialChars = (start, end, rowNum) => {
    if (rowNum === splitInput.length - 1) {
        return false
    }

    if (start > 0) {
        start--
    }

    if (end < splitInput[0].length) {
        end++
    }

    for (let i = start; i <= end; i++) {
        const currentChar = splitInput[rowNum + 1][i] 
        if (!Number(currentChar) && currentChar !== '.') {
            console.log('BELOW')
            return true
        }
    }
    
    return false
}

const checkLeftSpecialChars = (start, rowNum) => {
    if (start > 0) {
        start--
    } else {
        return false
    }
    
    if (!Number(splitInput[rowNum][start]) && splitInput[rowNum][start] !== '.') {
        console.log('LEFT')
        return true
    }

    return false
}

const checkRightSpecialChars = (end, rowNum) => {
    if (end === splitInput[0].length - 1) {
        return false
    } else {
        end++
    }

    if (!Number(splitInput[rowNum][end]) && splitInput[rowNum][end] !== '.') {
        console.log('RIGHT')
        return true
    }

    return false
}

const loopThroughDataSet = splitInput => {
    let currentNum = ''
    let currentNumStart, currentNumEnd
    let totalPartNums = 0

    for (let i = 0; i < splitInput.length; i++) {
        for (let j = 0; j < splitInput[i].length; j++) {
            if (Number(splitInput[i][j])) {
                if (typeof currentNumStart !== 'number') {
                    currentNumStart = j
                }
                currentNum+=splitInput[i][j]
            } else if (currentNum.length > 0) {
                currentNumEnd = j - 1
                console.log(currentNum, currentNumStart, currentNumEnd)
                if (checkAboveSpecialChars(currentNumStart, currentNumEnd, i)) {
                    totalPartNums += Number(currentNum)
                } else if (checkBelowSpecialChars(currentNumStart, currentNumEnd, i)) {
                    totalPartNums += Number(currentNum)
                } else if (checkLeftSpecialChars(currentNumStart, i)) {
                    totalPartNums += Number(currentNum)
                } else if (checkRightSpecialChars(currentNumEnd, i)) {
                    totalPartNums += Number(currentNum)
                } else {
                    console.log('NOT A PART')
                }
                currentNumStart = null
                currentNumEnd = null
                currentNum = ''
            }
        }
    }
    return totalPartNums
}

console.log(loopThroughDataSet(splitInput))

module.exports = {
    loopThroughDataSet
}