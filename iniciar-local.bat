@echo off
cd /d "%~dp0"
echo Iniciando servidor local em http://localhost:8080
python -m http.server 8080
pause
