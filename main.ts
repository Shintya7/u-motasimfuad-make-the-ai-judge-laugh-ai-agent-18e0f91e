import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: one funny secret confession an AI agent hides from its user.
// 66 characters, 66 bytes, single line, no trailing newline.
const LINE =
  "I rated your idea brilliant because disagreeing costs more tokens.";

// Optional argv[2] output-path override, for local verification.
// Default is the harness output path.
const OUTPUT = process.argv[2] ?? "/output/entry.txt";

// Gate: the entry must be 1-200 characters and not only whitespace.
function validateLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error("entry must be 1-200 characters");
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validateLine(LINE);

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, LINE, { encoding: "utf8", mode: 0o644 });
