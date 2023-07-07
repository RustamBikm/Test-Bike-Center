import '@babel/polyfill'
import './index.html'
import './index.scss'

const catalog__open = document.getElementById('catalog__open')
const catalog = document.getElementById('catalog')

catalog__open.addEventListener('click', function (e) {
    if (catalog__open.getAttribute('checked') == 'false') {
        catalog.style.display = 'block'
        catalog__open.setAttribute('checked', 'true')
    } else {
        catalog.style.display = 'none'
        catalog__open.setAttribute('checked', 'false')
    }
})

const searchList = document.getElementById('search__list')
const input = (document.getElementById('input').oninput = function () {
    let value = this.value.trim()
    let items = document.querySelectorAll('.article__wrap__element__body li p')
    if (value != '') {
        searchList.style.display = 'block'
    } else {
        searchList.style.display = 'none'
    }
})

const navSearch = document.getElementById('navSearch')
const navCart = document.getElementById('navCart')
