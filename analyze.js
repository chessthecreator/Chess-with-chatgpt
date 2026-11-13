// analyze.js: Game review labels (Great, Brilliant, Miss, Book) and the opening book.
// Loads after index.html and replaces window.analyzeSF.
(function(){
  let loadingBook=null;

  // ---------- Opening book ----------
  function bookStart(){const b=Array(64).fill(null);const k='RNBQKBNR';for(let c=0;c<8;c++){b[c]='b'+k[c];b[8+c]='bP';b[48+c]='wP';b[56+c]='w'+k[c]}return b}
  function bookResolve(b,side,tok){
    const s=tok.replace(/[+#!?]/g,'');
    const all=gen(b,side);
    const legalOnly=m=>!inChk(app(b,m),side);
    if(/^(O-O-O|0-0-0|O-O|0-0)$/.test(s)){
      const long=s.length>3,kf=b.indexOf(side+'K');
      const m=all.find(m=>m[0]==kf&&Math.abs(m[1]-m[0])==2&&(long?m[1]<m[0]:m[1]>m[0])&&legalOnly(m));
      return m?{m,promo:null}:null;
    }
    const mt=s.replace(/x/g,'').match(/^([KQRBN]?)([a-h]?)([1-8]?)([a-h][1-8])(?:=?([QRBN]))?$/);
    if(!mt)return null;
    const piece=mt[1]||'P',dis=mt[2],rk=mt[3],dest=mt[4],promo=mt[5]||null;
    const c=all.filter(m=>b[m[0]]&&b[m[0]][1]==piece&&sq(m[1])==dest&&(!dis||sq(m[0])[0]==dis)&&(!rk||sq(m[0])[1]==rk)&&legalOnly(m));
    return c.length?{m:c[0],promo}:null;
  }
  function loadBook(){
    if(window.bookSet)return Promise.resolve(window.bookSet);
    if(loadingBook)return loadingBook;
    loadingBook=(async()=>{
      const pgns=[];
      for(const f of ['a','b','c','d','e']){
        try{
          const r=await fetch('book/'+f+'.tsv',{cache:'force-cache'});
          if(!r.ok)continue;
          const lines=(await r.text()).split(/\r?\n/);
          const head=lines[0].split('\t');
          const col=head.indexOf('pgn')>=0?head.indexOf('pgn'):head.length-1;
          for(let k=1;k<lines.length;k++){const cols=lines[k].split('\t');if(cols[col])pgns.push(cols[col])}
        }catch(e){}
      }
      const set=new Set(),cache=new Map();
      cache.set('',{b:bookStart(),side:'w'});
      for(let s=0;s<pgns.length;s+=20){
        for(let k=s;k<Math.min(pgns.length,s+20);k++){
          const toks=pgns[k].replace(/\{[^}]*\}/g,' ').replace(/\([^()]*\)/g,' ').replace(/\$\d+/g,' ')
            .replace(/\d+\s*\.(\.\.)?/g,' ').split(/\s+/).filter(t=>t&&!/^(1-0|0-1|1\/2-1\/2|\*)$/.test(t));
          let prefix='',st=cache.get('');
          for(const tok of toks){
            prefix+=' '+tok;
            let nx=cache.get(prefix);
            if(!nx){
              const mv=bookResolve(st.b,st.side,tok);
              if(!mv)break;
              const nb=app(st.b,mv.m);
              if(mv.promo)nb[mv.m[1]]=st.side+mv.promo.toUpperCase();
              nx={b:nb,side:st.side=='w'?'b':'w'};
              cache.set(prefix,nx);
            }
            st=nx;
            set.add(encodeBoard(st.b)+st.side);
          }
        }
        await new Promise(r=>setTimeout(r,0));
      }
      window.bookSet=set;
      return set;
    })();
    return loadingBook;
  }

  // ---------- Move labels ----------
  // Great: the best move changes the outcome (losing, equal, winning), or is the only good move.
  function greatCat(w){return w<.4?'L':(w>.6?'W':'E')}
  function analyzeFull(H,ev,i,prev){
    const x=H[i];if(x.ill)return{c:'illegal'};
    const pre=x.pre,col=x.col,opp=col=='w'?'b':'w',ms=legal(pre,col);
    if(!ms.some(m=>m[0]==x.f&&m[1]==x.t))return{c:'illegal'};
    const e=ev[i],n=ev[i+1],nx=i+1<H.length?H[i+1].col:opp,me=nx==opp?-n.sc:n.sc;
    const isBest=e.best&&e.best.slice(0,4)==sq(x.f)+sq(x.t);
    const loss=isBest?0:Math.max(0,WP(e.sc)-WP(me));
    const gBef=WP(e.sc),gAft=WP(me);
    let c;
    if(loss==0)c='best';else if(loss<.02)c='excellent';else if(loss<.05)c='good';else if(loss<.1)c='inacc';else if(loss<.2)c='mistake';else c='blunder';

    // Great (Chess.com rule)
    const gOnlyGood=e.sc2!=null&&WP(e.sc2)<.4&&gBef>=.4&&ms.length>1;
    const gTrans=(greatCat(gBef)=='L'&&greatCat(gAft)=='E')||(greatCat(gBef)=='E'&&greatCat(gAft)=='W')||(greatCat(gBef)=='L'&&greatCat(gAft)=='W');
    if(c=='best'&&e.sc<9900&&(gTrans||gOnlyGood))c='great';

    // Brilliant (rule 1): the moved piece is undefended after the move
    if(loss<.02&&e.sc<9900&&me<9900){
      const p=pre[x.f][1],cap=pre[x.t]?VAL[pre[x.t][1]]:0,aft=app(pre,[x.f,x.t]);
      const attacked=gen(aft,opp,1).some(m=>m[1]==x.t);
      const b2=aft.slice();b2[x.t]=opp+aft[x.t][1];
      const defended=gen(b2,col,1).some(m=>m[1]==x.t);
      if(attacked&&!defended&&VAL[p]-cap>=200&&WP(me)>.6)c='brilliant';
    }
    // Brilliant (rule 2): a sacrifice still counts when the piece is defended, if the attacker is cheaper
    if(c!='brilliant'&&loss<.02&&e.sc<9900&&me<9900){
      const p=pre[x.f][1],aft=app(pre,[x.f,x.t]);
      const att=gen(aft,opp,1).filter(m=>m[1]==x.t).map(m=>aft[m[0]]?VAL[aft[m[0]][1]]:null).filter(v=>v!=null);
      if(att.length){
        const lowest=Math.min(...att),cap=pre[x.t]?VAL[pre[x.t][1]]:0;
        if(VAL[p]-cap-lowest>=200&&WP(me)>.6)c='brilliant';
      }
    }

    // Book: the position after this move is in the opening book
    if(window.bookSet&&!['brilliant','mistake','blunder','miss','illegal'].includes(c)){
      const nb=app(pre,[x.f,x.t]);
      if(x.promo)nb[x.t]=col+x.promo.toUpperCase();
      if(window.bookSet.has(encodeBoard(nb)+(col=='w'?'b':'w')))c='book';
    }

    // Miss: the opponent just made a mistake and this move gives the advantage back
    if(prev&&(prev.c=='mistake'||prev.c=='blunder')&&loss>=.1)c='miss';

    return{c,loss,best:e.best&&e.best!='(none)'?[sqi(e.best.slice(0,2)),sqi(e.best.slice(2,4))]:null,ev:nx=='w'?n.sc:-n.sc};
  }

  window.analyzeSF=analyzeFull;

  // Load the book the first time you press Game review.
  const rfPrev=window.reviewFast;
  window.reviewFast=async function(){
    if(!window.bookSet){const box=document.getElementById('rvp');if(box)box.textContent='Loading opening book (one time)…';await loadBook()}
    return rfPrev.apply(this,arguments);
  };
})();
