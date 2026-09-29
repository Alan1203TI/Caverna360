const evidence=[
 {id:'maos',yaw:-147,pitch:6,icon:'🖐️',period:'Arte rupestre',title:'Marcas de mãos',text:'Estênceis e impressões de mãos aparecem em diversos sítios rupestres do mundo. Uma técnica comum era apoiar a mão na rocha e soprar pigmento ao redor dela.',facts:['O pigmento podia ser produzido com ocres ricos em óxido de ferro, carvão e outros minerais.','Não sabemos com certeza o significado original dessas marcas.'],context:'Exemplo real: Cueva de las Manos, na Patagônia argentina, conserva numerosos estênceis de mãos produzidos ao longo de milhares de anos.'},
 {id:'cavalos',yaw:-113,pitch:2,icon:'🐎',period:'Paleolítico',title:'Cavalos e grandes animais',text:'Animais são muito frequentes na arte paleolítica europeia. Cavalos, bisões, cervos e outros mamíferos foram representados com técnicas variadas.',facts:['Algumas figuras aproveitam saliências naturais da pedra para criar sensação de volume.','As pinturas não devem ser interpretadas apenas como “desenhos de caça”; seus significados podem ter sido mais amplos.'],context:'Exemplo real: a caverna de Lascaux, na França, é famosa por representações de cavalos, auroques, cervos e outros animais.'},
 {id:'fogo',yaw:-52,pitch:-4,icon:'🔥',period:'Paleolítico',title:'Fogo e vida cotidiana',text:'O domínio do fogo foi essencial para aquecimento, iluminação, proteção e preparo de alimentos.',facts:['Vestígios de fogueiras ajudam arqueólogos a estudar a ocupação de abrigos e cavernas.','Nem toda caverna com arte rupestre foi usada como moradia permanente.'],context:'Na experiência, a iluminação de fogo representa uma reconstrução didática de como ambientes escuros poderiam ser iluminados.'},
 {id:'bisao',yaw:42,pitch:5,icon:'🦬',period:'Paleolítico',title:'Bisões e grandes mamíferos',text:'Bisões são algumas das imagens mais conhecidas da arte rupestre europeia.',facts:['Pigmentos naturais podiam ser aplicados com dedos, instrumentos simples ou por pulverização.','Há painéis com sobreposição de figuras feitas em momentos diferentes.'],context:'Exemplo real: Altamira, na Espanha, possui célebres representações policromas de bisões no teto de uma de suas salas.'},
 {id:'caca',yaw:81,pitch:12,icon:'🏹',period:'Arte rupestre',title:'Cenas com figuras humanas',text:'Figuras humanas aparecem em várias tradições rupestres e podem formar cenas de caça, dança, deslocamento ou outras atividades.',facts:['A interpretação depende do contexto arqueológico e do estilo de cada região.','Nem toda linha próxima a um animal representa necessariamente uma lança.'],context:'Exemplo real brasileiro: a Serra da Capivara, no Piauí, reúne milhares de pinturas rupestres com figuras humanas, animais e cenas coletivas.'},
 {id:'transicao',yaw:137,pitch:5,icon:'🌾',period:'Neolítico',title:'Transformações no Neolítico',text:'Em diferentes regiões, agricultura, domesticação de animais e maior sedentarização alteraram profundamente a organização das comunidades humanas.',facts:['A mudança não ocorreu ao mesmo tempo em todas as partes do mundo.','Paleolítico e Neolítico são grandes categorias arqueológicas; sociedades reais foram muito diversas.'],context:'Este ponto conecta a arte rupestre ao conteúdo sobre mudanças econômicas e sociais associadas ao Neolítico.'}
];

const $=s=>document.querySelector(s);
const intro=$('#intro'),exp=$('#experience'),viewer=$('#viewer'),track=$('#panoramaTrack'),layer=$('#hotspotLayer'),panel=$('#panel');
const copies=[...document.querySelectorAll('.pano-copy')];
let yaw=0,pitch=0,hfov=96,drag=false,lastX=0,lastY=0,mission=false,current=null,torch=false,soundOn=false,audioCtx=null,ambientNodes=[],deferredPrompt=null;
const found=new Set();
let panoW=0,panoH=0,pxPerDeg=0,centerBaseX=0,centerBaseY=0;

