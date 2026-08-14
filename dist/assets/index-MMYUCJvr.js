(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))s(S);new MutationObserver(S=>{for(const E of S)if(E.type==="childList")for(const H of E.addedNodes)H.tagName==="LINK"&&H.rel==="modulepreload"&&s(H)}).observe(document,{childList:!0,subtree:!0});function h(S){const E={};return S.integrity&&(E.integrity=S.integrity),S.referrerPolicy&&(E.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?E.credentials="include":S.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function s(S){if(S.ep)return;S.ep=!0;const E=h(S);fetch(S.href,E)}})();var Os={exports:{}},Qn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function Op(){if(Gd)return Qn;Gd=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function h(s,S,E){var H=null;if(E!==void 0&&(H=""+E),S.key!==void 0&&(H=""+S.key),"key"in S){E={};for(var j in S)j!=="key"&&(E[j]=S[j])}else E=S;return S=E.ref,{$$typeof:o,type:s,key:H,ref:S!==void 0?S:null,props:E}}return Qn.Fragment=d,Qn.jsx=h,Qn.jsxs=h,Qn}var Qd;function zp(){return Qd||(Qd=1,Os.exports=Op()),Os.exports}var f=zp(),zs={exports:{}},K={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd;function Np(){if(Yd)return K;Yd=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),H=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),_=Symbol.iterator;function X(m){return m===null||typeof m!="object"?null:(m=_&&m[_]||m["@@iterator"],typeof m=="function"?m:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},se=Object.assign,We={};function He(m,N,U){this.props=m,this.context=N,this.refs=We,this.updater=U||F}He.prototype.isReactComponent={},He.prototype.setState=function(m,N){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,N,"setState")},He.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function _e(){}_e.prototype=He.prototype;function de(m,N,U){this.props=m,this.context=N,this.refs=We,this.updater=U||F}var he=de.prototype=new _e;he.constructor=de,se(he,He.prototype),he.isPureReactComponent=!0;var Xe=Array.isArray;function ge(){}var Z={H:null,A:null,T:null,S:null},Re=Object.prototype.hasOwnProperty;function Ze(m,N,U){var L=U.ref;return{$$typeof:o,type:m,key:N,ref:L!==void 0?L:null,props:U}}function wt(m,N){return Ze(m.type,N,m.props)}function Ae(m){return typeof m=="object"&&m!==null&&m.$$typeof===o}function Pe(m){var N={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(U){return N[U]})}var Q=/\/+/g;function Ce(m,N){return typeof m=="object"&&m!==null&&m.key!=null?Pe(""+m.key):N.toString(36)}function oe(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(ge,ge):(m.status="pending",m.then(function(N){m.status==="pending"&&(m.status="fulfilled",m.value=N)},function(N){m.status==="pending"&&(m.status="rejected",m.reason=N)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function T(m,N,U,L,P){var I=typeof m;(I==="undefined"||I==="boolean")&&(m=null);var ae=!1;if(m===null)ae=!0;else switch(I){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(m.$$typeof){case o:case d:ae=!0;break;case D:return ae=m._init,T(ae(m._payload),N,U,L,P)}}if(ae)return P=P(m),ae=L===""?"."+Ce(m,0):L,Xe(P)?(U="",ae!=null&&(U=ae.replace(Q,"$&/")+"/"),T(P,N,U,"",function($e){return $e})):P!=null&&(Ae(P)&&(P=wt(P,U+(P.key==null||m&&m.key===P.key?"":(""+P.key).replace(Q,"$&/")+"/")+ae)),N.push(P)),1;ae=0;var Be=L===""?".":L+":";if(Xe(m))for(var xe=0;xe<m.length;xe++)L=m[xe],I=Be+Ce(L,xe),ae+=T(L,N,U,I,P);else if(xe=X(m),typeof xe=="function")for(m=xe.call(m),xe=0;!(L=m.next()).done;)L=L.value,I=Be+Ce(L,xe++),ae+=T(L,N,U,I,P);else if(I==="object"){if(typeof m.then=="function")return T(oe(m),N,U,L,P);throw N=String(m),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return ae}function R(m,N,U){if(m==null)return m;var L=[],P=0;return T(m,L,"","",function(I){return N.call(U,I,P++)}),L}function k(m){if(m._status===-1){var N=m._result;N=N(),N.then(function(U){(m._status===0||m._status===-1)&&(m._status=1,m._result=U)},function(U){(m._status===0||m._status===-1)&&(m._status=2,m._result=U)}),m._status===-1&&(m._status=0,m._result=N)}if(m._status===1)return m._result.default;throw m._result}var $=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},me={map:R,forEach:function(m,N,U){R(m,function(){N.apply(this,arguments)},U)},count:function(m){var N=0;return R(m,function(){N++}),N},toArray:function(m){return R(m,function(N){return N})||[]},only:function(m){if(!Ae(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return K.Activity=z,K.Children=me,K.Component=He,K.Fragment=h,K.Profiler=S,K.PureComponent=de,K.StrictMode=s,K.Suspense=p,K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,K.__COMPILER_RUNTIME={__proto__:null,c:function(m){return Z.H.useMemoCache(m)}},K.cache=function(m){return function(){return m.apply(null,arguments)}},K.cacheSignal=function(){return null},K.cloneElement=function(m,N,U){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var L=se({},m.props),P=m.key;if(N!=null)for(I in N.key!==void 0&&(P=""+N.key),N)!Re.call(N,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&N.ref===void 0||(L[I]=N[I]);var I=arguments.length-2;if(I===1)L.children=U;else if(1<I){for(var ae=Array(I),Be=0;Be<I;Be++)ae[Be]=arguments[Be+2];L.children=ae}return Ze(m.type,P,L)},K.createContext=function(m){return m={$$typeof:H,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:E,_context:m},m},K.createElement=function(m,N,U){var L,P={},I=null;if(N!=null)for(L in N.key!==void 0&&(I=""+N.key),N)Re.call(N,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(P[L]=N[L]);var ae=arguments.length-2;if(ae===1)P.children=U;else if(1<ae){for(var Be=Array(ae),xe=0;xe<ae;xe++)Be[xe]=arguments[xe+2];P.children=Be}if(m&&m.defaultProps)for(L in ae=m.defaultProps,ae)P[L]===void 0&&(P[L]=ae[L]);return Ze(m,I,P)},K.createRef=function(){return{current:null}},K.forwardRef=function(m){return{$$typeof:j,render:m}},K.isValidElement=Ae,K.lazy=function(m){return{$$typeof:D,_payload:{_status:-1,_result:m},_init:k}},K.memo=function(m,N){return{$$typeof:g,type:m,compare:N===void 0?null:N}},K.startTransition=function(m){var N=Z.T,U={};Z.T=U;try{var L=m(),P=Z.S;P!==null&&P(U,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(ge,$)}catch(I){$(I)}finally{N!==null&&U.types!==null&&(N.types=U.types),Z.T=N}},K.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},K.use=function(m){return Z.H.use(m)},K.useActionState=function(m,N,U){return Z.H.useActionState(m,N,U)},K.useCallback=function(m,N){return Z.H.useCallback(m,N)},K.useContext=function(m){return Z.H.useContext(m)},K.useDebugValue=function(){},K.useDeferredValue=function(m,N){return Z.H.useDeferredValue(m,N)},K.useEffect=function(m,N){return Z.H.useEffect(m,N)},K.useEffectEvent=function(m){return Z.H.useEffectEvent(m)},K.useId=function(){return Z.H.useId()},K.useImperativeHandle=function(m,N,U){return Z.H.useImperativeHandle(m,N,U)},K.useInsertionEffect=function(m,N){return Z.H.useInsertionEffect(m,N)},K.useLayoutEffect=function(m,N){return Z.H.useLayoutEffect(m,N)},K.useMemo=function(m,N){return Z.H.useMemo(m,N)},K.useOptimistic=function(m,N){return Z.H.useOptimistic(m,N)},K.useReducer=function(m,N,U){return Z.H.useReducer(m,N,U)},K.useRef=function(m){return Z.H.useRef(m)},K.useState=function(m){return Z.H.useState(m)},K.useSyncExternalStore=function(m,N,U){return Z.H.useSyncExternalStore(m,N,U)},K.useTransition=function(){return Z.H.useTransition()},K.version="19.2.8",K}var kd;function Rs(){return kd||(kd=1,zs.exports=Np()),zs.exports}var J=Rs(),Ns={exports:{}},Yn={},Cs={exports:{}},Bs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd;function Cp(){return Vd||(Vd=1,(function(o){function d(T,R){var k=T.length;T.push(R);e:for(;0<k;){var $=k-1>>>1,me=T[$];if(0<S(me,R))T[$]=R,T[k]=me,k=$;else break e}}function h(T){return T.length===0?null:T[0]}function s(T){if(T.length===0)return null;var R=T[0],k=T.pop();if(k!==R){T[0]=k;e:for(var $=0,me=T.length,m=me>>>1;$<m;){var N=2*($+1)-1,U=T[N],L=N+1,P=T[L];if(0>S(U,k))L<me&&0>S(P,U)?(T[$]=P,T[L]=k,$=L):(T[$]=U,T[N]=k,$=N);else if(L<me&&0>S(P,k))T[$]=P,T[L]=k,$=L;else break e}}return R}function S(T,R){var k=T.sortIndex-R.sortIndex;return k!==0?k:T.id-R.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var E=performance;o.unstable_now=function(){return E.now()}}else{var H=Date,j=H.now();o.unstable_now=function(){return H.now()-j}}var p=[],g=[],D=1,z=null,_=3,X=!1,F=!1,se=!1,We=!1,He=typeof setTimeout=="function"?setTimeout:null,_e=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;function he(T){for(var R=h(g);R!==null;){if(R.callback===null)s(g);else if(R.startTime<=T)s(g),R.sortIndex=R.expirationTime,d(p,R);else break;R=h(g)}}function Xe(T){if(se=!1,he(T),!F)if(h(p)!==null)F=!0,ge||(ge=!0,Pe());else{var R=h(g);R!==null&&oe(Xe,R.startTime-T)}}var ge=!1,Z=-1,Re=5,Ze=-1;function wt(){return We?!0:!(o.unstable_now()-Ze<Re)}function Ae(){if(We=!1,ge){var T=o.unstable_now();Ze=T;var R=!0;try{e:{F=!1,se&&(se=!1,_e(Z),Z=-1),X=!0;var k=_;try{t:{for(he(T),z=h(p);z!==null&&!(z.expirationTime>T&&wt());){var $=z.callback;if(typeof $=="function"){z.callback=null,_=z.priorityLevel;var me=$(z.expirationTime<=T);if(T=o.unstable_now(),typeof me=="function"){z.callback=me,he(T),R=!0;break t}z===h(p)&&s(p),he(T)}else s(p);z=h(p)}if(z!==null)R=!0;else{var m=h(g);m!==null&&oe(Xe,m.startTime-T),R=!1}}break e}finally{z=null,_=k,X=!1}R=void 0}}finally{R?Pe():ge=!1}}}var Pe;if(typeof de=="function")Pe=function(){de(Ae)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,Ce=Q.port2;Q.port1.onmessage=Ae,Pe=function(){Ce.postMessage(null)}}else Pe=function(){He(Ae,0)};function oe(T,R){Z=He(function(){T(o.unstable_now())},R)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(T){T.callback=null},o.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Re=0<T?Math.floor(1e3/T):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(T){switch(_){case 1:case 2:case 3:var R=3;break;default:R=_}var k=_;_=R;try{return T()}finally{_=k}},o.unstable_requestPaint=function(){We=!0},o.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var k=_;_=T;try{return R()}finally{_=k}},o.unstable_scheduleCallback=function(T,R,k){var $=o.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?$+k:$):k=$,T){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=k+me,T={id:D++,callback:R,priorityLevel:T,startTime:k,expirationTime:me,sortIndex:-1},k>$?(T.sortIndex=k,d(g,T),h(p)===null&&T===h(g)&&(se?(_e(Z),Z=-1):se=!0,oe(Xe,k-$))):(T.sortIndex=me,d(p,T),F||X||(F=!0,ge||(ge=!0,Pe()))),T},o.unstable_shouldYield=wt,o.unstable_wrapCallback=function(T){var R=_;return function(){var k=_;_=R;try{return T.apply(this,arguments)}finally{_=k}}}})(Bs)),Bs}var wd;function Bp(){return wd||(wd=1,Cs.exports=Cp()),Cs.exports}var Ds={exports:{}},st={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function Dp(){if(Xd)return st;Xd=1;var o=Rs();function d(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var D=2;D<arguments.length;D++)g+="&args[]="+encodeURIComponent(arguments[D])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var s={d:{f:h,r:function(){throw Error(d(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},S=Symbol.for("react.portal");function E(p,g,D){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:S,key:z==null?null:""+z,children:p,containerInfo:g,implementation:D}}var H=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,st.createPortal=function(p,g){var D=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(d(299));return E(p,g,null,D)},st.flushSync=function(p){var g=H.T,D=s.p;try{if(H.T=null,s.p=2,p)return p()}finally{H.T=g,s.p=D,s.d.f()}},st.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},st.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},st.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var D=g.as,z=j(D,g.crossOrigin),_=typeof g.integrity=="string"?g.integrity:void 0,X=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;D==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:z,integrity:_,fetchPriority:X}):D==="script"&&s.d.X(p,{crossOrigin:z,integrity:_,fetchPriority:X,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},st.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var D=j(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:D,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},st.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var D=g.as,z=j(D,g.crossOrigin);s.d.L(p,D,{crossOrigin:z,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},st.preloadModule=function(p,g){if(typeof p=="string")if(g){var D=j(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:D,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},st.requestFormReset=function(p){s.d.r(p)},st.unstable_batchedUpdates=function(p,g){return p(g)},st.useFormState=function(p,g,D){return H.H.useFormState(p,g,D)},st.useFormStatus=function(){return H.H.useHostTransitionStatus()},st.version="19.2.8",st}var Zd;function jp(){if(Zd)return Ds.exports;Zd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Ds.exports=Dp(),Ds.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd;function _p(){if(Pd)return Yn;Pd=1;var o=Bp(),d=Rs(),h=jp();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function E(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function H(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(E(e)!==e)throw Error(s(188))}function g(e){var t=e.alternate;if(!t){if(t=E(e),t===null)throw Error(s(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return p(n),e;if(i===a)return p(n),t;i=i.sibling}throw Error(s(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u)throw Error(s(189))}}if(l.alternate!==a)throw Error(s(190))}if(l.tag!==3)throw Error(s(188));return l.stateNode.current===l?e:t}function D(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=D(e),t!==null)return t;e=e.sibling}return null}var z=Object.assign,_=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),se=Symbol.for("react.fragment"),We=Symbol.for("react.strict_mode"),He=Symbol.for("react.profiler"),_e=Symbol.for("react.consumer"),de=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),Xe=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),Ze=Symbol.for("react.activity"),wt=Symbol.for("react.memo_cache_sentinel"),Ae=Symbol.iterator;function Pe(e){return e===null||typeof e!="object"?null:(e=Ae&&e[Ae]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function Ce(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case se:return"Fragment";case He:return"Profiler";case We:return"StrictMode";case Xe:return"Suspense";case ge:return"SuspenseList";case Ze:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case de:return e.displayName||"Context";case _e:return(e._context.displayName||"Context")+".Consumer";case he:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:Ce(e.type)||"Memo";case Re:t=e._payload,e=e._init;try{return Ce(e(t))}catch{}}return null}var oe=Array.isArray,T=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},$=[],me=-1;function m(e){return{current:e}}function N(e){0>me||(e.current=$[me],$[me]=null,me--)}function U(e,t){me++,$[me]=e.current,e.current=t}var L=m(null),P=m(null),I=m(null),ae=m(null);function Be(e,t){switch(U(I,t),U(P,e),U(L,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?sd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=sd(t),e=od(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}N(L),U(L,e)}function xe(){N(L),N(P),N(I)}function $e(e){e.memoizedState!==null&&U(ae,e);var t=L.current,l=od(t,e.type);t!==l&&(U(P,e),U(L,l))}function Jt(e){P.current===e&&(N(L),N(P)),ae.current===e&&(N(ae),qn._currentValue=k)}var Vl,Vn;function Ft(e){if(Vl===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Vl=t&&t[1]||"",Vn=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vl+e+Vn}var q=!1;function te(e,t){if(!e||q)return"";q=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(M){var A=M}Reflect.construct(e,[],B)}else{try{B.call()}catch(M){A=M}e.call(B.prototype)}}else{try{throw Error()}catch(M){A=M}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(M){if(M&&A&&typeof M.stack=="string")return[M.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var r=u.split(`
`),b=c.split(`
`);for(n=a=0;a<r.length&&!r[a].includes("DetermineComponentFrameRoot");)a++;for(;n<b.length&&!b[n].includes("DetermineComponentFrameRoot");)n++;if(a===r.length||n===b.length)for(a=r.length-1,n=b.length-1;1<=a&&0<=n&&r[a]!==b[n];)n--;for(;1<=a&&0<=n;a--,n--)if(r[a]!==b[n]){if(a!==1||n!==1)do if(a--,n--,0>n||r[a]!==b[n]){var O=`
`+r[a].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=a&&0<=n);break}}}finally{q=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Ft(l):""}function fe(e,t){switch(e.tag){case 26:case 27:case 5:return Ft(e.type);case 16:return Ft("Lazy");case 13:return e.child!==t&&t!==null?Ft("Suspense Fallback"):Ft("Suspense");case 19:return Ft("SuspenseList");case 0:case 15:return te(e.type,!1);case 11:return te(e.type.render,!1);case 1:return te(e.type,!0);case 31:return Ft("Activity");default:return""}}function Ne(e){try{var t="",l=null;do t+=fe(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ke=Object.prototype.hasOwnProperty,rt=o.unstable_scheduleCallback,Ue=o.unstable_cancelCallback,Nt=o.unstable_shouldYield,Ct=o.unstable_requestPaint,Oe=o.unstable_now,xt=o.unstable_getCurrentPriorityLevel,wn=o.unstable_ImmediatePriority,Gs=o.unstable_UserBlockingPriority,Xn=o.unstable_NormalPriority,sm=o.unstable_LowPriority,Qs=o.unstable_IdlePriority,om=o.log,rm=o.unstable_setDisableYieldValue,Pa=null,bt=null;function vl(e){if(typeof om=="function"&&rm(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Pa,e)}catch{}}var St=Math.clz32?Math.clz32:mm,fm=Math.log,dm=Math.LN2;function mm(e){return e>>>=0,e===0?32:31-(fm(e)/dm|0)|0}var Zn=256,Pn=262144,Kn=4194304;function wl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Jn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=wl(a):(u&=c,u!==0?n=wl(u):l||(l=c&~e,l!==0&&(n=wl(l))))):(c=a&~i,c!==0?n=wl(c):u!==0?n=wl(u):l||(l=a&~e,l!==0&&(n=wl(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function Ka(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ym(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ys(){var e=Kn;return Kn<<=1,(Kn&62914560)===0&&(Kn=4194304),e}function pu(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ja(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pm(e,t,l,a,n,i){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,r=e.expirationTimes,b=e.hiddenUpdates;for(l=u&~l;0<l;){var O=31-St(l),B=1<<O;c[O]=0,r[O]=-1;var A=b[O];if(A!==null)for(b[O]=null,O=0;O<A.length;O++){var M=A[O];M!==null&&(M.lane&=-536870913)}l&=~B}a!==0&&ks(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function ks(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-St(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function Vs(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-St(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function ws(e,t){var l=t&-t;return l=(l&42)!==0?1:vu(l),(l&(e.suspendedLanes|t))!==0?0:l}function vu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xs(){var e=R.p;return e!==0?e:(e=window.event,e===void 0?32:Dd(e.type))}function Zs(e,t){var l=R.p;try{return R.p=e,t()}finally{R.p=l}}var hl=Math.random().toString(36).slice(2),at="__reactFiber$"+hl,ft="__reactProps$"+hl,oa="__reactContainer$"+hl,gu="__reactEvents$"+hl,vm="__reactListeners$"+hl,hm="__reactHandles$"+hl,Ps="__reactResources$"+hl,Fa="__reactMarker$"+hl;function xu(e){delete e[at],delete e[ft],delete e[gu],delete e[vm],delete e[hm]}function ra(e){var t=e[at];if(t)return t;for(var l=e.parentNode;l;){if(t=l[oa]||l[at]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=vd(e);e!==null;){if(l=e[at])return l;e=vd(e)}return t}e=l,l=e.parentNode}return null}function fa(e){if(e=e[at]||e[oa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ia(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function da(e){var t=e[Ps];return t||(t=e[Ps]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[Fa]=!0}var Ks=new Set,Js={};function Xl(e,t){ma(e,t),ma(e+"Capture",t)}function ma(e,t){for(Js[e]=t,e=0;e<t.length;e++)Ks.add(t[e])}var gm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fs={},Is={};function xm(e){return ke.call(Is,e)?!0:ke.call(Fs,e)?!1:gm.test(e)?Is[e]=!0:(Fs[e]=!0,!1)}function Fn(e,t,l){if(xm(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function In(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function It(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function Bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ws(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bm(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bu(e){if(!e._valueTracker){var t=Ws(e)?"checked":"value";e._valueTracker=bm(e,t,""+e[t])}}function $s(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Ws(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function Wn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Sm=/[\n"\\]/g;function Dt(e){return e.replace(Sm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Su(e,t,l,a,n,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Bt(t)):e.value!==""+Bt(t)&&(e.value=""+Bt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Au(e,u,Bt(t)):l!=null?Au(e,u,Bt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+Bt(c):e.removeAttribute("name")}function eo(e,t,l,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){bu(e);return}l=l!=null?""+Bt(l):"",t=t!=null?""+Bt(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),bu(e)}function Au(e,t,l){t==="number"&&Wn(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function ya(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+Bt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function to(e,t,l){if(t!=null&&(t=""+Bt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Bt(l):""}function lo(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(s(92));if(oe(a)){if(1<a.length)throw Error(s(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=Bt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),bu(e)}function pa(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Am=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ao(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Am.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function no(e,t,l){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&ao(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&ao(e,i,t[i])}function Tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $n(e){return Mm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wt(){}var Mu=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var va=null,ha=null;function io(e){var t=fa(e);if(t&&(e=t.stateNode)){var l=e[ft]||null;e:switch(e=t.stateNode,t.type){case"input":if(Su(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Dt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[ft]||null;if(!n)throw Error(s(90));Su(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&$s(a)}break e;case"textarea":to(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&ya(e,!!l.multiple,t,!1)}}}var Hu=!1;function uo(e,t,l){if(Hu)return e(t,l);Hu=!0;try{var a=e(t);return a}finally{if(Hu=!1,(va!==null||ha!==null)&&(Qi(),va&&(t=va,e=ha,ha=va=null,io(t),e)))for(t=0;t<e.length;t++)io(e[t])}}function Wa(e,t){var l=e.stateNode;if(l===null)return null;var a=l[ft]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(s(231,t,typeof l));return l}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=!1;if($t)try{var $a={};Object.defineProperty($a,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",$a,$a),window.removeEventListener("test",$a,$a)}catch{Ou=!1}var gl=null,zu=null,ei=null;function co(){if(ei)return ei;var e,t=zu,l=t.length,a,n="value"in gl?gl.value:gl.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===n[i-a];a++);return ei=n.slice(e,1<a?1-a:void 0)}function ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function li(){return!0}function so(){return!1}function dt(e){function t(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?li:so,this.isPropagationStopped=so,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),t}var Zl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ai=dt(Zl),en=z({},Zl,{view:0,detail:0}),Em=dt(en),Nu,Cu,tn,ni=z({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tn&&(tn&&e.type==="mousemove"?(Nu=e.screenX-tn.screenX,Cu=e.screenY-tn.screenY):Cu=Nu=0,tn=e),Nu)},movementY:function(e){return"movementY"in e?e.movementY:Cu}}),oo=dt(ni),Hm=z({},ni,{dataTransfer:0}),Om=dt(Hm),zm=z({},en,{relatedTarget:0}),Bu=dt(zm),Nm=z({},Zl,{animationName:0,elapsedTime:0,pseudoElement:0}),Cm=dt(Nm),Bm=z({},Zl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dm=dt(Bm),jm=z({},Zl,{data:0}),ro=dt(jm),_m={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Um(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qm[e])?!!t[e]:!1}function Du(){return Um}var Lm=z({},en,{key:function(e){if(e.key){var t=_m[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gm=dt(Lm),Qm=z({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fo=dt(Qm),Ym=z({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),km=dt(Ym),Vm=z({},Zl,{propertyName:0,elapsedTime:0,pseudoElement:0}),wm=dt(Vm),Xm=z({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zm=dt(Xm),Pm=z({},Zl,{newState:0,oldState:0}),Km=dt(Pm),Jm=[9,13,27,32],ju=$t&&"CompositionEvent"in window,ln=null;$t&&"documentMode"in document&&(ln=document.documentMode);var Fm=$t&&"TextEvent"in window&&!ln,mo=$t&&(!ju||ln&&8<ln&&11>=ln),yo=" ",po=!1;function vo(e,t){switch(e){case"keyup":return Jm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ho(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ga=!1;function Im(e,t){switch(e){case"compositionend":return ho(t);case"keypress":return t.which!==32?null:(po=!0,yo);case"textInput":return e=t.data,e===yo&&po?null:e;default:return null}}function Wm(e,t){if(ga)return e==="compositionend"||!ju&&vo(e,t)?(e=co(),ei=zu=gl=null,ga=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mo&&t.locale!=="ko"?null:t.data;default:return null}}var $m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$m[e.type]:t==="textarea"}function xo(e,t,l,a){va?ha?ha.push(a):ha=[a]:va=a,t=Pi(t,"onChange"),0<t.length&&(l=new ai("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var an=null,nn=null;function ey(e){ld(e,0)}function ii(e){var t=Ia(e);if($s(t))return e}function bo(e,t){if(e==="change")return t}var So=!1;if($t){var _u;if($t){var Ru="oninput"in document;if(!Ru){var Ao=document.createElement("div");Ao.setAttribute("oninput","return;"),Ru=typeof Ao.oninput=="function"}_u=Ru}else _u=!1;So=_u&&(!document.documentMode||9<document.documentMode)}function To(){an&&(an.detachEvent("onpropertychange",Mo),nn=an=null)}function Mo(e){if(e.propertyName==="value"&&ii(nn)){var t=[];xo(t,nn,e,Eu(e)),uo(ey,t)}}function ty(e,t,l){e==="focusin"?(To(),an=t,nn=l,an.attachEvent("onpropertychange",Mo)):e==="focusout"&&To()}function ly(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ii(nn)}function ay(e,t){if(e==="click")return ii(t)}function ny(e,t){if(e==="input"||e==="change")return ii(t)}function iy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:iy;function un(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!ke.call(t,n)||!At(e[n],t[n]))return!1}return!0}function Eo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ho(e,t){var l=Eo(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Eo(l)}}function Oo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Oo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wn(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Wn(e.document)}return t}function qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var uy=$t&&"documentMode"in document&&11>=document.documentMode,xa=null,Uu=null,cn=null,Lu=!1;function No(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Lu||xa==null||xa!==Wn(a)||(a=xa,"selectionStart"in a&&qu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),cn&&un(cn,a)||(cn=a,a=Pi(Uu,"onSelect"),0<a.length&&(t=new ai("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=xa)))}function Pl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ba={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionrun:Pl("Transition","TransitionRun"),transitionstart:Pl("Transition","TransitionStart"),transitioncancel:Pl("Transition","TransitionCancel"),transitionend:Pl("Transition","TransitionEnd")},Gu={},Co={};$t&&(Co=document.createElement("div").style,"AnimationEvent"in window||(delete ba.animationend.animation,delete ba.animationiteration.animation,delete ba.animationstart.animation),"TransitionEvent"in window||delete ba.transitionend.transition);function Kl(e){if(Gu[e])return Gu[e];if(!ba[e])return e;var t=ba[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Co)return Gu[e]=t[l];return e}var Bo=Kl("animationend"),Do=Kl("animationiteration"),jo=Kl("animationstart"),cy=Kl("transitionrun"),sy=Kl("transitionstart"),oy=Kl("transitioncancel"),_o=Kl("transitionend"),Ro=new Map,Qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qu.push("scrollEnd");function Yt(e,t){Ro.set(e,t),Xl(t,[e])}var ui=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},jt=[],Sa=0,Yu=0;function ci(){for(var e=Sa,t=Yu=Sa=0;t<e;){var l=jt[t];jt[t++]=null;var a=jt[t];jt[t++]=null;var n=jt[t];jt[t++]=null;var i=jt[t];if(jt[t++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&qo(l,n,i)}}function si(e,t,l,a){jt[Sa++]=e,jt[Sa++]=t,jt[Sa++]=l,jt[Sa++]=a,Yu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function ku(e,t,l,a){return si(e,t,l,a),oi(e)}function Jl(e,t){return si(e,null,null,t),oi(e)}function qo(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-St(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function oi(e){if(50<Nn)throw Nn=0,Ic=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Aa={};function ry(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,l,a){return new ry(e,t,l,a)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function el(e,t){var l=e.alternate;return l===null?(l=Tt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Uo(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ri(e,t,l,a,n,i){var u=0;if(a=e,typeof e=="function")Vu(e)&&(u=1);else if(typeof e=="string")u=pp(e,l,L.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ze:return e=Tt(31,l,t,n),e.elementType=Ze,e.lanes=i,e;case se:return Fl(l.children,n,i,t);case We:u=8,n|=24;break;case He:return e=Tt(12,l,t,n|2),e.elementType=He,e.lanes=i,e;case Xe:return e=Tt(13,l,t,n),e.elementType=Xe,e.lanes=i,e;case ge:return e=Tt(19,l,t,n),e.elementType=ge,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case de:u=10;break e;case _e:u=9;break e;case he:u=11;break e;case Z:u=14;break e;case Re:u=16,a=null;break e}u=29,l=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=Tt(u,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Fl(e,t,l,a){return e=Tt(7,e,a,t),e.lanes=l,e}function wu(e,t,l){return e=Tt(6,e,null,t),e.lanes=l,e}function Lo(e){var t=Tt(18,null,null,0);return t.stateNode=e,t}function Xu(e,t,l){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Go=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var l=Go.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Ne(t)},Go.set(e,t),t)}return{value:e,source:t,stack:Ne(t)}}var Ta=[],Ma=0,fi=null,sn=0,Rt=[],qt=0,xl=null,Xt=1,Zt="";function tl(e,t){Ta[Ma++]=sn,Ta[Ma++]=fi,fi=e,sn=t}function Qo(e,t,l){Rt[qt++]=Xt,Rt[qt++]=Zt,Rt[qt++]=xl,xl=e;var a=Xt;e=Zt;var n=32-St(a)-1;a&=~(1<<n),l+=1;var i=32-St(t)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Xt=1<<32-St(t)+n|l<<n|a,Zt=i+e}else Xt=1<<i|l<<n|a,Zt=e}function Zu(e){e.return!==null&&(tl(e,1),Qo(e,1,0))}function Pu(e){for(;e===fi;)fi=Ta[--Ma],Ta[Ma]=null,sn=Ta[--Ma],Ta[Ma]=null;for(;e===xl;)xl=Rt[--qt],Rt[qt]=null,Zt=Rt[--qt],Rt[qt]=null,Xt=Rt[--qt],Rt[qt]=null}function Yo(e,t){Rt[qt++]=Xt,Rt[qt++]=Zt,Rt[qt++]=xl,Xt=t.id,Zt=t.overflow,xl=e}var nt=null,De=null,re=!1,bl=null,Ut=!1,Ku=Error(s(519));function Sl(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw on(_t(t,e)),Ku}function ko(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[at]=e,t[ft]=a,l){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(l=0;l<Bn.length;l++)ie(Bn[l],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),eo(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),lo(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||ud(t.textContent,l)?(a.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),a.onScroll!=null&&ie("scroll",t),a.onScrollEnd!=null&&ie("scrollend",t),a.onClick!=null&&(t.onclick=Wt),t=!0):t=!1,t||Sl(e,!0)}function Vo(e){for(nt=e.return;nt;)switch(nt.tag){case 5:case 31:case 13:Ut=!1;return;case 27:case 3:Ut=!0;return;default:nt=nt.return}}function Ea(e){if(e!==nt)return!1;if(!re)return Vo(e),re=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||ds(e.type,e.memoizedProps)),l=!l),l&&De&&Sl(e),Vo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));De=pd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));De=pd(e)}else t===27?(t=De,Rl(e.type)?(e=hs,hs=null,De=e):De=t):De=nt?Gt(e.stateNode.nextSibling):null;return!0}function Il(){De=nt=null,re=!1}function Ju(){var e=bl;return e!==null&&(vt===null?vt=e:vt.push.apply(vt,e),bl=null),e}function on(e){bl===null?bl=[e]:bl.push(e)}var Fu=m(null),Wl=null,ll=null;function Al(e,t,l){U(Fu,t._currentValue),t._currentValue=l}function al(e){e._currentValue=Fu.current,N(Fu)}function Iu(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Wu(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var r=0;r<t.length;r++)if(c.context===t[r]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),Iu(i.return,l,e),a||(u=null);break e}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(s(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),Iu(u,l,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function Ha(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(s(387));if(u=u.memoizedProps,u!==null){var c=n.type;At(n.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(n===ae.current){if(u=n.alternate,u===null)throw Error(s(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(qn):e=[qn])}n=n.return}e!==null&&Wu(t,e,l,a),t.flags|=262144}function di(e){for(e=e.firstContext;e!==null;){if(!At(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $l(e){Wl=e,ll=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function it(e){return wo(Wl,e)}function mi(e,t){return Wl===null&&$l(e),wo(e,t)}function wo(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},ll===null){if(e===null)throw Error(s(308));ll=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ll=ll.next=t;return l}var fy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},dy=o.unstable_scheduleCallback,my=o.unstable_NormalPriority,Ke={$$typeof:de,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $u(){return{controller:new fy,data:new Map,refCount:0}}function rn(e){e.refCount--,e.refCount===0&&dy(my,function(){e.controller.abort()})}var fn=null,ec=0,Oa=0,za=null;function yy(e,t){if(fn===null){var l=fn=[];ec=0,Oa=as(),za={status:"pending",value:void 0,then:function(a){l.push(a)}}}return ec++,t.then(Xo,Xo),t}function Xo(){if(--ec===0&&fn!==null){za!==null&&(za.status="fulfilled");var e=fn;fn=null,Oa=0,za=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function py(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Zo=T.S;T.S=function(e,t){Cf=Oe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&yy(e,t),Zo!==null&&Zo(e,t)};var ea=m(null);function tc(){var e=ea.current;return e!==null?e:ze.pooledCache}function yi(e,t){t===null?U(ea,ea.current):U(ea,t.pool)}function Po(){var e=tc();return e===null?null:{parent:Ke._currentValue,pool:e}}var Na=Error(s(460)),lc=Error(s(474)),pi=Error(s(542)),vi={then:function(){}};function Ko(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jo(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Wt,Wt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Io(e),e;default:if(typeof t.status=="string")t.then(Wt,Wt);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Io(e),e}throw la=t,Na}}function ta(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(la=l,Na):l}}var la=null;function Fo(){if(la===null)throw Error(s(459));var e=la;return la=null,e}function Io(e){if(e===Na||e===pi)throw Error(s(483))}var Ca=null,dn=0;function hi(e){var t=dn;return dn+=1,Ca===null&&(Ca=[]),Jo(Ca,e,t)}function mn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function gi(e,t){throw t.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Wo(e){function t(v,y){if(e){var x=v.deletions;x===null?(v.deletions=[y],v.flags|=16):x.push(y)}}function l(v,y){if(!e)return null;for(;y!==null;)t(v,y),y=y.sibling;return null}function a(v){for(var y=new Map;v!==null;)v.key!==null?y.set(v.key,v):y.set(v.index,v),v=v.sibling;return y}function n(v,y){return v=el(v,y),v.index=0,v.sibling=null,v}function i(v,y,x){return v.index=x,e?(x=v.alternate,x!==null?(x=x.index,x<y?(v.flags|=67108866,y):x):(v.flags|=67108866,y)):(v.flags|=1048576,y)}function u(v){return e&&v.alternate===null&&(v.flags|=67108866),v}function c(v,y,x,C){return y===null||y.tag!==6?(y=wu(x,v.mode,C),y.return=v,y):(y=n(y,x),y.return=v,y)}function r(v,y,x,C){var V=x.type;return V===se?O(v,y,x.props.children,C,x.key):y!==null&&(y.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Re&&ta(V)===y.type)?(y=n(y,x.props),mn(y,x),y.return=v,y):(y=ri(x.type,x.key,x.props,null,v.mode,C),mn(y,x),y.return=v,y)}function b(v,y,x,C){return y===null||y.tag!==4||y.stateNode.containerInfo!==x.containerInfo||y.stateNode.implementation!==x.implementation?(y=Xu(x,v.mode,C),y.return=v,y):(y=n(y,x.children||[]),y.return=v,y)}function O(v,y,x,C,V){return y===null||y.tag!==7?(y=Fl(x,v.mode,C,V),y.return=v,y):(y=n(y,x),y.return=v,y)}function B(v,y,x){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=wu(""+y,v.mode,x),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case X:return x=ri(y.type,y.key,y.props,null,v.mode,x),mn(x,y),x.return=v,x;case F:return y=Xu(y,v.mode,x),y.return=v,y;case Re:return y=ta(y),B(v,y,x)}if(oe(y)||Pe(y))return y=Fl(y,v.mode,x,null),y.return=v,y;if(typeof y.then=="function")return B(v,hi(y),x);if(y.$$typeof===de)return B(v,mi(v,y),x);gi(v,y)}return null}function A(v,y,x,C){var V=y!==null?y.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return V!==null?null:c(v,y,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case X:return x.key===V?r(v,y,x,C):null;case F:return x.key===V?b(v,y,x,C):null;case Re:return x=ta(x),A(v,y,x,C)}if(oe(x)||Pe(x))return V!==null?null:O(v,y,x,C,null);if(typeof x.then=="function")return A(v,y,hi(x),C);if(x.$$typeof===de)return A(v,y,mi(v,x),C);gi(v,x)}return null}function M(v,y,x,C,V){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return v=v.get(x)||null,c(y,v,""+C,V);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case X:return v=v.get(C.key===null?x:C.key)||null,r(y,v,C,V);case F:return v=v.get(C.key===null?x:C.key)||null,b(y,v,C,V);case Re:return C=ta(C),M(v,y,x,C,V)}if(oe(C)||Pe(C))return v=v.get(x)||null,O(y,v,C,V,null);if(typeof C.then=="function")return M(v,y,x,hi(C),V);if(C.$$typeof===de)return M(v,y,x,mi(y,C),V);gi(y,C)}return null}function G(v,y,x,C){for(var V=null,ye=null,Y=y,ee=y=0,ce=null;Y!==null&&ee<x.length;ee++){Y.index>ee?(ce=Y,Y=null):ce=Y.sibling;var pe=A(v,Y,x[ee],C);if(pe===null){Y===null&&(Y=ce);break}e&&Y&&pe.alternate===null&&t(v,Y),y=i(pe,y,ee),ye===null?V=pe:ye.sibling=pe,ye=pe,Y=ce}if(ee===x.length)return l(v,Y),re&&tl(v,ee),V;if(Y===null){for(;ee<x.length;ee++)Y=B(v,x[ee],C),Y!==null&&(y=i(Y,y,ee),ye===null?V=Y:ye.sibling=Y,ye=Y);return re&&tl(v,ee),V}for(Y=a(Y);ee<x.length;ee++)ce=M(Y,v,ee,x[ee],C),ce!==null&&(e&&ce.alternate!==null&&Y.delete(ce.key===null?ee:ce.key),y=i(ce,y,ee),ye===null?V=ce:ye.sibling=ce,ye=ce);return e&&Y.forEach(function(Ql){return t(v,Ql)}),re&&tl(v,ee),V}function w(v,y,x,C){if(x==null)throw Error(s(151));for(var V=null,ye=null,Y=y,ee=y=0,ce=null,pe=x.next();Y!==null&&!pe.done;ee++,pe=x.next()){Y.index>ee?(ce=Y,Y=null):ce=Y.sibling;var Ql=A(v,Y,pe.value,C);if(Ql===null){Y===null&&(Y=ce);break}e&&Y&&Ql.alternate===null&&t(v,Y),y=i(Ql,y,ee),ye===null?V=Ql:ye.sibling=Ql,ye=Ql,Y=ce}if(pe.done)return l(v,Y),re&&tl(v,ee),V;if(Y===null){for(;!pe.done;ee++,pe=x.next())pe=B(v,pe.value,C),pe!==null&&(y=i(pe,y,ee),ye===null?V=pe:ye.sibling=pe,ye=pe);return re&&tl(v,ee),V}for(Y=a(Y);!pe.done;ee++,pe=x.next())pe=M(Y,v,ee,pe.value,C),pe!==null&&(e&&pe.alternate!==null&&Y.delete(pe.key===null?ee:pe.key),y=i(pe,y,ee),ye===null?V=pe:ye.sibling=pe,ye=pe);return e&&Y.forEach(function(Hp){return t(v,Hp)}),re&&tl(v,ee),V}function Ee(v,y,x,C){if(typeof x=="object"&&x!==null&&x.type===se&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case X:e:{for(var V=x.key;y!==null;){if(y.key===V){if(V=x.type,V===se){if(y.tag===7){l(v,y.sibling),C=n(y,x.props.children),C.return=v,v=C;break e}}else if(y.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Re&&ta(V)===y.type){l(v,y.sibling),C=n(y,x.props),mn(C,x),C.return=v,v=C;break e}l(v,y);break}else t(v,y);y=y.sibling}x.type===se?(C=Fl(x.props.children,v.mode,C,x.key),C.return=v,v=C):(C=ri(x.type,x.key,x.props,null,v.mode,C),mn(C,x),C.return=v,v=C)}return u(v);case F:e:{for(V=x.key;y!==null;){if(y.key===V)if(y.tag===4&&y.stateNode.containerInfo===x.containerInfo&&y.stateNode.implementation===x.implementation){l(v,y.sibling),C=n(y,x.children||[]),C.return=v,v=C;break e}else{l(v,y);break}else t(v,y);y=y.sibling}C=Xu(x,v.mode,C),C.return=v,v=C}return u(v);case Re:return x=ta(x),Ee(v,y,x,C)}if(oe(x))return G(v,y,x,C);if(Pe(x)){if(V=Pe(x),typeof V!="function")throw Error(s(150));return x=V.call(x),w(v,y,x,C)}if(typeof x.then=="function")return Ee(v,y,hi(x),C);if(x.$$typeof===de)return Ee(v,y,mi(v,x),C);gi(v,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,y!==null&&y.tag===6?(l(v,y.sibling),C=n(y,x),C.return=v,v=C):(l(v,y),C=wu(x,v.mode,C),C.return=v,v=C),u(v)):l(v,y)}return function(v,y,x,C){try{dn=0;var V=Ee(v,y,x,C);return Ca=null,V}catch(Y){if(Y===Na||Y===pi)throw Y;var ye=Tt(29,Y,null,v.mode);return ye.lanes=C,ye.return=v,ye}finally{}}}var aa=Wo(!0),$o=Wo(!1),Tl=!1;function ac(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ml(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function El(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ve&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=oi(e),qo(e,null,l),t}return si(e,a,t,l),oi(e)}function yn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Vs(e,l)}}function ic(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var uc=!1;function pn(){if(uc){var e=za;if(e!==null)throw e}}function vn(e,t,l,a){uc=!1;var n=e.updateQueue;Tl=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var r=c,b=r.next;r.next=null,u===null?i=b:u.next=b,u=r;var O=e.alternate;O!==null&&(O=O.updateQueue,c=O.lastBaseUpdate,c!==u&&(c===null?O.firstBaseUpdate=b:c.next=b,O.lastBaseUpdate=r))}if(i!==null){var B=n.baseState;u=0,O=b=r=null,c=i;do{var A=c.lane&-536870913,M=A!==c.lane;if(M?(ue&A)===A:(a&A)===A){A!==0&&A===Oa&&(uc=!0),O!==null&&(O=O.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var G=e,w=c;A=t;var Ee=l;switch(w.tag){case 1:if(G=w.payload,typeof G=="function"){B=G.call(Ee,B,A);break e}B=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=w.payload,A=typeof G=="function"?G.call(Ee,B,A):G,A==null)break e;B=z({},B,A);break e;case 2:Tl=!0}}A=c.callback,A!==null&&(e.flags|=64,M&&(e.flags|=8192),M=n.callbacks,M===null?n.callbacks=[A]:M.push(A))}else M={lane:A,tag:c.tag,payload:c.payload,callback:c.callback,next:null},O===null?(b=O=M,r=B):O=O.next=M,u|=A;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;M=c,c=M.next,M.next=null,n.lastBaseUpdate=M,n.shared.pending=null}}while(!0);O===null&&(r=B),n.baseState=r,n.firstBaseUpdate=b,n.lastBaseUpdate=O,i===null&&(n.shared.lanes=0),Cl|=u,e.lanes=u,e.memoizedState=B}}function er(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function tr(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)er(l[e],t)}var Ba=m(null),xi=m(0);function lr(e,t){e=dl,U(xi,e),U(Ba,t),dl=e|t.baseLanes}function cc(){U(xi,dl),U(Ba,Ba.current)}function sc(){dl=xi.current,N(Ba),N(xi)}var Mt=m(null),Lt=null;function Hl(e){var t=e.alternate;U(Ve,Ve.current&1),U(Mt,e),Lt===null&&(t===null||Ba.current!==null||t.memoizedState!==null)&&(Lt=e)}function oc(e){U(Ve,Ve.current),U(Mt,e),Lt===null&&(Lt=e)}function ar(e){e.tag===22?(U(Ve,Ve.current),U(Mt,e),Lt===null&&(Lt=e)):Ol()}function Ol(){U(Ve,Ve.current),U(Mt,Mt.current)}function Et(e){N(Mt),Lt===e&&(Lt=null),N(Ve)}var Ve=m(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||ps(l)||vs(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nl=0,W=null,Te=null,Je=null,Si=!1,Da=!1,na=!1,Ai=0,hn=0,ja=null,vy=0;function Le(){throw Error(s(321))}function rc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!At(e[l],t[l]))return!1;return!0}function fc(e,t,l,a,n,i){return nl=i,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Qr:Hc,na=!1,i=l(a,n),na=!1,Da&&(i=ir(t,l,a,n)),nr(e),i}function nr(e){T.H=bn;var t=Te!==null&&Te.next!==null;if(nl=0,Je=Te=W=null,Si=!1,hn=0,ja=null,t)throw Error(s(300));e===null||Fe||(e=e.dependencies,e!==null&&di(e)&&(Fe=!0))}function ir(e,t,l,a){W=e;var n=0;do{if(Da&&(ja=null),hn=0,Da=!1,25<=n)throw Error(s(301));if(n+=1,Je=Te=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}T.H=Yr,i=t(l,a)}while(Da);return i}function hy(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?gn(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(W.flags|=1024),t}function dc(){var e=Ai!==0;return Ai=0,e}function mc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function yc(e){if(Si){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Si=!1}nl=0,Je=Te=W=null,Da=!1,hn=Ai=0,ja=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?W.memoizedState=Je=e:Je=Je.next=e,Je}function we(){if(Te===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Je===null?W.memoizedState:Je.next;if(t!==null)Je=t,Te=e;else{if(e===null)throw W.alternate===null?Error(s(467)):Error(s(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Je===null?W.memoizedState=Je=e:Je=Je.next=e}return Je}function Ti(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gn(e){var t=hn;return hn+=1,ja===null&&(ja=[]),e=Jo(ja,e,t),t=W,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Qr:Hc),e}function Mi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gn(e);if(e.$$typeof===de)return it(e)}throw Error(s(438,String(e)))}function pc(e){var t=null,l=W.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=W.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Ti(),W.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=wt;return t.index++,l}function il(e,t){return typeof t=="function"?t(e):t}function Ei(e){var t=we();return vc(t,Te,e)}function vc(e,t,l){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=u=null,r=null,b=t,O=!1;do{var B=b.lane&-536870913;if(B!==b.lane?(ue&B)===B:(nl&B)===B){var A=b.revertLane;if(A===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),B===Oa&&(O=!0);else if((nl&A)===A){b=b.next,A===Oa&&(O=!0);continue}else B={lane:0,revertLane:b.revertLane,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},r===null?(c=r=B,u=i):r=r.next=B,W.lanes|=A,Cl|=A;B=b.action,na&&l(i,B),i=b.hasEagerState?b.eagerState:l(i,B)}else A={lane:B,revertLane:b.revertLane,gesture:b.gesture,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},r===null?(c=r=A,u=i):r=r.next=A,W.lanes|=B,Cl|=B;b=b.next}while(b!==null&&b!==t);if(r===null?u=i:r.next=c,!At(i,e.memoizedState)&&(Fe=!0,O&&(l=za,l!==null)))throw l;e.memoizedState=i,e.baseState=u,e.baseQueue=r,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function hc(e){var t=we(),l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);At(i,t.memoizedState)||(Fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function ur(e,t,l){var a=W,n=we(),i=re;if(i){if(l===void 0)throw Error(s(407));l=l()}else l=t();var u=!At((Te||n).memoizedState,l);if(u&&(n.memoizedState=l,Fe=!0),n=n.queue,bc(or.bind(null,a,n,e),[e]),n.getSnapshot!==t||u||Je!==null&&Je.memoizedState.tag&1){if(a.flags|=2048,_a(9,{destroy:void 0},sr.bind(null,a,n,l,t),null),ze===null)throw Error(s(349));i||(nl&127)!==0||cr(a,t,l)}return l}function cr(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=W.updateQueue,t===null?(t=Ti(),W.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function sr(e,t,l,a){t.value=l,t.getSnapshot=a,rr(t)&&fr(e)}function or(e,t,l){return l(function(){rr(t)&&fr(e)})}function rr(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!At(e,l)}catch{return!0}}function fr(e){var t=Jl(e,2);t!==null&&ht(t,e,2)}function gc(e){var t=ot();if(typeof e=="function"){var l=e;if(e=l(),na){vl(!0);try{l()}finally{vl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:e},t}function dr(e,t,l,a){return e.baseState=l,vc(e,Te,typeof a=="function"?a:il)}function gy(e,t,l,a,n){if(zi(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};T.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,mr(t,i)):(i.next=l.next,t.pending=l.next=i)}}function mr(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=T.T,u={};T.T=u;try{var c=l(n,a),r=T.S;r!==null&&r(u,c),yr(e,t,c)}catch(b){xc(e,t,b)}finally{i!==null&&u.types!==null&&(i.types=u.types),T.T=i}}else try{i=l(n,a),yr(e,t,i)}catch(b){xc(e,t,b)}}function yr(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){pr(e,t,a)},function(a){return xc(e,t,a)}):pr(e,t,l)}function pr(e,t,l){t.status="fulfilled",t.value=l,vr(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,mr(e,l)))}function xc(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,vr(t),t=t.next;while(t!==a)}e.action=null}function vr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function hr(e,t){return t}function gr(e,t){if(re){var l=ze.formState;if(l!==null){e:{var a=W;if(re){if(De){t:{for(var n=De,i=Ut;n.nodeType!==8;){if(!i){n=null;break t}if(n=Gt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){De=Gt(n.nextSibling),a=n.data==="F!";break e}}Sl(a)}a=!1}a&&(t=l[0])}}return l=ot(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hr,lastRenderedState:t},l.queue=a,l=Ur.bind(null,W,a),a.dispatch=l,a=gc(!1),i=Ec.bind(null,W,!1,a.queue),a=ot(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=gy.bind(null,W,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function xr(e){var t=we();return br(t,Te,e)}function br(e,t,l){if(t=vc(e,t,hr)[0],e=Ei(il)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=gn(t)}catch(u){throw u===Na?pi:u}else a=t;t=we();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(W.flags|=2048,_a(9,{destroy:void 0},xy.bind(null,n,l),null)),[a,i,e]}function xy(e,t){e.action=t}function Sr(e){var t=we(),l=Te;if(l!==null)return br(t,l,e);we(),t=t.memoizedState,l=we();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function _a(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=W.updateQueue,t===null&&(t=Ti(),W.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Ar(){return we().memoizedState}function Hi(e,t,l,a){var n=ot();W.flags|=e,n.memoizedState=_a(1|t,{destroy:void 0},l,a===void 0?null:a)}function Oi(e,t,l,a){var n=we();a=a===void 0?null:a;var i=n.memoizedState.inst;Te!==null&&a!==null&&rc(a,Te.memoizedState.deps)?n.memoizedState=_a(t,i,l,a):(W.flags|=e,n.memoizedState=_a(1|t,i,l,a))}function Tr(e,t){Hi(8390656,8,e,t)}function bc(e,t){Oi(2048,8,e,t)}function by(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=Ti(),W.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Mr(e){var t=we().memoizedState;return by({ref:t,nextImpl:e}),function(){if((ve&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Er(e,t){return Oi(4,2,e,t)}function Hr(e,t){return Oi(4,4,e,t)}function Or(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zr(e,t,l){l=l!=null?l.concat([e]):null,Oi(4,4,Or.bind(null,t,e),l)}function Sc(){}function Nr(e,t){var l=we();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&rc(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Cr(e,t){var l=we();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&rc(t,a[1]))return a[0];if(a=e(),na){vl(!0);try{e()}finally{vl(!1)}}return l.memoizedState=[a,t],a}function Ac(e,t,l){return l===void 0||(nl&1073741824)!==0&&(ue&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=Df(),W.lanes|=e,Cl|=e,l)}function Br(e,t,l,a){return At(l,t)?l:Ba.current!==null?(e=Ac(e,l,a),At(e,t)||(Fe=!0),e):(nl&42)===0||(nl&1073741824)!==0&&(ue&261930)===0?(Fe=!0,e.memoizedState=l):(e=Df(),W.lanes|=e,Cl|=e,t)}function Dr(e,t,l,a,n){var i=R.p;R.p=i!==0&&8>i?i:8;var u=T.T,c={};T.T=c,Ec(e,!1,t,l);try{var r=n(),b=T.S;if(b!==null&&b(c,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var O=py(r,a);xn(e,t,O,zt(e))}else xn(e,t,a,zt(e))}catch(B){xn(e,t,{then:function(){},status:"rejected",reason:B},zt())}finally{R.p=i,u!==null&&c.types!==null&&(u.types=c.types),T.T=u}}function Sy(){}function Tc(e,t,l,a){if(e.tag!==5)throw Error(s(476));var n=jr(e).queue;Dr(e,n,t,k,l===null?Sy:function(){return _r(e),l(a)})}function jr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:k},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function _r(e){var t=jr(e);t.next===null&&(t=e.alternate.memoizedState),xn(e,t.next.queue,{},zt())}function Mc(){return it(qn)}function Rr(){return we().memoizedState}function qr(){return we().memoizedState}function Ay(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=zt();e=Ml(l);var a=El(t,e,l);a!==null&&(ht(a,t,l),yn(a,t,l)),t={cache:$u()},e.payload=t;return}t=t.return}}function Ty(e,t,l){var a=zt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},zi(e)?Lr(t,l):(l=ku(e,t,l,a),l!==null&&(ht(l,e,a),Gr(l,t,a)))}function Ur(e,t,l){var a=zt();xn(e,t,l,a)}function xn(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(zi(e))Lr(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,At(c,u))return si(e,t,n,0),ze===null&&ci(),!1}catch{}finally{}if(l=ku(e,t,n,a),l!==null)return ht(l,e,a),Gr(l,t,a),!0}return!1}function Ec(e,t,l,a){if(a={lane:2,revertLane:as(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zi(e)){if(t)throw Error(s(479))}else t=ku(e,l,a,2),t!==null&&ht(t,e,2)}function zi(e){var t=e.alternate;return e===W||t!==null&&t===W}function Lr(e,t){Da=Si=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Gr(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Vs(e,l)}}var bn={readContext:it,use:Mi,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};bn.useEffectEvent=Le;var Qr={readContext:it,use:Mi,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Tr,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Hi(4194308,4,Or.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Hi(4194308,4,e,t)},useInsertionEffect:function(e,t){Hi(4,2,e,t)},useMemo:function(e,t){var l=ot();t=t===void 0?null:t;var a=e();if(na){vl(!0);try{e()}finally{vl(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=ot();if(l!==void 0){var n=l(t);if(na){vl(!0);try{l(t)}finally{vl(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Ty.bind(null,W,e),[a.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=gc(e);var t=e.queue,l=Ur.bind(null,W,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Sc,useDeferredValue:function(e,t){var l=ot();return Ac(l,e,t)},useTransition:function(){var e=gc(!1);return e=Dr.bind(null,W,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=W,n=ot();if(re){if(l===void 0)throw Error(s(407));l=l()}else{if(l=t(),ze===null)throw Error(s(349));(ue&127)!==0||cr(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,Tr(or.bind(null,a,i,e),[e]),a.flags|=2048,_a(9,{destroy:void 0},sr.bind(null,a,i,l,t),null),l},useId:function(){var e=ot(),t=ze.identifierPrefix;if(re){var l=Zt,a=Xt;l=(a&~(1<<32-St(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Ai++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=vy++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Mc,useFormState:gr,useActionState:gr,useOptimistic:function(e){var t=ot();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Ec.bind(null,W,!0,l),l.dispatch=t,[e,t]},useMemoCache:pc,useCacheRefresh:function(){return ot().memoizedState=Ay.bind(null,W)},useEffectEvent:function(e){var t=ot(),l={impl:e};return t.memoizedState=l,function(){if((ve&2)!==0)throw Error(s(440));return l.impl.apply(void 0,arguments)}}},Hc={readContext:it,use:Mi,useCallback:Nr,useContext:it,useEffect:bc,useImperativeHandle:zr,useInsertionEffect:Er,useLayoutEffect:Hr,useMemo:Cr,useReducer:Ei,useRef:Ar,useState:function(){return Ei(il)},useDebugValue:Sc,useDeferredValue:function(e,t){var l=we();return Br(l,Te.memoizedState,e,t)},useTransition:function(){var e=Ei(il)[0],t=we().memoizedState;return[typeof e=="boolean"?e:gn(e),t]},useSyncExternalStore:ur,useId:Rr,useHostTransitionStatus:Mc,useFormState:xr,useActionState:xr,useOptimistic:function(e,t){var l=we();return dr(l,Te,e,t)},useMemoCache:pc,useCacheRefresh:qr};Hc.useEffectEvent=Mr;var Yr={readContext:it,use:Mi,useCallback:Nr,useContext:it,useEffect:bc,useImperativeHandle:zr,useInsertionEffect:Er,useLayoutEffect:Hr,useMemo:Cr,useReducer:hc,useRef:Ar,useState:function(){return hc(il)},useDebugValue:Sc,useDeferredValue:function(e,t){var l=we();return Te===null?Ac(l,e,t):Br(l,Te.memoizedState,e,t)},useTransition:function(){var e=hc(il)[0],t=we().memoizedState;return[typeof e=="boolean"?e:gn(e),t]},useSyncExternalStore:ur,useId:Rr,useHostTransitionStatus:Mc,useFormState:Sr,useActionState:Sr,useOptimistic:function(e,t){var l=we();return Te!==null?dr(l,Te,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:pc,useCacheRefresh:qr};Yr.useEffectEvent=Mr;function Oc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:z({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var zc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=zt(),n=Ml(a);n.payload=t,l!=null&&(n.callback=l),t=El(e,n,a),t!==null&&(ht(t,e,a),yn(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=zt(),n=Ml(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=El(e,n,a),t!==null&&(ht(t,e,a),yn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=zt(),a=Ml(l);a.tag=2,t!=null&&(a.callback=t),t=El(e,a,l),t!==null&&(ht(t,e,l),yn(t,e,l))}};function kr(e,t,l,a,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!un(l,a)||!un(n,i):!0}function Vr(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&zc.enqueueReplaceState(t,t.state,null)}function ia(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=z({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function wr(e){ui(e)}function Xr(e){console.error(e)}function Zr(e){ui(e)}function Ni(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Pr(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Nc(e,t,l){return l=Ml(l),l.tag=3,l.payload={element:null},l.callback=function(){Ni(e,t)},l}function Kr(e){return e=Ml(e),e.tag=3,e}function Jr(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Pr(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Pr(t,l,a),typeof n!="function"&&(Bl===null?Bl=new Set([this]):Bl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function My(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&Ha(t,l,n,!0),l=Mt.current,l!==null){switch(l.tag){case 31:case 13:return Lt===null?Yi():l.alternate===null&&Ge===0&&(Ge=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===vi?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),es(e,a,n)),!1;case 22:return l.flags|=65536,a===vi?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),es(e,a,n)),!1}throw Error(s(435,l.tag))}return es(e,a,n),Yi(),!1}if(re)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Ku&&(e=Error(s(422),{cause:a}),on(_t(e,l)))):(a!==Ku&&(t=Error(s(423),{cause:a}),on(_t(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=_t(a,l),n=Nc(e.stateNode,a,n),ic(e,n),Ge!==4&&(Ge=2)),!1;var i=Error(s(520),{cause:a});if(i=_t(i,l),zn===null?zn=[i]:zn.push(i),Ge!==4&&(Ge=2),t===null)return!0;a=_t(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=Nc(l.stateNode,a,e),ic(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Bl===null||!Bl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Kr(n),Jr(n,e,l,a),ic(l,n),!1}l=l.return}while(l!==null);return!1}var Cc=Error(s(461)),Fe=!1;function ut(e,t,l,a){t.child=e===null?$o(t,null,l,a):aa(t,e.child,l,a)}function Fr(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return $l(t),a=fc(e,t,l,u,i,n),c=dc(),e!==null&&!Fe?(mc(e,t,n),ul(e,t,n)):(re&&c&&Zu(t),t.flags|=1,ut(e,t,a,n),t.child)}function Ir(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!Vu(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,Wr(e,t,i,a,n)):(e=ri(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Lc(e,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:un,l(u,a)&&e.ref===t.ref)return ul(e,t,n)}return t.flags|=1,e=el(i,a),e.ref=t.ref,e.return=t,t.child=e}function Wr(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(un(i,a)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=a=i,Lc(e,n))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,ul(e,t,n)}return Bc(e,t,l,a,n)}function $r(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return ef(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&yi(t,i!==null?i.cachePool:null),i!==null?lr(t,i):cc(),ar(t);else return a=t.lanes=536870912,ef(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(yi(t,i.cachePool),lr(t,i),Ol(),t.memoizedState=null):(e!==null&&yi(t,null),cc(),Ol());return ut(e,t,n,l),t.child}function Sn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ef(e,t,l,a,n){var i=tc();return i=i===null?null:{parent:Ke._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&yi(t,null),cc(),ar(t),e!==null&&Ha(e,t,a,!0),t.childLanes=n,null}function Ci(e,t){return t=Di({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function tf(e,t,l){return aa(t,e.child,null,l),e=Ci(t,t.pendingProps),e.flags|=2,Et(t),t.memoizedState=null,e}function Ey(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(re){if(a.mode==="hidden")return e=Ci(t,a),t.lanes=536870912,Sn(null,e);if(oc(t),(e=De)?(e=yd(e,Ut),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xl!==null?{id:Xt,overflow:Zt}:null,retryLane:536870912,hydrationErrors:null},l=Lo(e),l.return=t,t.child=l,nt=t,De=null)):e=null,e===null)throw Sl(t);return t.lanes=536870912,null}return Ci(t,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(oc(t),n)if(t.flags&256)t.flags&=-257,t=tf(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Fe||Ha(e,t,l,!1),n=(l&e.childLanes)!==0,Fe||n){if(a=ze,a!==null&&(u=ws(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,Jl(e,u),ht(a,e,u),Cc;Yi(),t=tf(e,t,l)}else e=i.treeContext,De=Gt(u.nextSibling),nt=t,re=!0,bl=null,Ut=!1,e!==null&&Yo(t,e),t=Ci(t,a),t.flags|=4096;return t}return e=el(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Bi(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(s(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Bc(e,t,l,a,n){return $l(t),l=fc(e,t,l,a,void 0,n),a=dc(),e!==null&&!Fe?(mc(e,t,n),ul(e,t,n)):(re&&a&&Zu(t),t.flags|=1,ut(e,t,l,n),t.child)}function lf(e,t,l,a,n,i){return $l(t),t.updateQueue=null,l=ir(t,a,l,n),nr(e),a=dc(),e!==null&&!Fe?(mc(e,t,i),ul(e,t,i)):(re&&a&&Zu(t),t.flags|=1,ut(e,t,l,i),t.child)}function af(e,t,l,a,n){if($l(t),t.stateNode===null){var i=Aa,u=l.contextType;typeof u=="object"&&u!==null&&(i=it(u)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=zc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},ac(t),u=l.contextType,i.context=typeof u=="object"&&u!==null?it(u):Aa,i.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(Oc(t,l,u,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&zc.enqueueReplaceState(i,i.state,null),vn(t,a,i,n),pn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,r=ia(l,c);i.props=r;var b=i.context,O=l.contextType;u=Aa,typeof O=="object"&&O!==null&&(u=it(O));var B=l.getDerivedStateFromProps;O=typeof B=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||b!==u)&&Vr(t,i,a,u),Tl=!1;var A=t.memoizedState;i.state=A,vn(t,a,i,n),pn(),b=t.memoizedState,c||A!==b||Tl?(typeof B=="function"&&(Oc(t,l,B,a),b=t.memoizedState),(r=Tl||kr(t,l,r,a,A,b,u))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=b),i.props=a,i.state=b,i.context=u,a=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,nc(e,t),u=t.memoizedProps,O=ia(l,u),i.props=O,B=t.pendingProps,A=i.context,b=l.contextType,r=Aa,typeof b=="object"&&b!==null&&(r=it(b)),c=l.getDerivedStateFromProps,(b=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==B||A!==r)&&Vr(t,i,a,r),Tl=!1,A=t.memoizedState,i.state=A,vn(t,a,i,n),pn();var M=t.memoizedState;u!==B||A!==M||Tl||e!==null&&e.dependencies!==null&&di(e.dependencies)?(typeof c=="function"&&(Oc(t,l,c,a),M=t.memoizedState),(O=Tl||kr(t,l,O,a,A,M,r)||e!==null&&e.dependencies!==null&&di(e.dependencies))?(b||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,M,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,M,r)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=M),i.props=a,i.state=M,i.context=r,a=O):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Bi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=aa(t,e.child,null,n),t.child=aa(t,null,l,n)):ut(e,t,l,n),t.memoizedState=i.state,e=t.child):e=ul(e,t,n),e}function nf(e,t,l,a){return Il(),t.flags|=256,ut(e,t,l,a),t.child}var Dc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jc(e){return{baseLanes:e,cachePool:Po()}}function _c(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Ot),e}function uf(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(re){if(n?Hl(t):Ol(),(e=De)?(e=yd(e,Ut),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xl!==null?{id:Xt,overflow:Zt}:null,retryLane:536870912,hydrationErrors:null},l=Lo(e),l.return=t,t.child=l,nt=t,De=null)):e=null,e===null)throw Sl(t);return vs(e)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(Ol(),n=t.mode,c=Di({mode:"hidden",children:c},n),a=Fl(a,n,l,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=jc(l),a.childLanes=_c(e,u,l),t.memoizedState=Dc,Sn(null,a)):(Hl(t),Rc(t,c))}var r=e.memoizedState;if(r!==null&&(c=r.dehydrated,c!==null)){if(i)t.flags&256?(Hl(t),t.flags&=-257,t=qc(e,t,l)):t.memoizedState!==null?(Ol(),t.child=e.child,t.flags|=128,t=null):(Ol(),c=a.fallback,n=t.mode,a=Di({mode:"visible",children:a.children},n),c=Fl(c,n,l,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,aa(t,e.child,null,l),a=t.child,a.memoizedState=jc(l),a.childLanes=_c(e,u,l),t.memoizedState=Dc,t=Sn(null,a));else if(Hl(t),vs(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var b=u.dgst;u=b,a=Error(s(419)),a.stack="",a.digest=u,on({value:a,source:null,stack:null}),t=qc(e,t,l)}else if(Fe||Ha(e,t,l,!1),u=(l&e.childLanes)!==0,Fe||u){if(u=ze,u!==null&&(a=ws(u,l),a!==0&&a!==r.retryLane))throw r.retryLane=a,Jl(e,a),ht(u,e,a),Cc;ps(c)||Yi(),t=qc(e,t,l)}else ps(c)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,De=Gt(c.nextSibling),nt=t,re=!0,bl=null,Ut=!1,e!==null&&Yo(t,e),t=Rc(t,a.children),t.flags|=4096);return t}return n?(Ol(),c=a.fallback,n=t.mode,r=e.child,b=r.sibling,a=el(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&65011712,b!==null?c=el(b,c):(c=Fl(c,n,l,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,Sn(null,a),a=t.child,c=e.child.memoizedState,c===null?c=jc(l):(n=c.cachePool,n!==null?(r=Ke._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=Po(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=_c(e,u,l),t.memoizedState=Dc,Sn(e.child,a)):(Hl(t),l=e.child,e=l.sibling,l=el(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function Rc(e,t){return t=Di({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Di(e,t){return e=Tt(22,e,null,t),e.lanes=0,e}function qc(e,t,l){return aa(t,e.child,null,l),e=Rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cf(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Iu(e.return,t,l)}function Uc(e,t,l,a,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function sf(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=Ve.current,c=(u&2)!==0;if(c?(u=u&1|2,t.flags|=128):u&=1,U(Ve,u),ut(e,t,a,l),a=re?sn:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cf(e,l,t);else if(e.tag===19)cf(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&bi(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Uc(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&bi(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Uc(t,!0,l,null,i,a);break;case"together":Uc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function ul(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Cl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(Ha(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,l=el(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=el(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Lc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&di(e)))}function Hy(e,t,l){switch(t.tag){case 3:Be(t,t.stateNode.containerInfo),Al(t,Ke,e.memoizedState.cache),Il();break;case 27:case 5:$e(t);break;case 4:Be(t,t.stateNode.containerInfo);break;case 10:Al(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,oc(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Hl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?uf(e,t,l):(Hl(t),e=ul(e,t,l),e!==null?e.sibling:null);Hl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(Ha(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return sf(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),U(Ve,Ve.current),a)break;return null;case 22:return t.lanes=0,$r(e,t,l,t.pendingProps);case 24:Al(t,Ke,e.memoizedState.cache)}return ul(e,t,l)}function of(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!Lc(e,l)&&(t.flags&128)===0)return Fe=!1,Hy(e,t,l);Fe=(e.flags&131072)!==0}else Fe=!1,re&&(t.flags&1048576)!==0&&Qo(t,sn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ta(t.elementType),t.type=e,typeof e=="function")Vu(e)?(a=ia(e,a),t.tag=1,t=af(null,t,e,a,l)):(t.tag=0,t=Bc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===he){t.tag=11,t=Fr(null,t,e,a,l);break e}else if(n===Z){t.tag=14,t=Ir(null,t,e,a,l);break e}}throw t=Ce(e)||e,Error(s(306,t,""))}}return t;case 0:return Bc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=ia(a,t.pendingProps),af(e,t,a,n,l);case 3:e:{if(Be(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,nc(e,t),vn(t,a,null,l);var u=t.memoizedState;if(a=u.cache,Al(t,Ke,a),a!==i.cache&&Wu(t,[Ke],l,!0),pn(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=nf(e,t,a,l);break e}else if(a!==n){n=_t(Error(s(424)),t),on(n),t=nf(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=Gt(e.firstChild),nt=t,re=!0,bl=null,Ut=!0,l=$o(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Il(),a===n){t=ul(e,t,l);break e}ut(e,t,a,l)}t=t.child}return t;case 26:return Bi(e,t),e===null?(l=bd(t.type,null,t.pendingProps,null))?t.memoizedState=l:re||(l=t.type,e=t.pendingProps,a=Ki(I.current).createElement(l),a[at]=t,a[ft]=e,ct(a,l,e),tt(a),t.stateNode=a):t.memoizedState=bd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return $e(t),e===null&&re&&(a=t.stateNode=hd(t.type,t.pendingProps,I.current),nt=t,Ut=!0,n=De,Rl(t.type)?(hs=n,De=Gt(a.firstChild)):De=n),ut(e,t,t.pendingProps.children,l),Bi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&re&&((n=a=De)&&(a=lp(a,t.type,t.pendingProps,Ut),a!==null?(t.stateNode=a,nt=t,De=Gt(a.firstChild),Ut=!1,n=!0):n=!1),n||Sl(t)),$e(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,ds(n,i)?a=null:u!==null&&ds(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=fc(e,t,hy,null,null,l),qn._currentValue=n),Bi(e,t),ut(e,t,a,l),t.child;case 6:return e===null&&re&&((e=l=De)&&(l=ap(l,t.pendingProps,Ut),l!==null?(t.stateNode=l,nt=t,De=null,e=!0):e=!1),e||Sl(t)),null;case 13:return uf(e,t,l);case 4:return Be(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=aa(t,null,a,l):ut(e,t,a,l),t.child;case 11:return Fr(e,t,t.type,t.pendingProps,l);case 7:return ut(e,t,t.pendingProps,l),t.child;case 8:return ut(e,t,t.pendingProps.children,l),t.child;case 12:return ut(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,Al(t,t.type,a.value),ut(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,$l(t),n=it(n),a=a(n),t.flags|=1,ut(e,t,a,l),t.child;case 14:return Ir(e,t,t.type,t.pendingProps,l);case 15:return Wr(e,t,t.type,t.pendingProps,l);case 19:return sf(e,t,l);case 31:return Ey(e,t,l);case 22:return $r(e,t,l,t.pendingProps);case 24:return $l(t),a=it(Ke),e===null?(n=tc(),n===null&&(n=ze,i=$u(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},ac(t),Al(t,Ke,n)):((e.lanes&l)!==0&&(nc(e,t),vn(t,null,null,l),pn()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Al(t,Ke,a)):(a=i.cache,Al(t,Ke,a),a!==n.cache&&Wu(t,[Ke],l,!0))),ut(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function cl(e){e.flags|=4}function Gc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(qf())e.flags|=8192;else throw la=vi,lc}else e.flags&=-16777217}function rf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ed(t))if(qf())e.flags|=8192;else throw la=vi,lc}function ji(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ys():536870912,e.lanes|=t,La|=t)}function An(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Oy(e,t,l){var a=t.pendingProps;switch(Pu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return je(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),al(Ke),xe(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Ea(t)?cl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ju())),je(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(cl(t),i!==null?(je(t),rf(t,i)):(je(t),Gc(t,n,null,a,l))):i?i!==e.memoizedState?(cl(t),je(t),rf(t,i)):(je(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&cl(t),je(t),Gc(t,n,e,a,l)),null;case 27:if(Jt(t),l=I.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&cl(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return je(t),null}e=L.current,Ea(t)?ko(t):(e=hd(n,a,l),t.stateNode=e,cl(t))}return je(t),null;case 5:if(Jt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&cl(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return je(t),null}if(i=L.current,Ea(t))ko(t);else{var u=Ki(I.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[at]=t,i[ft]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(ct(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&cl(t)}}return je(t),Gc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&cl(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=I.current,Ea(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=nt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[at]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||ud(e.nodeValue,l)),e||Sl(t,!0)}else e=Ki(e).createTextNode(a),e[at]=t,t.stateNode=e}return je(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=Ea(t),l!==null){if(e===null){if(!a)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[at]=t}else Il(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),e=!1}else l=Ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(Et(t),t):(Et(t),null);if((t.flags&128)!==0)throw Error(s(558))}return je(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ea(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(s(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[at]=t}else Il(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),n=!1}else n=Ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Et(t),t):(Et(t),null)}return Et(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),ji(t,t.updateQueue),je(t),null);case 4:return xe(),e===null&&cs(t.stateNode.containerInfo),je(t),null;case 10:return al(t.type),je(t),null;case 19:if(N(Ve),a=t.memoizedState,a===null)return je(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)An(a,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=bi(e),i!==null){for(t.flags|=128,An(a,!1),e=i.updateQueue,t.updateQueue=e,ji(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Uo(l,e),l=l.sibling;return U(Ve,Ve.current&1|2),re&&tl(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Oe()>Li&&(t.flags|=128,n=!0,An(a,!1),t.lanes=4194304)}else{if(!n)if(e=bi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,ji(t,e),An(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!re)return je(t),null}else 2*Oe()-a.renderingStartTime>Li&&l!==536870912&&(t.flags|=128,n=!0,An(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Oe(),e.sibling=null,l=Ve.current,U(Ve,n?l&1|2:l&1),re&&tl(t,a.treeForkCount),e):(je(t),null);case 22:case 23:return Et(t),sc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),l=t.updateQueue,l!==null&&ji(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&N(ea),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),al(Ke),je(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function zy(e,t){switch(Pu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return al(Ke),xe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jt(t),null;case 31:if(t.memoizedState!==null){if(Et(t),t.alternate===null)throw Error(s(340));Il()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Et(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Il()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return N(Ve),null;case 4:return xe(),null;case 10:return al(t.type),null;case 22:case 23:return Et(t),sc(),e!==null&&N(ea),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return al(Ke),null;case 25:return null;default:return null}}function ff(e,t){switch(Pu(t),t.tag){case 3:al(Ke),xe();break;case 26:case 27:case 5:Jt(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&Et(t);break;case 13:Et(t);break;case 19:N(Ve);break;case 10:al(t.type);break;case 22:case 23:Et(t),sc(),e!==null&&N(ea);break;case 24:al(Ke)}}function Tn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(c){Se(t,t.return,c)}}function zl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=t;var r=l,b=c;try{b()}catch(O){Se(n,r,O)}}}a=a.next}while(a!==i)}}catch(O){Se(t,t.return,O)}}function df(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{tr(t,l)}catch(a){Se(e,e.return,a)}}}function mf(e,t,l){l.props=ia(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){Se(e,t,a)}}function Mn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){Se(e,t,n)}}function Pt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Se(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Se(e,t,n)}else l.current=null}function yf(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Se(e,e.return,n)}}function Qc(e,t,l){try{var a=e.stateNode;Fy(a,e.type,l,t),a[ft]=t}catch(n){Se(e,e.return,n)}}function pf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Rl(e.type)||e.tag===4}function Yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Rl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Wt));else if(a!==4&&(a===27&&Rl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(kc(e,t,l),e=e.sibling;e!==null;)kc(e,t,l),e=e.sibling}function _i(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Rl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(_i(e,t,l),e=e.sibling;e!==null;)_i(e,t,l),e=e.sibling}function vf(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ct(t,a,l),t[at]=e,t[ft]=l}catch(i){Se(e,e.return,i)}}var sl=!1,Ie=!1,Vc=!1,hf=typeof WeakSet=="function"?WeakSet:Set,lt=null;function Ny(e,t){if(e=e.containerInfo,rs=tu,e=zo(e),qu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var u=0,c=-1,r=-1,b=0,O=0,B=e,A=null;t:for(;;){for(var M;B!==l||n!==0&&B.nodeType!==3||(c=u+n),B!==i||a!==0&&B.nodeType!==3||(r=u+a),B.nodeType===3&&(u+=B.nodeValue.length),(M=B.firstChild)!==null;)A=B,B=M;for(;;){if(B===e)break t;if(A===l&&++b===n&&(c=u),A===i&&++O===a&&(r=u),(M=B.nextSibling)!==null)break;B=A,A=B.parentNode}B=M}l=c===-1||r===-1?null:{start:c,end:r}}else l=null}l=l||{start:0,end:0}}else l=null;for(fs={focusedElem:e,selectionRange:l},tu=!1,lt=t;lt!==null;)if(t=lt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,lt=e;else for(;lt!==null;){switch(t=lt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var G=ia(l.type,n);e=a.getSnapshotBeforeUpdate(G,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(w){Se(l,l.return,w)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)ys(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ys(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,lt=e;break}lt=t.return}}function gf(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:rl(e,l),a&4&&Tn(5,l);break;case 1:if(rl(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){Se(l,l.return,u)}else{var n=ia(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){Se(l,l.return,u)}}a&64&&df(l),a&512&&Mn(l,l.return);break;case 3:if(rl(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{tr(e,t)}catch(u){Se(l,l.return,u)}}break;case 27:t===null&&a&4&&vf(l);case 26:case 5:rl(e,l),t===null&&a&4&&yf(l),a&512&&Mn(l,l.return);break;case 12:rl(e,l);break;case 31:rl(e,l),a&4&&Sf(e,l);break;case 13:rl(e,l),a&4&&Af(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Ly.bind(null,l),np(e,l))));break;case 22:if(a=l.memoizedState!==null||sl,!a){t=t!==null&&t.memoizedState!==null||Ie,n=sl;var i=Ie;sl=a,(Ie=t)&&!i?fl(e,l,(l.subtreeFlags&8772)!==0):rl(e,l),sl=n,Ie=i}break;case 30:break;default:rl(e,l)}}function xf(e){var t=e.alternate;t!==null&&(e.alternate=null,xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,mt=!1;function ol(e,t,l){for(l=l.child;l!==null;)bf(e,t,l),l=l.sibling}function bf(e,t,l){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Pa,l)}catch{}switch(l.tag){case 26:Ie||Pt(l,t),ol(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ie||Pt(l,t);var a=qe,n=mt;Rl(l.type)&&(qe=l.stateNode,mt=!1),ol(e,t,l),jn(l.stateNode),qe=a,mt=n;break;case 5:Ie||Pt(l,t);case 6:if(a=qe,n=mt,qe=null,ol(e,t,l),qe=a,mt=n,qe!==null)if(mt)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(l.stateNode)}catch(i){Se(l,t,i)}else try{qe.removeChild(l.stateNode)}catch(i){Se(l,t,i)}break;case 18:qe!==null&&(mt?(e=qe,dd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Za(e)):dd(qe,l.stateNode));break;case 4:a=qe,n=mt,qe=l.stateNode.containerInfo,mt=!0,ol(e,t,l),qe=a,mt=n;break;case 0:case 11:case 14:case 15:zl(2,l,t),Ie||zl(4,l,t),ol(e,t,l);break;case 1:Ie||(Pt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&mf(l,t,a)),ol(e,t,l);break;case 21:ol(e,t,l);break;case 22:Ie=(a=Ie)||l.memoizedState!==null,ol(e,t,l),Ie=a;break;default:ol(e,t,l)}}function Sf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Za(e)}catch(l){Se(t,t.return,l)}}}function Af(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Za(e)}catch(l){Se(t,t.return,l)}}function Cy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new hf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new hf),t;default:throw Error(s(435,e.tag))}}function Ri(e,t){var l=Cy(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=Gy.bind(null,e,a);a.then(n,n)}})}function yt(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(Rl(c.type)){qe=c.stateNode,mt=!1;break e}break;case 5:qe=c.stateNode,mt=!1;break e;case 3:case 4:qe=c.stateNode.containerInfo,mt=!0;break e}c=c.return}if(qe===null)throw Error(s(160));bf(i,u,n),qe=null,mt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Tf(t,e),t=t.sibling}var kt=null;function Tf(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yt(t,e),pt(e),a&4&&(zl(3,e,e.return),Tn(3,e),zl(5,e,e.return));break;case 1:yt(t,e),pt(e),a&512&&(Ie||l===null||Pt(l,l.return)),a&64&&sl&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=kt;if(yt(t,e),pt(e),a&512&&(Ie||l===null||Pt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Fa]||i[at]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),ct(i,a,l),i[at]=e,tt(i),a=i;break e;case"link":var u=Td("link","href",n).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break t}}i=n.createElement(a),ct(i,a,l),n.head.appendChild(i);break;case"meta":if(u=Td("meta","content",n).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break t}}i=n.createElement(a),ct(i,a,l),n.head.appendChild(i);break;default:throw Error(s(468,a))}i[at]=e,tt(i),a=i}e.stateNode=a}else Md(n,e.type,e.stateNode);else e.stateNode=Ad(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Md(n,e.type,e.stateNode):Ad(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,l.memoizedProps)}break;case 27:yt(t,e),pt(e),a&512&&(Ie||l===null||Pt(l,l.return)),l!==null&&a&4&&Qc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(yt(t,e),pt(e),a&512&&(Ie||l===null||Pt(l,l.return)),e.flags&32){n=e.stateNode;try{pa(n,"")}catch(G){Se(e,e.return,G)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Qc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Vc=!0);break;case 6:if(yt(t,e),pt(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(G){Se(e,e.return,G)}}break;case 3:if(Ii=null,n=kt,kt=Ji(t.containerInfo),yt(t,e),kt=n,pt(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Za(t.containerInfo)}catch(G){Se(e,e.return,G)}Vc&&(Vc=!1,Mf(e));break;case 4:a=kt,kt=Ji(e.stateNode.containerInfo),yt(t,e),pt(e),kt=a;break;case 12:yt(t,e),pt(e);break;case 31:yt(t,e),pt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ri(e,a)));break;case 13:yt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ui=Oe()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ri(e,a)));break;case 22:n=e.memoizedState!==null;var r=l!==null&&l.memoizedState!==null,b=sl,O=Ie;if(sl=b||n,Ie=O||r,yt(t,e),Ie=O,sl=b,pt(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||r||sl||Ie||ua(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){r=l=t;try{if(i=r.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=r.stateNode;var B=r.memoizedProps.style,A=B!=null&&B.hasOwnProperty("display")?B.display:null;c.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(G){Se(r,r.return,G)}}}else if(t.tag===6){if(l===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(G){Se(r,r.return,G)}}}else if(t.tag===18){if(l===null){r=t;try{var M=r.stateNode;n?md(M,!0):md(r.stateNode,!1)}catch(G){Se(r,r.return,G)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Ri(e,l))));break;case 19:yt(t,e),pt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ri(e,a)));break;case 30:break;case 21:break;default:yt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(pf(a)){l=a;break}a=a.return}if(l==null)throw Error(s(160));switch(l.tag){case 27:var n=l.stateNode,i=Yc(e);_i(e,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(pa(u,""),l.flags&=-33);var c=Yc(e);_i(e,c,u);break;case 3:case 4:var r=l.stateNode.containerInfo,b=Yc(e);kc(e,b,r);break;default:throw Error(s(161))}}catch(O){Se(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Mf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function rl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gf(e,t.alternate,t),t=t.sibling}function ua(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:zl(4,t,t.return),ua(t);break;case 1:Pt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&mf(t,t.return,l),ua(t);break;case 27:jn(t.stateNode);case 26:case 5:Pt(t,t.return),ua(t);break;case 22:t.memoizedState===null&&ua(t);break;case 30:ua(t);break;default:ua(t)}e=e.sibling}}function fl(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:fl(n,i,l),Tn(4,i);break;case 1:if(fl(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(b){Se(a,a.return,b)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)er(r[n],c)}catch(b){Se(a,a.return,b)}}l&&u&64&&df(i),Mn(i,i.return);break;case 27:vf(i);case 26:case 5:fl(n,i,l),l&&a===null&&u&4&&yf(i),Mn(i,i.return);break;case 12:fl(n,i,l);break;case 31:fl(n,i,l),l&&u&4&&Sf(n,i);break;case 13:fl(n,i,l),l&&u&4&&Af(n,i);break;case 22:i.memoizedState===null&&fl(n,i,l),Mn(i,i.return);break;case 30:break;default:fl(n,i,l)}t=t.sibling}}function wc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&rn(l))}function Xc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rn(e))}function Vt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ef(e,t,l,a),t=t.sibling}function Ef(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Vt(e,t,l,a),n&2048&&Tn(9,t);break;case 1:Vt(e,t,l,a);break;case 3:Vt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rn(e)));break;case 12:if(n&2048){Vt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){Se(t,t.return,r)}}else Vt(e,t,l,a);break;case 31:Vt(e,t,l,a);break;case 13:Vt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Vt(e,t,l,a):En(e,t):i._visibility&2?Vt(e,t,l,a):(i._visibility|=2,Ra(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&wc(u,t);break;case 24:Vt(e,t,l,a),n&2048&&Xc(t.alternate,t);break;default:Vt(e,t,l,a)}}function Ra(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,c=l,r=a,b=u.flags;switch(u.tag){case 0:case 11:case 15:Ra(i,u,c,r,n),Tn(8,u);break;case 23:break;case 22:var O=u.stateNode;u.memoizedState!==null?O._visibility&2?Ra(i,u,c,r,n):En(i,u):(O._visibility|=2,Ra(i,u,c,r,n)),n&&b&2048&&wc(u.alternate,u);break;case 24:Ra(i,u,c,r,n),n&&b&2048&&Xc(u.alternate,u);break;default:Ra(i,u,c,r,n)}t=t.sibling}}function En(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:En(l,a),n&2048&&wc(a.alternate,a);break;case 24:En(l,a),n&2048&&Xc(a.alternate,a);break;default:En(l,a)}t=t.sibling}}var Hn=8192;function qa(e,t,l){if(e.subtreeFlags&Hn)for(e=e.child;e!==null;)Hf(e,t,l),e=e.sibling}function Hf(e,t,l){switch(e.tag){case 26:qa(e,t,l),e.flags&Hn&&e.memoizedState!==null&&vp(l,kt,e.memoizedState,e.memoizedProps);break;case 5:qa(e,t,l);break;case 3:case 4:var a=kt;kt=Ji(e.stateNode.containerInfo),qa(e,t,l),kt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Hn,Hn=16777216,qa(e,t,l),Hn=a):qa(e,t,l));break;default:qa(e,t,l)}}function Of(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function On(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];lt=a,Nf(a,e)}Of(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zf(e),e=e.sibling}function zf(e){switch(e.tag){case 0:case 11:case 15:On(e),e.flags&2048&&zl(9,e,e.return);break;case 3:On(e);break;case 12:On(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,qi(e)):On(e);break;default:On(e)}}function qi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];lt=a,Nf(a,e)}Of(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:zl(8,t,t.return),qi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,qi(t));break;default:qi(t)}e=e.sibling}}function Nf(e,t){for(;lt!==null;){var l=lt;switch(l.tag){case 0:case 11:case 15:zl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:rn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,lt=a;else e:for(l=e;lt!==null;){a=lt;var n=a.sibling,i=a.return;if(xf(a),a===l){lt=null;break e}if(n!==null){n.return=i,lt=n;break e}lt=i}}}var By={getCacheForType:function(e){var t=it(Ke),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return it(Ke).controller.signal}},Dy=typeof WeakMap=="function"?WeakMap:Map,ve=0,ze=null,ne=null,ue=0,be=0,Ht=null,Nl=!1,Ua=!1,Zc=!1,dl=0,Ge=0,Cl=0,ca=0,Pc=0,Ot=0,La=0,zn=null,vt=null,Kc=!1,Ui=0,Cf=0,Li=1/0,Gi=null,Bl=null,et=0,Dl=null,Ga=null,ml=0,Jc=0,Fc=null,Bf=null,Nn=0,Ic=null;function zt(){return(ve&2)!==0&&ue!==0?ue&-ue:T.T!==null?as():Xs()}function Df(){if(Ot===0)if((ue&536870912)===0||re){var e=Pn;Pn<<=1,(Pn&3932160)===0&&(Pn=262144),Ot=e}else Ot=536870912;return e=Mt.current,e!==null&&(e.flags|=32),Ot}function ht(e,t,l){(e===ze&&(be===2||be===9)||e.cancelPendingCommit!==null)&&(Qa(e,0),jl(e,ue,Ot,!1)),Ja(e,l),((ve&2)===0||e!==ze)&&(e===ze&&((ve&2)===0&&(ca|=l),Ge===4&&jl(e,ue,Ot,!1)),Kt(e))}function jf(e,t,l){if((ve&6)!==0)throw Error(s(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Ka(e,t),n=a?Ry(e,t):$c(e,t,!0),i=a;do{if(n===0){Ua&&!a&&jl(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!jy(l)){n=$c(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;n=zn;var r=c.current.memoizedState.isDehydrated;if(r&&(Qa(c,u).flags|=256),u=$c(c,u,!1),u!==2){if(Zc&&!r){c.errorRecoveryDisabledLanes|=i,ca|=i,n=4;break e}i=vt,vt=n,i!==null&&(vt===null?vt=i:vt.push.apply(vt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Qa(e,0),jl(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:jl(a,t,Ot,!Nl);break e;case 2:vt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(n=Ui+300-Oe(),10<n)){if(jl(a,t,Ot,!Nl),Jn(a,0,!0)!==0)break e;ml=t,a.timeoutHandle=rd(_f.bind(null,a,l,vt,Gi,Kc,t,Ot,ca,La,Nl,i,"Throttled",-0,0),n);break e}_f(a,l,vt,Gi,Kc,t,Ot,ca,La,Nl,i,null,-0,0)}}break}while(!0);Kt(e)}function _f(e,t,l,a,n,i,u,c,r,b,O,B,A,M){if(e.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wt},Hf(t,i,B);var G=(i&62914560)===i?Ui-Oe():(i&4194048)===i?Cf-Oe():0;if(G=hp(B,G),G!==null){ml=i,e.cancelPendingCommit=G(kf.bind(null,e,t,i,l,a,n,u,c,r,O,B,null,A,M)),jl(e,i,u,!b);return}}kf(e,t,i,l,a,n,u,c,r)}function jy(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!At(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jl(e,t,l,a){t&=~Pc,t&=~ca,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-St(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&ks(e,l,t)}function Qi(){return(ve&6)===0?(Cn(0),!1):!0}function Wc(){if(ne!==null){if(be===0)var e=ne.return;else e=ne,ll=Wl=null,yc(e),Ca=null,dn=0,e=ne;for(;e!==null;)ff(e.alternate,e),e=e.return;ne=null}}function Qa(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,$y(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),ml=0,Wc(),ze=e,ne=l=el(e.current,null),ue=t,be=0,Ht=null,Nl=!1,Ua=Ka(e,t),Zc=!1,La=Ot=Pc=ca=Cl=Ge=0,vt=zn=null,Kc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-St(a),i=1<<n;t|=e[n],a&=~i}return dl=t,ci(),l}function Rf(e,t){W=null,T.H=bn,t===Na||t===pi?(t=Fo(),be=3):t===lc?(t=Fo(),be=4):be=t===Cc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ht=t,ne===null&&(Ge=1,Ni(e,_t(t,e.current)))}function qf(){var e=Mt.current;return e===null?!0:(ue&4194048)===ue?Lt===null:(ue&62914560)===ue||(ue&536870912)!==0?e===Lt:!1}function Uf(){var e=T.H;return T.H=bn,e===null?bn:e}function Lf(){var e=T.A;return T.A=By,e}function Yi(){Ge=4,Nl||(ue&4194048)!==ue&&Mt.current!==null||(Ua=!0),(Cl&134217727)===0&&(ca&134217727)===0||ze===null||jl(ze,ue,Ot,!1)}function $c(e,t,l){var a=ve;ve|=2;var n=Uf(),i=Lf();(ze!==e||ue!==t)&&(Gi=null,Qa(e,t)),t=!1;var u=Ge;e:do try{if(be!==0&&ne!==null){var c=ne,r=Ht;switch(be){case 8:Wc(),u=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var b=be;if(be=0,Ht=null,Ya(e,c,r,b),l&&Ua){u=0;break e}break;default:b=be,be=0,Ht=null,Ya(e,c,r,b)}}_y(),u=Ge;break}catch(O){Rf(e,O)}while(!0);return t&&e.shellSuspendCounter++,ll=Wl=null,ve=a,T.H=n,T.A=i,ne===null&&(ze=null,ue=0,ci()),u}function _y(){for(;ne!==null;)Gf(ne)}function Ry(e,t){var l=ve;ve|=2;var a=Uf(),n=Lf();ze!==e||ue!==t?(Gi=null,Li=Oe()+500,Qa(e,t)):Ua=Ka(e,t);e:do try{if(be!==0&&ne!==null){t=ne;var i=Ht;t:switch(be){case 1:be=0,Ht=null,Ya(e,t,i,1);break;case 2:case 9:if(Ko(i)){be=0,Ht=null,Qf(t);break}t=function(){be!==2&&be!==9||ze!==e||(be=7),Kt(e)},i.then(t,t);break e;case 3:be=7;break e;case 4:be=5;break e;case 7:Ko(i)?(be=0,Ht=null,Qf(t)):(be=0,Ht=null,Ya(e,t,i,7));break;case 5:var u=null;switch(ne.tag){case 26:u=ne.memoizedState;case 5:case 27:var c=ne;if(u?Ed(u):c.stateNode.complete){be=0,Ht=null;var r=c.sibling;if(r!==null)ne=r;else{var b=c.return;b!==null?(ne=b,ki(b)):ne=null}break t}}be=0,Ht=null,Ya(e,t,i,5);break;case 6:be=0,Ht=null,Ya(e,t,i,6);break;case 8:Wc(),Ge=6;break e;default:throw Error(s(462))}}qy();break}catch(O){Rf(e,O)}while(!0);return ll=Wl=null,T.H=a,T.A=n,ve=l,ne!==null?0:(ze=null,ue=0,ci(),Ge)}function qy(){for(;ne!==null&&!Nt();)Gf(ne)}function Gf(e){var t=of(e.alternate,e,dl);e.memoizedProps=e.pendingProps,t===null?ki(e):ne=t}function Qf(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=lf(l,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=lf(l,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:yc(t);default:ff(l,t),t=ne=Uo(t,dl),t=of(l,t,dl)}e.memoizedProps=e.pendingProps,t===null?ki(e):ne=t}function Ya(e,t,l,a){ll=Wl=null,yc(t),Ca=null,dn=0;var n=t.return;try{if(My(e,n,t,l,ue)){Ge=1,Ni(e,_t(l,e.current)),ne=null;return}}catch(i){if(n!==null)throw ne=n,i;Ge=1,Ni(e,_t(l,e.current)),ne=null;return}t.flags&32768?(re||a===1?e=!0:Ua||(ue&536870912)!==0?e=!1:(Nl=e=!0,(a===2||a===9||a===3||a===6)&&(a=Mt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Yf(t,e)):ki(t)}function ki(e){var t=e;do{if((t.flags&32768)!==0){Yf(t,Nl);return}e=t.return;var l=Oy(t.alternate,t,dl);if(l!==null){ne=l;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Ge===0&&(Ge=5)}function Yf(e,t){do{var l=zy(e.alternate,e);if(l!==null){l.flags&=32767,ne=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=l}while(e!==null);Ge=6,ne=null}function kf(e,t,l,a,n,i,u,c,r){e.cancelPendingCommit=null;do Vi();while(et!==0);if((ve&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Yu,pm(e,l,i,u,c,r),e===ze&&(ne=ze=null,ue=0),Ga=t,Dl=e,ml=l,Jc=i,Fc=n,Bf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qy(Xn,function(){return Pf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=T.T,T.T=null,n=R.p,R.p=2,u=ve,ve|=4;try{Ny(e,t,l)}finally{ve=u,R.p=n,T.T=a}}et=1,Vf(),wf(),Xf()}}function Vf(){if(et===1){et=0;var e=Dl,t=Ga,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=T.T,T.T=null;var a=R.p;R.p=2;var n=ve;ve|=4;try{Tf(t,e);var i=fs,u=zo(e.containerInfo),c=i.focusedElem,r=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&Oo(c.ownerDocument.documentElement,c)){if(r!==null&&qu(c)){var b=r.start,O=r.end;if(O===void 0&&(O=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(O,c.value.length);else{var B=c.ownerDocument||document,A=B&&B.defaultView||window;if(A.getSelection){var M=A.getSelection(),G=c.textContent.length,w=Math.min(r.start,G),Ee=r.end===void 0?w:Math.min(r.end,G);!M.extend&&w>Ee&&(u=Ee,Ee=w,w=u);var v=Ho(c,w),y=Ho(c,Ee);if(v&&y&&(M.rangeCount!==1||M.anchorNode!==v.node||M.anchorOffset!==v.offset||M.focusNode!==y.node||M.focusOffset!==y.offset)){var x=B.createRange();x.setStart(v.node,v.offset),M.removeAllRanges(),w>Ee?(M.addRange(x),M.extend(y.node,y.offset)):(x.setEnd(y.node,y.offset),M.addRange(x))}}}}for(B=[],M=c;M=M.parentNode;)M.nodeType===1&&B.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<B.length;c++){var C=B[c];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}tu=!!rs,fs=rs=null}finally{ve=n,R.p=a,T.T=l}}e.current=t,et=2}}function wf(){if(et===2){et=0;var e=Dl,t=Ga,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=T.T,T.T=null;var a=R.p;R.p=2;var n=ve;ve|=4;try{gf(e,t.alternate,t)}finally{ve=n,R.p=a,T.T=l}}et=3}}function Xf(){if(et===4||et===3){et=0,Ct();var e=Dl,t=Ga,l=ml,a=Bf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,Ga=Dl=null,Zf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Bl=null),hu(l),t=t.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Pa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=T.T,n=R.p,R.p=2,T.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{T.T=t,R.p=n}}(ml&3)!==0&&Vi(),Kt(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===Ic?Nn++:(Nn=0,Ic=e):Nn=0,Cn(0)}}function Zf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,rn(t)))}function Vi(){return Vf(),wf(),Xf(),Pf()}function Pf(){if(et!==5)return!1;var e=Dl,t=Jc;Jc=0;var l=hu(ml),a=T.T,n=R.p;try{R.p=32>l?32:l,T.T=null,l=Fc,Fc=null;var i=Dl,u=ml;if(et=0,Ga=Dl=null,ml=0,(ve&6)!==0)throw Error(s(331));var c=ve;if(ve|=4,zf(i.current),Ef(i,i.current,u,l),ve=c,Cn(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Pa,i)}catch{}return!0}finally{R.p=n,T.T=a,Zf(e,t)}}function Kf(e,t,l){t=_t(l,t),t=Nc(e.stateNode,t,2),e=El(e,t,2),e!==null&&(Ja(e,2),Kt(e))}function Se(e,t,l){if(e.tag===3)Kf(e,e,l);else for(;t!==null;){if(t.tag===3){Kf(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Bl===null||!Bl.has(a))){e=_t(l,e),l=Kr(2),a=El(t,l,2),a!==null&&(Jr(l,a,t,e),Ja(a,2),Kt(a));break}}t=t.return}}function es(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new Dy;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Zc=!0,n.add(l),e=Uy.bind(null,e,t,l),t.then(e,e))}function Uy(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ze===e&&(ue&l)===l&&(Ge===4||Ge===3&&(ue&62914560)===ue&&300>Oe()-Ui?(ve&2)===0&&Qa(e,0):Pc|=l,La===ue&&(La=0)),Kt(e)}function Jf(e,t){t===0&&(t=Ys()),e=Jl(e,t),e!==null&&(Ja(e,t),Kt(e))}function Ly(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Jf(e,l)}function Gy(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),Jf(e,l)}function Qy(e,t){return rt(e,t)}var wi=null,ka=null,ts=!1,Xi=!1,ls=!1,_l=0;function Kt(e){e!==ka&&e.next===null&&(ka===null?wi=ka=e:ka=ka.next=e),Xi=!0,ts||(ts=!0,ky())}function Cn(e,t){if(!ls&&Xi){ls=!0;do for(var l=!1,a=wi;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-St(42|e)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,$f(a,i))}else i=ue,i=Jn(a,a===ze?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ka(a,i)||(l=!0,$f(a,i));a=a.next}while(l);ls=!1}}function Yy(){Ff()}function Ff(){Xi=ts=!1;var e=0;_l!==0&&Wy()&&(e=_l);for(var t=Oe(),l=null,a=wi;a!==null;){var n=a.next,i=If(a,t);i===0?(a.next=null,l===null?wi=n:l.next=n,n===null&&(ka=l)):(l=a,(e!==0||(i&3)!==0)&&(Xi=!0)),a=n}et!==0&&et!==5||Cn(e),_l!==0&&(_l=0)}function If(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-St(i),c=1<<u,r=n[u];r===-1?((c&l)===0||(c&a)!==0)&&(n[u]=ym(c,t)):r<=t&&(e.expiredLanes|=c),i&=~c}if(t=ze,l=ue,l=Jn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(be===2||be===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ue(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Ka(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Ue(a),hu(l)){case 2:case 8:l=Gs;break;case 32:l=Xn;break;case 268435456:l=Qs;break;default:l=Xn}return a=Wf.bind(null,e),l=rt(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Ue(a),e.callbackPriority=2,e.callbackNode=null,2}function Wf(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Vi()&&e.callbackNode!==l)return null;var a=ue;return a=Jn(e,e===ze?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(jf(e,a,t),If(e,Oe()),e.callbackNode!=null&&e.callbackNode===l?Wf.bind(null,e):null)}function $f(e,t){if(Vi())return null;jf(e,t,!0)}function ky(){ep(function(){(ve&6)!==0?rt(wn,Yy):Ff()})}function as(){if(_l===0){var e=Oa;e===0&&(e=Zn,Zn<<=1,(Zn&261888)===0&&(Zn=256)),_l=e}return _l}function ed(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$n(""+e)}function td(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Vy(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=ed((n[ft]||null).action),u=a.submitter;u&&(t=(t=u[ft]||null)?ed(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new ai("action","action",null,a,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(_l!==0){var r=u?td(n,u):new FormData(n);Tc(l,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(c.preventDefault(),r=u?td(n,u):new FormData(n),Tc(l,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var ns=0;ns<Qu.length;ns++){var is=Qu[ns],wy=is.toLowerCase(),Xy=is[0].toUpperCase()+is.slice(1);Yt(wy,"on"+Xy)}Yt(Bo,"onAnimationEnd"),Yt(Do,"onAnimationIteration"),Yt(jo,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(cy,"onTransitionRun"),Yt(sy,"onTransitionStart"),Yt(oy,"onTransitionCancel"),Yt(_o,"onTransitionEnd"),ma("onMouseEnter",["mouseout","mouseover"]),ma("onMouseLeave",["mouseout","mouseover"]),ma("onPointerEnter",["pointerout","pointerover"]),ma("onPointerLeave",["pointerout","pointerover"]),Xl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bn));function ld(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var c=a[u],r=c.instance,b=c.currentTarget;if(c=c.listener,r!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=b;try{i(n)}catch(O){ui(O)}n.currentTarget=null,i=r}else for(u=0;u<a.length;u++){if(c=a[u],r=c.instance,b=c.currentTarget,c=c.listener,r!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=b;try{i(n)}catch(O){ui(O)}n.currentTarget=null,i=r}}}}function ie(e,t){var l=t[gu];l===void 0&&(l=t[gu]=new Set);var a=e+"__bubble";l.has(a)||(ad(t,e,2,!1),l.add(a))}function us(e,t,l){var a=0;t&&(a|=4),ad(l,e,a,t)}var Zi="_reactListening"+Math.random().toString(36).slice(2);function cs(e){if(!e[Zi]){e[Zi]=!0,Ks.forEach(function(l){l!=="selectionchange"&&(Zy.has(l)||us(l,!1,e),us(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zi]||(t[Zi]=!0,us("selectionchange",!1,t))}}function ad(e,t,l,a){switch(Dd(t)){case 2:var n=bp;break;case 8:n=Sp;break;default:n=As}l=n.bind(null,t,l,e),n=void 0,!Ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function ss(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var r=u.tag;if((r===3||r===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=ra(c),u===null)return;if(r=u.tag,r===5||r===6||r===26||r===27){a=i=u;continue e}c=c.parentNode}}a=a.return}uo(function(){var b=i,O=Eu(l),B=[];e:{var A=Ro.get(e);if(A!==void 0){var M=ai,G=e;switch(e){case"keypress":if(ti(l)===0)break e;case"keydown":case"keyup":M=Gm;break;case"focusin":G="focus",M=Bu;break;case"focusout":G="blur",M=Bu;break;case"beforeblur":case"afterblur":M=Bu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=oo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=km;break;case Bo:case Do:case jo:M=Cm;break;case _o:M=wm;break;case"scroll":case"scrollend":M=Em;break;case"wheel":M=Zm;break;case"copy":case"cut":case"paste":M=Dm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=fo;break;case"toggle":case"beforetoggle":M=Km}var w=(t&4)!==0,Ee=!w&&(e==="scroll"||e==="scrollend"),v=w?A!==null?A+"Capture":null:A;w=[];for(var y=b,x;y!==null;){var C=y;if(x=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||x===null||v===null||(C=Wa(y,v),C!=null&&w.push(Dn(y,C,x))),Ee)break;y=y.return}0<w.length&&(A=new M(A,G,null,l,O),B.push({event:A,listeners:w}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",A&&l!==Mu&&(G=l.relatedTarget||l.fromElement)&&(ra(G)||G[oa]))break e;if((M||A)&&(A=O.window===O?O:(A=O.ownerDocument)?A.defaultView||A.parentWindow:window,M?(G=l.relatedTarget||l.toElement,M=b,G=G?ra(G):null,G!==null&&(Ee=E(G),w=G.tag,G!==Ee||w!==5&&w!==27&&w!==6)&&(G=null)):(M=null,G=b),M!==G)){if(w=oo,C="onMouseLeave",v="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(w=fo,C="onPointerLeave",v="onPointerEnter",y="pointer"),Ee=M==null?A:Ia(M),x=G==null?A:Ia(G),A=new w(C,y+"leave",M,l,O),A.target=Ee,A.relatedTarget=x,C=null,ra(O)===b&&(w=new w(v,y+"enter",G,l,O),w.target=x,w.relatedTarget=Ee,C=w),Ee=C,M&&G)t:{for(w=Py,v=M,y=G,x=0,C=v;C;C=w(C))x++;C=0;for(var V=y;V;V=w(V))C++;for(;0<x-C;)v=w(v),x--;for(;0<C-x;)y=w(y),C--;for(;x--;){if(v===y||y!==null&&v===y.alternate){w=v;break t}v=w(v),y=w(y)}w=null}else w=null;M!==null&&nd(B,A,M,w,!1),G!==null&&Ee!==null&&nd(B,Ee,G,w,!0)}}e:{if(A=b?Ia(b):window,M=A.nodeName&&A.nodeName.toLowerCase(),M==="select"||M==="input"&&A.type==="file")var ye=bo;else if(go(A))if(So)ye=ny;else{ye=ly;var Y=ty}else M=A.nodeName,!M||M.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?b&&Tu(b.elementType)&&(ye=bo):ye=ay;if(ye&&(ye=ye(e,b))){xo(B,ye,l,O);break e}Y&&Y(e,A,b),e==="focusout"&&b&&A.type==="number"&&b.memoizedProps.value!=null&&Au(A,"number",A.value)}switch(Y=b?Ia(b):window,e){case"focusin":(go(Y)||Y.contentEditable==="true")&&(xa=Y,Uu=b,cn=null);break;case"focusout":cn=Uu=xa=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,No(B,l,O);break;case"selectionchange":if(uy)break;case"keydown":case"keyup":No(B,l,O)}var ee;if(ju)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else ga?vo(e,l)&&(ce="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(ce="onCompositionStart");ce&&(mo&&l.locale!=="ko"&&(ga||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&ga&&(ee=co()):(gl=O,zu="value"in gl?gl.value:gl.textContent,ga=!0)),Y=Pi(b,ce),0<Y.length&&(ce=new ro(ce,e,null,l,O),B.push({event:ce,listeners:Y}),ee?ce.data=ee:(ee=ho(l),ee!==null&&(ce.data=ee)))),(ee=Fm?Im(e,l):Wm(e,l))&&(ce=Pi(b,"onBeforeInput"),0<ce.length&&(Y=new ro("onBeforeInput","beforeinput",null,l,O),B.push({event:Y,listeners:ce}),Y.data=ee)),Vy(B,e,b,l,O)}ld(B,t)})}function Dn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Pi(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Wa(e,l),n!=null&&a.unshift(Dn(e,n,i)),n=Wa(e,t),n!=null&&a.push(Dn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function Py(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function nd(e,t,l,a,n){for(var i=t._reactName,u=[];l!==null&&l!==a;){var c=l,r=c.alternate,b=c.stateNode;if(c=c.tag,r!==null&&r===a)break;c!==5&&c!==26&&c!==27||b===null||(r=b,n?(b=Wa(l,i),b!=null&&u.unshift(Dn(l,b,r))):n||(b=Wa(l,i),b!=null&&u.push(Dn(l,b,r)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var Ky=/\r\n?/g,Jy=/\u0000|\uFFFD/g;function id(e){return(typeof e=="string"?e:""+e).replace(Ky,`
`).replace(Jy,"")}function ud(e,t){return t=id(t),id(e)===t}function Me(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||pa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&pa(e,""+a);break;case"className":In(e,"class",a);break;case"tabIndex":In(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":In(e,l,a);break;case"style":no(e,a,i);break;case"data":if(t!=="object"){In(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=$n(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&Me(e,t,"name",n.name,n,null),Me(e,t,"formEncType",n.formEncType,n,null),Me(e,t,"formMethod",n.formMethod,n,null),Me(e,t,"formTarget",n.formTarget,n,null)):(Me(e,t,"encType",n.encType,n,null),Me(e,t,"method",n.method,n,null),Me(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=$n(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Wt);break;case"onScroll":a!=null&&ie("scroll",e);break;case"onScrollEnd":a!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=$n(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":ie("beforetoggle",e),ie("toggle",e),Fn(e,"popover",a);break;case"xlinkActuate":It(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":It(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":It(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":It(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":It(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":It(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":It(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":It(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":It(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Fn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Tm.get(l)||l,Fn(e,l,a))}}function os(e,t,l,a,n,i){switch(l){case"style":no(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=l}}break;case"children":typeof a=="string"?pa(e,a):(typeof a=="number"||typeof a=="bigint")&&pa(e,""+a);break;case"onScroll":a!=null&&ie("scroll",e);break;case"onScrollEnd":a!=null&&ie("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Wt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Js.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[ft]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Fn(e,l,a)}}}function ct(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Me(e,t,i,u,l,null)}}n&&Me(e,t,"srcSet",l.srcSet,l,null),a&&Me(e,t,"src",l.src,l,null);return;case"input":ie("invalid",e);var c=i=u=n=null,r=null,b=null;for(a in l)if(l.hasOwnProperty(a)){var O=l[a];if(O!=null)switch(a){case"name":n=O;break;case"type":u=O;break;case"checked":r=O;break;case"defaultChecked":b=O;break;case"value":i=O;break;case"defaultValue":c=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,t));break;default:Me(e,t,a,O,l,null)}}eo(e,i,c,r,b,u,n,!1);return;case"select":ie("invalid",e),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:Me(e,t,n,c,l,null)}t=i,l=u,e.multiple=!!a,t!=null?ya(e,!!a,t,!1):l!=null&&ya(e,!!a,l,!0);return;case"textarea":ie("invalid",e),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:Me(e,t,u,c,l,null)}lo(e,a,n,i);return;case"option":for(r in l)if(l.hasOwnProperty(r)&&(a=l[r],a!=null))switch(r){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Me(e,t,r,a,l,null)}return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(a=0;a<Bn.length;a++)ie(Bn[a],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in l)if(l.hasOwnProperty(b)&&(a=l[b],a!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Me(e,t,b,a,l,null)}return;default:if(Tu(t)){for(O in l)l.hasOwnProperty(O)&&(a=l[O],a!==void 0&&os(e,t,O,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&Me(e,t,c,a,l,null))}function Fy(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,r=null,b=null,O=null;for(M in l){var B=l[M];if(l.hasOwnProperty(M)&&B!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":r=B;default:a.hasOwnProperty(M)||Me(e,t,M,null,a,B)}}for(var A in a){var M=a[A];if(B=l[A],a.hasOwnProperty(A)&&(M!=null||B!=null))switch(A){case"type":i=M;break;case"name":n=M;break;case"checked":b=M;break;case"defaultChecked":O=M;break;case"value":u=M;break;case"defaultValue":c=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,t));break;default:M!==B&&Me(e,t,A,M,a,B)}}Su(e,u,c,r,b,O,i,n);return;case"select":M=u=c=A=null;for(i in l)if(r=l[i],l.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":M=r;default:a.hasOwnProperty(i)||Me(e,t,i,null,a,r)}for(n in a)if(i=a[n],r=l[n],a.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":A=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==r&&Me(e,t,n,i,a,r)}t=c,l=u,a=M,A!=null?ya(e,!!l,A,!1):!!a!=!!l&&(t!=null?ya(e,!!l,t,!0):ya(e,!!l,l?[]:"",!1));return;case"textarea":M=A=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Me(e,t,c,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":A=n;break;case"defaultValue":M=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&Me(e,t,u,n,a,i)}to(e,A,M);return;case"option":for(var G in l)if(A=l[G],l.hasOwnProperty(G)&&A!=null&&!a.hasOwnProperty(G))switch(G){case"selected":e.selected=!1;break;default:Me(e,t,G,null,a,A)}for(r in a)if(A=a[r],M=l[r],a.hasOwnProperty(r)&&A!==M&&(A!=null||M!=null))switch(r){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Me(e,t,r,A,a,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in l)A=l[w],l.hasOwnProperty(w)&&A!=null&&!a.hasOwnProperty(w)&&Me(e,t,w,null,a,A);for(b in a)if(A=a[b],M=l[b],a.hasOwnProperty(b)&&A!==M&&(A!=null||M!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,t));break;default:Me(e,t,b,A,a,M)}return;default:if(Tu(t)){for(var Ee in l)A=l[Ee],l.hasOwnProperty(Ee)&&A!==void 0&&!a.hasOwnProperty(Ee)&&os(e,t,Ee,void 0,a,A);for(O in a)A=a[O],M=l[O],!a.hasOwnProperty(O)||A===M||A===void 0&&M===void 0||os(e,t,O,A,a,M);return}}for(var v in l)A=l[v],l.hasOwnProperty(v)&&A!=null&&!a.hasOwnProperty(v)&&Me(e,t,v,null,a,A);for(B in a)A=a[B],M=l[B],!a.hasOwnProperty(B)||A===M||A==null&&M==null||Me(e,t,B,A,a,M)}function cd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Iy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&cd(u)){for(u=0,c=n.responseEnd,a+=1;a<l.length;a++){var r=l[a],b=r.startTime;if(b>c)break;var O=r.transferSize,B=r.initiatorType;O&&cd(B)&&(r=r.responseEnd,u+=O*(r<c?1:(c-b)/(r-b)))}if(--a,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var rs=null,fs=null;function Ki(e){return e.nodeType===9?e:e.ownerDocument}function sd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function od(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ds(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ms=null;function Wy(){var e=window.event;return e&&e.type==="popstate"?e===ms?!1:(ms=e,!0):(ms=null,!1)}var rd=typeof setTimeout=="function"?setTimeout:void 0,$y=typeof clearTimeout=="function"?clearTimeout:void 0,fd=typeof Promise=="function"?Promise:void 0,ep=typeof queueMicrotask=="function"?queueMicrotask:typeof fd<"u"?function(e){return fd.resolve(null).then(e).catch(tp)}:rd;function tp(e){setTimeout(function(){throw e})}function Rl(e){return e==="head"}function dd(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Za(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")jn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,jn(l);for(var i=l.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Fa]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&jn(e.ownerDocument.body);l=n}while(l);Za(t)}function md(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function ys(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":ys(l),xu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function lp(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Fa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Gt(e.nextSibling),e===null)break}return null}function ap(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Gt(e.nextSibling),e===null))return null;return e}function yd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Gt(e.nextSibling),e===null))return null;return e}function ps(e){return e.data==="$?"||e.data==="$~"}function vs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function np(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var hs=null;function pd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Gt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function vd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function hd(e,t,l){switch(t=Ki(l),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function jn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xu(e)}var Qt=new Map,gd=new Set;function Ji(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var yl=R.d;R.d={f:ip,r:up,D:cp,C:sp,L:op,m:rp,X:dp,S:fp,M:mp};function ip(){var e=yl.f(),t=Qi();return e||t}function up(e){var t=fa(e);t!==null&&t.tag===5&&t.type==="form"?_r(t):yl.r(e)}var Va=typeof document>"u"?null:document;function xd(e,t,l){var a=Va;if(a&&typeof t=="string"&&t){var n=Dt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),gd.has(n)||(gd.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),ct(t,"link",e),tt(t),a.head.appendChild(t)))}}function cp(e){yl.D(e),xd("dns-prefetch",e,null)}function sp(e,t){yl.C(e,t),xd("preconnect",e,t)}function op(e,t,l){yl.L(e,t,l);var a=Va;if(a&&e&&t){var n='link[rel="preload"][as="'+Dt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+Dt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+Dt(l.imageSizes)+'"]')):n+='[href="'+Dt(e)+'"]';var i=n;switch(t){case"style":i=wa(e);break;case"script":i=Xa(e)}Qt.has(i)||(e=z({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Qt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(_n(i))||t==="script"&&a.querySelector(Rn(i))||(t=a.createElement("link"),ct(t,"link",e),tt(t),a.head.appendChild(t)))}}function rp(e,t){yl.m(e,t);var l=Va;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Dt(a)+'"][href="'+Dt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Xa(e)}if(!Qt.has(i)&&(e=z({rel:"modulepreload",href:e},t),Qt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Rn(i)))return}a=l.createElement("link"),ct(a,"link",e),tt(a),l.head.appendChild(a)}}}function fp(e,t,l){yl.S(e,t,l);var a=Va;if(a&&e){var n=da(a).hoistableStyles,i=wa(e);t=t||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(_n(i)))c.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Qt.get(i))&&gs(e,l);var r=u=a.createElement("link");tt(r),ct(r,"link",e),r._p=new Promise(function(b,O){r.onload=b,r.onerror=O}),r.addEventListener("load",function(){c.loading|=1}),r.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Fi(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function dp(e,t){yl.X(e,t);var l=Va;if(l&&e){var a=da(l).hoistableScripts,n=Xa(e),i=a.get(n);i||(i=l.querySelector(Rn(n)),i||(e=z({src:e,async:!0},t),(t=Qt.get(n))&&xs(e,t),i=l.createElement("script"),tt(i),ct(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function mp(e,t){yl.M(e,t);var l=Va;if(l&&e){var a=da(l).hoistableScripts,n=Xa(e),i=a.get(n);i||(i=l.querySelector(Rn(n)),i||(e=z({src:e,async:!0,type:"module"},t),(t=Qt.get(n))&&xs(e,t),i=l.createElement("script"),tt(i),ct(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function bd(e,t,l,a){var n=(n=I.current)?Ji(n):null;if(!n)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=wa(l.href),l=da(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=wa(l.href);var i=da(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(_n(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Qt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Qt.set(e,l),i||yp(n,e,l,u.state))),t&&a===null)throw Error(s(528,""));return u}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Xa(l),l=da(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function wa(e){return'href="'+Dt(e)+'"'}function _n(e){return'link[rel="stylesheet"]['+e+"]"}function Sd(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function yp(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ct(t,"link",l),tt(t),e.head.appendChild(t))}function Xa(e){return'[src="'+Dt(e)+'"]'}function Rn(e){return"script[async]"+e}function Ad(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Dt(l.href)+'"]');if(a)return t.instance=a,tt(a),a;var n=z({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),tt(a),ct(a,"style",n),Fi(a,l.precedence,e),t.instance=a;case"stylesheet":n=wa(l.href);var i=e.querySelector(_n(n));if(i)return t.state.loading|=4,t.instance=i,tt(i),i;a=Sd(l),(n=Qt.get(n))&&gs(a,n),i=(e.ownerDocument||e).createElement("link"),tt(i);var u=i;return u._p=new Promise(function(c,r){u.onload=c,u.onerror=r}),ct(i,"link",a),t.state.loading|=4,Fi(i,l.precedence,e),t.instance=i;case"script":return i=Xa(l.src),(n=e.querySelector(Rn(i)))?(t.instance=n,tt(n),n):(a=l,(n=Qt.get(i))&&(a=z({},l),xs(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),tt(n),ct(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Fi(a,l.precedence,e));return t.instance}function Fi(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function gs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function xs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ii=null;function Td(e,t,l){if(Ii===null){var a=new Map,n=Ii=new Map;n.set(l,a)}else n=Ii,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[Fa]||i[at]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function Md(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function pp(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ed(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function vp(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=wa(a.href),i=t.querySelector(_n(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wi.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,tt(i);return}i=t.ownerDocument||t,a=Sd(a),(n=Qt.get(n))&&gs(a,n),i=i.createElement("link"),tt(i);var u=i;u._p=new Promise(function(c,r){u.onload=c,u.onerror=r}),ct(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Wi.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var bs=0;function hp(e,t){return e.stylesheets&&e.count===0&&eu(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&eu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&bs===0&&(bs=62500*Iy());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&eu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>bs?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Wi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)eu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $i=null;function eu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$i=new Map,t.forEach(gp,e),$i=null,Wi.call(e))}function gp(e,t){if(!(t.state.loading&4)){var l=$i.get(e);if(l)var a=l.get(null);else{l=new Map,$i.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=t.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=Wi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var qn={$$typeof:de,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function xp(e,t,l,a,n,i,u,c,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pu(0),this.hiddenUpdates=pu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Hd(e,t,l,a,n,i,u,c,r,b,O,B){return e=new xp(e,t,l,u,r,b,O,B,c),t=1,i===!0&&(t|=24),i=Tt(3,null,null,t),e.current=i,i.stateNode=e,t=$u(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},ac(i),e}function Od(e){return e?(e=Aa,e):Aa}function zd(e,t,l,a,n,i){n=Od(n),a.context===null?a.context=n:a.pendingContext=n,a=Ml(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=El(e,a,t),l!==null&&(ht(l,e,t),yn(l,e,t))}function Nd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Ss(e,t){Nd(e,t),(e=e.alternate)&&Nd(e,t)}function Cd(e){if(e.tag===13||e.tag===31){var t=Jl(e,67108864);t!==null&&ht(t,e,67108864),Ss(e,67108864)}}function Bd(e){if(e.tag===13||e.tag===31){var t=zt();t=vu(t);var l=Jl(e,t);l!==null&&ht(l,e,t),Ss(e,t)}}var tu=!0;function bp(e,t,l,a){var n=T.T;T.T=null;var i=R.p;try{R.p=2,As(e,t,l,a)}finally{R.p=i,T.T=n}}function Sp(e,t,l,a){var n=T.T;T.T=null;var i=R.p;try{R.p=8,As(e,t,l,a)}finally{R.p=i,T.T=n}}function As(e,t,l,a){if(tu){var n=Ts(a);if(n===null)ss(e,t,a,lu,l),jd(e,a);else if(Tp(n,e,t,l,a))a.stopPropagation();else if(jd(e,a),t&4&&-1<Ap.indexOf(e)){for(;n!==null;){var i=fa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=wl(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var r=1<<31-St(u);c.entanglements[1]|=r,u&=~r}Kt(i),(ve&6)===0&&(Li=Oe()+500,Cn(0))}}break;case 31:case 13:c=Jl(i,2),c!==null&&ht(c,i,2),Qi(),Ss(i,2)}if(i=Ts(a),i===null&&ss(e,t,a,lu,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else ss(e,t,a,null,l)}}function Ts(e){return e=Eu(e),Ms(e)}var lu=null;function Ms(e){if(lu=null,e=ra(e),e!==null){var t=E(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=H(t),e!==null)return e;e=null}else if(l===31){if(e=j(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return lu=e,null}function Dd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xt()){case wn:return 2;case Gs:return 8;case Xn:case sm:return 32;case Qs:return 268435456;default:return 32}default:return 32}}var Es=!1,ql=null,Ul=null,Ll=null,Un=new Map,Ln=new Map,Gl=[],Ap="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jd(e,t){switch(e){case"focusin":case"focusout":ql=null;break;case"dragenter":case"dragleave":Ul=null;break;case"mouseover":case"mouseout":Ll=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ln.delete(t.pointerId)}}function Gn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=fa(t),t!==null&&Cd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Tp(e,t,l,a,n){switch(t){case"focusin":return ql=Gn(ql,e,t,l,a,n),!0;case"dragenter":return Ul=Gn(Ul,e,t,l,a,n),!0;case"mouseover":return Ll=Gn(Ll,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return Un.set(i,Gn(Un.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Ln.set(i,Gn(Ln.get(i)||null,e,t,l,a,n)),!0}return!1}function _d(e){var t=ra(e.target);if(t!==null){var l=E(t);if(l!==null){if(t=l.tag,t===13){if(t=H(l),t!==null){e.blockedOn=t,Zs(e.priority,function(){Bd(l)});return}}else if(t===31){if(t=j(l),t!==null){e.blockedOn=t,Zs(e.priority,function(){Bd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function au(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Ts(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);Mu=a,l.target.dispatchEvent(a),Mu=null}else return t=fa(l),t!==null&&Cd(t),e.blockedOn=l,!1;t.shift()}return!0}function Rd(e,t,l){au(e)&&l.delete(t)}function Mp(){Es=!1,ql!==null&&au(ql)&&(ql=null),Ul!==null&&au(Ul)&&(Ul=null),Ll!==null&&au(Ll)&&(Ll=null),Un.forEach(Rd),Ln.forEach(Rd)}function nu(e,t){e.blockedOn===t&&(e.blockedOn=null,Es||(Es=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Mp)))}var iu=null;function qd(e){iu!==e&&(iu=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){iu===e&&(iu=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(Ms(a||l)===null)continue;break}var i=fa(l);i!==null&&(e.splice(t,3),t-=3,Tc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Za(e){function t(r){return nu(r,e)}ql!==null&&nu(ql,e),Ul!==null&&nu(Ul,e),Ll!==null&&nu(Ll,e),Un.forEach(t),Ln.forEach(t);for(var l=0;l<Gl.length;l++){var a=Gl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Gl.length&&(l=Gl[0],l.blockedOn===null);)_d(l),l.blockedOn===null&&Gl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[ft]||null;if(typeof i=="function")u||qd(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[ft]||null)c=u.formAction;else if(Ms(n)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),qd(l)}}}function Ud(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Hs(e){this._internalRoot=e}uu.prototype.render=Hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var l=t.current,a=zt();zd(l,a,e,t,null,null)},uu.prototype.unmount=Hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zd(e.current,2,null,e,null,null),Qi(),t[oa]=null}};function uu(e){this._internalRoot=e}uu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xs();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Gl.length&&t!==0&&t<Gl[l].priority;l++);Gl.splice(l,0,e),l===0&&_d(e)}};var Ld=d.version;if(Ld!=="19.2.8")throw Error(s(527,Ld,"19.2.8"));R.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(t),e=e!==null?D(e):null,e=e===null?null:e.stateNode,e};var Ep={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cu.isDisabled&&cu.supportsFiber)try{Pa=cu.inject(Ep),bt=cu}catch{}}return Yn.createRoot=function(e,t){if(!S(e))throw Error(s(299));var l=!1,a="",n=wr,i=Xr,u=Zr;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Hd(e,1,!1,null,null,l,a,null,n,i,u,Ud),e[oa]=t.current,cs(e),new Hs(t)},Yn.hydrateRoot=function(e,t,l){if(!S(e))throw Error(s(299));var a=!1,n="",i=wr,u=Xr,c=Zr,r=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(r=l.formState)),t=Hd(e,1,!0,t,l??null,a,n,r,i,u,c,Ud),t.context=Od(null),l=t.current,a=zt(),a=vu(a),n=Ml(a),n.callback=null,El(l,n,a),l=a,t.current.lanes=l,Ja(t,l),Kt(t),e[oa]=t.current,cs(e),new uu(t)},Yn.version="19.2.8",Yn}var Kd;function Rp(){if(Kd)return Ns.exports;Kd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Ns.exports=_p(),Ns.exports}var qp=Rp();const sa={QUEEN:{type:"QUEEN",name:"Queen Bee",emoji:"🐝",description:"Moves 1 space per turn. Must be placed by turn 4. Game ends when a Queen is surrounded.",count:1},SPIDER:{type:"SPIDER",name:"Spider",emoji:"🕷️",description:"Moves exactly 3 spaces around the hive perimeter without backtracking.",count:2},BEETLE:{type:"BEETLE",name:"Beetle",emoji:"🐜",description:"Moves 1 space on ground or climbs on top of adjacent pieces to pin them.",count:2},GRASSHOPPER:{type:"GRASSHOPPER",name:"Grasshopper",emoji:"🦗",description:"Jumps in a straight line over connected pieces to the first empty space.",count:3},SOLDIER_ANT:{type:"SOLDIER_ANT",name:"Soldier Ant",emoji:"🐜",description:"Moves any distance around the perimeter of the hive.",count:3},MOSQUITO:{type:"MOSQUITO",name:"Mosquito",emoji:"🦟",description:"Copies movement ability of any adjacent piece touching it (acts like Beetle on top of hive).",count:1,isExpansion:!0},LADYBUG:{type:"LADYBUG",name:"Ladybug",emoji:"🐞",description:"Moves exactly 3 spaces: 2 spaces on top of the hive and 1 space down.",count:1,isExpansion:!0},PILLBUG:{type:"PILLBUG",name:"Pillbug",emoji:"💊",description:"Moves 1 space OR picks up an adjacent unstacked piece and moves it to another adjacent empty space.",count:1,isExpansion:!0}};function le(o,d){return`${o},${d}`}const Id=[{q:1,r:0},{q:1,r:-1},{q:0,r:-1},{q:-1,r:0},{q:-1,r:1},{q:0,r:1}];function Jd(o,d){const h=Id[(d%6+6)%6];return{q:o.q+h.q,r:o.r+h.r}}function Qe(o){return Id.map(d=>({q:o.q+d.q,r:o.r+d.r}))}function pl(o,d){return o.q===d.q&&o.r===d.r}function Up(o,d){const h=Qe(o),s=Qe(d);return h.filter(S=>s.some(E=>pl(S,E)))}function Lp(o,d,h=42){const s=h*Math.sqrt(3)*(o+d/2),S=h*(3/2)*d;return{x:s,y:S}}function Gp(o,d,h=42){const s=[];for(let S=0;S<6;S++){const E=60*S-30,H=Math.PI/180*E,j=o+h*Math.cos(H),p=d+h*Math.sin(H);s.push(`${j.toFixed(2)},${p.toFixed(2)}`)}return s.join(" ")}function fu(o){const d=new Map;return o.forEach((h,s)=>{d.set(s,[...h])}),d}function du(o,d){const h=o.get(le(d.q,d.r));return!h||h.length===0?null:h[h.length-1]}function Yl(o,d){const h=o.get(le(d.q,d.r));return h?h.length:0}function gt(o,d){return Yl(o,d)>0}function mu(o){const d=[];return o.forEach((h,s)=>{if(h.length>0){const[S,E]=s.split(",").map(Number);d.push({q:S,r:E})}}),d}function kl(o,d){for(const h of o.values())for(const s of h)if(s.player===d&&s.type==="QUEEN")return!0;return!1}function ou(o,d){for(const[h,s]of o.entries())for(const S of s)if(S.player===d&&S.type==="QUEEN"){const[E,H]=h.split(",").map(Number);return{q:E,r:H}}return null}function Qp(o){const d=mu(o);if(d.length<=1)return!0;const h=new Set,s=[d[0]];for(h.add(le(d[0].q,d[0].r));s.length>0;){const S=s.shift(),E=Qe(S);for(const H of E){const j=le(H.q,H.r);gt(o,H)&&!h.has(j)&&(h.add(j),s.push(H))}}return h.size===d.length}function Wd(o,d){const h=o.get(le(d.q,d.r));if(!h||h.length===0)return!1;if(h.length>1)return!0;const s=fu(o);return s.delete(le(d.q,d.r)),Qp(s)}function kn(o,d,h,s=0){const S=Up(d,h);if(S.length!==2)return!1;const E=Yl(o,S[0]),H=Yl(o,S[1]),j=Math.max(s,Yl(o,d)-1,Yl(o,h));return!(E>j&&H>j)}function yu(o,d,h,s=!0){if(gt(o,h)||!kn(o,d,h,0))return!1;const S=fu(o),E=S.get(le(d.q,d.r));return E&&(E.length===1?S.delete(le(d.q,d.r)):E.pop()),Qe(h).some(p=>gt(S,p))}function $d(o,d,h){const s=mu(o);if(s.length===0)return[{q:0,r:0}];if(s.length===1)return Qe(s[0]);const S=new Set,E=[];for(const H of s)for(const j of Qe(H))gt(o,j)||S.add(le(j.q,j.r));for(const H of S){const[j,p]=H.split(",").map(Number),g={q:j,r:p},D=Qe(g);let z=!1,_=!1;for(const X of D){const F=du(o,X);F&&(F.player===d?z=!0:_=!0)}z&&!_&&E.push(g)}return E}function em(o,d,h,s,S=null,E={mosquito:!0,ladybug:!0,pillbug:!0}){if(!kl(o,h))return[];const H=o.get(le(d.q,d.r));if(!H||H.length===0)return[];const j=H[H.length-1];if(j.player!==h)return[];if(!Wd(o,d))return[];const p=qs(o,d,j),g=new Set;for(const D of p)Yp(o,d,D).forEach(_=>g.add(le(_.q,_.r)));return Array.from(g).map(D=>{const[z,_]=D.split(",").map(Number);return{q:z,r:_}})}function qs(o,d,h,s){if(h.type!=="MOSQUITO")return[h.type];if(Yl(o,d)>1)return["BEETLE"];const E=new Set,H=Qe(d);for(const j of H){const p=du(o,j);p&&(p.type==="MOSQUITO"||E.add(p.type))}return E.size===0?[]:Array.from(E)}function Yp(o,d,h,s){switch(h){case"QUEEN":return tm(o,d);case"SPIDER":return kp(o,d);case"BEETLE":return Vp(o,d);case"GRASSHOPPER":return wp(o,d);case"SOLDIER_ANT":return Xp(o,d);case"LADYBUG":return Zp(o,d);case"PILLBUG":return Pp(o,d);default:return[]}}function tm(o,d){return Qe(d).filter(s=>yu(o,d,s))}function kp(o,d){const h=[];function s(j,p,g){if(p===3){h.push(j);return}const D=Qe(j);for(const z of D){const _=le(z.q,z.r);if(!g.has(_)&&yu(o,j,z)){const X=new Set(g);X.add(_),s(z,p+1,X)}}}const S=new Set([le(d.q,d.r)]);s(d,0,S);const E=new Set,H=[];for(const j of h){const p=le(j.q,j.r);E.has(p)||(E.add(p),H.push(j))}return H}function Vp(o,d){const h=Qe(d),s=[],S=Yl(o,d);for(const E of h){const H=Yl(o,E);if(H>=1||S>1){const j=Math.max(S-1,H);kn(o,d,E,j)&&s.push(E)}else yu(o,d,E)&&s.push(E)}return s}function wp(o,d){const h=[];for(let s=0;s<6;s++){let S=Jd(d,s),E=0;for(;gt(o,S);)E++,S=Jd(S,s);E>0&&h.push(S)}return h}function Xp(o,d){const h=new Set([le(d.q,d.r)]),s=[d];for(;s.length>0;){const S=s.shift(),E=Qe(S);for(const H of E){const j=le(H.q,H.r);h.has(j)||yu(o,S,H)&&(h.add(j),s.push(H))}}return h.delete(le(d.q,d.r)),Array.from(h).map(S=>{const[E,H]=S.split(",").map(Number);return{q:E,r:H}})}function Zp(o,d){const h=new Set,s=Qe(d).filter(S=>gt(o,S)&&kn(o,d,S,0));for(const S of s){const E=Qe(S).filter(H=>!pl(H,d)&&gt(o,H)&&kn(o,S,H,1));for(const H of E){const j=Qe(H).filter(p=>!pl(p,S)&&!gt(o,p)&&kn(o,H,p,0));for(const p of j)h.add(le(p.q,p.r))}}return Array.from(h).map(S=>{const[E,H]=S.split(",").map(Number);return{q:E,r:H}})}function Pp(o,d){return tm(o,d)}function lm(o,d,h,s=null){if(!kl(o,h))return[];const S=o.get(le(d.q,d.r));if(!S||S.length===0)return[];const E=Qe(d),H=E.filter(p=>!gt(o,p));if(H.length===0)return[];const j=[];for(const p of E)if(gt(o,p)){const g=o.get(le(p.q,p.r));if(g.length===1){const D=g[0];if(D.id===s||!Wd(o,p))continue;j.push({targetHex:p,piece:D,destinationHexes:H})}}return j}function Us(o,d,h,s,S=null,E={mosquito:!0,ladybug:!0,pillbug:!0}){const H=[],j=kl(o,d),p=$d(o,d);if(s===4&&!j){const g=h.find(D=>D.type==="QUEEN");if(g)for(const D of p)H.push({type:"PLACE",pieceId:g.id,bugType:"QUEEN",player:d,toHex:D});return H}if(p.length>0&&h.length>0){const g=new Set,D=new Map;for(const z of h)g.has(z.type)||(g.add(z.type),D.set(z.type,z));for(const[z,_]of D.entries())for(const X of p)H.push({type:"PLACE",pieceId:_.id,bugType:z,player:d,toHex:X})}if(j){const g=mu(o);for(const D of g){const z=du(o,D);if(z&&z.player===d){const _=em(o,D,d,s,S,E);for(const F of _)H.push({type:"MOVE",pieceId:z.id,bugType:z.type,player:d,fromHex:D,toHex:F});if(qs(o,D,z).includes("PILLBUG")){const F=lm(o,D,d,S);for(const se of F)for(const We of se.destinationHexes)H.push({type:"PILLBUG_SPECIAL",pieceId:z.id,bugType:z.type,player:d,fromHex:D,pillbugTargetHex:se.targetHex,toHex:We})}}}}return H}function Ls(o){const d=ou(o,1),h=ou(o,2);let s=0,S=0;d&&(s=Qe(d).filter(p=>gt(o,p)).length),h&&(S=Qe(h).filter(p=>gt(o,p)).length);const E=s===6,H=S===6;return E&&H?{isGameOver:!0,winner:"DRAW",p1QueenSurroundedCount:s,p2QueenSurroundedCount:S}:E?{isGameOver:!0,winner:2,p1QueenSurroundedCount:s,p2QueenSurroundedCount:S}:H?{isGameOver:!0,winner:1,p1QueenSurroundedCount:s,p2QueenSurroundedCount:S}:{isGameOver:!1,winner:null,p1QueenSurroundedCount:s,p2QueenSurroundedCount:S}}function Kp(o,d,h,s,S,E,H,j=null,p={mosquito:!0,ladybug:!0,pillbug:!0}){const g=Us(o,d,h,S,j,p);return g.length===0?null:H==="EASY"?Jp(o,d,g,S):H==="MEDIUM"?Fp(o,d,h,s,S,E,g):Ip(o,d,h,s,S,E,g,j,p)}function Jp(o,d,h,s){if(!kl(o,d)){const S=h.filter(E=>E.bugType==="QUEEN");if(S.length>0&&(s>=3||Math.random()<.6))return S[Math.floor(Math.random()*S.length)]}return h[Math.floor(Math.random()*h.length)]}function Fp(o,d,h,s,S,E,H,j,p){let g=-1/0,D=[];for(const z of H){const{nextBoard:_}=ru(o,z,d,h,s),X=am(_,d);X>g?(g=X,D=[z]):X===g&&D.push(z)}return D[Math.floor(Math.random()*D.length)]}function Ip(o,d,h,s,S,E,H,j,p){let z=-1/0,_=1/0,X=-1/0,F=H[0];for(const se of H){const{nextBoard:We,nextAIReserve:He,nextHumanReserve:_e}=ru(o,se,d,h,s),de=Ls(We);if(de.isGameOver&&de.winner===d)return se;const he=su(We,1,z,_,!1,d,1,He,_e,S+1,E,se.pieceId,p);he>X&&(X=he,F=se),z=Math.max(z,X)}return F}function su(o,d,h,s,S,E,H,j,p,g,D,z,_){const X=Ls(o);if(X.isGameOver)return X.winner===E?1e4:X.winner===H?-1e4:0;if(d===0)return am(o,E);const He=Us(o,S?E:H,S?j:p,S?g:D,z,_);if(He.length===0)return su(o,d-1,h,s,!S,E,H,j,p,S?g+1:g,S?D:D+1,z,_);if(S){let _e=-1/0;for(const de of He){const{nextBoard:he,nextAIReserve:Xe,nextHumanReserve:ge}=ru(o,de,E,j,p),Z=su(he,d-1,h,s,!1,E,H,Xe,ge,g+1,D,de.pieceId,_);if(_e=Math.max(_e,Z),h=Math.max(h,Z),s<=h)break}return _e}else{let _e=1/0;for(const de of He){const{nextBoard:he,nextAIReserve:Xe,nextHumanReserve:ge}=ru(o,de,H,j,p),Z=su(he,d-1,h,s,!0,E,H,Xe,ge,g,D+1,de.pieceId,_);if(_e=Math.min(_e,Z),s=Math.min(s,Z),s<=h)break}return _e}}function am(o,d,h,s,S){const H=ou(o,d),j=ou(o,1);let p=0;if(j){const D=Qe(j).filter(z=>gt(o,z)).length;p+=D*150,D===5&&(p+=300)}else p+=50;if(H){const D=Qe(H).filter(z=>gt(o,z)).length;p-=D*180,D===5&&(p-=400)}else p-=80;const g=mu(o);for(const D of g){const z=o.get(le(D.q,D.r));if(z.length>1){const _=z[z.length-1],X=z[z.length-2];_.player===d&&X.player===1?(p+=80,X.type==="QUEEN"&&(p+=200)):_.player===1&&X.player===d&&(p-=90,X.type==="QUEEN"&&(p-=250))}}return kl(o,d)||(p-=100),p}function ru(o,d,h,s,S){const E=fu(o);let H=[...s],j=[...S];if(d.type==="PLACE"){H=H.filter(z=>z.id!==d.pieceId),j=j.filter(z=>z.id!==d.pieceId);const p={id:d.pieceId,type:d.bugType,player:h},g=le(d.toHex.q,d.toHex.r),D=E.get(g)||[];E.set(g,[...D,p])}else if(d.type==="MOVE"){if(d.fromHex){const p=le(d.fromHex.q,d.fromHex.r),g=E.get(p)||[],D=g.pop();if(g.length===0&&E.delete(p),D){const z=le(d.toHex.q,d.toHex.r),_=E.get(z)||[];E.set(z,[..._,D])}}}else if(d.type==="PILLBUG_SPECIAL"&&d.pillbugTargetHex){const p=le(d.pillbugTargetHex.q,d.pillbugTargetHex.r),g=E.get(p)||[],D=g.pop();if(g.length===0&&E.delete(p),D){const z=le(d.toHex.q,d.toHex.r),_=E.get(z)||[];E.set(z,[..._,D])}}return{nextBoard:E,nextAIReserve:H,nextHumanReserve:j}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$p=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(d,h,s)=>s?s.toUpperCase():h.toLowerCase()),Fd=o=>{const d=$p(o);return d.charAt(0).toUpperCase()+d.slice(1)},nm=(...o)=>o.filter((d,h,s)=>!!d&&d.trim()!==""&&s.indexOf(d)===h).join(" ").trim(),ev=o=>{for(const d in o)if(d.startsWith("aria-")||d==="role"||d==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=J.forwardRef(({color:o="currentColor",size:d=24,strokeWidth:h=2,absoluteStrokeWidth:s,className:S="",children:E,iconNode:H,...j},p)=>J.createElement("svg",{ref:p,...tv,width:d,height:d,stroke:o,strokeWidth:s?Number(h)*24/Number(d):h,className:nm("lucide",S),...!E&&!ev(j)&&{"aria-hidden":"true"},...j},[...H.map(([g,D])=>J.createElement(g,D)),...Array.isArray(E)?E:[E]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=(o,d)=>{const h=J.forwardRef(({className:s,...S},E)=>J.createElement(lv,{ref:E,iconNode:d,className:nm(`lucide-${Wp(Fd(o))}`,`lucide-${o}`,s),...S}));return h.displayName=Fd(o),h};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],nv=Ye("book-open",av);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],uv=Ye("bot",iv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],sv=Ye("check",cv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],rv=Ye("chevron-down",ov);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],dv=Ye("chevron-up",fv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],im=Ye("circle-alert",mv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],um=Ye("code-xml",yv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],vv=Ye("copy",pv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],gv=Ye("download",hv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],bv=Ye("history",xv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Av=Ye("maximize-2",Sv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],Mv=Ye("move",Tv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Hv=Ye("play",Ev);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],zv=Ye("refresh-cw",Ov);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Cv=Ye("rotate-ccw",Nv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Dv=Ye("settings",Bv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],_v=Ye("sparkles",jv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],qv=Ye("trophy",Rv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Lv=Ye("users",Uv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],cm=Ye("x",Gv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Yv=Ye("zoom-in",Qv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Vv=Ye("zoom-out",kv),wv=({board:o,selectedHex:d,validDestinations:h,pillbugTargetHex:s,pillbugDestinations:S,onSelectHex:E,onSelectDestination:H,onSelectPillbugTarget:j,currentPlayer:p,isAITurn:g,lastMovedHex:D})=>{const z=J.useRef(null),[_,X]=J.useState(1),[F,se]=J.useState({x:0,y:0}),[We,He]=J.useState(!1),[_e,de]=J.useState({x:0,y:0}),he=42,Xe=()=>{se({x:0,y:0}),X(1)},ge=Q=>{Q.preventDefault();const Ce=Q.deltaY<0?1.1:.9;X(oe=>Math.min(Math.max(oe*Ce,.4),2.5))},Z=Q=>{Q.button===0&&(He(!0),de({x:Q.clientX-F.x,y:Q.clientY-F.y}))},Re=Q=>{We&&se({x:Q.clientX-_e.x,y:Q.clientY-_e.y})},Ze=()=>{He(!1)},wt=Array.from(o.keys()).map(Q=>{const[Ce,oe]=Q.split(",").map(Number);return{q:Ce,r:oe}}),Ae=new Map;for(const Q of wt){const Ce=le(Q.q,Q.r);Ae.set(Ce,Q);for(const oe of Qe(Q)){const T=le(oe.q,oe.r);Ae.has(T)||Ae.set(T,oe)}}if(Ae.size===0){const Q={q:0,r:0};Ae.set(le(0,0),Q);for(const Ce of Qe(Q))Ae.set(le(Ce.q,Ce.r),Ce)}for(const Q of h)Ae.set(le(Q.q,Q.r),Q);for(const Q of S)Ae.set(le(Q.q,Q.r),Q);const Pe=Array.from(Ae.values());return f.jsxs("div",{ref:z,className:"relative w-full h-full bg-slate-900 overflow-hidden select-none cursor-grab active:cursor-grabbing border border-slate-800 rounded-2xl shadow-inner",onWheel:ge,onMouseDown:Z,onMouseMove:Re,onMouseUp:Ze,onMouseLeave:Ze,children:[f.jsxs("div",{className:"absolute top-4 right-4 z-20 flex flex-col gap-2 bg-slate-800/80 backdrop-blur border border-slate-700/60 p-2 rounded-xl shadow-lg",children:[f.jsx("button",{onClick:()=>X(Q=>Math.min(Q*1.2,2.5)),className:"p-2 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg transition-colors",title:"Zoom In",children:f.jsx(Yv,{className:"w-5 h-5"})}),f.jsx("button",{onClick:()=>X(Q=>Math.max(Q/1.2,.4)),className:"p-2 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg transition-colors",title:"Zoom Out",children:f.jsx(Vv,{className:"w-5 h-5"})}),f.jsx("button",{onClick:Xe,className:"p-2 hover:bg-slate-700 text-amber-400 hover:text-amber-300 rounded-lg transition-colors",title:"Recenter Board",children:f.jsx(Av,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"absolute top-4 left-4 z-10 pointer-events-none bg-slate-950/60 backdrop-blur border border-slate-800 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-400 flex items-center gap-2",children:[f.jsx(Mv,{className:"w-3.5 h-3.5 text-amber-400 animate-pulse"}),f.jsx("span",{children:"Drag canvas to pan • Scroll to zoom"})]}),f.jsx("svg",{className:"w-full h-full pointer-events-auto",style:{touchAction:"none"},children:f.jsxs("g",{transform:`translate(${z.current?z.current.clientWidth/2+F.x:F.x}, ${z.current?z.current.clientHeight/2+F.y:F.y}) scale(${_})`,children:[f.jsxs("defs",{children:[f.jsxs("radialGradient",{id:"p1Gradient",cx:"50%",cy:"50%",r:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),f.jsx("stop",{offset:"100%",stopColor:"#f1f5f9"})]}),f.jsxs("radialGradient",{id:"p2Gradient",cx:"50%",cy:"50%",r:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#334155"}),f.jsx("stop",{offset:"100%",stopColor:"#0f172a"})]}),f.jsxs("radialGradient",{id:"validGrad",cx:"50%",cy:"50%",r:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0.4"}),f.jsx("stop",{offset:"100%",stopColor:"#059669",stopOpacity:"0.8"})]}),f.jsxs("filter",{id:"glowGold",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[f.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),f.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),Pe.map(Q=>{const Ce=le(Q.q,Q.r),{x:oe,y:T}=Lp(Q.q,Q.r,he),R=o.get(Ce)||[],k=R.length>0,$=k?R[R.length-1]:null,me=R.length,m=d&&pl(d,Q),N=h.some($e=>pl($e,Q)),U=s&&pl(s,Q),L=S.some($e=>pl($e,Q)),P=(D==null?void 0:D.to)&&pl(D.to,Q),I=Gp(oe,T,he-2);let ae="none",Be="#334155",xe=1.5;return k&&$?$.player===1?(ae="url(#p1Gradient)",Be="#e2e8f0"):(ae="url(#p2Gradient)",Be="#475569"):(N||L)&&(ae="rgba(16, 185, 129, 0.15)",Be="#10b981",xe=2.5),m?(Be="#f59e0b",xe=4):U?(Be="#ec4899",xe=3.5):P&&(Be="#3b82f6",xe=3),f.jsxs("g",{className:"transition-all duration-200 cursor-pointer group",onClick:$e=>{$e.stopPropagation(),!g&&(L&&H||N&&H?H(Q):k&&(s&&j&&pl(s,Q),E(Q)))},children:[f.jsx("polygon",{points:I,fill:ae,stroke:Be,strokeWidth:xe,className:`${N||L?"animate-pulse hover:fill-emerald-500/30":""} ${m?"filter drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]":""}`}),(N||L)&&f.jsx("circle",{cx:oe,cy:T,r:14,fill:"#10b981",className:"animate-ping opacity-75"}),k&&$&&f.jsxs(f.Fragment,{children:[f.jsx("text",{x:oe,y:T+8,textAnchor:"middle",fontSize:26,className:"pointer-events-none select-none drop-shadow",children:sa[$.type].emoji}),me>1&&f.jsxs("g",{transform:`translate(${oe+14}, ${T-18})`,children:[f.jsx("circle",{r:10,fill:"#f59e0b",stroke:"#1e293b",strokeWidth:1.5}),f.jsx("text",{x:0,y:3.5,textAnchor:"middle",fontSize:11,fontWeight:"bold",fill:"#0f172a",children:me})]}),f.jsx("circle",{cx:oe-16,cy:T-16,r:6,fill:$.player===1?"#ffffff":"#0f172a",stroke:$.player===1?"#cbd5e1":"#64748b",strokeWidth:1.5})]}),!k&&(N||L)&&f.jsx("circle",{cx:oe,cy:T,r:7,fill:"#10b981"}),f.jsxs("text",{x:oe,y:T+(k?28:4),textAnchor:"middle",fontSize:8,fill:"#64748b",className:"opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",children:[Q.q,",",Q.r]})]},Ce)})]})})]})},js=({player:o,reserve:d,isActive:h,selectedBugType:s,onSelectBugType:S,turnCount:E,queenPlaced:H,isAITurn:j=!1})=>{const p=new Map;for(const D of d){const z=p.get(D.type)||[];z.push(D),p.set(D.type,z)}const g=E===4&&!H;return f.jsxs("div",{className:`p-4 rounded-2xl border transition-all duration-300 ${h?o===1?"bg-slate-800/90 border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.15)]":"bg-slate-900/90 border-blue-400/60 shadow-[0_0_15px_rgba(59,130,246,0.15)]":"bg-slate-900/50 border-slate-800/80 opacity-70"}`,children:[f.jsxs("div",{className:"flex items-center justify-between mb-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("div",{className:`w-3.5 h-3.5 rounded-full border ${o===1?"bg-white border-slate-300":"bg-slate-950 border-slate-600"}`}),f.jsxs("h3",{className:"font-bold text-sm text-slate-100",children:["Player ",o," ",o===1?"(White)":"(Black)"]})]}),f.jsxs("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700",children:["Reserve (",d.length,")"]})]}),g&&h&&f.jsxs("div",{className:"mb-3 p-2 bg-amber-500/20 border border-amber-500/50 rounded-lg text-amber-300 text-xs flex items-center gap-1.5 animate-bounce",children:[f.jsx(im,{className:"w-4 h-4 shrink-0"}),f.jsx("span",{children:"Turn 4 Mandatory: You MUST place your Queen Bee!"})]}),f.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-4 gap-2",children:Array.from(p.entries()).map(([D,z])=>{const _=sa[D],X=z.length,F=s===D,se=!h||j||X===0||g&&D!=="QUEEN";return f.jsxs("button",{onClick:()=>!se&&S(D),disabled:se,title:`${_.name}: ${_.description}`,className:`relative flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-200 ${F?"bg-amber-500/20 border-amber-400 text-amber-200 scale-105 shadow-md":se?"bg-slate-950/40 border-slate-800/50 text-slate-600 opacity-40 cursor-not-allowed":"bg-slate-800/60 border-slate-700/80 hover:bg-slate-700/80 text-slate-200 hover:border-slate-500 cursor-pointer"}`,children:[f.jsx("span",{className:"text-2xl mb-1 select-none",children:_.emoji}),f.jsx("span",{className:"text-[10px] font-semibold truncate max-w-full",children:_.name.split(" ")[0]}),f.jsxs("span",{className:`absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold border ${F?"bg-amber-500 text-slate-950 border-amber-300":"bg-slate-900 text-slate-300 border-slate-700"}`,children:["x",X]})]},D)})})]})},Xv=({logs:o})=>{const[d,h]=J.useState(!1);return f.jsxs("div",{className:"bg-slate-900/90 backdrop-blur border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-all",children:[f.jsxs("button",{onClick:()=>h(!d),className:"w-full px-4 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800 transition-colors",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(bv,{className:"w-4 h-4 text-amber-400"}),f.jsxs("span",{children:["Move History (",o.length,")"]})]}),d?f.jsx(rv,{className:"w-4 h-4"}):f.jsx(dv,{className:"w-4 h-4"})]}),d&&f.jsx("div",{className:"max-h-48 overflow-y-auto p-3 divide-y divide-slate-800/60 text-xs text-slate-400",children:o.length===0?f.jsx("p",{className:"text-center italic py-2 text-slate-500",children:"No moves recorded yet."}):[...o].reverse().map((s,S)=>f.jsxs("div",{className:"py-1.5 flex items-start justify-between gap-2",children:[f.jsxs("span",{className:"font-mono text-[10px] text-slate-500",children:["T",s.turnNumber," P",s.player]}),f.jsx("span",{className:"text-slate-200 font-medium flex-1 text-right",children:s.description})]},S))})]})},Zv=({isOpen:o,onClose:d})=>o?f.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 rounded-full"}),f.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80",children:[f.jsx("h2",{className:"text-xl font-black text-slate-100",children:"How to Play Hive"}),f.jsx("button",{onClick:d,className:"p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors",title:"Close",children:f.jsx(cm,{className:"w-4 h-4"})})]}),f.jsxs("div",{className:"px-6 py-5 overflow-y-auto space-y-4",children:[f.jsx("div",{children:f.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[f.jsx("span",{className:"font-bold text-amber-400",children:"🎯 Goal:"})," Surround the opponent's Queen Bee with pieces on all six sides. First to do so wins; both surrounded at once is a draw."]})}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2",children:"📜 Core Rules"}),f.jsxs("ul",{className:"space-y-1.5 text-sm text-slate-300 leading-relaxed list-none",children:[f.jsx("li",{children:"• Play one piece per turn (placement) or move one of your pieces."}),f.jsx("li",{children:"• Your Queen Bee must be introduced by your 4th turn."}),f.jsx("li",{children:"• Your first piece is placed anywhere; later pieces must be placed adjacent to one of your pieces. Except for your second placement, pieces may not be placed touching an opponent's piece."}),f.jsx("li",{children:"• The Hive must always stay connected. You may never move a piece that would split the Hive, and you may not move a piece into a gap unless it still fits the freedom-to-move rule (no squeezing between stacked pieces)."})]})]}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2",children:"🦗 Insect Movements"}),f.jsxs("ul",{className:"space-y-2 text-sm text-slate-300 leading-relaxed list-none",children:[f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🐝"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Queen Bee"})," — moves exactly 1 hex per turn."]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🕷️"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Spider"})," — crawls exactly 3 hexes along the outside edge, never retracing."]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🪲"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Beetle"})," — moves 1 hex and can climb on top of other pieces (including a Queen) to block them; a beetle on top moves like a beetle over the stack."]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🦗"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Grasshopper"})," — jumps in a straight line over at least one piece, landing on the first empty hex in that line."]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🐜"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Soldier Ant"})," — may slide any number of hexes along the outside of the Hive."]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🦟"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Mosquito"})," — copies the movement (or pillbug ability) of any piece it touches."]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🐞"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Ladybug"})," — moves exactly 2 hexes on top of the Hive, then 1 hex back down to the board (may land on empty board hexes)."]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🪳"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Pillbug"})," — may not move itself, but it can move an adjacent enemy or friendly piece 2 hexes: up onto itself, then down into an adjacent empty space. The moved piece is stunned and cannot move on the opponent's next turn."]})]})]})]})]})}):null,Pv=({isOpen:o,onStartGame:d,onClose:h,canCancel:s=!1})=>{const[S,E]=J.useState("AI"),[H,j]=J.useState("MEDIUM"),[p,g]=J.useState({mosquito:!0,ladybug:!0,pillbug:!0}),[D,z]=J.useState(!1);return o?f.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:[f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 rounded-full"}),f.jsx("h2",{className:"text-2xl font-black text-slate-100 mb-1 flex items-center gap-2",children:f.jsx("span",{children:"🐝 Hive Board Game"})}),f.jsx("p",{className:"text-xs text-slate-400 mb-6",children:"Configure your match mode, AI strength, and expansion pieces."}),f.jsxs("div",{className:"mb-6",children:[f.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block",children:"Game Mode"}),f.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[f.jsxs("button",{onClick:()=>E("PASS_AND_PLAY"),className:`p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all ${S==="PASS_AND_PLAY"?"bg-amber-500/15 border-amber-400 text-amber-300 shadow-md":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:[f.jsx(Lv,{className:"w-6 h-6"}),f.jsx("span",{className:"text-xs font-bold",children:"Pass & Play"})]}),f.jsxs("button",{onClick:()=>E("AI"),className:`p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all ${S==="AI"?"bg-blue-500/15 border-blue-400 text-blue-300 shadow-md":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:[f.jsx(uv,{className:"w-6 h-6"}),f.jsx("span",{className:"text-xs font-bold",children:"VS AI Engine"})]})]})]}),S==="AI"&&f.jsxs("div",{className:"mb-6 animate-fade-in",children:[f.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block",children:"AI Difficulty"}),f.jsx("div",{className:"grid grid-cols-3 gap-2",children:["EASY","MEDIUM","HARD"].map(_=>f.jsx("button",{onClick:()=>j(_),className:`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${H===_?"bg-emerald-500/20 border-emerald-400 text-emerald-300":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:_==="EASY"?"Easy":_==="MEDIUM"?"Medium":"Hard (Minimax)"},_))})]}),f.jsxs("div",{className:"mb-6",children:[f.jsxs("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block flex items-center gap-1.5",children:[f.jsx(_v,{className:"w-3.5 h-3.5 text-amber-400"}),f.jsx("span",{children:"Expansions"})]}),f.jsxs("div",{className:"space-y-2 bg-slate-950/60 p-3 rounded-2xl border border-slate-800",children:[f.jsxs("label",{className:"flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1",children:[f.jsxs("span",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-lg",children:"🦟"})," The Mosquito"]}),f.jsx("input",{type:"checkbox",checked:p.mosquito,onChange:_=>g({...p,mosquito:_.target.checked}),className:"w-4 h-4 accent-amber-500 rounded"})]}),f.jsxs("label",{className:"flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1",children:[f.jsxs("span",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-lg",children:"🐞"})," The Ladybug"]}),f.jsx("input",{type:"checkbox",checked:p.ladybug,onChange:_=>g({...p,ladybug:_.target.checked}),className:"w-4 h-4 accent-amber-500 rounded"})]}),f.jsxs("label",{className:"flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1",children:[f.jsxs("span",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-lg",children:"💊"})," The Pillbug"]}),f.jsx("input",{type:"checkbox",checked:p.pillbug,onChange:_=>g({...p,pillbug:_.target.checked}),className:"w-4 h-4 accent-amber-500 rounded"})]})]})]}),f.jsxs("div",{className:"flex items-center gap-3",children:[s&&h&&f.jsx("button",{onClick:h,className:"flex-1 py-3 px-4 rounded-2xl border border-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-800 transition-colors",children:"Cancel"}),f.jsxs("button",{onClick:()=>d({mode:S,aiDifficulty:H,expansions:p}),className:"flex-1 py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-500/20",children:[f.jsx(Hv,{className:"w-4 h-4 fill-slate-950"}),f.jsx("span",{children:"Start Game"})]})]}),f.jsx("div",{className:"mt-4 flex justify-center",children:f.jsxs("button",{onClick:()=>z(!0),className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors px-3 py-1.5 rounded-xl hover:bg-slate-800/60",children:[f.jsx(nv,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Learn to Play"})]})})]}),f.jsx(Zv,{isOpen:D,onClose:()=>z(!1)})]}):null},Kv=({isOpen:o,winner:d,onRestart:h,onNewGameSetup:s})=>o?f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl relative overflow-hidden",children:[f.jsx("div",{className:"w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center mx-auto mb-4 text-amber-400",children:f.jsx(qv,{className:"w-8 h-8"})}),f.jsx("h2",{className:"text-2xl font-black text-slate-100 mb-2",children:d==="DRAW"?"🤝 Mutual Draw!":d===1?"🎉 Player 1 (White) Wins!":"🎉 Player 2 (Black) Wins!"}),f.jsx("p",{className:"text-xs text-slate-400 mb-6",children:d==="DRAW"?"Both Queen Bees were completely surrounded simultaneously!":"The opposing Queen Bee has been completely surrounded on all 6 sides!"}),f.jsxs("div",{className:"flex flex-col gap-2",children:[f.jsxs("button",{onClick:h,className:"w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-500/20",children:[f.jsx(zv,{className:"w-4 h-4"}),f.jsx("span",{children:"Play Again"})]}),f.jsx("button",{onClick:s,className:"w-full py-3 rounded-2xl border border-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-800 transition-colors",children:"Match Options / Difficulty"})]})]})}):null,_s=`package com.example.hivegame

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.animation.*
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.detectTapGestures
import androidx.compose.foundation.gestures.detectTransformGestures
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.layout.onSizeChanged
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.*
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlin.math.*

// ============================================================================
// 0. COLOR SCHEMES
// ============================================================================

private val DarkColors = darkColorScheme(
    primary = Color(0xFFF59E0B),
    onPrimary = Color(0xFF451A03),
    background = Color(0xFF0F172A),
    onBackground = Color(0xFFE2E8F0),
    surface = Color(0xFF1E293B),
    onSurface = Color(0xFFE2E8F0),
    surfaceVariant = Color(0xFF334155),
    onSurfaceVariant = Color(0xFF94A3B8),
    outline = Color(0xFF64748B)
)

private val LightColors = lightColorScheme(
    primary = Color(0xFFF59E0B),
    onPrimary = Color(0xFF451A03),
    background = Color(0xFFF8FAFC),
    onBackground = Color(0xFF0F172A),
    surface = Color(0xFFFFFFFF),
    onSurface = Color(0xFF0F172A),
    surfaceVariant = Color(0xFFE2E8F0),
    onSurfaceVariant = Color(0xFF475569),
    outline = Color(0xFF94A3B8)
)

// ============================================================================
// 1. DATA MODELS & DEFINITIONS
// ============================================================================

enum class Player { ONE, TWO }

enum class BugType(
    val title: String,
    val emoji: String,
    val defaultCount: Int,
    val isExpansion: Boolean = false
) {
    QUEEN("Queen Bee", "🐝", 1),
    SPIDER("Spider", "🕷️", 2),
    BEETLE("Beetle", "🪲", 2),
    GRASSHOPPER("Grasshopper", "🦗", 3),
    SOLDIER_ANT("Soldier Ant", "🐜", 3),
    MOSQUITO("Mosquito", "🦟", 1, true),
    LADYBUG("Ladybug", "🐞", 1, true),
    PILLBUG("Pillbug", "🪳", 1, true)
}

data class Piece(val id: String, val type: BugType, val player: Player)

data class AxialHex(val q: Int, val r: Int) {
    fun key() = "$q,$r"
    fun getNeighbors(): List<AxialHex> = listOf(
        AxialHex(q + 1, r), AxialHex(q + 1, r - 1), AxialHex(q, r - 1),
        AxialHex(q - 1, r), AxialHex(q - 1, r + 1), AxialHex(q, r + 1)
    )
}

enum class GameMode { PASS_AND_PLAY, AI }
enum class AIDifficulty { EASY, MEDIUM, HARD }

data class ExpansionsConfig(
    val mosquito: Boolean = true,
    val ladybug: Boolean = true,
    val pillbug: Boolean = true
)

data class GameSettings(
    val mode: GameMode = GameMode.AI,
    val aiDifficulty: AIDifficulty = AIDifficulty.MEDIUM,
    val expansions: ExpansionsConfig = ExpansionsConfig(),
    val humanColor: Player = Player.ONE
)

data class MoveLogEntry(val turn: Int, val player: Player, val text: String)

data class MoveAction(
    val type: ActionType,
    val pieceId: String,
    val bugType: BugType,
    val player: Player,
    val fromHex: AxialHex? = null,
    val toHex: AxialHex,
    val pillbugTargetHex: AxialHex? = null
) {
    enum class ActionType { PLACE, MOVE, PILLBUG_SPECIAL }
}

data class PillbugTargetOption(
    val targetHex: AxialHex,
    val piece: Piece,
    val destinationHexes: List<AxialHex>
)

data class GameStatus(
    val isGameOver: Boolean,
    val winner: Player?,
    val isDraw: Boolean,
    val p1QueenSurroundedCount: Int,
    val p2QueenSurroundedCount: Int
)

// ============================================================================
// 2. CORE GAME ENGINE & HIVE RULES
// ============================================================================

fun parseKey(key: String): AxialHex {
    val parts = key.split(",").map { it.toInt() }
    return AxialHex(parts[0], parts[1])
}

fun cloneBoard(board: Map<String, List<Piece>>): MutableMap<String, MutableList<Piece>> {
    return board.mapValues { it.value.toMutableList() }.toMutableMap()
}

fun getTopPiece(board: Map<String, List<Piece>>, hex: AxialHex): Piece? {
    val stack = board[hex.key()]
    return if (stack.isNullOrEmpty()) null else stack.last()
}

fun getStackHeight(board: Map<String, List<Piece>>, hex: AxialHex): Int {
    return board[hex.key()]?.size ?: 0
}

fun isOccupied(board: Map<String, List<Piece>>, hex: AxialHex): Boolean {
    return getStackHeight(board, hex) > 0
}

fun getAllOccupiedHexes(board: Map<String, List<Piece>>): List<AxialHex> {
    return board.entries.filter { it.value.isNotEmpty() }.map { parseKey(it.key) }
}

fun isQueenPlaced(board: Map<String, List<Piece>>, player: Player): Boolean {
    return board.values.flatten().any { it.player == player && it.type == BugType.QUEEN }
}

fun getQueenHex(board: Map<String, List<Piece>>, player: Player): AxialHex? {
    for ((key, stack) in board) {
        for (p in stack) {
            if (p.player == player && p.type == BugType.QUEEN) {
                return parseKey(key)
            }
        }
    }
    return null
}

fun isHiveConnected(board: Map<String, List<Piece>>): Boolean {
    val occupied = getAllOccupiedHexes(board)
    if (occupied.size <= 1) return true

    val visited = mutableSetOf<String>()
    val queue = mutableListOf(occupied.first())
    visited.add(occupied.first().key())

    while (queue.isNotEmpty()) {
        val current = queue.removeAt(0)
        for (neighbor in current.getNeighbors()) {
            val nKey = neighbor.key()
            if (isOccupied(board, neighbor) && !visited.contains(nKey)) {
                visited.add(nKey)
                queue.add(neighbor)
            }
        }
    }
    return visited.size == occupied.size
}

fun canRemovePieceWithoutBreakingHive(board: Map<String, List<Piece>>, fromHex: AxialHex): Boolean {
    val stack = board[fromHex.key()] ?: return false
    if (stack.size > 1) return true

    val copyBoard = cloneBoard(board)
    copyBoard.remove(fromHex.key())
    return isHiveConnected(copyBoard)
}

fun getCommonNeighbors(a: AxialHex, b: AxialHex): List<AxialHex> {
    val aSet = a.getNeighbors().toSet()
    val bSet = b.getNeighbors().toSet()
    return aSet.intersect(bSet).toList()
}

fun canSlide(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    toHex: AxialHex,
    atHeight: Int = 0
): Boolean {
    val common = getCommonNeighbors(fromHex, toHex)
    if (common.size != 2) return false

    val h1 = getStackHeight(board, common[0])
    val h2 = getStackHeight(board, common[1])

    val maxAllowedHeight = maxOf(atHeight, getStackHeight(board, fromHex) - 1, getStackHeight(board, toHex))

    if (h1 > maxAllowedHeight && h2 > maxAllowedHeight) {
        return false
    }
    return true
}

fun isValidGroundSlide(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    toHex: AxialHex
): Boolean {
    if (isOccupied(board, toHex)) return false
    if (!canSlide(board, fromHex, toHex, 0)) return false

    val testBoard = cloneBoard(board)
    val stack = testBoard[fromHex.key()]
    if (stack != null) {
        if (stack.size == 1) testBoard.remove(fromHex.key())
        else stack.removeAt(stack.size - 1)
    }

    val touchesHive = toHex.getNeighbors().any { isOccupied(testBoard, it) }
    return touchesHive
}

fun getValidPlacements(
    board: Map<String, List<Piece>>,
    player: Player,
    turnCountP: Int
): List<AxialHex> {
    val occupied = getAllOccupiedHexes(board)

    if (occupied.isEmpty()) {
        return listOf(AxialHex(0, 0))
    }

    if (occupied.size == 1) {
        return occupied[0].getNeighbors()
    }

    val candidateKeys = mutableSetOf<String>()
    val validPlacements = mutableListOf<AxialHex>()

    for (hex in occupied) {
        for (n in hex.getNeighbors()) {
            if (!isOccupied(board, n)) {
                candidateKeys.add(n.key())
            }
        }
    }

    for (key in candidateKeys) {
        val candidate = parseKey(key)
        val neighbors = candidate.getNeighbors()

        var touchesFriendly = false
        var touchesEnemy = false

        for (n in neighbors) {
            val topPiece = getTopPiece(board, n)
            if (topPiece != null) {
                if (topPiece.player == player) touchesFriendly = true
                else touchesEnemy = true
            }
        }

        if (touchesFriendly && !touchesEnemy) {
            validPlacements.add(candidate)
        }
    }

    return validPlacements
}

fun getEffectiveBugTypes(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    piece: Piece
): List<BugType> {
    if (piece.type != BugType.MOSQUITO) {
        return listOf(piece.type)
    }

    val stackHeight = getStackHeight(board, fromHex)
    if (stackHeight > 1) {
        return listOf(BugType.BEETLE)
    }

    val copiedTypes = mutableSetOf<BugType>()
    for (n in fromHex.getNeighbors()) {
        val adjTop = getTopPiece(board, n)
        if (adjTop != null && adjTop.type != BugType.MOSQUITO) {
            copiedTypes.add(adjTop.type)
        }
    }

    return copiedTypes.toList()
}

fun getQueenMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    return fromHex.getNeighbors().filter { isValidGroundSlide(board, fromHex, it) }
}

fun getSpiderMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val results = mutableListOf<AxialHex>()

    fun spiderDFS(current: AxialHex, stepCount: Int, visitedKeys: Set<String>) {
        if (stepCount == 3) {
            results.add(current)
            return
        }
        for (next in current.getNeighbors()) {
            val nextKey = next.key()
            if (!visitedKeys.contains(nextKey)) {
                if (isValidGroundSlide(board, current, next)) {
                    val nextVisited = visitedKeys.toMutableSet()
                    nextVisited.add(nextKey)
                    spiderDFS(next, stepCount + 1, nextVisited)
                }
            }
        }
    }

    val startVisited = setOf(fromHex.key())
    spiderDFS(fromHex, 0, startVisited)

    val uniqueKeys = mutableSetOf<String>()
    val uniqueResults = mutableListOf<AxialHex>()
    for (hex in results) {
        if (uniqueKeys.add(hex.key())) {
            uniqueResults.add(hex)
        }
    }
    return uniqueResults
}

fun getBeetleMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val moves = mutableListOf<AxialHex>()
    val currentHeight = getStackHeight(board, fromHex)

    for (to in fromHex.getNeighbors()) {
        val targetHeight = getStackHeight(board, to)

        if (targetHeight >= 1 || currentHeight > 1) {
            val clearanceHeight = maxOf(currentHeight - 1, targetHeight)
            if (canSlide(board, fromHex, to, clearanceHeight)) {
                moves.add(to)
            }
        } else {
            if (isValidGroundSlide(board, fromHex, to)) {
                moves.add(to)
            }
        }
    }
    return moves
}

fun getGrasshopperMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val moves = mutableListOf<AxialHex>()

    for (dirIndex in 0 until 6) {
        var current = fromHex.getNeighbors()[dirIndex]
        var countOver = 0

        while (isOccupied(board, current)) {
            countOver++
            current = current.getNeighbors()[dirIndex]
        }

        if (countOver > 0) {
            moves.add(current)
        }
    }
    return moves
}

fun getSoldierAntMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val visited = mutableSetOf(fromHex.key())
    val queue = mutableListOf(fromHex)

    while (queue.isNotEmpty()) {
        val current = queue.removeAt(0)
        for (next in current.getNeighbors()) {
            val nextKey = next.key()
            if (!visited.contains(nextKey)) {
                if (isValidGroundSlide(board, current, next)) {
                    visited.add(nextKey)
                    queue.add(next)
                }
            }
        }
    }

    visited.remove(fromHex.key())

    return visited.map { parseKey(it) }
}

fun getLadybugMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val results = mutableSetOf<String>()

    val step1Candidates = fromHex.getNeighbors().filter { n ->
        isOccupied(board, n) && canSlide(board, fromHex, n, 0)
    }

    for (s1 in step1Candidates) {
        val step2Candidates = s1.getNeighbors().filter { s2 ->
            s2.key() != fromHex.key() && isOccupied(board, s2) && canSlide(board, s1, s2, 1)
        }

        for (s2 in step2Candidates) {
            val step3Candidates = s2.getNeighbors().filter { s3 ->
                s3.key() != s1.key() && !isOccupied(board, s3) && canSlide(board, s2, s3, 0)
            }

            for (s3 in step3Candidates) {
                results.add(s3.key())
            }
        }
    }

    return results.map { parseKey(it) }
}

fun getPillbugMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    return getQueenMoves(board, fromHex)
}

fun getMovesForBugType(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    bugType: BugType
): List<AxialHex> {
    return when (bugType) {
        BugType.QUEEN -> getQueenMoves(board, fromHex)
        BugType.SPIDER -> getSpiderMoves(board, fromHex)
        BugType.BEETLE -> getBeetleMoves(board, fromHex)
        BugType.GRASSHOPPER -> getGrasshopperMoves(board, fromHex)
        BugType.SOLDIER_ANT -> getSoldierAntMoves(board, fromHex)
        BugType.LADYBUG -> getLadybugMoves(board, fromHex)
        BugType.PILLBUG -> getPillbugMoves(board, fromHex)
        BugType.MOSQUITO -> emptyList()
    }
}

fun getValidMovesForPiece(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    player: Player,
    turnCountP: Int,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig
): List<AxialHex> {
    if (!isQueenPlaced(board, player)) {
        return emptyList()
    }

    val stack = board[fromHex.key()]
    if (stack.isNullOrEmpty()) return emptyList()
    val topPiece = stack.last()
    if (topPiece.player != player) return emptyList()

    if (!canRemovePieceWithoutBreakingHive(board, fromHex)) {
        return emptyList()
    }

    val effectiveBugTypes = getEffectiveBugTypes(board, fromHex, topPiece)
    val validDestinations = mutableSetOf<String>()

    for (bugType in effectiveBugTypes) {
        val dests = getMovesForBugType(board, fromHex, bugType)
        dests.forEach { validDestinations.add(it.key()) }
    }

    return validDestinations.map { parseKey(it) }
}

fun getPillbugSpecialTargets(
    board: Map<String, List<Piece>>,
    pillbugHex: AxialHex,
    player: Player,
    lastMovedPieceId: String?
): List<PillbugTargetOption> {
    if (!isQueenPlaced(board, player)) return emptyList()

    val stack = board[pillbugHex.key()]
    if (stack.isNullOrEmpty()) return emptyList()

    val emptyAdjacentHexes = pillbugHex.getNeighbors().filter { !isOccupied(board, it) }
    if (emptyAdjacentHexes.isEmpty()) return emptyList()

    val options = mutableListOf<PillbugTargetOption>()

    for (adjHex in pillbugHex.getNeighbors()) {
        if (isOccupied(board, adjHex)) {
            val targetStack = board[adjHex.key()]!!
            if (targetStack.size == 1) {
                val targetPiece = targetStack[0]

                if (targetPiece.id == lastMovedPieceId) continue
                if (!canRemovePieceWithoutBreakingHive(board, adjHex)) continue

                options.add(
                    PillbugTargetOption(
                        targetHex = adjHex,
                        piece = targetPiece,
                        destinationHexes = emptyAdjacentHexes
                    )
                )
            }
        }
    }

    return options
}

fun getPlayerAllLegalActions(
    board: Map<String, List<Piece>>,
    player: Player,
    reserve: List<Piece>,
    turnCountP: Int,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig
): List<MoveAction> {
    val actions = mutableListOf<MoveAction>()
    val queenPlaced = isQueenPlaced(board, player)

    val validPlacements = getValidPlacements(board, player, turnCountP)

    if (turnCountP == 4 && !queenPlaced) {
        val queenPiece = reserve.firstOrNull { it.type == BugType.QUEEN }
        if (queenPiece != null) {
            for (hex in validPlacements) {
                actions.add(
                    MoveAction(
                        type = MoveAction.ActionType.PLACE,
                        pieceId = queenPiece.id,
                        bugType = BugType.QUEEN,
                        player = player,
                        toHex = hex
                    )
                )
            }
        }
        return actions
    }

    if (validPlacements.isNotEmpty() && reserve.isNotEmpty()) {
        val availableBugTypes = mutableSetOf<BugType>()
        val typeToPiece = mutableMapOf<BugType, Piece>()

        for (p in reserve) {
            if (availableBugTypes.add(p.type)) {
                typeToPiece[p.type] = p
            }
        }

        for ((bugType, piece) in typeToPiece) {
            for (hex in validPlacements) {
                actions.add(
                    MoveAction(
                        type = MoveAction.ActionType.PLACE,
                        pieceId = piece.id,
                        bugType = bugType,
                        player = player,
                        toHex = hex
                    )
                )
            }
        }
    }

    if (queenPlaced) {
        val occupied = getAllOccupiedHexes(board)

        for (hex in occupied) {
            val topPiece = getTopPiece(board, hex)
            if (topPiece != null && topPiece.player == player) {
                val moves = getValidMovesForPiece(
                    board, hex, player, turnCountP, lastMovedPieceId, expansions
                )

                for (dest in moves) {
                    actions.add(
                        MoveAction(
                            type = MoveAction.ActionType.MOVE,
                            pieceId = topPiece.id,
                            bugType = topPiece.type,
                            player = player,
                            fromHex = hex,
                            toHex = dest
                        )
                    )
                }

                val effectiveTypes = getEffectiveBugTypes(board, hex, topPiece)
                if (effectiveTypes.contains(BugType.PILLBUG)) {
                    val pbTargets = getPillbugSpecialTargets(board, hex, player, lastMovedPieceId)
                    for (opt in pbTargets) {
                        for (destHex in opt.destinationHexes) {
                            actions.add(
                                MoveAction(
                                    type = MoveAction.ActionType.PILLBUG_SPECIAL,
                                    pieceId = topPiece.id,
                                    bugType = topPiece.type,
                                    player = player,
                                    fromHex = hex,
                                    pillbugTargetHex = opt.targetHex,
                                    toHex = destHex
                                )
                            )
                        }
                    }
                }
            }
        }
    }

    return actions
}

fun checkGameStatus(board: Map<String, List<Piece>>): GameStatus {
    val p1QueenHex = getQueenHex(board, Player.ONE)
    val p2QueenHex = getQueenHex(board, Player.TWO)

    var p1Surrounded = 0
    var p2Surrounded = 0

    if (p1QueenHex != null) {
        p1Surrounded = p1QueenHex.getNeighbors().count { isOccupied(board, it) }
    }
    if (p2QueenHex != null) {
        p2Surrounded = p2QueenHex.getNeighbors().count { isOccupied(board, it) }
    }

    val p1IsSurrounded = p1Surrounded == 6
    val p2IsSurrounded = p2Surrounded == 6

    return when {
        p1IsSurrounded && p2IsSurrounded -> GameStatus(true, null, true, p1Surrounded, p2Surrounded)
        p1IsSurrounded -> GameStatus(true, Player.TWO, false, p1Surrounded, p2Surrounded)
        p2IsSurrounded -> GameStatus(true, Player.ONE, false, p1Surrounded, p2Surrounded)
        else -> GameStatus(false, null, false, p1Surrounded, p2Surrounded)
    }
}

class HiveEngine {
    val board = mutableMapOf<String, MutableList<Piece>>()
    val p1Reserve = mutableListOf<Piece>()
    val p2Reserve = mutableListOf<Piece>()
    var currentPlayer = Player.ONE
    var turnCountP1 = 1
    var turnCountP2 = 1
    var lastMovedPieceId: String? = null
    val history = mutableListOf<MoveLogEntry>()
    var expansions = ExpansionsConfig()

    data class EngineSnapshot(
        val board: Map<String, List<Piece>>,
        val p1Reserve: List<Piece>,
        val p2Reserve: List<Piece>,
        val currentPlayer: Player,
        val turnCountP1: Int,
        val turnCountP2: Int,
        val lastMovedPieceId: String?,
        val history: List<MoveLogEntry>
    )

    fun snapshot(): EngineSnapshot {
        return EngineSnapshot(
            board = board.mapValues { it.value.toList() }.toMap(),
            p1Reserve = p1Reserve.toList(),
            p2Reserve = p2Reserve.toList(),
            currentPlayer = currentPlayer,
            turnCountP1 = turnCountP1,
            turnCountP2 = turnCountP2,
            lastMovedPieceId = lastMovedPieceId,
            history = history.toList()
        )
    }

    fun restore(snap: EngineSnapshot) {
        board.clear()
        board.putAll(snap.board.mapValues { it.value.toMutableList() })
        p1Reserve.clear()
        p1Reserve.addAll(snap.p1Reserve)
        p2Reserve.clear()
        p2Reserve.addAll(snap.p2Reserve)
        currentPlayer = snap.currentPlayer
        turnCountP1 = snap.turnCountP1
        turnCountP2 = snap.turnCountP2
        lastMovedPieceId = snap.lastMovedPieceId
        history.clear()
        history.addAll(snap.history)
    }

    fun reserveFor(p: Player): List<Piece> = if (p == Player.ONE) p1Reserve else p2Reserve

    fun turnCountFor(p: Player): Int = if (p == Player.ONE) turnCountP1 else turnCountP2

    fun initNewGame(expansions: ExpansionsConfig) {
        board.clear()
        p1Reserve.clear()
        p2Reserve.clear()
        history.clear()
        currentPlayer = Player.ONE
        turnCountP1 = 1
        turnCountP2 = 1
        lastMovedPieceId = null
        this.expansions = expansions

        fun createReserve(player: Player): List<Piece> {
            val list = mutableListOf<Piece>()
            BugType.values().forEach { bug ->
                if (!bug.isExpansion ||
                    (bug == BugType.MOSQUITO && expansions.mosquito) ||
                    (bug == BugType.LADYBUG && expansions.ladybug) ||
                    (bug == BugType.PILLBUG && expansions.pillbug)
                ) {
                    repeat(bug.defaultCount) { idx ->
                        list.add(Piece("p\${if (player == Player.ONE) 1 else 2}_\${bug.name}_$idx", bug, player))
                    }
                }
            }
            return list
        }

        p1Reserve.addAll(createReserve(Player.ONE))
        p2Reserve.addAll(createReserve(Player.TWO))
    }

    fun isQueenPlaced(player: Player): Boolean {
        return isQueenPlaced(board, player)
    }

    fun placementsForCurrent(): List<AxialHex> {
        return getValidPlacements(board, currentPlayer, turnCountFor(currentPlayer))
    }

    fun movesFor(hex: AxialHex): List<AxialHex> {
        return getValidMovesForPiece(
            board, hex, currentPlayer, turnCountFor(currentPlayer), lastMovedPieceId, expansions
        )
    }

    fun pillbugTargets(hex: AxialHex): List<PillbugTargetOption> {
        return getPillbugSpecialTargets(board, hex, currentPlayer, lastMovedPieceId)
    }

    fun effectiveTypes(hex: AxialHex, piece: Piece): List<BugType> {
        return getEffectiveBugTypes(board, hex, piece)
    }

    fun legalActions(): List<MoveAction> {
        return getPlayerAllLegalActions(
            board, currentPlayer, reserveFor(currentPlayer), turnCountFor(currentPlayer), lastMovedPieceId, expansions
        )
    }

    fun checkGameStatus(): GameStatus {
        return checkGameStatus(board)
    }

    fun executeMove(action: MoveAction) {
        var logDesc = ""
        var actuallyMovedId: String? = null

        if (action.type == MoveAction.ActionType.PLACE) {
            if (action.player == Player.ONE) {
                p1Reserve.removeAll { it.id == action.pieceId }
            } else {
                p2Reserve.removeAll { it.id == action.pieceId }
            }

            val newPiece = Piece(action.pieceId, action.bugType, action.player)
            val key = action.toHex.key()
            val stack = board.getOrPut(key) { mutableListOf() }
            stack.add(newPiece)
            actuallyMovedId = newPiece.id

            logDesc = "Placed \${action.bugType.title} at (\${action.toHex.q}, \${action.toHex.r})"
        } else if (action.type == MoveAction.ActionType.MOVE && action.fromHex != null) {
            val fromStack = board[action.fromHex.key()] ?: return
            val movedPiece = if (fromStack.isNotEmpty()) fromStack.removeAt(fromStack.size - 1) else null
            if (fromStack.isEmpty()) board.remove(action.fromHex.key())

            if (movedPiece != null) {
                val key = action.toHex.key()
                val stack = board.getOrPut(key) { mutableListOf() }
                stack.add(movedPiece)
                actuallyMovedId = movedPiece.id
            }

            logDesc = "Moved \${action.bugType.title} from (\${action.fromHex.q}, \${action.fromHex.r}) to (\${action.toHex.q}, \${action.toHex.r})"
        } else if (action.type == MoveAction.ActionType.PILLBUG_SPECIAL && action.pillbugTargetHex != null) {
            val targetStack = board[action.pillbugTargetHex.key()] ?: return
            val movedPiece = if (targetStack.isNotEmpty()) targetStack.removeAt(targetStack.size - 1) else null
            if (targetStack.isEmpty()) board.remove(action.pillbugTargetHex.key())

            if (movedPiece != null) {
                val key = action.toHex.key()
                val stack = board.getOrPut(key) { mutableListOf() }
                stack.add(movedPiece)
                actuallyMovedId = movedPiece.id
            }

            logDesc = "Pillbug moved \${movedPiece?.type?.title ?: "piece"} to (\${action.toHex.q}, \${action.toHex.r})"
        }

        // The piece that actually moved/placed is "stunned" on the opponent's next turn.
        lastMovedPieceId = actuallyMovedId ?: action.pieceId

        history.add(
            MoveLogEntry(
                turn = if (action.player == Player.ONE) turnCountP1 else turnCountP2,
                player = action.player,
                text = logDesc
            )
        )

        if (action.player == Player.ONE) {
            turnCountP1++
            currentPlayer = Player.TWO
        } else {
            turnCountP2++
            currentPlayer = Player.ONE
        }
    }

    fun switchTurn() {
        currentPlayer = if (currentPlayer == Player.ONE) Player.TWO else Player.ONE
    }
}

// ============================================================================
// 3. AI ENGINE (Easy / Medium / Hard)
// ============================================================================

fun computeAIMove(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnCountAI: Int,
    turnCountHuman: Int,
    difficulty: AIDifficulty,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig
): MoveAction? {
    val legalActions = getPlayerAllLegalActions(
        board, aiPlayer, aiReserve, turnCountAI, lastMovedPieceId, expansions
    )

    if (legalActions.isEmpty()) return null

    return when (difficulty) {
        AIDifficulty.EASY -> computeEasyMove(board, aiPlayer, legalActions, turnCountAI)
        AIDifficulty.MEDIUM -> computeMediumMove(
            board, aiPlayer, aiReserve, humanReserve, turnCountAI, turnCountHuman,
            legalActions, lastMovedPieceId, expansions
        )
        AIDifficulty.HARD -> computeHardMinimaxMove(
            board, aiPlayer, aiReserve, humanReserve, turnCountAI, turnCountHuman,
            legalActions, lastMovedPieceId, expansions
        )
    }
}

fun computeEasyMove(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    legalActions: List<MoveAction>,
    turnCountAI: Int
): MoveAction {
    // Play the queen when it is due (by the 4th turn) if the AI forgot to place it earlier.
    if (!isQueenPlaced(board, aiPlayer) && turnCountAI >= 3) {
        val queenActions = legalActions.filter { it.bugType == BugType.QUEEN }
        if (queenActions.isNotEmpty()) {
            return queenActions[Math.floor(Math.random() * queenActions.size).toInt()]
        }
    }

    return legalActions[Math.floor(Math.random() * legalActions.size).toInt()]
}

fun computeMediumMove(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnCountAI: Int,
    turnCountHuman: Int,
    legalActions: List<MoveAction>,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig
): MoveAction {
    var bestScore = -1e9
    var bestActions = mutableListOf<MoveAction>()

    for (action in legalActions) {
        val (nextBoard, nextAIReserve, nextHumanReserve) = simulateAction(
            board, action, aiPlayer, aiReserve, humanReserve
        )

        val score = evaluateBoard(
            nextBoard, aiPlayer, nextAIReserve, nextHumanReserve, turnCountAI, turnCountHuman, expansions
        )

        if (score > bestScore + 1e-9) {
            bestScore = score
            bestActions = mutableListOf(action)
        } else if (kotlin.math.abs(score - bestScore) <= 1e-9) {
            bestActions.add(action)
        }
    }

    return bestActions[Math.floor(Math.random() * bestActions.size).toInt()]
}

fun computeHardMinimaxMove(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnCountAI: Int,
    turnCountHuman: Int,
    legalActions: List<MoveAction>,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig
): MoveAction {
    val depth = 2
    val humanPlayer: Player = if (aiPlayer == Player.ONE) Player.TWO else Player.ONE

    var alpha = -1e9
    var beta = 1e9
    var bestScore = -1e9
    var bestAction = legalActions[0]

    for (action in legalActions) {
        val (nextBoard, nextAIReserve, nextHumanReserve) = simulateAction(
            board, action, aiPlayer, aiReserve, humanReserve
        )

        val status = checkGameStatus(nextBoard)
        if (status.isGameOver && status.winner == aiPlayer) {
            return action
        }

        val value = minimax(
            nextBoard,
            depth - 1,
            alpha,
            beta,
            false,
            aiPlayer,
            humanPlayer,
            nextAIReserve,
            nextHumanReserve,
            turnCountAI + 1,
            turnCountHuman,
            actuallyMovedPieceId(board, action),
            expansions
        )

        if (value > bestScore) {
            bestScore = value
            bestAction = action
        }
        alpha = maxOf(alpha, bestScore)
    }

    return bestAction
}

fun minimax(
    board: Map<String, List<Piece>>,
    depth: Int,
    alpha: Double,
    beta: Double,
    isMaximizing: Boolean,
    aiPlayer: Player,
    humanPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnAI: Int,
    turnHuman: Int,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig
): Double {
    var alpha = alpha
    var beta = beta

    val status = checkGameStatus(board)
    if (status.isGameOver) {
        return when {
            status.winner == aiPlayer -> 10000.0
            status.winner == humanPlayer -> -10000.0
            else -> 0.0
        }
    }

    if (depth == 0) {
        return evaluateBoard(board, aiPlayer, aiReserve, humanReserve, turnAI, turnHuman, expansions)
    }

    val currentPlayer = if (isMaximizing) aiPlayer else humanPlayer
    val currentReserve = if (isMaximizing) aiReserve else humanReserve
    val oppReserve = if (isMaximizing) humanReserve else aiReserve
    val turnCount = if (isMaximizing) turnAI else turnHuman

    val legalActions = getPlayerAllLegalActions(
        board, currentPlayer, currentReserve, turnCount, lastMovedPieceId, expansions
    )

    if (legalActions.isEmpty()) {
        return minimax(
            board, depth - 1, alpha, beta, !isMaximizing,
            aiPlayer, humanPlayer, aiReserve, humanReserve,
            if (isMaximizing) turnAI + 1 else turnAI,
            if (isMaximizing) turnHuman else turnHuman + 1,
            lastMovedPieceId, expansions
        )
    }

    if (isMaximizing) {
        var maxEval = -1e9
        for (action in legalActions) {
            val (nextBoard, nextAIReserve, nextHumanReserve) = simulateAction(
                board, action, aiPlayer, aiReserve, humanReserve
            )

            val evalValue = minimax(
                nextBoard, depth - 1, alpha, beta, false,
                aiPlayer, humanPlayer, nextAIReserve, nextHumanReserve,
                turnAI + 1, turnHuman, actuallyMovedPieceId(board, action), expansions
            )

            maxEval = maxOf(maxEval, evalValue)
            alpha = maxOf(alpha, evalValue)
            if (beta <= alpha) break
        }
        return maxEval
    } else {
        var minEval = 1e9
        for (action in legalActions) {
            val (nextBoard, nextAIReserve, nextHumanReserve) = simulateAction(
                board, action, humanPlayer, aiReserve, humanReserve
            )

            val evalValue = minimax(
                nextBoard, depth - 1, alpha, beta, true,
                aiPlayer, humanPlayer, nextAIReserve, nextHumanReserve,
                turnAI, turnHuman + 1, actuallyMovedPieceId(board, action), expansions
            )

            minEval = minOf(minEval, evalValue)
            beta = minOf(beta, evalValue)
            if (beta <= alpha) break
        }
        return minEval
    }
}

fun evaluateBoard(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnAI: Int,
    turnHuman: Int,
    expansions: ExpansionsConfig
): Double {
    val humanPlayer: Player = if (aiPlayer == Player.ONE) Player.TWO else Player.ONE

    val status = checkGameStatus(board)
    if (status.isGameOver) {
        return when {
            status.winner == aiPlayer -> 10000.0
            status.winner == humanPlayer -> -10000.0
            else -> 0.0
        }
    }

    val aiQueenHex = getQueenHex(board, aiPlayer)
    val humanQueenHex = getQueenHex(board, humanPlayer)

    var score = 0.0

    // Attack: surround the human queen.
    if (humanQueenHex != null) {
        val neighbors = humanQueenHex.getNeighbors()
        val aiAdjacent = neighbors.count { getTopPiece(board, it)?.player == aiPlayer }
        val anyOccupied = neighbors.count { isOccupied(board, it) }
        score += aiAdjacent * 150
        score += (anyOccupied - aiAdjacent) * 40
        if (anyOccupied == 5) score += 300
    } else {
        // Slight pressure to get the human to place their queen, then it becomes targetable.
        score += if (turnHuman >= 3) 30 else 10
    }

    // Defense: protect the AI queen. Only ENEMY pieces adjacent are a threat;
    // the AI's own surrounding pieces are a defensive ring (mild bonus).
    if (aiQueenHex != null) {
        val neighbors = aiQueenHex.getNeighbors()
        val enemyAdjacent = neighbors.count { getTopPiece(board, it)?.player == humanPlayer }
        val anyOccupied = neighbors.count { isOccupied(board, it) }
        val ownAdjacent = anyOccupied - enemyAdjacent
        score -= enemyAdjacent * 210
        if (anyOccupied == 5) score -= 400
        score += ownAdjacent * 15
    } else {
        // Mild timing pressure so the AI places its queen around its 3rd turn.
        score -= if (turnAI >= 3) 60 else 15
    }

    val occupiedHexes = getAllOccupiedHexes(board)
    for (hex in occupiedHexes) {
        val stack = board[hex.key()]
        if (stack != null && stack.size > 1) {
            val topPiece = stack[stack.size - 1]
            val pinnedPiece = stack[stack.size - 2]

            if (topPiece.player == aiPlayer && pinnedPiece.player == humanPlayer) {
                score += 80
                if (pinnedPiece.type == BugType.QUEEN) score += 200
            } else if (topPiece.player == humanPlayer && pinnedPiece.player == aiPlayer) {
                score -= 90
                if (pinnedPiece.type == BugType.QUEEN) score -= 250
            }
        }
    }

    return score
}

fun actuallyMovedPieceId(board: Map<String, List<Piece>>, action: MoveAction): String {
    return when (action.type) {
        MoveAction.ActionType.PILLBUG_SPECIAL ->
            action.pillbugTargetHex?.let { getTopPiece(board, it)?.id } ?: action.pieceId
        else -> action.pieceId
    }
}

fun simulateAction(
    board: Map<String, List<Piece>>,
    action: MoveAction,
    actingPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>
): Triple<MutableMap<String, MutableList<Piece>>, List<Piece>, List<Piece>> {
    val nextBoard = cloneBoard(board)
    var nextAIReserve = aiReserve.filter { it.id != action.pieceId }
    var nextHumanReserve = humanReserve.filter { it.id != action.pieceId }

    if (action.type == MoveAction.ActionType.PLACE) {
        val newPiece = Piece(action.pieceId, action.bugType, actingPlayer)
        val key = action.toHex.key()
        val existingStack = nextBoard.getOrPut(key) { mutableListOf() }
        existingStack.add(newPiece)
    } else if (action.type == MoveAction.ActionType.MOVE && action.fromHex != null) {
        val fromStack = nextBoard[action.fromHex.key()]
        if (fromStack != null) {
            val movedPiece = if (fromStack.isNotEmpty()) fromStack.removeAt(fromStack.size - 1) else null
            if (fromStack.isEmpty()) nextBoard.remove(action.fromHex.key())

            if (movedPiece != null) {
                val key = action.toHex.key()
                val stack = nextBoard.getOrPut(key) { mutableListOf() }
                stack.add(movedPiece)
            }
        }
    } else if (action.type == MoveAction.ActionType.PILLBUG_SPECIAL && action.pillbugTargetHex != null) {
        val targetStack = nextBoard[action.pillbugTargetHex.key()]
        if (targetStack != null) {
            val movedPiece = if (targetStack.isNotEmpty()) targetStack.removeAt(targetStack.size - 1) else null
            if (targetStack.isEmpty()) nextBoard.remove(action.pillbugTargetHex.key())

            if (movedPiece != null) {
                val key = action.toHex.key()
                val stack = nextBoard.getOrPut(key) { mutableListOf() }
                stack.add(movedPiece)
            }
        }
    }

    return Triple(nextBoard, nextAIReserve, nextHumanReserve)
}

// ============================================================================
// 4. MAIN JETPACK COMPOSE UI APP
// ============================================================================

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HiveApp() {
    val engine = remember { HiveEngine() }

    var gameState by remember { mutableStateOf(0) }
    fun bump() { gameState++ }

    var settings by remember {
        mutableStateOf(GameSettings(GameMode.AI, AIDifficulty.MEDIUM, ExpansionsConfig(), Player.ONE))
    }
    var isSetupOpen by remember { mutableStateOf(true) }
    var gameOver by remember { mutableStateOf<Player?>(null) }
    var isDraw by remember { mutableStateOf(false) }

    var selectedHex by remember { mutableStateOf<AxialHex?>(null) }
    var selectedReserveBug by remember { mutableStateOf<BugType?>(null) }
    var validDestinations by remember { mutableStateOf<List<AxialHex>>(emptyList()) }
    var pillbugTargetHex by remember { mutableStateOf<AxialHex?>(null) }
    var pillbugDestinations by remember { mutableStateOf<List<AxialHex>>(emptyList()) }
    var lastMovedHex by remember { mutableStateOf<AxialHex?>(null) }
    var isAITurn by remember { mutableStateOf(false) }
    var toast by remember { mutableStateOf<String?>(null) }
    var undoStack by remember { mutableStateOf<List<HiveEngine.EngineSnapshot>>(emptyList()) }

    val aiPlayer: Player = if (settings.humanColor == Player.ONE) Player.TWO else Player.ONE

    fun clearSelection() {
        selectedHex = null
        selectedReserveBug = null
        validDestinations = emptyList()
        pillbugTargetHex = null
        pillbugDestinations = emptyList()
    }

    fun applyForcedPasses() {
        var guard = 0
        while (guard < 100) {
            if (gameOver != null) break
            val cur = engine.currentPlayer
            val actions = engine.legalActions()
            if (actions.isNotEmpty()) break
            if (engine.board.isEmpty() && engine.p1Reserve.isEmpty() && engine.p2Reserve.isEmpty()) break

            val turn = engine.turnCountFor(cur)
            engine.history.add(MoveLogEntry(turn, cur, "Player $cur forced to pass (no legal moves)."))
            engine.switchTurn()
            bump()
            guard++
        }
    }

    // AI move trigger: launched in a persistent scope so it is never cancelled by recomposition
    val scope = rememberCoroutineScope()
    var executeMoveImpl: ((MoveAction) -> Unit)? = null

    fun requestAIMove() {
        if (settings.mode != GameMode.AI) return
        if (gameOver != null || isSetupOpen) return
        if (engine.currentPlayer != aiPlayer) return
        if (isAITurn) return

        isAITurn = true
        scope.launch {
            delay(600)

            val humanPlayer: Player = if (aiPlayer == Player.ONE) Player.TWO else Player.ONE
            val action = computeAIMove(
                engine.board,
                aiPlayer,
                engine.reserveFor(aiPlayer),
                engine.reserveFor(humanPlayer),
                engine.turnCountFor(aiPlayer),
                engine.turnCountFor(humanPlayer),
                settings.aiDifficulty,
                engine.lastMovedPieceId,
                settings.expansions
            )

            // Guard: game may have been restarted while the AI was thinking
            if (gameOver != null || engine.currentPlayer != aiPlayer || !isAITurn) {
                isAITurn = false
                bump()
                return@launch
            }

            if (action != null) {
                executeMoveImpl?.invoke(action)
            } else {
                undoStack = undoStack + engine.snapshot()
                val turn = engine.turnCountFor(engine.currentPlayer)
                engine.history.add(MoveLogEntry(turn, engine.currentPlayer, "AI (Player \${if (engine.currentPlayer == Player.ONE) 1 else 2}) forced to pass."))
                engine.switchTurn()
                toast = "AI has no valid moves. Turn passed."
                bump()
                applyForcedPasses()
                bump()
            }

            isAITurn = false
            bump()
            // If forced passes bounced the turn back to AI, keep playing
            requestAIMove()
        }
    }

    fun executeMove(action: MoveAction) {
        undoStack = undoStack + engine.snapshot()
        engine.executeMove(action)
        lastMovedHex = action.toHex
        clearSelection()

        val status = engine.checkGameStatus()
        if (status.isGameOver) {
            gameOver = status.winner
            isDraw = status.isDraw
            isAITurn = false
            bump()
            return
        }

        bump()
        applyForcedPasses()
        bump()
        requestAIMove()
    }

    executeMoveImpl = ::executeMove

    fun startNewGame(newSettings: GameSettings) {
        engine.initNewGame(newSettings.expansions)
        settings = newSettings
        gameOver = null
        isDraw = false
        clearSelection()
        lastMovedHex = null
        toast = null
        isAITurn = false
        undoStack = emptyList()
        isSetupOpen = false
        bump()
        requestAIMove()
    }

    fun handleUndo() {
        if (isAITurn || undoStack.isEmpty()) return

        // In AI mode, keep popping until it is the human player's turn again
        var restored = false
        while (undoStack.isNotEmpty()) {
            val snap = undoStack.last()
            undoStack = undoStack.dropLast(1)
            engine.restore(snap)
            restored = true
            if (settings.mode != GameMode.AI || engine.currentPlayer != aiPlayer) break
        }

        if (!restored) return

        clearSelection()
        lastMovedHex = null
        gameOver = null
        isDraw = false
        isAITurn = false
        toast = "Move undone."
        bump()
    }

    // Toast auto-dismiss
    LaunchedEffect(toast) {
        if (toast != null) {
            delay(2500)
            toast = null
        }
    }

    fun queenDue(): Boolean {
        return engine.turnCountFor(engine.currentPlayer) == 4 && !engine.isQueenPlaced(engine.currentPlayer)
    }

    fun handleReserveSelect(bug: BugType) {
        if (isAITurn || gameOver != null) return
        if (settings.mode == GameMode.AI && engine.currentPlayer == aiPlayer) return

        if (queenDue() && bug != BugType.QUEEN) {
            toast = "Queen Bee must be placed this turn (4th move rule)."
            return
        }

        selectedHex = null
        pillbugTargetHex = null
        pillbugDestinations = emptyList()

        if (selectedReserveBug == bug) {
            selectedReserveBug = null
            validDestinations = emptyList()
        } else {
            selectedReserveBug = bug
            validDestinations = engine.placementsForCurrent()
        }
    }

    fun handleHexClick(hex: AxialHex) {
        if (isAITurn || gameOver != null) return
        if (settings.mode == GameMode.AI && engine.currentPlayer == aiPlayer) return

        val isDest = validDestinations.any { it.q == hex.q && it.r == hex.r }
        val isPillbugDest = pillbugDestinations.any { it.q == hex.q && it.r == hex.r }

        // Placement
        if (selectedReserveBug != null && isDest) {
            if (queenDue() && selectedReserveBug != BugType.QUEEN) {
                toast = "Queen Bee must be placed this turn (4th move rule)."
                return
            }
            val reserve = engine.reserveFor(engine.currentPlayer)
            val piece = reserve.firstOrNull { it.type == selectedReserveBug } ?: return
            executeMove(
                MoveAction(
                    type = MoveAction.ActionType.PLACE,
                    pieceId = piece.id,
                    bugType = piece.type,
                    player = engine.currentPlayer,
                    toHex = hex
                )
            )
            return
        }

        // Move / Pillbug special
        if (selectedHex != null && (isDest || isPillbugDest)) {
            val topPiece = getTopPiece(engine.board, selectedHex!!) ?: return
            if (pillbugTargetHex != null && isPillbugDest) {
                executeMove(
                    MoveAction(
                        type = MoveAction.ActionType.PILLBUG_SPECIAL,
                        pieceId = topPiece.id,
                        bugType = topPiece.type,
                        player = engine.currentPlayer,
                        fromHex = selectedHex,
                        pillbugTargetHex = pillbugTargetHex,
                        toHex = hex
                    )
                )
            } else {
                executeMove(
                    MoveAction(
                        type = MoveAction.ActionType.MOVE,
                        pieceId = topPiece.id,
                        bugType = topPiece.type,
                        player = engine.currentPlayer,
                        fromHex = selectedHex,
                        toHex = hex
                    )
                )
            }
            return
        }

        // Select piece
        val stack = engine.board[hex.key()]
        val topPiece = stack?.lastOrNull()

        selectedReserveBug = null

        if (selectedHex != null && selectedHex!!.q == hex.q && selectedHex!!.r == hex.r) {
            clearSelection()
            return
        }

        if (topPiece != null && topPiece.player == engine.currentPlayer) {
            selectedHex = hex
            validDestinations = engine.movesFor(hex)

            val effectiveTypes = engine.effectiveTypes(hex, topPiece)
            if (effectiveTypes.contains(BugType.PILLBUG)) {
                val targets = engine.pillbugTargets(hex)
                if (targets.isNotEmpty()) {
                    pillbugTargetHex = targets[0].targetHex
                    pillbugDestinations = targets[0].destinationHexes
                } else {
                    pillbugTargetHex = null
                    pillbugDestinations = emptyList()
                }
            } else {
                pillbugTargetHex = null
                pillbugDestinations = emptyList()
            }
        } else {
            clearSelection()
        }
    }

    MaterialTheme(
        colorScheme = if (isSystemInDarkTheme()) DarkColors else LightColors
    ) {
        Scaffold(
            topBar = {
                TopAppBar(
                    modifier = Modifier.height(74.dp),
                    title = {
                        Column(modifier = Modifier.padding(top = 14.dp)) {
                            Text("🐝 Hive Strategy", fontWeight = FontWeight.Black)
                            Text(
                                text = when {
                                    gameOver != null -> "Game Over"
                                    isAITurn -> "AI Thinking..."
                                    settings.mode == GameMode.AI -> "VS AI (\${settings.aiDifficulty})"
                                    else -> "Pass & Play"
                                },
                                fontSize = 15.sp,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                    },
                    actions = {
                        Text(
                            text = if (gameOver != null)
                                "Winner: \${if (gameOver == Player.ONE) "White" else if (gameOver == Player.TWO) "Black" else "Draw"}"
                            else
                                "Turn: P\${if (engine.currentPlayer == Player.ONE) 1 else 2} · T\${gameState}",
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Bold,
                            color = if (engine.currentPlayer == Player.ONE)
                                MaterialTheme.colorScheme.primary
                            else
                                if (isSystemInDarkTheme()) Color(0xFF93C5FD) else Color(0xFF1D4ED8),
                            modifier = Modifier.align(Alignment.CenterVertically)
                        )
                        Spacer(Modifier.width(8.dp))
                        IconButton(
                            onClick = { handleUndo() },
                            enabled = undoStack.isNotEmpty() && !isAITurn
                        ) {
                            Text(
                                text = "\\u21B6",
                                fontSize = 24.sp,
                                fontWeight = FontWeight.Bold,
                                color = if (undoStack.isNotEmpty() && !isAITurn)
                                    MaterialTheme.colorScheme.primary
                                else
                                    MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                        IconButton(onClick = { isSetupOpen = true }) {
                            Icon(Icons.Default.Settings, contentDescription = "Settings")
                        }
                    },
                    colors = TopAppBarDefaults.topAppBarColors(
                        containerColor = MaterialTheme.colorScheme.background
                    )
                )
            }
        ) { paddingValues ->
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(paddingValues)
                    .background(MaterialTheme.colorScheme.background)
            ) {
                Column(
                    modifier = Modifier.fillMaxSize()
                ) {
                    // Main Interactive Hexagon Canvas (fills space above reserve bar)
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .weight(1f)
                    ) {
                        HexCanvasBoard(
                            board = engine.board,
                            selectedHex = selectedHex,
                            validDestinations = validDestinations,
                            pillbugTargetHex = pillbugTargetHex,
                            pillbugDestinations = pillbugDestinations,
                            lastMovedHex = lastMovedHex,
                            onHexClick = { hex -> handleHexClick(hex) }
                        )

                        // Toast notification
                        toast?.let { msg ->
                            Surface(
                                color = Color(0xFFF59E0B),
                                shape = RoundedCornerShape(16.dp),
                                modifier = Modifier
                                    .align(Alignment.BottomCenter)
                                    .padding(12.dp)
                            ) {
                                Text(
                                    text = msg,
                                    color = Color.Black,
                                    fontWeight = FontWeight.Bold,
                                    fontSize = 13.sp,
                                    modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp)
                                )
                            }
                        }

                        // Move Log Overlay
                        MoveLogOverlay(
                            history = engine.history,
                            modifier = Modifier
                                .align(Alignment.TopEnd)
                                .padding(12.dp)
                        )
                    }

                    // Reserve Bar at Bottom
                    ReserveBar(
                        reserve = engine.reserveFor(engine.currentPlayer),
                        selectedBug = selectedReserveBug,
                        isEnabled = !isAITurn && gameOver == null &&
                            !(settings.mode == GameMode.AI && engine.currentPlayer == aiPlayer),
                        queenDue = queenDue(),
                        onSelectBug = { bug -> handleReserveSelect(bug) },
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(12.dp)
                    )
                }

                // New Game / Setup Modal
                if (isSetupOpen) {
                    SetupModal(
                        currentSettings = settings,
                        onStart = { newSettings ->
                            startNewGame(newSettings)
                        },
                        onDismiss = {
                            if (gameOver != null || engine.board.isNotEmpty()) isSetupOpen = false
                        }
                    )
                }

                // Game Over Dialog
                if (gameOver != null) {
                    GameOverDialog(
                        winner = gameOver,
                        isDraw = isDraw,
                        onRematch = { startNewGame(settings) },
                        onNewSetup = {
                            gameOver = null
                            isDraw = false
                            isSetupOpen = true
                        }
                    )
                }
            }
        }
    }
}

private fun hexToPixel(hex: AxialHex, radius: Float): Offset {
    val x = radius * sqrt(3f) * (hex.q + hex.r / 2f)
    val y = radius * 1.5f * hex.r
    return Offset(x, y)
}

private fun pixelToHex(pos: Offset, center: Offset, radius: Float): AxialHex {
    val relX = pos.x - center.x
    val relY = pos.y - center.y

    val r = (2.0 / 3.0) * (relY / radius)
    var q = (relX / (radius * sqrt(3.0))) - r / 2.0

    val s = -q - r
    var rq = round(q).toInt()
    var rr = round(r).toInt()
    var rs = round(s).toInt()

    val dq = abs(rq - q)
    val dr = abs(rr - r)
    val ds = abs(rs - s)

    if (dq > dr && dq > ds) rq = -rr - rs
    else if (dr > ds) rr = -rq - rs

    return AxialHex(rq, rr)
}

@Composable
fun HexCanvasBoard(
    board: Map<String, List<Piece>>,
    selectedHex: AxialHex?,
    validDestinations: List<AxialHex>,
    pillbugTargetHex: AxialHex?,
    pillbugDestinations: List<AxialHex>,
    lastMovedHex: AxialHex?,
    onHexClick: (AxialHex) -> Unit
) {
    var scale by remember { mutableStateOf(1f) }
    var pan by remember { mutableStateOf(Offset.Zero) }
    var canvasSize by remember { mutableStateOf(Size.Zero) }
    val baseRadius = 42.dp
    val surfaceVariant = MaterialTheme.colorScheme.surfaceVariant
    val outline = MaterialTheme.colorScheme.outline

    // Collect all hexes to render
    val renderMap = mutableMapOf<String, AxialHex>()

    board.forEach { (key, stack) ->
        if (stack.isNotEmpty()) {
            val hex = parseKey(key)
            renderMap[key] = hex
            for (n in hex.getNeighbors()) {
                if (!renderMap.containsKey(n.key())) renderMap[n.key()] = n
            }
        }
    }

    // Empty board: render center + neighbors
    if (renderMap.isEmpty()) {
        val center = AxialHex(0, 0)
        renderMap[center.key()] = center
        for (n in center.getNeighbors()) renderMap[n.key()] = n
    }

    validDestinations.forEach { renderMap[it.key()] = it }
    pillbugDestinations.forEach { renderMap[it.key()] = it }
    selectedHex?.let { renderMap[it.key()] = it }
    pillbugTargetHex?.let { renderMap[it.key()] = it }

    val textMeasurer = rememberTextMeasurer()

    Canvas(
        modifier = Modifier
            .fillMaxSize()
            .onSizeChanged { canvasSize = Size(it.width.toFloat(), it.height.toFloat()) }
            .pointerInput(Unit) {
                detectTransformGestures { _, gesturePan, gestureZoom, _ ->
                    scale = (scale * gestureZoom).coerceIn(0.4f, 2.5f)
                    pan += gesturePan
                }
            }
            .pointerInput(Unit) {
                detectTapGestures { tap ->
                    val center = Offset(canvasSize.width / 2f + pan.x, canvasSize.height / 2f + pan.y)
                    val hexRadius = baseRadius.toPx() * scale
                    val hex = pixelToHex(Offset(tap.x, tap.y), center, hexRadius)
                    onHexClick(hex)
                }
            }
    ) {
        val center = Offset(size.width / 2f + pan.x, size.height / 2f + pan.y)
        val hexRadius = baseRadius.toPx() * scale

        renderMap.values.forEach { hex ->
            val rel = hexToPixel(hex, hexRadius)
            val x = center.x + rel.x
            val y = center.y + rel.y

            val stack = board[hex.key()]
            val isOccupiedTile = stack != null && stack.isNotEmpty()
            val topPiece = stack?.lastOrNull()
            val stackHeight = stack?.size ?: 0

            val isSelected = selectedHex?.let { it.q == hex.q && it.r == hex.r } == true
            val isValidDest = validDestinations.any { it.q == hex.q && it.r == hex.r }
            val isPillbugTarget = pillbugTargetHex?.let { it.q == hex.q && it.r == hex.r } == true
            val isPillbugDest = pillbugDestinations.any { it.q == hex.q && it.r == hex.r }
            val isLastMoved = lastMovedHex?.let { it.q == hex.q && it.r == hex.r } == true

            val path = Path().apply {
                for (i in 0..5) {
                    val angle = (60 * i - 30) * Math.PI / 180.0
                    val px = x + hexRadius * cos(angle).toFloat()
                    val py = y + hexRadius * sin(angle).toFloat()
                    if (i == 0) moveTo(px, py) else lineTo(px, py)
                }
                close()
            }

            val fillColor = when {
                isOccupiedTile && topPiece?.player == Player.ONE -> Color(0xFFF8FAFC)
                isOccupiedTile -> Color(0xFF1E293B)
                isValidDest || isPillbugDest -> Color(0x2E10B981)
                isPillbugTarget -> Color(0x2EEC4899)
                else -> surfaceVariant
            }
            val strokeColor = when {
                isSelected -> Color(0xFFF59E0B)
                isPillbugTarget -> Color(0xFFEC4899)
                isLastMoved -> Color(0xFF3B82F6)
                isValidDest || isPillbugDest -> Color(0xFF10B981)
                isOccupiedTile -> outline
                else -> outline
            }
            val strokeWidth = when {
                isSelected -> 4f
                isPillbugTarget -> 3.5f
                isLastMoved -> 3f
                isValidDest || isPillbugDest -> 2.5f
                else -> 1.5f
            }

            drawPath(path, color = fillColor)
            drawPath(path, color = strokeColor, style = Stroke(width = strokeWidth))

            if (isOccupiedTile && topPiece != null) {
                val emojiSizeSp = with(density) { (hexRadius * 1.05f).toSp() }
                val layout = textMeasurer.measure(
                    AnnotatedString(topPiece.type.emoji),
                    style = TextStyle(fontSize = emojiSizeSp)
                )
                drawText(
                    layout,
                    topLeft = Offset(x - layout.size.width / 2f, y - layout.size.height / 2f)
                )

                if (stackHeight > 1) {
                    val badge = textMeasurer.measure(
                        AnnotatedString(stackHeight.toString()),
                        style = TextStyle(fontSize = 12.sp, color = Color.Black, fontWeight = FontWeight.Bold)
                    )
                    val badgeCenter = Offset(x + hexRadius * 0.72f, y - hexRadius * 0.72f)
                    drawCircle(color = Color(0xFFF59E0B), radius = 12f, center = badgeCenter)
                    drawText(
                        badge,
                        topLeft = Offset(
                            badgeCenter.x - badge.size.width / 2f,
                            badgeCenter.y - badge.size.height / 2f
                        )
                    )
                }

                // Player indicator dot
                val dotColor = if (topPiece.player == Player.ONE) Color.White else Color.Black
                drawCircle(
                    color = dotColor,
                    radius = 7f,
                    center = Offset(x - hexRadius * 0.7f, y - hexRadius * 0.7f)
                )
                drawCircle(
                    color = if (topPiece.player == Player.ONE) Color(0xFFCBD5E1) else Color(0xFF64748B),
                    radius = 7f,
                    center = Offset(x - hexRadius * 0.7f, y - hexRadius * 0.7f),
                    style = Stroke(width = 1.5f)
                )
            } else if (isValidDest || isPillbugDest) {
                drawCircle(
                    color = Color(0xFF10B981),
                    radius = 9f,
                    center = Offset(x, y)
                )
            }
        }
    }
}

@Composable
fun ReserveBar(
    reserve: List<Piece>,
    selectedBug: BugType?,
    isEnabled: Boolean,
    queenDue: Boolean,
    onSelectBug: (BugType) -> Unit,
    modifier: Modifier = Modifier
) {
    val grouped = reserve.groupBy { it.type }
    val colors = MaterialTheme.colorScheme

    Surface(
        shape = RoundedCornerShape(24.dp),
        color = colors.surface,
        tonalElevation = 8.dp,
        modifier = modifier.fillMaxWidth()
    ) {
        LazyRow(
            contentPadding = PaddingValues(14.dp),
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            items(grouped.entries.toList()) { entry ->
                val bug = entry.key
                val count = entry.value.size
                val isSelected = selectedBug == bug
                val cardEnabled = isEnabled && !(queenDue && bug != BugType.QUEEN)

                Box(
                    modifier = Modifier
                        .clip(RoundedCornerShape(18.dp))
                        .background(
                            when {
                                isSelected -> colors.primary
                                !cardEnabled -> colors.background
                                else -> colors.surfaceVariant
                            }
                        )
                        .border(
                            width = if (isSelected) 2.dp else 1.dp,
                            color = if (isSelected) colors.primary else colors.outline,
                            shape = RoundedCornerShape(18.dp)
                        )
                        .clickable(enabled = cardEnabled) { onSelectBug(bug) }
                        .sizeIn(minHeight = 96.dp, minWidth = 112.dp)
                        .padding(horizontal = 12.dp, vertical = 10.dp),
                    contentAlignment = Alignment.Center
                ) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Text(
                            text = bug.emoji,
                            fontSize = 46.sp,
                            color = if (isSelected) colors.onPrimary else colors.onSurface
                        )
                        Spacer(Modifier.height(4.dp))
                        Text(
                            text = bug.title,
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Bold,
                            color = if (isSelected) colors.onPrimary else colors.onSurfaceVariant,
                            maxLines = 1
                        )
                    }

                    // Count badge
                    Box(
                        modifier = Modifier
                            .align(Alignment.TopEnd)
                            .padding(6.dp)
                            .size(28.dp)
                            .clip(CircleShape)
                            .background(if (isSelected) colors.onPrimary else colors.primary),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = "$count",
                            fontSize = 14.sp,
                            fontWeight = FontWeight.Black,
                            color = if (isSelected) colors.primary else colors.onPrimary
                        )
                    }
                }
            }
        }
    }
}

@Composable
fun MoveLogOverlay(history: List<MoveLogEntry>, modifier: Modifier = Modifier) {
    var expanded by remember { mutableStateOf(false) }

    val colors = MaterialTheme.colorScheme

    Row(
        modifier = modifier,
        verticalAlignment = Alignment.CenterVertically
    ) {
        // Toggle tab pinned to the side
        Surface(
            shape = RoundedCornerShape(10.dp),
            color = colors.surface.copy(alpha = 0.9f),
            border = BorderStroke(1.dp, colors.outline),
            onClick = { expanded = !expanded }
        ) {
            Text(
                text = if (expanded) "❯" else "❮",
                fontSize = 18.sp,
                fontWeight = FontWeight.Black,
                color = colors.primary,
                modifier = Modifier
                    .padding(horizontal = 8.dp, vertical = 14.dp)
            )
        }

        if (expanded) {
            Spacer(Modifier.width(4.dp))
            Surface(
                shape = RoundedCornerShape(12.dp),
                color = colors.background.copy(alpha = 0.9f),
                border = BorderStroke(1.dp, colors.outline)
            ) {
                LazyColumn(contentPadding = PaddingValues(8.dp)) {
                    item {
                        Text(
                            "Move Log",
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Bold,
                            color = colors.onSurfaceVariant
                        )
                    }
                    items(history.takeLast(8).reversed()) { entry ->
                        Text(
                            text = "\${entry.turn}. P\${if (entry.player == Player.ONE) 1 else 2}: \${entry.text}",
                            fontSize = 11.sp,
                            color = colors.onSurface,
                            modifier = Modifier.padding(vertical = 1.dp)
                        )
                    }
                }
            }
        }
    }
}

@OptIn(ExperimentalLayoutApi::class)
@Composable
fun SetupModal(
    currentSettings: GameSettings,
    onStart: (GameSettings) -> Unit,
    onDismiss: () -> Unit
) {
    var mode by remember { mutableStateOf(currentSettings.mode) }
    var diff by remember { mutableStateOf(currentSettings.aiDifficulty) }
    var humanColor by remember { mutableStateOf(currentSettings.humanColor) }
    var mosquito by remember { mutableStateOf(currentSettings.expansions.mosquito) }
    var ladybug by remember { mutableStateOf(currentSettings.expansions.ladybug) }
    var pillbug by remember { mutableStateOf(currentSettings.expansions.pillbug) }
    var showRules by remember { mutableStateOf(false) }

    if (showRules) {
        RulesDialog(onClose = { showRules = false })
        return
    }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("🐝 New Hive Game", fontWeight = FontWeight.Bold) },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                Text("Select Game Mode:", fontWeight = FontWeight.SemiBold)
                Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    FilterChip(
                        selected = mode == GameMode.PASS_AND_PLAY,
                        onClick = { mode = GameMode.PASS_AND_PLAY },
                        label = { Text("Pass & Play") }
                    )
                    FilterChip(
                        selected = mode == GameMode.AI,
                        onClick = { mode = GameMode.AI },
                        label = { Text("VS AI Engine") }
                    )
                }

                if (mode == GameMode.AI) {
                    Text("AI Difficulty:", fontWeight = FontWeight.SemiBold)
                    FlowRow(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        AIDifficulty.values().forEach { d ->
                            FilterChip(
                                selected = diff == d,
                                onClick = { diff = d },
                                label = { Text(d.name) }
                            )
                        }
                    }

                    Text("You play as:", fontWeight = FontWeight.SemiBold)
                    Row(
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        FilterChip(
                            selected = humanColor == Player.ONE,
                            onClick = { humanColor = Player.ONE },
                            label = { Text("White (P1)") },
                            modifier = Modifier.weight(1f)
                        )
                        FilterChip(
                            selected = humanColor == Player.TWO,
                            onClick = { humanColor = Player.TWO },
                            label = { Text("Black (P2)") },
                            modifier = Modifier.weight(1f)
                        )
                    }
                }

                Text("Expansions:", fontWeight = FontWeight.SemiBold)
                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    FilterChip(
                        selected = mosquito,
                        onClick = { mosquito = !mosquito },
                        label = { Text("🦟 Mosquito") },
                        modifier = Modifier.fillMaxWidth()
                    )
                    FilterChip(
                        selected = ladybug,
                        onClick = { ladybug = !ladybug },
                        label = { Text("🐞 Ladybug") },
                        modifier = Modifier.fillMaxWidth()
                    )
                    FilterChip(
                        selected = pillbug,
                        onClick = { pillbug = !pillbug },
                        label = { Text("💊 Pillbug") },
                        modifier = Modifier.fillMaxWidth()
                    )
                }
            }
        },
        confirmButton = {
            Button(
                onClick = {
                    onStart(
                        GameSettings(
                            mode = mode,
                            aiDifficulty = diff,
                            expansions = ExpansionsConfig(mosquito, ladybug, pillbug),
                            humanColor = humanColor
                        )
                    )
                }
            ) {
                Text("Start Match")
            }
        },
        dismissButton = {
            TextButton(onClick = { showRules = true }) { Text("📖 Learn to Play") }
        }
    )
}

@Composable
fun RulesDialog(onClose: () -> Unit) {
    AlertDialog(
        onDismissRequest = onClose,
        title = { Text("How to Play Hive", fontWeight = FontWeight.Bold) },
        text = {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .verticalScroll(rememberScrollState())
                    .padding(vertical = 4.dp),
                verticalArrangement = Arrangement.spacedBy(6.dp)
            ) {
                Text(
                    "🎯 Goal: Surround the opponent's Queen Bee with pieces on all six sides. " +
                        "First to do so wins; both surrounded at once is a draw.",
                    fontSize = 13.sp
                )
                Text("📜 Core Rules", fontWeight = FontWeight.Bold)
                Text(
                    "• Play one piece per turn (placement) or move one of your pieces.\\n" +
                        "• Your Queen Bee must be introduced by your 4th turn.\\n" +
                        "• Your first piece is placed anywhere; later pieces must be placed adjacent " +
                        "to one of your pieces. Except for your second placement, pieces may not be " +
                        "placed touching an opponent's piece.\\n" +
                        "• The Hive must always stay connected. You may never move a piece that would " +
                        "split the Hive, and you may not move a piece into a gap unless it still fits " +
                        "the freedom-to-move rule (no squeezing between stacked pieces).",
                    fontSize = 13.sp
                )
                Text("🦗 Insect Movements", fontWeight = FontWeight.Bold)

                Text(
                    "🐝 Queen Bee — moves exactly 1 hex per turn.",
                    fontSize = 13.sp
                )
                Text(
                    "🕷️ Spider — crawls exactly 3 hexes along the outside edge, never retracing.",
                    fontSize = 13.sp
                )
                Text(
                    "🪲 Beetle — moves 1 hex and can climb on top of other pieces (including a " +
                        "Queen) to block them; a beetle on top moves like a beetle over the stack.",
                    fontSize = 13.sp
                )
                Text(
                    "🦗 Grasshopper — jumps in a straight line over at least one piece, landing on " +
                        "the first empty hex in that line.",
                    fontSize = 13.sp
                )
                Text(
                    "🐜 Soldier Ant — may slide any number of hexes along the outside of the Hive.",
                    fontSize = 13.sp
                )
                Text(
                    "🦟 Mosquito — copies the movement (or pillbug ability) of any piece it touches.",
                    fontSize = 13.sp
                )
                Text(
                    "🐞 Ladybug — moves exactly 2 hexes on top of the Hive, then 1 hex back down " +
                        "to the board (may land on empty board hexes).",
                    fontSize = 13.sp
                )
                Text(
                    "🪳 Pillbug — may not move itself, but it can move an adjacent enemy or friendly " +
                        "piece 2 hexes: up onto itself, then down into an adjacent empty space. The " +
                        "moved piece is stunned and cannot move on the opponent's next turn.",
                    fontSize = 13.sp
                )
            }
        },
        confirmButton = {
            TextButton(onClick = onClose) { Text("Got it") }
        }
    )
}

@Composable
fun GameOverDialog(
    winner: Player?,
    isDraw: Boolean,
    onRematch: () -> Unit,
    onNewSetup: () -> Unit
) {
    val title = if (isDraw) "Draw!" else "Player \${if (winner == Player.ONE) 1 else 2} Wins!"

    AlertDialog(
        onDismissRequest = {},
        title = { Text("🏆 $title", fontWeight = FontWeight.Bold) },
        text = {
            Text(
                if (isDraw) "Both Queens are surrounded. It's a draw!"
                else "The Queen of Player \${if (winner == Player.ONE) 2 else 1} is surrounded. Well played!"
            )
        },
        confirmButton = {
            Button(onClick = onRematch) { Text("Rematch") }
        },
        dismissButton = {
            TextButton(onClick = onNewSetup) { Text("New Game Setup") }
        }
    )
}

// ============================================================================
// 5. ACTIVITY ENTRY POINT
// ============================================================================

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            HiveApp()
        }
    }
}
`,Jv=({isOpen:o,onClose:d})=>{const[h,s]=J.useState(!1);if(!o)return null;const S=()=>{navigator.clipboard.writeText(_s),s(!0),setTimeout(()=>s(!1),2e3)},E=()=>{const H=new Blob([_s],{type:"text/plain;charset=utf-8"}),j=URL.createObjectURL(H),p=document.createElement("a");p.href=j,p.download="HiveApp.kt",document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(j)};return f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full h-[85vh] flex flex-col shadow-2xl overflow-hidden",children:[f.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl",children:f.jsx(um,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("h3",{className:"font-bold text-slate-100 text-sm flex items-center gap-2",children:[f.jsx("span",{children:"Single-File Android Source Code"}),f.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700",children:"HiveApp.kt (Jetpack Compose)"})]}),f.jsx("p",{className:"text-xs text-slate-400",children:"Complete Kotlin application logic, Compose canvas, AI minimax, and game loop."})]})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("button",{onClick:S,className:"px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors",children:[h?f.jsx(sv,{className:"w-4 h-4 text-emerald-400"}):f.jsx(vv,{className:"w-4 h-4"}),f.jsx("span",{children:h?"Copied!":"Copy Code"})]}),f.jsxs("button",{onClick:E,className:"px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors",children:[f.jsx(gv,{className:"w-4 h-4"}),f.jsx("span",{children:"Download .kt"})]}),f.jsx("button",{onClick:d,className:"p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors",children:f.jsx(cm,{className:"w-5 h-5"})})]})]}),f.jsx("div",{className:"flex-1 overflow-auto p-6 bg-slate-950 font-mono text-xs leading-relaxed text-slate-300",children:f.jsx("pre",{className:"select-text whitespace-pre-wrap",children:_s})})]})})};function Fv(){const[o,d]=J.useState({mode:"AI",aiDifficulty:"MEDIUM",expansions:{mosquito:!0,ladybug:!0,pillbug:!0}}),[h,s]=J.useState(new Map),[S,E]=J.useState([]),[H,j]=J.useState([]),[p,g]=J.useState(1),[D,z]=J.useState(1),[_,X]=J.useState(1),[F,se]=J.useState(null),[We,He]=J.useState(null),[_e,de]=J.useState([]),[he,Xe]=J.useState([]),[ge,Z]=J.useState(null),[Re,Ze]=J.useState(null),[wt,Ae]=J.useState([]),[Pe,Q]=J.useState(null),[Ce,oe]=J.useState([]),[T,R]=J.useState(!1),[k,$]=J.useState(null),[me,m]=J.useState(!0),[N,U]=J.useState(!1),[L,P]=J.useState(!1),I=(q,te)=>{const fe=[];return Object.keys(sa).forEach(Ne=>{const ke=sa[Ne];if(!ke.isExpansion||Ne==="MOSQUITO"&&te.mosquito||Ne==="LADYBUG"&&te.ladybug||Ne==="PILLBUG"&&te.pillbug)for(let rt=0;rt<ke.count;rt++)fe.push({id:`p${q}_${Ne}_${rt}`,type:Ne,player:q})}),fe},ae=J.useCallback(q=>{d(q),s(new Map),E(I(1,q.expansions)),j(I(2,q.expansions)),g(1),z(1),X(1),se(null),He(null),de([]),Xe([]),Z(null),Ze(null),Ae([]),Q(null),oe([]),R(!1),m(!1),U(!1),$(null)},[]),Be=J.useCallback((q,te,fe,Ne,ke,rt,Ue,Nt)=>{const Oe={board:Array.from(q.entries()).map(([xt,wn])=>[xt,[...wn]]),p1Reserve:[...te],p2Reserve:[...fe],currentPlayer:Ne,turnCountP1:ke,turnCountP2:rt,lastMovedPieceId:Ue,moveHistory:[...Nt]};Xe(xt=>[...xt,Oe])},[]),xe=J.useCallback(()=>{if(he.length===0||T)return;let q=1;o.mode==="AI"&&he.length>=2&&(q=2);const te=Math.max(0,he.length-q),fe=he[te],Ne=new Map;fe.board.forEach(([ke,rt])=>Ne.set(ke,[...rt])),s(Ne),E([...fe.p1Reserve]),j([...fe.p2Reserve]),g(fe.currentPlayer),z(fe.turnCountP1),X(fe.turnCountP2),se(fe.lastMovedPieceId),de([...fe.moveHistory]),Xe(ke=>ke.slice(0,te)),Z(null),Ze(null),Ae([]),Q(null),oe([])},[he,T,o.mode]),$e=Ls(h);J.useEffect(()=>{$e.isGameOver&&!N&&U(!0)},[$e,N]),J.useEffect(()=>{if($e.isGameOver)return;const q=p===1?S:H,te=p===1?D:_;if(Us(h,p,q,te,F,o.expansions).length===0&&(h.size>0||S.length>0)){$(`Player ${p} has no legal moves available. Turn passed!`),setTimeout(()=>$(null),3e3);const Ne={turnNumber:te,player:p,actionType:"PASS",bugType:"QUEEN",description:`Player ${p} was forced to pass turn.`};de(ke=>[...ke,Ne]),g(p===1?2:1)}},[p,h,S,H,D,_,F,o.expansions,$e.isGameOver]),J.useEffect(()=>{if(o.mode==="AI"&&p===2&&!$e.isGameOver&&!T){R(!0);const q=setTimeout(()=>{const te=Kp(h,2,H,S,_,D,o.aiDifficulty,F,o.expansions);te?Jt(te):($("AI (Player 2) has no valid moves. Turn passed!"),setTimeout(()=>$(null),3e3),g(1)),R(!1)},600);return()=>clearTimeout(q)}},[p,o,h,S,H,D,_,F,$e.isGameOver,T]);const Jt=q=>{Be(h,S,H,p,D,_,F,_e);const te=fu(h);let fe=[...S],Ne=[...H],ke="";if(q.type==="PLACE"){if(q.player===1){const Oe=fe.findIndex(xt=>xt.id===q.pieceId);Oe!==-1&&fe.splice(Oe,1)}else{const Oe=Ne.findIndex(xt=>xt.id===q.pieceId);Oe!==-1&&Ne.splice(Oe,1)}const Ue={id:q.pieceId,type:q.bugType,player:q.player},Nt=le(q.toHex.q,q.toHex.r),Ct=te.get(Nt)||[];te.set(Nt,[...Ct,Ue]),ke=`Placed ${sa[q.bugType].name} at (${q.toHex.q}, ${q.toHex.r})`,He({to:q.toHex})}else if(q.type==="MOVE"&&q.fromHex){const Ue=le(q.fromHex.q,q.fromHex.r),Nt=te.get(Ue)||[],Ct=Nt.pop();if(Nt.length===0&&te.delete(Ue),Ct){const Oe=le(q.toHex.q,q.toHex.r),xt=te.get(Oe)||[];te.set(Oe,[...xt,Ct])}ke=`Moved ${sa[q.bugType].name} from (${q.fromHex.q}, ${q.fromHex.r}) to (${q.toHex.q}, ${q.toHex.r})`,He({from:q.fromHex,to:q.toHex})}else if(q.type==="PILLBUG_SPECIAL"&&q.pillbugTargetHex){const Ue=le(q.pillbugTargetHex.q,q.pillbugTargetHex.r),Nt=te.get(Ue)||[],Ct=Nt.pop();if(Nt.length===0&&te.delete(Ue),Ct){const Oe=le(q.toHex.q,q.toHex.r),xt=te.get(Oe)||[];te.set(Oe,[...xt,Ct])}ke=`Pillbug moved ${Ct?sa[Ct.type].name:"piece"} from (${q.pillbugTargetHex.q}, ${q.pillbugTargetHex.r}) to (${q.toHex.q}, ${q.toHex.r})`,He({from:q.pillbugTargetHex,to:q.toHex})}s(te),E(fe),j(Ne),se(q.pieceId);const rt={turnNumber:p===1?D:_,player:p,actionType:q.type,bugType:q.bugType,from:q.fromHex,to:q.toHex,description:ke};de(Ue=>[...Ue,rt]),Z(null),Ze(null),Ae([]),Q(null),oe([]),p===1?(z(Ue=>Ue+1),g(2)):(X(Ue=>Ue+1),g(1))},Vl=q=>{if(!T)if(Z(null),Q(null),oe([]),Re===q)Ze(null),Ae([]);else{Ze(q);const te=$d(h,p);Ae(te)}},Vn=q=>{if(T)return;const te=h.get(le(q.q,q.r)),fe=te&&te.length>0?te[te.length-1]:null;if(Ze(null),ge&&ge.q===q.q&&ge.r===q.r){Z(null),Ae([]),Q(null),oe([]);return}if(fe&&fe.player===p){Z(q);const ke=em(h,q,p,p===1?D:_,F,o.expansions);if(Ae(ke),qs(h,q,fe,o.expansions).includes("PILLBUG")){const Ue=lm(h,q,p,F);Ue.length>0&&(Q(Ue[0].targetHex),oe(Ue[0].destinationHexes))}else Q(null),oe([])}},Ft=q=>{if(T)return;const te=p===1?S:H;if(Re){const fe=te.find(Ne=>Ne.type===Re);fe&&Jt({type:"PLACE",pieceId:fe.id,bugType:Re,player:p,toHex:q})}else if(ge){const fe=du(h,ge);fe&&(Pe&&Ce.some(Ne=>Ne.q===q.q&&Ne.r===q.r)?Jt({type:"PILLBUG_SPECIAL",pieceId:fe.id,bugType:fe.type,player:p,fromHex:ge,pillbugTargetHex:Pe,toHex:q}):Jt({type:"MOVE",pieceId:fe.id,bugType:fe.type,player:p,fromHex:ge,toHex:q}))}};return f.jsxs("div",{className:"flex flex-col h-screen w-screen bg-slate-950 text-slate-100 font-sans overflow-hidden",children:[f.jsxs("header",{className:"bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between shadow-md z-30",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-2xl",children:"🐝"}),f.jsxs("h1",{className:"text-lg font-black tracking-tight text-amber-400",children:["HIVE ",f.jsx("span",{className:"text-slate-400 text-xs font-normal",children:"Strategy"})]})]}),f.jsx("span",{className:"hidden sm:inline-block text-sm font-semibold px-3 pt-1.5 pb-2.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 translate-y-2.5",children:o.mode==="AI"?`VS AI (${o.aiDifficulty})`:"Pass & Play"})]}),f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("div",{className:`px-3 py-1.5 rounded-full border text-xs font-bold flex items-center gap-2 shadow-sm ${p===1?"bg-slate-800 border-amber-400 text-amber-300":"bg-slate-900 border-blue-400 text-blue-300"}`,children:[f.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${p===1?"bg-white":"bg-slate-950 border border-slate-500"} ${T?"animate-ping":""}`}),f.jsx("span",{children:T?"AI Thinking...":`Player ${p}'s Turn (${p===1?"White":"Black"})`})]}),f.jsxs("div",{className:"flex items-center gap-1",children:[f.jsx("button",{onClick:xe,disabled:he.length===0||T,className:`p-2 rounded-xl border transition-colors ${he.length>0&&!T?"bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white":"bg-slate-950/50 border-slate-800/50 text-slate-600 cursor-not-allowed"}`,title:"Undo Move (Unlimited Step Rewind)",children:f.jsx(Cv,{className:"w-4 h-4"})}),f.jsx("button",{onClick:()=>m(!0),className:"p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors",title:"New Game / Match Settings",children:f.jsx(Dv,{className:"w-4 h-4"})}),f.jsxs("button",{onClick:()=>P(!0),className:"p-2 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-400 hover:bg-amber-500/20 transition-colors flex items-center gap-1.5 text-xs font-bold",title:"View & Export Android Kotlin Compose Code",children:[f.jsx(um,{className:"w-4 h-4"}),f.jsx("span",{className:"hidden md:inline",children:"Kotlin Source"})]})]})]})]}),k&&f.jsxs("div",{className:"fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-2xl shadow-xl border border-amber-300 text-xs flex items-center gap-2 animate-bounce",children:[f.jsx(im,{className:"w-4 h-4"}),f.jsx("span",{children:k})]}),f.jsxs("div",{className:"flex-1 flex flex-col md:flex-row relative overflow-hidden",children:[f.jsxs("div",{className:"hidden md:flex flex-col w-72 p-4 bg-slate-950/80 border-r border-slate-800/80 overflow-y-auto z-10 shrink-0 gap-4",children:[f.jsx(js,{player:1,reserve:S,isActive:p===1&&!T,selectedBugType:p===1?Re:null,onSelectBugType:Vl,turnCount:D,queenPlaced:kl(h,1),isAITurn:o.mode==="AI"&&o.humanColor==="BLACK"}),f.jsx(js,{player:2,reserve:H,isActive:p===2&&!T,selectedBugType:p===2?Re:null,onSelectBugType:Vl,turnCount:_,queenPlaced:kl(h,2),isAITurn:o.mode==="AI"&&o.humanColor==="WHITE"})]}),f.jsxs("div",{className:"flex-1 relative h-full",children:[f.jsx(wv,{board:h,selectedHex:ge,validDestinations:wt,pillbugTargetHex:Pe,pillbugDestinations:Ce,onSelectHex:Vn,onSelectDestination:Ft,currentPlayer:p,isAITurn:T,lastMovedHex:We}),f.jsx("div",{className:"absolute bottom-4 right-4 z-20 max-w-xs w-full",children:f.jsx(Xv,{logs:_e})})]}),f.jsx("div",{className:"block md:hidden p-3 bg-slate-900 border-t border-slate-800 z-20",children:f.jsx(js,{player:p,reserve:p===1?S:H,isActive:!T,selectedBugType:Re,onSelectBugType:Vl,turnCount:p===1?D:_,queenPlaced:kl(h,p),isAITurn:o.mode==="AI"&&(o.humanColor==="WHITE"&&p===2||o.humanColor==="BLACK"&&p===1)})})]}),f.jsx(Pv,{isOpen:me,onStartGame:ae,onClose:()=>m(!1),canCancel:h.size>0}),f.jsx(Kv,{isOpen:N,winner:$e.winner,onRestart:()=>ae(o),onNewGameSetup:()=>{U(!1),m(!0)}}),f.jsx(Jv,{isOpen:L,onClose:()=>P(!1)})]})}qp.createRoot(document.getElementById("root")).render(f.jsx(J.StrictMode,{children:f.jsx(Fv,{})}));
