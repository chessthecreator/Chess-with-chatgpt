// skins.js: three board skins (No skin, Wood, Night).
// A skin only changes the board squares, the board shadow and the piece look. It does not change the background.
// "No skin" removes it and brings back your Board colors setting.
(function(){
  const KEY='chessSkin';
  const SKINS={
    classic:{name:'No skin'},
    wood:{name:'Wood',l:'#ecd4a2',d:'#a86f3d',shadow:'0 6px 16px rgba(0,0,0,.35)',piece:'sepia(.12) saturate(1.05)'},
    night:{name:'Night',l:'#7d8aa0',d:'#4a5568',shadow:'0 0 20px rgba(120,160,255,.35)',piece:'drop-shadow(0 0 1px #fff) drop-shadow(0 0 2px rgba(255,255,255,.5))'}
  };
  const BOARDS={classic:['#f0d9b5','#b58863'],green:['#eeeed2','#769656'],blue:['#dee3e6','#8ca2ad'],walnut:['#e8d5b5','#8b5a2b']};
  function boardSetting(){
    try{const s=JSON.parse(localStorage.getItem('chessSettings')||'{}');return BOARDS[s.board]||BOARDS.classic}
    catch(e){return BOARDS.classic}
  }
  function apply(k){
    const s=SKINS[k]||SKINS.classic;
    const de=document.documentElement;
    let st=document.getElementById('skinStyle');
    if(!st){st=document.createElement('style');st.id='skinStyle';document.head.appendChild(st)}
    if(!s.l){
      const bc=boardSetting();
      de.style.setProperty('--l',bc[0]);
      de.style.setProperty('--d',bc[1]);
      st.textContent='';
    }else{
      de.style.setProperty('--l',s.l);
      de.style.setProperty('--d',s.d);
      st.textContent=`#board{box-shadow:${s.shadow}}.pc{filter:${s.piece}}`;
    }
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
