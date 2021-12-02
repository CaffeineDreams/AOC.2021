import { day2 } from "../days";
import { GetInputFromFile } from "../helpers/AocHelpers";

describe("day2", () => {
    let input: string[];

    beforeEach(() => {
        input = GetInputFromFile(`inputs\\day2.txt`);
    });

    it("solves day 2", () => {
        const [taskA, taskB] = day2(input);

        console.log({taskA, taskB});

        expect(taskA).toBe("2147104");
        expect(taskB).toBe("2044620088");
    });
});