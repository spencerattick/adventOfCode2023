const test = ``

const nums = {'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9'}

const rowsObj = {}

const transformWordsToNums = row => {
    const rowKey = row
    for (let i = 0; i < row.length; i++) {
        if (Number(row[i])) {
            continue
        }
       if (row[i] === 'o') {
            if (row.indexOf('one') === i) {
                row = row.replace('one', '1')
            }
        } else if (row[i] === 't' && row[i + 1] === 'w') {
            if (row.indexOf('two') === i) {
                row = row.replace('two', '2')
            }
        } else if (row[i] === 't' && row[i + 1] === 'h') {
            if (row.indexOf('three') === i) {
                row = row.replace('three', '3')
            }
        } else if (row[i] === 'f' && row[i + 1] === 'o') {
            if (row.indexOf('four') === i) {
                row = row.replace('four', '4')
            }
        } else if (row[i] === 'f' && row[i + 1] === 'i') {
            if (row.indexOf('five') === i) {
                row = row.replace('five', '5')
            }
        } else if (row[i] === 's' && row[i + 1] === 'i') {
            if (row.indexOf('six') === i) {
                row = row.replace('six', '6')
            }
        } else if (row[i] === 's' && row[i + 1] === 'e') {
            if (row.indexOf('seven') === i) {
               row = row.replace('seven', '7')
            }
        } else if (row[i] === 'e') {
            if (row.indexOf('eight') === i) {
                row = row.replace('eight', '8')
            }
        } else if (row[i] === 'n') {
            if (row.indexOf('nine') === i) {
                row =row.replace('nine', '9')
            }
        }
    }

    return rowsObj[rowKey] = row
}

const getNum = row => {
    for (let char of row.split('')) {
        if (Number(char)) {
            return char
        }
    }
}

const processData = data => {
    const dataSplit = data.split('\n')
    let total = 0
    for (let row of dataSplit) {
        const transformedRow = transformWordsToNums(row)
        const firstNum = getNum(transformedRow)
        const secondNum = getNum(transformedRow.split('').reverse().join(''))

        total += Number(firstNum + secondNum)
    }
    console.log(rowsObj)
    return total
}

console.log(processData(test))