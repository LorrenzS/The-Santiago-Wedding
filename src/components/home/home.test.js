import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';

describe('Home component', () => {
	it('shows section header', () => {
		const wrapper = shallow(<Home />);
		const text = wrapper.find('h1').text();
		expect(text).toEqual('Home');
	});
});
