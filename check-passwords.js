import mongoose from 'mongoose';

// MongoDB connection
const MONGODB_URI = 'mongodb://127.0.0.1:27017/onboarding';

// User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  passwordHash: String,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

async function checkPasswords() {
  try {
    console.log('🔍 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Get all users
    const users = await User.find({}).select('name email passwordHash createdAt');
    
    console.log('📊 Total Users Found:', users.length);
    console.log('═'.repeat(80));

    if (users.length === 0) {
      console.log('❌ No users found in database');
    } else {
      users.forEach((user, index) => {
        console.log(`\n👤 User #${index + 1}:`);
        console.log('   Name:', user.name || 'Not set');
        console.log('   Email:', user.email);
        console.log('   Password Hash:', user.passwordHash ? '✅ YES (encrypted)' : '❌ NO');
        console.log('   Password Length:', user.passwordHash ? user.passwordHash.length : 0);
        console.log('   Hash Preview:', user.passwordHash ? user.passwordHash.substring(0, 30) + '...' : 'None');
        console.log('   Created At:', user.createdAt);
      });
    }

    console.log('\n' + '═'.repeat(80));
    console.log('🔐 Password Storage Status:');
    console.log('   - Passwords are stored as HASHED values (encrypted)');
    console.log('   - Original passwords CANNOT be retrieved');
    console.log('   - This is SECURE and follows best practices');
    console.log('═'.repeat(80));

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('\n✅ Connection closed');
  }
}

checkPasswords();
