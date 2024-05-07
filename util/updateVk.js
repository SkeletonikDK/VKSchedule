import { readFileSync } from "node:fs";
import { VK } from "vk-io";

import { CONFIG_FILE_PATH, WEEKS_FILE_PATH, CUR_WEEK_FILE_PATH } from "./common.js";

const DAYS_NAMES = {
    0: "Понедельник",
    1: "Вторник",
    2: "Среда",
    3: "Четверг",
    4: "Пятница",
}

const CONFIG = JSON.parse(readFileSync(CONFIG_FILE_PATH));
const vk = new VK({
    token: CONFIG.accessToken,
});

export async function updateVk() {
    await vk.api.messages.edit({
        peer_id: CONFIG.chatId,
        conversation_message_id: CONFIG.messageId,
        message: prepareMessage(),
    });
}

function prepareMessage() {
    let data = JSON.parse(readFileSync(WEEKS_FILE_PATH));
    let curWeek = readFileSync(CUR_WEEK_FILE_PATH);

    let resultMessage = "";
    let class_;
    for (let i in data[curWeek]) {
        resultMessage += "\n" + DAYS_NAMES[i] + ":\n";
        for (let k in data[curWeek][i]) {
            class_ = data[curWeek][i][k];
            resultMessage += (Number(k) + 1) + ". " + class_ + "\n";
        }
    }

    return resultMessage;
}
