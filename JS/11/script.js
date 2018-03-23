// FILTER

const products = [
    { name: 'ipad', category: 'device', number: 200, price: 300 },
    { name: 'Sony 3d', category: 'TV', number: 0, price: 800 },
    { name: 'E456', category: 'Blender', number: 10, price: 700 },
    { name: 'Super vision', category: 'TV', number: 100, price: 700 },
    { name: 'LG', category: 'phones', number: 111, price: 200 }
];


const output = products.filter(function(product) {
    return product.price == 300 && product.category == 'device';
})


console.log(output);