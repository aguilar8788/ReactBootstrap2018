import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import '../assets/styles/css/style.css'
import 'bootstrap'
import About from './about/About'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import Head from './head/Head'
import Home from './home/Home'

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route exact path='/about' component={About}/>
			<Route exact path='/contact' component={Contact}/>
		</Switch>
	</main>
)

class App extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		return (
			<div className="app">
				<Head/>
				<div className="main">
					<Main />
				</div>
				<Footer />
			</div>
		)
	}
}

App.propTypes = {
	children: PropTypes.object
}

export default App

