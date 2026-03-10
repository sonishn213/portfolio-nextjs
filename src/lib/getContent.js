import fs from "fs";
import path from "path";

export function getContent() {
    const filePath = path.join(process.cwd(), "data/content.json");
    const jsonData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(jsonData);
}