const test =  ``

const getFirstNum = row => {
    for (let char of row.split('')) {
        if (!isNaN(Number(char))) {
            return char
        }
    }
}

const getSecondNum = row => {
    for (let char of row.split('').reverse()) {
        if (!isNaN(Number(char))) {
            return char
        }
    }
}

const processData = data => {
    const dataSplit = data.split('\n')
    let resultTotal = 0
    for (let row of dataSplit) {
        const firstNum = getFirstNum(row)
        const secondNum = getSecondNum(row)
        const numToAdd = Number(firstNum + secondNum)
        resultTotal += numToAdd
    }
    return resultTotal
}

console.log(processData(test))

