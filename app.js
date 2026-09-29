const scenes = {
  entrada: {
    id: 'entrada',
    index: 1,
    title: 'Galeria de Entrada',
    subtitle: 'Primeiro contato com a caverna',
    image: 'assets/scenes/scene1_entrada.png',
    hotspots: [
      {
        id: 'maos-estencil', type: 'info', yaw: -132, pitch: 10, icon: '🖐️',
        period: 'Arte rupestre • tradição de mãos em negativo',
        title: 'Estêncil de mãos',
        text: 'As mãos em negativo são produzidas com a aplicação de pigmento ao redor da mão apoiada na parede. O resultado preserva a silhueta da palma e dos dedos como um negativo, uma técnica amplamente conhecida em painéis rupestres de diferentes regiões do mundo.',
        technical: {
          cronologia: 'Predomínio em tradições rupestres pré-históricas; exemplos muito conhecidos datam de milhares de anos AP.',
          tecnica: 'Pulverização ou sopro de pigmento ao redor da mão; em alguns casos há impressões positivas.',
          pigmentos: 'Ocre vermelho, hematita, carvão vegetal e, ocasionalmente, pigmentos claros como caulim.',
          suporte: 'Superfícies calcárias ou areníticas de abrigos e cavernas, escolhidas pela boa aderência do pigmento.'
        },
        analysis: 'Do ponto de vista arqueológico, essas marcas são estudadas como registros intencionais de presença, identidade, gesto e comunicação simbólica. Seu significado exato varia conforme o contexto e não deve ser reduzido a uma única interpretação.',
        context: 'Exemplo real: Cueva de las Manos, Patagônia argentina. O sítio reúne numerosos estênceis de mãos associados a outros motivos zoomórficos e abstratos.',
        quiz: {
          q: 'Qual procedimento técnico caracteriza o estêncil de mãos?',
          options: ['Soprar pigmento ao redor da mão apoiada na rocha', 'Gravar a mão com metal sobre a pedra', 'Misturar cimento e pressionar a mão na parede'],
          correct: 0,
          explain: 'No estêncil, a mão serve como máscara e o pigmento é aplicado em volta dela.'
        }
      },
      {
        id: 'grandes-bovideos', type: 'info', yaw: 42, pitch: 6, icon: '🦬',
        period: 'Paleolítico Superior',
        title: 'Grandes mamíferos pintados',
        text: 'Painéis com bovídeos, cervídeos e outros grandes herbívoros ocupam posição central na arte parietal paleolítica. A ênfase no contorno do dorso, do ventre e dos chifres ou galhadas reforça a identificação da espécie e a leitura do movimento.',
        technical: {
          cronologia: 'Muito frequente no Paleolítico Superior europeu, sobretudo entre cerca de 20 mil e 14 mil anos AP.',
          tecnica: 'Contorno em carvão ou manganês, preenchimento parcial com ocre e uso do relevo natural da parede.',
          pigmentos: 'Preto carbonoso, tons ferruginosos e matizes terrosos obtidos por óxidos minerais.',
          suporte: 'Painéis amplos de rocha calcária com saliências que sugerem volume corporal.'
        },
        analysis: 'Essas figuras não devem ser entendidas apenas como “desenhos de caça”. Em arqueologia, a discussão envolve memória, ritualidade, classificação do mundo animal e organização simbólica do espaço cavernícola.',
        context: 'Exemplos reais: Lascaux, na França, e Altamira, na Espanha, onde bisões e outros herbívoros foram representados em escalas variadas.',
        quiz: {
          q: 'Que recurso visual é comum nesses grandes painéis animais?',
          options: ['Aproveitar saliências da rocha para sugerir volume', 'Usar perspectiva renascentista com ponto de fuga', 'Aplicar tinta industrial brilhante'],
          correct: 0,
          explain: 'Muitos artistas pré-históricos exploraram o relevo natural da parede para dar sensação de corpo e massa aos animais.'
        }
      },
      {
        id: 'estruturas-geometricas', type: 'info', yaw: 130, pitch: 8, icon: '🛖',
        period: 'Motivos geométricos e antropomórficos',
        title: 'Estruturas e sinais esquemáticos',
        text: 'Formas geométricas, cercados, cabanas esquemáticas, fileiras humanas e sinais abstratos aparecem em muitas tradições rupestres. Em geral, esses motivos são interpretados com cautela, pois sua leitura depende do conjunto arqueológico e regional.',
        technical: {
          cronologia: 'Em muitos contextos, esses motivos se intensificam em fases mais tardias da Pré-História.',
          tecnica: 'Traço linear simples, silhueta chapada e repetição seriada de figuras.',
          pigmentos: 'Ocres vermelhos e castanhos escuros aplicados em camada fina.',
          suporte: 'Paredes lisas ou convexas, favoráveis à leitura sequencial das figuras.'
        },
        analysis: 'Em vez de afirmar com certeza que se trata de “casas” ou “aldeias”, a leitura técnica prefere falar em estruturas geométricas possivelmente associadas a abrigo, cercamento ou representação esquemática de espaço social.',
        context: 'Referências comparativas podem ser observadas em várias tradições rupestres históricas e pré-históricas, inclusive em abrigos do Brasil, onde conjuntos humanos e sinais lineares são frequentes.',
        quiz: {
          q: 'Qual é a postura mais adequada ao interpretar figuras geométricas rupestres?',
          options: ['Analisar com cautela e depender do contexto arqueológico', 'Assumir automaticamente que toda figura é uma casa', 'Ler todas como escrita alfabética'],
          correct: 0,
          explain: 'A interpretação técnica evita conclusões automáticas e depende sempre do contexto do painel.'
        }
      },
      { id: 'go-maos', type: 'nav', yaw: 2, pitch: -6, label: 'Seguir para a galeria das mãos', target: 'maos' }
    ]
  },
  maos: {
    id: 'maos', index: 2, title: 'Galeria das Mãos', subtitle: 'Estênceis, caprinos e caçadores', image: 'assets/scenes/scene2_maos.png',
    hotspots: [
      {
        id: 'painel-caprinos', type: 'info', yaw: -118, pitch: 9, icon: '🐐',
        period: 'Arte rupestre zoomórfica',
        title: 'Caprinos e pequenos zoomorfos',
        text: 'Cabras, íbex e outros caprinos de perfil aparecem de modo bastante esquemático, mas ainda assim com traços diagnósticos, como chifres longos e arqueados, dorso contínuo e patas delgadas.',
        technical: {
          cronologia: 'Muito presentes em tradições rupestres de regiões áridas e montanhosas.',
          tecnica: 'Silhueta linear com preenchimento parcial e contorno reforçado.',
          pigmentos: 'Preto carbonoso e ocre ferruginoso.',
          suporte: 'Áreas laterais de parede, próximas de agrupamentos de mão e sinais.'
        },
        analysis: 'A repetição de caprinos sugere seleção temática. Em termos arqueológicos, isso pode refletir fauna relevante ao grupo ou um repertório simbólico específico, e não apenas o registro casual de um animal observado.',
        context: 'Caprinos e cervídeos aparecem em muitos conjuntos rupestres do Velho Mundo e também em repertórios esquemáticos comparáveis de outras regiões.',
        quiz: {
          q: 'Qual traço ajuda a reconhecer caprinos nos painéis?',
          options: ['Chifres longos e curvos', 'Escamas e nadadeiras', 'Asas abertas em voo'],
          correct: 0,
          explain: 'Os chifres arqueados são um dos elementos mais característicos desses animais nos painéis rupestres.'
        }
      },
      {
        id: 'galeria-maos', type: 'info', yaw: 88, pitch: 10, icon: '🖐️',
        period: 'Marcadores corporais',
        title: 'Agrupamento de estênceis',
        text: 'Conjuntos densos de mãos podem indicar repetição de gestos em momentos distintos. A superposição e a diferença de tamanhos sugerem participação coletiva e longa duração de uso do painel.',
        technical: {
          cronologia: 'Produção cumulativa em diferentes fases de ocupação.',
          tecnica: 'Aplicação seriada do mesmo procedimento de estêncil negativo.',
          pigmentos: 'Misturas de ocres e agentes aglutinantes naturais.',
          suporte: 'Paredes mais claras, favorecendo contraste visual.'
        },
        analysis: 'Para a arqueologia, o interesse está no padrão: densidade, posição no abrigo, variação de tamanho e relação com outros motivos. Isso ajuda a discutir autoria coletiva, circulação e reutilização do espaço.',
        context: 'Em alguns sítios reais, as mãos aparecem acompanhadas de pontos, zigue-zagues e animais menores, formando painéis compostos.',
        quiz: {
          q: 'O que a sobreposição de mãos pode indicar?',
          options: ['Uso repetido do painel ao longo do tempo', 'Uma única sessão por uma única pessoa', 'Intervenção moderna com spray industrial'],
          correct: 0,
          explain: 'A presença de diferentes camadas e tamanhos é um forte indício de reutilização do painel em momentos diversos.'
        }
      },
      {
        id: 'cacadores-esquematicos', type: 'info', yaw: 26, pitch: 12, icon: '🏹',
        period: 'Paleolítico e tradições narrativas',
        title: 'Caçadores esquemáticos',
        text: 'As figuras humanas aparecem aqui com corpo simplificado, braços abertos e instrumentos alongados. Esse tipo de representação privilegia ação e gesto, mais do que anatomia detalhada.',
        technical: {
          cronologia: 'Comuns em tradições narrativas de caça e deslocamento.',
          tecnica: 'Traço linear fino, com membros alongados e marcação mínima de cabeça e tronco.',
          pigmentos: 'Ocre vermelho e marrom escuro.',
          suporte: 'Faixas medianas da parede, em associação com zoomorfos.'
        },
        analysis: 'Em painéis com humanos, o arqueólogo observa postura, relação espacial com animais, repetição de gestos e possível construção de narrativa visual. Nem toda figura humana representa caça; algumas podem estar ligadas a dança, rito ou deslocamento.',
        context: 'A Serra da Capivara, no Piauí, é uma referência importante para painéis com figuras humanas em ação e composições coletivas.',
        quiz: {
          q: 'Qual aspecto é mais enfatizado nessas figuras humanas?',
          options: ['Movimento e gesto', 'Retrato facial realista', 'Roupas bordadas detalhadas'],
          correct: 0,
          explain: 'A simplificação anatômica concentra a leitura no gesto e na ação representada.'
        }
      },
      { id: 'back-entrada', type: 'nav', yaw: 176, pitch: -7, label: 'Voltar à entrada', target: 'entrada' },
      { id: 'go-caca', type: 'nav', yaw: 0, pitch: -6, label: 'Avançar para a galeria de caça', target: 'caca' }
    ]
  },
  caca: {
    id: 'caca', index: 3, title: 'Grande Galeria de Caça', subtitle: 'Animais, arqueiros e movimento', image: 'assets/scenes/scene3_caca.png',
    hotspots: [
      {
        id: 'cervideos', type: 'info', yaw: -128, pitch: 13, icon: '🦌',
        period: 'Arte parietal zoomórfica',
        title: 'Cervídeos e galhadas',
        text: 'Os cervídeos costumam ser reconhecidos pelas galhadas ramificadas, pescoço alongado e atitude de deslocamento. A disposição em perfil facilita a identificação do animal, mesmo em estilo esquemático.',
        technical: {
          cronologia: 'Recorrentes em repertórios paleolíticos e pós-paleolíticos.',
          tecnica: 'Contorno linear com preenchimento mais denso em dorso e tronco.',
          pigmentos: 'Ocres avermelhados e pretos carbonosos.',
          suporte: 'Painéis altos e colunas verticais, permitindo boa visibilidade.'
        },
        analysis: 'A seleção de cervídeos pode se relacionar à relevância desse animal na paisagem local, mas também à sua carga simbólica. Em estudos rupestres, a espécie retratada é apenas uma parte da interpretação.',
        context: 'Lascaux e outros sítios do Paleolítico Superior preservam grandes herbívoros em perfil com forte aproveitamento do contorno da rocha.',
        quiz: {
          q: 'Qual elemento visual distingue bem um cervídeo?',
          options: ['Galhadas ramificadas', 'Escamas sobre o corpo', 'Cauda em leque colorida'],
          correct: 0,
          explain: 'As galhadas são um marcador importante para identificar cervos e veados nas cenas rupestres.'
        }
      },
      {
        id: 'auroque-central', type: 'info', yaw: 24, pitch: 10, icon: '🐂',
        period: 'Paleolítico Superior',
        title: 'Auroque ou grande bovídeo',
        text: 'O grande bovídeo domina a composição e ilustra como certos animais recebiam destaque em escala e centralidade. O corpo robusto, os chifres e a massa do tronco indicam uma construção visual pensada para impacto.',
        technical: {
          cronologia: 'Entre os temas mais emblemáticos da arte paleolítica europeia.',
          tecnica: 'Superposição de contorno escuro e preenchimento com ocre, explorando volumes naturais da parede.',
          pigmentos: 'Carvão, óxidos de ferro e misturas terrosas de diferentes intensidades.',
          suporte: 'Painel central amplo, possivelmente escolhido pela superfície contínua e pelo relevo.'
        },
        analysis: 'Em termos técnicos, a monumentalidade de alguns animais pode indicar hierarquia visual do painel. Isso não prova um significado único, mas demonstra organização compositiva e intencionalidade no uso do espaço.',
        context: 'Em Altamira e em outros santuários paleolíticos, figuras de grandes bovídeos ocupam áreas de destaque e revelam domínio do desenho e do pigmento.',
        quiz: {
          q: 'O que caracteriza a monumentalidade desse painel?',
          options: ['A posição central e a escala maior do animal', 'O uso de perspectiva aérea moderna', 'A presença de tinta fluorescente'],
          correct: 0,
          explain: 'A escala e a posição central são recursos compositivos decisivos nesse tipo de representação.'
        }
      },
      {
        id: 'arqueiros', type: 'info', yaw: 84, pitch: 11, icon: '🏹',
        period: 'Cenas narrativas',
        title: 'Arqueiros e composição dinâmica',
        text: 'A associação entre arqueiros, presas e linhas de deslocamento cria uma leitura narrativa. A repetição de figuras humanas em diferentes posições dá ritmo à cena e sugere perseguição ou ação coletiva.',
        technical: {
          cronologia: 'Mais recorrente em tradições esquemáticas e narrativas do Holoceno.',
          tecnica: 'Traço linear fino, poucas variações anatômicas e foco no gesto do braço e do instrumento.',
          pigmentos: 'Ocres vermelhos, castanhos e pretos aplicados em camadas simples.',
          suporte: 'Faixas longas da parede, adequadas para sequência visual.'
        },
        analysis: 'A leitura arqueológica considera direção dos corpos, orientação das armas e relação com os animais. Esse conjunto ajuda a interpretar cenas de caça, condução, ritual ou dramatização coletiva.',
        context: 'Painéis narrativos com arqueiros são conhecidos em diferentes tradições rupestres, inclusive na Península Ibérica e em sítios brasileiros com forte presença antropomórfica.',
        quiz: {
          q: 'Por que essas cenas são chamadas de narrativas?',
          options: ['Porque sugerem ação e sequência entre figuras', 'Porque têm legendas escritas ao lado', 'Porque foram feitas em papel'],
          correct: 0,
          explain: 'A sensação de sequência e interação entre humanos e animais é o que torna a composição narrativa.'
        }
      },
      { id: 'back-maos', type: 'nav', yaw: 182, pitch: -7, label: 'Voltar à galeria das mãos', target: 'maos' },
      { id: 'go-simbolos', type: 'nav', yaw: -2, pitch: -6, label: 'Seguir para a galeria simbólica', target: 'simbolos' }
    ]
  },
  simbolos: {
    id: 'simbolos', index: 4, title: 'Galeria Simbólica', subtitle: 'Peixes, sinais e figuras coletivas', image: 'assets/scenes/scene4_simbolos.png',
    hotspots: [
      {
        id: 'estruturas-hut', type: 'info', yaw: -116, pitch: 14, icon: '🛖',
        period: 'Motivos esquemáticos',
        title: 'Estruturas geométricas e fileiras humanas',
        text: 'Neste painel, estruturas geométricas, linhas verticais e fileiras de antropomorfos constroem uma composição serial. Em arte rupestre, tais conjuntos podem indicar organização de grupo, ritualidade, cercamento ou representação esquemática de espaço.',
        technical: {
          cronologia: 'Mais frequentes em repertórios esquemáticos associados ao Holoceno.',
          tecnica: 'Traço simples repetido, silhuetas pequenas e composição seriada.',
          pigmentos: 'Ocre vermelho escuro e marrom aplicado em camada fina.',
          suporte: 'Paredes relativamente lisas, boas para leitura frontal.'
        },
        analysis: 'A arqueologia privilegia descrições formais — fileiras, repetição, simetria, proximidade entre sinais — antes de propor significados. Essa prudência evita traduções automáticas do motivo para conceitos modernos.',
        context: 'Conjuntos com antropomorfos em série aparecem em muitos abrigos do Brasil e de outras regiões, frequentemente combinados com sinais geométricos.',
        quiz: {
          q: 'Qual abordagem é mais adequada diante de fileiras de figuras humanas?',
          options: ['Descrever forma e contexto antes de concluir o significado', 'Assumir automaticamente que é uma escola', 'Interpretar como texto escrito sem evidências'],
          correct: 0,
          explain: 'O procedimento técnico é descrever formalmente o painel e só então comparar com outros contextos.'
        }
      },
      {
        id: 'peixes-aves', type: 'info', yaw: 78, pitch: 10, icon: '🐟',
        period: 'Motivos ambientais',
        title: 'Peixes, aves e fauna de ambiente',
        text: 'A presença de peixes e aves amplia o repertório para além da grande caça terrestre. Esses motivos podem registrar ecossistemas locais, deslocamentos sazonais ou interesses simbólicos ligados à água e ao voo.',
        technical: {
          cronologia: 'Comuns em contextos em que rios, lagoas ou zonas úmidas têm relevância cultural.',
          tecnica: 'Silhueta chapada ou contorno simples, com repetição seriada para reforço temático.',
          pigmentos: 'Ocres, carvão e eventualmente pigmentos escuros mais densos.',
          suporte: 'Faixas horizontais e áreas laterais do painel.'
        },
        analysis: 'Em estudos rupestres, a diversidade faunística ajuda a discutir paisagem, economia e classificação simbólica do mundo natural. Nem sempre a representação implica uso alimentar direto.',
        context: 'Motivos ictiomorfos e ornitomorfos estão documentados em vários sítios rupestres, inclusive em painéis brasileiros de tradição esquemática.',
        quiz: {
          q: 'O que a presença de peixes pode sugerir em um painel rupestre?',
          options: ['Relação com ambientes aquáticos e com a paisagem local', 'Uso obrigatório de tinta azul industrial', 'Representação de máquinas modernas'],
          correct: 0,
          explain: 'Peixes e aves costumam ampliar a leitura ambiental e simbólica do repertório visual.'
        }
      },
      {
        id: 'simbolos-solares', type: 'info', yaw: 18, pitch: 14, icon: '☀️',
        period: 'Sinais não figurativos',
        title: 'Sinais circulares, espirais e motivos solares',
        text: 'Motivos circulares, alvos, espirais e signos radiados compõem uma categoria de arte não figurativa. Eles não representam diretamente um animal ou pessoa, mas estruturam visualmente o painel e podem condensar significados complexos.',
        technical: {
          cronologia: 'Distribuição ampla em diferentes tradições rupestres.',
          tecnica: 'Traço contínuo, círculos concêntricos e irradiações lineares.',
          pigmentos: 'Ocres avermelhados e castanhos de forte contraste.',
          suporte: 'Áreas centrais e superiores, onde o sinal ganha visibilidade.'
        },
        analysis: 'A interpretação de sinais abstratos é um dos temas mais debatidos da arqueologia rupestre. Sem contexto adicional, o método técnico prioriza descrição, comparação e associação espacial com outros motivos do painel.',
        context: 'Sinais abstratos ocorrem tanto em cavernas paleolíticas europeias quanto em numerosos conjuntos rupestres sul-americanos.',
        quiz: {
          q: 'Como os arqueólogos tratam sinais abstratos sem significado explícito?',
          options: ['Descrevem, comparam e analisam sua associação com outros motivos', 'Traduzem diretamente como alfabeto moderno', 'Ignoram porque não são importantes'],
          correct: 0,
          explain: 'A análise técnica depende de descrição formal, comparação regional e estudo do contexto do painel.'
        }
      },
      { id: 'back-caca', type: 'nav', yaw: 180, pitch: -6, label: 'Voltar à galeria de caça', target: 'caca' }
    ]
  }
};

