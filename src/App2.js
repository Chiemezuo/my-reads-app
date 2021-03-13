//Creating a file I am more comfortable breaking
import React, { Component } from 'react'
//I will leave the app to be static for now. The API can wait
//import * as BooksAPI from './BooksAPI'
import './App.css'

//starting the app from bottom to top
class OpenSearch extends Component{
	render(){
		return (
			<div className="open-search">
			<button>Add a book</button>
		</div>
		)
	}
}
class BookShelfChanger extends Component{
  render(){
    return (
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

class Book extends Component{
  render(){
    return (
      <div className="book">
        <div className="book-top"> 
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
          <BookShelfChanger/>
        </div>
      </div>
    )
  }
}

class BookShelf extends Component{
  render(){
		return (
			<div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
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

class BookShelfCollection extends Component{
	render(){
		return (
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

class BookListPage extends Component{
	render(){
		return (
			<div className="list-books">
				<div className="list-books-title">
          <h1>MyReads</h1>
        </div>
				<BookShelfCollection/>
				<OpenSearch/>
			</div>
		)
	}
}
export default BookListPage