function normAng(a){return ((a+180)%360+360)%360-180}
function clamp(v,a,b){return Math.max(a,Math.min(b,v))}

function layoutPanorama(){
  const w=viewer.clientWidth,h=viewer.clientHeight;
  pxPerDeg=w/hfov;
  panoW=pxPerDeg*360;
  panoH=panoW/2;
  centerBaseX=w/2-panoW/2;
  centerBaseY=h/2-panoH/2;
  copies.forEach((img,i)=>{
    img.style.width=panoW+'px';img.style.height=panoH+'px';img.style.left=((i-1)*panoW)+'px';img.style.top='0px';
  });
  render();
}

function render(){
  if(!panoW)return;
  // Yaw 0 = center of the source panorama. Pitch positive = look up.
  const x=centerBaseX - (yaw/360)*panoW;
  const y=centerBaseY + (pitch/180)*panoH;
  track.style.width=panoW+'px';track.style.height=panoH+'px';
  track.style.transform=`translate3d(${x}px,${y}px,0)`;
  updateHotspots();updateCompass();
}

function project(h){
  const dy=normAng(h.yaw-yaw);
  const vfov=viewer.clientHeight/pxPerDeg;
  if(Math.abs(dy)>hfov*.58 || Math.abs(h.pitch-pitch)>vfov*.65)return null;
  return {x:viewer.clientWidth/2 + dy*pxPerDeg, y:viewer.clientHeight/2 - (h.pitch-pitch)*pxPerDeg};
}

function makeHotspots(){
  layer.innerHTML='';
  evidence.forEach(h=>{
    const el=document.createElement('div');el.className='hotspot-wrap';el.dataset.id=h.id;
    el.innerHTML=`<button class="hotspot" aria-label="${h.title}"></button><div class="hotspot-label">${h.title}</div>`;
    el.querySelector('button').addEventListener('click',e=>{e.stopPropagation();openHotspot(h)});
    layer.appendChild(el);
  });
  updateHotspots();
}
function updateHotspots(){
  document.querySelectorAll('.hotspot-wrap').forEach(el=>{
    const h=evidence.find(x=>x.id===el.dataset.id),p=project(h);
    if(!p){el.style.opacity='0';el.style.pointerEvents='none'}else{el.style.opacity='1';el.style.pointerEvents='auto';el.style.left=p.x+'px';el.style.top=p.y+'px'}
    el.classList.toggle('found',found.has(el.dataset.id));
  });
}
function updateCompass(){$('#compassNeedle').style.transform=`rotate(${-yaw}deg)`;$('#heading').textContent=Math.round(((yaw%360)+360)%360)+'°'}

function pointerPos(e){const r=viewer.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top,r}}
viewer.addEventListener('pointerdown',e=>{drag=true;lastX=e.clientX;lastY=e.clientY;viewer.setPointerCapture?.(e.pointerId);viewer.classList.add('dragging');$('#dragHint').style.opacity=0});
viewer.addEventListener('pointermove',e=>{const p=pointerPos(e);$('#torch').style.setProperty('--tx',(p.x/p.r.width*100)+'%');$('#torch').style.setProperty('--ty',(p.y/p.r.height*100)+'%');if(!drag)return;const dx=e.clientX-lastX,dy=e.clientY-lastY;yaw=normAng(yaw-dx/pxPerDeg);pitch=clamp(pitch+dy/pxPerDeg,-58,58);lastX=e.clientX;lastY=e.clientY;render()});
['pointerup','pointercancel','pointerleave'].forEach(ev=>viewer.addEventListener(ev,()=>{drag=false;viewer.classList.remove('dragging')}));
viewer.addEventListener('wheel',e=>{e.preventDefault();hfov=clamp(hfov+e.deltaY*.035,58,118);layoutPanorama()},{passive:false});

