import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookShelfCollection extends Component{
	render(){
		const { bookShelves } = this.props;
		return(
			<div className="list-books-content">
        <div>
					{bookShelves.map((shelf) => (
		  		<BookShelf key={shelf.shelveKey} name={shelf.shelveName}/>)
					)}
        </div>
      </div>
		)
	}
}

export default BookShelfCollection