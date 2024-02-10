const bcrypt = require('bcrypt');

const hashPassword = async (plainPassword) => {
    try {
        const hashedPassword = await bcrypt.hash(plainPassword, 10);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
};

const comparePasswords = async (plainPassword, hashedPassword) => {
    try {
        const match = await bcrypt.compare(plainPassword, hashedPassword);
        return match;
    } catch (error) {
        throw new Error('Error comparing passwords');
    }
};

module.exports = {
    hashPassword,
    comparePasswords,
}