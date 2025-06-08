(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Xx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Of={exports:{}},So={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function Wx(){if(Wg)return So;Wg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return So.Fragment=e,So.jsx=i,So.jsxs=i,So}var qg;function qx(){return qg||(qg=1,Of.exports=Wx()),Of.exports}var bt=qx(),Pf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function Yx(){if(Yg)return re;Yg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function y(U,$,vt){this.props=U,this.context=$,this.refs=C,this.updater=vt||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function B(U,$,vt){this.props=U,this.context=$,this.refs=C,this.updater=vt||M}var L=B.prototype=new _;L.constructor=B,b(L,y.prototype),L.isPureReactComponent=!0;var w=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function I(U,$,vt,St,Q,pt){return vt=pt.ref,{$$typeof:s,type:U,key:$,ref:vt!==void 0?vt:null,props:pt}}function j(U,$){return I(U.type,$,void 0,void 0,void 0,U.props)}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function R(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return $[vt]})}var G=/\/+/g;function lt(U,$){return typeof U=="object"&&U!==null&&U.key!=null?R(""+U.key):$.toString(36)}function st(){}function _t(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(st,st):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ht(U,$,vt,St,Q){var pt=typeof U;(pt==="undefined"||pt==="boolean")&&(U=null);var yt=!1;if(U===null)yt=!0;else switch(pt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(U.$$typeof){case s:case e:yt=!0;break;case g:return yt=U._init,ht(yt(U._payload),$,vt,St,Q)}}if(yt)return Q=Q(U),yt=St===""?"."+lt(U,0):St,w(Q)?(vt="",yt!=null&&(vt=yt.replace(G,"$&/")+"/"),ht(Q,$,vt,"",function(oe){return oe})):Q!=null&&(D(Q)&&(Q=j(Q,vt+(Q.key==null||U&&U.key===Q.key?"":(""+Q.key).replace(G,"$&/")+"/")+yt)),$.push(Q)),1;yt=0;var Rt=St===""?".":St+":";if(w(U))for(var wt=0;wt<U.length;wt++)St=U[wt],pt=Rt+lt(St,wt),yt+=ht(St,$,vt,pt,Q);else if(wt=x(U),typeof wt=="function")for(U=wt.call(U),wt=0;!(St=U.next()).done;)St=St.value,pt=Rt+lt(St,wt++),yt+=ht(St,$,vt,pt,Q);else if(pt==="object"){if(typeof U.then=="function")return ht(_t(U),$,vt,St,Q);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return yt}function P(U,$,vt){if(U==null)return U;var St=[],Q=0;return ht(U,St,"","",function(pt){return $.call(vt,pt,Q++)}),St}function Z(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var q=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Mt(){}return re.Children={map:P,forEach:function(U,$,vt){P(U,function(){$.apply(this,arguments)},vt)},count:function(U){var $=0;return P(U,function(){$++}),$},toArray:function(U){return P(U,function($){return $})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},re.Component=y,re.Fragment=i,re.Profiler=l,re.PureComponent=B,re.StrictMode=r,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,re.__COMPILER_RUNTIME={__proto__:null,c:function(U){return k.H.useMemoCache(U)}},re.cache=function(U){return function(){return U.apply(null,arguments)}},re.cloneElement=function(U,$,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var St=b({},U.props),Q=U.key,pt=void 0;if($!=null)for(yt in $.ref!==void 0&&(pt=void 0),$.key!==void 0&&(Q=""+$.key),$)!H.call($,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&$.ref===void 0||(St[yt]=$[yt]);var yt=arguments.length-2;if(yt===1)St.children=vt;else if(1<yt){for(var Rt=Array(yt),wt=0;wt<yt;wt++)Rt[wt]=arguments[wt+2];St.children=Rt}return I(U.type,Q,void 0,void 0,pt,St)},re.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},re.createElement=function(U,$,vt){var St,Q={},pt=null;if($!=null)for(St in $.key!==void 0&&(pt=""+$.key),$)H.call($,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(Q[St]=$[St]);var yt=arguments.length-2;if(yt===1)Q.children=vt;else if(1<yt){for(var Rt=Array(yt),wt=0;wt<yt;wt++)Rt[wt]=arguments[wt+2];Q.children=Rt}if(U&&U.defaultProps)for(St in yt=U.defaultProps,yt)Q[St]===void 0&&(Q[St]=yt[St]);return I(U,pt,void 0,void 0,null,Q)},re.createRef=function(){return{current:null}},re.forwardRef=function(U){return{$$typeof:d,render:U}},re.isValidElement=D,re.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:Z}},re.memo=function(U,$){return{$$typeof:m,type:U,compare:$===void 0?null:$}},re.startTransition=function(U){var $=k.T,vt={};k.T=vt;try{var St=U(),Q=k.S;Q!==null&&Q(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(Mt,q)}catch(pt){q(pt)}finally{k.T=$}},re.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},re.use=function(U){return k.H.use(U)},re.useActionState=function(U,$,vt){return k.H.useActionState(U,$,vt)},re.useCallback=function(U,$){return k.H.useCallback(U,$)},re.useContext=function(U){return k.H.useContext(U)},re.useDebugValue=function(){},re.useDeferredValue=function(U,$){return k.H.useDeferredValue(U,$)},re.useEffect=function(U,$,vt){var St=k.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(U,$)},re.useId=function(){return k.H.useId()},re.useImperativeHandle=function(U,$,vt){return k.H.useImperativeHandle(U,$,vt)},re.useInsertionEffect=function(U,$){return k.H.useInsertionEffect(U,$)},re.useLayoutEffect=function(U,$){return k.H.useLayoutEffect(U,$)},re.useMemo=function(U,$){return k.H.useMemo(U,$)},re.useOptimistic=function(U,$){return k.H.useOptimistic(U,$)},re.useReducer=function(U,$,vt){return k.H.useReducer(U,$,vt)},re.useRef=function(U){return k.H.useRef(U)},re.useState=function(U){return k.H.useState(U)},re.useSyncExternalStore=function(U,$,vt){return k.H.useSyncExternalStore(U,$,vt)},re.useTransition=function(){return k.H.useTransition()},re.version="19.1.0",re}var jg;function sd(){return jg||(jg=1,Pf.exports=Yx()),Pf.exports}var qe=sd(),Bf={exports:{}},yo={},zf={exports:{}},If={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function jx(){return Zg||(Zg=1,function(s){function e(P,Z){var q=P.length;P.push(Z);t:for(;0<q;){var Mt=q-1>>>1,U=P[Mt];if(0<l(U,Z))P[Mt]=Z,P[q]=U,q=Mt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var Z=P[0],q=P.pop();if(q!==Z){P[0]=q;t:for(var Mt=0,U=P.length,$=U>>>1;Mt<$;){var vt=2*(Mt+1)-1,St=P[vt],Q=vt+1,pt=P[Q];if(0>l(St,q))Q<U&&0>l(pt,St)?(P[Mt]=pt,P[Q]=q,Mt=Q):(P[Mt]=St,P[vt]=q,Mt=vt);else if(Q<U&&0>l(pt,q))P[Mt]=pt,P[Q]=q,Mt=Q;else break t}}return Z}function l(P,Z){var q=P.sortIndex-Z.sortIndex;return q!==0?q:P.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,v=null,x=3,M=!1,b=!1,C=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(P){for(var Z=i(m);Z!==null;){if(Z.callback===null)r(m);else if(Z.startTime<=P)r(m),Z.sortIndex=Z.expirationTime,e(p,Z);else break;Z=i(m)}}function k(P){if(C=!1,w(P),!b)if(i(p)!==null)b=!0,H||(H=!0,lt());else{var Z=i(m);Z!==null&&ht(k,Z.startTime-P)}}var H=!1,I=-1,j=5,D=-1;function R(){return y?!0:!(s.unstable_now()-D<j)}function G(){if(y=!1,H){var P=s.unstable_now();D=P;var Z=!0;try{t:{b=!1,C&&(C=!1,B(I),I=-1),M=!0;var q=x;try{e:{for(w(P),v=i(p);v!==null&&!(v.expirationTime>P&&R());){var Mt=v.callback;if(typeof Mt=="function"){v.callback=null,x=v.priorityLevel;var U=Mt(v.expirationTime<=P);if(P=s.unstable_now(),typeof U=="function"){v.callback=U,w(P),Z=!0;break e}v===i(p)&&r(p),w(P)}else r(p);v=i(p)}if(v!==null)Z=!0;else{var $=i(m);$!==null&&ht(k,$.startTime-P),Z=!1}}break t}finally{v=null,x=q,M=!1}Z=void 0}}finally{Z?lt():H=!1}}}var lt;if(typeof L=="function")lt=function(){L(G)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,_t=st.port2;st.port1.onmessage=G,lt=function(){_t.postMessage(null)}}else lt=function(){_(G,0)};function ht(P,Z){I=_(function(){P(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(P){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var q=x;x=Z;try{return P()}finally{x=q}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(P,Z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=x;x=P;try{return Z()}finally{x=q}},s.unstable_scheduleCallback=function(P,Z,q){var Mt=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Mt+q:Mt):q=Mt,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=q+U,P={id:g++,callback:Z,priorityLevel:P,startTime:q,expirationTime:U,sortIndex:-1},q>Mt?(P.sortIndex=q,e(m,P),i(p)===null&&P===i(m)&&(C?(B(I),I=-1):C=!0,ht(k,q-Mt))):(P.sortIndex=U,e(p,P),b||M||(b=!0,H||(H=!0,lt()))),P},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(P){var Z=x;return function(){var q=x;x=Z;try{return P.apply(this,arguments)}finally{x=q}}}}(If)),If}var Kg;function Zx(){return Kg||(Kg=1,zf.exports=jx()),zf.exports}var Ff={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function Kx(){if(Qg)return Cn;Qg=1;var s=sd();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},Cn.flushSync=function(p){var m=h.T,g=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=g,r.d.f()}},Cn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Cn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Cn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Cn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Cn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Cn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Cn.requestFormReset=function(p){r.d.r(p)},Cn.unstable_batchedUpdates=function(p,m){return p(m)},Cn.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},Cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var Jg;function Qx(){if(Jg)return Ff.exports;Jg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ff.exports=Kx(),Ff.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function Jx(){if($g)return yo;$g=1;var s=Zx(),e=sd(),i=Qx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===o)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,o=f;break}if(T===o){S=!0,o=c,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,o=c;break}if(T===o){S=!0,o=f,a=c;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function _t(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case y:return"Profiler";case C:return"StrictMode";case k:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case L:return(t.displayName||"Context")+".Provider";case B:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:_t(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return _t(t(n))}catch{}}return null}var ht=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},Mt=[],U=-1;function $(t){return{current:t}}function vt(t){0>U||(t.current=Mt[U],Mt[U]=null,U--)}function St(t,n){U++,Mt[U]=t.current,t.current=n}var Q=$(null),pt=$(null),yt=$(null),Rt=$(null);function wt(t,n){switch(St(yt,n),St(pt,t),St(Q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?xg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=xg(n),t=Sg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}vt(Q),St(Q,t)}function oe(){vt(Q),vt(pt),vt(yt)}function Qt(t){t.memoizedState!==null&&St(Rt,t);var n=Q.current,a=Sg(n,t.type);n!==a&&(St(pt,t),St(Q,a))}function Ue(t){pt.current===t&&(vt(Q),vt(pt)),Rt.current===t&&(vt(Rt),mo._currentValue=q)}var ze=Object.prototype.hasOwnProperty,me=s.unstable_scheduleCallback,z=s.unstable_cancelCallback,xn=s.unstable_shouldYield,ye=s.unstable_requestPaint,he=s.unstable_now,Vt=s.unstable_getCurrentPriorityLevel,ge=s.unstable_ImmediatePriority,jt=s.unstable_UserBlockingPriority,ae=s.unstable_NormalPriority,Ke=s.unstable_LowPriority,N=s.unstable_IdlePriority,E=s.log,tt=s.unstable_setDisableYieldValue,ut=null,dt=null;function ot(t){if(typeof E=="function"&&tt(t),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ut,t)}catch{}}var Pt=Math.clz32?Math.clz32:kt,Ut=Math.log,Gt=Math.LN2;function kt(t){return t>>>=0,t===0?32:31-(Ut(t)/Gt|0)|0}var xt=256,Bt=4194304;function qt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Yt(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?c=qt(o):(S&=T,S!==0?c=qt(S):a||(a=T&~t,a!==0&&(c=qt(a))))):(T=o&~f,T!==0?c=qt(T):S!==0?c=qt(S):a||(a=o&~t,a!==0&&(c=qt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ct(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V(){var t=xt;return xt<<=1,(xt&4194048)===0&&(xt=256),t}function Nt(){var t=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),t}function Et(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function zt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function At(t,n,a,o,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,O=t.expirationTimes,J=t.hiddenUpdates;for(a=S&~a;0<a;){var ct=31-Pt(a),mt=1<<ct;T[ct]=0,O[ct]=-1;var et=J[ct];if(et!==null)for(J[ct]=null,ct=0;ct<et.length;ct++){var nt=et[ct];nt!==null&&(nt.lane&=-536870913)}a&=~mt}o!==0&&gt(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function gt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Pt(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function Ft(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Pt(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function ne(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ce(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ee(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Fg(t.type))}function Gn(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var hn=Math.random().toString(36).slice(2),sn="__reactFiber$"+hn,Sn="__reactProps$"+hn,Ln="__reactContainer$"+hn,Va="__reactEvents$"+hn,Io="__reactListeners$"+hn,Fo="__reactHandles$"+hn,ka="__reactResources$"+hn,ra="__reactMarker$"+hn;function sa(t){delete t[sn],delete t[Sn],delete t[Va],delete t[Io],delete t[Fo]}function Ci(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ln]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Tg(t);t!==null;){if(a=t[sn])return a;t=Tg(t)}return n}t=a,a=t.parentNode}return null}function wi(t){if(t=t[sn]||t[Ln]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Xa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function oa(t){var n=t[ka];return n||(n=t[ka]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[ra]=!0}var Ho=new Set,Go={};function Di(t,n){A(t,n),A(t+"Capture",n)}function A(t,n){for(Go[t]=n,t=0;t<n.length;t++)Ho.add(n[t])}var W=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},at={};function Y(t){return ze.call(at,t)?!0:ze.call(it,t)?!1:W.test(t)?at[t]=!0:(it[t]=!0,!1)}function Tt(t,n,a){if(Y(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Dt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ot(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var It,$t;function Zt(t){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+t+$t}var Xt=!1;function ce(t,n){if(!t||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(nt){var et=nt}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(nt){et=nt}t.call(mt.prototype)}}else{try{throw Error()}catch(nt){et=nt}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(nt){if(nt&&et&&typeof nt.stack=="string")return[nt.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var O=S.split(`
`),J=T.split(`
`);for(c=o=0;o<O.length&&!O[o].includes("DetermineComponentFrameRoot");)o++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(o===O.length||c===J.length)for(o=O.length-1,c=J.length-1;1<=o&&0<=c&&O[o]!==J[c];)c--;for(;1<=o&&0<=c;o--,c--)if(O[o]!==J[c]){if(o!==1||c!==1)do if(o--,c--,0>c||O[o]!==J[c]){var ct=`
`+O[o].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=o&&0<=c);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Zt(a):""}function Ae(t){switch(t.tag){case 26:case 27:case 5:return Zt(t.type);case 16:return Zt("Lazy");case 13:return Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return ce(t.type,!1);case 11:return ce(t.type.render,!1);case 1:return ce(t.type,!0);case 31:return Zt("Activity");default:return""}}function Ge(t){try{var n="";do n+=Ae(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ve(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(t){var n=ve(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ye(t){t._valueTracker||(t._valueTracker=Kt(t))}function Me(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ve(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function bn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var la=/[\n"\\]/g;function Ve(t){return t.replace(la,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ui(t,n,a,o,c,f,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+_e(n)):t.value!==""+_e(n)&&(t.value=""+_e(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?An(t,S,_e(n)):a!=null?An(t,S,_e(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+_e(T):t.removeAttribute("name")}function Ie(t,n,a,o,c,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function An(t,n,a){n==="number"&&bn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function on(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function dn(t,n,a){if(n!=null&&(n=""+_e(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+_e(a):""}function yn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ht(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function _i(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ni=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xd(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ni.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Sd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&xd(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&xd(t,f,n[f])}function Nc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var V0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),k0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(t){return k0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Lc=null;function Oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tr=null,br=null;function yd(t){var n=wi(t);if(n&&(t=n.stateNode)){var a=t[Sn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ui(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[Sn]||null;if(!c)throw Error(r(90));Ui(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Me(o)}break t;case"textarea":dn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&on(t,!!a.multiple,n,!1)}}}var Pc=!1;function Md(t,n,a){if(Pc)return t(n,a);Pc=!0;try{var o=t(n);return o}finally{if(Pc=!1,(Tr!==null||br!==null)&&(Rl(),Tr&&(n=Tr,t=br,br=Tr=null,yd(n),t)))for(n=0;n<t.length;n++)yd(t[n])}}function Rs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=!1;if(Li)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{Bc=!1}var ca=null,zc=null,ko=null;function Ed(){if(ko)return ko;var t,n=zc,a=n.length,o,c="value"in ca?ca.value:ca.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===c[f-o];o++);return ko=c.slice(t,1<o?1-o:void 0)}function Xo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function Td(){return!1}function On(t){function n(a,o,c,f,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:Td,this.isPropagationStopped=Td,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=On(Wa),ws=g({},Wa,{view:0,detail:0}),X0=On(ws),Ic,Fc,Ds,Yo=g({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ds&&(Ds&&t.type==="mousemove"?(Ic=t.screenX-Ds.screenX,Fc=t.screenY-Ds.screenY):Fc=Ic=0,Ds=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),bd=On(Yo),W0=g({},Yo,{dataTransfer:0}),q0=On(W0),Y0=g({},ws,{relatedTarget:0}),Hc=On(Y0),j0=g({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Z0=On(j0),K0=g({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Q0=On(K0),J0=g({},Wa,{data:0}),Ad=On(J0),$0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ev[t])?!!n[t]:!1}function Gc(){return nv}var iv=g({},ws,{key:function(t){if(t.key){var n=$0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(t){return t.type==="keypress"?Xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),av=On(iv),rv=g({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rd=On(rv),sv=g({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),ov=On(sv),lv=g({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),cv=On(lv),uv=g({},Yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fv=On(uv),hv=g({},Wa,{newState:0,oldState:0}),dv=On(hv),pv=[9,13,27,32],Vc=Li&&"CompositionEvent"in window,Us=null;Li&&"documentMode"in document&&(Us=document.documentMode);var mv=Li&&"TextEvent"in window&&!Us,Cd=Li&&(!Vc||Us&&8<Us&&11>=Us),wd=" ",Dd=!1;function Ud(t,n){switch(t){case"keyup":return pv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function gv(t,n){switch(t){case"compositionend":return Nd(n);case"keypress":return n.which!==32?null:(Dd=!0,wd);case"textInput":return t=n.data,t===wd&&Dd?null:t;default:return null}}function _v(t,n){if(Ar)return t==="compositionend"||!Vc&&Ud(t,n)?(t=Ed(),ko=zc=ca=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cd&&n.locale!=="ko"?null:n.data;default:return null}}var vv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!vv[t.type]:n==="textarea"}function Od(t,n,a,o){Tr?br?br.push(o):br=[o]:Tr=o,n=Ll(n,"onChange"),0<n.length&&(a=new qo("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Ns=null,Ls=null;function xv(t){pg(t,0)}function jo(t){var n=Xa(t);if(Me(n))return t}function Pd(t,n){if(t==="change")return n}var Bd=!1;if(Li){var kc;if(Li){var Xc="oninput"in document;if(!Xc){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),Xc=typeof zd.oninput=="function"}kc=Xc}else kc=!1;Bd=kc&&(!document.documentMode||9<document.documentMode)}function Id(){Ns&&(Ns.detachEvent("onpropertychange",Fd),Ls=Ns=null)}function Fd(t){if(t.propertyName==="value"&&jo(Ls)){var n=[];Od(n,Ls,t,Oc(t)),Md(xv,n)}}function Sv(t,n,a){t==="focusin"?(Id(),Ns=n,Ls=a,Ns.attachEvent("onpropertychange",Fd)):t==="focusout"&&Id()}function yv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jo(Ls)}function Mv(t,n){if(t==="click")return jo(n)}function Ev(t,n){if(t==="input"||t==="change")return jo(n)}function Tv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Vn=typeof Object.is=="function"?Object.is:Tv;function Os(t,n){if(Vn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!ze.call(n,c)||!Vn(t[c],n[c]))return!1}return!0}function Hd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gd(t,n){var a=Hd(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Hd(a)}}function Vd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Vd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function kd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=bn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=bn(t.document)}return n}function Wc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var bv=Li&&"documentMode"in document&&11>=document.documentMode,Rr=null,qc=null,Ps=null,Yc=!1;function Xd(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yc||Rr==null||Rr!==bn(o)||(o=Rr,"selectionStart"in o&&Wc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ps&&Os(Ps,o)||(Ps=o,o=Ll(qc,"onSelect"),0<o.length&&(n=new qo("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Rr)))}function qa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Cr={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},jc={},Wd={};Li&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Ya(t){if(jc[t])return jc[t];if(!Cr[t])return t;var n=Cr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wd)return jc[t]=n[a];return t}var qd=Ya("animationend"),Yd=Ya("animationiteration"),jd=Ya("animationstart"),Av=Ya("transitionrun"),Rv=Ya("transitionstart"),Cv=Ya("transitioncancel"),Zd=Ya("transitionend"),Kd=new Map,Zc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zc.push("scrollEnd");function li(t,n){Kd.set(t,n),Di(n,[t])}var Qd=new WeakMap;function Jn(t,n){if(typeof t=="object"&&t!==null){var a=Qd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ge(n)},Qd.set(t,n),n)}return{value:t,source:n,stack:Ge(n)}}var $n=[],wr=0,Kc=0;function Zo(){for(var t=wr,n=Kc=wr=0;n<t;){var a=$n[n];$n[n++]=null;var o=$n[n];$n[n++]=null;var c=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}f!==0&&Jd(a,c,f)}}function Ko(t,n,a,o){$n[wr++]=t,$n[wr++]=n,$n[wr++]=a,$n[wr++]=o,Kc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Qc(t,n,a,o){return Ko(t,n,a,o),Qo(t)}function Dr(t,n){return Ko(t,null,null,n),Qo(t)}function Jd(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Pt(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function Qo(t){if(50<so)throw so=0,af=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={};function wv(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,a,o){return new wv(t,n,a,o)}function Jc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Oi(t,n){var a=t.alternate;return a===null?(a=kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function $d(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Jo(t,n,a,o,c,f){var S=0;if(o=t,typeof t=="function")Jc(t)&&(S=1);else if(typeof t=="string")S=Ux(t,a,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=kn(31,a,n,c),t.elementType=D,t.lanes=f,t;case b:return ja(a.children,c,f,n);case C:S=8,c|=24;break;case y:return t=kn(12,a,n,c|2),t.elementType=y,t.lanes=f,t;case k:return t=kn(13,a,n,c),t.elementType=k,t.lanes=f,t;case H:return t=kn(19,a,n,c),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case L:S=10;break t;case B:S=9;break t;case w:S=11;break t;case I:S=14;break t;case j:S=16,o=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=kn(S,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function ja(t,n,a,o){return t=kn(7,t,o,n),t.lanes=a,t}function $c(t,n,a){return t=kn(6,t,null,n),t.lanes=a,t}function tu(t,n,a){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Nr=[],Lr=0,$o=null,tl=0,ti=[],ei=0,Za=null,Pi=1,Bi="";function Ka(t,n){Nr[Lr++]=tl,Nr[Lr++]=$o,$o=t,tl=n}function tp(t,n,a){ti[ei++]=Pi,ti[ei++]=Bi,ti[ei++]=Za,Za=t;var o=Pi;t=Bi;var c=32-Pt(o)-1;o&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var S=c-c%5;f=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Pi=1<<32-Pt(n)+c|a<<c|o,Bi=f+t}else Pi=1<<f|a<<c|o,Bi=t}function eu(t){t.return!==null&&(Ka(t,1),tp(t,1,0))}function nu(t){for(;t===$o;)$o=Nr[--Lr],Nr[Lr]=null,tl=Nr[--Lr],Nr[Lr]=null;for(;t===Za;)Za=ti[--ei],ti[ei]=null,Bi=ti[--ei],ti[ei]=null,Pi=ti[--ei],ti[ei]=null}var Un=null,je=null,Re=!1,Qa=null,vi=!1,iu=Error(r(519));function Ja(t){var n=Error(r(418,""));throw Is(Jn(n,t)),iu}function ep(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[sn]=t,n[Sn]=o,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<lo.length;a++)pe(lo[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Ie(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ye(n);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),yn(n,o.value,o.defaultValue,o.children),Ye(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||vg(n.textContent,a)?(o.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),o.onScroll!=null&&pe("scroll",n),o.onScrollEnd!=null&&pe("scrollend",n),o.onClick!=null&&(n.onclick=Ol),n=!0):n=!1,n||Ja(t)}function np(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Un=Un.return}}function Bs(t){if(t!==Un)return!1;if(!Re)return np(t),Re=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Sf(t.type,t.memoizedProps)),a=!a),a&&je&&Ja(t),np(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){je=ui(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}je=null}}else n===27?(n=je,ba(t.type)?(t=Tf,Tf=null,je=t):je=n):je=Un?ui(t.stateNode.nextSibling):null;return!0}function zs(){je=Un=null,Re=!1}function ip(){var t=Qa;return t!==null&&(zn===null?zn=t:zn.push.apply(zn,t),Qa=null),t}function Is(t){Qa===null?Qa=[t]:Qa.push(t)}var au=$(null),$a=null,zi=null;function ua(t,n,a){St(au,n._currentValue),n._currentValue=a}function Ii(t){t._currentValue=au.current,vt(au)}function ru(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function su(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var O=0;O<n.length;O++)if(T.context===n[O]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),ru(f.return,a,t),o||(S=null);break t}f=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),ru(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Fs(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=c.type;Vn(c.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(c===Rt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(mo):t=[mo])}c=c.return}t!==null&&su(n,t,a,o),n.flags|=262144}function el(t){for(t=t.firstContext;t!==null;){if(!Vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function tr(t){$a=t,zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return ap($a,t)}function nl(t,n){return $a===null&&tr(t),ap(t,n)}function ap(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},zi===null){if(t===null)throw Error(r(308));zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else zi=zi.next=n;return a}var Dv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Uv=s.unstable_scheduleCallback,Nv=s.unstable_NormalPriority,ln={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ou(){return{controller:new Dv,data:new Map,refCount:0}}function Hs(t){t.refCount--,t.refCount===0&&Uv(Nv,function(){t.controller.abort()})}var Gs=null,lu=0,Or=0,Pr=null;function Lv(t,n){if(Gs===null){var a=Gs=[];lu=0,Or=ff(),Pr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return lu++,n.then(rp,rp),n}function rp(){if(--lu===0&&Gs!==null){Pr!==null&&(Pr.status="fulfilled");var t=Gs;Gs=null,Or=0,Pr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ov(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var sp=P.S;P.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Lv(t,n),sp!==null&&sp(t,n)};var er=$(null);function cu(){var t=er.current;return t!==null?t:ke.pooledCache}function il(t,n){n===null?St(er,er.current):St(er,n.pool)}function op(){var t=cu();return t===null?null:{parent:ln._currentValue,pool:t}}var Vs=Error(r(460)),lp=Error(r(474)),al=Error(r(542)),uu={then:function(){}};function cp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function rl(){}function up(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(rl,rl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,hp(t),t;default:if(typeof n.status=="string")n.then(rl,rl);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,hp(t),t}throw ks=n,Vs}}var ks=null;function fp(){if(ks===null)throw Error(r(459));var t=ks;return ks=null,t}function hp(t){if(t===Vs||t===al)throw Error(r(483))}var fa=!1;function fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function da(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(we&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Qo(t),Jd(t,null,a),n}return Ko(t,o,n,a),Qo(t)}function Xs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ft(t,a)}}function du(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var pu=!1;function Ws(){if(pu){var t=Pr;if(t!==null)throw t}}function qs(t,n,a,o){pu=!1;var c=t.updateQueue;fa=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var O=T,J=O.next;O.next=null,S===null?f=J:S.next=J,S=O;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,T=ct.lastBaseUpdate,T!==S&&(T===null?ct.firstBaseUpdate=J:T.next=J,ct.lastBaseUpdate=O))}if(f!==null){var mt=c.baseState;S=0,ct=J=O=null,T=f;do{var et=T.lane&-536870913,nt=et!==T.lane;if(nt?(Se&et)===et:(o&et)===et){et!==0&&et===Or&&(pu=!0),ct!==null&&(ct=ct.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ee=t,Jt=T;et=n;var Oe=a;switch(Jt.tag){case 1:if(ee=Jt.payload,typeof ee=="function"){mt=ee.call(Oe,mt,et);break t}mt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Jt.payload,et=typeof ee=="function"?ee.call(Oe,mt,et):ee,et==null)break t;mt=g({},mt,et);break t;case 2:fa=!0}}et=T.callback,et!==null&&(t.flags|=64,nt&&(t.flags|=8192),nt=c.callbacks,nt===null?c.callbacks=[et]:nt.push(et))}else nt={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ct===null?(J=ct=nt,O=mt):ct=ct.next=nt,S|=et;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;nt=T,T=nt.next,nt.next=null,c.lastBaseUpdate=nt,c.shared.pending=null}}while(!0);ct===null&&(O=mt),c.baseState=O,c.firstBaseUpdate=J,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),ya|=S,t.lanes=S,t.memoizedState=mt}}function dp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function pp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)dp(a[t],n)}var Br=$(null),sl=$(0);function mp(t,n){t=Wi,St(sl,t),St(Br,n),Wi=t|n.baseLanes}function mu(){St(sl,Wi),St(Br,Br.current)}function gu(){Wi=sl.current,vt(Br),vt(sl)}var pa=0,ue=null,Ne=null,en=null,ol=!1,zr=!1,nr=!1,ll=0,Ys=0,Ir=null,Pv=0;function Qe(){throw Error(r(321))}function _u(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Vn(t[a],n[a]))return!1;return!0}function vu(t,n,a,o,c,f){return pa=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Jp:$p,nr=!1,f=a(o,c),nr=!1,zr&&(f=_p(n,a,o,c)),gp(t),f}function gp(t){P.H=pl;var n=Ne!==null&&Ne.next!==null;if(pa=0,en=Ne=ue=null,ol=!1,Ys=0,Ir=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&el(t)&&(pn=!0))}function _p(t,n,a,o){ue=t;var c=0;do{if(zr&&(Ir=null),Ys=0,zr=!1,25<=c)throw Error(r(301));if(c+=1,en=Ne=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Vv,f=n(a,o)}while(zr);return f}function Bv(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?js(n):n,t=t.useState()[0],(Ne!==null?Ne.memoizedState:null)!==t&&(ue.flags|=1024),n}function xu(){var t=ll!==0;return ll=0,t}function Su(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function yu(t){if(ol){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ol=!1}pa=0,en=Ne=ue=null,zr=!1,Ys=ll=0,Ir=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ue.memoizedState=en=t:en=en.next=t,en}function nn(){if(Ne===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var n=en===null?ue.memoizedState:en.next;if(n!==null)en=n,Ne=t;else{if(t===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},en===null?ue.memoizedState=en=t:en=en.next=t}return en}function Mu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function js(t){var n=Ys;return Ys+=1,Ir===null&&(Ir=[]),t=up(Ir,t,n),n=ue,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Jp:$p),t}function cl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return js(t);if(t.$$typeof===L)return Rn(t)}throw Error(r(438,String(t)))}function Eu(t){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Mu(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=R;return n.index++,a}function Fi(t,n){return typeof n=="function"?n(t):n}function ul(t){var n=nn();return Tu(n,Ne,t)}function Tu(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=S=null,O=null,J=n,ct=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(Se&mt)===mt:(pa&mt)===mt){var et=J.revertLane;if(et===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===Or&&(ct=!0);else if((pa&et)===et){J=J.next,et===Or&&(ct=!0);continue}else mt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},O===null?(T=O=mt,S=f):O=O.next=mt,ue.lanes|=et,ya|=et;mt=J.action,nr&&a(f,mt),f=J.hasEagerState?J.eagerState:a(f,mt)}else et={lane:mt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},O===null?(T=O=et,S=f):O=O.next=et,ue.lanes|=mt,ya|=mt;J=J.next}while(J!==null&&J!==n);if(O===null?S=f:O.next=T,!Vn(f,t.memoizedState)&&(pn=!0,ct&&(a=Pr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=O,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function bu(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);Vn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function vp(t,n,a){var o=ue,c=nn(),f=Re;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Vn((Ne||c).memoizedState,a);S&&(c.memoizedState=a,pn=!0),c=c.queue;var T=yp.bind(null,o,c,t);if(Zs(2048,8,T,[t]),c.getSnapshot!==n||S||en!==null&&en.memoizedState.tag&1){if(o.flags|=2048,Fr(9,fl(),Sp.bind(null,o,c,a,n),null),ke===null)throw Error(r(349));f||(pa&124)!==0||xp(o,n,a)}return a}function xp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Mu(),ue.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Sp(t,n,a,o){n.value=a,n.getSnapshot=o,Mp(n)&&Ep(t)}function yp(t,n,a){return a(function(){Mp(n)&&Ep(t)})}function Mp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Vn(t,a)}catch{return!0}}function Ep(t){var n=Dr(t,2);n!==null&&jn(n,t,2)}function Au(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),nr){ot(!0);try{a()}finally{ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},n}function Tp(t,n,a,o){return t.baseState=a,Tu(t,Ne,typeof o=="function"?o:Fi)}function zv(t,n,a,o,c){if(dl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,bp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function bp(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=P.T,S={};P.T=S;try{var T=a(c,o),O=P.S;O!==null&&O(S,T),Ap(t,n,T)}catch(J){Ru(t,n,J)}finally{P.T=f}}else try{f=a(c,o),Ap(t,n,f)}catch(J){Ru(t,n,J)}}function Ap(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Rp(t,n,o)},function(o){return Ru(t,n,o)}):Rp(t,n,a)}function Rp(t,n,a){n.status="fulfilled",n.value=a,Cp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,bp(t,a)))}function Ru(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Cp(n),n=n.next;while(n!==o)}t.action=null}function Cp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function wp(t,n){return n}function Dp(t,n){if(Re){var a=ke.formState;if(a!==null){t:{var o=ue;if(Re){if(je){e:{for(var c=je,f=vi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=ui(c.nextSibling),o=c.data==="F!";break t}}Ja(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wp,lastRenderedState:n},a.queue=o,a=Zp.bind(null,ue,o),o.dispatch=a,o=Au(!1),f=Nu.bind(null,ue,!1,o.queue),o=Pn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=zv.bind(null,ue,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function Up(t){var n=nn();return Np(n,Ne,t)}function Np(t,n,a){if(n=Tu(t,n,wp)[0],t=ul(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=js(n)}catch(S){throw S===Vs?al:S}else o=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Fr(9,fl(),Iv.bind(null,c,a),null)),[o,f,t]}function Iv(t,n){t.action=n}function Lp(t){var n=nn(),a=Ne;if(a!==null)return Np(n,a,t);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Fr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Mu(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function fl(){return{destroy:void 0,resource:void 0}}function Op(){return nn().memoizedState}function hl(t,n,a,o){var c=Pn();o=o===void 0?null:o,ue.flags|=t,c.memoizedState=Fr(1|n,fl(),a,o)}function Zs(t,n,a,o){var c=nn();o=o===void 0?null:o;var f=c.memoizedState.inst;Ne!==null&&o!==null&&_u(o,Ne.memoizedState.deps)?c.memoizedState=Fr(n,f,a,o):(ue.flags|=t,c.memoizedState=Fr(1|n,f,a,o))}function Pp(t,n){hl(8390656,8,t,n)}function Bp(t,n){Zs(2048,8,t,n)}function zp(t,n){return Zs(4,2,t,n)}function Ip(t,n){return Zs(4,4,t,n)}function Fp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Hp(t,n,a){a=a!=null?a.concat([t]):null,Zs(4,4,Fp.bind(null,n,t),a)}function Cu(){}function Gp(t,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&_u(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Vp(t,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&_u(n,o[1]))return o[0];if(o=t(),nr){ot(!0);try{t()}finally{ot(!1)}}return a.memoizedState=[o,n],o}function wu(t,n,a){return a===void 0||(pa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Wm(),ue.lanes|=t,ya|=t,a)}function kp(t,n,a,o){return Vn(a,n)?a:Br.current!==null?(t=wu(t,a,o),Vn(t,n)||(pn=!0),t):(pa&42)===0?(pn=!0,t.memoizedState=a):(t=Wm(),ue.lanes|=t,ya|=t,n)}function Xp(t,n,a,o,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var S=P.T,T={};P.T=T,Nu(t,!1,n,a);try{var O=c(),J=P.S;if(J!==null&&J(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ct=Ov(O,o);Ks(t,n,ct,Yn(t))}else Ks(t,n,o,Yn(t))}catch(mt){Ks(t,n,{then:function(){},status:"rejected",reason:mt},Yn())}finally{Z.p=f,P.T=S}}function Fv(){}function Du(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=Wp(t).queue;Xp(t,c,n,q,a===null?Fv:function(){return qp(t),a(o)})}function Wp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function qp(t){var n=Wp(t).next.queue;Ks(t,n,{},Yn())}function Uu(){return Rn(mo)}function Yp(){return nn().memoizedState}function jp(){return nn().memoizedState}function Hv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();t=ha(a);var o=da(n,t,a);o!==null&&(jn(o,n,a),Xs(o,n,a)),n={cache:ou()},t.payload=n;return}n=n.return}}function Gv(t,n,a){var o=Yn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},dl(t)?Kp(n,a):(a=Qc(t,n,a,o),a!==null&&(jn(a,t,o),Qp(a,n,o)))}function Zp(t,n,a){var o=Yn();Ks(t,n,a,o)}function Ks(t,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(dl(t))Kp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(c.hasEagerState=!0,c.eagerState=T,Vn(T,S))return Ko(t,n,c,0),ke===null&&Zo(),!1}catch{}finally{}if(a=Qc(t,n,c,o),a!==null)return jn(a,t,o),Qp(a,n,o),!0}return!1}function Nu(t,n,a,o){if(o={lane:2,revertLane:ff(),action:o,hasEagerState:!1,eagerState:null,next:null},dl(t)){if(n)throw Error(r(479))}else n=Qc(t,a,o,2),n!==null&&jn(n,t,2)}function dl(t){var n=t.alternate;return t===ue||n!==null&&n===ue}function Kp(t,n){zr=ol=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Qp(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ft(t,a)}}var pl={readContext:Rn,use:cl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},Jp={readContext:Rn,use:cl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:Pp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,hl(4194308,4,Fp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return hl(4194308,4,t,n)},useInsertionEffect:function(t,n){hl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(nr){ot(!0);try{t()}finally{ot(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var c=a(n);if(nr){ot(!0);try{a(n)}finally{ot(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=Gv.bind(null,ue,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=Au(t);var n=t.queue,a=Zp.bind(null,ue,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Cu,useDeferredValue:function(t,n){var a=Pn();return wu(a,t,n)},useTransition:function(){var t=Au(!1);return t=Xp.bind(null,ue,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ue,c=Pn();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(Se&124)!==0||xp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Pp(yp.bind(null,o,f,t),[t]),o.flags|=2048,Fr(9,fl(),Sp.bind(null,o,f,a,n),null),a},useId:function(){var t=Pn(),n=ke.identifierPrefix;if(Re){var a=Bi,o=Pi;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=ll++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Pv++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Uu,useFormState:Dp,useActionState:Dp,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Nu.bind(null,ue,!0,a),a.dispatch=n,[t,n]},useMemoCache:Eu,useCacheRefresh:function(){return Pn().memoizedState=Hv.bind(null,ue)}},$p={readContext:Rn,use:cl,useCallback:Gp,useContext:Rn,useEffect:Bp,useImperativeHandle:Hp,useInsertionEffect:zp,useLayoutEffect:Ip,useMemo:Vp,useReducer:ul,useRef:Op,useState:function(){return ul(Fi)},useDebugValue:Cu,useDeferredValue:function(t,n){var a=nn();return kp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=ul(Fi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:js(t),n]},useSyncExternalStore:vp,useId:Yp,useHostTransitionStatus:Uu,useFormState:Up,useActionState:Up,useOptimistic:function(t,n){var a=nn();return Tp(a,Ne,t,n)},useMemoCache:Eu,useCacheRefresh:jp},Vv={readContext:Rn,use:cl,useCallback:Gp,useContext:Rn,useEffect:Bp,useImperativeHandle:Hp,useInsertionEffect:zp,useLayoutEffect:Ip,useMemo:Vp,useReducer:bu,useRef:Op,useState:function(){return bu(Fi)},useDebugValue:Cu,useDeferredValue:function(t,n){var a=nn();return Ne===null?wu(a,t,n):kp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=bu(Fi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:js(t),n]},useSyncExternalStore:vp,useId:Yp,useHostTransitionStatus:Uu,useFormState:Lp,useActionState:Lp,useOptimistic:function(t,n){var a=nn();return Ne!==null?Tp(a,Ne,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Eu,useCacheRefresh:jp},Hr=null,Qs=0;function ml(t){var n=Qs;return Qs+=1,Hr===null&&(Hr=[]),up(Hr,t,n)}function Js(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function gl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function tm(t){var n=t._init;return n(t._payload)}function em(t){function n(X,F){if(t){var K=X.deletions;K===null?(X.deletions=[F],X.flags|=16):K.push(F)}}function a(X,F){if(!t)return null;for(;F!==null;)n(X,F),F=F.sibling;return null}function o(X){for(var F=new Map;X!==null;)X.key!==null?F.set(X.key,X):F.set(X.index,X),X=X.sibling;return F}function c(X,F){return X=Oi(X,F),X.index=0,X.sibling=null,X}function f(X,F,K){return X.index=K,t?(K=X.alternate,K!==null?(K=K.index,K<F?(X.flags|=67108866,F):K):(X.flags|=67108866,F)):(X.flags|=1048576,F)}function S(X){return t&&X.alternate===null&&(X.flags|=67108866),X}function T(X,F,K,ft){return F===null||F.tag!==6?(F=$c(K,X.mode,ft),F.return=X,F):(F=c(F,K),F.return=X,F)}function O(X,F,K,ft){var Ht=K.type;return Ht===b?ct(X,F,K.props.children,ft,K.key):F!==null&&(F.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===j&&tm(Ht)===F.type)?(F=c(F,K.props),Js(F,K),F.return=X,F):(F=Jo(K.type,K.key,K.props,null,X.mode,ft),Js(F,K),F.return=X,F)}function J(X,F,K,ft){return F===null||F.tag!==4||F.stateNode.containerInfo!==K.containerInfo||F.stateNode.implementation!==K.implementation?(F=tu(K,X.mode,ft),F.return=X,F):(F=c(F,K.children||[]),F.return=X,F)}function ct(X,F,K,ft,Ht){return F===null||F.tag!==7?(F=ja(K,X.mode,ft,Ht),F.return=X,F):(F=c(F,K),F.return=X,F)}function mt(X,F,K){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=$c(""+F,X.mode,K),F.return=X,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case x:return K=Jo(F.type,F.key,F.props,null,X.mode,K),Js(K,F),K.return=X,K;case M:return F=tu(F,X.mode,K),F.return=X,F;case j:var ft=F._init;return F=ft(F._payload),mt(X,F,K)}if(ht(F)||lt(F))return F=ja(F,X.mode,K,null),F.return=X,F;if(typeof F.then=="function")return mt(X,ml(F),K);if(F.$$typeof===L)return mt(X,nl(X,F),K);gl(X,F)}return null}function et(X,F,K,ft){var Ht=F!==null?F.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ht!==null?null:T(X,F,""+K,ft);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===Ht?O(X,F,K,ft):null;case M:return K.key===Ht?J(X,F,K,ft):null;case j:return Ht=K._init,K=Ht(K._payload),et(X,F,K,ft)}if(ht(K)||lt(K))return Ht!==null?null:ct(X,F,K,ft,null);if(typeof K.then=="function")return et(X,F,ml(K),ft);if(K.$$typeof===L)return et(X,F,nl(X,K),ft);gl(X,K)}return null}function nt(X,F,K,ft,Ht){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return X=X.get(K)||null,T(F,X,""+ft,Ht);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case x:return X=X.get(ft.key===null?K:ft.key)||null,O(F,X,ft,Ht);case M:return X=X.get(ft.key===null?K:ft.key)||null,J(F,X,ft,Ht);case j:var fe=ft._init;return ft=fe(ft._payload),nt(X,F,K,ft,Ht)}if(ht(ft)||lt(ft))return X=X.get(K)||null,ct(F,X,ft,Ht,null);if(typeof ft.then=="function")return nt(X,F,K,ml(ft),Ht);if(ft.$$typeof===L)return nt(X,F,K,nl(F,ft),Ht);gl(F,ft)}return null}function ee(X,F,K,ft){for(var Ht=null,fe=null,Wt=F,te=F=0,gn=null;Wt!==null&&te<K.length;te++){Wt.index>te?(gn=Wt,Wt=null):gn=Wt.sibling;var Te=et(X,Wt,K[te],ft);if(Te===null){Wt===null&&(Wt=gn);break}t&&Wt&&Te.alternate===null&&n(X,Wt),F=f(Te,F,te),fe===null?Ht=Te:fe.sibling=Te,fe=Te,Wt=gn}if(te===K.length)return a(X,Wt),Re&&Ka(X,te),Ht;if(Wt===null){for(;te<K.length;te++)Wt=mt(X,K[te],ft),Wt!==null&&(F=f(Wt,F,te),fe===null?Ht=Wt:fe.sibling=Wt,fe=Wt);return Re&&Ka(X,te),Ht}for(Wt=o(Wt);te<K.length;te++)gn=nt(Wt,X,te,K[te],ft),gn!==null&&(t&&gn.alternate!==null&&Wt.delete(gn.key===null?te:gn.key),F=f(gn,F,te),fe===null?Ht=gn:fe.sibling=gn,fe=gn);return t&&Wt.forEach(function(Da){return n(X,Da)}),Re&&Ka(X,te),Ht}function Jt(X,F,K,ft){if(K==null)throw Error(r(151));for(var Ht=null,fe=null,Wt=F,te=F=0,gn=null,Te=K.next();Wt!==null&&!Te.done;te++,Te=K.next()){Wt.index>te?(gn=Wt,Wt=null):gn=Wt.sibling;var Da=et(X,Wt,Te.value,ft);if(Da===null){Wt===null&&(Wt=gn);break}t&&Wt&&Da.alternate===null&&n(X,Wt),F=f(Da,F,te),fe===null?Ht=Da:fe.sibling=Da,fe=Da,Wt=gn}if(Te.done)return a(X,Wt),Re&&Ka(X,te),Ht;if(Wt===null){for(;!Te.done;te++,Te=K.next())Te=mt(X,Te.value,ft),Te!==null&&(F=f(Te,F,te),fe===null?Ht=Te:fe.sibling=Te,fe=Te);return Re&&Ka(X,te),Ht}for(Wt=o(Wt);!Te.done;te++,Te=K.next())Te=nt(Wt,X,te,Te.value,ft),Te!==null&&(t&&Te.alternate!==null&&Wt.delete(Te.key===null?te:Te.key),F=f(Te,F,te),fe===null?Ht=Te:fe.sibling=Te,fe=Te);return t&&Wt.forEach(function(kx){return n(X,kx)}),Re&&Ka(X,te),Ht}function Oe(X,F,K,ft){if(typeof K=="object"&&K!==null&&K.type===b&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var Ht=K.key;F!==null;){if(F.key===Ht){if(Ht=K.type,Ht===b){if(F.tag===7){a(X,F.sibling),ft=c(F,K.props.children),ft.return=X,X=ft;break t}}else if(F.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===j&&tm(Ht)===F.type){a(X,F.sibling),ft=c(F,K.props),Js(ft,K),ft.return=X,X=ft;break t}a(X,F);break}else n(X,F);F=F.sibling}K.type===b?(ft=ja(K.props.children,X.mode,ft,K.key),ft.return=X,X=ft):(ft=Jo(K.type,K.key,K.props,null,X.mode,ft),Js(ft,K),ft.return=X,X=ft)}return S(X);case M:t:{for(Ht=K.key;F!==null;){if(F.key===Ht)if(F.tag===4&&F.stateNode.containerInfo===K.containerInfo&&F.stateNode.implementation===K.implementation){a(X,F.sibling),ft=c(F,K.children||[]),ft.return=X,X=ft;break t}else{a(X,F);break}else n(X,F);F=F.sibling}ft=tu(K,X.mode,ft),ft.return=X,X=ft}return S(X);case j:return Ht=K._init,K=Ht(K._payload),Oe(X,F,K,ft)}if(ht(K))return ee(X,F,K,ft);if(lt(K)){if(Ht=lt(K),typeof Ht!="function")throw Error(r(150));return K=Ht.call(K),Jt(X,F,K,ft)}if(typeof K.then=="function")return Oe(X,F,ml(K),ft);if(K.$$typeof===L)return Oe(X,F,nl(X,K),ft);gl(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,F!==null&&F.tag===6?(a(X,F.sibling),ft=c(F,K),ft.return=X,X=ft):(a(X,F),ft=$c(K,X.mode,ft),ft.return=X,X=ft),S(X)):a(X,F)}return function(X,F,K,ft){try{Qs=0;var Ht=Oe(X,F,K,ft);return Hr=null,Ht}catch(Wt){if(Wt===Vs||Wt===al)throw Wt;var fe=kn(29,Wt,null,X.mode);return fe.lanes=ft,fe.return=X,fe}finally{}}}var Gr=em(!0),nm=em(!1),ni=$(null),xi=null;function ma(t){var n=t.alternate;St(cn,cn.current&1),St(ni,t),xi===null&&(n===null||Br.current!==null||n.memoizedState!==null)&&(xi=t)}function im(t){if(t.tag===22){if(St(cn,cn.current),St(ni,t),xi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(xi=t)}}else ga()}function ga(){St(cn,cn.current),St(ni,ni.current)}function Hi(t){vt(ni),xi===t&&(xi=null),vt(cn)}var cn=$(0);function _l(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ef(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Lu(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ou={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Yn(),c=ha(o);c.payload=n,a!=null&&(c.callback=a),n=da(t,c,o),n!==null&&(jn(n,t,o),Xs(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Yn(),c=ha(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=da(t,c,o),n!==null&&(jn(n,t,o),Xs(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Yn(),o=ha(a);o.tag=2,n!=null&&(o.callback=n),n=da(t,o,a),n!==null&&(jn(n,t,a),Xs(n,t,a))}};function am(t,n,a,o,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Os(a,o)||!Os(c,f):!0}function rm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Ou.enqueueReplaceState(n,n.state,null)}function ir(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function sm(t){vl(t)}function om(t){console.error(t)}function lm(t){vl(t)}function xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function cm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Pu(t,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){xl(t,n)},a}function um(t){return t=ha(t),t.tag=3,t}function fm(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){cm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){cm(n,a,o),typeof c!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function kv(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Fs(n,a,c,!0),a=ni.current,a!==null){switch(a.tag){case 13:return xi===null?sf():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===uu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),lf(t,o,c)),!1;case 22:return a.flags|=65536,o===uu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),lf(t,o,c)),!1}throw Error(r(435,a.tag))}return lf(t,o,c),sf(),!1}if(Re)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==iu&&(t=Error(r(422),{cause:o}),Is(Jn(t,a)))):(o!==iu&&(n=Error(r(423),{cause:o}),Is(Jn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=Jn(o,a),c=Pu(t.stateNode,o,c),du(t,c),Ze!==4&&(Ze=2)),!1;var f=Error(r(520),{cause:o});if(f=Jn(f,a),ro===null?ro=[f]:ro.push(f),Ze!==4&&(Ze=2),n===null)return!0;o=Jn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Pu(a.stateNode,o,t),du(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=um(c),fm(c,t,a,o),du(a,c),!1}a=a.return}while(a!==null);return!1}var hm=Error(r(461)),pn=!1;function Mn(t,n,a,o){n.child=t===null?nm(n,null,a,o):Gr(n,t.child,a,o)}function dm(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return tr(n),o=vu(t,n,a,S,f,c),T=xu(),t!==null&&!pn?(Su(t,n,c),Gi(t,n,c)):(Re&&T&&eu(n),n.flags|=1,Mn(t,n,o,c),n.child)}function pm(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!Jc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,mm(t,n,f,o,c)):(t=Jo(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!ku(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Os,a(S,o)&&t.ref===n.ref)return Gi(t,n,c)}return n.flags|=1,t=Oi(f,o),t.ref=n.ref,t.return=n,n.child=t}function mm(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(Os(f,o)&&t.ref===n.ref)if(pn=!1,n.pendingProps=o=f,ku(t,c))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,Gi(t,n,c)}return Bu(t,n,a,o,c)}function gm(t,n,a){var o=n.pendingProps,c=o.children,f=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return _m(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&il(n,f!==null?f.cachePool:null),f!==null?mp(n,f):mu(),im(n);else return n.lanes=n.childLanes=536870912,_m(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(il(n,f.cachePool),mp(n,f),ga(),n.memoizedState=null):(t!==null&&il(n,null),mu(),ga());return Mn(t,n,c,a),n.child}function _m(t,n,a,o){var c=cu();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&il(n,null),mu(),im(n),t!==null&&Fs(t,n,o,!0),null}function Sl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Bu(t,n,a,o,c){return tr(n),a=vu(t,n,a,o,void 0,c),o=xu(),t!==null&&!pn?(Su(t,n,c),Gi(t,n,c)):(Re&&o&&eu(n),n.flags|=1,Mn(t,n,a,c),n.child)}function vm(t,n,a,o,c,f){return tr(n),n.updateQueue=null,a=_p(n,o,a,c),gp(t),o=xu(),t!==null&&!pn?(Su(t,n,f),Gi(t,n,f)):(Re&&o&&eu(n),n.flags|=1,Mn(t,n,a,f),n.child)}function xm(t,n,a,o,c){if(tr(n),n.stateNode===null){var f=Ur,S=a.contextType;typeof S=="object"&&S!==null&&(f=Rn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ou,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},fu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Rn(S):Ur,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Lu(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Ou.enqueueReplaceState(f,f.state,null),qs(n,o,f,c),Ws(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,O=ir(a,T);f.props=O;var J=f.context,ct=a.contextType;S=Ur,typeof ct=="object"&&ct!==null&&(S=Rn(ct));var mt=a.getDerivedStateFromProps;ct=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==S)&&rm(n,f,o,S),fa=!1;var et=n.memoizedState;f.state=et,qs(n,o,f,c),Ws(),J=n.memoizedState,T||et!==J||fa?(typeof mt=="function"&&(Lu(n,a,mt,o),J=n.memoizedState),(O=fa||am(n,a,O,o,et,J,S))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=S,o=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,hu(t,n),S=n.memoizedProps,ct=ir(a,S),f.props=ct,mt=n.pendingProps,et=f.context,J=a.contextType,O=Ur,typeof J=="object"&&J!==null&&(O=Rn(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==mt||et!==O)&&rm(n,f,o,O),fa=!1,et=n.memoizedState,f.state=et,qs(n,o,f,c),Ws();var nt=n.memoizedState;S!==mt||et!==nt||fa||t!==null&&t.dependencies!==null&&el(t.dependencies)?(typeof T=="function"&&(Lu(n,a,T,o),nt=n.memoizedState),(ct=fa||am(n,a,ct,o,et,nt,O)||t!==null&&t.dependencies!==null&&el(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,nt,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,nt,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=nt),f.props=o,f.state=nt,f.context=O,o=ct):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Sl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Gr(n,t.child,null,c),n.child=Gr(n,null,a,c)):Mn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Gi(t,n,c),t}function Sm(t,n,a,o){return zs(),n.flags|=256,Mn(t,n,a,o),n.child}var zu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Iu(t){return{baseLanes:t,cachePool:op()}}function Fu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function ym(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Re){if(c?ma(n):ga(),Re){var T=je,O;if(O=T){t:{for(O=T,T=vi;O.nodeType!==8;){if(!T){T=null;break t}if(O=ui(O.nextSibling),O===null){T=null;break t}}T=O}T!==null?(n.memoizedState={dehydrated:T,treeContext:Za!==null?{id:Pi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},O=kn(18,null,null,0),O.stateNode=T,O.return=n,n.child=O,Un=n,je=null,O=!0):O=!1}O||Ja(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Ef(T)?n.lanes=32:n.lanes=536870912,null;Hi(n)}return T=o.children,o=o.fallback,c?(ga(),c=n.mode,T=yl({mode:"hidden",children:T},c),o=ja(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,c=n.child,c.memoizedState=Iu(a),c.childLanes=Fu(t,S,a),n.memoizedState=zu,o):(ma(n),Hu(n,T))}if(O=t.memoizedState,O!==null&&(T=O.dehydrated,T!==null)){if(f)n.flags&256?(ma(n),n.flags&=-257,n=Gu(t,n,a)):n.memoizedState!==null?(ga(),n.child=t.child,n.flags|=128,n=null):(ga(),c=o.fallback,T=n.mode,o=yl({mode:"visible",children:o.children},T),c=ja(c,T,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Gr(n,t.child,null,a),o=n.child,o.memoizedState=Iu(a),o.childLanes=Fu(t,S,a),n.memoizedState=zu,n=c);else if(ma(n),Ef(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var J=S.dgst;S=J,o=Error(r(419)),o.stack="",o.digest=S,Is({value:o,source:null,stack:null}),n=Gu(t,n,a)}else if(pn||Fs(t,n,a,!1),S=(a&t.childLanes)!==0,pn||S){if(S=ke,S!==null&&(o=a&-a,o=(o&42)!==0?1:ne(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==O.retryLane))throw O.retryLane=o,Dr(t,o),jn(S,t,o),hm;T.data==="$?"||sf(),n=Gu(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=O.treeContext,je=ui(T.nextSibling),Un=n,Re=!0,Qa=null,vi=!1,t!==null&&(ti[ei++]=Pi,ti[ei++]=Bi,ti[ei++]=Za,Pi=t.id,Bi=t.overflow,Za=n),n=Hu(n,o.children),n.flags|=4096);return n}return c?(ga(),c=o.fallback,T=n.mode,O=t.child,J=O.sibling,o=Oi(O,{mode:"hidden",children:o.children}),o.subtreeFlags=O.subtreeFlags&65011712,J!==null?c=Oi(J,c):(c=ja(c,T,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,T=t.child.memoizedState,T===null?T=Iu(a):(O=T.cachePool,O!==null?(J=ln._currentValue,O=O.parent!==J?{parent:J,pool:J}:O):O=op(),T={baseLanes:T.baseLanes|a,cachePool:O}),c.memoizedState=T,c.childLanes=Fu(t,S,a),n.memoizedState=zu,o):(ma(n),a=t.child,t=a.sibling,a=Oi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Hu(t,n){return n=yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function yl(t,n){return t=kn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Gu(t,n,a){return Gr(n,t.child,null,a),t=Hu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Mm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),ru(t.return,n,a)}function Vu(t,n,a,o,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function Em(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(Mn(t,n,o.children,a),o=cn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mm(t,a,n);else if(t.tag===19)Mm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(St(cn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&_l(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Vu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&_l(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Vu(n,!0,a,null,f);break;case"together":Vu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Fs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Oi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Oi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ku(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&el(t)))}function Xv(t,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),ua(n,ln,t.memoizedState.cache),zs();break;case 27:case 5:Qt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:ua(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ym(t,n,a):(ma(n),t=Gi(t,n,a),t!==null?t.sibling:null);ma(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Fs(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Em(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(cn,cn.current),o)break;return null;case 22:case 23:return n.lanes=0,gm(t,n,a);case 24:ua(n,ln,t.memoizedState.cache)}return Gi(t,n,a)}function Tm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!ku(t,a)&&(n.flags&128)===0)return pn=!1,Xv(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,Re&&(n.flags&1048576)!==0&&tp(n,tl,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")Jc(o)?(t=ir(o,t),n.tag=1,n=xm(null,n,o,t,a)):(n.tag=0,n=Bu(null,n,o,t,a));else{if(o!=null){if(c=o.$$typeof,c===w){n.tag=11,n=dm(null,n,o,t,a);break t}else if(c===I){n.tag=14,n=pm(null,n,o,t,a);break t}}throw n=_t(o)||o,Error(r(306,n,""))}}return n;case 0:return Bu(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=ir(o,n.pendingProps),xm(t,n,o,c,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,hu(t,n),qs(n,o,null,a);var S=n.memoizedState;if(o=S.cache,ua(n,ln,o),o!==f.cache&&su(n,[ln],a,!0),Ws(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Sm(t,n,o,a);break t}else if(o!==c){c=Jn(Error(r(424)),n),Is(c),n=Sm(t,n,o,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(je=ui(t.firstChild),Un=n,Re=!0,Qa=null,vi=!0,a=nm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(zs(),o===c){n=Gi(t,n,a);break t}Mn(t,n,o,a)}n=n.child}return n;case 26:return Sl(t,n),t===null?(a=Cg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,t=n.pendingProps,o=Pl(yt.current).createElement(a),o[sn]=n,o[Sn]=t,Tn(o,a,t),tn(o),n.stateNode=o):n.memoizedState=Cg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Qt(n),t===null&&Re&&(o=n.stateNode=bg(n.type,n.pendingProps,yt.current),Un=n,vi=!0,c=je,ba(n.type)?(Tf=c,je=ui(o.firstChild)):je=c),Mn(t,n,n.pendingProps.children,a),Sl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Re&&((c=o=je)&&(o=vx(o,n.type,n.pendingProps,vi),o!==null?(n.stateNode=o,Un=n,je=ui(o.firstChild),vi=!1,c=!0):c=!1),c||Ja(n)),Qt(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,o=f.children,Sf(c,f)?o=null:S!==null&&Sf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=vu(t,n,Bv,null,null,a),mo._currentValue=c),Sl(t,n),Mn(t,n,o,a),n.child;case 6:return t===null&&Re&&((t=a=je)&&(a=xx(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Un=n,je=null,t=!0):t=!1),t||Ja(n)),null;case 13:return ym(t,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Gr(n,null,o,a):Mn(t,n,o,a),n.child;case 11:return dm(t,n,n.type,n.pendingProps,a);case 7:return Mn(t,n,n.pendingProps,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ua(n,n.type,o.value),Mn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,tr(n),c=Rn(c),o=o(c),n.flags|=1,Mn(t,n,o,a),n.child;case 14:return pm(t,n,n.type,n.pendingProps,a);case 15:return mm(t,n,n.type,n.pendingProps,a);case 19:return Em(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=yl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Oi(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return gm(t,n,a);case 24:return tr(n),o=Rn(ln),t===null?(c=cu(),c===null&&(c=ke,f=ou(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},fu(n),ua(n,ln,c)):((t.lanes&a)!==0&&(hu(t,n),qs(n,null,null,a),Ws()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ua(n,ln,o)):(o=f.cache,ua(n,ln,o),o!==c.cache&&su(n,[ln],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Vi(t){t.flags|=4}function bm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Lg(n)){if(n=ni.current,n!==null&&((Se&4194048)===Se?xi!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==xi))throw ks=uu,lp;t.flags|=8192}}function Ml(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Nt():536870912,t.lanes|=n,Wr|=n)}function $s(t,n){if(!Re)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Wv(t,n,a){var o=n.pendingProps;switch(nu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ii(ln),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Bs(n)?Vi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ip())),We(n),null;case 26:return a=n.memoizedState,t===null?(Vi(n),a!==null?(We(n),bm(n,a)):(We(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Vi(n),We(n),bm(n,a)):(We(n),n.flags&=-16777217):(t.memoizedProps!==o&&Vi(n),We(n),n.flags&=-16777217),null;case 27:Ue(n),a=yt.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Vi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return We(n),null}t=Q.current,Bs(n)?ep(n):(t=bg(c,o,a),n.stateNode=t,Vi(n))}return We(n),null;case 5:if(Ue(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Vi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(t=Q.current,Bs(n))ep(n);else{switch(c=Pl(yt.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}t[sn]=n,t[Sn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(Tn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Vi(n)}}return We(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Vi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=yt.current,Bs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Un,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||vg(t.nodeValue,a)),t||Ja(n)}else t=Pl(t).createTextNode(o),t[sn]=n,n.stateNode=t}return We(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Bs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else c=ip(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Hi(n),n):(Hi(n),null)}if(Hi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Ml(n,n.updateQueue),We(n),null;case 4:return oe(),t===null&&mf(n.stateNode.containerInfo),We(n),null;case 10:return Ii(n.type),We(n),null;case 19:if(vt(cn),c=n.memoizedState,c===null)return We(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)$s(c,!1);else{if(Ze!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=_l(t),f!==null){for(n.flags|=128,$s(c,!1),t=f.updateQueue,n.updateQueue=t,Ml(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)$d(a,t),a=a.sibling;return St(cn,cn.current&1|2),n.child}t=t.sibling}c.tail!==null&&he()>bl&&(n.flags|=128,o=!0,$s(c,!1),n.lanes=4194304)}else{if(!o)if(t=_l(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Ml(n,t),$s(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Re)return We(n),null}else 2*he()-c.renderingStartTime>bl&&a!==536870912&&(n.flags|=128,o=!0,$s(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=he(),n.sibling=null,t=cn.current,St(cn,o?t&1|2:t&1),n):(We(n),null);case 22:case 23:return Hi(n),gu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Ml(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&vt(er),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ii(ln),We(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function qv(t,n){switch(nu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ii(ln),oe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ue(n),null;case 13:if(Hi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));zs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return vt(cn),null;case 4:return oe(),null;case 10:return Ii(n.type),null;case 22:case 23:return Hi(n),gu(),t!==null&&vt(er),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ii(ln),null;case 25:return null;default:return null}}function Am(t,n){switch(nu(n),n.tag){case 3:Ii(ln),oe();break;case 26:case 27:case 5:Ue(n);break;case 4:oe();break;case 13:Hi(n);break;case 19:vt(cn);break;case 10:Ii(n.type);break;case 22:case 23:Hi(n),gu(),t!==null&&vt(er);break;case 24:Ii(ln)}}function to(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==c)}}catch(T){Fe(n,n.return,T)}}function _a(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var O=a,J=T;try{J()}catch(ct){Fe(c,O,ct)}}}o=o.next}while(o!==f)}}catch(ct){Fe(n,n.return,ct)}}function Rm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{pp(n,a)}catch(o){Fe(t,t.return,o)}}}function Cm(t,n,a){a.props=ir(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(t,n,o)}}function eo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Fe(t,n,c)}}function Si(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Fe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Fe(t,n,c)}else a.current=null}function wm(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Fe(t,t.return,c)}}function Xu(t,n,a){try{var o=t.stateNode;dx(o,t.type,a,n),o[Sn]=n}catch(c){Fe(t,t.return,c)}}function Dm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ba(t.type)||t.tag===4}function Wu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Dm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ba(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qu(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ol));else if(o!==4&&(o===27&&ba(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(qu(t,n,a),t=t.sibling;t!==null;)qu(t,n,a),t=t.sibling}function El(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&ba(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(El(t,n,a),t=t.sibling;t!==null;)El(t,n,a),t=t.sibling}function Um(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,o,a),n[sn]=t,n[Sn]=a}catch(f){Fe(t,t.return,f)}}var ki=!1,Je=!1,Yu=!1,Nm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Yv(t,n){if(t=t.containerInfo,vf=Gl,t=kd(t),Wc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,O=-1,J=0,ct=0,mt=t,et=null;e:for(;;){for(var nt;mt!==a||c!==0&&mt.nodeType!==3||(T=S+c),mt!==f||o!==0&&mt.nodeType!==3||(O=S+o),mt.nodeType===3&&(S+=mt.nodeValue.length),(nt=mt.firstChild)!==null;)et=mt,mt=nt;for(;;){if(mt===t)break e;if(et===a&&++J===c&&(T=S),et===f&&++ct===o&&(O=S),(nt=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=nt}a=T===-1||O===-1?null:{start:T,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(xf={focusedElem:t,selectionRange:a},Gl=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ee=ir(a.type,c,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(ee,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){Fe(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Mf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Mf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Lm(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:va(t,a),o&4&&to(5,a);break;case 1:if(va(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Fe(a,a.return,S)}else{var c=ir(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Fe(a,a.return,S)}}o&64&&Rm(a),o&512&&eo(a,a.return);break;case 3:if(va(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{pp(t,n)}catch(S){Fe(a,a.return,S)}}break;case 27:n===null&&o&4&&Um(a);case 26:case 5:va(t,a),n===null&&o&4&&wm(a),o&512&&eo(a,a.return);break;case 12:va(t,a);break;case 13:va(t,a),o&4&&Bm(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=nx.bind(null,a),Sx(t,a))));break;case 22:if(o=a.memoizedState!==null||ki,!o){n=n!==null&&n.memoizedState!==null||Je,c=ki;var f=Je;ki=o,(Je=n)&&!f?xa(t,a,(a.subtreeFlags&8772)!==0):va(t,a),ki=c,Je=f}break;case 30:break;default:va(t,a)}}function Om(t){var n=t.alternate;n!==null&&(t.alternate=null,Om(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&sa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Xe=null,Bn=!1;function Xi(t,n,a){for(a=a.child;a!==null;)Pm(t,n,a),a=a.sibling}function Pm(t,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:Je||Si(a,n),Xi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||Si(a,n);var o=Xe,c=Bn;ba(a.type)&&(Xe=a.stateNode,Bn=!1),Xi(t,n,a),uo(a.stateNode),Xe=o,Bn=c;break;case 5:Je||Si(a,n);case 6:if(o=Xe,c=Bn,Xe=null,Xi(t,n,a),Xe=o,Bn=c,Xe!==null)if(Bn)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Xe.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Xe!==null&&(Bn?(t=Xe,Eg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),xo(t)):Eg(Xe,a.stateNode));break;case 4:o=Xe,c=Bn,Xe=a.stateNode.containerInfo,Bn=!0,Xi(t,n,a),Xe=o,Bn=c;break;case 0:case 11:case 14:case 15:Je||_a(2,a,n),Je||_a(4,a,n),Xi(t,n,a);break;case 1:Je||(Si(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Cm(a,n,o)),Xi(t,n,a);break;case 21:Xi(t,n,a);break;case 22:Je=(o=Je)||a.memoizedState!==null,Xi(t,n,a),Je=o;break;default:Xi(t,n,a)}}function Bm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xo(t)}catch(a){Fe(n,n.return,a)}}function jv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Nm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Nm),n;default:throw Error(r(435,t.tag))}}function ju(t,n){var a=jv(t);n.forEach(function(o){var c=ix.bind(null,t,o);a.has(o)||(a.add(o),o.then(c,c))})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(ba(T.type)){Xe=T.stateNode,Bn=!1;break t}break;case 5:Xe=T.stateNode,Bn=!1;break t;case 3:case 4:Xe=T.stateNode.containerInfo,Bn=!0;break t}T=T.return}if(Xe===null)throw Error(r(160));Pm(f,S,c),Xe=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)zm(n,t),n=n.sibling}var ci=null;function zm(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),o&4&&(_a(3,t,t.return),to(3,t),_a(5,t,t.return));break;case 1:Xn(n,t),Wn(t),o&512&&(Je||a===null||Si(a,a.return)),o&64&&ki&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=ci;if(Xn(n,t),Wn(t),o&512&&(Je||a===null||Si(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){t:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ra]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,o,a),f[sn]=t,tn(f),o=f;break t;case"link":var S=Ug("link","href",c).get(o+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=c.createElement(o),Tn(f,o,a),c.head.appendChild(f);break;case"meta":if(S=Ug("meta","content",c).get(o+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=c.createElement(o),Tn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[sn]=t,tn(f),o=f}t.stateNode=o}else Ng(c,t.type,t.stateNode);else t.stateNode=Dg(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Ng(c,t.type,t.stateNode):Dg(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Xu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),o&512&&(Je||a===null||Si(a,a.return)),a!==null&&o&4&&Xu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),o&512&&(Je||a===null||Si(a,a.return)),t.flags&32){c=t.stateNode;try{_i(c,"")}catch(nt){Fe(t,t.return,nt)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,Xu(t,c,a!==null?a.memoizedProps:c)),o&1024&&(Yu=!0);break;case 6:if(Xn(n,t),Wn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(nt){Fe(t,t.return,nt)}}break;case 3:if(Il=null,c=ci,ci=Bl(n.containerInfo),Xn(n,t),ci=c,Wn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xo(n.containerInfo)}catch(nt){Fe(t,t.return,nt)}Yu&&(Yu=!1,Im(t));break;case 4:o=ci,ci=Bl(t.stateNode.containerInfo),Xn(n,t),Wn(t),ci=o;break;case 12:Xn(n,t),Wn(t);break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tf=he()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ju(t,o)));break;case 22:c=t.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,J=ki,ct=Je;if(ki=J||c,Je=ct||O,Xn(n,t),Je=ct,ki=J,Wn(t),o&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||O||ki||Je||ar(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=O.stateNode;var mt=O.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(nt){Fe(O,O.return,nt)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=c?"":O.memoizedProps}catch(nt){Fe(O,O.return,nt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ju(t,a))));break;case 19:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ju(t,o)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Dm(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Wu(t);El(t,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(_i(S,""),a.flags&=-33);var T=Wu(t);El(t,T,S);break;case 3:case 4:var O=a.stateNode.containerInfo,J=Wu(t);qu(t,J,O);break;default:throw Error(r(161))}}catch(ct){Fe(t,t.return,ct)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Im(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Im(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function va(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Lm(t,n.alternate,n),n=n.sibling}function ar(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),ar(n);break;case 1:Si(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Cm(n,n.return,a),ar(n);break;case 27:uo(n.stateNode);case 26:case 5:Si(n,n.return),ar(n);break;case 22:n.memoizedState===null&&ar(n);break;case 30:ar(n);break;default:ar(n)}t=t.sibling}}function xa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:xa(c,f,a),to(4,f);break;case 1:if(xa(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Fe(o,o.return,J)}if(o=f,c=o.updateQueue,c!==null){var T=o.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)dp(O[c],T)}catch(J){Fe(o,o.return,J)}}a&&S&64&&Rm(f),eo(f,f.return);break;case 27:Um(f);case 26:case 5:xa(c,f,a),a&&o===null&&S&4&&wm(f),eo(f,f.return);break;case 12:xa(c,f,a);break;case 13:xa(c,f,a),a&&S&4&&Bm(c,f);break;case 22:f.memoizedState===null&&xa(c,f,a),eo(f,f.return);break;case 30:break;default:xa(c,f,a)}n=n.sibling}}function Zu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Hs(a))}function Ku(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Hs(t))}function yi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Fm(t,n,a,o),n=n.sibling}function Fm(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,o),c&2048&&to(9,n);break;case 1:yi(t,n,a,o);break;case 3:yi(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Hs(t)));break;case 12:if(c&2048){yi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(O){Fe(n,n.return,O)}}else yi(t,n,a,o);break;case 13:yi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?yi(t,n,a,o):no(t,n):f._visibility&2?yi(t,n,a,o):(f._visibility|=2,Vr(t,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&Zu(S,n);break;case 24:yi(t,n,a,o),c&2048&&Ku(n.alternate,n);break;default:yi(t,n,a,o)}}function Vr(t,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,T=a,O=o,J=S.flags;switch(S.tag){case 0:case 11:case 15:Vr(f,S,T,O,c),to(8,S);break;case 23:break;case 22:var ct=S.stateNode;S.memoizedState!==null?ct._visibility&2?Vr(f,S,T,O,c):no(f,S):(ct._visibility|=2,Vr(f,S,T,O,c)),c&&J&2048&&Zu(S.alternate,S);break;case 24:Vr(f,S,T,O,c),c&&J&2048&&Ku(S.alternate,S);break;default:Vr(f,S,T,O,c)}n=n.sibling}}function no(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:no(a,o),c&2048&&Zu(o.alternate,o);break;case 24:no(a,o),c&2048&&Ku(o.alternate,o);break;default:no(a,o)}n=n.sibling}}var io=8192;function kr(t){if(t.subtreeFlags&io)for(t=t.child;t!==null;)Hm(t),t=t.sibling}function Hm(t){switch(t.tag){case 26:kr(t),t.flags&io&&t.memoizedState!==null&&Lx(ci,t.memoizedState,t.memoizedProps);break;case 5:kr(t);break;case 3:case 4:var n=ci;ci=Bl(t.stateNode.containerInfo),kr(t),ci=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=io,io=16777216,kr(t),io=n):kr(t));break;default:kr(t)}}function Gm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ao(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,km(o,t)}Gm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Vm(t),t=t.sibling}function Vm(t){switch(t.tag){case 0:case 11:case 15:ao(t),t.flags&2048&&_a(9,t,t.return);break;case 3:ao(t);break;case 12:ao(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Tl(t)):ao(t);break;default:ao(t)}}function Tl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,km(o,t)}Gm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_a(8,n,n.return),Tl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Tl(n));break;default:Tl(n)}t=t.sibling}}function km(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Hs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,mn=o;else t:for(a=t;mn!==null;){o=mn;var c=o.sibling,f=o.return;if(Om(o),o===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var Zv={getCacheForType:function(t){var n=Rn(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Kv=typeof WeakMap=="function"?WeakMap:Map,we=0,ke=null,de=null,Se=0,De=0,qn=null,Sa=!1,Xr=!1,Qu=!1,Wi=0,Ze=0,ya=0,rr=0,Ju=0,ii=0,Wr=0,ro=null,zn=null,$u=!1,tf=0,bl=1/0,Al=null,Ma=null,En=0,Ea=null,qr=null,Yr=0,ef=0,nf=null,Xm=null,so=0,af=null;function Yn(){if((we&2)!==0&&Se!==0)return Se&-Se;if(P.T!==null){var t=Or;return t!==0?t:ff()}return Ee()}function Wm(){ii===0&&(ii=(Se&536870912)===0||Re?V():536870912);var t=ni.current;return t!==null&&(t.flags|=32),ii}function jn(t,n,a){(t===ke&&(De===2||De===9)||t.cancelPendingCommit!==null)&&(jr(t,0),Ta(t,Se,ii,!1)),zt(t,a),((we&2)===0||t!==ke)&&(t===ke&&((we&2)===0&&(rr|=a),Ze===4&&Ta(t,Se,ii,!1)),Mi(t))}function qm(t,n,a){if((we&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Ct(t,n),c=o?$v(t,n):of(t,n,!0),f=o;do{if(c===0){Xr&&!o&&Ta(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Qv(a)){c=of(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=t;c=ro;var O=T.current.memoizedState.isDehydrated;if(O&&(jr(T,S).flags|=256),S=of(T,S,!1),S!==2){if(Qu&&!O){T.errorRecoveryDisabledLanes|=f,rr|=f,c=4;break t}f=zn,zn=c,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){jr(t,0),Ta(t,n,0,!0);break}t:{switch(o=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(o,n,ii,!Sa);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=tf+300-he(),10<c)){if(Ta(o,n,ii,!Sa),Yt(o,0,!0)!==0)break t;o.timeoutHandle=yg(Ym.bind(null,o,a,zn,Al,$u,n,ii,rr,Wr,Sa,f,2,-0,0),c);break t}Ym(o,a,zn,Al,$u,n,ii,rr,Wr,Sa,f,0,-0,0)}}break}while(!0);Mi(t)}function Ym(t,n,a,o,c,f,S,T,O,J,ct,mt,et,nt){if(t.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(po={stylesheets:null,count:0,unsuspend:Nx},Hm(n),mt=Ox(),mt!==null)){t.cancelPendingCommit=mt(tg.bind(null,t,n,f,a,o,c,S,T,O,ct,1,et,nt)),Ta(t,f,S,!J);return}tg(t,n,f,a,o,c,S,T,O)}function Qv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Vn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(t,n,a,o){n&=~Ju,n&=~rr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),S=1<<f;o[f]=-1,c&=~S}a!==0&&gt(t,a,n)}function Rl(){return(we&6)===0?(oo(0),!1):!0}function rf(){if(de!==null){if(De===0)var t=de.return;else t=de,zi=$a=null,yu(t),Hr=null,Qs=0,t=de;for(;t!==null;)Am(t.alternate,t),t=t.return;de=null}}function jr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,mx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),rf(),ke=t,de=a=Oi(t.current,null),Se=n,De=0,qn=null,Sa=!1,Xr=Ct(t,n),Qu=!1,Wr=ii=Ju=rr=ya=Ze=0,zn=ro=null,$u=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Pt(o),f=1<<c;n|=t[c],o&=~f}return Wi=n,Zo(),a}function jm(t,n){ue=null,P.H=pl,n===Vs||n===al?(n=fp(),De=3):n===lp?(n=fp(),De=4):De=n===hm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,de===null&&(Ze=1,xl(t,Jn(n,t.current)))}function Zm(){var t=P.H;return P.H=pl,t===null?pl:t}function Km(){var t=P.A;return P.A=Zv,t}function sf(){Ze=4,Sa||(Se&4194048)!==Se&&ni.current!==null||(Xr=!0),(ya&134217727)===0&&(rr&134217727)===0||ke===null||Ta(ke,Se,ii,!1)}function of(t,n,a){var o=we;we|=2;var c=Zm(),f=Km();(ke!==t||Se!==n)&&(Al=null,jr(t,n)),n=!1;var S=Ze;t:do try{if(De!==0&&de!==null){var T=de,O=qn;switch(De){case 8:rf(),S=6;break t;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var J=De;if(De=0,qn=null,Zr(t,T,O,J),a&&Xr){S=0;break t}break;default:J=De,De=0,qn=null,Zr(t,T,O,J)}}Jv(),S=Ze;break}catch(ct){jm(t,ct)}while(!0);return n&&t.shellSuspendCounter++,zi=$a=null,we=o,P.H=c,P.A=f,de===null&&(ke=null,Se=0,Zo()),S}function Jv(){for(;de!==null;)Qm(de)}function $v(t,n){var a=we;we|=2;var o=Zm(),c=Km();ke!==t||Se!==n?(Al=null,bl=he()+500,jr(t,n)):Xr=Ct(t,n);t:do try{if(De!==0&&de!==null){n=de;var f=qn;e:switch(De){case 1:De=0,qn=null,Zr(t,n,f,1);break;case 2:case 9:if(cp(f)){De=0,qn=null,Jm(n);break}n=function(){De!==2&&De!==9||ke!==t||(De=7),Mi(t)},f.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:cp(f)?(De=0,qn=null,Jm(n)):(De=0,qn=null,Zr(t,n,f,7));break;case 5:var S=null;switch(de.tag){case 26:S=de.memoizedState;case 5:case 27:var T=de;if(!S||Lg(S)){De=0,qn=null;var O=T.sibling;if(O!==null)de=O;else{var J=T.return;J!==null?(de=J,Cl(J)):de=null}break e}}De=0,qn=null,Zr(t,n,f,5);break;case 6:De=0,qn=null,Zr(t,n,f,6);break;case 8:rf(),Ze=6;break t;default:throw Error(r(462))}}tx();break}catch(ct){jm(t,ct)}while(!0);return zi=$a=null,P.H=o,P.A=c,we=a,de!==null?0:(ke=null,Se=0,Zo(),Ze)}function tx(){for(;de!==null&&!xn();)Qm(de)}function Qm(t){var n=Tm(t.alternate,t,Wi);t.memoizedProps=t.pendingProps,n===null?Cl(t):de=n}function Jm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=vm(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=vm(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:yu(n);default:Am(a,n),n=de=$d(n,Wi),n=Tm(a,n,Wi)}t.memoizedProps=t.pendingProps,n===null?Cl(t):de=n}function Zr(t,n,a,o){zi=$a=null,yu(n),Hr=null,Qs=0;var c=n.return;try{if(kv(t,c,n,a,Se)){Ze=1,xl(t,Jn(a,t.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;Ze=1,xl(t,Jn(a,t.current)),de=null;return}n.flags&32768?(Re||o===1?t=!0:Xr||(Se&536870912)!==0?t=!1:(Sa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),$m(n,t)):Cl(n)}function Cl(t){var n=t;do{if((n.flags&32768)!==0){$m(n,Sa);return}t=n.return;var a=Wv(n.alternate,n,Wi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=t}while(n!==null);Ze===0&&(Ze=5)}function $m(t,n){do{var a=qv(t.alternate,t);if(a!==null){a.flags&=32767,de=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){de=t;return}de=t=a}while(t!==null);Ze=6,de=null}function tg(t,n,a,o,c,f,S,T,O){t.cancelPendingCommit=null;do wl();while(En!==0);if((we&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Kc,At(t,a,f,S,T,O),t===ke&&(de=ke=null,Se=0),qr=n,Ea=t,Yr=a,ef=f,nf=c,Xm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ax(ae,function(){return rg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,c=Z.p,Z.p=2,S=we,we|=4;try{Yv(t,n,a)}finally{we=S,Z.p=c,P.T=o}}En=1,eg(),ng(),ig()}}function eg(){if(En===1){En=0;var t=Ea,n=qr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=Z.p;Z.p=2;var c=we;we|=4;try{zm(n,t);var f=xf,S=kd(t.containerInfo),T=f.focusedElem,O=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&Vd(T.ownerDocument.documentElement,T)){if(O!==null&&Wc(T)){var J=O.start,ct=O.end;if(ct===void 0&&(ct=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ct,T.value.length);else{var mt=T.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var nt=et.getSelection(),ee=T.textContent.length,Jt=Math.min(O.start,ee),Oe=O.end===void 0?Jt:Math.min(O.end,ee);!nt.extend&&Jt>Oe&&(S=Oe,Oe=Jt,Jt=S);var X=Gd(T,Jt),F=Gd(T,Oe);if(X&&F&&(nt.rangeCount!==1||nt.anchorNode!==X.node||nt.anchorOffset!==X.offset||nt.focusNode!==F.node||nt.focusOffset!==F.offset)){var K=mt.createRange();K.setStart(X.node,X.offset),nt.removeAllRanges(),Jt>Oe?(nt.addRange(K),nt.extend(F.node,F.offset)):(K.setEnd(F.node,F.offset),nt.addRange(K))}}}}for(mt=[],nt=T;nt=nt.parentNode;)nt.nodeType===1&&mt.push({element:nt,left:nt.scrollLeft,top:nt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var ft=mt[T];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}Gl=!!vf,xf=vf=null}finally{we=c,Z.p=o,P.T=a}}t.current=n,En=2}}function ng(){if(En===2){En=0;var t=Ea,n=qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=Z.p;Z.p=2;var c=we;we|=4;try{Lm(t,n.alternate,n)}finally{we=c,Z.p=o,P.T=a}}En=3}}function ig(){if(En===4||En===3){En=0,ye();var t=Ea,n=qr,a=Yr,o=Xm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,qr=Ea=null,ag(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ma=null),Ce(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,c=Z.p,Z.p=2,P.T=null;try{for(var f=t.onRecoverableError,S=0;S<o.length;S++){var T=o[S];f(T.value,{componentStack:T.stack})}}finally{P.T=n,Z.p=c}}(Yr&3)!==0&&wl(),Mi(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===af?so++:(so=0,af=t):so=0,oo(0)}}function ag(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Hs(n)))}function wl(t){return eg(),ng(),ig(),rg()}function rg(){if(En!==5)return!1;var t=Ea,n=ef;ef=0;var a=Ce(Yr),o=P.T,c=Z.p;try{Z.p=32>a?32:a,P.T=null,a=nf,nf=null;var f=Ea,S=Yr;if(En=0,qr=Ea=null,Yr=0,(we&6)!==0)throw Error(r(331));var T=we;if(we|=4,Vm(f.current),Fm(f,f.current,S,a),we=T,oo(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{Z.p=c,P.T=o,ag(t,n)}}function sg(t,n,a){n=Jn(a,n),n=Pu(t.stateNode,n,2),t=da(t,n,2),t!==null&&(zt(t,2),Mi(t))}function Fe(t,n,a){if(t.tag===3)sg(t,t,a);else for(;n!==null;){if(n.tag===3){sg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ma===null||!Ma.has(o))){t=Jn(a,t),a=um(2),o=da(n,a,2),o!==null&&(fm(a,o,n,t),zt(o,2),Mi(o));break}}n=n.return}}function lf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Kv;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Qu=!0,c.add(a),t=ex.bind(null,t,n,a),n.then(t,t))}function ex(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ke===t&&(Se&a)===a&&(Ze===4||Ze===3&&(Se&62914560)===Se&&300>he()-tf?(we&2)===0&&jr(t,0):Ju|=a,Wr===Se&&(Wr=0)),Mi(t)}function og(t,n){n===0&&(n=Nt()),t=Dr(t,n),t!==null&&(zt(t,n),Mi(t))}function nx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),og(t,a)}function ix(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),og(t,a)}function ax(t,n){return me(t,n)}var Dl=null,Kr=null,cf=!1,Ul=!1,uf=!1,sr=0;function Mi(t){t!==Kr&&t.next===null&&(Kr===null?Dl=Kr=t:Kr=Kr.next=t),Ul=!0,cf||(cf=!0,sx())}function oo(t,n){if(!uf&&Ul){uf=!0;do for(var a=!1,o=Dl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var S=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=c&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,fg(o,f))}else f=Se,f=Yt(o,o===ke?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ct(o,f)||(a=!0,fg(o,f));o=o.next}while(a);uf=!1}}function rx(){lg()}function lg(){Ul=cf=!1;var t=0;sr!==0&&(px()&&(t=sr),sr=0);for(var n=he(),a=null,o=Dl;o!==null;){var c=o.next,f=cg(o,n);f===0?(o.next=null,a===null?Dl=c:a.next=c,c===null&&(Kr=a)):(a=o,(t!==0||(f&3)!==0)&&(Ul=!0)),o=c}oo(t)}function cg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Pt(f),T=1<<S,O=c[S];O===-1?((T&a)===0||(T&o)!==0)&&(c[S]=ie(T,n)):O<=n&&(t.expiredLanes|=T),f&=~T}if(n=ke,a=Se,a=Yt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(De===2||De===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&z(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ct(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&z(o),Ce(a)){case 2:case 8:a=jt;break;case 32:a=ae;break;case 268435456:a=N;break;default:a=ae}return o=ug.bind(null,t),a=me(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&z(o),t.callbackPriority=2,t.callbackNode=null,2}function ug(t,n){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(wl()&&t.callbackNode!==a)return null;var o=Se;return o=Yt(t,t===ke?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(qm(t,o,n),cg(t,he()),t.callbackNode!=null&&t.callbackNode===a?ug.bind(null,t):null)}function fg(t,n){if(wl())return null;qm(t,n,!0)}function sx(){gx(function(){(we&6)!==0?me(ge,rx):lg()})}function ff(){return sr===0&&(sr=V()),sr}function hg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Vo(""+t)}function dg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ox(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=hg((c[Sn]||null).action),S=o.submitter;S&&(n=(n=S[Sn]||null)?hg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new qo("action","action",null,o,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(sr!==0){var O=S?dg(c,S):new FormData(c);Du(a,{pending:!0,data:O,method:c.method,action:f},null,O)}}else typeof f=="function"&&(T.preventDefault(),O=S?dg(c,S):new FormData(c),Du(a,{pending:!0,data:O,method:c.method,action:f},f,O))},currentTarget:c}]})}}for(var hf=0;hf<Zc.length;hf++){var df=Zc[hf],lx=df.toLowerCase(),cx=df[0].toUpperCase()+df.slice(1);li(lx,"on"+cx)}li(qd,"onAnimationEnd"),li(Yd,"onAnimationIteration"),li(jd,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(Av,"onTransitionRun"),li(Rv,"onTransitionStart"),li(Cv,"onTransitionCancel"),li(Zd,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),Di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Di("onBeforeInput",["compositionend","keypress","textInput","paste"]),Di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ux=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lo));function pg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var T=o[S],O=T.instance,J=T.currentTarget;if(T=T.listener,O!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=J;try{f(c)}catch(ct){vl(ct)}c.currentTarget=null,f=O}else for(S=0;S<o.length;S++){if(T=o[S],O=T.instance,J=T.currentTarget,T=T.listener,O!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=J;try{f(c)}catch(ct){vl(ct)}c.currentTarget=null,f=O}}}}function pe(t,n){var a=n[Va];a===void 0&&(a=n[Va]=new Set);var o=t+"__bubble";a.has(o)||(mg(n,t,2,!1),a.add(o))}function pf(t,n,a){var o=0;n&&(o|=4),mg(a,t,o,n)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function mf(t){if(!t[Nl]){t[Nl]=!0,Ho.forEach(function(a){a!=="selectionchange"&&(ux.has(a)||pf(a,!1,t),pf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Nl]||(n[Nl]=!0,pf("selectionchange",!1,n))}}function mg(t,n,a,o){switch(Fg(n)){case 2:var c=zx;break;case 8:c=Ix;break;default:c=wf}a=c.bind(null,n,a,t),c=void 0,!Bc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function gf(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===c)break;if(S===4)for(S=o.return;S!==null;){var O=S.tag;if((O===3||O===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;T!==null;){if(S=Ci(T),S===null)return;if(O=S.tag,O===5||O===6||O===26||O===27){o=f=S;continue t}T=T.parentNode}}o=o.return}Md(function(){var J=f,ct=Oc(a),mt=[];t:{var et=Kd.get(t);if(et!==void 0){var nt=qo,ee=t;switch(t){case"keypress":if(Xo(a)===0)break t;case"keydown":case"keyup":nt=av;break;case"focusin":ee="focus",nt=Hc;break;case"focusout":ee="blur",nt=Hc;break;case"beforeblur":case"afterblur":nt=Hc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":nt=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":nt=q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":nt=ov;break;case qd:case Yd:case jd:nt=Z0;break;case Zd:nt=cv;break;case"scroll":case"scrollend":nt=X0;break;case"wheel":nt=fv;break;case"copy":case"cut":case"paste":nt=Q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":nt=Rd;break;case"toggle":case"beforetoggle":nt=dv}var Jt=(n&4)!==0,Oe=!Jt&&(t==="scroll"||t==="scrollend"),X=Jt?et!==null?et+"Capture":null:et;Jt=[];for(var F=J,K;F!==null;){var ft=F;if(K=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||K===null||X===null||(ft=Rs(F,X),ft!=null&&Jt.push(co(F,ft,K))),Oe)break;F=F.return}0<Jt.length&&(et=new nt(et,ee,null,a,ct),mt.push({event:et,listeners:Jt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",nt=t==="mouseout"||t==="pointerout",et&&a!==Lc&&(ee=a.relatedTarget||a.fromElement)&&(Ci(ee)||ee[Ln]))break t;if((nt||et)&&(et=ct.window===ct?ct:(et=ct.ownerDocument)?et.defaultView||et.parentWindow:window,nt?(ee=a.relatedTarget||a.toElement,nt=J,ee=ee?Ci(ee):null,ee!==null&&(Oe=u(ee),Jt=ee.tag,ee!==Oe||Jt!==5&&Jt!==27&&Jt!==6)&&(ee=null)):(nt=null,ee=J),nt!==ee)){if(Jt=bd,ft="onMouseLeave",X="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=Rd,ft="onPointerLeave",X="onPointerEnter",F="pointer"),Oe=nt==null?et:Xa(nt),K=ee==null?et:Xa(ee),et=new Jt(ft,F+"leave",nt,a,ct),et.target=Oe,et.relatedTarget=K,ft=null,Ci(ct)===J&&(Jt=new Jt(X,F+"enter",ee,a,ct),Jt.target=K,Jt.relatedTarget=Oe,ft=Jt),Oe=ft,nt&&ee)e:{for(Jt=nt,X=ee,F=0,K=Jt;K;K=Qr(K))F++;for(K=0,ft=X;ft;ft=Qr(ft))K++;for(;0<F-K;)Jt=Qr(Jt),F--;for(;0<K-F;)X=Qr(X),K--;for(;F--;){if(Jt===X||X!==null&&Jt===X.alternate)break e;Jt=Qr(Jt),X=Qr(X)}Jt=null}else Jt=null;nt!==null&&gg(mt,et,nt,Jt,!1),ee!==null&&Oe!==null&&gg(mt,Oe,ee,Jt,!0)}}t:{if(et=J?Xa(J):window,nt=et.nodeName&&et.nodeName.toLowerCase(),nt==="select"||nt==="input"&&et.type==="file")var Ht=Pd;else if(Ld(et))if(Bd)Ht=Ev;else{Ht=yv;var fe=Sv}else nt=et.nodeName,!nt||nt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?J&&Nc(J.elementType)&&(Ht=Pd):Ht=Mv;if(Ht&&(Ht=Ht(t,J))){Od(mt,Ht,a,ct);break t}fe&&fe(t,et,J),t==="focusout"&&J&&et.type==="number"&&J.memoizedProps.value!=null&&An(et,"number",et.value)}switch(fe=J?Xa(J):window,t){case"focusin":(Ld(fe)||fe.contentEditable==="true")&&(Rr=fe,qc=J,Ps=null);break;case"focusout":Ps=qc=Rr=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,Xd(mt,a,ct);break;case"selectionchange":if(bv)break;case"keydown":case"keyup":Xd(mt,a,ct)}var Wt;if(Vc)t:{switch(t){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Ar?Ud(t,a)&&(te="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(Cd&&a.locale!=="ko"&&(Ar||te!=="onCompositionStart"?te==="onCompositionEnd"&&Ar&&(Wt=Ed()):(ca=ct,zc="value"in ca?ca.value:ca.textContent,Ar=!0)),fe=Ll(J,te),0<fe.length&&(te=new Ad(te,t,null,a,ct),mt.push({event:te,listeners:fe}),Wt?te.data=Wt:(Wt=Nd(a),Wt!==null&&(te.data=Wt)))),(Wt=mv?gv(t,a):_v(t,a))&&(te=Ll(J,"onBeforeInput"),0<te.length&&(fe=new Ad("onBeforeInput","beforeinput",null,a,ct),mt.push({event:fe,listeners:te}),fe.data=Wt)),ox(mt,t,J,a,ct)}pg(mt,n)})}function co(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ll(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Rs(t,a),c!=null&&o.unshift(co(t,c,f)),c=Rs(t,n),c!=null&&o.push(co(t,c,f))),t.tag===3)return o;t=t.return}return[]}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function gg(t,n,a,o,c){for(var f=n._reactName,S=[];a!==null&&a!==o;){var T=a,O=T.alternate,J=T.stateNode;if(T=T.tag,O!==null&&O===o)break;T!==5&&T!==26&&T!==27||J===null||(O=J,c?(J=Rs(a,f),J!=null&&S.unshift(co(a,J,O))):c||(J=Rs(a,f),J!=null&&S.push(co(a,J,O)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var fx=/\r\n?/g,hx=/\u0000|\uFFFD/g;function _g(t){return(typeof t=="string"?t:""+t).replace(fx,`
`).replace(hx,"")}function vg(t,n){return n=_g(n),_g(t)===n}function Ol(){}function Le(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||_i(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&_i(t,""+o);break;case"className":Dt(t,"class",o);break;case"tabIndex":Dt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Dt(t,a,o);break;case"style":Sd(t,o,f);break;case"data":if(n!=="object"){Dt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Vo(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Le(t,n,"name",c.name,c,null),Le(t,n,"formEncType",c.formEncType,c,null),Le(t,n,"formMethod",c.formMethod,c,null),Le(t,n,"formTarget",c.formTarget,c,null)):(Le(t,n,"encType",c.encType,c,null),Le(t,n,"method",c.method,c,null),Le(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Vo(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ol);break;case"onScroll":o!=null&&pe("scroll",t);break;case"onScrollEnd":o!=null&&pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Vo(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":pe("beforetoggle",t),pe("toggle",t),Tt(t,"popover",o);break;case"xlinkActuate":Ot(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ot(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ot(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ot(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ot(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ot(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ot(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ot(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ot(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Tt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=V0.get(a)||a,Tt(t,a,o))}}function _f(t,n,a,o,c,f){switch(a){case"style":Sd(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?_i(t,o):(typeof o=="number"||typeof o=="bigint")&&_i(t,""+o);break;case"onScroll":o!=null&&pe("scroll",t);break;case"onScrollEnd":o!=null&&pe("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ol);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Go.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break t}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Tt(t,a,o)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",t),pe("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,f,S,a,null)}}c&&Le(t,n,"srcSet",a.srcSet,a,null),o&&Le(t,n,"src",a.src,a,null);return;case"input":pe("invalid",t);var T=f=S=c=null,O=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ct=a[o];if(ct!=null)switch(o){case"name":c=ct;break;case"type":S=ct;break;case"checked":O=ct;break;case"defaultChecked":J=ct;break;case"value":f=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Le(t,n,o,ct,a,null)}}Ie(t,f,T,O,J,S,c,!1),Ye(t);return;case"select":pe("invalid",t),o=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:Le(t,n,c,T,a,null)}n=f,a=S,t.multiple=!!o,n!=null?on(t,!!o,n,!1):a!=null&&on(t,!!o,a,!0);return;case"textarea":pe("invalid",t),f=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Le(t,n,S,T,a,null)}yn(t,o,c,f),Ye(t);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(o=a[O],o!=null))switch(O){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Le(t,n,O,o,a,null)}return;case"dialog":pe("beforetoggle",t),pe("toggle",t),pe("cancel",t),pe("close",t);break;case"iframe":case"object":pe("load",t);break;case"video":case"audio":for(o=0;o<lo.length;o++)pe(lo[o],t);break;case"image":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"embed":case"source":case"link":pe("error",t),pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,J,o,a,null)}return;default:if(Nc(n)){for(ct in a)a.hasOwnProperty(ct)&&(o=a[ct],o!==void 0&&_f(t,n,ct,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Le(t,n,T,o,a,null))}function dx(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,T=null,O=null,J=null,ct=null;for(nt in a){var mt=a[nt];if(a.hasOwnProperty(nt)&&mt!=null)switch(nt){case"checked":break;case"value":break;case"defaultValue":O=mt;default:o.hasOwnProperty(nt)||Le(t,n,nt,null,o,mt)}}for(var et in o){var nt=o[et];if(mt=a[et],o.hasOwnProperty(et)&&(nt!=null||mt!=null))switch(et){case"type":f=nt;break;case"name":c=nt;break;case"checked":J=nt;break;case"defaultChecked":ct=nt;break;case"value":S=nt;break;case"defaultValue":T=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:nt!==mt&&Le(t,n,et,nt,o,mt)}}Ui(t,S,T,O,J,ct,f,c);return;case"select":nt=S=T=et=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":nt=O;default:o.hasOwnProperty(f)||Le(t,n,f,null,o,O)}for(c in o)if(f=o[c],O=a[c],o.hasOwnProperty(c)&&(f!=null||O!=null))switch(c){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==O&&Le(t,n,c,f,o,O)}n=T,a=S,o=nt,et!=null?on(t,!!a,et,!1):!!o!=!!a&&(n!=null?on(t,!!a,n,!0):on(t,!!a,a?[]:"",!1));return;case"textarea":nt=et=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Le(t,n,T,null,o,c)}for(S in o)if(c=o[S],f=a[S],o.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":et=c;break;case"defaultValue":nt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Le(t,n,S,c,o,f)}dn(t,et,nt);return;case"option":for(var ee in a)if(et=a[ee],a.hasOwnProperty(ee)&&et!=null&&!o.hasOwnProperty(ee))switch(ee){case"selected":t.selected=!1;break;default:Le(t,n,ee,null,o,et)}for(O in o)if(et=o[O],nt=a[O],o.hasOwnProperty(O)&&et!==nt&&(et!=null||nt!=null))switch(O){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Le(t,n,O,et,o,nt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)et=a[Jt],a.hasOwnProperty(Jt)&&et!=null&&!o.hasOwnProperty(Jt)&&Le(t,n,Jt,null,o,et);for(J in o)if(et=o[J],nt=a[J],o.hasOwnProperty(J)&&et!==nt&&(et!=null||nt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Le(t,n,J,et,o,nt)}return;default:if(Nc(n)){for(var Oe in a)et=a[Oe],a.hasOwnProperty(Oe)&&et!==void 0&&!o.hasOwnProperty(Oe)&&_f(t,n,Oe,void 0,o,et);for(ct in o)et=o[ct],nt=a[ct],!o.hasOwnProperty(ct)||et===nt||et===void 0&&nt===void 0||_f(t,n,ct,et,o,nt);return}}for(var X in a)et=a[X],a.hasOwnProperty(X)&&et!=null&&!o.hasOwnProperty(X)&&Le(t,n,X,null,o,et);for(mt in o)et=o[mt],nt=a[mt],!o.hasOwnProperty(mt)||et===nt||et==null&&nt==null||Le(t,n,mt,et,o,nt)}var vf=null,xf=null;function Pl(t){return t.nodeType===9?t:t.ownerDocument}function xg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Sf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yf=null;function px(){var t=window.event;return t&&t.type==="popstate"?t===yf?!1:(yf=t,!0):(yf=null,!1)}var yg=typeof setTimeout=="function"?setTimeout:void 0,mx=typeof clearTimeout=="function"?clearTimeout:void 0,Mg=typeof Promise=="function"?Promise:void 0,gx=typeof queueMicrotask=="function"?queueMicrotask:typeof Mg<"u"?function(t){return Mg.resolve(null).then(t).catch(_x)}:yg;function _x(t){setTimeout(function(){throw t})}function ba(t){return t==="head"}function Eg(t,n){var a=n,o=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var S=t.ownerDocument;if(a&1&&uo(S.documentElement),a&2&&uo(S.body),a&4)for(a=S.head,uo(a),S=a.firstChild;S;){var T=S.nextSibling,O=S.nodeName;S[ra]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(c===0){t.removeChild(f),xo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);xo(n)}function Mf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Mf(a),sa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function vx(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ra])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function xx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function Ef(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Sx(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Tf=null;function Tg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function bg(t,n,a){switch(n=Pl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);sa(t)}var ai=new Map,Ag=new Set;function Bl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var qi=Z.d;Z.d={f:yx,r:Mx,D:Ex,C:Tx,L:bx,m:Ax,X:Cx,S:Rx,M:wx};function yx(){var t=qi.f(),n=Rl();return t||n}function Mx(t){var n=wi(t);n!==null&&n.tag===5&&n.type==="form"?qp(n):qi.r(t)}var Jr=typeof document>"u"?null:document;function Rg(t,n,a){var o=Jr;if(o&&typeof n=="string"&&n){var c=Ve(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Ag.has(c)||(Ag.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Tn(n,"link",t),tn(n),o.head.appendChild(n)))}}function Ex(t){qi.D(t),Rg("dns-prefetch",t,null)}function Tx(t,n){qi.C(t,n),Rg("preconnect",t,n)}function bx(t,n,a){qi.L(t,n,a);var o=Jr;if(o&&t&&n){var c='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ve(a.imageSizes)+'"]')):c+='[href="'+Ve(t)+'"]';var f=c;switch(n){case"style":f=$r(t);break;case"script":f=ts(t)}ai.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ai.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(fo(f))||n==="script"&&o.querySelector(ho(f))||(n=o.createElement("link"),Tn(n,"link",t),tn(n),o.head.appendChild(n)))}}function Ax(t,n){qi.m(t,n);var a=Jr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ve(o)+'"][href="'+Ve(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(t)}if(!ai.has(f)&&(t=g({rel:"modulepreload",href:t},n),ai.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ho(f)))return}o=a.createElement("link"),Tn(o,"link",t),tn(o),a.head.appendChild(o)}}}function Rx(t,n,a){qi.S(t,n,a);var o=Jr;if(o&&t){var c=oa(o).hoistableStyles,f=$r(t);n=n||"default";var S=c.get(f);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(fo(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ai.get(f))&&bf(t,a);var O=S=o.createElement("link");tn(O),Tn(O,"link",t),O._p=new Promise(function(J,ct){O.onload=J,O.onerror=ct}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,zl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(f,S)}}}function Cx(t,n){qi.X(t,n);var a=Jr;if(a&&t){var o=oa(a).hoistableScripts,c=ts(t),f=o.get(c);f||(f=a.querySelector(ho(c)),f||(t=g({src:t,async:!0},n),(n=ai.get(c))&&Af(t,n),f=a.createElement("script"),tn(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function wx(t,n){qi.M(t,n);var a=Jr;if(a&&t){var o=oa(a).hoistableScripts,c=ts(t),f=o.get(c);f||(f=a.querySelector(ho(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ai.get(c))&&Af(t,n),f=a.createElement("script"),tn(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Cg(t,n,a,o){var c=(c=yt.current)?Bl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$r(a.href),a=oa(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$r(a.href);var f=oa(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(fo(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ai.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(t,a),f||Dx(c,t,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=oa(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $r(t){return'href="'+Ve(t)+'"'}function fo(t){return'link[rel="stylesheet"]['+t+"]"}function wg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Dx(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),tn(n),t.head.appendChild(n))}function ts(t){return'[src="'+Ve(t)+'"]'}function ho(t){return"script[async]"+t}function Dg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),tn(o),Tn(o,"style",c),zl(o,a.precedence,t),n.instance=o;case"stylesheet":c=$r(a.href);var f=t.querySelector(fo(c));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;o=wg(a),(c=ai.get(c))&&bf(o,c),f=(t.ownerDocument||t).createElement("link"),tn(f);var S=f;return S._p=new Promise(function(T,O){S.onload=T,S.onerror=O}),Tn(f,"link",o),n.state.loading|=4,zl(f,a.precedence,t),n.instance=f;case"script":return f=ts(a.src),(c=t.querySelector(ho(f)))?(n.instance=c,tn(c),c):(o=a,(c=ai.get(f))&&(o=g({},a),Af(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),tn(c),Tn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,zl(o,a.precedence,t));return n.instance}function zl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Af(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Il=null;function Ug(t,n,a){if(Il===null){var o=new Map,c=Il=new Map;c.set(a,o)}else c=Il,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ra]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var T=o.get(S);T?T.push(f):o.set(S,[f])}}return o}function Ng(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ux(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Lg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var po=null;function Nx(){}function Lx(t,n,a){if(po===null)throw Error(r(475));var o=po;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=$r(a.href),f=t.querySelector(fo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Fl.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,tn(f);return}f=t.ownerDocument||t,a=wg(a),(c=ai.get(c))&&bf(a,c),f=f.createElement("link"),tn(f);var S=f;S._p=new Promise(function(T,O){S.onload=T,S.onerror=O}),Tn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Fl.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function Ox(){if(po===null)throw Error(r(475));var t=po;return t.stylesheets&&t.count===0&&Rf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Rf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Fl(){if(this.count--,this.count===0){if(this.stylesheets)Rf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Hl=null;function Rf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hl=new Map,n.forEach(Px,t),Hl=null,Fl.call(t))}function Px(t,n){if(!(n.state.loading&4)){var a=Hl.get(t);if(a)var o=a.get(null);else{a=new Map,Hl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,c),a.set(S,c),this.count++,o=Fl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var mo={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Bx(t,n,a,o,c,f,S,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Og(t,n,a,o,c,f,S,T,O,J,ct,mt){return t=new Bx(t,n,a,S,T,O,J,mt),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),t.current=f,f.stateNode=t,n=ou(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},fu(f),t}function Pg(t){return t?(t=Ur,t):Ur}function Bg(t,n,a,o,c,f){c=Pg(c),o.context===null?o.context=c:o.pendingContext=c,o=ha(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=da(t,o,n),a!==null&&(jn(a,t,n),Xs(a,t,n))}function zg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Cf(t,n){zg(t,n),(t=t.alternate)&&zg(t,n)}function Ig(t){if(t.tag===13){var n=Dr(t,67108864);n!==null&&jn(n,t,67108864),Cf(t,67108864)}}var Gl=!0;function zx(t,n,a,o){var c=P.T;P.T=null;var f=Z.p;try{Z.p=2,wf(t,n,a,o)}finally{Z.p=f,P.T=c}}function Ix(t,n,a,o){var c=P.T;P.T=null;var f=Z.p;try{Z.p=8,wf(t,n,a,o)}finally{Z.p=f,P.T=c}}function wf(t,n,a,o){if(Gl){var c=Df(o);if(c===null)gf(t,n,o,Vl,a),Hg(t,o);else if(Hx(c,t,n,a,o))o.stopPropagation();else if(Hg(t,o),n&4&&-1<Fx.indexOf(t)){for(;c!==null;){var f=wi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=qt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var O=1<<31-Pt(S);T.entanglements[1]|=O,S&=~O}Mi(f),(we&6)===0&&(bl=he()+500,oo(0))}}break;case 13:T=Dr(f,2),T!==null&&jn(T,f,2),Rl(),Cf(f,2)}if(f=Df(o),f===null&&gf(t,n,o,Vl,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else gf(t,n,o,null,a)}}function Df(t){return t=Oc(t),Uf(t)}var Vl=null;function Uf(t){if(Vl=null,t=Ci(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Vl=t,null}function Fg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case ge:return 2;case jt:return 8;case ae:case Ke:return 32;case N:return 268435456;default:return 32}default:return 32}}var Nf=!1,Aa=null,Ra=null,Ca=null,go=new Map,_o=new Map,wa=[],Fx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hg(t,n){switch(t){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(n.pointerId)}}function vo(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=wi(n),n!==null&&Ig(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Hx(t,n,a,o,c){switch(n){case"focusin":return Aa=vo(Aa,t,n,a,o,c),!0;case"dragenter":return Ra=vo(Ra,t,n,a,o,c),!0;case"mouseover":return Ca=vo(Ca,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return go.set(f,vo(go.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,_o.set(f,vo(_o.get(f)||null,t,n,a,o,c)),!0}return!1}function Gg(t){var n=Ci(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Gn(t.priority,function(){if(a.tag===13){var o=Yn();o=ne(o);var c=Dr(a,o);c!==null&&jn(c,a,o),Cf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Df(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Lc=o,a.target.dispatchEvent(o),Lc=null}else return n=wi(a),n!==null&&Ig(n),t.blockedOn=a,!1;n.shift()}return!0}function Vg(t,n,a){kl(t)&&a.delete(n)}function Gx(){Nf=!1,Aa!==null&&kl(Aa)&&(Aa=null),Ra!==null&&kl(Ra)&&(Ra=null),Ca!==null&&kl(Ca)&&(Ca=null),go.forEach(Vg),_o.forEach(Vg)}function Xl(t,n){t.blockedOn===n&&(t.blockedOn=null,Nf||(Nf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Gx)))}var Wl=null;function kg(t){Wl!==t&&(Wl=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Wl===t&&(Wl=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Uf(o||a)===null)continue;break}var f=wi(a);f!==null&&(t.splice(n,3),n-=3,Du(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function xo(t){function n(O){return Xl(O,t)}Aa!==null&&Xl(Aa,t),Ra!==null&&Xl(Ra,t),Ca!==null&&Xl(Ca,t),go.forEach(n),_o.forEach(n);for(var a=0;a<wa.length;a++){var o=wa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)Gg(a),a.blockedOn===null&&wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],S=c[Sn]||null;if(typeof f=="function")S||kg(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Sn]||null)T=S.formAction;else if(Uf(c)!==null)continue}else T=S.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),kg(a)}}}function Lf(t){this._internalRoot=t}ql.prototype.render=Lf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Yn();Bg(a,o,t,n,null,null)},ql.prototype.unmount=Lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Bg(t.current,2,null,t,null,null),Rl(),n[Ln]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ee();t={blockedOn:null,target:t,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,t),a===0&&Gg(t)}};var Xg=e.version;if(Xg!=="19.1.0")throw Error(r(527,Xg,"19.1.0"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Vx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{ut=Yl.inject(Vx),dt=Yl}catch{}}return yo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=sm,f=om,S=lm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Og(t,1,!1,null,null,a,o,c,f,S,T,null),t[Ln]=n.current,mf(t),new Lf(n)},yo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",f=sm,S=om,T=lm,O=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=Og(t,1,!0,n,a??null,o,c,f,S,T,O,J),n.context=Pg(null),a=n.current,o=Yn(),o=ne(o),c=ha(o),c.callback=null,da(a,c,o),a=o,n.current.lanes=a,zt(n,a),Mi(n),t[Ln]=n.current,mf(t),new ql(n)},yo.version="19.1.0",yo}var t_;function $x(){if(t_)return Bf.exports;t_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Bf.exports=Jx(),Bf.exports}var tS=$x();const eS=Xx(tS),nS="/Portfolio/assets/IMG_20250513_070744-DH5rnaLP.jpg",iS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL1SURBVHgBzZmNlZswDIBFFiid4LxB6QTlJmg6QbLBZYOkEySdIOkE6QZcJ0hvArIB1wlUKTY9HmdsmZif7z0d92LZlrAljEggAoiY0mVJkpE8mGtqpOZq5IXkQvI7SZIrTAUbTfJEUmB/LiQrEgVjYQzfklQYl+PgjgxkeJstxIbvDOrlHosSY60GDbTE4e+6DZ5zCfeAOkinpt+WwnkYX7MJNX6J88O6nRKL8YouBYmCefFK8rn98FtYFF3GP9IA7PQjyU/QT9YYhv1ojW2Dn+pn50jo3veVRZ/T666thzoNFi254PtsdkB9DGmP68p6my7jlZm4i8LhOPddoyB3k05mdDOHztlhR2Vzmjud0E0BIyGwZVfrLkwH9ugLzIcHT/tTvQp1EHOKUp5OGYxHKmhf8z+1AysQYN17w6AEOl9vf00AShA5GQOaKxfalEqfuqMFcMOJQmDXmrdQLhjvAOPzXaCTiTyFiUD/Mf4Xr4AvMP/AdFw97Z/YAeVReoXpePG0p5IVmJIPnvZ0AfPGe3MlDiiYDq8DCUVyCX4jP9JRffRYEGTAK6+AxLAxz0E3yPZcoHZzwBfpzH3ljX6sBTp/2QFJnl/heAe5+r1ccvZ6rt+QJJxhJND/QlOT1R2klbf4dcv3xm+FtpTNTjuUs4cBQF313gfYcWx2tp2/uYpwRPuLPv+2wghxgW/fGUoMQ7UHKloK+0YbVxG6ttnZGJCjrCrBBi/x7eNIn8JxYRu4axWUo71JJXRA4f3V7qxrcFs95tJoPzgGPYIQDIs5+TzYfXc2pp2Xv+gYOAchKH/nbVOib5VR7/c2lUXnbJw5YuCHCHMj+iArLKB9q4TV6P1zhLILGb8rHqI5gWF0ngISxwSc4zldtSP+CrpK0TwEKjpunyDQAaHqM8m33sd5dGee/0AgKOMEMUBB2oNA/LbHjTnv9wMIxGE4PzxzGArUKbQcwIEq+l33GNB0pOzRv+5boD4XTVPeQf1CFDw56oeZgjv5B6rAmuxolhV/AAAAAElFTkSuQmCC",aS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGuSURBVHgB7ZrtTcMwEIbfIP6TEcwGbEDYoBs0GyAmaDoCEwATwAbJBoUJkg0oE5g7bKSqSs9JBP6o/EhXR/FZulf+OrsBCK11TbbT6cCxrjn2gh5qKp+QJg8soKcHhTQZWIBGwlwgcZIXcDnRryMbYOZKhZhwLFc9WXXkr8hedSS4JvF1URTDiOiSih0iWL2kOdCNBc/Q+z0Vj4gAScAHZN4RAZKAKySAJGBlx/opakSAJICD34xVaJNIrREBU1IJHutbWyqyW7IGkZBzodBMTSX+Gt5H3mCG5RfM0OQ5x8PzBnNw7NRKaNce+baCb2N9erKVIx5OVZ71RHz2wEB2d2p3/8XW8xGXyw0c+JoDfOpzBn8I+TYwWbCIFwEUzMuc4A/YuhyiXoVIdAdHL3gXwOkJWWVNTWgiJpVeBVDAPCk/yVprvX0nIWa93gRoc//UjFTxElsJTeMQQNwLddLesBfq/Aiwabm0wyosxFcPlI76xYenfLEVmiwgNFlAaLKA0GQBoTn7axU1496rFA4oCv/UNt/MhSYLCA0LGJAuAwuI4s+6hTQ/vzrhz22+AT9SBeWGJlItAAAAAElFTkSuQmCC",rS="/Portfolio/assets/MovieWorld-BYLVuy7z.png",sS="/Portfolio/assets/GitHubIcon1-Gd7Cibxg.png",oS="/Portfolio/assets/weatherApiIcon-D1mAA62I.png",lS="/Portfolio/assets/currencyConverter-BHVTZbSu.png",cS="/Portfolio/assets/gameNumber-C7deS_aB.png";var jl=new Uint8Array(256);function uS(s,e){let i=0,r=[],l=0,u=s.length,h=e.charCodeAt(0);for(let d=0;d<u;d++){let p=s.charCodeAt(d);if(i===0&&p===h){r.push(s.slice(l,d)),l=d+1;continue}switch(p){case 92:d+=1;break;case 39:case 34:for(;++d<u;){let m=s.charCodeAt(d);if(m===92){d+=1;continue}if(m===p)break}break;case 40:jl[i]=41,i++;break;case 91:jl[i]=93,i++;break;case 123:jl[i]=125,i++;break;case 93:case 125:case 41:i>0&&p===jl[i-1]&&i--;break}}return r.push(s.slice(l)),r}var od=class extends Map{constructor(s){super(),this.factory=s}get(s){let e=super.get(s);return e===void 0&&(e=this.factory(s,this),this.set(s,e)),e}};function Hf(s){return{kind:"word",value:s}}function fS(s,e){return{kind:"function",value:s,nodes:e}}function hS(s){return{kind:"separator",value:s}}function Mc(s,e,i=null){for(let r=0;r<s.length;r++){let l=s[r],u=!1,h=0,d=e(l,{parent:i,replaceWith(p){u||(u=!0,Array.isArray(p)?p.length===0?(s.splice(r,1),h=0):p.length===1?(s[r]=p[0],h=1):(s.splice(r,1,...p),h=p.length):s[r]=p)}})??0;if(u){d===0?r--:r+=h-1;continue}if(d===2||d!==1&&l.kind==="function"&&Mc(l.nodes,e,l)===2)return 2}}function Ac(s){let e="";for(let i of s)switch(i.kind){case"word":case"separator":{e+=i.value;break}case"function":e+=i.value+"("+Ac(i.nodes)+")"}return e}var e_=92,dS=41,n_=58,i_=44,pS=34,a_=61,r_=62,s_=60,o_=10,mS=40,gS=39,l_=47,c_=32,u_=9;function Rc(s){s=s.replaceAll(`\r
`,`
`);let e=[],i=[],r=null,l="",u;for(let h=0;h<s.length;h++){let d=s.charCodeAt(h);switch(d){case e_:{l+=s[h]+s[h+1],h++;break}case n_:case i_:case a_:case r_:case s_:case o_:case l_:case c_:case u_:{if(l.length>0){let v=Hf(l);r?r.nodes.push(v):e.push(v),l=""}let p=h,m=h+1;for(;m<s.length&&(u=s.charCodeAt(m),!(u!==n_&&u!==i_&&u!==a_&&u!==r_&&u!==s_&&u!==o_&&u!==l_&&u!==c_&&u!==u_));m++);h=m-1;let g=hS(s.slice(p,m));r?r.nodes.push(g):e.push(g);break}case gS:case pS:{let p=h;for(let m=h+1;m<s.length;m++)if(u=s.charCodeAt(m),u===e_)m+=1;else if(u===d){h=m;break}l+=s.slice(p,h+1);break}case mS:{let p=fS(l,[]);l="",r?r.nodes.push(p):e.push(p),i.push(p),r=p;break}case dS:{let p=i.pop();if(l.length>0){let m=Hf(l);p==null||p.nodes.push(m),l=""}i.length>0?r=i[i.length-1]:r=null;break}default:l+=String.fromCharCode(d)}}return l.length>0&&e.push(Hf(l)),e}new od(s=>{let e=Rc(s),i=new Set;return Mc(e,(r,{parent:l})=>{let u=l===null?e:l.nodes??[];if(r.kind==="word"&&(r.value==="+"||r.value==="-"||r.value==="*"||r.value==="/")){let h=u.indexOf(r)??-1;if(h===-1)return;let d=u[h-1];if((d==null?void 0:d.kind)!=="separator"||d.value!==" ")return;let p=u[h+1];if((p==null?void 0:p.kind)!=="separator"||p.value!==" ")return;i.add(d),i.add(p)}else r.kind==="separator"&&r.value.trim()==="/"?r.value="/":r.kind==="separator"&&r.value.length>0&&r.value.trim()===""?(u[0]===r||u[u.length-1]===r)&&i.add(r):r.kind==="separator"&&r.value.trim()===","&&(r.value=",")}),i.size>0&&Mc(e,(r,{replaceWith:l})=>{i.has(r)&&(i.delete(r),l([]))}),vh(e),Ac(e)});new od(s=>{let e=Rc(s);return e.length===3&&e[0].kind==="word"&&e[0].value==="&"&&e[1].kind==="separator"&&e[1].value===":"&&e[2].kind==="function"&&e[2].value==="is"?Ac(e[2].nodes):s});function vh(s){for(let e of s)switch(e.kind){case"function":{if(e.value==="url"||e.value.endsWith("_url")){e.value=Mo(e.value);break}if(e.value==="var"||e.value.endsWith("_var")||e.value==="theme"||e.value.endsWith("_theme")){e.value=Mo(e.value);for(let i=0;i<e.nodes.length;i++)vh([e.nodes[i]]);break}e.value=Mo(e.value),vh(e.nodes);break}case"separator":e.value=Mo(e.value);break;case"word":{(e.value[0]!=="-"||e.value[1]!=="-")&&(e.value=Mo(e.value));break}default:_S(e)}}new od(s=>{let e=Rc(s);return e.length===1&&e[0].kind==="function"&&e[0].value==="var"});function _S(s){throw new Error(`Unexpected value: ${s}`)}function Mo(s){return s.replaceAll("_",String.raw`\_`).replaceAll(" ","_")}function vS(s,e){if(e===null)return s;let i=Number(e);return Number.isNaN(i)||(e=`${i*100}%`),e==="100%"?s:`color-mix(in oklab, ${s} ${e}, transparent)`}var xS={"--alpha":SS,"--spacing":yS,"--theme":MS,theme:ES};function SS(s,e,i,...r){let[l,u]=uS(i,"/").map(h=>h.trim());if(!l||!u)throw new Error(`The --alpha(…) function requires a color and an alpha value, e.g.: \`--alpha(${l||"var(--my-color)"} / ${u||"50%"})\``);if(r.length>0)throw new Error(`The --alpha(…) function only accepts one argument, e.g.: \`--alpha(${l||"var(--my-color)"} / ${u||"50%"})\``);return vS(l,u)}function yS(s,e,i,...r){if(!i)throw new Error("The --spacing(…) function requires an argument, but received none.");if(r.length>0)throw new Error(`The --spacing(…) function only accepts a single argument, but received ${r.length+1}.`);let l=s.theme.resolve(null,["--spacing"]);if(!l)throw new Error("The --spacing(…) function requires that the `--spacing` theme variable exists, but it was not found.");return`calc(${l} * ${i})`}function MS(s,e,i,...r){if(!i.startsWith("--"))throw new Error("The --theme(…) function can only be used with CSS variables from your theme.");let l=!1;i.endsWith(" inline")&&(l=!0,i=i.slice(0,-7)),e.kind==="at-rule"&&(l=!0);let u=s.resolveThemeValue(i,l);if(!u){if(r.length>0)return r.join(", ");throw new Error(`Could not resolve value for theme function: \`theme(${i})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`)}if(r.length===0)return u;let h=r.join(", ");if(h==="initial")return u;if(u==="initial")return h;if(u.startsWith("var(")||u.startsWith("theme(")||u.startsWith("--theme(")){let d=Rc(u);return bS(d,h),Ac(d)}return u}function ES(s,e,i,...r){i=TS(i);let l=s.resolveThemeValue(i);if(!l&&r.length>0)return r.join(", ");if(!l)throw new Error(`Could not resolve value for theme function: \`theme(${i})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`);return l}new RegExp(Object.keys(xS).map(s=>`${s}\\(`).join("|"));function TS(s){if(s[0]!=="'"&&s[0]!=='"')return s;let e="",i=s[0];for(let r=1;r<s.length-1;r++){let l=s[r],u=s[r+1];l==="\\"&&(u===i||u==="\\")?(e+=u,r++):e+=l}return e}function bS(s,e){Mc(s,i=>{if(i.kind==="function"&&!(i.value!=="var"&&i.value!=="theme"&&i.value!=="--theme"))if(i.nodes.length===1)i.nodes.push({kind:"word",value:`, ${e}`});else{let r=i.nodes[i.nodes.length-1];r.kind==="word"&&r.value==="initial"&&(r.value=e)}})}var AS=(s=>(s[s.None=0]="None",s[s.AtProperty=1]="AtProperty",s[s.ColorMix=2]="ColorMix",s[s.All=3]="All",s))(AS||{}),RS=(s=>(s[s.None=0]="None",s[s.AtApply=1]="AtApply",s[s.AtImport=2]="AtImport",s[s.JsPluginCompat=4]="JsPluginCompat",s[s.ThemeFunction=8]="ThemeFunction",s[s.Utilities=16]="Utilities",s[s.Variants=32]="Variants",s))(RS||{});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ld="177",CS=0,f_=1,wS=2,d0=1,DS=2,Ji=3,Ha=0,Fn=1,$i=2,Ia=0,gs=1,h_=2,d_=3,p_=4,US=5,mr=100,NS=101,LS=102,OS=103,PS=104,BS=200,zS=201,IS=202,FS=203,xh=204,Sh=205,HS=206,GS=207,VS=208,kS=209,XS=210,WS=211,qS=212,YS=213,jS=214,yh=0,Mh=1,Eh=2,xs=3,Th=4,bh=5,Ah=6,Rh=7,p0=0,ZS=1,KS=2,Fa=0,QS=1,JS=2,$S=3,ty=4,ey=5,ny=6,iy=7,m0=300,Ss=301,ys=302,Ch=303,wh=304,Cc=306,Dh=1e3,_r=1001,Uh=1002,gi=1003,ay=1004,Zl=1005,bi=1006,Gf=1007,vr=1008,ia=1009,g0=1010,_0=1011,Do=1012,cd=1013,Sr=1014,ta=1015,Oo=1016,ud=1017,fd=1018,Uo=1020,v0=35902,x0=1021,S0=1022,mi=1023,No=1026,Lo=1027,y0=1028,hd=1029,M0=1030,dd=1031,pd=1033,gc=33776,_c=33777,vc=33778,xc=33779,Nh=35840,Lh=35841,Oh=35842,Ph=35843,Bh=36196,zh=37492,Ih=37496,Fh=37808,Hh=37809,Gh=37810,Vh=37811,kh=37812,Xh=37813,Wh=37814,qh=37815,Yh=37816,jh=37817,Zh=37818,Kh=37819,Qh=37820,Jh=37821,Sc=36492,$h=36494,td=36495,E0=36283,ed=36284,nd=36285,id=36286,ry=3200,sy=3201,oy=0,ly=1,za="",si="srgb",Ms="srgb-linear",Ec="linear",Pe="srgb",es=7680,m_=519,cy=512,uy=513,fy=514,T0=515,hy=516,dy=517,py=518,my=519,g_=35044,__="300 es",ea=2e3,Tc=2001;class Ts{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vf=Math.PI/180,ad=180/Math.PI;function Po(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function xe(s,e,i){return Math.max(e,Math.min(i,s))}function gy(s,e){return(s%e+e)%e}function kf(s,e,i){return(1-i)*s+i*e}function Eo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,i=0){He.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],g=r[l+2],v=r[l+3];const x=u[h+0],M=u[h+1],b=u[h+2],C=u[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=b,e[i+3]=C;return}if(v!==C||p!==x||m!==M||g!==b){let y=1-d;const _=p*x+m*M+g*b+v*C,B=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const k=Math.sqrt(L),H=Math.atan2(k,_*B);y=Math.sin(y*H)/k,d=Math.sin(d*H)/k}const w=d*B;if(p=p*y+x*w,m=m*y+M*w,g=g*y+b*w,v=v*y+C*w,y===1-d){const k=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=k,m*=k,g*=k,v*=k}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],v=u[h],x=u[h+1],M=u[h+2],b=u[h+3];return e[i]=d*b+g*v+p*M-m*x,e[i+1]=p*b+g*x+m*v-d*M,e[i+2]=m*b+g*M+d*x-p*v,e[i+3]=g*b-d*v-p*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),v=d(u/2),x=p(r/2),M=p(l/2),b=p(u/2);switch(h){case"XYZ":this._x=x*g*v+m*M*b,this._y=m*M*v-x*g*b,this._z=m*g*b+x*M*v,this._w=m*g*v-x*M*b;break;case"YXZ":this._x=x*g*v+m*M*b,this._y=m*M*v-x*g*b,this._z=m*g*b-x*M*v,this._w=m*g*v+x*M*b;break;case"ZXY":this._x=x*g*v-m*M*b,this._y=m*M*v+x*g*b,this._z=m*g*b+x*M*v,this._w=m*g*v-x*M*b;break;case"ZYX":this._x=x*g*v-m*M*b,this._y=m*M*v+x*g*b,this._z=m*g*b-x*M*v,this._w=m*g*v+x*M*b;break;case"YZX":this._x=x*g*v+m*M*b,this._y=m*M*v+x*g*b,this._z=m*g*b-x*M*v,this._w=m*g*v-x*M*b;break;case"XZY":this._x=x*g*v-m*M*b,this._y=m*M*v-x*g*b,this._z=m*g*b+x*M*v,this._w=m*g*v+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(g-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+m)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(u-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+h*d+l*m-u*p,this._y=l*g+h*p+u*d-r*m,this._z=u*g+h*m+r*p-l*d,this._w=h*g-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),v=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(v_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(v_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+p*m+h*v-d*g,this.y=r+p*g+d*m-u*v,this.z=l+p*v+u*g-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Xf.copy(this).projectOnVector(e),this.sub(Xf)}reflect(e){return this.sub(Xf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xf=new rt,v_=new Bo;class se{constructor(e,i,r,l,u,h,d,p,m){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m)}set(e,i,r,l,u,h,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],g=r[4],v=r[7],x=r[2],M=r[5],b=r[8],C=l[0],y=l[3],_=l[6],B=l[1],L=l[4],w=l[7],k=l[2],H=l[5],I=l[8];return u[0]=h*C+d*B+p*k,u[3]=h*y+d*L+p*H,u[6]=h*_+d*w+p*I,u[1]=m*C+g*B+v*k,u[4]=m*y+g*L+v*H,u[7]=m*_+g*w+v*I,u[2]=x*C+M*B+b*k,u[5]=x*y+M*L+b*H,u[8]=x*_+M*w+b*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*h*g-i*d*m-r*u*g+r*d*p+l*u*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=g*h-d*m,x=d*p-g*u,M=m*u-h*p,b=i*v+r*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(l*m-g*r)*C,e[2]=(d*r-l*h)*C,e[3]=x*C,e[4]=(g*i-l*p)*C,e[5]=(l*u-d*i)*C,e[6]=M*C,e[7]=(r*p-m*i)*C,e[8]=(h*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Wf.makeScale(e,i)),this}rotate(e){return this.premultiply(Wf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Wf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wf=new se;function b0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function bc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _y(){const s=bc("canvas");return s.style.display="block",s}const x_={};function _s(s){s in x_||(x_[s]=!0,console.warn(s))}function vy(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function xy(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Sy(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const S_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),y_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yy(){const s={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Pe&&(l.r=na(l.r),l.g=na(l.g),l.b=na(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=vs(l.r),l.g=vs(l.g),l.b=vs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?Ec:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return _s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return _s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ms]:{primaries:e,whitePoint:r,transfer:Ec,toXYZ:S_,fromXYZ:y_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:r,transfer:Pe,toXYZ:S_,fromXYZ:y_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const be=yy();function na(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ns;class My{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ns===void 0&&(ns=bc("canvas")),ns.width=e.width,ns.height=e.height;const l=ns.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ns}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=bc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=na(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(na(i[r]/255)*255):i[r]=na(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ey=0;class md{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Po(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(qf(l[h].image)):u.push(qf(l[h]))}else u=qf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function qf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?My.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ty=0;const Yf=new rt;class Hn extends Ts{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,r=_r,l=_r,u=bi,h=vr,d=mi,p=ia,m=Hn.DEFAULT_ANISOTROPY,g=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Po(),this.name="",this.source=new md(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yf).x}get height(){return this.source.getSize(Yf).y}get depth(){return this.source.getSize(Yf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dh:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case Uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dh:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case Uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=m0;Hn.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,i=0,r=0,l=1){$e.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],g=p[4],v=p[8],x=p[1],M=p[5],b=p[9],C=p[2],y=p[6],_=p[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(b+y)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,w=(M+1)/2,k=(_+1)/2,H=(g+x)/4,I=(v+C)/4,j=(b+y)/4;return L>w&&L>k?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=H/r,u=I/r):w>k?w<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),r=H/l,u=j/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=I/u,l=j/u),this.set(r,l,u,i),this}let B=Math.sqrt((y-b)*(y-b)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(B)<.001&&(B=1),this.x=(y-b)/B,this.y=(v-C)/B,this.z=(x-g)/B,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this.w=xe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this.w=xe(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class by extends Ts{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new $e(0,0,e,i),this.scissorTest=!1,this.viewport=new $e(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Hn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:bi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new md(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends by{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class A0 extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ay extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(fi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(fi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=fi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,fi):fi.fromBufferAttribute(u,h),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Kl.copy(r.boundingBox)),Kl.applyMatrix4(e.matrixWorld),this.union(Kl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),Ql.subVectors(this.max,To),is.subVectors(e.a,To),as.subVectors(e.b,To),rs.subVectors(e.c,To),Ua.subVectors(as,is),Na.subVectors(rs,as),or.subVectors(is,rs);let i=[0,-Ua.z,Ua.y,0,-Na.z,Na.y,0,-or.z,or.y,Ua.z,0,-Ua.x,Na.z,0,-Na.x,or.z,0,-or.x,-Ua.y,Ua.x,0,-Na.y,Na.x,0,-or.y,or.x,0];return!jf(i,is,as,rs,Ql)||(i=[1,0,0,0,1,0,0,0,1],!jf(i,is,as,rs,Ql))?!1:(Jl.crossVectors(Ua,Na),i=[Jl.x,Jl.y,Jl.z],jf(i,is,as,rs,Ql))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],fi=new rt,Kl=new zo,is=new rt,as=new rt,rs=new rt,Ua=new rt,Na=new rt,or=new rt,To=new rt,Ql=new rt,Jl=new rt,lr=new rt;function jf(s,e,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){lr.fromArray(s,u);const d=l.x*Math.abs(lr.x)+l.y*Math.abs(lr.y)+l.z*Math.abs(lr.z),p=e.dot(lr),m=i.dot(lr),g=r.dot(lr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const Ry=new zo,bo=new rt,Zf=new rt;class gd{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Ry.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const i=bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(bo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(Zf)),this.expandByPoint(bo.copy(e.center).sub(Zf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ji=new rt,Kf=new rt,$l=new rt,La=new rt,Qf=new rt,tc=new rt,Jf=new rt;class Cy{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,i),ji.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Kf.copy(e).add(i).multiplyScalar(.5),$l.copy(i).sub(e).normalize(),La.copy(this.origin).sub(Kf);const u=e.distanceTo(i)*.5,h=-this.direction.dot($l),d=La.dot(this.direction),p=-La.dot($l),m=La.lengthSq(),g=Math.abs(1-h*h);let v,x,M,b;if(g>0)if(v=h*p-d,x=h*d-p,b=u*g,v>=0)if(x>=-b)if(x<=b){const C=1/g;v*=C,x*=C,M=v*(v+h*x+2*d)+x*(h*v+x+2*p)+m}else x=u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*p)+m;else x<=-b?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-p),u),M=-v*v+x*(x+2*p)+m):x<=b?(v=0,x=Math.min(Math.max(-u,-p),u),M=x*(x+2*p)+m):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-p),u),M=-v*v+x*(x+2*p)+m);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Kf).addScaledVector($l,x),M}intersectSphere(e,i){ji.subVectors(e.center,this.origin);const r=ji.dot(this.direction),l=ji.dot(ji)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),g>=0?(u=(e.min.y-x.y)*g,h=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,h=(e.min.y-x.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,i,r,l,u){Qf.subVectors(i,e),tc.subVectors(r,e),Jf.crossVectors(Qf,tc);let h=this.direction.dot(Jf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;La.subVectors(this.origin,e);const p=d*this.direction.dot(tc.crossVectors(La,tc));if(p<0)return null;const m=d*this.direction.dot(Qf.cross(La));if(m<0||p+m>h)return null;const g=-d*La.dot(Jf);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,i,r,l,u,h,d,p,m,g,v,x,M,b,C,y){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m,g,v,x,M,b,C,y)}set(e,i,r,l,u,h,d,p,m,g,v,x,M,b,C,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=b,_[11]=C,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ss.setFromMatrixColumn(e,0).length(),u=1/ss.setFromMatrixColumn(e,1).length(),h=1/ss.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=h*g,M=h*v,b=d*g,C=d*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=M+b*m,i[5]=x-C*m,i[9]=-d*p,i[2]=C-x*m,i[6]=b+M*m,i[10]=h*p}else if(e.order==="YXZ"){const x=p*g,M=p*v,b=m*g,C=m*v;i[0]=x+C*d,i[4]=b*d-M,i[8]=h*m,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-b,i[6]=C+x*d,i[10]=h*p}else if(e.order==="ZXY"){const x=p*g,M=p*v,b=m*g,C=m*v;i[0]=x-C*d,i[4]=-h*v,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*g,i[9]=C-x*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const x=h*g,M=h*v,b=d*g,C=d*v;i[0]=p*g,i[4]=b*m-M,i[8]=x*m+C,i[1]=p*v,i[5]=C*m+x,i[9]=M*m-b,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const x=h*p,M=h*m,b=d*p,C=d*m;i[0]=p*g,i[4]=C-x*v,i[8]=b*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=M*v+b,i[10]=x-C*v}else if(e.order==="XZY"){const x=h*p,M=h*m,b=d*p,C=d*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=x*v+C,i[5]=h*g,i[9]=M*v-b,i[2]=b*v-M,i[6]=d*g,i[10]=C*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wy,e,Dy)}lookAt(e,i,r){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Oa.crossVectors(r,Zn),Oa.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Oa.crossVectors(r,Zn)),Oa.normalize(),ec.crossVectors(Zn,Oa),l[0]=Oa.x,l[4]=ec.x,l[8]=Zn.x,l[1]=Oa.y,l[5]=ec.y,l[9]=Zn.y,l[2]=Oa.z,l[6]=ec.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],g=r[1],v=r[5],x=r[9],M=r[13],b=r[2],C=r[6],y=r[10],_=r[14],B=r[3],L=r[7],w=r[11],k=r[15],H=l[0],I=l[4],j=l[8],D=l[12],R=l[1],G=l[5],lt=l[9],st=l[13],_t=l[2],ht=l[6],P=l[10],Z=l[14],q=l[3],Mt=l[7],U=l[11],$=l[15];return u[0]=h*H+d*R+p*_t+m*q,u[4]=h*I+d*G+p*ht+m*Mt,u[8]=h*j+d*lt+p*P+m*U,u[12]=h*D+d*st+p*Z+m*$,u[1]=g*H+v*R+x*_t+M*q,u[5]=g*I+v*G+x*ht+M*Mt,u[9]=g*j+v*lt+x*P+M*U,u[13]=g*D+v*st+x*Z+M*$,u[2]=b*H+C*R+y*_t+_*q,u[6]=b*I+C*G+y*ht+_*Mt,u[10]=b*j+C*lt+y*P+_*U,u[14]=b*D+C*st+y*Z+_*$,u[3]=B*H+L*R+w*_t+k*q,u[7]=B*I+L*G+w*ht+k*Mt,u[11]=B*j+L*lt+w*P+k*U,u[15]=B*D+L*st+w*Z+k*$,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],p=e[9],m=e[13],g=e[2],v=e[6],x=e[10],M=e[14],b=e[3],C=e[7],y=e[11],_=e[15];return b*(+u*p*v-l*m*v-u*d*x+r*m*x+l*d*M-r*p*M)+C*(+i*p*M-i*m*x+u*h*x-l*h*M+l*m*g-u*p*g)+y*(+i*m*v-i*d*M-u*h*v+r*h*M+u*d*g-r*m*g)+_*(-l*d*g-i*p*v+i*d*x+l*h*v-r*h*x+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=e[9],x=e[10],M=e[11],b=e[12],C=e[13],y=e[14],_=e[15],B=v*y*m-C*x*m+C*p*M-d*y*M-v*p*_+d*x*_,L=b*x*m-g*y*m-b*p*M+h*y*M+g*p*_-h*x*_,w=g*C*m-b*v*m+b*d*M-h*C*M-g*d*_+h*v*_,k=b*v*p-g*C*p-b*d*x+h*C*x+g*d*y-h*v*y,H=i*B+r*L+l*w+u*k;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/H;return e[0]=B*I,e[1]=(C*x*u-v*y*u-C*l*M+r*y*M+v*l*_-r*x*_)*I,e[2]=(d*y*u-C*p*u+C*l*m-r*y*m-d*l*_+r*p*_)*I,e[3]=(v*p*u-d*x*u-v*l*m+r*x*m+d*l*M-r*p*M)*I,e[4]=L*I,e[5]=(g*y*u-b*x*u+b*l*M-i*y*M-g*l*_+i*x*_)*I,e[6]=(b*p*u-h*y*u-b*l*m+i*y*m+h*l*_-i*p*_)*I,e[7]=(h*x*u-g*p*u+g*l*m-i*x*m-h*l*M+i*p*M)*I,e[8]=w*I,e[9]=(b*v*u-g*C*u-b*r*M+i*C*M+g*r*_-i*v*_)*I,e[10]=(h*C*u-b*d*u+b*r*m-i*C*m-h*r*_+i*d*_)*I,e[11]=(g*d*u-h*v*u-g*r*m+i*v*m+h*r*M-i*d*M)*I,e[12]=k*I,e[13]=(g*C*l-b*v*l+b*r*x-i*C*x-g*r*y+i*v*y)*I,e[14]=(b*d*l-h*C*l-b*r*p+i*C*p+h*r*y-i*d*y)*I,e[15]=(h*v*l-g*d*l+g*r*p-i*v*p-h*r*x+i*d*x)*I,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,p=e.z,m=u*h,g=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*h,0,m*p-l*d,g*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,g=h+h,v=d+d,x=u*m,M=u*g,b=u*v,C=h*g,y=h*v,_=d*v,B=p*m,L=p*g,w=p*v,k=r.x,H=r.y,I=r.z;return l[0]=(1-(C+_))*k,l[1]=(M+w)*k,l[2]=(b-L)*k,l[3]=0,l[4]=(M-w)*H,l[5]=(1-(x+_))*H,l[6]=(y+B)*H,l[7]=0,l[8]=(b+L)*I,l[9]=(y-B)*I,l[10]=(1-(x+C))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ss.set(l[0],l[1],l[2]).length();const h=ss.set(l[4],l[5],l[6]).length(),d=ss.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],hi.copy(this);const m=1/u,g=1/h,v=1/d;return hi.elements[0]*=m,hi.elements[1]*=m,hi.elements[2]*=m,hi.elements[4]*=g,hi.elements[5]*=g,hi.elements[6]*=g,hi.elements[8]*=v,hi.elements[9]*=v,hi.elements[10]*=v,i.setFromRotationMatrix(hi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=ea){const p=this.elements,m=2*u/(i-e),g=2*u/(r-l),v=(i+e)/(i-e),x=(r+l)/(r-l);let M,b;if(d===ea)M=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(d===Tc)M=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=ea){const p=this.elements,m=1/(i-e),g=1/(r-l),v=1/(h-u),x=(i+e)*m,M=(r+l)*g;let b,C;if(d===ea)b=(h+u)*v,C=-2*v;else if(d===Tc)b=u*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=C,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ss=new rt,hi=new rn,wy=new rt(0,0,0),Dy=new rt(1,1,1),Oa=new rt,ec=new rt,Zn=new rt,M_=new rn,E_=new Bo;class aa{constructor(e=0,i=0,r=0,l=aa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return M_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(M_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return E_.setFromEuler(this),this.setFromQuaternion(E_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}aa.DEFAULT_ORDER="XYZ";class R0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uy=0;const T_=new rt,os=new Bo,Zi=new rn,nc=new rt,Ao=new rt,Ny=new rt,Ly=new Bo,b_=new rt(1,0,0),A_=new rt(0,1,0),R_=new rt(0,0,1),C_={type:"added"},Oy={type:"removed"},ls={type:"childadded",child:null},$f={type:"childremoved",child:null};class Qn extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new rt,i=new aa,r=new Bo,l=new rt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new se}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return os.setFromAxisAngle(e,i),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,i){return os.setFromAxisAngle(e,i),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(b_,e)}rotateY(e){return this.rotateOnAxis(A_,e)}rotateZ(e){return this.rotateOnAxis(R_,e)}translateOnAxis(e,i){return T_.copy(e).applyQuaternion(this.quaternion),this.position.add(T_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(b_,e)}translateY(e){return this.translateOnAxis(A_,e)}translateZ(e){return this.translateOnAxis(R_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?nc.copy(e):nc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Ao,nc,this.up):Zi.lookAt(nc,Ao,this.up),this.quaternion.setFromRotationMatrix(Zi),l&&(Zi.extractRotation(l.matrixWorld),os.setFromRotationMatrix(Zi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(C_),ls.child=e,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Oy),$f.child=e,this.dispatchEvent($f),$f.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(C_),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,Ny),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,Ly,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),g=h(e.images),v=h(e.shapes),x=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Qn.DEFAULT_UP=new rt(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new rt,Ki=new rt,th=new rt,Qi=new rt,cs=new rt,us=new rt,w_=new rt,eh=new rt,nh=new rt,ih=new rt,ah=new $e,rh=new $e,sh=new $e;class pi{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),di.subVectors(e,i),l.cross(di);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){di.subVectors(l,i),Ki.subVectors(r,i),th.subVectors(e,i);const h=di.dot(di),d=di.dot(Ki),p=di.dot(th),m=Ki.dot(Ki),g=Ki.dot(th),v=h*m-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(m*p-d*g)*x,b=(h*g-d*p)*x;return u.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,i,r,l,u,h,d,p){return this.getBarycoord(e,i,r,l,Qi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Qi.x),p.addScaledVector(h,Qi.y),p.addScaledVector(d,Qi.z),p)}static getInterpolatedAttribute(e,i,r,l,u,h){return ah.setScalar(0),rh.setScalar(0),sh.setScalar(0),ah.fromBufferAttribute(e,i),rh.fromBufferAttribute(e,r),sh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(ah,u.x),h.addScaledVector(rh,u.y),h.addScaledVector(sh,u.z),h}static isFrontFacing(e,i,r,l){return di.subVectors(r,i),Ki.subVectors(e,i),di.cross(Ki).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),di.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return pi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return pi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;cs.subVectors(l,r),us.subVectors(u,r),eh.subVectors(e,r);const p=cs.dot(eh),m=us.dot(eh);if(p<=0&&m<=0)return i.copy(r);nh.subVectors(e,l);const g=cs.dot(nh),v=us.dot(nh);if(g>=0&&v<=g)return i.copy(l);const x=p*v-g*m;if(x<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(r).addScaledVector(cs,h);ih.subVectors(e,u);const M=cs.dot(ih),b=us.dot(ih);if(b>=0&&M<=b)return i.copy(u);const C=M*m-p*b;if(C<=0&&m>=0&&b<=0)return d=m/(m-b),i.copy(r).addScaledVector(us,d);const y=g*b-M*v;if(y<=0&&v-g>=0&&M-b>=0)return w_.subVectors(u,l),d=(v-g)/(v-g+(M-b)),i.copy(l).addScaledVector(w_,d);const _=1/(y+C+x);return h=C*_,d=x*_,i.copy(r).addScaledVector(cs,h).addScaledVector(us,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const C0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},ic={h:0,s:0,l:0};function oh(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Be{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=r,be.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=be.workingColorSpace){if(e=gy(e,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=oh(h,u,e+1/3),this.g=oh(h,u,e),this.b=oh(h,u,e-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(e,i=si){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=si){const r=C0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return be.workingToColorSpace(Dn.copy(this),e),Math.round(xe(Dn.r*255,0,255))*65536+Math.round(xe(Dn.g*255,0,255))*256+Math.round(xe(Dn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,u=Dn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const v=h-d;switch(m=g<=.5?v/(h+d):v/(2-h-d),h){case r:p=(l-u)/v+(l<u?6:0);break;case l:p=(u-r)/v+2;break;case u:p=(r-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=be.workingColorSpace){return be.workingToColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=si){be.workingToColorSpace(Dn.copy(this),e);const i=Dn.r,r=Dn.g,l=Dn.b;return e!==si?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Pa),this.setHSL(Pa.h+e,Pa.s+i,Pa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Pa),e.getHSL(ic);const r=kf(Pa.h,ic.h,i),l=kf(Pa.s,ic.s,i),u=kf(Pa.l,ic.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Be;Be.NAMES=C0;let Py=0;class wc extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=gs,this.side=Ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=Sh,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(r.blending=this.blending),this.side!==Ha&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xh&&(r.blendSrc=this.blendSrc),this.blendDst!==Sh&&(r.blendDst=this.blendDst),this.blendEquation!==mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==m_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _d extends wc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new aa,this.combine=p0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new rt,ac=new He;let By=0;class Ri{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:By++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=g_,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ac.fromBufferAttribute(this,i),ac.applyMatrix3(e),this.setXY(i,ac.x,ac.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(e),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(e),this.setXYZ(i,an.x,an.y,an.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Eo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Eo(i,this.array)),i}setX(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Eo(i,this.array)),i}setY(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Eo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Eo(i,this.array)),i}setW(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array),u=In(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==g_&&(e.usage=this.usage),e}}class w0 extends Ri{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class D0 extends Ri{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class xr extends Ri{constructor(e,i,r){super(new Float32Array(e),i,r)}}let zy=0;const ri=new rn,lh=new Qn,fs=new rt,Kn=new zo,Ro=new zo,_n=new rt;class Mr extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b0(e)?D0:w0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new se().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,i,r){return ri.makeTranslation(e,i,r),this.applyMatrix4(ri),this}scale(e,i,r){return ri.makeScale(e,i,r),this.applyMatrix4(ri),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new xr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Kn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Ro.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Kn.min,Ro.min),Kn.expandByPoint(_n),_n.addVectors(Kn.max,Ro.max),Kn.expandByPoint(_n)):(Kn.expandByPoint(Ro.min),Kn.expandByPoint(Ro.max))}Kn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)_n.fromBufferAttribute(d,m),p&&(fs.fromBufferAttribute(e,m),_n.add(fs)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let j=0;j<r.count;j++)d[j]=new rt,p[j]=new rt;const m=new rt,g=new rt,v=new rt,x=new He,M=new He,b=new He,C=new rt,y=new rt;function _(j,D,R){m.fromBufferAttribute(r,j),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,R),x.fromBufferAttribute(u,j),M.fromBufferAttribute(u,D),b.fromBufferAttribute(u,R),g.sub(m),v.sub(m),M.sub(x),b.sub(x);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(C.copy(g).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(G),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(G),d[j].add(C),d[D].add(C),d[R].add(C),p[j].add(y),p[D].add(y),p[R].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let j=0,D=B.length;j<D;++j){const R=B[j],G=R.start,lt=R.count;for(let st=G,_t=G+lt;st<_t;st+=3)_(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const L=new rt,w=new rt,k=new rt,H=new rt;function I(j){k.fromBufferAttribute(l,j),H.copy(k);const D=d[j];L.copy(D),L.sub(k.multiplyScalar(k.dot(D))).normalize(),w.crossVectors(H,D);const G=w.dot(p[j])<0?-1:1;h.setXYZW(j,L.x,L.y,L.z,G)}for(let j=0,D=B.length;j<D;++j){const R=B[j],G=R.start,lt=R.count;for(let st=G,_t=G+lt;st<_t;st+=3)I(e.getX(st+0)),I(e.getX(st+1)),I(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new rt,u=new rt,h=new rt,d=new rt,p=new rt,m=new rt,g=new rt,v=new rt;if(e)for(let x=0,M=e.count;x<M;x+=3){const b=e.getX(x+0),C=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,y),d.add(g),p.add(g),m.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,v=d.normalized,x=new m.constructor(p.length*g);let M=0,b=0;for(let C=0,y=p.length;C<y;C++){d.isInterleavedBufferAttribute?M=p[C]*d.data.stride+d.offset:M=p[C]*g;for(let _=0;_<g;_++)x[b++]=m[M++]}return new Ri(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Mr,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,v=m.length;g<v;g++){const x=m[g],M=e(x,r);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,x=m.length;v<x;v++){const M=m[v];g.push(M.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],v=u[m];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const v=h[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D_=new rn,cr=new Cy,rc=new gd,U_=new rt,sc=new rt,oc=new rt,lc=new rt,ch=new rt,cc=new rt,N_=new rt,uc=new rt;class Ai extends Qn{constructor(e=new Mr,i=new _d){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){cc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],v=u[p];g!==0&&(ch.fromBufferAttribute(v,e),h?cc.addScaledVector(ch,g):cc.addScaledVector(ch.sub(i),g))}i.add(cc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),rc.copy(r.boundingSphere),rc.applyMatrix4(u),cr.copy(e.ray).recast(e.near),!(rc.containsPoint(cr.origin)===!1&&(cr.intersectSphere(rc,U_)===null||cr.origin.distanceToSquared(U_)>(e.far-e.near)**2))&&(D_.copy(u).invert(),cr.copy(e.ray).applyMatrix4(D_),!(r.boundingBox!==null&&cr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,cr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=x.length;b<C;b++){const y=x[b],_=h[y.materialIndex],B=Math.max(y.start,M.start),L=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let w=B,k=L;w<k;w+=3){const H=d.getX(w),I=d.getX(w+1),j=d.getX(w+2);l=fc(this,_,e,r,m,g,v,H,I,j),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=b,_=C;y<_;y+=3){const B=d.getX(y),L=d.getX(y+1),w=d.getX(y+2);l=fc(this,h,e,r,m,g,v,B,L,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let b=0,C=x.length;b<C;b++){const y=x[b],_=h[y.materialIndex],B=Math.max(y.start,M.start),L=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let w=B,k=L;w<k;w+=3){const H=w,I=w+1,j=w+2;l=fc(this,_,e,r,m,g,v,H,I,j),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let y=b,_=C;y<_;y+=3){const B=y,L=y+1,w=y+2;l=fc(this,h,e,r,m,g,v,B,L,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Iy(s,e,i,r,l,u,h,d){let p;if(e.side===Fn?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,e.side===Ha,d),p===null)return null;uc.copy(d),uc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(uc);return m<i.near||m>i.far?null:{distance:m,point:uc.clone(),object:s}}function fc(s,e,i,r,l,u,h,d,p,m){s.getVertexPosition(d,sc),s.getVertexPosition(p,oc),s.getVertexPosition(m,lc);const g=Iy(s,e,i,r,sc,oc,lc,N_);if(g){const v=new rt;pi.getBarycoord(N_,sc,oc,lc,v),l&&(g.uv=pi.getInterpolatedAttribute(l,d,p,m,v,new He)),u&&(g.uv1=pi.getInterpolatedAttribute(u,d,p,m,v,new He)),h&&(g.normal=pi.getInterpolatedAttribute(h,d,p,m,v,new rt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new rt,materialIndex:0};pi.getNormal(sc,oc,lc,x.normal),g.face=x,g.barycoord=v}return g}class bs extends Mr{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],g=[],v=[];let x=0,M=0;b("z","y","x",-1,-1,r,i,e,h,u,0),b("z","y","x",1,-1,r,i,-e,h,u,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new xr(m,3)),this.setAttribute("normal",new xr(g,3)),this.setAttribute("uv",new xr(v,2));function b(C,y,_,B,L,w,k,H,I,j,D){const R=w/I,G=k/j,lt=w/2,st=k/2,_t=H/2,ht=I+1,P=j+1;let Z=0,q=0;const Mt=new rt;for(let U=0;U<P;U++){const $=U*G-st;for(let vt=0;vt<ht;vt++){const St=vt*R-lt;Mt[C]=St*B,Mt[y]=$*L,Mt[_]=_t,m.push(Mt.x,Mt.y,Mt.z),Mt[C]=0,Mt[y]=0,Mt[_]=H>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),v.push(vt/I),v.push(1-U/j),Z+=1}}for(let U=0;U<j;U++)for(let $=0;$<I;$++){const vt=x+$+ht*U,St=x+$+ht*(U+1),Q=x+($+1)+ht*(U+1),pt=x+($+1)+ht*U;p.push(vt,St,pt),p.push(St,Q,pt),q+=6}d.addGroup(M,q,D),M+=q,x+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(s){const e={};for(let i=0;i<s.length;i++){const r=Es(s[i]);for(const l in r)e[l]=r[l]}return e}function Fy(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function U0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const Hy={clone:Es,merge:Nn};var Gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ga extends wc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gy,this.fragmentShader=Vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=Fy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class N0 extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=ea}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new rt,L_=new He,O_=new He;class oi extends N0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ad*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(Vf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z)}getViewSize(e,i){return this.getViewBounds(e,L_,O_),i.subVectors(O_,L_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Vf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const hs=-90,ds=1;class ky extends Qn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(hs,ds,e,i);l.layers=this.layers,this.add(l);const u=new oi(hs,ds,e,i);u.layers=this.layers,this.add(u);const h=new oi(hs,ds,e,i);h.layers=this.layers,this.add(h);const d=new oi(hs,ds,e,i);d.layers=this.layers,this.add(d);const p=new oi(hs,ds,e,i);p.layers=this.layers,this.add(p);const m=new oi(hs,ds,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(e===ea)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Tc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,x,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class L0 extends Hn{constructor(e=[],i=Ss,r,l,u,h,d,p,m,g){super(e,i,r,l,u,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xy extends yr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new L0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new bs(5,5,5),u=new Ga({name:"CubemapFromEquirect",uniforms:Es(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Ia});u.uniforms.tEquirect.value=i;const h=new Ai(l,u),d=i.minFilter;return i.minFilter===vr&&(i.minFilter=bi),new ky(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class Co extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wy={type:"move"};class uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Co,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Co,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Co,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),_=this._getHandJoint(m,C);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,b=.005;m.inputState.pinching&&x>M+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Wy)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Co;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class qy extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new aa,this.environmentIntensity=1,this.environmentRotation=new aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const fh=new rt,Yy=new rt,jy=new se;class dr{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=fh.subVectors(r,i).cross(Yy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(fh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||jy.getNormalMatrix(e),l=this.coplanarPoint(fh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new gd,hc=new rt;class O0{constructor(e=new dr,i=new dr,r=new dr,l=new dr,u=new dr,h=new dr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ea){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],v=l[6],x=l[7],M=l[8],b=l[9],C=l[10],y=l[11],_=l[12],B=l[13],L=l[14],w=l[15];if(r[0].setComponents(p-u,x-m,y-M,w-_).normalize(),r[1].setComponents(p+u,x+m,y+M,w+_).normalize(),r[2].setComponents(p+h,x+g,y+b,w+B).normalize(),r[3].setComponents(p-h,x-g,y-b,w-B).normalize(),r[4].setComponents(p-d,x-v,y-C,w-L).normalize(),i===ea)r[5].setComponents(p+d,x+v,y+C,w+L).normalize();else if(i===Tc)r[5].setComponents(d,v,C,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(hc.x=l.normal.x>0?e.max.x:e.min.x,hc.y=l.normal.y>0?e.max.y:e.min.y,hc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(hc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class P0 extends Hn{constructor(e,i,r=Sr,l,u,h,d=gi,p=gi,m,g=No,v=1){if(g!==No&&g!==Lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,u,h,d,p,g,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new md(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Dc extends Mr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,v=e/d,x=i/p,M=[],b=[],C=[],y=[];for(let _=0;_<g;_++){const B=_*x-h;for(let L=0;L<m;L++){const w=L*v-u;b.push(w,-B,0),C.push(0,0,1),y.push(L/d),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let B=0;B<d;B++){const L=B+m*_,w=B+m*(_+1),k=B+1+m*(_+1),H=B+1+m*_;M.push(L,w,H),M.push(w,k,H)}this.setIndex(M),this.setAttribute("position",new xr(b,3)),this.setAttribute("normal",new xr(C,3)),this.setAttribute("uv",new xr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zy extends wc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ky extends wc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Qy extends N0{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Jy extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function P_(s,e,i,r){const l=$y(r);switch(i){case x0:return s*e;case y0:return s*e/l.components*l.byteLength;case hd:return s*e/l.components*l.byteLength;case M0:return s*e*2/l.components*l.byteLength;case dd:return s*e*2/l.components*l.byteLength;case S0:return s*e*3/l.components*l.byteLength;case mi:return s*e*4/l.components*l.byteLength;case pd:return s*e*4/l.components*l.byteLength;case gc:case _c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vc:case xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lh:case Ph:return Math.max(s,16)*Math.max(e,8)/4;case Nh:case Oh:return Math.max(s,8)*Math.max(e,8)/2;case Bh:case zh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ih:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case kh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case qh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Sc:case $h:case td:return Math.ceil(s/4)*Math.ceil(e/4)*16;case E0:case ed:return Math.ceil(s/4)*Math.ceil(e/4)*8;case nd:case id:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $y(s){switch(s){case ia:case g0:return{byteLength:1,components:1};case Do:case _0:case Oo:return{byteLength:2,components:1};case ud:case fd:return{byteLength:2,components:4};case Sr:case cd:case ta:return{byteLength:4,components:1};case v0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ld);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function B0(){let s=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function tM(s){const e=new WeakMap;function i(d,p){const m=d.array,g=d.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,g),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const g=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,g);else{v.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<v.length;M++){const b=v[x],C=v[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++x,v[x]=C)}v.length=x+1;for(let M=0,b=v.length;M<b;M++){const C=v[M];s.bufferSubData(m,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}var eM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,TM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,AM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,RM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UM="gl_FragColor = linearToOutputTexel( gl_FragColor );",NM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,IM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,YM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$M=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_E=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,TE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,DE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,IE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,HE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,VE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,XE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_T=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ET=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,NT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:eM,alphahash_pars_fragment:nM,alphamap_fragment:iM,alphamap_pars_fragment:aM,alphatest_fragment:rM,alphatest_pars_fragment:sM,aomap_fragment:oM,aomap_pars_fragment:lM,batching_pars_vertex:cM,batching_vertex:uM,begin_vertex:fM,beginnormal_vertex:hM,bsdfs:dM,iridescence_fragment:pM,bumpmap_pars_fragment:mM,clipping_planes_fragment:gM,clipping_planes_pars_fragment:_M,clipping_planes_pars_vertex:vM,clipping_planes_vertex:xM,color_fragment:SM,color_pars_fragment:yM,color_pars_vertex:MM,color_vertex:EM,common:TM,cube_uv_reflection_fragment:bM,defaultnormal_vertex:AM,displacementmap_pars_vertex:RM,displacementmap_vertex:CM,emissivemap_fragment:wM,emissivemap_pars_fragment:DM,colorspace_fragment:UM,colorspace_pars_fragment:NM,envmap_fragment:LM,envmap_common_pars_fragment:OM,envmap_pars_fragment:PM,envmap_pars_vertex:BM,envmap_physical_pars_fragment:YM,envmap_vertex:zM,fog_vertex:IM,fog_pars_vertex:FM,fog_fragment:HM,fog_pars_fragment:GM,gradientmap_pars_fragment:VM,lightmap_pars_fragment:kM,lights_lambert_fragment:XM,lights_lambert_pars_fragment:WM,lights_pars_begin:qM,lights_toon_fragment:jM,lights_toon_pars_fragment:ZM,lights_phong_fragment:KM,lights_phong_pars_fragment:QM,lights_physical_fragment:JM,lights_physical_pars_fragment:$M,lights_fragment_begin:tE,lights_fragment_maps:eE,lights_fragment_end:nE,logdepthbuf_fragment:iE,logdepthbuf_pars_fragment:aE,logdepthbuf_pars_vertex:rE,logdepthbuf_vertex:sE,map_fragment:oE,map_pars_fragment:lE,map_particle_fragment:cE,map_particle_pars_fragment:uE,metalnessmap_fragment:fE,metalnessmap_pars_fragment:hE,morphinstance_vertex:dE,morphcolor_vertex:pE,morphnormal_vertex:mE,morphtarget_pars_vertex:gE,morphtarget_vertex:_E,normal_fragment_begin:vE,normal_fragment_maps:xE,normal_pars_fragment:SE,normal_pars_vertex:yE,normal_vertex:ME,normalmap_pars_fragment:EE,clearcoat_normal_fragment_begin:TE,clearcoat_normal_fragment_maps:bE,clearcoat_pars_fragment:AE,iridescence_pars_fragment:RE,opaque_fragment:CE,packing:wE,premultiplied_alpha_fragment:DE,project_vertex:UE,dithering_fragment:NE,dithering_pars_fragment:LE,roughnessmap_fragment:OE,roughnessmap_pars_fragment:PE,shadowmap_pars_fragment:BE,shadowmap_pars_vertex:zE,shadowmap_vertex:IE,shadowmask_pars_fragment:FE,skinbase_vertex:HE,skinning_pars_vertex:GE,skinning_vertex:VE,skinnormal_vertex:kE,specularmap_fragment:XE,specularmap_pars_fragment:WE,tonemapping_fragment:qE,tonemapping_pars_fragment:YE,transmission_fragment:jE,transmission_pars_fragment:ZE,uv_pars_fragment:KE,uv_pars_vertex:QE,uv_vertex:JE,worldpos_vertex:$E,background_vert:tT,background_frag:eT,backgroundCube_vert:nT,backgroundCube_frag:iT,cube_vert:aT,cube_frag:rT,depth_vert:sT,depth_frag:oT,distanceRGBA_vert:lT,distanceRGBA_frag:cT,equirect_vert:uT,equirect_frag:fT,linedashed_vert:hT,linedashed_frag:dT,meshbasic_vert:pT,meshbasic_frag:mT,meshlambert_vert:gT,meshlambert_frag:_T,meshmatcap_vert:vT,meshmatcap_frag:xT,meshnormal_vert:ST,meshnormal_frag:yT,meshphong_vert:MT,meshphong_frag:ET,meshphysical_vert:TT,meshphysical_frag:bT,meshtoon_vert:AT,meshtoon_frag:RT,points_vert:CT,points_frag:wT,shadow_vert:DT,shadow_frag:UT,sprite_vert:NT,sprite_frag:LT},Lt={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Ti={basic:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Nn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Nn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Nn([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Nn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Nn([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Nn([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Nn([Lt.common,Lt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Nn([Lt.lights,Lt.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ti.physical={uniforms:Nn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const dc={r:0,b:0,g:0},fr=new aa,OT=new rn;function PT(s,e,i,r,l,u,h){const d=new Be(0);let p=u===!0?0:1,m,g,v=null,x=0,M=null;function b(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?i:e).get(w)),w}function C(L){let w=!1;const k=b(L);k===null?_(d,p):k&&k.isColor&&(_(k,1),w=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,w){const k=b(w);k&&(k.isCubeTexture||k.mapping===Cc)?(g===void 0&&(g=new Ai(new bs(1,1,1),new Ga({name:"BackgroundCubeMaterial",uniforms:Es(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,I,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),fr.copy(w.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),g.material.uniforms.envMap.value=k,g.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(OT.makeRotationFromEuler(fr)),g.material.toneMapped=be.getTransfer(k.colorSpace)!==Pe,(v!==k||x!==k.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,v=k,x=k.version,M=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):k&&k.isTexture&&(m===void 0&&(m=new Ai(new Dc(2,2),new Ga({name:"BackgroundMaterial",uniforms:Es(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Ha,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=k,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=be.getTransfer(k.colorSpace)!==Pe,k.matrixAutoUpdate===!0&&k.updateMatrix(),m.material.uniforms.uvTransform.value.copy(k.matrix),(v!==k||x!==k.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,v=k,x=k.version,M=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,w){L.getRGB(dc,U0(s)),r.buffers.color.setClear(dc.r,dc.g,dc.b,w,h)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,w=1){d.set(L),p=w,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,_(d,p)},render:C,addToRenderList:y,dispose:B}}function BT(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(R,G,lt,st,_t){let ht=!1;const P=v(st,lt,G);u!==P&&(u=P,m(u.object)),ht=M(R,st,lt,_t),ht&&b(R,st,lt,_t),_t!==null&&e.update(_t,s.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,w(R,G,lt,st),_t!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(_t).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function v(R,G,lt){const st=lt.wireframe===!0;let _t=r[R.id];_t===void 0&&(_t={},r[R.id]=_t);let ht=_t[G.id];ht===void 0&&(ht={},_t[G.id]=ht);let P=ht[st];return P===void 0&&(P=x(p()),ht[st]=P),P}function x(R){const G=[],lt=[],st=[];for(let _t=0;_t<i;_t++)G[_t]=0,lt[_t]=0,st[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:lt,attributeDivisors:st,object:R,attributes:{},index:null}}function M(R,G,lt,st){const _t=u.attributes,ht=G.attributes;let P=0;const Z=lt.getAttributes();for(const q in Z)if(Z[q].location>=0){const U=_t[q];let $=ht[q];if($===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;P++}return u.attributesNum!==P||u.index!==st}function b(R,G,lt,st){const _t={},ht=G.attributes;let P=0;const Z=lt.getAttributes();for(const q in Z)if(Z[q].location>=0){let U=ht[q];U===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(U=R.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),_t[q]=$,P++}u.attributes=_t,u.attributesNum=P,u.index=st}function C(){const R=u.newAttributes;for(let G=0,lt=R.length;G<lt;G++)R[G]=0}function y(R){_(R,0)}function _(R,G){const lt=u.newAttributes,st=u.enabledAttributes,_t=u.attributeDivisors;lt[R]=1,st[R]===0&&(s.enableVertexAttribArray(R),st[R]=1),_t[R]!==G&&(s.vertexAttribDivisor(R,G),_t[R]=G)}function B(){const R=u.newAttributes,G=u.enabledAttributes;for(let lt=0,st=G.length;lt<st;lt++)G[lt]!==R[lt]&&(s.disableVertexAttribArray(lt),G[lt]=0)}function L(R,G,lt,st,_t,ht,P){P===!0?s.vertexAttribIPointer(R,G,lt,_t,ht):s.vertexAttribPointer(R,G,lt,st,_t,ht)}function w(R,G,lt,st){C();const _t=st.attributes,ht=lt.getAttributes(),P=G.defaultAttributeValues;for(const Z in ht){const q=ht[Z];if(q.location>=0){let Mt=_t[Z];if(Mt===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(Mt=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(Mt=R.instanceColor)),Mt!==void 0){const U=Mt.normalized,$=Mt.itemSize,vt=e.get(Mt);if(vt===void 0)continue;const St=vt.buffer,Q=vt.type,pt=vt.bytesPerElement,yt=Q===s.INT||Q===s.UNSIGNED_INT||Mt.gpuType===cd;if(Mt.isInterleavedBufferAttribute){const Rt=Mt.data,wt=Rt.stride,oe=Mt.offset;if(Rt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<q.locationSize;Qt++)_(q.location+Qt,Rt.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Qt=0;Qt<q.locationSize;Qt++)y(q.location+Qt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let Qt=0;Qt<q.locationSize;Qt++)L(q.location+Qt,$/q.locationSize,Q,U,wt*pt,(oe+$/q.locationSize*Qt)*pt,yt)}else{if(Mt.isInstancedBufferAttribute){for(let Rt=0;Rt<q.locationSize;Rt++)_(q.location+Rt,Mt.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Rt=0;Rt<q.locationSize;Rt++)y(q.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let Rt=0;Rt<q.locationSize;Rt++)L(q.location+Rt,$/q.locationSize,Q,U,$*pt,$/q.locationSize*Rt*pt,yt)}}else if(P!==void 0){const U=P[Z];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(q.location,U);break;case 3:s.vertexAttrib3fv(q.location,U);break;case 4:s.vertexAttrib4fv(q.location,U);break;default:s.vertexAttrib1fv(q.location,U)}}}}B()}function k(){j();for(const R in r){const G=r[R];for(const lt in G){const st=G[lt];for(const _t in st)g(st[_t].object),delete st[_t];delete G[lt]}delete r[R]}}function H(R){if(r[R.id]===void 0)return;const G=r[R.id];for(const lt in G){const st=G[lt];for(const _t in st)g(st[_t].object),delete st[_t];delete G[lt]}delete r[R.id]}function I(R){for(const G in r){const lt=r[G];if(lt[R.id]===void 0)continue;const st=lt[R.id];for(const _t in st)g(st[_t].object),delete st[_t];delete lt[R.id]}}function j(){D(),h=!0,u!==l&&(u=l,m(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:D,dispose:k,releaseStatesOfGeometry:H,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:y,disableUnusedAttributes:B}}function zT(s,e,i){let r;function l(m){r=m}function u(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function h(m,g,v){v!==0&&(s.drawArraysInstanced(r,m,g,v),i.update(g,r,v))}function d(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,v);let M=0;for(let b=0;b<v;b++)M+=g[b];i.update(M,r,1)}function p(m,g,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<m.length;b++)h(m[b],g[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,v);let b=0;for(let C=0;C<v;C++)b+=g[C]*x[C];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function IT(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==mi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const j=I===Oo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ia&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ta&&!j)}function p(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),B=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=b>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:B,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:k,maxSamples:H}}function FT(s){const e=this;let i=null,r=0,l=!1,u=!1;const h=new dr,d=new se,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const b=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!l||b===null||b.length===0||u&&!y)u?g(null):m();else{const B=u?0:r,L=B*4;let w=_.clippingState||null;p.value=w,w=g(b,x,L,M);for(let k=0;k!==L;++k)w[k]=i[k];_.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,M,b){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=p.value,b!==!0||y===null){const _=M+C*4,B=x.matrixWorldInverse;d.getNormalMatrix(B),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,w=M;L!==C;++L,w+=4)h.copy(v[L]).applyMatrix4(B,d),h.normal.toArray(y,w),y[w+3]=h.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function HT(s){let e=new WeakMap;function i(h,d){return d===Ch?h.mapping=Ss:d===wh&&(h.mapping=ys),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ch||d===wh)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new Xy(p.height);return m.fromEquirectangularTexture(s,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const ms=4,B_=[.125,.215,.35,.446,.526,.582],gr=20,hh=new Qy,z_=new Be;let dh=null,ph=0,mh=0,gh=!1;const pr=(1+Math.sqrt(5))/2,ps=1/pr,I_=[new rt(-pr,ps,0),new rt(pr,ps,0),new rt(-ps,0,pr),new rt(ps,0,pr),new rt(0,pr,-ps),new rt(0,pr,ps),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],GT=new rt;class F_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=GT}=u;dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dh,ph,mh),this._renderer.xr.enabled=gh,e.scissorTest=!1,pc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ss||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Oo,format:mi,colorSpace:Ms,depthBuffer:!1},l=H_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VT(u)),this._blurMaterial=kT(u,e,i)}return l}_compileMaterial(e){const i=new Ai(this._lodPlanes[0],e);this._renderer.compile(i,hh)}_sceneToCubeUV(e,i,r,l,u){const p=new oi(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(z_),v.toneMapping=Fa,v.autoClear=!1;const b=new _d({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),C=new Ai(new bs,b);let y=!1;const _=e.background;_?_.isColor&&(b.color.copy(_),e.background=null,y=!0):(b.color.copy(z_),y=!0);for(let B=0;B<6;B++){const L=B%3;L===0?(p.up.set(0,m[B],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[B],u.y,u.z)):L===1?(p.up.set(0,0,m[B]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[B],u.z)):(p.up.set(0,m[B],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[B]));const w=this._cubeSize;pc(l,L*w,B>2?w:0,w,w),v.setRenderTarget(l),y&&v.render(C,p),v.render(e,p)}C.geometry.dispose(),C.material.dispose(),v.toneMapping=M,v.autoClear=x,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ss||e.mapping===ys;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=V_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=G_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ai(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;pc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,hh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=I_[(l-u-1)%I_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ai(this._lodPlanes[l],m),x=m.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*gr-1),C=u/b,y=isFinite(u)?1+Math.floor(g*C):gr;y>gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${gr}`);const _=[];let B=0;for(let I=0;I<gr;++I){const j=I/C,D=Math.exp(-j*j/2);_.push(D),I===0?B+=D:I<y&&(B+=2*D)}for(let I=0;I<_.length;I++)_[I]=_[I]/B;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=b,x.mipInt.value=L-r;const w=this._sizeLods[l],k=3*w*(l>L-ms?l-L+ms:0),H=4*(this._cubeSize-w);pc(i,k,H,3*w,2*w),p.setRenderTarget(i),p.render(v,hh)}}function VT(s){const e=[],i=[],r=[];let l=s;const u=s-ms+1+B_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>s-ms?p=B_[h-s+ms-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,b=6,C=3,y=2,_=1,B=new Float32Array(C*b*M),L=new Float32Array(y*b*M),w=new Float32Array(_*b*M);for(let H=0;H<M;H++){const I=H%3*2/3-1,j=H>2?0:-1,D=[I,j,0,I+2/3,j,0,I+2/3,j+1,0,I,j,0,I+2/3,j+1,0,I,j+1,0];B.set(D,C*b*H),L.set(x,y*b*H);const R=[H,H,H,H,H,H];w.set(R,_*b*H)}const k=new Mr;k.setAttribute("position",new Ri(B,C)),k.setAttribute("uv",new Ri(L,y)),k.setAttribute("faceIndex",new Ri(w,_)),e.push(k),l>ms&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function H_(s,e,i){const r=new yr(s,e,i);return r.texture.mapping=Cc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pc(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function kT(s,e,i){const r=new Float32Array(gr),l=new rt(0,1,0);return new Ga({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function G_(){return new Ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function V_(){return new Ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function vd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function XT(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Ch||p===wh,g=p===Ss||p===ys;if(m||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new F_(s)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return m&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new F_(s)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function WT(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&_s("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function qT(s,e,i,r){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(v){const x=v.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function m(v){const x=[],M=v.index,b=v.attributes.position;let C=0;if(M!==null){const B=M.array;C=M.version;for(let L=0,w=B.length;L<w;L+=3){const k=B[L+0],H=B[L+1],I=B[L+2];x.push(k,H,H,I,I,k)}}else if(b!==void 0){const B=b.array;C=b.version;for(let L=0,w=B.length/3-1;L<w;L+=3){const k=L+0,H=L+1,I=L+2;x.push(k,H,H,I,I,k)}}else return;const y=new(b0(x)?D0:w0)(x,1);y.version=C;const _=u.get(v);_&&e.remove(_),u.set(v,y)}function g(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function YT(s,e,i){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function p(x,M){s.drawElements(r,M,u,x*h),i.update(M,r,1)}function m(x,M,b){b!==0&&(s.drawElementsInstanced(r,M,u,x*h,b),i.update(M,r,b))}function g(x,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,b);let y=0;for(let _=0;_<b;_++)y+=M[_];i.update(y,r,1)}function v(x,M,b,C){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)m(x[_]/h,M[_],C[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,C,0,b);let _=0;for(let B=0;B<b;B++)_+=M[B]*C[B];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function jT(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function ZT(s,e,i){const r=new WeakMap,l=new $e;function u(h,d,p){const m=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let R=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let w=0;b===!0&&(w=1),C===!0&&(w=2),y===!0&&(w=3);let k=d.attributes.position.count*w,H=1;k>e.maxTextureSize&&(H=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const I=new Float32Array(k*H*4*v),j=new A0(I,k,H,v);j.type=ta,j.needsUpdate=!0;const D=w*4;for(let G=0;G<v;G++){const lt=_[G],st=B[G],_t=L[G],ht=k*H*4*G;for(let P=0;P<lt.count;P++){const Z=P*D;b===!0&&(l.fromBufferAttribute(lt,P),I[ht+Z+0]=l.x,I[ht+Z+1]=l.y,I[ht+Z+2]=l.z,I[ht+Z+3]=0),C===!0&&(l.fromBufferAttribute(st,P),I[ht+Z+4]=l.x,I[ht+Z+5]=l.y,I[ht+Z+6]=l.z,I[ht+Z+7]=0),y===!0&&(l.fromBufferAttribute(_t,P),I[ht+Z+8]=l.x,I[ht+Z+9]=l.y,I[ht+Z+10]=l.z,I[ht+Z+11]=_t.itemSize===4?l.w:1)}}x={count:v,texture:j,size:new He(k,H)},r.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<m.length;y++)b+=m[y];const C=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function KT(s,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,v=e.get(p,g);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return v}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}const z0=new Hn,k_=new P0(1,1),I0=new A0,F0=new Ay,H0=new L0,X_=[],W_=[],q_=new Float32Array(16),Y_=new Float32Array(9),j_=new Float32Array(4);function As(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=X_[l];if(u===void 0&&(u=new Float32Array(l),X_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,s[h].toArray(u,d)}return u}function un(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function fn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Uc(s,e){let i=W_[e];i===void 0&&(i=new Int32Array(e),W_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function QT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function JT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;s.uniform2fv(this.addr,e),fn(i,e)}}function $T(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(un(i,e))return;s.uniform3fv(this.addr,e),fn(i,e)}}function tb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;s.uniform4fv(this.addr,e),fn(i,e)}}function eb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),fn(i,e)}else{if(un(i,r))return;j_.set(r),s.uniformMatrix2fv(this.addr,!1,j_),fn(i,r)}}function nb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),fn(i,e)}else{if(un(i,r))return;Y_.set(r),s.uniformMatrix3fv(this.addr,!1,Y_),fn(i,r)}}function ib(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),fn(i,e)}else{if(un(i,r))return;q_.set(r),s.uniformMatrix4fv(this.addr,!1,q_),fn(i,r)}}function ab(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function rb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;s.uniform2iv(this.addr,e),fn(i,e)}}function sb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;s.uniform3iv(this.addr,e),fn(i,e)}}function ob(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;s.uniform4iv(this.addr,e),fn(i,e)}}function lb(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function cb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;s.uniform2uiv(this.addr,e),fn(i,e)}}function ub(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;s.uniform3uiv(this.addr,e),fn(i,e)}}function fb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;s.uniform4uiv(this.addr,e),fn(i,e)}}function hb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(k_.compareFunction=T0,u=k_):u=z0,i.setTexture2D(e||u,l)}function db(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||F0,l)}function pb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||H0,l)}function mb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||I0,l)}function gb(s){switch(s){case 5126:return QT;case 35664:return JT;case 35665:return $T;case 35666:return tb;case 35674:return eb;case 35675:return nb;case 35676:return ib;case 5124:case 35670:return ab;case 35667:case 35671:return rb;case 35668:case 35672:return sb;case 35669:case 35673:return ob;case 5125:return lb;case 36294:return cb;case 36295:return ub;case 36296:return fb;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}function _b(s,e){s.uniform1fv(this.addr,e)}function vb(s,e){const i=As(e,this.size,2);s.uniform2fv(this.addr,i)}function xb(s,e){const i=As(e,this.size,3);s.uniform3fv(this.addr,i)}function Sb(s,e){const i=As(e,this.size,4);s.uniform4fv(this.addr,i)}function yb(s,e){const i=As(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function Mb(s,e){const i=As(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function Eb(s,e){const i=As(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function Tb(s,e){s.uniform1iv(this.addr,e)}function bb(s,e){s.uniform2iv(this.addr,e)}function Ab(s,e){s.uniform3iv(this.addr,e)}function Rb(s,e){s.uniform4iv(this.addr,e)}function Cb(s,e){s.uniform1uiv(this.addr,e)}function wb(s,e){s.uniform2uiv(this.addr,e)}function Db(s,e){s.uniform3uiv(this.addr,e)}function Ub(s,e){s.uniform4uiv(this.addr,e)}function Nb(s,e,i){const r=this.cache,l=e.length,u=Uc(i,l);un(r,u)||(s.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||z0,u[h])}function Lb(s,e,i){const r=this.cache,l=e.length,u=Uc(i,l);un(r,u)||(s.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||F0,u[h])}function Ob(s,e,i){const r=this.cache,l=e.length,u=Uc(i,l);un(r,u)||(s.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||H0,u[h])}function Pb(s,e,i){const r=this.cache,l=e.length,u=Uc(i,l);un(r,u)||(s.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||I0,u[h])}function Bb(s){switch(s){case 5126:return _b;case 35664:return vb;case 35665:return xb;case 35666:return Sb;case 35674:return yb;case 35675:return Mb;case 35676:return Eb;case 5124:case 35670:return Tb;case 35667:case 35671:return bb;case 35668:case 35672:return Ab;case 35669:case 35673:return Rb;case 5125:return Cb;case 36294:return wb;case 36295:return Db;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Nb;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return Pb}}class zb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=gb(i.type)}}class Ib{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Bb(i.type)}}class Fb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const _h=/(\w+)(\])?(\[|\.)?/g;function Z_(s,e){s.seq.push(e),s.map[e.id]=e}function Hb(s,e,i){const r=s.name,l=r.length;for(_h.lastIndex=0;;){const u=_h.exec(r),h=_h.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){Z_(i,m===void 0?new zb(d,s,e):new Ib(d,s,e));break}else{let v=i.map[d];v===void 0&&(v=new Fb(d),Z_(i,v)),i=v}}}class yc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);Hb(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function K_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const Gb=37297;let Vb=0;function kb(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Q_=new se;function Xb(s){be._getMatrix(Q_,be.workingColorSpace,s);const e=`mat3( ${Q_.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(s)){case Ec:return[e,"LinearTransferOETF"];case Pe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function J_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=s.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+kb(s.getShaderSource(e),h)}else return l}function Wb(s,e){const i=Xb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function qb(s,e){let i;switch(e){case QS:i="Linear";break;case JS:i="Reinhard";break;case $S:i="Cineon";break;case ty:i="ACESFilmic";break;case ny:i="AgX";break;case iy:i="Neutral";break;case ey:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const mc=new rt;function Yb(){be.getLuminanceCoefficients(mc);const s=mc.x.toFixed(4),e=mc.y.toFixed(4),i=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function Zb(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Kb(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(e,h),locationSize:d}}return i}function wo(s){return s!==""}function $_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qb=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(s){return s.replace(Qb,$b)}const Jb=new Map;function $b(s,e){let i=le[e];if(i===void 0){const r=Jb.get(e);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return rd(i)}const tA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e0(s){return s.replace(tA,eA)}function eA(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function n0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nA(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===d0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===DS?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function iA(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ss:case ys:e="ENVMAP_TYPE_CUBE";break;case Cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aA(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function rA(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case p0:e="ENVMAP_BLENDING_MULTIPLY";break;case ZS:e="ENVMAP_BLENDING_MIX";break;case KS:e="ENVMAP_BLENDING_ADD";break}return e}function sA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function oA(s,e,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=nA(i),m=iA(i),g=aA(i),v=rA(i),x=sA(i),M=jb(i),b=Zb(u),C=l.createProgram();let y,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(wo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(wo).join(`
`),_.length>0&&(_+=`
`)):(y=[n0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),_=[n0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?le.tonemapping_pars_fragment:"",i.toneMapping!==Fa?qb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,Wb("linearToOutputTexel",i.outputColorSpace),Yb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(wo).join(`
`)),h=rd(h),h=$_(h,i),h=t0(h,i),d=rd(d),d=$_(d,i),d=t0(d,i),h=e0(h),d=e0(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===__?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===__?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=B+y+h,w=B+_+d,k=K_(l,l.VERTEX_SHADER,L),H=K_(l,l.FRAGMENT_SHADER,w);l.attachShader(C,k),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(G){if(s.debug.checkShaderErrors){const lt=l.getProgramInfoLog(C).trim(),st=l.getShaderInfoLog(k).trim(),_t=l.getShaderInfoLog(H).trim();let ht=!0,P=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ht=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,k,H);else{const Z=J_(l,k,"vertex"),q=J_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+lt+`
`+Z+`
`+q)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(st===""||_t==="")&&(P=!1);P&&(G.diagnostics={runnable:ht,programLog:lt,vertexShader:{log:st,prefix:y},fragmentShader:{log:_t,prefix:_}})}l.deleteShader(k),l.deleteShader(H),j=new yc(l,C),D=Kb(l,C)}let j;this.getUniforms=function(){return j===void 0&&I(this),j};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,Gb)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Vb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=k,this.fragmentShader=H,this}let lA=0;class cA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new uA(e),i.set(e,r)),r}}class uA{constructor(e){this.id=lA++,this.code=e,this.usedTimes=0}}function fA(s,e,i,r,l,u,h){const d=new R0,p=new cA,m=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return m.add(D),D===0?"uv":`uv${D}`}function y(D,R,G,lt,st){const _t=lt.fog,ht=st.geometry,P=D.isMeshStandardMaterial?lt.environment:null,Z=(D.isMeshStandardMaterial?i:e).get(D.envMap||P),q=Z&&Z.mapping===Cc?Z.image.height:null,Mt=b[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const U=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,$=U!==void 0?U.length:0;let vt=0;ht.morphAttributes.position!==void 0&&(vt=1),ht.morphAttributes.normal!==void 0&&(vt=2),ht.morphAttributes.color!==void 0&&(vt=3);let St,Q,pt,yt;if(Mt){const Ee=Ti[Mt];St=Ee.vertexShader,Q=Ee.fragmentShader}else St=D.vertexShader,Q=D.fragmentShader,p.update(D),pt=p.getVertexShaderID(D),yt=p.getFragmentShaderID(D);const Rt=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),oe=st.isInstancedMesh===!0,Qt=st.isBatchedMesh===!0,Ue=!!D.map,ze=!!D.matcap,me=!!Z,z=!!D.aoMap,xn=!!D.lightMap,ye=!!D.bumpMap,he=!!D.normalMap,Vt=!!D.displacementMap,ge=!!D.emissiveMap,jt=!!D.metalnessMap,ae=!!D.roughnessMap,Ke=D.anisotropy>0,N=D.clearcoat>0,E=D.dispersion>0,tt=D.iridescence>0,ut=D.sheen>0,dt=D.transmission>0,ot=Ke&&!!D.anisotropyMap,Pt=N&&!!D.clearcoatMap,Ut=N&&!!D.clearcoatNormalMap,Gt=N&&!!D.clearcoatRoughnessMap,kt=tt&&!!D.iridescenceMap,xt=tt&&!!D.iridescenceThicknessMap,Bt=ut&&!!D.sheenColorMap,qt=ut&&!!D.sheenRoughnessMap,Yt=!!D.specularMap,Ct=!!D.specularColorMap,ie=!!D.specularIntensityMap,V=dt&&!!D.transmissionMap,Nt=dt&&!!D.thicknessMap,Et=!!D.gradientMap,zt=!!D.alphaMap,At=D.alphaTest>0,gt=!!D.alphaHash,Ft=!!D.extensions;let ne=Fa;D.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(ne=s.toneMapping);const Ce={shaderID:Mt,shaderType:D.type,shaderName:D.name,vertexShader:St,fragmentShader:Q,defines:D.defines,customVertexShaderID:pt,customFragmentShaderID:yt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Qt,batchingColor:Qt&&st._colorsTexture!==null,instancing:oe,instancingColor:oe&&st.instanceColor!==null,instancingMorph:oe&&st.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Rt===null?s.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Ms,alphaToCoverage:!!D.alphaToCoverage,map:Ue,matcap:ze,envMap:me,envMapMode:me&&Z.mapping,envMapCubeUVHeight:q,aoMap:z,lightMap:xn,bumpMap:ye,normalMap:he,displacementMap:x&&Vt,emissiveMap:ge,normalMapObjectSpace:he&&D.normalMapType===ly,normalMapTangentSpace:he&&D.normalMapType===oy,metalnessMap:jt,roughnessMap:ae,anisotropy:Ke,anisotropyMap:ot,clearcoat:N,clearcoatMap:Pt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Gt,dispersion:E,iridescence:tt,iridescenceMap:kt,iridescenceThicknessMap:xt,sheen:ut,sheenColorMap:Bt,sheenRoughnessMap:qt,specularMap:Yt,specularColorMap:Ct,specularIntensityMap:ie,transmission:dt,transmissionMap:V,thicknessMap:Nt,gradientMap:Et,opaque:D.transparent===!1&&D.blending===gs&&D.alphaToCoverage===!1,alphaMap:zt,alphaTest:At,alphaHash:gt,combine:D.combine,mapUv:Ue&&C(D.map.channel),aoMapUv:z&&C(D.aoMap.channel),lightMapUv:xn&&C(D.lightMap.channel),bumpMapUv:ye&&C(D.bumpMap.channel),normalMapUv:he&&C(D.normalMap.channel),displacementMapUv:Vt&&C(D.displacementMap.channel),emissiveMapUv:ge&&C(D.emissiveMap.channel),metalnessMapUv:jt&&C(D.metalnessMap.channel),roughnessMapUv:ae&&C(D.roughnessMap.channel),anisotropyMapUv:ot&&C(D.anisotropyMap.channel),clearcoatMapUv:Pt&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:qt&&C(D.sheenRoughnessMap.channel),specularMapUv:Yt&&C(D.specularMap.channel),specularColorMapUv:Ct&&C(D.specularColorMap.channel),specularIntensityMapUv:ie&&C(D.specularIntensityMap.channel),transmissionMapUv:V&&C(D.transmissionMap.channel),thicknessMapUv:Nt&&C(D.thicknessMap.channel),alphaMapUv:zt&&C(D.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(he||Ke),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ht.attributes.uv&&(Ue||zt),fog:!!_t,useFog:D.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:wt,skinning:st.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ue&&D.map.isVideoTexture===!0&&be.getTransfer(D.map.colorSpace)===Pe,decodeVideoTextureEmissive:ge&&D.emissiveMap.isVideoTexture===!0&&be.getTransfer(D.emissiveMap.colorSpace)===Pe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===$i,flipSided:D.side===Fn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ft&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&D.extensions.multiDraw===!0||Qt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ce.vertexUv1s=m.has(1),Ce.vertexUv2s=m.has(2),Ce.vertexUv3s=m.has(3),m.clear(),Ce}function _(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)R.push(G),R.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(B(R,D),L(R,D),R.push(s.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function B(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function L(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const R=b[D.type];let G;if(R){const lt=Ti[R];G=Hy.clone(lt.uniforms)}else G=D.uniforms;return G}function k(D,R){let G;for(let lt=0,st=g.length;lt<st;lt++){const _t=g[lt];if(_t.cacheKey===R){G=_t,++G.usedTimes;break}}return G===void 0&&(G=new oA(s,R,D,u),g.push(G)),G}function H(D){if(--D.usedTimes===0){const R=g.indexOf(D);g[R]=g[g.length-1],g.pop(),D.destroy()}}function I(D){p.remove(D)}function j(){p.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:w,acquireProgram:k,releaseProgram:H,releaseShaderCache:I,programs:g,dispose:j}}function hA(){let s=new WeakMap;function e(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,p){s.get(h)[d]=p}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function dA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function i0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function a0(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,x,M,b,C,y){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:b,renderOrder:v.renderOrder,z:C,group:y},s[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=C,_.group=y),e++,_}function d(v,x,M,b,C,y){const _=h(v,x,M,b,C,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function p(v,x,M,b,C,y){const _=h(v,x,M,b,C,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function m(v,x){i.length>1&&i.sort(v||dA),r.length>1&&r.sort(x||i0),l.length>1&&l.sort(x||i0)}function g(){for(let v=e,x=s.length;v<x;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:p,finish:g,sort:m}}function pA(){let s=new WeakMap;function e(r,l){const u=s.get(r);let h;return u===void 0?(h=new a0,s.set(r,[h])):l>=u.length?(h=new a0,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:e,dispose:i}}function mA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Be};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":i={color:new Be,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return s[e.id]=i,i}}}function gA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let _A=0;function vA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function xA(s){const e=new mA,i=gA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new rt);const l=new rt,u=new rn,h=new rn;function d(m){let g=0,v=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,b=0,C=0,y=0,_=0,B=0,L=0,w=0,k=0,H=0,I=0;m.sort(vA);for(let D=0,R=m.length;D<R;D++){const G=m[D],lt=G.color,st=G.intensity,_t=G.distance,ht=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=lt.r*st,v+=lt.g*st,x+=lt.b*st;else if(G.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(G.sh.coefficients[P],st);I++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,q=i.get(G);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.directionalShadow[M]=q,r.directionalShadowMap[M]=ht,r.directionalShadowMatrix[M]=G.shadow.matrix,B++}r.directional[M]=P,M++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(lt).multiplyScalar(st),P.distance=_t,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,r.spot[C]=P;const Z=G.shadow;if(G.map&&(r.spotLightMap[k]=G.map,k++,Z.updateMatrices(G),G.castShadow&&H++),r.spotLightMatrix[C]=Z.matrix,G.castShadow){const q=i.get(G);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.spotShadow[C]=q,r.spotShadowMap[C]=ht,w++}C++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(lt).multiplyScalar(st),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=P,y++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const Z=G.shadow,q=i.get(G);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,r.pointShadow[b]=q,r.pointShadowMap[b]=ht,r.pointShadowMatrix[b]=G.shadow.matrix,L++}r.point[b]=P,b++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(st),P.groundColor.copy(G.groundColor).multiplyScalar(st),r.hemi[_]=P,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==M||j.pointLength!==b||j.spotLength!==C||j.rectAreaLength!==y||j.hemiLength!==_||j.numDirectionalShadows!==B||j.numPointShadows!==L||j.numSpotShadows!==w||j.numSpotMaps!==k||j.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=w+k-H,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=I,j.directionalLength=M,j.pointLength=b,j.spotLength=C,j.rectAreaLength=y,j.hemiLength=_,j.numDirectionalShadows=B,j.numPointShadows=L,j.numSpotShadows=w,j.numSpotMaps=k,j.numLightProbes=I,r.version=_A++)}function p(m,g){let v=0,x=0,M=0,b=0,C=0;const y=g.matrixWorldInverse;for(let _=0,B=m.length;_<B;_++){const L=m[_];if(L.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),v++}else if(L.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const w=r.rectArea[b];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),h.identity(),u.copy(L.matrixWorld),u.premultiply(y),h.extractRotation(u),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),b++}else if(L.isPointLight){const w=r.point[x];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(y),C++}}}return{setup:d,setupView:p,state:r}}function r0(s){const e=new xA(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function SA(s){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new r0(s),e.set(l,[d])):u>=h.length?(d=new r0(s),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const yA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function EA(s,e,i){let r=new O0;const l=new He,u=new He,h=new $e,d=new Zy({depthPacking:sy}),p=new Ky,m={},g=i.maxTextureSize,v={[Ha]:Fn,[Fn]:Ha,[$i]:$i},x=new Ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:yA,fragmentShader:MA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new Mr;b.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ai(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=d0;let _=this.type;this.render=function(H,I,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const D=s.getRenderTarget(),R=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),lt=s.state;lt.setBlending(Ia),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const st=_!==Ji&&this.type===Ji,_t=_===Ji&&this.type!==Ji;for(let ht=0,P=H.length;ht<P;ht++){const Z=H[ht],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const Mt=q.getFrameExtents();if(l.multiply(Mt),u.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Mt.x),l.x=u.x*Mt.x,q.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Mt.y),l.y=u.y*Mt.y,q.mapSize.y=u.y)),q.map===null||st===!0||_t===!0){const $=this.type!==Ji?{minFilter:gi,magFilter:gi}:{};q.map!==null&&q.map.dispose(),q.map=new yr(l.x,l.y,$),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const U=q.getViewportCount();for(let $=0;$<U;$++){const vt=q.getViewport($);h.set(u.x*vt.x,u.y*vt.y,u.x*vt.z,u.y*vt.w),lt.viewport(h),q.updateMatrices(Z,$),r=q.getFrustum(),w(I,j,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===Ji&&B(q,j),q.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(D,R,G)};function B(H,I){const j=e.update(C);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new yr(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(I,null,j,x,C,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(I,null,j,M,C,null)}function L(H,I,j,D){let R=null;const G=j.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)R=G;else if(R=j.isPointLight===!0?p:d,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const lt=R.uuid,st=I.uuid;let _t=m[lt];_t===void 0&&(_t={},m[lt]=_t);let ht=_t[st];ht===void 0&&(ht=R.clone(),_t[st]=ht,I.addEventListener("dispose",k)),R=ht}if(R.visible=I.visible,R.wireframe=I.wireframe,D===Ji?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:v[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const lt=s.properties.get(R);lt.light=j}return R}function w(H,I,j,D,R){if(H.visible===!1)return;if(H.layers.test(I.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&R===Ji)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,H.matrixWorld);const st=e.update(H),_t=H.material;if(Array.isArray(_t)){const ht=st.groups;for(let P=0,Z=ht.length;P<Z;P++){const q=ht[P],Mt=_t[q.materialIndex];if(Mt&&Mt.visible){const U=L(H,Mt,D,R);H.onBeforeShadow(s,H,I,j,st,U,q),s.renderBufferDirect(j,null,st,U,H,q),H.onAfterShadow(s,H,I,j,st,U,q)}}}else if(_t.visible){const ht=L(H,_t,D,R);H.onBeforeShadow(s,H,I,j,st,ht,null),s.renderBufferDirect(j,null,st,ht,H,null),H.onAfterShadow(s,H,I,j,st,ht,null)}}const lt=H.children;for(let st=0,_t=lt.length;st<_t;st++)w(lt[st],I,j,D,R)}function k(H){H.target.removeEventListener("dispose",k);for(const j in m){const D=m[j],R=H.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const TA={[yh]:Mh,[Eh]:Ah,[Th]:Rh,[xs]:bh,[Mh]:yh,[Ah]:Eh,[Rh]:Th,[bh]:xs};function bA(s,e){function i(){let V=!1;const Nt=new $e;let Et=null;const zt=new $e(0,0,0,0);return{setMask:function(At){Et!==At&&!V&&(s.colorMask(At,At,At,At),Et=At)},setLocked:function(At){V=At},setClear:function(At,gt,Ft,ne,Ce){Ce===!0&&(At*=ne,gt*=ne,Ft*=ne),Nt.set(At,gt,Ft,ne),zt.equals(Nt)===!1&&(s.clearColor(At,gt,Ft,ne),zt.copy(Nt))},reset:function(){V=!1,Et=null,zt.set(-1,0,0,0)}}}function r(){let V=!1,Nt=!1,Et=null,zt=null,At=null;return{setReversed:function(gt){if(Nt!==gt){const Ft=e.get("EXT_clip_control");gt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Nt=gt;const ne=At;At=null,this.setClear(ne)}},getReversed:function(){return Nt},setTest:function(gt){gt?Rt(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(gt){Et!==gt&&!V&&(s.depthMask(gt),Et=gt)},setFunc:function(gt){if(Nt&&(gt=TA[gt]),zt!==gt){switch(gt){case yh:s.depthFunc(s.NEVER);break;case Mh:s.depthFunc(s.ALWAYS);break;case Eh:s.depthFunc(s.LESS);break;case xs:s.depthFunc(s.LEQUAL);break;case Th:s.depthFunc(s.EQUAL);break;case bh:s.depthFunc(s.GEQUAL);break;case Ah:s.depthFunc(s.GREATER);break;case Rh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}zt=gt}},setLocked:function(gt){V=gt},setClear:function(gt){At!==gt&&(Nt&&(gt=1-gt),s.clearDepth(gt),At=gt)},reset:function(){V=!1,Et=null,zt=null,At=null,Nt=!1}}}function l(){let V=!1,Nt=null,Et=null,zt=null,At=null,gt=null,Ft=null,ne=null,Ce=null;return{setTest:function(Ee){V||(Ee?Rt(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(Ee){Nt!==Ee&&!V&&(s.stencilMask(Ee),Nt=Ee)},setFunc:function(Ee,Gn,hn){(Et!==Ee||zt!==Gn||At!==hn)&&(s.stencilFunc(Ee,Gn,hn),Et=Ee,zt=Gn,At=hn)},setOp:function(Ee,Gn,hn){(gt!==Ee||Ft!==Gn||ne!==hn)&&(s.stencilOp(Ee,Gn,hn),gt=Ee,Ft=Gn,ne=hn)},setLocked:function(Ee){V=Ee},setClear:function(Ee){Ce!==Ee&&(s.clearStencil(Ee),Ce=Ee)},reset:function(){V=!1,Nt=null,Et=null,zt=null,At=null,gt=null,Ft=null,ne=null,Ce=null}}}const u=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let g={},v={},x=new WeakMap,M=[],b=null,C=!1,y=null,_=null,B=null,L=null,w=null,k=null,H=null,I=new Be(0,0,0),j=0,D=!1,R=null,G=null,lt=null,st=null,_t=null;const ht=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Z=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),P=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),P=Z>=2);let Mt=null,U={};const $=s.getParameter(s.SCISSOR_BOX),vt=s.getParameter(s.VIEWPORT),St=new $e().fromArray($),Q=new $e().fromArray(vt);function pt(V,Nt,Et,zt){const At=new Uint8Array(4),gt=s.createTexture();s.bindTexture(V,gt),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<Et;Ft++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Nt,0,s.RGBA,1,1,zt,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(Nt+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return gt}const yt={};yt[s.TEXTURE_2D]=pt(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Rt(s.DEPTH_TEST),h.setFunc(xs),ye(!1),he(f_),Rt(s.CULL_FACE),z(Ia);function Rt(V){g[V]!==!0&&(s.enable(V),g[V]=!0)}function wt(V){g[V]!==!1&&(s.disable(V),g[V]=!1)}function oe(V,Nt){return v[V]!==Nt?(s.bindFramebuffer(V,Nt),v[V]=Nt,V===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Nt),V===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Qt(V,Nt){let Et=M,zt=!1;if(V){Et=x.get(Nt),Et===void 0&&(Et=[],x.set(Nt,Et));const At=V.textures;if(Et.length!==At.length||Et[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,Ft=At.length;gt<Ft;gt++)Et[gt]=s.COLOR_ATTACHMENT0+gt;Et.length=At.length,zt=!0}}else Et[0]!==s.BACK&&(Et[0]=s.BACK,zt=!0);zt&&s.drawBuffers(Et)}function Ue(V){return b!==V?(s.useProgram(V),b=V,!0):!1}const ze={[mr]:s.FUNC_ADD,[NS]:s.FUNC_SUBTRACT,[LS]:s.FUNC_REVERSE_SUBTRACT};ze[OS]=s.MIN,ze[PS]=s.MAX;const me={[BS]:s.ZERO,[zS]:s.ONE,[IS]:s.SRC_COLOR,[xh]:s.SRC_ALPHA,[XS]:s.SRC_ALPHA_SATURATE,[VS]:s.DST_COLOR,[HS]:s.DST_ALPHA,[FS]:s.ONE_MINUS_SRC_COLOR,[Sh]:s.ONE_MINUS_SRC_ALPHA,[kS]:s.ONE_MINUS_DST_COLOR,[GS]:s.ONE_MINUS_DST_ALPHA,[WS]:s.CONSTANT_COLOR,[qS]:s.ONE_MINUS_CONSTANT_COLOR,[YS]:s.CONSTANT_ALPHA,[jS]:s.ONE_MINUS_CONSTANT_ALPHA};function z(V,Nt,Et,zt,At,gt,Ft,ne,Ce,Ee){if(V===Ia){C===!0&&(wt(s.BLEND),C=!1);return}if(C===!1&&(Rt(s.BLEND),C=!0),V!==US){if(V!==y||Ee!==D){if((_!==mr||w!==mr)&&(s.blendEquation(s.FUNC_ADD),_=mr,w=mr),Ee)switch(V){case gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case h_:s.blendFunc(s.ONE,s.ONE);break;case d_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case p_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case h_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case d_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case p_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}B=null,L=null,k=null,H=null,I.set(0,0,0),j=0,y=V,D=Ee}return}At=At||Nt,gt=gt||Et,Ft=Ft||zt,(Nt!==_||At!==w)&&(s.blendEquationSeparate(ze[Nt],ze[At]),_=Nt,w=At),(Et!==B||zt!==L||gt!==k||Ft!==H)&&(s.blendFuncSeparate(me[Et],me[zt],me[gt],me[Ft]),B=Et,L=zt,k=gt,H=Ft),(ne.equals(I)===!1||Ce!==j)&&(s.blendColor(ne.r,ne.g,ne.b,Ce),I.copy(ne),j=Ce),y=V,D=!1}function xn(V,Nt){V.side===$i?wt(s.CULL_FACE):Rt(s.CULL_FACE);let Et=V.side===Fn;Nt&&(Et=!Et),ye(Et),V.blending===gs&&V.transparent===!1?z(Ia):z(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),u.setMask(V.colorWrite);const zt=V.stencilWrite;d.setTest(zt),zt&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ge(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Rt(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ye(V){R!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),R=V)}function he(V){V!==CS?(Rt(s.CULL_FACE),V!==G&&(V===f_?s.cullFace(s.BACK):V===wS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),G=V}function Vt(V){V!==lt&&(P&&s.lineWidth(V),lt=V)}function ge(V,Nt,Et){V?(Rt(s.POLYGON_OFFSET_FILL),(st!==Nt||_t!==Et)&&(s.polygonOffset(Nt,Et),st=Nt,_t=Et)):wt(s.POLYGON_OFFSET_FILL)}function jt(V){V?Rt(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function ae(V){V===void 0&&(V=s.TEXTURE0+ht-1),Mt!==V&&(s.activeTexture(V),Mt=V)}function Ke(V,Nt,Et){Et===void 0&&(Mt===null?Et=s.TEXTURE0+ht-1:Et=Mt);let zt=U[Et];zt===void 0&&(zt={type:void 0,texture:void 0},U[Et]=zt),(zt.type!==V||zt.texture!==Nt)&&(Mt!==Et&&(s.activeTexture(Et),Mt=Et),s.bindTexture(V,Nt||yt[V]),zt.type=V,zt.texture=Nt)}function N(){const V=U[Mt];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function tt(){try{s.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{s.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{s.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ot(){try{s.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{s.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ut(){try{s.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{s.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function kt(){try{s.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xt(){try{s.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Bt(V){St.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),St.copy(V))}function qt(V){Q.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Q.copy(V))}function Yt(V,Nt){let Et=m.get(Nt);Et===void 0&&(Et=new WeakMap,m.set(Nt,Et));let zt=Et.get(V);zt===void 0&&(zt=s.getUniformBlockIndex(Nt,V.name),Et.set(V,zt))}function Ct(V,Nt){const zt=m.get(Nt).get(V);p.get(Nt)!==zt&&(s.uniformBlockBinding(Nt,zt,V.__bindingPointIndex),p.set(Nt,zt))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Mt=null,U={},v={},x=new WeakMap,M=[],b=null,C=!1,y=null,_=null,B=null,L=null,w=null,k=null,H=null,I=new Be(0,0,0),j=0,D=!1,R=null,G=null,lt=null,st=null,_t=null,St.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Rt,disable:wt,bindFramebuffer:oe,drawBuffers:Qt,useProgram:Ue,setBlending:z,setMaterial:xn,setFlipSided:ye,setCullFace:he,setLineWidth:Vt,setPolygonOffset:ge,setScissorTest:jt,activeTexture:ae,bindTexture:Ke,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:tt,texImage2D:kt,texImage3D:xt,updateUBOMapping:Yt,uniformBlockBinding:Ct,texStorage2D:Ut,texStorage3D:Gt,texSubImage2D:ut,texSubImage3D:dt,compressedTexSubImage2D:ot,compressedTexSubImage3D:Pt,scissor:Bt,viewport:qt,reset:ie}}function AA(s,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new He,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return M?new OffscreenCanvas(N,E):bc("canvas")}function C(N,E,tt){let ut=1;const dt=Ke(N);if((dt.width>tt||dt.height>tt)&&(ut=tt/Math.max(dt.width,dt.height)),ut<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ot=Math.floor(ut*dt.width),Pt=Math.floor(ut*dt.height);v===void 0&&(v=b(ot,Pt));const Ut=E?b(ot,Pt):v;return Ut.width=ot,Ut.height=Pt,Ut.getContext("2d").drawImage(N,0,0,ot,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+ot+"x"+Pt+")."),Ut}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),N;return N}function y(N){return N.generateMipmaps}function _(N){s.generateMipmap(N)}function B(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(N,E,tt,ut,dt=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ot=E;if(E===s.RED&&(tt===s.FLOAT&&(ot=s.R32F),tt===s.HALF_FLOAT&&(ot=s.R16F),tt===s.UNSIGNED_BYTE&&(ot=s.R8)),E===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ot=s.R8UI),tt===s.UNSIGNED_SHORT&&(ot=s.R16UI),tt===s.UNSIGNED_INT&&(ot=s.R32UI),tt===s.BYTE&&(ot=s.R8I),tt===s.SHORT&&(ot=s.R16I),tt===s.INT&&(ot=s.R32I)),E===s.RG&&(tt===s.FLOAT&&(ot=s.RG32F),tt===s.HALF_FLOAT&&(ot=s.RG16F),tt===s.UNSIGNED_BYTE&&(ot=s.RG8)),E===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ot=s.RG8UI),tt===s.UNSIGNED_SHORT&&(ot=s.RG16UI),tt===s.UNSIGNED_INT&&(ot=s.RG32UI),tt===s.BYTE&&(ot=s.RG8I),tt===s.SHORT&&(ot=s.RG16I),tt===s.INT&&(ot=s.RG32I)),E===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ot=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(ot=s.RGB16UI),tt===s.UNSIGNED_INT&&(ot=s.RGB32UI),tt===s.BYTE&&(ot=s.RGB8I),tt===s.SHORT&&(ot=s.RGB16I),tt===s.INT&&(ot=s.RGB32I)),E===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ot=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(ot=s.RGBA16UI),tt===s.UNSIGNED_INT&&(ot=s.RGBA32UI),tt===s.BYTE&&(ot=s.RGBA8I),tt===s.SHORT&&(ot=s.RGBA16I),tt===s.INT&&(ot=s.RGBA32I)),E===s.RGB&&tt===s.UNSIGNED_INT_5_9_9_9_REV&&(ot=s.RGB9_E5),E===s.RGBA){const Pt=dt?Ec:be.getTransfer(ut);tt===s.FLOAT&&(ot=s.RGBA32F),tt===s.HALF_FLOAT&&(ot=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(ot=Pt===Pe?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(ot=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(ot=s.RGB5_A1)}return(ot===s.R16F||ot===s.R32F||ot===s.RG16F||ot===s.RG32F||ot===s.RGBA16F||ot===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ot}function w(N,E){let tt;return N?E===null||E===Sr||E===Uo?tt=s.DEPTH24_STENCIL8:E===ta?tt=s.DEPTH32F_STENCIL8:E===Do&&(tt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Sr||E===Uo?tt=s.DEPTH_COMPONENT24:E===ta?tt=s.DEPTH_COMPONENT32F:E===Do&&(tt=s.DEPTH_COMPONENT16),tt}function k(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==gi&&N.minFilter!==bi?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function H(N){const E=N.target;E.removeEventListener("dispose",H),j(E),E.isVideoTexture&&g.delete(E)}function I(N){const E=N.target;E.removeEventListener("dispose",I),R(E)}function j(N){const E=r.get(N);if(E.__webglInit===void 0)return;const tt=N.source,ut=x.get(tt);if(ut){const dt=ut[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&D(N),Object.keys(ut).length===0&&x.delete(tt)}r.remove(N)}function D(N){const E=r.get(N);s.deleteTexture(E.__webglTexture);const tt=N.source,ut=x.get(tt);delete ut[E.__cacheKey],h.memory.textures--}function R(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let dt=0;dt<E.__webglFramebuffer[ut].length;dt++)s.deleteFramebuffer(E.__webglFramebuffer[ut][dt]);else s.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)s.deleteFramebuffer(E.__webglFramebuffer[ut]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=N.textures;for(let ut=0,dt=tt.length;ut<dt;ut++){const ot=r.get(tt[ut]);ot.__webglTexture&&(s.deleteTexture(ot.__webglTexture),h.memory.textures--),r.remove(tt[ut])}r.remove(N)}let G=0;function lt(){G=0}function st(){const N=G;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),G+=1,N}function _t(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ht(N,E){const tt=r.get(N);if(N.isVideoTexture&&jt(N),N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){const ut=N.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(tt,N,E);return}}i.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+E)}function P(N,E){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){yt(tt,N,E);return}i.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+E)}function Z(N,E){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){yt(tt,N,E);return}i.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+E)}function q(N,E){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){Rt(tt,N,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+E)}const Mt={[Dh]:s.REPEAT,[_r]:s.CLAMP_TO_EDGE,[Uh]:s.MIRRORED_REPEAT},U={[gi]:s.NEAREST,[ay]:s.NEAREST_MIPMAP_NEAREST,[Zl]:s.NEAREST_MIPMAP_LINEAR,[bi]:s.LINEAR,[Gf]:s.LINEAR_MIPMAP_NEAREST,[vr]:s.LINEAR_MIPMAP_LINEAR},$={[cy]:s.NEVER,[my]:s.ALWAYS,[uy]:s.LESS,[T0]:s.LEQUAL,[fy]:s.EQUAL,[py]:s.GEQUAL,[hy]:s.GREATER,[dy]:s.NOTEQUAL};function vt(N,E){if(E.type===ta&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===bi||E.magFilter===Gf||E.magFilter===Zl||E.magFilter===vr||E.minFilter===bi||E.minFilter===Gf||E.minFilter===Zl||E.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Mt[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Mt[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Mt[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,U[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===gi||E.minFilter!==Zl&&E.minFilter!==vr||E.type===ta&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function St(N,E){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",H));const ut=E.source;let dt=x.get(ut);dt===void 0&&(dt={},x.set(ut,dt));const ot=_t(E);if(ot!==N.__cacheKey){dt[ot]===void 0&&(dt[ot]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),dt[ot].usedTimes++;const Pt=dt[N.__cacheKey];Pt!==void 0&&(dt[N.__cacheKey].usedTimes--,Pt.usedTimes===0&&D(E)),N.__cacheKey=ot,N.__webglTexture=dt[ot].texture}return tt}function Q(N,E,tt){return Math.floor(Math.floor(N/tt)/E)}function pt(N,E,tt,ut){const ot=N.updateRanges;if(ot.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,tt,ut,E.data);else{ot.sort((xt,Bt)=>xt.start-Bt.start);let Pt=0;for(let xt=1;xt<ot.length;xt++){const Bt=ot[Pt],qt=ot[xt],Yt=Bt.start+Bt.count,Ct=Q(qt.start,E.width,4),ie=Q(Bt.start,E.width,4);qt.start<=Yt+1&&Ct===ie&&Q(qt.start+qt.count-1,E.width,4)===Ct?Bt.count=Math.max(Bt.count,qt.start+qt.count-Bt.start):(++Pt,ot[Pt]=qt)}ot.length=Pt+1;const Ut=s.getParameter(s.UNPACK_ROW_LENGTH),Gt=s.getParameter(s.UNPACK_SKIP_PIXELS),kt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let xt=0,Bt=ot.length;xt<Bt;xt++){const qt=ot[xt],Yt=Math.floor(qt.start/4),Ct=Math.ceil(qt.count/4),ie=Yt%E.width,V=Math.floor(Yt/E.width),Nt=Ct,Et=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),i.texSubImage2D(s.TEXTURE_2D,0,ie,V,Nt,Et,tt,ut,E.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ut),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,kt)}}function yt(N,E,tt){let ut=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=s.TEXTURE_3D);const dt=St(N,E),ot=E.source;i.bindTexture(ut,N.__webglTexture,s.TEXTURE0+tt);const Pt=r.get(ot);if(ot.version!==Pt.__version||dt===!0){i.activeTexture(s.TEXTURE0+tt);const Ut=be.getPrimaries(be.workingColorSpace),Gt=E.colorSpace===za?null:be.getPrimaries(E.colorSpace),kt=E.colorSpace===za||Ut===Gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let xt=C(E.image,!1,l.maxTextureSize);xt=ae(E,xt);const Bt=u.convert(E.format,E.colorSpace),qt=u.convert(E.type);let Yt=L(E.internalFormat,Bt,qt,E.colorSpace,E.isVideoTexture);vt(ut,E);let Ct;const ie=E.mipmaps,V=E.isVideoTexture!==!0,Nt=Pt.__version===void 0||dt===!0,Et=ot.dataReady,zt=k(E,xt);if(E.isDepthTexture)Yt=w(E.format===Lo,E.type),Nt&&(V?i.texStorage2D(s.TEXTURE_2D,1,Yt,xt.width,xt.height):i.texImage2D(s.TEXTURE_2D,0,Yt,xt.width,xt.height,0,Bt,qt,null));else if(E.isDataTexture)if(ie.length>0){V&&Nt&&i.texStorage2D(s.TEXTURE_2D,zt,Yt,ie[0].width,ie[0].height);for(let At=0,gt=ie.length;At<gt;At++)Ct=ie[At],V?Et&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,Ct.width,Ct.height,Bt,qt,Ct.data):i.texImage2D(s.TEXTURE_2D,At,Yt,Ct.width,Ct.height,0,Bt,qt,Ct.data);E.generateMipmaps=!1}else V?(Nt&&i.texStorage2D(s.TEXTURE_2D,zt,Yt,xt.width,xt.height),Et&&pt(E,xt,Bt,qt)):i.texImage2D(s.TEXTURE_2D,0,Yt,xt.width,xt.height,0,Bt,qt,xt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&Nt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,zt,Yt,ie[0].width,ie[0].height,xt.depth);for(let At=0,gt=ie.length;At<gt;At++)if(Ct=ie[At],E.format!==mi)if(Bt!==null)if(V){if(Et)if(E.layerUpdates.size>0){const Ft=P_(Ct.width,Ct.height,E.format,E.type);for(const ne of E.layerUpdates){const Ce=Ct.data.subarray(ne*Ft/Ct.data.BYTES_PER_ELEMENT,(ne+1)*Ft/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,ne,Ct.width,Ct.height,1,Bt,Ce)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,Ct.width,Ct.height,xt.depth,Bt,Ct.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,At,Yt,Ct.width,Ct.height,xt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Et&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,Ct.width,Ct.height,xt.depth,Bt,qt,Ct.data):i.texImage3D(s.TEXTURE_2D_ARRAY,At,Yt,Ct.width,Ct.height,xt.depth,0,Bt,qt,Ct.data)}else{V&&Nt&&i.texStorage2D(s.TEXTURE_2D,zt,Yt,ie[0].width,ie[0].height);for(let At=0,gt=ie.length;At<gt;At++)Ct=ie[At],E.format!==mi?Bt!==null?V?Et&&i.compressedTexSubImage2D(s.TEXTURE_2D,At,0,0,Ct.width,Ct.height,Bt,Ct.data):i.compressedTexImage2D(s.TEXTURE_2D,At,Yt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Et&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,Ct.width,Ct.height,Bt,qt,Ct.data):i.texImage2D(s.TEXTURE_2D,At,Yt,Ct.width,Ct.height,0,Bt,qt,Ct.data)}else if(E.isDataArrayTexture)if(V){if(Nt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,zt,Yt,xt.width,xt.height,xt.depth),Et)if(E.layerUpdates.size>0){const At=P_(xt.width,xt.height,E.format,E.type);for(const gt of E.layerUpdates){const Ft=xt.data.subarray(gt*At/xt.data.BYTES_PER_ELEMENT,(gt+1)*At/xt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,xt.width,xt.height,1,Bt,qt,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Bt,qt,xt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Yt,xt.width,xt.height,xt.depth,0,Bt,qt,xt.data);else if(E.isData3DTexture)V?(Nt&&i.texStorage3D(s.TEXTURE_3D,zt,Yt,xt.width,xt.height,xt.depth),Et&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Bt,qt,xt.data)):i.texImage3D(s.TEXTURE_3D,0,Yt,xt.width,xt.height,xt.depth,0,Bt,qt,xt.data);else if(E.isFramebufferTexture){if(Nt)if(V)i.texStorage2D(s.TEXTURE_2D,zt,Yt,xt.width,xt.height);else{let At=xt.width,gt=xt.height;for(let Ft=0;Ft<zt;Ft++)i.texImage2D(s.TEXTURE_2D,Ft,Yt,At,gt,0,Bt,qt,null),At>>=1,gt>>=1}}else if(ie.length>0){if(V&&Nt){const At=Ke(ie[0]);i.texStorage2D(s.TEXTURE_2D,zt,Yt,At.width,At.height)}for(let At=0,gt=ie.length;At<gt;At++)Ct=ie[At],V?Et&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,Bt,qt,Ct):i.texImage2D(s.TEXTURE_2D,At,Yt,Bt,qt,Ct);E.generateMipmaps=!1}else if(V){if(Nt){const At=Ke(xt);i.texStorage2D(s.TEXTURE_2D,zt,Yt,At.width,At.height)}Et&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Bt,qt,xt)}else i.texImage2D(s.TEXTURE_2D,0,Yt,Bt,qt,xt);y(E)&&_(ut),Pt.__version=ot.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Rt(N,E,tt){if(E.image.length!==6)return;const ut=St(N,E),dt=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+tt);const ot=r.get(dt);if(dt.version!==ot.__version||ut===!0){i.activeTexture(s.TEXTURE0+tt);const Pt=be.getPrimaries(be.workingColorSpace),Ut=E.colorSpace===za?null:be.getPrimaries(E.colorSpace),Gt=E.colorSpace===za||Pt===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const kt=E.isCompressedTexture||E.image[0].isCompressedTexture,xt=E.image[0]&&E.image[0].isDataTexture,Bt=[];for(let gt=0;gt<6;gt++)!kt&&!xt?Bt[gt]=C(E.image[gt],!0,l.maxCubemapSize):Bt[gt]=xt?E.image[gt].image:E.image[gt],Bt[gt]=ae(E,Bt[gt]);const qt=Bt[0],Yt=u.convert(E.format,E.colorSpace),Ct=u.convert(E.type),ie=L(E.internalFormat,Yt,Ct,E.colorSpace),V=E.isVideoTexture!==!0,Nt=ot.__version===void 0||ut===!0,Et=dt.dataReady;let zt=k(E,qt);vt(s.TEXTURE_CUBE_MAP,E);let At;if(kt){V&&Nt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,zt,ie,qt.width,qt.height);for(let gt=0;gt<6;gt++){At=Bt[gt].mipmaps;for(let Ft=0;Ft<At.length;Ft++){const ne=At[Ft];E.format!==mi?Yt!==null?V?Et&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,0,0,ne.width,ne.height,Yt,ne.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,ie,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Et&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,0,0,ne.width,ne.height,Yt,Ct,ne.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,ie,ne.width,ne.height,0,Yt,Ct,ne.data)}}}else{if(At=E.mipmaps,V&&Nt){At.length>0&&zt++;const gt=Ke(Bt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,zt,ie,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(xt){V?Et&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Bt[gt].width,Bt[gt].height,Yt,Ct,Bt[gt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ie,Bt[gt].width,Bt[gt].height,0,Yt,Ct,Bt[gt].data);for(let Ft=0;Ft<At.length;Ft++){const Ce=At[Ft].image[gt].image;V?Et&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,0,0,Ce.width,Ce.height,Yt,Ct,Ce.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,ie,Ce.width,Ce.height,0,Yt,Ct,Ce.data)}}else{V?Et&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Yt,Ct,Bt[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ie,Yt,Ct,Bt[gt]);for(let Ft=0;Ft<At.length;Ft++){const ne=At[Ft];V?Et&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,0,0,Yt,Ct,ne.image[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,ie,Yt,Ct,ne.image[gt])}}}y(E)&&_(s.TEXTURE_CUBE_MAP),ot.__version=dt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function wt(N,E,tt,ut,dt,ot){const Pt=u.convert(tt.format,tt.colorSpace),Ut=u.convert(tt.type),Gt=L(tt.internalFormat,Pt,Ut,tt.colorSpace),kt=r.get(E),xt=r.get(tt);if(xt.__renderTarget=E,!kt.__hasExternalTextures){const Bt=Math.max(1,E.width>>ot),qt=Math.max(1,E.height>>ot);dt===s.TEXTURE_3D||dt===s.TEXTURE_2D_ARRAY?i.texImage3D(dt,ot,Gt,Bt,qt,E.depth,0,Pt,Ut,null):i.texImage2D(dt,ot,Gt,Bt,qt,0,Pt,Ut,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),ge(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,dt,xt.__webglTexture,0,Vt(E)):(dt===s.TEXTURE_2D||dt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ut,dt,xt.__webglTexture,ot),i.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(N,E,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer){const ut=E.depthTexture,dt=ut&&ut.isDepthTexture?ut.type:null,ot=w(E.stencilBuffer,dt),Pt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ut=Vt(E);ge(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut,ot,E.width,E.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,ot,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ot,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pt,s.RENDERBUFFER,N)}else{const ut=E.textures;for(let dt=0;dt<ut.length;dt++){const ot=ut[dt],Pt=u.convert(ot.format,ot.colorSpace),Ut=u.convert(ot.type),Gt=L(ot.internalFormat,Pt,Ut,ot.colorSpace),kt=Vt(E);tt&&ge(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,Gt,E.width,E.height):ge(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt,Gt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Gt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qt(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=r.get(E.depthTexture);ut.__renderTarget=E,(!ut.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const dt=ut.__webglTexture,ot=Vt(E);if(E.depthTexture.format===No)ge(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0);else if(E.depthTexture.format===Lo)ge(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function Ue(N){const E=r.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ut=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",dt)};ut.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=ut}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ut=N.texture.mipmaps;ut&&ut.length>0?Qt(E.__webglFramebuffer[0],N):Qt(E.__webglFramebuffer,N)}else if(tt){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=s.createRenderbuffer(),oe(E.__webglDepthbuffer[ut],N,!1);else{const dt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer[ut];s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,ot)}}else{const ut=N.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),oe(E.__webglDepthbuffer,N,!1);else{const dt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,ot)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(N,E,tt){const ut=r.get(N);E!==void 0&&wt(ut.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&Ue(N)}function me(N){const E=N.texture,tt=r.get(N),ut=r.get(E);N.addEventListener("dispose",I);const dt=N.textures,ot=N.isWebGLCubeRenderTarget===!0,Pt=dt.length>1;if(Pt||(ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture()),ut.__version=E.version,h.memory.textures++),ot){tt.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[Ut]=[];for(let Gt=0;Gt<E.mipmaps.length;Gt++)tt.__webglFramebuffer[Ut][Gt]=s.createFramebuffer()}else tt.__webglFramebuffer[Ut]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)tt.__webglFramebuffer[Ut]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(Pt)for(let Ut=0,Gt=dt.length;Ut<Gt;Ut++){const kt=r.get(dt[Ut]);kt.__webglTexture===void 0&&(kt.__webglTexture=s.createTexture(),h.memory.textures++)}if(N.samples>0&&ge(N)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Ut=0;Ut<dt.length;Ut++){const Gt=dt[Ut];tt.__webglColorRenderbuffer[Ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[Ut]);const kt=u.convert(Gt.format,Gt.colorSpace),xt=u.convert(Gt.type),Bt=L(Gt.internalFormat,kt,xt,Gt.colorSpace,N.isXRRenderTarget===!0),qt=Vt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,Bt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,tt.__webglColorRenderbuffer[Ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(tt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){i.bindTexture(s.TEXTURE_CUBE_MAP,ut.__webglTexture),vt(s.TEXTURE_CUBE_MAP,E);for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)wt(tt.__webglFramebuffer[Ut][Gt],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Gt);else wt(tt.__webglFramebuffer[Ut],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(E)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Ut=0,Gt=dt.length;Ut<Gt;Ut++){const kt=dt[Ut],xt=r.get(kt);i.bindTexture(s.TEXTURE_2D,xt.__webglTexture),vt(s.TEXTURE_2D,kt),wt(tt.__webglFramebuffer,N,kt,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,0),y(kt)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Ut=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ut=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ut,ut.__webglTexture),vt(Ut,E),E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)wt(tt.__webglFramebuffer[Gt],N,E,s.COLOR_ATTACHMENT0,Ut,Gt);else wt(tt.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,Ut,0);y(E)&&_(Ut),i.unbindTexture()}N.depthBuffer&&Ue(N)}function z(N){const E=N.textures;for(let tt=0,ut=E.length;tt<ut;tt++){const dt=E[tt];if(y(dt)){const ot=B(N),Pt=r.get(dt).__webglTexture;i.bindTexture(ot,Pt),_(ot),i.unbindTexture()}}}const xn=[],ye=[];function he(N){if(N.samples>0){if(ge(N)===!1){const E=N.textures,tt=N.width,ut=N.height;let dt=s.COLOR_BUFFER_BIT;const ot=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pt=r.get(N),Ut=E.length>1;if(Ut)for(let kt=0;kt<E.length;kt++)i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Gt=N.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let kt=0;kt<E.length;kt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(dt|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(dt|=s.STENCIL_BUFFER_BIT)),Ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[kt]);const xt=r.get(E[kt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xt,0)}s.blitFramebuffer(0,0,tt,ut,0,0,tt,ut,dt,s.NEAREST),p===!0&&(xn.length=0,ye.length=0,xn.push(s.COLOR_ATTACHMENT0+kt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(xn.push(ot),ye.push(ot),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ye)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xn))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ut)for(let kt=0;kt<E.length;kt++){i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[kt]);const xt=r.get(E[kt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.TEXTURE_2D,xt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const E=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Vt(N){return Math.min(l.maxSamples,N.samples)}function ge(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function jt(N){const E=h.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function ae(N,E){const tt=N.colorSpace,ut=N.format,dt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==Ms&&tt!==za&&(be.getTransfer(tt)===Pe?(ut!==mi||dt!==ia)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function Ke(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=st,this.resetTextureUnits=lt,this.setTexture2D=ht,this.setTexture2DArray=P,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=ze,this.setupRenderTarget=me,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=ge}function RA(s,e){function i(r,l=za){let u;const h=be.getTransfer(l);if(r===ia)return s.UNSIGNED_BYTE;if(r===ud)return s.UNSIGNED_SHORT_4_4_4_4;if(r===fd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===v0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===g0)return s.BYTE;if(r===_0)return s.SHORT;if(r===Do)return s.UNSIGNED_SHORT;if(r===cd)return s.INT;if(r===Sr)return s.UNSIGNED_INT;if(r===ta)return s.FLOAT;if(r===Oo)return s.HALF_FLOAT;if(r===x0)return s.ALPHA;if(r===S0)return s.RGB;if(r===mi)return s.RGBA;if(r===No)return s.DEPTH_COMPONENT;if(r===Lo)return s.DEPTH_STENCIL;if(r===y0)return s.RED;if(r===hd)return s.RED_INTEGER;if(r===M0)return s.RG;if(r===dd)return s.RG_INTEGER;if(r===pd)return s.RGBA_INTEGER;if(r===gc||r===_c||r===vc||r===xc)if(h===Pe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===gc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_c)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===gc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_c)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nh||r===Lh||r===Oh||r===Ph)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Nh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Oh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ph)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bh||r===zh||r===Ih)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Bh||r===zh)return h===Pe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Ih)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===jh||r===Zh||r===Kh||r===Qh||r===Jh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Fh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===kh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Sc||r===$h||r===td)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Sc)return h===Pe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$h)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===td)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===E0||r===ed||r===nd||r===id)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Sc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===ed)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===id)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Uo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const CA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class DA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Hn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ga({vertexShader:CA,fragmentShader:wA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ai(new Dc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UA extends Ts{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,g=null,v=null,x=null,M=null,b=null;const C=new DA,y=i.getContextAttributes();let _=null,B=null;const L=[],w=[],k=new He;let H=null;const I=new oi;I.viewport=new $e;const j=new oi;j.viewport=new $e;const D=[I,j],R=new Jy;let G=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pt=L[Q];return pt===void 0&&(pt=new uh,L[Q]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Q){let pt=L[Q];return pt===void 0&&(pt=new uh,L[Q]=pt),pt.getGripSpace()},this.getHand=function(Q){let pt=L[Q];return pt===void 0&&(pt=new uh,L[Q]=pt),pt.getHandSpace()};function st(Q){const pt=w.indexOf(Q.inputSource);if(pt===-1)return;const yt=L[pt];yt!==void 0&&(yt.update(Q.inputSource,Q.frame,m||h),yt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function _t(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",_t),l.removeEventListener("inputsourceschange",ht);for(let Q=0;Q<L.length;Q++){const pt=w[Q];pt!==null&&(w[Q]=null,L[Q].disconnect(pt))}G=null,lt=null,C.reset(),e.setRenderTarget(_),M=null,x=null,v=null,l=null,B=null,St.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",_t),l.addEventListener("inputsourceschange",ht),y.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Rt=null,wt=null;y.depth&&(wt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=y.stencil?Lo:No,Rt=y.stencil?Uo:Sr);const oe={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(oe),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),B=new yr(x.textureWidth,x.textureHeight,{format:mi,type:ia,depthTexture:new P0(x.textureWidth,x.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const yt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new yr(M.framebufferWidth,M.framebufferHeight,{format:mi,type:ia,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),St.setContext(l),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ht(Q){for(let pt=0;pt<Q.removed.length;pt++){const yt=Q.removed[pt],Rt=w.indexOf(yt);Rt>=0&&(w[Rt]=null,L[Rt].disconnect(yt))}for(let pt=0;pt<Q.added.length;pt++){const yt=Q.added[pt];let Rt=w.indexOf(yt);if(Rt===-1){for(let oe=0;oe<L.length;oe++)if(oe>=w.length){w.push(yt),Rt=oe;break}else if(w[oe]===null){w[oe]=yt,Rt=oe;break}if(Rt===-1)break}const wt=L[Rt];wt&&wt.connect(yt)}}const P=new rt,Z=new rt;function q(Q,pt,yt){P.setFromMatrixPosition(pt.matrixWorld),Z.setFromMatrixPosition(yt.matrixWorld);const Rt=P.distanceTo(Z),wt=pt.projectionMatrix.elements,oe=yt.projectionMatrix.elements,Qt=wt[14]/(wt[10]-1),Ue=wt[14]/(wt[10]+1),ze=(wt[9]+1)/wt[5],me=(wt[9]-1)/wt[5],z=(wt[8]-1)/wt[0],xn=(oe[8]+1)/oe[0],ye=Qt*z,he=Qt*xn,Vt=Rt/(-z+xn),ge=Vt*-z;if(pt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ge),Q.translateZ(Vt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),wt[10]===-1)Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const jt=Qt+Vt,ae=Ue+Vt,Ke=ye-ge,N=he+(Rt-ge),E=ze*Ue/ae*jt,tt=me*Ue/ae*jt;Q.projectionMatrix.makePerspective(Ke,N,E,tt,jt,ae),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Mt(Q,pt){pt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let pt=Q.near,yt=Q.far;C.texture!==null&&(C.depthNear>0&&(pt=C.depthNear),C.depthFar>0&&(yt=C.depthFar)),R.near=j.near=I.near=pt,R.far=j.far=I.far=yt,(G!==R.near||lt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),G=R.near,lt=R.far),I.layers.mask=Q.layers.mask|2,j.layers.mask=Q.layers.mask|4,R.layers.mask=I.layers.mask|j.layers.mask;const Rt=Q.parent,wt=R.cameras;Mt(R,Rt);for(let oe=0;oe<wt.length;oe++)Mt(wt[oe],Rt);wt.length===2?q(R,I,j):R.projectionMatrix.copy(I.projectionMatrix),U(Q,R,Rt)};function U(Q,pt,yt){yt===null?Q.matrix.copy(pt.matrixWorld):(Q.matrix.copy(yt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ad*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(Q){p=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let $=null;function vt(Q,pt){if(g=pt.getViewerPose(m||h),b=pt,g!==null){const yt=g.views;M!==null&&(e.setRenderTargetFramebuffer(B,M.framebuffer),e.setRenderTarget(B));let Rt=!1;yt.length!==R.cameras.length&&(R.cameras.length=0,Rt=!0);for(let Qt=0;Qt<yt.length;Qt++){const Ue=yt[Qt];let ze=null;if(M!==null)ze=M.getViewport(Ue);else{const z=v.getViewSubImage(x,Ue);ze=z.viewport,Qt===0&&(e.setRenderTargetTextures(B,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(B))}let me=D[Qt];me===void 0&&(me=new oi,me.layers.enable(Qt),me.viewport=new $e,D[Qt]=me),me.matrix.fromArray(Ue.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(Ue.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(ze.x,ze.y,ze.width,ze.height),Qt===0&&(R.matrix.copy(me.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Rt===!0&&R.cameras.push(me)}const wt=l.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Qt=v.getDepthInformation(yt[0]);Qt&&Qt.isValid&&Qt.texture&&C.init(e,Qt,l.renderState)}}for(let yt=0;yt<L.length;yt++){const Rt=w[yt],wt=L[yt];Rt!==null&&wt!==void 0&&wt.update(Rt,pt,m||h)}$&&$(Q,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),b=null}const St=new B0;St.setAnimationLoop(vt),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const hr=new aa,NA=new rn;function LA(s,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,U0(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,B,L,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,w)):_.isMeshMatcapMaterial?(u(y,_),b(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),C(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?p(y,_,B,L):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Fn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Fn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const B=e.get(_),L=B.envMap,w=B.envMapRotation;L&&(y.envMap.value=L,hr.copy(w),hr.x*=-1,hr.y*=-1,hr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),y.envMapRotation.value.setFromMatrix4(NA.makeRotationFromEuler(hr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,B,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*B,y.scale.value=L*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,B){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function C(y,_){const B=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function OA(s,e,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(B,L){const w=L.program;r.uniformBlockBinding(B,w)}function m(B,L){let w=l[B.id];w===void 0&&(b(B),w=g(B),l[B.id]=w,B.addEventListener("dispose",y));const k=L.program;r.updateUBOMapping(B,k);const H=e.render.frame;u[B.id]!==H&&(x(B),u[B.id]=H)}function g(B){const L=v();B.__bindingPointIndex=L;const w=s.createBuffer(),k=B.__size,H=B.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,k,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,w),w}function v(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(B){const L=l[B.id],w=B.uniforms,k=B.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let H=0,I=w.length;H<I;H++){const j=Array.isArray(w[H])?w[H]:[w[H]];for(let D=0,R=j.length;D<R;D++){const G=j[D];if(M(G,H,D,k)===!0){const lt=G.__offset,st=Array.isArray(G.value)?G.value:[G.value];let _t=0;for(let ht=0;ht<st.length;ht++){const P=st[ht],Z=C(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,lt+_t,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,_t),_t+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,lt,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(B,L,w,k){const H=B.value,I=L+"_"+w;if(k[I]===void 0)return typeof H=="number"||typeof H=="boolean"?k[I]=H:k[I]=H.clone(),!0;{const j=k[I];if(typeof H=="number"||typeof H=="boolean"){if(j!==H)return k[I]=H,!0}else if(j.equals(H)===!1)return j.copy(H),!0}return!1}function b(B){const L=B.uniforms;let w=0;const k=16;for(let I=0,j=L.length;I<j;I++){const D=Array.isArray(L[I])?L[I]:[L[I]];for(let R=0,G=D.length;R<G;R++){const lt=D[R],st=Array.isArray(lt.value)?lt.value:[lt.value];for(let _t=0,ht=st.length;_t<ht;_t++){const P=st[_t],Z=C(P),q=w%k,Mt=q%Z.boundary,U=q+Mt;w+=Mt,U!==0&&k-U<Z.storage&&(w+=k-U),lt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=w,w+=Z.storage}}}const H=w%k;return H>0&&(w+=k-H),B.__size=w,B.__cache={},this}function C(B){const L={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(L.boundary=4,L.storage=4):B.isVector2?(L.boundary=8,L.storage=8):B.isVector3||B.isColor?(L.boundary=16,L.storage=12):B.isVector4?(L.boundary=16,L.storage=16):B.isMatrix3?(L.boundary=48,L.storage=48):B.isMatrix4?(L.boundary=64,L.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),L}function y(B){const L=B.target;L.removeEventListener("dispose",y);const w=h.indexOf(L.__bindingPointIndex);h.splice(w,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function _(){for(const B in l)s.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:p,update:m,dispose:_}}class PA{constructor(e={}){const{canvas:i=_y(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),C=new Int32Array(4);let y=null,_=null;const B=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let k=!1;this._outputColorSpace=si;let H=0,I=0,j=null,D=-1,R=null;const G=new $e,lt=new $e;let st=null;const _t=new Be(0);let ht=0,P=i.width,Z=i.height,q=1,Mt=null,U=null;const $=new $e(0,0,P,Z),vt=new $e(0,0,P,Z);let St=!1;const Q=new O0;let pt=!1,yt=!1;const Rt=new rn,wt=new rn,oe=new rt,Qt=new $e,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function me(){return j===null?q:1}let z=r;function xn(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ld}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",At,!1),i.addEventListener("webglcontextcreationerror",gt,!1),z===null){const W="webgl2";if(z=xn(W,A),z===null)throw xn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ye,he,Vt,ge,jt,ae,Ke,N,E,tt,ut,dt,ot,Pt,Ut,Gt,kt,xt,Bt,qt,Yt,Ct,ie,V;function Nt(){ye=new WT(z),ye.init(),Ct=new RA(z,ye),he=new IT(z,ye,e,Ct),Vt=new bA(z,ye),he.reverseDepthBuffer&&x&&Vt.buffers.depth.setReversed(!0),ge=new jT(z),jt=new hA,ae=new AA(z,ye,Vt,jt,he,Ct,ge),Ke=new HT(w),N=new XT(w),E=new tM(z),ie=new BT(z,E),tt=new qT(z,E,ge,ie),ut=new KT(z,tt,E,ge),Bt=new ZT(z,he,ae),Gt=new FT(jt),dt=new fA(w,Ke,N,ye,he,ie,Gt),ot=new LA(w,jt),Pt=new pA,Ut=new SA(ye),xt=new PT(w,Ke,N,Vt,ut,M,p),kt=new EA(w,ut,he),V=new OA(z,ge,he,Vt),qt=new zT(z,ye,ge),Yt=new YT(z,ye,ge),ge.programs=dt.programs,w.capabilities=he,w.extensions=ye,w.properties=jt,w.renderLists=Pt,w.shadowMap=kt,w.state=Vt,w.info=ge}Nt();const Et=new UA(w,z);this.xr=Et,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(P,Z,!1))},this.getSize=function(A){return A.set(P,Z)},this.setSize=function(A,W,it=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,Z=W,i.width=Math.floor(A*q),i.height=Math.floor(W*q),it===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(P*q,Z*q).floor()},this.setDrawingBufferSize=function(A,W,it){P=A,Z=W,q=it,i.width=Math.floor(A*it),i.height=Math.floor(W*it),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,W,it,at){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,W,it,at),Vt.viewport(G.copy($).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,W,it,at){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,W,it,at),Vt.scissor(lt.copy(vt).multiplyScalar(q).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Vt.setScissorTest(St=A)},this.setOpaqueSort=function(A){Mt=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,it=!0){let at=0;if(A){let Y=!1;if(j!==null){const Tt=j.texture.format;Y=Tt===pd||Tt===dd||Tt===hd}if(Y){const Tt=j.texture.type,Dt=Tt===ia||Tt===Sr||Tt===Do||Tt===Uo||Tt===ud||Tt===fd,Ot=xt.getClearColor(),It=xt.getClearAlpha(),$t=Ot.r,Zt=Ot.g,Xt=Ot.b;Dt?(b[0]=$t,b[1]=Zt,b[2]=Xt,b[3]=It,z.clearBufferuiv(z.COLOR,0,b)):(C[0]=$t,C[1]=Zt,C[2]=Xt,C[3]=It,z.clearBufferiv(z.COLOR,0,C))}else at|=z.COLOR_BUFFER_BIT}W&&(at|=z.DEPTH_BUFFER_BIT),it&&(at|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",gt,!1),xt.dispose(),Pt.dispose(),Ut.dispose(),jt.dispose(),Ke.dispose(),N.dispose(),ut.dispose(),ie.dispose(),V.dispose(),dt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",sn),Et.removeEventListener("sessionend",Sn),Ln.stop()};function zt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const A=ge.autoReset,W=kt.enabled,it=kt.autoUpdate,at=kt.needsUpdate,Y=kt.type;Nt(),ge.autoReset=A,kt.enabled=W,kt.autoUpdate=it,kt.needsUpdate=at,kt.type=Y}function gt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ft(A){const W=A.target;W.removeEventListener("dispose",Ft),ne(W)}function ne(A){Ce(A),jt.remove(A)}function Ce(A){const W=jt.get(A).programs;W!==void 0&&(W.forEach(function(it){dt.releaseProgram(it)}),A.isShaderMaterial&&dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,it,at,Y,Tt){W===null&&(W=Ue);const Dt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ot=Xa(A,W,it,at,Y);Vt.setMaterial(at,Dt);let It=it.index,$t=1;if(at.wireframe===!0){if(It=tt.getWireframeAttribute(it),It===void 0)return;$t=2}const Zt=it.drawRange,Xt=it.attributes.position;let ce=Zt.start*$t,Ae=(Zt.start+Zt.count)*$t;Tt!==null&&(ce=Math.max(ce,Tt.start*$t),Ae=Math.min(Ae,(Tt.start+Tt.count)*$t)),It!==null?(ce=Math.max(ce,0),Ae=Math.min(Ae,It.count)):Xt!=null&&(ce=Math.max(ce,0),Ae=Math.min(Ae,Xt.count));const Ge=Ae-ce;if(Ge<0||Ge===1/0)return;ie.setup(Y,at,Ot,it,It);let _e,ve=qt;if(It!==null&&(_e=E.get(It),ve=Yt,ve.setIndex(_e)),Y.isMesh)at.wireframe===!0?(Vt.setLineWidth(at.wireframeLinewidth*me()),ve.setMode(z.LINES)):ve.setMode(z.TRIANGLES);else if(Y.isLine){let Kt=at.linewidth;Kt===void 0&&(Kt=1),Vt.setLineWidth(Kt*me()),Y.isLineSegments?ve.setMode(z.LINES):Y.isLineLoop?ve.setMode(z.LINE_LOOP):ve.setMode(z.LINE_STRIP)}else Y.isPoints?ve.setMode(z.POINTS):Y.isSprite&&ve.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)_s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))ve.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Kt=Y._multiDrawStarts,Ye=Y._multiDrawCounts,Me=Y._multiDrawCount,bn=It?E.get(It).bytesPerElement:1,la=jt.get(at).currentProgram.getUniforms();for(let Ve=0;Ve<Me;Ve++)la.setValue(z,"_gl_DrawID",Ve),ve.render(Kt[Ve]/bn,Ye[Ve])}else if(Y.isInstancedMesh)ve.renderInstances(ce,Ge,Y.count);else if(it.isInstancedBufferGeometry){const Kt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Ye=Math.min(it.instanceCount,Kt);ve.renderInstances(ce,Ge,Ye)}else ve.render(ce,Ge)};function Ee(A,W,it){A.transparent===!0&&A.side===$i&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,sa(A,W,it),A.side=Ha,A.needsUpdate=!0,sa(A,W,it),A.side=$i):sa(A,W,it)}this.compile=function(A,W,it=null){it===null&&(it=A),_=Ut.get(it),_.init(W),L.push(_),it.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),A!==it&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const at=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Tt=Y.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const Ot=Tt[Dt];Ee(Ot,it,Y),at.add(Ot)}else Ee(Tt,it,Y),at.add(Tt)}),_=L.pop(),at},this.compileAsync=function(A,W,it=null){const at=this.compile(A,W,it);return new Promise(Y=>{function Tt(){if(at.forEach(function(Dt){jt.get(Dt).currentProgram.isReady()&&at.delete(Dt)}),at.size===0){Y(A);return}setTimeout(Tt,10)}ye.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Gn=null;function hn(A){Gn&&Gn(A)}function sn(){Ln.stop()}function Sn(){Ln.start()}const Ln=new B0;Ln.setAnimationLoop(hn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(A){Gn=A,Et.setAnimationLoop(A),A===null?Ln.stop():Ln.start()},Et.addEventListener("sessionstart",sn),Et.addEventListener("sessionend",Sn),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(W),W=Et.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,W,j),_=Ut.get(A,L.length),_.init(W),L.push(_),wt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(wt),yt=this.localClippingEnabled,pt=Gt.init(this.clippingPlanes,yt),y=Pt.get(A,B.length),y.init(),B.push(y),Et.enabled===!0&&Et.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&Va(Tt,W,-1/0,w.sortObjects)}Va(A,W,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(Mt,U),ze=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,ze&&xt.addToRenderList(y,A),this.info.render.frame++,pt===!0&&Gt.beginShadows();const it=_.state.shadowsArray;kt.render(it,A,W),pt===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=y.opaque,Y=y.transmissive;if(_.setupLights(),W.isArrayCamera){const Tt=W.cameras;if(Y.length>0)for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++){const It=Tt[Dt];Fo(at,Y,A,It)}ze&&xt.render(A);for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++){const It=Tt[Dt];Io(y,A,It,It.viewport)}}else Y.length>0&&Fo(at,Y,A,W),ze&&xt.render(A),Io(y,A,W);j!==null&&I===0&&(ae.updateMultisampleRenderTarget(j),ae.updateRenderTargetMipmap(j)),A.isScene===!0&&A.onAfterRender(w,A,W),ie.resetDefaultState(),D=-1,R=null,L.pop(),L.length>0?(_=L[L.length-1],pt===!0&&Gt.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?y=B[B.length-1]:y=null};function Va(A,W,it,at){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)it=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){at&&Qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(wt);const Dt=ut.update(A),Ot=A.material;Ot.visible&&y.push(A,Dt,Ot,it,Qt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const Dt=ut.update(A),Ot=A.material;if(at&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qt.copy(A.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Qt.copy(Dt.boundingSphere.center)),Qt.applyMatrix4(A.matrixWorld).applyMatrix4(wt)),Array.isArray(Ot)){const It=Dt.groups;for(let $t=0,Zt=It.length;$t<Zt;$t++){const Xt=It[$t],ce=Ot[Xt.materialIndex];ce&&ce.visible&&y.push(A,Dt,ce,it,Qt.z,Xt)}}else Ot.visible&&y.push(A,Dt,Ot,it,Qt.z,null)}}const Tt=A.children;for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++)Va(Tt[Dt],W,it,at)}function Io(A,W,it,at){const Y=A.opaque,Tt=A.transmissive,Dt=A.transparent;_.setupLightsView(it),pt===!0&&Gt.setGlobalState(w.clippingPlanes,it),at&&Vt.viewport(G.copy(at)),Y.length>0&&ka(Y,W,it),Tt.length>0&&ka(Tt,W,it),Dt.length>0&&ka(Dt,W,it),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Fo(A,W,it,at){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[at.id]===void 0&&(_.state.transmissionRenderTarget[at.id]=new yr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Oo:ia,minFilter:vr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[at.id],Dt=at.viewport||G;Tt.setSize(Dt.z*w.transmissionResolutionScale,Dt.w*w.transmissionResolutionScale);const Ot=w.getRenderTarget();w.setRenderTarget(Tt),w.getClearColor(_t),ht=w.getClearAlpha(),ht<1&&w.setClearColor(16777215,.5),w.clear(),ze&&xt.render(it);const It=w.toneMapping;w.toneMapping=Fa;const $t=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),_.setupLightsView(at),pt===!0&&Gt.setGlobalState(w.clippingPlanes,at),ka(A,it,at),ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Xt=0,ce=W.length;Xt<ce;Xt++){const Ae=W[Xt],Ge=Ae.object,_e=Ae.geometry,ve=Ae.material,Kt=Ae.group;if(ve.side===$i&&Ge.layers.test(at.layers)){const Ye=ve.side;ve.side=Fn,ve.needsUpdate=!0,ra(Ge,it,at,_e,ve,Kt),ve.side=Ye,ve.needsUpdate=!0,Zt=!0}}Zt===!0&&(ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt))}w.setRenderTarget(Ot),w.setClearColor(_t,ht),$t!==void 0&&(at.viewport=$t),w.toneMapping=It}function ka(A,W,it){const at=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Tt=A.length;Y<Tt;Y++){const Dt=A[Y],Ot=Dt.object,It=Dt.geometry,$t=Dt.group;let Zt=Dt.material;Zt.allowOverride===!0&&at!==null&&(Zt=at),Ot.layers.test(it.layers)&&ra(Ot,W,it,It,Zt,$t)}}function ra(A,W,it,at,Y,Tt){A.onBeforeRender(w,W,it,at,Y,Tt),A.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(w,W,it,at,A,Tt),Y.transparent===!0&&Y.side===$i&&Y.forceSinglePass===!1?(Y.side=Fn,Y.needsUpdate=!0,w.renderBufferDirect(it,W,at,Y,A,Tt),Y.side=Ha,Y.needsUpdate=!0,w.renderBufferDirect(it,W,at,Y,A,Tt),Y.side=$i):w.renderBufferDirect(it,W,at,Y,A,Tt),A.onAfterRender(w,W,it,at,Y,Tt)}function sa(A,W,it){W.isScene!==!0&&(W=Ue);const at=jt.get(A),Y=_.state.lights,Tt=_.state.shadowsArray,Dt=Y.state.version,Ot=dt.getParameters(A,Y.state,Tt,W,it),It=dt.getProgramCacheKey(Ot);let $t=at.programs;at.environment=A.isMeshStandardMaterial?W.environment:null,at.fog=W.fog,at.envMap=(A.isMeshStandardMaterial?N:Ke).get(A.envMap||at.environment),at.envMapRotation=at.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",Ft),$t=new Map,at.programs=$t);let Zt=$t.get(It);if(Zt!==void 0){if(at.currentProgram===Zt&&at.lightsStateVersion===Dt)return wi(A,Ot),Zt}else Ot.uniforms=dt.getUniforms(A),A.onBeforeCompile(Ot,w),Zt=dt.acquireProgram(Ot,It),$t.set(It,Zt),at.uniforms=Ot.uniforms;const Xt=at.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xt.clippingPlanes=Gt.uniform),wi(A,Ot),at.needsLights=tn(A),at.lightsStateVersion=Dt,at.needsLights&&(Xt.ambientLightColor.value=Y.state.ambient,Xt.lightProbe.value=Y.state.probe,Xt.directionalLights.value=Y.state.directional,Xt.directionalLightShadows.value=Y.state.directionalShadow,Xt.spotLights.value=Y.state.spot,Xt.spotLightShadows.value=Y.state.spotShadow,Xt.rectAreaLights.value=Y.state.rectArea,Xt.ltc_1.value=Y.state.rectAreaLTC1,Xt.ltc_2.value=Y.state.rectAreaLTC2,Xt.pointLights.value=Y.state.point,Xt.pointLightShadows.value=Y.state.pointShadow,Xt.hemisphereLights.value=Y.state.hemi,Xt.directionalShadowMap.value=Y.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xt.spotShadowMap.value=Y.state.spotShadowMap,Xt.spotLightMatrix.value=Y.state.spotLightMatrix,Xt.spotLightMap.value=Y.state.spotLightMap,Xt.pointShadowMap.value=Y.state.pointShadowMap,Xt.pointShadowMatrix.value=Y.state.pointShadowMatrix),at.currentProgram=Zt,at.uniformsList=null,Zt}function Ci(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=yc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function wi(A,W){const it=jt.get(A);it.outputColorSpace=W.outputColorSpace,it.batching=W.batching,it.batchingColor=W.batchingColor,it.instancing=W.instancing,it.instancingColor=W.instancingColor,it.instancingMorph=W.instancingMorph,it.skinning=W.skinning,it.morphTargets=W.morphTargets,it.morphNormals=W.morphNormals,it.morphColors=W.morphColors,it.morphTargetsCount=W.morphTargetsCount,it.numClippingPlanes=W.numClippingPlanes,it.numIntersection=W.numClipIntersection,it.vertexAlphas=W.vertexAlphas,it.vertexTangents=W.vertexTangents,it.toneMapping=W.toneMapping}function Xa(A,W,it,at,Y){W.isScene!==!0&&(W=Ue),ae.resetTextureUnits();const Tt=W.fog,Dt=at.isMeshStandardMaterial?W.environment:null,Ot=j===null?w.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ms,It=(at.isMeshStandardMaterial?N:Ke).get(at.envMap||Dt),$t=at.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Zt=!!it.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Xt=!!it.morphAttributes.position,ce=!!it.morphAttributes.normal,Ae=!!it.morphAttributes.color;let Ge=Fa;at.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ge=w.toneMapping);const _e=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ve=_e!==void 0?_e.length:0,Kt=jt.get(at),Ye=_.state.lights;if(pt===!0&&(yt===!0||A!==R)){const dn=A===R&&at.id===D;Gt.setState(at,A,dn)}let Me=!1;at.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ye.state.version||Kt.outputColorSpace!==Ot||Y.isBatchedMesh&&Kt.batching===!1||!Y.isBatchedMesh&&Kt.batching===!0||Y.isBatchedMesh&&Kt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Kt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Kt.instancing===!1||!Y.isInstancedMesh&&Kt.instancing===!0||Y.isSkinnedMesh&&Kt.skinning===!1||!Y.isSkinnedMesh&&Kt.skinning===!0||Y.isInstancedMesh&&Kt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Kt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Kt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Kt.instancingMorph===!1&&Y.morphTexture!==null||Kt.envMap!==It||at.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Gt.numPlanes||Kt.numIntersection!==Gt.numIntersection)||Kt.vertexAlphas!==$t||Kt.vertexTangents!==Zt||Kt.morphTargets!==Xt||Kt.morphNormals!==ce||Kt.morphColors!==Ae||Kt.toneMapping!==Ge||Kt.morphTargetsCount!==ve)&&(Me=!0):(Me=!0,Kt.__version=at.version);let bn=Kt.currentProgram;Me===!0&&(bn=sa(at,W,Y));let la=!1,Ve=!1,Ui=!1;const Ie=bn.getUniforms(),An=Kt.uniforms;if(Vt.useProgram(bn.program)&&(la=!0,Ve=!0,Ui=!0),at.id!==D&&(D=at.id,Ve=!0),la||R!==A){Vt.buffers.depth.getReversed()?(Rt.copy(A.projectionMatrix),xy(Rt),Sy(Rt),Ie.setValue(z,"projectionMatrix",Rt)):Ie.setValue(z,"projectionMatrix",A.projectionMatrix),Ie.setValue(z,"viewMatrix",A.matrixWorldInverse);const yn=Ie.map.cameraPosition;yn!==void 0&&yn.setValue(z,oe.setFromMatrixPosition(A.matrixWorld)),he.logarithmicDepthBuffer&&Ie.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Ie.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Ve=!0,Ui=!0)}if(Y.isSkinnedMesh){Ie.setOptional(z,Y,"bindMatrix"),Ie.setOptional(z,Y,"bindMatrixInverse");const dn=Y.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Ie.setValue(z,"boneTexture",dn.boneTexture,ae))}Y.isBatchedMesh&&(Ie.setOptional(z,Y,"batchingTexture"),Ie.setValue(z,"batchingTexture",Y._matricesTexture,ae),Ie.setOptional(z,Y,"batchingIdTexture"),Ie.setValue(z,"batchingIdTexture",Y._indirectTexture,ae),Ie.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ie.setValue(z,"batchingColorTexture",Y._colorsTexture,ae));const on=it.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Bt.update(Y,it,bn),(Ve||Kt.receiveShadow!==Y.receiveShadow)&&(Kt.receiveShadow=Y.receiveShadow,Ie.setValue(z,"receiveShadow",Y.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(An.envMap.value=It,An.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&W.environment!==null&&(An.envMapIntensity.value=W.environmentIntensity),Ve&&(Ie.setValue(z,"toneMappingExposure",w.toneMappingExposure),Kt.needsLights&&oa(An,Ui),Tt&&at.fog===!0&&ot.refreshFogUniforms(An,Tt),ot.refreshMaterialUniforms(An,at,q,Z,_.state.transmissionRenderTarget[A.id]),yc.upload(z,Ci(Kt),An,ae)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(yc.upload(z,Ci(Kt),An,ae),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Ie.setValue(z,"center",Y.center),Ie.setValue(z,"modelViewMatrix",Y.modelViewMatrix),Ie.setValue(z,"normalMatrix",Y.normalMatrix),Ie.setValue(z,"modelMatrix",Y.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const dn=at.uniformsGroups;for(let yn=0,_i=dn.length;yn<_i;yn++){const Ni=dn[yn];V.update(Ni,bn),V.bind(Ni,bn)}}return bn}function oa(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function tn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,W,it){const at=jt.get(A);at.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),jt.get(A.texture).__webglTexture=W,jt.get(A.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:it,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const it=jt.get(A);it.__webglFramebuffer=W,it.__useDefaultFramebuffer=W===void 0};const Ho=z.createFramebuffer();this.setRenderTarget=function(A,W=0,it=0){j=A,H=W,I=it;let at=!0,Y=null,Tt=!1,Dt=!1;if(A){const It=jt.get(A);if(It.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(z.FRAMEBUFFER,null),at=!1;else if(It.__webglFramebuffer===void 0)ae.setupRenderTarget(A);else if(It.__hasExternalTextures)ae.rebindTextures(A,jt.get(A.texture).__webglTexture,jt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xt=A.depthTexture;if(It.__boundDepthTexture!==Xt){if(Xt!==null&&jt.has(Xt)&&(A.width!==Xt.image.width||A.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Dt=!0);const Zt=jt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Zt[W])?Y=Zt[W][it]:Y=Zt[W],Tt=!0):A.samples>0&&ae.useMultisampledRTT(A)===!1?Y=jt.get(A).__webglMultisampledFramebuffer:Array.isArray(Zt)?Y=Zt[it]:Y=Zt,G.copy(A.viewport),lt.copy(A.scissor),st=A.scissorTest}else G.copy($).multiplyScalar(q).floor(),lt.copy(vt).multiplyScalar(q).floor(),st=St;if(it!==0&&(Y=Ho),Vt.bindFramebuffer(z.FRAMEBUFFER,Y)&&at&&Vt.drawBuffers(A,Y),Vt.viewport(G),Vt.scissor(lt),Vt.setScissorTest(st),Tt){const It=jt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,It.__webglTexture,it)}else if(Dt){const It=jt.get(A.texture),$t=W;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,It.__webglTexture,it,$t)}else if(A!==null&&it!==0){const It=jt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,It.__webglTexture,it)}D=-1},this.readRenderTargetPixels=function(A,W,it,at,Y,Tt,Dt,Ot=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=jt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It){Vt.bindFramebuffer(z.FRAMEBUFFER,It);try{const $t=A.textures[Ot],Zt=$t.format,Xt=$t.type;if(!he.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-at&&it>=0&&it<=A.height-Y&&(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ot),z.readPixels(W,it,at,Y,Ct.convert(Zt),Ct.convert(Xt),Tt))}finally{const $t=j!==null?jt.get(j).__webglFramebuffer:null;Vt.bindFramebuffer(z.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(A,W,it,at,Y,Tt,Dt,Ot=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=jt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It)if(W>=0&&W<=A.width-at&&it>=0&&it<=A.height-Y){Vt.bindFramebuffer(z.FRAMEBUFFER,It);const $t=A.textures[Ot],Zt=$t.format,Xt=$t.type;if(!he.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ce),z.bufferData(z.PIXEL_PACK_BUFFER,Tt.byteLength,z.STREAM_READ),A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ot),z.readPixels(W,it,at,Y,Ct.convert(Zt),Ct.convert(Xt),0);const Ae=j!==null?jt.get(j).__webglFramebuffer:null;Vt.bindFramebuffer(z.FRAMEBUFFER,Ae);const Ge=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await vy(z,Ge,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ce),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Tt),z.deleteBuffer(ce),z.deleteSync(Ge),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,it=0){const at=Math.pow(2,-it),Y=Math.floor(A.image.width*at),Tt=Math.floor(A.image.height*at),Dt=W!==null?W.x:0,Ot=W!==null?W.y:0;ae.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,it,0,0,Dt,Ot,Y,Tt),Vt.unbindTexture()};const Go=z.createFramebuffer(),Di=z.createFramebuffer();this.copyTextureToTexture=function(A,W,it=null,at=null,Y=0,Tt=null){Tt===null&&(Y!==0?(_s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Y,Y=0):Tt=0);let Dt,Ot,It,$t,Zt,Xt,ce,Ae,Ge;const _e=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(it!==null)Dt=it.max.x-it.min.x,Ot=it.max.y-it.min.y,It=it.isBox3?it.max.z-it.min.z:1,$t=it.min.x,Zt=it.min.y,Xt=it.isBox3?it.min.z:0;else{const on=Math.pow(2,-Y);Dt=Math.floor(_e.width*on),Ot=Math.floor(_e.height*on),A.isDataArrayTexture?It=_e.depth:A.isData3DTexture?It=Math.floor(_e.depth*on):It=1,$t=0,Zt=0,Xt=0}at!==null?(ce=at.x,Ae=at.y,Ge=at.z):(ce=0,Ae=0,Ge=0);const ve=Ct.convert(W.format),Kt=Ct.convert(W.type);let Ye;W.isData3DTexture?(ae.setTexture3D(W,0),Ye=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ae.setTexture2DArray(W,0),Ye=z.TEXTURE_2D_ARRAY):(ae.setTexture2D(W,0),Ye=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const Me=z.getParameter(z.UNPACK_ROW_LENGTH),bn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),la=z.getParameter(z.UNPACK_SKIP_PIXELS),Ve=z.getParameter(z.UNPACK_SKIP_ROWS),Ui=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,_e.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_e.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$t),z.pixelStorei(z.UNPACK_SKIP_ROWS,Zt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xt);const Ie=A.isDataArrayTexture||A.isData3DTexture,An=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const on=jt.get(A),dn=jt.get(W),yn=jt.get(on.__renderTarget),_i=jt.get(dn.__renderTarget);Vt.bindFramebuffer(z.READ_FRAMEBUFFER,yn.__webglFramebuffer),Vt.bindFramebuffer(z.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Ni=0;Ni<It;Ni++)Ie&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,jt.get(A).__webglTexture,Y,Xt+Ni),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,jt.get(W).__webglTexture,Tt,Ge+Ni)),z.blitFramebuffer($t,Zt,Dt,Ot,ce,Ae,Dt,Ot,z.DEPTH_BUFFER_BIT,z.NEAREST);Vt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||jt.has(A)){const on=jt.get(A),dn=jt.get(W);Vt.bindFramebuffer(z.READ_FRAMEBUFFER,Go),Vt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Di);for(let yn=0;yn<It;yn++)Ie?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,on.__webglTexture,Y,Xt+yn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,on.__webglTexture,Y),An?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,dn.__webglTexture,Tt,Ge+yn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,dn.__webglTexture,Tt),Y!==0?z.blitFramebuffer($t,Zt,Dt,Ot,ce,Ae,Dt,Ot,z.COLOR_BUFFER_BIT,z.NEAREST):An?z.copyTexSubImage3D(Ye,Tt,ce,Ae,Ge+yn,$t,Zt,Dt,Ot):z.copyTexSubImage2D(Ye,Tt,ce,Ae,$t,Zt,Dt,Ot);Vt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else An?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Ye,Tt,ce,Ae,Ge,Dt,Ot,It,ve,Kt,_e.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(Ye,Tt,ce,Ae,Ge,Dt,Ot,It,ve,_e.data):z.texSubImage3D(Ye,Tt,ce,Ae,Ge,Dt,Ot,It,ve,Kt,_e):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Tt,ce,Ae,Dt,Ot,ve,Kt,_e.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Tt,ce,Ae,_e.width,_e.height,ve,_e.data):z.texSubImage2D(z.TEXTURE_2D,Tt,ce,Ae,Dt,Ot,ve,Kt,_e);z.pixelStorei(z.UNPACK_ROW_LENGTH,Me),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,bn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,la),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ve),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ui),Tt===0&&W.generateMipmaps&&z.generateMipmap(Ye),Vt.unbindTexture()},this.copyTextureToTexture3D=function(A,W,it=null,at=null,Y=0){return _s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,it,at,Y)},this.initRenderTarget=function(A){jt.get(A).__webglFramebuffer===void 0&&ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),Vt.unbindTexture()},this.resetState=function(){H=0,I=0,j=null,Vt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(e),i.unpackColorSpace=be._getUnpackColorSpace()}}function BA({imageSrc:s,title:e,description:i,link:r,delay:l}){return bt.jsxs("div",{className:"bg-gray-900 p-8 rounded-2xl shadow-xl border-l-4 border-blue-500 flex flex-col animate-fade-in-up-stagger card-3d-hover group",style:{animationDelay:l},children:[bt.jsx("div",{className:"mb-4 overflow-hidden rounded-lg",children:bt.jsx("img",{src:s,alt:e,className:"w-full h-40 object-cover rounded-lg project-image-animate",onError:u=>{u.target.onerror=null,u.target.src="https://placehold.co/400x220/374151/FFFFFF?text=Image+Error"}})}),bt.jsx("h3",{className:"text-2xl font-bold text-lime-400 mb-4",children:e}),bt.jsx("p",{className:"text-gray-300 mb-6 flex-grow",children:i}),bt.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"inline-block justify-center bg-gradient-to-r from-lime-500 to-green-600 text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg hover:scale-105 transition duration-300 text-base self-center flex items-center space-x-2",children:[bt.jsx("span",{children:"Visit Website"})," ➡️"]})]})}/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),IA=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),s0=s=>{const e=IA(s);return e.charAt(0).toUpperCase()+e.slice(1)},G0=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),FA=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var HA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=qe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:h,...d},p)=>qe.createElement("svg",{ref:p,...HA,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:G0("lucide",l),...!u&&!FA(d)&&{"aria-hidden":"true"},...d},[...h.map(([m,g])=>qe.createElement(m,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=(s,e)=>{const i=qe.forwardRef(({className:r,...l},u)=>qe.createElement(GA,{ref:u,iconNode:e,className:G0(`lucide-${zA(s0(s))}`,`lucide-${s}`,r),...l}));return i.displayName=s0(s),i};/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],kA=Er("award",VA);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],o0=Er("briefcase",XA);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],l0=Er("code",WA);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],c0=Er("globe",qA);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],u0=Er("house",YA);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],f0=Er("message-square",jA);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],h0=Er("monitor",ZA),vn={name:"Rajesh Kumar Pathak",shortName:"Rajesh Kumar",summary:"I'm a Full Stack developer with nearly 3 years of experience specializing in developing responsive and visually appealing web applications using ReactJS ⚛️, Redux, JavaScript, and related technologies.",phone:"+91 7870012723",email:"rajeshkumar9852143626@gmail.com",linkedin:"www.linkedin.com/in/rajesh-kumar-pathak",github:"https://github.com/RajeshKumarPathak01",resumePdfUrl:"https://drive.google.com/file/d/1RLFM1JxQeLdRvjAaplHYL_cOoz_YE9Sk/view?usp=drive_link",technicalSkills:[{icon:"📜",title:"JavaScript"},{icon:"⚛️",title:"ReactJS"},{icon:"🧮",title:"Redux"},{icon:"🎨",title:"Tailwind CSS"},{icon:"☕",title:"Java"},{icon:"🍃",title:"Spring Boot"},{icon:"✉️",title:"Postman"},{icon:"📊",title:"MySQL"},{icon:"🟢",title:"NodeJS"},{icon:"🐙",title:"Git / GitHub"},{icon:"🚀",title:"AWS"},{icon:" scrum",title:"Agile/Scrum"},{icon:"🛠️",title:"VSCode / Eclipse"},{icon:"📈",title:"Spring MVC"}],experienceHighlights:["Partnered with project managers to define and achieve coding milestones, accelerating pre-release software development.","Diagnosed and resolved intricate JavaScript and UI/CSS challenges, achieving a 50% reduction in page load time, significantly enhancing user experience.","Led Agile development through all phases of the SDLC, ensuring a 98% on-time delivery rate for production releases.","Optimized state management with React Hooks, reducing boilerplate code by 30% and improving component logic, enhancing maintainability by 25%.","Designed and implemented computations using SpringBoot and Firebase Cloud Messaging (FCM), increasing user engagement by 70% through targeted notifications."],projects:[{title:"Movie World – Movie Search App",description:"Movie World is a modern movie search app built using ReactJS that lets users explore films and view key details like release date, box office collection, ratings, genres, and cast. It features a clean, responsive UI, supports dark/light mode, and fetches real-time movie data through an external API.",imageSrc:rS,link:"https://rajeshkumarpathak01.github.io/project51"},{title:"🌤️ WeatherWise – A Real-Time Weather App",description:"WeatherWise is a responsive ReactJS app that provides real-time weather updates based on user search. It displays temperature, humidity, wind speed, and conditions using live weather APIs. Built with a clean UI, it supports fast performance and seamless UX across all devices.",imageSrc:oS,link:"https://rajeshkumarpathak01.github.io/weatherDetails"},{title:"💱 GlobeRate – Real-Time Currency Converter API",description:"GlobeRate is a real-time currency converter API that supports global currency conversion with up-to-date exchange rates. Designed for speed and accuracy, it allows users to convert between any world currency instantly. Built with a focus on performance, reliability, and scalability.",imageSrc:lS,link:"https://rajeshkumarpathak01.github.io/currencyConverter"},{title:"🎯 NumberGuess – Number Fun Game",description:"NumberGuess is a fun and interactive number guessing game built with pure JavaScript, HTML, and CSS. Users try to guess the randomly generated number with hints provided after each attempt. Clean UI, simple logic, and fully responsive – perfect for casual play and JavaScript practice.",imageSrc:cS,link:"https://rajeshkumarpathak01.github.io/GuessGame"}]};function Ei({sectionId:s,label:e,activeSection:i,onClick:r,icon:l}){const u=i===s;return bt.jsxs("a",{href:`#${s}`,onClick:h=>r(h,s),className:`
                text-gray-200 hover:text-lime-400 font-semibold text-base transition duration-300 px-2 py-1 rounded-md
                ${u?"text-lime-400 scale-105 border-b-2 border-lime-400":""}
                flex items-center space-x-1 sm:space-x-2 
                text-sm sm:text-base 
            `,children:[l&&bt.jsx(l,{className:"w-4 h-4 sm:w-5 sm:h-5"})," ",bt.jsx("span",{children:e})]})}function KA(){const[s,e]=qe.useState(!1),[i,r]=qe.useState("about"),l=qe.useRef(null),u=qe.useRef(null),h=qe.useRef(null),d=qe.useRef(null),p=qe.useRef(null);qe.useEffect(()=>{const y={root:null,rootMargin:"-40% 0px -40% 0px",threshold:0},_=w=>{w.forEach(k=>{k.isIntersecting&&r(k.target.id)})},B=new IntersectionObserver(_,y),L=[l,u,h,d,p];return L.forEach(w=>{w.current&&B.observe(w.current)}),()=>{L.forEach(w=>{w.current&&B.unobserve(w.current)})}},[]);const m=()=>{e(!s)},g=(y,_)=>{var B;y.preventDefault(),r(_),e(!1),(B=document.getElementById(_))==null||B.scrollIntoView({behavior:"smooth"})},[v,x]=qe.useState(""),[M,b]=qe.useState(!1),C=qe.useCallback(async y=>{b(!0),x("");try{const H=await(await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBrUefCbo4tfcdM91pxaWuY0SJHDYcyCGA",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:y}]}]})})).json();H.candidates&&H.candidates.length>0&&H.candidates[0].content&&H.candidates[0].content.parts&&H.candidates[0].content.parts.length>0?x(H.candidates[0].content.parts[0].text):(console.error("LLM response structure unexpected:",H),x("Failed to load dynamic content. Please try again."))}catch(_){console.error("Error fetching dynamic content:",_),x("Error fetching content.")}finally{b(!1)}},[]);return qe.useEffect(()=>{C("Elaborate on Rajesh Kumar Pathak's professional summary focusing on his drive for clean code, performance, and user experience, in an inspiring tone for a portfolio's 'About Me' section. Keep it concise, around 3-4 sentences.")},[C]),bt.jsxs("div",{style:{backgroundColor:"rgb(16, 24, 40)"},id:"3dObject",className:"min-h-screen font-sans text-gray-100 flex flex-col relative overflow-hidden",children:[bt.jsxs("nav",{className:"fixed top-0 left-0 w-full backdrop-blur-md bg-gray-900/60 shadow-2xl hover:shadow-lg p-4 z-50 rounded-b-xl border-b border-gray-700  animate-fade-in-down animate-fade-in-up-stagger card-3d-hover group",children:[bt.jsxs("div",{className:"container mx-auto flex justify-between items-center flex-wrap",children:[bt.jsxs("div",{className:"text-3xl font-bold text-lime-400 flex-shrink-0 ",children:[" ",vn.shortName," 🚀"]}),bt.jsxs("div",{className:"hidden md:flex flex-grow justify-end items-center space-x-2 lg:space-x-4 ",children:[" ",bt.jsx(Ei,{sectionId:"about",label:"About",icon:u0,activeSection:i,onClick:g}),bt.jsx(Ei,{sectionId:"skills",label:"Skills",icon:l0,activeSection:i,onClick:g}),bt.jsx(Ei,{sectionId:"experience",label:"Experience",icon:o0,activeSection:i,onClick:g}),bt.jsx(Ei,{sectionId:"projects",label:"Projects",icon:h0,activeSection:i,onClick:g}),bt.jsx(Ei,{sectionId:"contact",label:"Contact",icon:f0,activeSection:i,onClick:g}),bt.jsxs("a",{href:vn.resumePdfUrl,download:`${vn.name.replace(/\s/g,"_")}_Resume.pdf`,target:"_blank",rel:"noopener noreferrer",className:`
      bg-gradient-to-r from-purple-600 to-pink-700 text-white font-bold py-2 px-4 rounded-full 
      shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 
      text-sm sm:text-base flex items-center space-x-2 ml-4
    `,style:{whiteSpace:"nowrap"},children:[bt.jsx("span",{children:"Resume"})," ",bt.jsx(c0,{className:"w-4 h-4 sm:w-5 sm:h-5"})]})]}),bt.jsx("div",{className:"md:hidden",children:bt.jsx("button",{onClick:m,className:"text-gray-200 focus:outline-none",children:bt.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",children:s?bt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}):bt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})})]}),s&&bt.jsxs("div",{className:"md:hidden mt-4 flex flex-col space-y-4 items-center bg-gray-800 bg-opacity-90 p-4 rounded-lg animate-fade-in-down",children:[bt.jsx(Ei,{sectionId:"about",label:"About",icon:u0,activeSection:i,onClick:g}),bt.jsx(Ei,{sectionId:"skills",label:"Skills",icon:l0,activeSection:i,onClick:g}),bt.jsx(Ei,{sectionId:"experience",label:"Experience",icon:o0,activeSection:i,onClick:g}),bt.jsx(Ei,{sectionId:"projects",label:"Projects",icon:h0,activeSection:i,onClick:g}),bt.jsx(Ei,{sectionId:"contact",label:"Contact",icon:f0,activeSection:i,onClick:g}),bt.jsxs("a",{href:vn.resumePdfUrl,download:`${vn.name.replace(/\s/g,"_")}_Resume.pdf`,target:"_blank",rel:"noopener noreferrer",className:`
        bg-gradient-to-r from-purple-600 to-pink-700 text-white font-bold py-1 px-2 rounded-xl 
        shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 
        text-md flex items-center justify-center space-x-2
      `,children:[bt.jsx("span",{children:"Download Resume"})," ",bt.jsx(c0,{className:"w-5 h-5"})]})]})]}),bt.jsxs("section",{id:"about",ref:l,className:"text-white pt-32 pb-16 md:py-24 px-4 flex items-center  justify-center rounded-b-3xl shadow-2xl relative mb-8 scroll-mt-24 min-h-[70vh] md:min-h-[80vh]",children:[bt.jsx(QA,{}),bt.jsxs("div",{className:"container mx-auto text-center max-w-4xl relative z-10",children:[bt.jsx("img",{src:nS,alt:"Rajesh Kumar Pathak Professional Photo",className:"rounded-full w-40 h-40 md:w-52 md:h-52 mx-auto mb-10 border-4 border-lime-500 shadow-lg shadow-lime-500/50 animate-fade-in-up transition-all duration-300 hover:animate-pulse",onError:y=>{y.target.onerror=null,y.target.src="https://placehold.co/180x180/FFD700/000000?text=Error+Loading"}}),bt.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg animate-slide-in-left",children:["Hi, I'm"," ",bt.jsx("span",{className:"text-lime-300",children:vn.shortName}),"! 👋"]}),bt.jsxs("p",{className:"text-md md:text-xl lg:text-xl mb-8 border-0 bg-opacity-40 p- rounded-xl shadow-xl backdrop-filter backdrop-blur-sm animate-fade-in-right border border-blue-700",children:["⚡ ",vn.summary]}),bt.jsx("a",{href:"#contact",onClick:y=>g(y,"contact"),className:"bg-gradient-to-r from-lime-500 to-green-600 text-white font-extrabold py-4 px-10 sm:py-5 sm:px-14 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300 inline-block text-xl animate-bounce-once relative animate-glow-pulse-lime",children:"Connect with Me! ✉️"})]})]}),bt.jsx("section",{id:"skills",ref:u,className:"py-20 px-4 bg-gray-900 bg-opacity-80 rounded-3xl shadow-2xl mt-2 relative z-10 border border-gray-800 animate-fade-in-up-section scroll-mt-24",children:bt.jsxs("div",{className:"container mx-auto text-center",children:[bt.jsx("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-bold text-lime-400 mb-16 animate-fade-in",children:"My Expertise & Technologies ✨"}),bt.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 perspective-1000",children:vn.technicalSkills.map((y,_)=>bt.jsx(JA,{icon:y.icon,title:y.title,delay:`${_*.1}s`},_))})]})}),bt.jsx("section",{id:"experience",ref:h,className:"py-20 px-4 bg-gray-900 bg-opacity-80 rounded-3xl shadow-2xl mt-8 relative z-10 border border-gray-800 animate-fade-in-up-section scroll-mt-24",children:bt.jsxs("div",{className:"container mx-auto text-center",children:[bt.jsx("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-bold text-lime-400 mb-16 animate-fade-in",children:"Professional Experience 💼"}),bt.jsxs("div",{className:"bg-gray-800 p-8 rounded-2xl shadow-xl border backdrop-blur-md bg-gray-900/60 border-gray-700 text-left animate-fade-in-up-stagger card-3d-hover group backdrop-filter",children:[bt.jsx("h3",{className:"text-3xl font-bold text-lime-300 mb-4",children:"Infosys Limited - Senior System Engineer"}),bt.jsx("p",{className:"text-lg text-gray-300 mb-6",children:"Oct 2022 - Present | Bangalore, Karnataka"}),bt.jsx("ul",{className:" list-inside space-y-3 text-md text-gray-200  ",children:vn.experienceHighlights.map((y,_)=>bt.jsxs("li",{className:"animate-slide-in-from-left",style:{animationDelay:`${_*.1}s`},children:[bt.jsx(kA,{className:"inline-block w-5 h-5 text-lime-400 mr-2"})," ",y]},_))})]})]})}),bt.jsx("section",{id:"projects",ref:d,className:"py-20 px-4 bg-gray-900 bg-opacity-80 rounded-3xl shadow-2xl mt-8 border border-gray-800 animate-fade-in-up-section scroll-mt-24",children:bt.jsxs("div",{className:"container mx-auto text-center",children:[bt.jsx("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-bold text-lime-400 mb-16 animate-fade-in",children:"Key Projects & Accomplishments 💼"}),bt.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 perspective-1000",children:vn.projects.map((y,_)=>bt.jsx(BA,{imageSrc:y.imageSrc,title:y.title,description:y.description,link:y.link,delay:`${_*.1}s`},_))})]})}),bt.jsx("section",{id:"contact",ref:p,className:"py-28 px-4 bg-gray-900 bg-opacity-80 rounded-3xl shadow-2xl mt-8 border border-gray-800 transition-all duration-300 hover:shadow-[0_0_60px_20px_rgba(59,130,246,0.5)] scroll-mt-24",children:bt.jsxs("div",{className:"container mx-auto text-center max-w-2xl",children:[bt.jsx("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-bold text-lime-400 mb-14 animate-fade-in",children:"Let's Connect! 👋"}),bt.jsx("p",{className:"text-lg text-gray-300 mb-14",children:"I'm keen to explore new challenges and contribute my extensive experience to innovative projects. Reach out to discuss how I can add value to your team or initiative."}),bt.jsxs("div",{className:"flex flex-col space-y-7 ",children:[bt.jsxs("a",{href:`tel:${vn.phone.replace(/\s/g,"")}`,className:"hover:shadow-[0_0_60px_20px_rgba(59,130,246,0.5)] bg-gradient-to-r from-lime-500 to-green-600 text-white font-bold py-5 px-12 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-xl flex items-center justify-center space-x-3 group relative overflow-hidden",children:[bt.jsxs("span",{children:["Call Me: ",vn.phone]})," 📞"]}),bt.jsxs("a",{href:`mailto:${vn.email}`,className:"bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold py-5 px-12 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-xl flex items-center justify-center space-x-3 group relative overflow-hidden",children:[bt.jsx("span",{children:"Email Me Directly"})," 📧"]}),bt.jsxs("a",{href:`https://${vn.linkedin}`,target:"_blank",rel:"noopener noreferrer",className:" hover:shadow-[0_0_60px_20px_rgba(59,130,246,0.5)] bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-5 px-12 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-xl flex items-center justify-center space-x-3 group",children:[bt.jsx("span",{children:"Connect on LinkedIn"})," 🔗"]}),bt.jsxs("a",{href:vn.github,target:"_blank",rel:"noopener noreferrer",className:" hover:shadow-[0_0_60px_20px_rgba(59,130,246,0.5)] bg-gray-700 text-white font-bold py-5 px-12 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-xl flex items-center justify-center space-x-3 group",children:[bt.jsx("span",{children:"Explore My GitHub"})," 🐙"]}),bt.jsxs("a",{href:vn.resumePdfUrl,download:`${vn.name.replace(/\s/g,"_")}_Resume.pdf`,target:"_blank",rel:"noopener noreferrer",className:" bg-gradient-to-r from-purple-600 to-pink-700 text-white font-bold py-5 px-12 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-xl flex items-center justify-center space-x-3 group relative overflow-hidden animate-glow-pulse-purple",children:[bt.jsx("span",{children:"Download Resume"})," ⬇️"]})]})]})}),bt.jsx("footer",{className:"bg-gray-950 text-gray-400 py-12 px-4 text-center mt-auto rounded-t-3xl shadow-inner border-t border-gray-800 animate-fade-in-up",children:bt.jsxs("div",{className:"container mx-auto",children:[bt.jsxs("p",{className:"text-lg",children:["© ",new Date().getFullYear()," ",vn.name,". All rights reserved."]}),bt.jsxs("div",{className:"flex flex-row justify-center space-x-6 text-2xl mt-6",children:[bt.jsx("a",{href:"mailto:rajeshkumar9852143626@gmail.com",className:"hover:text-lime-400 transition","aria-label":"Email",title:"Email",children:bt.jsx("img",{style:{height:"30px",width:"30px",display:"flex"},src:sS})}),bt.jsx("a",{href:"https://github.com/RajeshKumarPathak01/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-lime-400 transition","aria-label":"GitHub",title:"GitHub",children:bt.jsx("img",{style:{height:"30px",width:"30px",display:"flex"},src:iS})}),bt.jsx("a",{href:"https://www.linkedin.com/in/rajesh-kumar-pathak-",target:"_blank",rel:"noopener noreferrer",className:"hover:text-lime-400 transition","aria-label":"LinkedIn",title:"LinkedIn",children:bt.jsx("img",{style:{height:"30px",width:"30px"},src:aS})})]})]})})]})}const QA=()=>{const s=qe.useRef(null),e=qe.useRef([]),i=qe.useRef(new Co),r=qe.useCallback(()=>{const l=s.current;if(!l){console.warn("Three.js: Mount element not found, skipping initialization.");return}const u=new qy,h=new oi(75,l.clientWidth/l.clientHeight,.1,1e3);h.position.z=5;const d=new PA({antialias:!0,alpha:!0});d.setSize(l.clientWidth,l.clientHeight),l.appendChild(d.domElement),console.log("Three.js scene initialized!"),i.current.clear(),e.current=[];const p=new bs(.1,.1,.1),m=new _d({color:7268279,transparent:!0,opacity:.5}),g=200;for(let M=0;M<g;M++){const b=new Ai(p,m);b.position.x=(Math.random()-.5)*10,b.position.y=(Math.random()-.5)*10,b.position.z=(Math.random()-.5)*10,b.userData.rotationSpeedX=Math.random()*.005-.0025,b.userData.rotationSpeedY=Math.random()*.005-.0025,b.userData.rotationSpeedZ=Math.random()*.005-.0025,i.current.add(b),e.current.push(b)}u.add(i.current);const v=()=>{requestAnimationFrame(v),e.current.forEach(M=>{M.rotation.x+=M.userData.rotationSpeedX,M.rotation.y+=M.userData.rotationSpeedY,M.rotation.z+=M.userData.rotationSpeedZ}),i.current.rotation.x+=5e-4,i.current.rotation.y+=.001,d.render(u,h)};v();const x=()=>{const M=l.clientWidth,b=l.clientHeight;d.setSize(M,b),h.aspect=M/b,h.updateProjectionMatrix()};return window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x),l&&d.domElement&&l.removeChild(d.domElement),p.dispose(),m.dispose(),d.dispose(),u.remove(i.current),i.current.children.forEach(M=>{M.geometry&&M.geometry.dispose(),M.material&&M.material.dispose()}),i.current.clear(),e.current=[]}},[]);return qe.useEffect(()=>{r()},[r]),bt.jsx("div",{ref:s,className:"three-canvas",id:"3dObject",style:{width:"100%",height:"100vh",position:"absolute",top:0,left:0,zIndex:0}})};function JA({icon:s,title:e,delay:i}){return bt.jsxs("div",{className:"bg-gray-900 p-8 rounded-2xl shadow-xl border-l-4 border-lime-500 cursor-pointer flex flex-col items-center justify-center text-center animate-fade-in-up-stagger card-3d-hover group",style:{animationDelay:i},children:[bt.jsx("div",{className:"text-5xl mb-4 text-lime-400 card-icon-animate",children:s}),bt.jsx("h3",{className:"text-xl font-bold text-gray-100",children:e})]})}eS.createRoot(document.getElementById("root")).render(bt.jsx(qe.StrictMode,{children:bt.jsx(KA,{})}));
