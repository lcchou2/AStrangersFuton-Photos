import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/app.jsx';
import Ratings from '../components/Ratings.jsx';
import Search from '../components/Search.jsx';
import Sort from '../components/Sort.jsx';
import Reviews from '../components/Reviews.jsx';

describe('Basic rendering', () => {
  it('should render App', () => {
    var wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.text()).toBe('<Ratings /><Search /><Sort /><Reviews />');
  });

  it('should have properties in App state', () => {
    var wrapper = shallow(<App />);
    expect(wrapper.state()).toHaveProperty('listingId');
    expect(wrapper.state()).toHaveProperty('rating');
    expect(wrapper.state()).toHaveProperty('reviews');
    expect(wrapper.state()).toHaveProperty('commentPerPage');
  });

  it('should render Ratings section', () => {
    shallow(<Ratings />).contains(<div className="left-container"></div>);
  });

  it('should render Search section', () => {
    shallow(<Search />).contains(<div className="input-wrapper"></div>);
  });

  it('should render Sort section', () => {
    shallow(<Sort />).contains(<div className="sort"></div>);
  });

  it('should render Reviews section', () => {
    var props = {reviews: []};
    shallow(<Reviews reviews={props.reviews}/>).contains(<div className="username"></div>);
  });
});