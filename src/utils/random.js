export default function(max,min) {
  var m = Number(max), n = Number(min);
  m = !isNaN(m)&&isFinite(m) ? parseInt(m) : 0;
  n = !isNaN(n)&&isFinite(n) ? parseInt(n) : 0;
  return Math.floor(Math.random()*(m-n)+n)
}