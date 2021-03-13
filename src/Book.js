import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component{
	render(){
    const { key, book, shelf, onMove } = this.props
		return(
			<div className="book">
        <div className="book-top"> 
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.thumbnail})` }}></div>
          <BookShelfChanger book={book} key={key} onMove={onMove}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
		)
	}
}

export default Book