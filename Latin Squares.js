//DESCRIPTION:
//    A latin square is an n × n array filled with the integers 1 to n, each occurring once in each row and column.
//    Latin squares have many practical uses, for example in error-correcting-codes and the design of agricultural experiments. See https://en.wikipedia.org/wiki/Latin_square for more details. Sudoku is a special type of 9 x 9 latin square, with additional conditions.
//
//    Task: Write a function that returns a latin square for any positive integer n.
//
//    You might also enjoy Latin Square Validator and Euler Squares.


//SOLUTION:

function makeLatinSquare(n) {
    const range = [...Array(n).keys()].map(x=> x + 1);
    return range.map(y=> range.map(x=> (y + x) % n + 1));
}