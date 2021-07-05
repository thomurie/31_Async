// 1.
async function drawACard(params) {
  try {
    let cardRes = await axios.get(
      `http://deckofcardsapi.com/api/deck/new/draw/?count=1`
    );
    return console.log(`${cardRes.data.cards[0].value} of ${cardRes.data.cards[0].suit}`)
  } catch (error) {
    console.log(error)
  }
}

drawACard()

// 2.
async function twoCardsSameDeck() {
  try {
    let deckRes = await axios.get(
      `http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    );
    const deckID = deckRes.data.deck_id
    const deckArr = await Promise.all([
      axios.get(
        `http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
      ),
      axios.get(
        `http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
      )
    ])
    return deckArr.forEach((card) =>
      console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)
    );
  } catch (error) {
      
  }
}

twoCardsSameDeck()

// 3.
const $btn = $('.button')
const $cardbdy = $('.card')

async function seeWholeDeck() {
  try {

    let threeDeckRes = await axios.get(
      `http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    );
    const threeDeckID = threeDeckRes.data.deck_id
    return $btn.on("click", async function () {
      let res = await axios.get(
        `http://deckofcardsapi.com/api/deck/${threeDeckID}/draw/?count=1`
      );
      if (res.data.remaining > 1) {
        $cardbdy.html("");
        $cardbdy.html(`<img src="${res.data.cards[0].image}" alt="Card" />`);
      } else {
        $btn.hide()
      }
      
    })
  } catch (error) {
    console.log(error)
  }
}

seeWholeDeck()
