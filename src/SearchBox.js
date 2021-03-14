import React, { Component } from 'react'

class SearchBox extends Component {
  //there has to be a state because this will be a controlled component
  state = {
    query: ""
  }

 onSearch = event => {
   const value = event.target.value;
   this.setState(() => ({
     query: value
   }), this.props.onSearch(value))  
 }

	render(){
    return (
			<div className="search-books-input-wrapper">
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
          */}
      <input
        type="text" 
        placeholder="Search by title or author"
        value={this.state.query}
        onChange={this.onSearch}/>

      </div>
		)
	}
}

export default SearchBox