// effects3.js: centered 3D Brilliant animation in Game Review.
// The piece flies to the center, spins in 3D, flies up into space, drops back and smashes its tile.
(function(){
  const st=document.createElement('style');
  st.textContent=`
  .f3Layer{position:fixed;inset:0;z-index:10000;pointer-events:none;perspective:900px;perspective-origin:50% 50%}
  .f3Haze{position:fixed;inset:0;background:radial-gradient(ellipse at 50% 50%,rgba(90,50,170,.35),rgba(8,11,34,.15) 65%,transparent)}
  .f3Dot{position:fixed;width:3px;height:3px;border-radius:50%;background:#fff;box-shadow:0 0 6px #fff}
  .f3Ring{position:absolute;left:50%;top:50%;width:90%;height:90%;margin:-45% 0 0 -45%;border-radius:50%;
    border:3px solid #9ffff6;box-shadow:0 0 14px #9ffff6;pointer-events:none}
  #f3Test{position:fixed;left:8px;bottom:8px;z-index:10001;padding:8px 12px;border-radius:8px;
    background:#7fa650;color:#fff;border:0;font-weight:700}
  `;
  document.head.appendChild(st);

  function f3Brilliant(idx){
    const board=document.getElementById('board');
    const sqEl=board&&board.children[idx];
    const pc=sqEl&&sqEl.querySelector('.pc');
    if(!pc)return;
    const pr=pc.getBoundingClientRect();
    if(pr.width<2)return;

    const W=window.innerWidth,H=window.innerHeight,dur=1600;
    const dx=(W/2)-(pr.left+pr.width/2);   // move from the square to the screen center
    const dy=(H/2)-(pr.top+pr.height/2);

    // Layer with 3D perspective
    const layer=document.createElement('div');layer.className='f3Layer';
    document.body.appendChild(layer);
    setTimeout(()=>layer.remove(),dur+800);

    // See-through space haze
    const haze=document.createElement('div');haze.className='f3Haze';
    layer.appendChild(haze);
    haze.animate([{opacity:0},{opacity:1,offset:.2},{opacity:.7,offset:.7},{opacity:0}],{duration:dur,easing:'ease-out'});

    // Stars rushing out from the center
    for(let i=0;i<36;i++){
      const d=document.createElement('div');d.className='f3Dot';
      d.style.left=(W/2)+'px';d.style.top=(H/2)+'px';
      layer.appendChild(d);
      const ang=Math.random()*Math.PI*2,dist=120+Math.random()*Math.max(W,H);
      d.animate([
        {transform:'translate3d(0,0,0) scale(.3)',opacity:0},
        {opacity:1,offset:.3},
        {transform:'translate3d('+Math.cos(ang)*dist+'px,'+Math.sin(ang)*dist+'px,0) scale(2)',opacity:0}
      ],{duration:700,delay:Math.random()*500,easing:'ease-out',fill:'backwards'});
    }

    // The piece copy, same place and size as the piece on the square
    const clone=pc.cloneNode(true);
    clone.removeAttribute('id');
    Object.assign(clone.style,{position:'fixed',left:pr.left+'px',top:pr.top+'px',
      width:pr.width+'px',height:pr.height+'px',margin:'0',zIndex:10002,
      transform:'none',transformOrigin:'50% 50%',transformStyle:'preserve-3d',
      filter:'drop-shadow(0 0 10px #9ffff6)',pointerEvents:'none',visibility:'visible'});
    layer.appendChild(clone);
    pc.style.visibility='hidden';

    clone.animate([
      // Start on the square
      {transform:'translate3d(0,0,0) rotateY(0deg) rotateX(0deg) scale(1)',offset:0},
      // Fly to the center of the screen and flip in 3D
      {transform:`translate3d(${dx}px,${dy}px,0) rotateY(180deg) rotateX(12deg) scale(2.2)`,offset:.18},
      // Move toward the camera and spin
      {transform:`translate3d(${dx}px,${dy}px,260px) rotateY(540deg) rotateX(-18deg) scale(2.6)`,offset:.34},
      // Shoot up into space, tilting away
      {transform:`translate3d(${dx}px,${dy-H*0.9}px,-300px) rotateY(720deg) rotateX(70deg) scale(.4)`,opacity:1,offset:.46},
      {transform:`translate3d(${dx}px,${dy-H}px,-300px) rotateY(720deg) rotateX(70deg) scale(.4)`,opacity:0,offset:.52},
      // Come back down from above the square
      {transform:`translate3d(0,${-H*0.9}px,-300px) rotateY(720deg) rotateX(70deg) scale(.4)`,opacity:0,offset:.54},
      // Smash onto the square, large, then settle
      {transform:'translate3d(0,0,0) rotateY(720deg) rotateX(0deg) scale(1.5)',opacity:1,offset:.6},
      {transform:'translate3d(0,0,0) rotateY(720deg) rotateX(0deg) scale(.9)',opacity:1,offset:.72},
      {transform:'translate3d(0,0,0) rotateY(720deg) rotateX(0deg) scale(1.05)',opacity:1,offset:.84},
      {transform:'translate3d(0,0,0) rotateY(720deg) rotateX(0deg) scale(1)',opacity:1,offset:1}
    ],{duration:dur,easing:'linear'});
    setTimeout(()=>{pc.style.visibility='';},dur+50);

    // Impact: the tile launches up in 3D, a ring spreads, and the board shakes
    const impact=Math.round(dur*.6);
    setTimeout(()=>{
      sqEl.style.zIndex='5';
      sqEl.animate([
        {transform:'perspective(400px) rotateX(0deg) translateY(0) scale(1)',boxShadow:'0 0 0 rgba(127,246,238,0)'},
        {transform:'perspective(400px) rotateX(-25deg) translateY(-16px) scale(1.12)',boxShadow:'0 18px 26px rgba(127,246,238,.75)',offset:.2},
        {transform:'perspective(400px) rotateX(10deg) translateY(2px) scale(.96)',boxShadow:'0 2px 6px rgba(127,246,238,.2)',offset:.4},
        {transform:'perspective(400px) rotateX(-14deg) translateY(-10px) scale(1.07)',boxShadow:'0 12px 20px rgba(127,246,238,.6)',offset:.6},
        {transform:'perspective(400px) rotateX(0deg) translateY(0) scale(1)',boxShadow:'0 0 0 rgba(127,246,238,0)'}
      ],{duration:620,easing:'ease-out'}).onfinish=()=>{sqEl.style.zIndex=''};

      const ring=document.createElement('div');ring.className='f3Ring';
      sqEl.appendChild(ring);
      ring.animate([{transform:'scale(.2)',opacity:1},{transform:'scale(3.2)',opacity:0}],{duration:520,easing:'ease-out'});
      setTimeout(()=>ring.remove(),560);

      board.animate([{transform:'translate(0,0)'},{transform:'translate(-6px,4px)'},{transform:'translate(6px,-4px)'},
        {transform:'translate(-4px,2px)'},{transform:'translate(0,0)'}],{duration:380,easing:'linear'});
    },impact);
  }

  // Runs when the review shows a Brilliant move
  const baseDraw=window.drawPos;
  window.drawPos=function(pos,hl,mark){
    baseDraw(pos,hl,mark);
    if(mark&&mark.c==='brilliant')setTimeout(()=>f3Brilliant(mark.sq),0);
  };

  // Test button: plays the animation on the last moved square, or the first piece found
  const tb=document.createElement('button');
  tb.id='f3Test';tb.textContent='▶ Test 3D';
  tb.onclick=()=>{
    const board=document.getElementById('board');
    if(!board)return;
    const idx=(typeof last!=='undefined'&&last&&last.length)?last[last.length-1]:null;
    if(idx!=null&&board.children[idx]&&board.children[idx].querySelector('.pc')){f3Brilliant(idx);return}
    for(let i=0;i<64;i++){if(board.children[i]&&board.children[i].querySelector('.pc')){f3Brilliant(i);return}}
  };
  document.body.appendChild(tb);
})();
