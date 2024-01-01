const test = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`

const nums = {'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9'}

// pgmmmcvcrmxsevenfour1three1threexx: [ '7', '1' ]


const transformWordsToNumsGetFirst = row => {
    for (let i = 0; i < row.length; i++) {
        if (Number(row[i])) {
            return row[i]
        }
       if (row[i] === 'o') {
            if (row.indexOf('one') === i) {
                // row = row.replace('one', '1')
                return '1'
            }
        } else if (row[i] === 't' && row[i + 1] === 'w') {
            if (row.indexOf('two') === i) {
                // row = row.replace('two', '2')
                return '2'
            }
        } else if (row[i] === 't' && row[i + 1] === 'h') {
            if (row.indexOf('three') === i) {
                // row = row.replace('three', '3')
                return '3'
            }
        } else if (row[i] === 'f' && row[i + 1] === 'o') {
            if (row.indexOf('four') === i) {
                // row = row.replace('four', '4')
                return '4'
            }
        } else if (row[i] === 'f' && row[i + 1] === 'i') {
            if (row.indexOf('five') === i) {
                // row = row.replace('five', '5')
                return '5'
            }
        } else if (row[i] === 's' && row[i + 1] === 'i') {
            if (row.indexOf('six') === i) {
                // row = row.replace('six', '6')
                return '6'
            }
        } else if (row[i] === 's' && row[i + 1] === 'e') {
            if (row.indexOf('seven') === i) {
            //    row = row.replace('seven', '7')
               return '7'
            }
        } else if (row[i] === 'e') {
            if (row.indexOf('eight') === i) {
                // row = row.replace('eight', '8')
                return '8'
            }
        } else if (row[i] === 'n') {
            if (row.indexOf('nine') === i) {
                // row =row.replace('nine', '9')
                return '9'
            }
        }
    }

    // return rowsObj[rowKey] = row
    return row
}

const transformWordsToNumsGetSecond = row => {
    for (let i = row.length - 1; i >= 0; i--) {
        if (Number(row[i])) {
            return row[i]
        }
       if (row[i] === 'e' && row[i - 1] === 'n' && row[i - 2] === 'o') {
            // row = row.replace('one', '1')
            return '1'
        } else if (row[i] === 'o') {
            if (row.lastIndexOf('two') === i - 2) {
                // row = row.replace('two', '2')
                return '2'
            }
        } else if (row[i] === 'e' && row[i - 1] === 'e') {
            if (row.lastIndexOf('three') === i - 4) {
                // row = row.replace('three', '3')
                return '3'
            }
        } else if (row[i] === 'r') {
            if (row.lastIndexOf('four') === i - 3) {
                // row = row.replace('four', '4')
                return '4'
            }
        } else if (row[i] === 'e' && row[i - 1] === 'v') {
            if (row.lastIndexOf('five') === i - 3) {
                // row = row.replace('five', '5')
                return '5'
            }
        } else if (row[i] === 'x') {
            if (row.lastIndexOf('six') === i - 2) {
                // row = row.replace('six', '6')
                return '6'
            }
        } else if (row[i] === 'n' && row[i - 1] === 'e') {
            if (row.lastIndexOf('seven') === i - 4) {
            //    row = row.replace('seven', '7')
               return '7'
            }
        } else if (row[i] === 't') {
            if (row.lastIndexOf('eight') === i - 4) {
                // row = row.replace('eight', '8')
                return '8'
            }
        } else if (row[i] === 'e' && row[i - 1] === 'n') {
            if (row.lastIndexOf('nine') === i - 3) {
                // row =row.replace('nine', '9')
                return '9'
            }
        }
    }

    return row
}

const obj = {}

const processData = data => {
    const dataSplit = data.split('\n')
    let total = 0
    for (let row of dataSplit) {
        const firstNum = transformWordsToNumsGetFirst(row)
        const secondNum = transformWordsToNumsGetSecond(row)
        obj[row] = [firstNum, secondNum]

        total += Number(firstNum + secondNum)
    }
    // console.log(obj)
    return total
}

console.log(processData(test))