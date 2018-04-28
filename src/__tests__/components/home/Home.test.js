import React from 'react'

import {shallow, mount, render} from 'enzyme'
import renderer from 'react-test-renderer'
import Home from '../../../components/home/component/Home'

describe('Home component', () => {
	it('should render without throwing errors', () => {
		expect(shallow(<Home />).exists(<div className="Home"></div>)).toBe(true)
	})

	it('renders h1 tag', () => {
		expect(shallow(<Home />).find('h1').length).toEqual(1)
	})

	it('renders correctly', () => {
		const tree = renderer.create(<Home/>).toJSON()
		expect(tree).toMatchSnapshot()
	})
})