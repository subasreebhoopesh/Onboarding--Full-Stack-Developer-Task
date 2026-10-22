// Simple test to verify all connections work
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from server folder
dotenv.config({ path: join(__dirname, 'server', '.env') });

console.log('🔍 Testing MongoDB Connection...\n');
console.log('Configuration:');
console.log(`- MongoDB URI: ${process.env.MONGODB_URI}`);
console.log(`- Port: ${process.env.PORT}`);
console.log(`- Client URL: ${process.env.CLIENT_URL}\n`);

// Test MongoDB connection
const testConnection = async () => {
  try {
    console.log('⏳ Attempting to connect to MongoDB...');
    
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    
    console.log('✅ SUCCESS! MongoDB connected successfully!\n');
    console.log('📊 Connection Details:');
    console.log(`- Database: ${mongoose.connection.db.databaseName}`);
    console.log(`- Host: ${mongoose.connection.host}`);
    console.log(`- Port: ${mongoose.connection.port}`);
    console.log(`- Ready State: ${mongoose.connection.readyState === 1 ? 'Connected' : 'Not Connected'}\n`);
    
    console.log('🎉 Database connection test PASSED!\n');
    console.log('✨ Your setup is ready! Next steps:');
    console.log('1. Start backend: cd server && npm run dev');
    console.log('2. Start frontend: cd client && npm run dev');
    console.log('3. Open browser: http://localhost:5173\n');
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ FAILED! Could not connect to MongoDB\n');
    console.error('Error details:', error.message);
    console.error('\n💡 Solutions:');
    
    if (error.message.includes('ECONNREFUSED')) {
      console.error('→ MongoDB is not running locally');
      console.error('→ Option 1: Install and start MongoDB locally');
      console.error('→ Option 2: Use MongoDB Atlas (cloud)');
      console.error('   Visit: https://www.mongodb.com/cloud/atlas\n');
    } else if (error.message.includes('authentication')) {
      console.error('→ Check your MongoDB username and password');
      console.error('→ Update MONGODB_URI in server/.env\n');
    } else {
      console.error('→ Check your MongoDB connection string');
      console.error('→ Verify MongoDB is accessible\n');
    }
    
    process.exit(1);
  }
};

testConnection();
