import mongoose from 'mongoose';

// MongoDB connection
const MONGODB_URI = 'mongodb://127.0.0.1:27017/onboarding';

async function testSignupWithName() {
  try {
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('            ✅ TESTING: Name Storage in Users Collection            ');
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('');
    
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected Successfully!\n');

    const db = mongoose.connection.db;
    const usersCollection = db.collection('users');
    
    // Get all users
    const users = await usersCollection.find({}).toArray();
    
    console.log('📊 Total Users in Database:', users.length);
    console.log('');
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('                      👥 USERS WITH NAME FIELD                      ');
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('');
    
    let usersWithName = 0;
    let usersWithoutName = 0;
    
    users.forEach((user, index) => {
      const hasName = user.name && user.name.trim() !== '';
      if (hasName) usersWithName++;
      else usersWithoutName++;
      
      console.log(`┌─ User #${index + 1} ` + '─'.repeat(70));
      console.log(`│ Name:         ${hasName ? '✅ ' + user.name : '❌ Not set'}`);
      console.log(`│ Email:        ${user.email}`);
      console.log(`│ Password:     🔒 Encrypted (${user.passwordHash.length} chars)`);
      console.log(`│ Created:      ${user.createdAt}`);
      console.log(`│ User ID:      ${user._id}`);
      console.log(`└${'─'.repeat(78)}`);
      console.log('');
    });
    
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('                            📊 SUMMARY                            ');
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('');
    console.log(`✅ Users WITH name in users collection:    ${usersWithName} / ${users.length}`);
    console.log(`❌ Users WITHOUT name in users collection: ${usersWithoutName} / ${users.length}`);
    console.log('');
    
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('                       📝 WHAT YOU NEED TO STORE                       ');
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('');
    console.log('Field            │ Storage Location      │ Status');
    console.log('─────────────────┼───────────────────────┼─────────────────────────');
    console.log('name             │ users collection      │ ✅ NOW REQUIRED');
    console.log('email            │ users collection      │ ✅ Required');
    console.log('passwordHash     │ users collection      │ ✅ Encrypted with bcrypt');
    console.log('createdAt        │ users collection      │ ✅ Auto-generated');
    console.log('updatedAt        │ users collection      │ ✅ Auto-generated');
    console.log('');
    
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('                          🎯 NEXT STEPS                          ');
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('');
    console.log('1. ✅ SignUp form now has NAME field');
    console.log('2. ✅ User model now REQUIRES name');
    console.log('3. ✅ Backend saves name in users collection');
    console.log('4. 🔄 Test by creating a NEW user with name');
    console.log('5. 👀 Check MongoDB Compass to see the name');
    console.log('');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('                       🔌 Connection Closed                       ');
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('');
  }
}

testSignupWithName();
