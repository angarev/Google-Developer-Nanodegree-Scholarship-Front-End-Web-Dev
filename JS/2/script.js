

let list = document.querySelector('.user-list');

function addUser(name, LastName) {

 let tamplate = `<div class="user">
                <div>${name}</div>
                <div>${LastName}</div>
              </div>`;

list.insertAdjacentHTML("beforeend", tamplate);
}


addUser('Pancho', 'Angarev');
addUser('Presy', 'Angareva');
