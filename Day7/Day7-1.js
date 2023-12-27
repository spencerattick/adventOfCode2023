const input = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`

const splitInput = input.split('\n')

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

const loopThroughHands = hands => {
    // console.log(input)
    for (let hand of hands) {
        findFiveOfAKind(hand)
    }
}

console.log(loopThroughHands(splitInput))