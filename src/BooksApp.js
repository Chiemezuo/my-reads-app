import React, { Component } from 'react'
import BookListPage from './BookListPage'
import BookSearchPage from './BookSearchPage'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import getAllBooks from './DummyData'

class BooksApp extends Component{
	shelves = [
		{shelveKey: "currentlyReading", shelveName: "Currently Reading"},
		{shelveKey: "wantToRead", shelveName: "Want to Read"},
		{shelveKey: "read", shelveName: "Read"}
	]

	state = { 
		books: getAllBooks
		
	}

	//it's time to prepare the BookShelfChanger to be able to change shelves
	//I need two variables: the book to move, and the shelf for the book to be moved to
	changeShelf = (book, shelf) => {
    //this returns the exact same state as before, but with the shelf of the book passed in, modified to the shelf also passed in 
		const updatedBooks = this.state.books.map(b => {
      if (b.id === book.id) {
        b.shelf = shelf;
      }
      return b;
    });

		//this changes the state to reflect the shift in shelf, which is also reflected in the search page
    this.setState({
      books: updatedBooks,
    });
  };

  render(){
		return(
			<div className="app">
				<Route exact path="/" render={() => <BookListPage shelves={this.shelves} books={this.state.books} onMove={this.changeShelf}/>}/>
				<Route exact path="/search" render={ () => <BookSearchPage books={this.state.books} onMove={this.changeShelf}/> }/>
			</div>
		)
  }
}

export default BooksApp