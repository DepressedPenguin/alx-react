import React from "react";
import { shallow } from 'enzyme';
import Login from "./Login";

// TEST VERIFY THAT SUBMIT BTN DISPLAYED BY DEFAULT
describe("VERIFY THE BUTTON", () => {
  it("CHECK IF DISPLAYED BY DEFAULT", () => {
    const wrapper = shallow(<Login />);
    // Use `find` to look for the submit button and check if it exists
    expect(wrapper.find('input[type="submit"]').exists()).toBe(true);
  });

  it("Verify that after changing the value of the two inputs, the button is enabled", () => {
    const wrapper = shallow(<Login />);
    // Simulate changing the value of the email input
    wrapper.find('input[name="email"]').simulate('change', { target: { value: 'test@email.com' } });
    // Simulate changing the value of the password input
    wrapper.find('input[name="password"]').simulate('change', { target: { value: 'testPassword' } });
    // Check if the submit button is enabled
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });
});

