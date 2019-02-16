import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/components/app.jsx';

// describe('something', function() {

// });

it('Should pass this test', function() {
  const wrapper = shallow(<App/>);
  const stateList = wrapper.state().list
  expect(stateList[0]).toEqual({url:''});
});