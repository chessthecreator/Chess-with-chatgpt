// effects.js: Brilliant "launch and smash" animation in Game Review.
// The piece shoots up into space, spins, and smashes back onto its square, then a ring and a board shake.
(function(){
  const st=document.createElement('style');
  st.textContent=`
  @keyframes fxLaunch{
    0%{transform:translateY(0) scale(1) rotate(var(--fr,0deg));opacity:1;filter:none}
    28%{transform:translateY(-560%) scale(.3) rotate(calc(var(--fr,0deg) + 220deg));opacity:0;filter:blur(1px)}
    44%{transform:translateY(-560%) scale(.3) rotate(calc(var(--fr,0deg) + 220deg));opacity:0}
    60%{transform:translateY(0) scale(1.3) rotate(var(--fr,0deg));opacity:1;filter:drop-shadow(0 0 10px #7ff6ee)}
    72%{transform:translateY(0) scale(.92) rotate(var(--fr,0deg));filter:drop-shadow(0 0 4px #7ff6ee)}
    84%{transform:translateY(0) scale(1.04) rotate(var(--fr,0deg))}
    100%{transform:translateY(0) scale(1) rotate(var(--fr,0deg));filter:none}
  }
  .fxLaunch{position:relative;z-index:7;animation:fxLaunch .85s cubic-bezier(.55,0,.5,1) both}
  @keyframes fxRing{0%{transform:scale(.3);opacity:.9}100%{transform:scale(2.4);opacity:0}}
  .fxRing{position:absolute;left:50%;top:50%;width:80%;height:80%;margin:-40% 0 0 -40%;border-radius:50%;
    border:3px solid #9ffff6;pointer-events:none;z-index:6;animation:fxRing .5s ease-out .5s both}
  @keyframes fxSpace{0%{opacity:0}30%{opacity:.85}100%{opacity:0}}
  .fxSpace{position:absolute;left:-150%;top:-150%;width:400%;height:400%;pointer-events:none;z-index:4;border-radius:50%;
    background:radial-gradient(circle,#c9b8ff66 0,#2a1a66aa 35%,transparent 65%);animation:fxSpace .9s ease-out both}
  @keyframes fxQuake{0%,100%{transform:translate(0,0)}15%{transform:translate(-4px,3px)}30%{transform:translate(4px,-3px)}
    45%{transform:translate(-3px,-2px)}60%{transform:translate(3px,2px)}75%{transform:translate(-2px,1px)}}
  #boardwrap.fxQuake{animation:fxQuake .35s linear .55s}
  `;
  document.head.appendChild(st);

  // Wraps the review board drawing: when the marked move is Brilliant, play the animation on that piece.
  const baseDraw=window.drawPos;
  window.drawPos=function(pos,hl,mark){
    baseDraw(pos,hl,mark);
    if(!mark||mark.c!=='brilliant')return;
    const board=document.getElementById('board');
    const sqEl=board&&board.children[mark.sq];
    if(!sqEl)return;
    const pc=sqEl.querySelector('.pc');
    if(!pc)return;
    sqEl.style.setProperty('--fr',board.classList.contains('flip')?'180deg':'0deg');
    pc.classList.add('fxLaunch');
    const space=document.createElement('div');space.className='fxSpace';sqEl.appendChild(space);
    const ring=document.createElement('div');ring.className='fxRing';sqEl.appendChild(ring);
    setTimeout(()=>{space.remove();ring.remove()},1400);
    const wrap=document.getElementById('boardwrap');
    if(wrap){
      wrap.classList.add('fxQuake');
      setTimeout(()=>wrap.classList.remove('fxQuake'),1000);
    }
  };
})();
