import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
  render() {
    const { title, books } = this.props
    let bookItems = []
    for (let i = 0; i < books.length; i++) {
      bookItems.push(
        <li key={ i }>
          <Book book={ books[i] } />
        </li>
      );
    }
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { bookItems }
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf;