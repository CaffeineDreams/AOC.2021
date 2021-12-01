import { GetInputFromFile } from "./AocHelpers";
import { day1 } from "./days/day1";

(() => {
    const days = [
        day1
    ];

    for (const day of days) {
        const name = day.name;
        const input = GetInputFromFile(`inputs\\${name}.txt`);
        const solution = day(input);

        console.log(`
        ${name} solution:
        ${solution}
        ------------
        `);
    }
})();