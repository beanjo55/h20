import {Client, Message} from "eris";

const config = require("./config.json");

const client = new Client(config.token, {
    intents: ["guilds", "guildMessages"]
});

client.on("messageCreate", (msg: Message) => {
    const num = Math.floor(Math.random() * 200);
    if(num === 42){msg.channel.createMessage(`Hi ${msg.author.mention},\nIt looks like its been a while since you last hydrated. Make sure you are drinking water!`)
msg.channel.createMessage("<:hydrate:790819063428546580>")}
})

client.connect();
client.on("error", () => {});