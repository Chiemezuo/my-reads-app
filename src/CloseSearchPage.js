import React, { Component } from 'react'

class CloseSearchPage extends Component{
	render(){
		return (
			<button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
		)
	}
}

export default CloseSearchPage