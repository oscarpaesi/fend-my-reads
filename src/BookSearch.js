import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {

  state = {
    mustClose: false,
    query: '',
    resultBooks: []
  }

  close = () => {
    this.setState({ mustClose: true })
  }

  updateQuery = (query) => {
    const { getShelfBookIsOn } = this.props
    const currentQuery = query.trim();
    this.setState({ query })
    if (!currentQuery) {
      this.setState({ resultBooks: [] })
      return
    }
    BooksAPI.search(currentQuery)
    .then((books) => {
      let resultBooks
      if ("error" in books) {
        resultBooks = []
      } else {
        resultBooks = books
          .filter((book) => {
            // Make sure the book has a title, an author and a cover image,
            // so it can be properly displayed
            return (book.title && book.authors && book.imageLinks)
          })
          .sort((a, b) => {
            if (a.title < b.title) return -1
            if (a.title > b.title) return 1
            return 0
          })
        resultBooks.forEach(book => {
          const shelf = getShelfBookIsOn(book)
          book.shelf = shelf
        })
      }
      this.setState({ resultBooks: resultBooks })
    })
  }

  getBooksInShelf(shelf) {
    let bookIds = this.state.shelves
      .filter(entry => entry.shelf === shelf)
      .map(entry => entry.id)
    return this.state.books
      .filter(book => bookIds.includes(book.id))
      .map(book => ({...book, shelf}))
  }

  render() {
    const { mustClose, query, resultBooks } = this.state
    const { onBookChanged } = this.props
    return (mustClose)
      ? <Redirect push to="/" />
      : (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={ this.close }>Close</button>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={ query }
              onChange={ (event) => this.updateQuery(event.target.value) }
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {resultBooks.map((book, i) => (
            <li key={ i }>
              <Book book={ resultBooks[i] } onBookChanged={ onBookChanged }/>
            </li>
          ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch;