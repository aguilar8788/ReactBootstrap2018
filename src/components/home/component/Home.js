import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Home extends Component {
	constructor(props, context) {
		super(props, context)
	}
	componentDidMount() {
	}

	componentWillUnmount() {
	}


	render() {
	return(
			<div className="home">
				<h1>This is Home</h1>
			</div>
		)
	}
}

Home.propTypes = {

}

Home.contextTypes = {
	router: PropTypes.object
}

export default Home