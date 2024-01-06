const input = ``

let seeds = []
let seedToSoilMap = {}
let soilToFertilizerMap = {}
let fertilizerToWaterMap = {}
let waterToLightMap = {}
let lightToTemperatureMap = {}
let temperatureToHumidityMap = {}
let humidityToLocationMap = {}

const findLowestLocationPerSeed = seeds => {
    let lowestLocation = Infinity
    let lowestLocationSeed

    for (let seed of seeds) {
        const seedToSoilNum = seedToSoilMap[seed] || seed
        const soilToFertilizerNum = soilToFertilizerMap[seedToSoilNum] || seedToSoilNum
        const fertilizerToWaterNum = fertilizerToWaterMap[soilToFertilizerNum] || soilToFertilizerNum
        const waterToLightNum = waterToLightMap[fertilizerToWaterNum] || fertilizerToWaterNum
        const lightToTemperatureNum = lightToTemperatureMap[waterToLightNum] || waterToLightNum
        const temperatureToHumidityNum = temperatureToHumidityMap[lightToTemperatureNum] || lightToTemperatureNum
        const humidityToLocationNum = humidityToLocationMap[temperatureToHumidityNum] || temperatureToHumidityNum

        if (humidityToLocationNum < lowestLocation) {
            lowestLocation = humidityToLocationNum
            lowestLocationSeed = seed
        }
    }
    return lowestLocation
}

const createMap = lineToMap => {
    const mapObj = {}
    for (let row of lineToMap) {
        const splitRow = row.split(' ')
        const destinationRangeStart = Number(splitRow[0])
        const sourceRangeStart = Number(splitRow[1])
        const rangeLength = Number(splitRow[2])
        let destinationCounter = destinationRangeStart
        let sourceCounter = sourceRangeStart
        for (let i = 0; i < rangeLength; i++) {
            mapObj[sourceCounter] = destinationCounter
            destinationCounter++
            sourceCounter++
        }
    }
    return mapObj
}

const parseData = input => {
    const splitInput = input.split('\n\n')

    for (let line of splitInput) {
        const mapType = line.split(':')[0]
        if (mapType === 'seeds') {
            let splitLine = line.split(':')
            splitLine.shift()
            splitLine = splitLine[0].split(' ')
            splitLine.shift()
            seeds = splitLine
        } else if (mapType === 'seed-to-soil map') {
            line = line.split('\n')
            line.shift()
            seedToSoilMap = createMap(line)
        } else if (mapType === 'soil-to-fertilizer map') {
            line = line.split('\n')
            line.shift()
            soilToFertilizerMap = createMap(line)
        } else if (mapType === 'fertilizer-to-water map') {
            line = line.split('\n')
            line.shift()
            fertilizerToWaterMap = createMap(line)
        } else if (mapType === 'water-to-light map') {
            line = line.split('\n')
            line.shift()
            waterToLightMap = createMap(line)
        } else if (mapType === 'light-to-temperature map') {
            line = line.split('\n')
            line.shift()
            lightToTemperatureMap = createMap(line)
        } else if (mapType === 'temperature-to-humidity map') {
            line = line.split('\n')
            line.shift()
            temperatureToHumidityMap = createMap(line)
        } else if (mapType === 'humidity-to-location map') {
            line = line.split('\n')
            line.shift()
            humidityToLocationMap = createMap(line)
        }

    }

    // console.log('SEEDS: ', seeds)
    // console.log('SEEDTOSOIL: ', seedToSoilMap)
    // console.log('SOILTOFERTILIZER: ', soilToFertilizerMap)
    // console.log('FERTILIZERTOWATER: ', fertilizerToWaterMap)
    // console.log('WATERTOLIGHT: ', waterToLightMap)
    // console.log('LIGHTTOTEMP: ', lightToTemperatureMap)
    // console.log('TEMPTOHUMIDITY: ', temperatureToHumidityMap)
    // console.log('HUMIDITYTOLOCATION: ', humidityToLocationMap)

    return findLowestLocationPerSeed(seeds)

}

console.log(parseData(input))