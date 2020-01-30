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
                            <p>${about}</p>
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
      card.addEventListener('mousemove', event => {
        event.preventDefault()
        console.log(event);
      })
    }
  }
    
   
    
  
  
  createCard.onmousemove = () => {
    console.log('on the card');
    
  }


    
    
      
})
  
  
  

