import { sum } from '..';

describe('sum', () => {
    it('should sum', () => {
        expect(sum(1, 2)).toBe(3);
    });
    it('should fail', () => {
        expect(true).toBe(false);
    });
});
