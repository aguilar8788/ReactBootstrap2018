import React, {Component} from 'react'
import PropTypes from 'prop-types'
import NavBar from '../../common/navigation/component/NavBar'

class Head extends Component {
	constructor(props, context) {
		super(props, context)
	}

	componentWillMount() {
	}

	render () {
		return (
			<div className="head">
				<NavBar />
			</div>
		)
	}
}

Head.propTypes = {

}

Head.contextTypes = {
	router: PropTypes.object
}


export default  Head