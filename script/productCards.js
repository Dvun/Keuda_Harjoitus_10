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
    for (let i = 0; i < cardsData.length; i++) {
      let id = cardsData[i].id
      let image = cardsData[i].image
      let price = cardsData[i].price
      let about = cardsData[i].about
      
      productsBox.append(createCard(id, image, price, about))
      }
    }


    
    
      
})
  
  
  

