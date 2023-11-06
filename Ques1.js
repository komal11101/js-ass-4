function Minimal_Angle(h, m) {
    const minuteAngle = 6 * m;
  const hourAngle = 30 * h + 0.5 * m;
 const angle = Math.abs(minuteAngle - hourAngle);
 return Math.min(angle, 360 - angle);
}
const h = 6;
const m = 0;
const minimalAngle = Minimal_Angle(h, m);
console.log(minimalAngle);
