const { Events } = require('discord.js');

// this is the event that is triggered when a message is sent in any channel
module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        console.log(message.content);

    }
}