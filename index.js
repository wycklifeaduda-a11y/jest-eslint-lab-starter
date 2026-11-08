
// Utility Functions

/**
 * Capitalizes the first letter of each word in a string.
 *
 * @param {string} input - The input string.
 * @returns {string} - The formatted string.
 */
function capitalizeWords(input = '') {
    if (input === null || input === undefined) {
        return '';
    }

    const stringValue = typeof input === 'string' ? input : String(input);
    return stringValue.replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Filters active users from the array.
 * @param {Array} users - An array of user objects.
 * @returns {Array} - An array of active user objects.
 */
function filterActiveUsers(users = []) {
    if (!Array.isArray(users)) {
        return [];
    }

    return users.filter((user) => user && user.isActive === true);
}

/**
 * Logs an action performed by a user with a timestamp.
 * @param {string} action - The action performed.
 * @param {string} username - The name of the user.
 * @returns {string} - The log message.
 */
function logAction(action = '', username = '') {
    const safeAction = action === null || action === undefined ? '' : String(action);
    const safeUsername = username === null || username === undefined ? '' : String(username);
    const timestamp = new Date().toISOString();

    return `User ${safeUsername} performed ${safeAction} at ${timestamp}`;
}

module.exports = { capitalizeWords, filterActiveUsers, logAction };
module.exports.default = { capitalizeWords, filterActiveUsers, logAction };
