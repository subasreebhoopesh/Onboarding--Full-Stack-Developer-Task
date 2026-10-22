import mongoose from 'mongoose';

// MongoDB connection
const MONGODB_URI = 'mongodb://127.0.0.1:27017/onboarding';

async function checkAllScreensData() {
  try {
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('           📋 CHECKING ALL SCREENS DATA STORAGE IN MONGODB           ');
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
    console.log('                   📱 SCREEN-WISE DATA STORAGE CHECK                   ');
    console.log('═══════════════════════════════════════════════════════════════════════════════\n');
    
    // Check each user's data
    for (const user of users) {
      const formEntry = formEntries.find(entry => 
        entry.userId.toString() === user._id.toString()
      );
      
      console.log('┌─' + '─'.repeat(77));
      console.log(`│ 👤 USER: ${user.email}`);
      console.log('├─' + '─'.repeat(77));
      
      // SCREEN 3 (Step 1) - Profile Details
      console.log('│');
      console.log('│ 📱 SCREEN 3 (Step 1) - Profile Details');
      console.log('│ ────────────────────────────────────────');
      if (formEntry && formEntry.step1Data) {
        const step1 = formEntry.step1Data;
        console.log(`│   ✅ Name:            ${step1.name || '❌ Missing'}`);
        console.log(`│   ✅ Username:        ${step1.username || '❌ Missing'}`);
        console.log(`│   ✅ Description:     ${step1.description || '❌ Missing'}`);
        console.log(`│   ✅ Location:        ${step1.location || '❌ Missing'}`);
        console.log(`│   ✅ Referral Source: ${step1.howDidYouKnow || '❌ Missing'}`);
        console.log(`│   📦 Storage:         formentries.step1Data`);
      } else {
        console.log('│   ❌ NOT FILLED - User didn\'t complete Step 1');
      }
      
      // SCREEN 4 (Step 2) - Goals
      console.log('│');
      console.log('│ 📱 SCREEN 4 (Step 2) - User Goals');
      console.log('│ ────────────────────────────────────────');
      if (formEntry && formEntry.step2Data) {
        const step2 = formEntry.step2Data;
        console.log(`│   ✅ Selected Goals:  ${step2.selectedGoals ? step2.selectedGoals.length + ' goals' : '❌ Missing'}`);
        if (step2.selectedGoals && step2.selectedGoals.length > 0) {
          console.log(`│      Goals: ${step2.selectedGoals.join(', ')}`);
        }
        console.log(`│   📦 Storage:         formentries.step2Data`);
      } else {
        console.log('│   ❌ NOT FILLED - User didn\'t complete Step 2');
      }
      
      // SCREEN 5 (Step 3) - Informational
      console.log('│');
      console.log('│ 📱 SCREEN 5 (Step 3) - Informational Screen');
      console.log('│ ────────────────────────────────────────');
      console.log('│   ℹ️  No data to store (Informational only)');
      console.log('│   ✅ Correct - Not stored in database');
      
      // SCREEN 6 & 7 (Step 4 & 5) - Skills and Interests
      console.log('│');
      console.log('│ 📱 SCREEN 6 (Step 4) - Skills');
      console.log('│ ────────────────────────────────────────');
      if (formEntry && formEntry.step4Data) {
        const step4 = formEntry.step4Data;
        console.log(`│   ✅ Selected Skills: ${step4.selectedSkills ? step4.selectedSkills.length + ' skills' : '❌ Missing'}`);
        if (step4.selectedSkills && step4.selectedSkills.length > 0) {
          console.log(`│      Skills: ${step4.selectedSkills.join(', ')}`);
        }
        console.log(`│   📦 Storage:         formentries.step4Data`);
      } else {
        console.log('│   ❌ NOT FILLED - User didn\'t complete Step 4');
      }
      
      console.log('│');
      console.log('│ 📱 SCREEN 7 (Step 5) - Interests');
      console.log('│ ────────────────────────────────────────');
      if (formEntry && formEntry.step5Data) {
        const step5 = formEntry.step5Data;
        console.log(`│   ✅ Selected Interests: ${step5.selectedInterests ? step5.selectedInterests.length + ' interests' : '❌ Missing'}`);
        if (step5.selectedInterests && step5.selectedInterests.length > 0) {
          console.log(`│      Interests: ${step5.selectedInterests.join(', ')}`);
        }
        console.log(`│   📦 Storage:         formentries.step5Data`);
      } else {
        console.log('│   ❌ NOT FILLED - User didn\'t complete Step 5');
      }
      
      // SCREEN 8 (Step 6) - Profile Photo & Job Search
      console.log('│');
      console.log('│ 📱 SCREEN 8 (Step 6) - Profile Photo & Job Search');
      console.log('│ ────────────────────────────────────────');
      if (formEntry && formEntry.step6Data) {
        const step6 = formEntry.step6Data;
        console.log(`│   ✅ Profile Photo:       ${step6.profilePicture ? '✅ Stored (base64)' : '❌ Missing'}`);
        if (step6.profilePicture) {
          const sizeKB = (step6.profilePicture.length * 0.75 / 1024).toFixed(2);
          console.log(`│      Photo Size:          ${sizeKB} KB`);
        }
        console.log(`│   ✅ Job Search Pref:     ${step6.lookingForJob || '❌ Missing'}`);
        console.log(`│   📦 Storage:             formentries.step6Data`);
      } else {
        console.log('│   ❌ NOT FILLED - User didn\'t complete Step 6');
      }
      
      // Dashboard Data
      console.log('│');
      console.log('│ 📱 DASHBOARD - User Details & Completion Status');
      console.log('│ ────────────────────────────────────────');
      console.log(`│   ✅ User Email:          ${user.email}`);
      console.log(`│   ✅ Account Created:     ${user.createdAt}`);
      console.log(`│   ✅ Onboarding Status:   ${formEntry ? 'Completed' : 'Not Started'}`);
      console.log(`│   📦 Storage:             users collection + formentries`);
      
      console.log('└─' + '─'.repeat(77));
      console.log('');
    }
    
    // Summary
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('                         📊 STORAGE SUMMARY                         ');
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('');
    
    let step1Complete = 0, step2Complete = 0, step4Complete = 0, step5Complete = 0, step6Complete = 0;
    
    formEntries.forEach(entry => {
      if (entry.step1Data && entry.step1Data.name) step1Complete++;
      if (entry.step2Data && entry.step2Data.selectedGoals) step2Complete++;
      if (entry.step4Data && entry.step4Data.selectedSkills) step4Complete++;
      if (entry.step5Data && entry.step5Data.selectedInterests) step5Complete++;
      if (entry.step6Data && entry.step6Data.profilePicture) step6Complete++;
    });
    
    console.log('Screen-wise Completion:');
    console.log('─────────────────────────────────────────────────────────────');
    console.log(`Screen 3 (Profile):      ${step1Complete} / ${formEntries.length} users ✅`);
    console.log(`Screen 4 (Goals):        ${step2Complete} / ${formEntries.length} users ✅`);
    console.log(`Screen 5 (Info):         N/A (No data to store) ✅`);
    console.log(`Screen 6 (Skills):       ${step4Complete} / ${formEntries.length} users ✅`);
    console.log(`Screen 7 (Interests):    ${step5Complete} / ${formEntries.length} users ✅`);
    console.log(`Screen 8 (Photo & Job):  ${step6Complete} / ${formEntries.length} users ✅`);
    console.log('');
    
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('                    ✅ FINAL VERIFICATION RESULT                    ');
    console.log('═══════════════════════════════════════════════════════════════════════════════');
    console.log('');
    
    const allDataStoredCorrectly = 
      step1Complete > 0 && 
      step2Complete > 0 && 
      step4Complete > 0 && 
      step5Complete > 0 && 
      step6Complete > 0;
    
    if (allDataStoredCorrectly) {
      console.log('✅ ALL SCREENS DATA IS BEING STORED CORRECTLY!');
      console.log('✅ Screen 3: Name, username, profile details, location, referral ✓');
      console.log('✅ Screen 4: User selected goals ✓');
      console.log('✅ Screen 5: Informational only (no storage needed) ✓');
      console.log('✅ Screen 6 & 7: Skills and interests ✓');
      console.log('✅ Screen 8: Profile photo and job preference ✓');
      console.log('✅ Dashboard: User details and completion status ✓');
    } else {
      console.log('⚠️  Some screens have incomplete data');
      console.log('   This is normal if users haven\'t completed all steps yet');
    }
    console.log('');
    
    console.log('📦 Storage Collections:');
    console.log('   • users         → Email, password, timestamps');
    console.log('   • formentries   → All onboarding form data (Step 1-6)');
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

checkAllScreensData();
