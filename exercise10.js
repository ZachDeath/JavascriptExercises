var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
    readingStatus: true,
  },
  {
    title: "Walter Issacson",
    author: "Steve Jobs",
    libraryID: 4264,
    readingStatus: true,
  },
  {
    title: "Mockingjay: the final book of the hunger games",
    author: "Suzanne Collins",
    libraryID: 3245,
    readingStatus: false,
  },
];

function printBookStatus(x) {
  if (x < library.length) {
    console.log(
      ` Title:${library[x].title}\n Author:${library[x].author}\n Reading Status:${library[x].readingStatus}`
    )
  }
  else  {
      console.log("That book doesnt exist")
  }
}

printBookStatus(2);
