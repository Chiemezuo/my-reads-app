import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookShelfCollection extends Component{
	render(){
		return(
			<div className="list-books-content">
        <div>
					<BookShelf/>
          <BookShelf/>
          <BookShelf/>
        </div>
      </div>
		)
	}
}

export default BookShelfCollection