import React, { Component } from 'react'

const initialState = {}
type State = Readonly<typeof initialState>
type Props = {

}

class Contact extends Component<object, State> {
	constructor (props: Props) {
		super(props)
	}

	render () {
		return (
			<h1>Contact</h1>
		)
	}
}

export default Contact