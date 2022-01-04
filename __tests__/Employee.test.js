const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Gabe Newell', 1, 'gaben@valvesoftware.com');

    expect(employee.name).toBe('Gabe Newell');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('gaben@valvesoftware.com');
})

test('gets employee name', () => {
    const employee = new Employee('Gabe Newell', 1, 'gaben@valvesoftware.com');

    expect(employee.getName()).toEqual(employee.name);
})

test('gets employee id', () => {
    const employee = new Employee('Gabe Newell', 1, 'gaben@valvesoftware.com');

    expect(employee.getId()).toEqual(employee.id);
})

test('gets employee email', () => {
    const employee = new Employee('Gabe Newell', 1, 'gaben@valvesoftware.com');

    expect(employee.getEmail()).toEqual(employee.email);
})

test('gets employee role', () => {
    const employee = new Employee('Gabe Newell', 1, 'gaben@valvesoftware.com');

    expect(employee.getRole()).toEqual(employee.role);
})