const sceneOrder = ['entrada','maos','caca','simbolos'];
const totalEvidence = sceneOrder.reduce((sum, id) => sum + scenes[id].hotspots.filter(h => h.type === 'info').length, 0);

const $ = s => document.querySelector(s);
const intro = $('#intro'), exp = $('#experience'), viewer = $('#viewer'), track = $('#panoramaTrack'), layer = $('#hotspotLayer'), panel = $('#panel');
const copies = [...document.querySelectorAll('.pano-copy')];

let yaw = 0, pitch = 0, hfov = 96, drag = false, lastX = 0, lastY = 0, mission = false, current = null, torch = false, soundOn = false, audioCtx = null, ambientNodes = [], deferredPrompt = null;
let panoW = 0, panoH = 0, pxPerDeg = 0, centerBaseX = 0, centerBaseY = 0;
let currentSceneId = 'entrada';
const found = new Set();
const quizPassed = new Set();

function normAng(a){ return ((a+180)%360+360)%360-180; }
function clamp(v,a,b){ return Math.max(a, Math.min(b,v)); }
function currentScene(){ return scenes[currentSceneId]; }
function sceneIndex(){ return sceneOrder.indexOf(currentSceneId); }
function getMethodText(h){
  if(h.id.includes('maos')) return 'A análise combina documentação fotogramétrica, observação da sobreposição de pigmentos, comparação de tamanhos das mãos, estudo da distribuição espacial e, quando possível, caracterização mineralógica dos pigmentos. A posição da figura em relação a fissuras, volumes e outras pinturas também é registrada, porque o painel deve ser entendido como uma composição arqueológica e não como imagens isoladas.';
  if(h.period && h.period.includes('Paleolítico')) return 'O estudo técnico considera morfologia do animal, sequência de traços, sobreposições, escolha da superfície, relação com o relevo da rocha e composição do painel. Métodos de arqueometria podem identificar componentes minerais e orgânicos dos pigmentos; datações diretas são possíveis apenas em situações específicas, por isso a cronologia costuma combinar evidências estratigráficas, estilísticas e laboratoriais.';
  if(h.title.toLowerCase().includes('arqueir') || h.title.toLowerCase().includes('caçador')) return 'Os arqueólogos registram direção do movimento, postura corporal, instrumentos representados, associação entre personagens e animais, sobreposição de figuras e repetição de gestos. A leitura procura distinguir uma possível cena narrativa de simples justaposição de motivos, sempre comparando o conjunto com outros painéis do mesmo sítio e da mesma tradição gráfica.';
  if(h.title.toLowerCase().includes('sinal') || h.title.toLowerCase().includes('estrutura') || h.title.toLowerCase().includes('espiral')) return 'Sinais não figurativos são catalogados por forma, dimensão, orientação, técnica, cor e associação espacial. A interpretação parte da descrição formal e da comparação regional. Sem evidências complementares, não é metodologicamente seguro atribuir um significado preciso, como “sol”, “casa”, “mapa” ou “escrita”.';
  return 'A documentação arqueológica registra posição, dimensões, pigmento, técnica, estado de conservação, relação com o suporte rochoso e associação com outras figuras. Fotografias calibradas, modelos 3D e análises físico-químicas podem complementar o estudo, mas a interpretação final depende do contexto arqueológico do sítio.';
}
function getCautionText(h){
  return 'Esta reconstrução é didática e reúne motivos inspirados em diferentes tradições rupestres. Ela não representa uma única caverna real nem deve ser usada para afirmar que todos esses motivos coexistiram no mesmo lugar ou período. Em arqueologia, cronologia, significado e função social são inferidos a partir do contexto do sítio, da estratigrafia, das associações e de análises especializadas.';
}
function saveState(){
  const data = { found:[...found], quizPassed:[...quizPassed], scene:currentSceneId, mission, yaw, pitch, hfov };
  localStorage.setItem('caverna360_state_v2', JSON.stringify(data));
}
function loadState(){
  try{
    const data = JSON.parse(localStorage.getItem('caverna360_state_v2') || '{}');
    (data.found||[]).forEach(id=>found.add(id));
    (data.quizPassed||[]).forEach(id=>quizPassed.add(id));
    if(data.scene && scenes[data.scene]) currentSceneId = data.scene;
    if(typeof data.mission === 'boolean') mission = data.mission;
    if(typeof data.yaw === 'number') yaw = data.yaw;
    if(typeof data.pitch === 'number') pitch = data.pitch;
    if(typeof data.hfov === 'number') hfov = data.hfov;
  }catch(_){ }
}

