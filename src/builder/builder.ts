import { type COLOR, COLORS } from "../config/config";

export function getColor(color: COLOR): number {
    return COLORS[color];
}
