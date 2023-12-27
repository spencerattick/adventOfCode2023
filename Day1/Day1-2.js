const test = ``

const newData = ''

const nums = {'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9'}

const transformFirstWordToNum = row => {
    let counter = 0
    let newRow = row
    while (counter < newRow.length - 3) {
        let substring3Chars = newRow.substring(counter, counter + 3)
        let substring4Chars = newRow.substring(counter, counter + 4)
        let substring5Chars = newRow.substring(counter, counter + 5)

        if (substring3Chars === 'one' || substring3Chars === 'two' || substring3Chars === 'six') {
            if (substring3Chars === 'one') {
                return newRow.replaceAll('one', '1')
            } else if (substring3Chars === 'two') {
                return newRow.replaceAll('two', '2')
            } else if (substring3Chars === 'six') {
                return newRow.replaceAll('six', '6')
            }
        } else if (substring4Chars === 'four' || substring4Chars === 'five' || substring4Chars === 'nine') {
            if (substring4Chars === 'four') {
                return newRow.replaceAll('four', '4')
            } else if (substring4Chars === 'five') {
                return newRow.replaceAll('five', '5')
            } else if (substring4Chars === 'nine') {
                return newRow.replaceAll('nine', '9')
            }
        } else if (substring5Chars === 'three' || substring5Chars === 'seven' || substring5Chars === 'eight') {
            if (substring5Chars === 'three') {
                return newRow.replaceAll('three', '3')
            } else if (substring5Chars === 'seven') {
                return newRow.replaceAll('seven', '7')
            } else if (substring5Chars === 'eight') {
                return newRow.replaceAll('eight', '8')
            }
        } else {
            counter++
        }
    }
    return newRow
}

const transformLastWordToNum = row => {
    let counter = row.length
    let newRow = row
    while (counter > 3) {
        let substring3Chars = newRow.substring(counter - 3, counter)
        let substring4Chars = newRow.substring(counter - 4, counter)
        let substring5Chars = newRow.substring(counter - 5, counter)

        if (substring3Chars === 'one' || substring3Chars === 'two' || substring3Chars === 'six') {
            if (substring3Chars === 'one') {
                return newRow.replaceAll('one', '1')
            } else if (substring3Chars === 'two') {
                return newRow.replaceAll('two', '2')
            } else if (substring3Chars === 'six') {
                return newRow.replaceAll('six', '6')
            }
        } else if (substring4Chars === 'four' || substring4Chars === 'five' || substring4Chars === 'nine') {
            if (substring4Chars === 'four') {
                return newRow.replaceAll('four', '4')
            } else if (substring4Chars === 'five') {
                return newRow.replaceAll('five', '5')
            } else if (substring4Chars === 'nine') {
                return newRow.replaceAll('nine', '9')
            }
        } else if (substring5Chars === 'three' || substring5Chars === 'seven' || substring5Chars === 'eight') {
            if (substring5Chars === 'three') {
                return newRow.replaceAll('three', '3')
            } else if (substring5Chars === 'seven') {
                return newRow.replaceAll('seven', '7')
            } else if (substring5Chars === 'eight') {
                return newRow.replaceAll('eight', '8')
            }
        } else {
            counter--
        }
    }
    return newRow
}

const getNum = row => {
    for (let char of row.split('')) {
        if (!isNaN(Number(char))) {
            return char
        }
    }
}

const processData = data => {
    const dataSplit = data.split('\n')
    let total = 0
    for (let row of dataSplit) {
        const firstWordReplacedWithNum = transformFirstWordToNum(row)
        const lastWordReplacedWithNum = transformLastWordToNum(firstWordReplacedWithNum)
        const firstNum = getNum(lastWordReplacedWithNum)
        const secondNum = getNum(lastWordReplacedWithNum.split('').reverse().join(''))

        total += Number(firstNum + secondNum)
    }
    return total
}

console.log(processData(test))