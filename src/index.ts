import { COLORS } from "./config/config";

function init(): void {
    const arr = Array.from({ length: Object.keys(COLORS).length }, (_, i) => i);
    let itertions = 0;
    let result1 = 0;
    let result2 = 0;
    let result3 = 0;

    while(true) {
        itertions++;
        const fisrtSection = shuffle(arr);
        const secondSection = shuffle(arr);
        const thirdSection = shuffle(arr);
        result1 = matcher(arr, fisrtSection);
        result2 = matcher(arr, secondSection);
        result3 = matcher(arr, thirdSection);
        if (itertions % 100000000 == 0) {
            console.log(`${itertions} have passed!`);
            console.clear();
        }
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

init();
