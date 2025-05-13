var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-An-Introduction-To-Integers",
  "level": "1",
  "url": "sec-An-Introduction-To-Integers.html",
  "type": "Section",
  "number": "1.1",
  "title": "An Introduction to Integers",
  "body": " An Introduction to Integers  "
},
{
  "id": "sec-Fractions-and-Order-of-Operations",
  "level": "1",
  "url": "sec-Fractions-and-Order-of-Operations.html",
  "type": "Section",
  "number": "1.2",
  "title": "Fractions and Order of Operations",
  "body": " Fractions and Order of Operations  "
},
{
  "id": "sec-Adding-Fractions",
  "level": "1",
  "url": "sec-Adding-Fractions.html",
  "type": "Section",
  "number": "1.3",
  "title": "Adding Fractions",
  "body": " Adding Fractions   "
},
{
  "id": "sec-Subtracting-Fractions",
  "level": "1",
  "url": "sec-Subtracting-Fractions.html",
  "type": "Section",
  "number": "1.4",
  "title": "Subtracting Fractions",
  "body": " Subtracting Fractions  "
},
{
  "id": "sec-Order-of-Operations",
  "level": "1",
  "url": "sec-Order-of-Operations.html",
  "type": "Section",
  "number": "1.5",
  "title": "Order of Operations",
  "body": " Order of Operations  "
},
{
  "id": "ch-Linear-Functions",
  "level": "1",
  "url": "ch-Linear-Functions.html",
  "type": "Chapter",
  "number": "2",
  "title": "Linear Functions",
  "body": " Linear Functions    "
},
{
  "id": "ch-Polynomial-Functions",
  "level": "1",
  "url": "ch-Polynomial-Functions.html",
  "type": "Chapter",
  "number": "3",
  "title": "Polynomial Functions",
  "body": " Polynomial Functions    "
},
{
  "id": "ch-Rational-Functions",
  "level": "1",
  "url": "ch-Rational-Functions.html",
  "type": "Chapter",
  "number": "4",
  "title": "Rational Functions",
  "body": " Rational Functions    "
},
{
  "id": "ch-Radical-Functions",
  "level": "1",
  "url": "ch-Radical-Functions.html",
  "type": "Chapter",
  "number": "5",
  "title": "Radical Functions",
  "body": " Radical Functions    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
