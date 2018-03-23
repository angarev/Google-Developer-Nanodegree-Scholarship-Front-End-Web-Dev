// MAP 2

const users = [
    { user: 'Martin Jones', age: 32, eyes: 'brown' },
    { user: 'Joe Cook', age: 20, eyes: 'blue' },
    { user: 'Briama Murphy', age: 42, eyes: 'green' }
];


const listOfUsers = users.map(function(item) {

    return item.user;

});

listOfUsers.forEach(function(item) {
    const select = document.querySelector('select');

    select.insertAdjacentHTML('beforeend', `<option value="${item}">${item}</option>`)
})