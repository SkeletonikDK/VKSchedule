import { readFileSync, writeFileSync } from "node:fs";

import { WEEKS_FILE_PATH, DEFAULT_WEEKS_FILE_PATH } from "./common.js";

export function setDefault() {
    writeFileSync(DEFAULT_WEEKS_FILE_PATH, readFileSync(WEEKS_FILE_PATH));
}
