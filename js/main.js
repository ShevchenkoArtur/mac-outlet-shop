const showCards = () => {
    items.map(el => {
        const cardsItem = document.createElement('div')
        cardsItem.classList.add('cards__item')

        const card = document.createElement('div')
        card.classList.add('card')
        cardsItem.append(card)

        const cardImage = document.createElement('div')
        cardImage.classList.add('card__image')
        card.append(cardImage)

        const img = document.createElement('img')
        cardImage.append(img)
        img.src = `./images/${el.imgUrl}`
        img.alt = 'img'

        const likeSpan = document.createElement('span')
        likeSpan.classList.add('icon-like_empty')
        likeSpan.classList.add('card__like')
        cardImage.append(likeSpan)

        const cardMain = document.createElement('div')
        cardMain.classList.add('card__main')
        card.append(cardMain)

        const cardTitle = document.createElement('div')
        cardTitle.classList.add('card__title')
        cardTitle.innerText = el.name
        cardMain.append(cardTitle)

        const cardInfo = document.createElement('div')
        cardInfo.classList.add('card__info')
        cardMain.append(cardInfo)

        const stockDiv = document.createElement('div')
        const strongStock = document.createElement('strong')
        const stockText = document.createElement('span')
        strongStock.innerText = el.orderInfo.inStock
        stockText.innerText = ' left in stock'
        stockDiv.append(strongStock, stockText)
        cardInfo.append(stockDiv)

        const priceDiv = document.createElement('div')
        const strongPrice = document.createElement('strong')
        priceDiv.innerText = 'Price: '
        strongPrice.innerText = el.price
        priceDiv.append(strongPrice)
        cardInfo.append(priceDiv)

        const cardButton = document.createElement('div')
        const button = document.createElement('button')
        cardButton.classList.add('card__button')
        button.innerText = 'Add to cart'
        button.classList.add('button')
        cardButton.append(button)
        cardMain.append(cardButton)

        const cardFooter = document.createElement('div')
        cardFooter.classList.add('card__footer')
        card.append(cardFooter)

        const firstColumnDiv = document.createElement('div')
        cardFooter.append(firstColumnDiv)

        const firstColumnFirstRow = document.createElement('p')
        firstColumnDiv.append(firstColumnFirstRow)

        const likeFilledSpan = document.createElement('span')
        likeFilledSpan.classList.add('icon-like_filled')
        firstColumnFirstRow.append(likeFilledSpan)

        const firstColumnText = document.createElement('span')
        firstColumnText.innerText = ' Positive reviews'
        firstColumnFirstRow.append(firstColumnText)

        const firstColumnSecondRow = document.createElement('p')
        firstColumnSecondRow.innerText = 'Above average'
        firstColumnDiv.append(firstColumnSecondRow)

        const secondColumnDiv = document.createElement('div')
        cardFooter.append(secondColumnDiv)

        const secondColumnFirstRow = document.createElement('p')
        secondColumnFirstRow.innerText = el.orderInfo.reviews
        const secondColumnSecondRow = document.createElement('p')
        secondColumnSecondRow.innerText = 'orders'

        secondColumnDiv.append(secondColumnFirstRow, secondColumnSecondRow)

        document.querySelector('.cards').append(cardsItem)
    })
}

showCards()