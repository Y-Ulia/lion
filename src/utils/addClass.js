import hasClass from './hasClass';
export default function(e, c) {
  if(!hasClass(e, c)) {
    e.className += ' '+ c;
  }
}