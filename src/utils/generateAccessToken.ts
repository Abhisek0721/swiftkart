import jwt from 'jsonwebtoken';

// Secret key (use a strong secret key, ideally from environment variables)
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Function to generate JWT token
export const generateAccessToken = (userData: object) => {
    return jwt.sign(userData, JWT_SECRET, {
        expiresIn: '7d', // Set token expiration as needed
    });
};