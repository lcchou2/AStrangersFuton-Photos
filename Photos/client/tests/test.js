import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/components/app.jsx';
import Carousel from '../src/components/carousel'

// describe('something', function() {

// });

test('Should pass this test', ()=> {
  const wrapper = shallow(<App/>);
  const stateList = wrapper.state().list
  expect(stateList[0]).toEqual({url:''});
});

describe('Components', ()=> {
  test('App properties', ()=> {
    const wrapper = shallow(<App/>);
    expect(wrapper).toHaveProperty('constructor')
  })
  test('App state', ()=> {
    const wrapper = shallow(<App/>);
    expect(wrapper.state()).toHaveProperty('list')
    expect(wrapper.state()).toHaveProperty('display')
  })

  test('Carousel properties', ()=> {
    const wrapper = shallow(<Carousel/>);
    expect(wrapper).toHaveProperty('constructor')
  })

  test('Carousel state', ()=> {
    const wrapper = shallow(<Carousel/>);
    expect(wrapper.state()).toHaveProperty('currentImageIndex')
  })

})