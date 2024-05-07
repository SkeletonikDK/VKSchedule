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
var command = process.argv[2];
const parameter1 = process.argv[3];
const parameter2 = process.argv[4];
const parameter3 = process.argv[5];

console.log("VKSchedule");
console.log("version 0.0.2 \n");

if (command == undefined) {
    console.log("Please write a command or write help\n");
    return;
}

command = command.toLowerCase();

if (command == "rotate") {
    Rotate();
}
else if (command == "updatevk") {
    //UpdateVK();
}
else if (command == "change") {
    //Change(parameter1, parameter2, parameter3);
}
else if (command == "backdefault") {
    //BackDefault();
}
else if (command == "setdefault") {
    //SetDefault();
}
else if (command == "help") {
    //Help();
}
else {
    console.log("Unknown command\n");
}