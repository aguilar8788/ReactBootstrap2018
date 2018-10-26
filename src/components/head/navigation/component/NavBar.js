import React, {Component} from 'react'
import PropTypes from 'prop-types'
import List from '../../../common/List'

class NavBar extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render () {
		return (
			<nav className="navigation navbar fixed-top">
				<ul>
					<List listElements={["About", "Contact"]}/>
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