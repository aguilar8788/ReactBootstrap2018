import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import NavBar from './navigation/component/NavBar'


const initialState = {}
type State = Readonly<typeof initialState>
type Props = {
}

type Context = {
    router: object
}

class Head extends Component<object, State> {
	constructor(props: Props, context: Context) {
		super(props, context)
	}

	render () {
		return (
			<div className="head">
				<div className="logo">
					<Link to={'/'}>
						<i className="fas fa-home"></i>
					</Link>
				</div>
				<NavBar />
			</div>
		)
	}
}

export default  Head