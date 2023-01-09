# phyBot
## Functionalities 
This is a nodejs bot creating "/ commands" in a selected discord server.
The main use case here is to make embed creation easier for the user.

## How to use
The main command from this part of the bot is the ```/embed-builder``` command, it takes several arguments: the title, the description, an image, a footer, a logo and if the date is wanted or not.

## How to install
To use this bot, you need to have nodejs installed on your computer. You also need to have a discord bot token, you can get one [here](https://discord.com/developers/applications). 
Then you need to clone this repository, and install the dependencies with ```npm install```.
After that you will need to create a ```config.json``` to insert private informations like your bot token or server / channel IDs. 

## How to run
To install the / commands you will have to run the ```deploy-commands.js``` file with ```node deploy-commands.js```. 
Then you can run the bot with ```node index.js```.

## other parts of the project
I have also made a discord reaction script but I'm still working on a way to "clean it" so I don't want to publish it yet.
