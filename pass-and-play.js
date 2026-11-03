// Pass & play: two people share this device and take turns. Both sides are human, no engine or ChatGPT.
let pp=0,ppT='w';
const origClick=window.click;
function ppStart(){
  epoch++;b=Array(64).fill(null);const k='RNBQKBNR';
  for(let c=0;c<8;c++){b[c]='b'+k[c];b[8+c]='bP';b[48+c]='wP';b[56+c]='w'+k[c]}
  b.ep=-1;b.cr='KQkq';sel=null;over=false;busy=false;last=[];hist=[];mv=0;ref=0;capB=[];
  pp=1;sfMode=0;ppT='w';
  $('log').innerHTML='';$('rvp').innerHTML='';
  say('Pass & play started. White moves first.');
  render();stat('White to move');
}
window.render=function(){const el=$('board');el.innerHTML='';const side=pp?ppT:'w';
  const lm=sel!=null&&!over?legal(b,side).filter(m=>m[0]==sel).map(m=>m[1]):[];
  for(let i=0;i<64;i++){const d=document.createElement('div');
    d.className='sq '+(((i>>3)+i%8)%2?'dk':'l')+(i==sel?' sel':'')+(lm.includes(i)?' hint':'')+(last.includes(i)?' last':'');
    if(b[i])d.innerHTML=svg(b[i]);d.onclick=()=>click(i);el.appendChild(d)}};
window.click=function(i){
  if(!pp)return origClick(i);
  if(over||busy)return;
  const p=b[i];
  if(sel!=null){
    const m=legal(b,ppT).find(m=>m[0]==sel&&m[1]==i);
    if(m){
      const cap=b[i];
      say(`${ppT=='w'?'White':'Black'}: ${NM[b[sel][1]]} ${sq(sel)}→${sq(i)}${cap?' (takes '+NM[cap[1]]+')':''}`);
      hist.push({pre:cp(b),col:ppT,f:sel,t:i});
      b=app(b,m);last=[i];sel=null;ppT=ppT=='w'?'b':'w';
      render();
      if(!legal(b,ppT).length){over=true;
        stat(inChk(b,ppT)?`Checkmate! ${ppT=='w'?'Black':'White'} wins.`:'Stalemate. Draw.');render();return}
      stat((inChk(b,ppT)?'Check! ':'')+(ppT=='w'?'White':'Black')+' to move');
      return}
  }
  sel=(p&&p[0]==ppT)?i:null;render();
};
// Buttons: the other modes switch pass & play off; New game restarts it when it is on.
const nwOld=$('nw').onclick,m1Old=$('m1').onclick,m2Old=$('m2').onclick;
$('nw').onclick=e=>{if(pp)ppStart();else nwOld(e)};
$('m1').onclick=e=>{pp=0;m1Old(e)};
$('m2').onclick=e=>{pp=0;m2Old(e)};
const ppBtn=document.createElement('button');ppBtn.id='pp';ppBtn.textContent='Pass & play';ppBtn.onclick=ppStart;
$('nw').parentNode.appendChild(ppBtn);
