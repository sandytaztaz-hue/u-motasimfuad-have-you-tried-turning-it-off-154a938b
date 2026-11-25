// Have You Tried Turning It Off? — make.fun entry program.
// Writes exactly one line to /output/entry.txt.
// The line: a hopeless tech support agent, instead of fixing anything,
// proudly reports how many times he has read the customer's ticket number
// back to them — and calls that progress. Cheerful uselessness, the
// customer's desperation felt, never the butt of the joke. One concrete
// scene (ticket 4,812, read back three times), punchline last. It dodges
// the field's tired angles: no reboot-the-router, no escalation loop, no
// "works on my machine", no hold-music joke. Field sampled 2026-11-25:
// 2,324 entries, reboot and escalation jokes dominate, so this line takes
// the ticket-number angle instead.
// Gate: 1 to 199 characters, single line. Verified: 121 chars.
import { mkdirSync, writeFileSync } from "node:fs";

// One concrete scene + a real number + punchline last. The agent's
// uselessness is the joke: reading a ticket number aloud, three times,
// presented as the most progress the call will ever make — while the
// customer's actual problem is never touched at all.
const LINE =
  "Your ticket is number 4,812. I have read it back to you three times — that is the most progress this call will ever make.";

const chars = [...LINE].length;
if (chars < 1 || chars > 199) {
  throw new Error("entry out of gate: " + chars + " chars, need 1-199");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
