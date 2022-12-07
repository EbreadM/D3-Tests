/**
 * JS doc comment
 * @param {string} a -- hello
 *
 *
 *
 */
function main (a) {
  const width = 500
  const height = 500
  // create SVG element
  const svg = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height)
  // line
  /*
  svg.append('line')
    .attr('x1', 100)
    .attr('x2', 400)
    .attr('y1', 40)
    .attr('y2', 400)
    .style('stroke', 'navy') */
  // rectangle
  /* svg.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 100)
    .attr('height', 200)
    .style('fill', 'blue') */
  // circle
  /* svg.append('circle').attr('cx', 250).attr('cy', 50)
    .attr('r', 60)
    .attr('fill', 'red') */
  // ellipse
  /* svg.append('ellipse').attr('cx', 250).attr('cy', 50)
    .attr('rx', 150)
    .attr('ry', 50)
    .attr('fill', 'red')
  */
  // transformations
  const g = svg.append('g')
    .attr('transform', function (d, i) {
      return 'translate(0,0)'
    })
  const circ = g.append('circle')
  .attr('cx', 250)
  .attr('cy', 50)
  .attr('r', 50)
  .attr('fill', 'red')
  .attr('opacity', 0.5);

  g.append('text')
  .attr('x', 213)
  .attr('y', 50)
  .attr('stroke', 'black')
  .attr('font-family', 'sans-serif')
  .attr('font-size', '24px')
  .text('danger')
}
