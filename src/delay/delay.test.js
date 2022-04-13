const delay = require('./delay');

describe('delay', () => {
    test('corect value', async () => {
        const sum = await delay(() => 5 + 5, 1000);
        expect(sum).toEqual(10);
        expect(sum).toBe(10);
    });
});