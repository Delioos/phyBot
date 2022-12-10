const fs = require('node:fs');
const path = require('node:path');
const {Client, Collection, Events, GatewayIntentBits} = require('discord.js');
const {token} = require('./config.json');

const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
}
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}


//////////////////////////
// twitter stuff
//////////////////////////


const Twit = require('twit');

const T = new Twit({
    consumer_key: 'nalT9AUdbqBRw9Pj2unSHkm1j',
    consumer_secret: 'rY8UiTAxiYggZCcauZIAZ8EeBEQ4XSjIy4NTEBvS7vb2aaHZjC',
    access_token: '1493361696085352454-ng8KRX6VAilwa5ZSnpj1n8wI9GVIAR',
    access_token_secret: 'aCF7zzY0DB2nvFDS68CltB90aTlHmNUwRPieUd03Tiess',
});
// Replace 'username' with the Twitter username you want to check
const username = 'deliossssss';

// Replace 'channelId' with the ID of the Discord channel you want to send the message to
const channelId = '971043578367311934';

function checkTwitter() {
    T.get('statuses/user_timeline', {screen_name: username, count: 1}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            const tweetId = data[0].id_str;
            const tweetUrl = `https://twitter.com/${username}/status/${tweetId}`;

            // Replace 'message' with the message you want to send to the Discord channel
            const message = `@everyone ${username} just tweeted! ${tweetUrl}`;

            client.channels.cache.get(channelId).send(message);
        }
    });
}

// checkTwitter() is called every 5 minutes
//setInterval(checkTwitter, 300000);
//checkTwitter();



client.login(token);