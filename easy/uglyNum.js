//Write a program to check whether a given number is an ugly number.

//Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

var isUgly = function(num) {
    if (num <= 0) return false;
	if (num < 5) return true;
    while (num % 2 == 0) {
        num = num / 2;
    }
    while (num % 3 == 0) {
        num = num / 3;
    }
    while (num % 5 == 0) {
        num = num / 5;
    }
    return (num == 1);
