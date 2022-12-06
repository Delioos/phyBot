// command to build embeds with a title, an image , a description and a footer
const {SlashCommandBuilder, EmbedBuilder, } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed-builder')
        .setDescription('Builds an embed with a title, an image, a description and a footer')
        .addStringOption(option => option.setName('title').setDescription('The title of the embed'))
        .addStringOption(option => option.setName('image').setDescription('The image of the embed'))
        .addStringOption(option => option.setName('description').setDescription('The description of the embed'))
        .addStringOption(option => option.setName('footer').setDescription('The footer of the embed'))
        .addStringOption(option  => option.setName('date').setDescription('add the timestamp of the embed'))
        .addStringOption(option => option.setName('color').setDescription('hexadecimal color the side of the embed')),

    async execute(interaction) {
        // check if the user is granted to use this command
        if (interaction.member.roles.cache.has('1006153458719653969')) { // replace ROLE_ID with the ID of the role that is allowed to use this command
            // get the options
            const title = interaction.options.getString('title');
            const image = interaction.options.getString('image');
            const description = interaction.options.getString('description');
            const color = interaction.options.getString('color');
            const text = interaction.options.getString('footer');
            const footer = {text: text, iconURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sKUWK-0hjSSRB1WVoWUtRgHaHa%26pid%3DApi&f=1&ipt=86c8e5cf5236597be781adaf141d8e816af9eb2dc970e7fc6db222666bf2a533&ipo=images'};
            // build the embed
            const embed = new EmbedBuilder()
                .setTitle(title)
                .setColor(color)
                .setImage(image)
                .setDescription(description)
                // add a footer with a text and the icon of the
                .setFooter(footer)
            if (interaction.options.getString('date') === 'yes') {
                embed.setTimestamp();
            }
            // send the embed
            await interaction.channel.send({embeds: [embed]});
        }
    }
}