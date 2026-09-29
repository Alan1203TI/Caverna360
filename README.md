# SESIVERSO — Caverna do Tempo 360°

Experiência imersiva em 360° sobre arte rupestre, Paleolítico e Neolítico.

## Testar no computador

### Opção 1 — duplo clique
Abra `index.html` diretamente. Esta versão não usa WebGL para carregar o panorama, portanto a imagem funciona também em `file://`.

> Observação: recursos de PWA (instalação e service worker) exigem HTTP/HTTPS por regra do navegador.

### Opção 2 — localhost (recomendado)
Execute `iniciar-local.bat`. O navegador abrirá em:

`http://localhost:8080`

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie **todo o conteúdo desta pasta** para a raiz do repositório.
3. Em **Settings → Pages**, escolha **GitHub Actions** como Source.
4. Faça um novo push, se necessário.
5. O workflow `.github/workflows/pages.yml` publicará o app.

A aplicação usa caminhos relativos, portanto funciona tanto em `usuario.github.io/repositorio/` quanto em domínio próprio.

## PWA

O projeto já inclui:
- `manifest.webmanifest`
- `sw.js`
- ícones 192×192 e 512×512
- cache offline
- botão de instalação quando o navegador disponibiliza o evento de instalação

Após publicar via HTTPS e abrir uma vez, os arquivos principais ficam disponíveis offline.

## Estrutura

- `index.html` — interface
- `styles.css` — visual
- `app.js` — navegação 360, hotspots, missão, quiz e PWA
- `assets/panorama360.png` — panorama
- `assets/icons/` — ícones do PWA
- `.github/workflows/pages.yml` — deploy automático para GitHub Pages
