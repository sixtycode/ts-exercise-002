// Write a code to check whether the number is odd or even
//  ○ Example: 25 → odd number, 2 → even number
const _inputnum: number = 25;
let _checkodd = _inputnum % 2 == 0 ? " -> even number" : " -> odd number";
console.log(_inputnum + _checkodd);


//  ● Write a code to check whether the number is prime number or not
//  ○ Example: 7 → 7 is a prime number
//  ○ Example: 6 → 6 is not a prime number
const _inputprime: number = 7;
let _checkprime = _inputprime % 2 == 1 && _inputprime > 1 || _inputprime == 2? " is a prime number" : " is not a prime number";
console.log(_inputprime + _checkprime);


//  ● Write a code to find the sum of the numbers 1 to N
//  ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
//  ○ Example: 3 → 1 + 2 + 3 = 6
const _inputsum: number = 3;
let _hasil: number = _inputsum;
let _counter: number = 1;
while (_counter < _inputsum) {
    _hasil = _hasil + _counter;
    _counter++;
}
console.log(_hasil);


//  ● Write a code to find factorial of a number
//  ○ Example: 4! → 4 x 3 x 2 x 1 = 24
//  ○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
const _inputfac: number = 6;
let _result: number = _inputfac;
let _count: number = 1;
while (_count < _inputfac) {
    _result = _result * _count;
    _count++;
}
console.log(_result);


//  ● Write a code to print the first N fibonacci numbers
//  ○ Example: 15 → 610
const _inputfibo: number = 15;
let _x: number = 0;
let _y: number = 1;
let _z: number = _x + _y;
let _i: number = 1;
while (_i <= _inputfibo - 2) {
    _z = _x + _y;
    _y = _x;
    _x = _z;
    _i++;
}

if (_inputfibo == 0) {
    _y = 0;
    _z = 0;    
} else if (_inputfibo == 1 || _inputfibo == 2) {
    _z = 0
} 

console.log(`${_inputfibo} -> ${ _x+ _y+ _z}`);
console.log(_inputfibo + " -> " + (_x + _y +_z));