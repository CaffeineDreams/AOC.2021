import { AocFunc } from "../helpers/AocHelpers";

export const day3: AocFunc = (input) => {
    const len = input[0].length;
    
    let tally: number[] = Array(len).fill(0);

    input
        .map((v) => v.split("").map(Number))
        .forEach((v) => {
            v.forEach((n,i) => tally[i] += n);
        });

    const gamma = parseInt(tally
        .map((t) => t > input.length / 2 ? 1 : 0)
        .join(""), 2);

    const epsilon = fliparoo(gamma, len);

    return [String(gamma * epsilon)];
}; 

const fliparoo = (intToFlip: number, maskLen): number => {
    const mask = (1 << maskLen) - 1;
    return ~intToFlip & mask;
}