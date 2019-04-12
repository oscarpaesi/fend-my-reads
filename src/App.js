import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import BookSearch from './BookSearch'
import update from 'immutability-helper'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,

    books: [
      {
        id: 0,
        title: "To Kill a Mockingbird",
        authors: "Harper Lee",
        cover: {
          width: 128,
          height: 193,
          url: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
        }
      },
      {
        id: 1,
        title: "Ender's Game",
        authors: "Orson Scott Card",
        cover: {
          width: 128,
          height: 188,
          url: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
        }
      },
      {
        id: 2,
        title: "1776",
        authors: "David McCullough",
        cover: {
          width: 128,
          height: 193,
          url: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
        }
      },
      {
        id: 3,
        title: "Harry Potter and the Sorcerer's Stone",
        authors: "J.K. Rowling",
        cover: {
          width: 128,
          height: 192,
          url: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"
        }
      },
      {
        id: 4,
        title: "The Hobbit",
        authors: "J.R.R. Tolkien",
        cover: {
          width: 128,
          height: 192,
          url: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"
        }
      },
      {
        id: 5,
        title: "Oh, the Places You'll Go!",
        authors: "Seuss",
        cover: {
          width: 128,
          height: 174,
          url: "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api"
        }
      },
      {
        id: 6,
        title: "The Adventures of Tom Sawyer",
        authors: "Mark Twain",
        cover: {
          width: 128,
          height: 192,
          url: "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"
        }
      }
    ],
    shelves: [
      {id: 0, shelf: "currentlyReading"},
      {id: 1, shelf: "currentlyReading"},
      {id: 2, shelf: "wantToRead"},
      {id: 3, shelf: "wantToRead"},
      {id: 4, shelf: "read"},
      {id: 5, shelf: "read"},
      {id: 6, shelf: "read"}
    ]
  }

  onBookChanged = (book, newShelf) => {
    const index = this.state.shelves.filter((entry) => { return entry.id === book.id})[0].id
    const newShelves = update(this.state.shelves, {[index]: {shelf: {$set: newShelf}}})
    this.setState({ shelves: newShelves })
  }

  getBooksInShelf(shelf) {
    let bookIds = this.state.shelves
      .filter(entry => entry.shelf === shelf)
      .map(entry => entry.id)
    return this.state.books
      .filter(book => bookIds.includes(book.id))
      .map(book => ({...book, shelf}))
  }

  getShelves() {
    return [
      { title: "Currently Reading", books: this.getBooksInShelf('currentlyReading') },
      { title: "Want to Read", books: this.getBooksInShelf('wantToRead') },
      { title: "Read", books: this.getBooksInShelf('read') }
    ]
  }

  render() {
    return (
      <div className="app">
          <Route exact path="/" render={() => (
            <BookList
              shelves={ this.getShelves() }
              onBookChanged={ this.onBookChanged }
            />
          )}/>
          <Route path="/search" component={BookSearch}/>
      </div>
    )
  }
}

export default BooksApp