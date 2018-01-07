export default function hasClass(e, c) {
  return (new RegExp('(\\s|^)'+c+'(\\s|$)')).test(e.className)
}