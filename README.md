# SESIVERSO — Caverna do Tempo 360°

Experiência imersiva em 360° sobre arte rupestre, Paleolítico e Neolítico.

## O que esta versão traz
- 4 galerias panorâmicas em 360° criadas especificamente para o projeto
- modo caminhada entre os pontos da caverna com animação de avanço/recuo
- controles W/S ou ↑/↓ para caminhar e A/D ou ←/→ para girar
- controles de caminhada na tela para celular/tablet
- hotspots azuis que funcionam como passagens entre galerias
- 12 hotspots de conteúdo com fichas técnicas ampliadas
- cronologia, técnica, pigmentos, suporte, leitura arqueológica, metodologia e cuidados de interpretação em cada evidência
- mini testes em cada evidência
- missão com pontuação
- tocha, som, quiz final
- PWA instalável
- funcionamento offline via Service Worker
- pronta para GitHub Pages

## Estrutura
- `index.html` — tela principal
- `app.js` — lógica da navegação 360° e conteúdos
- `styles.css` — interface visual
- `assets/scenes/` — panoramas 360°
- `assets/icons/` — ícones do PWA
- `manifest.webmanifest` — manifesto do PWA
- `sw.js` — cache offline
- `.github/workflows/deploy-pages.yml` — deploy automático no GitHub Pages

## Testar localmente
### Opção 1
Abra `index.html` com duplo clique.

### Opção 2 (recomendado)
Execute `iniciar-local.bat` e abra:

`http://localhost:8080`

## Publicar no GitHub Pages
1. Crie um repositório e envie todos os arquivos.
2. Faça push para a branch `main`.
3. No GitHub, vá em **Settings > Pages** e confira se está usando **GitHub Actions**.
4. Aguarde o workflow publicar o site.

## Instalação como PWA
Depois de publicado em HTTPS (ou em `localhost`), o navegador mostrará a opção **Instalar**.

## Observação didática
Os cenários panorâmicos são reconstruções visuais inspiradas em repertórios rupestres reais. Os textos foram escritos com linguagem mais técnica e educativa, citando exemplos arqueológicos como:
- Lascaux
- Altamira
- Cueva de las Manos
- Serra da Capivara