function layoutPanorama(){
  const w = viewer.clientWidth, h = viewer.clientHeight;
  pxPerDeg = w/hfov;
  panoW = pxPerDeg*360;
  panoH = panoW/2;
  centerBaseX = w/2 - panoW/2;
  centerBaseY = h/2 - panoH/2;
  copies.forEach((img,i)=>{ img.style.width = panoW+'px'; img.style.height = panoH+'px'; img.style.left = ((i-1)*panoW)+'px'; img.style.top='0px'; });
  render();
}
function render(){
  if(!panoW) return;
  const x = centerBaseX - (yaw/360)*panoW;
  const y = centerBaseY + (pitch/180)*panoH;
  track.style.width = panoW+'px'; track.style.height = panoH+'px';
  track.style.transform = `translate3d(${x}px,${y}px,0)`;
  updateHotspots(); updateCompass();
}
function project(h){
  const dy = normAng(h.yaw - yaw);
  const vfov = viewer.clientHeight/pxPerDeg;
  if(Math.abs(dy) > hfov*.58 || Math.abs(h.pitch-pitch) > vfov*.67) return null;
  return { x: viewer.clientWidth/2 + dy*pxPerDeg, y: viewer.clientHeight/2 - (h.pitch-pitch)*pxPerDeg };
}

