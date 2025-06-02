// The Call Stack//
// Keeps track of its place in a script that calls muliple functions//
// Last in frist out (lifo)

const multiply = (x, y)=> x * y;

const square = (x, x) => x * x;

const isRightTriangle = (a, b, c)=>{
    return square(a) + square(b) === square(c);
};

isRightTriangle(3,4,5);


// WebApis & Single Thread //