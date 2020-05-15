// Замена слово А на слово B только в предложениях, где имеется слово C

let input = 'The syntax of Java is largely influenced by C++. Unlike C++, Java does not support operator overloading.' +
    ' Java uses comments similar to those of C++.';
let a = 'Java';
let b = 'JS';
let c = 'overloading';


let output = '';
let startDotPosition = 0;
let dotPosition = 0;

while (dotPosition !== -1) {
    dotPosition = input.indexOf('.', startDotPosition);
    let endSubstr = dotPosition === -1 ? input.length : dotPosition;
    let part = input.substring(startDotPosition, endSubstr + 1);
    if (part.indexOf(c) !== -1) {
        part = part.replace(a, b);
    }

    output += part;
    startDotPosition = dotPosition + 1;
}

alert(output);