function makeSceneStrip(){
  const strip = $('#sceneStrip');
  strip.innerHTML = sceneOrder.map(id => {
    const s = scenes[id];
    return `<button class="scene-pill ${id===currentSceneId?'active':''}" data-scene="${id}">${s.index}. ${s.title}</button>`;
  }).join('');
  strip.querySelectorAll('.scene-pill').forEach(btn => btn.onclick = ()=>{ const dest=sceneOrder.indexOf(btn.dataset.scene); switchScene(btn.dataset.scene, true, dest < sceneIndex() ? 'back' : 'forward'); });
}

function makeHotspots(){
  layer.innerHTML = '';
  currentScene().hotspots.forEach(h => {
    const el = document.createElement('div');
    el.className = 'hotspot-wrap ' + (h.type === 'nav' ? 'nav' : 'info');
    el.dataset.id = h.id;
    el.innerHTML = `<button class="hotspot" aria-label="${h.type==='nav'?h.label:h.title}"></button><div class="hotspot-label">${h.type==='nav'?h.label:h.title}</div>`;
    el.querySelector('button').addEventListener('click', e => {
      e.stopPropagation();
      if(h.type === 'nav') { const dest=sceneOrder.indexOf(h.target); switchScene(h.target, true, dest < sceneIndex() ? 'back' : 'forward'); }
      else openHotspot(h);
    });
    layer.appendChild(el);
  });
  updateHotspots();
}
function updateHotspots(){
  document.querySelectorAll('.hotspot-wrap').forEach(el => {
    const h = currentScene().hotspots.find(x => x.id === el.dataset.id);
    if(!h) return;
    const p = project(h);
    if(!p){ el.style.opacity='0'; el.style.pointerEvents='none'; }
    else{ el.style.opacity='1'; el.style.pointerEvents='auto'; el.style.left = p.x+'px'; el.style.top = p.y+'px'; }
    el.classList.toggle('found', found.has(el.dataset.id));
  });
}
function updateCompass(){ $('#compassNeedle').style.transform = `rotate(${-yaw}deg)`; $('#heading').textContent = Math.round(((yaw%360)+360)%360)+'°'; }

