document.addEventListener('DOMContentLoaded', () => {


  let basket = document.querySelector('.cart-wrapper')
  
  window.addEventListener('storage', () => {
    console.log(localStorage.getItem('image'));
    
  })

    let price = localStorage.getItem('price');
    let img = localStorage.getItem('image');
    let id = localStorage.getItem('id');
    let count = localStorage.getItem('count');
    

    let basketWindow = document.createElement('div')
    basketWindow.className = 'goods'

    basketWindow.innerHTML = `<div class="goods">
                                <div class="goods-img-wrapper">
                                  <img class="goods-img" src=${img} alt="">
                                </div>
                                <div class="goods-description">
                                  <h2 class="goods-title">Product ID:</h2>
                                  <p class="goods-price">${id}</p>
                                </div>
                                <div class="goods-price-count">
                                  <div class="goods-trigger">
                                    <button class="goods-delete"></button>
                                  </div>
                                  <div class="goods-count">${count}</div>
                                </div>
                              </div>`


    basket.appendChild(basketWindow)


  
    
    
    

  




















})