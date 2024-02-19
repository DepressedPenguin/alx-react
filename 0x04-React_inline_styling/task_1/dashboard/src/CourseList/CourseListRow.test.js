import React from "react";
import { render } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

test("renders CourseListRow without crashing", () => {
  const { getByText } = render(<CourseListRow textFirstCell="Test" />);
  const element = getByText(/Test/i);
  expect(element).toBeInTheDocument();
});

// Add more test cases if needed

