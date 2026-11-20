// skins.js: three board skins (Classic, Wood, Night). Adds a "Skin" section to Settings.
// Changes board colors, background, and a soft board shadow. Move hints and highlights are unchanged.
(function(){
  const KEY='chessSkin';
  const SKINS={
    classic:{name:'Classic',l:'#f0d9b5',d:'#b58863',bg:'',piece:'',board:'0 4px 14px rgba(0,0,0,.25)'},
    wood:{name:'Wood',l:'#ecd4a2',d:'#a86f3d',
      bg:'repeating-linear-gradient(90deg,rgba(0,0,0,.07) 0 2px,transparent 2px 14px),linear-gradient(#6b4423,#4a2e18)',
      piece:'sepia(.12) saturate(1.05)',board:'0 6px 18px rgba(0,0,0,.45)',
      dark:{bg:'#2a1c10',fg:'#f2e6d0',mut:'#d6c3a0',card:'rgba(30,20,10,.6)'}},
    night:{name:'Night',l:'#7d8aa0',d:'#4a5568',
      bg:'radial-gradient(circle at 50% 0%,#24304a,#0b1020 70%)',
      piece:'drop-shadow(0 0 1px #fff) drop-shadow(0 0 2px rgba(255,255,255,.5))',board:'0 0 22px rgba(120,160,255,.25)',
      dark:{bg:'#0b1020',fg:'#e6ecff',mut:'#a9b4cf',card:'rgba(10,14,30,.6)'}}
  };
  function apply(k){
    const s=SKINS[k]||SKINS.classic;
    const de=document.documentElement,bd=document.body;
    de.style.setProperty('--l',s.l);
    de.style.setProperty('--d',s.d);
    if(s.dark){
      de.style.setProperty('--bg',s.dark.bg);
      de.style.setProperty('--fg',s.dark.fg);
      de.style.setProperty('--mut',s.dark.mut);
      de.style.setProperty('--card',s.dark.card);
    }else{
      ['--bg','--fg','--mut','--card'].forEach(v=>de.style.removeProperty(v));
    }
    bd.style.background=s.bg;
    let st=document.getElementById('skinStyle');
    if(!st){st=document.createElement('style');st.id='skinStyle';document.head.appendChild(st)}
    st.textContent=`#board{box-shadow:${s.board}}`+(s.piece?`.pc{filter:${s.piece}}`:'');
    document.querySelectorAll('.skinBtn').forEach(b=>{b.style.outline=b.dataset.k===k?'2px solid #7fa650':'none'});
  }
  function save(k){try{localStorage.setItem(KEY,k)}catch(e){}}
  function mount(){
    const panel=document.getElementById('settingsPanel');
    if(!panel)return;
    const h=document.createElement('div');
    h.style.cssText='font-weight:700;margin:8px 0 4px';
    h.textContent='Skin';
    const row=document.createElement('div');
    row.style.cssText='display:flex;flex-wrap:wrap;gap:6px;align-items:center';
    Object.keys(SKINS).forEach(k=>{
      const bt=document.createElement('button');
      bt.className='skinBtn';bt.dataset.k=k;bt.textContent=SKINS[k].name;
      bt.onclick=()=>{save(k);apply(k)};
      row.appendChild(bt);
    });
    panel.appendChild(h);panel.appendChild(row);
  }
  let saved='classic';
  try{saved=localStorage.getItem(KEY)||'classic'}catch(e){}
  mount();
  apply(saved);
})();
