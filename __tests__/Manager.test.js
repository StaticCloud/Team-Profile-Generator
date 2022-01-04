const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('', 0, '', 0);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('gets role', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
})