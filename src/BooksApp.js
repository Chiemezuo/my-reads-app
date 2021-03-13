import React, { Component } from 'react'
import BookListPage from './BookListPage'
import BookSearchPage from './BookSearchPage'
import { Route } from 'react-router-dom'

class BooksApp extends Component{
	state = {
	}

  render(){
		return(
			<div className="app">
				<Route exact path="/" component={BookListPage}/>
				<Route exact path="/search" component={BookSearchPage}/>
			</div>
		)
  }
}

export default BooksApp