function pointerPos(e){ const r = viewer.getBoundingClientRect(); return {x:e.clientX-r.left,y:e.clientY-r.top,r}; }
viewer.addEventListener('pointerdown', e => { drag = true; lastX = e.clientX; lastY = e.clientY; viewer.setPointerCapture?.(e.pointerId); viewer.classList.add('dragging'); $('#dragHint').style.opacity = 0; });
viewer.addEventListener('pointermove', e => {
  const p = pointerPos(e);
  $('#torch').style.setProperty('--tx',(p.x/p.r.width*100)+'%');
  $('#torch').style.setProperty('--ty',(p.y/p.r.height*100)+'%');
  if(!drag) return;
  const dx = e.clientX-lastX, dy = e.clientY-lastY;
  yaw = normAng(yaw - dx/pxPerDeg);
  pitch = clamp(pitch + dy/pxPerDeg, -58, 58);
  lastX = e.clientX; lastY = e.clientY;
  render(); saveState();
});
['pointerup','pointercancel','pointerleave'].forEach(ev => viewer.addEventListener(ev,()=>{ drag = false; viewer.classList.remove('dragging'); }));
viewer.addEventListener('wheel', e => { e.preventDefault(); hfov = clamp(hfov + e.deltaY*.035, 58, 118); layoutPanorama(); saveState(); }, {passive:false});

