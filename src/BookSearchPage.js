import React, { Component } from 'react'
import CloseSearchPage from './CloseSearchPage'
import SearchBox from './SearchBox'
import BookSearchResults from './BookSearchResults'

class BookSearchPage extends Component{
	render(){
		const { books } = this.props;

		return (
			<div className="search-books">
        <div className="search-books-bar">
					<CloseSearchPage/>
          <SearchBox/>
        </div>
        <BookSearchResults books={books}/>
      </div>
		)
	}
}

export default BookSearchPage