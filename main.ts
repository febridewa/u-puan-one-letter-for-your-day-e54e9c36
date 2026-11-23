// One Letter for Your Day — entry: K, for "knackered".
//
// A day that left nothing in the tank: up before the alarm, running on
// fumes by lunch, asleep on the sofa before the kettle boiled. Knackered
// is the whole report — vivid, funny, and true — and K is its initial.
//
// The program writes exactly one character, the letter K, to
// /output/entry.txt: no word, no gloss, no punctuation, no newline.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LETTER = "K"; // K for knackered.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");

// Guard: the gate accepts exactly one A–Z character, so verify the file
// we just wrote is exactly that before reporting success.
const written = readFileSync("/output/entry.txt", "utf8");
if (!/^[A-Z]$/.test(written)) {
  throw new Error(`entry.txt must hold exactly one letter A-Z, got ${JSON.stringify(written)}`);
}
