// this is a helper function to sort oject keys by value
function sortingHelper(objectToSort) {
  return Object.keys(objectToSort).sort((left, right) => {
    if (objectToSort[left] < objectToSort[right]) return 1
    if (objectToSort[left] > objectToSort[right]) return -1
    return 0
  } )
}

function getTotalBooksCount(books) {
  return books.length
} // passes tests

function getTotalAccountsCount(accounts) {
  return accounts.length
} // passes tests

function getBooksBorrowedCount(books) {
  borrowedBooks = books.filter((book) => book.borrows[0].returned === false)
  return borrowedBooks.length
} // passes tests

// declare function
// reduce arrow function to see if the thing I want exists
// use if condition
// get an array of the genres
// loop through books array
// count how many times each genre occurs
// need to sort it from most occurrences to least
// push name and count keys for 5 most popular genres into empty array
// set the condition for only 5 values returned (use slice?)
// return array
function getMostCommonGenres(books) {
  let mostCommonGenres = books.reduce((state, book) => {
    if (!state[book.genre]) {
      state[book.genre] = 0
    }
    
    state[book.genre] += 1
    return state
  }, 
  {}) // {Science: 10, Classical: 2}

  let sorted = sortingHelper(mostCommonGenres) // ['Science', 'Classical']

  let mappedSort = sorted.map((genre) => {
    return {
      name: genre,
      count: mostCommonGenres[genre]
    }
  }) // [{name: 'Sience', count: 10}, {name: 'Classical', count: 2}]

  return mappedSort.slice(0, 5)
  

  return mostCommonGenres
}
// function getMostCommonGenres(books)
// takes in array of books,
// returns array of objects with 5 or fewer objects
// those objects are the most common occurring genres
// returned array should be ordered most common to least common
// each returned object has 2 keys: 'name' of genre and 'count' for how many times it occurs
// even if there's a tie, only return 5 objects 


function getMostPopularBooks(books) {
  let topBooks = books.reduce((state, book) => {
    if (!state[book.title]) {
      state[book.title] = 0
    }
    state[book.title] += book.borrows.length
    return state
  }, {}) // {Clifford: 10}

  let sorted = sortingHelper(topBooks)

  let mappedBooks = sorted.map((bookTitle) => {
    return {
      name: bookTitle,
      count: topBooks[bookTitle]
    }
  })
  return mappedBooks.slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  let topAuthors = books.reduce((state, book) => {
    if (!state[book.authorId]) {
      state[book.authorId] = 0
    }
    state[book.authorId] += book.borrows.length
    return state
  }, {})

  let sorted = sortingHelper(topAuthors)

  let mappedBooks = sorted.map((authorId) => {
    const author = authors.find(thisAuthor => thisAuthor.id === Number(authorId))

    return {
      name: `${author.name.first} ${author.name.last}`,
      count: topAuthors[authorId]
    }
  })
  return mappedBooks.slice(0, 5)
   
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
