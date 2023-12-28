const input = ``

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
              arr.splice(positionCounter, 0, secondHand)

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
  

const addUpPointValues = sortedArr => {
  const reversedSortedArr = sortedArr.reverse()
  let total = 0
  for (let i = 0; i < reversedSortedArr.length; i++) {
    const bid = Number(reversedSortedArr[i].split(' ')[1])
    total += bid * (i + 1)
  }
  return total
}


const loopThroughHands = hands => {
    for (let hand of hands) {
        findFiveOfAKind(hand)
    }
    const sortedFiveOfAKind = sortArray(fiveOfAKind)
    const sortedFourOfAKind = sortArray(fourOfAKind)
    const sortedFullHouse = sortArray(fullHouse)
    const sortedThreeOfAKind = sortArray(threeOfAKind)
    const sortedTwoPair = sortArray(twoPair)
    const sortedOnePair = sortArray(onePair)
    const sortedHighCard = sortArray(highCard)
    
    const allSortedByHandAndCards = [...sortedFiveOfAKind, ...sortedFourOfAKind, ...sortedFullHouse, ... sortedThreeOfAKind, ...sortedTwoPair, ...sortedOnePair, ...sortedHighCard]

    return addUpPointValues(allSortedByHandAndCards)
}

console.log(loopThroughHands(splitInput))