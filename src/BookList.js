import React, { Component } from 'react'
import Shelf from './Shelf'
import { Redirect } from 'react-router-dom'

class BookList extends Component {

  state = {
    search: false
  }

  search = () => {
    this.setState({ search: true })
  }

  render() {
    const { shelves, onBookChanged } = this.props
    return (this.state.search)
      ? <Redirect push to="/search"/>
      : (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          {shelves.map((shelve, index) => (
            <Shelf key={ index } title={ shelve.title } books={ shelve.books } onBookChanged={ onBookChanged }/>
          ))}
          </div>
        </div>
        <div className="open-search">
          <button onClick={ this.search }>Add a book</button>
        </div>
      </div>
    )
  }
}

export default BookList;