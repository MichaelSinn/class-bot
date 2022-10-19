const {SlashCommandBuilder, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('profile')
        .setDescription('View/edit your profile'),
    async execute(interaction) {
        const modal = new ModalBuilder()
            .setCustomId('profile')
            .setTitle('Profile');
        // Add components to modal

        // Create the text input components
        const firstNameInput = new TextInputBuilder()
            .setCustomId('firstNameInput')
            // The label is the prompt the user sees for this input
            .setLabel("First Name")
            // Short means only a single line of text
            .setStyle(TextInputStyle.Short);

        const lastNameInput = new TextInputBuilder()
            .setCustomId('lastNameInput')
            // The label is the prompt the user sees for this input
            .setLabel("Last Name")
            // Short means only a single line of text
            .setStyle(TextInputStyle.Short);

        const githubInput = new TextInputBuilder()
            .setCustomId('githubInput')
            .setLabel("GitHub username")
            // Paragraph means multiple lines of text.
            .setStyle(TextInputStyle.Short);

        // An action row only holds one text input,
        // so you need one action row per text input.
        const firstActionRow = new ActionRowBuilder().addComponents(firstNameInput);
        const secondActionRow = new ActionRowBuilder().addComponents(lastNameInput);
        const thirdActionRow = new ActionRowBuilder().addComponents(githubInput)

        // Add inputs to the modal
        modal.addComponents(firstActionRow, secondActionRow, thirdActionRow);
        await interaction.showModal(modal);
    },
};