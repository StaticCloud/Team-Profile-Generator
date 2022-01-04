const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

jest.mock('../lib/Employee');

test('creates a manager object', () => {
    const manager = new Manager();

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('gets role', () => {
    const manager = new Manager();

    expect(manager.role).toBe('Manager');
})