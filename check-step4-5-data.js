import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/onboarding';

async function checkStepData() {
  try {
    await mongoose.connect(MONGODB_URI);
    
    const db = mongoose.connection.db;
    const entries = await db.collection('formentries').find({}).toArray();
    
    console.log('\n📊 Steps 4 & 5 Data Check:');
    console.log('═'.repeat(80));
    
    entries.forEach((entry, index) => {
      console.log(`\n Entry #${index + 1} (User: ${entry.userId}):`);
      console.log('  Step 4 Data:', JSON.stringify(entry.step4Data, null, 2));
      console.log('  Step 5 Data:', JSON.stringify(entry.step5Data, null, 2));
    });
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await mongoose.connection.close();
  }
}

checkStepData();
