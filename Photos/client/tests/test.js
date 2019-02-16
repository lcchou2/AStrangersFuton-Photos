import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/components/app.jsx';

// describe('something', function() {

// });

test('Should pass this test', ()=> {
  const wrapper = shallow(<App/>);
  const stateList = wrapper.state().list
  expect(stateList[0]).toEqual({url:''});
});

describe('Components', ()=> {
  test('App', ()=> {
    const wrapper = shallow(<App/>);
    expect(wrapper.state()).toHaveProperty('list')
  })
 

})