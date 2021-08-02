export function displayCards() {
  const windowWidth = document.documentElement.clientWidth;
  const positionCards = {
    init: 0,
    step: 0,
  }
  if (windowWidth <= 680) {
    positionCards.init = 5;
    positionCards.step = 1;
    return positionCards
  } else if (windowWidth < 1021) {
    positionCards.init = 8;
    positionCards.step = 2;
    return positionCards
  } else {
    positionCards.init = 12;
    positionCards.step = 3;
    return positionCards
  }
}