function openHotspot(h){current=h;$('#panelIcon').textContent=h.icon;$('#panelPeriod').textContent=h.period;$('#panelTitle').textContent=h.title;$('#panelText').textContent=h.text;$('#panelFacts').innerHTML=h.facts.map(x=>`<div class="fact">${x}</div>`).join('');$('#panelContext').innerHTML=`<b>Exemplo arqueológico real</b><br>${h.context}`;$('#markFound').textContent=found.has(h.id)?'✓ Evidência registrada':'✓ Registrar descoberta';panel.classList.add('open');panel.setAttribute('aria-hidden','false')}
$('#closePanel').onclick=()=>{panel.classList.remove('open');panel.setAttribute('aria-hidden','true')};
$('#markFound').onclick=()=>{if(!current)return;if(!found.has(current.id)){found.add(current.id);toast('+100 pontos • Evidência registrada');updateProgress();updateHotspots()}$('#markFound').textContent='✓ Evidência registrada';if(mission&&found.size===evidence.length)setTimeout(showCelebration,300)};
function updateProgress(){$('#progressFill').style.width=(found.size/evidence.length*100)+'%';$('#progressText').textContent=`${found.size}/${evidence.length}`}
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('show');setTimeout(()=>e.classList.remove('show'),1800)}
function modal(html){$('#modalContent').innerHTML=html;$('#modal').classList.remove('hidden')}
$('#closeModal').onclick=()=>$('#modal').classList.add('hidden');
$('#btnEnter').onclick=()=>{intro.classList.remove('show');exp.classList.add('show');setTimeout(layoutPanorama,0)};
$('#btnAbout').onclick=()=>modal(`<h2>Experiência 360°</h2><p>Arraste a imagem para olhar em todas as direções. A roda do mouse controla o zoom; no celular, arraste com o dedo.</p><ul><li><b>Pontos luminosos:</b> abrem informações sobre arte rupestre e Pré-História.</li><li><b>Missão:</b> registre as 6 evidências.</li><li><b>Tocha:</b> escurece o ambiente e destaca a área ao redor do cursor.</li><li><b>PWA:</b> quando publicada por HTTPS, pode ser instalada no celular e funcionar offline.</li></ul><p><b>Observação:</b> o cenário panorâmico é uma reconstrução visual. Os textos citam exemplos arqueológicos reais, como Lascaux, Altamira, Cueva de las Manos e Serra da Capivara.</p>`);
$('#btnInfo').onclick=()=>$('#btnAbout').click();
$('#btnReset').onclick=()=>{yaw=0;pitch=0;hfov=96;layoutPanorama();toast('Visão central restaurada')};
$('#btnMission').onclick=()=>{mission=!mission;$('#progressBar').classList.toggle('hidden',!mission);$('#modeLabel').textContent=mission?'Missão das 6 evidências':'Exploração livre';$('#btnMission').textContent=mission?'✓ Missão ativa':'🎯 Missão';if(mission)toast('Encontre os 6 pontos luminosos pela caverna')};
$('#btnTorch').onclick=()=>{torch=!torch;$('#torch').classList.toggle('on',torch);$('#btnTorch').textContent=torch?'🔥 Tocha ativa':'🔦 Tocha'};

