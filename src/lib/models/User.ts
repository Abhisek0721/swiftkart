import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, null: true },
    phone: {
        code: { type: String, null: true },
        phoneNumber: { type: String, null: true }
    },
    password: { type: String, null: true },
    googleId: { type: String, unique: true, null: true },
    isVerified: { type: Boolean, default: false }
}, {
    timestamps: true,
});

// Create a compound index on phone.code and phone.phoneNumber to ensure uniqueness
UserSchema.index({ 'phone.code': 1, 'phone.phoneNumber': 1 }, { unique: true });

export default mongoose.model('User', UserSchema);
