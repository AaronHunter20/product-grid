class TableItem {
    constructor(config) {
        this.image = config.image;
        this.name = config.name;
        this.des = config.description;
        this.qty = config.qty;
        this.price = config.price;
        this.editable = false;
    }
    createHTML() {
        // Create Table
        document.querySelector('tbody').innerHTML += `
            <tr>
                <td style="background-image: url(${this.image})"></td>
                <td class="name">
                    <input type="text" value="${this.name}" readonly>
                </td>
                <td class="description">
                    <textarea rows="3" cols="25">${this.des}</textarea>
                </td>
                <td>
                    <input type="number" value="${this.qty}" min="0" max="10" maxlength="2">
                </td>
                <td>
                    <input type="number" value="${this.price}" min="0" max="9999" readonly>
                </td>
                <td>
                    <image class="remove-button" src="./Images/draw.svg"></image>
                </td>
            </tr>
        `;

    }
}
TableItem.num = 0;
TableItem.list = [
    new TableItem({
        image: `./Images/item_1.jpg`,
        name: 'Black King Bar',
        description: `A powerful staff imbued with the strength of giants.`,
        qty: 1,
        price: 4050
    }),
    new TableItem({
        image: './Images/item_2.jpg',
        name: 'Mystic Staff',
        description: `Enigmatic staff made of only the most expensive crystals.`,
        qty: 1,
        price: 2800
    }),
    new TableItem({
        image: './Images/item_3.jpg',
        name: 'Ethereal Blade',
        description: `A flickering blade of a ghastly nature, it is capable of dealing damage in both magical and physical planes.`,
        qty: 1,
        price: 4300
    }),
    new TableItem({
        image: './Images/item_4.jpg',
        name: 'Hyperstone',
        description: `A mystical, carved stone that boosts the fervor of the holder.`,
        qty: 1,
        price: 2000
    }),
    new TableItem({
        image: './Images/item_5.jpg',
        name: 'Phase Boots',
        description: `Boots that allow the wearer to travel between the ether.`,
        qty: 1,
        price: 1500
    }),
];

// SetupHTML
for (let i = 0; i < TableItem.list.length; i++) {
    TableItem.list[i].createHTML();

    TableItem.num++;
}


for (let i = 0; i < TableItem.list.length; i++) {
    let button = document.querySelector(`tr:nth-child(${i+1}) > td:last-child`);
    button.addEventListener('click', () => {
        console.log(`pressed button ${i}`);
    });
}

function createItem() {
    console.log('Item Created');
}
