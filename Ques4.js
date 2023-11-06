function Reverse_Number(N) {
    const rev = N.toString().split('').reverse().join('');
    return parseInt(rev);
}
console.log(Reverse_Number(1900));
