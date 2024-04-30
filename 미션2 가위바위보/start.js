import Item from "./Item.js"
import countDown from "./countDown.js"

countDown(5)

let startBtn = document.querySelector('.start-btn')
startBtn.addEventListener('click', e => {
    startBtn.style.display = 'none'

    countDown(5)

    const itemWrapper = document.createElement('div')
    itemWrapper.classList.add('user-wrapper')

    const rock = new Item('rock', "assets/rock.png")
    const scissors = new Item('scissors', "assets/scissors.png")
    const paper = new Item('paper', "assets/paper.png")

    const items = [rock, scissors, paper]

    const userItems = document.querySelector('.user-items')

    items.forEach(item => {
        let userItemWrapper = document.createElement('div')
        userItemWrapper.classList.add('item-wrapper', 'user-wrapper')

        let itemImage = document.createElement('img')
        itemImage.src = item.image
        itemImage.alt = item.name

        userItemWrapper.append(itemImage)

        userItems.append(userItemWrapper)
    })
})

// console.log(startBtn)