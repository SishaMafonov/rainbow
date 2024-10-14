import { COLORS } from "./config/config";

function init(): void {
    const arr = Array.from({ length: Object.keys(COLORS).length }, (_, i) => i);
    let itertions = 1000000000;
    let index = 0;
    let result1 = 0;
    let result2 = 0;
    let result3 = 0;

    let single = 0;
    let double = 0;
    let jackpot = 0;
    let bonusCount = 0;

    let bonus = 0;

    while(index < itertions) {
        

        bonus = getRandom(0, 1000);
        if (bonus > 450) {
            bonusCount++;
        }
        const fisrtSection = (bonus > 450) ? arr : shuffle(arr);
        const secondSection = shuffle(arr);
        const thirdSection = shuffle(arr);
        result1 = matcher(arr, fisrtSection);
        result2 = matcher(arr, secondSection);
        result3 = matcher(arr, thirdSection);

        if (result1 === 100 && result2 === 100 && result3 === 100) {
            jackpot++;
        }
        if (result1 === 100 && result2 !== 100 && result3 !== 100) {
            single++;
        }
        if (result1 !== 100 && result2 === 100 && result3 !== 100) {
            single++;
        }
        if (result1 !== 100 && result2 !== 100 && result3 === 100) {
            single++;
        }
        if (result1 === 100 && result2 === 100 && result3 !== 100) {
            double++;
        }
        if (result1 !== 100 && result2 === 100 && result3 === 100) {
            double++;
        }
        if (result1 === 100 && result2 !== 100 && result3 === 100) {
            double++;
        }
        index++;
    }   

    console.log(`Single hit: ${single}: ${single/index}`);
    console.log(`Double hit: ${double}: ${double/index}`);
    console.log(`Jackpot hit: ${jackpot}: ${jackpot/index}`);
    console.log(`Bonus hit: ${bonusCount}: ${bonusCount/index}`);
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
