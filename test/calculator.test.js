// it('thinks true is true', () => {
//   expect(true).toBe(true);
// });

const calculator = require('../calculator.js');

describe('calculator', () => {
  describe('add', () => {
    it('adds two numbers', () => {
      const result = calculator.add(2, 3);
      expect(result).toBe(5);
    });
  });
});
