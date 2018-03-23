const artists = ['Clapton', 'Metallica', "Deep Purple"];



artists.forEach(function(artist) {
    console.log(artist);
});


const names = ['Clapton', 'Metallica', "Deep Purple"];

names.forEach(function(name) {
    document.body.insertAdjacentHTML("afterbegin", `<div>My favarite artist are:</div><div>${name}</div>`);
});



const purchases = [
    { quantity: 2, amount: 100 },
    { quantity: 5, amount: 300 },
    { quantity: 7, amount: 400 }
];



let total = 0;


purchases.forEach(function(purchase) {
    total += purchase.amount * purchase.quantity;
});

console.log(total);