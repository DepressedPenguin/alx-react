import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("rendering components", () => {
  it("renders Notifications component without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  // Your existing test cases for NotificationItem

  // ...

  describe("onclick event behaves as it should", () => {
    it("should call handleDisplayDrawer", () => {
      const handleDisplayDrawerMock = jest.fn();
      const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawerMock} />);
      wrapper.find(".menuItem").simulate("click");
      expect(handleDisplayDrawerMock).toBeCalledTimes(1);
    });

    it("should call handleHideDrawer", () => {
      const handleHideDrawerMock = jest.fn();
      const wrapper = shallow(<Notifications handleHideDrawer={handleHideDrawerMock} displayDrawer={true} />);
      wrapper.find(".button").simulate("click");
      expect(handleHideDrawerMock).toBeCalledTimes(1);
    });
  });
});

