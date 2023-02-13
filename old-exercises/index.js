function minTime(files, numCores, limit) {
    const numberFiles = files.length;
    
    let filesSort = files.sort((a, b) => { return b - a; });

    let sum = filesSort.reduce((previousValue, currentValue) => {

        // console.log('Valor previo: ', previousValue);
        // console.log('Valor actual: ', currentValue);
        // if(currentValue % 2 == 1) {
            return previousValue + currentValue;
        // }
    })

    return sum;
    
}

const files = [5, 3, 1, 40, 10];

// console.log('Resultado: ', minTime(files, 5, 5));


/* ---------------------------------------------------------------------------------------------------
    * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
--------------------------------------------------------------------------------------------------- */

const matrix = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
// const matrix = [[11, 2, 4, 5], [4, 5, 6, 7], [10, 8, -12, 15], [8, 6, 5, 9]];

function diagonalDifference(arr) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let diagonalCounter = 0;
    
    for(let n = 0; n < arr.length; n++) {
        for(let m = 0; m < arr.length; m++) {
            if( m === diagonalCounter) {
                leftDiagonal = leftDiagonal + arr[n][m];
            }
        }
        diagonalCounter++;
    }

    diagonalCounter = arr.length -1;
    for(let i = 0; i < arr.length; i++) {

        for(let j = 0; j < arr.length; j++) {

            if( j === diagonalCounter) {
                rightDiagonal = rightDiagonal + arr[i][j];
            }
        }
        diagonalCounter--;
    }

    return Math.abs(leftDiagonal - rightDiagonal);
}

// console.log('Resultado: ', diagonalDifference(matrix));


/* ---------------------------------------------------------------------------------------------------
    * Given an array of integers, calculate the ratios of its elements that are positive, negative, 
    * and zero. Print the decimal value of each fraction on a new line with places after the decimal.
--------------------------------------------------------------------------------------------------- */
arrayRatios = [-4, 3, -9, 0, 4, 1,]

function plusMinus(arr) {
    let contPositive = 0;
    let contNegative = 0;
    let contZero = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) contPositive++;
        else if(arr[i] < 0) contNegative++;
        else contZero++;
    }

    let positiveRatio = contPositive/arr.length;
    let negativeRatio = contNegative/arr.length;
    let zeroRatio = contZero/arr.length;
    
    return [ positiveRatio.toFixed(6), negativeRatio.toFixed(6), zeroRatio.toFixed(6)];
}

// console.log('Array ratios ', plusMinus(arrayRatios));



/*
    * Its base and height are both equal to n. It is drawn using # symbols and spaces.
    * The last line is not preceded by any spaces.
    * Write a program that prints a staircase of size.
*/
function staircase(n) {
    let counter = n-1;

    for(let i = 1; i <= n; i++) {
        let spaces = n - i;
        let numerals = i;
        let line = "";

        for(let j = 1; j <= spaces; j++) {
            line = line + ' ';
        }

        for(let k = 1; k <= numerals; k++) {
            line = line + '#';
        }
        console.log(line);
        counter--;
    }

}

// staircase(5);


const maxMin = [1, 2, 3, 4, 5];
function miniMaxSum(arr) {
    const sum = arr.reduce((ant, cur) => ant + cur);
    console.log('Suma: ', sum);

    console.log('Maximo: ', Math.max(...arr));

    console.log(sum-Math.max(...arr), sum-Math.min(...arr));
}

// miniMaxSum(maxMin);


let candles = [4, 4, 1, 6, 8, 8, 6, 9, 3, 4, 9, 9, 4, 4];
function birthdayCakeCandles(candles) {
    let max = Math.max(...candles);

    let count = 0;
    candles.forEach(value => {
        if(value == max) count++;
    });

    console.log('contador: ', count);
}
// birthdayCakeCandles(candles);


function timeConversion(s) {
    let fragments = s.split(':');
    let format24 = '';
    
    if(fragments[2].toLowerCase().includes('am')){
        fragments[2] = fragments[2].substring(0, 2);

        if(fragments[0] == '12' && fragments[1] == '00' && fragments[2] == '00'){
            fragments[0] = '00';
        }
        else if(fragments[0] == '12'){
            fragments[0] = '00';
        }
    }

    else if(fragments[2].toLowerCase().includes('pm')) {
        fragments[2] = fragments[2].substring(0, 2);

        if(fragments[0] == '12' && fragments[1] == '00' && fragments[2] == '00'){
            fragments[0] = '12';
        }
        else if(fragments[0] == '12'){
            fragments[0] = '12';
        }
        else{
            fragments[0] = parseInt(fragments[0]) + 12 + '';
        }
    }

    format24 = fragments[0]+':'+fragments[1]+':'+fragments[2];

    // return format24;
    console.log(format24);
}

// const time = '07:05:45PM';
// const time = '12:00:00PM';
const time = '09:00:00PM';
// timeConversion(time);

function hourglassSum(arr) {
let largestSum = 0;
   for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 4; col++) {
            let hourglass = arr[row][col] + arr[row][col+1] + arr[row][col+2] + arr[row+1][col+1] + arr[row+2][col] + arr[row+2][col+1] + arr[row+2][col+2];
            if(hourglass > largestSum) largestSum = hourglass;
        }
    }
    return largestSum;
}



const clocks = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(clocks));