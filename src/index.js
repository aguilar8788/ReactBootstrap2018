import 'babel-polyfill'
import  React from 'react'
import  ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './components/App'


ReactDom.render (
	<BrowserRouter>
		<App name="Peter"/>
	</BrowserRouter>,
	document.getElementById('app')
)