import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component{
	render(){
    const { name, books } = this.props;
    const booksForThisShelf = books.filter((book) => book.shelf === name.shelveKey);

		return(
			<div className="bookshelf">
        <h2 className="bookshelf-title">{name.shelveName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksForThisShelf.map(book => (
              <Book key={book.id} book={book} shelf={name.key}/>
            ))}
            {console.log(booksForThisShelf)}
          </ol>
        </div>
      </div>
		)
	}
}

export default BookShelf