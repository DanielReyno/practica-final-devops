// index.test.js
const getMyName = require('../index.js');

beforeAll(() => {
  const { JSDOM } = require('jsdom');
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
  global.document = dom.window.document;
});

// Clean up after the tests
afterAll(() => {
  delete global.document;
});

test('verifies the name in <h1> is Daniel', () => {
  // Mocking document.getElementById
  document.getElementById = jest.fn(() => ({ textContent: '' }));

  const element = getMyName(); // Call the function to get the value

  expect(element).toBe('Daniel Sebastian Reynoso Feliz 2021-1571, Practica Final DevOps'); // Verify that the value is 'Daniel'
});
