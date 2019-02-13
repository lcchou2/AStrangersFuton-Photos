import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/app.jsx';
import Search from '../components/Search.jsx';

describe('Inital test', () => {
  // it('should render one <Search /> component', () => {
  //   var wrapper = shallow(<App />);
  //   expect(wrapper.find(Search)).to.have.lengthOf(1);
  // });
  
  it('should render app', () => {
    shallow(<App />).contains(<div className="username">Val</div>);
  });
});