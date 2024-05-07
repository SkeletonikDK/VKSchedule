import { readFileSync, writeFileSync } from "node:fs";

import { CUR_WEEK_FILE_PATH } from "./common.js"

const WEEKS = {
    EVEN: "четная",
    ODD: "нечетная",
}

export function rotate() {
    let curWeek = readFileSync(CUR_WEEK_FILE_PATH);
    if (curWeek == WEEKS.EVEN) {
        curWeek = WEEKS.ODD;
    } else if (curWeek == WEEKS.ODD) {
        curWeek = WEEKS.EVEN;
    } else {
        throw new Error("curWeek.txt content is invalid");
    }

    writeFileSync(CUR_WEEK_FILE_PATH, curWeek);
}
