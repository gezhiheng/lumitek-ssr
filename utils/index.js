/**
 * @example 
 * objectToQueryString(null) // ''
 * objectToQueryString({}) // ''
 * objectToQueryString({ name: 'henry', age: 22 }) // 输出: ?name=henry&age=22
 */
function objectToQueryString(obj) {
  if (!obj || Object.keys(obj).length < 1) {
    return ''
  }
  const queryString = Object.keys(obj)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
      .join('&')
  return '?' + queryString
}

export { objectToQueryString }
