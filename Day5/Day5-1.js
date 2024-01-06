const input = ``


let seeds = {}

const findLowestLocationPerSeed = seeds => {
    let lowest = Infinity
    for (let arr of Object.values(seeds)) {
        if (arr[arr.length - 1] < lowest) {
            lowest = arr[arr.length - 1]
        }
    }
    return lowest
}

const parseSeedLine = seedsLine => {
    let splitSeeds = seedsLine.split(':')
    splitSeeds.shift()
    splitSeeds = splitSeeds[0].split(' ')
    splitSeeds.shift()
    for (let seed of splitSeeds) {
        seeds[seed] = [seed]
    }
}

const isValueIncludedInPreviousMapping = line => {
    let mappedNum
    for (let seed in seeds) {
        const numToLookAt = seeds[seed][seeds[seed].length - 1]
        for (let nums of line) {
            const splitNums = nums.split(' ')
            const numToStart = Number(splitNums[1])
            const destStartNum = Number(splitNums[0])
            const range = Number(splitNums[2])
            if (numToLookAt <= numToStart + (range - 1) && numToLookAt >= numToStart) {
                const calcNum = Number(numToLookAt) - numToStart
                mappedNum = destStartNum + calcNum
                break
            } else {
                mappedNum = numToLookAt
            }
        }
        seeds[seed].push(mappedNum)
    }
}

const parseNonSeedLine = line => {
    const splitLine = line.split('\n')
    const nameOfLine = splitLine[0]
    splitLine.shift()
    return splitLine
}

const parseData = input => {
    const splitInput = input.split('\n\n')    
    for (let line of splitInput) {
        if (line.includes('seeds')) {
            parseSeedLine(line)
        } else {
            const dataToLookAt = parseNonSeedLine(line)
            isValueIncludedInPreviousMapping(dataToLookAt)
        }
    }
   return findLowestLocationPerSeed(seeds)

}

console.log(parseData(input))