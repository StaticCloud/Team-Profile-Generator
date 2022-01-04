const Intern = require('../lib/Intern')

test('creates intern object', () => {
    const intern = new Intern('Intern', 4, 'intern@valvesoftware.com', 'University of Washington')

    expect(intern.school).toBe('University of Washington');
})

test('gets school', () => {
    const intern = new Intern('Intern', 4, 'intern@valvesoftware.com', 'University of Washington')

    expect(intern.getSchool()).toEqual(intern.school);
})

test('gets role', () => {
    const intern = new Intern();

    expect(intern.getRole()).toEqual('Intern');
})