// FILTER

const channel = [
    { name: 'HBO', premium: true },
    { name: 'LIFE', premium: false },
    { name: 'Max', premium: true },
    { name: 'Cooking channel', premium: false },
    { name: 'WOBI', premium: false }
];
const user = {
    name: 'Francis',
    premium: true,
    premiumChannels: function() {
        const $this = this;
        return channel.filter(function(channel) {
            return channel.premium && $this.premium;
        })
    },
    channels: function() {
        return channel.filter(function(channel) {
            return channel.premium === false;
        })
    }
}
console.log(user.premiumChannels())
    // brings HBO and MAX
console.log(user.channels())
    // brings LIFE, COOCKING CHANNEL AND WOBI