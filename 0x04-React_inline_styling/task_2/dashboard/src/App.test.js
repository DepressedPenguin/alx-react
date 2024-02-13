import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// Test 1: App renders without crashing
test('App renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});

// Test 2: App renders a div with the class App-header
test('App renders a div with the class App-header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-header').exists()).toBeTruthy();
});

// Test 3: App renders a div with the class App-body
test('App renders a div with the class App-body', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-body').exists()).toBeTruthy();
});

// Test 4: App renders a div with the class App-footer
test('App renders a div with the class App-footer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-footer').exists()).toBeTruthy();
});
