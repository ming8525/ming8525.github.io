define(["exports"],(function(e){"use strict";let t,s,n,$=!1,l=!1,o=!1,a=!1,r=null,i=!1;const c="http://www.w3.org/1999/xlink",f={},d=e=>"object"==(e=typeof e)||"function"===e,m=(e,t,...s)=>{let n=null,$=null,l=null,o=!1,a=!1;const r=[],i=t=>{for(let s=0;s<t.length;s++)n=t[s],Array.isArray(n)?i(n):null!=n&&"boolean"!=typeof n&&((o="function"!=typeof e&&!d(n))&&(n=String(n)),o&&a?r[r.length-1].$text$+=n:r.push(o?u(null,n):n),a=o)};if(i(s),t&&(t.key&&($=t.key),t.name&&(l=t.name),true)){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}if("function"==typeof e)return e(null===t?{}:t,r,p);const c=u(e,null);return c.$attrs$=t,r.length>0&&(c.$children$=r),c.$key$=$,c.$name$=l,c},u=(e,t)=>{const s={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null,$name$:null};return s},h={},g=e=>e&&e.$tag$===h,p={forEach:(e,t)=>e.map(y).forEach(t),map:(e,t)=>e.map(y).map(t).map(v)},y=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),v=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),m(e.vtag,t,...e.vchildren||[])}const t=u(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},b=new WeakMap,N=(e,t)=>"sc-"+(t&&32&e.$flags$?e.$tagName$+"-"+t:e.$tagName$),w=(e,t,s,n,$,l)=>{if(s!==n){let o=se(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,$=k(s),l=k(n);t.remove(...$.filter((e=>e&&!l.includes(e)))),t.add(...l.filter((e=>e&&!$.includes(e))))}else if("style"===t){for(const t in s)n&&null!=n[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in n)s&&n[t]===s[t]||(t.includes("-")?e.style.setProperty(t,n[t]):e.style[t]=n[t])}else if("key"===t);else if("ref"===t)n&&n(e);else if(e.__lookupSetter__(t)||"o"!==t[0]||"n"!==t[1]){const r=d(n);if((o||r&&null!==n)&&!$)try{if(e.tagName.includes("-"))e[t]=n;else{const $=null==n?"":n;"list"===t?o=!1:null!=s&&e[t]==$||(e[t]=$)}}catch(e){}let i=!1;a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,i=!0),null==n||!1===n?!1===n&&""!==e.getAttribute(t)||(i?e.removeAttributeNS(c,t):e.removeAttribute(t)):(!o||4&l||$)&&!r&&(n=!0===n?"":n,i?e.setAttributeNS(c,t,n):e.setAttribute(t,n))}else if(t="-"===t[2]?t.slice(3):se(oe,a)?a.slice(2):a[2]+t.slice(3),s||n){const $=t.endsWith(R);t=t.replace(T,""),s&&ie.rel(e,t,s,$),n&&ie.ael(e,t,n,$)}}},S=/\s/,k=e=>e?e.split(S):[],R="Capture",T=new RegExp(R+"$"),x=(e,t,s,n)=>{const $=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,l=e&&e.$attrs$||f,o=t.$attrs$||f;for(n in l)n in o||w($,n,l[n],void 0,s,t.$flags$);for(n in o)w($,n,l[n],o[n],s,t.$flags$)},E=(e,l,r,i)=>{var c;const f=l.$children$[r];let d,m,u,h=0;if($||(o=!0,"slot"===f.$tag$&&(t&&i.classList.add(t+"-s"),f.$flags$|=f.$children$?2:1)),null!==f.$text$)d=f.$elm$=ae.createTextNode(f.$text$);else if(1&f.$flags$)d=f.$elm$=ae.createTextNode("");else{if(a||(a="svg"===f.$tag$),d=f.$elm$=ae.createElementNS(a?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&f.$flags$?"slot-fb":f.$tag$),a&&"foreignObject"===f.$tag$&&(a=!1),x(null,f,a),null!=t&&d["s-si"]!==t&&d.classList.add(d["s-si"]=t),f.$children$)for(h=0;h<f.$children$.length;++h)m=E(e,f,h,d),m&&d.appendChild(m);"svg"===f.$tag$?a=!1:"foreignObject"===d.tagName&&(a=!0)}return d["s-hn"]=n,3&f.$flags$&&(d["s-sr"]=!0,d["s-fs"]=null===(c=f.$attrs$)||void 0===c?void 0:c.slot,d["s-cr"]=s,d["s-sn"]=f.$name$||"",u=e&&e.$children$&&e.$children$[r],u&&u.$tag$===f.$tag$&&e.$elm$&&C(e.$elm$,!1)),d},C=(e,t)=>{var s;ie.$flags$|=1;const $=e.childNodes;for(let e=$.length-1;e>=0;e--){const l=$[e];l["s-hn"]!==n&&l["s-ol"]&&(M(l).insertBefore(l,O(l)),l["s-ol"].remove(),l["s-ol"]=void 0,l["s-sh"]=void 0,1===l.nodeType&&l.setAttribute("slot",null!==(s=l["s-sn"])&&void 0!==s?s:""),o=!0),t&&C(l,t)}ie.$flags$&=-2},L=(e,t,s,$,l,o)=>{let a,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowRoot&&r.tagName===n&&(r=r.shadowRoot);l<=o;++l)$[l]&&(a=E(null,s,l,e),a&&($[l].$elm$=a,r.insertBefore(a,O(t))))},A=(e,t,s)=>{for(let n=t;n<=s;++n){const t=e[n];if(t){const e=t.$elm$;W(t),e&&(l=!0,e["s-ol"]?e["s-ol"].remove():C(e,!0),e.remove())}}},j=(e,t)=>e.$tag$===t.$tag$&&("slot"===e.$tag$?e.$name$===t.$name$:e.$key$===t.$key$),O=e=>e&&e["s-ol"]||e,M=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,P=(e,t)=>{const s=t.$elm$=e.$elm$,n=e.$children$,$=t.$children$,l=t.$tag$,o=t.$text$;let r;null===o?(a="svg"===l||"foreignObject"!==l&&a,"slot"===l||x(e,t,a),null!==n&&null!==$?((e,t,s,n)=>{let $,l,o=0,a=0,r=0,i=0,c=t.length-1,f=t[0],d=t[c],m=n.length-1,u=n[0],h=n[m];for(;o<=c&&a<=m;)if(null==f)f=t[++o];else if(null==d)d=t[--c];else if(null==u)u=n[++a];else if(null==h)h=n[--m];else if(j(f,u))P(f,u),f=t[++o],u=n[++a];else if(j(d,h))P(d,h),d=t[--c],h=n[--m];else if(j(f,h))"slot"!==f.$tag$&&"slot"!==h.$tag$||C(f.$elm$.parentNode,!1),P(f,h),e.insertBefore(f.$elm$,d.$elm$.nextSibling),f=t[++o],h=n[--m];else if(j(d,u))"slot"!==f.$tag$&&"slot"!==h.$tag$||C(d.$elm$.parentNode,!1),P(d,u),e.insertBefore(d.$elm$,f.$elm$),d=t[--c],u=n[++a];else{for(r=-1,i=o;i<=c;++i)if(t[i]&&null!==t[i].$key$&&t[i].$key$===u.$key$){r=i;break}r>=0?(l=t[r],l.$tag$!==u.$tag$?$=E(t&&t[a],s,r,e):(P(l,u),t[r]=void 0,$=l.$elm$),u=n[++a]):($=E(t&&t[a],s,a,e),u=n[++a]),$&&M(f.$elm$).insertBefore($,O(f.$elm$))}o>c?L(e,null==n[m+1]?null:n[m+1].$elm$,s,n,a,m):a>m&&A(t,o,c)})(s,n,t,$):null!==$?(null!==e.$text$&&(s.textContent=""),L(s,null,t,$,0,$.length-1)):null!==n&&A(n,0,n.length-1),a&&"svg"===l&&(a=!1)):(r=s["s-cr"])?r.parentNode.textContent=o:e.$text$!==o&&(s.data=o)},B=e=>{const t=e.childNodes;for(const e of t)if(1===e.nodeType){if(e["s-sr"]){const s=e["s-sn"];e.hidden=!1;for(const n of t)if(n!==e)if(n["s-hn"]!==e["s-hn"]||""!==s){if(1===n.nodeType&&(s===n.getAttribute("slot")||s===n["s-sn"])){e.hidden=!0;break}}else if(1===n.nodeType||3===n.nodeType&&""!==n.textContent.trim()){e.hidden=!0;break}}B(e)}},U=[],_=e=>{let t,s,n;for(const $ of e.childNodes){if($["s-sr"]&&(t=$["s-cr"])&&t.parentNode){s=t.parentNode.childNodes;const e=$["s-sn"];for(n=s.length-1;n>=0;n--)if(t=s[n],!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==$["s-hn"])if(H(t,e)){let s=U.find((e=>e.$nodeToRelocate$===t));l=!0,t["s-sn"]=t["s-sn"]||e,s?(s.$nodeToRelocate$["s-sh"]=$["s-hn"],s.$slotRefNode$=$):(t["s-sh"]=$["s-hn"],U.push({$slotRefNode$:$,$nodeToRelocate$:t})),t["s-sr"]&&U.map((e=>{H(e.$nodeToRelocate$,t["s-sn"])&&(s=U.find((e=>e.$nodeToRelocate$===t)),s&&!e.$slotRefNode$&&(e.$slotRefNode$=s.$slotRefNode$))}))}else U.some((e=>e.$nodeToRelocate$===t))||U.push({$nodeToRelocate$:t})}1===$.nodeType&&_($)}},H=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,W=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(W)},D=(e,t)=>(e.$flags$|=16,e.$ancestorComponent$,pe((()=>F(e,t)))),F=(e,t)=>{const s=e.$hostElement$,n=(e.$cmpMeta$.$tagName$,()=>{}),$=s;let l;return l=J($,t?"componentWillLoad":"componentWillUpdate"),l=V(l,(()=>J($,"componentWillRender"))),n(),V(l,(()=>z(e,$,t)))},V=(e,t)=>q(e)?e.then(t):t(),q=e=>e instanceof Promise||e&&e.then&&"function"==typeof e.then,z=async(e,t,s)=>{const n=e.$hostElement$,$=(e.$cmpMeta$.$tagName$,()=>{});n["s-rc"],s&&(e=>{const t=e.$cmpMeta$,s=e.$hostElement$,n=t.$flags$,$=(t.$tagName$,()=>{}),l=((e,t,s)=>{var n;const $=N(t,s),l=$e.get($);if(e=11===e.nodeType?e:ae,l)if("string"==typeof l){e=e.head||e;let s,o=b.get(e);if(o||b.set(e,o=new Set),!o.has($)){{s=ae.createElement("style"),s.innerHTML=l;const t=null!==(n=ie.$nonce$)&&void 0!==n?n:function(e){var t,s,n;return null!==(n=null===(s=null===(t=e.head)||void 0===t?void 0:t.querySelector('meta[name="csp-nonce"]'))||void 0===s?void 0:s.getAttribute("content"))&&void 0!==n?n:void 0}(ae);null!=t&&s.setAttribute("nonce",t),e.insertBefore(s,e.querySelector("link"))}4&t.$flags$&&(s.innerHTML+="slot-fb{display:contents}slot-fb[hidden]{display:none}"),o&&o.add($)}}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return $})(ce&&s.shadowRoot?s.shadowRoot:s.getRootNode(),t,e.$modeName$);10&n&&(s["s-sc"]=l,s.classList.add(l+"-h"),2&n&&s.classList.add(l+"-s")),$()})(e);const l=(e.$cmpMeta$.$tagName$,()=>{});I(e,t,n,s),l(),$(),G(e)},I=(e,a,i,c)=>{try{r=a,a=a.render&&a.render(),e.$flags$&=-17,e.$flags$|=2,((e,a,r=!1)=>{var i,c;const f=e.$hostElement$,d=e.$cmpMeta$,h=e.$vnode$||u(null,null),p=g(a)?a:m(null,null,a);if(n=f.tagName,d.$attrsToReflect$&&(p.$attrs$=p.$attrs$||{},d.$attrsToReflect$.map((([e,t])=>p.$attrs$[t]=f[e]))),r&&p.$attrs$)for(const e of Object.keys(p.$attrs$))f.hasAttribute(e)&&!["key","ref","style","class"].includes(e)&&(p.$attrs$[e]=f[e]);if(p.$tag$=null,p.$flags$|=4,e.$vnode$=p,p.$elm$=h.$elm$=f.shadowRoot||f,t=f["s-sc"],s=f["s-cr"],$=ce&&0!=(1&d.$flags$),l=!1,P(h,p),ie.$flags$|=1,o){_(p.$elm$);for(const e of U){const t=e.$nodeToRelocate$;if(!t["s-ol"]){const e=ae.createTextNode("");e["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=e,t)}}for(const e of U){const t=e.$nodeToRelocate$,s=e.$slotRefNode$;if(s){const e=s.parentNode;let n=s.nextSibling;{let s=null===(i=t["s-ol"])||void 0===i?void 0:i.previousSibling;for(;s;){let $=null!==(c=s["s-nr"])&&void 0!==c?c:null;if($&&$["s-sn"]===t["s-sn"]&&e===$.parentNode&&($=$.nextSibling,!$||!$["s-nr"])){n=$;break}s=s.previousSibling}}(!n&&e!==t.parentNode||t.nextSibling!==n)&&t!==n&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),e.insertBefore(t,n))}else 1===t.nodeType&&(t.hidden=!0)}}l&&B(p.$elm$),ie.$flags$&=-2,U.length=0})(e,a,c)}catch(t){ne(t,e.$hostElement$)}return r=null,null},G=e=>{e.$cmpMeta$.$tagName$;const t=e.$hostElement$;e.$ancestorComponent$,J(t,"componentDidRender"),64&e.$flags$?J(t,"componentDidUpdate"):(e.$flags$|=64,J(t,"componentDidLoad"))},J=(e,t,s)=>{if(e&&e[t])try{return e[t](s)}catch(e){ne(e)}},K=(e,t,s)=>{var n;const $=e.prototype;if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const s=Object.entries(t.$members$);s.map((([e,[s]])=>{(31&s||32&s)&&Object.defineProperty($,e,{get(){return t=e,te(this).$instanceValues$.get(t);var t},set(s){((e,t,s,n)=>{const $=te(e),l=e,o=$.$instanceValues$.get(t),a=$.$flags$,r=l;var i,c;i=s,c=n.$members$[t][0],s=null==i||d(i)?i:4&c?"false"!==i&&(""===i||!!i):2&c?parseFloat(i):1&c?String(i):i;const f=Number.isNaN(o)&&Number.isNaN(s);if(s!==o&&!f){if($.$instanceValues$.set(t,s),n.$watchers$&&128&a){const e=n.$watchers$[t];e&&e.map((e=>{try{r[e](s,o,t)}catch(e){ne(e,l)}}))}if(2==(18&a)){if(r.componentShouldUpdate&&!1===r.componentShouldUpdate(s,o,t))return;D($,!1)}}})(this,e,s,t)},configurable:!0,enumerable:!0})}));{const l=new Map;$.attributeChangedCallback=function(e,s,n){ie.jmp((()=>{var o;const a=l.get(e);if(this.hasOwnProperty(a))n=this[a],delete this[a];else{if($.hasOwnProperty(a)&&"number"==typeof this[a]&&this[a]==n)return;if(null==a){const $=te(this),l=null==$?void 0:$.$flags$;if(l&&!(8&l)&&128&l&&n!==s){const $=this,l=null===(o=t.$watchers$)||void 0===o?void 0:o[e];null==l||l.forEach((t=>{null!=$[t]&&$[t].call($,n,s,e)}))}return}}this[a]=(null!==n||"boolean"!=typeof this[a])&&n}))},e.observedAttributes=Array.from(new Set([...Object.keys(null!==(n=t.$watchers$)&&void 0!==n?n:{}),...s.filter((([e,t])=>15&t[0])).map((([e,s])=>{var n;const $=s[1]||e;return l.set($,e),512&s[0]&&(null===(n=t.$attrsToReflect$)||void 0===n||n.push([e,$])),$}))]))}}return e},Q=(e,t,s,n)=>{s&&s.map((([s,n,$])=>{const l=Y(e,s),o=X(t,$),a=Z(s);ie.ael(l,n,o,a),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>ie.rel(l,n,o,a)))}))},X=(e,t)=>s=>{try{e.$hostElement$[t](s)}catch(e){ne(e)}},Y=(e,t)=>4&t?ae:8&t?oe:16&t?ae.body:e,Z=e=>fe?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e),ee=new WeakMap,te=e=>ee.get(e),se=(e,t)=>t in e,ne=(e,t)=>(0,console.error)(e,t),$e=new Map,le=[],oe="undefined"!=typeof window?window:{},ae=oe.document||{head:{}},re=oe.HTMLElement||class{},ie={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,n)=>e.addEventListener(t,s,n),rel:(e,t,s,n)=>e.removeEventListener(t,s,n),ce:(e,t)=>new CustomEvent(e,t)},ce=!0,fe=(()=>{let e=!1;try{ae.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(e){}return e})(),de=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),me=[],ue=[],he=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){ne(e)}e.length=0},ge=()=>{he(me),he(ue),(i=me.length>0)&&ie.raf(ge)},pe=(ye=ue,!0,e=>{ye.push(e),i||(i=!0,4&ie.$flags$?(e=>{Promise.resolve(void 0).then(e)})(ge):ie.raf(ge))});var ye;e.Fragment=(e,t)=>t,e.H=re,e.Host=h,e.createEvent=(e,t,s)=>{const n=e;return{emit:e=>((e,t,s)=>{const n=ie.ce(t,s);return e.dispatchEvent(n),n})(n,t,{bubbles:!!(4&s),composed:!!(2&s),cancelable:!!(1&s),detail:e})}},e.getAssetPath=e=>{const t=new URL(e,ie.$resourcesUrl$);return t.origin!==oe.location.origin?t.href:t.pathname},e.h=m,e.proxyCustomElement=(e,t)=>{const s={$flags$:t[0],$tagName$:t[1]};s.$members$=t[2],s.$listeners$=t[3],s.$watchers$=e.$watchers$,s.$attrsToReflect$=[],!ce&&1&s.$flags$&&(s.$flags$|=8);const n=e.prototype.connectedCallback,$=e.prototype.disconnectedCallback;return Object.assign(e.prototype,{__registerHost(){((e,t)=>{const s={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};Q(e,s,t.$listeners$),ee.set(e,s)})(this,s)},connectedCallback(){(e=>{if(0==(1&ie.$flags$)){const t=te(e),s=t.$cmpMeta$,n=(s.$tagName$,()=>{});1&t.$flags$?(Q(e,t,s.$listeners$),(null==t?void 0:t.$lazyInstance$)?t.$lazyInstance$:(null==t?void 0:t.$onReadyPromise$)&&t.$onReadyPromise$.then((()=>{t.$lazyInstance$}))):(t.$flags$|=1,12&s.$flags$&&(e=>{const t=e["s-cr"]=ae.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e),s.$members$&&Object.entries(s.$members$).map((([t,[s]])=>{if(31&s&&e.hasOwnProperty(t)){const s=e[t];delete e[t],e[t]=s}})),(async(e,t,s,n)=>{let $;if(0==(32&t.$flags$)&&(t.$flags$|=32,$=e.constructor,customElements.whenDefined(s.$tagName$).then((()=>t.$flags$|=128)),$.style)){let n=$.style;"string"!=typeof n&&(n=n[t.$modeName$=(e=>le.map((t=>t(e))).find((e=>!!e)))(e)]);const l=N(s,t.$modeName$);if(!$e.has(l)){const e=(s.$tagName$,()=>{});((e,t,s)=>{let n=$e.get(e);de&&s?(n=n||new CSSStyleSheet,"string"==typeof n?n=t:n.replaceSync(t)):n=t,$e.set(e,n)})(l,n,!!(1&s.$flags$)),e()}}t.$ancestorComponent$,D(t,!0)})(e,t,s)),n()}})(this),n&&n.call(this)},disconnectedCallback(){(async e=>{if(0==(1&ie.$flags$)){const t=te(e);t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0)}})(this),$&&$.call(this)},__attachShadow(){ce?this.attachShadow({mode:"open",delegatesFocus:!!(16&s.$flags$)}):this.shadowRoot=this}}),e.is=s.$tagName$,K(e,s)},e.setAssetPath=e=>ie.$resourcesUrl$=e,e.setNonce=e=>ie.$nonce$=e,e.setPlatformOptions=e=>Object.assign(ie,e)}));