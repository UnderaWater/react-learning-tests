const square = require('./square');

describe('square', () => {
    test('currect value', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(6);
        expect(square(2)).toBeGreaterThan(2);
        expect(square(2)).not.toBeUndefined();
    });
    test('currect call', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    });
    test('currect call', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    });
    
    afterEach(() => {
        jest.clearAllMocks()
    });
});