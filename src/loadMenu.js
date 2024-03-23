import iconPhoBo from './pho-bo.jpg'
import iconTomYam from './tom-yam.jpg'
import iconMienSao from './mien-sao.jpg'
import iconMisao from './misao.jpg'

function loadMenu() {
    let content1 = document.querySelector('#content')
    document.body.removeChild(content1)

    let content = document.createElement('div')
    content.setAttribute('id', 'content')

    let head = document.createElement('h1')
    head.textContent = 'МЕНЮ'
    content.appendChild(head)

    let menu = document.createElement('div')
    menu.setAttribute = ('id', 'menu')

    // card 1
    let dishes = ['Суп ФО-БО', 'Суп ТОМ-ЯМ', 'МИЕН-САО', 'МИСАО']
    let dishesPrices = [380, 450, 380, 360]
    let images = [iconPhoBo, iconTomYam, iconMienSao, iconMisao]

    for (let i = 0; i < 4; i++) {
        let card = document.createElement('div')
        card.classList.add('card')

        let img = document.createElement('img')
        img.src = images[i]
        card.appendChild(img)

        let name = document.createElement('h4')
        name.textContent = dishes[i]
        card.appendChild(name)

        let price = document.createElement('div')
        price.textContent = dishesPrices[i] + ' р.'
        price.classList.add('price')
        card.appendChild(price)

        menu.appendChild(card)
    }

    content.appendChild(menu)
    document.body.appendChild(content)
}

export {
    loadMenu
};
