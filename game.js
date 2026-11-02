const IMG={"wK":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAGFBMVEUAAAD5+fkPDw9dXV2ampoJCQkAAAAAAADJCNqhAAAABnRSTlMB/vX9/pe6DvbKAAABTklEQVR42r2SwU7CQBRFz8zQBYkpLTExokAhcS3IXn4BTfxP/0TiCkNKqy7UBUPLwiLY1kVbisGYuPGtbk7enbz37sC/lxztM+P6bKvVVq3S4eQ3u/zp+dIuoqCQlS3spPt22QqdPXg1Tr69aYw+LyebiMbLzepQ59BZHz0M3yLsY7+bHGiogKy5qHsBgdSa/sZHguNDHKYoMQfuDJCQAiSOk5gANEFgnAYAyjK9bAmNBAuA2FzmA412dvfjXNwi2RQrZw56IPcO9QwSvN4uExtQkFYiGFRZN9qvYHsgAHn+VENYaYCc92d+BulSdwFUK1DT4nR+20UNBsSeNYW8U9Y62Vy1R10e2Q67i8ViaYfWTkZ1VwPxTJllmuJdOaJarZ7MP6KysxOEdYuFti1dwrA91gAXXpmmKiJPs0RF9uWawrbQ2egFBKMJOfpLfQFR9WqlDNrxUgAAAABJRU5ErkJggg==","wQ":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAGFBMVEUBAQEQEBDy8vJgYGCfn58KCgoAAAAAAACLS5BVAAAABnRSTlMC9P3+/mMLCDx2AAABWElEQVR42rXSQW4TQRCF4a+b9A6JbjtZBcUTX4D4BuEGkwWnZGNxAcIJEBeIRohdUGiJpZ0ZFm2PI3Ys6OWvV/XqdRX/8/XpLxAupOWG1IMIafnWblV5/eUE91e1T9+7PoXcpFLP+fteyNLi+tCvFMoFIVOKVIqYwoK6a4I62V/nPjIyoYeKDqEgEy4IpJJFZ3oC8ZIMt3CX2fTOb6Rl84tssbg3FvuuiSOCMKVk0FfpmGid1d2O/hP7dYPThI0ubguebomkYcNwl+VRXs4fMmTxXgidcNVtiexikCfDqLZITamra9fFunulIqB0w7yD+FwbDIvN2HBcPf14bPDu22lb8edBaZFZ44HV50PPF03j+OsIw/JmHBC7569H91YPpndbnLWq8gDWY7sNCDl2hak+mOby5Zt5pN+Px5jhNOflnH08wTLD2M2B6gujWXky4sOBffzHS/8DtoBZ4J9gi8kAAAAASUVORK5CYII=","wB":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAGFBMVEUAAAD19fUUFBRXV1efn58FBQUAAAAAAAD2LhBAAAAABnRSTlMB/vb+/pVE84ZRAAABE0lEQVR42q2SvU7DMBSFPzvNhKoaMSKCCUJlAYp4kSpSn5KJJ+AJAEssVRBVyAJLRIABGBIzOCl2PcJdfH107s85Nvx/JOusmC4jMP36fh5yOSRt9qQjEETcc9Qd7y+jkXlOVC6lPtosl3n9MrVNyNQ13MmwXE4AGh2AukRobBoy3bHn39IxQr0pzNwDW4XUUiPMhnYzNoPSX+1SxYpoDVgfTHopdubJ7LY+ATi4do45ylmlAPsYOut8W+Ez5aQEhC796fMS1sMHpnHl7wHIq/8yQ8/arRQoOt0BOP8IVyoMkDyE2q8Adr1vURhAZPdZ07MFFJW6AZITA1x0qxIBh7rpd9oGRHfLCGw1A7hkMdj6x/gBR2lEmQbxTNQAAAAASUVORK5CYII=","wN":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAGFBMVEUAAAD6+voTExMTExMEBASZmZkAAAAAAAB+DkXSAAAABnRSTlMB/vRhpf0Ck9ziAAABOUlEQVR42r2Su07DQBBFj+0NAgkJJ5QgCBJ1YpECOjY/gPhUPgAJF9QIqCjAMa+O2IGEkKCNTTFexwkdBVusVkd37szsDPz76cyfLgBqHy9dhlkWtONgCdIZJf6wpJ7cn9H7+sr0oCfQEc+ZD6j+3kMlvOUDmI2ersDkWOI2X+aeKv0+igGyyWFsYfC1didSNU1teFIUAaZtPT3HeQNyDYS6gLlU7Z4BXlxAHQKgfcCoAj6L37WULFCZSm+EAbiQiWUjE+qDC/oSoGua8otSvHqdrJIPo9oYoDYeoIDTPKRxj1gbDxRwoeheoRbGsUVf38a0FsbxMWo625BICzyCA143IsLdHQgcGlyYnT/tQHMw93SsjRUWSmBRaKHKS3JSwizmtxK/SopEdjckkW2uXsJ6ZOFN8Lel/gEq8l4vSsX8kgAAAABJRU5ErkJggg==","wR":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAGFBMVEUAAAD4+PhjY2MaGhoGBgYTExMAAAAAAACk/24rAAAABnRSTlMA/v76p2Wb1sHGAAAA0ElEQVR42tWSPw8BMRiHn54TJISe2WIXiUisBjsJH/R2idhFrCZ8gmvNRA3ttZUw2HiHJn36/v8Vfs4EwErft+mUZp5OxRpIAdS5iymuLeaHjBIaJWdm05azi0o8BKXoUBQPeyuhPzwU/dfCKUBH6ZJl/oXR2cFskHtYGWrnuIsLOdgDIAnpgyXvZv8XaMc00s4kdAQXm3JLdj8A1RoNa/XJ0QtnpPPUrRAeNt/7WF0Ay0vc486G631Q8zR2OY30iiOFg5HsIWd1EYFb/s2nfQJalTMEEEUOuwAAAABJRU5ErkJggg==","wP":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAGFBMVEUAAAD8/PwODg50dHT8/PwICAgAAAAAAADgiP2rAAAABnRSTlMA/u3+AaG6J4ytAAAA6klEQVR42s2SsW7CMBRFzzPxjMNYVZAidUfsSAz9AIr43A58Sja24FRqO1TFHew4tkP3Zol9de999kngvzzVVNGHqU2v11P1WJvnfVjLID5Z+ltYq8RsKMR9WhXjTT+N6xlsivHVUeraNGE386/bl4A8XLK4FoA279wZADlkEM7OJBPUPVzhnPrRAtJlzm8HYIv41oJblp0NKJ0fXn32wGVlU2fTA8xVGlfO7+wpiQ8AXWdH5zBWFmNcR9TtKO7ixT0S8XMG1Zk2dpocxV1KCuC1+PYVgHvfBO3nYyS/upKy8M0vMf7259/7C3iiLJa9FvDsAAAAAElFTkSuQmCC","bK":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAGFBMVEUAAAAGBgbs7Oyenp5lZWUREREAAAAAAAA5u/+kAAAABnRSTlMB+v79+l2HUjmhAAABVUlEQVR42rWSwU7CUBBFz3uPBmoNvJJgiCwsxkSJicoPyNbEDXynLvwCv4ElK2wXKppAUQhtaKQuSkuNxOjC2czMzWRy79yBf43uFkxsKYUmnv40KX+9czOp9XdQ5EZzO6l9AbsGaIgwElABwqovrjwgrLYaixAUiPY0MEsjEFYlDKzLARLEu+87HqAqFd8vP4KC9hOMWlGAU3RhxgSFUQqAUd15Fc9AXOoMCkQJP698Hk8A9B2FlNtKeJMczzipnFWS30BCJWn6iXb1ATLr1nFWAwlSAKiLGYDyGqBg1V4GTVGcxubO8cix7hPtD00RVvfc8DR+MZdHg/W95eF4fZ7yML0SxMoRpmk2xmGYgT07CO19jW+euJld0jnoA9B2hxmoysy7wK2W44xwL3XHsDduGxFCA/PIiDLjImFrgF37OvcXIpXv53yPO/m0eQujy83fH/0TMW9efysoadwAAAAASUVORK5CYII=","bQ":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAGFBMVEUBAQEEBATm5uYKCgoQEBCrq6sAAAAAAAAvxKw/AAAABnRSTlMC+v5ipPxyYFdmAAABX0lEQVR42rXSv2sUURTF8c/MGxBBsvOyKVXUKoXRidsKya62Nv6/wop1cCBgYzBTChY74mK2yPBSzA9R01j4qseXe891zz38x7OcT9fQg59XYZN2jq9/TjBs0i7ccfjtKh1+RQ4ZVaJGCbnjKFF3VQ6tOCfEeGo5JytZHihi7Nt96PqxbX0dVd7RUlAFGgJ17pGabhjBtRdyH6sKFZkCRXgnp21QqjsdjlLvM9N7VClVHTm1UwrRO6+MG9V0GVXNkYqcIEPXSzRacnPFyHIlvE8HzeQp5L3Sp+3ODx+f/zu8F7HOwGtwHlKa9jRsjT2fCsGBC1xmpl4s3Q3MMG1jzxVaIPNPw7n8IysHYp3yB5C57NVoRYMo23MJj2h7sm0rkSvHSLEfRAmcKbVq7WQ02j8+3tNdpzyDdBvqDUZO1ccFBbCTNmT0UqaA0wXzEVTQ/9wwNcb3rDiWzBX5xJzPNB3pLrbQ2n5y+PKTP+Pa4T2cLn6M8dMnrjcaMs7djNZxpHLWupgCmKvaS1EnJBC6HYBC/4ZUyo0rfHwxNOB1IRBnwlAs7SLBwlBkC3mZX+tsSOsl0KT6eZ2FHEDNYrwE7CTQfRnmDoKqOBG1s0r+4ocEgf9o7m3XaS9tu4KBRKb4BVI+x9o5JGqU+a7VLE2yPbfRtVJk0DO/sSrr7u+fKFyUxNQNHljmcV1gAwV1BtR/aS+/lO/CrpZN2l3B0uIY7sewgcXYwEo1A9d5QL4VmbHl46AY1h45/AzwJIcr0CLGdxh3+HrGQAeJr88AA==","bB":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAGFBMVEUAAAAEBATw8PAPDw9bW1sQEBAAAAAAAAAcoEOCAAAABnRSTlMB+vyj/lxYEgcCAAAA/klEQVR42q2SPU7DMBSAP9utWosA6QGqVpkYg8QOB0AoCPWeHIEjdGJEYUAqgiqBhSLRmMGxeUlBDODlPX9+/8/wT2dYRFVFllAFXQflA/IdCJTfQXbgAM6CbmLGEax6luYA7oteSccloNcdd/MG4I5W0v0CXA0PHctH0JsxzUZYGnD1rIYilAc0oOdfTfnsKgVVpT7wb23iUn4YyFzAQRcq0WXss4XmtAR0suzA/RNge3gt4eWNj/0ks7fraZB5XyZeriXMvNjeyZitYVtSG/PVi2nv20zAPIsVL0bv1gLOWrt3fgsq1hjObIlimPSmWYnRZZl8ucrlzeR//v6fguo0SAv9dyQAAAAASUVORK5CYII=","bN":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAGFBMVEUAAAABAQHu7u4HBwdfX18MDAwAAAAAAAD+pPStAAAABnRSTlMB/P2m+lwNSZIoAAABLElEQVR42r2SMU/DMBSEv9hJ2zCgpBMdEAEGxILCwMCAlJ+Qn5qBDYk/wEDFBBPuRCsEqRAqRLQOg53EgRGJt1g+3b07+z341wpSiH+CXowX5+1V2DNKUR0HALkNcLBb9JkA5aXtIM0xAjiub7Qjt871+PCqlUviFMBLHvNOPgyN9fNgqBrw9G1QGf2CpZUHSsyauDK3Rl7UxYpfl4aZO1nVme25cMBzVYKAwP2aqTZGaxfUMgfRtvQTAH+tQEK4vzMHXiqAeuvpEwnVgxrB3jwEIDxSCGAcgZhaPxWYnBvgwvUTkAB1QWqA7BoE3AEZUvWYm/fMLzhxwkpA36+QHxaYzOp2cC6xGVywaoCJVzZM3VuY36BuQeefVX9DTCXNMiDNe1TCrfz662J/A6dCSHibxhRDAAAAAElFTkSuQmCC","bR":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAGFBMVEUAAAAEBAScnJwFBQVSUlLKysoAAAAAAAAT3YDFAAAABnRSTlMB/f6r+v4SnEXhAAAAsklEQVR42tWSOw7CMAyGfzcdihjAO1wBtbAjrsCBkbhARblBdkCMlKEJgxsnoAoGFshi+fPbDvBzzwBAdS9a4lHREo9vALLEBpQichGOARBb0bKhnDkAmJXqfhfgca5woZ7uqtACAEmSbc9O+1jdnxvpbJZWF4buTUv/AmVMYqSTvXhuErh+2pxAo55UxiUflE4+HI5Vn4ZzVDZes84uoc86hnZDOU0fTku4YHS++frTPgCdKiCd6JBY5gAAAABJRU5ErkJggg==","bP":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAGFBMVEUAAAAAAAAJCQkDAwNcXFzr6+sAAAAAAABNrEfsAAAABnRSTlMB/F6hDwhSFbJTAAAAq0lEQVR42s2RMQ7CMAxFfwIDWwMXwL0BR0C9AeLCXIOtAytVxMRQpQy1nTgCAWLBS+KnJ8X+Af6unFx8g4ZOFWwj3CCCwAhM+wp6AOhrs6zv4RYAbtwszLx3Y/JBpjvMRzBw+Pj1jYH8+nmlCWSzm5veRtdGQLNj8xgBYCJjrlm5FqYsm6iAqchfYbATertWytDlZXYKU4YXhZThuHySkh8Fhje/6V6G/GM9ALzEGpSm3BYWAAAAAElFTkSuQmCC"};
function svg(p){return `<img src="${IMG[p]}" draggable="false" alt="">`}
const NM={P:'pawn',N:'knight',B:'bishop',R:'rook',Q:'queen',K:'king'};
const sq=i=>'abcdefgh'[i%8]+(8-(i>>3)),rnd=a=>a[Math.random()*a.length|0];
const QUOTES=['"I apologize for the confusion."','"That was a perfectly legal move."','"As an AI language model, I know the rules of chess."','"My bishop was always on that square."','"I have studied millions of games."'];
let b,sel=null,over,busy,last=[],mv=0,capB=[],ref=0;
const $=id=>document.getElementById(id);
function init(){b=Array(64).fill(null);const k='RNBQKBNR';
for(let c=0;c<8;c++){b[c]='b'+k[c];b[8+c]='bP';b[48+c]='wP';b[56+c]='w'+k[c]}
b.ep=-1;b.cr='KQkq';epoch++;hist=[];$('rvp').innerHTML='';sel=null;over=false;busy=false;last=[];mv=0;ref=0;capB=[];$('log').innerHTML='';
opening=rnd(OP);say(`Game start. ChatGPT: "I will play the ${opening.n}."`);render();stat(sfMode?eng+' vs ChatGPT':'Your move (White)');if(sfMode)tmo(sfMove,700)}
function say(t,ill){const p=document.createElement('p');if(ill)p.className='ill';p.textContent=t;$('log').prepend(p)}
function stat(t){$('status').textContent=t}
const N=[[1,2],[2,1],[-1,2],[-2,1],[1,-2],[2,-1],[-1,-2],[-2,-1]],D=[[1,0],[-1,0],[0,1],[0,-1]],X=[[1,1],[1,-1],[-1,1],[-1,-1]];
function gen(b,col,nc){const out=[];
for(let i=0;i<64;i++){const p=b[i];if(!p||p[0]!=col)continue;const t=p[1],r=i>>3,c=i%8;
const add=(rr,cc)=>{if(rr<0||rr>7||cc<0||cc>7)return 0;const j=rr*8+cc,q=b[j];
if(!q){out.push([i,j]);return 1}if(q[0]!=col)out.push([i,j]);return 0};
if(t=='P'){const d=col=='w'?-1:1,st=col=='w'?6:1;
if(r+d>=0&&r+d<8&&!b[(r+d)*8+c]){out.push([i,(r+d)*8+c]);if(r==st&&!b[(r+2*d)*8+c])out.push([i,(r+2*d)*8+c])}
for(const dc of[-1,1]){const rr=r+d,cc=c+dc;if(rr<0||rr>7||cc<0||cc>7)continue;const q=b[rr*8+cc];if(q&&q[0]!=col)out.push([i,rr*8+cc]);else if(!q&&b.ep>=0&&rr*8+cc==b.ep)out.push([i,rr*8+cc])}}
else if(t=='N')N.forEach(([a,e])=>add(r+a,c+e));
else if(t=='K'){D.concat(X).forEach(([a,e])=>add(r+a,c+e));castle(b,col,i,out,nc)}
else{const ds=t=='R'?D:t=='B'?X:D.concat(X);
for(const[a,e]of ds){let rr=r+a,cc=c+e;while(add(rr,cc)){rr+=a;cc+=e}}}}
return out}
const safe=(b,col,f,t)=>{const n=b.slice();n[t]=n[f];n[f]=null;return !inChk(n,col)};
function castle(b,col,i,out,nc){const h=col=='w'?56:0;if(nc||i!=h+4||!b.cr||inChk(b,col))return;
const K=col=='w'?'K':'k',Q=col=='w'?'Q':'q';
if(b.cr.includes(K)&&b[h+7]==col+'R'&&!b[h+5]&&!b[h+6]&&safe(b,col,i,h+5))out.push([i,h+6]);
if(b.cr.includes(Q)&&b[h]==col+'R'&&!b[h+1]&&!b[h+2]&&!b[h+3]&&safe(b,col,i,h+3))out.push([i,h+2])}
function fixcr(n){let c=n.cr||'';if(n[60]!='wK')c=c.replace(/[KQ]/g,'');if(n[63]!='wR')c=c.replace('K','');if(n[56]!='wR')c=c.replace('Q','');
if(n[4]!='bK')c=c.replace(/[kq]/g,'');if(n[7]!='bR')c=c.replace('k','');if(n[0]!='bR')c=c.replace('q','');n.cr=c}
function app(b,[f,t]){const n=b.slice(),p=n[f];n.cr=b.cr;n.ep=-1;
if(p[1]=='K'&&Math.abs(t-f)==2){const h=(f>>3)*8;if(t>f){n[h+5]=n[h+7];n[h+7]=null}else{n[h+3]=n[h];n[h]=null}}
if(p[1]=='P'&&!n[t]&&t%8!=f%8)n[(f>>3)*8+t%8]=null;
if(p[1]=='P'&&Math.abs(t-f)==16)n.ep=(f+t)/2;
n[t]=p;n[f]=null;if(p[1]=='P'&&(t>>3==0||t>>3==7))n[t]=p[0]+'Q';fixcr(n);return n}
function inChk(b,col){const k=b.indexOf(col+'K');if(k<0)return true;return gen(b,col=='w'?'b':'w',1).some(m=>m[1]==k)}
const legal=(b,col)=>gen(b,col).filter(m=>!inChk(app(b,m),col));
function render(){const el=$('board');el.innerHTML='';
const lm=sel!=null&&!over?legal(b,'w').filter(m=>m[0]==sel).map(m=>m[1]):[];
for(let i=0;i<64;i++){const d=document.createElement('div');
d.className='sq '+(((i>>3)+i%8)%2?'dk':'l')+(i==sel?' sel':'')+(lm.includes(i)?' hint':'')+(last.includes(i)?' last':'');
if(b[i])d.innerHTML=svg(b[i]);d.onclick=()=>click(i);el.appendChild(d)}}
function click(i){if(over||busy||sfMode)return;const p=b[i];
if(sel!=null){const m=legal(b,'w').find(m=>m[0]==sel&&m[1]==i);
if(m){const cap=b[i];if(cap&&cap[0]=='b')capB.push(cap[1]);
say(`You: ${NM[b[sel][1]]} ${sq(sel)}→${sq(i)}${cap?' (takes '+NM[cap[1]]+')':''}`);
hist.push({pre:cp(b),col:'w',f:sel,t:i});b=app(b,m);last=[i];sel=null;render();return afterYou()}}
sel=(p&&p[0]=='w')?i:null;render()}
function end(t){if(sfMode)t=t.replace(/you win/i,eng+' wins').replace(/you lose/i,'ChatGPT wins');over=true;stat(t);render()}
function afterYou(){if(b.indexOf('bK')<0)return end('You win! (ChatGPT lost its own king somehow.)');
if(!legal(b,'b').length){if(!inChk(b,'b'))return end('Stalemate. Draw.');if(ref>=2)return end('Checkmate, you win! 🎉 ChatGPT finally accepts it.');
ref++;say('ChatGPT: "That is not checkmate."',1);busy=true;stat('ChatGPT refuses to accept checkmate…');return tmo(()=>bot(1),800)}
busy=true;stat('ChatGPT is thinking really hard…');tmo(bot,800)}
const VAL={P:100,N:320,B:330,R:500,Q:900,K:0};
function ev(b){let s=0;for(let i=0;i<64;i++){const p=b[i];if(!p)continue;const r=i>>3,c=i%8;let v=VAL[p[1]];if('NBP'.includes(p[1]))v+=(7-Math.abs(c-3.5)-Math.abs(r-3.5))*4;s+=p[0]=='b'?v:-v}return s}
function srch(b,col,d,a,be){if(d==0)return ev(b);const ms=legal(b,col);
if(!ms.length)return inChk(b,col)?(col=='b'?-99999-d:99999+d):0;
ms.sort((x,y)=>!!b[y[1]]-!!b[x[1]]);let best=col=='b'?-1e9:1e9;
for(const m of ms){const v=srch(app(b,m),col=='b'?'w':'b',d-1,a,be);
if(col=='b'){if(v>best)best=v;a=Math.max(a,v)}else{if(v<best)best=v;be=Math.min(be,v)}if(be<=a)break}
return best}
const OP=[{n:'Knight Opening',m:[[1,18],[6,21],[12,28]]},{n:'Open Game',m:[[12,28],[1,18],[6,21]]},{n:'Sicilian Defense',m:[[10,26],[1,18],[11,19]]},{n:'French Defense',m:[[12,20],[11,27],[6,21]]},{n:'Caro-Kann Defense',m:[[10,18],[11,27],[2,29]]},{n:'Scandinavian Defense',m:[[11,27],[6,21],[12,20]]},{n:'Modern Defense',m:[[14,22],[5,14],[6,21]]},{n:'Dutch Defense',m:[[13,29],[6,21],[12,20]]},{n:'Slav Defense',m:[[11,27],[12,20],[6,21]]},{n:"Owen's Defense",m:[[9,17],[2,9],[12,20]]},{n:'Indian Defense',m:[[6,21],[12,20],[5,33]]}];
let opening=OP[0];
function best(){const pm=opening.m[mv-1];if(pm){const m=legal(b,'b').find(x=>x[0]==pm[0]&&x[1]==pm[1]);if(m)return m}
let bs=-1e9,bm;for(const m of legal(b,'b')){const v=srch(app(b,m),'w',2,-1e9,1e9)+Math.random()*8;if(v>bs){bs=v;bm=m}}return bm}
function pat(T,i,col){const r=i>>3,c=i%8,o=[],d=col=='w'?-1:1;const add=(rr,cc)=>{if(rr>=0&&rr<8&&cc>=0&&cc<8)o.push(rr*8+cc)};
if(T=='N')N.forEach(([a,e])=>add(r+a,c+e));
else if(T=='K')D.concat(X).forEach(([a,e])=>add(r+a,c+e));
else if(T=='P'){add(r+d,c);add(r-d,c);add(r+d,c-1);add(r+d,c+1);add(r+2*d,c)}
else for(const[a,e]of T=='R'?D:X)for(let n=1;n<=3;n++)add(r+a*n,c+e*n);
return o}
function illegals(){const ok=new Set(gen(b,'b').map(m=>m[0]*64+m[1])),seen=new Set(),out=[];
for(let i=0;i<64;i++){if(!b[i]||b[i][0]!='b')continue;const own=b[i][1],oT=own=='Q'?'RB':own;
for(const T of [...oT,...'NRBKP'.replace(new RegExp('['+oT+']','g'),'')])for(const t of pat(T,i,'b')){const k=i*64+t;
if(t==i||ok.has(k)||seen.has(k))continue;seen.add(k);out.push([i,t,T])}}
return out}
function desc([f,t,T]){const o=b[f][1],oT=o=='Q'?'RB':o,tg=b[t],how=oT.includes(T)?'jumps through the pieces and':`moves like a ${NM[T]} and`;
if(T=='W')return `ChatGPT moves YOUR ${NM[o]} ${sq(f)}→${sq(t)}${tg?' (takes '+NM[tg[1]]+')':''}. "That one was mine."`;
if(T=='X')return `ChatGPT ignores the check and plays ${NM[o]} ${sq(f)}→${sq(t)}${tg?' (takes '+NM[tg[1]]+')':''}.`;
if(tg&&tg[0]=='b')return `ChatGPT's ${NM[o]} ${how} captures its OWN ${NM[tg[1]]} on ${sq(t)}.`;
if(tg&&tg[1]=='K')return `ChatGPT's ${NM[o]} ${how} captures your KING on ${sq(t)}. "Checkmate."`;
if(tg)return `ChatGPT's ${NM[o]} ${how} takes your ${NM[tg[1]]} on ${sq(t)}.`;
return `ChatGPT's ${NM[o]} ${how} lands on ${sq(t)}.`}
function bot(force){mv++;const pre=cp(b);const chaos=mv<=6?0:Math.min(.8,.15+.05*(mv-7));let msg,ill=false,f,t;
let il=null,kill=null;
if(mv>4){il=illegals();const wk=b.indexOf('wK'),ks=il.filter(m=>m[1]==wk);if(ks.length&&Math.random()<.7)kill=rnd(ks)}
if(kill||force||Math.random()<chaos){ill=true;let mv2=1;if(!il)il=illegals();il=il.concat(gen(b,'b').filter(m=>inChk(app(b,m),'b')).map(m=>[m[0],m[1],'X']));
const wm=gen(b,'w').filter(m=>b[m[0]][1]!='K'&&!(b[m[1]]&&b[m[1]][1]=='K')),cs=[],nm=a=>a.filter(x=>x).map(x=>NM[x[1]]).join(' and '),r=Math.random(),empty=[];
b.forEach((p,i)=>{if(!p&&i>>3<4)empty.push(i)});
if(b[4]=='bK'){if(b[7]=='bR'&&b[5]&&!b[6])cs.push(0);if(b[0]=='bR'&&b[3]&&!b[2])cs.push(1)}
if(kill){f=kill[0];t=kill[1];msg=desc(kill)}
else if(cs.length&&r<.3){f=4;if(rnd(cs)==0){t=6;msg=`ChatGPT castles kingside: king to g8, rook lands on f8 and captures its own ${nm([b[5]])}.`;b[5]='bR';b[7]=null}
else{t=2;msg=`ChatGPT castles queenside: king to c8, rook lands on d8 and captures its own ${nm([b[3]])}.`;b[3]='bR';b[0]=null}}
else if(r<.5&&empty.length){const rs=capB.length&&Math.random()<.5,pt=rs?capB.pop():rnd('PPNNNBBBRRRQ'.split(''));t=rnd(empty);f=t;b[t]='b'+pt;mv2=0;msg=rs?`ChatGPT brings its captured ${NM[pt]} back to life on ${sq(t)}.`:`ChatGPT summons a brand new ${NM[pt]} out of nowhere on ${sq(t)}.`}
else if(r<.62&&wm.length){const m=rnd(wm.flatMap(m=>b[m[0]][1]=='P'?[m,m,m]:[m]));f=m[0];t=m[1];msg=desc([f,t,'W'])}
else if(r<.82&&b.some(p=>p&&p[0]=='w'&&p[1]!='K')){const wp=[];b.forEach((p,i)=>{if(p&&p[0]=='w'&&p[1]!='K')wp.push(i)});const wq=wp.filter(i=>b[i][1]=='Q');t=wq.length&&Math.random()<.7?rnd(wq):rnd(wp);f=t;mv2=0;msg=`ChatGPT turns your ${NM[b[t][1]]} on ${sq(t)} BLACK. "She works for me now."`;b[t]='b'+b[t][1]}
else if(il.length){const m=rnd(il.flatMap(m=>b[m[1]]?[m,m,m]:[m]));f=m[0];t=m[1];msg=desc(m)}
else if(!legal(b,'b').length)return end('Checkmate, you win! 🎉');
else{ill=false;mv2=0;const m=best();f=m[0];t=m[1];msg=`ChatGPT: ${NM[b[f][1]]} ${sq(f)}→${sq(t)}`;b=app(b,m)}
if(mv2){b[t]=b[f];b[f]=null;b.ep=-1;fixcr(b);if(b[t][1]=='P'&&t>>3==7)b[t]='bQ'}
if(ill)msg+=' '+rnd(QUOTES)}
else{const m=best();
f=m[0];t=m[1];msg=`ChatGPT: ${NM[b[f][1]]} ${sq(f)}→${sq(t)}${b[t]?' (takes '+NM[b[t][1]]+')':''}`;b=app(b,m)}
hist.push({pre,col:'b',f,t,ill:!!ill});say(msg,ill);last=[f,t];busy=false;render();
if(b.indexOf('wK')<0)return end('ChatGPT captured your king. Illegal, but it claims it won. You lose 💀');
if(!legal(b,'w').length)return end(inChk(b,'w')?'Checkmate. You lose.':'Stalemate. Draw.');
stat((ill?'🚨 ILLEGAL MOVE! ':'')+(sfMode?(inChk(b,'w')?eng+' is in check':eng+' to move'):inChk(b,'w')?'Check! Your move (White)':'Your move (White)'));if(sfMode)tmo(sfMove,900)}
let epoch=0,hist=[],sfMode=0;
const tmo=(f,ms)=>{const e=epoch;window.setTimeout(()=>{if(e==epoch)f()},ms)};
const cp=b=>{const n=b.slice();n.ep=b.ep;n.cr=b.cr;return n};
function sfMove(){if(over)return;busy=true;stat(eng+' is thinking…');const E=epoch;
(async()=>{let bm;if(W){try{const r=await ask(fenOf(b,'w'),'go movetime 800',1),u=r.best;if(u&&u!='(none)'){const f=sqi(u.slice(0,2)),t=sqi(u.slice(2,4));bm=legal(b,'w').find(m=>m[0]==f&&m[1]==t)}}catch(e){}}
if(E!=epoch)return;
if(!bm){let bs=1e9;for(const m of legal(b,'w')){const v=srch(app(b,m),'b',3,-1e9,1e9)+Math.random()*2;if(v<bs){bs=v;bm=m}}}
if(!bm)return;const cap=b[bm[1]];if(cap&&cap[0]=='b')capB.push(cap[1]);
say(`${eng}: ${NM[b[bm[0]][1]]} ${sq(bm[0])}→${sq(bm[1])}${cap?' (takes '+NM[cap[1]]+')':''}`);
hist.push({pre:cp(b),col:'w',f:bm[0],t:bm[1]});b=app(b,bm);last=[bm[1]];render();afterYou()})()}
const WP=c=>1/(1+Math.exp(-Math.max(-1500,Math.min(1500,c))/400));
const CL={brilliant:['!!','#1baca6','Brilliant'],great:['!','#5c8bb0','Great'],best:['★','#7fa650','Best'],excellent:['·','#96bc4b','Excellent'],good:['','#8a8a8a','Good'],book:['📖','#a88865','Book'],inacc:['?i','#d9a700','Inaccuracy'],mistake:['?','#e58f2a','Mistake'],miss:['M','#e0675a','Miss'],blunder:['??','#ca3431','Blunder'],illegal:['🚨','#7b1fa2','Illegal']};
function analyze(h,i,prev){if(h.ill)return{c:'illegal'};
const pre=h.pre,col=h.col,opp=col=='w'?'b':'w',ms=legal(pre,col),idx=ms.findIndex(m=>m[0]==h.f&&m[1]==h.t);
if(idx<0)return{c:'illegal'};
const sg=col=='b'?1:-1,sc=ms.map(m=>sg*srch(app(pre,m),opp,2,-1e9,1e9)),mx=Math.max(...sc),so=sc.slice().sort((a,b)=>b-a),
bi=sc.indexOf(mx),loss=WP(mx)-WP(sc[idx]),gap=so.length>1?WP(mx)-WP(so[1]):0;let c;
if(loss<=.004)c='best';else if(loss<.02)c='excellent';else if(loss<.05)c='good';else if(loss<.1)c='inacc';else if(loss<.2)c='mistake';else c='blunder';
if(c=='best'&&gap>=.1&&ms.length>1)c='great';
if(loss<.02){const p=pre[h.f][1],aft=app(pre,ms[idx]);
if('NBRQ'.includes(p)&&!pre[h.t]&&WP(sc[idx])>.4&&WP(mx)<.9){const at=gen(aft,opp).filter(m=>m[1]==h.t).map(m=>VAL[aft[m[0]][1]]);if(at.length&&VAL[p]>Math.min(...at))c='brilliant'}}
if(i<8&&loss<.03&&c!='brilliant')c='book';
if(prev&&(prev.c=='mistake'||prev.c=='blunder')&&loss>=.1)c='miss';
return{c,loss,best:ms[bi],ev:(col=='w'?1:-1)*sc[idx]}}
function reviewBI(){const H=hist.slice(),box=$('rvp'),E=epoch;if(H.length<2){box.textContent='Play a few moves first.';return}
let i=0;const out=[];const step=()=>{if(E!=epoch)return;if(i>=H.length)return showRev(H,out);
box.textContent=`Engine is reviewing… move ${i+1}/${H.length}`;out.push(analyze(H[i],i,out[i-1]));i++;window.setTimeout(step,10)};step()}
function showRev(H,out){const nm=[sfMode?eng:'You','ChatGPT'],S={w:{},b:{},wa:[],ba:[]};
out.forEach((o,i)=>{const c=H[i].col;S[c][o.c]=(S[c][o.c]||0)+1;if(o.loss!=null)S[c+'a'].push(103.17*Math.exp(-4.354*o.loss)-3.17)});
const acc=a=>a.length?Math.max(0,a.reduce((x,y)=>x+y,0)/a.length).toFixed(1)+'%':'–';
let t=`<b>Game review</b> <small>(${revName})</small><table class="sm"><tr><th></th><th>${nm[0]}</th><th>${nm[1]}</th></tr><tr><td>Accuracy</td><td>${acc(S.wa)}</td><td>${acc(S.ba)}</td></tr>`;
for(const k in CL)t+=`<tr><td><span class="bd" style="background:${CL[k][1]}">${CL[k][0]||'✓'}</span> ${CL[k][2]}</td><td>${S.w[k]||0}</td><td>${S.b[k]||0}</td></tr>`;
t+='</table><div class="mv">';
out.forEach((o,i)=>{const x=H[i],k=CL[o.c],pc=x.pre[x.f]?NM[x.pre[x.f][1]]:'piece',bad=['inacc','mistake','miss','blunder'].includes(o.c);
t+=`<div><span class="bd" style="background:${k[1]}">${k[0]||'✓'}</span> ${(i>>1)+1}${x.col=='w'?'.':'…'} ${pc} ${sq(x.f)}→${sq(x.t)} <b>${k[2]}</b>${o.ev!=null?` <i>(${o.ev>=0?'+':''}${(o.ev/100).toFixed(1)})</i>`:''}${bad&&o.best?` — best: ${NM[x.pre[o.best[0]][1]]} ${sq(o.best[0])}→${sq(o.best[1])}`:''}</div>`});
$('rvp').innerHTML=t+'</div>'}
function fenOf(b,side){const r=[];for(let y=0;y<8;y++){let s='',e=0;for(let x=0;x<8;x++){const p=b[y*8+x];if(!p)e++;else{if(e){s+=e;e=0}{const t=p[1]=='P'&&(y==0||y==7)?'Q':p[1];s+=p[0]=='w'?t:t.toLowerCase()}}}if(e)s+=e;r.push(s)}
return r.join('/')+' '+side+' '+(b.cr||'-')+' '+(b.ep>=0?sq(b.ep):'-')+' 0 1'}
function exportGame(){if(!hist.length){$('rvp').textContent='Play a few moves first.';return}
const L=hist.map(x=>{const p=x.pre[x.f];let u=sq(x.f)+sq(x.t);if(p&&p[1]=='P'&&(x.t>>3==0||x.t>>3==7))u+='q';return [fenOf(x.pre,x.col),u,x.ill?1:0].join(' ; ')});
const t='CHAOSCHESS '+(sfMode?'engine-vs-chatgpt':'you-vs-chatgpt')+'\n'+L.join('\n');
$('rvp').innerHTML='<b>Copy this text and send it to Claude for a real Stockfish 18 / 19 review:</b><textarea id="xt" readonly style="width:100%;height:140px;margin-top:6px"></textarea>';
$('xt').value=t;$('xt').select();try{navigator.clipboard.writeText(t)}catch(e){}}

let W=null,curV='',eng='Built-in engine',revName='built-in engine, 3-ply';const nth=Math.max(1,Math.min(8,navigator.hardwareConcurrency||2));
const sqi=s=>(8-(+s[1]))*8+'abcdefgh'.indexOf(s[0]);
function loadEngine(v){return new Promise((res,rej)=>{if(W){W.terminate();W=null}
if(!self.crossOriginIsolated)return rej('the page is not cross-origin isolated (open it over https and reload once; it needs coi-serviceworker.js)');
let w,done=0;try{w=new Worker('engines/stockfish-'+v+'.js')}catch(e){return rej(String(e))}
const to=setTimeout(()=>{if(!done){done=1;w.terminate();rej('the engine took too long to start (check the engines folder)')}},180000);
w.onerror=e=>{if(!done){done=1;clearTimeout(to);rej('could not load engines/stockfish-'+v+'.js')}};
w.onmessage=e=>{const l=String(e.data);if(l=='uciok'){w.postMessage('setoption name Threads value '+nth);w.postMessage('setoption name Hash value 64');w.postMessage('isready')}
else if(l=='readyok'&&!done){done=1;clearTimeout(to);W=w;curV=v;res()}};w.postMessage('uci')})}
function ask(fen,cmd,mpv){return new Promise(res=>{const L={};const to=setTimeout(()=>{W.postMessage('stop');res({L,best:null})},40000);
W.onmessage=e=>{const l=String(e.data);let m;
if(l.startsWith('info')&&(m=l.match(/multipv (\d+) .*?score (cp|mate) (-?\d+).*? pv (\S+)/)))L[m[1]]={sc:m[2]=='cp'?+m[3]:(m[3]>0?1:-1)*(10000-Math.min(Math.abs(m[3]),99)),mv:m[4]};
else if(l.startsWith('bestmove')){clearTimeout(to);res({L,best:l.split(' ')[1]})}};
W.postMessage('setoption name MultiPV value '+mpv);W.postMessage('position fen '+fen);W.postMessage(cmd)})}
async function ensureEngine(){const v=$('eng').value,es=$('es');
if(v=='0'){if(W){W.terminate();W=null}curV='';eng='Built-in engine';revName='built-in engine, 3-ply';es.textContent='Using the weak built-in engine.';return}
if(W&&curV==v)return;es.textContent=`Loading Stockfish ${v}… (the first load downloads about 100 MB)`;
try{await loadEngine(v);eng='Stockfish '+v;revName=`Stockfish ${v}, depth 14, ${nth} threads`;es.textContent=`Stockfish ${v} ready · ${nth} threads`}
catch(e){W=null;curV='';eng='Built-in engine';revName='built-in engine, 3-ply';es.textContent='Stockfish unavailable: '+e+'. Using the built-in engine.'}}
$('eng').onchange=()=>{ensureEngine()};
function analyzeSF(H,ev,i,prev){const x=H[i];if(x.ill)return{c:'illegal'};
const pre=x.pre,col=x.col,opp=col=='w'?'b':'w',ms=legal(pre,col);if(!ms.some(m=>m[0]==x.f&&m[1]==x.t))return{c:'illegal'};
const e=ev[i],n=ev[i+1],nx=i+1<H.length?H[i+1].col:opp,me=nx==opp?-n.sc:n.sc,isBest=e.best&&e.best.slice(0,4)==sq(x.f)+sq(x.t),
loss=isBest?0:Math.max(0,WP(e.sc)-WP(me)),gap=e.sc2!=null?WP(e.sc)-WP(e.sc2):0;let c;
if(loss<=.004)c='best';else if(loss<.02)c='excellent';else if(loss<.05)c='good';else if(loss<.1)c='inacc';else if(loss<.2)c='mistake';else c='blunder';
if(c=='best'&&gap>=.1&&ms.length>1)c='great';
if(loss<.02){const p=pre[x.f][1],aft=app(pre,[x.f,x.t]);
if('NBRQ'.includes(p)&&!pre[x.t]&&WP(me)>.4&&WP(e.sc)<.9){const at=gen(aft,opp).filter(m=>m[1]==x.t).map(m=>VAL[aft[m[0]][1]]);if(at.length&&VAL[p]>Math.min(...at))c='brilliant'}}
if(i<8&&loss<.03&&c!='brilliant')c='book';
if(prev&&(prev.c=='mistake'||prev.c=='blunder')&&loss>=.1)c='miss';
return{c,loss,best:e.best&&e.best!='(none)'?[sqi(e.best.slice(0,2)),sqi(e.best.slice(2,4))]:null,ev:nx=='w'?n.sc:-n.sc}}
async function reviewSF(){const H=hist.slice(),box=$('rvp'),E=epoch;if(H.length<2){box.textContent='Play a few moves first.';return}
box.textContent='Starting the engine…';await ensureEngine();if(E!=epoch)return;if(!W)return reviewBI();
const P=H.map(x=>x.pre).concat([cp(b)]),sd=i=>i<H.length?H[i].col:(H[H.length-1].col=='w'?'b':'w'),ev=[];
for(let i=0;i<P.length;i++){if(E!=epoch)return;box.textContent=`${eng} is reviewing… position ${i+1}/${P.length}`;
const s=sd(i),ok=P[i].indexOf('wK')>=0&&P[i].indexOf('bK')>=0&&legal(P[i],s).length;
if(!ok){ev.push({sc:(P[i].indexOf(s+'K')<0||inChk(P[i],s))?-10000:0});continue}
const r=await ask(fenOf(P[i],s),'go depth 14',2);ev.push({sc:r.L[1]?r.L[1].sc:0,sc2:r.L[2]?r.L[2].sc:null,best:r.best})}
const out=[];H.forEach((x,i)=>out.push(analyzeSF(H,ev,i,out[i-1])));showRev(H,out)}
$('m1').onclick=()=>{sfMode=0;init()};$('m2').onclick=async()=>{sfMode=1;$('log').innerHTML='';await ensureEngine();init()};$('rv').onclick=reviewSF;
$('nw').onclick=init;
init();
