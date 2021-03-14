import React, { Component } from 'react'
import Book from './Book'

class BookSearchResults extends Component{
	render(){
		const { books, onMove, myBooks } = this.props;

		//to make books in the search and list pages have equivalent shelf values.
		const modifiedBooks = books.map(book => {
			myBooks.map(b => {
				if (b.id === book.id){
					book.shelf = b.shelf;
				}
				return b;
			})
			return book;
		})

		return (
			<div className="search-books-results">
        <ol className="books-grid">
					{modifiedBooks.map(book => ( //for the search to show matches
						<Book 
							key={book.id} 
							book={book} 
							shelf={book.shelf ? book.shelf : "none"} 
							onMove={onMove}/>
					))}
				</ol>
      </div>
		)
	}
}

export default BookSearchResults