// Sorts by author name 

var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Issacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: the final book of the hunger games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

function compare( a, b ) {
    if ( a.author < b.author ){
      return -1;
    }
    if ( a.author > b.author ){
      return 1;
    }
    return 0;
  }
  

library.sort(compare);
console.log(library);