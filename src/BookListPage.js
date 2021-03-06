//Creating a file I am more comfortable breaking
import React, { Component } from 'react'
//I will leave the app to be static for now. The API can wait
//import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelfCollection from './BookShelfCollection'
import OpenSearch from './OpenSearch'

class BookListPage extends Component{
	render(){
		const { shelves, books, onMove } = this.props;

		return (
			<div className="list-books">
				<div className="list-books-title">
          <h1>MyReads</h1>
        </div>
				<BookShelfCollection bookShelves={shelves} books={books} onMove={onMove}/>
				<OpenSearch/>
			</div>
		)
	}
}
export default BookListPage