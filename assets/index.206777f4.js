const Ee=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};Ee();function S(){}function de(e){return e()}function ee(){return Object.create(null)}function G(e){e.forEach(de)}function Se(e){return typeof e=="function"}function Q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Le(e){return Object.keys(e).length===0}function h(e,t){e.appendChild(t)}function I(e,t,n){e.insertBefore(t,n||null)}function O(e){e.parentNode.removeChild(e)}function he(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function L(e){return document.createTextNode(e)}function x(){return L(" ")}function _e(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Oe(e){return Array.from(e.childNodes)}function R(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function te(e,t,n){e.classList[n?"add":"remove"](t)}let X;function M(e){X=e}function Te(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(l=>l.call(this,t))}const A=[],ne=[],z=[],re=[],Ie=Promise.resolve();let D=!1;function qe(){D||(D=!0,Ie.then(me))}function H(e){z.push(e)}const K=new Set;let V=0;function me(){const e=X;do{for(;V<A.length;){const t=A[V];V++,M(t),Ne(t.$$)}for(M(null),A.length=0,V=0;ne.length;)ne.pop()();for(let t=0;t<z.length;t+=1){const n=z[t];K.has(n)||(K.add(n),n())}z.length=0}while(A.length);for(;re.length;)re.pop()();D=!1,K.clear(),M(e)}function Ne(e){if(e.fragment!==null){e.update(),G(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}const W=new Set;let C;function ge(){C={r:0,c:[],p:C}}function pe(){C.r||G(C.c),C=C.p}function T(e,t){e&&e.i&&(W.delete(e),e.i(t))}function B(e,t,n,l){if(e&&e.o){if(W.has(e))return;W.add(e),C.c.push(()=>{W.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}}function Ce(e){e&&e.c()}function be(e,t,n,l){const{fragment:r,on_mount:o,on_destroy:u,after_update:i}=e.$$;r&&r.m(t,n),l||H(()=>{const f=o.map(de).filter(Se);u?u.push(...f):G(f),e.$$.on_mount=[]}),i.forEach(H)}function ye(e,t){const n=e.$$;n.fragment!==null&&(G(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Pe(e,t){e.$$.dirty[0]===-1&&(A.push(e),qe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function we(e,t,n,l,r,o,u,i=[-1]){const f=X;M(e);const c=e.$$={fragment:null,ctx:null,props:o,update:S,not_equal:r,bound:ee(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:ee(),dirty:i,skip_bound:!1,root:t.target||f.$$.root};u&&u(c.root);let w=!1;if(c.ctx=n?n(e,t.props||{},(a,v,...q)=>{const k=q.length?q[0]:v;return c.ctx&&r(c.ctx[a],c.ctx[a]=k)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](k),w&&Pe(e,a)),v}):[],c.update(),w=!0,G(c.before_update),c.fragment=l?l(c.ctx):!1,t.target){if(t.hydrate){const a=Oe(t.target);c.fragment&&c.fragment.l(a),a.forEach(O)}else c.fragment&&c.fragment.c();t.intro&&T(e.$$.fragment),be(e,t.target,t.anchor,t.customElement),me()}M(f)}class ke{$destroy(){ye(this,1),this.$destroy=S}$on(t,n){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!Le(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function xe(e){let t,n,l,r;return{c(){t=g("div"),n=L(e[0]),p(t,"class","space is-align-content-center is-justify-content-center has-text-centered is-flex-grow-1 py-5  svelte-1lb7w35"),te(t,"winning",e[1])},m(o,u){I(o,t,u),h(t,n),l||(r=_e(t,"click",e[3]),l=!0)},p(o,[u]){u&1&&R(n,o[0]),u&2&&te(t,"winning",o[1])},i:S,o:S,d(o){o&&O(t),l=!1,r()}}}function je(e,t,n){let l,{space:r=""}=t,{winner:o}=t;function u(i){Te.call(this,e,i)}return e.$$set=i=>{"space"in i&&n(0,r=i.space),"winner"in i&&n(2,o=i.winner)},e.$$.update=()=>{e.$$.dirty&5&&n(1,l=r===o)},[r,l,o,u]}class Ae extends ke{constructor(t){super(),we(this,t,je,xe,Q,{space:0,winner:2})}}const P=[];function Me(e,t){return{subscribe:Be(e,t).subscribe}}function Be(e,t=S){let n;const l=new Set;function r(i){if(Q(e,i)&&(e=i,n)){const f=!P.length;for(const c of l)c[1](),P.push(c,e);if(f){for(let c=0;c<P.length;c+=2)P[c][0](P[c+1]);P.length=0}}}function o(i){r(i(e))}function u(i,f=S){const c=[i,f];return l.add(c),l.size===1&&(n=t(r)||S),i(e),()=>{l.delete(c),l.size===0&&(n(),n=null)}}return{set:r,update:o,subscribe:u}}let E,le,F;const ve=()=>{try{(!E||E.readyState>=2)&&(E=new WebSocket({}.VITE_wsURL),E.onclose=e=>{console.log(e,"closed"),le=setInterval(()=>{ve()},500)}),E.onopen=()=>{clearInterval(le),console.log("connected")},E.onmessage=e=>{F=e.data}}catch(e){console.log(e,"Logging error")}},Ge=new Me(void 0,e=>{const t=setInterval(()=>{F&&(e(JSON.parse(F)),F=void 0)},5);return()=>{E&&E.close(),clearInterval(t)}});ve();var oe={subscribe:Ge.subscribe,isCOnnected:()=>E.readyState<=1};const Re=async e=>{try{return(await(await fetch(`${{}.VITE_apiURL}/next-turn/${e}`)).json()).errorMessage}catch(t){return console.log(t),"Error connecting to the server"}},Ue=async()=>{try{await fetch(`${{}.VITE_apiURL}/reset`)}catch(e){return console.log(e),"Error reseting game"}};function ce(e,t,n){const l=e.slice();return l[9]=t[n],l[11]=n,l}function ie(e,t,n){const l=e.slice();l[12]=t[n],l[16]=n;const r=l[11]===0?l[11]:l[11]===1?3:6;l[13]=r;const o=l[16]+l[13];return l[14]=o,l}function Ve(e){let t,n,l;return{c(){t=g("h3"),n=L("Player: "),l=L(e[1]),p(t,"class","title")},m(r,o){I(r,t,o),h(t,n),h(t,l)},p(r,o){o&2&&R(l,r[1])},d(r){r&&O(t)}}}function ze(e){let t,n,l;return{c(){t=g("h3"),n=L("Winner: "),l=L(e[2]),p(t,"class","title")},m(r,o){I(r,t,o),h(t,n),h(t,l)},p(r,o){o&4&&R(l,r[2])},d(r){r&&O(t)}}}function We(e){let t;return{c(){t=g("h3"),t.textContent="Game is tied",p(t,"class","title")},m(n,l){I(n,t,l)},p:S,d(n){n&&O(t)}}}function se(e){let t,n;function l(){return e[7](e[14])}return t=new Ae({props:{winner:e[2],space:e[0][e[14]]}}),t.$on("click",l),{c(){Ce(t.$$.fragment)},m(r,o){be(t,r,o),n=!0},p(r,o){e=r;const u={};o&4&&(u.winner=e[2]),o&1&&(u.space=e[0][e[14]]),t.$set(u)},i(r){n||(T(t.$$.fragment,r),n=!0)},o(r){B(t.$$.fragment,r),n=!1},d(r){ye(t,r)}}}function ue(e){let t,n,l,r=e[9],o=[];for(let i=0;i<r.length;i+=1)o[i]=se(ie(e,r,i));const u=i=>B(o[i],1,1,()=>{o[i]=null});return{c(){t=g("div");for(let i=0;i<o.length;i+=1)o[i].c();n=x(),p(t,"class","row is-flex")},m(i,f){I(i,t,f);for(let c=0;c<o.length;c+=1)o[c].m(t,null);h(t,n),l=!0},p(i,f){if(f&69){r=i[9];let c;for(c=0;c<r.length;c+=1){const w=ie(i,r,c);o[c]?(o[c].p(w,f),T(o[c],1)):(o[c]=se(w),o[c].c(),T(o[c],1),o[c].m(t,n))}for(ge(),c=r.length;c<o.length;c+=1)u(c);pe()}},i(i){if(!l){for(let f=0;f<r.length;f+=1)T(o[f]);l=!0}},o(i){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)B(o[f]);l=!1},d(i){i&&O(t),he(o,i)}}}function fe(e){let t,n,l;return{c(){t=g("button"),t.textContent="New Game",p(t,"class","button is-info is-fullwidth")},m(r,o){I(r,t,o),n||(l=_e(t,"click",Ue),n=!0)},p:S,d(r){r&&O(t),n=!1,l()}}}function ae(e){let t,n;return{c(){t=g("p"),n=L(e[4]),p(t,"class","content is-medium has-text-danger")},m(l,r){I(l,t,r),h(t,n)},p(l,r){r&16&&R(n,l[4])},d(l){l&&O(t)}}}function Fe(e){let t,n,l,r,o,u,i,f,c,w,a,v,q,k,J,j;function Y(s,m){return s[2]=="TIE"?We:s[2]?ze:Ve}let U=Y(e),$=U(e),N=e[5](),d=[];for(let s=0;s<N.length;s+=1)d[s]=ue(ce(e,N,s));const $e=s=>B(d[s],1,1,()=>{d[s]=null});let b=e[2]&&fe(),y=e[4]&&ae(e);return{c(){t=g("main"),n=g("h3"),n.textContent="Tic Tac Toe",l=x(),r=g("h3"),o=L("Number of people playing: "),u=L(e[3]),i=x(),$.c(),f=x(),c=g("div"),w=g("div"),a=g("div");for(let s=0;s<d.length;s+=1)d[s].c();v=x(),q=g("div"),k=g("div"),b&&b.c(),J=x(),y&&y.c(),p(n,"class","title is-2"),p(r,"class","title"),p(a,"class","column is-three-quarters"),p(w,"class","columns"),p(c,"class","section"),p(k,"class","column is-three-quarters"),p(q,"class","columns"),p(t,"class","section")},m(s,m){I(s,t,m),h(t,n),h(t,l),h(t,r),h(r,o),h(r,u),h(t,i),$.m(t,null),h(t,f),h(t,c),h(c,w),h(w,a);for(let _=0;_<d.length;_+=1)d[_].m(a,null);h(t,v),h(t,q),h(q,k),b&&b.m(k,null),h(k,J),y&&y.m(k,null),j=!0},p(s,[m]){if((!j||m&8)&&R(u,s[3]),U===(U=Y(s))&&$?$.p(s,m):($.d(1),$=U(s),$&&($.c(),$.m(t,f))),m&101){N=s[5]();let _;for(_=0;_<N.length;_+=1){const Z=ce(s,N,_);d[_]?(d[_].p(Z,m),T(d[_],1)):(d[_]=ue(Z),d[_].c(),T(d[_],1),d[_].m(a,null))}for(ge(),_=N.length;_<d.length;_+=1)$e(_);pe()}s[2]?b?b.p(s,m):(b=fe(),b.c(),b.m(k,J)):b&&(b.d(1),b=null),s[4]?y?y.p(s,m):(y=ae(s),y.c(),y.m(k,null)):y&&(y.d(1),y=null)},i(s){if(!j){for(let m=0;m<N.length;m+=1)T(d[m]);j=!0}},o(s){d=d.filter(Boolean);for(let m=0;m<d.length;m+=1)B(d[m]);j=!1},d(s){s&&O(t),$.d(),he(d,s),b&&b.d(),y&&y.d()}}}function Je(e,t,n){let l=["","","","","","","","",""],r="",o,u=0,i,f=()=>{let a=[];for(let v=0;v<l.length;v+=3)a.push(l.slice(v,v+3));return a};oe.subscribe(a=>{!a||(n(2,o=a.winner),n(1,r=a.nextPlayer),n(0,l=a.board),n(3,u=a.numberOfPeeps))});async function c(a){console.log("in function"),!(o||!oe.isCOnnected)&&n(4,i=await Re(a))}return[l,r,o,u,i,f,c,a=>c(a)]}class Ke extends ke{constructor(t){super(),we(this,t,Je,Fe,Q,{})}}new Ke({target:document.getElementById("app")});