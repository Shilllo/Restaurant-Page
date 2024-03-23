import Icon1 from './1.jpg';
import Icon2 from './2.jpg';
import Icon3 from './3.jpg';
import Icon4 from './4.jpg';

function loadPage() {
    let content1 = document.querySelector('#content')
    document.body.removeChild(content1)

    let content = document.createElement('div')
    content.setAttribute('id', 'content')

    let name = document.createElement('h1')
    name.classList.add('name')
    name.textContent = `Вьетнамское кафе "ЛИ"`

    let description = document.createElement('div')
    description.classList.add('description')
    description.textContent = `Вы можете заказать доставку любого блюда к себе домой, забрать самостоятельно или покушать у нас`

    let container = document.createElement('div')
    container.appendChild(name)
    container.appendChild(description)
    container.classList.add('block1')

    let img1 = document.createElement('img')
    img1.src = Icon1

    let img2 = document.createElement('img')
    img2.src = Icon2

    let img3 = document.createElement('img')
    img3.src = Icon3

    let img4 = document.createElement('img')
    img4.src = Icon4

    let container1 = document.createElement('div')
    container1.classList.add('block2')
    let container11 = document.createElement('div')
    
    let h11 = document.createElement('h1')
    h11.textContent = 'Бизнес-ланч'

    let h12 = document.createElement('h1')
    h12.textContent = 'по будням'

    let h13 = document.createElement('h1')
    h13.textContent = 'с 12:00 до 16:00'

    container11.appendChild(h11)
    container11.appendChild(h12)
    container11.appendChild(h13)

    let container12 = document.createElement('div')

    container12.appendChild(img1)
    container12.appendChild(img2)
    container12.appendChild(img3)
    container12.appendChild(img4)

    container1.appendChild(container11)
    container1.appendChild(container12)

    content.appendChild(container)
    content.appendChild(container1)

    document.body.appendChild(content)
}

export {
    loadPage
};