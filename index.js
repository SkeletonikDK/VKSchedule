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

const readline = require('readline-sync');

console.log("VKSchedule");
console.log("version 0.0.1 \n");

while (true) {
    console.log("Write a command");

    command = readline.question();
    command = command.split(" ")

    if (command[0] == "Rotate") {
        Rotate();
    }
    else if (command[0] == "UpdateVK") {
        UpdateVK();
    }
    else if (command[0] == "Change") {
        Change(command[1], command[2], command[3]);
    }
    else if (command[0] == "BackDefault") {
        BackDefault();
    }
    else if (command[0] == "SetDefault") {
        SetDefault();
    }
    else {
        console.log("Unknown command\n");
    }
}

function Rotate() {
    console.log("Rotate");
    // Обратится к файлу конфига и посмотреть четное или нечетное расписание сейчас
}

function UpdateVK() {
    console.log("UpdateVK");
    // Выложить расписание, тут работа с вк апи
}

function Change(NumOfDay, NumOfClass, NewText) {
    console.log("Change");

    if (NumOfDay != undefined) {
        if (typeof(NumOfDay) != "number") {
            console.log("NumOfDay is not a number");
            return
        }
    }
    else {
        console.log("NumOfDay is undefined");
        return;
    }

    if (NumOfClass != undefined) {
        if (typeof(NumOfClass) != "number") {
            console.log("NumOfDay is not a number");
            return
        }
    }
    else {
        console.log("NumOfDay is undefined");
        return;
    }

    if (NewText != undefined) {
        if (typeof(NewText) != "number") {
            console.log("NumOfDay is not a number");
            return
        }
    }
    else {
        console.log("NumOfDay is undefined");
        return;
    }

    console.log("Successful");
}

function BackDefault() {
    console.log("BackDefault");
}

function SetDefault() {
    console.log("SetDefault");
}