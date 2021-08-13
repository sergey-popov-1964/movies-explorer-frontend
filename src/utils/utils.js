import {SCREEN_WIDTH, CARD_IN_ROW, INITIAL_CARD} from "../utils/constants"


export function displayCards(screenWidth) {
  // const windowWidth = document.documentElement.clientWidth;
  const positionCards = {
    init: 0,
    step: 0,
  }

  if (screenWidth <= SCREEN_WIDTH.small) {
    positionCards.init = INITIAL_CARD.small;
    positionCards.step = CARD_IN_ROW.small;
    return positionCards
  } else if (screenWidth < SCREEN_WIDTH.middle) {
    positionCards.init = INITIAL_CARD.middle;
    positionCards.step = CARD_IN_ROW.middle;
    return positionCards
  } else {
    positionCards.init = INITIAL_CARD.large;
    positionCards.step = CARD_IN_ROW.large;
    return positionCards
  }
}


// import {SCREEN_WIDTH, CARD_IN_ROW, INITIAL_CARD} from "../utils/constants"
//
//
// export function displayCards() {
//   const windowWidth = document.documentElement.clientWidth;
//   const positionCards = {
//     init: 0,
//     step: 0,
//   }
//   if (windowWidth <= SCREEN_WIDTH.small) {
//     positionCards.init = INITIAL_CARD.small;
//     positionCards.step = CARD_IN_ROW.small;
//     return positionCards
//   } else if (windowWidth < SCREEN_WIDTH.small) {
//     positionCards.init = INITIAL_CARD.middle;
//     positionCards.step = CARD_IN_ROW.middle;
//     return positionCards
//   } else {
//     positionCards.init = INITIAL_CARD.large;
//     positionCards.step = CARD_IN_ROW.large;
//     return positionCards
//   }
// }

