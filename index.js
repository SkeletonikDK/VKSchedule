/* 

const config = require("./config.json"),
    { VK } = require('vk-io'),
    { HearManager } = require('@vk-io/hear');

const vk = new VK({
    token: config.token
});

const command = new HearManager();
vk.updates.on('message', command.middleware);

vk.updates.on('message', async (context, next) => {
    console.log('Пришло новое сообщение!');
    await next();
});

command.hear('/start', async (context) => {
    context.send('Это наша первая программа и она работает 🎉');
})

vk.updates.start()
    .then(() => console.log('Бот запущен!'))
    .catch(console.error); 

*/

//const nodePath = process.argv[0];
//const appPath = process.argv[1];

import { backDefault } from "./util/backdefault.js";
import { change } from "./util/change.js";
import { help } from "./util/help.js";
import { rotate } from "./util/rotate.js";
import { setDefault } from "./util/setDefault.js";
//import { updateVk } from "./util/updateVk.js";

const command = process.argv[2];
const parameter1 = process.argv[3];
const parameter2 = process.argv[4];
const parameter3 = process.argv[5];

console.log("VKSchedule");
console.log("version 0.0.5 \n");
console.log("Напишите help для помощи \n");

const COMMANDS = {
    "backdefault": backDefault,
    "change": change,
    "help": help,
    "rotate": rotate,
    "setdefault": setDefault,
    //"updatevk": updatevk
}

try {
    COMMANDS[command]();
} 
catch (error) {
    if (command != undefined) {
        console.log("Unknown command \n");
    }
    else {
        console.log("Write a command or write help \n");
    }
}