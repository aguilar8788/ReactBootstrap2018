import React, { Component } from 'react'

const initialState = {}
type State = Readonly<typeof initialState>
type Props = {}

class Footer extends Component<object, State> {
	constructor (props: Props) {
		super(props)
	}

	render () {
		return (
			<footer className="footer">
				<h1>Footer</h1>
			</footer>
		)
	}
}

export default Footer