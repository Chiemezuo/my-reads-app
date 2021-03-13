import React, { Component } from 'react'
import Book from './Book'

class BookSearchResults extends Component{
	render(){
		const { books } = this.props;
		return (
			<div className="search-books-results">
        <ol className="books-grid">
					{books.map(book => (
						<Book key={book.id} book={book} shelf="none"/>
					))}
				</ol>
      </div>
		)
	}
}

export default BookSearchResults