# Start Backend Server

Write-Host "================================" -ForegroundColor Green
Write-Host "Starting Backend Server" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""
Write-Host "Server will run on http://localhost:5000" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

Set-Location server
npm run dev
