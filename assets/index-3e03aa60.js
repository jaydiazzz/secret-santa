(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function gr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const J={},qt=[],ke=()=>{},Tu=()=>!1,Su=/^on[^a-z]/,Vs=t=>Su.test(t),mr=t=>t.startsWith("onUpdate:"),he=Object.assign,yr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},xu=Object.prototype.hasOwnProperty,H=(t,e)=>xu.call(t,e),P=Array.isArray,Gt=t=>zs(t)==="[object Map]",zl=t=>zs(t)==="[object Set]",M=t=>typeof t=="function",ue=t=>typeof t=="string",js=t=>typeof t=="symbol",te=t=>t!==null&&typeof t=="object",Kl=t=>(te(t)||M(t))&&M(t.then)&&M(t.catch),ql=Object.prototype.toString,zs=t=>ql.call(t),Nu=t=>zs(t).slice(8,-1),Gl=t=>zs(t)==="[object Object]",vr=t=>ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ys=gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ks=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ru=/-(\w)/g,Ve=Ks(t=>t.replace(Ru,(e,n)=>n?n.toUpperCase():"")),Au=/\B([A-Z])/g,un=Ks(t=>t.replace(Au,"-$1").toLowerCase()),qs=Ks(t=>t.charAt(0).toUpperCase()+t.slice(1)),mi=Ks(t=>t?`on${qs(t)}`:""),Pt=(t,e)=>!Object.is(t,e),vs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},bs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Bi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let vo;const Ui=()=>vo||(vo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cr(t){if(P(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ue(s)?Mu(s):Cr(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ue(t)||te(t))return t}const Pu=/;(?![^(]*\))/g,Ou=/:([^]+)/,Du=/\/\*[^]*?\*\//g;function Mu(t){const e={};return t.replace(Du,"").split(Pu).forEach(n=>{if(n){const s=n.split(Ou);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Gs(t){let e="";if(ue(t))e=t;else if(P(t))for(let n=0;n<t.length;n++){const s=Gs(t[n]);s&&(e+=s+" ")}else if(te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ku="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fu=gr(ku);function Yl(t){return!!t||t===""}const Co=t=>ue(t)?t:t==null?"":P(t)||te(t)&&(t.toString===ql||!M(t.toString))?JSON.stringify(t,Ql,2):String(t),Ql=(t,e)=>e&&e.__v_isRef?Ql(t,e.value):Gt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:zl(e)?{[`Set(${e.size})`]:[...e.values()]}:te(e)&&!P(e)&&!Gl(e)?String(e):e;let Ne;class Lu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ne,!e&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ne;try{return Ne=this,e()}finally{Ne=n}}}on(){Ne=this}off(){Ne=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Bu(t,e=Ne){e&&e.active&&e.effects.push(t)}function Uu(){return Ne}const Er=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Xl=t=>(t.w&ct)>0,Jl=t=>(t.n&ct)>0,Wu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ct},Hu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Xl(i)&&!Jl(i)?i.delete(t):e[n++]=i,i.w&=~ct,i.n&=~ct}e.length=n}},Wi=new WeakMap;let Sn=0,ct=1;const Hi=30;let Ae;const Nt=Symbol(""),$i=Symbol("");class br{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Bu(this,s)}run(){if(!this.active)return this.fn();let e=Ae,n=st;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ae,Ae=this,st=!0,ct=1<<++Sn,Sn<=Hi?Wu(this):Eo(this),this.fn()}finally{Sn<=Hi&&Hu(this),ct=1<<--Sn,Ae=this.parent,st=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(Eo(this),this.onStop&&this.onStop(),this.active=!1)}}function Eo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let st=!0;const Zl=[];function hn(){Zl.push(st),st=!1}function fn(){const t=Zl.pop();st=t===void 0?!0:t}function Ie(t,e,n){if(st&&Ae){let s=Wi.get(t);s||Wi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Er()),ea(i)}}function ea(t,e){let n=!1;Sn<=Hi?Jl(t)||(t.n|=ct,n=!Xl(t)):n=!t.has(Ae),n&&(t.add(Ae),Ae.deps.push(t))}function Ge(t,e,n,s,i,r){const o=Wi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&P(t)){const a=Number(s);o.forEach((c,u)=>{(u==="length"||!js(u)&&u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":P(t)?vr(n)&&l.push(o.get("length")):(l.push(o.get(Nt)),Gt(t)&&l.push(o.get($i)));break;case"delete":P(t)||(l.push(o.get(Nt)),Gt(t)&&l.push(o.get($i)));break;case"set":Gt(t)&&l.push(o.get(Nt));break}if(l.length===1)l[0]&&Vi(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Vi(Er(a))}}function Vi(t,e){const n=P(t)?t:[...t];for(const s of n)s.computed&&bo(s);for(const s of n)s.computed||bo(s)}function bo(t,e){(t!==Ae||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const $u=gr("__proto__,__v_isRef,__isVue"),ta=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(js)),wo=Vu();function Vu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=V(this);for(let r=0,o=this.length;r<o;r++)Ie(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(V)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){hn();const s=V(this)[e].apply(this,n);return fn(),s}}),t}function ju(t){const e=V(this);return Ie(e,"has",t),e.hasOwnProperty(t)}class na{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw"&&s===(i?r?sh:oa:r?ra:ia).get(e))return e;const o=P(e);if(!i){if(o&&H(wo,n))return Reflect.get(wo,n,s);if(n==="hasOwnProperty")return ju}const l=Reflect.get(e,n,s);return(js(n)?ta.has(n):$u(n))||(i||Ie(e,"get",n),r)?l:_e(l)?o&&vr(n)?l:l.value:te(l)?i?la(l):Tr(l):l}}class sa extends na{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(tn(r)&&_e(r)&&!_e(s))return!1;if(!this._shallow&&(!ws(s)&&!tn(s)&&(r=V(r),s=V(s)),!P(e)&&_e(r)&&!_e(s)))return r.value=s,!0;const o=P(e)&&vr(n)?Number(n)<e.length:H(e,n),l=Reflect.set(e,n,s,i);return e===V(i)&&(o?Pt(s,r)&&Ge(e,"set",n,s):Ge(e,"add",n,s)),l}deleteProperty(e,n){const s=H(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Ge(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!js(n)||!ta.has(n))&&Ie(e,"has",n),s}ownKeys(e){return Ie(e,"iterate",P(e)?"length":Nt),Reflect.ownKeys(e)}}class zu extends na{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ku=new sa,qu=new zu,Gu=new sa(!0),wr=t=>t,Ys=t=>Reflect.getPrototypeOf(t);function cs(t,e,n=!1,s=!1){t=t.__v_raw;const i=V(t),r=V(e);n||(Pt(e,r)&&Ie(i,"get",e),Ie(i,"get",r));const{has:o}=Ys(i),l=s?wr:n?xr:kn;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function us(t,e=!1){const n=this.__v_raw,s=V(n),i=V(t);return e||(Pt(t,i)&&Ie(s,"has",t),Ie(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function hs(t,e=!1){return t=t.__v_raw,!e&&Ie(V(t),"iterate",Nt),Reflect.get(t,"size",t)}function Io(t){t=V(t);const e=V(this);return Ys(e).has.call(e,t)||(e.add(t),Ge(e,"add",t,t)),this}function To(t,e){e=V(e);const n=V(this),{has:s,get:i}=Ys(n);let r=s.call(n,t);r||(t=V(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Pt(e,o)&&Ge(n,"set",t,e):Ge(n,"add",t,e),this}function So(t){const e=V(this),{has:n,get:s}=Ys(e);let i=n.call(e,t);i||(t=V(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Ge(e,"delete",t,void 0),r}function xo(){const t=V(this),e=t.size!==0,n=t.clear();return e&&Ge(t,"clear",void 0,void 0),n}function fs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=V(o),a=e?wr:t?xr:kn;return!t&&Ie(l,"iterate",Nt),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function ds(t,e,n){return function(...s){const i=this.__v_raw,r=V(i),o=Gt(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?wr:e?xr:kn;return!e&&Ie(r,"iterate",a?$i:Nt),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function tt(t){return function(...e){return t==="delete"?!1:this}}function Yu(){const t={get(r){return cs(this,r)},get size(){return hs(this)},has:us,add:Io,set:To,delete:So,clear:xo,forEach:fs(!1,!1)},e={get(r){return cs(this,r,!1,!0)},get size(){return hs(this)},has:us,add:Io,set:To,delete:So,clear:xo,forEach:fs(!1,!0)},n={get(r){return cs(this,r,!0)},get size(){return hs(this,!0)},has(r){return us.call(this,r,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:fs(!0,!1)},s={get(r){return cs(this,r,!0,!0)},get size(){return hs(this,!0)},has(r){return us.call(this,r,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:fs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ds(r,!1,!1),n[r]=ds(r,!0,!1),e[r]=ds(r,!1,!0),s[r]=ds(r,!0,!0)}),[t,n,e,s]}const[Qu,Xu,Ju,Zu]=Yu();function Ir(t,e){const n=e?t?Zu:Ju:t?Xu:Qu;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(H(n,i)&&i in s?n:s,i,r)}const eh={get:Ir(!1,!1)},th={get:Ir(!1,!0)},nh={get:Ir(!0,!1)},ia=new WeakMap,ra=new WeakMap,oa=new WeakMap,sh=new WeakMap;function ih(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rh(t){return t.__v_skip||!Object.isExtensible(t)?0:ih(Nu(t))}function Tr(t){return tn(t)?t:Sr(t,!1,Ku,eh,ia)}function oh(t){return Sr(t,!1,Gu,th,ra)}function la(t){return Sr(t,!0,qu,nh,oa)}function Sr(t,e,n,s,i){if(!te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=rh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Yt(t){return tn(t)?Yt(t.__v_raw):!!(t&&t.__v_isReactive)}function tn(t){return!!(t&&t.__v_isReadonly)}function ws(t){return!!(t&&t.__v_isShallow)}function aa(t){return Yt(t)||tn(t)}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function ca(t){return bs(t,"__v_skip",!0),t}const kn=t=>te(t)?Tr(t):t,xr=t=>te(t)?la(t):t;function ua(t){st&&Ae&&(t=V(t),ea(t.dep||(t.dep=Er())))}function ha(t,e){t=V(t);const n=t.dep;n&&Vi(n)}function _e(t){return!!(t&&t.__v_isRef===!0)}function yi(t){return lh(t,!1)}function lh(t,e){return _e(t)?t:new ah(t,e)}class ah{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:V(e),this._value=n?e:kn(e)}get value(){return ua(this),this._value}set value(e){const n=this.__v_isShallow||ws(e)||tn(e);e=n?e:V(e),Pt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:kn(e),ha(this))}}function ch(t){return _e(t)?t.value:t}const uh={get:(t,e,n)=>ch(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return _e(i)&&!_e(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function fa(t){return Yt(t)?t:new Proxy(t,uh)}class hh{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new br(e,()=>{this._dirty||(this._dirty=!0,ha(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=V(this);return ua(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function fh(t,e,n=!1){let s,i;const r=M(t);return r?(s=t,i=ke):(s=t.get,i=t.set),new hh(s,i,r||!i,n)}function it(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Qn(r,e,n)}return i}function Fe(t,e,n,s){if(M(t)){const r=it(t,e,n,s);return r&&Kl(r)&&r.catch(o=>{Qn(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Fe(t[r],e,n,s));return i}function Qn(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){it(a,null,10,[t,o,l]);return}}dh(t,n,i,s)}function dh(t,e,n,s=!0){console.error(t)}let Fn=!1,ji=!1;const pe=[];let $e=0;const Qt=[];let Ke=null,bt=0;const da=Promise.resolve();let Nr=null;function pa(t){const e=Nr||da;return t?e.then(this?t.bind(this):t):e}function ph(t){let e=$e+1,n=pe.length;for(;e<n;){const s=e+n>>>1,i=pe[s],r=Ln(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Qs(t){(!pe.length||!pe.includes(t,Fn&&t.allowRecurse?$e+1:$e))&&(t.id==null?pe.push(t):pe.splice(ph(t.id),0,t),_a())}function _a(){!Fn&&!ji&&(ji=!0,Nr=da.then(ma))}function _h(t){const e=pe.indexOf(t);e>$e&&pe.splice(e,1)}function gh(t){P(t)?Qt.push(...t):(!Ke||!Ke.includes(t,t.allowRecurse?bt+1:bt))&&Qt.push(t),_a()}function No(t,e=Fn?$e+1:0){for(;e<pe.length;e++){const n=pe[e];n&&n.pre&&(pe.splice(e,1),e--,n())}}function ga(t){if(Qt.length){const e=[...new Set(Qt)];if(Qt.length=0,Ke){Ke.push(...e);return}for(Ke=e,Ke.sort((n,s)=>Ln(n)-Ln(s)),bt=0;bt<Ke.length;bt++)Ke[bt]();Ke=null,bt=0}}const Ln=t=>t.id==null?1/0:t.id,mh=(t,e)=>{const n=Ln(t)-Ln(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ma(t){ji=!1,Fn=!0,pe.sort(mh);const e=ke;try{for($e=0;$e<pe.length;$e++){const n=pe[$e];n&&n.active!==!1&&it(n,null,14)}}finally{$e=0,pe.length=0,ga(),Fn=!1,Nr=null,(pe.length||Qt.length)&&ma()}}function yh(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||J;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||J;d&&(i=n.map(g=>ue(g)?g.trim():g)),h&&(i=n.map(Bi))}let l,a=s[l=mi(e)]||s[l=mi(Ve(e))];!a&&r&&(a=s[l=mi(un(e))]),a&&Fe(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Fe(c,t,6,i)}}function ya(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!M(t)){const a=c=>{const u=ya(c,e,!0);u&&(l=!0,he(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(te(t)&&s.set(t,null),null):(P(r)?r.forEach(a=>o[a]=null):he(o,r),te(t)&&s.set(t,o),o)}function Xs(t,e){return!t||!Vs(e)?!1:(e=e.slice(2).replace(/Once$/,""),H(t,e[0].toLowerCase()+e.slice(1))||H(t,un(e))||H(t,e))}let ge=null,va=null;function Is(t){const e=ge;return ge=t,va=t&&t.type.__scopeId||null,e}function Ca(t,e=ge,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Uo(-1);const r=Is(e);let o;try{o=t(...i)}finally{Is(r),s._d&&Uo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function vi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:g,ctx:v,inheritAttrs:S}=t;let O,z;const W=Is(t);try{if(n.shapeFlag&4){const k=i||s;O=He(u.call(k,k,h,r,g,d,v)),z=a}else{const k=e;O=He(k.length>1?k(r,{attrs:a,slots:l,emit:c}):k(r,null)),z=e.props?a:vh(a)}}catch(k){An.length=0,Qn(k,t,1),O=Ce(ut)}let ne=O;if(z&&S!==!1){const k=Object.keys(z),{shapeFlag:et}=ne;k.length&&et&7&&(o&&k.some(mr)&&(z=Ch(z,o)),ne=nn(ne,z))}return n.dirs&&(ne=nn(ne),ne.dirs=ne.dirs?ne.dirs.concat(n.dirs):n.dirs),n.transition&&(ne.transition=n.transition),O=ne,Is(W),O}const vh=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vs(n))&&((e||(e={}))[n]=t[n]);return e},Ch=(t,e)=>{const n={};for(const s in t)(!mr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Eh(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Ro(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Xs(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Ro(s,o,c):!0:!!o;return!1}function Ro(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Xs(n,r))return!0}return!1}function bh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ea="components";function wh(t,e){return Th(Ea,t,!0,e)||t}const Ih=Symbol.for("v-ndc");function Th(t,e,n=!0,s=!1){const i=ge||ce;if(i){const r=i.type;if(t===Ea){const l=bf(r,!1);if(l&&(l===e||l===Ve(e)||l===qs(Ve(e))))return r}const o=Ao(i[t]||r[t],e)||Ao(i.appContext[t],e);return!o&&s?r:o}}function Ao(t,e){return t&&(t[e]||t[Ve(e)]||t[qs(Ve(e))])}const Sh=t=>t.__isSuspense;function xh(t,e){e&&e.pendingBranch?P(t)?e.effects.push(...t):e.effects.push(t):gh(t)}const ps={};function Ci(t,e,n){return ba(t,e,n)}function ba(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=J){var l;const a=Uu()===((l=ce)==null?void 0:l.scope)?ce:null;let c,u=!1,h=!1;if(_e(t)?(c=()=>t.value,u=ws(t)):Yt(t)?(c=()=>t,s=!0):P(t)?(h=!0,u=t.some(k=>Yt(k)||ws(k)),c=()=>t.map(k=>{if(_e(k))return k.value;if(Yt(k))return Tt(k);if(M(k))return it(k,a,2)})):M(t)?e?c=()=>it(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),Fe(t,a,3,[g])}:c=ke,e&&s){const k=c;c=()=>Tt(k())}let d,g=k=>{d=W.onStop=()=>{it(k,a,4)}},v;if(rn)if(g=ke,e?n&&Fe(e,a,3,[c(),h?[]:void 0,g]):c(),i==="sync"){const k=Sf();v=k.__watcherHandles||(k.__watcherHandles=[])}else return ke;let S=h?new Array(t.length).fill(ps):ps;const O=()=>{if(W.active)if(e){const k=W.run();(s||u||(h?k.some((et,mn)=>Pt(et,S[mn])):Pt(k,S)))&&(d&&d(),Fe(e,a,3,[k,S===ps?void 0:h&&S[0]===ps?[]:S,g]),S=k)}else W.run()};O.allowRecurse=!!e;let z;i==="sync"?z=O:i==="post"?z=()=>Ee(O,a&&a.suspense):(O.pre=!0,a&&(O.id=a.uid),z=()=>Qs(O));const W=new br(c,z);e?n?O():S=W.run():i==="post"?Ee(W.run.bind(W),a&&a.suspense):W.run();const ne=()=>{W.stop(),a&&a.scope&&yr(a.scope.effects,W)};return v&&v.push(ne),ne}function Nh(t,e,n){const s=this.proxy,i=ue(t)?t.includes(".")?wa(s,t):()=>s[t]:t.bind(s,s);let r;M(e)?r=e:(r=e.handler,n=e);const o=ce;sn(this);const l=ba(i,r.bind(s),n);return o?sn(o):Rt(),l}function wa(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Tt(t,e){if(!te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),_e(t))Tt(t.value,e);else if(P(t))for(let n=0;n<t.length;n++)Tt(t[n],e);else if(zl(t)||Gt(t))t.forEach(n=>{Tt(n,e)});else if(Gl(t))for(const n in t)Tt(t[n],e);return t}function Rh(t,e){const n=ge;if(n===null)return t;const s=ti(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=J]=e[r];o&&(M(o)&&(o={mounted:o,updated:o}),o.deep&&Tt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function yt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(hn(),Fe(a,n,8,[t.el,l,t,e]),fn())}}/*! #__NO_SIDE_EFFECTS__ */function Ah(t,e){return M(t)?(()=>he({name:t.name},e,{setup:t}))():t}const Nn=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Ph(t){M(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:i=200,timeout:r,suspensible:o=!0,onError:l}=t;let a=null,c,u=0;const h=()=>(u++,a=null,d()),d=()=>{let g;return a||(g=a=e().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),l)return new Promise((S,O)=>{l(v,()=>S(h()),()=>O(v),u+1)});throw v}).then(v=>g!==a&&a?a:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),c=v,v)))};return Ah({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return c},setup(){const g=ce;if(c)return()=>Ei(c,g);const v=W=>{a=null,Qn(W,g,13,!s)};if(o&&g.suspense||rn)return d().then(W=>()=>Ei(W,g)).catch(W=>(v(W),()=>s?Ce(s,{error:W}):null));const S=yi(!1),O=yi(),z=yi(!!i);return i&&setTimeout(()=>{z.value=!1},i),r!=null&&setTimeout(()=>{if(!S.value&&!O.value){const W=new Error(`Async component timed out after ${r}ms.`);v(W),O.value=W}},r),d().then(()=>{S.value=!0,g.parent&&Rr(g.parent.vnode)&&Qs(g.parent.update)}).catch(W=>{v(W),O.value=W}),()=>{if(S.value&&c)return Ei(c,g);if(O.value&&s)return Ce(s,{error:O.value});if(n&&!z.value)return Ce(n)}}})}function Ei(t,e){const{ref:n,props:s,children:i,ce:r}=e.vnode,o=Ce(t,s,i);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const Rr=t=>t.type.__isKeepAlive;function Oh(t,e){Ia(t,"a",e)}function Dh(t,e){Ia(t,"da",e)}function Ia(t,e,n=ce){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Js(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Rr(i.parent.vnode)&&Mh(s,e,n,i),i=i.parent}}function Mh(t,e,n,s){const i=Js(e,t,s,!0);Ta(()=>{yr(s[e],i)},n)}function Js(t,e,n=ce,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;hn(),sn(n);const l=Fe(e,n,t,o);return Rt(),fn(),l});return s?i.unshift(r):i.push(r),r}}const Xe=t=>(e,n=ce)=>(!rn||t==="sp")&&Js(t,(...s)=>e(...s),n),kh=Xe("bm"),Fh=Xe("m"),Lh=Xe("bu"),Bh=Xe("u"),Uh=Xe("bum"),Ta=Xe("um"),Wh=Xe("sp"),Hh=Xe("rtg"),$h=Xe("rtc");function Vh(t,e=ce){Js("ec",t,e)}function iy(t,e,n={},s,i){if(ge.isCE||ge.parent&&Nn(ge.parent)&&ge.parent.isCE)return e!=="default"&&(n.name=e),Ce("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),wt();const o=r&&Sa(r(n)),l=Fa(Re,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function Sa(t){return t.some(e=>La(e)?!(e.type===ut||e.type===Re&&!Sa(e.children)):!0)?t:null}const zi=t=>t?Ua(t)?ti(t)||t.proxy:zi(t.parent):null,Rn=he(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zi(t.parent),$root:t=>zi(t.root),$emit:t=>t.emit,$options:t=>Ar(t),$forceUpdate:t=>t.f||(t.f=()=>Qs(t.update)),$nextTick:t=>t.n||(t.n=pa.bind(t.proxy)),$watch:t=>Nh.bind(t)}),bi=(t,e)=>t!==J&&!t.__isScriptSetup&&H(t,e),jh={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(bi(s,e))return o[e]=1,s[e];if(i!==J&&H(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&H(c,e))return o[e]=3,r[e];if(n!==J&&H(n,e))return o[e]=4,n[e];Ki&&(o[e]=0)}}const u=Rn[e];let h,d;if(u)return e==="$attrs"&&Ie(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==J&&H(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,H(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return bi(i,e)?(i[e]=n,!0):s!==J&&H(s,e)?(s[e]=n,!0):H(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==J&&H(t,o)||bi(e,o)||(l=r[0])&&H(l,o)||H(s,o)||H(Rn,o)||H(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:H(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Po(t){return P(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ki=!0;function zh(t){const e=Ar(t),n=t.proxy,s=t.ctx;Ki=!1,e.beforeCreate&&Oo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:v,activated:S,deactivated:O,beforeDestroy:z,beforeUnmount:W,destroyed:ne,unmounted:k,render:et,renderTracked:mn,renderTriggered:is,errorCaptured:pt,serverPrefetch:di,expose:_t,inheritAttrs:yn,components:rs,directives:os,filters:pi}=e;if(c&&Kh(c,s,null),o)for(const Z in o){const q=o[Z];M(q)&&(s[Z]=q.bind(n))}if(i){const Z=i.call(n,n);te(Z)&&(t.data=Tr(Z))}if(Ki=!0,r)for(const Z in r){const q=r[Z],gt=M(q)?q.bind(n,n):M(q.get)?q.get.bind(n,n):ke,ls=!M(q)&&M(q.set)?q.set.bind(n):ke,mt=If({get:gt,set:ls});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>mt.value,set:Be=>mt.value=Be})}if(l)for(const Z in l)xa(l[Z],s,n,Z);if(a){const Z=M(a)?a.call(n):a;Reflect.ownKeys(Z).forEach(q=>{Jh(q,Z[q])})}u&&Oo(u,t,"c");function me(Z,q){P(q)?q.forEach(gt=>Z(gt.bind(n))):q&&Z(q.bind(n))}if(me(kh,h),me(Fh,d),me(Lh,g),me(Bh,v),me(Oh,S),me(Dh,O),me(Vh,pt),me($h,mn),me(Hh,is),me(Uh,W),me(Ta,k),me(Wh,di),P(_t))if(_t.length){const Z=t.exposed||(t.exposed={});_t.forEach(q=>{Object.defineProperty(Z,q,{get:()=>n[q],set:gt=>n[q]=gt})})}else t.exposed||(t.exposed={});et&&t.render===ke&&(t.render=et),yn!=null&&(t.inheritAttrs=yn),rs&&(t.components=rs),os&&(t.directives=os)}function Kh(t,e,n=ke){P(t)&&(t=qi(t));for(const s in t){const i=t[s];let r;te(i)?"default"in i?r=Cs(i.from||s,i.default,!0):r=Cs(i.from||s):r=Cs(i),_e(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Oo(t,e,n){Fe(P(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function xa(t,e,n,s){const i=s.includes(".")?wa(n,s):()=>n[s];if(ue(t)){const r=e[t];M(r)&&Ci(i,r)}else if(M(t))Ci(i,t.bind(n));else if(te(t))if(P(t))t.forEach(r=>xa(r,e,n,s));else{const r=M(t.handler)?t.handler.bind(n):e[t.handler];M(r)&&Ci(i,r,t)}}function Ar(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Ts(a,c,o,!0)),Ts(a,e,o)),te(e)&&r.set(e,a),a}function Ts(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ts(t,r,n,!0),i&&i.forEach(o=>Ts(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=qh[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const qh={data:Do,props:Mo,emits:Mo,methods:xn,computed:xn,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:xn,directives:xn,watch:Yh,provide:Do,inject:Gh};function Do(t,e){return e?t?function(){return he(M(t)?t.call(this,this):t,M(e)?e.call(this,this):e)}:e:t}function Gh(t,e){return xn(qi(t),qi(e))}function qi(t){if(P(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ye(t,e){return t?[...new Set([].concat(t,e))]:e}function xn(t,e){return t?he(Object.create(null),t,e):e}function Mo(t,e){return t?P(t)&&P(e)?[...new Set([...t,...e])]:he(Object.create(null),Po(t),Po(e??{})):e}function Yh(t,e){if(!t)return e;if(!e)return t;const n=he(Object.create(null),t);for(const s in e)n[s]=ye(t[s],e[s]);return n}function Na(){return{app:null,config:{isNativeTag:Tu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qh=0;function Xh(t,e){return function(s,i=null){M(s)||(s=he({},s)),i!=null&&!te(i)&&(i=null);const r=Na(),o=new WeakSet;let l=!1;const a=r.app={_uid:Qh++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:xf,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&M(c.install)?(o.add(c),c.install(a,...u)):M(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=Ce(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,ti(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a},runWithContext(c){Ss=a;try{return c()}finally{Ss=null}}};return a}}let Ss=null;function Jh(t,e){if(ce){let n=ce.provides;const s=ce.parent&&ce.parent.provides;s===n&&(n=ce.provides=Object.create(s)),n[t]=e}}function Cs(t,e,n=!1){const s=ce||ge;if(s||Ss){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ss._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&M(e)?e.call(s&&s.proxy):e}}function Zh(t,e,n,s=!1){const i={},r={};bs(r,ei,1),t.propsDefaults=Object.create(null),Ra(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:oh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function ef(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=V(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Xs(t.emitsOptions,d))continue;const g=e[d];if(a)if(H(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const v=Ve(d);i[v]=Gi(a,l,v,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{Ra(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!H(e,h)&&((u=un(h))===h||!H(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Gi(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!H(e,h))&&(delete r[h],c=!0)}c&&Ge(t,"set","$attrs")}function Ra(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(ys(a))continue;const c=e[a];let u;i&&H(i,u=Ve(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Xs(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=V(n),c=l||J;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Gi(i,a,h,c[h],t,!H(c,h))}}return o}function Gi(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=H(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&M(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(sn(i),s=c[n]=a.call(null,e),Rt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===un(n))&&(s=!0))}return s}function Aa(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!M(t)){const u=h=>{a=!0;const[d,g]=Aa(h,e,!0);he(o,d),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return te(t)&&s.set(t,qt),qt;if(P(r))for(let u=0;u<r.length;u++){const h=Ve(r[u]);ko(h)&&(o[h]=J)}else if(r)for(const u in r){const h=Ve(u);if(ko(h)){const d=r[u],g=o[h]=P(d)||M(d)?{type:d}:he({},d);if(g){const v=Bo(Boolean,g.type),S=Bo(String,g.type);g[0]=v>-1,g[1]=S<0||v<S,(v>-1||H(g,"default"))&&l.push(h)}}}const c=[o,l];return te(t)&&s.set(t,c),c}function ko(t){return t[0]!=="$"}function Fo(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Lo(t,e){return Fo(t)===Fo(e)}function Bo(t,e){return P(e)?e.findIndex(n=>Lo(n,t)):M(e)&&Lo(e,t)?0:-1}const Pa=t=>t[0]==="_"||t==="$stable",Pr=t=>P(t)?t.map(He):[He(t)],tf=(t,e,n)=>{if(e._n)return e;const s=Ca((...i)=>Pr(e(...i)),n);return s._c=!1,s},Oa=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Pa(i))continue;const r=t[i];if(M(r))e[i]=tf(i,r,s);else if(r!=null){const o=Pr(r);e[i]=()=>o}}},Da=(t,e)=>{const n=Pr(e);t.slots.default=()=>n},nf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=V(e),bs(e,"_",n)):Oa(e,t.slots={})}else t.slots={},e&&Da(t,e);bs(t.slots,ei,1)},sf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=J;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(he(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Oa(e,i)),o=e}else e&&(Da(t,e),o={default:1});if(r)for(const l in i)!Pa(l)&&o[l]==null&&delete i[l]};function Yi(t,e,n,s,i=!1){if(P(t)){t.forEach((d,g)=>Yi(d,e&&(P(e)?e[g]:e),n,s,i));return}if(Nn(s)&&!i)return;const r=s.shapeFlag&4?ti(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===J?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(ue(c)?(u[c]=null,H(h,c)&&(h[c]=null)):_e(c)&&(c.value=null)),M(a))it(a,l,12,[o,u]);else{const d=ue(a),g=_e(a);if(d||g){const v=()=>{if(t.f){const S=d?H(h,a)?h[a]:u[a]:a.value;i?P(S)&&yr(S,r):P(S)?S.includes(r)||S.push(r):d?(u[a]=[r],H(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,H(h,a)&&(h[a]=o)):g&&(a.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,Ee(v,n)):v()}}}const Ee=xh;function rf(t){return of(t)}function of(t,e){const n=Ui();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=ke,insertStaticContent:v}=t,S=(f,p,_,m=null,y=null,w=null,T=!1,b=null,I=!!p.dynamicChildren)=>{if(f===p)return;f&&!En(f,p)&&(m=as(f),Be(f,y,w,!0),f=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:C,ref:N,shapeFlag:x}=p;switch(C){case Zs:O(f,p,_,m);break;case ut:z(f,p,_,m);break;case wi:f==null&&W(p,_,m,T);break;case Re:rs(f,p,_,m,y,w,T,b,I);break;default:x&1?et(f,p,_,m,y,w,T,b,I):x&6?os(f,p,_,m,y,w,T,b,I):(x&64||x&128)&&C.process(f,p,_,m,y,w,T,b,I,Ut)}N!=null&&y&&Yi(N,f&&f.ref,w,p||f,!p)},O=(f,p,_,m)=>{if(f==null)s(p.el=l(p.children),_,m);else{const y=p.el=f.el;p.children!==f.children&&c(y,p.children)}},z=(f,p,_,m)=>{f==null?s(p.el=a(p.children||""),_,m):p.el=f.el},W=(f,p,_,m)=>{[f.el,f.anchor]=v(f.children,p,_,m,f.el,f.anchor)},ne=({el:f,anchor:p},_,m)=>{let y;for(;f&&f!==p;)y=d(f),s(f,_,m),f=y;s(p,_,m)},k=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},et=(f,p,_,m,y,w,T,b,I)=>{T=T||p.type==="svg",f==null?mn(p,_,m,y,w,T,b,I):di(f,p,y,w,T,b,I)},mn=(f,p,_,m,y,w,T,b)=>{let I,C;const{type:N,props:x,shapeFlag:R,transition:D,dirs:B}=f;if(I=f.el=o(f.type,w,x&&x.is,x),R&8?u(I,f.children):R&16&&pt(f.children,I,null,m,y,w&&N!=="foreignObject",T,b),B&&yt(f,null,m,"created"),is(I,f,f.scopeId,T,m),x){for(const j in x)j!=="value"&&!ys(j)&&r(I,j,null,x[j],w,f.children,m,y,ze);"value"in x&&r(I,"value",null,x.value),(C=x.onVnodeBeforeMount)&&We(C,m,f)}B&&yt(f,null,m,"beforeMount");const G=lf(y,D);G&&D.beforeEnter(I),s(I,p,_),((C=x&&x.onVnodeMounted)||G||B)&&Ee(()=>{C&&We(C,m,f),G&&D.enter(I),B&&yt(f,null,m,"mounted")},y)},is=(f,p,_,m,y)=>{if(_&&g(f,_),m)for(let w=0;w<m.length;w++)g(f,m[w]);if(y){let w=y.subTree;if(p===w){const T=y.vnode;is(f,T,T.scopeId,T.slotScopeIds,y.parent)}}},pt=(f,p,_,m,y,w,T,b,I=0)=>{for(let C=I;C<f.length;C++){const N=f[C]=b?nt(f[C]):He(f[C]);S(null,N,p,_,m,y,w,T,b)}},di=(f,p,_,m,y,w,T)=>{const b=p.el=f.el;let{patchFlag:I,dynamicChildren:C,dirs:N}=p;I|=f.patchFlag&16;const x=f.props||J,R=p.props||J;let D;_&&vt(_,!1),(D=R.onVnodeBeforeUpdate)&&We(D,_,p,f),N&&yt(p,f,_,"beforeUpdate"),_&&vt(_,!0);const B=y&&p.type!=="foreignObject";if(C?_t(f.dynamicChildren,C,b,_,m,B,w):T||q(f,p,b,null,_,m,B,w,!1),I>0){if(I&16)yn(b,p,x,R,_,m,y);else if(I&2&&x.class!==R.class&&r(b,"class",null,R.class,y),I&4&&r(b,"style",x.style,R.style,y),I&8){const G=p.dynamicProps;for(let j=0;j<G.length;j++){const se=G[j],xe=x[se],Wt=R[se];(Wt!==xe||se==="value")&&r(b,se,xe,Wt,y,f.children,_,m,ze)}}I&1&&f.children!==p.children&&u(b,p.children)}else!T&&C==null&&yn(b,p,x,R,_,m,y);((D=R.onVnodeUpdated)||N)&&Ee(()=>{D&&We(D,_,p,f),N&&yt(p,f,_,"updated")},m)},_t=(f,p,_,m,y,w,T)=>{for(let b=0;b<p.length;b++){const I=f[b],C=p[b],N=I.el&&(I.type===Re||!En(I,C)||I.shapeFlag&70)?h(I.el):_;S(I,C,N,null,m,y,w,T,!0)}},yn=(f,p,_,m,y,w,T)=>{if(_!==m){if(_!==J)for(const b in _)!ys(b)&&!(b in m)&&r(f,b,_[b],null,T,p.children,y,w,ze);for(const b in m){if(ys(b))continue;const I=m[b],C=_[b];I!==C&&b!=="value"&&r(f,b,C,I,T,p.children,y,w,ze)}"value"in m&&r(f,"value",_.value,m.value)}},rs=(f,p,_,m,y,w,T,b,I)=>{const C=p.el=f?f.el:l(""),N=p.anchor=f?f.anchor:l("");let{patchFlag:x,dynamicChildren:R,slotScopeIds:D}=p;D&&(b=b?b.concat(D):D),f==null?(s(C,_,m),s(N,_,m),pt(p.children,_,N,y,w,T,b,I)):x>0&&x&64&&R&&f.dynamicChildren?(_t(f.dynamicChildren,R,_,y,w,T,b),(p.key!=null||y&&p===y.subTree)&&Ma(f,p,!0)):q(f,p,_,N,y,w,T,b,I)},os=(f,p,_,m,y,w,T,b,I)=>{p.slotScopeIds=b,f==null?p.shapeFlag&512?y.ctx.activate(p,_,m,T,I):pi(p,_,m,y,w,T,I):fo(f,p,I)},pi=(f,p,_,m,y,w,T)=>{const b=f.component=mf(f,m,y);if(Rr(f)&&(b.ctx.renderer=Ut),yf(b),b.asyncDep){if(y&&y.registerDep(b,me),!f.el){const I=b.subTree=Ce(ut);z(null,I,p,_)}return}me(b,f,p,_,y,w,T)},fo=(f,p,_)=>{const m=p.component=f.component;if(Eh(f,p,_))if(m.asyncDep&&!m.asyncResolved){Z(m,p,_);return}else m.next=p,_h(m.update),m.update();else p.el=f.el,m.vnode=p},me=(f,p,_,m,y,w,T)=>{const b=()=>{if(f.isMounted){let{next:N,bu:x,u:R,parent:D,vnode:B}=f,G=N,j;vt(f,!1),N?(N.el=B.el,Z(f,N,T)):N=B,x&&vs(x),(j=N.props&&N.props.onVnodeBeforeUpdate)&&We(j,D,N,B),vt(f,!0);const se=vi(f),xe=f.subTree;f.subTree=se,S(xe,se,h(xe.el),as(xe),f,y,w),N.el=se.el,G===null&&bh(f,se.el),R&&Ee(R,y),(j=N.props&&N.props.onVnodeUpdated)&&Ee(()=>We(j,D,N,B),y)}else{let N;const{el:x,props:R}=p,{bm:D,m:B,parent:G}=f,j=Nn(p);if(vt(f,!1),D&&vs(D),!j&&(N=R&&R.onVnodeBeforeMount)&&We(N,G,p),vt(f,!0),x&&gi){const se=()=>{f.subTree=vi(f),gi(x,f.subTree,f,y,null)};j?p.type.__asyncLoader().then(()=>!f.isUnmounted&&se()):se()}else{const se=f.subTree=vi(f);S(null,se,_,m,f,y,w),p.el=se.el}if(B&&Ee(B,y),!j&&(N=R&&R.onVnodeMounted)){const se=p;Ee(()=>We(N,G,se),y)}(p.shapeFlag&256||G&&Nn(G.vnode)&&G.vnode.shapeFlag&256)&&f.a&&Ee(f.a,y),f.isMounted=!0,p=_=m=null}},I=f.effect=new br(b,()=>Qs(C),f.scope),C=f.update=()=>I.run();C.id=f.uid,vt(f,!0),C()},Z=(f,p,_)=>{p.component=f;const m=f.vnode.props;f.vnode=p,f.next=null,ef(f,p.props,m,_),sf(f,p.children,_),hn(),No(),fn()},q=(f,p,_,m,y,w,T,b,I=!1)=>{const C=f&&f.children,N=f?f.shapeFlag:0,x=p.children,{patchFlag:R,shapeFlag:D}=p;if(R>0){if(R&128){ls(C,x,_,m,y,w,T,b,I);return}else if(R&256){gt(C,x,_,m,y,w,T,b,I);return}}D&8?(N&16&&ze(C,y,w),x!==C&&u(_,x)):N&16?D&16?ls(C,x,_,m,y,w,T,b,I):ze(C,y,w,!0):(N&8&&u(_,""),D&16&&pt(x,_,m,y,w,T,b,I))},gt=(f,p,_,m,y,w,T,b,I)=>{f=f||qt,p=p||qt;const C=f.length,N=p.length,x=Math.min(C,N);let R;for(R=0;R<x;R++){const D=p[R]=I?nt(p[R]):He(p[R]);S(f[R],D,_,null,y,w,T,b,I)}C>N?ze(f,y,w,!0,!1,x):pt(p,_,m,y,w,T,b,I,x)},ls=(f,p,_,m,y,w,T,b,I)=>{let C=0;const N=p.length;let x=f.length-1,R=N-1;for(;C<=x&&C<=R;){const D=f[C],B=p[C]=I?nt(p[C]):He(p[C]);if(En(D,B))S(D,B,_,null,y,w,T,b,I);else break;C++}for(;C<=x&&C<=R;){const D=f[x],B=p[R]=I?nt(p[R]):He(p[R]);if(En(D,B))S(D,B,_,null,y,w,T,b,I);else break;x--,R--}if(C>x){if(C<=R){const D=R+1,B=D<N?p[D].el:m;for(;C<=R;)S(null,p[C]=I?nt(p[C]):He(p[C]),_,B,y,w,T,b,I),C++}}else if(C>R)for(;C<=x;)Be(f[C],y,w,!0),C++;else{const D=C,B=C,G=new Map;for(C=B;C<=R;C++){const Se=p[C]=I?nt(p[C]):He(p[C]);Se.key!=null&&G.set(Se.key,C)}let j,se=0;const xe=R-B+1;let Wt=!1,go=0;const vn=new Array(xe);for(C=0;C<xe;C++)vn[C]=0;for(C=D;C<=x;C++){const Se=f[C];if(se>=xe){Be(Se,y,w,!0);continue}let Ue;if(Se.key!=null)Ue=G.get(Se.key);else for(j=B;j<=R;j++)if(vn[j-B]===0&&En(Se,p[j])){Ue=j;break}Ue===void 0?Be(Se,y,w,!0):(vn[Ue-B]=C+1,Ue>=go?go=Ue:Wt=!0,S(Se,p[Ue],_,null,y,w,T,b,I),se++)}const mo=Wt?af(vn):qt;for(j=mo.length-1,C=xe-1;C>=0;C--){const Se=B+C,Ue=p[Se],yo=Se+1<N?p[Se+1].el:m;vn[C]===0?S(null,Ue,_,yo,y,w,T,b,I):Wt&&(j<0||C!==mo[j]?mt(Ue,_,yo,2):j--)}}},mt=(f,p,_,m,y=null)=>{const{el:w,type:T,transition:b,children:I,shapeFlag:C}=f;if(C&6){mt(f.component.subTree,p,_,m);return}if(C&128){f.suspense.move(p,_,m);return}if(C&64){T.move(f,p,_,Ut);return}if(T===Re){s(w,p,_);for(let x=0;x<I.length;x++)mt(I[x],p,_,m);s(f.anchor,p,_);return}if(T===wi){ne(f,p,_);return}if(m!==2&&C&1&&b)if(m===0)b.beforeEnter(w),s(w,p,_),Ee(()=>b.enter(w),y);else{const{leave:x,delayLeave:R,afterLeave:D}=b,B=()=>s(w,p,_),G=()=>{x(w,()=>{B(),D&&D()})};R?R(w,B,G):G()}else s(w,p,_)},Be=(f,p,_,m=!1,y=!1)=>{const{type:w,props:T,ref:b,children:I,dynamicChildren:C,shapeFlag:N,patchFlag:x,dirs:R}=f;if(b!=null&&Yi(b,null,_,f,!0),N&256){p.ctx.deactivate(f);return}const D=N&1&&R,B=!Nn(f);let G;if(B&&(G=T&&T.onVnodeBeforeUnmount)&&We(G,p,f),N&6)Iu(f.component,_,m);else{if(N&128){f.suspense.unmount(_,m);return}D&&yt(f,null,p,"beforeUnmount"),N&64?f.type.remove(f,p,_,y,Ut,m):C&&(w!==Re||x>0&&x&64)?ze(C,p,_,!1,!0):(w===Re&&x&384||!y&&N&16)&&ze(I,p,_),m&&po(f)}(B&&(G=T&&T.onVnodeUnmounted)||D)&&Ee(()=>{G&&We(G,p,f),D&&yt(f,null,p,"unmounted")},_)},po=f=>{const{type:p,el:_,anchor:m,transition:y}=f;if(p===Re){wu(_,m);return}if(p===wi){k(f);return}const w=()=>{i(_),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:T,delayLeave:b}=y,I=()=>T(_,w);b?b(f.el,w,I):I()}else w()},wu=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},Iu=(f,p,_)=>{const{bum:m,scope:y,update:w,subTree:T,um:b}=f;m&&vs(m),y.stop(),w&&(w.active=!1,Be(T,f,p,_)),b&&Ee(b,p),Ee(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ze=(f,p,_,m=!1,y=!1,w=0)=>{for(let T=w;T<f.length;T++)Be(f[T],p,_,m,y)},as=f=>f.shapeFlag&6?as(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),_o=(f,p,_)=>{f==null?p._vnode&&Be(p._vnode,null,null,!0):S(p._vnode||null,f,p,null,null,null,_),No(),ga(),p._vnode=f},Ut={p:S,um:Be,m:mt,r:po,mt:pi,mc:pt,pc:q,pbc:_t,n:as,o:t};let _i,gi;return e&&([_i,gi]=e(Ut)),{render:_o,hydrate:_i,createApp:Xh(_o,_i)}}function vt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function lf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ma(t,e,n=!1){const s=t.children,i=e.children;if(P(s)&&P(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=nt(i[r]),l.el=o.el),n||Ma(o,l)),l.type===Zs&&(l.el=o.el)}}function af(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const cf=t=>t.__isTeleport,Re=Symbol.for("v-fgt"),Zs=Symbol.for("v-txt"),ut=Symbol.for("v-cmt"),wi=Symbol.for("v-stc"),An=[];let Oe=null;function wt(t=!1){An.push(Oe=t?null:[])}function uf(){An.pop(),Oe=An[An.length-1]||null}let Bn=1;function Uo(t){Bn+=t}function ka(t){return t.dynamicChildren=Bn>0?Oe||qt:null,uf(),Bn>0&&Oe&&Oe.push(t),t}function Cn(t,e,n,s,i,r){return ka(fe(t,e,n,s,i,r,!0))}function Fa(t,e,n,s,i){return ka(Ce(t,e,n,s,i,!0))}function La(t){return t?t.__v_isVNode===!0:!1}function En(t,e){return t.type===e.type&&t.key===e.key}const ei="__vInternal",Ba=({key:t})=>t??null,Es=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ue(t)||_e(t)||M(t)?{i:ge,r:t,k:e,f:!!n}:t:null);function fe(t,e=null,n=null,s=0,i=null,r=t===Re?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ba(e),ref:e&&Es(e),scopeId:va,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ge};return l?(Or(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=ue(n)?8:16),Bn>0&&!o&&Oe&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Oe.push(a),a}const Ce=hf;function hf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Ih)&&(t=ut),La(t)){const l=nn(t,e,!0);return n&&Or(l,n),Bn>0&&!r&&Oe&&(l.shapeFlag&6?Oe[Oe.indexOf(t)]=l:Oe.push(l)),l.patchFlag|=-2,l}if(wf(t)&&(t=t.__vccOpts),e){e=ff(e);let{class:l,style:a}=e;l&&!ue(l)&&(e.class=Gs(l)),te(a)&&(aa(a)&&!P(a)&&(a=he({},a)),e.style=Cr(a))}const o=ue(t)?1:Sh(t)?128:cf(t)?64:te(t)?4:M(t)?2:0;return fe(t,e,n,s,i,o,r,!0)}function ff(t){return t?aa(t)||ei in t?he({},t):t:null}function nn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?pf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ba(l),ref:e&&e.ref?n&&i?P(i)?i.concat(Es(e)):[i,Es(e)]:Es(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Re?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&nn(t.ssContent),ssFallback:t.ssFallback&&nn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function df(t=" ",e=0){return Ce(Zs,null,t,e)}function _s(t="",e=!1){return e?(wt(),Fa(ut,null,t)):Ce(ut,null,t)}function He(t){return t==null||typeof t=="boolean"?Ce(ut):P(t)?Ce(Re,null,t.slice()):typeof t=="object"?nt(t):Ce(Zs,null,String(t))}function nt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:nn(t)}function Or(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(P(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Or(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ei in e)?e._ctx=ge:i===3&&ge&&(ge.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else M(e)?(e={default:e,_ctx:ge},n=32):(e=String(e),s&64?(n=16,e=[df(e)]):n=8);t.children=e,t.shapeFlag|=n}function pf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Gs([e.class,s.class]));else if(i==="style")e.style=Cr([e.style,s.style]);else if(Vs(i)){const r=e[i],o=s[i];o&&r!==o&&!(P(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function We(t,e,n,s=null){Fe(t,e,7,[n,s])}const _f=Na();let gf=0;function mf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||_f,r={uid:gf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Aa(s,i),emitsOptions:ya(s,i),emit:null,emitted:null,propsDefaults:J,inheritAttrs:s.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=yh.bind(null,r),t.ce&&t.ce(r),r}let ce=null,Dr,Ht,Wo="__VUE_INSTANCE_SETTERS__";(Ht=Ui()[Wo])||(Ht=Ui()[Wo]=[]),Ht.push(t=>ce=t),Dr=t=>{Ht.length>1?Ht.forEach(e=>e(t)):Ht[0](t)};const sn=t=>{Dr(t),t.scope.on()},Rt=()=>{ce&&ce.scope.off(),Dr(null)};function Ua(t){return t.vnode.shapeFlag&4}let rn=!1;function yf(t,e=!1){rn=e;const{props:n,children:s}=t.vnode,i=Ua(t);Zh(t,n,i,e),nf(t,s);const r=i?vf(t,e):void 0;return rn=!1,r}function vf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ca(new Proxy(t.ctx,jh));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Ef(t):null;sn(t),hn();const r=it(s,t,0,[t.props,i]);if(fn(),Rt(),Kl(r)){if(r.then(Rt,Rt),e)return r.then(o=>{Ho(t,o,e)}).catch(o=>{Qn(o,t,0)});t.asyncDep=r}else Ho(t,r,e)}else Wa(t,e)}function Ho(t,e,n){M(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:te(e)&&(t.setupState=fa(e)),Wa(t,n)}let $o;function Wa(t,e,n){const s=t.type;if(!t.render){if(!e&&$o&&!s.render){const i=s.template||Ar(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=he(he({isCustomElement:r,delimiters:l},o),a);s.render=$o(i,c)}}t.render=s.render||ke}{sn(t),hn();try{zh(t)}finally{fn(),Rt()}}}function Cf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ie(t,"get","$attrs"),e[n]}}))}function Ef(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Cf(t)},slots:t.slots,emit:t.emit,expose:e}}function ti(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(fa(ca(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rn)return Rn[n](t)},has(e,n){return n in e||n in Rn}}))}function bf(t,e=!0){return M(t)?t.displayName||t.name:t.name||e&&t.__name}function wf(t){return M(t)&&"__vccOpts"in t}const If=(t,e)=>fh(t,e,rn),Tf=Symbol.for("v-scx"),Sf=()=>Cs(Tf),xf="3.3.8",Nf="http://www.w3.org/2000/svg",It=typeof document<"u"?document:null,Vo=It&&It.createElement("template"),Rf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?It.createElementNS(Nf,t):It.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>It.createTextNode(t),createComment:t=>It.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>It.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Vo.innerHTML=s?`<svg>${t}</svg>`:t;const l=Vo.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Af=Symbol("_vtc");function Pf(t,e,n){const s=t[Af];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Of=Symbol("_vod");function Df(t,e,n){const s=t.style,i=ue(n);if(n&&!i){if(e&&!ue(e))for(const r in e)n[r]==null&&Qi(s,r,"");for(const r in n)Qi(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),Of in t&&(s.display=r)}}const jo=/\s*!important$/;function Qi(t,e,n){if(P(n))n.forEach(s=>Qi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Mf(t,e);jo.test(n)?t.setProperty(un(s),n.replace(jo,""),"important"):t[s]=n}}const zo=["Webkit","Moz","ms"],Ii={};function Mf(t,e){const n=Ii[e];if(n)return n;let s=Ve(e);if(s!=="filter"&&s in t)return Ii[e]=s;s=qs(s);for(let i=0;i<zo.length;i++){const r=zo[i]+s;if(r in t)return Ii[e]=r}return e}const Ko="http://www.w3.org/1999/xlink";function kf(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ko,e.slice(6,e.length)):t.setAttributeNS(Ko,e,n);else{const r=Fu(e);n==null||r&&!Yl(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Ff(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const c=l==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Yl(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function zt(t,e,n,s){t.addEventListener(e,n,s)}function Lf(t,e,n,s){t.removeEventListener(e,n,s)}const qo=Symbol("_vei");function Bf(t,e,n,s,i=null){const r=t[qo]||(t[qo]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Uf(e);if(s){const c=r[e]=$f(s,i);zt(t,l,c,a)}else o&&(Lf(t,l,o,a),r[e]=void 0)}}const Go=/(?:Once|Passive|Capture)$/;function Uf(t){let e;if(Go.test(t)){e={};let s;for(;s=t.match(Go);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):un(t.slice(2)),e]}let Ti=0;const Wf=Promise.resolve(),Hf=()=>Ti||(Wf.then(()=>Ti=0),Ti=Date.now());function $f(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Fe(Vf(s,n.value),e,5,[s])};return n.value=t,n.attached=Hf(),n}function Vf(t,e){if(P(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Yo=/^on[a-z]/,jf=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?Pf(t,s,i):e==="style"?Df(t,n,s):Vs(e)?mr(e)||Bf(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zf(t,e,s,i))?Ff(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),kf(t,e,s,i))};function zf(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Yo.test(e)&&M(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Yo.test(e)&&ue(n)?!1:e in t}const Qo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return P(e)?n=>vs(e,n):e};function Kf(t){t.target.composing=!0}function Xo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Si=Symbol("_assign"),qf={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Si]=Qo(i);const r=s||i.props&&i.props.type==="number";zt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Bi(l)),t[Si](l)}),n&&zt(t,"change",()=>{t.value=t.value.trim()}),e||(zt(t,"compositionstart",Kf),zt(t,"compositionend",Xo),zt(t,"change",Xo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[Si]=Qo(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Bi(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Gf=he({patchProp:jf},Rf);let Jo;function Yf(){return Jo||(Jo=rf(Gf))}const Qf=(...t)=>{const e=Yf().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Xf(s);if(!i)return;const r=e._component;!M(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Xf(t){return ue(t)?document.querySelector(t):t}const Jf="modulepreload",Zf=function(t){return"/"+t},Zo={},ed=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=Zf(r),r in Zo)return;Zo[r]=!0;const o=r.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Jf,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw dn(e)},dn=function(t){return new Error("Firebase Database ("+Ha.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},td=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Mr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($a(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):td(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new nd;const d=r<<2|l>>4;if(s.push(d),c!==64){const g=l<<4&240|c>>2;if(s.push(g),h!==64){const v=c<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Va=function(t){const e=$a(t);return Mr.encodeByteArray(e,!0)},xs=function(t){return Va(t).replace(/\./g,"")},Xi=function(t){try{return Mr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(t){return ja(void 0,t)}function ja(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!id(n)||(t[n]=ja(t[n],e[n]));return t}function id(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=()=>rd().__FIREBASE_DEFAULTS__,ld=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ad=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xi(t[1]);return e&&JSON.parse(e)},za=()=>{try{return od()||ld()||ad()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cd=t=>{var e,n;return(n=(e=za())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ud=t=>{const e=cd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ka=()=>{var t;return(t=za())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[xs(JSON.stringify(n)),xs(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fd())}function dd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ga(){return Ha.NODE_ADMIN===!0}function pd(){try{return typeof indexedDB=="object"}catch{return!1}}function _d(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="FirebaseError";class Xn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=gd,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ya.prototype.create)}}class Ya{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?md(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Xn(i,l,s)}}function md(t,e){return t.replace(yd,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const yd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t){return JSON.parse(t)}function ie(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Un(Xi(r[0])||""),n=Un(Xi(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},vd=function(t){const e=Qa(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Cd=function(t){const e=Qa(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function on(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function el(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ns(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ji(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(tl(r)&&tl(o)){if(!Ji(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function tl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function kr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},si=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){return t&&t._delegate?t._delegate:t}class Wn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ni;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sd(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Td(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Td(t){return t===Ct?void 0:t}function Sd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Id(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Nd={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Rd=Y.INFO,Ad={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Pd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Ad[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xa{constructor(e){this.name=e,this._logLevel=Rd,this._logHandler=Pd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Od=(t,e)=>e.some(n=>t instanceof n);let nl,sl;function Dd(){return nl||(nl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Md(){return sl||(sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ja=new WeakMap,Zi=new WeakMap,Za=new WeakMap,xi=new WeakMap,Fr=new WeakMap;function kd(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(rt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ja.set(n,t)}).catch(()=>{}),Fr.set(e,t),e}function Fd(t){if(Zi.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Zi.set(t,e)}let er={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Za.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ld(t){er=t(er)}function Bd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ni(this),e,...n);return Za.set(s,e.sort?e.sort():[e]),rt(s)}:Md().includes(t)?function(...e){return t.apply(Ni(this),e),rt(Ja.get(this))}:function(...e){return rt(t.apply(Ni(this),e))}}function Ud(t){return typeof t=="function"?Bd(t):(t instanceof IDBTransaction&&Fd(t),Od(t,Dd())?new Proxy(t,er):t)}function rt(t){if(t instanceof IDBRequest)return kd(t);if(xi.has(t))return xi.get(t);const e=Ud(t);return e!==t&&(xi.set(t,e),Fr.set(e,t)),e}const Ni=t=>Fr.get(t);function Wd(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=rt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(rt(o.result),a.oldVersion,a.newVersion,rt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Hd=["get","getKey","getAll","getAllKeys","count"],$d=["put","add","delete","clear"],Ri=new Map;function il(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ri.get(e))return Ri.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=$d.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Hd.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Ri.set(e,r),r}Ld(t=>({...t,get:(e,n,s)=>il(e,n)||t.get(e,n,s),has:(e,n)=>!!il(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function jd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tr="@firebase/app",rl="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Xa("@firebase/app"),zd="@firebase/app-compat",Kd="@firebase/analytics-compat",qd="@firebase/analytics",Gd="@firebase/app-check-compat",Yd="@firebase/app-check",Qd="@firebase/auth",Xd="@firebase/auth-compat",Jd="@firebase/database",Zd="@firebase/database-compat",ep="@firebase/functions",tp="@firebase/functions-compat",np="@firebase/installations",sp="@firebase/installations-compat",ip="@firebase/messaging",rp="@firebase/messaging-compat",op="@firebase/performance",lp="@firebase/performance-compat",ap="@firebase/remote-config",cp="@firebase/remote-config-compat",up="@firebase/storage",hp="@firebase/storage-compat",fp="@firebase/firestore",dp="@firebase/firestore-compat",pp="firebase",_p="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="[DEFAULT]",gp={[tr]:"fire-core",[zd]:"fire-core-compat",[qd]:"fire-analytics",[Kd]:"fire-analytics-compat",[Yd]:"fire-app-check",[Gd]:"fire-app-check-compat",[Qd]:"fire-auth",[Xd]:"fire-auth-compat",[Jd]:"fire-rtdb",[Zd]:"fire-rtdb-compat",[ep]:"fire-fn",[tp]:"fire-fn-compat",[np]:"fire-iid",[sp]:"fire-iid-compat",[ip]:"fire-fcm",[rp]:"fire-fcm-compat",[op]:"fire-perf",[lp]:"fire-perf-compat",[ap]:"fire-rc",[cp]:"fire-rc-compat",[up]:"fire-gcs",[hp]:"fire-gcs-compat",[fp]:"fire-fst",[dp]:"fire-fst-compat","fire-js":"fire-js",[pp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new Map,sr=new Map;function mp(t,e){try{t.container.addComponent(e)}catch(n){Ot.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function As(t){const e=t.name;if(sr.has(e))return Ot.debug(`There were multiple attempts to register component ${e}.`),!1;sr.set(e,t);for(const n of Rs.values())mp(n,t);return!0}function yp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ot=new Ya("app","Firebase",vp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ot.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=_p;function ec(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:nr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ot.create("bad-app-name",{appName:String(i)});if(n||(n=Ka()),!n)throw ot.create("no-options");const r=Rs.get(i);if(r){if(Ji(n,r.options)&&Ji(s,r.config))return r;throw ot.create("duplicate-app",{appName:i})}const o=new xd(i);for(const a of sr.values())o.addComponent(a);const l=new Cp(n,s,o);return Rs.set(i,l),l}function bp(t=nr){const e=Rs.get(t);if(!e&&t===nr&&Ka())return ec();if(!e)throw ot.create("no-app",{appName:t});return e}function Xt(t,e,n){var s;let i=(s=gp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ot.warn(l.join(" "));return}As(new Wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="firebase-heartbeat-database",Ip=1,Hn="firebase-heartbeat-store";let Ai=null;function tc(){return Ai||(Ai=Wd(wp,Ip,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Hn)}}}).catch(t=>{throw ot.create("idb-open",{originalErrorMessage:t.message})})),Ai}async function Tp(t){try{return await(await tc()).transaction(Hn).objectStore(Hn).get(nc(t))}catch(e){if(e instanceof Xn)Ot.warn(e.message);else{const n=ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(n.message)}}}async function ol(t,e){try{const s=(await tc()).transaction(Hn,"readwrite");await s.objectStore(Hn).put(e,nc(t)),await s.done}catch(n){if(n instanceof Xn)Ot.warn(n.message);else{const s=ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ot.warn(s.message)}}}function nc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=1024,xp=30*24*60*60*1e3;class Np{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ap(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ll();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=xp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ll(),{heartbeatsToSend:s,unsentEntries:i}=Rp(this._heartbeatsCache.heartbeats),r=xs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ll(){return new Date().toISOString().substring(0,10)}function Rp(t,e=Sp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),al(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),al(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ap{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pd()?_d().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Tp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ol(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ol(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function al(t){return xs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(t){As(new Wn("platform-logger",e=>new Vd(e),"PRIVATE")),As(new Wn("heartbeat",e=>new Np(e),"PRIVATE")),Xt(tr,rl,t),Xt(tr,rl,"esm2017"),Xt("fire-js","")}Pp("");var Op="firebase",Dp="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(Op,Dp,"app");const cl="@firebase/database",ul="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc="";function Mp(t){sc=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Un(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Je(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kp(e)}}catch{}return new Fp},St=ic("localStorage"),ir=ic("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Xa("@firebase/database"),Lp=function(){let t=1;return function(){return t++}}(),rc=function(t){const e=wd(t),n=new bd;n.update(e);const s=n.digest();return Mr.encodeByteArray(s)},Jn=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Jn.apply(null,s):typeof s=="object"?e+=ie(s):e+=s,e+=" "}return e};let At=null,hl=!0;const Bp=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Jt.logLevel=Y.VERBOSE,At=Jt.log.bind(Jt),e&&ir.set("logging_enabled",!0)):typeof t=="function"?At=t:(At=null,ir.remove("logging_enabled"))},de=function(...t){if(hl===!0&&(hl=!1,At===null&&ir.get("logging_enabled")===!0&&Bp(!0)),At){const e=Jn.apply(null,t);At(e)}},Zn=function(t){return function(...e){de(t,...e)}},rr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Jn(...t);Jt.error(e)},Qe=function(...t){const e=`FIREBASE FATAL ERROR: ${Jn(...t)}`;throw Jt.error(e),new Error(e)},we=function(...t){const e="FIREBASE WARNING: "+Jn(...t);Jt.warn(e)},Up=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&we("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},oc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Wp=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ln="[MIN_NAME]",Dt="[MAX_NAME]",pn=function(t,e){if(t===e)return 0;if(t===ln||e===Dt)return-1;if(e===ln||t===Dt)return 1;{const n=fl(t),s=fl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Hp=function(t,e){return t===e?0:t<e?-1:1},bn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ie(e))},Lr=function(t){if(typeof t!="object"||t===null)return ie(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ie(e[s]),n+=":",n+=Lr(t[e[s]]);return n+="}",n},lc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Te(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ac=function(t){E(!oc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},$p=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Vp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function jp(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const zp=new RegExp("^-?(0*)\\d{1,10}$"),Kp=-2147483648,qp=2147483647,fl=function(t){if(zp.test(t)){const e=Number(t);if(e>=Kp&&e<=qp)return e}return null},_n=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw we("Exception was thrown by user callback.",n),e},Math.floor(0))}},Gp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){we(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(de("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',we(e)}}class Zt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="5",cc="v",uc="s",hc="r",fc="f",dc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pc="ls",_c="p",or="ac",gc="websocket",mc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=St.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&St.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Xp(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function vc(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===gc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===mc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Xp(t)&&(n.ns=t.namespace);const i=[];return Te(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(){this.counters_={}}incrementCounter(e,n=1){Je(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return sd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi={},Oi={};function Ur(t){const e=t.toString();return Pi[e]||(Pi[e]=new Jp),Pi[e]}function Zp(t,e){const n=t.toString();return Oi[n]||(Oi[n]=e()),Oi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&_n(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="start",t_="close",n_="pLPCommand",s_="pRTLPCB",Cc="id",Ec="pw",bc="ser",i_="cb",r_="seg",o_="ts",l_="d",a_="dframe",wc=1870,Ic=30,c_=wc-Ic,u_=25e3,h_=3e4;class Kt{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zn(e),this.stats_=Ur(n),this.urlFn=a=>(this.appCheckToken&&(a[or]=this.appCheckToken),vc(n,mc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new e_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(h_)),Wp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wr((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===dl)this.id=l,this.password=a;else if(o===t_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[dl]="t",s[bc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[i_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[cc]=Br,this.transportSessionId&&(s[uc]=this.transportSessionId),this.lastSessionId&&(s[pc]=this.lastSessionId),this.applicationId&&(s[_c]=this.applicationId),this.appCheckToken&&(s[or]=this.appCheckToken),typeof location<"u"&&location.hostname&&dc.test(location.hostname)&&(s[hc]=fc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Kt.forceAllow_=!0}static forceDisallow(){Kt.forceDisallow_=!0}static isAvailable(){return Kt.forceAllow_?!0:!Kt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$p()&&!Vp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Va(n),i=lc(s,c_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[a_]="t",s[Cc]=e,s[Ec]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Wr{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Lp(),window[n_+this.uniqueCallbackIdentifier]=e,window[s_+this.uniqueCallbackIdentifier]=n,this.myIFrame=Wr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){de("frame writing exception"),l.stack&&de(l.stack),de(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||de("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Cc]=this.myID,e[Ec]=this.myPW,e[bc]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ic+s.length<=wc;){const o=this.pendingSegs.shift();s=s+"&"+r_+i+"="+o.seg+"&"+o_+i+"="+o.ts+"&"+l_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(u_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{de("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=16384,d_=45e3;let Ps=null;typeof MozWebSocket<"u"?Ps=MozWebSocket:typeof WebSocket<"u"&&(Ps=WebSocket);class Pe{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zn(this.connId),this.stats_=Ur(n),this.connURL=Pe.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[cc]=Br,typeof location<"u"&&location.hostname&&dc.test(location.hostname)&&(o[hc]=fc),n&&(o[uc]=n),s&&(o[pc]=s),i&&(o[or]=i),r&&(o[_c]=r),vc(e,gc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,St.set("previous_websocket_failure",!0);try{let s;Ga(),this.mySock=new Ps(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Pe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ps!==null&&!Pe.forceDisallow_}static previouslyFailed(){return St.isInMemoryStorage||St.get("previous_websocket_failure")===!0}markConnectionHealthy(){St.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Un(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=lc(n,f_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(d_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Pe.responsesRequiredToBeHealthy=2;Pe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Kt,Pe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Pe&&Pe.isAvailable();let s=n&&!Pe.previouslyFailed();if(e.webSocketOnly&&(n||we("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Pe];else{const i=this.transports_=[];for(const r of $n.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);$n.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$n.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=6e4,__=5e3,g_=10*1024,m_=100*1024,Di="t",pl="d",y_="s",_l="r",v_="e",gl="o",ml="a",yl="n",vl="p",C_="h";class E_{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zn("c:"+this.id+":"),this.transportManager_=new $n(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Pn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>m_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>g_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Di in e){const n=e[Di];n===ml?this.upgradeIfSecondaryHealthy_():n===_l?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===gl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=bn("t",e),s=bn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ml,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:yl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=bn("t",e),s=bn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=bn(Di,e);if(pl in e){const s=e[pl];if(n===C_){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===yl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===y_?this.onConnectionShutdown_(s):n===_l?this.onReset_(s):n===v_?rr("Server Error: "+s):n===gl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Br!==s&&we("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Pn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(p_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(__))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(St.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends Sc{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!qa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Os}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=32,El=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new K("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ht(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function xc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function b_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Nc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Rc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function re(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof K)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new K(n,0)}function L(t){return t.pieceNum_>=t.pieces_.length}function ve(t,e){const n=U(t),s=U(e);if(n===null)return e;if(n===s)return ve(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ac(t,e){if(ht(t)!==ht(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function De(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(ht(t)>ht(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class w_{constructor(e,n){this.errorPrefix_=n,this.parts_=Nc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=si(this.parts_[s]);Pc(this)}}function I_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=si(e),Pc(t)}function T_(t){const e=t.parts_.pop();t.byteLength_-=si(e),t.parts_.length>0&&(t.byteLength_-=1)}function Pc(t){if(t.byteLength_>El)throw new Error(t.errorPrefix_+"has a key path longer than "+El+" bytes ("+t.byteLength_+").");if(t.parts_.length>Cl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cl+") or object contains a cycle "+Et(t))}function Et(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Sc{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Hr}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=1e3,S_=60*5*1e3,bl=30*1e3,x_=1.3,N_=3e4,R_="server_kill",wl=3;class Ye extends Tc{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ye.nextPersistentConnectionId_++,this.log_=Zn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wn,this.maxReconnectDelay_=S_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ga())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Os.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ie(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ni,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Ye.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Je(e,"w")){const s=on(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();we(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Cd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=vd(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ie(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):rr("Unrecognized action received from server: "+ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>N_&&(this.reconnectDelay_=wn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*x_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ye.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?de("getToken() completed but was canceled"):(de("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new E_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{we(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(R_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&we(h),a())}}}interrupt(e){de("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){de("Resuming connection for reason: "+e),delete this.interruptReasons_[e],el(this.interruptReasons_)&&(this.reconnectDelay_=wn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Lr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new K(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){de("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wl&&(this.reconnectDelay_=bl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){de("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+sc.replace(/\./g,"-")]=1,qa()?e["framework.cordova"]=1:dd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Os.getInstance().currentlyOnline();return el(this.interruptReasons_)&&e}}Ye.nextPersistentConnectionId_=0;Ye.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new F(ln,e),i=new F(ln,n);return this.compare(s,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs;class Oc extends ii{static get __EMPTY_NODE(){return gs}static set __EMPTY_NODE(e){gs=e}compare(e,n){return pn(e.name,n.name)}isDefinedOn(e){throw dn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Dt,gs)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,gs)}toString(){return".key"}}const en=new Oc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class le{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??le.RED,this.left=i??be.EMPTY_NODE,this.right=r??be.EMPTY_NODE}copy(e,n,s,i,r){return new le(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return be.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}le.RED=!0;le.BLACK=!1;class A_{copy(e,n,s,i,r){return this}insert(e,n,s){return new le(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class be{constructor(e,n=be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,le.BLACK,null,null))}remove(e){return new be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,le.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ms(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ms(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ms(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ms(this.root_,null,this.comparator_,!0,e)}}be.EMPTY_NODE=new A_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(t,e){return pn(t.name,e.name)}function $r(t,e){return pn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lr;function O_(t){lr=t}const Dc=function(t){return typeof t=="number"?"number:"+ac(t):"string:"+t},Mc=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Je(e,".sv"),"Priority must be a string or number.")}else E(t===lr||t.isEmpty(),"priority of unexpected type.");E(t===lr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Il;class oe{constructor(e,n=oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Mc(this.priorityNode_)}static set __childrenNodeConstructor(e){Il=e}static get __childrenNodeConstructor(){return Il}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return L(e)?this:U(e)===".priority"?this.priorityNode_:oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=U(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||ht(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Dc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ac(this.value_):e+=this.value_,this.lazyHash_=rc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof oe.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=oe.VALUE_TYPE_ORDER.indexOf(n),r=oe.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kc,Fc;function D_(t){kc=t}function M_(t){Fc=t}class k_ extends ii{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?pn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Dt,new oe("[PRIORITY-POST]",Fc))}makePost(e,n){const s=kc(e);return new F(n,new oe("[PRIORITY-POST]",s))}toString(){return".priority"}}const ee=new k_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=Math.log(2);class L_{constructor(e){const n=r=>parseInt(Math.log(r)/F_,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ds=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new le(d,h.node,le.BLACK,null,null);{const g=parseInt(u/2,10)+a,v=i(a,g),S=i(g+1,c);return h=t[g],d=n?n(h):h,new le(d,h.node,le.BLACK,v,S)}},r=function(a){let c=null,u=null,h=t.length;const d=function(v,S){const O=h-v,z=h;h-=v;const W=i(O+1,z),ne=t[O],k=n?n(ne):ne;g(new le(k,ne.node,S,null,W))},g=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<a.count;++v){const S=a.nextBitIsOne(),O=Math.pow(2,a.count-(v+1));S?d(O,le.BLACK):(d(O,le.BLACK),d(O,le.RED))}return u},o=new L_(t.length),l=r(o);return new be(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi;const $t={};class qe{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E($t&&ee,"ChildrenNode.ts has not been loaded"),Mi=Mi||new qe({".priority":$t},{".priority":ee}),Mi}get(e){const n=on(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof be?n:null}hasIndex(e){return Je(this.indexSet_,e.toString())}addIndex(e,n){E(e!==en,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(F.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ds(s,e.getCompare()):l=$t;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new qe(u,c)}addToIndexes(e,n){const s=Ns(this.indexes_,(i,r)=>{const o=on(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===$t)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ds(l,o.getCompare())}else return $t;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new qe(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ns(this.indexes_,i=>{if(i===$t)return i;{const r=n.get(e.name);return r?i.remove(new F(e.name,r)):i}});return new qe(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let In;class A{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Mc(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return In||(In=new A(new be($r),null,qe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||In}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?In:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new F(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?In:this.priorityNode_;return new A(i,o,r)}}updateChild(e,n){const s=U(e);if(s===null)return n;{E(U(e)!==".priority"||ht(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Q(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ee,(o,l)=>{n[o]=l.val(e),s++,r&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Dc(this.getPriority().val())+":"),this.forEachChild(ee,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":rc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new F(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===es?-1:0}withIndex(e){if(e===en||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===en||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ee),i=n.getIterator(ee);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===en?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class B_ extends A{constructor(){super(new be($r),A.EMPTY_NODE,qe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const es=new B_;Object.defineProperties(F,{MIN:{value:new F(ln,A.EMPTY_NODE)},MAX:{value:new F(Dt,es)}});Oc.__EMPTY_NODE=A.EMPTY_NODE;oe.__childrenNodeConstructor=A;O_(es);M_(es);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=!0;function ae(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new oe(n,ae(e))}if(!(t instanceof Array)&&U_){const n=[];let s=!1;if(Te(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ae(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return A.EMPTY_NODE;const r=Ds(n,P_,o=>o.name,$r);if(s){const o=Ds(n,ee.getCompare());return new A(r,ae(e),new qe({".priority":o},{".priority":ee}))}else return new A(r,ae(e),qe.Default)}else{let n=A.EMPTY_NODE;return Te(t,(s,i)=>{if(Je(t,s)&&s.substring(0,1)!=="."){const r=ae(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ae(e))}}D_(ae);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_ extends ii{constructor(e){super(),this.indexPath_=e,E(!L(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?pn(e.name,n.name):r}makePost(e,n){const s=ae(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,s);return new F(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,es);return new F(Dt,e)}toString(){return Nc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_ extends ii{compare(e,n){const s=e.node.compareTo(n.node);return s===0?pn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const s=ae(e);return new F(n,s)}toString(){return".value"}}const $_=new H_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t){return{type:"value",snapshotNode:t}}function an(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Vn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function jn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function V_(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Vn(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(an(n,s)):o.trackChildChange(jn(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ee,(i,r)=>{n.hasChild(i)||s.trackChildChange(Vn(i,r))}),n.isLeafNode()||n.forEachChild(ee,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(jn(i,r,o))}else s.trackChildChange(an(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.indexedFilter_=new Vr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=zn.getStartPost_(e),this.endPost_=zn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new F(n,s))||(s=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const r=this;return n.forEachChild(ee,(o,l)=>{r.matches(new F(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new zn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new F(n,s))||(s=A.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new F(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(jn(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Vn(n,h));const S=l.updateImmediateChild(n,A.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(an(d.name,d.node)),S.updateImmediateChild(d.name,d.node)):S}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Vn(c.name,c.node)),r.trackChildChange(an(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ln}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Dt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ee}copy(){const e=new jr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function z_(t){return t.loadsAllData()?new Vr(t.getIndex()):t.hasLimit()?new j_(t):new zn(t)}function Tl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ee?n="$priority":t.index_===$_?n="$value":t.index_===en?n="$key":(E(t.index_ instanceof W_,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ie(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ie(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ie(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ie(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ie(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Sl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ee&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends Tc{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Zn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ms.getListenId_(e,s),l={};this.listens_[o]=l;const a=Tl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),on(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Ms.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Tl(e._queryParams),s=e._path.toString(),i=new ni;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ed(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Un(l.responseText)}catch{we("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&we("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(){return{value:null,children:new Map}}function Bc(t,e,n){if(L(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=U(e);t.children.has(s)||t.children.set(s,ks());const i=t.children.get(s);e=Q(e),Bc(i,e,n)}}function ar(t,e,n){t.value!==null?n(e,t.value):q_(t,(s,i)=>{const r=new K(e.toString()+"/"+s);ar(i,r,n)})}function q_(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Te(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=10*1e3,Y_=30*1e3,Q_=5*60*1e3;class X_{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new G_(e);const s=xl+(Y_-xl)*Math.random();Pn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Te(e,(i,r)=>{r>0&&Je(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Pn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Q_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Me||(Me={}));function Uc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Kr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Me.ACK_USER_WRITE,this.source=Uc()}operationForChild(e){if(L(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new Fs($(),n,this.revert)}}else return E(U(this.path)===e,"operationForChild called for unrelated child."),new Fs(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){this.source=e,this.path=n,this.type=Me.LISTEN_COMPLETE}operationForChild(e){return L(this.path)?new Kn(this.source,$()):new Kn(this.source,Q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Me.OVERWRITE}operationForChild(e){return L(this.path)?new Mt(this.source,$(),this.snap.getImmediateChild(e)):new Mt(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Me.MERGE}operationForChild(e){if(L(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new Mt(this.source,$(),n.value):new qn(this.source,$(),n)}else return E(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qn(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(L(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Z_(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(V_(o.childName,o.snapshotNode))}),Tn(t,i,"child_removed",e,s,n),Tn(t,i,"child_added",e,s,n),Tn(t,i,"child_moved",r,s,n),Tn(t,i,"child_changed",e,s,n),Tn(t,i,"value",e,s,n),i}function Tn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>tg(t,l,a)),o.forEach(l=>{const a=eg(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function eg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function tg(t,e,n){if(e.childName==null||n.childName==null)throw dn("Should only compare child_ events.");const s=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t,e){return{eventCache:t,serverCache:e}}function On(t,e,n,s){return ri(new ft(e,n,s),t.serverCache)}function Wc(t,e,n,s){return ri(t.eventCache,new ft(e,n,s))}function Ls(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function kt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki;const ng=()=>(ki||(ki=new be(Hp)),ki);class X{constructor(e,n=ng()){this.value=e,this.children=n}static fromObject(e){let n=new X(null);return Te(e,(s,i)=>{n=n.set(new K(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(L(e))return null;{const s=U(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Q(e),n);return r!=null?{path:re(new K(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(L(e))return this;{const n=U(e),s=this.children.get(n);return s!==null?s.subtree(Q(e)):new X(null)}}set(e,n){if(L(e))return new X(n,this.children);{const s=U(e),r=(this.children.get(s)||new X(null)).set(Q(e),n),o=this.children.insert(s,r);return new X(this.value,o)}}remove(e){if(L(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const n=U(e),s=this.children.get(n);if(s){const i=s.remove(Q(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new X(null):new X(this.value,r)}else return this}}get(e){if(L(e))return this.value;{const n=U(e),s=this.children.get(n);return s?s.get(Q(e)):null}}setTree(e,n){if(L(e))return n;{const s=U(e),r=(this.children.get(s)||new X(null)).setTree(Q(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new X(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(re(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(L(e))return null;{const r=U(e),o=this.children.get(r);return o?o.findOnPath_(Q(e),re(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,s){if(L(e))return this;{this.value&&s(n,this.value);const i=U(e),r=this.children.get(i);return r?r.foreachOnPath_(Q(e),re(n,i),s):new X(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(re(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.writeTree_=e}static empty(){return new Le(new X(null))}}function Dn(t,e,n){if(L(e))return new Le(new X(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ve(i,e);return r=r.updateChild(o,n),new Le(t.writeTree_.set(i,r))}else{const i=new X(n),r=t.writeTree_.setTree(e,i);return new Le(r)}}}function Nl(t,e,n){let s=t;return Te(n,(i,r)=>{s=Dn(s,re(e,i),r)}),s}function Rl(t,e){if(L(e))return Le.empty();{const n=t.writeTree_.setTree(e,new X(null));return new Le(n)}}function cr(t,e){return Bt(t,e)!=null}function Bt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ve(n.path,e)):null}function Al(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ee,(s,i)=>{e.push(new F(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new F(s,i.value))}),e}function lt(t,e){if(L(e))return t;{const n=Bt(t,e);return n!=null?new Le(new X(n)):new Le(t.writeTree_.subtree(e))}}function ur(t){return t.writeTree_.isEmpty()}function cn(t,e){return Hc($(),t.writeTree_,e)}function Hc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Hc(re(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(re(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t,e){return zc(e,t)}function sg(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Dn(t.visibleWrites,e,n)),t.lastWriteId=s}function ig(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function rg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&og(l,s.path)?i=!1:De(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return lg(t),!0;if(s.snap)t.visibleWrites=Rl(t.visibleWrites,s.path);else{const l=s.children;Te(l,a=>{t.visibleWrites=Rl(t.visibleWrites,re(s.path,a))})}return!0}else return!1}function og(t,e){if(t.snap)return De(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&De(re(t.path,n),e))return!0;return!1}function lg(t){t.visibleWrites=$c(t.allWrites,ag,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ag(t){return t.visible}function $c(t,e,n){let s=Le.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)De(n,o)?(l=ve(n,o),s=Dn(s,l,r.snap)):De(o,n)&&(l=ve(o,n),s=Dn(s,$(),r.snap.getChild(l)));else if(r.children){if(De(n,o))l=ve(n,o),s=Nl(s,l,r.children);else if(De(o,n))if(l=ve(o,n),L(l))s=Nl(s,$(),r.children);else{const a=on(r.children,U(l));if(a){const c=a.getChild(Q(l));s=Dn(s,$(),c)}}}else throw dn("WriteRecord should have .snap or .children")}}return s}function Vc(t,e,n,s,i){if(!s&&!i){const r=Bt(t.visibleWrites,e);if(r!=null)return r;{const o=lt(t.visibleWrites,e);if(ur(o))return n;if(n==null&&!cr(o,$()))return null;{const l=n||A.EMPTY_NODE;return cn(o,l)}}}else{const r=lt(t.visibleWrites,e);if(!i&&ur(r))return n;if(!i&&n==null&&!cr(r,$()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(De(c.path,e)||De(e,c.path))},l=$c(t.allWrites,o,e),a=n||A.EMPTY_NODE;return cn(l,a)}}}function cg(t,e,n){let s=A.EMPTY_NODE;const i=Bt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ee,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=lt(t.visibleWrites,e);return n.forEachChild(ee,(o,l)=>{const a=cn(lt(r,new K(o)),l);s=s.updateImmediateChild(o,a)}),Al(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=lt(t.visibleWrites,e);return Al(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ug(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=re(e,n);if(cr(t.visibleWrites,r))return null;{const o=lt(t.visibleWrites,r);return ur(o)?i.getChild(n):cn(o,i.getChild(n))}}function hg(t,e,n,s){const i=re(e,n),r=Bt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=lt(t.visibleWrites,i);return cn(o,s.getNode().getImmediateChild(n))}else return null}function fg(t,e){return Bt(t.visibleWrites,e)}function dg(t,e,n,s,i,r,o){let l;const a=lt(t.visibleWrites,e),c=Bt(a,$());if(c!=null)l=c;else if(n!=null)l=cn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function pg(){return{visibleWrites:Le.empty(),allWrites:[],lastWriteId:-1}}function Bs(t,e,n,s){return Vc(t.writeTree,t.treePath,e,n,s)}function qr(t,e){return cg(t.writeTree,t.treePath,e)}function Pl(t,e,n,s){return ug(t.writeTree,t.treePath,e,n,s)}function Us(t,e){return fg(t.writeTree,re(t.treePath,e))}function _g(t,e,n,s,i,r){return dg(t.writeTree,t.treePath,e,n,s,i,r)}function Gr(t,e,n){return hg(t.writeTree,t.treePath,e,n)}function jc(t,e){return zc(re(t.treePath,e),t.writeTree)}function zc(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,jn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Vn(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,an(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,jn(s,e.snapshotNode,i.oldSnap));else throw dn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Kc=new mg;class Yr{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ft(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gr(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kt(this.viewCache_),r=_g(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t){return{filter:t}}function vg(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Cg(t,e,n,s,i){const r=new gg;let o,l;if(n.type===Me.OVERWRITE){const c=n;c.source.fromUser?o=hr(t,e,c.path,c.snap,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!L(c.path),o=Ws(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Me.MERGE){const c=n;c.source.fromUser?o=bg(t,e,c.path,c.children,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=fr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Me.ACK_USER_WRITE){const c=n;c.revert?o=Tg(t,e,c.path,s,i,r):o=wg(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Me.LISTEN_COMPLETE)o=Ig(t,e,n.path,s,r);else throw dn("Unknown operation type: "+n.type);const a=r.getChanges();return Eg(e,o,a),{viewCache:o,changes:a}}function Eg(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ls(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Lc(Ls(e)))}}function qc(t,e,n,s,i,r){const o=e.eventCache;if(Us(s,n)!=null)return e;{let l,a;if(L(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=kt(e),u=c instanceof A?c:A.EMPTY_NODE,h=qr(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Bs(s,kt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=U(n);if(c===".priority"){E(ht(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Pl(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=Q(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Pl(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Gr(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return On(e,l,o.isFullyInitialized()||L(n),t.filter.filtersNodes())}}function Ws(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(L(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),g,null)}else{const g=U(n);if(!a.isCompleteForPath(n)&&ht(n)>1)return e;const v=Q(n),O=a.getNode().getImmediateChild(g).updateChild(v,s);g===".priority"?c=u.updatePriority(a.getNode(),O):c=u.updateChild(a.getNode(),g,O,v,Kc,null)}const h=Wc(e,c,a.isFullyInitialized()||L(n),u.filtersNodes()),d=new Yr(i,h,r);return qc(t,h,n,i,d,l)}function hr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Yr(i,e,r);if(L(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=On(e,c,!0,t.filter.filtersNodes());else{const h=U(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=On(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=Q(n),g=l.getNode().getImmediateChild(h);let v;if(L(d))v=s;else{const S=u.getCompleteChild(h);S!=null?xc(d)===".priority"&&S.getChild(Rc(d)).isEmpty()?v=S:v=S.updateChild(d,s):v=A.EMPTY_NODE}if(g.equals(v))a=e;else{const S=t.filter.updateChild(l.getNode(),h,v,d,u,o);a=On(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ol(t,e){return t.eventCache.isCompleteForChild(e)}function bg(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=re(n,a);Ol(e,U(u))&&(l=hr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=re(n,a);Ol(e,U(u))||(l=hr(t,l,u,c,i,r,o))}),l}function Dl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function fr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;L(n)?c=s:c=new X(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),v=Dl(t,g,d);a=Ws(t,a,new K(h),v,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const v=e.serverCache.getNode().getImmediateChild(h),S=Dl(t,v,d);a=Ws(t,a,new K(h),S,i,r,o,l)}}),a}function wg(t,e,n,s,i,r,o){if(Us(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(L(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ws(t,e,n,a.getNode().getChild(n),i,r,l,o);if(L(n)){let c=new X(null);return a.getNode().forEachChild(en,(u,h)=>{c=c.set(new K(u),h)}),fr(t,e,n,c,i,r,l,o)}else return e}else{let c=new X(null);return s.foreach((u,h)=>{const d=re(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),fr(t,e,n,c,i,r,l,o)}}function Ig(t,e,n,s,i){const r=e.serverCache,o=Wc(e,r.getNode(),r.isFullyInitialized()||L(n),r.isFiltered());return qc(t,o,n,s,Kc,i)}function Tg(t,e,n,s,i,r){let o;if(Us(s,n)!=null)return e;{const l=new Yr(s,e,i),a=e.eventCache.getNode();let c;if(L(n)||U(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Bs(s,kt(e));else{const h=e.serverCache.getNode();E(h instanceof A,"serverChildren would be complete if leaf node"),u=qr(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=U(n);let h=Gr(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,Q(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,A.EMPTY_NODE,Q(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Bs(s,kt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Us(s,$())!=null,On(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Vr(s.getIndex()),r=z_(s);this.processor_=yg(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(A.EMPTY_NODE,l.getNode(),null),u=new ft(a,o.isFullyInitialized(),i.filtersNodes()),h=new ft(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ri(h,u),this.eventGenerator_=new J_(this.query_)}get query(){return this.query_}}function xg(t){return t.viewCache_.serverCache.getNode()}function Ng(t){return Ls(t.viewCache_)}function Rg(t,e){const n=kt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!L(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function Ml(t){return t.eventRegistrations_.length===0}function Ag(t,e){t.eventRegistrations_.push(e)}function kl(t,e,n){const s=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Fl(t,e,n,s){e.type===Me.MERGE&&e.source.queryId!==null&&(E(kt(t.viewCache_),"We should always have a full cache before handling merges"),E(Ls(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Cg(t.processor_,i,e,n,s);return vg(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Gc(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Pg(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ee,(r,o)=>{s.push(an(r,o))}),n.isFullyInitialized()&&s.push(Lc(n.getNode())),Gc(t,s,n.getNode(),e)}function Gc(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Z_(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs;class Yc{constructor(){this.views=new Map}}function Og(t){E(!Hs,"__referenceConstructor has already been defined"),Hs=t}function Dg(){return E(Hs,"Reference.ts has not been loaded"),Hs}function Mg(t){return t.views.size===0}function Qr(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),Fl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Fl(o,e,n,s));return r}}function Qc(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Bs(n,i?s:null),a=!1;l?a=!0:s instanceof A?(l=qr(n,s),a=!1):(l=A.EMPTY_NODE,a=!1);const c=ri(new ft(l,a,!1),new ft(s,i,!1));return new Sg(e,c)}return o}function kg(t,e,n,s,i,r){const o=Qc(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Ag(o,n),Pg(o,n)}function Fg(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=dt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(kl(c,n,s)),Ml(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(kl(a,n,s)),Ml(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!dt(t)&&r.push(new(Dg())(e._repo,e._path)),{removed:r,events:o}}function Xc(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function at(t,e){let n=null;for(const s of t.views.values())n=n||Rg(s,e);return n}function Jc(t,e){if(e._queryParams.loadsAllData())return li(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Zc(t,e){return Jc(t,e)!=null}function dt(t){return li(t)!=null}function li(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s;function Lg(t){E(!$s,"__referenceConstructor has already been defined"),$s=t}function Bg(){return E($s,"Reference.ts has not been loaded"),$s}let Ug=1;class Ll{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=pg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function eu(t,e,n,s,i){return sg(t.pendingWriteTree_,e,n,s,i),i?ns(t,new Mt(Uc(),e,n)):[]}function xt(t,e,n=!1){const s=ig(t.pendingWriteTree_,e);if(rg(t.pendingWriteTree_,e)){let r=new X(null);return s.snap!=null?r=r.set($(),!0):Te(s.children,o=>{r=r.set(new K(o),!0)}),ns(t,new Fs(s.path,r,n))}else return[]}function ts(t,e,n){return ns(t,new Mt(zr(),e,n))}function Wg(t,e,n){const s=X.fromObject(n);return ns(t,new qn(zr(),e,s))}function Hg(t,e){return ns(t,new Kn(zr(),e))}function $g(t,e,n){const s=Jr(t,n);if(s){const i=Zr(s),r=i.path,o=i.queryId,l=ve(r,e),a=new Kn(Kr(o),l);return eo(t,r,a)}else return[]}function tu(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Zc(o,e))){const a=Fg(o,e,n,s);Mg(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,g)=>dt(g));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=Kg(d);for(let v=0;v<g.length;++v){const S=g[v],O=S.query,z=ru(t,S);t.listenProvider_.startListening(Mn(O),Gn(t,O),z.hashFn,z.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Mn(e),null):c.forEach(d=>{const g=t.queryToTagMap.get(ai(d));t.listenProvider_.stopListening(Mn(d),g)}))}qg(t,c)}return l}function nu(t,e,n,s){const i=Jr(t,s);if(i!=null){const r=Zr(i),o=r.path,l=r.queryId,a=ve(o,e),c=new Mt(Kr(l),a,n);return eo(t,o,c)}else return[]}function Vg(t,e,n,s){const i=Jr(t,s);if(i){const r=Zr(i),o=r.path,l=r.queryId,a=ve(o,e),c=X.fromObject(n),u=new qn(Kr(l),a,c);return eo(t,o,u)}else return[]}function jg(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const v=ve(d,i);r=r||at(g,v),o=o||dt(g)});let l=t.syncPointTree_.get(i);l?(o=o||dt(l),r=r||at(l,$())):(l=new Yc,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const S=at(v,$());S&&(r=r.updateImmediateChild(g,S))}));const c=Zc(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=ai(e);E(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=Gg();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=oi(t.pendingWriteTree_,i);let h=kg(l,e,n,u,r,a);if(!c&&!o&&!s){const d=Jc(l,e);h=h.concat(Yg(t,e,d))}return h}function Xr(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=ve(o,e),c=at(l,a);if(c)return c});return Vc(i,e,r,n,!0)}function zg(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=ve(c,n);s=s||at(u,h)});let i=t.syncPointTree_.get(n);i?s=s||at(i,$()):(i=new Yc,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new ft(s,!0,!1):null,l=oi(t.pendingWriteTree_,e._path),a=Qc(i,e,l,r?o.getNode():A.EMPTY_NODE,r);return Ng(a)}function ns(t,e){return su(e,t.syncPointTree_,null,oi(t.pendingWriteTree_,$()))}function su(t,e,n,s){if(L(t.path))return iu(t,e,n,s);{const i=e.get($());n==null&&i!=null&&(n=at(i,$()));let r=[];const o=U(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=jc(s,o);r=r.concat(su(l,a,c,u))}return i&&(r=r.concat(Qr(i,t,s,n))),r}}function iu(t,e,n,s){const i=e.get($());n==null&&i!=null&&(n=at(i,$()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=jc(s,o),u=t.operationForChild(o);u&&(r=r.concat(iu(u,l,a,c)))}),i&&(r=r.concat(Qr(i,t,s,n))),r}function ru(t,e){const n=e.query,s=Gn(t,n);return{hashFn:()=>(xg(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?$g(t,n._path,s):Hg(t,n._path);{const r=jp(i,n);return tu(t,n,null,r)}}}}function Gn(t,e){const n=ai(e);return t.queryToTagMap.get(n)}function ai(t){return t._path.toString()+"$"+t._queryIdentifier}function Jr(t,e){return t.tagToQueryMap.get(e)}function Zr(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function eo(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=oi(t.pendingWriteTree_,e);return Qr(s,n,i,null)}function Kg(t){return t.fold((e,n,s)=>{if(n&&dt(n))return[li(n)];{let i=[];return n&&(i=Xc(n)),Te(s,(r,o)=>{i=i.concat(o)}),i}})}function Mn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Bg())(t._repo,t._path):t}function qg(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=ai(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Gg(){return Ug++}function Yg(t,e,n){const s=e._path,i=Gn(t,e),r=ru(t,n),o=t.listenProvider_.startListening(Mn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)E(!dt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!L(c)&&u&&dt(u))return[li(u).query];{let d=[];return u&&(d=d.concat(Xc(u).map(g=>g.query))),Te(h,(g,v)=>{d=d.concat(v)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Mn(u),Gn(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new to(n)}node(){return this.node_}}class no{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=re(this.path_,e);return new no(this.syncTree_,n)}node(){return Xr(this.syncTree_,this.path_)}}const Qg=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Bl=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Xg(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Jg(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Xg=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},Jg=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Zg=function(t,e,n,s){return so(e,new no(n,t),s)},ou=function(t,e,n){return so(t,new to(e),n)};function so(t,e,n){const s=t.getPriority().val(),i=Bl(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Bl(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new oe(l,ae(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new oe(i))),o.forEachChild(ee,(l,a)=>{const c=so(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ro(t,e){let n=e instanceof K?e:new K(e),s=t,i=U(n);for(;i!==null;){const r=on(s.node.children,i)||{children:{},childCount:0};s=new io(i,s,r),n=Q(n),i=U(n)}return s}function gn(t){return t.node.value}function lu(t,e){t.node.value=e,dr(t)}function au(t){return t.node.childCount>0}function em(t){return gn(t)===void 0&&!au(t)}function ci(t,e){Te(t.node.children,(n,s)=>{e(new io(n,t,s))})}function cu(t,e,n,s){n&&!s&&e(t),ci(t,i=>{cu(i,e,!0,s)}),n&&s&&e(t)}function tm(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ss(t){return new K(t.parent===null?t.name:ss(t.parent)+"/"+t.name)}function dr(t){t.parent!==null&&nm(t.parent,t.name,t)}function nm(t,e,n){const s=em(n),i=Je(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,dr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,dr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=/[\[\].#$\/\u0000-\u001F\u007F]/,im=/[\[\].#$\u0000-\u001F\u007F]/,Fi=10*1024*1024,uu=function(t){return typeof t=="string"&&t.length!==0&&!sm.test(t)},hu=function(t){return typeof t=="string"&&t.length!==0&&!im.test(t)},rm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),hu(t)},fu=function(t,e,n,s){s&&e===void 0||oo(kr(t,"value"),e,n)},oo=function(t,e,n){const s=n instanceof K?new w_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Et(s));if(typeof e=="function")throw new Error(t+"contains a function "+Et(s)+" with contents = "+e.toString());if(oc(e))throw new Error(t+"contains "+e.toString()+" "+Et(s));if(typeof e=="string"&&e.length>Fi/3&&si(e)>Fi)throw new Error(t+"contains a string greater than "+Fi+" utf8 bytes "+Et(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Te(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!uu(o)))throw new Error(t+" contains an invalid key ("+o+") "+Et(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);I_(s,o),oo(t,l,s),T_(s)}),i&&r)throw new Error(t+' contains ".value" child '+Et(s)+" in addition to actual children.")}},du=function(t,e,n,s){if(!(s&&n===void 0)&&!hu(n))throw new Error(kr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},om=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),du(t,e,n,s)},pu=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},lm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!uu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!rm(n))throw new Error(kr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _u(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Ac(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function je(t,e,n){_u(t,n),cm(t,s=>De(s,e)||De(e,s))}function cm(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(um(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function um(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();At&&de("event: "+n.toString()),_n(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="repo_interrupt",fm=25;class dm{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new am,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ks(),this.transactionQueueTree_=new io,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pm(t,e,n){if(t.stats_=Ur(t.repoInfo_),t.forceRestClient_||Gp())t.server_=new Ms(t.repoInfo_,(s,i,r,o)=>{Ul(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Wl(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ie(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ye(t.repoInfo_,e,(s,i,r,o)=>{Ul(t,s,i,r,o)},s=>{Wl(t,s)},s=>{_m(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Zp(t.repoInfo_,()=>new X_(t.stats_,t.server_)),t.infoData_=new K_,t.infoSyncTree_=new Ll({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=ts(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ao(t,"connected",!1),t.serverSyncTree_=new Ll({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);je(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function gu(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function lo(t){return Qg({timestamp:gu(t)})}function Ul(t,e,n,s,i){t.dataUpdateCount++;const r=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Ns(n,c=>ae(c));o=Vg(t.serverSyncTree_,r,a,i)}else{const a=ae(n);o=nu(t.serverSyncTree_,r,a,i)}else if(s){const a=Ns(n,c=>ae(c));o=Wg(t.serverSyncTree_,r,a)}else{const a=ae(n);o=ts(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=hi(t,r)),je(t.eventQueue_,l,o)}function Wl(t,e){ao(t,"connected",e),e===!1&&ym(t)}function _m(t,e){Te(e,(n,s)=>{ao(t,n,s)})}function ao(t,e,n){const s=new K("/.info/"+e),i=ae(n);t.infoData_.updateSnapshot(s,i);const r=ts(t.infoSyncTree_,s,i);je(t.eventQueue_,s,r)}function mu(t){return t.nextWriteId_++}function gm(t,e,n){const s=zg(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ae(i).withIndex(e._queryParams.getIndex());jg(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ts(t.serverSyncTree_,e._path,r);else{const l=Gn(t.serverSyncTree_,e);o=nu(t.serverSyncTree_,e._path,r,l)}return je(t.eventQueue_,e._path,o),tu(t.serverSyncTree_,e,n,null,!0),r},i=>(ui(t,"get for query "+ie(e)+" failed: "+i),Promise.reject(new Error(i))))}function mm(t,e,n,s,i){ui(t,"set",{path:e.toString(),value:n,priority:s});const r=lo(t),o=ae(n,s),l=Xr(t.serverSyncTree_,e),a=ou(o,l,r),c=mu(t),u=eu(t.serverSyncTree_,e,a,c,!0);_u(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const v=d==="ok";v||we("set at "+e+" failed: "+d);const S=xt(t.serverSyncTree_,c,!v);je(t.eventQueue_,e,S),Cm(t,i,d,g)});const h=bu(t,e);hi(t,h),je(t.eventQueue_,h,[])}function ym(t){ui(t,"onDisconnectEvents");const e=lo(t),n=ks();ar(t.onDisconnect_,$(),(i,r)=>{const o=Zg(i,r,t.serverSyncTree_,e);Bc(n,i,o)});let s=[];ar(n,$(),(i,r)=>{s=s.concat(ts(t.serverSyncTree_,i,r));const o=bu(t,i);hi(t,o)}),t.onDisconnect_=ks(),je(t.eventQueue_,$(),s)}function vm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(hm)}function ui(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),de(n,...e)}function Cm(t,e,n,s){e&&_n(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function yu(t,e,n){return Xr(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function co(t,e=t.transactionQueueTree_){if(e||fi(t,e),gn(e)){const n=Cu(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Em(t,ss(e),n)}else au(e)&&ci(e,n=>{co(t,n)})}function Em(t,e,n){const s=n.map(c=>c.currentWriteId),i=yu(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ve(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{ui(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(xt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();fi(t,ro(t.transactionQueueTree_,e)),co(t,t.transactionQueueTree_),je(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)_n(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{we("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}hi(t,e)}},o)}function hi(t,e){const n=vu(t,e),s=ss(n),i=Cu(t,n);return bm(t,i,s),s}function bm(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=ve(n,a.path);let u=!1,h;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(xt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=fm)u=!0,h="maxretry",i=i.concat(xt(t.serverSyncTree_,a.currentWriteId,!0));else{const d=yu(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){oo("transaction failed: Data returned ",g,a.path);let v=ae(g);typeof g=="object"&&g!=null&&Je(g,".priority")||(v=v.updatePriority(d.getPriority()));const O=a.currentWriteId,z=lo(t),W=ou(v,d,z);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=W,a.currentWriteId=mu(t),o.splice(o.indexOf(O),1),i=i.concat(eu(t.serverSyncTree_,a.path,W,a.currentWriteId,a.applyLocally)),i=i.concat(xt(t.serverSyncTree_,O,!0))}else u=!0,h="nodata",i=i.concat(xt(t.serverSyncTree_,a.currentWriteId,!0))}je(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}fi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)_n(s[l]);co(t,t.transactionQueueTree_)}function vu(t,e){let n,s=t.transactionQueueTree_;for(n=U(e);n!==null&&gn(s)===void 0;)s=ro(s,n),e=Q(e),n=U(e);return s}function Cu(t,e){const n=[];return Eu(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Eu(t,e,n){const s=gn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ci(e,i=>{Eu(t,i,n)})}function fi(t,e){const n=gn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,lu(e,n.length>0?n:void 0)}ci(e,s=>{fi(t,s)})}function bu(t,e){const n=ss(vu(t,e)),s=ro(t.transactionQueueTree_,e);return tm(s,i=>{Li(t,i)}),Li(t,s),cu(s,i=>{Li(t,i)}),n}function Li(t,e){const n=gn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(xt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?lu(e,void 0):n.length=r+1,je(t.eventQueue_,ss(e),i);for(let o=0;o<s.length;o++)_n(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Im(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):we(`Invalid query segment '${n}' in query '${t}'`)}return e}const Hl=function(t,e){const n=Tm(t),s=n.namespace;n.domain==="firebase.com"&&Qe(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Qe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Up();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new yc(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new K(n.pathString)}},Tm=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=wm(t.substring(u,h)));const d=Im(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),n=e.substring(v+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Sm=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=$l.charAt(n%64),n=Math.floor(n/64);E(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=$l.charAt(e[i]);return E(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ie(this.snapshot.exportVal())}}class Nm{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return L(this._path)?null:xc(this._path)}get ref(){return new Ze(this._repo,this._path)}get _queryIdentifier(){const e=Sl(this._queryParams),n=Lr(e);return n==="{}"?"default":n}get _queryObject(){return Sl(this._queryParams)}isEqual(e){if(e=Lt(e),!(e instanceof uo))return!1;const n=this._repo===e._repo,s=Ac(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+b_(this._path)}}class Ze extends uo{constructor(e,n){super(e,n,new jr,!1)}get parent(){const e=Rc(this._path);return e===null?null:new Ze(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Yn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),s=Ft(this.ref,e);return new Yn(this._node.getChild(n),s,ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Yn(i,Ft(this.ref,s),ee)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Vt(t,e){return t=Lt(t),t._checkNotDeleted("ref"),e!==void 0?Ft(t._root,e):t._root}function Ft(t,e){return t=Lt(t),U(t._path)===null?om("child","path",e,!1):du("child","path",e,!1),new Ze(t._repo,re(t._path,e))}function Vl(t,e){t=Lt(t),pu("push",t._path),fu("push",e,t._path,!0);const n=gu(t._repo),s=Sm(n),i=Ft(t,s),r=Ft(t,s);let o;return e!=null?o=pr(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function pr(t,e){t=Lt(t),pu("set",t._path),fu("set",e,t._path,!1);const n=new ni;return mm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function jl(t){t=Lt(t);const e=new Rm(()=>{}),n=new ho(e);return gm(t._repo,t,n).then(s=>new Yn(s,new Ze(t._repo,t._path),t._queryParams.getIndex()))}class ho{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new xm("value",this,new Yn(e.snapshotNode,new Ze(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Nm(this,e,n):null}matches(e){return e instanceof ho?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Og(Ze);Lg(Ze);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="FIREBASE_DATABASE_EMULATOR_HOST",_r={};let Pm=!1;function Om(t,e,n,s){t.repoInfo_=new yc(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Dm(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Qe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),de("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Hl(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[Am]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Hl(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Zt(Zt.OWNER):new Qp(t.name,t.options,e);lm("Invalid Firebase Database URL",o),L(o.path)||Qe("Database URL must point to the root of a Firebase Database (not including a child path).");const h=km(l,t,u,new Yp(t.name,n));return new Fm(h,t)}function Mm(t,e){const n=_r[e];(!n||n[t.key]!==t)&&Qe(`Database ${e}(${t.repoInfo_}) has already been deleted.`),vm(t),delete n[t.key]}function km(t,e,n,s){let i=_r[e.name];i||(i={},_r[e.name]=i);let r=i[t.toURLString()];return r&&Qe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new dm(t,Pm,n,s),i[t.toURLString()]=r,r}class Fm{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ze(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Mm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qe("Cannot call "+e+" on a deleted database.")}}function Lm(t=bp(),e){const n=yp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=ud("database");s&&Bm(n,...s)}return n}function Bm(t,e,n,s={}){t=Lt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Qe("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Qe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Zt(Zt.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:hd(s.mockUserToken,t.app.options.projectId);r=new Zt(o)}Om(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t){Mp(Ep),As(new Wn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Dm(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Xt(cl,ul,t),Xt(cl,ul,"esm2017")}Ye.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ye.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Um();const Wm={apiKey:"AIzaSyBLkB46gUITYAU8MkO7bhFxw7ctTjKPPqU",authDomain:"secret-santa-db63e.firebaseapp.com",projectId:"secret-santa-db63e",storageBucket:"secret-santa-db63e.appspot.com",messagingSenderId:"556509656076",appId:"1:556509656076:web:a778bcc506aed5e5486a29"};ec(Wm);const jt=Lm(),Hm=async(t,e,n)=>{jl(Ft(Vt(jt),"usersAvailable")).then(s=>{if(s.exists()){const i=s.val();console.log(i);let r=null,o=null;const l=()=>{const a=Math.floor(Math.random()*i.length),c=i[a];if(console.log(t,c,a,i),c.toLowerCase()===t.toLowerCase())return l();r=c,o=a};l(),jl(Ft(Vt(jt),"relations")).then(a=>{if(a.exists()){const c=a.val();let u=c;c||(u=[]);const d=Object.keys(u).reduce((g,v)=>(console.log(u,v),u[v].secretSanta.toLowerCase()===t.toLowerCase()?(console.log(u[v]),u[v]):!1),!1);if(d){n(`Already have a person to gift, your designated person is: ${d.to}`);return}console.log("existing relation",c),Vl(Vt(jt,"relations"),{secretSanta:t,to:r}).then(()=>{console.log(i),i.splice(o,1),console.log(i),pr(Vt(jt,"usersAvailable"),i),e(r)})}else console.log("No relations available"),Vl(Vt(jt,"relations"),{secretSanta:t,to:r}).then(()=>{console.log(i),i.splice(o,1),console.log(i);const c=i.reduce((u,h,d)=>(u[d]=h,u),{});console.log("usersAvailable",c),pr(Vt(jt,"usersAvailable"),c),e(r)})})}else console.log("No data available")})},$m={class:"home"},Vm=fe("div",{class:"ghost ghost-1"},null,-1),jm=fe("div",{class:"ghost ghost-2"},null,-1),zm={class:"swiper-slide slide-1"},Km={class:"input"},qm=fe("p",{class:"label"},"Enter your name here",-1),Gm={class:"swiper-slide slide-2"},Ym=fe("h2",null,"Click button below to figure out who your spooky basket will be given to",-1),Qm={key:0,class:"error"},Xm={key:1,class:"loading"},Jm={key:2},Zm=fe("div",{class:"trees"},[fe("div",{class:"tree tree-1"}),fe("div",{class:"tree tree-2"}),fe("div",{class:"tree tree-3"})],-1);function ey(t,e,n,s,i,r){const o=wh("v-slides");return wt(),Cn("div",$m,[t.activeSlide===1?(wt(),Cn("div",{key:0,class:"back spacey",onClick:e[0]||(e[0]=(...l)=>r.slideBack&&r.slideBack(...l))},"BACK")):_s("",!0),Vm,jm,Ce(o,{class:"container",options:t.swiperConfig,onInit:r.slidesInit},{slides:Ca(()=>[fe("div",zm,[fe("div",Km,[qm,Rh(fe("input",{placeholder:"Name","onUpdate:modelValue":e[1]||(e[1]=l=>t.user=l)},null,512),[[qf,t.user]])]),fe("div",{class:"button",onClick:e[2]||(e[2]=(...l)=>r.slideNext&&r.slideNext(...l))},"Next")]),fe("div",Gm,[Ym,fe("div",{class:Gs(["button",[t.buttonState]]),onClick:e[3]||(e[3]=(...l)=>r.findPerson&&r.findPerson(...l))},"Click Here",2),t.err?(wt(),Cn("h2",Qm,Co(t.err),1)):_s("",!0),t.buttonState==="loading"?(wt(),Cn("h2",Xm,"Loading...")):_s("",!0),t.receiver?(wt(),Cn("h2",Jm,"You are "+Co(t.receiver)+"'s Secret Santa!",1)):_s("",!0)])]),_:1},8,["options","onInit"]),Zm])}const ty=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ny={name:"home",data:()=>({user:"",receiver:null,err:null,swiper:null,swiperConfig:{autoHeight:!1,spaceBetween:100,allowTouchMove:!1},activeSlide:0,buttonState:"active"}),created(){const t=localStorage.getItem("buttonState");t&&(this.buttonState=t)},methods:{slideBack(){this.activeSlide-=1,this.swiper.slidePrev()},slideNext(){this.activeSlide+=1,this.swiper.slideNext()},findPerson(){this.buttonState="loading",Hm(this.user,t=>{console.log("person",t),this.buttonState="disabled",localStorage.setItem("buttonState","disabled"),this.receiver=t},t=>{this.buttonState="disabled",this.err=t})},slidesInit(t){this.swiper=t,this.resizeObserver&&this.resizeObserver.disconnect(),this.resizeObserver=new ResizeObserver(()=>{this.swiper.update()}),pa(()=>{this.$refs.campaignTypeSelector&&this.resizeObserver.observe(this.$refs.campaignTypeSelector.$el),this.$refs.campaignForm&&this.resizeObserver.observe(this.$refs.campaignForm.$el),this.swiper.update()})}},components:{VSlides:Ph(()=>ed(()=>import("./VSlides-bb62d4c1.js"),["assets/VSlides-bb62d4c1.js","assets/VSlides-891146a1.css"]))}},sy=ty(ny,[["render",ey]]);Qf(sy).mount("#app");export{ty as _,fe as a,_s as b,Cn as c,wt as o,iy as r};
