// command that will be used to add a role to a user
const {SlashCommandBuilder,  EmbedBuilder} = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');
const {adminID} = require('../config.json');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('role-react')
        .setDescription('use this command to create a reaction menu to add roles to users when they click on emojis')
        .addStringOption(option => option.setName('title').setDescription('The title of the embed'))
        .addStringOption(option => option.setName('description').setDescription('The description of the embed'))
        .addStringOption(option => option.setName('color').setDescription('hexadecimal color the side of the embed'))
    // add the options for the roles
        .addStringOption(option => option.setName('role1').setDescription('The role that will be added when the user clicks on the emoji'))
        .addStringOption(option => option.setName('emoji1').setDescription('The emoji that will be used to add the role'))
        .addStringOption(option => option.setName('role2').setDescription('The role that will be added when the user clicks on the emoji'))
        .addStringOption(option => option.setName('emoji2').setDescription('The emoji that will be used to add the role'))
        .addStringOption(option => option.setName('role3').setDescription('The role that will be added when the user clicks on the emoji'))
        .addStringOption(option => option.setName('emoji3').setDescription('The emoji that will be used to add the role'))
        .addStringOption(option => option.setName('role4').setDescription('The role that will be added when the user clicks on the emoji'))
        .addStringOption(option => option.setName('emoji4').setDescription('The emoji that will be used to add the role'))
        .addStringOption(option => option.setName('role5').setDescription('The role that will be added when the user clicks on the emoji'))
        .addStringOption(option => option.setName('emoji5').setDescription('The emoji that will be used to add the role'))
        .addStringOption(option => option.setName('role6').setDescription('The role that will be added when the user clicks on the emoji'))
        .addStringOption(option => option.setName('emoji6').setDescription('The emoji that will be used to add the role'))
        .addStringOption(option => option.setName('role7').setDescription('The role that will be added when the user clicks on the emoji'))
        .addStringOption(option => option.setName('emoji7').setDescription('The emoji that will be used to add the role'))
        .addStringOption(option => option.setName('role8').setDescription('The role that will be added when the user clicks on the emoji'))
        .addStringOption(option => option.setName('emoji8').setDescription('The emoji that will be used to add the role'))
        .addStringOption(option => option.setName('role9').setDescription('The role that will be added when the user clicks on the emoji'))
        .addStringOption(option => option.setName('emoji9').setDescription('The emoji that will be used to add the role'))
        .addStringOption(option => option.setName('role10').setDescription('The role that will be added when the user clicks on the emoji'))
        .addStringOption(option => option.setName('emoji10').setDescription('The emoji that will be used to add the role')),
    async execute(interaction) {
        // check if the user is admin
        if (interaction.member.roles.cache.has(adminID)) {
            // get the options
            const title = interaction.options.getString('title');
            const description = interaction.options.getString('description');
            const color = interaction.options.getString('color');
            const role1 = interaction.options.getString('role1');
            const emoji1 = interaction.options.getString('emoji1');
            const role2 = interaction.options.getString('role2');
            const emoji2 = interaction.options.getString('emoji2');
            const role3 = interaction.options.getString('role3');
            const emoji3 = interaction.options.getString('emoji3');
            const role4 = interaction.options.getString('role4');
            const emoji4 = interaction.options.getString('emoji4');
            const role5 = interaction.options.getString('role5');
            const emoji5 = interaction.options.getString('emoji5');
            const role6 = interaction.options.getString('role6');
            const emoji6 = interaction.options.getString('emoji6');
            const role7 = interaction.options.getString('role7');
            const emoji7 = interaction.options.getString('emoji7');
            const role8 = interaction.options.getString('role8');
            const emoji8 = interaction.options.getString('emoji8');
            const role9 = interaction.options.getString('role9');
            const emoji9 = interaction.options.getString('emoji9');
            const role10 = interaction.options.getString('role10');
            const emoji10 = interaction.options.getString('emoji10');
            // create the embed
            const embed = new EmbedBuilder()
                .setTitle(title)
                .setDescription(description)
                .setColor(color)
            // react to the message with the emojis
            
            // send the embed
            await interaction.reply({ embeds: [embed], components: [actionRow] });
        }
    }
}