export default function(n, d) {
  if(n == undefined) {
    return '00'
  }
  var n = Number(n),
      d = Number(d);
  n = !isNaN(n)&&isFinite(n) ? parseInt(n) : 0;
  d = !isNaN(d)&&isFinite(d) ? parseInt(d) : 0;

  var s = String(n).length,
      z = '',
      l = 0;

  d = d < 2 ? 2 : d;
  l = d - s;

  for(let i = 0; i < l; i++) {
    z += '0';
  }
  return z + n;
}