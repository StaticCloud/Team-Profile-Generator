const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Engineer', 3, 'engineer@valvesoftware.com', 'engineer');

    expect(engineer.github).toBe('engineer');
})

test("get's engineer's github", () => {
    const engineer = new Engineer('Engineer', 3, 'engineer@valvesoftware.com', 'engineer');

    expect(engineer.getGitHub()).toEqual(engineer.github);
})

test('get role', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual('Engineer');
})