const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
    test('correct value', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    });
    test('different array values', () => {
        expect(mapArrToStrings([1, null, 2, 'qwe', 3])).toEqual(['1', '2', '3']);
    });
    test('empty array', () => {
        expect(mapArrToStrings([])).toEqual([]);
    });
    test('denial array', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
    });
});