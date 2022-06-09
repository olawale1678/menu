const menu = [
    {
        id: 1,
        category: 'breakfast',
        price: '$23',
        desc: 'sun bitches',
        img: 'images/item-1.jpeg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, nihil. Eligendi,voluptatibus molestias magni modi hic consectetur id minima numquam sapiente, optioratione ad.'
    },
    {
        id: 2,
        category: 'lunch',
        price: '$29.99',
        desc: 'land cruiser',
        img: 'images/item-2.jpeg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, nihil. Eligendi,voluptatibus molestias magni modi hic consectetur id minima numquam sapiente, optioratione ad.'
    },
    {
        id: 3,
        category: 'stake',
        price: '$36.32',
        desc: 'gucci mane',
        img: 'images/item-3.jpeg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, nihil. Eligendi,voluptatibus molestias magni modi hic consectetur id minima numquam sapiente, optioratione ad.'
    },
    {
        id: 4,
        category: 'breakfast',
        price: '$20.98',
        desc: 'classy meal',
        img: 'images/item-4.jpeg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, nihil. Eligendi,voluptatibus molestias magni modi hic consectetur id minima numquam sapiente, optioratione ad.'
    },
    {
        id: 5,
        category: 'lunch',
        price: '$55',
        desc: 'blank king',
        img: 'images/item-5.jpeg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, nihil. Eligendi,voluptatibus molestias magni modi hic consectetur id minima numquam sapiente, optioratione ad.'
    },
    {
        id: 6,
        category: 'stake',
        price: '$23',
        desc: 'halt bing',
        img: 'images/item-6.jpeg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, nihil. Eligendi,voluptatibus molestias magni modi hic consectetur id minima numquam sapiente, optioratione ad.'
    },
    {
        id: 7,
        category: 'breakfast',
        price: '$13',
        desc: 'stone bread',
        img: 'images/item-7.jpeg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, nihil. Eligendi,voluptatibus molestias magni modi hic consectetur id minima numquam sapiente, optioratione ad.'
    },
    {
        id: 8,
        category: 'lunch',
        price: '$20',
        desc: 'sapa meal',
        img: 'images/item-8.jpeg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, nihil. Eligendi,voluptatibus molestias magni modi hic consectetur id minima numquam sapiente, optioratione ad.'
    },
    {
        id: 9,
        category: 'stake',
        price: '$3',
        desc: 'quarantine buddies',
        img: 'images/item-9.jpeg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, nihil. Eligendi,voluptatibus molestias numquam sapiente, optioratione ad.'
    },
]

const mainItem = document.querySelector('.main-item');
const btns = document.querySelectorAll('.btn');
const headerBtn = document.querySelector('.header-btn');
const navToggle = document.querySelector('.nav-toggle');
const toggle = document.querySelectorAll('.toggle')

window.addEventListener('DOMContentLoaded', () => {
    displayItem(menu);
});

const displayItem = (menuBand) => {
    let menuItem = menuBand.map((item) => {
        return `
        <li class="menu-list">
                    <p class="price">${item.price}</p>
                    <img src="${item.img}" class="img1">
                    <div class="menu-list__description">
                        <h2>${item.desc}</h2>
                        <div class="bottom-border">&nbsp;</div>
                        <p>${item.text}</p>
                    </div>
        </li>`;
    })

    menuItem = menuItem.join('');
    mainItem.innerHTML = menuItem;
}

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter((menuItem) => {
            if (menuItem.category === category) {
                return menuItem;
            }
        })

        if (category === 'all') {
            return displayItem(menu);
        } else {
            return displayItem(menuCategory)
        }
    })
})

navToggle.addEventListener('click', () => {
    headerBtn.classList.toggle('remove-header__btn');
    toggle.forEach((one) => {
        one.classList.toggle('burger');
    })

    navToggle.classList.toggle('move');

})

headerBtn.addEventListener('click', (e) => {
    const item = e.target.dataset.id;
    if (item) {
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
    }
    headerBtn.classList.remove('remove-header__btn');
    toggle.forEach((one) => {
        one.classList.toggle('burger');
    })
    navToggle.classList.toggle('move');
})