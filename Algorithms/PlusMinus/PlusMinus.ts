'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    // Write your code here
    const n = arr.length;
    let positives = 0;
    let zeros = 0;
    let negatives = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positives++;
            continue;
        }

        if (arr[i] === 0) {
            zeros++;
            continue;
        }

        negatives++;
    }
    const formatPercent = (num: number) => (num / n).toFixed(n)
    
    console.log(formatPercent(positives));
    console.log(formatPercent(negatives));
    console.log(formatPercent(zeros));
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
