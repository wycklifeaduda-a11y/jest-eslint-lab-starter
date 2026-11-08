function capitalizeWords(input = '') {
    if (input === null || input === undefined) {
        return '';
    }

    const stringValue = typeof input === 'string' ? input : String(input);
    return stringValue.replace(/\b\w/g, (char) => char.toUpperCase());
}

function filterActiveUsers(users = []) {
    if (!Array.isArray(users)) {
        return [];
    }

    return users.filter((user) => user && user.isActive === true);
}

function logAction(action = '', username = '') {
    const safeAction = action === null || action === undefined ? '' : String(action);
    const safeUsername = username === null || username === undefined ? '' : String(username);
    const timestamp = new Date().toISOString();

    return `User ${safeUsername} performed ${safeAction} at ${timestamp}`;
}

module.exports = { capitalizeWords, filterActiveUsers, logAction };
module.exports.default = { capitalizeWords, filterActiveUsers, logAction }; 
