import { AocFunc } from "../helpers/AocHelpers";
import { ParseVector, Point, PointProduct, Vector } from "../helpers/types";

export const day2: AocFunc = (input) => {
    
    const taskA = day1_a(input);
    const taskB = day1_b(input);

    return [
        PointProduct(taskA).toString(),
        PointProduct(taskB).toString()
    ];
};

const day1_a = (input: string[]) => {
    const position: Point = { X: 0, Y: 0 };

    const modifyPosition = (vector: Vector) => {
        switch (vector.direction) {
            case "down":
                position.Y += vector.offset;
                return;
            case "up":
                position.Y -= vector.offset;
                return;
            case "forward":
                position.X += vector.offset;
                return;
        }
    };

    input.map(ParseVector).forEach(modifyPosition);

    return position;
};

const day1_b = (input: string[]) => {
    const position: Point = { X: 0, Y: 0 };
    let aim = 0;

    const modifyPosition = (vector: Vector) => {
        switch (vector.direction) {
            case "down":
                aim += vector.offset;
                return;
            case "up":
                aim -= vector.offset;
                return;
            case "forward":
                position.X += vector.offset;
                position.Y += vector.offset * aim;
                return;
        }
    };

    input.map(ParseVector).forEach(modifyPosition);

    return position;
};
