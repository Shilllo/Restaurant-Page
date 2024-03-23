import vietnam from './vietnam.jpg'
import airplane from './airplane.jpg'

function loadAboutUs() {
    let content1 = document.querySelector('#content')
    document.body.removeChild(content1)

    let content = document.createElement('div')
    content.setAttribute('id', 'content')

    let header1 = document.createElement('h1')
    let header2 = document.createElement('h1')
    header1.textContent = 'О кафе'
    header2.textContent = 'Продукты из Вьетнама'

    let info1 = document.createElement('p')
    info1.textContent = 'Основатели кафе "Kафе Вьетнамской Кухни"- настоящая вьетнамская семья, которая видит своей миссией - передать вкус и атмосферу Вьетнама всем ценителям азиатской кухни. Чтобы каждый гурман смог ощутить неповторимый вкус настоящей домашней вьетнамской еды.'
    let info2 = document.createElement('p')
    info2.textContent = 'Большинство продуктов доставляется напрямую из Вьетнама, это позволяет сохранить традиционные рецепты в том виде, в котором они существуют на протяжении веков. Поварской состав - коренные вьетнамцы, которые сохраняют кулинарные традиции своих бабушек и дедушек в каждом блюде.'

    let img1 = document.createElement('img')
    img1.src = vietnam

    let img2 = document.createElement('img')
    img2.src = airplane

    let block1 = document.createElement('div')
    block1.classList.add('block')
    block1.appendChild(img1)
    block1.appendChild(header1)
    block1.appendChild(info1)

    let block2 = document.createElement('div')
    block2.classList.add('block')
    block2.appendChild(img2)
    block2.appendChild(header2)
    block2.appendChild(info2)

    content.appendChild(block1)
    content.appendChild(block2)
    document.body.appendChild(content)
}

export {
    loadAboutUs
}