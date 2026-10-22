# Start Frontend Development Server

Write-Host "================================" -ForegroundColor Green
Write-Host "Starting Frontend Server" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""
Write-Host "Frontend will run on http://localhost:5173" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

Set-Location client
npm run dev
