document.addEventListener('DOMContentLoaded', () => {

  let productsBox = document.querySelector('.productsBox')
  let cardsData = 'script/db.json'


  const createCard = (id, img, price, about) => {
    let cardBox = document.createElement('div')
    cardBox.className = 'cardBox'
    cardBox.innerHTML = `<div class="img">
                            <img src=${img} alt="key">
                          </div>
                          <div class="productText">
                            <p class="aboutText">${about}</p>
                          </div>
                          <div class="price">
                            <span>ID: ${id}</span>
                            <p class="itemPrice">${price} &#8364;</p>
                         </div>`
    return cardBox
  }
  
  
  let request = new XMLHttpRequest()
  request.open('GET', cardsData)
  request.responseType = 'json'
  request.send()

  request.onload = function() {

    let cardsData = request.response

    Object.keys(cardsData).forEach(key => {
      let id = cardsData[key].id
      let image = cardsData[key].image
      let price = cardsData[key].price
      let about = cardsData[key].about
      productsBox.append(createCard(id, image, price, about))

      return cardsData
    })

    let cardBox = document.querySelectorAll('.cardBox')
    for (let i = 0; i < cardBox.length; i++) {
      let card = cardBox[i]
      card.addEventListener('mouseenter', event => {
        event.preventDefault()
        let cardText = event.target.querySelector('.aboutText')
        cardText.style.color = 'red'
        cardText.style.alignSelf = 'center'
        cardText.style.fontSize = '25px'
        cardText.style.display = 'flex'
        cardText.innerText = 'Tilaa'
      })

      card.addEventListener('mouseleave', event => {
        event.preventDefault()
        for (let i = 0; i < cardsData.length; i++) {
          console.log(cardsData[i].about);
        }
      })
    }
  }


    
    
      
})
  
  
  

