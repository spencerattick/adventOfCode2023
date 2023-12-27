const input = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`

const splitInput = input.split('\n')

const cardStregth = 'AKQJT98765432'

const fiveOfAKind = []
const fourOfAKind = []
const fullHouse = []
const threeOfAKind = []
const twoPair = []
const onePair = []
const highCard = []

const findFiveOfAKind = hand => {
    const cards = hand.split(' ')[0]
    const matches = {}

    for (let card of cards.split('')) {
        if (!matches[card]) {
            matches[card] = 1
        } else {
            matches[card]++
        }
    }
  if (Object.values(matches).includes(5)) {
    fiveOfAKind.push(hand)
  } else {
    findFourOfAKind(hand, matches)
  }
}

const findFourOfAKind = (hand, matches) => {
  if (Object.values(matches).includes(4)) {
    fourOfAKind.push(hand)
  } else {
    findFullHouse(hand, matches)
  }
}

const findFullHouse = (hand, matches) => {
  if (Object.values(matches).includes(3) && Object.values(matches).includes(2)) {
    fullHouse.push(hand)
  } else {
    findThreeOfAKind(hand, matches)
  }
}

const findThreeOfAKind = (hand, matches) => {
    if (Object.values(matches).includes(3)) {
        threeOfAKind.push(hand)
    } else {
        findTwoPair(hand, matches)
    }
}

const findTwoPair = (hand, matches) => {
    let numOfPairs = 0
  
    for (let key in matches) {
      if (matches[key] === 2) {
        numOfPairs++
      }
    }
    if (numOfPairs === 2) {
      twoPair.push(hand)
    } else {
      findOnePair(hand, matches)
    }
  }

const findOnePair = (hand, matches) => {
    if (Object.values(matches).includes(2)) {
        onePair.push(hand)
    } else {
        findHighCard(hand)
    }
}

const findHighCard = hand => {
    highCard.push(hand)
}

const sortArray = arr => {
    // [ 'KK677 28', 'KTJJT 220' ]
    let positionCounter = 0
    let individualCardCounter = 0
    let cardStregthCounter = 0

    while (positionCounter < arr.length) {
        //are the first chars the same?
            //loop through chars until one is different
                //reorder records based on that different char
        if (arr[positionCounter][individualCardCounter] === arr[positionCounter + 1][individualCardCounter]) {
            individualCardCounter++
        } else {
            const firstHandDifferentCardValue = arr[positionCounter][individualCardCounter]
            const secondHandDifferentCardValue = arr[positionCounter + 1][individualCardCounter]

            //indexOf both - lowest num is the strongest
        }
    }

}

const loopThroughHands = hands => {
    // console.log(input)
    for (let hand of hands) {
        findFiveOfAKind(hand)
    }
    console.log('TWO PAIR ', twoPair)
    const sortedFiveOfAKind = sortArray(fiveOfAKind)
    const sortedFourOfAKind = sortArray(fourOfAKind)
    const sortedFullHouse = sortArray(fullHouse)
    const sortedThreeOfAKind = sortArray(threeOfAKind)
    const sortedTwoPair = sortArray(twoPair)
    const sortedOnePair = sortArray(onePair)
    const sortedHighCard = sortArray(highCard)
}

console.log(loopThroughHands(splitInput))