import sum from '../sum'

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4)
})

test('object assignments', () => {
    const data = {one: 1}
    expect(data).toEqual({one: 1, two: 2})
})

test('null', () => {
    const n = null
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
})

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2
    expect(value).toBeCloseTo(0.3)
})

test('is there an A in aguilar', () => {
    expect('A').toMatch(/A/)
})

const list = [
    'beer',
    'liquor',
    'tequila'
]

test('does this contain this', () => {
    expect(list).toContain('tequila')

})