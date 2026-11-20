// effects.js: capture animation (captured piece flies into space, the capturing piece lands and smashes, board shakes).
// Only plays on captures. Can be turned off in Settings. Brilliant animation is unchanged.
(function(){
  const KEY='chessFx';
  let on=true;
  try{on=localStorage.getItem(KEY)!=='off'}catch(e){}

  const st=document.createElement('style');
  st.textContent=`
  #board{position:relative}
  .fxcosmic{position:absolute;inset:0;z-index:5;pointer-events:none;border-radius:2px;
    background:radial-gradient(circle,#dfe8ff 0 1.5px,transparent 2.5px) 0 0/16px 16px,
      radial-gradient(ellipse at 50% 35%,#3a2a7a 0%,#0a0d24 75%);
    animation:fxCos 1.1s ease-out forwards}
  @keyframes fxCos{0%{opacity:0}20%{opacity:.85}70%{opacity:.6}100%{opacity:0}}
  .fxcap{position:absolute;inset:0;z-index:6;pointer-events:none;display:flex;align-items:center;justify-content:center;
    animation:fxFly .8s ease-in forwards}
  @keyframes fxFly{0%{transform:none;opacity:1}55%{transform:translateY(-150%) rotate(25deg) scale(.6);opacity:.9}100%{transform:translateY(-320%) rotate(70deg) scale(.1);opacity:0}}
  .fxsmash{animation:fxSmash .5s cubic-bezier(.3,1.4,.5,1) .85s both}
  @keyframes fxSmash{0%{transform:translateY(-420%) scale(1.25);opacity:0}60%{transform:translateY(0) scale(.9);opacity:1}100%{transform:none;opacity:1}}
  #board.fxshake{animation:fxShake .32s linear 1.3s}
  #board.flip.fxshake{animation:fxShakeFlip .32s linear 1.3s}
  @keyframes fxShake{0%,100%{transform:translate(0,0)}25%{transform:translate(-3px,2px)}50%{transform:translate(3px,-2px)}75%{transform:translate(-2px,1px)}}
  @keyframes fxShakeFlip{0%,100%{transform:rotate(180deg) translate(0,0)}25%{transform:rotate(180deg) translate(-3px,2px)}50%{transform:rotate(180deg) translate(3px,-2px)}75%{transform:rotate(180deg) translate(-2px,1px)}}
  `;
  document.head.appendChild(st);

  let prev=null;

  // Finds a capture by comparing the board before and after this render.
  function fxCheck(){
    const board=document.getElementById('board');
    if(!board||!prev||!Array.isArray(b))return;
    for(let t=0;t<64;t++){
      const was=prev[t],now=b[t];
      if(was&&now&&was[0]!==now[0]){
        const sqEl=board.children[t];
        if(!sqEl)continue;
        const pc=sqEl.querySelector('.pc');
        if(pc)pc.classList.add('fxsmash');
        const cap=document.createElement('div');
        cap.className='fxcap';
        cap.innerHTML=svg(was);
        sqEl.appendChild(cap);
        setTimeout(()=>cap.remove(),900);
        const cos=document.createElement('div');
        cos.className='fxcosmic';
        board.appendChild(cos);
        setTimeout(()=>cos.remove(),1150);
        board.classList.add('fxshake');
        setTimeout(()=>board.classList.remove('fxshake'),1700);
        break;
      }
    }
  }

  const baseRender=window.render;
  window.render=function(){
    const r=baseRender.apply(this,arguments);
    try{
      if(on&&!rep&&!rvView)fxCheck();
    }catch(e){}
    prev=Array.isArray(b)?Array.from(b):null;
    return r;
  };

  // Settings: on/off button.
  function mount(){
    const panel=document.getElementById('settingsPanel');
    if(!panel)return;
    const h=document.createElement('div');
    h.style.cssText='font-weight:700;margin:8px 0 4px';
    h.textContent='Capture effect';
    const row=document.createElement('div');
    row.style.cssText='display:flex;flex-wrap:wrap;gap:6px;align-items:center';
    const bt=document.createElement('button');
    const paint=()=>{bt.textContent='Capture effect: '+(on?'On':'Off')};
    bt.onclick=()=>{on=!on;try{localStorage.setItem(KEY,on?'on':'off')}catch(e){}paint()};
    paint();
    row.appendChild(bt);
    panel.appendChild(h);panel.appendChild(row);
  }
  mount();
})();
