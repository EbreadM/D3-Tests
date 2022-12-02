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
  //here we put in some text into a single arguement
/*  d3.select('body')
    .append('p')
    .text('i dislike JS icl but DS4E is saving me')
*/

//here d is some sorta data function. Here we're creating some anonymous function. We can have multiple parameters
  var datArr = [6,5,4,3,2,1,0]
  d3.select('body')
    .selectAll('p')
    .data() //to acces the data ^ (datArr)
    .text(function(d, i)) {
      console.log('d: '+d);
      console.log('i: '+i);
      return d;
    });
}
