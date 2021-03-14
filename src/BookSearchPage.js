import React, { Component } from 'react'
import CloseSearchPage from './CloseSearchPage'
import SearchBox from './SearchBox'
import BookSearchResults from './BookSearchResults'

class BookSearchPage extends Component{
	render(){
		const { books, onMove, onSearch, onReset, myBooks } = this.props;

		return (
			<div className="search-books">
        <div className="search-books-bar">
					<CloseSearchPage onReset={onReset}/>
          <SearchBox onSearch={onSearch}/>
        </div>
        <BookSearchResults books={books} onMove={onMove} myBooks={myBooks}/>
      </div>
		)
	}
}

export default BookSearchPage