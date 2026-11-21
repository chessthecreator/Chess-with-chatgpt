// effects3.js: 3D Brilliant animation in Game Review.
// The piece flies to the center, spins, streaks through a star tunnel toward the camera and smashes its square.
// The square hops three times ("take take take") and the squares around it ripple.
(function(){
  const st=document.createElement('style');
  st.textContent=`
  .f3Layer{position:fixed;inset:0;z-index:10000;pointer-events:none;perspective:800px;perspective-origin:50% 50%}
  .f3Haze{position:fixed;inset:0;background:radial-gradient(ellipse at 50% 50%,rgba(90,50,170,.35),rgba(8,11,34,.15) 65%,transparent)}
  .f3Star{position:fixed;width:3px;height:3px;border-radius:50%;background:#fff;box-shadow:0 0 6px #cfe8ff;opacity:0}
  .f3Ring{position:absolute;left:50%;top:50%;width:90%;height:90%;margin:-45% 0 0 -45%;border-radius:50%;
    border:3px solid #9ffff6;box-shadow:0 0 14px #9ffff6;pointer-events:none}
  #f3Test{position:fixed;left:8px;bottom:8px;z-index:10001;padding:8px 12px;border-radius:8px;
    background:#7fa650;color:#fff;border:0;font-weight:700}
  `;
  document.head.appendChild(st);

  // Makes one square hop: glow and launch up.
  function hop(el,amp,delay){
    el.animate([
      {transform:'translateY(0) scale(1)',boxShadow:'0 0 0 rgba(127,246,238,0)'},
      {transform:`translateY(${-amp}px) scale(1.15)`,boxShadow:'0 20px 26px rgba(127,246,238,.75)',offset:.17},
      {transform:'translateY(0) scale(.94)',boxShadow:'0 2px 6px rgba(127,246,238,.2)',offset:.3},
      {transform:`translateY(${-amp*0.8}px) scale(1.12)`,boxShadow:'0 16px 22px rgba(127,246,238,.6)',offset:.47},
      {transform:'translateY(0) scale(.95)',boxShadow:'0 2px 6px rgba(127,246,238,.2)',offset:.6},
      {transform:`translateY(${-amp*0.55}px) scale(1.07)`,boxShadow:'0 10px 16px rgba(127,246,238,.5)',offset:.77},
      {transform:'translateY(0) scale(1)',boxShadow:'0 0 0 rgba(127,246,238,0)'}
    ],{duration:900,delay:delay,easing:'ease-out'});
  }

  function f3Brilliant(idx){
    const board=document.getElementById('board');
    const sqEl=board&&board.children[idx];
    const pc=sqEl&&sqEl.querySelector('.pc');
    if(!pc)return;
    const pr=pc.getBoundingClientRect();
    if(pr.width<2)return;

    const W=window.innerWidth,H=window.innerHeight,dur=2000;
    const cx=(W/2)-(pr.left+pr.width/2);   // offset from the square to the screen center
    const cy=(H/2)-(pr.top+pr.height/2);

    // Layer with 3D perspective
    const layer=document.createElement('div');layer.className='f3Layer';
    document.body.appendChild(layer);
    setTimeout(()=>layer.remove(),dur+500);

    // See-through space haze
    const haze=document.createElement('div');haze.className='f3Haze';
    layer.appendChild(haze);
    haze.animate([{opacity:0},{opacity:1,offset:.2},{opacity:.7,offset:.75},{opacity:0}],{duration:dur,easing:'ease-out'});

    // Star tunnel: stars rush toward the camera. fill:both keeps them hidden after they pass.
    for(let i=0;i<60;i++){
      const s=document.createElement('div');s.className='f3Star';
      s.style.left=(Math.random()*W)+'px';s.style.top=(Math.random()*H)+'px';
      layer.appendChild(s);
      s.animate([
        {transform:'translate3d(0,0,-1400px)',opacity:0},
        {opacity:1,offset:.25},
        {transform:'translate3d(0,0,800px)',opacity:0}
      ],{duration:600+Math.random()*400,delay:Math.random()*1300,easing:'linear',fill:'both'});
    }

    // The piece copy, same place and size as the piece on the square
    const clone=pc.cloneNode(true);
    clone.removeAttribute('id');
    Object.assign(clone.style,{position:'fixed',left:pr.left+'px',top:pr.top+'px',
      width:pr.width+'px',height:pr.height+'px',margin:'0',zIndex:10002,
      transformOrigin:'50% 50%',transformStyle:'preserve-3d',
      filter:'drop-shadow(0 0 10px #9ffff6)',pointerEvents:'none',visibility:'visible'});
    layer.appendChild(clone);
    pc.style.visibility='hidden';

    clone.animate([
      {transform:'translate3d(0,0,0) rotateY(0deg) rotateX(0deg) scale(1)',offset:0},
      // Fly to the center and flip
      {transform:`translate3d(${cx}px,${cy}px,0) rotateY(180deg) rotateX(12deg) scale(2)`,offset:.16},
      // Rise toward the camera and spin
      {transform:`translate3d(${cx}px,${cy}px,220px) rotateY(540deg) rotateX(-15deg) scale(2.4)`,offset:.3},
      // Shoot away into the star tunnel
      {transform:`translate3d(${cx*0.3}px,${cy*0.3}px,-1100px) rotateY(900deg) rotateX(40deg) scale(.25)`,offset:.5},
      // Swing around and come back
      {transform:`translate3d(${-cx*0.4}px,${-cy*0.4}px,-600px) rotateY(1260deg) rotateX(-30deg) scale(.5)`,offset:.62},
      // Dive toward the square from close to the camera
      {transform:'translate3d(0,0,260px) rotateY(1440deg) rotateX(0deg) scale(1.7)',offset:.75},
      // Smash onto the square
      {transform:'translate3d(0,0,0) rotateY(1440deg) rotateX(0deg) scale(.92)',offset:.84},
      {transform:'translate3d(0,0,0) rotateY(1440deg) rotateX(0deg) scale(1.04)',offset:.92},
      {transform:'translate3d(0,0,0) rotateY(1440deg) rotateX(0deg) scale(1)',offset:1}
    ],{duration:dur,easing:'linear'});
    setTimeout(()=>{pc.style.visibility='';},dur+50);

    // Impact happens when the piece lands on the square
    const impact=Math.round(dur*.84);
    setTimeout(()=>{
      // The landed square hops three times
      sqEl.style.zIndex='5';
      hop(sqEl,22,0).onfinish=()=>{sqEl.style.zIndex=''};

      // Squares around it ripple after it
      const row=idx>>3,col=idx&7;
      for(let dr=-1;dr<=1;dr++){
        for(let dc=-1;dc<=1;dc++){
          if(!dr&&!dc)continue;
          const r=row+dr,c=col+dc;
          if(r<0||r>7||c<0||c>7)continue;
          const n=board.children[r*8+c];
          if(n)hop(n,9,120+(Math.abs(dr)+Math.abs(dc))*70);
        }
      }

      // Shock ring
      const ring=document.createElement('div');ring.className='f3Ring';
      sqEl.appendChild(ring);
      ring.animate([{transform:'scale(.2)',opacity:1},{transform:'scale(3.2)',opacity:0}],{duration:520,easing:'ease-out'});
      setTimeout(()=>ring.remove(),560);

      // Board shake
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
