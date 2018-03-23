// FILTER

const channels = [
    { name: 'HBO', premium: true },
    { name: 'LIFE', premium: false },
    { name: 'Max', premium: true },
    { name: 'Cooking channel', premium: false },
    { name: 'WOBI', premium: false }
];

const output = channels.filter(function(channel) {
    return channel.premium === true;
})


console.log(output);