export type Point = { X: number, Y: number };
export type Vector = { direction: Direction, offset: number };

type Direction = "forward" | "down" | "up";

export const ParseVector = (input: string): Vector => {
    const [direction, offset] = input.split(" ");
    return { direction: direction as Direction, offset: Number(offset) }
}

export const PointProduct = (position: Point): number => {
    return position.X * position.Y;
};