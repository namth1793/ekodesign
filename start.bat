@echo off
echo ========================================
echo   EkoDesign Studio - Starting...
echo ========================================

echo.
echo Starting Backend on http://localhost:5013
start "EkoDesign Backend" cmd /k "cd /d "%~dp0backend" && npm start"

timeout /t 2 /nobreak >nul

echo Starting Frontend on http://localhost:5174
start "EkoDesign Frontend" cmd /k "cd /d "%~dp0frontend" && npm run dev"

timeout /t 3 /nobreak >nul

echo.
echo ========================================
echo   App is running!
echo   Backend:  http://localhost:5013
echo   Frontend: http://localhost:5174
echo ========================================

start http://localhost:5174
