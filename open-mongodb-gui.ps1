# MongoDB GUI Viewer Setup
# This script helps you open MongoDB with a visual interface

Write-Host "═══════════════════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "              🗄️  OPEN MONGODB WITH GUI (VISUAL INTERFACE)              " -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# MongoDB connection string
$connectionString = "mongodb://127.0.0.1:27017/onboarding"

Write-Host "Your MongoDB Connection Details:" -ForegroundColor Yellow
Write-Host "  📍 Host:     127.0.0.1" -ForegroundColor White
Write-Host "  📍 Port:     27017" -ForegroundColor White
Write-Host "  📍 Database: onboarding" -ForegroundColor White
Write-Host ""
Write-Host "  🔗 Connection String:" -ForegroundColor Cyan
Write-Host "     $connectionString" -ForegroundColor White
Write-Host ""

# Check if MongoDB is running
Write-Host "Step 1: Checking if MongoDB is running..." -ForegroundColor Cyan
$mongoProcess = Get-Process mongod -ErrorAction SilentlyContinue

if ($mongoProcess) {
    Write-Host "  ✅ MongoDB is RUNNING" -ForegroundColor Green
} else {
    Write-Host "  ❌ MongoDB is NOT running!" -ForegroundColor Red
    Write-Host "  ⚠️  Please start MongoDB first!" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "  Start with: mongod" -ForegroundColor White
    Write-Host ""
    exit
}
Write-Host ""

# Option 1: Try MongoDB Compass (Desktop App)
Write-Host "═══════════════════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "                    OPTION 1: MongoDB Compass (Recommended)                    " -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

$compassPaths = @(
    "$env:LOCALAPPDATA\MongoDBCompass\MongoDBCompass.exe",
    "$env:ProgramFiles\MongoDB\Compass\MongoDBCompass.exe",
    "C:\Program Files\MongoDB\Compass\MongoDBCompass.exe"
)

$compassFound = $false
foreach ($path in $compassPaths) {
    if (Test-Path $path) {
        Write-Host "✅ MongoDB Compass found at:" -ForegroundColor Green
        Write-Host "   $path" -ForegroundColor White
        Write-Host ""
        Write-Host "🚀 Opening MongoDB Compass..." -ForegroundColor Cyan
        Write-Host ""
        
        # Copy connection string to clipboard
        Set-Clipboard -Value $connectionString
        Write-Host "✅ Connection string copied to clipboard!" -ForegroundColor Green
        Write-Host ""
        
        # Open Compass
        Start-Process $path
        
        Write-Host "📋 INSTRUCTIONS:" -ForegroundColor Yellow
        Write-Host "  1. MongoDB Compass window will open" -ForegroundColor White
        Write-Host "  2. Paste the connection string (Ctrl+V) or it may auto-connect" -ForegroundColor White
        Write-Host "  3. Click 'Connect' button" -ForegroundColor White
        Write-Host "  4. You'll see 'onboarding' database on the left" -ForegroundColor White
        Write-Host "  5. Click on 'onboarding' → 'users' to see user data" -ForegroundColor White
        Write-Host "  6. Click on 'onboarding' → 'formentries' to see form data" -ForegroundColor White
        Write-Host ""
        
        $compassFound = $true
        break
    }
}

if (-not $compassFound) {
    Write-Host "❌ MongoDB Compass NOT installed" -ForegroundColor Red
    Write-Host ""
    Write-Host "📥 DOWNLOAD MongoDB Compass:" -ForegroundColor Yellow
    Write-Host "   https://www.mongodb.com/try/download/compass" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "   OR download directly:" -ForegroundColor Yellow
    Write-Host "   https://downloads.mongodb.com/compass/mongodb-compass-1.42.1-win32-x64.exe" -ForegroundColor Cyan
    Write-Host ""
    
    $openBrowser = Read-Host "Open download page in browser? (Y/N)"
    if (($openBrowser -eq "Y") -or ($openBrowser -eq "y")) {
        Start-Process "https://www.mongodb.com/try/download/compass"
    }
    Write-Host ""
}

Write-Host "═══════════════════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "                      OPTION 2: MongoDB Web Interface                      " -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "If you have MongoDB Atlas or Express Admin installed:" -ForegroundColor White
Write-Host "  🌐 Open browser: http://localhost:8081" -ForegroundColor Cyan
Write-Host ""

Write-Host "═══════════════════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "                    OPTION 3: View in Terminal (Current)                    " -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "You can also view data using Node.js scripts:" -ForegroundColor White
Write-Host ""
Write-Host "  📊 View all data:        node view-all-data.js" -ForegroundColor Cyan
Write-Host "  👥 View user names:      node view-user-names.js" -ForegroundColor Cyan
Write-Host "  🔐 View passwords:       node check-passwords.js" -ForegroundColor Cyan
Write-Host "  📝 View form entries:    node view-formdata.js" -ForegroundColor Cyan
Write-Host ""

Write-Host "═══════════════════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# Keep window open
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
