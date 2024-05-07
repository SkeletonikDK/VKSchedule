import { backDefault } from "./util/backdefault.js";
import { change } from "./util/change.js";
import { help } from "./util/help.js";
import { rotate } from "./util/rotate.js";
import { setDefault } from "./util/setDefault.js";
import { updateVk } from "./util/updateVk.js";

const command = process.argv[2].toLowerCase();
const parameter1 = process.argv[3];
const parameter2 = process.argv[4];
const parameter3 = process.argv[5];

const COMMANDS = {
    "backdefault": backDefault,
    "change": change,
    "help": help,
    "rotate": rotate,
    "setdefault": setDefault,
    "updatevk": updateVk
}

try {
    COMMANDS[command](parameter1, parameter2, parameter3);
} 
catch (error) {
    console.log("VKSchedule");
    console.log("version 0.0.5 \n");

    if (command != undefined) {
        console.log("Unknown command \n");
    }
    else {
        console.log("Write a command or write help \n");
    }
}