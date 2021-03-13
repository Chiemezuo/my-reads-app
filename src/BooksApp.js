import React, { Component } from 'react'
import BookListPage from './BookListPage'
import BookSearchPage from './BookSearchPage'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component{
	shelves = [
		{shelveKey: "currentlyReading", shelveName: "Currently Reading"},
		{shelveKey: "wantToRead", shelveName: "Want to Read"},
		{shelveKey: "haveRead", shelveName: "Read"}
	]

  render(){
		return(
			<div className="app">
				<Route exact path="/" render={() => <BookListPage shelves={this.shelves}/>}/>
				<Route exact path="/search" component={BookSearchPage}/>
			</div>
		)
  }
}

export default BooksApp