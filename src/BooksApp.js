import React, { Component } from 'react'
import BookListPage from './BookListPage'
import BookSearchPage from './BookSearchPage'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import getAllBooks from './DummyData' //No longer needed at this point
//I wanted to add proptypes, then I realized that it wasn't needed because the user doesn't add anything to the database
//Left this here as a reminder of why I didn't add proptypes
import PropTypes from 'prop-types' 

class BooksApp extends Component{
	shelves = [
		{shelveKey: "currentlyReading", shelveName: "Currently Reading"},
		{shelveKey: "wantToRead", shelveName: "Want to Read"},
		{shelveKey: "read", shelveName: "Read"}
	]

	state = { 
		books: [],
		searchBooks: []
	}

	//We will have to try and hold search results for the search section of the app here
	bookSearch = query => {
		if (query.length > 0){
			BooksAPI.search(query).then(books => {
				if (books.error){
					this.setState({searchBooks: []})
				} else {
					this.setState({searchBooks: books})
				}
			})	
		} else {
			this.setState({searchBooks: []})
		}
	}

	//we will also need to respond to the close search button which should reset the search
	resetSearch = () => {
		this.setState({searchBooks: []})
	}
	//Because asynchronous calls should not be run on the render, I will use an activity lifecycle method to get the API data
	componentDidMount = () => {
	 	BooksAPI.getAll().then(books => (
	 		this.setState(() => ({
	 			books: books
	 		}))
	 	))
	 }

	//it's time to prepare the BookShelfChanger to be able to change shelves
	//I need two variables: the book to move, and the shelf for the book to be moved to
	changeShelf = (book, shelf) => {
		//update the API
		BooksAPI.update(book, shelf);
		
		//remove the particular book in the book state that matches the one passed in the change shelf 
		let modifiedBooks = []; 
		modifiedBooks = this.state.books.filter(b => b.id !== book.id);

		//if the book that was removed wasn't passed a shelf of "none", add it back to the modified books (pushing it to the back)
		if (shelf !== "none"){
			book.shelf = shelf;
			modifiedBooks = modifiedBooks.concat(book)
		}

		//this changes the state to reflect the shift in shelf, which is also reflected in the search page
    this.setState(() => ({
      books: modifiedBooks,
    }))
  };

  render(){
		return(
			<div className="app">
				<Route exact path="/" render={() => <BookListPage shelves={this.shelves} books={this.state.books} onMove={this.changeShelf}/>}/>
				<Route exact path="/search" render={ () => 
					<BookSearchPage 
						books={this.state.searchBooks}
						myBooks={this.state.books} 
						onMove={this.changeShelf}
						onReset={this.resetSearch}
						onSearch={this.bookSearch}/> }/>
			</div>
		)
  }
}

export default BooksApp