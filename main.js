"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eris_1 = require("eris");
var config = require("./config.json");
var client = new eris_1.Client(config.token, {
    intents: ["guilds", "guildMessages"]
});
client.on("messageCreate", function (msg) {
    var num = Math.floor(Math.random() * 200);
    if (num % 20 === 0) {
        msg.channel.createMessage("Hi " + msg.author.mention + ",\n    it looks like its been a while since you last hydrated. Make sure you are drinking water!");
        msg.channel.createMessage("<:hydrate:790819063428546580>");
    }
});
client.connect();
client.on("error", function () { });
