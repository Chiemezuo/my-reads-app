import React, { Component } from 'react'
import BookListPage from './BookListPage'
import BookSearchPage from './BookSearchPage'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import getAllBooks from './DummyData'

class BooksApp extends Component{
	shelves = [
		{shelveKey: "currentlyReading", shelveName: "Currently Reading"},
		{shelveKey: "wantToRead", shelveName: "Want to Read"},
		{shelveKey: "read", shelveName: "Read"}
	]

	state = { 
		books: getAllBooks 
	}

  render(){
		return(
			<div className="app">
				<Route exact path="/" render={() => <BookListPage shelves={this.shelves} books={this.state.books}/>}/>
				<Route exact path="/search" component={BookSearchPage}/>
			</div>
		)
  }
}

export default BooksApp