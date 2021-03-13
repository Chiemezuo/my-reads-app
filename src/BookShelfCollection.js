import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookShelfCollection extends Component{
	render(){
		const { bookShelves, books, onMove } = this.props;
		return(
			<div className="list-books-content">
        <div>
					{bookShelves.map((shelf) => (
		  			<BookShelf key={shelf.shelveKey} name={shelf} books={books} onMove={onMove}/>)
					)}
        </div>
      </div>
		)
	}
}

export default BookShelfCollection