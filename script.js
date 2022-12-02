/**
 * JS doc comment
 * @param {string} a -- hello
 *
 *
 *
 */

function main (a) {
  // d3 code goes here
  //chaining method- part of this is the chaining method as you can put them on a new line and they still run.Also doesnt care abt whitespace.
  /*d3.select('body')
    .append('p').attr('style', 'color: navy')
  */
  //also do this by storing everything into it's own variable (El for element)
/*var bodyEl = d3.select('body');
  var para = bodyEl.append('p');
  para.text('whyyyieeeyeee');
*/
  //the above using chaining method
  d3.select('body')
    .append('p')
    .text('i dislike JS icl but DS4E is saving me')
}
