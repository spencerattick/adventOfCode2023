const fiveOfAKind = []
const fourOfAKind = []
const fullHouse = []
const threeOfAKind = ['T55J5 684', 'QQQJA 483']
const twoPair = ['KK677 28', 'KTJJT 220']
const onePair = ['32T3K 765']
const highCard = []

const cardStregth = 'AKQJT98765432'


const sortArray = arr => {
    // [ 'KK677 28', 'KTJJT 220' ]
    let positionCounter = 0
    let individualCardCounter = 0

    while (positionCounter < arr.length - 1) {
        //if character in both hands is the same - check the next character
        if (arr[positionCounter][individualCardCounter] === arr[positionCounter + 1][individualCardCounter]) {
            individualCardCounter++
        } else {
            //if the characters at the same index are different - see which one is stronger
            const firstHandDifferentCardValue = arr[positionCounter][individualCardCounter]
            const secondHandDifferentCardValue = arr[positionCounter + 1][individualCardCounter]

            //if they are in the wrong order then swap their positions
            if (cardStregth.indexOf(firstHandDifferentCardValue) > cardStregth.indexOf(secondHandDifferentCardValue)) {
                const secondHand = arr[positionCounter + 1]
                arr.splice(positionCounter + 1, 1)
                if (positionCounter - 1 < 0) {
                    arr.unshift(secondHand)
                } else {
                    arr.splice(arr[positionCounter - 1], 0, secondHand)
                }
                //bring the positionCounter back to 0
                 positionCounter = 0
            } else {
                //if no swap needs to be made - increment the positionCounter
                positionCounter++
            }
            //reset the individualCardCounter to look at the first index again
            individualCardCounter = 0

        }

    }
    return arr

}

console.log(sortArray(twoPair))