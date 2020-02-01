document.addEventListener('DOMContentLoaded', () => {

  let productsBox = document.querySelector('.productsBox')
  let katsoWindow = document.querySelector('.katsoWindow')
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
        cardText.innerHTML = `<button class="tilaa"><a href="./tilaa.html">Tilaa</a></button>
                              <button class="katso">Katso lisää</button>`
        
                            
        let katso = document.querySelector('.katso')
        katso.onclick = () => {
          katsoWindow.style.display = 'flex'
          let tuoteImg = document.querySelector('.tuoteImg')
          let tuoteText = document.querySelector('.tuoteText')
          let tuoteID = document.querySelector('.tuoteID')
          let tuoteHinta = document.querySelector('.hinta')
          tuoteID.innerHTML = `<span>ID: ${cardsData[i].id}</span>`
          tuoteHinta.innerHTML = `<span>${cardsData[i].price} &#8364;</span>`
          tuoteImg.innerHTML = `<img class="tuoteImg" src=${cardsData[i].image}>`
          tuoteText.innerHTML = cardsData[i].about
        }
        

        card.addEventListener('mouseleave', event => {
          event.preventDefault()
          Object.keys(cardsData).forEach(key => {
            cardText.style.color = 'black'
            cardText.style.fontSize = '13px'
            cardText.style.transition = 'none'
            cardText.innerText = cardsData[i].about
          })
        })
      })      
    }
    let closeWindow = document.querySelector('.close')
    closeWindow.onclick = () => {
      katsoWindow.style.display = 'none'
    }
  }


    
    
      
})
  
  
  