function openHotspot(h){
  current = h;
  $('#panelIcon').textContent = h.icon;
  $('#panelPeriod').textContent = h.period;
  $('#panelTitle').textContent = h.title;
  $('#panelText').textContent = h.text;
  $('#panelAnalysis').textContent = h.analysis;
  $('#panelContext').innerHTML = `<b>Referência:</b> ${h.context}`;
  $('#panelMethod').textContent = getMethodText(h);
  $('#panelCaution').textContent = getCautionText(h);
  $('#techGrid').innerHTML = Object.entries(h.technical).map(([k,v]) => `<div class="tech-card"><small>${k}</small>${v}</div>`).join('');
  renderMiniQuiz(h);
  updateMarkButton();
  panel.classList.add('open');
  panel.setAttribute('aria-hidden','false');
}
function updateMarkButton(){
  const btn = $('#markFound');
  const alreadyFound = found.has(current.id);
  const passed = quizPassed.has(current.id);
  btn.disabled = !alreadyFound && !passed;
  if(alreadyFound) btn.textContent = '✓ Evidência já registrada';
  else if(passed) btn.textContent = '✓ Registrar descoberta';
  else btn.textContent = 'Responda ao teste para registrar';
}
function renderMiniQuiz(h){
  const area = $('#quizArea');
  const alreadyFound = found.has(h.id);
  const alreadyPassed = quizPassed.has(h.id);
  area.innerHTML = `<div class="quiz-question"><b>${h.quiz.q}</b></div><div class="quiz-options">${h.quiz.options.map((op,i)=>`<button data-i="${i}">${op}</button>`).join('')}</div><div class="result">${alreadyFound?'Teste concluído e evidência registrada.':alreadyPassed?'Teste concluído. Agora registre a descoberta.':'Escolha uma resposta.'}</div>`;
  const result = area.querySelector('.result');
  area.querySelectorAll('button').forEach(btn => {
    if(alreadyPassed || alreadyFound) btn.disabled = true;
    btn.onclick = () => {
      const i = +btn.dataset.i;
      const all = area.querySelectorAll('button');
      all.forEach(b => b.disabled = true);
      if(i === h.quiz.correct){
        btn.classList.add('correct');
        result.innerHTML = `<b>Correto.</b> ${h.quiz.explain}`;
        quizPassed.add(h.id);
        toast('Resposta correta! Você pode registrar a evidência.');
      }else{
        btn.classList.add('wrong');
        all[h.quiz.correct].classList.add('correct');
        result.innerHTML = `<b>Quase lá.</b> ${h.quiz.explain}`;
      }
      updateMarkButton(); saveState();
    };
  });
}
$('#markFound').onclick = () => {
  if(!current || !quizPassed.has(current.id) || found.has(current.id)) return;
  found.add(current.id);
  updateHotspots(); updateProgress(); updateMarkButton(); saveState();
  toast('+100 pontos • Evidência registrada');
  if(found.size === totalEvidence) setTimeout(showCelebration, 350);
};
$('#closePanel').onclick = () => { panel.classList.remove('open'); panel.setAttribute('aria-hidden','true'); };

