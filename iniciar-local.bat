@echo off
cd /d "%~dp0"
start "" http://localhost:8080
where py >nul 2>nul
if %errorlevel%==0 (
  py -m http.server 8080
  goto :eof
)
where python >nul 2>nul
if %errorlevel%==0 (
  python -m http.server 8080
  goto :eof
)
echo.
echo Python nao foi encontrado. O app ainda pode ser aberto clicando duas vezes em index.html.
echo Para testar instalacao PWA, use GitHub Pages ou instale Python.
pause
