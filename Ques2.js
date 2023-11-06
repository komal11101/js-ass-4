function Check_Leap(N) {
    if ((N % 4 === 0 && N % 100 !== 0) || (N % 400 === 0)) {
        return "Leap Year";
    } else {
        return "Non Leap Year";
    }
}
console.log(Check_Leap(1900));

// It checks if the year is a leap year by applying the following conditions:

// If the year is divisible by 4 and not divisible by 100, or
// If the year is divisible by 400, then it's a leap year.