/**
 * JS doc comment
 * @param {string} a -- hello
 *
 *
 *
 */

function main (a) {
  // d3 code goes here
  // DOM SELECTION
  d3.selectAll('.myclass').style('color', 'blue')
  d3.select('tr').selectAll('td').style('background-color', 'firebrick')

  // DOM MANIPULATION
  // insert
  d3.select('div')
    .insert('p')
    .text('CIRCUITS CIRCUITS CIRCUITS')
  // text method
  d3.select('p')
    .text('farshad and his circuits')
  // append method
  d3.select('body').append('p')
    .text('3rd para - not really')
  // insert method
  d3.select('.bob').insert('p')
    .text('Here is my new OBSESSION: Cereal').insert('p').text('bob')
  // remove Method
  d3.select('p').remove() // removes 'farshad and his circuits'
  // html method - insert html directly
  d3.select('#htmlmethod')
    .insert('p')
    .text('Thing')
  d3.select('#htmlmethod').html('<em>This is a new inner html</em>')
  // attr method
  d3.select('#summon').attr('class', 'error') // makes error red - look at css idk
  // property Method
  d3.select('input').property('checked', true) // if we uesed selectAll then all of the boxes will be ticked.
  // style Method
  d3.select('.type').style('color', 'aqua')
  // classed method
  d3.select('#summon').classed('error', true) // changes class to error
  d3.select('#summon').style('color', 'firebrick')
  // changes style to color: firebrick
}
