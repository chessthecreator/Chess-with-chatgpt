// effects.js: Brilliant animation in Game Review.
// The piece flies up through space, drops back down and smashes its tile. The tile launches up three times.
(function(){
  const st=document.createElement('style');
  st.textContent=`
  .fxStars{position:fixed;inset:-50%;z-index:9998;pointer-events:none;
    background:
      radial-gradient(1.5px 1.5px at 20% 30%,#fff,transparent),
      radial-gradient(1px 1px at 70% 60%,#cfe8ff,transparent),
      radial-gradient(2px 2px at 45% 80%,#fff,transparent),
      radial-gradient(1px 1px at 85% 15%,#ffe9b0,transparent),
      radial-gradient(ellipse at 50% 50%,#3b1f7a 0%,#080b22 70%);
    background-size:180px 180px,240px 240px,300px 300px,200px 200px,100% 100%}
  .fxStreak{position:fixed;z-index:9998;pointer-events:none;width:2px;height:110px;
    background:linear-gradient(to bottom,transparent,#9ffff6,transparent)}
  .fxRing{position:absolute;left:50%;top:50%;width:90%;height:90%;margin:-45% 0 0 -45%;border-radius:50%;
    border:3px solid #9ffff6;box-shadow:0 0 14px #9ffff6;pointer-events:none;z-index:8}
  `;
  document.head.appendChild(st);

  function fxBrilliant(idx){
    const board=document.getElementById('board');
    const sqEl=board&&board.children[idx];
    const pc=sqEl&&sqEl.querySelector('.pc');
    if(!pc)return;
    const r=sqEl.getBoundingClientRect();
    const dur=1000;

    // Space background that zooms in and fades out
    const stars=document.createElement('div');stars.className='fxStars';
    document.body.appendChild(stars);
    stars.animate([
      {opacity:0,transform:'scale(1.6)'},
      {opacity:1,transform:'scale(1)',offset:.25},
      {opacity:1,transform:'scale(.9)',offset:.7},
      {opacity:0,transform:'scale(.6)'}
    ],{duration:dur+200,easing:'ease-out'});
    setTimeout(()=>stars.remove(),dur+300);

    // Fast speed streaks
    for(let i=0;i<8;i++){
      const s=document.createElement('div');s.className='fxStreak';
      s.style.left=(Math.random()*100)+'vw';s.style.top='-120px';
      document.body.appendChild(s);
      s.animate([
        {transform:'translateY(0)',opacity:0},
        {opacity:1,offset:.3},
        {transform:'translateY(115vh)',opacity:0}
      ],{duration:420,delay:Math.random()*350,easing:'linear',fill:'backwards'});
      setTimeout(()=>s.remove(),900);
    }

    // The piece flies up off the screen, then drops back down and smashes the tile
    const clone=pc.cloneNode(true);
    Object.assign(clone.style,{position:'fixed',left:r.left+'px',top:r.top+'px',
      width:r.width+'px',height:r.height+'px',margin:'0',zIndex:10000,
      transformOrigin:'50% 50%',pointerEvents:'none'});
    document.body.appendChild(clone);
    pc.style.visibility='hidden';
    clone.animate([
      {transform:'translateY(0) scale(1) rotate(0deg)',opacity:1,offset:0},
      {transform:'translateY(-70vh) scale(.7) rotate(360deg)',opacity:1,offset:.22},
      {transform:'translateY(-120vh) scale(.25) rotate(900deg)',opacity:0,offset:.42},
      {transform:'translateY(-120vh) scale(.25) rotate(900deg)',opacity:0,offset:.5},
      {transform:'translateY(0) scale(1.6) rotate(0deg)',opacity:1,offset:.66},
      {transform:'translateY(0) scale(.85) rotate(0deg)',opacity:1,offset:.76},
      {transform:'translateY(0) scale(1.08) rotate(0deg)',opacity:1,offset:.86},
      {transform:'translateY(0) scale(1) rotate(0deg)',opacity:1,offset:1}
    ],{duration:dur,easing:'linear'});
    setTimeout(()=>{clone.remove();pc.style.visibility='';},dur+50);

    // On impact: the tile launches up three times, a shock ring spreads, and the board shakes
    const impact=Math.round(dur*.66);
    setTimeout(()=>{
      sqEl.style.zIndex='5';
      sqEl.animate([
        {transform:'translateY(0) scale(1)',boxShadow:'0 0 0 rgba(127,246,238,0)'},
        {transform:'translateY(-18px) scale(1.14)',boxShadow:'0 18px 26px rgba(127,246,238,.75)',offset:.2},
        {transform:'translateY(2px) scale(.96)',boxShadow:'0 2px 6px rgba(127,246,238,.2)',offset:.4},
        {transform:'translateY(-12px) scale(1.09)',boxShadow:'0 12px 20px rgba(127,246,238,.6)',offset:.6},
        {transform:'translateY(0) scale(1)',boxShadow:'0 0 0 rgba(127,246,238,0)'}
      ],{duration:560,easing:'ease-out'}).onfinish=()=>{sqEl.style.zIndex=''};

      const ring=document.createElement('div');ring.className='fxRing';
      sqEl.appendChild(ring);
      ring.animate([
        {transform:'scale(.2)',opacity:1},
        {transform:'scale(3.2)',opacity:0}
      ],{duration:520,easing:'ease-out'});
      setTimeout(()=>ring.remove(),560);

      board.animate([
        {translate:'0 0'},{translate:'-6px 4px'},{translate:'6px -4px'},
        {translate:'-4px 2px'},{translate:'0 0'}
      ],{duration:380,easing:'linear'});
    },impact);
  }

  // Runs when the review shows a Brilliant move
  const baseDraw=window.drawPos;
  window.drawPos=function(pos,hl,mark){
    baseDraw(pos,hl,mark);
    if(mark&&mark.c==='brilliant')setTimeout(()=>fxBrilliant(mark.sq),0);
  };
})();
