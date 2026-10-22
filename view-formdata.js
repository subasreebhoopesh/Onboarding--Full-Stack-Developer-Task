import mongoose from 'mongoose';

// MongoDB connection
const MONGODB_URI = 'mongodb://127.0.0.1:27017/onboarding';

// FormEntry schema
const formEntrySchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  step: Number,
  data: mongoose.Schema.Types.Mixed,
}, { timestamps: true });

const FormEntry = mongoose.model('FormEntry', formEntrySchema);

async function viewFormData() {
  try {
    console.log('🔍 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Get all form entries
    const entries = await FormEntry.find({}).sort({ createdAt: -1 });
    
    console.log('📊 Total Form Entries Found:', entries.length);
    console.log('═'.repeat(80));

    if (entries.length === 0) {
      console.log('❌ No form entries found in database');
    } else {
      entries.forEach((entry, index) => {
        console.log(`\n📝 Form Entry #${index + 1}:`);
        console.log('   User ID:', entry.userId);
        console.log('   Step:', entry.step);
        console.log('   Created:', entry.createdAt);
        console.log('   Data:');
        console.log(JSON.stringify(entry.data, null, 6));
        console.log('   ' + '─'.repeat(76));
      });
    }

    console.log('\n' + '═'.repeat(80));

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('\n✅ Connection closed');
  }
}

viewFormData();
