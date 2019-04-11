import React, { Component } from 'react'

class Book extends Component {
  render() {
    const { title, authors } = this.props.book
    const { width, height, url } = this.props.book.cover
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={ {width, height, backgroundImage: `url(${url})`} }></div>
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ title }</div>
        <div className="book-authors">{ authors }</div>
      </div>
    )
  }
}

export default Book;