import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CloseSearchPage extends Component{
	render(){
		const { onReset } = this.props
		return (
			<Link to="/">
				<button
				  className="close-search"
				  onClick={onReset}>Close</button>
			</Link>
		)
	}
}

export default CloseSearchPage