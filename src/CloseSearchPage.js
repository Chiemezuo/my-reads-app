import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CloseSearchPage extends Component{
	render(){
		return (
			<Link to="/">
				<button className="close-search">Close</button>
			</Link>
		)
	}
}

export default CloseSearchPage