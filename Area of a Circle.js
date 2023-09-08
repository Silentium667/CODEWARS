// DESCRIPTION:
//    Complete the function which will return the area of a circle with the given radius.
//
//    Round the returned number to two decimal places. If the radius is not positive or not a number, return false.


// SOLUTION:

var circleArea = function(radius) {
    if(isNaN(radius) || radius <= 0) return false;
    return Math.round(Math.PI * Math.pow(radius, 2) * 100) / 100;
};