import mongoose from 'mongoose';

// MongoDB connection
const MONGODB_URI = 'mongodb://127.0.0.1:27017/onboarding';

async function viewUserNames() {
  try {
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('                    👤 USER NAMES FROM MONGODB                    ');
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('');
    
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected Successfully!\n');

    const db = mongoose.connection.db;
    
    // Get all users
    const usersCollection = db.collection('users');
    const users = await usersCollection.find({}).toArray();
    
    // Get all form entries
    const formEntriesCollection = db.collection('formentries');
    const formEntries = await formEntriesCollection.find({}).toArray();
    
    console.log(`📊 Total Users: ${users.length}`);
    console.log(`📝 Total Form Entries: ${formEntries.length}\n`);
    
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('                         👥 USER DETAILS                         ');
    console.log('═══════════════════════════════════════════════════════════════════════════════\n');
    
    for (const user of users) {
      // Find matching form entry for this user
      const formEntry = formEntries.find(entry => 
        entry.userId.toString() === user._id.toString()
      );
      
      console.log('┌─' + '─'.repeat(77));
      console.log(`│ 👤 USER #${users.indexOf(user) + 1}`);
      console.log('├─' + '─'.repeat(77));
      console.log(`│ 📧 Email:        ${user.email}`);
      console.log(`│ 🆔 User ID:      ${user._id}`);
      
      if (formEntry && formEntry.step1Data) {
        console.log(`│ 📝 Name:         ${formEntry.step1Data.name || 'Not filled'}`);
        console.log(`│ 👨‍💻 Username:     ${formEntry.step1Data.username || 'Not filled'}`);
        console.log(`│ 💼 Description:  ${formEntry.step1Data.description || 'Not filled'}`);
        console.log(`│ 📍 Location:     ${formEntry.step1Data.location || 'Not filled'}`);
        console.log(`│ 📢 How Know:     ${formEntry.step1Data.howDidYouKnow || 'Not filled'}`);
      } else {
        console.log(`│ 📝 Name:         ❌ Not filled (Step 1 incomplete)`);
        console.log(`│ 👨‍💻 Username:     ❌ Not filled`);
        console.log(`│ 💼 Description:  ❌ Not filled`);
        console.log(`│ 📍 Location:     ❌ Not filled`);
      }
      
      console.log(`│ 📅 Created:      ${user.createdAt}`);
      console.log('└─' + '─'.repeat(77));
      console.log('');
    }
    
    // Summary
    const usersWithNames = formEntries.filter(entry => 
      entry.step1Data && entry.step1Data.name
    ).length;
    
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('                           📊 SUMMARY                           ');
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('');
    console.log(`✅ Users with names filled: ${usersWithNames} / ${users.length}`);
    console.log(`❌ Users without names:     ${users.length - usersWithNames} / ${users.length}`);
    console.log('');
    
    if (usersWithNames === 0) {
      console.log('⚠️  No users have filled their names in Step 1 yet!');
      console.log('   Users need to complete the onboarding form to save their names.');
    }
    
    console.log('');

  } catch (error) {
    console.error('');
    console.error('❌ Error:', error.message);
    console.error('');
  } finally {
    await mongoose.connection.close();
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('                      🔌 Connection Closed                      ');
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('');
  }
}

viewUserNames();
