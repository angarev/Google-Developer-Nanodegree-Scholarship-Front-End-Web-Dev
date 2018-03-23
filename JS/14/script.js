// FIND return only first match

const brands = [
    { name: 'HBO', id: 12 },
    { name: 'LIFE', id: 4 },
    { name: 'Max', id: 10 },
    { name: 'Cooking channel', id: 4 },
    { name: 'WOBI', id: 23 }
];

const result = brands.find(function(item) {
    return item.id = 4;
})


console.log(result);