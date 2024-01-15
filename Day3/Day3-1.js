const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

const splitInput = input.split('\n')

//loop through input until a number is encountered
//need to capture the total digits
//need start index of the num and end index of the num
    //run a function to see if there are any special chars ABOVE (including diagonal positions)
        //if yes
            //add num total to the grand total and continue
        //if no
            //run another function see check for special charaters BELOW (includind diagonal positions)
        //if yes
           //add num total to the grand total and continue
        //if no
            //run anohter function to check for special characters LEFT and RIGHT
                //if yes
                    //add num total to the grand total and continue
                //if no
                    //continue iterating

const checkAboveSpecialChars = (start, end, rowNum) => {
    if (rowNum === 0) {
        return false 
    } 

    if (start > 0) {
        start--
    }

    if (end < splitInput[0].length) {
        end++
    }
    
    for (let i = start; start <= end; i++) {
        const currentChar = splitInput[rowNum - 1][i]
        if (!Number(currentChar) && currentChar !== '.') {
            return true
        }
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
                // console.log(currentNum, currentNumStart, currentNumEnd)
                //check for special chars here
                if (checkAboveSpecialChars(currentNumStart, currentNumEnd, i)) {
                    totalPartNums += Number(currentNum)
                } 
                currentNumStart = null
                currentNumEnd = null
                currentNum = ''
            }
        }
    }
}

console.log(loopThroughDataSet(splitInput))