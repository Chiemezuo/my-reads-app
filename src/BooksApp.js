import React, { Component } from 'react'
import BookListPage from './BookListPage'
import BookSearchPage from './BookSearchPage'

class BooksApp extends Component{
	state = {
		showSearchPage: false
	}

  render(){
		return(
			<div className="app">
				{this.state.showSearchPage ? (<BookSearchPage/>) : (<BookListPage/>)}
			</div>
		)
  }
}

export default BooksApp