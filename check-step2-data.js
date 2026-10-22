import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/onboarding';

async function checkStep2Data() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    
    const db = mongoose.connection.db;
    const formEntries = await db.collection('formentries').find({}).toArray();
    
    console.log('\n📊 Step 2 Data Check:');
    console.log('═'.repeat(80));
    
    formEntries.forEach((entry, index) => {
      console.log(`\nEntry #${index + 1}:`);
      console.log(`User ID: ${entry.userId}`);
      console.log(`Step 2 Data:`, JSON.stringify(entry.step2Data, null, 2));
    });
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await mongoose.connection.close();
  }
}

checkStep2Data();
