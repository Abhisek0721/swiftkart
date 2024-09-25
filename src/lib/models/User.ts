import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, null: true, required: false  },
    phone: {
        code: { type: String, null: true, required: false  },
        phoneNumber: { type: String, null: true, required: false  }
    },
    password: { type: String, null: true, required: false  },
    googleId: { type: String, unique: true, null: true, required: false  },
    isVerified: { type: Boolean, default: false }
}, {
    timestamps: true,
});

// Create a compound index on phone.code and phone.phoneNumber to ensure uniqueness
UserSchema.index({ 'phone.code': 1, 'phone.phoneNumber': 1 }, { unique: true });

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