function updateProgress(){
  $('#progressFill').style.width = (found.size/totalEvidence*100)+'%';
  $('#progressText').textContent = `${found.size}/${totalEvidence}`;
}
function toast(t){ const e = $('#toast'); e.textContent=t; e.classList.add('show'); setTimeout(()=>e.classList.remove('show'),1800); }
function modal(html){ $('#modalContent').innerHTML=html; $('#modal').classList.remove('hidden'); }
$('#closeModal').onclick = ()=>$('#modal').classList.add('hidden');
$('#btnEnter').onclick = ()=>{ intro.classList.remove('show'); exp.classList.add('show'); setTimeout(initExperience,0); };
$('#btnAbout').onclick = ()=> modal(`<h2>Como funciona</h2><p>Esta versão foi preparada para abrir localmente, funcionar no GitHub Pages e ser instalada como PWA.</p><ul><li><b>Arraste</b> para olhar em 360°.</li><li><b>Clique nos pontos dourados</b> para abrir descrições técnicas dos painéis rupestres.</li><li><b>Responda ao mini teste</b> e depois registre a evidência.</li><li><b>Clique nos pontos azuis</b> para caminhar entre as galerias da caverna.</li><li><b>Missão:</b> encontrar e registrar as 12 evidências.</li></ul><p><b>Observação:</b> os cenários são reconstruções visuais inspiradas em arte rupestre real, com referências didáticas a Lascaux, Altamira, Cueva de las Manos e Serra da Capivara.</p>`);
$('#btnInfo').onclick = ()=>$('#btnAbout').click();
$('#btnReset').onclick = ()=>{ yaw=0; pitch=0; hfov=96; layoutPanorama(); saveState(); toast('Visão central restaurada'); };
$('#btnMission').onclick = ()=>{
  mission = !mission;
  $('#progressBar').classList.toggle('hidden', !mission);
  $('#modeLabel').textContent = mission ? 'Missão das 12 evidências' : 'Exploração livre';
  $('#btnMission').textContent = mission ? '✓ Missão ativa' : '🎯 Missão';
  saveState();
  if(mission) toast('Percorra as 4 galerias e registre as 12 evidências');
};
$('#btnTorch').onclick = ()=>{ torch=!torch; $('#torch').classList.toggle('on',torch); $('#btnTorch').textContent = torch ? '🔥 Tocha ativa' : '🔦 Tocha'; };

function startSound(){
  audioCtx = new (window.AudioContext||window.webkitAudioContext)();
  const master = audioCtx.createGain(); master.gain.value = .04; master.connect(audioCtx.destination);
  const hum = audioCtx.createOscillator(), hg = audioCtx.createGain(); hum.type='sine'; hum.frequency.value=48; hg.gain.value=.16; hum.connect(hg).connect(master); hum.start();
  const b = audioCtx.createBuffer(1,audioCtx.sampleRate*2,audioCtx.sampleRate), d = b.getChannelData(0); for(let i=0;i<d.length;i++) d[i]=(Math.random()*2-1)*.18;
  const n = audioCtx.createBufferSource(), ng = audioCtx.createGain(); n.buffer=b; n.loop=true; ng.gain.value=.18; n.connect(ng).connect(master); n.start();
  ambientNodes=[hum,n,master];
}
function stopSound(){ ambientNodes.forEach(n=>{ try{ n.stop && n.stop(); }catch(_){ } }); audioCtx?.close(); audioCtx=null; ambientNodes=[]; }
$('#btnSound').onclick = ()=>{ soundOn=!soundOn; soundOn?startSound():stopSound(); $('#btnSound').textContent=soundOn?'🔇 Silenciar':'🔊 Som'; };

function setSceneMeta(){
  $('#sceneTitle').textContent = `${currentScene().index}/4 • ${currentScene().title}`;
  makeSceneStrip();
}
function setAllImages(src){ copies.forEach(img => img.src = src); }
function preload(src){ return new Promise((resolve,reject)=>{ const img = new Image(); img.onload=()=>resolve(src); img.onerror=reject; img.src=src; }); }
async function switchScene(id, userTriggered = false, direction = 'forward'){
  if(!scenes[id] || id===currentSceneId) return;
  document.body.classList.add('walking');
  $('#transitionText').textContent = direction === 'back' ? 'Retornando pela passagem...' : 'Caminhando para ' + scenes[id].title.toLowerCase() + '...';
  $('#transition').classList.remove('hidden');
  if(direction === 'forward'){ hfov = clamp(hfov - 12, 58, 118); }
  else { hfov = clamp(hfov + 8, 58, 118); }
  layoutPanorama();
  try{
    await new Promise(r=>setTimeout(r,260));
    await preload(scenes[id].image);
    currentSceneId = id;
    setAllImages(scenes[id].image);
    setSceneMeta();
    makeHotspots();
    yaw = 0;
    pitch = 0;
    hfov = 96;
    layoutPanorama();
    panel.classList.remove('open');
    saveState();
    toast((direction === 'back' ? 'Você retornou para ' : 'Você avançou para ') + scenes[id].title);
  }catch(_){ $('#imageError').classList.remove('hidden'); }
  setTimeout(()=>{
    $('#transition').classList.add('hidden');
    document.body.classList.remove('walking');
    updateWalkButtons();
  }, 300);
}
function updateWalkButtons(){
  const i = sceneIndex();
  $('#walkBack').disabled = i <= 0;
  $('#walkForward').disabled = i >= sceneOrder.length-1;
  $('#walkForward').innerHTML = i >= sceneOrder.length-1 ? '✓<span>Fim da rota</span>' : '▲<span>Avançar</span>';
}
function walkForward(){
  const i = sceneIndex();
  if(i < sceneOrder.length-1) switchScene(sceneOrder[i+1], true, 'forward');
}
function walkBack(){
  const i = sceneIndex();
  if(i > 0) switchScene(sceneOrder[i-1], true, 'back');
}
function turnBy(delta){ yaw = normAng(yaw + delta); render(); saveState(); }
$('#walkForward').onclick = walkForward;
$('#walkBack').onclick = walkBack;
$('#turnLeft').onclick = ()=>turnBy(-18);
$('#turnRight').onclick = ()=>turnBy(18);
window.addEventListener('keydown', e=>{
  if(!exp.classList.contains('show') || panel.classList.contains('open') || !$('#modal').classList.contains('hidden')) return;
  const k = e.key.toLowerCase();
  if(k==='w' || e.key==='ArrowUp'){ e.preventDefault(); walkForward(); }
  else if(k==='s' || e.key==='ArrowDown'){ e.preventDefault(); walkBack(); }
  else if(k==='a' || e.key==='ArrowLeft'){ e.preventDefault(); turnBy(-12); }
  else if(k==='d' || e.key==='ArrowRight'){ e.preventDefault(); turnBy(12); }
});

