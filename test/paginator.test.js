var paginator = require('../src/paginator.js');

describe('Example test solution', function () {
    it('Example 1', () => {
        expect(paginator.PrintStringPagination(4, 5, 1, 0)).toBe('1 ... 4 5');
    })
    it('Example 2', () => {
        expect(paginator.PrintStringPagination(4, 10, 2, 2)).toBe('1 2 3 4 5 6 ... 9 10');
    })
});
describe('Successful cases', function () {
    it('{1, 10, 1, 1}', () => {
        expect(paginator.PrintStringPagination(1, 10, 1, 1)).toBe('1 2 ... 10');
    })
    it('{5, 10, 1, 1}', () => {
        expect(paginator.PrintStringPagination(5, 10, 1, 1)).toBe('1 ... 4 5 6 ... 10');
    })
    it('{10, 10, 1, 1}', () => {
        expect(paginator.PrintStringPagination(10, 10, 1, 1)).toBe('1 ... 9 10');
    })
    it('{10, 10, 2, 1}', () => {
        expect(paginator.PrintStringPagination(10, 10, 2, 1)).toBe('1 2 ... 9 10');
    })
    it('{5, 10, 2, 2}', () => {
        expect(paginator.PrintStringPagination(5, 10, 2, 2)).toBe('1 2 3 4 5 6 7 ... 9 10');
    })
    it('{6, 10, 2, 2}', () => {
        expect(paginator.PrintStringPagination(6, 10, 2, 2)).toBe('1 2 ... 4 5 6 7 8 9 10');
    })
    it('{1, 3, 2, 2}', () => {
        expect(paginator.PrintStringPagination(1, 3, 2, 2)).toBe('1 2 3');
    })
    it('{1, 3, 0, 0}', () => {
        expect(paginator.PrintStringPagination(1, 3, 0, 0)).toBe('1 ...');
    })
});

describe('missing parameters', function () {
    it('missing one parameter', () => {
        expect(paginator.PrintStringPagination(4, 10, 1)).toBe('1 ... 4 ... 10');
    })
    it('missing two parameter', () => {
        expect(paginator.PrintStringPagination(4, 10)).toBe('... 4 ...');
    })
    it('missing three parameter', () => {
        expect(paginator.PrintStringPagination(4)).toBe('');
    })
    it('missing all parameters', () => {
        expect(paginator.PrintStringPagination()).toBe('');
    })
});
describe('Negative inputs', function () {
    it('current page as -1', () => {
        expect(paginator.PrintStringPagination(-1, 10, 1, 1)).toBe('1 ... 10');
    })
    it('total pages as -1', () => {
        expect(paginator.PrintStringPagination(5, -1, 1, 1)).toBe('');
    })
    it('boundaries as -1', () => {
        expect(paginator.PrintStringPagination(5, 10, -1, 1)).toBe('... 4 5 6 ...');
    })
    it('around as -1', () => {
        expect(paginator.PrintStringPagination(5, 10, 1, -1)).toBe('1 ... 5 ... 10');
    })
});
describe('Wrong type parameters', function () {
    it('current page as "a"', () => {
        expect(paginator.PrintStringPagination("a", 1, 1, 1)).toBe('');
    })
    it('total pages as "a"', () => {
        expect(paginator.PrintStringPagination(1, "a", 1, 1)).toBe('');
    })
    it('boundaries as "a"', () => {
        expect(paginator.PrintStringPagination(1, 1, "a", 1)).toBe('');
    })
    it('around as "a"', () => {
        expect(paginator.PrintStringPagination(1, 1, 1, "a")).toBe('');
    })
});