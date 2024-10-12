import { COLORS } from "./config/config";

function init(): void {
    const arr = Array.from({ length: Object.keys(COLORS).length }, (_, i) => i);
    let itertions = 0;
    let result1 = 0;
    let result2 = 0;
    let result3 = 0;

    let bonus = 0;

    while(true) {
        itertions++;

        bonus = getRandom(0, 1000);
        const fisrtSection = (bonus > 750) ? arr : shuffle(arr);
        const secondSection = shuffle(arr);
        const thirdSection = shuffle(arr);
        result1 = matcher(arr, fisrtSection);
        result2 = matcher(arr, secondSection);
        result3 = matcher(arr, thirdSection);
        if (result1 === 100 && result2 === 100 && result3 === 100) {
            break;
        }
    }   

    console.log(`Mathed: ${result1}:${result2}:${result3}% with ${itertions} itertions`);
}

function shuffle(arr: number[]): number[] {
    return arr.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

function matcher(expected: number[], actual: number[]): number {
    let match = 0;
    const length = expected.length;
    for (let i = 0; i < length; i++) {
        if (actual[i] == expected[i]) {
            match++;
        }
    }
    return Math.round((match/length)*100);
}

function getRandom(min: number, max: number): number {
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}

init();
