# MongoDB Viewer Script
# This script helps you connect to MongoDB and view your data

Write-Host "=" -NoNewline -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "          MONGODB CONNECTION CHECKER & VIEWER" -ForegroundColor Yellow
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

# Check if MongoDB is running
Write-Host "Step 1: Checking if MongoDB is running..." -ForegroundColor Cyan
$mongoProcess = Get-Process mongod -ErrorAction SilentlyContinue

if ($mongoProcess) {
    Write-Host "✅ MongoDB is RUNNING on port 27017" -ForegroundColor Green
} else {
    Write-Host "❌ MongoDB is NOT running" -ForegroundColor Red
    Write-Host "   Start MongoDB first with: mongod" -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host "Step 2: Testing MongoDB Connection..." -ForegroundColor Cyan

# Test connection using mongosh
$testConnection = mongosh "mongodb://127.0.0.1:27017/onboarding" --eval "db.runCommand({ ping: 1 })" 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ MongoDB Connection SUCCESSFUL" -ForegroundColor Green
} else {
    Write-Host "❌ Cannot connect to MongoDB" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "          CHOOSE HOW TO VIEW YOUR MONGODB DATA" -ForegroundColor Yellow
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Open MongoDB Shell (mongosh) - Command line view" -ForegroundColor White
Write-Host "2. View with Node.js script - Better formatted output" -ForegroundColor White
Write-Host "3. Open MongoDB Compass - GUI Application (if installed)" -ForegroundColor White
Write-Host "4. Show connection instructions only" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Enter your choice (1-4)"

switch ($choice) {
    "1" {
        Write-Host ""
        Write-Host "Opening MongoDB Shell..." -ForegroundColor Green
        Write-Host "Connecting to database: onboarding" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Useful commands:" -ForegroundColor Yellow
        Write-Host "  show dbs              - Show all databases" -ForegroundColor White
        Write-Host "  db                    - Show current database" -ForegroundColor White
        Write-Host "  show collections      - Show all collections" -ForegroundColor White
        Write-Host "  db.users.find()       - View all users" -ForegroundColor White
        Write-Host "  db.formentries.find() - View all form entries" -ForegroundColor White
        Write-Host "  exit                  - Exit mongosh" -ForegroundColor White
        Write-Host ""
        Start-Sleep -Seconds 2
        mongosh "mongodb://127.0.0.1:27017/onboarding"
    }
    "2" {
        Write-Host ""
        Write-Host "Running Node.js viewer script..." -ForegroundColor Green
        node check-passwords.js
        Write-Host ""
        Write-Host "Press Enter to view Form Entries..." -ForegroundColor Yellow
        Read-Host
        node view-formdata.js
    }
    "3" {
        Write-Host ""
        Write-Host "Opening MongoDB Compass..." -ForegroundColor Green
        Write-Host "Connection String: mongodb://127.0.0.1:27017/onboarding" -ForegroundColor Cyan
        Write-Host ""
        
        # Try to open Compass
        $compassPath = "$env:LOCALAPPDATA\MongoDBCompass\MongoDBCompass.exe"
        if (Test-Path $compassPath) {
            Start-Process $compassPath -ArgumentList "mongodb://127.0.0.1:27017/onboarding"
            Write-Host "✅ MongoDB Compass opened!" -ForegroundColor Green
        } else {
            Write-Host "❌ MongoDB Compass not found" -ForegroundColor Red
            Write-Host ""
            Write-Host "Download from: https://www.mongodb.com/try/download/compass" -ForegroundColor Yellow
            Write-Host ""
            Write-Host "OR use connection string in browser:" -ForegroundColor Cyan
            Write-Host "mongodb://127.0.0.1:27017/onboarding" -ForegroundColor White
        }
    }
    "4" {
        Write-Host ""
        Write-Host "================================================================" -ForegroundColor Cyan
        Write-Host "          MONGODB CONNECTION INFORMATION" -ForegroundColor Yellow
        Write-Host "================================================================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Connection String:" -ForegroundColor Yellow
        Write-Host "  mongodb://127.0.0.1:27017/onboarding" -ForegroundColor White
        Write-Host ""
        Write-Host "Database Name:" -ForegroundColor Yellow
        Write-Host "  onboarding" -ForegroundColor White
        Write-Host ""
        Write-Host "Collections:" -ForegroundColor Yellow
        Write-Host "  - users (stores user accounts and passwords)" -ForegroundColor White
        Write-Host "  - formentries (stores onboarding form data)" -ForegroundColor White
        Write-Host ""
        Write-Host "Port:" -ForegroundColor Yellow
        Write-Host "  27017" -ForegroundColor White
        Write-Host ""
    }
    default {
        Write-Host "Invalid choice" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
