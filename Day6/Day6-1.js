const input = ``

//the amount of time the race runs
const time = []

//the record distance so far
const distance = []

let totalNumOfWinsPerRound = 1

const parseInput = input => {
    const inputSplit = input.split('\n')
    for (let ele of inputSplit[0].split(' ')) {
        if (Number(ele)) {
            time.push(Number(ele))
        }
    }

    for (let ele of inputSplit[1].split(' ')) {
        if (Number(ele)) {
            distance.push(Number(ele))
        }
    }



    for (let i = 0; i < time.length; i++) {
        let counter = 0
        let totalNumOfWins = 0
        while (counter <= time[i]) {
            const milimetersStored = counter
            const remainingTime = time[i] - counter
            const distanceThisAttemp = milimetersStored * remainingTime
            if (distanceThisAttemp > distance[i]) {
                totalNumOfWins++
            } 
            counter++
        }
        totalNumOfWinsPerRound *= totalNumOfWins
    }

    return totalNumOfWinsPerRound

    // MILILMETERS X REMAINING TIME = DISTANCE TRAVELED 
    // DISTANCE TRAVELED > WINNING DISTANCE IN LOG - WIN
    
    //do nothing and don't move at all
    //hold the button for 1ms and then go 1ml per 1ms for the remaining 6ms for a total of 6ml (ml X remaining time)
    //hold the button for 2ms and then go 2ml per 1ms for the remaining 5ms for a total of 10ml
    //hold the button for 3ms and then go 3ml per 1ms for the remainging 4ms for a total of 12ml

}

console.log(parseInput(input))