function startSound(){audioCtx=new (window.AudioContext||window.webkitAudioContext)();const master=audioCtx.createGain();master.gain.value=.045;master.connect(audioCtx.destination);const hum=audioCtx.createOscillator(),hg=audioCtx.createGain();hum.type='sine';hum.frequency.value=48;hg.gain.value=.18;hum.connect(hg).connect(master);hum.start();const b=audioCtx.createBuffer(1,audioCtx.sampleRate*2,audioCtx.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*.19;const n=audioCtx.createBufferSource(),ng=audioCtx.createGain();n.buffer=b;n.loop=true;ng.gain.value=.22;n.connect(ng).connect(master);n.start();ambientNodes=[hum,n,master]}
function stopSound(){ambientNodes.forEach(n=>{try{n.stop&&n.stop()}catch(_){}});audioCtx?.close();audioCtx=null;ambientNodes=[]}
$('#btnSound').onclick=()=>{soundOn=!soundOn;soundOn?startSound():stopSound();$('#btnSound').textContent=soundOn?'🔇 Silenciar':'🔊 Som'};

function showCelebration(){panel.classList.remove('open');$('#finalScore').textContent=(found.size*100)+' pontos';$('#celebration').classList.remove('hidden');confetti()}
$('#btnExploreAgain').onclick=()=>$('#celebration').classList.add('hidden');
const quiz=[
 {q:'Qual sítio é conhecido por numerosos estênceis de mãos?',a:['Cueva de las Manos','Pompeia','Machu Picchu'],ok:0},
 {q:'Qual associação é típica do Paleolítico?',a:['Caça, coleta e pedra lascada','Agricultura mecanizada','Indústria'],ok:0},
 {q:'Qual transformação está associada ao Neolítico em várias regiões?',a:['Agricultura, domesticação e maior sedentarização','Máquina a vapor','Escrita alfabética'],ok:0}
];
$('#btnQuiz').onclick=()=>{$('#celebration').classList.add('hidden');showQuiz()};
function showQuiz(){let score=0,answered=0;modal(`<h2>Quiz final</h2><p>Teste o que você descobriu.</p>`+quiz.map((q,i)=>`<div class="quiz-q"><b>${i+1}. ${q.q}</b><div class="quiz-options">${q.a.map((a,j)=>`<button data-q="${i}" data-a="${j}">${a}</button>`).join('')}</div></div>`).join('')+`<div id="quizResult"></div>`);document.querySelectorAll('.quiz-options button').forEach(b=>b.onclick=()=>{const qi=+b.dataset.q,ai=+b.dataset.a,g=b.parentElement;if(g.dataset.done)return;g.dataset.done=1;answered++;if(ai===quiz[qi].ok){b.classList.add('correct');score++}else{b.classList.add('wrong');g.children[quiz[qi].ok].classList.add('correct')}if(answered===quiz.length)$('#quizResult').innerHTML=`<div class="fact"><b>Resultado: ${score}/${quiz.length}</b><br>${score===3?'Excelente! Você concluiu a investigação.':'Explore a caverna novamente e tente outra vez.'}</div>`})}
function confetti(){const c=$('#confetti'),x=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;const p=Array.from({length:90},()=>({x:Math.random()*c.width,y:-20-Math.random()*c.height,v:2+Math.random()*5,r:3+Math.random()*6,a:Math.random()*6.28}));let f=0;(function run(){x.clearRect(0,0,c.width,c.height);p.forEach(o=>{o.y+=o.v;o.x+=Math.sin(o.a+f*.03)*1.2;x.save();x.translate(o.x,o.y);x.rotate(o.a+f*.06);x.fillStyle=`hsl(${25+Math.random()*35} 80% 60%)`;x.fillRect(-o.r,-o.r/2,o.r*2,o.r);x.restore()});if(++f<220)requestAnimationFrame(run)})()}

// Image diagnostics: plain <img> works from file:// and does not use WebGL/canvas texture loading.
let loaded=0;copies.forEach(img=>{img.addEventListener('load',()=>{loaded++;if(loaded===copies.length){$('#imageError').classList.add('hidden');layoutPanorama()}});img.addEventListener('error',()=>$('#imageError').classList.remove('hidden'))});

// PWA install prompt is available only on HTTP/HTTPS. The app itself still works by double-clicking index.html.
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#btnInstall').classList.remove('hidden')});
$('#btnInstall').onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#btnInstall').classList.add('hidden')};
if('serviceWorker' in navigator && location.protocol!=='file:')window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));

window.addEventListener('resize',layoutPanorama);
makeHotspots();
if(copies[0].complete && copies[0].naturalWidth)layoutPanorama();
