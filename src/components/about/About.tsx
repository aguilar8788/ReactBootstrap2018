import React, { Component } from 'react'

const initialState = {}
type State = Readonly<typeof initialState>
type Props = {

}

class About extends Component<object, State> {
	constructor (props: Props) {
		super(props)
	}

	render () {
		return (
			<h1>About</h1>
		)
	}
}

export default About