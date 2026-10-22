# PowerShell script to install dependencies

Write-Host "================================" -ForegroundColor Green
Write-Host "Record Onboarding App Setup" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""

# Install Backend Dependencies
Write-Host "Installing Backend Dependencies..." -ForegroundColor Cyan
Set-Location server
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Backend dependencies installed successfully!" -ForegroundColor Green
} else {
    Write-Host "✗ Backend installation failed. Try manual installation." -ForegroundColor Red
}

Set-Location ..

Write-Host ""

# Install Frontend Dependencies
Write-Host "Installing Frontend Dependencies..." -ForegroundColor Cyan
Write-Host "This may take a few minutes..." -ForegroundColor Yellow
Set-Location client
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Frontend dependencies installed successfully!" -ForegroundColor Green
} else {
    Write-Host "✗ Frontend installation failed. Try manual installation." -ForegroundColor Red
}

Set-Location ..

Write-Host ""
Write-Host "================================" -ForegroundColor Green
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "1. Ensure MongoDB is running" -ForegroundColor White
Write-Host "2. Update server/.env with your MongoDB URI" -ForegroundColor White
Write-Host "3. Open TWO terminals:" -ForegroundColor White
Write-Host "   Terminal 1: cd server && npm run dev" -ForegroundColor Yellow
Write-Host "   Terminal 2: cd client && npm run dev" -ForegroundColor Yellow
Write-Host "4. Open http://localhost:5173 in your browser" -ForegroundColor White
Write-Host ""
