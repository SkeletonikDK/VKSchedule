import { readFileSync, writeFileSync } from "node:fs";

const CUR_WEEK_FILE_PATH = "../cur_week.txt";
const WEEKS = {
    EVEN: "0",
    ODD: "1",
}

export function rotate() {
    let curWeek = readFileSync(CUR_WEEK_FILE_PATH);
    if (curWeek == WEEKS.EVEN) {
        curWeek = WEEKS.ODD;
    } else if (curWeek == WEEKS.ODD) {
        curWeek = WEEKS.EVEN;
    } else {
        throw new Error("cur_week.txt content is invalid");
    }

    writeFileSync(CUR_WEEK_FILE_PATH, curWeek);
}
