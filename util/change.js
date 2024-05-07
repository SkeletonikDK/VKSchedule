import { readFileSync, writeFileSync } from "node:fs";

import { WEEKS_FILE_PATH, CUR_WEEK_FILE_PATH } from "./common.js";

export function change(numOfDay, numOfClass, newText) {
    let curWeek = readFileSync(CUR_WEEK_FILE_PATH);
    let weeks = JSON.parse(readFileSync(WEEKS_FILE_PATH));
    
    weeks[curWeek][numOfDay - 1][numOfClass - 1] = newText;

    writeFileSync(WEEKS_FILE_PATH, JSON.stringify(weeks, null, 4));

    console.log(`Расписание изменено!`);
}