function showCelebration(){
  panel.classList.remove('open');
  $('#finalScore').textContent = (found.size*100)+' pontos';
  $('#celebration').classList.remove('hidden');
  confetti();
}
$('#btnExploreAgain').onclick = ()=>$('#celebration').classList.add('hidden');
const finalQuiz = [
  { q:'O que caracteriza tecnicamente um estêncil de mãos?', a:['Pigmento aplicado ao redor da mão', 'Esculpir a mão com cinzel', 'Pintar em tela de tecido'], ok:0 },
  { q:'Qual afirmação é mais adequada sobre grandes animais nas cavernas?', a:['Podem ter valor simbólico e compositivo, não apenas utilitário', 'São sempre calendários modernos', 'Foram feitos com tinta sintética'], ok:0 },
  { q:'Como a arqueologia trata sinais abstratos rupestres?', a:['Por descrição formal e comparação contextual', 'Traduzindo diretamente como alfabeto', 'Ignorando-os'], ok:0 },
  { q:'O que o Neolítico trouxe em várias regiões?', a:['Expansão da agricultura e maior sedentarização', 'Uso de motores elétricos', 'Impressão tipográfica'], ok:0 }
];
$('#btnQuiz').onclick = ()=>{ $('#celebration').classList.add('hidden'); showFinalQuiz(); };
function showFinalQuiz(){
  let score=0, answered=0;
  modal(`<h2>Quiz final da expedição</h2><p>Revise os conteúdos observados ao longo das galerias.</p>` + finalQuiz.map((q,i)=>`<div class="quiz-q"><b>${i+1}. ${q.q}</b><div class="quiz-options">${q.a.map((a,j)=>`<button data-q="${i}" data-a="${j}">${a}</button>`).join('')}</div></div>`).join('') + `<div id="quizResult" class="context"></div>`);
  document.querySelectorAll('.quiz-options button').forEach(b=>b.onclick=()=>{
    const qi=+b.dataset.q, ai=+b.dataset.a, g=b.parentElement;
    if(g.dataset.done) return;
    g.dataset.done=1; answered++;
    if(ai===finalQuiz[qi].ok){ b.classList.add('correct'); score++; }
    else{ b.classList.add('wrong'); g.children[finalQuiz[qi].ok].classList.add('correct'); }
    if(answered===finalQuiz.length){ $('#quizResult').innerHTML = `<b>Resultado: ${score}/${finalQuiz.length}</b><br>${score===finalQuiz.length?'Excelente! Você concluiu a travessia com domínio do conteúdo.':'Bom trabalho! Explore novamente as galerias para reforçar o conteúdo.'}`; }
  });
}
function confetti(){
  const c = $('#confetti'), x = c.getContext('2d');
  c.width = innerWidth; c.height = innerHeight;
  const p = Array.from({length:90},()=>({x:Math.random()*c.width,y:-20-Math.random()*c.height,v:2+Math.random()*5,r:3+Math.random()*6,a:Math.random()*6.28}));
  let f=0; (function run(){ x.clearRect(0,0,c.width,c.height); p.forEach(o=>{ o.y+=o.v; o.x+=Math.sin(o.a+f*.03)*1.2; x.save(); x.translate(o.x,o.y); x.rotate(o.a+f*.06); x.fillStyle=`hsl(${25+Math.random()*35} 80% 60%)`; x.fillRect(-o.r,-o.r/2,o.r*2,o.r); x.restore(); }); if(++f<220) requestAnimationFrame(run); })();
}

// Diagnostics / PWA
let loaded = 0;
copies.forEach(img=>{
  img.addEventListener('load', ()=>{ loaded++; if(loaded>=1){ $('#imageError').classList.add('hidden'); layoutPanorama(); } });
  img.addEventListener('error', ()=>$('#imageError').classList.remove('hidden'));
});
window.addEventListener('beforeinstallprompt',e=>{ e.preventDefault(); deferredPrompt=e; $('#btnInstall').classList.remove('hidden'); });
$('#btnInstall').onclick = async()=>{ if(!deferredPrompt) return; deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null; $('#btnInstall').classList.add('hidden'); };
if('serviceWorker' in navigator && location.protocol !== 'file:') window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
window.addEventListener('resize', layoutPanorama);

function initExperience(){
  updateProgress();
  if(mission){ $('#progressBar').classList.remove('hidden'); $('#modeLabel').textContent='Missão das 12 evidências'; $('#btnMission').textContent='✓ Missão ativa'; }
  setSceneMeta();
  setAllImages(currentScene().image);
  makeHotspots();
  layoutPanorama();
  updateWalkButtons();
}

loadState();
if(copies[0].complete && copies[0].naturalWidth) layoutPanorama();
