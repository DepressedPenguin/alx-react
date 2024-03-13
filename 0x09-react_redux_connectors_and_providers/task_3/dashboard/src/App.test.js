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

// Test 5: Verify the default state for displayDrawer is false
test('Verify the default state for displayDrawer is false', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state('displayDrawer')).toBe(false);
});

// Test 6: Verify that after calling handleDisplayDrawer, the state is true
test('After calling handleDisplayDrawer, the state should be true', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().handleDisplayDrawer();
  expect(wrapper.state('displayDrawer')).toBe(true);
});

// Test 7: Verify that after calling handleHideDrawer, the state is false
test('After calling handleHideDrawer, the state should be false', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().handleHideDrawer();
  expect(wrapper.state('displayDrawer')).toBe(false);
});

