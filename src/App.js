import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import BookSearch from './BookSearch'
import update from 'immutability-helper'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  onBookChanged = (book, newShelf) => {
    const index = this.state.books.findIndex(b => b.id === book.id)
    let newBooks
    if (index >= 0) { // Books is already in one of the shelves
      newBooks = update(this.state.books, {[index]: {shelf: {$set: newShelf}}})
    } else { // Book is not in any bookshelf
      let newBook = update(book, {shelf: {$set: newShelf}})
      newBooks = update(this.state.books, {$push: [newBook]})
    }
    BooksAPI.update(book, newShelf).then(() => {
      this.setState({ books: newBooks })
    })
  }

  getBooksInShelf = (shelf) => {
    return this.state.books
      .filter(book => book.shelf === shelf)
      .sort((a, b) => {
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1
        return 0
      })
  }

  getShelfBookIsOn = (book) => {
    const bookInShelf = this.state.books.find(b => b.id === book.id)
    const shelf = (bookInShelf) ? bookInShelf.shelf : "none"
    return shelf
  }

  getShelves = () => {
    return [
      { title: "Currently Reading", books: this.getBooksInShelf('currentlyReading') },
      { title: "Want to Read", books: this.getBooksInShelf('wantToRead') },
      { title: "Read", books: this.getBooksInShelf('read') }
    ]
  }

  render() {
    const shelves = this.getShelves();
    return (
      <div className="app">
          <Route exact path="/" render={() => (
            <BookList
              shelves={ shelves }
              onBookChanged={ this.onBookChanged }
            />
          )}/>
          <Route path="/search" render={() => (
            <BookSearch
              shelves={ shelves }
              onBookChanged={ this.onBookChanged }
              getShelfBookIsOn={ this.getShelfBookIsOn }
            />
          )}/>
      </div>
    )
  }
}

export default BooksApp