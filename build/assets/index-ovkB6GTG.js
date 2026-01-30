(function(){const P=document.createElement("link").relList;if(P&&P.supports&&P.supports("modulepreload"))return;for(const F of document.querySelectorAll('link[rel="modulepreload"]'))V(F);new MutationObserver(F=>{for(const D of F)if(D.type==="childList")for(const z of D.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&V(z)}).observe(document,{childList:!0,subtree:!0});function m(F){const D={};return F.integrity&&(D.integrity=F.integrity),F.referrerPolicy&&(D.referrerPolicy=F.referrerPolicy),F.crossOrigin==="use-credentials"?D.credentials="include":F.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function V(F){if(F.ep)return;F.ep=!0;const D=m(F);fetch(F.href,D)}})();var Ca={exports:{}},vr={},Sa={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu;function Od(){if(Cu)return $;Cu=1;var b=Symbol.for("react.element"),P=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),z=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),pe=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),ie=Symbol.iterator;function ee(c){return c===null||typeof c!="object"?null:(c=ie&&c[ie]||c["@@iterator"],typeof c=="function"?c:null)}var We={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},He=Object.assign,te={};function Y(c,y,I){this.props=c,this.context=y,this.refs=te,this.updater=I||We}Y.prototype.isReactComponent={},Y.prototype.setState=function(c,y){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,y,"setState")},Y.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function yt(){}yt.prototype=Y.prototype;function lt(c,y,I){this.props=c,this.context=y,this.refs=te,this.updater=I||We}var Xe=lt.prototype=new yt;Xe.constructor=lt,He(Xe,Y.prototype),Xe.isPureReactComponent=!0;var we=Array.isArray,Ze=Object.prototype.hasOwnProperty,Se={current:null},Ne={key:!0,ref:!0,__self:!0,__source:!0};function Ve(c,y,I){var j,U={},W=null,Q=null;if(y!=null)for(j in y.ref!==void 0&&(Q=y.ref),y.key!==void 0&&(W=""+y.key),y)Ze.call(y,j)&&!Ne.hasOwnProperty(j)&&(U[j]=y[j]);var q=arguments.length-2;if(q===1)U.children=I;else if(1<q){for(var ne=Array(q),$e=0;$e<q;$e++)ne[$e]=arguments[$e+2];U.children=ne}if(c&&c.defaultProps)for(j in q=c.defaultProps,q)U[j]===void 0&&(U[j]=q[j]);return{$$typeof:b,type:c,key:W,ref:Q,props:U,_owner:Se.current}}function Tt(c,y){return{$$typeof:b,type:c.type,key:y,ref:c.ref,props:c.props,_owner:c._owner}}function gt(c){return typeof c=="object"&&c!==null&&c.$$typeof===b}function Yt(c){var y={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(I){return y[I]})}var ut=/\/+/g;function Ie(c,y){return typeof c=="object"&&c!==null&&c.key!=null?Yt(""+c.key):y.toString(36)}function et(c,y,I,j,U){var W=typeof c;(W==="undefined"||W==="boolean")&&(c=null);var Q=!1;if(c===null)Q=!0;else switch(W){case"string":case"number":Q=!0;break;case"object":switch(c.$$typeof){case b:case P:Q=!0}}if(Q)return Q=c,U=U(Q),c=j===""?"."+Ie(Q,0):j,we(U)?(I="",c!=null&&(I=c.replace(ut,"$&/")+"/"),et(U,y,I,"",function($e){return $e})):U!=null&&(gt(U)&&(U=Tt(U,I+(!U.key||Q&&Q.key===U.key?"":(""+U.key).replace(ut,"$&/")+"/")+c)),y.push(U)),1;if(Q=0,j=j===""?".":j+":",we(c))for(var q=0;q<c.length;q++){W=c[q];var ne=j+Ie(W,q);Q+=et(W,y,I,ne,U)}else if(ne=ee(c),typeof ne=="function")for(c=ne.call(c),q=0;!(W=c.next()).done;)W=W.value,ne=j+Ie(W,q++),Q+=et(W,y,I,ne,U);else if(W==="object")throw y=String(c),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return Q}function ct(c,y,I){if(c==null)return c;var j=[],U=0;return et(c,j,"","",function(W){return y.call(I,W,U++)}),j}function Ae(c){if(c._status===-1){var y=c._result;y=y(),y.then(function(I){(c._status===0||c._status===-1)&&(c._status=1,c._result=I)},function(I){(c._status===0||c._status===-1)&&(c._status=2,c._result=I)}),c._status===-1&&(c._status=0,c._result=y)}if(c._status===1)return c._result.default;throw c._result}var se={current:null},w={transition:null},M={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:w,ReactCurrentOwner:Se};function C(){throw Error("act(...) is not supported in production builds of React.")}return $.Children={map:ct,forEach:function(c,y,I){ct(c,function(){y.apply(this,arguments)},I)},count:function(c){var y=0;return ct(c,function(){y++}),y},toArray:function(c){return ct(c,function(y){return y})||[]},only:function(c){if(!gt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},$.Component=Y,$.Fragment=m,$.Profiler=F,$.PureComponent=lt,$.StrictMode=V,$.Suspense=L,$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,$.act=C,$.cloneElement=function(c,y,I){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var j=He({},c.props),U=c.key,W=c.ref,Q=c._owner;if(y!=null){if(y.ref!==void 0&&(W=y.ref,Q=Se.current),y.key!==void 0&&(U=""+y.key),c.type&&c.type.defaultProps)var q=c.type.defaultProps;for(ne in y)Ze.call(y,ne)&&!Ne.hasOwnProperty(ne)&&(j[ne]=y[ne]===void 0&&q!==void 0?q[ne]:y[ne])}var ne=arguments.length-2;if(ne===1)j.children=I;else if(1<ne){q=Array(ne);for(var $e=0;$e<ne;$e++)q[$e]=arguments[$e+2];j.children=q}return{$$typeof:b,type:c.type,key:U,ref:W,props:j,_owner:Q}},$.createContext=function(c){return c={$$typeof:z,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:D,_context:c},c.Consumer=c},$.createElement=Ve,$.createFactory=function(c){var y=Ve.bind(null,c);return y.type=c,y},$.createRef=function(){return{current:null}},$.forwardRef=function(c){return{$$typeof:J,render:c}},$.isValidElement=gt,$.lazy=function(c){return{$$typeof:he,_payload:{_status:-1,_result:c},_init:Ae}},$.memo=function(c,y){return{$$typeof:pe,type:c,compare:y===void 0?null:y}},$.startTransition=function(c){var y=w.transition;w.transition={};try{c()}finally{w.transition=y}},$.unstable_act=C,$.useCallback=function(c,y){return se.current.useCallback(c,y)},$.useContext=function(c){return se.current.useContext(c)},$.useDebugValue=function(){},$.useDeferredValue=function(c){return se.current.useDeferredValue(c)},$.useEffect=function(c,y){return se.current.useEffect(c,y)},$.useId=function(){return se.current.useId()},$.useImperativeHandle=function(c,y,I){return se.current.useImperativeHandle(c,y,I)},$.useInsertionEffect=function(c,y){return se.current.useInsertionEffect(c,y)},$.useLayoutEffect=function(c,y){return se.current.useLayoutEffect(c,y)},$.useMemo=function(c,y){return se.current.useMemo(c,y)},$.useReducer=function(c,y,I){return se.current.useReducer(c,y,I)},$.useRef=function(c){return se.current.useRef(c)},$.useState=function(c){return se.current.useState(c)},$.useSyncExternalStore=function(c,y,I){return se.current.useSyncExternalStore(c,y,I)},$.useTransition=function(){return se.current.useTransition()},$.version="18.3.1",$}var Su;function Aa(){return Su||(Su=1,Sa.exports=Od()),Sa.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function Fd(){if(Tu)return vr;Tu=1;var b=Aa(),P=Symbol.for("react.element"),m=Symbol.for("react.fragment"),V=Object.prototype.hasOwnProperty,F=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D={key:!0,ref:!0,__self:!0,__source:!0};function z(J,L,pe){var he,ie={},ee=null,We=null;pe!==void 0&&(ee=""+pe),L.key!==void 0&&(ee=""+L.key),L.ref!==void 0&&(We=L.ref);for(he in L)V.call(L,he)&&!D.hasOwnProperty(he)&&(ie[he]=L[he]);if(J&&J.defaultProps)for(he in L=J.defaultProps,L)ie[he]===void 0&&(ie[he]=L[he]);return{$$typeof:P,type:J,key:ee,ref:We,props:ie,_owner:F.current}}return vr.Fragment=m,vr.jsx=z,vr.jsxs=z,vr}var Pu;function Dd(){return Pu||(Pu=1,Ca.exports=Fd()),Ca.exports}var v=Dd(),Ai={},Ta={exports:{}},Le={},Pa={exports:{}},Na={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nu;function Ld(){return Nu||(Nu=1,(function(b){function P(w,M){var C=w.length;w.push(M);e:for(;0<C;){var c=C-1>>>1,y=w[c];if(0<F(y,M))w[c]=M,w[C]=y,C=c;else break e}}function m(w){return w.length===0?null:w[0]}function V(w){if(w.length===0)return null;var M=w[0],C=w.pop();if(C!==M){w[0]=C;e:for(var c=0,y=w.length,I=y>>>1;c<I;){var j=2*(c+1)-1,U=w[j],W=j+1,Q=w[W];if(0>F(U,C))W<y&&0>F(Q,U)?(w[c]=Q,w[W]=C,c=W):(w[c]=U,w[j]=C,c=j);else if(W<y&&0>F(Q,C))w[c]=Q,w[W]=C,c=W;else break e}}return M}function F(w,M){var C=w.sortIndex-M.sortIndex;return C!==0?C:w.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var D=performance;b.unstable_now=function(){return D.now()}}else{var z=Date,J=z.now();b.unstable_now=function(){return z.now()-J}}var L=[],pe=[],he=1,ie=null,ee=3,We=!1,He=!1,te=!1,Y=typeof setTimeout=="function"?setTimeout:null,yt=typeof clearTimeout=="function"?clearTimeout:null,lt=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Xe(w){for(var M=m(pe);M!==null;){if(M.callback===null)V(pe);else if(M.startTime<=w)V(pe),M.sortIndex=M.expirationTime,P(L,M);else break;M=m(pe)}}function we(w){if(te=!1,Xe(w),!He)if(m(L)!==null)He=!0,Ae(Ze);else{var M=m(pe);M!==null&&se(we,M.startTime-w)}}function Ze(w,M){He=!1,te&&(te=!1,yt(Ve),Ve=-1),We=!0;var C=ee;try{for(Xe(M),ie=m(L);ie!==null&&(!(ie.expirationTime>M)||w&&!Yt());){var c=ie.callback;if(typeof c=="function"){ie.callback=null,ee=ie.priorityLevel;var y=c(ie.expirationTime<=M);M=b.unstable_now(),typeof y=="function"?ie.callback=y:ie===m(L)&&V(L),Xe(M)}else V(L);ie=m(L)}if(ie!==null)var I=!0;else{var j=m(pe);j!==null&&se(we,j.startTime-M),I=!1}return I}finally{ie=null,ee=C,We=!1}}var Se=!1,Ne=null,Ve=-1,Tt=5,gt=-1;function Yt(){return!(b.unstable_now()-gt<Tt)}function ut(){if(Ne!==null){var w=b.unstable_now();gt=w;var M=!0;try{M=Ne(!0,w)}finally{M?Ie():(Se=!1,Ne=null)}}else Se=!1}var Ie;if(typeof lt=="function")Ie=function(){lt(ut)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ct=et.port2;et.port1.onmessage=ut,Ie=function(){ct.postMessage(null)}}else Ie=function(){Y(ut,0)};function Ae(w){Ne=w,Se||(Se=!0,Ie())}function se(w,M){Ve=Y(function(){w(b.unstable_now())},M)}b.unstable_IdlePriority=5,b.unstable_ImmediatePriority=1,b.unstable_LowPriority=4,b.unstable_NormalPriority=3,b.unstable_Profiling=null,b.unstable_UserBlockingPriority=2,b.unstable_cancelCallback=function(w){w.callback=null},b.unstable_continueExecution=function(){He||We||(He=!0,Ae(Ze))},b.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Tt=0<w?Math.floor(1e3/w):5},b.unstable_getCurrentPriorityLevel=function(){return ee},b.unstable_getFirstCallbackNode=function(){return m(L)},b.unstable_next=function(w){switch(ee){case 1:case 2:case 3:var M=3;break;default:M=ee}var C=ee;ee=M;try{return w()}finally{ee=C}},b.unstable_pauseExecution=function(){},b.unstable_requestPaint=function(){},b.unstable_runWithPriority=function(w,M){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var C=ee;ee=w;try{return M()}finally{ee=C}},b.unstable_scheduleCallback=function(w,M,C){var c=b.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?c+C:c):C=c,w){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=C+y,w={id:he++,callback:M,priorityLevel:w,startTime:C,expirationTime:y,sortIndex:-1},C>c?(w.sortIndex=C,P(pe,w),m(L)===null&&w===m(pe)&&(te?(yt(Ve),Ve=-1):te=!0,se(we,C-c))):(w.sortIndex=y,P(L,w),He||We||(He=!0,Ae(Ze))),w},b.unstable_shouldYield=Yt,b.unstable_wrapCallback=function(w){var M=ee;return function(){var C=ee;ee=M;try{return w.apply(this,arguments)}finally{ee=C}}}})(Na)),Na}var Au;function Id(){return Au||(Au=1,Pa.exports=Ld()),Pa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru;function $d(){if(Ru)return Le;Ru=1;var b=Aa(),P=Id();function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var V=new Set,F={};function D(e,t){z(e,t),z(e+"Capture",t)}function z(e,t){for(F[e]=t,e=0;e<t.length;e++)V.add(t[e])}var J=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),L=Object.prototype.hasOwnProperty,pe=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,he={},ie={};function ee(e){return L.call(ie,e)?!0:L.call(he,e)?!1:pe.test(e)?ie[e]=!0:(he[e]=!0,!1)}function We(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function He(e,t,n,r){if(t===null||typeof t>"u"||We(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function te(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Y[e]=new te(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Y[t]=new te(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Y[e]=new te(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Y[e]=new te(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Y[e]=new te(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Y[e]=new te(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Y[e]=new te(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Y[e]=new te(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Y[e]=new te(e,5,!1,e.toLowerCase(),null,!1,!1)});var yt=/[\-:]([a-z])/g;function lt(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yt,lt);Y[t]=new te(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yt,lt);Y[t]=new te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yt,lt);Y[t]=new te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Y[e]=new te(e,1,!1,e.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Y[e]=new te(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xe(e,t,n,r){var i=Y.hasOwnProperty(t)?Y[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(He(t,n,i,r)&&(n=null),r||i===null?ee(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var we=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ze=Symbol.for("react.element"),Se=Symbol.for("react.portal"),Ne=Symbol.for("react.fragment"),Ve=Symbol.for("react.strict_mode"),Tt=Symbol.for("react.profiler"),gt=Symbol.for("react.provider"),Yt=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),Ie=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),w=Symbol.iterator;function M(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var C=Object.assign,c;function y(e){if(c===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);c=t&&t[1]||""}return`
`+c+e}var I=!1;function j(e,t){if(!e||I)return"";I=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{I=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?y(e):""}function U(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=j(e.type,!1),e;case 11:return e=j(e.type.render,!1),e;case 1:return e=j(e.type,!0),e;default:return""}}function W(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ne:return"Fragment";case Se:return"Portal";case Tt:return"Profiler";case Ve:return"StrictMode";case Ie:return"Suspense";case et:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yt:return(e.displayName||"Context")+".Consumer";case gt:return(e._context.displayName||"Context")+".Provider";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ct:return t=e.displayName||null,t!==null?t:W(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return W(e(t))}catch{}}return null}function Q(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===Ve?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ne(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $e(e){var t=ne(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=$e(e))}function Ra(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ne(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ri(e,t){var n=t.checked;return C({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ma(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=q(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Oa(e,t){t=t.checked,t!=null&&Xe(e,"checked",t,!1)}function Mi(e,t){Oa(e,t);var n=q(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Oi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Oi(e,t.type,q(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Oi(e,t,n){(t!=="number"||wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+q(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(m(91));return C({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Da(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(m(92));if(Fn(n)){if(1<n.length)throw Error(m(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:q(n)}}function La(e,t){var n=q(t.value),r=q(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ia(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $a(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$a(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var br,ja=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iu=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){Iu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Ba(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function za(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ba(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var $u=C({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Li(e,t){if(t){if($u[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(m(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(m(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(m(61))}if(t.style!=null&&typeof t.style!="object")throw Error(m(62))}}function Ii(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $i=null;function ji(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bi=null,cn=null,dn=null;function Ua(e){if(e=ir(e)){if(typeof Bi!="function")throw Error(m(280));var t=e.stateNode;t&&(t=Vr(t),Bi(e.stateNode,e.type,t))}}function Wa(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Ha(){if(cn){var e=cn,t=dn;if(dn=cn=null,Ua(e),t)for(e=0;e<t.length;e++)Ua(t[e])}}function Va(e,t){return e(t)}function qa(){}var zi=!1;function Ga(e,t,n){if(zi)return e(t,n);zi=!0;try{return Va(e,t,n)}finally{zi=!1,(cn!==null||dn!==null)&&(qa(),Ha())}}function In(e,t){var n=e.stateNode;if(n===null)return null;var r=Vr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(m(231,t,typeof n));return n}var Ui=!1;if(J)try{var $n={};Object.defineProperty($n,"passive",{get:function(){Ui=!0}}),window.addEventListener("test",$n,$n),window.removeEventListener("test",$n,$n)}catch{Ui=!1}function ju(e,t,n,r,i,o,a,s,l){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(g){this.onError(g)}}var jn=!1,kr=null,Er=!1,Wi=null,Bu={onError:function(e){jn=!0,kr=e}};function zu(e,t,n,r,i,o,a,s,l){jn=!1,kr=null,ju.apply(Bu,arguments)}function Uu(e,t,n,r,i,o,a,s,l){if(zu.apply(this,arguments),jn){if(jn){var f=kr;jn=!1,kr=null}else throw Error(m(198));Er||(Er=!0,Wi=f)}}function Qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ya(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qa(e){if(Qt(e)!==e)throw Error(m(188))}function Wu(e){var t=e.alternate;if(!t){if(t=Qt(e),t===null)throw Error(m(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Qa(i),e;if(o===r)return Qa(i),t;o=o.sibling}throw Error(m(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(m(189))}}if(n.alternate!==r)throw Error(m(190))}if(n.tag!==3)throw Error(m(188));return n.stateNode.current===n?e:t}function Ka(e){return e=Wu(e),e!==null?Ja(e):null}function Ja(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ja(e);if(t!==null)return t;e=e.sibling}return null}var Xa=P.unstable_scheduleCallback,Za=P.unstable_cancelCallback,Hu=P.unstable_shouldYield,Vu=P.unstable_requestPaint,ue=P.unstable_now,qu=P.unstable_getCurrentPriorityLevel,Hi=P.unstable_ImmediatePriority,es=P.unstable_UserBlockingPriority,Cr=P.unstable_NormalPriority,Gu=P.unstable_LowPriority,ts=P.unstable_IdlePriority,Sr=null,dt=null;function Yu(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Sr,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Ju,Qu=Math.log,Ku=Math.LN2;function Ju(e){return e>>>=0,e===0?32:31-(Qu(e)/Ku|0)|0}var Tr=64,Pr=4194304;function Bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Nr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Bn(s):(o&=a,o!==0&&(r=Bn(o)))}else a=n&~i,a!==0?r=Bn(a):o!==0&&(r=Bn(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),i=1<<n,r|=e[n],t&=~i;return r}function Xu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-tt(o),s=1<<a,l=i[a];l===-1?((s&n)===0||(s&r)!==0)&&(i[a]=Xu(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Vi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ns(){var e=Tr;return Tr<<=1,(Tr&4194240)===0&&(Tr=64),e}function qi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function ec(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Gi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var G=0;function rs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var is,Yi,os,as,ss,Qi=!1,Ar=[],Pt=null,Nt=null,At=null,Un=new Map,Wn=new Map,Rt=[],tc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ls(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function Hn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ir(t),t!==null&&Yi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function nc(e,t,n,r,i){switch(t){case"focusin":return Pt=Hn(Pt,e,t,n,r,i),!0;case"dragenter":return Nt=Hn(Nt,e,t,n,r,i),!0;case"mouseover":return At=Hn(At,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Un.set(o,Hn(Un.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Wn.set(o,Hn(Wn.get(o)||null,e,t,n,r,i)),!0}return!1}function us(e){var t=Kt(e.target);if(t!==null){var n=Qt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ya(n),t!==null){e.blockedOn=t,ss(e.priority,function(){os(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ji(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$i=r,n.target.dispatchEvent(r),$i=null}else return t=ir(n),t!==null&&Yi(t),e.blockedOn=n,!1;t.shift()}return!0}function cs(e,t,n){Rr(e)&&n.delete(t)}function rc(){Qi=!1,Pt!==null&&Rr(Pt)&&(Pt=null),Nt!==null&&Rr(Nt)&&(Nt=null),At!==null&&Rr(At)&&(At=null),Un.forEach(cs),Wn.forEach(cs)}function Vn(e,t){e.blockedOn===t&&(e.blockedOn=null,Qi||(Qi=!0,P.unstable_scheduleCallback(P.unstable_NormalPriority,rc)))}function qn(e){function t(i){return Vn(i,e)}if(0<Ar.length){Vn(Ar[0],e);for(var n=1;n<Ar.length;n++){var r=Ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&Vn(Pt,e),Nt!==null&&Vn(Nt,e),At!==null&&Vn(At,e),Un.forEach(t),Wn.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)us(n),n.blockedOn===null&&Rt.shift()}var pn=we.ReactCurrentBatchConfig,Mr=!0;function ic(e,t,n,r){var i=G,o=pn.transition;pn.transition=null;try{G=1,Ki(e,t,n,r)}finally{G=i,pn.transition=o}}function oc(e,t,n,r){var i=G,o=pn.transition;pn.transition=null;try{G=4,Ki(e,t,n,r)}finally{G=i,pn.transition=o}}function Ki(e,t,n,r){if(Mr){var i=Ji(e,t,n,r);if(i===null)ho(e,t,r,Or,n),ls(e,r);else if(nc(i,e,t,n,r))r.stopPropagation();else if(ls(e,r),t&4&&-1<tc.indexOf(e)){for(;i!==null;){var o=ir(i);if(o!==null&&is(o),o=Ji(e,t,n,r),o===null&&ho(e,t,r,Or,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ho(e,t,r,null,n)}}var Or=null;function Ji(e,t,n,r){if(Or=null,e=ji(r),e=Kt(e),e!==null)if(t=Qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ya(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Or=e,null}function ds(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qu()){case Hi:return 1;case es:return 4;case Cr:case Gu:return 16;case ts:return 536870912;default:return 16}default:return 16}}var Mt=null,Xi=null,Fr=null;function ps(){if(Fr)return Fr;var e,t=Xi,n=t.length,r,i="value"in Mt?Mt.value:Mt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Fr=i.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lr(){return!0}function fs(){return!1}function je(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Lr:fs,this.isPropagationStopped=fs,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){},isPersistent:Lr}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zi=je(fn),Gn=C({},fn,{view:0,detail:0}),ac=je(Gn),eo,to,Yn,Ir=C({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(eo=e.screenX-Yn.screenX,to=e.screenY-Yn.screenY):to=eo=0,Yn=e),eo)},movementY:function(e){return"movementY"in e?e.movementY:to}}),ms=je(Ir),sc=C({},Ir,{dataTransfer:0}),lc=je(sc),uc=C({},Gn,{relatedTarget:0}),no=je(uc),cc=C({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),dc=je(cc),pc=C({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fc=je(pc),mc=C({},fn,{data:0}),hs=je(mc),hc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _c(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gc[e])?!!t[e]:!1}function ro(){return _c}var vc=C({},Gn,{key:function(e){if(e.key){var t=hc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ro,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xc=je(vc),wc=C({},Ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ys=je(wc),bc=C({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ro}),kc=je(bc),Ec=C({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cc=je(Ec),Sc=C({},Ir,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tc=je(Sc),Pc=[9,13,27,32],io=J&&"CompositionEvent"in window,Qn=null;J&&"documentMode"in document&&(Qn=document.documentMode);var Nc=J&&"TextEvent"in window&&!Qn,gs=J&&(!io||Qn&&8<Qn&&11>=Qn),_s=" ",vs=!1;function xs(e,t){switch(e){case"keyup":return Pc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ws(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function Ac(e,t){switch(e){case"compositionend":return ws(t);case"keypress":return t.which!==32?null:(vs=!0,_s);case"textInput":return e=t.data,e===_s&&vs?null:e;default:return null}}function Rc(e,t){if(mn)return e==="compositionend"||!io&&xs(e,t)?(e=ps(),Fr=Xi=Mt=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gs&&t.locale!=="ko"?null:t.data;default:return null}}var Mc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mc[e.type]:t==="textarea"}function ks(e,t,n,r){Wa(r),t=Ur(t,"onChange"),0<t.length&&(n=new Zi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Jn=null;function Oc(e){zs(e,0)}function $r(e){var t=vn(e);if(Ra(t))return e}function Fc(e,t){if(e==="change")return t}var Es=!1;if(J){var oo;if(J){var ao="oninput"in document;if(!ao){var Cs=document.createElement("div");Cs.setAttribute("oninput","return;"),ao=typeof Cs.oninput=="function"}oo=ao}else oo=!1;Es=oo&&(!document.documentMode||9<document.documentMode)}function Ss(){Kn&&(Kn.detachEvent("onpropertychange",Ts),Jn=Kn=null)}function Ts(e){if(e.propertyName==="value"&&$r(Jn)){var t=[];ks(t,Jn,e,ji(e)),Ga(Oc,t)}}function Dc(e,t,n){e==="focusin"?(Ss(),Kn=t,Jn=n,Kn.attachEvent("onpropertychange",Ts)):e==="focusout"&&Ss()}function Lc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $r(Jn)}function Ic(e,t){if(e==="click")return $r(t)}function $c(e,t){if(e==="input"||e==="change")return $r(t)}function jc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:jc;function Xn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!L.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function Ps(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ns(e,t){var n=Ps(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ps(n)}}function As(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?As(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rs(){for(var e=window,t=wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wr(e.document)}return t}function so(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bc(e){var t=Rs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&As(n.ownerDocument.documentElement,n)){if(r!==null&&so(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ns(n,o);var a=Ns(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zc=J&&"documentMode"in document&&11>=document.documentMode,hn=null,lo=null,Zn=null,uo=!1;function Ms(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uo||hn==null||hn!==wr(r)||(r=hn,"selectionStart"in r&&so(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zn&&Xn(Zn,r)||(Zn=r,r=Ur(lo,"onSelect"),0<r.length&&(t=new Zi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hn)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yn={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},co={},Os={};J&&(Os=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function Br(e){if(co[e])return co[e];if(!yn[e])return e;var t=yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Os)return co[e]=t[n];return e}var Fs=Br("animationend"),Ds=Br("animationiteration"),Ls=Br("animationstart"),Is=Br("transitionend"),$s=new Map,js="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ot(e,t){$s.set(e,t),D(t,[e])}for(var po=0;po<js.length;po++){var fo=js[po],Uc=fo.toLowerCase(),Wc=fo[0].toUpperCase()+fo.slice(1);Ot(Uc,"on"+Wc)}Ot(Fs,"onAnimationEnd"),Ot(Ds,"onAnimationIteration"),Ot(Ls,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(Is,"onTransitionEnd"),z("onMouseEnter",["mouseout","mouseover"]),z("onMouseLeave",["mouseout","mouseover"]),z("onPointerEnter",["pointerout","pointerover"]),z("onPointerLeave",["pointerout","pointerover"]),D("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),D("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),D("onBeforeInput",["compositionend","keypress","textInput","paste"]),D("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),D("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),D("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hc=new Set("cancel close invalid load scroll toggle".split(" ").concat(er));function Bs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uu(r,t,void 0,e),e.currentTarget=null}function zs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,f=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Bs(i,s,f),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,f=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Bs(i,s,f),o=l}}}if(Er)throw e=Wi,Er=!1,Wi=null,e}function X(e,t){var n=t[wo];n===void 0&&(n=t[wo]=new Set);var r=e+"__bubble";n.has(r)||(Us(t,e,2,!1),n.add(r))}function mo(e,t,n){var r=0;t&&(r|=4),Us(n,e,r,t)}var zr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[zr]){e[zr]=!0,V.forEach(function(n){n!=="selectionchange"&&(Hc.has(n)||mo(n,!1,e),mo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zr]||(t[zr]=!0,mo("selectionchange",!1,t))}}function Us(e,t,n,r){switch(ds(t)){case 1:var i=ic;break;case 4:i=oc;break;default:i=Ki}n=i.bind(null,t,n,e),i=void 0,!Ui||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ho(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Kt(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Ga(function(){var f=o,g=ji(n),_=[];e:{var h=$s.get(e);if(h!==void 0){var k=Zi,S=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":k=xc;break;case"focusin":S="focus",k=no;break;case"focusout":S="blur",k=no;break;case"beforeblur":case"afterblur":k=no;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=lc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=kc;break;case Fs:case Ds:case Ls:k=dc;break;case Is:k=Cc;break;case"scroll":k=ac;break;case"wheel":k=Tc;break;case"copy":case"cut":case"paste":k=fc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ys}var T=(t&4)!==0,ce=!T&&e==="scroll",d=T?h!==null?h+"Capture":null:h;T=[];for(var u=f,p;u!==null;){p=u;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,d!==null&&(x=In(u,d),x!=null&&T.push(nr(u,x,p)))),ce)break;u=u.return}0<T.length&&(h=new k(h,S,null,n,g),_.push({event:h,listeners:T}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==$i&&(S=n.relatedTarget||n.fromElement)&&(Kt(S)||S[_t]))break e;if((k||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,k?(S=n.relatedTarget||n.toElement,k=f,S=S?Kt(S):null,S!==null&&(ce=Qt(S),S!==ce||S.tag!==5&&S.tag!==6)&&(S=null)):(k=null,S=f),k!==S)){if(T=ms,x="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(T=ys,x="onPointerLeave",d="onPointerEnter",u="pointer"),ce=k==null?h:vn(k),p=S==null?h:vn(S),h=new T(x,u+"leave",k,n,g),h.target=ce,h.relatedTarget=p,x=null,Kt(g)===f&&(T=new T(d,u+"enter",S,n,g),T.target=p,T.relatedTarget=ce,x=T),ce=x,k&&S)t:{for(T=k,d=S,u=0,p=T;p;p=gn(p))u++;for(p=0,x=d;x;x=gn(x))p++;for(;0<u-p;)T=gn(T),u--;for(;0<p-u;)d=gn(d),p--;for(;u--;){if(T===d||d!==null&&T===d.alternate)break t;T=gn(T),d=gn(d)}T=null}else T=null;k!==null&&Ws(_,h,k,T,!1),S!==null&&ce!==null&&Ws(_,ce,S,T,!0)}}e:{if(h=f?vn(f):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var N=Fc;else if(bs(h))if(Es)N=$c;else{N=Lc;var A=Dc}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=Ic);if(N&&(N=N(e,f))){ks(_,N,n,g);break e}A&&A(e,h,f),e==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Oi(h,"number",h.value)}switch(A=f?vn(f):window,e){case"focusin":(bs(A)||A.contentEditable==="true")&&(hn=A,lo=f,Zn=null);break;case"focusout":Zn=lo=hn=null;break;case"mousedown":uo=!0;break;case"contextmenu":case"mouseup":case"dragend":uo=!1,Ms(_,n,g);break;case"selectionchange":if(zc)break;case"keydown":case"keyup":Ms(_,n,g)}var R;if(io)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else mn?xs(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(gs&&n.locale!=="ko"&&(mn||O!=="onCompositionStart"?O==="onCompositionEnd"&&mn&&(R=ps()):(Mt=g,Xi="value"in Mt?Mt.value:Mt.textContent,mn=!0)),A=Ur(f,O),0<A.length&&(O=new hs(O,e,null,n,g),_.push({event:O,listeners:A}),R?O.data=R:(R=ws(n),R!==null&&(O.data=R)))),(R=Nc?Ac(e,n):Rc(e,n))&&(f=Ur(f,"onBeforeInput"),0<f.length&&(g=new hs("onBeforeInput","beforeinput",null,n,g),_.push({event:g,listeners:f}),g.data=R))}zs(_,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=In(e,n),o!=null&&r.unshift(nr(e,o,i)),o=In(e,t),o!=null&&r.push(nr(e,o,i))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ws(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,f=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&f!==null&&(s=f,i?(l=In(n,o),l!=null&&a.unshift(nr(n,l,s))):i||(l=In(n,o),l!=null&&a.push(nr(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Vc=/\r\n?/g,qc=/\u0000|\uFFFD/g;function Hs(e){return(typeof e=="string"?e:""+e).replace(Vc,`
`).replace(qc,"")}function Wr(e,t,n){if(t=Hs(t),Hs(e)!==t&&n)throw Error(m(425))}function Hr(){}var yo=null,go=null;function _o(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vo=typeof setTimeout=="function"?setTimeout:void 0,Gc=typeof clearTimeout=="function"?clearTimeout:void 0,Vs=typeof Promise=="function"?Promise:void 0,Yc=typeof queueMicrotask=="function"?queueMicrotask:typeof Vs<"u"?function(e){return Vs.resolve(null).then(e).catch(Qc)}:vo;function Qc(e){setTimeout(function(){throw e})}function xo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qn(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _n=Math.random().toString(36).slice(2),pt="__reactFiber$"+_n,rr="__reactProps$"+_n,_t="__reactContainer$"+_n,wo="__reactEvents$"+_n,Kc="__reactListeners$"+_n,Jc="__reactHandles$"+_n;function Kt(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qs(e);e!==null;){if(n=e[pt])return n;e=qs(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[pt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(m(33))}function Vr(e){return e[rr]||null}var bo=[],xn=-1;function Dt(e){return{current:e}}function Z(e){0>xn||(e.current=bo[xn],bo[xn]=null,xn--)}function K(e,t){xn++,bo[xn]=e.current,e.current=t}var Lt={},be=Dt(Lt),Re=Dt(!1),Jt=Lt;function wn(e,t){var n=e.type.contextTypes;if(!n)return Lt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Me(e){return e=e.childContextTypes,e!=null}function qr(){Z(Re),Z(be)}function Gs(e,t,n){if(be.current!==Lt)throw Error(m(168));K(be,t),K(Re,n)}function Ys(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(m(108,Q(e)||"Unknown",i));return C({},n,r)}function Gr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Jt=be.current,K(be,e),K(Re,Re.current),!0}function Qs(e,t,n){var r=e.stateNode;if(!r)throw Error(m(169));n?(e=Ys(e,t,Jt),r.__reactInternalMemoizedMergedChildContext=e,Z(Re),Z(be),K(be,e)):Z(Re),K(Re,n)}var vt=null,Yr=!1,ko=!1;function Ks(e){vt===null?vt=[e]:vt.push(e)}function Xc(e){Yr=!0,Ks(e)}function It(){if(!ko&&vt!==null){ko=!0;var e=0,t=G;try{var n=vt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}vt=null,Yr=!1}catch(i){throw vt!==null&&(vt=vt.slice(e+1)),Xa(Hi,It),i}finally{G=t,ko=!1}}return null}var bn=[],kn=0,Qr=null,Kr=0,qe=[],Ge=0,Xt=null,xt=1,wt="";function Zt(e,t){bn[kn++]=Kr,bn[kn++]=Qr,Qr=e,Kr=t}function Js(e,t,n){qe[Ge++]=xt,qe[Ge++]=wt,qe[Ge++]=Xt,Xt=e;var r=xt;e=wt;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var o=32-tt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,xt=1<<32-tt(t)+i|n<<i|r,wt=o+e}else xt=1<<o|n<<i|r,wt=e}function Eo(e){e.return!==null&&(Zt(e,1),Js(e,1,0))}function Co(e){for(;e===Qr;)Qr=bn[--kn],bn[kn]=null,Kr=bn[--kn],bn[kn]=null;for(;e===Xt;)Xt=qe[--Ge],qe[Ge]=null,wt=qe[--Ge],qe[Ge]=null,xt=qe[--Ge],qe[Ge]=null}var Be=null,ze=null,re=!1,rt=null;function Xs(e,t){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,ze=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xt!==null?{id:xt,overflow:wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,ze=null,!0):!1;default:return!1}}function So(e){return(e.mode&1)!==0&&(e.flags&128)===0}function To(e){if(re){var t=ze;if(t){var n=t;if(!Zs(e,t)){if(So(e))throw Error(m(418));t=Ft(n.nextSibling);var r=Be;t&&Zs(e,t)?Xs(r,n):(e.flags=e.flags&-4097|2,re=!1,Be=e)}}else{if(So(e))throw Error(m(418));e.flags=e.flags&-4097|2,re=!1,Be=e}}}function el(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function Jr(e){if(e!==Be)return!1;if(!re)return el(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_o(e.type,e.memoizedProps)),t&&(t=ze)){if(So(e))throw tl(),Error(m(418));for(;t;)Xs(e,t),t=Ft(t.nextSibling)}if(el(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Be?Ft(e.stateNode.nextSibling):null;return!0}function tl(){for(var e=ze;e;)e=Ft(e.nextSibling)}function En(){ze=Be=null,re=!1}function Po(e){rt===null?rt=[e]:rt.push(e)}var Zc=we.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(m(309));var r=n.stateNode}if(!r)throw Error(m(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(m(284));if(!n._owner)throw Error(m(290,e))}return e}function Xr(e,t){throw e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nl(e){var t=e._init;return t(e._payload)}function rl(e){function t(d,u){if(e){var p=d.deletions;p===null?(d.deletions=[u],d.flags|=16):p.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=Vt(d,u),d.index=0,d.sibling=null,d}function o(d,u,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<u?(d.flags|=2,u):p):(d.flags|=2,u)):(d.flags|=1048576,u)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,p,x){return u===null||u.tag!==6?(u=va(p,d.mode,x),u.return=d,u):(u=i(u,p),u.return=d,u)}function l(d,u,p,x){var N=p.type;return N===Ne?g(d,u,p.props.children,x,p.key):u!==null&&(u.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ae&&nl(N)===u.type)?(x=i(u,p.props),x.ref=or(d,u,p),x.return=d,x):(x=bi(p.type,p.key,p.props,null,d.mode,x),x.ref=or(d,u,p),x.return=d,x)}function f(d,u,p,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=xa(p,d.mode,x),u.return=d,u):(u=i(u,p.children||[]),u.return=d,u)}function g(d,u,p,x,N){return u===null||u.tag!==7?(u=ln(p,d.mode,x,N),u.return=d,u):(u=i(u,p),u.return=d,u)}function _(d,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=va(""+u,d.mode,p),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ze:return p=bi(u.type,u.key,u.props,null,d.mode,p),p.ref=or(d,null,u),p.return=d,p;case Se:return u=xa(u,d.mode,p),u.return=d,u;case Ae:var x=u._init;return _(d,x(u._payload),p)}if(Fn(u)||M(u))return u=ln(u,d.mode,p,null),u.return=d,u;Xr(d,u)}return null}function h(d,u,p,x){var N=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:s(d,u,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ze:return p.key===N?l(d,u,p,x):null;case Se:return p.key===N?f(d,u,p,x):null;case Ae:return N=p._init,h(d,u,N(p._payload),x)}if(Fn(p)||M(p))return N!==null?null:g(d,u,p,x,null);Xr(d,p)}return null}function k(d,u,p,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(p)||null,s(u,d,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ze:return d=d.get(x.key===null?p:x.key)||null,l(u,d,x,N);case Se:return d=d.get(x.key===null?p:x.key)||null,f(u,d,x,N);case Ae:var A=x._init;return k(d,u,p,A(x._payload),N)}if(Fn(x)||M(x))return d=d.get(p)||null,g(u,d,x,N,null);Xr(u,x)}return null}function S(d,u,p,x){for(var N=null,A=null,R=u,O=u=0,_e=null;R!==null&&O<p.length;O++){R.index>O?(_e=R,R=null):_e=R.sibling;var H=h(d,R,p[O],x);if(H===null){R===null&&(R=_e);break}e&&R&&H.alternate===null&&t(d,R),u=o(H,u,O),A===null?N=H:A.sibling=H,A=H,R=_e}if(O===p.length)return n(d,R),re&&Zt(d,O),N;if(R===null){for(;O<p.length;O++)R=_(d,p[O],x),R!==null&&(u=o(R,u,O),A===null?N=R:A.sibling=R,A=R);return re&&Zt(d,O),N}for(R=r(d,R);O<p.length;O++)_e=k(R,d,O,p[O],x),_e!==null&&(e&&_e.alternate!==null&&R.delete(_e.key===null?O:_e.key),u=o(_e,u,O),A===null?N=_e:A.sibling=_e,A=_e);return e&&R.forEach(function(qt){return t(d,qt)}),re&&Zt(d,O),N}function T(d,u,p,x){var N=M(p);if(typeof N!="function")throw Error(m(150));if(p=N.call(p),p==null)throw Error(m(151));for(var A=N=null,R=u,O=u=0,_e=null,H=p.next();R!==null&&!H.done;O++,H=p.next()){R.index>O?(_e=R,R=null):_e=R.sibling;var qt=h(d,R,H.value,x);if(qt===null){R===null&&(R=_e);break}e&&R&&qt.alternate===null&&t(d,R),u=o(qt,u,O),A===null?N=qt:A.sibling=qt,A=qt,R=_e}if(H.done)return n(d,R),re&&Zt(d,O),N;if(R===null){for(;!H.done;O++,H=p.next())H=_(d,H.value,x),H!==null&&(u=o(H,u,O),A===null?N=H:A.sibling=H,A=H);return re&&Zt(d,O),N}for(R=r(d,R);!H.done;O++,H=p.next())H=k(R,d,O,H.value,x),H!==null&&(e&&H.alternate!==null&&R.delete(H.key===null?O:H.key),u=o(H,u,O),A===null?N=H:A.sibling=H,A=H);return e&&R.forEach(function(Md){return t(d,Md)}),re&&Zt(d,O),N}function ce(d,u,p,x){if(typeof p=="object"&&p!==null&&p.type===Ne&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ze:e:{for(var N=p.key,A=u;A!==null;){if(A.key===N){if(N=p.type,N===Ne){if(A.tag===7){n(d,A.sibling),u=i(A,p.props.children),u.return=d,d=u;break e}}else if(A.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ae&&nl(N)===A.type){n(d,A.sibling),u=i(A,p.props),u.ref=or(d,A,p),u.return=d,d=u;break e}n(d,A);break}else t(d,A);A=A.sibling}p.type===Ne?(u=ln(p.props.children,d.mode,x,p.key),u.return=d,d=u):(x=bi(p.type,p.key,p.props,null,d.mode,x),x.ref=or(d,u,p),x.return=d,d=x)}return a(d);case Se:e:{for(A=p.key;u!==null;){if(u.key===A)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(d,u.sibling),u=i(u,p.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=xa(p,d.mode,x),u.return=d,d=u}return a(d);case Ae:return A=p._init,ce(d,u,A(p._payload),x)}if(Fn(p))return S(d,u,p,x);if(M(p))return T(d,u,p,x);Xr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(d,u.sibling),u=i(u,p),u.return=d,d=u):(n(d,u),u=va(p,d.mode,x),u.return=d,d=u),a(d)):n(d,u)}return ce}var Cn=rl(!0),il=rl(!1),Zr=Dt(null),ei=null,Sn=null,No=null;function Ao(){No=Sn=ei=null}function Ro(e){var t=Zr.current;Z(Zr),e._currentValue=t}function Mo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){ei=e,No=Sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Oe=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(No!==e)if(e={context:e,memoizedValue:t,next:null},Sn===null){if(ei===null)throw Error(m(308));Sn=e,ei.dependencies={lanes:0,firstContext:e}}else Sn=Sn.next=e;return t}var en=null;function Oo(e){en===null?en=[e]:en.push(e)}function ol(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Oo(t)):(n.next=i.next,i.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function Fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function al(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(B&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,bt(e,n)}return i=r.interleaved,i===null?(t.next=t,Oo(r)):(t.next=i.next,i.next=t),r.interleaved=t,bt(e,n)}function ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gi(e,n)}}function sl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ni(e,t,n,r){var i=e.updateQueue;$t=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,f=l.next;l.next=null,a===null?o=f:a.next=f,a=l;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==a&&(s===null?g.firstBaseUpdate=f:s.next=f,g.lastBaseUpdate=l))}if(o!==null){var _=i.baseState;a=0,g=f=l=null,s=o;do{var h=s.lane,k=s.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=e,T=s;switch(h=t,k=n,T.tag){case 1:if(S=T.payload,typeof S=="function"){_=S.call(k,_,h);break e}_=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=T.payload,h=typeof S=="function"?S.call(k,_,h):S,h==null)break e;_=C({},_,h);break e;case 2:$t=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else k={eventTime:k,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(f=g=k,l=_):g=g.next=k,a|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(g===null&&(l=_),i.baseState=l,i.firstBaseUpdate=f,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);rn|=a,e.lanes=a,e.memoizedState=_}}function ll(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(m(191,i));i.call(r)}}}var ar={},ft=Dt(ar),sr=Dt(ar),lr=Dt(ar);function tn(e){if(e===ar)throw Error(m(174));return e}function Do(e,t){switch(K(lr,t),K(sr,e),K(ft,ar),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Di(t,e)}Z(ft),K(ft,t)}function Pn(){Z(ft),Z(sr),Z(lr)}function ul(e){tn(lr.current);var t=tn(ft.current),n=Di(t,e.type);t!==n&&(K(sr,e),K(ft,n))}function Lo(e){sr.current===e&&(Z(ft),Z(sr))}var oe=Dt(0);function ri(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Io=[];function $o(){for(var e=0;e<Io.length;e++)Io[e]._workInProgressVersionPrimary=null;Io.length=0}var ii=we.ReactCurrentDispatcher,jo=we.ReactCurrentBatchConfig,nn=0,ae=null,fe=null,ye=null,oi=!1,ur=!1,cr=0,ed=0;function ke(){throw Error(m(321))}function Bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function zo(e,t,n,r,i,o){if(nn=o,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ii.current=e===null||e.memoizedState===null?id:od,e=n(r,i),ur){o=0;do{if(ur=!1,cr=0,25<=o)throw Error(m(301));o+=1,ye=fe=null,t.updateQueue=null,ii.current=ad,e=n(r,i)}while(ur)}if(ii.current=li,t=fe!==null&&fe.next!==null,nn=0,ye=fe=ae=null,oi=!1,t)throw Error(m(300));return e}function Uo(){var e=cr!==0;return cr=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ae.memoizedState=ye=e:ye=ye.next=e,ye}function Qe(){if(fe===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=ye===null?ae.memoizedState:ye.next;if(t!==null)ye=t,fe=e;else{if(e===null)throw Error(m(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ye===null?ae.memoizedState=ye=e:ye=ye.next=e}return ye}function dr(e,t){return typeof t=="function"?t(e):t}function Wo(e){var t=Qe(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,f=o;do{var g=f.lane;if((nn&g)===g)l!==null&&(l=l.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var _={lane:g,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};l===null?(s=l=_,a=r):l=l.next=_,ae.lanes|=g,rn|=g}f=f.next}while(f!==null&&f!==o);l===null?a=r:l.next=s,nt(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ae.lanes|=o,rn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ho(e){var t=Qe(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);nt(o,t.memoizedState)||(Oe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function cl(){}function dl(e,t){var n=ae,r=Qe(),i=t(),o=!nt(r.memoizedState,i);if(o&&(r.memoizedState=i,Oe=!0),r=r.queue,Vo(ml.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,pr(9,fl.bind(null,n,r,i,t),void 0,null),ge===null)throw Error(m(349));(nn&30)!==0||pl(n,t,i)}return i}function pl(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fl(e,t,n,r){t.value=n,t.getSnapshot=r,hl(t)&&yl(e)}function ml(e,t,n){return n(function(){hl(t)&&yl(e)})}function hl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function yl(e){var t=bt(e,1);t!==null&&st(t,e,1,-1)}function gl(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=rd.bind(null,ae,e),[t.memoizedState,e]}function pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _l(){return Qe().memoizedState}function ai(e,t,n,r){var i=mt();ae.flags|=e,i.memoizedState=pr(1|t,n,void 0,r===void 0?null:r)}function si(e,t,n,r){var i=Qe();r=r===void 0?null:r;var o=void 0;if(fe!==null){var a=fe.memoizedState;if(o=a.destroy,r!==null&&Bo(r,a.deps)){i.memoizedState=pr(t,n,o,r);return}}ae.flags|=e,i.memoizedState=pr(1|t,n,o,r)}function vl(e,t){return ai(8390656,8,e,t)}function Vo(e,t){return si(2048,8,e,t)}function xl(e,t){return si(4,2,e,t)}function wl(e,t){return si(4,4,e,t)}function bl(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kl(e,t,n){return n=n!=null?n.concat([e]):null,si(4,4,bl.bind(null,t,e),n)}function qo(){}function El(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cl(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sl(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n):(nt(n,t)||(n=ns(),ae.lanes|=n,rn|=n,e.baseState=!0),t)}function td(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=jo.transition;jo.transition={};try{e(!1),t()}finally{G=n,jo.transition=r}}function Tl(){return Qe().memoizedState}function nd(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pl(e))Nl(t,n);else if(n=ol(e,t,n,r),n!==null){var i=Pe();st(n,e,r,i),Al(n,t,r)}}function rd(e,t,n){var r=Wt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pl(e))Nl(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,nt(s,a)){var l=t.interleaved;l===null?(i.next=i,Oo(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ol(e,t,i,r),n!==null&&(i=Pe(),st(n,e,r,i),Al(n,t,r))}}function Pl(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Nl(e,t){ur=oi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Al(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gi(e,n)}}var li={readContext:Ye,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},id={readContext:Ye,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:vl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ai(4194308,4,bl.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ai(4194308,4,e,t)},useInsertionEffect:function(e,t){return ai(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=nd.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:gl,useDebugValue:qo,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=gl(!1),t=e[0];return e=td.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,i=mt();if(re){if(n===void 0)throw Error(m(407));n=n()}else{if(n=t(),ge===null)throw Error(m(349));(nn&30)!==0||pl(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,vl(ml.bind(null,r,o,e),[e]),r.flags|=2048,pr(9,fl.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=mt(),t=ge.identifierPrefix;if(re){var n=wt,r=xt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ed++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},od={readContext:Ye,useCallback:El,useContext:Ye,useEffect:Vo,useImperativeHandle:kl,useInsertionEffect:xl,useLayoutEffect:wl,useMemo:Cl,useReducer:Wo,useRef:_l,useState:function(){return Wo(dr)},useDebugValue:qo,useDeferredValue:function(e){var t=Qe();return Sl(t,fe.memoizedState,e)},useTransition:function(){var e=Wo(dr)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:cl,useSyncExternalStore:dl,useId:Tl,unstable_isNewReconciler:!1},ad={readContext:Ye,useCallback:El,useContext:Ye,useEffect:Vo,useImperativeHandle:kl,useInsertionEffect:xl,useLayoutEffect:wl,useMemo:Cl,useReducer:Ho,useRef:_l,useState:function(){return Ho(dr)},useDebugValue:qo,useDeferredValue:function(e){var t=Qe();return fe===null?t.memoizedState=e:Sl(t,fe.memoizedState,e)},useTransition:function(){var e=Ho(dr)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:cl,useSyncExternalStore:dl,useId:Tl,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps){t=C({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Go(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:C({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ui={isMounted:function(e){return(e=e._reactInternals)?Qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=Wt(e),o=kt(r,i);o.payload=t,n!=null&&(o.callback=n),t=jt(e,o,i),t!==null&&(st(t,e,i,r),ti(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=Wt(e),o=kt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=jt(e,o,i),t!==null&&(st(t,e,i,r),ti(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=Wt(e),i=kt(n,r);i.tag=2,t!=null&&(i.callback=t),t=jt(e,i,r),t!==null&&(st(t,e,r,n),ti(t,e,r))}};function Rl(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Xn(n,r)||!Xn(i,o):!0}function Ml(e,t,n){var r=!1,i=Lt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ye(o):(i=Me(t)?Jt:be.current,r=t.contextTypes,o=(r=r!=null)?wn(e,i):Lt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ui,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ol(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ui.enqueueReplaceState(t,t.state,null)}function Yo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Fo(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ye(o):(o=Me(t)?Jt:be.current,i.context=wn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Go(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ui.enqueueReplaceState(i,i.state,null),ni(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nn(e,t){try{var n="",r=t;do n+=U(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Qo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ko(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sd=typeof WeakMap=="function"?WeakMap:Map;function Fl(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yi||(yi=!0,da=r),Ko(e,t)},n}function Dl(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ko(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ko(e,t),typeof r!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ll(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sd;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=wd.bind(null,e,t,n),t.then(e,e))}function Il(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $l(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,jt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ld=we.ReactCurrentOwner,Oe=!1;function Te(e,t,n,r){t.child=e===null?il(t,null,n,r):Cn(t,e.child,n,r)}function jl(e,t,n,r,i){n=n.render;var o=t.ref;return Tn(t,i),r=zo(e,t,n,r,o,i),n=Uo(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(re&&n&&Eo(t),t.flags|=1,Te(e,t,r,i),t.child)}function Bl(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!_a(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,zl(e,t,o,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Xn,n(a,r)&&e.ref===t.ref)return Et(e,t,i)}return t.flags|=1,e=Vt(o,r),e.ref=t.ref,e.return=t,t.child=e}function zl(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Xn(o,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Oe=!0);else return t.lanes=e.lanes,Et(e,t,i)}return Jo(e,t,n,r,i)}function Ul(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Rn,Ue),Ue|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Rn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,K(Rn,Ue),Ue|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,K(Rn,Ue),Ue|=r;return Te(e,t,i,n),t.child}function Wl(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Jo(e,t,n,r,i){var o=Me(n)?Jt:be.current;return o=wn(t,o),Tn(t,i),n=zo(e,t,n,r,o,i),r=Uo(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(re&&r&&Eo(t),t.flags|=1,Te(e,t,n,i),t.child)}function Hl(e,t,n,r,i){if(Me(n)){var o=!0;Gr(t)}else o=!1;if(Tn(t,i),t.stateNode===null)di(e,t),Ml(t,n,r),Yo(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,f=n.contextType;typeof f=="object"&&f!==null?f=Ye(f):(f=Me(n)?Jt:be.current,f=wn(t,f));var g=n.getDerivedStateFromProps,_=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";_||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==f)&&Ol(t,a,r,f),$t=!1;var h=t.memoizedState;a.state=h,ni(t,r,a,i),l=t.memoizedState,s!==r||h!==l||Re.current||$t?(typeof g=="function"&&(Go(t,n,g,r),l=t.memoizedState),(s=$t||Rl(t,n,s,r,h,l,f))?(_||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=f,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,al(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:it(t.type,s),a.props=f,_=t.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ye(l):(l=Me(n)?Jt:be.current,l=wn(t,l));var k=n.getDerivedStateFromProps;(g=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==_||h!==l)&&Ol(t,a,r,l),$t=!1,h=t.memoizedState,a.state=h,ni(t,r,a,i);var S=t.memoizedState;s!==_||h!==S||Re.current||$t?(typeof k=="function"&&(Go(t,n,k,r),S=t.memoizedState),(f=$t||Rl(t,n,f,r,h,S,l)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,S,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,S,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),a.props=r,a.state=S,a.context=l,r=f):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Xo(e,t,n,r,o,i)}function Xo(e,t,n,r,i,o){Wl(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Qs(t,n,!1),Et(e,t,o);r=t.stateNode,ld.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Cn(t,e.child,null,o),t.child=Cn(t,null,s,o)):Te(e,t,s,o),t.memoizedState=r.state,i&&Qs(t,n,!0),t.child}function Vl(e){var t=e.stateNode;t.pendingContext?Gs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gs(e,t.context,!1),Do(e,t.containerInfo)}function ql(e,t,n,r,i){return En(),Po(i),t.flags|=256,Te(e,t,n,r),t.child}var Zo={dehydrated:null,treeContext:null,retryLane:0};function ea(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gl(e,t,n){var r=t.pendingProps,i=oe.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),K(oe,i&1),e===null)return To(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ki(a,r,0,null),e=ln(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ea(n),t.memoizedState=Zo,e):ta(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return ud(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Vt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Vt(s,o):(o=ln(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ea(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Zo,r}return o=e.child,e=o.sibling,r=Vt(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ta(e,t){return t=ki({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ci(e,t,n,r){return r!==null&&Po(r),Cn(t,e.child,null,n),e=ta(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ud(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Qo(Error(m(422))),ci(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ki({mode:"visible",children:r.children},i,0,null),o=ln(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Cn(t,e.child,null,a),t.child.memoizedState=ea(a),t.memoizedState=Zo,o);if((t.mode&1)===0)return ci(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(m(419)),r=Qo(o,r,void 0),ci(e,t,a,r)}if(s=(a&e.childLanes)!==0,Oe||s){if(r=ge,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|a))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,bt(e,i),st(r,e,i,-1))}return ga(),r=Qo(Error(m(421))),ci(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=bd.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=Ft(i.nextSibling),Be=t,re=!0,rt=null,e!==null&&(qe[Ge++]=xt,qe[Ge++]=wt,qe[Ge++]=Xt,xt=e.id,wt=e.overflow,Xt=t),t=ta(t,r.children),t.flags|=4096,t)}function Yl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Mo(e.return,t,n)}function na(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ql(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Te(e,t,r.children,n),r=oe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yl(e,n,t);else if(e.tag===19)Yl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(oe,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ri(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),na(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ri(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}na(t,!0,n,null,o);break;case"together":na(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function di(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cd(e,t,n){switch(t.tag){case 3:Vl(t),En();break;case 5:ul(t);break;case 1:Me(t.type)&&Gr(t);break;case 4:Do(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;K(Zr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(oe,oe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Gl(e,t,n):(K(oe,oe.current&1),e=Et(e,t,n),e!==null?e.sibling:null);K(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ql(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,Ul(e,t,n)}return Et(e,t,n)}var Kl,ra,Jl,Xl;Kl=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ra=function(){},Jl=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tn(ft.current);var o=null;switch(n){case"input":i=Ri(e,i),r=Ri(e,r),o=[];break;case"select":i=C({},i,{value:void 0}),r=C({},r,{value:void 0}),o=[];break;case"textarea":i=Fi(e,i),r=Fi(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hr)}Li(n,r);var a;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var s=i[f];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(F.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var l=r[f];if(s=i?.[f],r.hasOwnProperty(f)&&l!==s&&(l!=null||s!=null))if(f==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(f,n)),n=l;else f==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(f,l)):f==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(f,""+l):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(F.hasOwnProperty(f)?(l!=null&&f==="onScroll"&&X("scroll",e),o||s===l||(o=[])):(o=o||[]).push(f,l))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}},Xl=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dd(e,t,n){var r=t.pendingProps;switch(Co(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Me(t.type)&&qr(),Ee(t),null;case 3:return r=t.stateNode,Pn(),Z(Re),Z(be),$o(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Jr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rt!==null&&(ma(rt),rt=null))),ra(e,t),Ee(t),null;case 5:Lo(t);var i=tn(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)Jl(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(m(166));return Ee(t),null}if(e=tn(ft.current),Jr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[pt]=t,r[rr]=o,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<er.length;i++)X(er[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Ma(r,o),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},X("invalid",r);break;case"textarea":Da(r,o),X("invalid",r)}Li(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Wr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Wr(r.textContent,s,e),i=["children",""+s]):F.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&X("scroll",r)}switch(n){case"input":xr(r),Fa(r,o,!0);break;case"textarea":xr(r),Ia(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Hr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$a(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[pt]=t,e[rr]=r,Kl(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ii(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<er.length;i++)X(er[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":Ma(e,r),i=Ri(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=C({},r,{value:void 0}),X("invalid",e);break;case"textarea":Da(e,r),i=Fi(e,r),X("invalid",e);break;default:i=r}Li(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?za(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ja(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Dn(e,l):typeof l=="number"&&Dn(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(F.hasOwnProperty(o)?l!=null&&o==="onScroll"&&X("scroll",e):l!=null&&Xe(e,o,l,a))}switch(n){case"input":xr(e),Fa(e,r,!1);break;case"textarea":xr(e),Ia(e);break;case"option":r.value!=null&&e.setAttribute("value",""+q(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?un(e,!!r.multiple,o,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Hr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)Xl(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(m(166));if(n=tn(lr.current),tn(ft.current),Jr(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(o=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:Wr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return Ee(t),null;case 13:if(Z(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&ze!==null&&(t.mode&1)!==0&&(t.flags&128)===0)tl(),En(),t.flags|=98560,o=!1;else if(o=Jr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(m(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(m(317));o[pt]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),o=!1}else rt!==null&&(ma(rt),rt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(oe.current&1)!==0?me===0&&(me=3):ga())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return Pn(),ra(e,t),e===null&&tr(t.stateNode.containerInfo),Ee(t),null;case 10:return Ro(t.type._context),Ee(t),null;case 17:return Me(t.type)&&qr(),Ee(t),null;case 19:if(Z(oe),o=t.memoizedState,o===null)return Ee(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)fr(o,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=ri(e),a!==null){for(t.flags|=128,fr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(oe,oe.current&1|2),t.child}e=e.sibling}o.tail!==null&&ue()>Mn&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ri(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!re)return Ee(t),null}else 2*ue()-o.renderingStartTime>Mn&&n!==1073741824&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ue(),t.sibling=null,n=oe.current,K(oe,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return ya(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ue&1073741824)!==0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(m(156,t.tag))}function pd(e,t){switch(Co(t),t.tag){case 1:return Me(t.type)&&qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(),Z(Re),Z(be),$o(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Lo(t),null;case 13:if(Z(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(oe),null;case 4:return Pn(),null;case 10:return Ro(t.type._context),null;case 22:case 23:return ya(),null;case 24:return null;default:return null}}var pi=!1,Ce=!1,fd=typeof WeakSet=="function"?WeakSet:Set,E=null;function An(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function ia(e,t,n){try{n()}catch(r){le(e,t,r)}}var Zl=!1;function md(e,t){if(yo=Mr,e=Rs(),so(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,f=0,g=0,_=e,h=null;t:for(;;){for(var k;_!==n||i!==0&&_.nodeType!==3||(s=a+i),_!==o||r!==0&&_.nodeType!==3||(l=a+r),_.nodeType===3&&(a+=_.nodeValue.length),(k=_.firstChild)!==null;)h=_,_=k;for(;;){if(_===e)break t;if(h===n&&++f===i&&(s=a),h===o&&++g===r&&(l=a),(k=_.nextSibling)!==null)break;_=h,h=_.parentNode}_=k}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(go={focusedElem:e,selectionRange:n},Mr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var S=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var T=S.memoizedProps,ce=S.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?T:it(t.type,T),ce);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163))}}catch(x){le(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return S=Zl,Zl=!1,S}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ia(t,n,o)}i=i.next}while(i!==r)}}function fi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function oa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eu(e){var t=e.alternate;t!==null&&(e.alternate=null,eu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[rr],delete t[wo],delete t[Kc],delete t[Jc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tu(e){return e.tag===5||e.tag===3||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function aa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hr));else if(r!==4&&(e=e.child,e!==null))for(aa(e,t,n),e=e.sibling;e!==null;)aa(e,t,n),e=e.sibling}function sa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sa(e,t,n),e=e.sibling;e!==null;)sa(e,t,n),e=e.sibling}var ve=null,ot=!1;function Bt(e,t,n){for(n=n.child;n!==null;)ru(e,t,n),n=n.sibling}function ru(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Sr,n)}catch{}switch(n.tag){case 5:Ce||An(n,t);case 6:var r=ve,i=ot;ve=null,Bt(e,t,n),ve=r,ot=i,ve!==null&&(ot?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(ot?(e=ve,n=n.stateNode,e.nodeType===8?xo(e.parentNode,n):e.nodeType===1&&xo(e,n),qn(e)):xo(ve,n.stateNode));break;case 4:r=ve,i=ot,ve=n.stateNode.containerInfo,ot=!0,Bt(e,t,n),ve=r,ot=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&((o&2)!==0||(o&4)!==0)&&ia(n,t,a),i=i.next}while(i!==r)}Bt(e,t,n);break;case 1:if(!Ce&&(An(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){le(n,t,s)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Bt(e,t,n),Ce=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fd),t.forEach(function(r){var i=kd.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ve=s.stateNode,ot=!1;break e;case 3:ve=s.stateNode.containerInfo,ot=!0;break e;case 4:ve=s.stateNode.containerInfo,ot=!0;break e}s=s.return}if(ve===null)throw Error(m(160));ru(o,a,i),ve=null,ot=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(f){le(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ou(t,e),t=t.sibling}function ou(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),ht(e),r&4){try{mr(3,e,e.return),fi(3,e)}catch(T){le(e,e.return,T)}try{mr(5,e,e.return)}catch(T){le(e,e.return,T)}}break;case 1:at(t,e),ht(e),r&512&&n!==null&&An(n,n.return);break;case 5:if(at(t,e),ht(e),r&512&&n!==null&&An(n,n.return),e.flags&32){var i=e.stateNode;try{Dn(i,"")}catch(T){le(e,e.return,T)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Oa(i,o),Ii(s,a);var f=Ii(s,o);for(a=0;a<l.length;a+=2){var g=l[a],_=l[a+1];g==="style"?za(i,_):g==="dangerouslySetInnerHTML"?ja(i,_):g==="children"?Dn(i,_):Xe(i,g,_,f)}switch(s){case"input":Mi(i,o);break;case"textarea":La(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?un(i,!!o.multiple,k,!1):h!==!!o.multiple&&(o.defaultValue!=null?un(i,!!o.multiple,o.defaultValue,!0):un(i,!!o.multiple,o.multiple?[]:"",!1))}i[rr]=o}catch(T){le(e,e.return,T)}}break;case 6:if(at(t,e),ht(e),r&4){if(e.stateNode===null)throw Error(m(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(T){le(e,e.return,T)}}break;case 3:if(at(t,e),ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(T){le(e,e.return,T)}break;case 4:at(t,e),ht(e);break;case 13:at(t,e),ht(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ca=ue())),r&4&&iu(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(f=Ce)||g,at(t,e),Ce=f):at(t,e),ht(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!g&&(e.mode&1)!==0)for(E=e,g=e.child;g!==null;){for(_=E=g;E!==null;){switch(h=E,k=h.child,h.tag){case 0:case 11:case 14:case 15:mr(4,h,h.return);break;case 1:An(h,h.return);var S=h.stateNode;if(typeof S.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(T){le(r,n,T)}}break;case 5:An(h,h.return);break;case 22:if(h.memoizedState!==null){lu(_);continue}}k!==null?(k.return=h,E=k):lu(_)}g=g.sibling}e:for(g=null,_=e;;){if(_.tag===5){if(g===null){g=_;try{i=_.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=_.stateNode,l=_.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Ba("display",a))}catch(T){le(e,e.return,T)}}}else if(_.tag===6){if(g===null)try{_.stateNode.nodeValue=f?"":_.memoizedProps}catch(T){le(e,e.return,T)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===e)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break e;for(;_.sibling===null;){if(_.return===null||_.return===e)break e;g===_&&(g=null),_=_.return}g===_&&(g=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:at(t,e),ht(e),r&4&&iu(e);break;case 21:break;default:at(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tu(n)){var r=n;break e}n=n.return}throw Error(m(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Dn(i,""),r.flags&=-33);var o=nu(e);sa(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=nu(e);aa(e,s,a);break;default:throw Error(m(161))}}catch(l){le(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hd(e,t,n){E=e,au(e)}function au(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||pi;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ce;s=pi;var f=Ce;if(pi=a,(Ce=l)&&!f)for(E=i;E!==null;)a=E,l=a.child,a.tag===22&&a.memoizedState!==null?uu(i):l!==null?(l.return=a,E=l):uu(i);for(;o!==null;)E=o,au(o),o=o.sibling;E=i,pi=s,Ce=f}su(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,E=o):su(e)}}function su(e){for(;E!==null;){var t=E;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ce||fi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ll(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ll(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var g=f.memoizedState;if(g!==null){var _=g.dehydrated;_!==null&&qn(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163))}Ce||t.flags&512&&oa(t)}catch(h){le(t,t.return,h)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function lu(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function uu(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fi(4,t)}catch(l){le(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){le(t,i,l)}}var o=t.return;try{oa(t)}catch(l){le(t,o,l)}break;case 5:var a=t.return;try{oa(t)}catch(l){le(t,a,l)}}}catch(l){le(t,t.return,l)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var yd=Math.ceil,mi=we.ReactCurrentDispatcher,la=we.ReactCurrentOwner,Ke=we.ReactCurrentBatchConfig,B=0,ge=null,de=null,xe=0,Ue=0,Rn=Dt(0),me=0,hr=null,rn=0,hi=0,ua=0,yr=null,Fe=null,ca=0,Mn=1/0,Ct=null,yi=!1,da=null,zt=null,gi=!1,Ut=null,_i=0,gr=0,pa=null,vi=-1,xi=0;function Pe(){return(B&6)!==0?ue():vi!==-1?vi:vi=ue()}function Wt(e){return(e.mode&1)===0?1:(B&2)!==0&&xe!==0?xe&-xe:Zc.transition!==null?(xi===0&&(xi=ns()),xi):(e=G,e!==0||(e=window.event,e=e===void 0?16:ds(e.type)),e)}function st(e,t,n,r){if(50<gr)throw gr=0,pa=null,Error(m(185));zn(e,n,r),((B&2)===0||e!==ge)&&(e===ge&&((B&2)===0&&(hi|=n),me===4&&Ht(e,xe)),De(e,r),n===1&&B===0&&(t.mode&1)===0&&(Mn=ue()+500,Yr&&It()))}function De(e,t){var n=e.callbackNode;Zu(e,t);var r=Nr(e,e===ge?xe:0);if(r===0)n!==null&&Za(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Za(n),t===1)e.tag===0?Xc(du.bind(null,e)):Ks(du.bind(null,e)),Yc(function(){(B&6)===0&&It()}),n=null;else{switch(rs(r)){case 1:n=Hi;break;case 4:n=es;break;case 16:n=Cr;break;case 536870912:n=ts;break;default:n=Cr}n=vu(n,cu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cu(e,t){if(vi=-1,xi=0,(B&6)!==0)throw Error(m(327));var n=e.callbackNode;if(On()&&e.callbackNode!==n)return null;var r=Nr(e,e===ge?xe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=wi(e,r);else{t=r;var i=B;B|=2;var o=fu();(ge!==e||xe!==t)&&(Ct=null,Mn=ue()+500,an(e,t));do try{vd();break}catch(s){pu(e,s)}while(!0);Ao(),mi.current=o,B=i,de!==null?t=0:(ge=null,xe=0,t=me)}if(t!==0){if(t===2&&(i=Vi(e),i!==0&&(r=i,t=fa(e,i))),t===1)throw n=hr,an(e,0),Ht(e,r),De(e,ue()),n;if(t===6)Ht(e,r);else{if(i=e.current.alternate,(r&30)===0&&!gd(i)&&(t=wi(e,r),t===2&&(o=Vi(e),o!==0&&(r=o,t=fa(e,o))),t===1))throw n=hr,an(e,0),Ht(e,r),De(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(m(345));case 2:sn(e,Fe,Ct);break;case 3:if(Ht(e,r),(r&130023424)===r&&(t=ca+500-ue(),10<t)){if(Nr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vo(sn.bind(null,e,Fe,Ct),t);break}sn(e,Fe,Ct);break;case 4:if(Ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-tt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yd(r/1960))-r,10<r){e.timeoutHandle=vo(sn.bind(null,e,Fe,Ct),r);break}sn(e,Fe,Ct);break;case 5:sn(e,Fe,Ct);break;default:throw Error(m(329))}}}return De(e,ue()),e.callbackNode===n?cu.bind(null,e):null}function fa(e,t){var n=yr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=wi(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&ma(t)),e}function ma(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function gd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!nt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ht(e,t){for(t&=~ua,t&=~hi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function du(e){if((B&6)!==0)throw Error(m(327));On();var t=Nr(e,0);if((t&1)===0)return De(e,ue()),null;var n=wi(e,t);if(e.tag!==0&&n===2){var r=Vi(e);r!==0&&(t=r,n=fa(e,r))}if(n===1)throw n=hr,an(e,0),Ht(e,t),De(e,ue()),n;if(n===6)throw Error(m(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,Fe,Ct),De(e,ue()),null}function ha(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(Mn=ue()+500,Yr&&It())}}function on(e){Ut!==null&&Ut.tag===0&&(B&6)===0&&On();var t=B;B|=1;var n=Ke.transition,r=G;try{if(Ke.transition=null,G=1,e)return e()}finally{G=r,Ke.transition=n,B=t,(B&6)===0&&It()}}function ya(){Ue=Rn.current,Z(Rn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gc(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Co(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qr();break;case 3:Pn(),Z(Re),Z(be),$o();break;case 5:Lo(r);break;case 4:Pn();break;case 13:Z(oe);break;case 19:Z(oe);break;case 10:Ro(r.type._context);break;case 22:case 23:ya()}n=n.return}if(ge=e,de=e=Vt(e.current,null),xe=Ue=t,me=0,hr=null,ua=hi=rn=0,Fe=yr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}en=null}return e}function pu(e,t){do{var n=de;try{if(Ao(),ii.current=li,oi){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oi=!1}if(nn=0,ye=fe=ae=null,ur=!1,cr=0,la.current=null,n===null||n.return===null){me=1,hr=t,de=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=xe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=l,g=s,_=g.tag;if((g.mode&1)===0&&(_===0||_===11||_===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var k=Il(a);if(k!==null){k.flags&=-257,$l(k,a,s,o,t),k.mode&1&&Ll(o,f,t),t=k,l=f;var S=t.updateQueue;if(S===null){var T=new Set;T.add(l),t.updateQueue=T}else S.add(l);break e}else{if((t&1)===0){Ll(o,f,t),ga();break e}l=Error(m(426))}}else if(re&&s.mode&1){var ce=Il(a);if(ce!==null){(ce.flags&65536)===0&&(ce.flags|=256),$l(ce,a,s,o,t),Po(Nn(l,s));break e}}o=l=Nn(l,s),me!==4&&(me=2),yr===null?yr=[o]:yr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Fl(o,l,t);sl(o,d);break e;case 1:s=l;var u=o.type,p=o.stateNode;if((o.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(zt===null||!zt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Dl(o,s,t);sl(o,x);break e}}o=o.return}while(o!==null)}hu(n)}catch(N){t=N,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function fu(){var e=mi.current;return mi.current=li,e===null?li:e}function ga(){(me===0||me===3||me===2)&&(me=4),ge===null||(rn&268435455)===0&&(hi&268435455)===0||Ht(ge,xe)}function wi(e,t){var n=B;B|=2;var r=fu();(ge!==e||xe!==t)&&(Ct=null,an(e,t));do try{_d();break}catch(i){pu(e,i)}while(!0);if(Ao(),B=n,mi.current=r,de!==null)throw Error(m(261));return ge=null,xe=0,me}function _d(){for(;de!==null;)mu(de)}function vd(){for(;de!==null&&!Hu();)mu(de)}function mu(e){var t=_u(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?hu(e):de=t,la.current=null}function hu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=dd(n,t,Ue),n!==null){de=n;return}}else{if(n=pd(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,de=null;return}}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);me===0&&(me=5)}function sn(e,t,n){var r=G,i=Ke.transition;try{Ke.transition=null,G=1,xd(e,t,n,r)}finally{Ke.transition=i,G=r}return null}function xd(e,t,n,r){do On();while(Ut!==null);if((B&6)!==0)throw Error(m(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(m(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ec(e,o),e===ge&&(de=ge=null,xe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||gi||(gi=!0,vu(Cr,function(){return On(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Ke.transition,Ke.transition=null;var a=G;G=1;var s=B;B|=4,la.current=null,md(e,n),ou(n,e),Bc(go),Mr=!!yo,go=yo=null,e.current=n,hd(n),Vu(),B=s,G=a,Ke.transition=o}else e.current=n;if(gi&&(gi=!1,Ut=e,_i=i),o=e.pendingLanes,o===0&&(zt=null),Yu(n.stateNode),De(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yi)throw yi=!1,e=da,da=null,e;return(_i&1)!==0&&e.tag!==0&&On(),o=e.pendingLanes,(o&1)!==0?e===pa?gr++:(gr=0,pa=e):gr=0,It(),null}function On(){if(Ut!==null){var e=rs(_i),t=Ke.transition,n=G;try{if(Ke.transition=null,G=16>e?16:e,Ut===null)var r=!1;else{if(e=Ut,Ut=null,_i=0,(B&6)!==0)throw Error(m(331));var i=B;for(B|=4,E=e.current;E!==null;){var o=E,a=o.child;if((E.flags&16)!==0){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var f=s[l];for(E=f;E!==null;){var g=E;switch(g.tag){case 0:case 11:case 15:mr(8,g,o)}var _=g.child;if(_!==null)_.return=g,E=_;else for(;E!==null;){g=E;var h=g.sibling,k=g.return;if(eu(g),g===f){E=null;break}if(h!==null){h.return=k,E=h;break}E=k}}}var S=o.alternate;if(S!==null){var T=S.child;if(T!==null){S.child=null;do{var ce=T.sibling;T.sibling=null,T=ce}while(T!==null)}}E=o}}if((o.subtreeFlags&2064)!==0&&a!==null)a.return=o,E=a;else e:for(;E!==null;){if(o=E,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:mr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,E=d;break e}E=o.return}}var u=e.current;for(E=u;E!==null;){a=E;var p=a.child;if((a.subtreeFlags&2064)!==0&&p!==null)p.return=a,E=p;else e:for(a=u;E!==null;){if(s=E,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:fi(9,s)}}catch(N){le(s,s.return,N)}if(s===a){E=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,E=x;break e}E=s.return}}if(B=i,It(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Sr,e)}catch{}r=!0}return r}finally{G=n,Ke.transition=t}}return!1}function yu(e,t,n){t=Nn(n,t),t=Fl(e,t,1),e=jt(e,t,1),t=Pe(),e!==null&&(zn(e,1,t),De(e,t))}function le(e,t,n){if(e.tag===3)yu(e,e,n);else for(;t!==null;){if(t.tag===3){yu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zt===null||!zt.has(r))){e=Nn(n,e),e=Dl(t,e,1),t=jt(t,e,1),e=Pe(),t!==null&&(zn(t,1,e),De(t,e));break}}t=t.return}}function wd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(xe&n)===n&&(me===4||me===3&&(xe&130023424)===xe&&500>ue()-ca?an(e,0):ua|=n),De(e,t)}function gu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Pr,Pr<<=1,(Pr&130023424)===0&&(Pr=4194304)));var n=Pe();e=bt(e,t),e!==null&&(zn(e,t,n),De(e,n))}function bd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gu(e,n)}function kd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(m(314))}r!==null&&r.delete(t),gu(e,n)}var _u;_u=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Oe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Oe=!1,cd(e,t,n);Oe=(e.flags&131072)!==0}else Oe=!1,re&&(t.flags&1048576)!==0&&Js(t,Kr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;di(e,t),e=t.pendingProps;var i=wn(t,be.current);Tn(t,n),i=zo(null,t,r,e,i,n);var o=Uo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(o=!0,Gr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fo(t),i.updater=ui,t.stateNode=i,i._reactInternals=t,Yo(t,r,e,n),t=Xo(null,t,r,!0,o,n)):(t.tag=0,re&&o&&Eo(t),Te(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(di(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Cd(r),e=it(r,e),i){case 0:t=Jo(null,t,r,e,n);break e;case 1:t=Hl(null,t,r,e,n);break e;case 11:t=jl(null,t,r,e,n);break e;case 14:t=Bl(null,t,r,it(r.type,e),n);break e}throw Error(m(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Jo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Hl(e,t,r,i,n);case 3:e:{if(Vl(t),e===null)throw Error(m(387));r=t.pendingProps,o=t.memoizedState,i=o.element,al(e,t),ni(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Nn(Error(m(423)),t),t=ql(e,t,r,n,i);break e}else if(r!==i){i=Nn(Error(m(424)),t),t=ql(e,t,r,n,i);break e}else for(ze=Ft(t.stateNode.containerInfo.firstChild),Be=t,re=!0,rt=null,n=il(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===i){t=Et(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return ul(t),e===null&&To(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,_o(r,i)?a=null:o!==null&&_o(r,o)&&(t.flags|=32),Wl(e,t),Te(e,t,a,n),t.child;case 6:return e===null&&To(t),null;case 13:return Gl(e,t,n);case 4:return Do(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cn(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),jl(e,t,r,i,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,K(Zr,r._currentValue),r._currentValue=a,o!==null)if(nt(o.value,a)){if(o.children===i.children&&!Re.current){t=Et(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=kt(-1,n&-n),l.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var g=f.pending;g===null?l.next=l:(l.next=g.next,g.next=l),f.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Mo(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(m(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Mo(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Te(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Tn(t,n),i=Ye(i),r=r(i),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,i=it(r,t.pendingProps),i=it(r.type,i),Bl(e,t,r,i,n);case 15:return zl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),di(e,t),t.tag=1,Me(r)?(e=!0,Gr(t)):e=!1,Tn(t,n),Ml(t,r,i),Yo(t,r,i,n),Xo(null,t,r,!0,e,n);case 19:return Ql(e,t,n);case 22:return Ul(e,t,n)}throw Error(m(156,t.tag))};function vu(e,t){return Xa(e,t)}function Ed(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,r){return new Ed(e,t,n,r)}function _a(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cd(e){if(typeof e=="function")return _a(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ut)return 11;if(e===ct)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bi(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")_a(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ne:return ln(n.children,i,o,t);case Ve:a=8,i|=8;break;case Tt:return e=Je(12,n,t,i|2),e.elementType=Tt,e.lanes=o,e;case Ie:return e=Je(13,n,t,i),e.elementType=Ie,e.lanes=o,e;case et:return e=Je(19,n,t,i),e.elementType=et,e.lanes=o,e;case se:return ki(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gt:a=10;break e;case Yt:a=9;break e;case ut:a=11;break e;case ct:a=14;break e;case Ae:a=16,r=null;break e}throw Error(m(130,e==null?e:typeof e,""))}return t=Je(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ln(e,t,n,r){return e=Je(7,e,r,t),e.lanes=n,e}function ki(e,t,n,r){return e=Je(22,e,r,t),e.elementType=se,e.lanes=n,e.stateNode={isHidden:!1},e}function va(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function xa(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sd(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qi(0),this.expirationTimes=qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wa(e,t,n,r,i,o,a,s,l){return e=new Sd(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Je(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fo(o),e}function Td(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xu(e){if(!e)return Lt;e=e._reactInternals;e:{if(Qt(e)!==e||e.tag!==1)throw Error(m(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(m(171))}if(e.tag===1){var n=e.type;if(Me(n))return Ys(e,n,t)}return t}function wu(e,t,n,r,i,o,a,s,l){return e=wa(n,r,!0,e,i,o,a,s,l),e.context=xu(null),n=e.current,r=Pe(),i=Wt(n),o=kt(r,i),o.callback=t??null,jt(n,o,i),e.current.lanes=i,zn(e,i,r),De(e,r),e}function Ei(e,t,n,r){var i=t.current,o=Pe(),a=Wt(i);return n=xu(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jt(i,t,a),e!==null&&(st(e,i,a,o),ti(e,i,a)),a}function Ci(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ba(e,t){bu(e,t),(e=e.alternate)&&bu(e,t)}function Pd(){return null}var ku=typeof reportError=="function"?reportError:function(e){console.error(e)};function ka(e){this._internalRoot=e}Si.prototype.render=ka.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));Ei(e,t,null,null)},Si.prototype.unmount=ka.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){Ei(null,e,null,null)}),t[_t]=null}};function Si(e){this._internalRoot=e}Si.prototype.unstable_scheduleHydration=function(e){if(e){var t=as();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&us(e)}};function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ti(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eu(){}function Nd(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=Ci(a);o.call(f)}}var a=wu(t,r,e,0,null,!1,!1,"",Eu);return e._reactRootContainer=a,e[_t]=a.current,tr(e.nodeType===8?e.parentNode:e),on(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var f=Ci(l);s.call(f)}}var l=wa(e,0,!1,null,null,!1,!1,"",Eu);return e._reactRootContainer=l,e[_t]=l.current,tr(e.nodeType===8?e.parentNode:e),on(function(){Ei(t,l,n,r)}),l}function Pi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Ci(a);s.call(l)}}Ei(t,a,e,i)}else a=Nd(n,t,e,i,r);return Ci(a)}is=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bn(t.pendingLanes);n!==0&&(Gi(t,n|1),De(t,ue()),(B&6)===0&&(Mn=ue()+500,It()))}break;case 13:on(function(){var r=bt(e,1);if(r!==null){var i=Pe();st(r,e,1,i)}}),ba(e,1)}},Yi=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=Pe();st(t,e,134217728,n)}ba(e,134217728)}},os=function(e){if(e.tag===13){var t=Wt(e),n=bt(e,t);if(n!==null){var r=Pe();st(n,e,t,r)}ba(e,t)}},as=function(){return G},ss=function(e,t){var n=G;try{return G=e,t()}finally{G=n}},Bi=function(e,t,n){switch(t){case"input":if(Mi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Vr(r);if(!i)throw Error(m(90));Ra(r),Mi(r,i)}}}break;case"textarea":La(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}},Va=ha,qa=on;var Ad={usingClientEntryPoint:!1,Events:[ir,vn,Vr,Wa,Ha,ha]},_r={findFiberByHostInstance:Kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rd={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ka(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||Pd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ni.isDisabled&&Ni.supportsFiber)try{Sr=Ni.inject(Rd),dt=Ni}catch{}}return Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ad,Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ea(t))throw Error(m(200));return Td(e,t,null,n)},Le.createRoot=function(e,t){if(!Ea(e))throw Error(m(299));var n=!1,r="",i=ku;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=wa(e,1,!1,null,null,n,!1,r,i),e[_t]=t.current,tr(e.nodeType===8?e.parentNode:e),new ka(t)},Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=Ka(t),e=e===null?null:e.stateNode,e},Le.flushSync=function(e){return on(e)},Le.hydrate=function(e,t,n){if(!Ti(t))throw Error(m(200));return Pi(null,e,t,!0,n)},Le.hydrateRoot=function(e,t,n){if(!Ea(e))throw Error(m(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=ku;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=wu(t,null,e,1,n??null,i,!1,o,a),e[_t]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Si(t)},Le.render=function(e,t,n){if(!Ti(t))throw Error(m(200));return Pi(null,e,t,!1,n)},Le.unmountComponentAtNode=function(e){if(!Ti(e))throw Error(m(40));return e._reactRootContainer?(on(function(){Pi(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1},Le.unstable_batchedUpdates=ha,Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ti(n))throw Error(m(200));if(e==null||e._reactInternals===void 0)throw Error(m(38));return Pi(e,t,n,!1,r)},Le.version="18.3.1-next-f1338f8080-20240426",Le}var Mu;function jd(){if(Mu)return Ta.exports;Mu=1;function b(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b)}catch(P){console.error(P)}}return b(),Ta.exports=$d(),Ta.exports}var Ou;function Bd(){if(Ou)return Ai;Ou=1;var b=jd();return Ai.createRoot=b.createRoot,Ai.hydrateRoot=b.hydrateRoot,Ai}var zd=Bd(),Gt=Aa();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=b=>b.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wd=b=>b.replace(/^([A-Z])|[\s-_]+(\w)/g,(P,m,V)=>V?V.toUpperCase():m.toLowerCase()),Fu=b=>{const P=Wd(b);return P.charAt(0).toUpperCase()+P.slice(1)},Lu=(...b)=>b.filter((P,m,V)=>!!P&&P.trim()!==""&&V.indexOf(P)===m).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=Gt.forwardRef(({color:b="currentColor",size:P=24,strokeWidth:m=2,absoluteStrokeWidth:V,className:F="",children:D,iconNode:z,...J},L)=>Gt.createElement("svg",{ref:L,...Hd,width:P,height:P,stroke:b,strokeWidth:V?Number(m)*24/Number(P):m,className:Lu("lucide",F),...J},[...z.map(([pe,he])=>Gt.createElement(pe,he)),...Array.isArray(D)?D:[D]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=(b,P)=>{const m=Gt.forwardRef(({className:V,...F},D)=>Gt.createElement(Vd,{ref:D,iconNode:P,className:Lu(`lucide-${Ud(Fu(b))}`,`lucide-${b}`,V),...F}));return m.displayName=Fu(b),m};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Du=St("book-open",qd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Yd=St("check",Gd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Kd=St("chevron-down",Qd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Xd=St("chevron-right",Jd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],ep=St("code-xml",Zd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],np=St("copy",tp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],ip=St("graduation-cap",rp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],ap=St("lightbulb",op);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],lp=St("target",sp),up=[{id:"phase1",title:"Phase 1: Python Fundamentals",topics:[{id:"intro-python",title:"Introduction to Python"},{id:"python-basics",title:"Python Basics"},{id:"operators",title:"Operators"},{id:"control-flow",title:"Control Flow"}]},{id:"phase2",title:"Phase 2: Core Python",topics:[{id:"data-structures",title:"Data Structures"},{id:"functions",title:"Functions"},{id:"modules",title:"Modules & Packages"}]},{id:"phase3",title:"Phase 3: OOP",topics:[{id:"oop-concepts",title:"OOP Concepts"},{id:"oop-principles",title:"OOP Principles"},{id:"advanced-oop",title:"Advanced OOP"}]},{id:"phase4",title:"Phase 4: Advanced Python",topics:[{id:"exception-handling",title:"Exception Handling"},{id:"file-handling",title:"File Handling"},{id:"regex",title:"Regular Expressions"},{id:"memory-management",title:"Memory Management"}]},{id:"phase5",title:"Phase 5: OS and System",topics:[{id:"os-system",title:"OS & System Programming"}]},{id:"phase6",title:"Phase 6: Databases",topics:[{id:"sql-fundamentals",title:"SQL Fundamentals"},{id:"python-databases",title:"Python with Databases"}]}];function cp({selectedTopic:b,onSelectTopic:P}){const[m,V]=Gt.useState(["phase1"]),F=D=>{V(z=>z.includes(D)?z.filter(J=>J!==D):[...z,D])};return v.jsx("aside",{className:"w-[320px] bg-slate-900 border-r border-slate-700 h-[calc(100vh-89px)] overflow-y-auto sticky top-[89px]",children:v.jsxs("div",{className:"p-5",children:[v.jsxs("div",{className:"mb-5",children:[v.jsx("h2",{className:"text-xs font-semibold text-blue-300 uppercase tracking-wider mb-2",children:"Course Curriculum"}),v.jsx("div",{className:"h-1 w-14 bg-blue-500 rounded-full"})]}),v.jsx("div",{className:"space-y-3",children:up.map(D=>v.jsxs("div",{className:"group",children:[v.jsxs("button",{onClick:()=>F(D.id),className:"w-full flex items-center justify-between p-3 rounded-xl bg-slate-800 border border-slate-700",children:[v.jsx("span",{className:"text-sm font-semibold text-slate-100",children:D.title}),m.includes(D.id)?v.jsx(Kd,{size:18,className:"text-blue-400"}):v.jsx(Xd,{size:18,className:"text-slate-400"})]}),m.includes(D.id)&&v.jsx("div",{className:"mt-2 space-y-1.5 pl-2",children:D.topics.map(z=>v.jsx("button",{onClick:()=>P(z.id),className:`w-full text-left px-4 py-2.5 rounded-lg text-sm ${b===z.id?"bg-blue-600 text-white font-semibold":"text-slate-300 bg-slate-800"}`,children:v.jsx("span",{className:"block",children:z.title})},z.id))})]},D.id))})]})})}function dp({code:b,language:P="python",title:m}){const[V,F]=Gt.useState(!1),D=async()=>{try{navigator.clipboard&&navigator.clipboard.writeText?(await navigator.clipboard.writeText(b),F(!0),setTimeout(()=>F(!1),2e3)):z(b)}catch{z(b)}},z=J=>{const L=document.createElement("textarea");L.value=J,L.style.position="fixed",L.style.top="0",L.style.left="0",L.style.opacity="0",document.body.appendChild(L),L.focus(),L.select();try{document.execCommand("copy"),F(!0),setTimeout(()=>F(!1),2e3)}catch(pe){console.error("Failed to copy text:",pe)}document.body.removeChild(L)};return v.jsxs("div",{className:"my-6",children:[v.jsx("div",{className:"mb-2.5",children:v.jsxs("h4",{className:"text-base font-semibold text-blue-300 flex items-center gap-2",children:[v.jsx("span",{className:"text-blue-400",children:"📝"}),m||"Program Example"]})}),v.jsxs("div",{className:"relative rounded-xl overflow-hidden bg-slate-900 border border-slate-700",children:[v.jsx("div",{className:"absolute top-0 left-0 right-0 h-9 bg-slate-800"}),v.jsxs("div",{className:"absolute top-3.5 left-4 flex gap-2",children:[v.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500"}),v.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),v.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500"})]}),v.jsxs("div",{className:"flex items-center justify-between px-5 py-3 pt-11 bg-slate-800 border-b border-slate-700",children:[v.jsxs("div",{className:"flex items-center gap-2.5",children:[v.jsx("span",{className:"w-2 h-2 bg-blue-400 rounded-full"}),v.jsx("span",{className:"text-xs font-bold text-blue-400 uppercase tracking-widest",children:P})]}),v.jsx("button",{onClick:D,className:"flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-xs font-semibold",children:V?v.jsxs(v.Fragment,{children:[v.jsx(Yd,{size:16,className:"text-white",strokeWidth:2.5}),v.jsx("span",{className:"text-white",children:"Copied!"})]}):v.jsxs(v.Fragment,{children:[v.jsx(np,{size:16,className:"text-white",strokeWidth:2.5}),v.jsx("span",{className:"text-white",children:"Copy Code"})]})})]}),v.jsx("pre",{className:"p-6 overflow-x-auto bg-slate-950",children:v.jsx("code",{className:"text-sm text-slate-100 font-mono",children:b})})]})]})}function pp({content:b}){return b?v.jsx("main",{className:"flex-1 p-8 overflow-y-auto h-[calc(100vh-89px)] bg-slate-950",children:v.jsxs("div",{className:"max-w-5xl mx-auto",children:[v.jsx("div",{className:"relative mb-10 p-8 rounded-xl bg-slate-900 border border-slate-700",children:v.jsxs("div",{className:"flex items-start gap-5",children:[v.jsx("div",{className:"p-4 bg-blue-600 rounded-xl",children:v.jsx(Du,{className:"text-white",size:30,strokeWidth:2})}),v.jsxs("div",{className:"flex-1",children:[v.jsx("h2",{className:"text-3xl font-bold text-white mb-3",children:b.title}),v.jsx("p",{className:"text-base text-slate-300",children:b.description})]})]})}),v.jsx("div",{className:"space-y-8",children:b.sections.map((P,m)=>v.jsxs("div",{children:[P.type==="heading"&&v.jsxs("div",{className:"flex items-center gap-3 mb-6 mt-12",children:[v.jsx("div",{className:"p-2 bg-slate-800 rounded-lg",children:v.jsx(lp,{className:"text-blue-400",size:22,strokeWidth:2})}),v.jsx("h3",{className:"text-2xl font-bold text-blue-400",children:P.content})]}),P.type==="text"&&v.jsx("p",{className:"text-slate-200 text-base mb-5",children:P.content}),P.type==="code"&&v.jsx(dp,{code:P.content,language:P.language||"python",title:P.title}),P.type==="list"&&v.jsx("ul",{className:"space-y-3",children:P.content.map((V,F)=>v.jsxs("li",{className:"flex items-start gap-3 text-slate-200 bg-slate-800 p-4 rounded-lg border border-slate-700",children:[v.jsx("span",{className:"flex-shrink-0 w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold",children:F+1}),v.jsx("span",{className:"flex-1 pt-0.5 text-sm",children:V})]},F))}),P.type==="note"&&v.jsx("div",{className:"p-5 rounded-xl bg-slate-900 border border-blue-500",children:v.jsxs("div",{className:"flex gap-4",children:[v.jsx("div",{className:"flex-shrink-0",children:v.jsx("div",{className:"p-2.5 bg-blue-900 rounded-lg",children:v.jsx(ap,{className:"text-blue-400",size:20,strokeWidth:2})})}),v.jsxs("div",{children:[v.jsx("p",{className:"text-xs font-bold text-blue-300 mb-2 uppercase tracking-wider",children:"💡 Pro Tip"}),v.jsx("p",{className:"text-slate-200 text-sm",children:P.content})]})]})})]},m))}),v.jsx("div",{className:"h-20"})]})}):v.jsx("main",{className:"flex-1 p-8",children:v.jsx("div",{className:"max-w-5xl mx-auto",children:v.jsxs("div",{className:"text-center py-24",children:[v.jsx("div",{className:"relative inline-block mb-5",children:v.jsx(Du,{className:"w-20 h-20 text-blue-400 mx-auto",strokeWidth:1.5})}),v.jsx("h2",{className:"text-xl font-bold text-slate-200 mb-2",children:"Welcome to Python Mastery"}),v.jsx("p",{className:"text-base text-slate-400",children:"Select a topic from the curriculum to begin your learning journey"})]})})})}const fp={"intro-python":{title:"Introduction to Python",description:"Learn about Python, its history, applications, and how to get started with this powerful programming language.",sections:[{type:"heading",content:"What is Python?"},{type:"text",content:"Python is a high-level, interpreted programming language known for its simple and readable syntax. It was created by Guido van Rossum and first released in 1991. Python emphasizes code readability and allows programmers to express concepts in fewer lines of code."},{type:"heading",content:"Why Learn Python?"},{type:"list",content:["Easy to learn and read - Python syntax is similar to English","Versatile - Used in web development, data science, AI, automation, and more","Huge community - Millions of developers and extensive libraries","High demand - One of the most sought-after skills in the job market","Cross-platform - Works on Windows, Mac, and Linux"]},{type:"heading",content:"Python 2 vs Python 3"},{type:"text",content:"Python 2 was discontinued in 2020. Python 3 is the current and future version with improved features, better Unicode support, and modern syntax. Always use Python 3 for new projects."},{type:"heading",content:"Applications of Python"},{type:"list",content:["Web Development (Django, Flask)","Data Science & Machine Learning (Pandas, NumPy, TensorFlow)","Automation & Scripting","Desktop Applications","Game Development","Cybersecurity & Penetration Testing"]},{type:"heading",content:"Your First Python Program"},{type:"text",content:`Let's write the classic "Hello, World!" program:`},{type:"code",content:'print("Hello, World!")'},{type:"note",content:"That's it! Just one line to display text. Notice how readable and simple Python is compared to other languages."},{type:"heading",content:"Python IDEs & Tools"},{type:"list",content:["VS Code - Lightweight and popular code editor","PyCharm - Full-featured Python IDE","Jupyter Notebook - Great for data science and learning","IDLE - Comes built-in with Python installation"]}]},"python-basics":{title:"Python Basics",description:"Master the fundamental building blocks of Python including variables, data types, and input/output operations.",sections:[{type:"heading",content:"Variables"},{type:"text",content:"Variables are containers that store data. In Python, you don't need to declare the type - Python figures it out automatically (dynamic typing)."},{type:"code",content:`# Creating variables
name = "John"
age = 25
height = 5.9
is_student = True

print(name)    # Output: John
print(age)     # Output: 25`},{type:"heading",content:"Variable Naming Rules (IMPORTANT)"},{type:"text",content:"Python has strict rules for naming variables. Following these rules is mandatory:"},{type:"list",content:["Variable names must start with a letter (a-z, A-Z) or underscore (_)","After the first character, can contain letters, numbers (0-9), and underscores","Variable names are case-sensitive (age, Age, and AGE are different)","Cannot use Python keywords (if, for, while, class, etc.)","No spaces or special characters (!@#$%^&*-+)","Should be descriptive and follow snake_case convention"]},{type:"code",content:`# VALID variable names
name = "Alice"
user_name = "Bob"
_temp = 10
value1 = 20
user_2 = 30
_private_var = 40
__double_underscore = 50

# INVALID variable names (will cause errors)
# 2name = "Error"        # Can't start with number
# user-name = "Error"    # Hyphens not allowed
# user name = "Error"    # Spaces not allowed
# for = "Error"          # Can't use keywords
# user@email = "Error"   # Special characters not allowed
# my-var = "Error"       # Dash is not allowed

# Case sensitivity demonstration
age = 25
Age = 30
AGE = 35
print(age, Age, AGE)  # 25 30 35 - All different variables!`},{type:"heading",content:"Python Keywords (Reserved Words)"},{type:"text",content:"Keywords are special words reserved by Python. You cannot use them as variable names:"},{type:"code",content:`# Complete list of Python keywords (Python 3.x)
import keyword
print(keyword.kwlist)

# Common keywords you'll use:
# False, True, None
# if, elif, else
# for, while, break, continue, pass
# def, return, lambda
# class, self
# import, from, as
# try, except, finally, raise
# and, or, not, is, in
# with, yield, assert
# del, global, nonlocal

# You can check if a word is a keyword
print(keyword.iskeyword('for'))    # True
print(keyword.iskeyword('name'))   # False`},{type:"heading",content:"Variable Assignment Techniques"},{type:"code",content:`# Single assignment
x = 10

# Multiple assignment (same value)
a = b = c = 100
print(a, b, c)  # 100 100 100

# Multiple assignment (different values)
name, age, city = "Alice", 25, "NYC"
print(name)  # Alice
print(age)   # 25
print(city)  # NYC

# Swapping variables (Pythonic way)
x = 5
y = 10
x, y = y, x  # Swap without temp variable
print(x, y)  # 10 5

# Unpacking lists
numbers = [1, 2, 3]
a, b, c = numbers
print(a, b, c)  # 1 2 3

# Extended unpacking
first, *middle, last = [1, 2, 3, 4, 5]
print(first)   # 1
print(middle)  # [2, 3, 4]
print(last)    # 5`},{type:"heading",content:"Variable Scope"},{type:"text",content:"Scope determines where a variable can be accessed. Python has four scope levels: Local, Enclosing, Global, and Built-in (LEGB rule)."},{type:"code",content:`# Global scope
global_var = "I'm global"

def outer_function():
    # Enclosing scope
    enclosing_var = "I'm enclosing"
    
    def inner_function():
        # Local scope
        local_var = "I'm local"
        print(local_var)        # Accessible
        print(enclosing_var)    # Accessible
        print(global_var)       # Accessible
    
    inner_function()
    # print(local_var)  # Error! Not accessible here

outer_function()
# print(enclosing_var)  # Error! Not accessible here

# Global keyword
count = 0

def increment():
    global count  # Declare we're using global variable
    count += 1

increment()
increment()
print(count)  # 2

# Nonlocal keyword
def outer():
    x = 10
    
    def inner():
        nonlocal x  # Refer to enclosing scope variable
        x += 5
        print(x)  # 15
    
    inner()
    print(x)  # 15 (modified by inner function)

outer()`},{type:"heading",content:"Data Types"},{type:"text",content:"Python has several built-in data types:"},{type:"code",content:`# Integers (whole numbers)
count = 100
negative = -50
large_num = 1_000_000  # Underscores for readability

# Float (decimal numbers)
price = 19.99
scientific = 2.5e3  # 2500.0 (scientific notation)
negative_float = -3.14

# String (text)
message = "Hello"
multi_line = """This is a
multi-line
string"""
single_quote = 'Single quotes work too'

# Boolean (True or False)
is_active = True
is_logged_in = False

# NoneType (represents absence of value)
result = None

# Check the type
print(type(count))       # <class 'int'>
print(type(price))       # <class 'float'>
print(type(message))     # <class 'str'>
print(type(is_active))   # <class 'bool'>
print(type(result))      # <class 'NoneType'>`},{type:"heading",content:"Type Conversion (Casting)"},{type:"text",content:"Convert between different data types explicitly:"},{type:"code",content:`# String to Integer
age_str = "25"
age_int = int(age_str)
print(age_int + 5)  # 30

# String to Float
price_str = "19.99"
price_float = float(price_str)
print(price_float)  # 19.99

# Integer to String
number = 42
number_str = str(number)
print("The answer is " + number_str)

# Float to Integer (truncates decimal)
pi = 3.14159
pi_int = int(pi)
print(pi_int)  # 3

# Integer to Float
age = 25
age_float = float(age)
print(age_float)  # 25.0

# Any type to Boolean
print(bool(1))      # True
print(bool(0))      # False
print(bool(""))     # False (empty string)
print(bool("text")) # True
print(bool([]))     # False (empty list)
print(bool([1,2]))  # True

# String to List
text = "hello"
chars = list(text)
print(chars)  # ['h', 'e', 'l', 'l', 'o']`},{type:"heading",content:"Type Hints (Python 3.5+)"},{type:"text",content:"Type hints help document what type a variable should be. They don't enforce types but help with code clarity and IDE support:"},{type:"code",content:`# Variable type hints
name: str = "Alice"
age: int = 25
height: float = 5.9
is_student: bool = True

# Function type hints
def greet(name: str) -> str:
    return f"Hello, {name}"

def add(a: int, b: int) -> int:
    return a + b

# Multiple types (Union)
from typing import Union

def process_id(id: Union[int, str]) -> str:
    return str(id)

# Optional (can be None)
from typing import Optional

def find_user(id: int) -> Optional[str]:
    if id == 1:
        return "Alice"
    return None

# List with type hints
from typing import List

numbers: List[int] = [1, 2, 3, 4, 5]
names: List[str] = ["Alice", "Bob", "Charlie"]

# Dictionary with type hints
from typing import Dict

user: Dict[str, Union[str, int]] = {
    "name": "Alice",
    "age": 25,
    "city": "NYC"
}`},{type:"heading",content:"Constants (Convention)"},{type:"text",content:"Python doesn't have built-in constants, but by convention, variables in UPPERCASE are treated as constants (should not be changed):"},{type:"code",content:`# Constants (convention - use UPPERCASE)
PI = 3.14159
MAX_USERS = 100
API_KEY = "abc123xyz"
DATABASE_URL = "localhost:5432"
DEBUG_MODE = True

# Use constants in your code
def calculate_circle_area(radius):
    return PI * radius ** 2

print(calculate_circle_area(5))

# Configuration file example
APP_NAME = "My Python App"
VERSION = "1.0.0"
MAX_RETRIES = 3
TIMEOUT_SECONDS = 30`},{type:"heading",content:"Input and Output"},{type:"text",content:"Use print() to display output and input() to get user input:"},{type:"code",content:`# Basic output
print("Hello, Python!")
print("Age:", 25)

# Multiple values
print("Name:", "Alice", "Age:", 25)

# Separator and end parameters
print("A", "B", "C", sep="-")  # A-B-C
print("Hello", end=" ")
print("World")  # Hello World

# Formatted output (f-strings - Python 3.6+)
name = "Alice"
age = 25
print(f"My name is {name} and I'm {age} years old")
print(f"Next year I'll be {age + 1}")

# Format specifiers
price = 19.99
print(f"Price: \${price:.2f}")  # Price: $19.99

number = 42
print(f"Binary: {number:b}")   # Binary: 101010
print(f"Hex: {number:x}")      # Hex: 2a

# Basic input
name = input("Enter your name: ")
print("Hello,", name)

# Input returns string - convert if needed
age = int(input("Enter your age: "))
height = float(input("Enter your height: "))
print(f"You are {age} years old and {height} meters tall")

# Input validation
while True:
    try:
        age = int(input("Enter your age: "))
        break
    except ValueError:
        print("Please enter a valid number!")`},{type:"heading",content:"Comments and Documentation"},{type:"text",content:"Comments help explain code and are ignored by Python:"},{type:"code",content:`# This is a single-line comment

"""
This is a multi-line comment (docstring).
You can write multiple lines here.
Useful for documentation.
"""

'''
You can also use single quotes
for multi-line comments.
'''

x = 10  # You can also add comments at the end of lines

# Docstrings for functions
def calculate_area(width, height):
    """
    Calculate the area of a rectangle.
    
    Args:
        width (float): The width of the rectangle
        height (float): The height of the rectangle
    
    Returns:
        float: The area of the rectangle
    """
    return width * height

# Access docstring
print(calculate_area.__doc__)

# Docstrings for classes
class Person:
    """
    A class to represent a person.
    
    Attributes:
        name (str): Person's name
        age (int): Person's age
    """
    
    def __init__(self, name, age):
        self.name = name
        self.age = age`},{type:"heading",content:"Variable Memory and Identity"},{type:"code",content:`# id() function returns memory address
x = 10
print(id(x))  # Memory address

# is vs ==
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)   # True (same values)
print(a is b)   # False (different objects in memory)
print(a is c)   # True (same object)

# Small integers are cached (-5 to 256)
x = 10
y = 10
print(x is y)  # True (same object)

x = 1000
y = 1000
print(x is y)  # False (different objects)

# Delete variables
x = 10
del x
# print(x)  # Error: name 'x' is not defined`},{type:"heading",content:"Best Practices for Variables"},{type:"list",content:["Use descriptive names: user_age not ua","Follow snake_case for variables and functions","Use UPPERCASE for constants","Avoid single-letter names except in loops (i, j, k)","Don't use built-in names (list, dict, str, etc.)","Keep names concise but meaningful","Use is_/has_/can_ prefix for boolean variables","Initialize variables before use"]},{type:"code",content:`# Good variable names
user_name = "Alice"
total_price = 99.99
is_active = True
has_permission = False
max_retries = 3

# Bad variable names
x = "Alice"           # Not descriptive
userName = "Bob"      # Wrong case (use snake_case)
ISActive = True       # Wrong case
list = [1, 2, 3]      # Shadows built-in
a = 99.99             # Not descriptive

# Boolean variable naming
is_logged_in = True   # Good
has_admin_rights = False  # Good
can_edit = True       # Good
logged_in = True      # Okay, but is_ prefix is clearer`},{type:"note",content:"PEP 8 is Python's style guide. It recommends using 4 spaces for indentation, meaningful variable names, and adding comments to explain complex logic. Following PEP 8 makes your code more professional and easier for others to read."}]},operators:{title:"Operators",description:"Learn how to perform calculations, comparisons, and logical operations in Python.",sections:[{type:"heading",content:"What are Operators?"},{type:"text",content:"Operators are special symbols that perform operations on variables and values. Python supports 7 types of operators: Arithmetic, Relational, Logical, Assignment, Bitwise, Identity, and Membership operators."},{type:"heading",content:"1. Arithmetic Operators"},{type:"text",content:"Used for mathematical operations on numeric values:"},{type:"code",content:`a = 10
b = 3

# Addition (+)
print(a + b)   # 13
print(5 + 3.5) # 8.5 (works with int and float)

# Subtraction (-)
print(a - b)   # 7
print(10 - 15) # -5 (can result in negative)

# Multiplication (*)
print(a * b)       # 30
print(2.5 * 4)     # 10.0
print("Hi" * 3)    # HiHiHi (works with strings!)

# Division (/) - Always returns float
print(a / b)       # 3.3333333333333335
print(10 / 2)      # 5.0 (float, not int)
print(7 / 2)       # 3.5

# Floor Division (//) - Returns integer part
print(a // b)      # 3
print(7 // 2)      # 3 (discards decimal)
print(-7 // 2)     # -4 (rounds down)
print(10.5 // 2)   # 5.0 (returns float if input is float)

# Modulus (%) - Returns remainder
print(a % b)       # 1
print(10 % 3)      # 1
print(20 % 5)      # 0 (no remainder)
print(7 % 2)       # 1 (odd number check)

# Exponentiation (**) - Power
print(a ** b)      # 1000 (10^3)
print(2 ** 8)      # 256
print(5 ** 2)      # 25 (square)
print(9 ** 0.5)    # 3.0 (square root)
print(8 ** (1/3))  # 2.0 (cube root)

# Unary operators
print(+a)          # 10 (unary plus)
print(-a)          # -10 (unary minus)`},{type:"heading",content:"Practical Arithmetic Examples"},{type:"code",content:`# Calculate average
num1, num2, num3 = 85, 90, 78
average = (num1 + num2 + num3) / 3
print(f"Average: \${average:.2f}")  # 84.33

# Convert Celsius to Fahrenheit
celsius = 25
fahrenheit = (celsius * 9/5) + 32
print(f"\${celsius}°C = \${fahrenheit}°F")  # 25°C = 77.0°F

# Calculate compound interest
principal = 1000
rate = 5  # 5%
time = 2  # years
amount = principal * (1 + rate/100) ** time
print(f"Amount after \${time} years: \${amount}")

# Check if number is even or odd
number = 17
if number % 2 == 0:
    print(f"\${number} is even")
else:
    print(f"\${number} is odd")

# Find last digit of a number
num = 12345
last_digit = num % 10
print(f"Last digit: \${last_digit}")  # 5`},{type:"heading",content:"2. Relational (Comparison) Operators"},{type:"text",content:"Used to compare values. Always return True or False (boolean):"},{type:"code",content:`x = 5
y = 10

# Equal to (==)
print(x == y)       # False
print(5 == 5)       # True
print("hello" == "hello")  # True

# Not equal to (!=)
print(x != y)       # True
print(5 != 5)       # False
print("a" != "b")   # True

# Greater than (>)
print(x > y)        # False
print(10 > 5)       # True
print("b" > "a")    # True (alphabetical comparison)

# Less than (<)
print(x < y)        # True
print(10 < 5)       # False

# Greater than or equal (>=)
print(x >= y)       # False
print(5 >= 5)       # True
print(10 >= 5)      # True

# Less than or equal (<=)
print(x <= y)       # True
print(5 <= 5)       # True
print(3 <= 5)       # True

# Chaining comparisons (Pythonic!)
age = 25
print(18 <= age <= 65)  # True
print(1 < 5 < 10)       # True
print(1 < 5 > 3)        # True (5 > 1 AND 5 > 3)`},{type:"heading",content:"String and List Comparisons"},{type:"code",content:`# String comparison (lexicographical - alphabetical order)
print("apple" < "banana")   # True
print("Apple" < "apple")    # True (uppercase comes first in ASCII)
print("abc" == "abc")       # True
print("10" > "9")           # False (string comparison, not numeric)

# Case-insensitive comparison
str1 = "Hello"
str2 = "hello"
print(str1.lower() == str2.lower())  # True

# List comparison (element by element)
list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = [1, 2, 4]
print(list1 == list2)  # True
print(list1 < list3)   # True (3 < 4)

# Length comparison
print(len("hello") == len("world"))  # True (both 5 chars)`},{type:"heading",content:"3. Logical Operators"},{type:"text",content:"Combine multiple conditions. Used for decision making:"},{type:"code",content:`age = 25
has_license = True
has_car = False

# AND (and) - Both conditions must be True
print(age >= 18 and has_license)  # True (both True)
print(age >= 18 and has_car)      # False (one False)
print(True and True)              # True
print(True and False)             # False
print(False and False)            # False

# OR (or) - At least one condition must be True
print(age < 18 or has_license)    # True (one True)
print(age < 18 or has_car)        # False (both False)
print(True or False)              # True
print(False or False)             # False

# NOT (not) - Reverses the boolean value
print(not has_license)             # False
print(not has_car)                 # True
print(not True)                    # False
print(not False)                   # True

# Complex conditions
eligible = age >= 18 and has_license and not has_car
print(eligible)  # True

# Multiple conditions
score = 85
attendance = 90
passed = (score >= 60 and attendance >= 75) or score >= 95
print(passed)  # True`},{type:"heading",content:"Logical Operator Truth Tables"},{type:"code",content:`# AND Truth Table
print("AND Truth Table:")
print(f"True and True = {True and True}")      # True
print(f"True and False = {True and False}")    # False
print(f"False and True = {False and True}")    # False
print(f"False and False = {False and False}")  # False

# OR Truth Table
print("\\nOR Truth Table:")
print(f"True or True = {True or True}")        # True
print(f"True or False = {True or False}")      # True
print(f"False or True = {False or True}")      # True
print(f"False or False = {False or False}")    # False

# NOT Truth Table
print("\\nNOT Truth Table:")
print(f"not True = {not True}")                # False
print(f"not False = {not False}")              # True`},{type:"heading",content:"Short-Circuit Evaluation"},{type:"text",content:"Logical operators use short-circuit evaluation - they stop evaluating as soon as the result is determined:"},{type:"code",content:`# AND - stops at first False
result = False and print("This won't print")  # Doesn't print
result = True and print("This will print")    # Prints

# OR - stops at first True
result = True or print("This won't print")    # Doesn't print
result = False or print("This will print")    # Prints

# Practical use - avoid errors
x = 0
# if x != 0 and 10 / x > 2:  # Without short-circuit, would error
if x != 0 and (10 / x) > 2:
    print("Valid")
else:
    print("Invalid")  # This executes

# Return values (not just True/False)
print(5 and 10)        # 10 (returns last evaluated)
print(0 and 10)        # 0 (returns first False)
print(5 or 10)         # 5 (returns first True)
print(0 or 10)         # 10 (returns last if all False)
print(None or "default")  # "default" (useful for defaults)`},{type:"heading",content:"4. Assignment Operators"},{type:"text",content:"Used to assign and update values efficiently:"},{type:"code",content:`# Simple assignment (=)
x = 10
name = "Alice"

# Add and assign (+=)
x = 5
x += 3       # Same as: x = x + 3
print(x)     # 8

# Subtract and assign (-=)
x = 10
x -= 4       # Same as: x = x - 4
print(x)     # 6

# Multiply and assign (*=)
x = 5
x *= 2       # Same as: x = x * 2
print(x)     # 10

# Divide and assign (/=)
x = 20
x /= 4       # Same as: x = x / 4
print(x)     # 5.0

# Floor divide and assign (//=)
x = 17
x //= 5      # Same as: x = x // 5
print(x)     # 3

# Modulus and assign (%=)
x = 17
x %= 5       # Same as: x = x % 5
print(x)     # 2

# Exponent and assign (**=)
x = 2
x **= 3      # Same as: x = x ** 3
print(x)     # 8

# Bitwise AND assign (&=)
x = 5
x &= 3       # Same as: x = x & 3
print(x)     # 1

# Bitwise OR assign (|=)
x = 5
x |= 3       # Same as: x = x | 3
print(x)     # 7

# Bitwise XOR assign (^=)
x = 5
x ^= 3       # Same as: x = x ^ 3
print(x)     # 6

# Left shift assign (<<=)
x = 2
x <<= 2      # Same as: x = x << 2
print(x)     # 8

# Right shift assign (>>=)
x = 8
x >>= 2      # Same as: x = x >> 2
print(x)     # 2`},{type:"heading",content:"Practical Assignment Examples"},{type:"code",content:`# Counter increment
count = 0
count += 1  # Increment by 1
count += 1
print(count)  # 2

# Accumulate sum
total = 0
total += 10
total += 20
total += 30
print(f"Total: {total}")  # 60

# String concatenation
message = "Hello"
message += " "
message += "World"
print(message)  # Hello World

# List extension
numbers = [1, 2, 3]
numbers += [4, 5]
print(numbers)  # [1, 2, 3, 4, 5]

# Discount calculation
price = 100
price *= 0.9  # Apply 10% discount
print(f"Discounted price: \${price}")  # $90.0`},{type:"heading",content:"5. Identity Operators"},{type:"text",content:"Check if two variables point to the same object in memory:"},{type:"code",content:`# is - checks if same object (identity)
# == - checks if same value (equality)

a = [1, 2, 3]
b = [1, 2, 3]
c = a

# is operator
print(a is b)   # False (different objects)
print(a is c)   # True (same object)

# is not operator
print(a is not b)  # True
print(a is not c)  # False

# == operator (for comparison)
print(a == b)   # True (same values)

# None check (always use 'is' with None)
value = None
print(value is None)      # True (correct way)
print(value == None)      # True (works but not recommended)

# Small integers are cached
x = 256
y = 256
print(x is y)   # True (Python caches -5 to 256)

x = 257
y = 257
print(x is y)   # False (different objects)

# String interning
s1 = "hello"
s2 = "hello"
print(s1 is s2)  # True (Python interns strings)

# Check object ID
print(id(a))
print(id(b))  # Different ID
print(id(c))  # Same as 'a'`},{type:"heading",content:"6. Membership Operators"},{type:"text",content:"Check if a value exists in a sequence (list, tuple, string, set, dict):"},{type:"code",content:`# in operator - checks if value exists
fruits = ["apple", "banana", "cherry"]
print("apple" in fruits)      # True
print("mango" in fruits)      # False

# not in operator - checks if value doesn't exist
print("mango" not in fruits)  # True
print("apple" not in fruits)  # False

# String membership
text = "Hello World"
print("Hello" in text)        # True
print("hello" in text)        # False (case-sensitive)
print("xyz" not in text)      # True

# Tuple membership
coordinates = (10, 20, 30)
print(20 in coordinates)      # True
print(50 in coordinates)      # False

# Dictionary membership (checks keys, not values)
user = {"name": "Alice", "age": 25}
print("name" in user)         # True
print("Alice" in user)        # False (value, not key)
print("email" not in user)    # True

# Set membership
numbers = {1, 2, 3, 4, 5}
print(3 in numbers)           # True
print(10 in numbers)          # False

# Range membership
print(5 in range(1, 10))      # True
print(15 in range(1, 10))     # False`},{type:"heading",content:"7. Bitwise Operators"},{type:"text",content:"Work at the binary level. Used in low-level programming, permissions, and flags:"},{type:"code",content:`# Bitwise AND (&)
a = 5   # Binary: 0101
b = 3   # Binary: 0011
print(a & b)   # 1 (Binary: 0001)

# Bitwise OR (|)
print(a | b)   # 7 (Binary: 0111)

# Bitwise XOR (^)
print(a ^ b)   # 6 (Binary: 0110)

# Bitwise NOT (~)
print(~a)      # -6 (inverts all bits)
print(~0)      # -1
print(~(-1))   # 0

# Left Shift (<<) - multiply by 2^n
print(5 << 1)  # 10 (5 * 2^1)
print(5 << 2)  # 20 (5 * 2^2)
print(1 << 3)  # 8 (1 * 2^3)

# Right Shift (>>) - divide by 2^n
print(10 >> 1)  # 5 (10 / 2^1)
print(20 >> 2)  # 5 (20 / 2^2)
print(8 >> 3)   # 1 (8 / 2^3)`},{type:"heading",content:"Bitwise Operators - Practical Uses"},{type:"code",content:`# Check if number is even or odd
num = 17
if num & 1:
    print("Odd")   # True (last bit is 1)
else:
    print("Even")

# Swap two numbers without temp variable
a = 5
b = 10
a = a ^ b
b = a ^ b
a = a ^ b
print(a, b)  # 10 5

# Multiply/divide by powers of 2 (fast)
num = 5
print(num << 1)  # 10 (multiply by 2)
print(num << 2)  # 20 (multiply by 4)
print(num >> 1)  # 2 (divide by 2)

# Permission flags (like file permissions)
READ = 1    # Binary: 001
WRITE = 2   # Binary: 010
EXECUTE = 4 # Binary: 100

# Grant permissions
permissions = READ | WRITE  # Binary: 011
print(f"Permissions: {permissions}")

# Check if has permission
if permissions & READ:
    print("Has read permission")
if permissions & EXECUTE:
    print("Has execute permission")
else:
    print("No execute permission")

# Toggle bits
flags = 5  # Binary: 0101
flags ^= 1 # Toggle last bit
print(flags)  # 4 (Binary: 0100)`},{type:"heading",content:"Operator Precedence (Order of Operations)"},{type:"text",content:"When multiple operators appear in an expression, Python follows precedence rules (PEMDAS-like):"},{type:"code",content:`# Parentheses have highest priority
result = (2 + 3) * 4
print(result)  # 20

# Without parentheses: * comes before +
result = 2 + 3 * 4
print(result)  # 14

# Exponentiation before multiplication
result = 2 * 3 ** 2
print(result)  # 18 (not 36)

# Complex expression
result = 10 + 5 * 2 ** 3 - 4 / 2
print(result)  # 10 + 5*8 - 2 = 48.0

# Comparison before logical
result = 5 > 3 and 10 < 20
print(result)  # True`},{type:"heading",content:"Complete Operator Precedence Table"},{type:"list",content:["1. () - Parentheses (highest priority)","2. ** - Exponentiation","3. +x, -x, ~x - Unary plus, minus, bitwise NOT","4. *, /, //, % - Multiply, divide, floor divide, modulus","5. +, - - Addition, subtraction","6. <<, >> - Bitwise shifts","7. & - Bitwise AND","8. ^ - Bitwise XOR","9. | - Bitwise OR","10. ==, !=, <, <=, >, >=, is, is not, in, not in - Comparisons","11. not - Logical NOT","12. and - Logical AND","13. or - Logical OR (lowest priority)"]},{type:"code",content:`# Precedence examples
print(2 + 3 * 4)          # 14 (3*4 first)
print((2 + 3) * 4)        # 20 (parentheses first)
print(2 ** 3 ** 2)        # 512 (right to left: 3^2=9, 2^9=512)
print((2 ** 3) ** 2)      # 64 (left to right: 2^3=8, 8^2=64)
print(10 + 5 * 2)         # 20
print(True or False and False)  # True (and before or)
print((True or False) and False)  # False

# Best practice: use parentheses for clarity
unclear = 10 + 5 * 2 ** 3 - 4 / 2
clear = 10 + (5 * (2 ** 3)) - (4 / 2)  # Much clearer!
print(unclear == clear)  # True`},{type:"heading",content:"Operator Associativity"},{type:"text",content:"Associativity determines the order when operators have the same precedence:"},{type:"code",content:`# Left to right associativity (most operators)
result = 10 - 5 - 2
print(result)  # 3 (evaluated as (10-5)-2)

result = 20 / 4 / 2
print(result)  # 2.5 (evaluated as (20/4)/2)

# Right to left associativity (exponentiation)
result = 2 ** 3 ** 2
print(result)  # 512 (evaluated as 2**(3**2))

# Assignment is also right to left
x = y = z = 10
print(x, y, z)  # 10 10 10`},{type:"heading",content:"Operator Overloading Preview"},{type:"text",content:"Operators can work differently with different data types (you'll learn to create custom behavior in OOP):"},{type:"code",content:`# + operator overloading
print(5 + 3)           # 8 (addition for numbers)
print("Hello" + " " + "World")  # Hello World (concatenation)
print([1, 2] + [3, 4]) # [1, 2, 3, 4] (list concatenation)

# * operator overloading
print(5 * 3)           # 15 (multiplication)
print("Hi" * 3)        # HiHiHi (string repetition)
print([1, 2] * 2)      # [1, 2, 1, 2] (list repetition)

# in operator overloading
print(5 in [1, 2, 5])       # True (list membership)
print("e" in "Hello")        # True (string membership)
print("name" in {"name": "Alice"})  # True (dict key check)`},{type:"note",content:"When in doubt about operator precedence, use parentheses to make your code clearer and avoid mistakes. Remember: Readability counts! (The Zen of Python)"}]},"control-flow":{title:"Control Flow",description:"Master decision-making and iteration with comprehensive coverage of conditionals, loops, and control statements.",sections:[{type:"heading",content:"1. Conditional Statements"},{type:"subheading",content:"If Statement"},{type:"text",content:"Execute code only when a condition is True:"},{type:"code",content:`age = 18

if age >= 18:
    print("You are an adult")
    print("You can vote")

# Output: You are an adult
#         You can vote`},{type:"subheading",content:"If-Else Statement"},{type:"text",content:"Execute different code based on whether a condition is True or False:"},{type:"code",content:`temperature = 30

if temperature > 25:
    print("It's hot outside")
else:
    print("It's cool outside")

# Output: It's hot outside`},{type:"subheading",content:"If-Elif-Else Statement"},{type:"text",content:"Check multiple conditions in sequence. Once a condition is True, its block executes and the rest are skipped:"},{type:"code",content:`score = 75

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
elif score >= 60:
    print("Grade: D")
else:
    print("Grade: F")

# Output: Grade: C`},{type:"subheading",content:"Nested Conditionals"},{type:"text",content:"You can place if statements inside other if statements for complex decision making:"},{type:"code",content:`age = 20
has_license = True

if age >= 18:
    if has_license:
        print("You can drive")
    else:
        print("You need a license")
else:
    print("You are too young to drive")

# Output: You can drive`},{type:"subheading",content:"Ternary Operator (Conditional Expression)"},{type:"text",content:"A concise way to write simple if-else statements in one line:"},{type:"code",content:`# Syntax: value_if_true if condition else value_if_false

age = 20
status = "adult" if age >= 18 else "minor"
print(status)  # adult

# Traditional equivalent:
if age >= 18:
    status = "adult"
else:
    status = "minor"

# More examples
x = 10
y = 20
max_value = x if x > y else y
print(max_value)  # 20

number = 7
result = "even" if number % 2 == 0 else "odd"
print(result)  # odd`},{type:"subheading",content:"Multiple Conditions with Logical Operators"},{type:"text",content:"Combine multiple conditions using and, or, and not:"},{type:"code",content:`age = 25
income = 50000

# AND - both conditions must be True
if age >= 18 and income > 30000:
    print("Loan approved")

# OR - at least one condition must be True
day = "Saturday"
if day == "Saturday" or day == "Sunday":
    print("It's the weekend!")

# NOT - inverts the condition
is_raining = False
if not is_raining:
    print("You don't need an umbrella")

# Complex combinations
temperature = 30
humidity = 70
if temperature > 25 and (humidity > 60 or humidity < 30):
    print("Weather alert!")`},{type:"heading",content:"2. For Loops"},{type:"text",content:"Repeat code a specific number of times or iterate over sequences:"},{type:"subheading",content:"Basic For Loop with range()"},{type:"code",content:`# Loop through a range of numbers
for i in range(5):
    print(i)
# Output: 0, 1, 2, 3, 4

# Loop with start and end
for i in range(2, 6):
    print(i)
# Output: 2, 3, 4, 5

# Loop with step
for i in range(0, 10, 2):
    print(i)
# Output: 0, 2, 4, 6, 8

# Countdown
for i in range(5, 0, -1):
    print(i)
# Output: 5, 4, 3, 2, 1`},{type:"subheading",content:"Iterating Over Collections"},{type:"code",content:`# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Loop through a string
for char in "Python":
    print(char)
# Output: P, y, t, h, o, n

# Loop through a dictionary
person = {"name": "Alice", "age": 30, "city": "NYC"}
for key in person:
    print(f"\${key}: \${person[key]}")

# Loop through dictionary items
for key, value in person.items():
    print(f"\${key}: \${value}")`},{type:"subheading",content:"enumerate() Function"},{type:"text",content:"Get both the index and value while looping:"},{type:"code",content:`fruits = ["apple", "banana", "cherry"]

for index, fruit in enumerate(fruits):
    print(f"\${index}: \${fruit}")
# Output: 0: apple
#         1: banana
#         2: cherry

# Start index at 1
for index, fruit in enumerate(fruits, start=1):
    print(f"\${index}. \${fruit}")
# Output: 1. apple
#         2. banana
#         3. cherry`},{type:"subheading",content:"zip() Function"},{type:"text",content:"Iterate over multiple sequences simultaneously:"},{type:"code",content:`names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
cities = ["NYC", "LA", "Chicago"]

for name, age, city in zip(names, ages, cities):
    print(f"\${name} is \${age} years old and lives in \${city}")

# Output:
# Alice is 25 years old and lives in NYC
# Bob is 30 years old and lives in LA
# Charlie is 35 years old and lives in Chicago`},{type:"subheading",content:"Nested Loops"},{type:"text",content:"Loops inside loops for working with multi-dimensional data:"},{type:"code",content:`# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"\${i} x \${j} = \${i*j}")
    print()  # blank line

# Pattern printing
for i in range(1, 6):
    for j in range(i):
        print("*", end="")
    print()
# Output:
# *
# **
# ***
# ****
# *****

# Working with 2D lists
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for row in matrix:
    for value in row:
        print(value, end=" ")
    print()`},{type:"heading",content:"3. While Loops"},{type:"text",content:"Repeat code as long as a condition is True. Be careful to avoid infinite loops:"},{type:"code",content:`count = 0

while count < 5:
    print("Count:", count)
    count += 1

# Output: Count: 0
#         Count: 1
#         Count: 2
#         Count: 3
#         Count: 4`},{type:"subheading",content:"User Input Validation"},{type:"code",content:`# Keep asking until valid input
age = -1
while age < 0 or age > 120:
    age = int(input("Enter your age (0-120): "))
    if age < 0 or age > 120:
        print("Invalid age. Try again.")

# Password validation
password = ""
while len(password) < 8:
    password = input("Enter a password (min 8 characters): ")
    if len(password) < 8:
        print("Too short!")`},{type:"subheading",content:"While with Counter"},{type:"code",content:`# Calculate sum of numbers from 1 to 10
total = 0
num = 1

while num <= 10:
    total += num
    num += 1

print(f"Sum: \${total}")  # 55

# Find first power of 2 greater than 1000
power = 1
exponent = 0

while power <= 1000:
    power *= 2
    exponent += 1

print(f"2^\${exponent} = \${power}")  # 2^10 = 1024`},{type:"heading",content:"4. Loop Control Statements"},{type:"subheading",content:"Break Statement"},{type:"text",content:"Exit a loop immediately when a condition is met:"},{type:"code",content:`# Search for a value
numbers = [1, 3, 5, 7, 9, 11]
target = 7

for num in numbers:
    if num == target:
        print(f"Found \${target}!")
        break
else:
    print(f"\${target} not found")

# Exit on user input
while True:
    command = input("Enter command (or 'quit'): ")
    if command == "quit":
        break
    print(f"Processing: \${command}")`},{type:"subheading",content:"Continue Statement"},{type:"text",content:"Skip the current iteration and continue with the next one:"},{type:"code",content:`# Skip even numbers
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)
# Output: 1, 3, 5, 7, 9

# Skip negative numbers
numbers = [10, -5, 20, -3, 15, -8]
for num in numbers:
    if num < 0:
        continue
    print(num)
# Output: 10, 20, 15`},{type:"subheading",content:"Pass Statement"},{type:"text",content:"A placeholder that does nothing. Useful for creating empty code blocks:"},{type:"code",content:`for i in range(5):
    if i == 2:
        pass  # TODO: Add logic later
    print(i)

# Output: 0, 1, 2, 3, 4
# pass does nothing, just a placeholder

# Empty function or class definition
def future_function():
    pass  # Will implement later

class FutureClass:
    pass  # Will add methods later`},{type:"heading",content:"5. Loop Else Clause"},{type:"text",content:"The else block executes only if the loop completes normally (without break):"},{type:"code",content:`# Search with for-else
numbers = [1, 3, 5, 7, 9]
target = 6

for num in numbers:
    if num == target:
        print(f"Found \${target}!")
        break
else:
    print(f"\${target} not found in list")
# Output: 6 not found in list

# Check if a number is prime
number = 17
is_prime = True

for i in range(2, number):
    if number % i == 0:
        is_prime = False
        break
else:
    is_prime = True

print(f"\${number} is prime: \${is_prime}")

# While-else
count = 0
while count < 5:
    print(count)
    count += 1
else:
    print("Loop completed normally")`},{type:"heading",content:"6. Match-Case Statement (Python 3.10+)"},{type:"text",content:"Structural pattern matching for cleaner conditional logic:"},{type:"code",content:`# Basic match-case
status_code = 404

match status_code:
    case 200:
        print("OK")
    case 404:
        print("Not Found")
    case 500:
        print("Server Error")
    case _:
        print("Unknown status")
# Output: Not Found

# Pattern matching with values
command = "go north"

match command.split():
    case ["go", direction]:
        print(f"Going \${direction}")
    case ["take", item]:
        print(f"Taking \${item}")
    case ["quit"]:
        print("Goodbye!")
    case _:
        print("Unknown command")

# Matching with conditions
point = (0, 5)

match point:
    case (0, 0):
        print("Origin")
    case (0, y):
        print(f"On Y-axis at \${y}")
    case (x, 0):
        print(f"On X-axis at \${x}")
    case (x, y):
        print(f"Point at (\${x}, \${y})")`},{type:"heading",content:"7. Practical Examples"},{type:"subheading",content:"Input Validation"},{type:"code",content:`# Email validation
email = input("Enter email: ")

if "@" in email and "." in email:
    if email.count("@") == 1:
        print("Email looks valid")
    else:
        print("Too many @ symbols")
else:
    print("Invalid email format")`},{type:"subheading",content:"Menu System"},{type:"code",content:`while True:
    print("\\n=== Menu ===")
    print("1. Option A")
    print("2. Option B")
    print("3. Exit")
    
    choice = input("Select option: ")
    
    if choice == "1":
        print("You selected Option A")
    elif choice == "2":
        print("You selected Option B")
    elif choice == "3":
        print("Goodbye!")
        break
    else:
        print("Invalid choice")`},{type:"subheading",content:"Finding Maximum and Minimum"},{type:"code",content:`numbers = [45, 23, 78, 12, 90, 56]

# Find maximum
max_num = numbers[0]
for num in numbers:
    if num > max_num:
        max_num = num
print(f"Maximum: \${max_num}")

# Find minimum
min_num = numbers[0]
for num in numbers:
    if num < min_num:
        min_num = num
print(f"Minimum: \${min_num}")`},{type:"subheading",content:"Sum and Average"},{type:"code",content:`numbers = [10, 20, 30, 40, 50]

# Calculate sum
total = 0
for num in numbers:
    total += num

# Calculate average
average = total / len(numbers)

print(f"Sum: \${total}")        # 150
print(f"Average: \${average}")  # 30.0`},{type:"subheading",content:"Fibonacci Sequence"},{type:"code",content:`# Generate first 10 Fibonacci numbers
n = 10
a, b = 0, 1
count = 0

while count < n:
    print(a, end=" ")
    a, b = b, a + b
    count += 1
# Output: 0 1 1 2 3 5 8 13 21 34`},{type:"subheading",content:"Factorial Calculation"},{type:"code",content:`# Calculate factorial using loop
number = 5
factorial = 1

for i in range(1, number + 1):
    factorial *= i

print(f"\${number}! = \${factorial}")  # 5! = 120`},{type:"subheading",content:"Reverse a String"},{type:"code",content:`text = "Python"
reversed_text = ""

for char in text:
    reversed_text = char + reversed_text

print(reversed_text)  # nohtyP

# Alternative using range
text = "Python"
reversed_text = ""

for i in range(len(text) - 1, -1, -1):
    reversed_text += text[i]

print(reversed_text)  # nohtyP`},{type:"subheading",content:"Count Vowels"},{type:"code",content:`text = "Hello World"
vowels = "aeiouAEIOU"
count = 0

for char in text:
    if char in vowels:
        count += 1

print(f"Number of vowels: \${count}")  # 3`},{type:"subheading",content:"Prime Number Checker"},{type:"code",content:`number = 29

if number < 2:
    print(f"\${number} is not prime")
else:
    is_prime = True
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            is_prime = False
            break
    
    if is_prime:
        print(f"\${number} is prime")
    else:
        print(f"\${number} is not prime")`},{type:"note",content:"Indentation is crucial in Python! Code blocks are defined by indentation (usually 4 spaces). Unlike other languages, Python doesn't use braces {} for blocks."},{type:"note",content:"Best Practices: Use for loops when you know the number of iterations, while loops for unknown iterations. Always ensure while loops have a way to exit to avoid infinite loops. Use break and continue sparingly for clearer code."}]},"data-structures":{title:"Data Structures",description:"Master Python's built-in data structures with comprehensive coverage of all methods, operations, and practical applications.",sections:[{type:"heading",content:"1. Strings"},{type:"text",content:"Strings are immutable sequences of characters. Once created, they cannot be modified in place."},{type:"subheading",content:"Creating Strings"},{type:"code",content:`# Different ways to create strings
single = 'Hello'
double = "World"
triple = '''Multiple
lines'''
triple_double = """Also
multiple lines"""

# Empty string
empty = ""

# String concatenation
full_name = "John" + " " + "Doe"
print(full_name)  # John Doe

# String repetition
line = "-" * 20
print(line)  # --------------------`},{type:"subheading",content:"String Indexing and Slicing"},{type:"code",content:`text = "Python Programming"

# Indexing (accessing individual characters)
print(text[0])      # P (first character)
print(text[1])      # y
print(text[-1])     # g (last character)
print(text[-2])     # n (second to last)

# Slicing [start:end:step]
print(text[0:6])    # Python (characters 0 to 5)
print(text[:6])     # Python (from start to 5)
print(text[7:])     # Programming (from 7 to end)
print(text[-11:])   # Programming (last 11 chars)
print(text[::2])    # Pto rgamn (every 2nd char)
print(text[::-1])   # gnimmargorP nohtyP (reversed)`},{type:"subheading",content:"String Methods - Case Conversion"},{type:"code",content:`text = "hello world"

# upper() - Convert to uppercase
print(text.upper())  # HELLO WORLD

# lower() - Convert to lowercase
print("PYTHON".lower())  # python

# capitalize() - First character uppercase, rest lowercase
print(text.capitalize())  # Hello world

# title() - First character of each word uppercase
print(text.title())  # Hello World

# swapcase() - Swap uppercase and lowercase
print("Hello World".swapcase())  # hELLO wORLD

# casefold() - Aggressive lowercase (for comparisons)
print("ß".casefold())  # ss`},{type:"subheading",content:"String Methods - Searching and Checking"},{type:"code",content:`text = "Python Programming"

# find() - Return index of first occurrence (-1 if not found)
print(text.find("Pro"))      # 7
print(text.find("Java"))     # -1

# rfind() - Return index of last occurrence
print("hello hello".rfind("hello"))  # 6

# index() - Like find() but raises error if not found
print(text.index("Pro"))     # 7

# count() - Count occurrences
print("hello world".count("l"))  # 3

# startswith() - Check if starts with substring
print(text.startswith("Py"))     # True
print(text.startswith("Java"))   # False

# endswith() - Check if ends with substring
print(text.endswith("ing"))      # True

# in operator - Check if substring exists
print("Pro" in text)             # True
print("Java" in text)            # False`},{type:"subheading",content:"String Methods - Validation"},{type:"code",content:`# isalpha() - Check if all characters are alphabetic
print("Hello".isalpha())      # True
print("Hello123".isalpha())   # False

# isdigit() - Check if all characters are digits
print("12345".isdigit())      # True
print("123.45".isdigit())     # False

# isalnum() - Check if alphanumeric (letters and numbers)
print("Hello123".isalnum())   # True
print("Hello 123".isalnum())  # False (space)

# isspace() - Check if all whitespace
print("   ".isspace())        # True
print("  a ".isspace())       # False

# isupper() - Check if all uppercase
print("HELLO".isupper())      # True
print("Hello".isupper())      # False

# islower() - Check if all lowercase
print("hello".islower())      # True

# istitle() - Check if titlecased
print("Hello World".istitle())  # True
print("hello World".istitle())  # False`},{type:"subheading",content:"String Methods - Modification (Return New Strings)"},{type:"code",content:`text = "  Hello World  "

# strip() - Remove leading/trailing whitespace
print(text.strip())        # "Hello World"

# lstrip() - Remove leading whitespace
print(text.lstrip())       # "Hello World  "

# rstrip() - Remove trailing whitespace
print(text.rstrip())       # "  Hello World"

# replace() - Replace substring
text2 = "Hello World"
print(text2.replace("World", "Python"))  # Hello Python
print(text2.replace("l", "L"))           # HeLLo WorLd

# replace with count limit
print("aaa bbb ccc".replace("a", "x", 2))  # xxa bbb ccc`},{type:"subheading",content:"String Methods - Splitting and Joining"},{type:"code",content:`# split() - Split string into list
text = "apple,banana,cherry"
fruits = text.split(",")
print(fruits)  # ['apple', 'banana', 'cherry']

sentence = "Hello World Python"
words = sentence.split()  # Default splits by whitespace
print(words)  # ['Hello', 'World', 'Python']

# rsplit() - Split from right
print("a b c d".rsplit(" ", 2))  # ['a b', 'c', 'd']

# splitlines() - Split by line breaks
multi = "Line 1\\nLine 2\\nLine 3"
lines = multi.splitlines()
print(lines)  # ['Line 1', 'Line 2', 'Line 3']

# join() - Join list into string
fruits = ["apple", "banana", "cherry"]
result = ", ".join(fruits)
print(result)  # apple, banana, cherry

words = ["Hello", "World"]
sentence = " ".join(words)
print(sentence)  # Hello World`},{type:"subheading",content:"String Methods - Alignment and Padding"},{type:"code",content:`text = "Python"

# center() - Center align
print(text.center(20))       # "       Python       "
print(text.center(20, "*"))  # "*******Python*******"

# ljust() - Left justify
print(text.ljust(20))        # "Python              "
print(text.ljust(20, "-"))   # "Python--------------"

# rjust() - Right justify
print(text.rjust(20))        # "              Python"
print(text.rjust(20, "."))   # "..............Python"

# zfill() - Pad with zeros
print("42".zfill(5))         # 00042
print("-42".zfill(5))        # -0042`},{type:"subheading",content:"String Formatting"},{type:"code",content:`name = "Alice"
age = 25
price = 19.99

# f-strings (Python 3.6+) - Recommended
print(f"My name is \${name} and I am \${age} years old")

# Formatting numbers
print(f"Price: $\${price:.2f}")  # Price: $19.99
print(f"Number: \${42:05d}")      # Number: 00042

# format() method
print("My name is \${} and I am \${}".format(name, age))
print("\${0} is \${1} years old. \${0} is a developer.".format(name, age))
print("\${name} is \${age} years old".format(name=name, age=age))

# % formatting (old style)
print("My name is %s and I am %d years old" % (name, age))`},{type:"heading",content:"2. Lists"},{type:"text",content:"Lists are ordered, mutable collections that can hold elements of different types. They are one of the most versatile data structures in Python."},{type:"subheading",content:"Creating Lists"},{type:"code",content:`# Empty list
empty = []
empty2 = list()

# List with elements
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True, None]

# Nested lists
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# List from string
chars = list("Python")
print(chars)  # ['P', 'y', 't', 'h', 'o', 'n']

# List from range
nums = list(range(5))
print(nums)  # [0, 1, 2, 3, 4]`},{type:"subheading",content:"Accessing and Modifying Lists"},{type:"code",content:`fruits = ["apple", "banana", "cherry", "date"]

# Indexing
print(fruits[0])      # apple
print(fruits[-1])     # date

# Slicing
print(fruits[1:3])    # ['banana', 'cherry']
print(fruits[:2])     # ['apple', 'banana']
print(fruits[2:])     # ['cherry', 'date']
print(fruits[::2])    # ['apple', 'cherry']
print(fruits[::-1])   # ['date', 'cherry', 'banana', 'apple']

# Modifying elements
fruits[1] = "blueberry"
print(fruits)  # ['apple', 'blueberry', 'cherry', 'date']

# Modifying slices
fruits[1:3] = ["kiwi", "mango"]
print(fruits)  # ['apple', 'kiwi', 'mango', 'date']`},{type:"subheading",content:"List Methods - Adding Elements"},{type:"code",content:`fruits = ["apple", "banana"]

# append() - Add element to end
fruits.append("cherry")
print(fruits)  # ['apple', 'banana', 'cherry']

# insert() - Insert element at specific index
fruits.insert(1, "blueberry")
print(fruits)  # ['apple', 'blueberry', 'banana', 'cherry']

# extend() - Add multiple elements from iterable
fruits.extend(["date", "elderberry"])
print(fruits)  # ['apple', 'blueberry', 'banana', 'cherry', 'date', 'elderberry']

# Using + operator
more_fruits = fruits + ["fig", "grape"]
print(more_fruits)

# Using * operator for repetition
repeated = ["x"] * 3
print(repeated)  # ['x', 'x', 'x']`},{type:"subheading",content:"List Methods - Removing Elements"},{type:"code",content:`fruits = ["apple", "banana", "cherry", "banana"]

# remove() - Remove first occurrence of value
fruits.remove("banana")
print(fruits)  # ['apple', 'cherry', 'banana']

# pop() - Remove and return element at index (default: last)
last = fruits.pop()
print(last)    # banana
print(fruits)  # ['apple', 'cherry']

first = fruits.pop(0)
print(first)   # apple
print(fruits)  # ['cherry']

# clear() - Remove all elements
fruits = ["apple", "banana"]
fruits.clear()
print(fruits)  # []

# del statement
fruits = ["apple", "banana", "cherry"]
del fruits[1]
print(fruits)  # ['apple', 'cherry']

# Delete slice
nums = [1, 2, 3, 4, 5]
del nums[1:3]
print(nums)  # [1, 4, 5]`},{type:"subheading",content:"List Methods - Searching and Counting"},{type:"code",content:`fruits = ["apple", "banana", "cherry", "banana"]

# index() - Return index of first occurrence
print(fruits.index("banana"))  # 1

# index with start and end
print(fruits.index("banana", 2))  # 3

# count() - Count occurrences
print(fruits.count("banana"))  # 2
print(fruits.count("grape"))   # 0

# in operator - Check if element exists
print("apple" in fruits)    # True
print("grape" in fruits)    # False

# not in operator
print("grape" not in fruits)  # True`},{type:"subheading",content:"List Methods - Sorting and Reversing"},{type:"code",content:`numbers = [3, 1, 4, 1, 5, 9, 2]

# sort() - Sort in place (modifies original)
numbers.sort()
print(numbers)  # [1, 1, 2, 3, 4, 5, 9]

# sort in descending order
numbers.sort(reverse=True)
print(numbers)  # [9, 5, 4, 3, 2, 1, 1]

# sorted() - Return new sorted list (doesn't modify original)
original = [3, 1, 4, 1, 5]
sorted_list = sorted(original)
print(original)     # [3, 1, 4, 1, 5]
print(sorted_list)  # [1, 1, 3, 4, 5]

# Sort strings
fruits = ["banana", "apple", "cherry"]
fruits.sort()
print(fruits)  # ['apple', 'banana', 'cherry']

# reverse() - Reverse in place
fruits.reverse()
print(fruits)  # ['cherry', 'banana', 'apple']

# reversed() - Return reversed iterator
nums = [1, 2, 3]
reversed_nums = list(reversed(nums))
print(reversed_nums)  # [3, 2, 1]

# Sort with key function
words = ["python", "is", "awesome"]
words.sort(key=len)
print(words)  # ['is', 'python', 'awesome']`},{type:"subheading",content:"List Methods - Copying"},{type:"code",content:`original = [1, 2, 3]

# copy() - Create shallow copy
copied = original.copy()
copied[0] = 999
print(original)  # [1, 2, 3]
print(copied)    # [999, 2, 3]

# list() constructor - Also creates copy
copied2 = list(original)

# Slicing - Also creates copy
copied3 = original[:]

# For nested lists, use deepcopy
import copy
nested = [[1, 2], [3, 4]]
shallow = nested.copy()
deep = copy.deepcopy(nested)

shallow[0][0] = 999
print(nested)   # [[999, 2], [3, 4]] - affected!
print(shallow)  # [[999, 2], [3, 4]]
print(deep)     # [[1, 2], [3, 4]] - not affected`},{type:"subheading",content:"List Comprehensions"},{type:"code",content:`# Basic list comprehension
squares = [x**2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]

# With condition
even_nums = [x for x in range(10) if x % 2 == 0]
print(even_nums)  # [0, 2, 4, 6, 8]

# With if-else
labels = ["even" if x % 2 == 0 else "odd" for x in range(5)]
print(labels)  # ['even', 'odd', 'even', 'odd', 'even']

# Nested comprehension
matrix = [[i*j for j in range(3)] for i in range(3)]
print(matrix)  # [[0, 0, 0], [0, 1, 2], [0, 2, 4]]

# Flatten nested list
nested = [[1, 2], [3, 4], [5, 6]]
flattened = [num for row in nested for num in row]
print(flattened)  # [1, 2, 3, 4, 5, 6]

# String operations
words = ["hello", "world", "python"]
upper_words = [word.upper() for word in words]
print(upper_words)  # ['HELLO', 'WORLD', 'PYTHON']`},{type:"subheading",content:"List Unpacking and Other Operations"},{type:"code",content:`# Unpacking
fruits = ["apple", "banana", "cherry"]
a, b, c = fruits
print(a)  # apple

# Unpacking with *
first, *middle, last = [1, 2, 3, 4, 5]
print(first)   # 1
print(middle)  # [2, 3, 4]
print(last)    # 5

# len() - Get length
print(len(fruits))  # 3

# min() and max()
numbers = [3, 1, 4, 1, 5]
print(min(numbers))  # 1
print(max(numbers))  # 5

# sum() - Sum of numeric list
print(sum(numbers))  # 14

# any() - True if any element is True
print(any([False, True, False]))  # True

# all() - True if all elements are True
print(all([True, True, True]))    # True
print(all([True, False, True]))   # False

# enumerate() - Get index and value
for i, fruit in enumerate(fruits):
    print(f"\${i}: \${fruit}")

# zip() - Combine multiple lists
names = ["Alice", "Bob"]
ages = [25, 30]
for name, age in zip(names, ages):
    print(f"\${name} is \${age}")`},{type:"heading",content:"3. Tuples"},{type:"text",content:"Tuples are ordered, immutable collections. Once created, they cannot be modified. They are memory-efficient and faster than lists."},{type:"subheading",content:"Creating Tuples"},{type:"code",content:`# Empty tuple
empty = ()
empty2 = tuple()

# Tuple with elements
coordinates = (10, 20)
person = ("Alice", 25, "Engineer")
mixed = (1, "hello", 3.14, True)

# Single element tuple (comma required!)
single = (42,)  # This is a tuple
not_tuple = (42)  # This is just an integer

# Tuple without parentheses (tuple packing)
point = 10, 20, 30
print(point)  # (10, 20, 30)

# Tuple from iterable
numbers = tuple([1, 2, 3, 4, 5])
chars = tuple("Python")
print(chars)  # ('P', 'y', 't', 'h', 'o', 'n')`},{type:"subheading",content:"Accessing Tuple Elements"},{type:"code",content:`coordinates = (10, 20, 30, 40, 50)

# Indexing
print(coordinates[0])      # 10
print(coordinates[-1])     # 50

# Slicing
print(coordinates[1:3])    # (20, 30)
print(coordinates[:2])     # (10, 20)
print(coordinates[2:])     # (30, 40, 50)
print(coordinates[::2])    # (10, 30, 50)
print(coordinates[::-1])   # (50, 40, 30, 20, 10)

# Nested tuples
nested = ((1, 2), (3, 4), (5, 6))
print(nested[0])      # (1, 2)
print(nested[0][1])   # 2`},{type:"subheading",content:"Tuple Methods and Operations"},{type:"code",content:`numbers = (1, 2, 3, 2, 4, 2, 5)

# count() - Count occurrences
print(numbers.count(2))  # 3
print(numbers.count(9))  # 0

# index() - Find first occurrence
print(numbers.index(3))  # 2
print(numbers.index(2))  # 1 (first occurrence)

# index with start and end
print(numbers.index(2, 2))  # 3 (search from index 2)

# len() - Get length
print(len(numbers))  # 7

# min() and max()
print(min(numbers))  # 1
print(max(numbers))  # 5

# sum() - Sum of elements
print(sum(numbers))  # 19

# in operator - Check membership
print(3 in numbers)  # True
print(9 in numbers)  # False

# Concatenation
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
combined = tuple1 + tuple2
print(combined)  # (1, 2, 3, 4, 5, 6)

# Repetition
repeated = (1, 2) * 3
print(repeated)  # (1, 2, 1, 2, 1, 2)`},{type:"subheading",content:"Tuple Unpacking"},{type:"code",content:`# Basic unpacking
coordinates = (10, 20)
x, y = coordinates
print(x, y)  # 10 20

# Multiple values
person = ("Alice", 25, "Engineer")
name, age, job = person
print(name)  # Alice

# Unpacking with * (extended unpacking)
numbers = (1, 2, 3, 4, 5)
first, *middle, last = numbers
print(first)   # 1
print(middle)  # [2, 3, 4] (becomes list!)
print(last)    # 5

# Swapping variables using tuples
a = 10
b = 20
a, b = b, a
print(a, b)  # 20 10

# Function returning multiple values
def get_stats():
    return (10, 20, 30)  # Returns tuple

min_val, avg_val, max_val = get_stats()`},{type:"subheading",content:"Named Tuples"},{type:"code",content:`from collections import namedtuple

# Define a named tuple
Point = namedtuple('Point', ['x', 'y'])
person_tuple = namedtuple('Person', ['name', 'age', 'city'])

# Create instances
p = Point(10, 20)
print(p.x, p.y)  # 10 20

person = person_tuple("Alice", 25, "NYC")
print(person.name)  # Alice
print(person.age)   # 25

# Still works like regular tuple
print(person[0])    # Alice
print(len(person))  # 3`},{type:"subheading",content:"When to Use Tuples"},{type:"code",content:`# Use tuples for:

# 1. Fixed collections (coordinates, RGB colors)
rgb = (255, 128, 0)

# 2. Function returns multiple values
def divide(a, b):
    quotient = a // b
    remainder = a % b
    return quotient, remainder  # Returns tuple

# 3. Dictionary keys (tuples are hashable, lists are not)
locations = \${}
locations[(40.7128, -74.0060)] = "New York"
locations[(34.0522, -118.2437)] = "Los Angeles"

# 4. Immutable data for safety
config = ("localhost", 8080, "admin")

# 5. Faster and more memory efficient than lists
large_tuple = tuple(range(1000000))`},{type:"heading",content:"4. Sets"},{type:"text",content:"Sets are unordered collections of unique elements. They automatically remove duplicates and support mathematical set operations."},{type:"subheading",content:"Creating Sets"},{type:"code",content:`# Empty set (must use set(), not \${})
empty = set()

# Set with elements
fruits = \${"apple", "banana", "cherry"}
numbers = \${1, 2, 3, 4, 5}
mixed = \${1, "hello", 3.14, True}

# Duplicates are automatically removed
nums = \${1, 2, 2, 3, 3, 3, 4}
print(nums)  # \${1, 2, 3, 4}

# Set from iterable
chars = set("hello")
print(chars)  # \${'h', 'e', 'l', 'o'} (no duplicate 'l')

list_to_set = set([1, 2, 2, 3, 3, 3])
print(list_to_set)  # \${1, 2, 3}

# Frozen set (immutable set)
frozen = frozenset([1, 2, 3])`},{type:"subheading",content:"Set Methods - Adding Elements"},{type:"code",content:`fruits = \${"apple", "banana"}

# add() - Add single element
fruits.add("cherry")
print(fruits)  # \${'apple', 'banana', 'cherry'}

# Adding duplicate (no effect)
fruits.add("apple")
print(fruits)  # Still \${'apple', 'banana', 'cherry'}

# update() - Add multiple elements from iterable
fruits.update(["date", "elderberry"])
print(fruits)  # \${'apple', 'banana', 'cherry', 'date', 'elderberry'}

# update with multiple iterables
fruits.update(["fig"], \${"grape"})
print(fruits)`},{type:"subheading",content:"Set Methods - Removing Elements"},{type:"code",content:`fruits = \${"apple", "banana", "cherry", "date"}

# remove() - Remove element (raises error if not found)
fruits.remove("banana")
print(fruits)  # \${'apple', 'cherry', 'date'}

# discard() - Remove element (no error if not found)
fruits.discard("cherry")
print(fruits)  # \${'apple', 'date'}

fruits.discard("grape")  # No error even though 'grape' not in set

# pop() - Remove and return arbitrary element
removed = fruits.pop()
print(removed)
print(fruits)

# clear() - Remove all elements
fruits = \${"apple", "banana"}
fruits.clear()
print(fruits)  # set()`},{type:"subheading",content:"Set Operations - Union"},{type:"code",content:`set1 = \${1, 2, 3}
set2 = \${3, 4, 5}

# union() method - All elements from both sets
result = set1.union(set2)
print(result)  # \${1, 2, 3, 4, 5}

# | operator
result = set1 | set2
print(result)  # \${1, 2, 3, 4, 5}

# Union of multiple sets
set3 = \${5, 6, 7}
result = set1.union(set2, set3)
print(result)  # \${1, 2, 3, 4, 5, 6, 7}

# | with multiple sets
result = set1 | set2 | set3
print(result)  # \${1, 2, 3, 4, 5, 6, 7}`},{type:"subheading",content:"Set Operations - Intersection"},{type:"code",content:`set1 = \${1, 2, 3, 4}
set2 = \${3, 4, 5, 6}

# intersection() method - Common elements
result = set1.intersection(set2)
print(result)  # \${3, 4}

# & operator
result = set1 & set2
print(result)  # \${3, 4}

# Intersection of multiple sets
set3 = \${2, 3, 4, 7}
result = set1.intersection(set2, set3)
print(result)  # \${3, 4}

# & with multiple sets
result = set1 & set2 & set3
print(result)  # \${3, 4}`},{type:"subheading",content:"Set Operations - Difference"},{type:"code",content:`set1 = \${1, 2, 3, 4}
set2 = \${3, 4, 5, 6}

# difference() method - Elements in set1 but not in set2
result = set1.difference(set2)
print(result)  # \${1, 2}

# - operator
result = set1 - set2
print(result)  # \${1, 2}

# Reverse difference
result = set2 - set1
print(result)  # \${5, 6}

# symmetric_difference() - Elements in either but not both
result = set1.symmetric_difference(set2)
print(result)  # \${1, 2, 5, 6}

# ^ operator
result = set1 ^ set2
print(result)  # \${1, 2, 5, 6}`},{type:"subheading",content:"Set Methods - Subset and Superset"},{type:"code",content:`set1 = \${1, 2, 3}
set2 = \${1, 2, 3, 4, 5}

# issubset() - Check if set1 is subset of set2
print(set1.issubset(set2))  # True

# <= operator
print(set1 <= set2)  # True

# issuperset() - Check if set2 is superset of set1
print(set2.issuperset(set1))  # True

# >= operator
print(set2 >= set1)  # True

# isdisjoint() - Check if no common elements
set3 = \${7, 8, 9}
print(set1.isdisjoint(set3))  # True
print(set1.isdisjoint(set2))  # False`},{type:"subheading",content:"Set Methods - Update Operations"},{type:"code",content:`set1 = \${1, 2, 3}
set2 = \${3, 4, 5}

# update() or |= - Add elements from another set
set1.update(set2)  # or set1 |= set2
print(set1)  # \${1, 2, 3, 4, 5}

# intersection_update() or &= - Keep only common elements
set1 = \${1, 2, 3, 4}
set1.intersection_update(set2)  # or set1 &= set2
print(set1)  # \${3, 4}

# difference_update() or -= - Remove elements found in other
set1 = \${1, 2, 3, 4}
set1.difference_update(set2)  # or set1 -= set2
print(set1)  # \${1, 2}

# symmetric_difference_update() or ^= - Keep elements in either but not both
set1 = \${1, 2, 3, 4}
set1.symmetric_difference_update(set2)  # or set1 ^= set2
print(set1)  # \${1, 2, 5}`},{type:"subheading",content:"Set Comprehensions"},{type:"code",content:`# Basic set comprehension
squares = \${x**2 for x in range(6)}
print(squares)  # \${0, 1, 4, 9, 16, 25}

# With condition
even_squares = \${x**2 for x in range(10) if x % 2 == 0}
print(even_squares)  # \${0, 4, 16, 36, 64}

# Remove duplicates from list
numbers = [1, 2, 2, 3, 3, 3, 4]
unique = \${x for x in numbers}
print(unique)  # \${1, 2, 3, 4}`},{type:"subheading",content:"Practical Set Uses"},{type:"code",content:`# Remove duplicates
numbers = [1, 2, 2, 3, 3, 3, 4]
unique_nums = list(set(numbers))
print(unique_nums)  # [1, 2, 3, 4]

# Find common elements
list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]
common = set(list1) & set(list2)
print(common)  # \${3, 4}

# Find unique elements in each list
unique_to_list1 = set(list1) - set(list2)
print(unique_to_list1)  # \${1, 2}

# Check if lists have any common elements
has_common = len(set(list1) & set(list2)) > 0
print(has_common)  # True

# Membership testing (faster than lists for large collections)
large_set = set(range(1000000))
print(999999 in large_set)  # Very fast O(1)`},{type:"heading",content:"5. Dictionaries"},{type:"text",content:"Dictionaries store key-value pairs. Keys must be immutable (strings, numbers, tuples), and each key must be unique."},{type:"subheading",content:"Creating Dictionaries"},{type:"code",content:`# Empty dictionary
empty = \${}
empty2 = dict()

# Dictionary with elements
person = \${
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Using dict() constructor
person2 = dict(name="Bob", age=30, city="LA")

# From list of tuples
pairs = [("a", 1), ("b", 2), ("c", 3)]
dict_from_pairs = dict(pairs)
print(dict_from_pairs)  # \${'a': 1, 'b': 2, 'c': 3}

# Using dict comprehension
squares = \${x: x**2 for x in range(5)}
print(squares)  # \${0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Nested dictionaries
students = \${
    "student1": \${"name": "Alice", "grade": 90},
    "student2": \${"name": "Bob", "grade": 85}
}`},{type:"subheading",content:"Accessing Dictionary Values"},{type:"code",content:`person = \${"name": "Alice", "age": 25, "city": "NYC"}

# Using square brackets
print(person["name"])  # Alice

# Using get() method (safer - returns None if key not found)
print(person.get("name"))  # Alice
print(person.get("job"))   # None

# get() with default value
print(person.get("job", "Unknown"))  # Unknown

# KeyError with square brackets if key doesn't exist
# print(person["job"])  # Raises KeyError`},{type:"subheading",content:"Adding and Updating Dictionary Elements"},{type:"code",content:`person = \${"name": "Alice", "age": 25}

# Add new key-value pair
person["city"] = "NYC"
print(person)  # \${'name': 'Alice', 'age': 25, 'city': 'NYC'}

# Update existing value
person["age"] = 26
print(person)  # \${'name': 'Alice', 'age': 26, 'city': 'NYC'}

# update() method - Update with another dictionary
person.update(\${"city": "LA", "job": "Engineer"})
print(person)  # \${'name': 'Alice', 'age': 26, 'city': 'LA', 'job': 'Engineer'}

# update() with keyword arguments
person.update(age=27, salary=80000)
print(person)

# setdefault() - Set value only if key doesn't exist
person.setdefault("country", "USA")
print(person["country"])  # USA

# Won't change existing key
person.setdefault("name", "Bob")
print(person["name"])  # Still Alice`},{type:"subheading",content:"Removing Dictionary Elements"},{type:"code",content:`person = \${"name": "Alice", "age": 25, "city": "NYC", "job": "Engineer"}

# pop() - Remove and return value
age = person.pop("age")
print(age)     # 25
print(person)  # \${'name': 'Alice', 'city': 'NYC', 'job': 'Engineer'}

# pop() with default (doesn't raise error if key not found)
salary = person.pop("salary", 0)
print(salary)  # 0

# popitem() - Remove and return last inserted key-value pair
last_item = person.popitem()
print(last_item)  # ('job', 'Engineer')
print(person)     # \${'name': 'Alice', 'city': 'NYC'}

# del statement - Delete specific key
del person["city"]
print(person)  # \${'name': 'Alice'}

# clear() - Remove all items
person = \${"name": "Alice", "age": 25}
person.clear()
print(person)  # \${}`},{type:"subheading",content:"Dictionary Methods - Keys, Values, Items"},{type:"code",content:`person = \${"name": "Alice", "age": 25, "city": "NYC"}

# keys() - Get all keys
keys = person.keys()
print(keys)  # dict_keys(['name', 'age', 'city'])
print(list(keys))  # ['name', 'age', 'city']

# values() - Get all values
values = person.values()
print(values)  # dict_values(['Alice', 25, 'NYC'])
print(list(values))  # ['Alice', 25, 'NYC']

# items() - Get all key-value pairs
items = person.items()
print(items)  # dict_items([('name', 'Alice'), ('age', 25), ('city', 'NYC')])
print(list(items))  # [('name', 'Alice'), ('age', 25), ('city', 'NYC')]

# Iterating through dictionary
for key in person:
    print(key)

for key in person.keys():
    print(key)

for value in person.values():
    print(value)

for key, value in person.items():
    print(f"\${key}: \${value}")`},{type:"subheading",content:"Dictionary Methods - Checking and Copying"},{type:"code",content:`person = \${"name": "Alice", "age": 25, "city": "NYC"}

# in operator - Check if key exists
print("name" in person)     # True
print("job" in person)      # False

# Check in values
print("Alice" in person.values())  # True

# len() - Get number of key-value pairs
print(len(person))  # 3

# copy() - Create shallow copy
copied = person.copy()
copied["name"] = "Bob"
print(person["name"])  # Alice (original unchanged)
print(copied["name"])  # Bob

# dict() constructor - Also creates copy
copied2 = dict(person)`},{type:"subheading",content:"Dictionary Comprehensions"},{type:"code",content:`# Basic dictionary comprehension
squares = \${x: x**2 for x in range(6)}
print(squares)  # \${0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# With condition
even_squares = \${x: x**2 for x in range(10) if x % 2 == 0}
print(even_squares)  # \${0: 0, 2: 4, 4: 16, 6: 36, 8: 64}

# From two lists
keys = ["name", "age", "city"]
values = ["Alice", 25, "NYC"]
person = \${k: v for k, v in zip(keys, values)}
print(person)  # \${'name': 'Alice', 'age': 25, 'city': 'NYC'}

# Invert dictionary (swap keys and values)
original = \${"a": 1, "b": 2, "c": 3}
inverted = \${v: k for k, v in original.items()}
print(inverted)  # \${1: 'a', 2: 'b', 3: 'c'}

# Conditional key-value transformation
prices = \${"apple": 1.20, "banana": 0.50, "cherry": 2.50}
expensive = \${k: v for k, v in prices.items() if v > 1.0}
print(expensive)  # \${'apple': 1.2, 'cherry': 2.5}`},{type:"subheading",content:"Nested Dictionaries"},{type:"code",content:`# Nested dictionary
students = \${
    "student1": \${
        "name": "Alice",
        "age": 20,
        "grades": [90, 85, 92]
    },
    "student2": \${
        "name": "Bob",
        "age": 21,
        "grades": [88, 90, 87]
    }
}

# Accessing nested values
print(students["student1"]["name"])  # Alice
print(students["student1"]["grades"][0])  # 90

# Iterating nested dictionary
for student_id, student_info in students.items():
    print(f"\${student_id}:")
    for key, value in student_info.items():
        print(f"  \${key}: \${value}")`},{type:"subheading",content:"DefaultDict and OrderedDict"},{type:"code",content:`from collections import defaultdict, OrderedDict

# defaultdict - Provides default value for missing keys
word_count = defaultdict(int)  # default value is 0
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]

for word in words:
    word_count[word] += 1  # No KeyError even if key doesn't exist

print(dict(word_count))  # \${'apple': 3, 'banana': 2, 'cherry': 1}

# defaultdict with list
groups = defaultdict(list)
groups["fruits"].append("apple")
groups["fruits"].append("banana")
groups["vegetables"].append("carrot")
print(dict(groups))  # \${'fruits': ['apple', 'banana'], 'vegetables': ['carrot']}

# OrderedDict - Maintains insertion order (less needed in Python 3.7+)
ordered = OrderedDict()
ordered["a"] = 1
ordered["b"] = 2
ordered["c"] = 3
print(ordered)  # OrderedDict([('a', 1), ('b', 2), ('c', 3)])`},{type:"subheading",content:"Practical Dictionary Examples"},{type:"code",content:`# Count word frequency
text = "hello world hello python world"
words = text.split()
freq = \${}

for word in words:
    freq[word] = freq.get(word, 0) + 1

print(freq)  # \${'hello': 2, 'world': 2, 'python': 1}

# Group items by property
students = [
    \${"name": "Alice", "grade": "A"},
    \${"name": "Bob", "grade": "B"},
    \${"name": "Charlie", "grade": "A"}
]

by_grade = \${}
for student in students:
    grade = student["grade"]
    if grade not in by_grade:
        by_grade[grade] = []
    by_grade[grade].append(student["name"])

print(by_grade)  # \${'A': ['Alice', 'Charlie'], 'B': ['Bob']}

# Merge dictionaries (Python 3.9+)
dict1 = \${"a": 1, "b": 2}
dict2 = \${"c": 3, "d": 4}
merged = dict1 | dict2
print(merged)  # \${'a': 1, 'b': 2, 'c': 3, 'd': 4}

# Merge with ** unpacking
merged2 = \${**dict1, **dict2}
print(merged2)  # \${'a': 1, 'b': 2, 'c': 3, 'd': 4}`},{type:"note",content:"Choose the right data structure: Use strings for text, lists for ordered mutable collections, tuples for immutable data, sets for unique elements and fast lookups, and dictionaries for key-value mappings."},{type:"note",content:"Performance: Dictionary and set lookups are O(1) on average, making them very fast. List lookups are O(n). Consider using sets or dictionaries when you need fast membership testing."}]},functions:{title:"Functions",description:"Master Python functions with comprehensive coverage of parameters, return values, scope, decorators, and advanced functional programming concepts.",sections:[{type:"heading",content:"1. Function Basics"},{type:"text",content:"Functions are reusable blocks of code that perform a specific task. They help organize code, avoid repetition, and make programs more modular."},{type:"subheading",content:"Defining and Calling Functions"},{type:"code",content:`# Defining a function
def greet():
    """Simple function with no parameters."""
    print("Hello, World!")

# Calling a function
greet()  # Output: Hello, World!

# Function with no return (returns None)
def say_hello():
    print("Hello")

result = say_hello()
print(result)  # None`},{type:"subheading",content:"Function Naming Conventions"},{type:"code",content:`# Use snake_case for function names
def calculate_total():
    pass

def get_user_name():
    pass

def is_valid():
    pass

# Use verbs for function names (they perform actions)
def fetch_data():
    pass

def process_records():
    pass

def validate_input():
    pass`},{type:"heading",content:"2. Function Parameters"},{type:"text",content:"Parameters (also called arguments) allow you to pass data into functions. Python supports multiple types of parameters."},{type:"subheading",content:"Positional Parameters"},{type:"code",content:`# Single parameter
def greet_person(name):
    print(f"Hello, \${name}!")

greet_person("Alice")  # Hello, Alice!
greet_person("Bob")    # Hello, Bob!

# Multiple parameters (order matters)
def add_numbers(a, b):
    result = a + b
    print(f"\${a} + \${b} = \${result}")

add_numbers(5, 3)  # 5 + 3 = 8
add_numbers(3, 5)  # 3 + 5 = 8

# Three or more parameters
def calculate_volume(length, width, height):
    volume = length * width * height
    return volume

print(calculate_volume(2, 3, 4))  # 24`},{type:"subheading",content:"Keyword Parameters"},{type:"code",content:`# Pass arguments by name (order doesn't matter)
def create_profile(name, age, city):
    print(f"\${name}, \${age} years old, from \${city}")

# Positional arguments
create_profile("Alice", 25, "New York")

# Keyword arguments (order doesn't matter)
create_profile(age=25, name="Alice", city="New York")
create_profile(city="Boston", name="Bob", age=30)

# Mix positional and keyword (positional must come first)
create_profile("Charlie", age=35, city="Chicago")`},{type:"subheading",content:"Parameter Types Summary"},{type:"code",content:`# Positional-only parameters (before /)
def pos_only(a, b, /):
    return a + b

print(pos_only(1, 2))  # 3
# pos_only(a=1, b=2)  # Error!

# Keyword-only parameters (after *)
def kw_only(*, x, y):
    return x * y

print(kw_only(x=3, y=4))  # 12
# kw_only(3, 4)  # Error!

# Combined: positional-only, normal, keyword-only
def combined(pos_only, /, normal, *, kw_only):
    return pos_only + normal + kw_only

print(combined(1, 2, kw_only=3))  # 6`},{type:"heading",content:"3. Default Parameters"},{type:"text",content:"Default parameters have preset values that are used if no argument is provided."},{type:"code",content:`# Single default parameter
def greet(name, greeting="Hello"):
    print(f"\${greeting}, \${name}!")

greet("Alice")              # Hello, Alice!
greet("Bob", "Hi")          # Hi, Bob!
greet("Charlie", "Hey")     # Hey, Charlie!

# Multiple default parameters
def power(base, exponent=2):
    return base ** exponent

print(power(5))      # 25 (5^2)
print(power(5, 3))   # 125 (5^3)

# All parameters with defaults
def create_user(name="Guest", role="User", active=True):
    return \${"name": name, "role": role, "active": active}

print(create_user())  # All defaults
print(create_user("Alice"))  # Custom name
print(create_user("Bob", "Admin"))  # Custom name and role`},{type:"subheading",content:"Mutable Default Arguments (Common Pitfall)"},{type:"code",content:`# WRONG: Mutable default arguments are shared between calls
def add_item_wrong(item, items=[]):
    items.append(item)
    return items

print(add_item_wrong("apple"))   # ['apple']
print(add_item_wrong("banana"))  # ['apple', 'banana'] - Unexpected!

# CORRECT: Use None and create new list inside
def add_item_correct(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add_item_correct("apple"))   # ['apple']
print(add_item_correct("banana"))  # ['banana'] - Correct!`},{type:"heading",content:"4. Return Values"},{type:"text",content:"Functions can return values using the return statement. A function without a return statement returns None."},{type:"subheading",content:"Basic Return"},{type:"code",content:`# Simple return
def multiply(a, b):
    return a * b

result = multiply(4, 5)
print(result)  # 20

# Return with expression
def is_even(number):
    return number % 2 == 0

print(is_even(4))  # True
print(is_even(7))  # False

# Early return
def divide(a, b):
    if b == 0:
        return "Cannot divide by zero"
    return a / b

print(divide(10, 2))  # 5.0
print(divide(10, 0))  # Cannot divide by zero`},{type:"subheading",content:"Multiple Return Values"},{type:"code",content:`# Return multiple values (actually returns a tuple)
def get_person_info():
    name = "Alice"
    age = 25
    city = "NYC"
    return name, age, city

# Unpack returned values
person_name, person_age, person_city = get_person_info()
print(person_name)  # Alice

# Or capture as tuple
info = get_person_info()
print(info)  # ('Alice', 25, 'NYC')

# Return tuple explicitly
def get_coordinates():
    return (10, 20)

x, y = get_coordinates()

# Return list or dictionary
def get_stats():
    return \${"min": 1, "max": 100, "avg": 50}

stats = get_stats()
print(stats["avg"])  # 50`},{type:"subheading",content:"Return None"},{type:"code",content:`# No return statement (returns None)
def print_message(msg):
    print(msg)

result = print_message("Hello")
print(result)  # None

# Explicit return None
def validate(value):
    if value < 0:
        return None
    return value

print(validate(10))   # 10
print(validate(-5))   # None

# Empty return (also returns None)
def process():
    # Some processing...
    return

result = process()
print(result)  # None`},{type:"heading",content:"5. *args and **kwargs"},{type:"text",content:"Variable-length arguments allow functions to accept any number of positional or keyword arguments."},{type:"subheading",content:"*args - Variable Positional Arguments"},{type:"code",content:`# *args collects extra positional arguments into a tuple
def sum_all(*numbers):
    """Sum any number of arguments."""
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3))        # 6
print(sum_all(1, 2, 3, 4, 5))  # 15
print(sum_all(10))             # 10

# *args with other parameters
def greet_all(greeting, *names):
    for name in names:
        print(f"\${greeting}, \${name}!")

greet_all("Hello", "Alice", "Bob", "Charlie")
# Output:
# Hello, Alice!
# Hello, Bob!
# Hello, Charlie!

# *args is actually a tuple
def show_args(*args):
    print(type(args))  # <class 'tuple'>
    print(args)

show_args(1, 2, 3)  # (1, 2, 3)`},{type:"subheading",content:"**kwargs - Variable Keyword Arguments"},{type:"code",content:`# **kwargs collects extra keyword arguments into a dictionary
def print_info(**info):
    """Print any number of key-value pairs."""
    for key, value in info.items():
        print(f"\${key}: \${value}")

print_info(name="Alice", age=25, city="New York")
# Output:
# name: Alice
# age: 25
# city: New York

# **kwargs with other parameters
def create_user(username, **details):
    print(f"Username: \${username}")
    for key, value in details.items():
        print(f"\${key}: \${value}")

create_user("alice123", email="alice@email.com", age=25, role="Admin")

# **kwargs is actually a dictionary
def show_kwargs(**kwargs):
    print(type(kwargs))  # <class 'dict'>
    print(kwargs)

show_kwargs(a=1, b=2)  # \${'a': 1, 'b': 2}`},{type:"subheading",content:"Combining *args and **kwargs"},{type:"code",content:`# Combine both for maximum flexibility
def flexible_function(*args, **kwargs):
    print("Positional arguments:", args)
    print("Keyword arguments:", kwargs)

flexible_function(1, 2, 3, name="Alice", age=25)
# Positional arguments: (1, 2, 3)
# Keyword arguments: \${'name': 'Alice', 'age': 25}

# Standard order: regular args, *args, **kwargs
def complete_function(a, b, *args, **kwargs):
    print(f"a=\${a}, b=\${b}")
    print(f"args=\${args}")
    print(f"kwargs=\${kwargs}")

complete_function(1, 2, 3, 4, x=10, y=20)
# a=1, b=2
# args=(3, 4)
# kwargs=\${'x': 10, 'y': 20}`},{type:"subheading",content:"Unpacking with * and **"},{type:"code",content:`# Use * to unpack list/tuple into arguments
def add_three(a, b, c):
    return a + b + c

numbers = [1, 2, 3]
print(add_three(*numbers))  # 6 (same as add_three(1, 2, 3))

# Use ** to unpack dictionary into keyword arguments
def create_profile(name, age, city):
    print(f"\${name}, \${age}, \${city}")

user_data = \${"name": "Alice", "age": 25, "city": "NYC"}
create_profile(**user_data)  # Alice, 25, NYC`},{type:"heading",content:"6. Lambda Functions"},{type:"text",content:"Lambda functions are small, anonymous functions defined with the lambda keyword. They can have any number of parameters but only one expression."},{type:"subheading",content:"Lambda Basics"},{type:"code",content:`# Regular function
def square(x):
    return x ** 2

# Lambda function (same thing)
square_lambda = lambda x: x ** 2

print(square(5))         # 25
print(square_lambda(5))  # 25

# Lambda with multiple parameters
add = lambda a, b: a + b
print(add(3, 4))  # 7

multiply = lambda x, y, z: x * y * z
print(multiply(2, 3, 4))  # 24

# Lambda with default parameters
power = lambda x, n=2: x ** n
print(power(5))      # 25 (5^2)
print(power(5, 3))   # 125 (5^3)`},{type:"subheading",content:"Lambda with Built-in Functions"},{type:"code",content:`# map() - Apply function to each item
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# filter() - Filter items based on condition
even_nums = list(filter(lambda x: x % 2 == 0, numbers))
print(even_nums)  # [2, 4]

odd_nums = list(filter(lambda x: x % 2 != 0, numbers))
print(odd_nums)  # [1, 3, 5]

# sorted() - Sort with custom key
words = ["python", "is", "awesome", "language"]
sorted_by_length = sorted(words, key=lambda x: len(x))
print(sorted_by_length)  # ['is', 'python', 'awesome', 'language']

# Sort by last character
sorted_by_last = sorted(words, key=lambda x: x[-1])
print(sorted_by_last)`},{type:"subheading",content:"Lambda with Data Structures"},{type:"code",content:`# Sort list of tuples
students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]

# Sort by grade
by_grade = sorted(students, key=lambda x: x[1])
print(by_grade)  # [('Charlie', 78), ('Alice', 85), ('Bob', 92)]

# Sort list of dictionaries
users = [
    \${"name": "Alice", "age": 25},
    \${"name": "Bob", "age": 30},
    \${"name": "Charlie", "age": 20}
]

by_age = sorted(users, key=lambda x: x["age"])
print(by_age)

# Lambda in list comprehension
numbers = [1, 2, 3, 4, 5]
result = [(lambda x: x**2)(x) for x in numbers]
print(result)  # [1, 4, 9, 16, 25]`},{type:"subheading",content:"When to Use Lambda"},{type:"code",content:`# GOOD: Simple, one-time use
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))

# BAD: Complex logic (use regular function instead)
# calculate = lambda x: x**2 if x > 0 else -x**2 if x < 0 else 0  # Hard to read!

# GOOD: Regular function for complex logic
def calculate(x):
    if x > 0:
        return x**2
    elif x < 0:
        return -x**2
    else:
        return 0

# GOOD: Used with higher-order functions
data = [5, 2, 8, 1, 9]
max_value = max(data, key=lambda x: x)  # Though just max(data) is better here
sorted_data = sorted(data, key=lambda x: -x)  # Sort descending`},{type:"heading",content:"7. Variable Scope"},{type:"text",content:"Scope determines where variables can be accessed. Python has local, enclosing, global, and built-in (LEGB) scopes."},{type:"subheading",content:"Local Scope"},{type:"code",content:`# Variables defined inside a function are local
def my_function():
    x = 10  # Local variable
    print(x)

my_function()  # 10
# print(x)  # NameError: x is not defined

# Each function call has its own local scope
def increment():
    count = 0
    count += 1
    return count

print(increment())  # 1
print(increment())  # 1 (not 2, because count is recreated each time)`},{type:"subheading",content:"Global Scope"},{type:"code",content:`# Variables defined outside functions are global
x = 100  # Global variable

def print_global():
    print(x)  # Can read global variable

print_global()  # 100

# To modify global variable, use 'global' keyword
counter = 0

def increment():
    global counter
    counter += 1

increment()
print(counter)  # 1
increment()
print(counter)  # 2

# Without 'global', creates new local variable
value = 10

def try_modify():
    value = 20  # Creates local variable, doesn't modify global

try_modify()
print(value)  # 10 (global unchanged)`},{type:"subheading",content:"Nonlocal Scope"},{type:"code",content:`# nonlocal refers to variables in enclosing (but not global) scope
def outer():
    x = 10
    
    def inner():
        nonlocal x
        x = 20  # Modifies outer's x
    
    inner()
    print(x)  # 20

outer()

# Without nonlocal, creates new local variable
def outer2():
    x = 10
    
    def inner():
        x = 20  # Creates new local x
    
    inner()
    print(x)  # 10 (outer's x unchanged)

outer2()`},{type:"subheading",content:"LEGB Rule"},{type:"code",content:`# Python searches for variables in this order:
# Local -> Enclosing -> Global -> Built-in

x = "global"

def outer():
    x = "enclosing"
    
    def inner():
        x = "local"
        print(x)  # local
    
    inner()
    print(x)  # enclosing

outer()
print(x)  # global

# Built-in scope (functions like print, len, etc.)
def my_func():
    print("Hello")  # 'print' is from built-in scope`},{type:"heading",content:"8. Docstrings"},{type:"text",content:"Docstrings document what a function does. They appear as the first statement in a function and are enclosed in triple quotes."},{type:"code",content:`# Simple docstring
def greet(name):
    """Greet a person by name."""
    return f"Hello, \${name}!"

# Access docstring
print(greet.__doc__)  # Greet a person by name.

# Detailed docstring (Google style)
def calculate_area(width, height):
    """
    Calculate the area of a rectangle.
    
    Args:
        width (float): The width of the rectangle.
        height (float): The height of the rectangle.
    
    Returns:
        float: The area of the rectangle.
    
    Examples:
        >>> calculate_area(5, 3)
        15.0
    """
    return width * height

# NumPy/SciPy style docstring
def divide(a, b):
    """
    Divide two numbers.
    
    Parameters
    ----------
    a : float
        The numerator.
    b : float
        The denominator.
    
    Returns
    -------
    float
        The result of division.
    
    Raises
    ------
    ValueError
        If b is zero.
    """
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b`},{type:"heading",content:"9. Recursive Functions"},{type:"text",content:"Recursive functions call themselves to solve problems by breaking them down into smaller sub-problems."},{type:"subheading",content:"Basic Recursion"},{type:"code",content:`# Calculate factorial using recursion
def factorial(n):
    """Calculate factorial of n."""
    # Base case
    if n == 0 or n == 1:
        return 1
    # Recursive case
    return n * factorial(n - 1)

print(factorial(5))  # 120 (5 * 4 * 3 * 2 * 1)
print(factorial(0))  # 1

# Countdown using recursion
def countdown(n):
    if n <= 0:
        print("Blastoff!")
    else:
        print(n)
        countdown(n - 1)

countdown(5)  # 5, 4, 3, 2, 1, Blastoff!`},{type:"subheading",content:"Classic Recursive Examples"},{type:"code",content:`# Fibonacci sequence
def fibonacci(n):
    """Return the nth Fibonacci number."""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(6))  # 8
print([fibonacci(i) for i in range(10)])  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# Sum of list using recursion
def sum_list(numbers):
    """Sum a list recursively."""
    if not numbers:  # Base case: empty list
        return 0
    return numbers[0] + sum_list(numbers[1:])

print(sum_list([1, 2, 3, 4, 5]))  # 15

# Power function
def power(base, exp):
    """Calculate base^exp recursively."""
    if exp == 0:
        return 1
    return base * power(base, exp - 1)

print(power(2, 5))  # 32`},{type:"subheading",content:"Recursion with Multiple Recursive Calls"},{type:"code",content:`# Binary tree traversal
def print_tree(node, level=0):
    """Print tree structure."""
    if node is None:
        return
    print("  " * level + str(node))
    if hasattr(node, 'left'):
        print_tree(node.left, level + 1)
    if hasattr(node, 'right'):
        print_tree(node.right, level + 1)

# Tower of Hanoi
def hanoi(n, source, target, auxiliary):
    """Solve Tower of Hanoi puzzle."""
    if n == 1:
        print(f"Move disk 1 from \${source} to \${target}")
        return
    hanoi(n-1, source, auxiliary, target)
    print(f"Move disk \${n} from \${source} to \${target}")
    hanoi(n-1, auxiliary, target, source)

hanoi(3, 'A', 'C', 'B')`},{type:"subheading",content:"Recursion vs Iteration"},{type:"code",content:`# Recursive factorial
def factorial_recursive(n):
    if n <= 1:
        return 1
    return n * factorial_recursive(n - 1)

# Iterative factorial (often more efficient)
def factorial_iterative(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

print(factorial_recursive(5))  # 120
print(factorial_iterative(5))  # 120

# Note: Recursion uses more memory (call stack)
# but can be more elegant for certain problems`},{type:"heading",content:"10. Higher-Order Functions"},{type:"text",content:"Higher-order functions take other functions as arguments or return functions as results."},{type:"subheading",content:"map() Function"},{type:"code",content:`# map(function, iterable) - Apply function to each item
numbers = [1, 2, 3, 4, 5]

# Square each number
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# Convert to strings
strings = list(map(str, numbers))
print(strings)  # ['1', '2', '3', '4', '5']

# Multiple iterables
nums1 = [1, 2, 3]
nums2 = [4, 5, 6]
added = list(map(lambda x, y: x + y, nums1, nums2))
print(added)  # [5, 7, 9]`},{type:"subheading",content:"filter() Function"},{type:"code",content:`# filter(function, iterable) - Filter items based on condition
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Get even numbers
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4, 6, 8, 10]

# Get numbers greater than 5
greater_than_5 = list(filter(lambda x: x > 5, numbers))
print(greater_than_5)  # [6, 7, 8, 9, 10]

# Filter None values
values = [1, None, 2, None, 3, 4, None]
filtered = list(filter(None, values))
print(filtered)  # [1, 2, 3, 4]`},{type:"subheading",content:"reduce() Function"},{type:"code",content:`from functools import reduce

# reduce(function, iterable) - Reduce iterable to single value
numbers = [1, 2, 3, 4, 5]

# Sum all numbers
total = reduce(lambda x, y: x + y, numbers)
print(total)  # 15

# Product of all numbers
product = reduce(lambda x, y: x * y, numbers)
print(product)  # 120

# Find maximum
max_value = reduce(lambda x, y: x if x > y else y, numbers)
print(max_value)  # 5

# With initial value
total_with_initial = reduce(lambda x, y: x + y, numbers, 10)
print(total_with_initial)  # 25 (10 + 15)`},{type:"subheading",content:"Functions Returning Functions"},{type:"code",content:`# Function that returns a function
def multiplier(factor):
    """Return a function that multiplies by factor."""
    def multiply(x):
        return x * factor
    return multiply

times_two = multiplier(2)
times_three = multiplier(3)

print(times_two(5))    # 10
print(times_three(5))  # 15

# Power function generator
def power_of(exponent):
    return lambda base: base ** exponent

square = power_of(2)
cube = power_of(3)

print(square(4))  # 16
print(cube(4))    # 64`},{type:"heading",content:"11. Decorators"},{type:"text",content:"Decorators are functions that modify the behavior of other functions. They use the @ syntax."},{type:"subheading",content:"Basic Decorator"},{type:"code",content:`# Simple decorator
def my_decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

# Apply decorator using @
@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Output:
# Before function call
# Hello!
# After function call

# Equivalent to: say_hello = my_decorator(say_hello)`},{type:"subheading",content:"Decorator with Arguments"},{type:"code",content:`# Decorator that handles function arguments
def logger(func):
    def wrapper(*args, **kwargs):
        print(f"Calling \${func.__name__} with args=\${args}, kwargs=\${kwargs}")
        result = func(*args, **kwargs)
        print(f"\${func.__name__} returned \${result}")
        return result
    return wrapper

@logger
def add(a, b):
    return a + b

result = add(3, 5)
# Output:
# Calling add with args=(3, 5), kwargs=\${}
# add returned 8`},{type:"subheading",content:"Practical Decorators"},{type:"code",content:`import time

# Timing decorator
def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"\${func.__name__} took \${end-start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "Done"

slow_function()  # slow_function took 1.0001 seconds

# Caching decorator (memoization)
def memoize(func):
    cache = \${}
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    return wrapper

@memoize
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(35))  # Much faster with caching!`},{type:"subheading",content:"Multiple Decorators"},{type:"code",content:`# Apply multiple decorators
def uppercase(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()
    return wrapper

def exclaim(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result + "!"
    return wrapper

@exclaim
@uppercase
def greet(name):
    return f"hello, \${name}"

print(greet("alice"))  # HELLO, ALICE!
# Applied bottom-to-top: uppercase first, then exclaim`},{type:"heading",content:"12. Closures"},{type:"text",content:"A closure is a function that remembers values from its enclosing scope even after the outer function has finished executing."},{type:"code",content:`# Basic closure
def outer(x):
    def inner(y):
        return x + y  # inner remembers x
    return inner

add_five = outer(5)
add_ten = outer(10)

print(add_five(3))   # 8
print(add_ten(3))    # 13

# Closure with state
def counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

counter1 = counter()
print(counter1())  # 1
print(counter1())  # 2
print(counter1())  # 3

counter2 = counter()
print(counter2())  # 1 (separate state)

# Practical closure example
def make_multiplier(n):
    def multiplier(x):
        return x * n
    return multiplier

times2 = make_multiplier(2)
times3 = make_multiplier(3)

print(times2(10))  # 20
print(times3(10))  # 30`},{type:"heading",content:"13. Generators and yield"},{type:"text",content:"Generators are functions that use yield to return values one at a time, creating iterators efficiently."},{type:"code",content:`# Simple generator
def count_up_to(n):
    count = 1
    while count <= n:
        yield count
        count += 1

# Use generator
for num in count_up_to(5):
    print(num)  # 1, 2, 3, 4, 5

# Generator saves memory
def fibonacci_gen(n):
    a, b = 0, 1
    count = 0
    while count < n:
        yield a
        a, b = b, a + b
        count += 1

fib = fibonacci_gen(10)
print(list(fib))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# Generator expression (like list comprehension)
squares = (x**2 for x in range(10))
print(list(squares))  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Infinite generator
def infinite_sequence():
    num = 0
    while True:
        yield num
        num += 1

gen = infinite_sequence()
print(next(gen))  # 0
print(next(gen))  # 1
print(next(gen))  # 2`},{type:"heading",content:"14. Function Annotations"},{type:"text",content:"Function annotations provide type hints for parameters and return values. They don't enforce types but help with documentation and IDE support."},{type:"code",content:`# Type annotations
def greet(name: str) -> str:
    return f"Hello, \${name}!"

def add(a: int, b: int) -> int:
    return a + b

# Complex types
from typing import List, Dict, Tuple, Optional

def process_items(items: List[str]) -> Dict[str, int]:
    return \${item: len(item) for item in items}

def get_user(user_id: int) -> Optional[Dict[str, str]]:
    # Returns dict or None
    if user_id > 0:
        return \${"name": "Alice", "email": "alice@email.com"}
    return None

# Multiple return types
def divide(a: float, b: float) -> Tuple[float, float]:
    quotient = a // b
    remainder = a % b
    return quotient, remainder`},{type:"note",content:"Best Practices: Use descriptive function names, keep functions short and focused (do one thing well), use docstrings, avoid too many parameters, and prefer returning values over modifying global state."},{type:"note",content:"Built-in functions like print(), len(), type(), input(), sum(), max(), min() are already provided by Python. Create user-defined functions for custom logic and reusability."}]},modules:{title:"Modules & Packages",description:"Master Python modules and packages with comprehensive coverage of importing, creating custom modules, the standard library, and package management.",sections:[{type:"heading",content:"1. What are Modules?"},{type:"text",content:"A module is a file containing Python code (functions, classes, variables). Modules help organize code, promote reusability, and create namespaces to avoid naming conflicts."},{type:"code",content:`# Any .py file is a module
# Example: math.py, random.py, mymodule.py

# Benefits of modules:
# 1. Code organization - Group related functionality
# 2. Reusability - Use the same code in multiple programs
# 3. Namespace separation - Avoid name conflicts
# 4. Easier maintenance - Changes in one place`},{type:"heading",content:"2. Importing Modules"},{type:"text",content:"Python provides several ways to import modules and access their contents."},{type:"subheading",content:"Import Entire Module"},{type:"code",content:`# Import entire module
import math

# Access module contents with dot notation
print(math.pi)        # 3.14159265359
print(math.sqrt(16))  # 4.0
print(math.ceil(4.3)) # 5
print(math.floor(4.7)) # 4

# Multiple imports
import math, random, os`},{type:"subheading",content:"Import Specific Items"},{type:"code",content:`# Import specific functions/variables
from math import pi, sqrt, ceil

# Use directly without module prefix
print(pi)       # 3.14159265359
print(sqrt(25)) # 5.0
print(ceil(4.3)) # 5

# Import multiple specific items
from random import randint, choice, shuffle

# Import from multiple modules
from math import sqrt
from random import randint
from datetime import datetime`},{type:"subheading",content:"Import with Alias"},{type:"code",content:`# Module alias (shorter name)
import math as m
print(m.sqrt(16))  # 4.0

# Common aliases
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Alias for specific imports
from datetime import datetime as dt
now = dt.now()
print(now)

# Multiple aliases
from math import sqrt as square_root
from math import ceil as ceiling
print(square_root(16))  # 4.0
print(ceiling(4.3))     # 5`},{type:"subheading",content:"Import All (Not Recommended)"},{type:"code",content:`# Import everything from module
from math import *

# Can use all functions directly
print(pi)      # 3.14159265359
print(sqrt(9)) # 3.0
print(cos(0))  # 1.0

# ⚠️ Problems with import *:
# 1. Namespace pollution - unclear where names come from
# 2. Name conflicts - can override existing names
# 3. Hard to debug - which module has what?

# Example of conflict:
from math import *
from statistics import *
# If both have 'mean', which one is used?

# BETTER: Be explicit
from math import sqrt, pi
from statistics import mean`},{type:"heading",content:"3. Creating Custom Modules"},{type:"text",content:"Any Python file (.py) can be used as a module. Simply create a file with functions, classes, or variables."},{type:"subheading",content:"Basic Custom Module"},{type:"code",language:"python",content:`# File: mymodule.py

"""
This is a custom module for demonstration.
It contains utility functions and constants.
"""

# Module-level constant
PI = 3.14159

# Functions
def greet(name):
    """Greet a person by name."""
    return f"Hello, \${name}!"

def add(a, b):
    """Add two numbers."""
    return a + b

def multiply(a, b):
    """Multiply two numbers."""
    return a * b

# Private function (by convention, starts with _)
def _internal_helper():
    """Not intended for external use."""
    return "Internal use only"

# Module initialization code
print("mymodule loaded")`},{type:"text",content:"Import and use the custom module:"},{type:"code",content:`# File: main.py
import mymodule

# Use module contents
print(mymodule.greet("Alice"))  # Hello, Alice!
print(mymodule.add(5, 3))       # 8
print(mymodule.PI)              # 3.14159

# Different import styles
from mymodule import greet, add
print(greet("Bob"))  # Hello, Bob!
print(add(10, 20))   # 30

# Import with alias
import mymodule as mm
print(mm.multiply(4, 5))  # 20`},{type:"subheading",content:'Module with __name__ == "__main__"'},{type:"code",language:"python",content:`# File: calculator.py

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

# Code that runs only when file is executed directly
if __name__ == "__main__":
    # Test code
    print("Testing calculator module...")
    print(f"2 + 3 = \${add(2, 3)}")
    print(f"5 - 2 = \${subtract(5, 2)}")
    print(f"4 * 3 = \${multiply(4, 3)}")

# When imported: __name__ is "calculator" (test code doesn't run)
# When executed: __name__ is "__main__" (test code runs)`},{type:"subheading",content:"Module Attributes"},{type:"code",content:`import math

# __name__ - Module name
print(math.__name__)  # math

# __file__ - Module file path
print(math.__file__)  # /path/to/math.py

# __doc__ - Module docstring
print(math.__doc__)  # This module provides access to mathematical functions

# dir() - List all names in module
print(dir(math))  # ['__doc__', '__name__', 'pi', 'sqrt', 'ceil', ...]

# help() - Get help on module
help(math)  # Shows detailed documentation`},{type:"heading",content:"4. Module Search Path"},{type:"text",content:"Python searches for modules in specific locations defined in sys.path."},{type:"code",content:`import sys

# View module search path
print(sys.path)
# Output: [
#   '',  # Current directory (first!)
#   '/usr/lib/python3.x',  # Standard library
#   '/usr/lib/python3.x/site-packages',  # Third-party packages
#   ...
# ]

# Python searches in this order:
# 1. Current directory
# 2. PYTHONPATH environment variable
# 3. Standard library directories
# 4. Site-packages (third-party)

# Add custom path
sys.path.append('/my/custom/modules')

# Insert at beginning (highest priority)
sys.path.insert(0, '/priority/modules')`},{type:"heading",content:"5. Reloading Modules"},{type:"text",content:"Modules are loaded only once. To reload a modified module, use importlib.reload()."},{type:"code",content:`import importlib
import mymodule

# Module is loaded

# ... Make changes to mymodule.py ...

# Reload the module
importlib.reload(mymodule)

# Note: import mymodule again won't reload it!
# Must use importlib.reload()`},{type:"heading",content:"6. dir() and help() Functions"},{type:"text",content:"Use dir() to list module contents and help() to get documentation."},{type:"code",content:`import math

# dir() - List all names in module
contents = dir(math)
print(contents)
# ['__doc__', '__name__', 'acos', 'asin', 'atan', 'ceil', 'cos', 'pi', 'sqrt', ...]

# Filter out private attributes
public_items = [item for item in dir(math) if not item.startswith('_')]
print(public_items)

# help() - Get detailed documentation
help(math)  # Full module documentation
help(math.sqrt)  # Function-specific help

# Get docstring
print(math.sqrt.__doc__)  # "Return the square root of x."`},{type:"heading",content:"7. __all__ Variable"},{type:"text",content:'The __all__ list defines what gets imported with "from module import *".'},{type:"code",language:"python",content:`# File: mymodule.py

# Define what's publicly exported
__all__ = ['add', 'subtract', 'PI']

PI = 3.14159

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def _internal_function():
    """Not included in __all__"""
    return "Private"

# In another file:
from mymodule import *
# Only add, subtract, and PI are imported
# _internal_function is NOT imported`},{type:"heading",content:"8. Python Standard Library"},{type:"text",content:"Python comes with a rich standard library. Here are the most commonly used modules organized by category."},{type:"subheading",content:"Math and Numbers"},{type:"code",content:`# math - Mathematical functions
import math
print(math.sqrt(16))      # 4.0
print(math.ceil(4.3))     # 5
print(math.floor(4.7))    # 4
print(math.pi)            # 3.14159...
print(math.factorial(5))  # 120
print(math.gcd(48, 18))   # 6

# random - Random number generation
import random
print(random.random())           # Random float 0.0-1.0
print(random.randint(1, 10))     # Random int 1-10
print(random.choice(['a', 'b', 'c']))  # Random choice
random.shuffle([1, 2, 3, 4, 5])  # Shuffle in place
print(random.sample([1,2,3,4,5], 3))  # Random sample

# statistics - Statistical functions
from statistics import mean, median, mode, stdev
data = [1, 2, 3, 4, 5, 5]
print(mean(data))    # 3.333...
print(median(data))  # 3.5
print(mode(data))    # 5
print(stdev(data))   # 1.633...

# decimal - Decimal arithmetic
from decimal import Decimal
print(Decimal('0.1') + Decimal('0.2'))  # 0.3 (exact!)

# fractions - Rational numbers
from fractions import Fraction
print(Fraction(1, 3) + Fraction(1, 6))  # 1/2`},{type:"subheading",content:"Date and Time"},{type:"code",content:`# datetime - Date and time manipulation
from datetime import datetime, date, time, timedelta

# Current date and time
now = datetime.now()
print(now)  # 2025-01-28 14:30:00...

# Create specific datetime
dt = datetime(2025, 1, 28, 14, 30, 0)
print(dt)  # 2025-01-28 14:30:00

# Date arithmetic
tomorrow = now + timedelta(days=1)
next_week = now + timedelta(weeks=1)
one_hour_ago = now - timedelta(hours=1)

# Formatting
print(now.strftime("%Y-%m-%d"))  # 2025-01-28
print(now.strftime("%B %d, %Y"))  # January 28, 2025

# Parsing
date_str = "2025-01-28"
parsed = datetime.strptime(date_str, "%Y-%m-%d")

# time - Time access and conversions
import time
print(time.time())      # Seconds since epoch
time.sleep(1)           # Sleep for 1 second
print(time.ctime())     # Current time as string`},{type:"subheading",content:"File and Directory Operations"},{type:"code",content:`# os - Operating system interface
import os

# Directory operations
print(os.getcwd())           # Current directory
# os.chdir('/path')          # Change directory
# os.mkdir('newfolder')      # Create directory
# os.makedirs('a/b/c')       # Create nested directories
# os.rmdir('folder')         # Remove directory
# os.remove('file.txt')      # Delete file

# Path operations
print(os.path.exists('file.txt'))   # Check if exists
print(os.path.isfile('file.txt'))   # Check if file
print(os.path.isdir('folder'))      # Check if directory
print(os.path.join('dir', 'file'))  # Join paths

# Environment variables
print(os.environ.get('HOME'))       # Get env variable
# os.environ['MY_VAR'] = 'value'    # Set env variable

# pathlib - Object-oriented path operations (Python 3.4+)
from pathlib import Path

# Create path object
path = Path('folder/subfolder/file.txt')
print(path.name)       # file.txt
print(path.suffix)     # .txt
print(path.parent)     # folder/subfolder
print(path.exists())   # True/False

# glob - Find files matching pattern
import glob
txt_files = glob.glob('*.txt')      # All .txt files
py_files = glob.glob('**/*.py', recursive=True)  # All .py files recursively

# shutil - High-level file operations
import shutil
# shutil.copy('src.txt', 'dst.txt')    # Copy file
# shutil.move('src.txt', 'dst.txt')    # Move file
# shutil.rmtree('folder')              # Remove directory tree`},{type:"subheading",content:"Data Serialization"},{type:"code",content:`# json - JSON encoding and decoding
import json

# Python to JSON
data = \${"name": "Alice", "age": 25, "active": True}
json_string = json.dumps(data)
print(json_string)  # \${"name": "Alice", "age": 25, "active": true}

# Pretty print
print(json.dumps(data, indent=2))

# JSON to Python
parsed = json.loads(json_string)
print(parsed["name"])  # Alice

# Read from file
# with open('data.json', 'r') as f:
#     data = json.load(f)

# Write to file
# with open('data.json', 'w') as f:
#     json.dump(data, f)

# pickle - Python object serialization
import pickle

# Save Python object
data = \${"users": ["Alice", "Bob"], "count": 2}
# with open('data.pkl', 'wb') as f:
#     pickle.dump(data, f)

# Load Python object
# with open('data.pkl', 'rb') as f:
#     loaded = pickle.load(f)

# csv - CSV file reading and writing
import csv

# Write CSV
# with open('data.csv', 'w', newline='') as f:
#     writer = csv.writer(f)
#     writer.writerow(['Name', 'Age'])
#     writer.writerow(['Alice', 25])

# Read CSV
# with open('data.csv', 'r') as f:
#     reader = csv.reader(f)
#     for row in reader:
#         print(row)`},{type:"subheading",content:"String and Text Processing"},{type:"code",content:`# re - Regular expressions
import re

# Find pattern
text = "Contact: alice@email.com"
match = re.search(r'\\w+@\\w+\\.\\w+', text)
if match:
    print(match.group())  # alice@email.com

# Find all matches
emails = re.findall(r'\\w+@\\w+\\.\\w+', "alice@email.com, bob@test.com")
print(emails)  # ['alice@email.com', 'bob@test.com']

# Replace
result = re.sub(r'\\d+', 'X', "I have 3 apples and 5 oranges")
print(result)  # I have X apples and X oranges

# Split
parts = re.split(r'\\s+', "Hello   World  Python")
print(parts)  # ['Hello', 'World', 'Python']

# string - String constants
import string
print(string.ascii_lowercase)  # abcdefghijklmnopqrstuvwxyz
print(string.ascii_uppercase)  # ABCDEFGHIJKLMNOPQRSTUVWXYZ
print(string.digits)           # 0123456789
print(string.punctuation)      # !"#$%&'()*+,-./:;<=>?@[\\]^_\`\${|}~

# textwrap - Text wrapping and formatting
import textwrap
long_text = "This is a very long text that needs to be wrapped at 20 characters."
wrapped = textwrap.fill(long_text, width=20)
print(wrapped)`},{type:"subheading",content:"System and Runtime"},{type:"code",content:`# sys - System-specific parameters
import sys

print(sys.version)        # Python version
print(sys.platform)       # Platform (linux, win32, darwin)
print(sys.argv)           # Command line arguments
print(sys.path)           # Module search path

# Exit program
# sys.exit(0)  # Exit with code 0 (success)

# argparse - Command-line argument parsing
import argparse

parser = argparse.ArgumentParser(description='My program')
parser.add_argument('name', help='Your name')
parser.add_argument('--age', type=int, help='Your age')
# args = parser.parse_args()
# print(f"Name: \${args.name}, Age: \${args.age}")

# subprocess - Subprocess management
import subprocess

# Run command
# result = subprocess.run(['ls', '-l'], capture_output=True, text=True)
# print(result.stdout)

# platform - Access platform data
import platform
print(platform.system())   # Linux, Windows, Darwin
print(platform.python_version())  # 3.9.7`},{type:"subheading",content:"Collections and Data Structures"},{type:"code",content:`# collections - Specialized container datatypes
from collections import Counter, defaultdict, OrderedDict, namedtuple, deque

# Counter - Count occurrences
counter = Counter(['a', 'b', 'a', 'c', 'b', 'a'])
print(counter)  # Counter(\${'a': 3, 'b': 2, 'c': 1})
print(counter.most_common(2))  # [('a', 3), ('b', 2)]

# defaultdict - Dictionary with default values
dd = defaultdict(int)
dd['count'] += 1  # No KeyError!

# OrderedDict - Maintains insertion order (less needed in Python 3.7+)
od = OrderedDict()
od['first'] = 1
od['second'] = 2

# namedtuple - Tuple with named fields
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)
print(p.x, p.y)  # 10 20

# deque - Double-ended queue
dq = deque([1, 2, 3])
dq.append(4)      # Add to right
dq.appendleft(0)  # Add to left
dq.pop()          # Remove from right
dq.popleft()      # Remove from left

# itertools - Iterator functions
import itertools

# count - Infinite counter
# for i in itertools.count(1):
#     if i > 5: break
#     print(i)

# cycle - Infinite cycle
# for item in itertools.cycle(['A', 'B', 'C']):
#     print(item)  # A, B, C, A, B, C, ...

# chain - Chain iterables
print(list(itertools.chain([1,2], [3,4])))  # [1, 2, 3, 4]

# combinations and permutations
print(list(itertools.combinations([1,2,3], 2)))  # [(1, 2), (1, 3), (2, 3)]
print(list(itertools.permutations([1,2,3], 2)))  # [(1, 2), (1, 3), (2, 1), ...]`},{type:"subheading",content:"Internet and Web"},{type:"code",content:`# urllib - URL handling
from urllib.request import urlopen
from urllib.parse import urlencode, urlparse

# Parse URL
url = "https://example.com/path?query=value"
parsed = urlparse(url)
print(parsed.scheme)   # https
print(parsed.netloc)   # example.com
print(parsed.path)     # /path

# URL encode
params = \${'name': 'Alice', 'age': 25}
encoded = urlencode(params)
print(encoded)  # name=Alice&age=25

# http.server - Simple HTTP server
# Run from command line:
# python -m http.server 8000

# webbrowser - Open browser
import webbrowser
# webbrowser.open('https://python.org')

# email - Email handling
from email.message import EmailMessage

msg = EmailMessage()
msg['Subject'] = 'Test Email'
msg['From'] = 'sender@example.com'
msg['To'] = 'receiver@example.com'
msg.set_content('Hello, this is a test email.')`},{type:"heading",content:"9. Packages"},{type:"text",content:"A package is a collection of modules organized in directories with a special __init__.py file. Packages provide namespace organization."},{type:"subheading",content:"Package Structure"},{type:"code",language:"text",content:`mypackage/                 # Package directory
    __init__.py            # Makes it a package (can be empty)
    module1.py             # Module
    module2.py             # Module
    subpackage/            # Sub-package
        __init__.py        # Makes it a package
        module3.py         # Module in sub-package
        module4.py`},{type:"subheading",content:"Creating a Package"},{type:"code",language:"python",content:`# File: mypackage/__init__.py
"""
MyPackage - A demonstration package.
"""

# Package-level initialization code
print("MyPackage initialized")

# Define what's available at package level
from .module1 import function1
from .module2 import function2

__all__ = ['function1', 'function2']

# Package version
__version__ = '1.0.0'`},{type:"code",language:"python",content:`# File: mypackage/module1.py

def function1():
    return "Function from module1"

def helper1():
    return "Helper function"`},{type:"code",language:"python",content:`# File: mypackage/module2.py

def function2():
    return "Function from module2"

class MyClass:
    pass`},{type:"subheading",content:"Importing from Packages"},{type:"code",content:`# Import entire package
import mypackage
print(mypackage.function1())  # Available from __init__.py

# Import specific module
from mypackage import module1
print(module1.function1())

# Import from module directly
from mypackage.module1 import function1
print(function1())

# Import from sub-package
from mypackage.subpackage import module3

# Dot notation
import mypackage.module1
print(mypackage.module1.function1())

import mypackage.subpackage.module3
print(mypackage.subpackage.module3.some_function())`},{type:"subheading",content:"Relative Imports"},{type:"code",language:"python",content:`# Inside mypackage/module2.py

# Relative import from same package
from . import module1          # Import sibling module
from .module1 import function1 # Import from sibling

# Import from parent package
from .. import some_module     # One level up

# Import from sub-package
from .subpackage import module3

# Absolute import (preferred for clarity)
from mypackage import module1
from mypackage.module1 import function1`},{type:"subheading",content:"__init__.py Uses"},{type:"code",language:"python",content:`# File: mypackage/__init__.py

# 1. Make directory a package (can be empty in Python 3.3+)

# 2. Package initialization code
print("Initializing mypackage...")

# 3. Expose package-level API
from .module1 import function1
from .module2 import MyClass, function2

# 4. Define __all__ for "from package import *"
__all__ = ['function1', 'function2', 'MyClass']

# 5. Package metadata
__version__ = '1.0.0'
__author__ = 'Your Name'
__license__ = 'MIT'

# 6. Convenience imports
# Users can do: from mypackage import function1
# Instead of: from mypackage.module1 import function1`},{type:"heading",content:"10. Circular Imports"},{type:"text",content:"Circular imports occur when modules import each other. This can cause problems and should be avoided."},{type:"code",language:"python",content:`# File: module_a.py
from module_b import function_b  # ⚠️ Circular import!

def function_a():
    return "A" + function_b()

# File: module_b.py
from module_a import function_a  # ⚠️ Circular import!

def function_b():
    return "B" + function_a()

# This causes ImportError!`},{type:"subheading",content:"Solutions to Circular Imports"},{type:"code",language:"python",content:`# Solution 1: Restructure code (best)
# Move shared functionality to a third module

# File: shared.py
def shared_function():
    return "Shared"

# File: module_a.py
from shared import shared_function

# File: module_b.py
from shared import shared_function

# Solution 2: Import inside function
# File: module_a.py
def function_a():
    from module_b import function_b  # Import when needed
    return "A" + function_b()

# Solution 3: Import at end of file
# File: module_a.py
def function_a():
    return "A"

from module_b import function_b  # Import after definitions`},{type:"heading",content:"11. Virtual Environments"},{type:"text",content:"Virtual environments create isolated Python environments for different projects, preventing dependency conflicts."},{type:"subheading",content:"Creating Virtual Environments"},{type:"code",language:"bash",content:`# Create virtual environment using venv (built-in)
python -m venv myenv

# Create with specific Python version
python3.9 -m venv myenv

# Create in current directory
python -m venv .venv

# Alternative: virtualenv (third-party, more features)
pip install virtualenv
virtualenv myenv`},{type:"subheading",content:"Activating Virtual Environments"},{type:"code",language:"bash",content:`# Windows
myenv\\Scripts\\activate

# Mac/Linux
source myenv/bin/activate

# Fish shell (Mac/Linux)
source myenv/bin/activate.fish

# After activation, prompt shows: (myenv)

# Check active environment
which python  # Mac/Linux
where python  # Windows`},{type:"subheading",content:"Working with Virtual Environments"},{type:"code",language:"bash",content:`# Install packages (only in this environment)
pip install requests
pip install pandas numpy matplotlib

# See installed packages
pip list

# See package details
pip show requests

# Deactivate environment
deactivate

# Delete environment (just delete the folder)
rm -rf myenv  # Mac/Linux
rmdir /s myenv  # Windows`},{type:"heading",content:"12. Package Management with pip"},{type:"text",content:"pip is Python's package installer, used to install packages from PyPI (Python Package Index)."},{type:"subheading",content:"Installing Packages"},{type:"code",language:"bash",content:`# Install latest version
pip install requests

# Install specific version
pip install requests==2.28.0

# Install minimum version
pip install requests>=2.28.0

# Install version range
pip install "requests>=2.28.0,<3.0.0"

# Install multiple packages
pip install requests pandas numpy

# Install from requirements file
pip install -r requirements.txt

# Install in editable mode (for development)
pip install -e .

# Install from git repository
pip install git+https://github.com/user/repo.git`},{type:"subheading",content:"Managing Packages"},{type:"code",language:"bash",content:`# List installed packages
pip list

# List outdated packages
pip list --outdated

# Show package information
pip show requests

# Upgrade package
pip install --upgrade requests

# Upgrade pip itself
pip install --upgrade pip

# Uninstall package
pip uninstall requests

# Uninstall multiple packages
pip uninstall requests pandas numpy`},{type:"subheading",content:"Requirements Files"},{type:"code",language:"bash",content:`# Save current environment packages
pip freeze > requirements.txt

# Contents of requirements.txt:
# requests==2.28.1
# pandas==1.5.3
# numpy==1.24.2

# Install from requirements file
pip install -r requirements.txt

# Create requirements file manually
# requirements.txt:
requests>=2.28.0
pandas
numpy==1.24.2

# Separate files for different purposes
# requirements-dev.txt (development dependencies)
-r requirements.txt
pytest
black
flake8`},{type:"subheading",content:"Common pip Commands"},{type:"code",language:"bash",content:`# Search for packages (deprecated, use PyPI website)
# pip search requests

# Download package without installing
pip download requests

# Check installed packages for issues
pip check

# Show pip configuration
pip config list

# Cache management
pip cache dir     # Show cache directory
pip cache list    # List cached packages
pip cache purge   # Clear cache`},{type:"heading",content:"13. Creating Your Own Package"},{type:"text",content:"You can create and distribute your own Python packages using setup.py or pyproject.toml."},{type:"subheading",content:"Package Structure"},{type:"code",language:"text",content:`myproject/
    mypackage/
        __init__.py
        module1.py
        module2.py
    tests/
        test_module1.py
    setup.py
    README.md
    LICENSE
    requirements.txt`},{type:"subheading",content:"setup.py File"},{type:"code",language:"python",content:`# setup.py
from setuptools import setup, find_packages

setup(
    name='mypackage',
    version='1.0.0',
    author='Your Name',
    author_email='your.email@example.com',
    description='A short description',
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    url='https://github.com/yourusername/mypackage',
    packages=find_packages(),
    classifiers=[
        'Programming Language :: Python :: 3',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
    install_requires=[
        'requests>=2.28.0',
        'pandas>=1.5.0',
    ],
    entry_points=\${
        'console_scripts': [
            'mycommand=mypackage.cli:main',
        ],
    },
)`},{type:"subheading",content:"Installing Your Package"},{type:"code",language:"bash",content:`# Install in development mode
pip install -e .

# Build distribution
python setup.py sdist bdist_wheel

# Upload to PyPI
pip install twine
twine upload dist/*

# Install from local directory
pip install /path/to/mypackage

# Install from GitHub
pip install git+https://github.com/user/mypackage.git`},{type:"heading",content:"14. Best Practices"},{type:"text",content:"Follow these best practices when working with modules and packages."},{type:"code",content:`# 1. Use descriptive module names
# Good: user_authentication.py, database_utils.py
# Bad: utils.py, helpers.py, stuff.py

# 2. Avoid circular imports
# Restructure code to eliminate circular dependencies

# 3. Use __all__ to define public API
__all__ = ['public_function', 'PublicClass']

# 4. Write module docstrings
"""
Module for user authentication.

This module provides functions for user login, logout,
and session management.
"""

# 5. Prefer absolute imports over relative
# Good: from mypackage.module import function
# OK: from .module import function

# 6. Don't use "from module import *"
# Bad: from math import *
# Good: from math import sqrt, pi

# 7. Group imports properly
# Standard library imports
import os
import sys

# Third-party imports
import requests
import pandas

# Local imports
from mypackage import module1

# 8. Use virtual environments
# Always create a virtual environment for each project

# 9. Pin dependencies
# Use requirements.txt with specific versions

# 10. Keep modules focused
# Each module should have a single, well-defined purpose`},{type:"note",content:"Always use virtual environments for your projects to avoid dependency conflicts. Use pip freeze to save dependencies and requirements.txt for reproducibility."},{type:"note",content:"The Python Standard Library is extensive and well-documented. Explore https://docs.python.org/3/library/ to discover more built-in modules before installing third-party packages."}]},"oop-concepts":{title:"OOP Concepts",description:"Master Object-Oriented Programming fundamentals with comprehensive coverage of classes, objects, attributes, methods, and special methods.",sections:[{type:"heading",content:"1. What is OOP?"},{type:"text",content:"Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects rather than functions. Objects bundle data (attributes) and behaviors (methods) together, making code more modular, reusable, and maintainable."},{type:"code",content:`# OOP Key Concepts:
# 1. Class - Blueprint/template for creating objects
# 2. Object - Instance of a class
# 3. Attributes - Variables that belong to an object
# 4. Methods - Functions that belong to an object

# Benefits of OOP:
# - Code reusability
# - Modularity and organization
# - Data encapsulation
# - Easier maintenance
# - Real-world modeling`},{type:"heading",content:"2. Classes and Objects"},{type:"text",content:"A class is a blueprint for creating objects. An object is an instance of a class with actual values."},{type:"subheading",content:"Creating a Simple Class"},{type:"code",content:`# Define a class (blueprint)
class Dog:
    """A simple Dog class."""
    
    def bark(self):
        """Method to make the dog bark."""
        print("Woof!")
    
    def sit(self):
        """Method to make the dog sit."""
        print("Dog is sitting")

# Create objects (instances)
dog1 = Dog()
dog2 = Dog()

# Each object is independent
dog1.bark()  # Woof!
dog2.bark()  # Woof!
dog1.sit()   # Dog is sitting

# Check type and instance
print(type(dog1))  # <class '__main__.Dog'>
print(isinstance(dog1, Dog))  # True`},{type:"subheading",content:"Class vs Object"},{type:"code",content:`# Class is a blueprint
class Car:
    pass

# Objects are actual instances
car1 = Car()  # First car object
car2 = Car()  # Second car object
car3 = Car()  # Third car object

# Each object is unique
print(id(car1))  # Different memory addresses
print(id(car2))
print(id(car3))

# All are instances of Car class
print(type(car1))  # <class '__main__.Car'>`},{type:"heading",content:"3. The __init__ Constructor"},{type:"text",content:"The __init__ method is a special method (constructor) called automatically when creating an object. It initializes the object's attributes."},{type:"subheading",content:"Basic Constructor"},{type:"code",content:`class Person:
    def __init__(self, name, age):
        """Constructor to initialize Person object."""
        self.name = name
        self.age = age
    
    def introduce(self):
        print(f"Hi, I'm \${self.name} and I'm \${self.age} years old")

# Create person objects
person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

person1.introduce()  # Hi, I'm Alice and I'm 25 years old
person2.introduce()  # Hi, I'm Bob and I'm 30 years old

# Access attributes
print(person1.name)  # Alice
print(person2.age)   # 30

# Modify attributes
person1.age = 26
print(person1.age)  # 26`},{type:"subheading",content:"Constructor with Default Values"},{type:"code",content:`class Student:
    def __init__(self, name, age, grade="A"):
        self.name = name
        self.age = age
        self.grade = grade
    
    def display(self):
        print(f"\${self.name}, Age: \${self.age}, Grade: \${self.grade}")

# With all arguments
student1 = Student("Alice", 20, "B")
student1.display()  # Alice, Age: 20, Grade: B

# Using default value
student2 = Student("Bob", 21)
student2.display()  # Bob, Age: 21, Grade: A`},{type:"subheading",content:"Constructor without Parameters"},{type:"code",content:`class Counter:
    def __init__(self):
        """Initialize counter to 0."""
        self.count = 0
    
    def increment(self):
        self.count += 1
    
    def get_count(self):
        return self.count

counter = Counter()
print(counter.get_count())  # 0
counter.increment()
counter.increment()
print(counter.get_count())  # 2`},{type:"heading",content:"4. The self Parameter"},{type:"text",content:"self represents the current instance of the class. It's used to access instance attributes and methods. self must be the first parameter in instance methods."},{type:"code",content:`class Car:
    def __init__(self, brand, model, year):
        # self refers to the current object being created
        self.brand = brand    # Instance attribute
        self.model = model
        self.year = year
        self.mileage = 0      # Initialize with default
    
    def display_info(self):
        # self is used to access instance attributes
        print(f"\${self.year} \${self.brand} \${self.model}")
        print(f"Mileage: \${self.mileage} miles")
    
    def drive(self, miles):
        # self accesses and modifies instance attributes
        self.mileage += miles
        print(f"Drove \${miles} miles")

# When calling methods, Python automatically passes self
car = Car("Toyota", "Camry", 2024)
car.display_info()  # self = car
car.drive(100)      # self = car

# This is what actually happens behind the scenes:
# Car.display_info(car)  # Explicit self
# Car.drive(car, 100)    # Explicit self`},{type:"subheading",content:"Multiple Objects with self"},{type:"code",content:`class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance
    
    def deposit(self, amount):
        # self ensures we update the correct object's balance
        self.balance += amount
        print(f"\${self.owner} deposited $\${amount}")

# Two different accounts
account1 = BankAccount("Alice", 1000)
account2 = BankAccount("Bob", 2000)

# Each has its own balance
account1.deposit(500)  # Alice deposited $500
account2.deposit(300)  # Bob deposited $300

print(account1.balance)  # 1500
print(account2.balance)  # 2300`},{type:"subheading",content:"self is Not a Keyword"},{type:"code",content:`# You can use any name, but 'self' is convention
class Example:
    def __init__(this, value):  # 'this' instead of 'self'
        this.value = value
    
    def display(this):
        print(this.value)

obj = Example(10)
obj.display()  # 10

# However, ALWAYS use 'self' - it's Python convention!`},{type:"heading",content:"5. Instance Variables vs Class Variables"},{type:"text",content:"Instance variables are unique to each object (defined with self). Class variables are shared by all instances (defined in the class body)."},{type:"subheading",content:"Instance Variables"},{type:"code",content:`class Dog:
    def __init__(self, name, age):
        # Instance variables (unique to each object)
        self.name = name
        self.age = age

dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)

# Each dog has different values
print(dog1.name)  # Buddy
print(dog2.name)  # Max

# Modifying one doesn't affect the other
dog1.name = "Charlie"
print(dog1.name)  # Charlie
print(dog2.name)  # Max (unchanged)`},{type:"subheading",content:"Class Variables"},{type:"code",content:`class Student:
    # Class variable (shared by ALL students)
    school_name = "ABC High School"
    total_students = 0
    
    def __init__(self, name, grade):
        # Instance variables (unique to each student)
        self.name = name
        self.grade = grade
        
        # Modify class variable
        Student.total_students += 1

# All students share the same school_name
student1 = Student("Alice", "A")
student2 = Student("Bob", "B")

print(student1.school_name)  # ABC High School
print(student2.school_name)  # ABC High School

# Change class variable for all instances
Student.school_name = "XYZ High School"
print(student1.school_name)  # XYZ High School
print(student2.school_name)  # XYZ High School

# Class variables can be accessed via class name
print(Student.total_students)  # 2`},{type:"subheading",content:"Instance vs Class Variable Pitfall"},{type:"code",content:`class Counter:
    count = 0  # Class variable
    
    def __init__(self):
        self.count = 0  # Instance variable (shadows class variable!)
    
    def increment_instance(self):
        self.count += 1  # Modifies instance variable
    
    def increment_class(self):
        Counter.count += 1  # Modifies class variable

c1 = Counter()
c2 = Counter()

c1.increment_instance()
print(c1.count)  # 1 (instance variable)
print(c2.count)  # 0 (different instance)

c1.increment_class()
c2.increment_class()
print(Counter.count)  # 2 (class variable shared by all)`},{type:"subheading",content:"When to Use Each"},{type:"code",content:`class Employee:
    # Class variables - shared by all employees
    company_name = "TechCorp"
    employee_count = 0
    
    def __init__(self, name, salary):
        # Instance variables - unique to each employee
        self.name = name
        self.salary = salary
        self.employee_id = Employee.employee_count + 1
        
        Employee.employee_count += 1

emp1 = Employee("Alice", 50000)
emp2 = Employee("Bob", 60000)

# Instance variables differ
print(emp1.name, emp1.salary)  # Alice 50000
print(emp2.name, emp2.salary)  # Bob 60000

# Class variables are same
print(emp1.company_name)  # TechCorp
print(emp2.company_name)  # TechCorp
print(Employee.employee_count)  # 2`},{type:"heading",content:"6. Instance Methods"},{type:"text",content:"Methods are functions defined inside a class that operate on the object's data:"},{type:"code",content:`class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited \${amount}. New balance: \${self.balance}")
    
    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient funds!")
        else:
            self.balance -= amount
            print(f"Withdrew \${amount}. New balance: \${self.balance}")

account = BankAccount("Alice", 1000)
account.deposit(500)   # Deposited $500. New balance: $1500
account.withdraw(200)  # Withdrew $200. New balance: $1300`},{type:"heading",content:"9. Special (Magic/Dunder) Methods"},{type:"text",content:"Special methods (also called magic methods or dunder methods) have double underscores before and after the name. They enable operator overloading and special behavior."},{type:"subheading",content:"__init__ and __del__"},{type:"code",content:`class Resource:
    def __init__(self, name):
        """Constructor - called when object is created."""
        self.name = name
        print(f"Resource \${name} created")
    
    def __del__(self):
        """Destructor - called when object is destroyed."""
        print(f"Resource \${self.name} destroyed")

# Create object
resource = Resource("DB Connection")  # Resource DB Connection created

# Delete object
del resource  # Resource DB Connection destroyed`},{type:"subheading",content:"__str__ and __repr__"},{type:"code",content:`class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
    
    def __str__(self):
        """String representation for end users (print)."""
        return f"\${self.title} by \${self.author}"
    
    def __repr__(self):
        """Official representation for developers (debugging)."""
        return f"Book('\${self.title}', '\${self.author}')"

book = Book("Python Basics", "John Doe")

# __str__ is used by print()
print(book)  # Python Basics by John Doe

# __repr__ is used in interactive mode and repr()
print(repr(book))  # Book('Python Basics', 'John Doe')

# Without __str__, __repr__ is used as fallback
str(book)  # Uses __str__`},{type:"subheading",content:"Comparison Methods"},{type:"code",content:`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __eq__(self, other):
        """Equal to (==)"""
        return self.age == other.age
    
    def __lt__(self, other):
        """Less than (<)"""
        return self.age < other.age
    
    def __le__(self, other):
        """Less than or equal (<=)"""
        return self.age <= other.age
    
    def __gt__(self, other):
        """Greater than (>)"""
        return self.age > other.age
    
    def __ge__(self, other):
        """Greater than or equal (>=)"""
        return self.age >= other.age
    
    def __ne__(self, other):
        """Not equal (!=)"""
        return self.age != other.age

person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

print(person1 == person2)  # False
print(person1 < person2)   # True
print(person1 > person2)   # False`},{type:"subheading",content:"Arithmetic Methods"},{type:"code",content:`class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        """Addition (+)"""
        return Vector(self.x + other.x, self.y + other.y)
    
    def __sub__(self, other):
        """Subtraction (-)"""
        return Vector(self.x - other.x, self.y - other.y)
    
    def __mul__(self, scalar):
        """Multiplication (*)"""
        return Vector(self.x * scalar, self.y * scalar)
    
    def __str__(self):
        return f"Vector(\${self.x}, \${self.y})"

v1 = Vector(2, 3)
v2 = Vector(1, 4)

v3 = v1 + v2  # Calls __add__
print(v3)  # Vector(3, 7)

v4 = v1 - v2  # Calls __sub__
print(v4)  # Vector(1, -1)

v5 = v1 * 3  # Calls __mul__
print(v5)  # Vector(6, 9)`},{type:"subheading",content:"Container Methods"},{type:"code",content:`class CustomList:
    def __init__(self):
        self.items = []
    
    def __len__(self):
        """Called by len()"""
        return len(self.items)
    
    def __getitem__(self, index):
        """Called for indexing: obj[index]"""
        return self.items[index]
    
    def __setitem__(self, index, value):
        """Called for assignment: obj[index] = value"""
        self.items[index] = value
    
    def __contains__(self, item):
        """Called by 'in' operator"""
        return item in self.items
    
    def add(self, item):
        self.items.append(item)

clist = CustomList()
clist.add("apple")
clist.add("banana")

print(len(clist))  # 2 (calls __len__)
print(clist[0])    # apple (calls __getitem__)
clist[1] = "cherry"  # Calls __setitem__
print("apple" in clist)  # True (calls __contains__)`},{type:"subheading",content:"__call__ Method"},{type:"code",content:`class Multiplier:
    def __init__(self, factor):
        self.factor = factor
    
    def __call__(self, x):
        """Makes object callable like a function."""
        return x * self.factor

# Create callable object
times_five = Multiplier(5)

# Call it like a function
print(times_five(10))  # 50
print(times_five(3))   # 15

# Check if callable
print(callable(times_five))  # True`},{type:"heading",content:"10. Property Decorators"},{type:"text",content:"Property decorators (@property) allow you to define methods that can be accessed like attributes, providing controlled access to private variables."},{type:"code",content:`class Circle:
    def __init__(self, radius):
        self._radius = radius  # Private variable
    
    @property
    def radius(self):
        """Getter method."""
        return self._radius
    
    @radius.setter
    def radius(self, value):
        """Setter method with validation."""
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
    
    @property
    def area(self):
        """Computed property (read-only)."""
        return 3.14159 * self._radius ** 2
    
    @property
    def diameter(self):
        """Computed property."""
        return self._radius * 2

# Use like attributes (no parentheses!)
circle = Circle(5)
print(circle.radius)  # 5 (calls getter)
print(circle.area)    # 78.53975 (computed)

# Set with validation
circle.radius = 10  # Calls setter
print(circle.diameter)  # 20

# circle.radius = -5  # ValueError: Radius cannot be negative
# circle.area = 100   # AttributeError: can't set attribute`},{type:"heading",content:"11. Encapsulation and Access Modifiers"},{type:"text",content:"Python uses naming conventions for access control: public (no prefix), protected (_prefix), and private (__prefix)."},{type:"code",content:`class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner          # Public
        self._account_number = "123"  # Protected (convention)
        self.__balance = balance    # Private (name mangling)
    
    def deposit(self, amount):
        """Public method."""
        if amount > 0:
            self.__balance += amount
    
    def __validate(self, amount):
        """Private method."""
        return amount > 0
    
    def get_balance(self):
        """Getter for private variable."""
        return self.__balance

account = BankAccount("Alice", 1000)

# Public access
print(account.owner)  # Alice

# Protected access (by convention only)
print(account._account_number)  # 123 (works but discouraged)

# Private access (name mangled to _ClassName__attributename)
# print(account.__balance)  # AttributeError
print(account.get_balance())  # 1000 (correct way)

# Can still access via name mangling (not recommended!)
print(account._BankAccount__balance)  # 1000`},{type:"heading",content:"12. __slots__"},{type:"text",content:"__slots__ restricts the attributes that can be added to an object, saving memory."},{type:"code",content:`# Without __slots__
class NormalClass:
    def __init__(self, x, y):
        self.x = x
        self.y = y

normal = NormalClass(1, 2)
normal.z = 3  # Can add new attributes dynamically

# With __slots__
class OptimizedClass:
    __slots__ = ['x', 'y']  # Only these attributes allowed
    
    def __init__(self, x, y):
        self.x = x
        self.y = y

optimized = OptimizedClass(1, 2)
# optimized.z = 3  # AttributeError: 'OptimizedClass' object has no attribute 'z'

# Benefits: Faster attribute access, lower memory usage`},{type:"note",content:"OOP helps write cleaner, more maintainable code by organizing related data and functions together. Understanding classes, objects, methods, and special methods is essential for Python interviews and real-world projects."}]},"oop-principles":{title:"OOP Principles",description:"Master the four pillars of OOP with comprehensive coverage: Encapsulation, Inheritance, Polymorphism, and Abstraction with all methods and techniques.",sections:[{type:"heading",content:"1. Encapsulation"},{type:"text",content:"Encapsulation is the bundling of data (attributes) and methods that operate on that data within a single unit (class), while restricting direct access to some components. This protects data integrity and hides implementation details."},{type:"subheading",content:"Access Modifiers"},{type:"code",content:`# Python uses naming conventions for access control
class Student:
    def __init__(self, name, age, grade):
        self.name = name              # Public - accessible everywhere
        self._age = age                # Protected - should not be accessed outside class (convention)
        self.__grade = grade           # Private - name mangling, strong privacy
    
    # Public method
    def get_info(self):
        return f"\${self.name}, Age: \${self._age}"
    
    # Protected method
    def _calculate_gpa(self):
        return self.__grade * 0.25
    
    # Private method
    def __validate_grade(self):
        return 0 <= self.__grade <= 100

student = Student("Alice", 20, 85)

# Public access
print(student.name)  # Alice

# Protected access (by convention, discouraged)
print(student._age)  # 20

# Private access (causes AttributeError)
# print(student.__grade)  # AttributeError

# Access via name mangling (not recommended!)
print(student._Student__grade)  # 85`},{type:"subheading",content:"Getters and Setters"},{type:"code",content:`class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance  # Private attribute
    
    # Getter method
    def get_balance(self):
        """Return the current balance."""
        return self.__balance
    
    # Setter method with validation
    def set_balance(self, amount):
        """Set balance with validation."""
        if amount < 0:
            raise ValueError("Balance cannot be negative")
        self.__balance = amount
    
    # Business methods
    def deposit(self, amount):
        """Deposit money."""
        if amount > 0:
            self.__balance += amount
            print(f"Deposited $\${amount}")
        else:
            print("Deposit amount must be positive")
    
    def withdraw(self, amount):
        """Withdraw money."""
        if amount > self.__balance:
            print("Insufficient funds!")
        elif amount <= 0:
            print("Withdrawal amount must be positive")
        else:
            self.__balance -= amount
            print(f"Withdrew $\${amount}")

account = BankAccount("Alice", 1000)
account.deposit(500)
print(account.get_balance())  # 1500

# Can't access private attribute directly
# print(account.__balance)  # AttributeError

# Must use getter
print(account.get_balance())  # 1500`},{type:"subheading",content:"Property Decorators for Encapsulation"},{type:"code",content:`class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius  # Protected variable
    
    @property
    def celsius(self):
        """Getter for celsius."""
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        """Setter with validation."""
        if value < -273.15:
            raise ValueError("Temperature below absolute zero!")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        """Computed property."""
        return (self._celsius * 9/5) + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        """Set temperature via Fahrenheit."""
        self._celsius = (value - 32) * 5/9

temp = Temperature(25)
print(temp.celsius)     # 25
print(temp.fahrenheit)  # 77.0

# Use like attributes (calls setter with validation)
temp.celsius = 30
print(temp.celsius)     # 30

# temp.celsius = -300  # ValueError: Temperature below absolute zero!

# Set via Fahrenheit
temp.fahrenheit = 32
print(temp.celsius)     # 0.0`},{type:"subheading",content:"Benefits of Encapsulation"},{type:"code",content:`# 1. Data Protection
class User:
    def __init__(self, username, password):
        self.username = username
        self.__password = password  # Private - protected from direct access
    
    def verify_password(self, password):
        return self.__password == password
    
    def change_password(self, old_pass, new_pass):
        if self.verify_password(old_pass):
            self.__password = new_pass
            return True
        return False

# 2. Flexibility - Can change internal implementation
class ShoppingCart:
    def __init__(self):
        self.__items = []  # Could change to dict later
    
    def add_item(self, item):
        self.__items.append(item)
    
    def get_total(self):
        # Internal implementation can change without affecting users
        return sum(item['price'] for item in self.__items)

# 3. Validation
class Age:
    def __init__(self, value):
        self.__age = 0
        self.set_age(value)
    
    def set_age(self, value):
        if 0 <= value <= 150:
            self.__age = value
        else:
            raise ValueError("Invalid age")
    
    def get_age(self):
        return self.__age`},{type:"heading",content:"2. Inheritance"},{type:"text",content:"Inheritance allows a class (child/derived class) to inherit attributes and methods from another class (parent/base class). It promotes code reusability and establishes a relationship between classes."},{type:"subheading",content:"Basic Inheritance"},{type:"code",content:`# Parent/Base class
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def speak(self):
        print(f"\${self.name} makes a sound")
    
    def info(self):
        print(f"Name: \${self.name}, Species: \${self.species}")

# Child/Derived class inherits from Animal
class Dog(Animal):
    def __init__(self, name, breed):
        # Call parent constructor
        super().__init__(name, "Canine")
        self.breed = breed
    
    # Override parent method
    def speak(self):
        print(f"\${self.name} says Woof!")
    
    # New method specific to Dog
    def fetch(self):
        print(f"\${self.name} is fetching!")

class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name, "Feline")
        self.color = color
    
    def speak(self):
        print(f"\${self.name} says Meow!")
    
    def scratch(self):
        print(f"\${self.name} is scratching!")

# Create objects
dog = Dog("Buddy", "Golden Retriever")
cat = Cat("Whiskers", "Orange")

# Inherited methods
dog.info()    # Name: Buddy, Species: Canine
cat.info()    # Name: Whiskers, Species: Feline

# Overridden methods
dog.speak()   # Buddy says Woof!
cat.speak()   # Whiskers says Meow!

# Child-specific methods
dog.fetch()   # Buddy is fetching!
cat.scratch() # Whiskers is scratching!`},{type:"subheading",content:"Checking Inheritance"},{type:"code",content:`class Animal:
    pass

class Dog(Animal):
    pass

dog = Dog()

# isinstance() - check if object is instance of class
print(isinstance(dog, Dog))     # True
print(isinstance(dog, Animal))  # True (Dog inherits from Animal)
print(isinstance(dog, object))  # True (all classes inherit from object)

# issubclass() - check if class is subclass of another
print(issubclass(Dog, Animal))   # True
print(issubclass(Dog, object))   # True
print(issubclass(Animal, Dog))   # False

# type() - get exact type
print(type(dog))  # <class '__main__.Dog'>
print(type(dog) == Dog)     # True
print(type(dog) == Animal)  # False`},{type:"heading",content:"Types of Inheritance"},{type:"subheading",content:"Single Inheritance"},{type:"code",content:`# One child inherits from one parent
class Vehicle:
    def __init__(self, brand):
        self.brand = brand
    
    def start(self):
        print(f"\${self.brand} vehicle starting...")

class Car(Vehicle):
    def __init__(self, brand, model):
        super().__init__(brand)
        self.model = model
    
    def drive(self):
        print(f"Driving \${self.brand} \${self.model}")

car = Car("Toyota", "Camry")
car.start()  # Toyota vehicle starting...
car.drive()  # Driving Toyota Camry`},{type:"subheading",content:"Multiple Inheritance"},{type:"code",content:`# Child inherits from multiple parents
class Flyer:
    def fly(self):
        print("Flying in the sky")

class Swimmer:
    def swim(self):
        print("Swimming in water")

class Duck(Flyer, Swimmer):
    def quack(self):
        print("Quack quack!")

duck = Duck()
duck.fly()    # Flying in the sky
duck.swim()   # Swimming in water
duck.quack()  # Quack quack!

# Method Resolution Order (MRO)
print(Duck.__mro__)
# (<class 'Duck'>, <class 'Flyer'>, <class 'Swimmer'>, <class 'object'>)`},{type:"subheading",content:"Multilevel Inheritance"},{type:"code",content:`# Inheritance chain: Grandparent -> Parent -> Child
class LivingBeing:
    def breathe(self):
        print("Breathing...")

class Mammal(LivingBeing):
    def feed_milk(self):
        print("Feeding milk to babies")

class Dog(Mammal):
    def bark(self):
        print("Woof!")

dog = Dog()
dog.breathe()     # Breathing... (from LivingBeing)
dog.feed_milk()   # Feeding milk to babies (from Mammal)
dog.bark()        # Woof! (from Dog)`},{type:"subheading",content:"Hierarchical Inheritance"},{type:"code",content:`# Multiple children inherit from one parent
class Shape:
    def __init__(self, color):
        self.color = color

class Circle(Shape):
    def __init__(self, color, radius):
        super().__init__(color)
        self.radius = radius
    
    def area(self):
        return 3.14 * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, color, width, height):
        super().__init__(color)
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

class Triangle(Shape):
    def __init__(self, color, base, height):
        super().__init__(color)
        self.base = base
        self.height = height
    
    def area(self):
        return 0.5 * self.base * self.height

circle = Circle("Red", 5)
rectangle = Rectangle("Blue", 4, 6)
triangle = Triangle("Green", 3, 4)

print(circle.area())     # 78.5
print(rectangle.area())  # 24
print(triangle.area())   # 6.0`},{type:"subheading",content:"Hybrid Inheritance"},{type:"code",content:`# Combination of multiple types of inheritance
class Device:
    def __init__(self, brand):
        self.brand = brand

class Phone(Device):
    def call(self):
        print("Making a call...")

class Camera(Device):
    def take_photo(self):
        print("Taking a photo...")

class SmartPhone(Phone, Camera):
    def browse_internet(self):
        print("Browsing internet...")

smartphone = SmartPhone("Apple")
smartphone.call()            # Making a call...
smartphone.take_photo()      # Taking a photo...
smartphone.browse_internet() # Browsing internet...`},{type:"subheading",content:"super() Function"},{type:"code",content:`# super() calls methods from parent class
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
    
    def display_info(self):
        print(f"Name: \${self.name}")
        print(f"Salary: $\${self.salary}")

class Manager(Employee):
    def __init__(self, name, salary, department):
        # Call parent constructor
        super().__init__(name, salary)
        self.department = department
    
    def display_info(self):
        # Call parent method, then add more
        super().display_info()
        print(f"Department: \${self.department}")

manager = Manager("Alice", 80000, "IT")
manager.display_info()
# Output:
# Name: Alice
# Salary: $80000
# Department: IT`},{type:"subheading",content:"Method Resolution Order (MRO)"},{type:"code",content:`# MRO determines method lookup order in multiple inheritance
class A:
    def method(self):
        print("Method from A")

class B(A):
    def method(self):
        print("Method from B")

class C(A):
    def method(self):
        print("Method from C")

class D(B, C):
    pass

# D inherits from both B and C
d = D()
d.method()  # Method from B (B is listed first)

# Check MRO
print(D.__mro__)
# (<class 'D'>, <class 'B'>, <class 'C'>, <class 'A'>, <class 'object'>)

# Python uses C3 Linearization algorithm
# Order: D -> B -> C -> A -> object

class E(C, B):
    pass

e = E()
e.method()  # Method from C (C is listed first)
print(E.__mro__)
# (<class 'E'>, <class 'C'>, <class 'B'>, <class 'A'>, <class 'object'>)`},{type:"subheading",content:"Method Overriding Rules"},{type:"code",content:`class Parent:
    def greet(self):
        print("Hello from Parent")
    
    def info(self):
        print("Parent info")

class Child(Parent):
    # Override without calling parent
    def greet(self):
        print("Hello from Child")
    
    # Override and extend with super()
    def info(self):
        super().info()  # Call parent version
        print("Child info")

child = Child()
child.greet()  # Hello from Child
child.info()   # Parent info
               # Child info`},{type:"subheading",content:"Diamond Problem in Multiple Inheritance"},{type:"code",content:`# Diamond problem: D inherits from B and C, both inherit from A
class A:
    def method(self):
        print("A's method")

class B(A):
    def method(self):
        print("B's method")
        super().method()

class C(A):
    def method(self):
        print("C's method")
        super().method()

class D(B, C):
    def method(self):
        print("D's method")
        super().method()

# MRO ensures each class is called only once
d = D()
d.method()
# Output:
# D's method
# B's method
# C's method
# A's method

# MRO order prevents infinite loops
print(D.__mro__)
# (D, B, C, A, object)`},{type:"heading",content:"3. Polymorphism"},{type:"text",content:'Polymorphism means "many forms". The same method name can behave differently in different classes:'},{type:"code",content:`class Bird:
    def move(self):
        print("Bird flies in the sky")

class Fish:
    def move(self):
        print("Fish swims in water")

class Snake:
    def move(self):
        print("Snake slithers on ground")

# Polymorphism in action
animals = [Bird(), Fish(), Snake()]

for animal in animals:
    animal.move()

# Output:
# Bird flies in the sky
# Fish swims in water
# Snake slithers on ground`},{type:"heading",content:"Method Overriding"},{type:"text",content:"Child class can provide its own implementation of a parent's method:"},{type:"code",content:`class Shape:
    def area(self):
        print("Area not defined")

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):  # Override parent method
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):  # Override parent method
        return 3.14 * self.radius ** 2

rect = Rectangle(5, 10)
circle = Circle(7)

print(rect.area())    # 50
print(circle.area())  # 153.86`},{type:"subheading",content:"Method Overloading (Not Directly Supported)"},{type:"code",content:`# Python doesn't support traditional method overloading
# Last definition wins

class Calculator:
    # This will be overwritten
    def add(self, a, b):
        return a + b
    
    # This is the only definition that exists
    def add(self, a, b, c):
        return a + b + c

calc = Calculator()
# calc.add(2, 3)  # TypeError: missing 1 required positional argument
print(calc.add(2, 3, 4))  # 9

# Solution 1: Default parameters
class BetterCalculator:
    def add(self, a, b, c=0):
        return a + b + c

calc2 = BetterCalculator()
print(calc2.add(2, 3))      # 5
print(calc2.add(2, 3, 4))   # 9

# Solution 2: *args for variable arguments
class FlexibleCalculator:
    def add(self, *args):
        return sum(args)

calc3 = FlexibleCalculator()
print(calc3.add(2, 3))         # 5
print(calc3.add(2, 3, 4))      # 9
print(calc3.add(1, 2, 3, 4, 5))  # 15`},{type:"heading",content:"4. Abstraction"},{type:"text",content:"Abstraction hides complex implementation details and shows only essential features. Use abstract classes:"},{type:"code",content:`from abc import ABC, abstractmethod

# Abstract base class
class Vehicle(ABC):
    @abstractmethod
    def start_engine(self):
        pass
    
    @abstractmethod
    def stop_engine(self):
        pass

# Concrete class
class Car(Vehicle):
    def start_engine(self):
        print("Car engine started")
    
    def stop_engine(self):
        print("Car engine stopped")

class Motorcycle(Vehicle):
    def start_engine(self):
        print("Motorcycle engine started")
    
    def stop_engine(self):
        print("Motorcycle engine stopped")

# Can't create instance of abstract class
# vehicle = Vehicle()  # Error!

car = Car()
car.start_engine()  # Car engine started
car.stop_engine()   # Car engine stopped`},{type:"heading",content:"Using super()"},{type:"text",content:"super() allows you to call methods from the parent class:"},{type:"code",content:`class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
    
    def display_info(self):
        print(f"Name: {self.name}, Salary: \${self.salary}")

class Manager(Employee):
    def __init__(self, name, salary, department):
        super().__init__(name, salary)  # Call parent constructor
        self.department = department
    
    def display_info(self):
        super().display_info()  # Call parent method
        print(f"Department: {self.department}")

manager = Manager("Alice", 80000, "IT")
manager.display_info()
# Output:
# Name: Alice, Salary: $80000
# Department: IT`},{type:"note",content:"The four pillars of OOP (Encapsulation, Inheritance, Polymorphism, and Abstraction) work together to create maintainable, reusable, and scalable code. Master these concepts with practical examples for effective object-oriented design and technical interviews."}]},"advanced-oop":{title:"Advanced OOP",description:"Master advanced OOP concepts including all magic methods, descriptors, metaclasses, context managers, dataclasses, mixins, and advanced design patterns.",sections:[{type:"heading",content:"1. Magic Methods (Dunder Methods) - Complete Reference"},{type:"text",content:"Magic methods (also called dunder methods) have double underscores before and after their names. They enable operator overloading and special behaviors in Python objects."},{type:"subheading",content:"Object Lifecycle Methods"},{type:"code",content:`class Resource:
    def __new__(cls, name):
        """Called BEFORE __init__ to create the object."""
        print(f"__new__ called for \${name}")
        instance = super().__new__(cls)
        return instance
    
    def __init__(self, name):
        """Called to initialize the object."""
        print(f"__init__ called for \${name}")
        self.name = name
    
    def __del__(self):
        """Called when object is about to be destroyed."""
        print(f"__del__ called for \${self.name}")

resource = Resource("Database")
# Output:
# __new__ called for Database
# __init__ called for Database

del resource
# Output:
# __del__ called for Database`},{type:"subheading",content:"String Representation Methods"},{type:"code",content:`class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    def __str__(self):
        """User-friendly string representation (print, str())."""
        return f"\${self.title} by \${self.author}"
    
    def __repr__(self):
        """Developer-friendly representation (repr(), debugging)."""
        return f"Book('\${self.title}', '\${self.author}', \${self.pages})"
    
    def __format__(self, format_spec):
        """Custom formatting for f-strings."""
        if format_spec == 'short':
            return self.title
        elif format_spec == 'long':
            return f"\${self.title} by \${self.author} (\${self.pages} pages)"
        return str(self)

book = Book("Python Guide", "John Doe", 300)

print(book)           # Python Guide by John Doe (uses __str__)
print(repr(book))     # Book('Python Guide', 'John Doe', 300)
print(f"\${book:short}")  # Python Guide
print(f"\${book:long}")   # Python Guide by John Doe (300 pages)`},{type:"subheading",content:"Comparison Magic Methods"},{type:"code",content:`class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages
    
    def __eq__(self, other):
        """Equal to: =="""
        return self.pages == other.pages
    
    def __ne__(self, other):
        """Not equal to: !="""
        return self.pages != other.pages
    
    def __lt__(self, other):
        """Less than: <"""
        return self.pages < other.pages
    
    def __le__(self, other):
        """Less than or equal: <="""
        return self.pages <= other.pages
    
    def __gt__(self, other):
        """Greater than: >"""
        return self.pages > other.pages
    
    def __ge__(self, other):
        """Greater than or equal: >="""
        return self.pages >= other.pages

book1 = Book("Python Guide", 300)
book2 = Book("Java Basics", 250)

print(book1 == book2)  # False
print(book1 != book2)  # True
print(book1 > book2)   # True
print(book1 <= book2)  # False

# Can now sort books
books = [Book("C", 400), Book("A", 200), Book("B", 300)]
sorted_books = sorted(books)  # Sorts by pages using __lt__`},{type:"subheading",content:"Arithmetic Magic Methods"},{type:"code",content:`# Complete set of arithmetic operators
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)
    
    def __mul__(self, scalar):
        """Multiplication: *"""
        return Vector(self.x * scalar, self.y * scalar)
    
    def __truediv__(self, scalar):
        """Division: /"""
        return Vector(self.x / scalar, self.y / scalar)
    
    def __floordiv__(self, scalar):
        """Floor division: //"""
        return Vector(self.x // scalar, self.y // scalar)
    
    def __mod__(self, scalar):
        """Modulo: %"""
        return Vector(self.x % scalar, self.y % scalar)
    
    def __pow__(self, power):
        """Power: **"""
        return Vector(self.x ** power, self.y ** power)
    
    def __neg__(self):
        """Negation: -obj"""
        return Vector(-self.x, -self.y)
    
    def __abs__(self):
        """Absolute value: abs()"""
        return (self.x ** 2 + self.y ** 2) ** 0.5
    
    def __str__(self):
        return f"Vector(\${self.x}, \${self.y})"

v1 = Vector(6, 9)
v2 = Vector(2, 3)

print(v1 + v2)    # Vector(8, 12)
print(v1 - v2)    # Vector(4, 6)
print(v1 * 2)     # Vector(12, 18)
print(v1 / 3)     # Vector(2.0, 3.0)
print(v1 // 2)    # Vector(3, 4)
print(v1 % 5)     # Vector(1, 4)
print(v2 ** 2)    # Vector(4, 9)
print(-v2)        # Vector(-2, -3)
print(abs(v2))    # 3.605... (magnitude)`},{type:"subheading",content:"Reflected (Right-Side) Arithmetic Methods"},{type:"code",content:`# For operations like: 3 * vector (instead of vector * 3)
class Number:
    def __init__(self, value):
        self.value = value
    
    def __add__(self, other):
        """Left addition: self + other"""
        print("__add__ called")
        return Number(self.value + other)
    
    def __radd__(self, other):
        """Right addition: other + self"""
        print("__radd__ called")
        return Number(other + self.value)
    
    def __mul__(self, other):
        """Left multiplication: self * other"""
        return Number(self.value * other)
    
    def __rmul__(self, other):
        """Right multiplication: other * self"""
        return Number(other * self.value)
    
    def __str__(self):
        return f"Number(\${self.value})"

num = Number(5)

# __add__ is called
result1 = num + 10
print(result1)  # Number(15)

# __radd__ is called (when left operand doesn't support +)
result2 = 10 + num
print(result2)  # Number(15)

# Same for multiplication
print(num * 3)  # Number(15) - uses __mul__
print(3 * num)  # Number(15) - uses __rmul__`},{type:"subheading",content:"In-Place Arithmetic Methods"},{type:"code",content:`class Counter:
    def __init__(self, value):
        self.value = value
    
    def __iadd__(self, other):
        """In-place addition: +="""
        self.value += other
        return self
    
    def __isub__(self, other):
        """In-place subtraction: -="""
        self.value -= other
        return self
    
    def __imul__(self, other):
        """In-place multiplication: *="""
        self.value *= other
        return self
    
    def __str__(self):
        return f"Counter(\${self.value})"

counter = Counter(10)
print(counter)  # Counter(10)

counter += 5    # Calls __iadd__
print(counter)  # Counter(15)

counter -= 3    # Calls __isub__
print(counter)  # Counter(12)

counter *= 2    # Calls __imul__
print(counter)  # Counter(24)`},{type:"subheading",content:"Container/Sequence Magic Methods"},{type:"code",content:`# Complete container protocol
class ShoppingCart:
    def __init__(self):
        self.items = []
    
    def __len__(self):
        return len(self.items)
    
    def __getitem__(self, index):
        return self.items[index]
    
    def __setitem__(self, index, value):
        self.items[index] = value
    
    def __contains__(self, item):
        """Membership test: in"""
        return item in self.items
    
    def __delitem__(self, index):
        """Delete item: del cart[index]"""
        del self.items[index]
    
    def __iter__(self):
        """Make object iterable: for item in cart"""
        return iter(self.items)
    
    def __reversed__(self):
        """Reverse iteration: reversed(cart)"""
        return reversed(self.items)
    
    def add(self, item):
        """Add item to cart."""
        self.items.append(item)

cart = ShoppingCart()
cart.add("Apple")
cart.add("Banana")
cart.add("Orange")

print(len(cart))           # 3
print(cart[0])             # Apple
cart[1] = "Mango"          # Change item
print("Apple" in cart)     # True

# Iterate
for item in cart:
    print(item)

# Reverse
for item in reversed(cart):
    print(item)

# Delete
del cart[0]
print(len(cart))  # 2`},{type:"subheading",content:"Callable and Context Manager Methods"},{type:"code",content:`class Multiplier:
    def __init__(self, factor):
        self.factor = factor
    
    def __call__(self, x):
        """Make object callable: obj(x)"""
        return x * self.factor

# Use like a function
times_five = Multiplier(5)
print(times_five(10))  # 50
print(times_five(3))   # 15
print(callable(times_five))  # True

# Context manager
class FileManager:
    def __init__(self, filename):
        self.filename = filename
        self.file = None
    
    def __enter__(self):
        """Called when entering 'with' block."""
        print(f"Opening \${self.filename}")
        self.file = open(self.filename, 'w')
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        """Called when exiting 'with' block."""
        print(f"Closing \${self.filename}")
        if self.file:
            self.file.close()
        return False  # Don't suppress exceptions

# Use with 'with' statement
with FileManager('test.txt') as f:
    f.write('Hello World')
# File automatically closed`},{type:"subheading",content:"Attribute Access Methods"},{type:"code",content:`class DynamicAttributes:
    def __init__(self):
        self._data = {}
    
    def __getattr__(self, name):
        """Called when attribute is not found normally."""
        print(f"__getattr__ called for '\${name}'")
        return self._data.get(name, f"No attribute '\${name}'")
    
    def __setattr__(self, name, value):
        """Called on attribute assignment."""
        if name == '_data':
            # Allow setting _data normally
            super().__setattr__(name, value)
        else:
            print(f"__setattr__ called: \${name} = \${value}")
            self._data[name] = value
    
    def __delattr__(self, name):
        """Called on attribute deletion."""
        print(f"__delattr__ called for '\${name}'")
        if name in self._data:
            del self._data[name]
    
    def __getattribute__(self, name):
        """Called for ALL attribute access."""
        print(f"__getattribute__ called for '\${name}'")
        return super().__getattribute__(name)

obj = DynamicAttributes()
obj.x = 10      # Calls __setattr__
print(obj.x)    # Calls __getattribute__ then __getattr__
del obj.x       # Calls __delattr__`},{type:"subheading",content:"Hashing and Boolean Methods"},{type:"code",content:`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __hash__(self):
        """Make object hashable (for use in sets, dict keys)."""
        return hash((self.name, self.age))
    
    def __eq__(self, other):
        """Equality for hash comparison."""
        return self.name == other.name and self.age == other.age
    
    def __bool__(self):
        """Called by bool(), if, while."""
        return self.age >= 18  # True if adult

p1 = Person("Alice", 25)
p2 = Person("Alice", 25)
p3 = Person("Bob", 15)

# Can use in sets (requires __hash__ and __eq__)
people = {p1, p2}
print(len(people))  # 1 (p1 and p2 are equal)

# Boolean context
if p1:
    print("p1 is an adult")  # Prints

if not p3:
    print("p3 is a minor")   # Prints`},{type:"heading",content:"2. Descriptors"},{type:"text",content:"Descriptors are objects that define how attribute access is handled. They implement __get__, __set__, and/or __delete__ methods."},{type:"subheading",content:"Basic Descriptor"},{type:"code",content:`class Descriptor:
    def __init__(self, name):
        self.name = name
    
    def __get__(self, obj, objtype=None):
        """Called when attribute is accessed."""
        print(f"Getting \${self.name}")
        return obj.__dict__.get(self.name, None)
    
    def __set__(self, obj, value):
        """Called when attribute is set."""
        print(f"Setting \${self.name} = \${value}")
        obj.__dict__[self.name] = value
    
    def __delete__(self, obj):
        """Called when attribute is deleted."""
        print(f"Deleting \${self.name}")
        del obj.__dict__[self.name]

class Person:
    name = Descriptor('name')
    age = Descriptor('age')

p = Person()
p.name = "Alice"  # Setting name = Alice
print(p.name)     # Getting name
                  # Alice
del p.name        # Deleting name`},{type:"subheading",content:"Validation Descriptor"},{type:"code",content:`class PositiveNumber:
    def __init__(self, name):
        self.name = name
    
    def __get__(self, obj, objtype=None):
        return obj.__dict__.get(self.name, 0)
    
    def __set__(self, obj, value):
        if not isinstance(value, (int, float)):
            raise TypeError(f"\${self.name} must be a number")
        if value < 0:
            raise ValueError(f"\${self.name} must be positive")
        obj.__dict__[self.name] = value

class Product:
    price = PositiveNumber('price')
    quantity = PositiveNumber('quantity')
    
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity
    
    def total(self):
        return self.price * self.quantity

product = Product("Book", 29.99, 3)
print(product.total())  # 89.97

# product.price = -10  # ValueError: price must be positive
# product.price = "abc"  # TypeError: price must be a number`},{type:"subheading",content:"Property as Descriptor"},{type:"code",content:`# @property is actually a descriptor!
class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        """Property getter (descriptor)."""
        return self._radius
    
    @radius.setter
    def radius(self, value):
        """Property setter (descriptor)."""
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
    
    @property
    def area(self):
        """Read-only property."""
        return 3.14159 * self._radius ** 2

circle = Circle(5)
print(circle.radius)  # 5
print(circle.area)    # 78.53975

circle.radius = 10
print(circle.area)    # 314.159`},{type:"heading",content:"3. Metaclasses"},{type:"text",content:'Metaclasses are "classes of classes" that define how classes behave. They control class creation.'},{type:"code",content:`# Everything in Python is an object, including classes
class MyClass:
    pass

print(type(MyClass))  # <class 'type'>
print(type(type))     # <class 'type'>

# 'type' is a metaclass

# Creating a class dynamically with type()
DynamicClass = type('DynamicClass', (), {'x': 10, 'greet': lambda self: 'Hello'})

obj = DynamicClass()
print(obj.x)       # 10
print(obj.greet()) # Hello`},{type:"subheading",content:"Custom Metaclass"},{type:"code",content:`class UpperAttrMetaclass(type):
    """Metaclass that converts all attributes to uppercase."""
    
    def __new__(cls, name, bases, dct):
        """Called when creating a new class."""
        uppercase_dict = {}
        for attr_name, attr_value in dct.items():
            if not attr_name.startswith('__'):
                # Convert attribute names to uppercase
                uppercase_dict[attr_name.upper()] = attr_value
            else:
                uppercase_dict[attr_name] = attr_value
        
        return super().__new__(cls, name, bases, uppercase_dict)

class MyClass(metaclass=UpperAttrMetaclass):
    x = 10
    y = 20
    
    def greet(self):
        return "Hello"

obj = MyClass()
print(obj.X)       # 10 (x became X)
print(obj.Y)       # 20 (y became Y)
print(obj.GREET()) # Hello (greet became GREET)`},{type:"subheading",content:"Singleton Pattern with Metaclass"},{type:"code",content:`class Singleton(type):
    """Metaclass that creates a Singleton pattern."""
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        """Called when creating an instance."""
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Database(metaclass=Singleton):
    def __init__(self):
        print("Initializing database connection")

# First call creates instance
db1 = Database()  # Initializing database connection

# Second call returns same instance
db2 = Database()  # (no output)

print(db1 is db2)  # True (same object)`},{type:"heading",content:"4. Context Managers"},{type:"text",content:'Context managers handle setup and teardown logic using the "with" statement.'},{type:"subheading",content:"Class-Based Context Manager"},{type:"code",content:`class DatabaseConnection:
    def __init__(self, db_name):
        self.db_name = db_name
        self.connection = None
    
    def __enter__(self):
        """Setup: called when entering 'with' block."""
        print(f"Opening connection to \${self.db_name}")
        self.connection = f"Connection to \${self.db_name}"
        return self.connection
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        """Teardown: called when exiting 'with' block."""
        print(f"Closing connection to \${self.db_name}")
        self.connection = None
        
        # Handle exceptions
        if exc_type is not None:
            print(f"Exception occurred: \${exc_type.__name__}: \${exc_val}")
        
        return False  # False = don't suppress exceptions

# Use context manager
with DatabaseConnection("users_db") as conn:
    print(f"Using: \${conn}")
    # Do database operations

# Connection automatically closed
print("Done")`},{type:"subheading",content:"contextlib.contextmanager Decorator"},{type:"code",content:`from contextlib import contextmanager

@contextmanager
def file_manager(filename, mode):
    """Context manager using generator."""
    print(f"Opening \${filename}")
    file = open(filename, mode)
    
    try:
        yield file  # Provide file to 'with' block
    finally:
        print(f"Closing \${filename}")
        file.close()

# Use generator-based context manager
with file_manager('test.txt', 'w') as f:
    f.write('Hello World')

# More examples
@contextmanager
def timer(name):
    """Time a code block."""
    import time
    start = time.time()
    print(f"Starting \${name}...")
    
    yield
    
    end = time.time()
    print(f"\${name} took \${end - start:.2f} seconds")

with timer("my_operation"):
    # Simulate work
    sum([i**2 for i in range(1000000)])`},{type:"heading",content:"5. Method Overloading"},{type:"text",content:"Python doesn't support traditional method overloading, but you can achieve similar results:"},{type:"code",content:`class Calculator:
    def add(self, a, b=None, c=None):
        if b is None:
            return a
        elif c is None:
            return a + b
        else:
            return a + b + c

calc = Calculator()
print(calc.add(5))        # 5
print(calc.add(5, 3))     # 8
print(calc.add(5, 3, 2))  # 10

# Using *args for better approach
class BetterCalculator:
    def add(self, *args):
        return sum(args)

calc = BetterCalculator()
print(calc.add(1, 2, 3, 4, 5))  # 15`},{type:"heading",content:"Property Decorators"},{type:"text",content:"Use @property to create getter and setter methods:"},{type:"code",content:`class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius
    
    @property
    def celsius(self):
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature below absolute zero!")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        return (self._celsius * 9/5) + 32

temp = Temperature(25)
print(temp.celsius)      # 25
print(temp.fahrenheit)   # 77.0

temp.celsius = 30
print(temp.celsius)      # 30

# temp.celsius = -300  # Raises ValueError`},{type:"heading",content:"Static and Class Methods"},{type:"code",content:`class MathOperations:
    PI = 3.14159
    
    @staticmethod
    def add(a, b):
        # Static method - doesn't access instance or class
        return a + b
    
    @classmethod
    def circle_area(cls, radius):
        # Class method - can access class variables
        return cls.PI * radius ** 2

# Call without creating instance
print(MathOperations.add(5, 3))        # 8
print(MathOperations.circle_area(10))  # 314.159`},{type:"heading",content:"6. Dataclasses"},{type:"text",content:"Dataclasses (Python 3.7+) automatically generate special methods like __init__, __repr__, __eq__, reducing boilerplate code."},{type:"subheading",content:"Basic Dataclass"},{type:"code",content:`from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int
    city: str = "Unknown"  # Default value
    
    def greet(self):
        return f"Hi, I'm \${self.name}"

# Automatic __init__, __repr__, __eq__
person1 = Person("Alice", 25, "New York")
person2 = Person("Bob", 30)

print(person1)  # Person(name='Alice', age=25, city='New York')
print(person2)  # Person(name='Bob', age=30, city='Unknown')
print(person1 == person2)  # False
print(person1.greet())     # Hi, I'm Alice`},{type:"subheading",content:"Dataclass Parameters"},{type:"code",content:`from dataclasses import dataclass, field

@dataclass(
    init=True,       # Generate __init__
    repr=True,       # Generate __repr__
    eq=True,         # Generate __eq__
    order=True,      # Generate __lt__, __le__, __gt__, __ge__
    frozen=False     # Make instances immutable if True
)
class Product:
    name: str
    price: float
    quantity: int = 0
    
    def total(self):
        return self.price * self.quantity

p1 = Product("Book", 29.99, 3)
p2 = Product("Pen", 1.99, 10)

print(p1)  # Product(name='Book', price=29.99, quantity=3)
print(p1.total())  # 89.97

# Order comparison (because order=True)
print(p1 > p2)  # Compares by field order`},{type:"subheading",content:"Field Options"},{type:"code",content:`from dataclasses import dataclass, field
from typing import List

@dataclass
class Student:
    name: str
    age: int
    grades: List[float] = field(default_factory=list)  # Mutable default
    student_id: int = field(init=False)  # Not in __init__
    _private: str = field(default="secret", repr=False)  # Not in __repr__
    
    def __post_init__(self):
        """Called after __init__."""
        import random
        self.student_id = random.randint(1000, 9999)

student1 = Student("Alice", 20)
student1.grades.append(95.5)
student1.grades.append(88.0)

student2 = Student("Bob", 22)
student2.grades.append(92.0)

print(student1)
# Student(name='Alice', age=20, grades=[95.5, 88.0], student_id=1234)

# grades are independent (not shared)
print(student2.grades)  # [92.0]`},{type:"subheading",content:"Frozen Dataclass (Immutable)"},{type:"code",content:`from dataclasses import dataclass

@dataclass(frozen=True)
class Point:
    x: float
    y: float
    
    def distance_from_origin(self):
        return (self.x ** 2 + self.y ** 2) ** 0.5

point = Point(3, 4)
print(point)  # Point(x=3, y=4)
print(point.distance_from_origin())  # 5.0

# Can't modify (frozen)
# point.x = 10  # FrozenInstanceError

# Can use as dict keys or in sets (hashable)
points = {point: "origin"}
print(points)`},{type:"subheading",content:"Inheritance with Dataclasses"},{type:"code",content:`from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int

@dataclass
class Employee(Person):
    employee_id: int
    department: str
    
    def display(self):
        return f"\${self.name} (\${self.employee_id}) - \${self.department}"

emp = Employee("Alice", 30, 12345, "IT")
print(emp)
# Employee(name='Alice', age=30, employee_id=12345, department='IT')
print(emp.display())`},{type:"heading",content:"7. Mixins"},{type:"text",content:"Mixins are classes that provide methods to other classes through multiple inheritance, promoting code reuse."},{type:"code",content:`# Mixin classes
class JSONMixin:
    """Add JSON serialization capability."""
    def to_json(self):
        import json
        return json.dumps(self.__dict__)

class ReprMixin:
    """Add detailed __repr__."""
    def __repr__(self):
        attrs = ', '.join(f"\${k}=\${v}" for k, v in self.__dict__.items())
        return f"\${self.__class__.__name__}(\${attrs})"

class ComparableMixin:
    """Add comparison based on 'value' attribute."""
    def __eq__(self, other):
        return self.value == other.value
    
    def __lt__(self, other):
        return self.value < other.value

# Use mixins
class Product(JSONMixin, ReprMixin, ComparableMixin):
    def __init__(self, name, price):
        self.name = name
        self.price = price
        self.value = price  # For ComparableMixin

p1 = Product("Book", 29.99)
p2 = Product("Pen", 1.99)

# From JSONMixin
print(p1.to_json())  # {"name": "Book", "price": 29.99, "value": 29.99}

# From ReprMixin
print(repr(p1))  # Product(name=Book, price=29.99, value=29.99)

# From ComparableMixin
print(p1 > p2)  # True
print(sorted([p1, p2], key=lambda x: x.value))`},{type:"heading",content:"8. Abstract Base Classes (ABC)"},{type:"text",content:"ABCs define interfaces that subclasses must implement, enforcing a contract."},{type:"code",content:`from abc import ABC, abstractmethod
from typing import List

class DataProcessor(ABC):
    """Abstract base class for data processors."""
    
    @abstractmethod
    def load_data(self, source: str) -> List:
        """Load data from source."""
        pass
    
    @abstractmethod
    def process_data(self, data: List) -> List:
        """Process the data."""
        pass
    
    @abstractmethod
    def save_data(self, data: List, destination: str):
        """Save processed data."""
        pass
    
    def execute(self, source: str, destination: str):
        """Template method (concrete)."""
        print("Loading data...")
        data = self.load_data(source)
        
        print("Processing data...")
        processed = self.process_data(data)
        
        print("Saving data...")
        self.save_data(processed, destination)
        
        print("Done!")

class CSVProcessor(DataProcessor):
    def load_data(self, source: str) -> List:
        return [f"row{i}" for i in range(5)]
    
    def process_data(self, data: List) -> List:
        return [item.upper() for item in data]
    
    def save_data(self, data: List, destination: str):
        print(f"Saving to \${destination}: \${data}")

processor = CSVProcessor()
processor.execute("input.csv", "output.csv")`},{type:"heading",content:"9. Slots for Memory Optimization"},{type:"text",content:"__slots__ restricts the attributes a class can have, reducing memory usage and improving attribute access speed."},{type:"code",content:`# Without __slots__
class RegularClass:
    def __init__(self, x, y):
        self.x = x
        self.y = y

# With __slots__
class OptimizedClass:
    __slots__ = ['x', 'y']  # Only these attributes allowed
    
    def __init__(self, x, y):
        self.x = x
        self.y = y

# Regular class uses __dict__ (more memory)
reg = RegularClass(1, 2)
print(reg.__dict__)  # {'x': 1, 'y': 2}
reg.z = 3  # Can add new attributes

# Optimized class doesn't have __dict__
opt = OptimizedClass(1, 2)
# print(opt.__dict__)  # AttributeError
# opt.z = 3  # AttributeError: no attribute 'z'

# Memory comparison
import sys
print(f"Regular: \${sys.getsizeof(reg.__dict__)} bytes")
print(f"Optimized: No __dict__")`},{type:"heading",content:"10. Type Hints and Protocol"},{type:"text",content:"Type hints improve code documentation and enable static type checking. Protocol defines structural subtyping."},{type:"code",content:`from typing import Protocol, List, Optional

# Protocol (structural subtyping)
class Drawable(Protocol):
    """Any class with draw() method is Drawable."""
    def draw(self) -> None:
        ...

class Circle:
    def draw(self) -> None:
        print("Drawing circle")

class Square:
    def draw(self) -> None:
        print("Drawing square")

def render(shape: Drawable) -> None:
    """Accepts anything with draw() method."""
    shape.draw()

# Both work without explicit inheritance
render(Circle())  # Drawing circle
render(Square())  # Drawing square

# Type hints example
class Container:
    def __init__(self, items: List[int]) -> None:
        self.items: List[int] = items
    
    def get_first(self) -> Optional[int]:
        return self.items[0] if self.items else None
    
    def add(self, item: int) -> None:
        self.items.append(item)

container = Container([1, 2, 3])
first = container.get_first()  # Type checker knows it's Optional[int]`},{type:"note",content:"Advanced OOP concepts like magic methods, descriptors, metaclasses, dataclasses, mixins, and ABCs are essential for writing professional Python code. Master these topics for senior-level interviews and production codebases. They enable elegant solutions, powerful abstractions, and clean architecture."}]},"exception-handling":{title:"Exception Handling",description:"Master exception handling with try-except-else-finally blocks, custom exceptions, exception hierarchy, context managers, and best practices for robust error handling.",sections:[{type:"heading",content:"1. Understanding Exceptions"},{type:"text",content:"Exceptions are events that disrupt the normal flow of program execution. They represent errors or exceptional conditions. Python uses exceptions to signal errors instead of returning error codes."},{type:"subheading",content:"Errors vs Exceptions"},{type:"code",content:`# Syntax Error (detected before execution)
# print("Hello"  # SyntaxError: missing closing parenthesis

# Runtime Exception (detected during execution)
# Can be caught and handled

# Without exception handling - program crashes
def divide(a, b):
    return a / b

# result = divide(10, 0)  # ZeroDivisionError: division by zero
# Program stops here!

# With exception handling - program continues gracefully
try:
    result = divide(10, 0)
except ZeroDivisionError:
    print("Cannot divide by zero!")
    result = None

print("Program continues...")
print(f"Result: \${result}")  # Result: None`},{type:"subheading",content:"Why Use Exception Handling?"},{type:"code",content:`# 1. Prevent program crashes
# 2. Provide user-friendly error messages
# 3. Clean up resources (files, connections)
# 4. Separate error handling from business logic
# 5. Enable graceful degradation

def get_user_age():
    """Get user age with proper error handling."""
    try:
        age = int(input("Enter your age: "))
        
        if age < 0:
            raise ValueError("Age cannot be negative")
        if age > 150:
            raise ValueError("Age seems unrealistic")
        
        return age
    
    except ValueError as e:
        print(f"Invalid input: \${e}")
        return None
    
    except KeyboardInterrupt:
        print("\\nOperation cancelled by user")
        return None

# Robust, user-friendly function
age = get_user_age()
if age:
    print(f"Your age is: \${age}")`},{type:"heading",content:"2. Try-Except Block - Complete Guide"},{type:"subheading",content:"Basic Try-Except"},{type:"code",content:`# Simplest form
try:
    # Code that might raise an exception
    number = int(input("Enter a number: "))
    print(f"You entered: \${number}")
except ValueError:
    # Handle specific exception
    print("That's not a valid number!")

# Multiple statements in try block
try:
    x = 10
    y = 0
    result = x / y  # ZeroDivisionError
    print(result)
except ZeroDivisionError:
    print("Cannot divide by zero!")
    result = float('inf')`},{type:"subheading",content:"Multiple Except Blocks"},{type:"code",content:`# Different exceptions, different handlers
def process_data(data, index):
    try:
        # Multiple possible exceptions
        value = int(data[index])
        result = 100 / value
        return result
    
    except IndexError:
        print("Index out of range!")
        return None
    
    except ValueError:
        print("Cannot convert to integer!")
        return None
    
    except ZeroDivisionError:
        print("Value is zero, cannot divide!")
        return None

# Test different scenarios
print(process_data([1, 2, 3], 10))    # IndexError
print(process_data(["abc", "2"], 0))  # ValueError
print(process_data([0, 5], 0))        # ZeroDivisionError
print(process_data([10, 5], 0))       # Success: 10.0`},{type:"subheading",content:"Catching Multiple Exceptions Together"},{type:"code",content:`# Handle multiple exceptions the same way
try:
    x = int("abc")
except (ValueError, TypeError):
    print("Invalid input type or value!")

# With exception details
try:
    data = {"name": "Alice"}
    value = int(data["age"])
except (KeyError, ValueError, TypeError) as e:
    print(f"Error processing data: \${e}")
    print(f"Error type: \${type(e).__name__}")

# More examples
def safe_operation(data, key, divisor):
    try:
        value = int(data[key])
        result = value / divisor
        return result
    except (KeyError, ValueError, TypeError, ZeroDivisionError) as e:
        print(f"Operation failed: \${type(e).__name__} - \${e}")
        return None`},{type:"subheading",content:"Catching Exception Objects"},{type:"code",content:`# Access exception details with 'as'
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error occurred: \${e}")
    print(f"Error type: \${type(e).__name__}")
    print(f"Error args: \${e.args}")

# Using exception object for logging
import traceback

try:
    numbers = [1, 2, 3]
    print(numbers[10])
except IndexError as e:
    print(f"IndexError caught: \${e}")
    print("\\nFull traceback:")
    traceback.print_exc()

# Access exception attributes
try:
    raise ValueError("Custom error message", 42)
except ValueError as e:
    print(f"Message: \${e.args[0]}")
    print(f"Extra data: \${e.args[1]}")`},{type:"subheading",content:"Catch-All Exception Handler"},{type:"code",content:`# Catch any exception (use sparingly!)
try:
    # Risky operation
    result = some_function()
except Exception as e:
    # Catches most exceptions (not BaseException)
    print(f"Unexpected error: \${e}")

# Better: Specific exceptions first, then general
try:
    value = int(data[key]) / divisor
except ZeroDivisionError:
    print("Cannot divide by zero")
except KeyError:
    print("Key not found")
except ValueError:
    print("Invalid value")
except Exception as e:
    # Catch anything else unexpected
    print(f"Unexpected error: \${e}")

# Bare except (NOT RECOMMENDED!)
try:
    result = risky_operation()
except:
    # Catches EVERYTHING including KeyboardInterrupt, SystemExit
    # Makes debugging difficult
    print("Something went wrong")`},{type:"heading",content:"3. Try-Except-Else"},{type:"text",content:"The else block executes only if NO exception occurred in the try block. It separates successful code from the try block."},{type:"subheading",content:"Basic Else Usage"},{type:"code",content:`try:
    number = int(input("Enter a number: "))
except ValueError:
    print("Invalid input!")
else:
    # Runs only if no exception occurred
    print(f"Success! You entered \${number}")
    result = number * 2
    print(f"Double is \${result}")

# Without else (less clear)
try:
    number = int(input("Enter a number: "))
    # This code runs whether or not exception happens
    # (unless exception is in int() call)
    print(f"You entered \${number}")
except ValueError:
    print("Invalid input!")`},{type:"subheading",content:"Why Use Else?"},{type:"code",content:`# 1. Clarity: Separate risky code from safe code
# 2. Performance: Only runs when try succeeds
# 3. Control: Exceptions in else are not caught by except

def read_config(filename):
    try:
        file = open(filename, 'r')
    except FileNotFoundError:
        print(f"Config file \${filename} not found")
        return None
    else:
        # Runs only if file opened successfully
        try:
            config = json.load(file)
            print("Config loaded successfully")
            return config
        finally:
            file.close()

# Example: Division with validation
def safe_divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Error: Cannot divide by zero")
        return None
    except TypeError:
        print("Error: Invalid types for division")
        return None
    else:
        # Only runs if division succeeded
        print(f"Division successful: \${a} / \${b} = \${result}")
        return result

print(safe_divide(10, 2))   # Success
print(safe_divide(10, 0))   # ZeroDivisionError
print(safe_divide(10, "a")) # TypeError`},{type:"subheading",content:"Else with Multiple Exceptions"},{type:"code",content:`def process_user_input():
    try:
        age = int(input("Enter age: "))
        year = int(input("Enter year: "))
    except ValueError:
        print("Invalid number format")
        return None
    except KeyboardInterrupt:
        print("\\nInput cancelled")
        return None
    else:
        # Runs only if both inputs succeeded
        print(f"Processing: age=\${age}, year=\${year}")
        birth_year = year - age
        return birth_year

result = process_user_input()
if result:
    print(f"Estimated birth year: \${result}")`},{type:"heading",content:"4. Try-Except-Finally"},{type:"text",content:"The finally block ALWAYS executes, regardless of whether an exception occurred or not. Perfect for cleanup operations like closing files, releasing locks, or closing connections."},{type:"subheading",content:"Basic Finally Usage"},{type:"code",content:`try:
    file = open("data.txt", "r")
    content = file.read()
    print(content)
except FileNotFoundError:
    print("File not found!")
finally:
    print("Cleanup: This ALWAYS runs")
    # Close file if it was opened
    try:
        file.close()
        print("File closed")
    except:
        pass

# Finally runs even without exception
try:
    print("Normal operation")
except Exception:
    print("Error occurred")
finally:
    print("Finally always runs")  # This prints`},{type:"subheading",content:"Finally with Return Statements"},{type:"code",content:`def test_finally():
    try:
        print("Try block")
        return "Returning from try"
    except:
        print("Except block")
        return "Returning from except"
    finally:
        print("Finally block executes even after return!")
        # Note: return in finally overrides other returns

result = test_finally()
print(result)
# Output:
# Try block
# Finally block executes even after return!
# Returning from try

# Finally overrides return
def test_finally_return():
    try:
        return "Try return"
    finally:
        return "Finally return"  # This wins!

print(test_finally_return())  # Finally return`},{type:"subheading",content:"Resource Management with Finally"},{type:"code",content:`# Database connection example
def query_database(query):
    connection = None
    try:
        connection = connect_to_database()
        result = connection.execute(query)
        return result
    except ConnectionError:
        print("Failed to connect to database")
        return None
    except QueryError as e:
        print(f"Query failed: \${e}")
        return None
    finally:
        # Always close connection
        if connection:
            connection.close()
            print("Database connection closed")

# File operations with finally
def read_file_safely(filename):
    file = None
    try:
        file = open(filename, 'r')
        data = file.read()
        # Process data...
        return data
    except FileNotFoundError:
        print(f"File \${filename} not found")
        return None
    except PermissionError:
        print(f"No permission to read \${filename}")
        return None
    finally:
        if file:
            file.close()
            print("File handle closed")`},{type:"subheading",content:"Complete Try-Except-Else-Finally"},{type:"code",content:`# All four blocks together
def process_file(filename):
    file = None
    try:
        print("1. Try: Opening file...")
        file = open(filename, 'r')
        content = file.read()
        
    except FileNotFoundError:
        print("2. Except: File not found!")
        return None
        
    except PermissionError:
        print("2. Except: Permission denied!")
        return None
        
    else:
        print("3. Else: File read successfully!")
        # Process content
        lines = content.split('\\n')
        return len(lines)
        
    finally:
        print("4. Finally: Cleanup...")
        if file:
            file.close()
            print("   File closed")

# Execution flow examples:
# Success: Try -> Else -> Finally
# FileNotFoundError: Try -> Except -> Finally
# PermissionError: Try -> Except -> Finally

result = process_file("test.txt")
print(f"Result: \${result}")`},{type:"subheading",content:"Finally with Break/Continue"},{type:"code",content:`# Finally runs even with break/continue
for i in range(5):
    try:
        if i == 2:
            break
        print(f"Processing \${i}")
    finally:
        print(f"Finally for \${i}")

# Output shows finally runs even with break:
# Processing 0
# Finally for 0
# Processing 1
# Finally for 1
# Finally for 2 (runs despite break!)`},{type:"heading",content:"5. Exception Information and Debugging"},{type:"subheading",content:"Accessing Exception Details"},{type:"code",content:`try:
    result = 10 / 0
except ZeroDivisionError as e:
    # Access exception information
    print(f"Exception message: \${e}")
    print(f"Exception type: \${type(e).__name__}")
    print(f"Exception args: \${e.args}")
    print(f"Exception class: \${e.__class__}")

# More detailed example
try:
    numbers = [1, 2, 3]
    print(numbers[10])
except IndexError as e:
    print(f"Error: \${e}")  # list index out of range
    print(f"Type: \${type(e)}")  # <class 'IndexError'>
    print(f"Args: \${e.args}")  # ('list index out of range',)`},{type:"subheading",content:"Traceback Information"},{type:"code",content:`import traceback
import sys

def function_a():
    function_b()

def function_b():
    function_c()

def function_c():
    return 1 / 0  # Error here

try:
    function_a()
except ZeroDivisionError as e:
    print("=== Exception Details ===")
    print(f"Error: \${e}")
    
    print("\\n=== Traceback ===")
    traceback.print_exc()
    
    print("\\n=== Exception Info ===")
    exc_type, exc_value, exc_tb = sys.exc_info()
    print(f"Type: \${exc_type}")
    print(f"Value: \${exc_value}")
    print(f"Traceback: \${exc_tb}")
    
    print("\\n=== Stack Trace ===")
    tb_lines = traceback.format_tb(exc_tb)
    for line in tb_lines:
        print(line)`},{type:"subheading",content:"Logging Exceptions"},{type:"code",content:`import logging

# Configure logging
logging.basicConfig(
    level=logging.ERROR,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError as e:
        # Log the exception
        logging.error(f"Division by zero: \${a} / \${b}")
        logging.exception("Full traceback:")  # Includes traceback
        return None
    except TypeError as e:
        logging.error(f"Type error in division: \${e}")
        return None

# Test
divide(10, 0)
divide(10, "abc")`},{type:"heading",content:"6. Raising Exceptions"},{type:"text",content:"You can manually raise exceptions using the raise keyword. This is useful for input validation, enforcing business rules, and signaling error conditions."},{type:"subheading",content:"Basic Raise"},{type:"code",content:`# Raise built-in exceptions
def check_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative!")
    if age < 18:
        raise ValueError("Must be 18 or older")
    return True

try:
    check_age(-5)
except ValueError as e:
    print(f"Invalid age: \${e}")

# Raise with different exception types
def withdraw(balance, amount):
    if not isinstance(amount, (int, float)):
        raise TypeError("Amount must be a number")
    
    if amount < 0:
        raise ValueError("Amount cannot be negative")
    
    if amount > balance:
        raise RuntimeError("Insufficient funds")
    
    return balance - amount`},{type:"subheading",content:"Re-raising Exceptions"},{type:"code",content:`# Re-raise same exception
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Logging error...")
    raise  # Re-raise the caught exception

# Re-raise with modification
try:
    data = int("abc")
except ValueError as e:
    print(f"Original error: \${e}")
    # Re-raise same exception
    raise

# Partial handling then re-raise
def process_file(filename):
    try:
        with open(filename) as f:
            return f.read()
    except FileNotFoundError:
        print(f"File \${filename} not found, cleaning up...")
        # Do cleanup
        raise  # Re-raise for caller to handle`},{type:"subheading",content:"Raise from (Exception Chaining)"},{type:"code",content:`# Chain exceptions to preserve context
def load_config(filename):
    try:
        with open(filename) as f:
            import json
            return json.load(f)
    except FileNotFoundError as e:
        # Raise new exception from original
        raise RuntimeError(f"Config file \${filename} missing") from e
    except json.JSONDecodeError as e:
        raise RuntimeError(f"Invalid JSON in \${filename}") from e

try:
    config = load_config("config.json")
except RuntimeError as e:
    print(f"Error: \${e}")
    print(f"Caused by: \${e.__cause__}")

# Suppress original exception
def parse_data(data):
    try:
        return int(data)
    except ValueError as e:
        # Hide original exception
        raise TypeError("Data must be numeric") from None

try:
    parse_data("abc")
except TypeError as e:
    print(e)
    print(e.__cause__)  # None`},{type:"subheading",content:"Raise with Custom Messages"},{type:"code",content:`# Raise with detailed messages
def validate_email(email):
    if '@' not in email:
        raise ValueError(
            f"Invalid email '\${email}': missing @ symbol"
        )
    
    if '.' not in email.split('@')[1]:
        raise ValueError(
            f"Invalid email '\${email}': domain needs a dot"
        )
    
    return True

# Raise with multiple arguments
def create_user(username, age):
    if len(username) < 3:
        raise ValueError(
            "Username too short",
            username,
            len(username)
        )
    
    if age < 13:
        raise ValueError(
            "User too young",
            username,
            age
        )

try:
    create_user("ab", 10)
except ValueError as e:
    print(f"Error: \${e.args[0]}")
    print(f"Username: \${e.args[1]}")
    print(f"Value: \${e.args[2]}")`},{type:"subheading",content:"Conditional Raising"},{type:"code",content:`# Raise based on conditions
def process_payment(amount, balance):
    if amount <= 0:
        raise ValueError("Amount must be positive")
    
    if balance < amount:
        raise RuntimeError(
            f"Insufficient funds: need \${amount}, have \${balance}"
        )
    
    # Process payment
    return balance - amount

# Assert (raises AssertionError)
def calculate_average(numbers):
    assert len(numbers) > 0, "Cannot calculate average of empty list"
    assert all(isinstance(n, (int, float)) for n in numbers), "All items must be numbers"
    
    return sum(numbers) / len(numbers)

# Note: Assertions can be disabled with -O flag
# Use explicit raise for critical checks`},{type:"heading",content:"7. Custom Exceptions"},{type:"text",content:"Create your own exception classes to represent specific error conditions in your application. Custom exceptions improve code clarity and enable targeted error handling."},{type:"subheading",content:"Basic Custom Exception"},{type:"code",content:`class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        self.message = f"Insufficient funds: Balance \${balance}, tried to withdraw \${amount}"
        super().__init__(self.message)

class BankAccount:
    def __init__(self, balance):
        self.balance = balance
    
    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientFundsError(self.balance, amount)
        self.balance -= amount
        return self.balance

account = BankAccount(100)
try:
    account.withdraw(150)
except InsufficientFundsError as e:
    print(e.message)
    # Output: Insufficient funds: Balance $100, tried to withdraw $150`},{type:"subheading",content:"Exception Hierarchy"},{type:"code",content:`# Create exception hierarchy
class ValidationError(Exception):
    """Base validation error."""
    pass

class EmailError(ValidationError):
    pass

class PasswordError(ValidationError):
    pass

def validate_user(email, password):
    if '@' not in email:
        raise EmailError("Email must contain @")
    if len(password) < 8:
        raise PasswordError("Password too short")

try:
    validate_user("invalid", "short")
except EmailError as e:
    print(f"Email error: \${e}")
except ValidationError as e:
    # Catches any ValidationError subclass
    print(f"Validation error: \${e}")`},{type:"heading",content:"8. Common Built-in Exceptions"},{type:"text",content:"Python provides many built-in exception types for common error conditions."},{type:"code",content:`# ValueError - Invalid value
try:
    int("abc")  # Can't convert to int
except ValueError as e:
    print(f"ValueError: \${e}")

# TypeError - Wrong type
try:
    "2" + 2  # Can't add str and int
except TypeError as e:
    print(f"TypeError: \${e}")

# IndexError - Index out of range
try:
    lst = [1, 2, 3]
    print(lst[10])
except IndexError as e:
    print(f"IndexError: \${e}")

# KeyError - Dict key not found
try:
    d = {"name": "Alice"}
    print(d["age"])
except KeyError as e:
    print(f"KeyError: \${e}")

# FileNotFoundError - File doesn't exist
try:
    open("nonexistent.txt")
except FileNotFoundError as e:
    print(f"FileNotFoundError: \${e}")

# ZeroDivisionError - Division by zero
try:
    10 / 0
except ZeroDivisionError as e:
    print(f"ZeroDivisionError: \${e}")

# AttributeError - Invalid attribute
try:
    x = 5
    x.append(3)  # int has no append
except AttributeError as e:
    print(f"AttributeError: \${e}")

# ImportError/ModuleNotFoundError - Import failed
try:
    import nonexistent_module
except ModuleNotFoundError as e:
    print(f"ModuleNotFoundError: \${e}")`},{type:"subheading",content:"More Built-in Exceptions"},{type:"code",content:`# RuntimeError - General runtime error
raise RuntimeError("Something went wrong")

# NotImplementedError - Method not implemented
class Base:
    def method(self):
        raise NotImplementedError("Subclass must implement")

# StopIteration - Iterator exhausted
iterator = iter([1, 2])
next(iterator)  # 1
next(iterator)  # 2
# next(iterator)  # StopIteration

# NameError - Variable not defined
try:
    print(undefined_variable)
except NameError as e:
    print(f"NameError: \${e}")

# OSError - Operating system error
# PermissionError - No permission (subclass of OSError)
# FileExistsError - File already exists (subclass of OSError)

# MemoryError - Out of memory
# RecursionError - Maximum recursion depth exceeded
# AssertionError - Assert statement failed`},{type:"heading",content:"9. Exception Hierarchy"},{type:"text",content:"Understanding the exception hierarchy helps you catch exceptions appropriately. Always catch specific exceptions before general ones."},{type:"code",content:`# Exception hierarchy (simplified)
# BaseException
#   ├─ SystemExit
#   ├─ KeyboardInterrupt
#   ├─ GeneratorExit
#   └─ Exception
#       ├─ StopIteration
#       ├─ ArithmeticError
#       │   ├─ ZeroDivisionError
#       │   ├─ FloatingPointError
#       │   └─ OverflowError
#       ├─ AssertionError
#       ├─ AttributeError
#       ├─ EOFError
#       ├─ ImportError
#       │   └─ ModuleNotFoundError
#       ├─ LookupError
#       │   ├─ IndexError
#       │   └─ KeyError
#       ├─ NameError
#       ├─ OSError
#       │   ├─ FileNotFoundError
#       │   ├─ PermissionError
#       │   └─ FileExistsError
#       ├─ RuntimeError
#       │   ├─ NotImplementedError
#       │   └─ RecursionError
#       ├─ TypeError
#       ├─ ValueError
#       └─ Warning
#           └─ (various warning types)

# Why hierarchy matters
try:
    # Some operation
    pass
except IndexError:
    # Specific handler
    print("Index error")
except LookupError:
    # More general (catches IndexError and KeyError)
    print("Lookup error")
except Exception:
    # Most general (catches almost everything)
    print("General exception")`},{type:"subheading",content:"Exception Catching Order"},{type:"code",content:`# CORRECT: Specific to general
try:
    result = int("abc")
except ValueError:
    print("Specific: Value error")
except Exception:
    print("General: Any exception")

# WRONG: General before specific
try:
    result = int("abc")
except Exception:
    print("This catches everything!")
except ValueError:  # This will NEVER run!
    print("Never reached")

# Multiple specific exceptions
try:
    # Risky operation
    pass
except (ValueError, TypeError):
    print("Value or type error")
except (IndexError, KeyError):
    print("Lookup error")
except Exception:
    print("Other error")`},{type:"heading",content:"10. Context Managers for Exception Safety"},{type:"text",content:"Context managers (with statement) ensure cleanup code runs even if exceptions occur."},{type:"code",content:`# Without context manager (risky)
file = open("data.txt", "w")
try:
    file.write("Hello")
    # If exception here, file might not close!
    risky_operation()
finally:
    file.close()

# With context manager (safe)
with open("data.txt", "w") as file:
    file.write("Hello")
    risky_operation()
# File automatically closed, even if exception

# Multiple context managers
with open("input.txt") as infile, open("output.txt", "w") as outfile:
    data = infile.read()
    outfile.write(data.upper())
# Both files automatically closed`},{type:"subheading",content:"Custom Context Manager"},{type:"code",content:`from contextlib import contextmanager

@contextmanager
def error_handler(operation_name):
    """Context manager for consistent error handling."""
    print(f"Starting \${operation_name}...")
    try:
        yield
    except Exception as e:
        print(f"Error in \${operation_name}: \${e}")
        raise
    else:
        print(f"\${operation_name} completed successfully")
    finally:
        print(f"Cleanup for \${operation_name}")

# Usage
with error_handler("data processing"):
    # Your code here
    process_data()`},{type:"heading",content:"11. Best Practices"},{type:"code",content:`# 1. Catch specific exceptions
try:
    value = int(data)
except ValueError:  # Specific
    handle_invalid_data()

# 2. Don't catch everything
# BAD
try:
    something()
except:  # Catches KeyboardInterrupt, SystemExit, etc.
    pass

# GOOD
try:
    something()
except Exception as e:  # Doesn't catch system exceptions
    handle_error(e)

# 3. Use finally for cleanup
try:
    resource = acquire_resource()
    use_resource(resource)
finally:
    release_resource(resource)

# 4. Don't hide exceptions
# BAD
try:
    something()
except Exception:
    pass  # Error silently ignored!

# GOOD
try:
    something()
except Exception as e:
    logger.error(f"Error: \${e}")
    # Handle appropriately

# 5. Raise exceptions early
def divide(a, b):
    if b == 0:
        raise ValueError("Divisor cannot be zero")
    return a / b

# 6. Use custom exceptions for domain logic
class InvalidOrderError(Exception):
    pass

if not order.is_valid():
    raise InvalidOrderError("Order validation failed")`},{type:"note",content:"Exception handling is critical for building robust applications. Master try-except-else-finally blocks, understand the exception hierarchy, create meaningful custom exceptions, and always catch specific exceptions. Use context managers for resource safety. These practices are essential for production code and technical interviews."}]},"file-handling":{title:"File Handling",description:"Master comprehensive file handling including text, binary, CSV, JSON, and XML files. Learn file modes, buffering, encodings, path operations, and advanced techniques for production-ready file I/O.",sections:[{type:"heading",content:"1. File Basics and Open Function"},{type:"text",content:"The open() function is the gateway to file operations in Python. It returns a file object that provides methods for reading, writing, and manipulating files."},{type:"subheading",content:"Basic File Opening"},{type:"code",content:`# Basic syntax: open(filename, mode, encoding)
file = open("example.txt", "r")  # r = read mode (default)
content = file.read()
file.close()  # MUST close manually!

# open() returns a file object
print(type(file))  # <class '_io.TextIOWrapper'>

# File object attributes
print(file.name)    # 'example.txt'
print(file.mode)    # 'r'
print(file.closed)  # True (after closing)`},{type:"subheading",content:"File Modes - Complete Reference"},{type:"code",content:`# TEXT MODES (default)
# 'r'  - Read only (file must exist)
# 'w'  - Write only (creates new, overwrites existing)
# 'a'  - Append only (creates new, adds to end of existing)
# 'r+' - Read and write (file must exist)
# 'w+' - Read and write (creates new, overwrites existing)
# 'a+' - Read and append (creates new, adds to end)
# 'x'  - Exclusive creation (fails if file exists)

# BINARY MODES (add 'b' to any text mode)
# 'rb'  - Read binary
# 'wb'  - Write binary
# 'ab'  - Append binary
# 'rb+' - Read and write binary
# 'wb+' - Read and write binary (overwrites)
# 'ab+' - Read and append binary
# 'xb'  - Exclusive creation binary

# Examples
with open("data.txt", "r") as f:     # Read text
    content = f.read()

with open("output.txt", "w") as f:   # Write text (overwrites)
    f.write("Hello")

with open("log.txt", "a") as f:      # Append text
    f.write("New entry\\n")

with open("image.jpg", "rb") as f:   # Read binary
    data = f.read()

with open("copy.jpg", "wb") as f:    # Write binary
    f.write(data)`},{type:"subheading",content:"File Opening with Encoding"},{type:"code",content:`# Specify encoding for text files
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()

# Common encodings:
# 'utf-8'      - Universal (recommended)
# 'ascii'      - English only
# 'latin-1'    - Western European
# 'cp1252'     - Windows Western European
# 'utf-16'     - Unicode 16-bit
# 'iso-8859-1' - Latin-1

# Read file with different encoding
with open("legacy.txt", "r", encoding="latin-1") as f:
    content = f.read()

# Handle encoding errors
with open("data.txt", "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

# errors parameter options:
# 'strict'  - Raise exception (default)
# 'ignore'  - Skip problematic characters
# 'replace' - Replace with ?
# 'backslashreplace' - Replace with \\xNN`},{type:"heading",content:"2. Context Managers (with Statement)"},{type:"text",content:"The with statement is the best practice for file handling. It automatically closes files, even if exceptions occur, preventing resource leaks."},{type:"subheading",content:"Why Use With Statement"},{type:"code",content:`# WITHOUT with - manual cleanup required
file = open("data.txt", "r")
try:
    content = file.read()
    # If error occurs here, file might not close!
finally:
    file.close()

# WITH with - automatic cleanup
with open("data.txt", "r") as file:
    content = file.read()
    # File automatically closed, even if exception
# File is guaranteed closed here

# Multiple files
with open("input.txt", "r") as infile, open("output.txt", "w") as outfile:
    data = infile.read()
    outfile.write(data.upper())
# Both files automatically closed`},{type:"subheading",content:"How With Statement Works"},{type:"code",content:`# with calls __enter__ and __exit__ methods
class FileHandler:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None
    
    def __enter__(self):
        """Called when entering with block."""
        print(f"Opening \${self.filename}")
        self.file = open(self.filename, self.mode)
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        """Called when exiting with block."""
        print(f"Closing \${self.filename}")
        if self.file:
            self.file.close()
        return False  # Don't suppress exceptions

# Usage
with FileHandler("test.txt", "w") as f:
    f.write("Hello")
# Automatically calls __exit__`},{type:"heading",content:"3. Reading Files - Complete Methods"},{type:"subheading",content:"read() - Read Entire File"},{type:"code",content:`# Read entire file as single string
with open("data.txt", "r") as file:
    content = file.read()
    print(content)
    print(f"Total characters: \${len(content)}")

# Read specific number of characters
with open("data.txt", "r") as file:
    first_10 = file.read(10)  # Read first 10 characters
    next_5 = file.read(5)     # Read next 5 characters
    print(first_10)
    print(next_5)

# Read all remaining
with open("data.txt", "r") as file:
    part1 = file.read(100)     # Read first 100 chars
    rest = file.read()         # Read everything else
    print(f"Part 1: \${len(part1)} chars")
    print(f"Rest: \${len(rest)} chars")`},{type:"subheading",content:"readline() - Read Single Line"},{type:"code",content:`# Read one line at a time
with open("data.txt", "r") as file:
    line1 = file.readline()  # Reads first line (includes \\n)
    line2 = file.readline()  # Reads second line
    line3 = file.readline()  # Reads third line
    
    print(repr(line1))  # Shows \\n
    print(line1.strip())  # Remove \\n

# Read lines in loop
with open("data.txt", "r") as file:
    while True:
        line = file.readline()
        if not line:  # Empty string = end of file
            break
        print(line.strip())

# Read specific number of lines
with open("data.txt", "r") as file:
    for i in range(5):  # Read first 5 lines
        line = file.readline()
        if line:
            print(f"Line \${i+1}: \${line.strip()}")`},{type:"subheading",content:"readlines() - Read All Lines as List"},{type:"code",content:`# Read all lines into list
with open("data.txt", "r") as file:
    lines = file.readlines()  # Returns list of strings
    print(f"Total lines: \${len(lines)}")
    
    for i, line in enumerate(lines, 1):
        print(f"\${i}: \${line.strip()}")

# Memory consideration: readlines() loads entire file
# For large files, use iteration instead

# Process lines
with open("data.txt", "r") as file:
    lines = file.readlines()
    # Remove empty lines
    lines = [line.strip() for line in lines if line.strip()]
    # Process each line
    for line in lines:
        process(line)`},{type:"subheading",content:"Iterating Over File (Best Practice)"},{type:"code",content:`# BEST: Iterate directly over file object (memory efficient)
with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())

# Advantages:
# 1. Memory efficient (reads one line at a time)
# 2. Clean and Pythonic
# 3. Works with huge files

# With line numbers
with open("data.txt", "r") as file:
    for line_num, line in enumerate(file, 1):
        print(f"\${line_num}: \${line.strip()}")

# Filter while reading
with open("data.txt", "r") as file:
    for line in file:
        if "ERROR" in line:
            print(line.strip())

# Process in chunks
with open("large_file.txt", "r") as file:
    while True:
        lines = [file.readline() for _ in range(100)]
        if not lines[0]:  # End of file
            break
        process_batch(lines)`},{type:"subheading",content:"Reading Binary Files"},{type:"code",content:`# Read entire binary file
with open("image.jpg", "rb") as file:
    data = file.read()
    print(f"File size: \${len(data)} bytes")
    print(f"First 10 bytes: \${data[:10]}")

# Read binary in chunks (for large files)
with open("video.mp4", "rb") as file:
    chunk_size = 1024 * 1024  # 1 MB chunks
    while True:
        chunk = file.read(chunk_size)
        if not chunk:
            break
        process_chunk(chunk)

# Copy binary file
with open("source.jpg", "rb") as src, open("dest.jpg", "wb") as dst:
    dst.write(src.read())`},{type:"subheading",content:"File Position and Seek"},{type:"code",content:`# tell() - Get current position
with open("data.txt", "r") as file:
    print(file.tell())  # 0 (start)
    
    file.read(10)
    print(file.tell())  # 10 (after reading 10 chars)
    
    file.read(5)
    print(file.tell())  # 15

# seek() - Move to specific position
with open("data.txt", "r") as file:
    file.seek(10)  # Move to position 10
    content = file.read()  # Read from position 10
    
    file.seek(0)   # Move back to start
    first = file.read(5)

# seek() with offset
with open("data.txt", "r") as file:
    # seek(offset, whence)
    # whence: 0=start, 1=current, 2=end
    
    file.seek(0, 0)  # Start of file
    file.seek(10, 1) # 10 bytes forward from current
    file.seek(-5, 2) # 5 bytes before end (binary mode only)

# Rewind file
with open("data.txt", "r") as file:
    first_read = file.read()
    file.seek(0)  # Rewind
    second_read = file.read()  # Read again`},{type:"heading",content:"4. Writing Files - Complete Methods"},{type:"subheading",content:"write() - Write String to File"},{type:"code",content:`# Write to file (overwrites existing)
with open("output.txt", "w") as file:
    file.write("Hello, World!\\n")
    file.write("This is a new line\\n")
    # Returns number of characters written
    chars_written = file.write("Third line\\n")
    print(f"Wrote \${chars_written} characters")

# write() doesn't add newlines automatically
with open("output.txt", "w") as file:
    file.write("Line 1")
    file.write("Line 2")  # Appears on same line!
    # Output: Line 1Line 2

# Proper way with newlines
with open("output.txt", "w") as file:
    file.write("Line 1\\n")
    file.write("Line 2\\n")
    # Output: Line 1 (newline) Line 2

# Write variables
name = "Alice"
age = 25
with open("user.txt", "w") as file:
    file.write(f"Name: \${name}\\n")
    file.write(f"Age: \${age}\\n")`},{type:"subheading",content:"writelines() - Write List of Strings"},{type:"code",content:`# Write multiple lines (no newlines added!)
lines = ["Line 1", "Line 2", "Line 3"]
with open("output.txt", "w") as file:
    file.writelines(lines)
    # Output: Line 1Line 2Line 3 (no newlines!)

# Correct way: add newlines to list items
lines = ["Line 1\\n", "Line 2\\n", "Line 3\\n"]
with open("output.txt", "w") as file:
    file.writelines(lines)
    # Output: Line 1 (newline) Line 2 (newline) Line 3

# Using list comprehension
lines = ["Line 1", "Line 2", "Line 3"]
with open("output.txt", "w") as file:
    file.writelines(line + "\\n" for line in lines)

# Write from various sources
data = ["Alice", "Bob", "Charlie"]
with open("names.txt", "w") as file:
    file.writelines(f"\${name}\\n" for name in data)`},{type:"subheading",content:"Append Mode"},{type:"code",content:`# Append to existing file (doesn't overwrite)
with open("log.txt", "a") as file:
    file.write("New log entry\\n")
    file.write("Another entry\\n")

# Create if doesn't exist, append if exists
with open("log.txt", "a") as file:
    import datetime
    timestamp = datetime.datetime.now()
    file.write(f"[\${timestamp}] Log message\\n")

# Append vs Write comparison
# First write (creates file)
with open("data.txt", "w") as f:
    f.write("First line\\n")

# Append (adds to file)
with open("data.txt", "a") as f:
    f.write("Second line\\n")

# Write (overwrites entire file!)
with open("data.txt", "w") as f:
    f.write("This overwrites everything\\n")`},{type:"subheading",content:"Writing Binary Files"},{type:"code",content:`# Write binary data
data = b"\\x89PNG\\r\\n\\x1a\\n"  # PNG header
with open("test.png", "wb") as file:
    file.write(data)

# Copy binary file
with open("source.jpg", "rb") as src:
    with open("dest.jpg", "wb") as dst:
        dst.write(src.read())

# Write binary in chunks (memory efficient)
with open("source.mp4", "rb") as src:
    with open("dest.mp4", "wb") as dst:
        chunk_size = 8192  # 8 KB chunks
        while True:
            chunk = src.read(chunk_size)
            if not chunk:
                break
            dst.write(chunk)

# Convert string to bytes and write
text = "Hello, World!"
with open("data.bin", "wb") as file:
    file.write(text.encode("utf-8"))`},{type:"subheading",content:"Read and Write (r+, w+, a+ modes)"},{type:"code",content:`# r+ mode: Read and write (file must exist)
with open("data.txt", "r+") as file:
    content = file.read()         # Read existing
    file.write("\\nNew line")      # Append at end
    
    file.seek(0)                  # Go to start
    first = file.read(10)         # Read first 10 chars

# w+ mode: Read and write (overwrites file)
with open("data.txt", "w+") as file:
    file.write("Hello\\n")
    file.write("World\\n")
    
    file.seek(0)  # Must seek to start to read
    content = file.read()
    print(content)

# a+ mode: Read and append
with open("log.txt", "a+") as file:
    file.write("New entry\\n")
    
    file.seek(0)  # Go to start to read
    all_content = file.read()
    print(all_content)`},{type:"subheading",content:"Buffering and Flushing"},{type:"code",content:`# Buffer controls how often data is written to disk
# buffering=-1 : System default
# buffering=0  : Unbuffered (binary only)
# buffering=1  : Line buffered (text files)
# buffering>1  : Buffer size in bytes

# Unbuffered write (immediate)
with open("output.txt", "w", buffering=1) as file:
    file.write("This is written immediately\\n")

# Manual flush
with open("output.txt", "w") as file:
    file.write("Line 1\\n")
    file.flush()  # Force write to disk
    # Do something else...
    file.write("Line 2\\n")

# Use case: real-time logging
import time
with open("log.txt", "w", buffering=1) as log:
    for i in range(5):
        log.write(f"Entry \${i}\\n")
        log.flush()  # Ensure written immediately
        time.sleep(1)`},{type:"heading",content:"5. Working with CSV Files"},{type:"text",content:"CSV (Comma Separated Values) files are commonly used for tabular data. Python's csv module provides powerful tools for reading and writing CSV files."},{type:"subheading",content:"Writing CSV Files"},{type:"code",content:`import csv

# Basic CSV writing
data = [
    ["Name", "Age", "City"],
    ["Alice", 25, "New York"],
    ["Bob", 30, "Paris"],
    ["Charlie", 35, "London"]
]

with open("people.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(data)  # Write all rows at once

# Write one row at a time
with open("people.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(["Name", "Age", "City"])  # Header
    writer.writerow(["Alice", 25, "New York"])
    writer.writerow(["Bob", 30, "Paris"])

# Custom delimiter
with open("data.tsv", "w", newline="") as file:
    writer = csv.writer(file, delimiter="\\t")  # Tab-separated
    writer.writerow(["Col1", "Col2", "Col3"])

# Custom quote character
with open("data.csv", "w", newline="") as file:
    writer = csv.writer(file, quotechar="'", quoting=csv.QUOTE_MINIMAL)
    writer.writerow(["Name", "Description"])
    writer.writerow(["Alice", "Says 'hello' to everyone"])`},{type:"subheading",content:"Reading CSV Files"},{type:"code",content:`import csv

# Basic CSV reading
with open("people.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)  # Each row is a list

# Skip header
with open("people.csv", "r") as file:
    reader = csv.reader(file)
    next(reader)  # Skip first row (header)
    for row in reader:
        name, age, city = row
        print(f"\${name} is \${age} years old")

# Read into list
with open("people.csv", "r") as file:
    reader = csv.reader(file)
    data = list(reader)  # Convert to list
    print(f"Total rows: \${len(data)}")

# Custom delimiter
with open("data.tsv", "r") as file:
    reader = csv.reader(file, delimiter="\\t")
    for row in reader:
        print(row)`},{type:"subheading",content:"CSV DictReader and DictWriter"},{type:"code",content:`import csv

# DictReader - Read as dictionaries
with open("people.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        # Each row is a dictionary
        print(f"\${row['Name']} is \${row['Age']} years old")
        print(f"Lives in \${row['City']}")

# DictReader with custom fieldnames
with open("data.csv", "r") as file:
    reader = csv.DictReader(file, fieldnames=["col1", "col2", "col3"])
    for row in reader:
        print(row["col1"])

# DictWriter - Write from dictionaries
fieldnames = ["Name", "Age", "City"]
data = [
    {"Name": "Alice", "Age": 25, "City": "New York"},
    {"Name": "Bob", "Age": 30, "City": "Paris"},
    {"Name": "Charlie", "Age": 35, "City": "London"}
]

with open("people.csv", "w", newline="") as file:
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()  # Write header row
    writer.writerows(data)  # Write all data

# Write one row at a time
with open("people.csv", "w", newline="") as file:
    writer = csv.DictWriter(file, fieldnames=["Name", "Age"])
    writer.writeheader()
    writer.writerow({"Name": "Alice", "Age": 25})
    writer.writerow({"Name": "Bob", "Age": 30})`},{type:"subheading",content:"Advanced CSV Options"},{type:"code",content:`import csv

# Excel dialect (for Excel compatibility)
with open("data.csv", "w", newline="") as file:
    writer = csv.writer(file, dialect="excel")
    writer.writerow(["Data1", "Data2"])

# Custom dialect
csv.register_dialect("custom",
    delimiter="|",
    quotechar='"',
    quoting=csv.QUOTE_MINIMAL,
    lineterminator="\\n"
)

with open("data.csv", "w", newline="") as file:
    writer = csv.writer(file, dialect="custom")
    writer.writerow(["A", "B", "C"])

# Handle missing fields
with open("incomplete.csv", "r") as file:
    reader = csv.DictReader(file, restkey="extra", restval="N/A")
    for row in reader:
        print(row)

# Quoting options
# csv.QUOTE_MINIMAL - Quote only when needed
# csv.QUOTE_ALL - Quote all fields
# csv.QUOTE_NONNUMERIC - Quote non-numeric fields
# csv.QUOTE_NONE - Never quote

with open("data.csv", "w", newline="") as file:
    writer = csv.writer(file, quoting=csv.QUOTE_ALL)
    writer.writerow(["Text", 123, "More text"])`},{type:"heading",content:"6. Working with JSON Files"},{type:"text",content:"JSON (JavaScript Object Notation) is a lightweight data format perfect for configuration files, APIs, and data exchange. Python's json module makes it easy to work with JSON data."},{type:"subheading",content:"Writing JSON Files"},{type:"code",content:`import json

# Basic JSON writing
data = {
    "name": "Alice",
    "age": 25,
    "city": "New York",
    "hobbies": ["reading", "coding", "gaming"]
}

with open("data.json", "w") as file:
    json.dump(data, file, indent=4)  # indent for pretty printing

# Without indentation (compact)
with open("compact.json", "w") as file:
    json.dump(data, file)

# Complex data structure
users = [
    {
        "id": 1,
        "name": "Alice",
        "email": "alice@example.com",
        "active": True,
        "balance": 1234.56,
        "tags": ["vip", "premium"]
    },
    {
        "id": 2,
        "name": "Bob",
        "email": "bob@example.com",
        "active": False,
        "balance": None,
        "tags": []
    }
]

with open("users.json", "w") as file:
    json.dump(users, file, indent=2)`},{type:"subheading",content:"Reading JSON Files"},{type:"code",content:`import json

# Basic JSON reading
with open("data.json", "r") as file:
    data = json.load(file)
    print(data["name"])      # Alice
    print(data["hobbies"])   # ['reading', 'coding', 'gaming']
    print(type(data))        # <class 'dict'>

# Reading JSON array
with open("users.json", "r") as file:
    users = json.load(file)  # Returns list
    for user in users:
        print(f"\${user['name']}: \${user['email']}")

# Access nested data
config = {
    "database": {
        "host": "localhost",
        "port": 5432,
        "credentials": {
            "username": "admin",
            "password": "secret"
        }
    }
}

with open("config.json", "w") as f:
    json.dump(config, f, indent=2)

with open("config.json", "r") as f:
    cfg = json.load(f)
    print(cfg["database"]["host"])
    print(cfg["database"]["credentials"]["username"])`},{type:"subheading",content:"JSON Strings (dumps/loads)"},{type:"code",content:`import json

# Convert Python object to JSON string
data = {"name": "Alice", "age": 25}
json_string = json.dumps(data, indent=2)
print(json_string)
print(type(json_string))  # <class 'str'>

# Convert JSON string to Python object
json_str = '{"name": "Bob", "age": 30}'
data = json.loads(json_str)
print(data["name"])  # Bob
print(type(data))    # <class 'dict'>

# Pretty print JSON
data = {"users": [{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"}]}
pretty = json.dumps(data, indent=4, sort_keys=True)
print(pretty)

# Compact JSON (no spaces)
compact = json.dumps(data, separators=(",", ":"))
print(compact)  # {"users":[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]}`},{type:"subheading",content:"Advanced JSON Options"},{type:"code",content:`import json

# sort_keys - Sort dictionary keys
data = {"z": 1, "a": 2, "m": 3}
sorted_json = json.dumps(data, sort_keys=True)
print(sorted_json)  # {"a": 2, "m": 3, "z": 1}

# ensure_ascii - Handle non-ASCII characters
data = {"name": "Åsa", "city": "São Paulo"}
with open("unicode.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# Custom encoder for unsupported types
from datetime import datetime

class DateTimeEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        return super().default(obj)

data = {
    "event": "Meeting",
    "timestamp": datetime.now()
}

json_str = json.dumps(data, cls=DateTimeEncoder)
print(json_str)

# Handle JSON decode errors
try:
    data = json.loads("invalid json")
except json.JSONDecodeError as e:
    print(f"JSON error: \${e.msg} at line \${e.lineno} column \${e.colno}")`},{type:"subheading",content:"JSON with Custom Objects"},{type:"code",content:`import json

class User:
    def __init__(self, name, age, email):
        self.name = name
        self.age = age
        self.email = email
    
    def to_dict(self):
        """Convert to dictionary for JSON serialization."""
        return {
            "name": self.name,
            "age": self.age,
            "email": self.email
        }
    
    @classmethod
    def from_dict(cls, data):
        """Create User from dictionary."""
        return cls(data["name"], data["age"], data["email"])

# Serialize custom object
user = User("Alice", 25, "alice@example.com")
user_dict = user.to_dict()

with open("user.json", "w") as f:
    json.dump(user_dict, f, indent=2)

# Deserialize to custom object
with open("user.json", "r") as f:
    data = json.load(f)
    user = User.from_dict(data)
    print(f"\${user.name}, \${user.age}, \${user.email}")`},{type:"heading",content:"7. File Operations with os Module"},{type:"subheading",content:"File Existence and Information"},{type:"code",content:`import os

# Check if file exists
if os.path.exists("data.txt"):
    print("File exists")

# Check if path is a file
if os.path.isfile("data.txt"):
    print("It's a file")

# Check if path is a directory
if os.path.isdir("my_folder"):
    print("It's a directory")

# Get file size
size = os.path.getsize("data.txt")
print(f"File size: \${size} bytes")
print(f"File size: \${size / 1024:.2f} KB")
print(f"File size: \${size / (1024*1024):.2f} MB")

# Get file metadata
import os.path
stat = os.stat("data.txt")
print(f"Size: \${stat.st_size} bytes")
print(f"Created: \${stat.st_ctime}")
print(f"Modified: \${stat.st_mtime}")
print(f"Accessed: \${stat.st_atime}")`},{type:"subheading",content:"File Operations"},{type:"code",content:`import os

# Delete file
if os.path.exists("temp.txt"):
    os.remove("temp.txt")
    print("File deleted")

# Safe delete with error handling
try:
    os.remove("file.txt")
except FileNotFoundError:
    print("File doesn't exist")
except PermissionError:
    print("No permission to delete")

# Rename file
os.rename("old_name.txt", "new_name.txt")

# Move file (rename with different directory)
os.rename("file.txt", "backup/file.txt")

# Copy file (need shutil module)
import shutil
shutil.copy("source.txt", "destination.txt")
shutil.copy2("source.txt", "dest.txt")  # Preserve metadata

# Copy entire directory
shutil.copytree("source_folder", "dest_folder")

# Move file or directory
shutil.move("source.txt", "destination.txt")`},{type:"subheading",content:"Directory Operations"},{type:"code",content:`import os

# Get current directory
current = os.getcwd()
print(f"Current directory: \${current}")

# Change directory
os.chdir("/path/to/directory")

# Create directory
os.mkdir("new_folder")

# Create nested directories
os.makedirs("parent/child/grandchild", exist_ok=True)
# exist_ok=True prevents error if exists

# Remove empty directory
os.rmdir("empty_folder")

# Remove directory and contents
import shutil
shutil.rmtree("folder_with_contents")

# List files and folders
items = os.listdir(".")
print(items)

# List only files
files = [f for f in os.listdir(".") if os.path.isfile(f)]

# List only directories
dirs = [d for d in os.listdir(".") if os.path.isdir(d)]

# Walk directory tree
for root, dirs, files in os.walk("."):
    print(f"Directory: \${root}")
    print(f"  Subdirectories: \${dirs}")
    print(f"  Files: \${files}")`},{type:"heading",content:"8. Path Manipulation with os.path and pathlib"},{type:"subheading",content:"os.path Module"},{type:"code",content:`import os

# Get current directory
current = os.getcwd()
print(current)

# Join paths (cross-platform)
path = os.path.join("folder", "subfolder", "file.txt")
print(path)  # folder/subfolder/file.txt (or folder\\subfolder\\file.txt on Windows)

# Split path into directory and filename
directory, filename = os.path.split("/path/to/file.txt")
print(f"Directory: \${directory}")  # /path/to
print(f"Filename: \${filename}")    # file.txt

# Split filename and extension
name, ext = os.path.splitext("document.pdf")
print(f"Name: \${name}")  # document
print(f"Extension: \${ext}")  # .pdf

# Get absolute path
abs_path = os.path.abspath("data.txt")
print(abs_path)

# Get directory name
dirname = os.path.dirname("/path/to/file.txt")
print(dirname)  # /path/to

# Get filename
basename = os.path.basename("/path/to/file.txt")
print(basename)  # file.txt

# Check if path is absolute
print(os.path.isabs("/absolute/path"))  # True
print(os.path.isabs("relative/path"))   # False

# Normalize path (resolve .. and .)
normalized = os.path.normpath("/path/to/../file.txt")
print(normalized)  # /path/file.txt

# Get common prefix
common = os.path.commonpath(["/usr/local/bin", "/usr/local/lib"])
print(common)  # /usr/local`},{type:"subheading",content:"pathlib Module (Modern Approach)"},{type:"code",content:`from pathlib import Path

# Create Path object
path = Path("folder/file.txt")
print(path)
print(type(path))  # <class 'pathlib.PosixPath'> or WindowsPath

# Current directory
current = Path.cwd()
print(current)

# Home directory
home = Path.home()
print(home)

# Join paths with /
path = Path("folder") / "subfolder" / "file.txt"
print(path)

# File properties
path = Path("data.txt")
print(path.name)       # data.txt
print(path.stem)       # data
print(path.suffix)     # .txt
print(path.parent)     # . (parent directory)
print(path.absolute()) # Absolute path

# Multiple suffixes
path = Path("archive.tar.gz")
print(path.suffixes)  # ['.tar', '.gz']

# Check existence
if path.exists():
    print("Path exists")

if path.is_file():
    print("It's a file")

if path.is_dir():
    print("It's a directory")

# Read/write with pathlib
path = Path("data.txt")
content = path.read_text()  # Read entire file
path.write_text("New content")  # Write to file

# Binary read/write
data = path.read_bytes()
path.write_bytes(b"Binary data")`},{type:"subheading",content:"pathlib Advanced Operations"},{type:"code",content:`from pathlib import Path

# List directory contents
path = Path(".")
for item in path.iterdir():
    print(item)

# Glob patterns
# Find all .txt files
for txt_file in path.glob("*.txt"):
    print(txt_file)

# Find all .py files recursively
for py_file in path.rglob("*.py"):
    print(py_file)

# Find files matching pattern
for file in path.glob("**/*.json"):
    print(file)

# Create directory
new_dir = Path("new_folder")
new_dir.mkdir(exist_ok=True)

# Create nested directories
nested = Path("parent/child/grandchild")
nested.mkdir(parents=True, exist_ok=True)

# Delete file
file = Path("temp.txt")
file.unlink(missing_ok=True)  # Don't error if doesn't exist

# Delete directory
directory = Path("empty_folder")
directory.rmdir()  # Only works if empty

# Rename/move
old = Path("old_name.txt")
new = old.rename("new_name.txt")

# File metadata
path = Path("data.txt")
stat = path.stat()
print(f"Size: \${stat.st_size} bytes")
print(f"Modified: \${stat.st_mtime}")

# Resolve path (absolute, resolve symlinks)
resolved = path.resolve()
print(resolved)`},{type:"subheading",content:"Path Comparison"},{type:"code",content:`from pathlib import Path
import os

# os.path vs pathlib comparison

# OLD WAY (os.path)
import os
path = os.path.join("folder", "file.txt")
if os.path.exists(path):
    size = os.path.getsize(path)
    with open(path, "r") as f:
        content = f.read()

# NEW WAY (pathlib)
from pathlib import Path
path = Path("folder") / "file.txt"
if path.exists():
    size = path.stat().st_size
    content = path.read_text()

# Benefits of pathlib:
# 1. Object-oriented
# 2. More intuitive
# 3. Cross-platform
# 4. Built-in methods for common operations
# 5. Path arithmetic with /`},{type:"note",content:"File handling is critical for data processing. Always use context managers (with statement), specify encodings, handle exceptions properly, and choose appropriate file formats. For large files, use generators and chunked reading. Master both os.path and pathlib for modern path operations."}]},multithreading:{title:"Multithreading",description:"Master concurrent execution with threads, thread synchronization, locks, semaphores, events, queues, thread pools, and understanding the GIL for CPU-bound vs I/O-bound tasks.",sections:[{type:"heading",content:"1. Introduction to Threading"},{type:"text",content:"Threading allows multiple operations to run concurrently within a single process. Threads share the same memory space, making them lightweight but requiring careful synchronization. Best for I/O-bound tasks."},{type:"subheading",content:"What is a Thread?"},{type:"code",content:`import threading
import time

def print_numbers():
    for i in range(5):
        print(f"Number: \${i}")
        time.sleep(0.5)

def print_letters():
    for letter in 'ABCDE':
        print(f"Letter: \${letter}")
        time.sleep(0.5)

# Create threads
thread1 = threading.Thread(target=print_numbers)
thread2 = threading.Thread(target=print_letters)

# Start threads
thread1.start()
thread2.start()

# Wait for completion
thread1.join()
thread2.join()

print("Both threads completed!")`},{type:"note",content:"Threading is best for I/O-bound tasks. For CPU-bound tasks, use multiprocessing to bypass the GIL. Always use synchronization primitives when sharing data between threads."}]},multiprocessing:{title:"Multiprocessing",description:"Master parallel processing with multiple processes, process pools, inter-process communication using pipes, queues, shared memory, and process synchronization for CPU-intensive tasks.",sections:[{type:"heading",content:"1. Introduction to Multiprocessing"},{type:"text",content:"Multiprocessing creates separate Python processes, each with its own Python interpreter and memory space. Unlike threading, multiprocessing bypasses the GIL, enabling true parallel execution on multiple CPU cores. Best for CPU-bound tasks."},{type:"subheading",content:"Basic Process Creation"},{type:"code",content:`import multiprocessing
import os
import time

def worker(name):
    print(f"\${name} starting (PID: \${os.getpid()})")
    time.sleep(2)
    print(f"\${name} finished")

if __name__ == '__main__':
    # Create process
    process = multiprocessing.Process(target=worker, args=("Process-1",))
    
    # Start process
    process.start()
    
    print(f"Main process (PID: \${os.getpid()})")
    
    # Wait for completion
    process.join()
    
    print("Process completed")`},{type:"note",content:'Multiprocessing is essential for CPU-intensive tasks. Use Process for manual control, Pool for batch processing, and ProcessPoolExecutor for modern API. Always use if __name__ == "__main__" guard to prevent infinite process creation.'}]},regex:{title:"Regular Expressions",description:"Learn pattern matching and text processing using Python's powerful re module.",sections:[{type:"heading",content:"What are Regular Expressions?"},{type:"text",content:"Regular expressions (regex) are patterns used to match, search, and manipulate text. They're powerful for validation, searching, and text processing."},{type:"heading",content:"Basic Patterns"},{type:"code",content:`import re

# Literal match
text = "Hello World"
match = re.search("World", text)
if match:
    print("Found!")  # Found!

# Special characters
# . - Any character (except newline)
# ^ - Start of string
# $ - End of string
# * - 0 or more repetitions
# + - 1 or more repetitions
# ? - 0 or 1 repetition
# [] - Character set
# | - OR operator`},{type:"heading",content:"Common Methods"},{type:"code",content:`import re

text = "My phone number is 123-456-7890"

# search() - finds first match
match = re.search(r"\\d{3}-\\d{3}-\\d{4}", text)
if match:
    print(match.group())  # 123-456-7890

# findall() - finds all matches
email_text = "Contact: john@email.com or jane@email.com"
emails = re.findall(r"\\w+@\\w+\\.com", email_text)
print(emails)  # ['john@email.com', 'jane@email.com']

# match() - matches from the beginning
result = re.match(r"My", text)
print(result.group())  # My

# split() - split by pattern
words = re.split(r"\\s+", "Hello   World  Python")
print(words)  # ['Hello', 'World', 'Python']

# sub() - replace matches
new_text = re.sub(r"\\d", "X", "Call 123-456-7890")
print(new_text)  # Call XXX-XXX-XXXX`},{type:"heading",content:"Character Classes"},{type:"code",content:`import re

# Predefined character classes
# \\d - Digit [0-9]
# \\D - Not a digit
# \\w - Word character [a-zA-Z0-9_]
# \\W - Not a word character
# \\s - Whitespace
# \\S - Not whitespace

text = "User123 logged in at 10:30 AM"

# Find digits
digits = re.findall(r"\\d+", text)
print(digits)  # ['123', '10', '30']

# Find words
words = re.findall(r"\\w+", text)
print(words)  # ['User123', 'logged', 'in', 'at', '10', '30', 'AM']

# Custom character class
vowels = re.findall(r"[aeiou]", "Hello World")
print(vowels)  # ['e', 'o', 'o']

# Range
lowercase = re.findall(r"[a-z]+", "Hello123World")
print(lowercase)  # ['ello', 'orld']`},{type:"heading",content:"Quantifiers"},{type:"code",content:`import re

# * - 0 or more
print(re.findall(r"ab*", "a ab abb abbb"))
# ['a', 'ab', 'abb', 'abbb']

# + - 1 or more
print(re.findall(r"ab+", "a ab abb abbb"))
# ['ab', 'abb', 'abbb']

# ? - 0 or 1
print(re.findall(r"ab?", "a ab abb"))
# ['a', 'ab', 'ab']

# {n} - exactly n times
print(re.findall(r"\\d{3}", "123 45 6789"))
# ['123', '678']

# {n,m} - between n and m times
print(re.findall(r"\\d{2,4}", "1 12 123 1234 12345"))
# ['12', '123', '1234', '1234']`},{type:"heading",content:"Groups and Capturing"},{type:"code",content:`import re

# Capturing groups with ()
text = "John: 25, Jane: 30, Bob: 35"
pattern = r"(\\w+): (\\d+)"
matches = re.findall(pattern, text)
print(matches)  # [('John', '25'), ('Jane', '30'), ('Bob', '35')]

# Named groups
pattern = r"(?P<name>\\w+): (?P<age>\\d+)"
match = re.search(pattern, text)
if match:
    print(match.group("name"))  # John
    print(match.group("age"))   # 25

# Non-capturing group (?:...)
pattern = r"(?:Mr|Ms|Dr)\\. (\\w+)"
match = re.search(pattern, "Dr. Smith")
print(match.group(1))  # Smith`},{type:"heading",content:"Common Patterns"},{type:"code",content:`import re

# Email validation
email_pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
email = "user@example.com"
if re.match(email_pattern, email):
    print("Valid email")

# Phone number (US format)
phone_pattern = r"^\\d{3}-\\d{3}-\\d{4}$"
phone = "123-456-7890"
if re.match(phone_pattern, phone):
    print("Valid phone")

# URL
url_pattern = r"https?://[\\w\\.-]+"
urls = re.findall(url_pattern, "Visit https://example.com or http://test.com")
print(urls)

# Password strength (8+ chars, letter, number, special char)
password_pattern = r"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
password = "Secure123!"
if re.match(password_pattern, password):
    print("Strong password")

# Extract hashtags
text = "Learning #Python and #RegEx is fun!"
hashtags = re.findall(r"#\\w+", text)
print(hashtags)  # ['#Python', '#RegEx']`},{type:"heading",content:"Flags"},{type:"code",content:`import re

text = "Hello World\\nhello python"

# re.IGNORECASE - case-insensitive
matches = re.findall(r"hello", text, re.IGNORECASE)
print(matches)  # ['Hello', 'hello']

# re.MULTILINE - ^ and $ match each line
pattern = r"^hello"
matches = re.findall(pattern, text, re.MULTILINE | re.IGNORECASE)
print(matches)  # ['Hello', 'hello']

# re.DOTALL - . matches newlines too
pattern = r"Hello.*python"
match = re.search(pattern, text, re.DOTALL)
if match:
    print("Matched across lines")`},{type:"note",content:'Use raw strings (r"pattern") for regex patterns to avoid issues with backslashes. Regular expressions are powerful but can be complex - start simple and build up.'}]},"memory-management":{title:"Memory Management",description:"Understand how Python manages memory, including the stack, heap, garbage collection, and mutability.",sections:[{type:"heading",content:"Stack vs Heap"},{type:"text",content:"Python uses two main memory areas:"},{type:"list",content:["Stack - Stores function calls, local variables, and references. Fast but limited size.","Heap - Stores objects and data structures. Larger but slower to access."]},{type:"code",content:`# Stack stores references, heap stores actual objects
x = 10        # x (reference) on stack, 10 (object) on heap
y = [1, 2, 3] # y (reference) on stack, list on heap

def my_function():
    local_var = 5  # Created on stack
    return local_var * 2
# local_var is removed from stack after function returns`},{type:"heading",content:"Reference Counting"},{type:"text",content:"Python tracks how many references point to each object:"},{type:"code",content:`import sys

x = [1, 2, 3]
print(sys.getrefcount(x))  # 2 (x + temporary reference)

y = x  # Another reference to the same list
print(sys.getrefcount(x))  # 3

del y  # Remove one reference
print(sys.getrefcount(x))  # 2

# When reference count reaches 0, object is deleted`},{type:"heading",content:"Garbage Collection"},{type:"text",content:"Python automatically cleans up unused objects. The garbage collector handles circular references:"},{type:"code",content:`import gc

# Circular reference
class Node:
    def __init__(self):
        self.ref = None

a = Node()
b = Node()
a.ref = b  # a references b
b.ref = a  # b references a (circular!)

# Even if we delete a and b, they still reference each other
# Garbage collector detects and cleans this

# Manual garbage collection
gc.collect()  # Force garbage collection

# Check garbage collector stats
print(gc.get_count())  # Objects in each generation

# Disable/enable garbage collection
gc.disable()
gc.enable()`},{type:"heading",content:"Mutable vs Immutable Objects"},{type:"text",content:"Understanding mutability is crucial for memory management:"},{type:"code",content:`# IMMUTABLE - Cannot be changed after creation
# int, float, str, tuple, frozenset

x = 10
print(id(x))  # Memory address
x = 20
print(id(x))  # Different memory address - new object created!

text = "Hello"
print(id(text))
text = text + " World"
print(id(text))  # Different address - strings are immutable

# MUTABLE - Can be changed in place
# list, dict, set

nums = [1, 2, 3]
print(id(nums))
nums.append(4)  # Modified in place
print(id(nums))  # Same memory address!

# Implications
a = [1, 2, 3]
b = a  # b references the same list as a
b.append(4)
print(a)  # [1, 2, 3, 4] - a is also modified!

# To create a copy:
c = a.copy()  # or a[:]
c.append(5)
print(a)  # [1, 2, 3, 4] - a is not modified
print(c)  # [1, 2, 3, 4, 5]`},{type:"heading",content:"Object Identity and Equality"},{type:"code",content:`# id() - returns memory address
# is - checks if same object (identity)
# == - checks if equal value (equality)

a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)   # True (same values)
print(a is b)   # False (different objects)
print(a is c)   # True (same object)

print(id(a))
print(id(b))    # Different
print(id(c))    # Same as a

# Small integers are cached
x = 256
y = 256
print(x is y)   # True (same object - Python caches small ints)

x = 257
y = 257
print(x is y)   # False (different objects)

# String interning
s1 = "hello"
s2 = "hello"
print(s1 is s2)  # True (Python interns short strings)`},{type:"heading",content:"Memory Optimization Tips"},{type:"list",content:["Use generators for large datasets instead of lists","Delete large objects when no longer needed","Use __slots__ in classes to reduce memory","Avoid creating unnecessary copies of data","Use tuple instead of list for fixed data","Clear large collections explicitly: list.clear()"]},{type:"code",content:`# Generator vs List
# List - all items in memory
numbers_list = [x for x in range(1000000)]

# Generator - items created on demand
numbers_gen = (x for x in range(1000000))

# __slots__ reduces memory
class WithoutSlots:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class WithSlots:
    __slots__ = ['x', 'y']
    def __init__(self, x, y):
        self.x = x
        self.y = y

# WithSlots uses less memory`},{type:"heading",content:"Shallow vs Deep Copy"},{type:"code",content:`import copy

# Shallow copy - copies references
original = [[1, 2], [3, 4]]
shallow = original.copy()
shallow[0][0] = 999
print(original)  # [[999, 2], [3, 4]] - nested list affected!

# Deep copy - copies everything recursively
original = [[1, 2], [3, 4]]
deep = copy.deepcopy(original)
deep[0][0] = 999
print(original)  # [[1, 2], [3, 4]] - not affected
print(deep)      # [[999, 2], [3, 4]]`},{type:"note",content:"Python's automatic memory management is powerful, but understanding mutability and references helps write more efficient code and avoid bugs."}]},"os-system":{title:"OS & System Programming",description:"Learn to interact with the operating system using Python's os, sys, shutil, and subprocess modules.",sections:[{type:"heading",content:"The os Module"},{type:"text",content:"The os module provides functions to interact with the operating system:"},{type:"code",content:`import os

# Current working directory
print(os.getcwd())

# Change directory
os.chdir('/path/to/directory')

# List directory contents
files = os.listdir('.')
for file in files:
    print(file)

# Create directory
os.mkdir('new_folder')

# Create nested directories
os.makedirs('parent/child/grandchild', exist_ok=True)

# Remove directory
os.rmdir('empty_folder')  # Only works if empty

# Remove file
os.remove('file.txt')

# Rename/move file
os.rename('old_name.txt', 'new_name.txt')

# Check if path exists
if os.path.exists('file.txt'):
    print("File exists")

# Check if it's a file or directory
print(os.path.isfile('file.txt'))
print(os.path.isdir('folder'))

# Get file size
size = os.path.getsize('file.txt')
print(f"Size: {size} bytes")`},{type:"heading",content:"Path Operations"},{type:"code",content:`import os

# Join paths (works on all OS)
path = os.path.join('folder', 'subfolder', 'file.txt')
print(path)  # folder/subfolder/file.txt (or \\ on Windows)

# Split path
directory, filename = os.path.split('/path/to/file.txt')
print(directory)  # /path/to
print(filename)   # file.txt

# Split extension
name, ext = os.path.splitext('document.pdf')
print(name)  # document
print(ext)   # .pdf

# Get absolute path
abs_path = os.path.abspath('file.txt')
print(abs_path)

# Get directory name
dirname = os.path.dirname('/path/to/file.txt')
print(dirname)  # /path/to

# Get base name
basename = os.path.basename('/path/to/file.txt')
print(basename)  # file.txt`},{type:"heading",content:"Environment Variables"},{type:"code",content:`import os

# Get environment variable
home = os.environ.get('HOME')  # or os.getenv('HOME')
print(home)

# Get all environment variables
for key, value in os.environ.items():
    print(f"{key}: {value}")

# Set environment variable (for current process only)
os.environ['MY_VAR'] = 'my_value'

# Get with default value
path = os.environ.get('CUSTOM_PATH', '/default/path')`},{type:"heading",content:"The sys Module"},{type:"text",content:"The sys module provides system-specific parameters and functions:"},{type:"code",content:`import sys

# Python version
print(sys.version)
print(sys.version_info)

# Platform information
print(sys.platform)  # 'linux', 'darwin', 'win32'

# Command line arguments
print(sys.argv)  # ['script.py', 'arg1', 'arg2']

# Exit program with status code
# sys.exit(0)  # 0 = success
# sys.exit(1)  # 1 = error

# Python path (where modules are searched)
print(sys.path)

# Standard input/output
sys.stdout.write("Hello\\n")
line = sys.stdin.readline()

# Get object size
import sys
x = [1, 2, 3]
print(sys.getsizeof(x))  # Size in bytes`},{type:"heading",content:"The shutil Module"},{type:"text",content:"shutil provides high-level file operations:"},{type:"code",content:`import shutil

# Copy file
shutil.copy('source.txt', 'destination.txt')

# Copy file with metadata (permissions, timestamps)
shutil.copy2('source.txt', 'destination.txt')

# Copy directory
shutil.copytree('source_folder', 'destination_folder')

# Move file or directory
shutil.move('old_location', 'new_location')

# Remove directory and all contents
shutil.rmtree('folder_to_delete')

# Get disk usage
total, used, free = shutil.disk_usage('/')
print(f"Total: {total // (2**30)} GB")
print(f"Used: {used // (2**30)} GB")
print(f"Free: {free // (2**30)} GB")

# Archive (create zip, tar, etc.)
shutil.make_archive('backup', 'zip', 'folder_to_archive')

# Unpack archive
shutil.unpack_archive('backup.zip', 'extract_here')`},{type:"heading",content:"The subprocess Module"},{type:"text",content:"Run external commands and programs:"},{type:"code",content:`import subprocess

# Run command and wait for completion
result = subprocess.run(['ls', '-l'], capture_output=True, text=True)
print(result.stdout)
print(result.returncode)  # 0 = success

# Run command in shell
result = subprocess.run('echo Hello World', shell=True, capture_output=True, text=True)
print(result.stdout)

# Check if command succeeded (raises exception if fails)
try:
    subprocess.run(['ls', 'nonexistent'], check=True)
except subprocess.CalledProcessError as e:
    print(f"Command failed with code {e.returncode}")

# Get output directly
output = subprocess.check_output(['python', '--version'], text=True)
print(output)

# Run command with input
result = subprocess.run(
    ['python', '-c', 'name = input("Enter name: "); print(f"Hello {name}")'],
    input='Alice\\n',
    capture_output=True,
    text=True
)
print(result.stdout)`},{type:"heading",content:"Walking Directory Trees"},{type:"code",content:`import os

# Walk through all subdirectories
for dirpath, dirnames, filenames in os.walk('.'):
    print(f"Directory: {dirpath}")
    print(f"Subdirectories: {dirnames}")
    print(f"Files: {filenames}")
    print("---")

# Find all Python files
for dirpath, dirnames, filenames in os.walk('.'):
    for filename in filenames:
        if filename.endswith('.py'):
            full_path = os.path.join(dirpath, filename)
            print(full_path)`},{type:"note",content:"Be careful when using subprocess with shell=True - it can be a security risk if you're passing user input. Use shell=False and pass commands as lists instead."}]},"sql-fundamentals":{title:"SQL Fundamentals",description:"Learn SQL basics including CRUD operations, joins, and database concepts.",sections:[{type:"heading",content:"What is SQL?"},{type:"text",content:"SQL (Structured Query Language) is used to manage and query relational databases. It allows you to create, read, update, and delete data."},{type:"heading",content:"Creating Tables"},{type:"code",language:"sql",content:`-- Create a table
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER,
    grade TEXT,
    email TEXT UNIQUE
);

-- Create table with auto-increment
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`},{type:"heading",content:"INSERT - Adding Data"},{type:"code",language:"sql",content:`-- Insert single row
INSERT INTO students (id, name, age, grade)
VALUES (1, 'Alice', 20, 'A');

-- Insert multiple rows
INSERT INTO students (id, name, age, grade) VALUES
    (2, 'Bob', 21, 'B'),
    (3, 'Charlie', 19, 'A'),
    (4, 'Diana', 22, 'C');

-- Insert without specifying columns (must match order)
INSERT INTO students VALUES (5, 'Eve', 20, 'B', 'eve@example.com');`},{type:"heading",content:"SELECT - Reading Data"},{type:"code",language:"sql",content:`-- Select all columns
SELECT * FROM students;

-- Select specific columns
SELECT name, age FROM students;

-- Select with condition
SELECT * FROM students WHERE age > 20;

-- Select with multiple conditions
SELECT * FROM students WHERE age > 20 AND grade = 'A';

-- Select with OR
SELECT * FROM students WHERE grade = 'A' OR grade = 'B';

-- Select with LIKE (pattern matching)
SELECT * FROM students WHERE name LIKE 'A%';  -- Names starting with A

-- Order results
SELECT * FROM students ORDER BY age DESC;  -- Descending
SELECT * FROM students ORDER BY name ASC;   -- Ascending

-- Limit results
SELECT * FROM students LIMIT 5;

-- Limit with offset
SELECT * FROM students LIMIT 5 OFFSET 10;  -- Skip first 10`},{type:"heading",content:"UPDATE - Modifying Data"},{type:"code",language:"sql",content:`-- Update single column
UPDATE students SET age = 21 WHERE id = 1;

-- Update multiple columns
UPDATE students SET age = 23, grade = 'A' WHERE name = 'Bob';

-- Update all rows (be careful!)
UPDATE students SET grade = 'Pass';

-- Update with condition
UPDATE students SET grade = 'A' WHERE age >= 21;`},{type:"heading",content:"DELETE - Removing Data"},{type:"code",language:"sql",content:`-- Delete specific row
DELETE FROM students WHERE id = 1;

-- Delete with condition
DELETE FROM students WHERE age < 18;

-- Delete all rows (be very careful!)
DELETE FROM students;

-- Drop entire table
DROP TABLE students;`},{type:"heading",content:"Aggregate Functions"},{type:"code",language:"sql",content:`-- Count rows
SELECT COUNT(*) FROM students;

-- Count specific column
SELECT COUNT(email) FROM students;

-- Average
SELECT AVG(age) FROM students;

-- Sum
SELECT SUM(age) FROM students;

-- Min and Max
SELECT MIN(age), MAX(age) FROM students;

-- Group by
SELECT grade, COUNT(*) FROM students GROUP BY grade;

-- Group by with condition
SELECT grade, AVG(age) FROM students GROUP BY grade HAVING AVG(age) > 20;`},{type:"heading",content:"Joins"},{type:"text",content:"Joins combine data from multiple tables:"},{type:"code",language:"sql",content:`-- Create related tables
CREATE TABLE courses (
    id INTEGER PRIMARY KEY,
    name TEXT,
    credits INTEGER
);

CREATE TABLE enrollments (
    student_id INTEGER,
    course_id INTEGER,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- INNER JOIN - only matching rows
SELECT students.name, courses.name
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
INNER JOIN courses ON enrollments.course_id = courses.id;

-- LEFT JOIN - all rows from left table
SELECT students.name, courses.name
FROM students
LEFT JOIN enrollments ON students.id = enrollments.student_id
LEFT JOIN courses ON enrollments.course_id = courses.id;

-- Aliases for shorter syntax
SELECT s.name, c.name
FROM students s
INNER JOIN enrollments e ON s.id = e.student_id
INNER JOIN courses c ON e.course_id = c.id;`},{type:"heading",content:"Indexes"},{type:"text",content:"Indexes speed up queries but slow down inserts/updates:"},{type:"code",language:"sql",content:`-- Create index
CREATE INDEX idx_student_name ON students(name);

-- Create unique index
CREATE UNIQUE INDEX idx_student_email ON students(email);

-- Drop index
DROP INDEX idx_student_name;`},{type:"note",content:"Always use WHERE clause when updating or deleting data to avoid accidentally modifying all rows. SQL is case-insensitive, but convention is to write keywords in UPPERCASE."}]},"python-databases":{title:"Python with Databases",description:"Learn how to connect Python with databases using sqlite3, MySQL connector, and SQLAlchemy ORM.",sections:[{type:"heading",content:"SQLite with Python"},{type:"text",content:"SQLite is a lightweight database that comes built-in with Python:"},{type:"code",content:`import sqlite3

# Connect to database (creates if doesn't exist)
conn = sqlite3.connect('mydatabase.db')

# Create cursor
cursor = conn.cursor()

# Create table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE,
        age INTEGER
    )
''')

# Insert data
cursor.execute("INSERT INTO users (name, email, age) VALUES (?, ?, ?)",
               ('Alice', 'alice@email.com', 25))

# Insert multiple rows
users = [
    ('Bob', 'bob@email.com', 30),
    ('Charlie', 'charlie@email.com', 35)
]
cursor.executemany("INSERT INTO users (name, email, age) VALUES (?, ?, ?)", users)

# Commit changes
conn.commit()

# Query data
cursor.execute("SELECT * FROM users")
rows = cursor.fetchall()
for row in rows:
    print(row)

# Query with condition
cursor.execute("SELECT * FROM users WHERE age > ?", (25,))
results = cursor.fetchall()

# Fetch one row
cursor.execute("SELECT * FROM users WHERE id = ?", (1,))
user = cursor.fetchone()
print(user)

# Close connection
conn.close()`},{type:"heading",content:"Better SQLite Practices"},{type:"code",content:`import sqlite3

# Use context manager (automatically commits/closes)
with sqlite3.connect('mydatabase.db') as conn:
    cursor = conn.cursor()
    
    # Use Row factory for dict-like access
    conn.row_factory = sqlite3.Row
    
    cursor.execute("SELECT * FROM users")
    rows = cursor.fetchall()
    
    for row in rows:
        print(row['name'], row['email'])  # Access by column name

# Create a database class
class Database:
    def __init__(self, db_name):
        self.conn = sqlite3.connect(db_name)
        self.cursor = self.conn.cursor()
    
    def create_user(self, name, email, age):
        self.cursor.execute(
            "INSERT INTO users (name, email, age) VALUES (?, ?, ?)",
            (name, email, age)
        )
        self.conn.commit()
    
    def get_user(self, user_id):
        self.cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
        return self.cursor.fetchone()
    
    def get_all_users(self):
        self.cursor.execute("SELECT * FROM users")
        return self.cursor.fetchall()
    
    def update_user(self, user_id, name, email, age):
        self.cursor.execute(
            "UPDATE users SET name=?, email=?, age=? WHERE id=?",
            (name, email, age, user_id)
        )
        self.conn.commit()
    
    def delete_user(self, user_id):
        self.cursor.execute("DELETE FROM users WHERE id = ?", (user_id,))
        self.conn.commit()
    
    def close(self):
        self.conn.close()

# Usage
db = Database('mydatabase.db')
db.create_user('Alice', 'alice@email.com', 25)
users = db.get_all_users()
db.close()`},{type:"heading",content:"MySQL with Python"},{type:"text",content:"Connect to MySQL databases using mysql-connector-python:"},{type:"code",content:`import mysql.connector

# Connect to MySQL
conn = mysql.connector.connect(
    host='localhost',
    user='your_username',
    password='your_password',
    database='your_database'
)

cursor = conn.cursor()

# Create table
cursor.execute("""
    CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        price DECIMAL(10, 2),
        stock INT
    )
""")

# Insert data
sql = "INSERT INTO products (name, price, stock) VALUES (%s, %s, %s)"
values = ('Laptop', 999.99, 50)
cursor.execute(sql, values)
conn.commit()

# Select data
cursor.execute("SELECT * FROM products")
results = cursor.fetchall()
for row in results:
    print(row)

# Update
cursor.execute("UPDATE products SET price = %s WHERE id = %s", (899.99, 1))
conn.commit()

# Delete
cursor.execute("DELETE FROM products WHERE id = %s", (1,))
conn.commit()

cursor.close()
conn.close()`},{type:"heading",content:"SQLAlchemy ORM"},{type:"text",content:"SQLAlchemy is a powerful ORM (Object-Relational Mapping) library that lets you work with databases using Python objects:"},{type:"code",content:`from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Create engine
engine = create_engine('sqlite:///mydatabase.db', echo=True)

# Base class
Base = declarative_base()

# Define model
class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    email = Column(String(100), unique=True)
    age = Column(Integer)
    
    def __repr__(self):
        return f"<User(name='{self.name}', email='{self.email}')>"

# Create tables
Base.metadata.create_all(engine)

# Create session
Session = sessionmaker(bind=engine)
session = Session()

# Create (INSERT)
new_user = User(name='Alice', email='alice@email.com', age=25)
session.add(new_user)
session.commit()

# Add multiple
users = [
    User(name='Bob', email='bob@email.com', age=30),
    User(name='Charlie', email='charlie@email.com', age=35)
]
session.add_all(users)
session.commit()

# Read (SELECT)
all_users = session.query(User).all()
for user in all_users:
    print(user)

# Filter
young_users = session.query(User).filter(User.age < 30).all()

# Get by ID
user = session.query(User).filter(User.id == 1).first()
# or
user = session.query(User).get(1)

# Update
user = session.query(User).filter(User.name == 'Alice').first()
user.age = 26
session.commit()

# Delete
user = session.query(User).filter(User.name == 'Bob').first()
session.delete(user)
session.commit()

# Close session
session.close()`},{type:"heading",content:"SQLAlchemy Relationships"},{type:"code",content:`from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Author(Base):
    __tablename__ = 'authors'
    
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    
    # Relationship
    books = relationship('Book', back_populates='author')

class Book(Base):
    __tablename__ = 'books'
    
    id = Column(Integer, primary_key=True)
    title = Column(String(200))
    author_id = Column(Integer, ForeignKey('authors.id'))
    
    # Relationship
    author = relationship('Author', back_populates='books')

# Create tables
Base.metadata.create_all(engine)

# Usage
author = Author(name='John Doe')
book1 = Book(title='Python Guide', author=author)
book2 = Book(title='SQL Mastery', author=author)

session.add(author)
session.add_all([book1, book2])
session.commit()

# Query with relationship
author = session.query(Author).first()
print(f"Author: {author.name}")
for book in author.books:
    print(f"  - {book.title}")`},{type:"heading",content:"Advanced SQLAlchemy Queries"},{type:"code",content:`# Filter with multiple conditions
users = session.query(User).filter(
    User.age > 25,
    User.name.like('A%')
).all()

# OR condition
from sqlalchemy import or_
users = session.query(User).filter(
    or_(User.age < 20, User.age > 30)
).all()

# Order by
users = session.query(User).order_by(User.age.desc()).all()

# Limit and offset
users = session.query(User).limit(5).offset(10).all()

# Count
count = session.query(User).count()

# Aggregate functions
from sqlalchemy import func
avg_age = session.query(func.avg(User.age)).scalar()
max_age = session.query(func.max(User.age)).scalar()

# Group by
results = session.query(
    User.age,
    func.count(User.id)
).group_by(User.age).all()`},{type:"note",content:"SQLAlchemy ORM is more Pythonic and handles many SQL complexities for you. However, raw SQL (sqlite3, mysql.connector) gives you more control and can be faster for simple operations."}]}};function mp(){const[b,P]=Gt.useState("intro-python");return v.jsxs("div",{className:"min-h-screen bg-slate-950 text-gray-100",children:[v.jsx("header",{className:"bg-slate-900 border-b border-slate-700 sticky top-0 z-50",children:v.jsx("div",{className:"max-w-[2000px] mx-auto px-8 py-5",children:v.jsx("div",{className:"flex items-center justify-between",children:v.jsxs("div",{className:"flex items-center gap-4",children:[v.jsx("div",{className:"relative group",children:v.jsx("div",{className:"p-3 bg-blue-600 rounded-xl",children:v.jsx(ep,{className:"text-white",size:28,strokeWidth:2.5})})}),v.jsxs("div",{children:[v.jsx("h1",{className:"text-2xl font-bold text-white",children:"Python Mastery"}),v.jsxs("p",{className:"text-sm text-blue-200 mt-0.5 flex items-center gap-2",children:[v.jsx(ip,{size:14}),"Complete Learning Platform"]})]})]})})})}),v.jsxs("div",{className:"flex max-w-[2000px] mx-auto",children:[v.jsx(cp,{selectedTopic:b,onSelectTopic:P}),v.jsx(pp,{content:fp[b]})]})]})}zd.createRoot(document.getElementById("root")).render(v.jsx(mp,{}));
