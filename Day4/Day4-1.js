const input = ``

const getWinningNums = nums => {
    const cardNumRemoved = nums.split(':').slice(1)
    const winningNums = []
    for (let ele of cardNumRemoved.join('').split(' ')) {
        if (Number(ele)) {
            winningNums.push(Number(ele))
        }
    }
    return winningNums
}

const getNumsCardHas = nums => {
    const numsCardHas = []
    for (let ele of nums.split(' ')) {
        if (Number(ele)) {
            numsCardHas.push(Number(ele))
        }
    }
    return numsCardHas
}

const countCardPoints = cards => {
    let total = 0

    for (let card of cards.split('\n')) {
        let cardTotal = 0
        const splitCard = card.split('|')
        const winningNums = getWinningNums(splitCard[0])
        const numsCardHas = getNumsCardHas(splitCard[1])

        for (let num of numsCardHas) {
            if (winningNums.includes(num)) {
                if (cardTotal === 0) {
                    cardTotal++
                } else {
                    cardTotal = cardTotal * 2
                }
            }
        }
        total+=cardTotal
    } 
    return total
}

console.log(countCardPoints(input))