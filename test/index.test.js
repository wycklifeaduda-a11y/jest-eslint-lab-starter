const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('capitalizeWords', () => {
    it('should capitalize the first letter of each word in a string', () => {
        const input = 'hello world';
        const expectedOutput = 'Hello World';
        expect(capitalizeWords(input)).toBe(expectedOutput);
    });

    it('should handle empty strings', () => {
        const input = '';
        const expectedOutput = '';
        expect(capitalizeWords(input)).toBe(expectedOutput);
    });

    it('should handle strings with multiple spaces', () => {
        const input = '   hello   world   ';
        const expectedOutput = '   Hello   World   ';
        expect(capitalizeWords(input)).toBe(expectedOutput);
    });

    it('should handle strings with punctuation', () => {
        const input = 'hello, world!';
        const expectedOutput = 'Hello, World!';
        expect(capitalizeWords(input)).toBe(expectedOutput);
    });
});

describe('filterActiveUsers', () => {
    it('should filter active users from the array', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false },
            { name: 'Charlie', isActive: true },
        ];
        const expectedOutput = [
            { name: 'Alice', isActive: true },
            { name: 'Charlie', isActive: true },
        ];
        expect(filterActiveUsers(users)).toEqual(expectedOutput);
    });

    it('should return an empty array if no users are active', () => {
        const users = [
            { name: 'Alice', isActive: false },
            { name: 'Bob', isActive: false },
        ];
        const expectedOutput = [];
        expect(filterActiveUsers(users)).toEqual(expectedOutput);
    });
});

describe('logAction', () => {
    it('should log an action performed by a user with a timestamp', () => {
        const action = 'login';
        const username = 'Alice';
        const logMessage = logAction(action, username);
        expect(logMessage).toMatch(new RegExp(`User ${username} performed ${action} at .*`));
    });
});
