const input = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`

const loopDownToZero = (line, mapKey, pyramidMap = {}) => {
    let zeroCount = 0
    if (pyramidMap[mapKey]) {
        pyramidMap[mapKey].push([])
    } else {
        pyramidMap[mapKey] = [[]]
    }
    for (let i = 0; i < line.length - 1; i++) {
        let nextNumToAdd = line[i + 1] - line[i]
        if (nextNumToAdd === 0) {
            zeroCount++
        }
        
        pyramidMap[mapKey][pyramidMap[mapKey].length].push(nextNumToAdd)
        
        // console.log('ZEROCOUNT ', zeroCount)
    }

    // if (zeroCount !== line.length - 1) {
    //     loopDownToZero()
    // }

    
    console.log(pyramidMap)
}

// console.log(loopDownToZero(['0','3','6','9','12','15']))

// console.log(loopDownToZero(['1','3','6','10','15','21']))

const loopThroughData = input => {
    const splitData = input.split('\n')
    let line
    for (let i = 0; i < splitData.length; i++) {
        line = splitData[i].split(' ')
        loopDownToZero(line, i)
    }
}

console.log(loopThroughData(input))