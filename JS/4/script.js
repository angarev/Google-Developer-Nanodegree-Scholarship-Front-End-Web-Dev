
let list = document.querySelector('.players');

const players = [
   {jersey:56,name:"Djounte Murray",position:"Point guard",PPG:2.6},
   {jersey:98,name:"Dennis Rodman",position:"Small Forward",PPG:10.8},
   {jersey:1,name:"Michael Jordan",position:"Small Forward",PPG:345.6},
   {jersey:2,name:"Lebron James",position:"Shooting Guard",PPG:26.7},
   {jersey:33,name:"Patrick Ewing",position:"Center",PPG:20.2}
];


for (let i = 0; i < players.length; i++) {
  let player = players[i];
  let tamplate = `<li>${player.jersey} - ${player.name} -- Position: ${player.position} -- RPP: ${Math.floor(player.PPG)}</li>`;
  list.insertAdjacentHTML("beforeend", tamplate);
}
