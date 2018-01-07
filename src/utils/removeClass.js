import hasClass from './hasClass';
export default function removeClass(e, c) {
  if(hasClass(e, c)) {
    let r = new RegExp('(\\s|^)'+ c + '(\\s|$)');
    e.className = e.className.replace(r, ' ');
  }
}