export default function(parentNode, childNode) {
  if(!parentNode&&!childNode) {return}
  var type = Object.prototype.toString.call(parentNode).match(/\[object (.*?)\]/)[1].toLowerCase();
  if(type.substr(0,4) === "html") {
    type = Object.prototype.toString.call(childNode).match(/\[object (.*?)\]/)[1].toLowerCase();
    if(type.substr(0,4) === "html") {
      parentNode.appendChild(childNode)
      return true;
    }
  }
}