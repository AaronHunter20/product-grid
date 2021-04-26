const addButton = document.querySelector('tbody');
const table = {
    body: document.querySelector('tbody')
}
let itemNum = 0;
class Tableitem {
    constructor(config) {
        this.image = config.image ;
        this.name = config.name;
        this.des = config.description;
        this.qty = config.qty;
        this.price = config.price;

        this.node = document.createElement('tr');
    }

    displayNormal() {
        this.node.innerHTML = `
        <td style="background-image: url(${this.image})"></td>
        <td class="padding name">${this.name}</td>
        <td class="padding description">${this.des}</td>
        <td class="padding qty">${this.qty}</td>
        <td class="padding price">${this.price}</td>
        <td class="padding delete-button">
            <image class="delete-image" src="./Images/draw.svg">
        </td>
        `
        table.body.appendChild(this.node);
    }
    displayInputs() {
        this.node.innerHTML = `
        <td style="background-image: url(${this.image})"></td>
        <td class="padding name">
            <input value="${this.name}">
        </td>
        <td class="padding description">
            <textarea name="" id="" cols="20" rows="2"></textarea>
        </td>
        <td class="padding qty">
            <input value="${this.name}">
        </td>
        <td class="padding price">
            <input value="${this.name}">
        </td>
        <td class="padding">
            <image class="delete-image" src="./Images/draw.svg">
        </td>
        `
    }
    
    removeHTML() {

    }
} 
Tableitem.list = [
    new Tableitem({
        image: `./Images/item_1.jpg`,
        name: 'Black King Bar',
        description: `A powerful staff imbued with the strength of giants.`,
        qty: 1,
        price: 4050
    }),
    new Tableitem({
        image: './Images/item_2.jpg',
        name: 'Mystic Staff',
        description: `Enigmatic staff made of only the most expensive crystals.`,
        qty: 1,
        price: 2800
    }),
    new Tableitem({
        image: './Images/item_3.jpg',
        name: 'Ethereal Blade',
        description: `A flickering blade of a ghastly nature, it is capable of dealing damage in both magical and physical planes.`,
        qty: 1,
        price: 4300
    }),
    new Tableitem({
        image: './Images/item_4.jpg',
        name: 'Hyperstone',
        description: `A mystical, carved stone that boosts the fervor of the holder.`,
        qty: 1,
        price: 2000
    }),
    new Tableitem({
        image: './Images/item_5.jpg',
        name: 'Phase Boots',
        description: `Boots that allow the wearer to travel between the ether.`,
        qty: 1,
        price: 1500
    }),
];

// For every table item...
for (let i = 0; i < Tableitem.list.length; i++) {
    Tableitem.list[i].displayNormal();
    const editButton = document.querySelectorAll('.delete-button');
    
    editButton[i].addEventListener('click', () => {
        Tableitem.list[i].displayInputs();
    }); 
}

// Listen for when the "add item" button is clicked
addButton.addEventListener('click', () => {

});