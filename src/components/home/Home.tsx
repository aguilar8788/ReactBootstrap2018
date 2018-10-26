import React, {Component} from 'react'

const initialState = {}
type State = Readonly<typeof initialState>
type Props = {}

class Home extends Component<object, State> {
	constructor(props: Props) {
		super(props)
	}

	render() {
	return(
			<div className="home">
				<h1>This is Home</h1>
			</div>
		)
	}
}

export default Home