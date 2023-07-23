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
 * Complete the 'insertionSort1' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort1(n: number, arr: number[]): void {
    // Write your code here
    const number = arr[n - 1];

    for (let i = n - 1; i >= 0; i--) {
        const previousNumber = arr[i - 1];
        if (previousNumber > number) arr[i] = previousNumber;
        if (previousNumber < number) {
            arr[i] = number;
            console.log(arr.join(' '));
            break;
        }
        if (i === 0 && arr[0] > number) {
            arr[0] = number;
        }
        console.log(arr.join(' '));
    }
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort1(n, arr);
}
