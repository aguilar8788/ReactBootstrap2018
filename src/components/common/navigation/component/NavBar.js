import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class NavBar extends Component {
	constructor(props, context) {
		super(props, context)
	}

	componentWillMount() {
	}

	render () {
		return (
			<nav className="navigation navbar fixed-top">
				<ul>
					<li><Link to="/link" activeClassName="active">link1</Link></li>
					<li><Link to="/link2" activeClassName="active">link2</Link></li>
					<li><Link to="/link3" activeClassName="active">link3</Link></li>
				</ul>
			</nav>
		)
	}
}

NavBar.propTypes = {

}

NavBar.contextTypes = {
	router: PropTypes.object
}


export default  NavBar