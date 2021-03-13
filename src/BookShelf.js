import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component{
	render(){
    const { name } = this.props;
		return(
			<div className="bookshelf">
          <h2 className="bookshelf-title">{name}</h2>
          <div className="bookshelf-books">
          <ol className="books-grid">
           <li>
              <Book/>
            </li>
            <li>
              <Book/>
            </li>
          </ol>
        </div>
      </div>
		)
	}
}

export default BookShelf