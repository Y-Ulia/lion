export default function(node) {
  if(!node) {return}
  let type = Object.prototype.toString.call(node).match(/\[object (.*?)\]/)[1].toLowerCase()
  if(type.substr(0,4) === "html") {
    node.parentNode.removeChild(node)
    return true;
  }
}