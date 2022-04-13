const validateValue = require('./validateValue');

test('value validation', () => {
    expect(validateValue(50)).toBe(true);
});

describe('validateValue', () => {
    test('correct value', () => {
        expect(validateValue(50)).toBe(true);
    });
    test('less correct', () => {
        expect(validateValue(-50)).toBe(false);
    });
    test('more correct', () => {
        expect(validateValue(150)).toBe(false);
    });
    test('boundary value from below', () => {
        expect(validateValue(0)).toBe(true);
    });
    test('boundary value from above', () => {
        expect(validateValue(100)).toBe(true);
    });
});