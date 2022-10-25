function findAccountById(accounts, id) {
  const found = accounts.find((account) => account.id === id)
  if (found) return found
} // passing tests

const sortAccountsByLastName = (accounts) => {
  let sorted = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1)
  return sorted
} // passing tests

// declare function, takes in two perameters
// an account object (which is a variable) and the books array
// check if that account has borrowed any books
// if true, add one to accumulator
// return how many books account has borrowed

function getTotalNumberOfBorrows(account, books) {
 let countedBooks = books.reduce((countState, book) => {
   let count = book.borrows.reduce((borrowState, borrow) => {
    if (borrow.id === account.id) {
      return borrowState += 1
    }
    return borrowState
   }, 0)

   return countState += count
 }, 0)

  return countedBooks
}
// - An account object.
// - An array of all book objects.
// It returns a _number_ that represents the number of times the account's ID appears 
// in any book's `borrows` array.


// declare function with three perameters
// set an empty array
// check the account for if any books are checked out
// if checked out is true, push book name and author id to empty array
// need to turn author id into author name
// loop through  
// return array
function getBooksPossessedByAccount(account, books, authors) {
  let mappedBooks = books.map(book => {
    const author = authors.find(author => author.id === book.authorId)
    return {
      ...book,
      author
    }
  })
  return mappedBooks.filter((book) => book.borrows.some(borrow => borrow.id === account.id && borrow.returned === false))
}
// takes in an account object, an array of all book objects, an array of all author objects.
// returns an array of book objects, including author information, that represents all books 
// _currently checked out_ by the given account. 
// the author object is nested inside of the book oject being returned.

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
