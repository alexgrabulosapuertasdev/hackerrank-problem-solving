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

function main() {
    // Enter your code here
    
    const n = readLine();
    const list = readLine().split(' ');
    
    const isSorted = (list: string[]): boolean => {
        for (let i = 0; i < list.length; i++) {
            if (Number(list[i]) > Number(list[i + 1])) return false;
        }
        
        return true;
    }
    
    const sort = (list: string[]) => {
        for (let i = 0; i < list.length; i ++) {
            if (Number(list[i]) > Number(list[i + 1])) {
                const num = list[i];
                list[i] = list[i + 1];
                list[i + 1] = num;
                break;
            }
        }
    }
    
    while(!isSorted(list)) {
        sort(list);
    }
    
    console.log(list.join(' '));
}