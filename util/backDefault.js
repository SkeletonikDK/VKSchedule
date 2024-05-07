import { readFileSync, writeFileSync } from "node:fs";

import { WEEKS_FILE_PATH, DEFAULT_WEEKS_FILE_PATH } from "./common.js";

export function backDefault() {
    writeFileSync(WEEKS_FILE_PATH, readFileSync(DEFAULT_WEEKS_FILE_PATH));

    console.log("Установлено по умолчанию \n");
}
