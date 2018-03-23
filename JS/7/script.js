let div = document.querySelector('.product');

const products = [
    { name: 'Iphone', price: 200 },
    { name: 'Motorola', price: 70 },
    { name: 'Samsung', price: 150 },
    { name: 'Sony', price: 98 },
    { name: 'Windows pone', price: 10 }
];


let tamplate = '';



products.forEach(function(item) {

    function discount() {
        if (item.price < 100) {
            return `<span>On sale !!</span>`
        }
        return '';
    }

    tamplate += `<h1>${item.name}</h1>
                <strong>Price: $ ${item.price} </strong>
                ${discount()}`;
})


div.insertAdjacentHTML('beforeend', tamplate);