# MongoDB Connection Check Script

Write-Host "================================" -ForegroundColor Cyan
Write-Host "MongoDB Connection Checker" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check 1: MongoDB Service
Write-Host "1. Checking MongoDB Service..." -ForegroundColor Yellow
try {
    $service = Get-Service -Name "*mongo*" -ErrorAction Stop
    if ($service.Status -eq "Running") {
        Write-Host "   ✅ MongoDB Service is RUNNING" -ForegroundColor Green
    } else {
        Write-Host "   ❌ MongoDB Service is STOPPED" -ForegroundColor Red
        Write-Host "   → Run: net start MongoDB" -ForegroundColor Yellow
    }
} catch {
    Write-Host "   ❌ MongoDB Service NOT FOUND" -ForegroundColor Red
    Write-Host "   → MongoDB may not be installed" -ForegroundColor Yellow
}
Write-Host ""

# Check 2: Test Connection to Database
Write-Host "2. Testing Database Connection..." -ForegroundColor Yellow
Write-Host "   Running Node.js connection test..." -ForegroundColor Gray
Write-Host ""

# Run the connection test
node test-connection.js

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Test Complete!" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
