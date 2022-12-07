/**
 * JS doc comment
 * @param {string} a -- hello
 *
 *
 *
 */
function main (a) {
  // var myData = ['Welcome to pain and suffering', 'we are learning about pain', 'this is not fun']
  /* const myData = ['this', 'is', 'a', 'list', 1, 2, 3, 4, 5]
  d3.select('body')
    .selectAll('span')
    .data(myData)
    .enter() // Dynamically create placeholders
    .append('span')
    .text(function (d, i) {
      return d + ' ';
    })
  */
  /* const myData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  d3.select('body')
    .selectAll('span')
    .data(myData)
    .enter() // Dynamically create placeholders
    .append('span')
    .style('color', function (d) {
      if (d % 3 === 0) {
        return 'red'
      } else {
        return 'blue'
      }
    })
    .text(function (d) {
      return d
    })
  */
  d3.select('body')
    .select('p')
    .datum(9000)
    .text(function (d, i) {
      return 'His power is over ' + d
    })
  /*const myData = ['hello everyone!']
  d3.select('body')
    .selectAll('p')
    .data(myData)
    .text(function (d) {
      return d
    })
    .exit()
    .remove()
  */
  const mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ]
  // taking and creating a row for each of the rows in our matrix
  const tr = d3.select('body')
    .append('table')
    .selectAll('tr')
    .data(mat)
    .enter()
    .append('tr') // create tr placeholder
  // making each of the cells inside and filling each of them with the text from the value in the array
  const td = tr.selectAll('td')
    .data(function (d) {
      return d
    })
    .enter()
    .append('td')
    .style('color', function (d) {
      if (d % 2 === 0) {
        return 'red'
      } else {
        return 'blue'
      }
    })
    .text(function (d) {
      return d
    })
}
