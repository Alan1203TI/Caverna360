# SESIVERSO — Caverna do Tempo 360° • versão completa

Experiência imersiva para exposição sobre arte rupestre, Paleolítico e Neolítico.

## Principais recursos
- 9 pontos/ambientes conectados em uma rota de caverna;
- visão panorâmica 360° por arraste;
- caminhada com W/S, setas ou controles na tela;
- rotação com A/D ou setas laterais;
- transição animada entre ambientes;
- mapa interativo com galerias visitadas;
- 18 evidências clicáveis;
- zoom arqueológico;
- fichas técnicas com técnica, pigmentos, suporte, análise e interpretação;
- comparação com referências arqueológicas reais do Wikimedia Commons quando há internet;
- narrador usando a voz do próprio navegador;
- linha do tempo Paleolítico → Holoceno → Neolítico;
- modo Missão do Arqueólogo;
- caderno de campo salvo no navegador;
- lanterna interativa;
- som ambiente sintetizado;
- Ateliê Rupestre final com pincel, pigmentos e carimbos;
- exportação da arte do aluno em PNG;
- pontuação e tela de conclusão;
- PWA instalável e cache offline dos arquivos principais;
- workflow para GitHub Pages.

## Testar localmente
Abra `index.html` diretamente ou execute `iniciar-local.bat` e acesse `http://localhost:8080`.

## GitHub Pages
Envie a pasta inteira para a branch `main`. O workflow em `.github/workflows/deploy-pages.yml` publica a aplicação. Em **Settings > Pages**, selecione GitHub Actions se necessário.

## Atualização de versões antigas
Como é PWA, o navegador pode manter cache anterior. Após publicar esta versão, abra o site e use `Ctrl + F5` uma vez. Se ainda aparecer versão antiga, feche a PWA e abra o endereço novamente.

## Observação arqueológica
Os ambientes 360° são reconstruções didáticas e combinam motivos inspirados em diferentes tradições, lugares e períodos. Não representam um único sítio real. As fichas deixam explícita essa distinção.

## Referências fotográficas externas
Algumas fichas tentam carregar, somente quando há internet, imagens de referência hospedadas no Wikimedia Commons e exibem sua atribuição/licença. Se estiver offline, a experiência continua funcionando e o link da fonte permanece na ficha quando aplicável.
