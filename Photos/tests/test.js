import React from 'react';
import {shallow, mount, render} from 'enzyme';
import App from '../src/components/app.jsx';
import Photos from '../src/components/photos.jsx'
import Carousel from '../src/components/carousel'
import toJson from 'enzyme-to-json'

describe('something', function() {

});

const props = {
  list: [{url:''}, {url:''},{url:''},{url:''},{url:''},{url:''}]
}

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



test('render a small label', () => {
  const wrapper = mount(
    <App/>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('render a small label', () => {
  
  const wrapper = mount(
    <Photos list = {props.list}/>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
