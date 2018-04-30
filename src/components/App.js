import React, {Component} from 'react'
import PropTypes from 'prop-types';
import '../styles/css/style.css'
import 'bootstrap'
import Head from './head/component/Head'
import Main from './main/component/Main'
import Footer from './common/footer/component/Footer'

class App extends Component {
	render() {
		return (
			<div className="app">
				<h1>Hello there</h1>
				<Head />
				<Main />
				<Footer />
				{this.props.children}
			</div>
		)
	}
}

App.propTypes = {
	children: PropTypes.element.isRequired
}

export default App
