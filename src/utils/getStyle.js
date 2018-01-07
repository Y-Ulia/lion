export default function(element, property){
  var proValue = null;
  if (!document.defaultView) {
    proValue = element.currentStyle[property];
  } else {
    proValue = document.defaultView.getComputedStyle(element)[property];
  }
  return proValue;
}