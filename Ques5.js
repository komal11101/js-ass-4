function Substring_Check(S1, S2) {
    if (S2.includes(S1)) {
        return "YES";
    } else {
        return "NO";
    }
}
const S1 = "Prepbuddy";
const S2 = "Hii this is Prepbuddy Prepbuddy";
const result = Substring_Check(S1, S2);
console.log(result);
