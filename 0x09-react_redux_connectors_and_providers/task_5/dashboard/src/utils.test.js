import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

// Test for getFullYear function
test('getFullYear returns the correct year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// Test for getFooterCopy function
test('getFooterCopy returns correct string for true argument', () => {
  const result = getFooterCopy(true);
  expect(result).toBe('Holberton School');
});

test('getFooterCopy returns correct string for false argument', () => {
  const result = getFooterCopy(false);
  expect(result).toBe('Holberton School Main Dashboard');
});

// Test for getLatestNotification function
test('getLatestNotification returns correct string', () => {
  const result = getLatestNotification();
  expect(result).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
