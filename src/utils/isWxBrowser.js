export default function() {
  return navigator.userAgent.toLowerCase().indexOf('micromessenger') < 0 ? false : true;
}