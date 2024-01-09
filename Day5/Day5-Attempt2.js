const input = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`

let currentRange = []
let currentSeedMap = []
let lowestLocation = Infinity
const seedNeedsObj = {}

//loop through ranges but don't store all ranges - do work per seed in range and then delete
//loop through each
    //on each loop
    //map each from soil to location
        //if location < lowestLocation
            //update lowest location
        //remove all values in currentSeedMap

const getAllSeedNeeds = () => {
    let mappedNum
        for (let need in seedNeedsObj) {
            const numToLookAt = currentSeedMap[currentSeedMap.length - 1]
            for (let needRange of seedNeedsObj[need]) {
                const splitNums = needRange.split(' ')
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
            currentSeedMap.push(mappedNum)
        }
        // console.log('CURRENT SEED MAP: ',  currentSeedMap)
        return currentSeedMap
}

const mapSeedRange = seedsRangeInfo => {
    const maxLoopNum = seedsRangeInfo[0] + seedsRangeInfo[1]
    for (let i = seedsRangeInfo[0]; i < maxLoopNum; i++) {
        currentRange.push(i)
    }
}

const checkFullSeedNeedsInCurrentRange = () => {
    for (let seed of currentRange) {
        currentSeedMap.push(seed)
        let currentSeedMapForThisSeed = getAllSeedNeeds()
        if (currentSeedMapForThisSeed[currentSeedMapForThisSeed.length - 1] < lowestLocation) {
            lowestLocation = currentSeedMapForThisSeed[currentSeedMapForThisSeed.length - 1]
        } 
        currentSeedMap = []
        currentSeedMapForThisSeed = []
    }

}

const parseSeedLine = seedsLine => {
    let splitSeeds = seedsLine.split(':')
    splitSeeds.shift()
    splitSeeds = splitSeeds[0].split(' ')
    splitSeeds.shift()
    for (let i = 0; i < splitSeeds.length; i++) {
        if (i % 2) {
            mapSeedRange([Number(splitSeeds[i - 1]), Number(splitSeeds[i])])
            checkFullSeedNeedsInCurrentRange()
        }
    }
}


const parseNonSeedLine = line => {
    const splitLine = line.split('\n')
    const nameOfLine = splitLine[0]
    splitLine.shift()
    seedNeedsObj[nameOfLine] = splitLine
}

const parseData = input => {
    const splitInput = input.split('\n\n')    
    for (let i = 1; i < splitInput.length; i++) {
        parseNonSeedLine(splitInput[i])
    }
    parseSeedLine(splitInput[0])

    return lowestLocation
}

console.log(parseData(input))