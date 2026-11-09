(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function Xm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var wu={exports:{}},Uo={},Eu={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function Fx(){if(kp)return vt;kp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function g(w){return w===null||typeof w!="object"?null:(w=x&&w[x]||w["@@iterator"],typeof w=="function"?w:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function _(w,H,J){this.props=w,this.context=H,this.refs=b,this.updater=J||M}_.prototype.isReactComponent={},_.prototype.setState=function(w,H){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,H,"setState")},_.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function v(){}v.prototype=_.prototype;function D(w,H,J){this.props=w,this.context=H,this.refs=b,this.updater=J||M}var L=D.prototype=new v;L.constructor=D,E(L,_.prototype),L.isPureReactComponent=!0;var R=Array.isArray,G=Object.prototype.hasOwnProperty,O={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function V(w,H,J){var j,ee={},ue=null,oe=null;if(H!=null)for(j in H.ref!==void 0&&(oe=H.ref),H.key!==void 0&&(ue=""+H.key),H)G.call(H,j)&&!k.hasOwnProperty(j)&&(ee[j]=H[j]);var ge=arguments.length-2;if(ge===1)ee.children=J;else if(1<ge){for(var Ae=Array(ge),Ce=0;Ce<ge;Ce++)Ae[Ce]=arguments[Ce+2];ee.children=Ae}if(w&&w.defaultProps)for(j in ge=w.defaultProps,ge)ee[j]===void 0&&(ee[j]=ge[j]);return{$$typeof:s,type:w,key:ue,ref:oe,props:ee,_owner:O.current}}function N(w,H){return{$$typeof:s,type:w.type,key:H,ref:w.ref,props:w.props,_owner:w._owner}}function C(w){return typeof w=="object"&&w!==null&&w.$$typeof===s}function B(w){var H={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(J){return H[J]})}var ie=/\/+/g;function Q(w,H){return typeof w=="object"&&w!==null&&w.key!=null?B(""+w.key):H.toString(36)}function de(w,H,J,j,ee){var ue=typeof w;(ue==="undefined"||ue==="boolean")&&(w=null);var oe=!1;if(w===null)oe=!0;else switch(ue){case"string":case"number":oe=!0;break;case"object":switch(w.$$typeof){case s:case e:oe=!0}}if(oe)return oe=w,ee=ee(oe),w=j===""?"."+Q(oe,0):j,R(ee)?(J="",w!=null&&(J=w.replace(ie,"$&/")+"/"),de(ee,H,J,"",function(Ce){return Ce})):ee!=null&&(C(ee)&&(ee=N(ee,J+(!ee.key||oe&&oe.key===ee.key?"":(""+ee.key).replace(ie,"$&/")+"/")+w)),H.push(ee)),1;if(oe=0,j=j===""?".":j+":",R(w))for(var ge=0;ge<w.length;ge++){ue=w[ge];var Ae=j+Q(ue,ge);oe+=de(ue,H,J,Ae,ee)}else if(Ae=g(w),typeof Ae=="function")for(w=Ae.call(w),ge=0;!(ue=w.next()).done;)ue=ue.value,Ae=j+Q(ue,ge++),oe+=de(ue,H,J,Ae,ee);else if(ue==="object")throw H=String(w),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return oe}function he(w,H,J){if(w==null)return w;var j=[],ee=0;return de(w,j,"","",function(ue){return H.call(J,ue,ee++)}),j}function ce(w){if(w._status===-1){var H=w._result;H=H(),H.then(function(J){(w._status===0||w._status===-1)&&(w._status=1,w._result=J)},function(J){(w._status===0||w._status===-1)&&(w._status=2,w._result=J)}),w._status===-1&&(w._status=0,w._result=H)}if(w._status===1)return w._result.default;throw w._result}var me={current:null},X={transition:null},pe={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:X,ReactCurrentOwner:O};function I(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:he,forEach:function(w,H,J){he(w,function(){H.apply(this,arguments)},J)},count:function(w){var H=0;return he(w,function(){H++}),H},toArray:function(w){return he(w,function(H){return H})||[]},only:function(w){if(!C(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},vt.Component=_,vt.Fragment=n,vt.Profiler=a,vt.PureComponent=D,vt.StrictMode=r,vt.Suspense=h,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,vt.act=I,vt.cloneElement=function(w,H,J){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var j=E({},w.props),ee=w.key,ue=w.ref,oe=w._owner;if(H!=null){if(H.ref!==void 0&&(ue=H.ref,oe=O.current),H.key!==void 0&&(ee=""+H.key),w.type&&w.type.defaultProps)var ge=w.type.defaultProps;for(Ae in H)G.call(H,Ae)&&!k.hasOwnProperty(Ae)&&(j[Ae]=H[Ae]===void 0&&ge!==void 0?ge[Ae]:H[Ae])}var Ae=arguments.length-2;if(Ae===1)j.children=J;else if(1<Ae){ge=Array(Ae);for(var Ce=0;Ce<Ae;Ce++)ge[Ce]=arguments[Ce+2];j.children=ge}return{$$typeof:s,type:w.type,key:ee,ref:ue,props:j,_owner:oe}},vt.createContext=function(w){return w={$$typeof:u,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:l,_context:w},w.Consumer=w},vt.createElement=V,vt.createFactory=function(w){var H=V.bind(null,w);return H.type=w,H},vt.createRef=function(){return{current:null}},vt.forwardRef=function(w){return{$$typeof:f,render:w}},vt.isValidElement=C,vt.lazy=function(w){return{$$typeof:y,_payload:{_status:-1,_result:w},_init:ce}},vt.memo=function(w,H){return{$$typeof:m,type:w,compare:H===void 0?null:H}},vt.startTransition=function(w){var H=X.transition;X.transition={};try{w()}finally{X.transition=H}},vt.unstable_act=I,vt.useCallback=function(w,H){return me.current.useCallback(w,H)},vt.useContext=function(w){return me.current.useContext(w)},vt.useDebugValue=function(){},vt.useDeferredValue=function(w){return me.current.useDeferredValue(w)},vt.useEffect=function(w,H){return me.current.useEffect(w,H)},vt.useId=function(){return me.current.useId()},vt.useImperativeHandle=function(w,H,J){return me.current.useImperativeHandle(w,H,J)},vt.useInsertionEffect=function(w,H){return me.current.useInsertionEffect(w,H)},vt.useLayoutEffect=function(w,H){return me.current.useLayoutEffect(w,H)},vt.useMemo=function(w,H){return me.current.useMemo(w,H)},vt.useReducer=function(w,H,J){return me.current.useReducer(w,H,J)},vt.useRef=function(w){return me.current.useRef(w)},vt.useState=function(w){return me.current.useState(w)},vt.useSyncExternalStore=function(w,H,J){return me.current.useSyncExternalStore(w,H,J)},vt.useTransition=function(){return me.current.useTransition()},vt.version="18.3.1",vt}var Op;function Qd(){return Op||(Op=1,Eu.exports=Fx()),Eu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function kx(){if(zp)return Uo;zp=1;var s=Qd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,m){var y,x={},g=null,M=null;m!==void 0&&(g=""+m),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(M=h.ref);for(y in h)r.call(h,y)&&!l.hasOwnProperty(y)&&(x[y]=h[y]);if(f&&f.defaultProps)for(y in h=f.defaultProps,h)x[y]===void 0&&(x[y]=h[y]);return{$$typeof:e,type:f,key:g,ref:M,props:x,_owner:a.current}}return Uo.Fragment=n,Uo.jsx=u,Uo.jsxs=u,Uo}var Bp;function Ox(){return Bp||(Bp=1,wu.exports=kx()),wu.exports}var S=Ox(),Ze=Qd();const zx=Xm(Ze);var sl={},Tu={exports:{}},In={},bu={exports:{}},Au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function Bx(){return Hp||(Hp=1,(function(s){function e(X,pe){var I=X.length;X.push(pe);e:for(;0<I;){var w=I-1>>>1,H=X[w];if(0<a(H,pe))X[w]=pe,X[I]=H,I=w;else break e}}function n(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var pe=X[0],I=X.pop();if(I!==pe){X[0]=I;e:for(var w=0,H=X.length,J=H>>>1;w<J;){var j=2*(w+1)-1,ee=X[j],ue=j+1,oe=X[ue];if(0>a(ee,I))ue<H&&0>a(oe,ee)?(X[w]=oe,X[ue]=I,w=ue):(X[w]=ee,X[j]=I,w=j);else if(ue<H&&0>a(oe,I))X[w]=oe,X[ue]=I,w=ue;else break e}}return pe}function a(X,pe){var I=X.sortIndex-pe.sortIndex;return I!==0?I:X.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],m=[],y=1,x=null,g=3,M=!1,E=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(X){for(var pe=n(m);pe!==null;){if(pe.callback===null)r(m);else if(pe.startTime<=X)r(m),pe.sortIndex=pe.expirationTime,e(h,pe);else break;pe=n(m)}}function R(X){if(b=!1,L(X),!E)if(n(h)!==null)E=!0,ce(G);else{var pe=n(m);pe!==null&&me(R,pe.startTime-X)}}function G(X,pe){E=!1,b&&(b=!1,v(V),V=-1),M=!0;var I=g;try{for(L(pe),x=n(h);x!==null&&(!(x.expirationTime>pe)||X&&!B());){var w=x.callback;if(typeof w=="function"){x.callback=null,g=x.priorityLevel;var H=w(x.expirationTime<=pe);pe=s.unstable_now(),typeof H=="function"?x.callback=H:x===n(h)&&r(h),L(pe)}else r(h);x=n(h)}if(x!==null)var J=!0;else{var j=n(m);j!==null&&me(R,j.startTime-pe),J=!1}return J}finally{x=null,g=I,M=!1}}var O=!1,k=null,V=-1,N=5,C=-1;function B(){return!(s.unstable_now()-C<N)}function ie(){if(k!==null){var X=s.unstable_now();C=X;var pe=!0;try{pe=k(!0,X)}finally{pe?Q():(O=!1,k=null)}}else O=!1}var Q;if(typeof D=="function")Q=function(){D(ie)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,he=de.port2;de.port1.onmessage=ie,Q=function(){he.postMessage(null)}}else Q=function(){_(ie,0)};function ce(X){k=X,O||(O=!0,Q())}function me(X,pe){V=_(function(){X(s.unstable_now())},pe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,ce(G))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(X){switch(g){case 1:case 2:case 3:var pe=3;break;default:pe=g}var I=g;g=pe;try{return X()}finally{g=I}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,pe){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var I=g;g=X;try{return pe()}finally{g=I}},s.unstable_scheduleCallback=function(X,pe,I){var w=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?w+I:w):I=w,X){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=I+H,X={id:y++,callback:pe,priorityLevel:X,startTime:I,expirationTime:H,sortIndex:-1},I>w?(X.sortIndex=I,e(m,X),n(h)===null&&X===n(m)&&(b?(v(V),V=-1):b=!0,me(R,I-w))):(X.sortIndex=H,e(h,X),E||M||(E=!0,ce(G))),X},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(X){var pe=g;return function(){var I=g;g=pe;try{return X.apply(this,arguments)}finally{g=I}}}})(Au)),Au}var Vp;function Hx(){return Vp||(Vp=1,bu.exports=Bx()),bu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Vx(){if(Gp)return In;Gp=1;var s=Qd(),e=Hx();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},x={};function g(t){return h.call(x,t)?!0:h.call(y,t)?!1:m.test(t)?x[t]=!0:(y[t]=!0,!1)}function M(t,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,c){if(i===null||typeof i>"u"||M(t,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(t,i,o,c,d,p,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=T}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new b(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,D);_[i]=new b(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,D);_[i]=new b(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,D);_[i]=new b(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,c){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,c)&&(o=null),c||d===null?g(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?t.setAttributeNS(c,i,o):t.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),O=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),B=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),X=Symbol.iterator;function pe(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var I=Object.assign,w;function H(t){if(w===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);w=i&&i[1]||""}return`
`+w+t}var J=!1;function j(t,i){if(!t||J)return"";J=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var c=le}Reflect.construct(t,[],i)}else{try{i.call()}catch(le){c=le}t.call(i.prototype)}else{try{throw Error()}catch(le){c=le}t()}}catch(le){if(le&&c&&typeof le.stack=="string"){for(var d=le.stack.split(`
`),p=c.stack.split(`
`),T=d.length-1,z=p.length-1;1<=T&&0<=z&&d[T]!==p[z];)z--;for(;1<=T&&0<=z;T--,z--)if(d[T]!==p[z]){if(T!==1||z!==1)do if(T--,z--,0>z||d[T]!==p[z]){var W=`
`+d[T].replace(" at new "," at ");return t.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",t.displayName)),W}while(1<=T&&0<=z);break}}}finally{J=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?H(t):""}function ee(t){switch(t.tag){case 5:return H(t.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return t=j(t.type,!1),t;case 11:return t=j(t.type.render,!1),t;case 1:return t=j(t.type,!0),t;default:return""}}function ue(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case O:return"Portal";case N:return"Profiler";case V:return"StrictMode";case Q:return"Suspense";case de:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case ie:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:ue(t.type)||"Memo";case ce:i=t._payload,t=t._init;try{return ue(t(i))}catch{}}return null}function oe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ae(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ce(t){var i=Ae(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,p.call(this,T)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function et(t){t._valueTracker||(t._valueTracker=Ce(t))}function Re(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return t&&(c=Ae(t)?t.checked?"true":"false":t.value),t=c,t!==o?(i.setValue(t),!0):!1}function Ne(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function F(t,i){var o=i.checked;return I({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function ct(t,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=ge(i.value!=null?i.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Qe(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function rt(t,i){Qe(t,i);var o=ge(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?_t(t,i.type,o):i.hasOwnProperty("defaultValue")&&_t(t,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ve(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function _t(t,i,o){(i!=="number"||Ne(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var ke=Array.isArray;function U(t,i,o,c){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&c&&(t[o].defaultSelected=!0)}else{for(o=""+ge(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function A(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return I({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function se(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(ke(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ge(o)}}function _e(t,i){var o=ge(i.value),c=ge(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function ye(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function xe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ye(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?xe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pe,Oe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,c,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Pe=Pe||document.createElement("div"),Pe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Pe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ft(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},He=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(t){He.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),we[i]=we[t]})});function tt(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||we.hasOwnProperty(t)&&we[t]?(""+i).trim():i+"px"}function ot(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=tt(o,i[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,d):t[o]=d}}var je=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xt(t,i){if(i){if(je[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ut(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=null;function Y(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var De=null,fe=null,ve=null;function Fe(t){if(t=yo(t)){if(typeof De!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ya(i),De(t.stateNode,t.type,i))}}function Ue(t){fe?ve?ve.push(t):ve=[t]:fe=t}function dt(){if(fe){var t=fe,i=ve;if(ve=fe=null,Fe(t),i)for(t=0;t<i.length;t++)Fe(i[t])}}function Ft(t,i){return t(i)}function Zt(){}var Tt=!1;function Cn(t,i,o){if(Tt)return t(i,o);Tt=!0;try{return Ft(t,i,o)}finally{Tt=!1,(fe!==null||ve!==null)&&(Zt(),dt())}}function Mn(t,i){var o=t.stateNode;if(o===null)return null;var c=ya(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var is=!1;if(f)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){is=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{is=!1}function Mi(t,i,o,c,d,p,T,z,W){var le=Array.prototype.slice.call(arguments,3);try{i.apply(o,le)}catch(Me){this.onError(Me)}}var wi=!1,Er=null,Tr=!1,Wi=null,Qo={onError:function(t){wi=!0,Er=t}};function rs(t,i,o,c,d,p,T,z,W){wi=!1,Er=null,Mi.apply(Qo,arguments)}function Jo(t,i,o,c,d,p,T,z,W){if(rs.apply(this,arguments),wi){if(wi){var le=Er;wi=!1,Er=null}else throw Error(n(198));Tr||(Tr=!0,Wi=le)}}function hi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function ea(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ta(t){if(hi(t)!==t)throw Error(n(188))}function Xl(t){var i=t.alternate;if(!i){if(i=hi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,c=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return ta(d),t;if(p===c)return ta(d),i;p=p.sibling}throw Error(n(188))}if(o.return!==c.return)o=d,c=p;else{for(var T=!1,z=d.child;z;){if(z===o){T=!0,o=d,c=p;break}if(z===c){T=!0,c=d,o=p;break}z=z.sibling}if(!T){for(z=p.child;z;){if(z===o){T=!0,o=p,c=d;break}if(z===c){T=!0,c=p,o=d;break}z=z.sibling}if(!T)throw Error(n(189))}}if(o.alternate!==c)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function na(t){return t=Xl(t),t!==null?ia(t):null}function ia(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ia(t);if(i!==null)return i;t=t.sibling}return null}var ra=e.unstable_scheduleCallback,P=e.unstable_cancelCallback,$=e.unstable_shouldYield,ae=e.unstable_requestPaint,ne=e.unstable_now,K=e.unstable_getCurrentPriorityLevel,Te=e.unstable_ImmediatePriority,Le=e.unstable_UserBlockingPriority,ze=e.unstable_NormalPriority,We=e.unstable_LowPriority,at=e.unstable_IdlePriority,st=null,qe=null;function wt(t){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(st,t,void 0,(t.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Et,Wt=Math.log,zt=Math.LN2;function Et(t){return t>>>=0,t===0?32:31-(Wt(t)/zt|0)|0}var Je=64,Xt=4194304;function St(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pn(t,i){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,p=t.pingedLanes,T=o&268435455;if(T!==0){var z=T&~d;z!==0?c=St(z):(p&=T,p!==0&&(c=St(p)))}else T=o&~d,T!==0?c=St(T):p!==0&&(c=St(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)o=31-ht(i),d=1<<o,c|=t[o],i&=~d;return c}function Xi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wn(t,i){for(var o=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var T=31-ht(p),z=1<<T,W=d[T];W===-1?((z&o)===0||(z&c)!==0)&&(d[T]=Xi(z,i)):W<=i&&(t.expiredLanes|=z),p&=~z}}function Ei(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lt(){var t=Je;return Je<<=1,(Je&4194240)===0&&(Je=64),t}function mn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function rn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ht(i),t[i]=o}function un(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-ht(o),p=1<<d;i[d]=0,c[d]=-1,t[d]=-1,o&=~p}}function sn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var c=31-ht(o),d=1<<c;d&i|t[c]&i&&(t[c]|=i),o&=~d}}var bt=0;function pi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var gf,ql,xf,vf,_f,Yl=!1,sa=[],qi=null,Yi=null,$i=null,io=new Map,ro=new Map,Ki=[],r0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yf(t,i){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":io.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(i.pointerId)}}function so(t,i,o,c,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=yo(i),i!==null&&ql(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function s0(t,i,o,c,d){switch(i){case"focusin":return qi=so(qi,t,i,o,c,d),!0;case"dragenter":return Yi=so(Yi,t,i,o,c,d),!0;case"mouseover":return $i=so($i,t,i,o,c,d),!0;case"pointerover":var p=d.pointerId;return io.set(p,so(io.get(p)||null,t,i,o,c,d)),!0;case"gotpointercapture":return p=d.pointerId,ro.set(p,so(ro.get(p)||null,t,i,o,c,d)),!0}return!1}function Sf(t){var i=br(t.target);if(i!==null){var o=hi(i);if(o!==null){if(i=o.tag,i===13){if(i=ea(o),i!==null){t.blockedOn=i,_f(t.priority,function(){xf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Kl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);Pt=c,o.target.dispatchEvent(c),Pt=null}else return i=yo(o),i!==null&&ql(i),t.blockedOn=o,!1;i.shift()}return!0}function Mf(t,i,o){oa(t)&&o.delete(i)}function o0(){Yl=!1,qi!==null&&oa(qi)&&(qi=null),Yi!==null&&oa(Yi)&&(Yi=null),$i!==null&&oa($i)&&($i=null),io.forEach(Mf),ro.forEach(Mf)}function oo(t,i){t.blockedOn===i&&(t.blockedOn=null,Yl||(Yl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,o0)))}function ao(t){function i(d){return oo(d,t)}if(0<sa.length){oo(sa[0],t);for(var o=1;o<sa.length;o++){var c=sa[o];c.blockedOn===t&&(c.blockedOn=null)}}for(qi!==null&&oo(qi,t),Yi!==null&&oo(Yi,t),$i!==null&&oo($i,t),io.forEach(i),ro.forEach(i),o=0;o<Ki.length;o++)c=Ki[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<Ki.length&&(o=Ki[0],o.blockedOn===null);)Sf(o),o.blockedOn===null&&Ki.shift()}var ss=R.ReactCurrentBatchConfig,aa=!0;function a0(t,i,o,c){var d=bt,p=ss.transition;ss.transition=null;try{bt=1,$l(t,i,o,c)}finally{bt=d,ss.transition=p}}function l0(t,i,o,c){var d=bt,p=ss.transition;ss.transition=null;try{bt=4,$l(t,i,o,c)}finally{bt=d,ss.transition=p}}function $l(t,i,o,c){if(aa){var d=Kl(t,i,o,c);if(d===null)hc(t,i,c,la,o),yf(t,c);else if(s0(d,t,i,o,c))c.stopPropagation();else if(yf(t,c),i&4&&-1<r0.indexOf(t)){for(;d!==null;){var p=yo(d);if(p!==null&&gf(p),p=Kl(t,i,o,c),p===null&&hc(t,i,c,la,o),p===d)break;d=p}d!==null&&c.stopPropagation()}else hc(t,i,c,null,o)}}var la=null;function Kl(t,i,o,c){if(la=null,t=Y(c),t=br(t),t!==null)if(i=hi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=ea(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return la=t,null}function wf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K()){case Te:return 1;case Le:return 4;case ze:case We:return 16;case at:return 536870912;default:return 16}default:return 16}}var Zi=null,Zl=null,ca=null;function Ef(){if(ca)return ca;var t,i=Zl,o=i.length,c,d="value"in Zi?Zi.value:Zi.textContent,p=d.length;for(t=0;t<o&&i[t]===d[t];t++);var T=o-t;for(c=1;c<=T&&i[o-c]===d[p-c];c++);return ca=d.slice(t,1<c?1-c:void 0)}function ua(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function da(){return!0}function Tf(){return!1}function On(t){function i(o,c,d,p,T){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=T,this.currentTarget=null;for(var z in t)t.hasOwnProperty(z)&&(o=t[z],this[z]=o?o(p):p[z]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?da:Tf,this.isPropagationStopped=Tf,this}return I(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),i}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=On(os),lo=I({},os,{view:0,detail:0}),c0=On(lo),Jl,ec,co,fa=I({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(Jl=t.screenX-co.screenX,ec=t.screenY-co.screenY):ec=Jl=0,co=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),bf=On(fa),u0=I({},fa,{dataTransfer:0}),d0=On(u0),f0=I({},lo,{relatedTarget:0}),tc=On(f0),h0=I({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),p0=On(h0),m0=I({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),g0=On(m0),x0=I({},os,{data:0}),Af=On(x0),v0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=y0[t])?!!i[t]:!1}function nc(){return S0}var M0=I({},lo,{key:function(t){if(t.key){var i=v0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nc,charCode:function(t){return t.type==="keypress"?ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),w0=On(M0),E0=I({},fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cf=On(E0),T0=I({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nc}),b0=On(T0),A0=I({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),C0=On(A0),R0=I({},fa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),P0=On(R0),N0=[9,13,27,32],ic=f&&"CompositionEvent"in window,uo=null;f&&"documentMode"in document&&(uo=document.documentMode);var D0=f&&"TextEvent"in window&&!uo,Rf=f&&(!ic||uo&&8<uo&&11>=uo),Pf=" ",Nf=!1;function Df(t,i){switch(t){case"keyup":return N0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function L0(t,i){switch(t){case"compositionend":return Lf(i);case"keypress":return i.which!==32?null:(Nf=!0,Pf);case"textInput":return t=i.data,t===Pf&&Nf?null:t;default:return null}}function I0(t,i){if(as)return t==="compositionend"||!ic&&Df(t,i)?(t=Ef(),ca=Zl=Zi=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rf&&i.locale!=="ko"?null:i.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function If(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!U0[t.type]:i==="textarea"}function Uf(t,i,o,c){Ue(c),i=xa(i,"onChange"),0<i.length&&(o=new Ql("onChange","change",null,o,c),t.push({event:o,listeners:i}))}var fo=null,ho=null;function F0(t){Jf(t,0)}function ha(t){var i=fs(t);if(Re(i))return t}function k0(t,i){if(t==="change")return i}var Ff=!1;if(f){var rc;if(f){var sc="oninput"in document;if(!sc){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),sc=typeof kf.oninput=="function"}rc=sc}else rc=!1;Ff=rc&&(!document.documentMode||9<document.documentMode)}function Of(){fo&&(fo.detachEvent("onpropertychange",zf),ho=fo=null)}function zf(t){if(t.propertyName==="value"&&ha(ho)){var i=[];Uf(i,ho,t,Y(t)),Cn(F0,i)}}function O0(t,i,o){t==="focusin"?(Of(),fo=i,ho=o,fo.attachEvent("onpropertychange",zf)):t==="focusout"&&Of()}function z0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ha(ho)}function B0(t,i){if(t==="click")return ha(i)}function H0(t,i){if(t==="input"||t==="change")return ha(i)}function V0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ti=typeof Object.is=="function"?Object.is:V0;function po(t,i){if(ti(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!h.call(i,d)||!ti(t[d],i[d]))return!1}return!0}function Bf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hf(t,i){var o=Bf(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=i&&c>=i)return{node:o,offset:i-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Bf(o)}}function Vf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Vf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Gf(){for(var t=window,i=Ne();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Ne(t.document)}return i}function oc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function G0(t){var i=Gf(),o=t.focusedElem,c=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Vf(o.ownerDocument.documentElement,o)){if(c!==null&&oc(o)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!t.extend&&p>c&&(d=c,c=p,p=d),d=Hf(o,p);var T=Hf(o,c);d&&T&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==T.node||t.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>c?(t.addRange(i),t.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var j0=f&&"documentMode"in document&&11>=document.documentMode,ls=null,ac=null,mo=null,lc=!1;function jf(t,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;lc||ls==null||ls!==Ne(c)||(c=ls,"selectionStart"in c&&oc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),mo&&po(mo,c)||(mo=c,c=xa(ac,"onSelect"),0<c.length&&(i=new Ql("onSelect","select",null,i,o),t.push({event:i,listeners:c}),i.target=ls)))}function pa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var cs={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},cc={},Wf={};f&&(Wf=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function ma(t){if(cc[t])return cc[t];if(!cs[t])return t;var i=cs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Wf)return cc[t]=i[o];return t}var Xf=ma("animationend"),qf=ma("animationiteration"),Yf=ma("animationstart"),$f=ma("transitionend"),Kf=new Map,Zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){Kf.set(t,i),l(i,[t])}for(var uc=0;uc<Zf.length;uc++){var dc=Zf[uc],W0=dc.toLowerCase(),X0=dc[0].toUpperCase()+dc.slice(1);Qi(W0,"on"+X0)}Qi(Xf,"onAnimationEnd"),Qi(qf,"onAnimationIteration"),Qi(Yf,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi($f,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q0=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function Qf(t,i,o){var c=t.type||"unknown-event";t.currentTarget=o,Jo(c,i,void 0,t),t.currentTarget=null}function Jf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var T=c.length-1;0<=T;T--){var z=c[T],W=z.instance,le=z.currentTarget;if(z=z.listener,W!==p&&d.isPropagationStopped())break e;Qf(d,z,le),p=W}else for(T=0;T<c.length;T++){if(z=c[T],W=z.instance,le=z.currentTarget,z=z.listener,W!==p&&d.isPropagationStopped())break e;Qf(d,z,le),p=W}}}if(Tr)throw t=Wi,Tr=!1,Wi=null,t}function kt(t,i){var o=i[_c];o===void 0&&(o=i[_c]=new Set);var c=t+"__bubble";o.has(c)||(eh(i,t,2,!1),o.add(c))}function fc(t,i,o){var c=0;i&&(c|=4),eh(o,t,c,i)}var ga="_reactListening"+Math.random().toString(36).slice(2);function xo(t){if(!t[ga]){t[ga]=!0,r.forEach(function(o){o!=="selectionchange"&&(q0.has(o)||fc(o,!1,t),fc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ga]||(i[ga]=!0,fc("selectionchange",!1,i))}}function eh(t,i,o,c){switch(wf(i)){case 1:var d=a0;break;case 4:d=l0;break;default:d=$l}o=d.bind(null,i,o,t),d=void 0,!is||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function hc(t,i,o,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var z=c.stateNode.containerInfo;if(z===d||z.nodeType===8&&z.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var W=T.tag;if((W===3||W===4)&&(W=T.stateNode.containerInfo,W===d||W.nodeType===8&&W.parentNode===d))return;T=T.return}for(;z!==null;){if(T=br(z),T===null)return;if(W=T.tag,W===5||W===6){c=p=T;continue e}z=z.parentNode}}c=c.return}Cn(function(){var le=p,Me=Y(o),Ee=[];e:{var Se=Kf.get(t);if(Se!==void 0){var Be=Ql,Xe=t;switch(t){case"keypress":if(ua(o)===0)break e;case"keydown":case"keyup":Be=w0;break;case"focusin":Xe="focus",Be=tc;break;case"focusout":Xe="blur",Be=tc;break;case"beforeblur":case"afterblur":Be=tc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=d0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=b0;break;case Xf:case qf:case Yf:Be=p0;break;case $f:Be=C0;break;case"scroll":Be=c0;break;case"wheel":Be=P0;break;case"copy":case"cut":case"paste":Be=g0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Cf}var $e=(i&4)!==0,Yt=!$e&&t==="scroll",te=$e?Se!==null?Se+"Capture":null:Se;$e=[];for(var q=le,re;q!==null;){re=q;var be=re.stateNode;if(re.tag===5&&be!==null&&(re=be,te!==null&&(be=Mn(q,te),be!=null&&$e.push(vo(q,be,re)))),Yt)break;q=q.return}0<$e.length&&(Se=new Be(Se,Xe,null,o,Me),Ee.push({event:Se,listeners:$e}))}}if((i&7)===0){e:{if(Se=t==="mouseover"||t==="pointerover",Be=t==="mouseout"||t==="pointerout",Se&&o!==Pt&&(Xe=o.relatedTarget||o.fromElement)&&(br(Xe)||Xe[Ti]))break e;if((Be||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,Be?(Xe=o.relatedTarget||o.toElement,Be=le,Xe=Xe?br(Xe):null,Xe!==null&&(Yt=hi(Xe),Xe!==Yt||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Be=null,Xe=le),Be!==Xe)){if($e=bf,be="onMouseLeave",te="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&($e=Cf,be="onPointerLeave",te="onPointerEnter",q="pointer"),Yt=Be==null?Se:fs(Be),re=Xe==null?Se:fs(Xe),Se=new $e(be,q+"leave",Be,o,Me),Se.target=Yt,Se.relatedTarget=re,be=null,br(Me)===le&&($e=new $e(te,q+"enter",Xe,o,Me),$e.target=re,$e.relatedTarget=Yt,be=$e),Yt=be,Be&&Xe)t:{for($e=Be,te=Xe,q=0,re=$e;re;re=us(re))q++;for(re=0,be=te;be;be=us(be))re++;for(;0<q-re;)$e=us($e),q--;for(;0<re-q;)te=us(te),re--;for(;q--;){if($e===te||te!==null&&$e===te.alternate)break t;$e=us($e),te=us(te)}$e=null}else $e=null;Be!==null&&th(Ee,Se,Be,$e,!1),Xe!==null&&Yt!==null&&th(Ee,Yt,Xe,$e,!0)}}e:{if(Se=le?fs(le):window,Be=Se.nodeName&&Se.nodeName.toLowerCase(),Be==="select"||Be==="input"&&Se.type==="file")var Ke=k0;else if(If(Se))if(Ff)Ke=H0;else{Ke=z0;var nt=O0}else(Be=Se.nodeName)&&Be.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Ke=B0);if(Ke&&(Ke=Ke(t,le))){Uf(Ee,Ke,o,Me);break e}nt&&nt(t,Se,le),t==="focusout"&&(nt=Se._wrapperState)&&nt.controlled&&Se.type==="number"&&_t(Se,"number",Se.value)}switch(nt=le?fs(le):window,t){case"focusin":(If(nt)||nt.contentEditable==="true")&&(ls=nt,ac=le,mo=null);break;case"focusout":mo=ac=ls=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,jf(Ee,o,Me);break;case"selectionchange":if(j0)break;case"keydown":case"keyup":jf(Ee,o,Me)}var it;if(ic)e:{switch(t){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else as?Df(t,o)&&(lt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(lt="onCompositionStart");lt&&(Rf&&o.locale!=="ko"&&(as||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&as&&(it=Ef()):(Zi=Me,Zl="value"in Zi?Zi.value:Zi.textContent,as=!0)),nt=xa(le,lt),0<nt.length&&(lt=new Af(lt,t,null,o,Me),Ee.push({event:lt,listeners:nt}),it?lt.data=it:(it=Lf(o),it!==null&&(lt.data=it)))),(it=D0?L0(t,o):I0(t,o))&&(le=xa(le,"onBeforeInput"),0<le.length&&(Me=new Af("onBeforeInput","beforeinput",null,o,Me),Ee.push({event:Me,listeners:le}),Me.data=it))}Jf(Ee,i)})}function vo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function xa(t,i){for(var o=i+"Capture",c=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Mn(t,o),p!=null&&c.unshift(vo(t,p,d)),p=Mn(t,i),p!=null&&c.push(vo(t,p,d))),t=t.return}return c}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function th(t,i,o,c,d){for(var p=i._reactName,T=[];o!==null&&o!==c;){var z=o,W=z.alternate,le=z.stateNode;if(W!==null&&W===c)break;z.tag===5&&le!==null&&(z=le,d?(W=Mn(o,p),W!=null&&T.unshift(vo(o,W,z))):d||(W=Mn(o,p),W!=null&&T.push(vo(o,W,z)))),o=o.return}T.length!==0&&t.push({event:i,listeners:T})}var Y0=/\r\n?/g,$0=/\u0000|\uFFFD/g;function nh(t){return(typeof t=="string"?t:""+t).replace(Y0,`
`).replace($0,"")}function va(t,i,o){if(i=nh(i),nh(t)!==i&&o)throw Error(n(425))}function _a(){}var pc=null,mc=null;function gc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xc=typeof setTimeout=="function"?setTimeout:void 0,K0=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,Z0=typeof queueMicrotask=="function"?queueMicrotask:typeof ih<"u"?function(t){return ih.resolve(null).then(t).catch(Q0)}:xc;function Q0(t){setTimeout(function(){throw t})}function vc(t,i){var o=i,c=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){t.removeChild(d),ao(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);ao(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function rh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ds=Math.random().toString(36).slice(2),mi="__reactFiber$"+ds,_o="__reactProps$"+ds,Ti="__reactContainer$"+ds,_c="__reactEvents$"+ds,J0="__reactListeners$"+ds,ex="__reactHandles$"+ds;function br(t){var i=t[mi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ti]||o[mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=rh(t);t!==null;){if(o=t[mi])return o;t=rh(t)}return i}t=o,o=t.parentNode}return null}function yo(t){return t=t[mi]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ya(t){return t[_o]||null}var yc=[],hs=-1;function er(t){return{current:t}}function Ot(t){0>hs||(t.current=yc[hs],yc[hs]=null,hs--)}function It(t,i){hs++,yc[hs]=t.current,t.current=i}var tr={},gn=er(tr),Rn=er(!1),Ar=tr;function ps(t,i){var o=t.type.contextTypes;if(!o)return tr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Pn(t){return t=t.childContextTypes,t!=null}function Sa(){Ot(Rn),Ot(gn)}function sh(t,i,o){if(gn.current!==tr)throw Error(n(168));It(gn,i),It(Rn,o)}function oh(t,i,o){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,oe(t)||"Unknown",d));return I({},o,c)}function Ma(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Ar=gn.current,It(gn,t),It(Rn,Rn.current),!0}function ah(t,i,o){var c=t.stateNode;if(!c)throw Error(n(169));o?(t=oh(t,i,Ar),c.__reactInternalMemoizedMergedChildContext=t,Ot(Rn),Ot(gn),It(gn,t)):Ot(Rn),It(Rn,o)}var bi=null,wa=!1,Sc=!1;function lh(t){bi===null?bi=[t]:bi.push(t)}function tx(t){wa=!0,lh(t)}function nr(){if(!Sc&&bi!==null){Sc=!0;var t=0,i=bt;try{var o=bi;for(bt=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}bi=null,wa=!1}catch(d){throw bi!==null&&(bi=bi.slice(t+1)),ra(Te,nr),d}finally{bt=i,Sc=!1}}return null}var ms=[],gs=0,Ea=null,Ta=0,Wn=[],Xn=0,Cr=null,Ai=1,Ci="";function Rr(t,i){ms[gs++]=Ta,ms[gs++]=Ea,Ea=t,Ta=i}function ch(t,i,o){Wn[Xn++]=Ai,Wn[Xn++]=Ci,Wn[Xn++]=Cr,Cr=t;var c=Ai;t=Ci;var d=32-ht(c)-1;c&=~(1<<d),o+=1;var p=32-ht(i)+d;if(30<p){var T=d-d%5;p=(c&(1<<T)-1).toString(32),c>>=T,d-=T,Ai=1<<32-ht(i)+d|o<<d|c,Ci=p+t}else Ai=1<<p|o<<d|c,Ci=t}function Mc(t){t.return!==null&&(Rr(t,1),ch(t,1,0))}function wc(t){for(;t===Ea;)Ea=ms[--gs],ms[gs]=null,Ta=ms[--gs],ms[gs]=null;for(;t===Cr;)Cr=Wn[--Xn],Wn[Xn]=null,Ci=Wn[--Xn],Wn[Xn]=null,Ai=Wn[--Xn],Wn[Xn]=null}var zn=null,Bn=null,Bt=!1,ni=null;function uh(t,i){var o=Kn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function dh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,zn=t,Bn=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,zn=t,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Cr!==null?{id:Ai,overflow:Ci}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Kn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,zn=t,Bn=null,!0):!1;default:return!1}}function Ec(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tc(t){if(Bt){var i=Bn;if(i){var o=i;if(!dh(t,i)){if(Ec(t))throw Error(n(418));i=Ji(o.nextSibling);var c=zn;i&&dh(t,i)?uh(c,o):(t.flags=t.flags&-4097|2,Bt=!1,zn=t)}}else{if(Ec(t))throw Error(n(418));t.flags=t.flags&-4097|2,Bt=!1,zn=t}}}function fh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zn=t}function ba(t){if(t!==zn)return!1;if(!Bt)return fh(t),Bt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!gc(t.type,t.memoizedProps)),i&&(i=Bn)){if(Ec(t))throw hh(),Error(n(418));for(;i;)uh(t,i),i=Ji(i.nextSibling)}if(fh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Bn=Ji(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Bn=null}}else Bn=zn?Ji(t.stateNode.nextSibling):null;return!0}function hh(){for(var t=Bn;t;)t=Ji(t.nextSibling)}function xs(){Bn=zn=null,Bt=!1}function bc(t){ni===null?ni=[t]:ni.push(t)}var nx=R.ReactCurrentBatchConfig;function So(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var c=o.stateNode}if(!c)throw Error(n(147,t));var d=c,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(T){var z=d.refs;T===null?delete z[p]:z[p]=T},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Aa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function ph(t){var i=t._init;return i(t._payload)}function mh(t){function i(te,q){if(t){var re=te.deletions;re===null?(te.deletions=[q],te.flags|=16):re.push(q)}}function o(te,q){if(!t)return null;for(;q!==null;)i(te,q),q=q.sibling;return null}function c(te,q){for(te=new Map;q!==null;)q.key!==null?te.set(q.key,q):te.set(q.index,q),q=q.sibling;return te}function d(te,q){return te=ur(te,q),te.index=0,te.sibling=null,te}function p(te,q,re){return te.index=re,t?(re=te.alternate,re!==null?(re=re.index,re<q?(te.flags|=2,q):re):(te.flags|=2,q)):(te.flags|=1048576,q)}function T(te){return t&&te.alternate===null&&(te.flags|=2),te}function z(te,q,re,be){return q===null||q.tag!==6?(q=xu(re,te.mode,be),q.return=te,q):(q=d(q,re),q.return=te,q)}function W(te,q,re,be){var Ke=re.type;return Ke===k?Me(te,q,re.props.children,be,re.key):q!==null&&(q.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ce&&ph(Ke)===q.type)?(be=d(q,re.props),be.ref=So(te,q,re),be.return=te,be):(be=Za(re.type,re.key,re.props,null,te.mode,be),be.ref=So(te,q,re),be.return=te,be)}function le(te,q,re,be){return q===null||q.tag!==4||q.stateNode.containerInfo!==re.containerInfo||q.stateNode.implementation!==re.implementation?(q=vu(re,te.mode,be),q.return=te,q):(q=d(q,re.children||[]),q.return=te,q)}function Me(te,q,re,be,Ke){return q===null||q.tag!==7?(q=kr(re,te.mode,be,Ke),q.return=te,q):(q=d(q,re),q.return=te,q)}function Ee(te,q,re){if(typeof q=="string"&&q!==""||typeof q=="number")return q=xu(""+q,te.mode,re),q.return=te,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case G:return re=Za(q.type,q.key,q.props,null,te.mode,re),re.ref=So(te,null,q),re.return=te,re;case O:return q=vu(q,te.mode,re),q.return=te,q;case ce:var be=q._init;return Ee(te,be(q._payload),re)}if(ke(q)||pe(q))return q=kr(q,te.mode,re,null),q.return=te,q;Aa(te,q)}return null}function Se(te,q,re,be){var Ke=q!==null?q.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return Ke!==null?null:z(te,q,""+re,be);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case G:return re.key===Ke?W(te,q,re,be):null;case O:return re.key===Ke?le(te,q,re,be):null;case ce:return Ke=re._init,Se(te,q,Ke(re._payload),be)}if(ke(re)||pe(re))return Ke!==null?null:Me(te,q,re,be,null);Aa(te,re)}return null}function Be(te,q,re,be,Ke){if(typeof be=="string"&&be!==""||typeof be=="number")return te=te.get(re)||null,z(q,te,""+be,Ke);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case G:return te=te.get(be.key===null?re:be.key)||null,W(q,te,be,Ke);case O:return te=te.get(be.key===null?re:be.key)||null,le(q,te,be,Ke);case ce:var nt=be._init;return Be(te,q,re,nt(be._payload),Ke)}if(ke(be)||pe(be))return te=te.get(re)||null,Me(q,te,be,Ke,null);Aa(q,be)}return null}function Xe(te,q,re,be){for(var Ke=null,nt=null,it=q,lt=q=0,ln=null;it!==null&&lt<re.length;lt++){it.index>lt?(ln=it,it=null):ln=it.sibling;var Ct=Se(te,it,re[lt],be);if(Ct===null){it===null&&(it=ln);break}t&&it&&Ct.alternate===null&&i(te,it),q=p(Ct,q,lt),nt===null?Ke=Ct:nt.sibling=Ct,nt=Ct,it=ln}if(lt===re.length)return o(te,it),Bt&&Rr(te,lt),Ke;if(it===null){for(;lt<re.length;lt++)it=Ee(te,re[lt],be),it!==null&&(q=p(it,q,lt),nt===null?Ke=it:nt.sibling=it,nt=it);return Bt&&Rr(te,lt),Ke}for(it=c(te,it);lt<re.length;lt++)ln=Be(it,te,lt,re[lt],be),ln!==null&&(t&&ln.alternate!==null&&it.delete(ln.key===null?lt:ln.key),q=p(ln,q,lt),nt===null?Ke=ln:nt.sibling=ln,nt=ln);return t&&it.forEach(function(dr){return i(te,dr)}),Bt&&Rr(te,lt),Ke}function $e(te,q,re,be){var Ke=pe(re);if(typeof Ke!="function")throw Error(n(150));if(re=Ke.call(re),re==null)throw Error(n(151));for(var nt=Ke=null,it=q,lt=q=0,ln=null,Ct=re.next();it!==null&&!Ct.done;lt++,Ct=re.next()){it.index>lt?(ln=it,it=null):ln=it.sibling;var dr=Se(te,it,Ct.value,be);if(dr===null){it===null&&(it=ln);break}t&&it&&dr.alternate===null&&i(te,it),q=p(dr,q,lt),nt===null?Ke=dr:nt.sibling=dr,nt=dr,it=ln}if(Ct.done)return o(te,it),Bt&&Rr(te,lt),Ke;if(it===null){for(;!Ct.done;lt++,Ct=re.next())Ct=Ee(te,Ct.value,be),Ct!==null&&(q=p(Ct,q,lt),nt===null?Ke=Ct:nt.sibling=Ct,nt=Ct);return Bt&&Rr(te,lt),Ke}for(it=c(te,it);!Ct.done;lt++,Ct=re.next())Ct=Be(it,te,lt,Ct.value,be),Ct!==null&&(t&&Ct.alternate!==null&&it.delete(Ct.key===null?lt:Ct.key),q=p(Ct,q,lt),nt===null?Ke=Ct:nt.sibling=Ct,nt=Ct);return t&&it.forEach(function(Ux){return i(te,Ux)}),Bt&&Rr(te,lt),Ke}function Yt(te,q,re,be){if(typeof re=="object"&&re!==null&&re.type===k&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case G:e:{for(var Ke=re.key,nt=q;nt!==null;){if(nt.key===Ke){if(Ke=re.type,Ke===k){if(nt.tag===7){o(te,nt.sibling),q=d(nt,re.props.children),q.return=te,te=q;break e}}else if(nt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ce&&ph(Ke)===nt.type){o(te,nt.sibling),q=d(nt,re.props),q.ref=So(te,nt,re),q.return=te,te=q;break e}o(te,nt);break}else i(te,nt);nt=nt.sibling}re.type===k?(q=kr(re.props.children,te.mode,be,re.key),q.return=te,te=q):(be=Za(re.type,re.key,re.props,null,te.mode,be),be.ref=So(te,q,re),be.return=te,te=be)}return T(te);case O:e:{for(nt=re.key;q!==null;){if(q.key===nt)if(q.tag===4&&q.stateNode.containerInfo===re.containerInfo&&q.stateNode.implementation===re.implementation){o(te,q.sibling),q=d(q,re.children||[]),q.return=te,te=q;break e}else{o(te,q);break}else i(te,q);q=q.sibling}q=vu(re,te.mode,be),q.return=te,te=q}return T(te);case ce:return nt=re._init,Yt(te,q,nt(re._payload),be)}if(ke(re))return Xe(te,q,re,be);if(pe(re))return $e(te,q,re,be);Aa(te,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,q!==null&&q.tag===6?(o(te,q.sibling),q=d(q,re),q.return=te,te=q):(o(te,q),q=xu(re,te.mode,be),q.return=te,te=q),T(te)):o(te,q)}return Yt}var vs=mh(!0),gh=mh(!1),Ca=er(null),Ra=null,_s=null,Ac=null;function Cc(){Ac=_s=Ra=null}function Rc(t){var i=Ca.current;Ot(Ca),t._currentValue=i}function Pc(t,i,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===o)break;t=t.return}}function ys(t,i){Ra=t,Ac=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Nn=!0),t.firstContext=null)}function qn(t){var i=t._currentValue;if(Ac!==t)if(t={context:t,memoizedValue:i,next:null},_s===null){if(Ra===null)throw Error(n(308));_s=t,Ra.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return i}var Pr=null;function Nc(t){Pr===null?Pr=[t]:Pr.push(t)}function xh(t,i,o,c){var d=i.interleaved;return d===null?(o.next=o,Nc(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ri(t,c)}function Ri(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var ir=!1;function Dc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(t,i,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(At&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Ri(t,o)}return d=c.interleaved,d===null?(i.next=i,Nc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Ri(t,o)}function Pa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,sn(t,o)}}function _h(t,i){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=T:p=p.next=T,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Na(t,i,o,c){var d=t.updateQueue;ir=!1;var p=d.firstBaseUpdate,T=d.lastBaseUpdate,z=d.shared.pending;if(z!==null){d.shared.pending=null;var W=z,le=W.next;W.next=null,T===null?p=le:T.next=le,T=W;var Me=t.alternate;Me!==null&&(Me=Me.updateQueue,z=Me.lastBaseUpdate,z!==T&&(z===null?Me.firstBaseUpdate=le:z.next=le,Me.lastBaseUpdate=W))}if(p!==null){var Ee=d.baseState;T=0,Me=le=W=null,z=p;do{var Se=z.lane,Be=z.eventTime;if((c&Se)===Se){Me!==null&&(Me=Me.next={eventTime:Be,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Xe=t,$e=z;switch(Se=i,Be=o,$e.tag){case 1:if(Xe=$e.payload,typeof Xe=="function"){Ee=Xe.call(Be,Ee,Se);break e}Ee=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=$e.payload,Se=typeof Xe=="function"?Xe.call(Be,Ee,Se):Xe,Se==null)break e;Ee=I({},Ee,Se);break e;case 2:ir=!0}}z.callback!==null&&z.lane!==0&&(t.flags|=64,Se=d.effects,Se===null?d.effects=[z]:Se.push(z))}else Be={eventTime:Be,lane:Se,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Me===null?(le=Me=Be,W=Ee):Me=Me.next=Be,T|=Se;if(z=z.next,z===null){if(z=d.shared.pending,z===null)break;Se=z,z=Se.next,Se.next=null,d.lastBaseUpdate=Se,d.shared.pending=null}}while(!0);if(Me===null&&(W=Ee),d.baseState=W,d.firstBaseUpdate=le,d.lastBaseUpdate=Me,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Lr|=T,t.lanes=T,t.memoizedState=Ee}}function yh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var Mo={},gi=er(Mo),wo=er(Mo),Eo=er(Mo);function Nr(t){if(t===Mo)throw Error(n(174));return t}function Lc(t,i){switch(It(Eo,i),It(wo,t),It(gi,Mo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ye(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ye(i,t)}Ot(gi),It(gi,i)}function Ss(){Ot(gi),Ot(wo),Ot(Eo)}function Sh(t){Nr(Eo.current);var i=Nr(gi.current),o=Ye(i,t.type);i!==o&&(It(wo,t),It(gi,o))}function Ic(t){wo.current===t&&(Ot(gi),Ot(wo))}var Gt=er(0);function Da(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Uc=[];function Fc(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var La=R.ReactCurrentDispatcher,kc=R.ReactCurrentBatchConfig,Dr=0,jt=null,Qt=null,on=null,Ia=!1,To=!1,bo=0,ix=0;function xn(){throw Error(n(321))}function Oc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ti(t[o],i[o]))return!1;return!0}function zc(t,i,o,c,d,p){if(Dr=p,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,La.current=t===null||t.memoizedState===null?ax:lx,t=o(c,d),To){p=0;do{if(To=!1,bo=0,25<=p)throw Error(n(301));p+=1,on=Qt=null,i.updateQueue=null,La.current=cx,t=o(c,d)}while(To)}if(La.current=ka,i=Qt!==null&&Qt.next!==null,Dr=0,on=Qt=jt=null,Ia=!1,i)throw Error(n(300));return t}function Bc(){var t=bo!==0;return bo=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?jt.memoizedState=on=t:on=on.next=t,on}function Yn(){if(Qt===null){var t=jt.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var i=on===null?jt.memoizedState:on.next;if(i!==null)on=i,Qt=t;else{if(t===null)throw Error(n(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},on===null?jt.memoizedState=on=t:on=on.next=t}return on}function Ao(t,i){return typeof i=="function"?i(t):i}function Hc(t){var i=Yn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=Qt,d=c.baseQueue,p=o.pending;if(p!==null){if(d!==null){var T=d.next;d.next=p.next,p.next=T}c.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,c=c.baseState;var z=T=null,W=null,le=p;do{var Me=le.lane;if((Dr&Me)===Me)W!==null&&(W=W.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),c=le.hasEagerState?le.eagerState:t(c,le.action);else{var Ee={lane:Me,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};W===null?(z=W=Ee,T=c):W=W.next=Ee,jt.lanes|=Me,Lr|=Me}le=le.next}while(le!==null&&le!==p);W===null?T=c:W.next=z,ti(c,i.memoizedState)||(Nn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=W,o.lastRenderedState=c}if(t=o.interleaved,t!==null){d=t;do p=d.lane,jt.lanes|=p,Lr|=p,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Vc(t){var i=Yn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var T=d=d.next;do p=t(p,T.action),T=T.next;while(T!==d);ti(p,i.memoizedState)||(Nn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,c]}function Mh(){}function wh(t,i){var o=jt,c=Yn(),d=i(),p=!ti(c.memoizedState,d);if(p&&(c.memoizedState=d,Nn=!0),c=c.queue,Gc(bh.bind(null,o,c,t),[t]),c.getSnapshot!==i||p||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,Co(9,Th.bind(null,o,c,d,i),void 0,null),an===null)throw Error(n(349));(Dr&30)!==0||Eh(o,i,d)}return d}function Eh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Th(t,i,o,c){i.value=o,i.getSnapshot=c,Ah(i)&&Ch(t)}function bh(t,i,o){return o(function(){Ah(i)&&Ch(t)})}function Ah(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ti(t,o)}catch{return!0}}function Ch(t){var i=Ri(t,1);i!==null&&oi(i,t,1,-1)}function Rh(t){var i=xi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},i.queue=t,t=t.dispatch=ox.bind(null,jt,t),[i.memoizedState,t]}function Co(t,i,o,c){return t={tag:t,create:i,destroy:o,deps:c,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,i.lastEffect=t)),t}function Ph(){return Yn().memoizedState}function Ua(t,i,o,c){var d=xi();jt.flags|=t,d.memoizedState=Co(1|i,o,void 0,c===void 0?null:c)}function Fa(t,i,o,c){var d=Yn();c=c===void 0?null:c;var p=void 0;if(Qt!==null){var T=Qt.memoizedState;if(p=T.destroy,c!==null&&Oc(c,T.deps)){d.memoizedState=Co(i,o,p,c);return}}jt.flags|=t,d.memoizedState=Co(1|i,o,p,c)}function Nh(t,i){return Ua(8390656,8,t,i)}function Gc(t,i){return Fa(2048,8,t,i)}function Dh(t,i){return Fa(4,2,t,i)}function Lh(t,i){return Fa(4,4,t,i)}function Ih(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Uh(t,i,o){return o=o!=null?o.concat([t]):null,Fa(4,4,Ih.bind(null,i,t),o)}function jc(){}function Fh(t,i){var o=Yn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Oc(i,c[1])?c[0]:(o.memoizedState=[t,i],t)}function kh(t,i){var o=Yn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Oc(i,c[1])?c[0]:(t=t(),o.memoizedState=[t,i],t)}function Oh(t,i,o){return(Dr&21)===0?(t.baseState&&(t.baseState=!1,Nn=!0),t.memoizedState=o):(ti(o,i)||(o=Lt(),jt.lanes|=o,Lr|=o,t.baseState=!0),i)}function rx(t,i){var o=bt;bt=o!==0&&4>o?o:4,t(!0);var c=kc.transition;kc.transition={};try{t(!1),i()}finally{bt=o,kc.transition=c}}function zh(){return Yn().memoizedState}function sx(t,i,o){var c=lr(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Bh(t))Hh(i,o);else if(o=xh(t,i,o,c),o!==null){var d=Tn();oi(o,t,c,d),Vh(o,i,c)}}function ox(t,i,o){var c=lr(t),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Bh(t))Hh(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var T=i.lastRenderedState,z=p(T,o);if(d.hasEagerState=!0,d.eagerState=z,ti(z,T)){var W=i.interleaved;W===null?(d.next=d,Nc(i)):(d.next=W.next,W.next=d),i.interleaved=d;return}}catch{}finally{}o=xh(t,i,d,c),o!==null&&(d=Tn(),oi(o,t,c,d),Vh(o,i,c))}}function Bh(t){var i=t.alternate;return t===jt||i!==null&&i===jt}function Hh(t,i){To=Ia=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Vh(t,i,o){if((o&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,sn(t,o)}}var ka={readContext:qn,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},ax={readContext:qn,useCallback:function(t,i){return xi().memoizedState=[t,i===void 0?null:i],t},useContext:qn,useEffect:Nh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ua(4194308,4,Ih.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ua(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ua(4,2,t,i)},useMemo:function(t,i){var o=xi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var c=xi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=sx.bind(null,jt,t),[c.memoizedState,t]},useRef:function(t){var i=xi();return t={current:t},i.memoizedState=t},useState:Rh,useDebugValue:jc,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=Rh(!1),i=t[0];return t=rx.bind(null,t[1]),xi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var c=jt,d=xi();if(Bt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),an===null)throw Error(n(349));(Dr&30)!==0||Eh(c,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,Nh(bh.bind(null,c,p,t),[t]),c.flags|=2048,Co(9,Th.bind(null,c,p,o,i),void 0,null),o},useId:function(){var t=xi(),i=an.identifierPrefix;if(Bt){var o=Ci,c=Ai;o=(c&~(1<<32-ht(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=bo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=ix++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},lx={readContext:qn,useCallback:Fh,useContext:qn,useEffect:Gc,useImperativeHandle:Uh,useInsertionEffect:Dh,useLayoutEffect:Lh,useMemo:kh,useReducer:Hc,useRef:Ph,useState:function(){return Hc(Ao)},useDebugValue:jc,useDeferredValue:function(t){var i=Yn();return Oh(i,Qt.memoizedState,t)},useTransition:function(){var t=Hc(Ao)[0],i=Yn().memoizedState;return[t,i]},useMutableSource:Mh,useSyncExternalStore:wh,useId:zh,unstable_isNewReconciler:!1},cx={readContext:qn,useCallback:Fh,useContext:qn,useEffect:Gc,useImperativeHandle:Uh,useInsertionEffect:Dh,useLayoutEffect:Lh,useMemo:kh,useReducer:Vc,useRef:Ph,useState:function(){return Vc(Ao)},useDebugValue:jc,useDeferredValue:function(t){var i=Yn();return Qt===null?i.memoizedState=t:Oh(i,Qt.memoizedState,t)},useTransition:function(){var t=Vc(Ao)[0],i=Yn().memoizedState;return[t,i]},useMutableSource:Mh,useSyncExternalStore:wh,useId:zh,unstable_isNewReconciler:!1};function ii(t,i){if(t&&t.defaultProps){i=I({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Wc(t,i,o,c){i=t.memoizedState,o=o(c,i),o=o==null?i:I({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Oa={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var c=Tn(),d=lr(t),p=Pi(c,d);p.payload=i,o!=null&&(p.callback=o),i=rr(t,p,d),i!==null&&(oi(i,t,d,c),Pa(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var c=Tn(),d=lr(t),p=Pi(c,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=rr(t,p,d),i!==null&&(oi(i,t,d,c),Pa(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Tn(),c=lr(t),d=Pi(o,c);d.tag=2,i!=null&&(d.callback=i),i=rr(t,d,c),i!==null&&(oi(i,t,c,o),Pa(i,t,c))}};function Gh(t,i,o,c,d,p,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,T):i.prototype&&i.prototype.isPureReactComponent?!po(o,c)||!po(d,p):!0}function jh(t,i,o){var c=!1,d=tr,p=i.contextType;return typeof p=="object"&&p!==null?p=qn(p):(d=Pn(i)?Ar:gn.current,c=i.contextTypes,p=(c=c!=null)?ps(t,d):tr),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Oa,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function Wh(t,i,o,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==t&&Oa.enqueueReplaceState(i,i.state,null)}function Xc(t,i,o,c){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},Dc(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=qn(p):(p=Pn(i)?Ar:gn.current,d.context=ps(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Wc(t,i,p,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Oa.enqueueReplaceState(d,d.state,null),Na(t,o,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,i){try{var o="",c=i;do o+=ee(c),c=c.return;while(c);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function qc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Yc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var ux=typeof WeakMap=="function"?WeakMap:Map;function Xh(t,i,o){o=Pi(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Wa||(Wa=!0,cu=c),Yc(t,i)},o}function qh(t,i,o){o=Pi(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){Yc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Yc(t,i),typeof c!="function"&&(or===null?or=new Set([this]):or.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),o}function Yh(t,i,o){var c=t.pingCache;if(c===null){c=t.pingCache=new ux;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),t=Ex.bind(null,t,i,o),i.then(t,t))}function $h(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Kh(t,i,o,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Pi(-1,1),i.tag=2,rr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var dx=R.ReactCurrentOwner,Nn=!1;function En(t,i,o,c){i.child=t===null?gh(i,null,o,c):vs(i,t.child,o,c)}function Zh(t,i,o,c,d){o=o.render;var p=i.ref;return ys(i,d),c=zc(t,i,o,c,p,d),o=Bc(),t!==null&&!Nn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ni(t,i,d)):(Bt&&o&&Mc(i),i.flags|=1,En(t,i,c,d),i.child)}function Qh(t,i,o,c,d){if(t===null){var p=o.type;return typeof p=="function"&&!gu(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Jh(t,i,p,c,d)):(t=Za(o.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var T=p.memoizedProps;if(o=o.compare,o=o!==null?o:po,o(T,c)&&t.ref===i.ref)return Ni(t,i,d)}return i.flags|=1,t=ur(p,c),t.ref=i.ref,t.return=i,i.child=t}function Jh(t,i,o,c,d){if(t!==null){var p=t.memoizedProps;if(po(p,c)&&t.ref===i.ref)if(Nn=!1,i.pendingProps=c=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Nn=!0);else return i.lanes=t.lanes,Ni(t,i,d)}return $c(t,i,o,c,d)}function ep(t,i,o){var c=i.pendingProps,d=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Es,Hn),Hn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,It(Es,Hn),Hn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,It(Es,Hn),Hn|=c}else p!==null?(c=p.baseLanes|o,i.memoizedState=null):c=o,It(Es,Hn),Hn|=c;return En(t,i,d,o),i.child}function tp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function $c(t,i,o,c,d){var p=Pn(o)?Ar:gn.current;return p=ps(i,p),ys(i,d),o=zc(t,i,o,c,p,d),c=Bc(),t!==null&&!Nn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ni(t,i,d)):(Bt&&c&&Mc(i),i.flags|=1,En(t,i,o,d),i.child)}function np(t,i,o,c,d){if(Pn(o)){var p=!0;Ma(i)}else p=!1;if(ys(i,d),i.stateNode===null)Ba(t,i),jh(i,o,c),Xc(i,o,c,d),c=!0;else if(t===null){var T=i.stateNode,z=i.memoizedProps;T.props=z;var W=T.context,le=o.contextType;typeof le=="object"&&le!==null?le=qn(le):(le=Pn(o)?Ar:gn.current,le=ps(i,le));var Me=o.getDerivedStateFromProps,Ee=typeof Me=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(z!==c||W!==le)&&Wh(i,T,c,le),ir=!1;var Se=i.memoizedState;T.state=Se,Na(i,c,T,d),W=i.memoizedState,z!==c||Se!==W||Rn.current||ir?(typeof Me=="function"&&(Wc(i,o,Me,c),W=i.memoizedState),(z=ir||Gh(i,o,z,c,Se,W,le))?(Ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=W),T.props=c,T.state=W,T.context=le,c=z):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,vh(t,i),z=i.memoizedProps,le=i.type===i.elementType?z:ii(i.type,z),T.props=le,Ee=i.pendingProps,Se=T.context,W=o.contextType,typeof W=="object"&&W!==null?W=qn(W):(W=Pn(o)?Ar:gn.current,W=ps(i,W));var Be=o.getDerivedStateFromProps;(Me=typeof Be=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(z!==Ee||Se!==W)&&Wh(i,T,c,W),ir=!1,Se=i.memoizedState,T.state=Se,Na(i,c,T,d);var Xe=i.memoizedState;z!==Ee||Se!==Xe||Rn.current||ir?(typeof Be=="function"&&(Wc(i,o,Be,c),Xe=i.memoizedState),(le=ir||Gh(i,o,le,c,Se,Xe,W)||!1)?(Me||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Xe,W),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Xe,W)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||z===t.memoizedProps&&Se===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||z===t.memoizedProps&&Se===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Xe),T.props=c,T.state=Xe,T.context=W,c=le):(typeof T.componentDidUpdate!="function"||z===t.memoizedProps&&Se===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||z===t.memoizedProps&&Se===t.memoizedState||(i.flags|=1024),c=!1)}return Kc(t,i,o,c,p,d)}function Kc(t,i,o,c,d,p){tp(t,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&ah(i,o,!1),Ni(t,i,p);c=i.stateNode,dx.current=i;var z=T&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&T?(i.child=vs(i,t.child,null,p),i.child=vs(i,null,z,p)):En(t,i,z,p),i.memoizedState=c.state,d&&ah(i,o,!0),i.child}function ip(t){var i=t.stateNode;i.pendingContext?sh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&sh(t,i.context,!1),Lc(t,i.containerInfo)}function rp(t,i,o,c,d){return xs(),bc(d),i.flags|=256,En(t,i,o,c),i.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function Qc(t){return{baseLanes:t,cachePool:null,transitions:null}}function sp(t,i,o){var c=i.pendingProps,d=Gt.current,p=!1,T=(i.flags&128)!==0,z;if((z=T)||(z=t!==null&&t.memoizedState===null?!1:(d&2)!==0),z?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),It(Gt,d&1),t===null)return Tc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,t=c.fallback,p?(c=i.mode,p=i.child,T={mode:"hidden",children:T},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=T):p=Qa(T,c,0,null),t=kr(t,c,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Qc(o),i.memoizedState=Zc,t):Jc(i,T));if(d=t.memoizedState,d!==null&&(z=d.dehydrated,z!==null))return fx(t,i,T,c,z,d,o);if(p){p=c.fallback,T=i.mode,d=t.child,z=d.sibling;var W={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=W,i.deletions=null):(c=ur(d,W),c.subtreeFlags=d.subtreeFlags&14680064),z!==null?p=ur(z,p):(p=kr(p,T,o,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,T=t.child.memoizedState,T=T===null?Qc(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},p.memoizedState=T,p.childLanes=t.childLanes&~o,i.memoizedState=Zc,c}return p=t.child,t=p.sibling,c=ur(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=c,i.memoizedState=null,c}function Jc(t,i){return i=Qa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function za(t,i,o,c){return c!==null&&bc(c),vs(i,t.child,null,o),t=Jc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function fx(t,i,o,c,d,p,T){if(o)return i.flags&256?(i.flags&=-257,c=qc(Error(n(422))),za(t,i,T,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=Qa({mode:"visible",children:c.children},d,0,null),p=kr(p,d,T,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&vs(i,t.child,null,T),i.child.memoizedState=Qc(T),i.memoizedState=Zc,p);if((i.mode&1)===0)return za(t,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var z=c.dgst;return c=z,p=Error(n(419)),c=qc(p,c,void 0),za(t,i,T,c)}if(z=(T&t.childLanes)!==0,Nn||z){if(c=an,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ri(t,d),oi(c,t,d,-1))}return mu(),c=qc(Error(n(421))),za(t,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Tx.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,Bn=Ji(d.nextSibling),zn=i,Bt=!0,ni=null,t!==null&&(Wn[Xn++]=Ai,Wn[Xn++]=Ci,Wn[Xn++]=Cr,Ai=t.id,Ci=t.overflow,Cr=i),i=Jc(i,c.children),i.flags|=4096,i)}function op(t,i,o){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Pc(t.return,i,o)}function eu(t,i,o,c,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=d)}function ap(t,i,o){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(En(t,i,c.children,o),c=Gt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&op(t,o,i);else if(t.tag===19)op(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(It(Gt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Da(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),eu(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Da(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}eu(i,!0,o,null,p);break;case"together":eu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ba(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ni(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ur(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ur(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function hx(t,i,o){switch(i.tag){case 3:ip(i),xs();break;case 5:Sh(i);break;case 1:Pn(i.type)&&Ma(i);break;case 4:Lc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;It(Ca,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(It(Gt,Gt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?sp(t,i,o):(It(Gt,Gt.current&1),t=Ni(t,i,o),t!==null?t.sibling:null);It(Gt,Gt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(t.flags&128)!==0){if(c)return ap(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),It(Gt,Gt.current),c)break;return null;case 22:case 23:return i.lanes=0,ep(t,i,o)}return Ni(t,i,o)}var lp,tu,cp,up;lp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},tu=function(){},cp=function(t,i,o,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,Nr(gi.current);var p=null;switch(o){case"input":d=F(t,d),c=F(t,c),p=[];break;case"select":d=I({},d,{value:void 0}),c=I({},c,{value:void 0}),p=[];break;case"textarea":d=A(t,d),c=A(t,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=_a)}xt(o,c);var T;o=null;for(le in d)if(!c.hasOwnProperty(le)&&d.hasOwnProperty(le)&&d[le]!=null)if(le==="style"){var z=d[le];for(T in z)z.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(a.hasOwnProperty(le)?p||(p=[]):(p=p||[]).push(le,null));for(le in c){var W=c[le];if(z=d!=null?d[le]:void 0,c.hasOwnProperty(le)&&W!==z&&(W!=null||z!=null))if(le==="style")if(z){for(T in z)!z.hasOwnProperty(T)||W&&W.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in W)W.hasOwnProperty(T)&&z[T]!==W[T]&&(o||(o={}),o[T]=W[T])}else o||(p||(p=[]),p.push(le,o)),o=W;else le==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,z=z?z.__html:void 0,W!=null&&z!==W&&(p=p||[]).push(le,W)):le==="children"?typeof W!="string"&&typeof W!="number"||(p=p||[]).push(le,""+W):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(a.hasOwnProperty(le)?(W!=null&&le==="onScroll"&&kt("scroll",t),p||z===W||(p=[])):(p=p||[]).push(le,W))}o&&(p=p||[]).push("style",o);var le=p;(i.updateQueue=le)&&(i.flags|=4)}},up=function(t,i,o,c){o!==c&&(i.flags|=4)};function Ro(t,i){if(!Bt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function vn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=o,i}function px(t,i,o){var c=i.pendingProps;switch(wc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return Pn(i.type)&&Sa(),vn(i),null;case 3:return c=i.stateNode,Ss(),Ot(Rn),Ot(gn),Fc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(ba(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ni!==null&&(fu(ni),ni=null))),tu(t,i),vn(i),null;case 5:Ic(i);var d=Nr(Eo.current);if(o=i.type,t!==null&&i.stateNode!=null)cp(t,i,o,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return vn(i),null}if(t=Nr(gi.current),ba(i)){c=i.stateNode,o=i.type;var p=i.memoizedProps;switch(c[mi]=i,c[_o]=p,t=(i.mode&1)!==0,o){case"dialog":kt("cancel",c),kt("close",c);break;case"iframe":case"object":case"embed":kt("load",c);break;case"video":case"audio":for(d=0;d<go.length;d++)kt(go[d],c);break;case"source":kt("error",c);break;case"img":case"image":case"link":kt("error",c),kt("load",c);break;case"details":kt("toggle",c);break;case"input":ct(c,p),kt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},kt("invalid",c);break;case"textarea":se(c,p),kt("invalid",c)}xt(o,p),d=null;for(var T in p)if(p.hasOwnProperty(T)){var z=p[T];T==="children"?typeof z=="string"?c.textContent!==z&&(p.suppressHydrationWarning!==!0&&va(c.textContent,z,t),d=["children",z]):typeof z=="number"&&c.textContent!==""+z&&(p.suppressHydrationWarning!==!0&&va(c.textContent,z,t),d=["children",""+z]):a.hasOwnProperty(T)&&z!=null&&T==="onScroll"&&kt("scroll",c)}switch(o){case"input":et(c),Ve(c,p,!0);break;case"textarea":et(c),ye(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=_a)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xe(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=T.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=T.createElement(o,{is:c.is}):(t=T.createElement(o),o==="select"&&(T=t,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):t=T.createElementNS(t,o),t[mi]=i,t[_o]=c,lp(t,i,!1,!1),i.stateNode=t;e:{switch(T=ut(o,c),o){case"dialog":kt("cancel",t),kt("close",t),d=c;break;case"iframe":case"object":case"embed":kt("load",t),d=c;break;case"video":case"audio":for(d=0;d<go.length;d++)kt(go[d],t);d=c;break;case"source":kt("error",t),d=c;break;case"img":case"image":case"link":kt("error",t),kt("load",t),d=c;break;case"details":kt("toggle",t),d=c;break;case"input":ct(t,c),d=F(t,c),kt("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=I({},c,{value:void 0}),kt("invalid",t);break;case"textarea":se(t,c),d=A(t,c),kt("invalid",t);break;default:d=c}xt(o,d),z=d;for(p in z)if(z.hasOwnProperty(p)){var W=z[p];p==="style"?ot(t,W):p==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&Oe(t,W)):p==="children"?typeof W=="string"?(o!=="textarea"||W!=="")&&ft(t,W):typeof W=="number"&&ft(t,""+W):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?W!=null&&p==="onScroll"&&kt("scroll",t):W!=null&&L(t,p,W,T))}switch(o){case"input":et(t),Ve(t,c,!1);break;case"textarea":et(t),ye(t);break;case"option":c.value!=null&&t.setAttribute("value",""+ge(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?U(t,!!c.multiple,p,!1):c.defaultValue!=null&&U(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=_a)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(t&&i.stateNode!=null)up(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(o=Nr(Eo.current),Nr(gi.current),ba(i)){if(c=i.stateNode,o=i.memoizedProps,c[mi]=i,(p=c.nodeValue!==o)&&(t=zn,t!==null))switch(t.tag){case 3:va(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&va(c.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[mi]=i,i.stateNode=c}return vn(i),null;case 13:if(Ot(Gt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Bt&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)hh(),xs(),i.flags|=98560,p=!1;else if(p=ba(i),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[mi]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vn(i),p=!1}else ni!==null&&(fu(ni),ni=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Gt.current&1)!==0?Jt===0&&(Jt=3):mu())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return Ss(),tu(t,i),t===null&&xo(i.stateNode.containerInfo),vn(i),null;case 10:return Rc(i.type._context),vn(i),null;case 17:return Pn(i.type)&&Sa(),vn(i),null;case 19:if(Ot(Gt),p=i.memoizedState,p===null)return vn(i),null;if(c=(i.flags&128)!==0,T=p.rendering,T===null)if(c)Ro(p,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(T=Da(t),T!==null){for(i.flags|=128,Ro(p,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)p=o,t=c,p.flags&=14680066,T=p.alternate,T===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=T.childLanes,p.lanes=T.lanes,p.child=T.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=T.memoizedProps,p.memoizedState=T.memoizedState,p.updateQueue=T.updateQueue,p.type=T.type,t=T.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return It(Gt,Gt.current&1|2),i.child}t=t.sibling}p.tail!==null&&ne()>Ts&&(i.flags|=128,c=!0,Ro(p,!1),i.lanes=4194304)}else{if(!c)if(t=Da(T),t!==null){if(i.flags|=128,c=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ro(p,!0),p.tail===null&&p.tailMode==="hidden"&&!T.alternate&&!Bt)return vn(i),null}else 2*ne()-p.renderingStartTime>Ts&&o!==1073741824&&(i.flags|=128,c=!0,Ro(p,!1),i.lanes=4194304);p.isBackwards?(T.sibling=i.child,i.child=T):(o=p.last,o!==null?o.sibling=T:i.child=T,p.last=T)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=ne(),i.sibling=null,o=Gt.current,It(Gt,c?o&1|2:o&1),i):(vn(i),null);case 22:case 23:return pu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function mx(t,i){switch(wc(i),i.tag){case 1:return Pn(i.type)&&Sa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ss(),Ot(Rn),Ot(gn),Fc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Ic(i),null;case 13:if(Ot(Gt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));xs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ot(Gt),null;case 4:return Ss(),null;case 10:return Rc(i.type._context),null;case 22:case 23:return pu(),null;case 24:return null;default:return null}}var Ha=!1,_n=!1,gx=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function ws(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){qt(t,i,c)}else o.current=null}function nu(t,i,o){try{o()}catch(c){qt(t,i,c)}}var dp=!1;function xx(t,i){if(pc=aa,t=Gf(),oc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var T=0,z=-1,W=-1,le=0,Me=0,Ee=t,Se=null;t:for(;;){for(var Be;Ee!==o||d!==0&&Ee.nodeType!==3||(z=T+d),Ee!==p||c!==0&&Ee.nodeType!==3||(W=T+c),Ee.nodeType===3&&(T+=Ee.nodeValue.length),(Be=Ee.firstChild)!==null;)Se=Ee,Ee=Be;for(;;){if(Ee===t)break t;if(Se===o&&++le===d&&(z=T),Se===p&&++Me===c&&(W=T),(Be=Ee.nextSibling)!==null)break;Ee=Se,Se=Ee.parentNode}Ee=Be}o=z===-1||W===-1?null:{start:z,end:W}}else o=null}o=o||{start:0,end:0}}else o=null;for(mc={focusedElem:t,selectionRange:o},aa=!1,Ge=i;Ge!==null;)if(i=Ge,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ge=t;else for(;Ge!==null;){i=Ge;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var $e=Xe.memoizedProps,Yt=Xe.memoizedState,te=i.stateNode,q=te.getSnapshotBeforeUpdate(i.elementType===i.type?$e:ii(i.type,$e),Yt);te.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var re=i.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(be){qt(i,i.return,be)}if(t=i.sibling,t!==null){t.return=i.return,Ge=t;break}Ge=i.return}return Xe=dp,dp=!1,Xe}function Po(t,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&nu(i,o,p)}d=d.next}while(d!==c)}}function Va(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function iu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function fp(t){var i=t.alternate;i!==null&&(t.alternate=null,fp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[mi],delete i[_o],delete i[_c],delete i[J0],delete i[ex])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hp(t){return t.tag===5||t.tag===3||t.tag===4}function pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ru(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=_a));else if(c!==4&&(t=t.child,t!==null))for(ru(t,i,o),t=t.sibling;t!==null;)ru(t,i,o),t=t.sibling}function su(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(su(t,i,o),t=t.sibling;t!==null;)su(t,i,o),t=t.sibling}var dn=null,ri=!1;function sr(t,i,o){for(o=o.child;o!==null;)mp(t,i,o),o=o.sibling}function mp(t,i,o){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(st,o)}catch{}switch(o.tag){case 5:_n||ws(o,i);case 6:var c=dn,d=ri;dn=null,sr(t,i,o),dn=c,ri=d,dn!==null&&(ri?(t=dn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):dn.removeChild(o.stateNode));break;case 18:dn!==null&&(ri?(t=dn,o=o.stateNode,t.nodeType===8?vc(t.parentNode,o):t.nodeType===1&&vc(t,o),ao(t)):vc(dn,o.stateNode));break;case 4:c=dn,d=ri,dn=o.stateNode.containerInfo,ri=!0,sr(t,i,o),dn=c,ri=d;break;case 0:case 11:case 14:case 15:if(!_n&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,T=p.destroy;p=p.tag,T!==void 0&&((p&2)!==0||(p&4)!==0)&&nu(o,i,T),d=d.next}while(d!==c)}sr(t,i,o);break;case 1:if(!_n&&(ws(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(z){qt(o,i,z)}sr(t,i,o);break;case 21:sr(t,i,o);break;case 22:o.mode&1?(_n=(c=_n)||o.memoizedState!==null,sr(t,i,o),_n=c):sr(t,i,o);break;default:sr(t,i,o)}}function gp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new gx),i.forEach(function(c){var d=bx.bind(null,t,c);o.has(c)||(o.add(c),c.then(d,d))})}}function si(t,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var p=t,T=i,z=T;e:for(;z!==null;){switch(z.tag){case 5:dn=z.stateNode,ri=!1;break e;case 3:dn=z.stateNode.containerInfo,ri=!0;break e;case 4:dn=z.stateNode.containerInfo,ri=!0;break e}z=z.return}if(dn===null)throw Error(n(160));mp(p,T,d),dn=null,ri=!1;var W=d.alternate;W!==null&&(W.return=null),d.return=null}catch(le){qt(d,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)xp(i,t),i=i.sibling}function xp(t,i){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(si(i,t),vi(t),c&4){try{Po(3,t,t.return),Va(3,t)}catch($e){qt(t,t.return,$e)}try{Po(5,t,t.return)}catch($e){qt(t,t.return,$e)}}break;case 1:si(i,t),vi(t),c&512&&o!==null&&ws(o,o.return);break;case 5:if(si(i,t),vi(t),c&512&&o!==null&&ws(o,o.return),t.flags&32){var d=t.stateNode;try{ft(d,"")}catch($e){qt(t,t.return,$e)}}if(c&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,T=o!==null?o.memoizedProps:p,z=t.type,W=t.updateQueue;if(t.updateQueue=null,W!==null)try{z==="input"&&p.type==="radio"&&p.name!=null&&Qe(d,p),ut(z,T);var le=ut(z,p);for(T=0;T<W.length;T+=2){var Me=W[T],Ee=W[T+1];Me==="style"?ot(d,Ee):Me==="dangerouslySetInnerHTML"?Oe(d,Ee):Me==="children"?ft(d,Ee):L(d,Me,Ee,le)}switch(z){case"input":rt(d,p);break;case"textarea":_e(d,p);break;case"select":var Se=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Be=p.value;Be!=null?U(d,!!p.multiple,Be,!1):Se!==!!p.multiple&&(p.defaultValue!=null?U(d,!!p.multiple,p.defaultValue,!0):U(d,!!p.multiple,p.multiple?[]:"",!1))}d[_o]=p}catch($e){qt(t,t.return,$e)}}break;case 6:if(si(i,t),vi(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch($e){qt(t,t.return,$e)}}break;case 3:if(si(i,t),vi(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ao(i.containerInfo)}catch($e){qt(t,t.return,$e)}break;case 4:si(i,t),vi(t);break;case 13:si(i,t),vi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(lu=ne())),c&4&&gp(t);break;case 22:if(Me=o!==null&&o.memoizedState!==null,t.mode&1?(_n=(le=_n)||Me,si(i,t),_n=le):si(i,t),vi(t),c&8192){if(le=t.memoizedState!==null,(t.stateNode.isHidden=le)&&!Me&&(t.mode&1)!==0)for(Ge=t,Me=t.child;Me!==null;){for(Ee=Ge=Me;Ge!==null;){switch(Se=Ge,Be=Se.child,Se.tag){case 0:case 11:case 14:case 15:Po(4,Se,Se.return);break;case 1:ws(Se,Se.return);var Xe=Se.stateNode;if(typeof Xe.componentWillUnmount=="function"){c=Se,o=Se.return;try{i=c,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch($e){qt(c,o,$e)}}break;case 5:ws(Se,Se.return);break;case 22:if(Se.memoizedState!==null){yp(Ee);continue}}Be!==null?(Be.return=Se,Ge=Be):yp(Ee)}Me=Me.sibling}e:for(Me=null,Ee=t;;){if(Ee.tag===5){if(Me===null){Me=Ee;try{d=Ee.stateNode,le?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(z=Ee.stateNode,W=Ee.memoizedProps.style,T=W!=null&&W.hasOwnProperty("display")?W.display:null,z.style.display=tt("display",T))}catch($e){qt(t,t.return,$e)}}}else if(Ee.tag===6){if(Me===null)try{Ee.stateNode.nodeValue=le?"":Ee.memoizedProps}catch($e){qt(t,t.return,$e)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===t)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===t)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===t)break e;Me===Ee&&(Me=null),Ee=Ee.return}Me===Ee&&(Me=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:si(i,t),vi(t),c&4&&gp(t);break;case 21:break;default:si(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(hp(o)){var c=o;break e}o=o.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ft(d,""),c.flags&=-33);var p=pp(t);su(t,p,d);break;case 3:case 4:var T=c.stateNode.containerInfo,z=pp(t);ru(t,z,T);break;default:throw Error(n(161))}}catch(W){qt(t,t.return,W)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function vx(t,i,o){Ge=t,vp(t)}function vp(t,i,o){for(var c=(t.mode&1)!==0;Ge!==null;){var d=Ge,p=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||Ha;if(!T){var z=d.alternate,W=z!==null&&z.memoizedState!==null||_n;z=Ha;var le=_n;if(Ha=T,(_n=W)&&!le)for(Ge=d;Ge!==null;)T=Ge,W=T.child,T.tag===22&&T.memoizedState!==null?Sp(d):W!==null?(W.return=T,Ge=W):Sp(d);for(;p!==null;)Ge=p,vp(p),p=p.sibling;Ge=d,Ha=z,_n=le}_p(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Ge=p):_p(t)}}function _p(t){for(;Ge!==null;){var i=Ge;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||Va(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!_n)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ii(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&yh(i,p,c);break;case 3:var T=i.updateQueue;if(T!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}yh(i,T,o)}break;case 5:var z=i.stateNode;if(o===null&&i.flags&4){o=z;var W=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&o.focus();break;case"img":W.src&&(o.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var Me=le.memoizedState;if(Me!==null){var Ee=Me.dehydrated;Ee!==null&&ao(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}_n||i.flags&512&&iu(i)}catch(Se){qt(i,i.return,Se)}}if(i===t){Ge=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ge=o;break}Ge=i.return}}function yp(t){for(;Ge!==null;){var i=Ge;if(i===t){Ge=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ge=o;break}Ge=i.return}}function Sp(t){for(;Ge!==null;){var i=Ge;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Va(4,i)}catch(W){qt(i,o,W)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(W){qt(i,d,W)}}var p=i.return;try{iu(i)}catch(W){qt(i,p,W)}break;case 5:var T=i.return;try{iu(i)}catch(W){qt(i,T,W)}}}catch(W){qt(i,i.return,W)}if(i===t){Ge=null;break}var z=i.sibling;if(z!==null){z.return=i.return,Ge=z;break}Ge=i.return}}var _x=Math.ceil,Ga=R.ReactCurrentDispatcher,ou=R.ReactCurrentOwner,$n=R.ReactCurrentBatchConfig,At=0,an=null,$t=null,fn=0,Hn=0,Es=er(0),Jt=0,No=null,Lr=0,ja=0,au=0,Do=null,Dn=null,lu=0,Ts=1/0,Di=null,Wa=!1,cu=null,or=null,Xa=!1,ar=null,qa=0,Lo=0,uu=null,Ya=-1,$a=0;function Tn(){return(At&6)!==0?ne():Ya!==-1?Ya:Ya=ne()}function lr(t){return(t.mode&1)===0?1:(At&2)!==0&&fn!==0?fn&-fn:nx.transition!==null?($a===0&&($a=Lt()),$a):(t=bt,t!==0||(t=window.event,t=t===void 0?16:wf(t.type)),t)}function oi(t,i,o,c){if(50<Lo)throw Lo=0,uu=null,Error(n(185));rn(t,o,c),((At&2)===0||t!==an)&&(t===an&&((At&2)===0&&(ja|=o),Jt===4&&cr(t,fn)),Ln(t,c),o===1&&At===0&&(i.mode&1)===0&&(Ts=ne()+500,wa&&nr()))}function Ln(t,i){var o=t.callbackNode;wn(t,i);var c=pn(t,t===an?fn:0);if(c===0)o!==null&&P(o),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(o!=null&&P(o),i===1)t.tag===0?tx(wp.bind(null,t)):lh(wp.bind(null,t)),Z0(function(){(At&6)===0&&nr()}),o=null;else{switch(pi(c)){case 1:o=Te;break;case 4:o=Le;break;case 16:o=ze;break;case 536870912:o=at;break;default:o=ze}o=Np(o,Mp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Mp(t,i){if(Ya=-1,$a=0,(At&6)!==0)throw Error(n(327));var o=t.callbackNode;if(bs()&&t.callbackNode!==o)return null;var c=pn(t,t===an?fn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Ka(t,c);else{i=c;var d=At;At|=2;var p=Tp();(an!==t||fn!==i)&&(Di=null,Ts=ne()+500,Ur(t,i));do try{Mx();break}catch(z){Ep(t,z)}while(!0);Cc(),Ga.current=p,At=d,$t!==null?i=0:(an=null,fn=0,i=Jt)}if(i!==0){if(i===2&&(d=Ei(t),d!==0&&(c=d,i=du(t,d))),i===1)throw o=No,Ur(t,0),cr(t,c),Ln(t,ne()),o;if(i===6)cr(t,c);else{if(d=t.current.alternate,(c&30)===0&&!yx(d)&&(i=Ka(t,c),i===2&&(p=Ei(t),p!==0&&(c=p,i=du(t,p))),i===1))throw o=No,Ur(t,0),cr(t,c),Ln(t,ne()),o;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Fr(t,Dn,Di);break;case 3:if(cr(t,c),(c&130023424)===c&&(i=lu+500-ne(),10<i)){if(pn(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){Tn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=xc(Fr.bind(null,t,Dn,Di),i);break}Fr(t,Dn,Di);break;case 4:if(cr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var T=31-ht(c);p=1<<T,T=i[T],T>d&&(d=T),c&=~p}if(c=d,c=ne()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*_x(c/1960))-c,10<c){t.timeoutHandle=xc(Fr.bind(null,t,Dn,Di),c);break}Fr(t,Dn,Di);break;case 5:Fr(t,Dn,Di);break;default:throw Error(n(329))}}}return Ln(t,ne()),t.callbackNode===o?Mp.bind(null,t):null}function du(t,i){var o=Do;return t.current.memoizedState.isDehydrated&&(Ur(t,i).flags|=256),t=Ka(t,i),t!==2&&(i=Dn,Dn=o,i!==null&&fu(i)),t}function fu(t){Dn===null?Dn=t:Dn.push.apply(Dn,t)}function yx(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],p=d.getSnapshot;d=d.value;try{if(!ti(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i){for(i&=~au,i&=~ja,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ht(i),c=1<<o;t[o]=-1,i&=~c}}function wp(t){if((At&6)!==0)throw Error(n(327));bs();var i=pn(t,0);if((i&1)===0)return Ln(t,ne()),null;var o=Ka(t,i);if(t.tag!==0&&o===2){var c=Ei(t);c!==0&&(i=c,o=du(t,c))}if(o===1)throw o=No,Ur(t,0),cr(t,i),Ln(t,ne()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Fr(t,Dn,Di),Ln(t,ne()),null}function hu(t,i){var o=At;At|=1;try{return t(i)}finally{At=o,At===0&&(Ts=ne()+500,wa&&nr())}}function Ir(t){ar!==null&&ar.tag===0&&(At&6)===0&&bs();var i=At;At|=1;var o=$n.transition,c=bt;try{if($n.transition=null,bt=1,t)return t()}finally{bt=c,$n.transition=o,At=i,(At&6)===0&&nr()}}function pu(){Hn=Es.current,Ot(Es)}function Ur(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,K0(o)),$t!==null)for(o=$t.return;o!==null;){var c=o;switch(wc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Sa();break;case 3:Ss(),Ot(Rn),Ot(gn),Fc();break;case 5:Ic(c);break;case 4:Ss();break;case 13:Ot(Gt);break;case 19:Ot(Gt);break;case 10:Rc(c.type._context);break;case 22:case 23:pu()}o=o.return}if(an=t,$t=t=ur(t.current,null),fn=Hn=i,Jt=0,No=null,au=ja=Lr=0,Dn=Do=null,Pr!==null){for(i=0;i<Pr.length;i++)if(o=Pr[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,p=o.pending;if(p!==null){var T=p.next;p.next=d,c.next=T}o.pending=c}Pr=null}return t}function Ep(t,i){do{var o=$t;try{if(Cc(),La.current=ka,Ia){for(var c=jt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ia=!1}if(Dr=0,on=Qt=jt=null,To=!1,bo=0,ou.current=null,o===null||o.return===null){Jt=1,No=i,$t=null;break}e:{var p=t,T=o.return,z=o,W=i;if(i=fn,z.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var le=W,Me=z,Ee=Me.tag;if((Me.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Be=$h(T);if(Be!==null){Be.flags&=-257,Kh(Be,T,z,p,i),Be.mode&1&&Yh(p,le,i),i=Be,W=le;var Xe=i.updateQueue;if(Xe===null){var $e=new Set;$e.add(W),i.updateQueue=$e}else Xe.add(W);break e}else{if((i&1)===0){Yh(p,le,i),mu();break e}W=Error(n(426))}}else if(Bt&&z.mode&1){var Yt=$h(T);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Kh(Yt,T,z,p,i),bc(Ms(W,z));break e}}p=W=Ms(W,z),Jt!==4&&(Jt=2),Do===null?Do=[p]:Do.push(p),p=T;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var te=Xh(p,W,i);_h(p,te);break e;case 1:z=W;var q=p.type,re=p.stateNode;if((p.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(or===null||!or.has(re)))){p.flags|=65536,i&=-i,p.lanes|=i;var be=qh(p,z,i);_h(p,be);break e}}p=p.return}while(p!==null)}Ap(o)}catch(Ke){i=Ke,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function Tp(){var t=Ga.current;return Ga.current=ka,t===null?ka:t}function mu(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),an===null||(Lr&268435455)===0&&(ja&268435455)===0||cr(an,fn)}function Ka(t,i){var o=At;At|=2;var c=Tp();(an!==t||fn!==i)&&(Di=null,Ur(t,i));do try{Sx();break}catch(d){Ep(t,d)}while(!0);if(Cc(),At=o,Ga.current=c,$t!==null)throw Error(n(261));return an=null,fn=0,Jt}function Sx(){for(;$t!==null;)bp($t)}function Mx(){for(;$t!==null&&!$();)bp($t)}function bp(t){var i=Pp(t.alternate,t,Hn);t.memoizedProps=t.pendingProps,i===null?Ap(t):$t=i,ou.current=null}function Ap(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=px(o,i,Hn),o!==null){$t=o;return}}else{if(o=mx(o,i),o!==null){o.flags&=32767,$t=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Jt=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=t}while(i!==null);Jt===0&&(Jt=5)}function Fr(t,i,o){var c=bt,d=$n.transition;try{$n.transition=null,bt=1,wx(t,i,o,c)}finally{$n.transition=d,bt=c}return null}function wx(t,i,o,c){do bs();while(ar!==null);if((At&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(un(t,p),t===an&&($t=an=null,fn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Xa||(Xa=!0,Np(ze,function(){return bs(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=$n.transition,$n.transition=null;var T=bt;bt=1;var z=At;At|=4,ou.current=null,xx(t,o),xp(o,t),G0(mc),aa=!!pc,mc=pc=null,t.current=o,vx(o),ae(),At=z,bt=T,$n.transition=p}else t.current=o;if(Xa&&(Xa=!1,ar=t,qa=d),p=t.pendingLanes,p===0&&(or=null),wt(o.stateNode),Ln(t,ne()),i!==null)for(c=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(Wa)throw Wa=!1,t=cu,cu=null,t;return(qa&1)!==0&&t.tag!==0&&bs(),p=t.pendingLanes,(p&1)!==0?t===uu?Lo++:(Lo=0,uu=t):Lo=0,nr(),null}function bs(){if(ar!==null){var t=pi(qa),i=$n.transition,o=bt;try{if($n.transition=null,bt=16>t?16:t,ar===null)var c=!1;else{if(t=ar,ar=null,qa=0,(At&6)!==0)throw Error(n(331));var d=At;for(At|=4,Ge=t.current;Ge!==null;){var p=Ge,T=p.child;if((Ge.flags&16)!==0){var z=p.deletions;if(z!==null){for(var W=0;W<z.length;W++){var le=z[W];for(Ge=le;Ge!==null;){var Me=Ge;switch(Me.tag){case 0:case 11:case 15:Po(8,Me,p)}var Ee=Me.child;if(Ee!==null)Ee.return=Me,Ge=Ee;else for(;Ge!==null;){Me=Ge;var Se=Me.sibling,Be=Me.return;if(fp(Me),Me===le){Ge=null;break}if(Se!==null){Se.return=Be,Ge=Se;break}Ge=Be}}}var Xe=p.alternate;if(Xe!==null){var $e=Xe.child;if($e!==null){Xe.child=null;do{var Yt=$e.sibling;$e.sibling=null,$e=Yt}while($e!==null)}}Ge=p}}if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,Ge=T;else e:for(;Ge!==null;){if(p=Ge,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Po(9,p,p.return)}var te=p.sibling;if(te!==null){te.return=p.return,Ge=te;break e}Ge=p.return}}var q=t.current;for(Ge=q;Ge!==null;){T=Ge;var re=T.child;if((T.subtreeFlags&2064)!==0&&re!==null)re.return=T,Ge=re;else e:for(T=q;Ge!==null;){if(z=Ge,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Va(9,z)}}catch(Ke){qt(z,z.return,Ke)}if(z===T){Ge=null;break e}var be=z.sibling;if(be!==null){be.return=z.return,Ge=be;break e}Ge=z.return}}if(At=d,nr(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(st,t)}catch{}c=!0}return c}finally{bt=o,$n.transition=i}}return!1}function Cp(t,i,o){i=Ms(o,i),i=Xh(t,i,1),t=rr(t,i,1),i=Tn(),t!==null&&(rn(t,1,i),Ln(t,i))}function qt(t,i,o){if(t.tag===3)Cp(t,t,o);else for(;i!==null;){if(i.tag===3){Cp(i,t,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(or===null||!or.has(c))){t=Ms(o,t),t=qh(i,t,1),i=rr(i,t,1),t=Tn(),i!==null&&(rn(i,1,t),Ln(i,t));break}}i=i.return}}function Ex(t,i,o){var c=t.pingCache;c!==null&&c.delete(i),i=Tn(),t.pingedLanes|=t.suspendedLanes&o,an===t&&(fn&o)===o&&(Jt===4||Jt===3&&(fn&130023424)===fn&&500>ne()-lu?Ur(t,0):au|=o),Ln(t,i)}function Rp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Xt,Xt<<=1,(Xt&130023424)===0&&(Xt=4194304)));var o=Tn();t=Ri(t,i),t!==null&&(rn(t,i,o),Ln(t,o))}function Tx(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Rp(t,o)}function bx(t,i){var o=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Rp(t,o)}var Pp;Pp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Rn.current)Nn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Nn=!1,hx(t,i,o);Nn=(t.flags&131072)!==0}else Nn=!1,Bt&&(i.flags&1048576)!==0&&ch(i,Ta,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ba(t,i),t=i.pendingProps;var d=ps(i,gn.current);ys(i,o),d=zc(null,i,c,t,d,o);var p=Bc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(c)?(p=!0,Ma(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Dc(i),d.updater=Oa,i.stateNode=d,d._reactInternals=i,Xc(i,c,t,o),i=Kc(null,i,c,!0,p,o)):(i.tag=0,Bt&&p&&Mc(i),En(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Ba(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Cx(c),t=ii(c,t),d){case 0:i=$c(null,i,c,t,o);break e;case 1:i=np(null,i,c,t,o);break e;case 11:i=Zh(null,i,c,t,o);break e;case 14:i=Qh(null,i,c,ii(c.type,t),o);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ii(c,d),$c(t,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ii(c,d),np(t,i,c,d,o);case 3:e:{if(ip(i),t===null)throw Error(n(387));c=i.pendingProps,p=i.memoizedState,d=p.element,vh(t,i),Na(i,c,null,o);var T=i.memoizedState;if(c=T.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=Ms(Error(n(423)),i),i=rp(t,i,c,o,d);break e}else if(c!==d){d=Ms(Error(n(424)),i),i=rp(t,i,c,o,d);break e}else for(Bn=Ji(i.stateNode.containerInfo.firstChild),zn=i,Bt=!0,ni=null,o=gh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(xs(),c===d){i=Ni(t,i,o);break e}En(t,i,c,o)}i=i.child}return i;case 5:return Sh(i),t===null&&Tc(i),c=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,T=d.children,gc(c,d)?T=null:p!==null&&gc(c,p)&&(i.flags|=32),tp(t,i),En(t,i,T,o),i.child;case 6:return t===null&&Tc(i),null;case 13:return sp(t,i,o);case 4:return Lc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=vs(i,null,c,o):En(t,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ii(c,d),Zh(t,i,c,d,o);case 7:return En(t,i,i.pendingProps,o),i.child;case 8:return En(t,i,i.pendingProps.children,o),i.child;case 12:return En(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,T=d.value,It(Ca,c._currentValue),c._currentValue=T,p!==null)if(ti(p.value,T)){if(p.children===d.children&&!Rn.current){i=Ni(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var z=p.dependencies;if(z!==null){T=p.child;for(var W=z.firstContext;W!==null;){if(W.context===c){if(p.tag===1){W=Pi(-1,o&-o),W.tag=2;var le=p.updateQueue;if(le!==null){le=le.shared;var Me=le.pending;Me===null?W.next=W:(W.next=Me.next,Me.next=W),le.pending=W}}p.lanes|=o,W=p.alternate,W!==null&&(W.lanes|=o),Pc(p.return,o,i),z.lanes|=o;break}W=W.next}}else if(p.tag===10)T=p.type===i.type?null:p.child;else if(p.tag===18){if(T=p.return,T===null)throw Error(n(341));T.lanes|=o,z=T.alternate,z!==null&&(z.lanes|=o),Pc(T,o,i),T=p.sibling}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===i){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}En(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,ys(i,o),d=qn(d),c=c(d),i.flags|=1,En(t,i,c,o),i.child;case 14:return c=i.type,d=ii(c,i.pendingProps),d=ii(c.type,d),Qh(t,i,c,d,o);case 15:return Jh(t,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ii(c,d),Ba(t,i),i.tag=1,Pn(c)?(t=!0,Ma(i)):t=!1,ys(i,o),jh(i,c,d),Xc(i,c,d,o),Kc(null,i,c,!0,t,o);case 19:return ap(t,i,o);case 22:return ep(t,i,o)}throw Error(n(156,i.tag))};function Np(t,i){return ra(t,i)}function Ax(t,i,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,o,c){return new Ax(t,i,o,c)}function gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cx(t){if(typeof t=="function")return gu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ie)return 11;if(t===he)return 14}return 2}function ur(t,i){var o=t.alternate;return o===null?(o=Kn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Za(t,i,o,c,d,p){var T=2;if(c=t,typeof t=="function")gu(t)&&(T=1);else if(typeof t=="string")T=5;else e:switch(t){case k:return kr(o.children,d,p,i);case V:T=8,d|=8;break;case N:return t=Kn(12,o,i,d|2),t.elementType=N,t.lanes=p,t;case Q:return t=Kn(13,o,i,d),t.elementType=Q,t.lanes=p,t;case de:return t=Kn(19,o,i,d),t.elementType=de,t.lanes=p,t;case me:return Qa(o,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:T=10;break e;case B:T=9;break e;case ie:T=11;break e;case he:T=14;break e;case ce:T=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(T,o,i,d),i.elementType=t,i.type=c,i.lanes=p,i}function kr(t,i,o,c){return t=Kn(7,t,c,i),t.lanes=o,t}function Qa(t,i,o,c){return t=Kn(22,t,c,i),t.elementType=me,t.lanes=o,t.stateNode={isHidden:!1},t}function xu(t,i,o){return t=Kn(6,t,null,i),t.lanes=o,t}function vu(t,i,o){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Rx(t,i,o,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function _u(t,i,o,c,d,p,T,z,W){return t=new Rx(t,i,o,z,W),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Kn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dc(p),t}function Px(t,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:t,containerInfo:i,implementation:o}}function Dp(t){if(!t)return tr;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Pn(o))return oh(t,o,i)}return i}function Lp(t,i,o,c,d,p,T,z,W){return t=_u(o,c,!0,t,d,p,T,z,W),t.context=Dp(null),o=t.current,c=Tn(),d=lr(o),p=Pi(c,d),p.callback=i??null,rr(o,p,d),t.current.lanes=d,rn(t,d,c),Ln(t,c),t}function Ja(t,i,o,c){var d=i.current,p=Tn(),T=lr(d);return o=Dp(o),i.context===null?i.context=o:i.pendingContext=o,i=Pi(p,T),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=rr(d,i,T),t!==null&&(oi(t,d,T,p),Pa(t,d,T)),T}function el(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ip(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function yu(t,i){Ip(t,i),(t=t.alternate)&&Ip(t,i)}function Nx(){return null}var Up=typeof reportError=="function"?reportError:function(t){console.error(t)};function Su(t){this._internalRoot=t}tl.prototype.render=Su.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ja(t,i,null,null)},tl.prototype.unmount=Su.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ir(function(){Ja(null,t,null,null)}),i[Ti]=null}};function tl(t){this._internalRoot=t}tl.prototype.unstable_scheduleHydration=function(t){if(t){var i=vf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Ki.length&&i!==0&&i<Ki[o].priority;o++);Ki.splice(o,0,t),o===0&&Sf(t)}};function Mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fp(){}function Dx(t,i,o,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var le=el(T);p.call(le)}}var T=Lp(i,c,t,0,null,!1,!1,"",Fp);return t._reactRootContainer=T,t[Ti]=T.current,xo(t.nodeType===8?t.parentNode:t),Ir(),T}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var z=c;c=function(){var le=el(W);z.call(le)}}var W=_u(t,0,!1,null,null,!1,!1,"",Fp);return t._reactRootContainer=W,t[Ti]=W.current,xo(t.nodeType===8?t.parentNode:t),Ir(function(){Ja(i,W,o,c)}),W}function il(t,i,o,c,d){var p=o._reactRootContainer;if(p){var T=p;if(typeof d=="function"){var z=d;d=function(){var W=el(T);z.call(W)}}Ja(i,T,t,d)}else T=Dx(o,i,t,d,c);return el(T)}gf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=St(i.pendingLanes);o!==0&&(sn(i,o|1),Ln(i,ne()),(At&6)===0&&(Ts=ne()+500,nr()))}break;case 13:Ir(function(){var c=Ri(t,1);if(c!==null){var d=Tn();oi(c,t,1,d)}}),yu(t,1)}},ql=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var o=Tn();oi(i,t,134217728,o)}yu(t,134217728)}},xf=function(t){if(t.tag===13){var i=lr(t),o=Ri(t,i);if(o!==null){var c=Tn();oi(o,t,i,c)}yu(t,i)}},vf=function(){return bt},_f=function(t,i){var o=bt;try{return bt=t,i()}finally{bt=o}},De=function(t,i,o){switch(i){case"input":if(rt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==t&&c.form===t.form){var d=ya(c);if(!d)throw Error(n(90));Re(c),rt(c,d)}}}break;case"textarea":_e(t,o);break;case"select":i=o.value,i!=null&&U(t,!!o.multiple,i,!1)}},Ft=hu,Zt=Ir;var Lx={usingClientEntryPoint:!1,Events:[yo,fs,ya,Ue,dt,hu]},Io={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ix={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=na(t),t===null?null:t.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||Nx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{st=rl.inject(Ix),qe=rl}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lx,In.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mu(i))throw Error(n(200));return Px(t,i,null,o)},In.createRoot=function(t,i){if(!Mu(t))throw Error(n(299));var o=!1,c="",d=Up;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=_u(t,1,!1,null,null,o,!1,c,d),t[Ti]=i.current,xo(t.nodeType===8?t.parentNode:t),new Su(i)},In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=na(i),t=t===null?null:t.stateNode,t},In.flushSync=function(t){return Ir(t)},In.hydrate=function(t,i,o){if(!nl(i))throw Error(n(200));return il(null,t,i,!0,o)},In.hydrateRoot=function(t,i,o){if(!Mu(t))throw Error(n(405));var c=o!=null&&o.hydratedSources||null,d=!1,p="",T=Up;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),i=Lp(i,null,t,1,o??null,d,!1,p,T),t[Ti]=i.current,xo(t),c)for(t=0;t<c.length;t++)o=c[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new tl(i)},In.render=function(t,i,o){if(!nl(i))throw Error(n(200));return il(null,t,i,!1,o)},In.unmountComponentAtNode=function(t){if(!nl(t))throw Error(n(40));return t._reactRootContainer?(Ir(function(){il(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1},In.unstable_batchedUpdates=hu,In.unstable_renderSubtreeIntoContainer=function(t,i,o,c){if(!nl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return il(t,i,o,!1,c)},In.version="18.3.1-next-f1338f8080-20240426",In}var jp;function Gx(){if(jp)return Tu.exports;jp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Tu.exports=Vx(),Tu.exports}var Wp;function jx(){if(Wp)return sl;Wp=1;var s=Gx();return sl.createRoot=s.createRoot,sl.hydrateRoot=s.hydrateRoot,sl}var Wx=jx();const Xx=Xm(Wx),Fo=[{id:"leather-jacket-01",title:"Vintage Hand-Treated Leather Jacket",price:25,originalPrice:120,condition:"Used - Like New",location:"Brooklyn, NY · 2.4 miles",timeAgo:"2h ago",category:"Apparel",image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",gallery:["https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80"],description:"Classic vintage heavyweight moto leather jacket with aged brass hardware. Pristine interior satin lining with zero tear or cracking. Perfectly broken in, tailored relaxed silhouette.",seller:{name:"Johnathan Vance",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",rating:4.9,salesCount:42,verified:!0},dealRating:"Super Deal",hasDropAlert:!0,geometryType:"jacket"},{id:"ceramic-mug-02",title:"Minimalist Wabi-Sabi Ceramic Mug",price:15,originalPrice:38,condition:"Brand New",location:"Williamsburg, NY · 0.8 miles",timeAgo:"4h ago",category:"Decor",image:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",gallery:["https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=80"],description:"Hand-thrown stoneware mug coated with textured iron-flecked satin matte glaze. Ergonomic weighted handle designed for comfortable heat retention. Food & dishwasher safe.",seller:{name:"Maya Lin Studios",avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",rating:5,salesCount:128,verified:!0},dealRating:"Fair Market",hasDropAlert:!1,geometryType:"mug"},{id:"vintage-glass-03",title:"Retro 35mm Rangefinder Optical Camera",price:65,originalPrice:180,condition:"Good - Functional",location:"Manhattan, NY · 3.1 miles",timeAgo:"1d ago",category:"Electronics",image:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",gallery:["https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"],description:"All-metal mechanical film camera with coated 50mm f/1.8 glass lens. Tested shutter curtain, crisp rangefinder patch alignment. Battery-free mechanical operation.",seller:{name:"Felix Chen",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",rating:4.8,salesCount:19,verified:!0},dealRating:"Super Deal",hasDropAlert:!0,geometryType:"glass"},{id:"danish-chair-04",title:"Mid-Century Danish Teak Dining Chair",price:85,originalPrice:240,condition:"Refurbished",location:"Astoria, Queens · 4.5 miles",timeAgo:"1d ago",category:"Furniture",image:"https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80",gallery:["https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80"],description:"Authentic 1960s Scandinavian molded wood silhouette with freshly reupholstered charcoal wool seat cushion. Hand-oiled natural teak wood grain with rock-solid joinery.",seller:{name:"Nordic Collective",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",rating:4.9,salesCount:88,verified:!0},dealRating:"Rare Collectible",hasDropAlert:!1,geometryType:"chair"},{id:"vinyl-record-05",title:"First-Press Jazz Vinyl Record Anthology",price:40,originalPrice:90,condition:"Very Good Plus (VG+)",location:"Lower East Side, NY · 1.5 miles",timeAgo:"2d ago",category:"Collectibles",image:"https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",gallery:["https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80"],description:"Original analog master pressing in archival anti-static poly sleeve. Plays clean with deep low-end warmth and zero skips. Outer gatefold jacket shows gorgeous vintage patina.",seller:{name:"Sammy Groove",avatar:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80",rating:4.9,salesCount:65,verified:!0},dealRating:"Super Deal",hasDropAlert:!0,geometryType:"record"}];/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jd="174",qx=0,Xp=1,Yx=2,qm=1,$x=2,Oi=3,Mr=0,kn=1,zi=2,yr=0,Vs=1,ad=2,qp=3,Yp=4,Kx=5,Yr=100,Zx=101,Qx=102,Jx=103,ev=104,tv=200,nv=201,iv=202,rv=203,ld=204,cd=205,sv=206,ov=207,av=208,lv=209,cv=210,uv=211,dv=212,fv=213,hv=214,ud=0,dd=1,fd=2,Ws=3,hd=4,pd=5,md=6,gd=7,Ym=0,pv=1,mv=2,Sr=0,gv=1,xv=2,vv=3,_v=4,yv=5,Sv=6,Mv=7,$m=300,Xs=301,qs=302,xd=303,vd=304,Vl=306,_d=1e3,Kr=1001,yd=1002,fi=1003,wv=1004,ol=1005,yi=1006,Cu=1007,Zr=1008,Gi=1009,Km=1010,Zm=1011,Wo=1012,ef=1013,Jr=1014,Bi=1015,Yo=1016,tf=1017,nf=1018,Ys=1020,Qm=35902,Jm=1021,eg=1022,di=1023,tg=1024,ng=1025,Gs=1026,$s=1027,ig=1028,rf=1029,rg=1030,sf=1031,of=1033,Rl=33776,Pl=33777,Nl=33778,Dl=33779,Sd=35840,Md=35841,wd=35842,Ed=35843,Td=36196,bd=37492,Ad=37496,Cd=37808,Rd=37809,Pd=37810,Nd=37811,Dd=37812,Ld=37813,Id=37814,Ud=37815,Fd=37816,kd=37817,Od=37818,zd=37819,Bd=37820,Hd=37821,Ll=36492,Vd=36494,Gd=36495,sg=36283,jd=36284,Wd=36285,Xd=36286,Ev=3200,Tv=3201,og=0,bv=1,_r="",Qn="srgb",Ks="srgb-linear",Fl="linear",Nt="srgb",As=7680,$p=519,Av=512,Cv=513,Rv=514,ag=515,Pv=516,Nv=517,Dv=518,Lv=519,Kp=35044,Zp="300 es",Hi=2e3,kl=2001;class eo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ru=Math.PI/180,qd=180/Math.PI;function $o(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function Mt(s,e,n){return Math.max(e,Math.min(n,s))}function Iv(s,e){return(s%e+e)%e}function Pu(s,e,n){return(1-n)*s+n*e}function ko(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,n=0){yt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,n,r,a,l,u,f,h,m){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,u,f,h,m)}set(e,n,r,a,l,u,f,h,m){const y=this.elements;return y[0]=e,y[1]=a,y[2]=f,y[3]=n,y[4]=l,y[5]=h,y[6]=r,y[7]=u,y[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,u=r[0],f=r[3],h=r[6],m=r[1],y=r[4],x=r[7],g=r[2],M=r[5],E=r[8],b=a[0],_=a[3],v=a[6],D=a[1],L=a[4],R=a[7],G=a[2],O=a[5],k=a[8];return l[0]=u*b+f*D+h*G,l[3]=u*_+f*L+h*O,l[6]=u*v+f*R+h*k,l[1]=m*b+y*D+x*G,l[4]=m*_+y*L+x*O,l[7]=m*v+y*R+x*k,l[2]=g*b+M*D+E*G,l[5]=g*_+M*L+E*O,l[8]=g*v+M*R+E*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],y=e[8];return n*u*y-n*f*m-r*l*y+r*f*h+a*l*m-a*u*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],y=e[8],x=y*u-f*m,g=f*h-y*l,M=m*l-u*h,E=n*x+r*g+a*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=x*b,e[1]=(a*m-y*r)*b,e[2]=(f*r-a*u)*b,e[3]=g*b,e[4]=(y*n-a*h)*b,e[5]=(a*l-f*n)*b,e[6]=M*b,e[7]=(r*h-m*n)*b,e[8]=(u*n-r*l)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,u,f){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*u+m*f)+u+e,-a*m,a*h,-a*(-m*u+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Nu.makeScale(e,n)),this}rotate(e){return this.premultiply(Nu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nu=new pt;function lg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Uv(){const s=Ol("canvas");return s.style.display="block",s}const Qp={};function Wr(s){s in Qp||(Qp[s]=!0,console.warn(s))}function Fv(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function kv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ov(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Jp=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),em=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zv(){const s={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Nt&&(a.r=Vi(a.r),a.g=Vi(a.g),a.b=Vi(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Nt&&(a.r=js(a.r),a.g=js(a.g),a.b=js(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===_r?Fl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ks]:{primaries:e,whitePoint:r,transfer:Fl,toXYZ:Jp,fromXYZ:em,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:r,transfer:Nt,toXYZ:Jp,fromXYZ:em,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),s}const Rt=zv();function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class Bv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cs===void 0&&(Cs=Ol("canvas")),Cs.width=e.width,Cs.height=e.height;const r=Cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Cs}return n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ol("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Vi(l[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Vi(n[r]/255)*255):n[r]=Vi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hv=0;class af{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(Du(a[u].image)):l.push(Du(a[u]))}else l=Du(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Du(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Bv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vv=0;class An extends eo{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,r=Kr,a=Kr,l=yi,u=Zr,f=di,h=Gi,m=An.DEFAULT_ANISOTROPY,y=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=$o(),this.name="",this.source=new af(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$m)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=$m;An.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,r=0,a=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const h=e.elements,m=h[0],y=h[4],x=h[8],g=h[1],M=h[5],E=h[9],b=h[2],_=h[6],v=h[10];if(Math.abs(y-g)<.01&&Math.abs(x-b)<.01&&Math.abs(E-_)<.01){if(Math.abs(y+g)<.1&&Math.abs(x+b)<.1&&Math.abs(E+_)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,R=(M+1)/2,G=(v+1)/2,O=(y+g)/4,k=(x+b)/4,V=(E+_)/4;return L>R&&L>G?L<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(L),a=O/r,l=k/r):R>G?R<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),r=O/a,l=V/a):G<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(G),r=k/l,a=V/l),this.set(r,a,l,n),this}let D=Math.sqrt((_-E)*(_-E)+(x-b)*(x-b)+(g-y)*(g-y));return Math.abs(D)<.001&&(D=1),this.x=(_-E)/D,this.y=(x-b)/D,this.z=(g-y)/D,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this.w=Mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this.w=Mt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gv extends eo{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new An(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new af(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends Gv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class cg extends An{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jv extends An{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,u,f){let h=r[a+0],m=r[a+1],y=r[a+2],x=r[a+3];const g=l[u+0],M=l[u+1],E=l[u+2],b=l[u+3];if(f===0){e[n+0]=h,e[n+1]=m,e[n+2]=y,e[n+3]=x;return}if(f===1){e[n+0]=g,e[n+1]=M,e[n+2]=E,e[n+3]=b;return}if(x!==b||h!==g||m!==M||y!==E){let _=1-f;const v=h*g+m*M+y*E+x*b,D=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const G=Math.sqrt(L),O=Math.atan2(G,v*D);_=Math.sin(_*O)/G,f=Math.sin(f*O)/G}const R=f*D;if(h=h*_+g*R,m=m*_+M*R,y=y*_+E*R,x=x*_+b*R,_===1-f){const G=1/Math.sqrt(h*h+m*m+y*y+x*x);h*=G,m*=G,y*=G,x*=G}}e[n]=h,e[n+1]=m,e[n+2]=y,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,l,u){const f=r[a],h=r[a+1],m=r[a+2],y=r[a+3],x=l[u],g=l[u+1],M=l[u+2],E=l[u+3];return e[n]=f*E+y*x+h*M-m*g,e[n+1]=h*E+y*g+m*x-f*M,e[n+2]=m*E+y*M+f*g-h*x,e[n+3]=y*E-f*x-h*g-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,m=f(r/2),y=f(a/2),x=f(l/2),g=h(r/2),M=h(a/2),E=h(l/2);switch(u){case"XYZ":this._x=g*y*x+m*M*E,this._y=m*M*x-g*y*E,this._z=m*y*E+g*M*x,this._w=m*y*x-g*M*E;break;case"YXZ":this._x=g*y*x+m*M*E,this._y=m*M*x-g*y*E,this._z=m*y*E-g*M*x,this._w=m*y*x+g*M*E;break;case"ZXY":this._x=g*y*x-m*M*E,this._y=m*M*x+g*y*E,this._z=m*y*E+g*M*x,this._w=m*y*x-g*M*E;break;case"ZYX":this._x=g*y*x-m*M*E,this._y=m*M*x+g*y*E,this._z=m*y*E-g*M*x,this._w=m*y*x+g*M*E;break;case"YZX":this._x=g*y*x+m*M*E,this._y=m*M*x+g*y*E,this._z=m*y*E-g*M*x,this._w=m*y*x-g*M*E;break;case"XZY":this._x=g*y*x-m*M*E,this._y=m*M*x-g*y*E,this._z=m*y*E+g*M*x,this._w=m*y*x+g*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],u=n[1],f=n[5],h=n[9],m=n[2],y=n[6],x=n[10],g=r+f+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(y-h)*M,this._y=(l-m)*M,this._z=(u-a)*M}else if(r>f&&r>x){const M=2*Math.sqrt(1+r-f-x);this._w=(y-h)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(l+m)/M}else if(f>x){const M=2*Math.sqrt(1+f-r-x);this._w=(l-m)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(h+y)/M}else{const M=2*Math.sqrt(1+x-r-f);this._w=(u-a)/M,this._x=(l+m)/M,this._y=(h+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,u=e._w,f=n._x,h=n._y,m=n._z,y=n._w;return this._x=r*y+u*f+a*m-l*h,this._y=a*y+u*h+l*f-r*m,this._z=l*y+u*m+r*h-a*f,this._w=u*y-r*f-a*h-l*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,u=this._w;let f=u*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const M=1-n;return this._w=M*u+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*l+n*this._z,this.normalize(),this}const m=Math.sqrt(h),y=Math.atan2(m,f),x=Math.sin((1-n)*y)/m,g=Math.sin(n*y)/m;return this._w=u*x+this._w*g,this._x=r*x+this._x*g,this._y=a*x+this._y*g,this._z=l*x+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(tm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(tm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,u=e.y,f=e.z,h=e.w,m=2*(u*a-f*r),y=2*(f*n-l*a),x=2*(l*r-u*n);return this.x=n+h*m+u*x-f*y,this.y=r+h*y+f*m-l*x,this.z=a+h*x+l*y-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,u=n.x,f=n.y,h=n.z;return this.x=a*h-l*f,this.y=l*u-r*h,this.z=r*f-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Lu.copy(this).projectOnVector(e),this.sub(Lu)}reflect(e){return this.sub(Lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lu=new Z,tm=new Ko;class Zo{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ai):ai.fromBufferAttribute(l,u),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),al.copy(r.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),ll.subVectors(this.max,Oo),Rs.subVectors(e.a,Oo),Ps.subVectors(e.b,Oo),Ns.subVectors(e.c,Oo),fr.subVectors(Ps,Rs),hr.subVectors(Ns,Ps),Or.subVectors(Rs,Ns);let n=[0,-fr.z,fr.y,0,-hr.z,hr.y,0,-Or.z,Or.y,fr.z,0,-fr.x,hr.z,0,-hr.x,Or.z,0,-Or.x,-fr.y,fr.x,0,-hr.y,hr.x,0,-Or.y,Or.x,0];return!Iu(n,Rs,Ps,Ns,ll)||(n=[1,0,0,0,1,0,0,0,1],!Iu(n,Rs,Ps,Ns,ll))?!1:(cl.crossVectors(fr,hr),n=[cl.x,cl.y,cl.z],Iu(n,Rs,Ps,Ns,ll))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ai=new Z,al=new Zo,Rs=new Z,Ps=new Z,Ns=new Z,fr=new Z,hr=new Z,Or=new Z,Oo=new Z,ll=new Z,cl=new Z,zr=new Z;function Iu(s,e,n,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){zr.fromArray(s,l);const f=a.x*Math.abs(zr.x)+a.y*Math.abs(zr.y)+a.z*Math.abs(zr.z),h=e.dot(zr),m=n.dot(zr),y=r.dot(zr);if(Math.max(-Math.max(h,m,y),Math.min(h,m,y))>f)return!1}return!0}const Wv=new Zo,zo=new Z,Uu=new Z;class Gl{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Wv.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(zo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(Uu)),this.expandByPoint(zo.copy(e.center).sub(Uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new Z,Fu=new Z,ul=new Z,pr=new Z,ku=new Z,dl=new Z,Ou=new Z;class ug{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Fu.copy(e).add(n).multiplyScalar(.5),ul.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(Fu);const l=e.distanceTo(n)*.5,u=-this.direction.dot(ul),f=pr.dot(this.direction),h=-pr.dot(ul),m=pr.lengthSq(),y=Math.abs(1-u*u);let x,g,M,E;if(y>0)if(x=u*h-f,g=u*f-h,E=l*y,x>=0)if(g>=-E)if(g<=E){const b=1/y;x*=b,g*=b,M=x*(x+u*g+2*f)+g*(u*x+g+2*h)+m}else g=l,x=Math.max(0,-(u*g+f)),M=-x*x+g*(g+2*h)+m;else g=-l,x=Math.max(0,-(u*g+f)),M=-x*x+g*(g+2*h)+m;else g<=-E?(x=Math.max(0,-(-u*l+f)),g=x>0?-l:Math.min(Math.max(-l,-h),l),M=-x*x+g*(g+2*h)+m):g<=E?(x=0,g=Math.min(Math.max(-l,-h),l),M=g*(g+2*h)+m):(x=Math.max(0,-(u*l+f)),g=x>0?l:Math.min(Math.max(-l,-h),l),M=-x*x+g*(g+2*h)+m);else g=u>0?-l:l,x=Math.max(0,-(u*g+f)),M=-x*x+g*(g+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Fu).addScaledVector(ul,g),M}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),a=Ii.dot(Ii)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,u,f,h;const m=1/this.direction.x,y=1/this.direction.y,x=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,a=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,a=(e.min.x-g.x)*m),y>=0?(l=(e.min.y-g.y)*y,u=(e.max.y-g.y)*y):(l=(e.max.y-g.y)*y,u=(e.min.y-g.y)*y),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),x>=0?(f=(e.min.z-g.z)*x,h=(e.max.z-g.z)*x):(f=(e.max.z-g.z)*x,h=(e.min.z-g.z)*x),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,a,l){ku.subVectors(n,e),dl.subVectors(r,e),Ou.crossVectors(ku,dl);let u=this.direction.dot(Ou),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;pr.subVectors(this.origin,e);const h=f*this.direction.dot(dl.crossVectors(pr,dl));if(h<0)return null;const m=f*this.direction.dot(ku.cross(pr));if(m<0||h+m>u)return null;const y=-f*pr.dot(Ou);return y<0?null:this.at(y/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,n,r,a,l,u,f,h,m,y,x,g,M,E,b,_){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,u,f,h,m,y,x,g,M,E,b,_)}set(e,n,r,a,l,u,f,h,m,y,x,g,M,E,b,_){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=a,v[1]=l,v[5]=u,v[9]=f,v[13]=h,v[2]=m,v[6]=y,v[10]=x,v[14]=g,v[3]=M,v[7]=E,v[11]=b,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ds.setFromMatrixColumn(e,0).length(),l=1/Ds.setFromMatrixColumn(e,1).length(),u=1/Ds.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(a),m=Math.sin(a),y=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const g=u*y,M=u*x,E=f*y,b=f*x;n[0]=h*y,n[4]=-h*x,n[8]=m,n[1]=M+E*m,n[5]=g-b*m,n[9]=-f*h,n[2]=b-g*m,n[6]=E+M*m,n[10]=u*h}else if(e.order==="YXZ"){const g=h*y,M=h*x,E=m*y,b=m*x;n[0]=g+b*f,n[4]=E*f-M,n[8]=u*m,n[1]=u*x,n[5]=u*y,n[9]=-f,n[2]=M*f-E,n[6]=b+g*f,n[10]=u*h}else if(e.order==="ZXY"){const g=h*y,M=h*x,E=m*y,b=m*x;n[0]=g-b*f,n[4]=-u*x,n[8]=E+M*f,n[1]=M+E*f,n[5]=u*y,n[9]=b-g*f,n[2]=-u*m,n[6]=f,n[10]=u*h}else if(e.order==="ZYX"){const g=u*y,M=u*x,E=f*y,b=f*x;n[0]=h*y,n[4]=E*m-M,n[8]=g*m+b,n[1]=h*x,n[5]=b*m+g,n[9]=M*m-E,n[2]=-m,n[6]=f*h,n[10]=u*h}else if(e.order==="YZX"){const g=u*h,M=u*m,E=f*h,b=f*m;n[0]=h*y,n[4]=b-g*x,n[8]=E*x+M,n[1]=x,n[5]=u*y,n[9]=-f*y,n[2]=-m*y,n[6]=M*x+E,n[10]=g-b*x}else if(e.order==="XZY"){const g=u*h,M=u*m,E=f*h,b=f*m;n[0]=h*y,n[4]=-x,n[8]=m*y,n[1]=g*x+b,n[5]=u*y,n[9]=M*x-E,n[2]=E*x-M,n[6]=f*y,n[10]=b*x+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xv,e,qv)}lookAt(e,n,r){const a=this.elements;return Vn.subVectors(e,n),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),mr.crossVectors(r,Vn),mr.lengthSq()===0&&(Math.abs(r.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),mr.crossVectors(r,Vn)),mr.normalize(),fl.crossVectors(Vn,mr),a[0]=mr.x,a[4]=fl.x,a[8]=Vn.x,a[1]=mr.y,a[5]=fl.y,a[9]=Vn.y,a[2]=mr.z,a[6]=fl.z,a[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,u=r[0],f=r[4],h=r[8],m=r[12],y=r[1],x=r[5],g=r[9],M=r[13],E=r[2],b=r[6],_=r[10],v=r[14],D=r[3],L=r[7],R=r[11],G=r[15],O=a[0],k=a[4],V=a[8],N=a[12],C=a[1],B=a[5],ie=a[9],Q=a[13],de=a[2],he=a[6],ce=a[10],me=a[14],X=a[3],pe=a[7],I=a[11],w=a[15];return l[0]=u*O+f*C+h*de+m*X,l[4]=u*k+f*B+h*he+m*pe,l[8]=u*V+f*ie+h*ce+m*I,l[12]=u*N+f*Q+h*me+m*w,l[1]=y*O+x*C+g*de+M*X,l[5]=y*k+x*B+g*he+M*pe,l[9]=y*V+x*ie+g*ce+M*I,l[13]=y*N+x*Q+g*me+M*w,l[2]=E*O+b*C+_*de+v*X,l[6]=E*k+b*B+_*he+v*pe,l[10]=E*V+b*ie+_*ce+v*I,l[14]=E*N+b*Q+_*me+v*w,l[3]=D*O+L*C+R*de+G*X,l[7]=D*k+L*B+R*he+G*pe,l[11]=D*V+L*ie+R*ce+G*I,l[15]=D*N+L*Q+R*me+G*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],u=e[1],f=e[5],h=e[9],m=e[13],y=e[2],x=e[6],g=e[10],M=e[14],E=e[3],b=e[7],_=e[11],v=e[15];return E*(+l*h*x-a*m*x-l*f*g+r*m*g+a*f*M-r*h*M)+b*(+n*h*M-n*m*g+l*u*g-a*u*M+a*m*y-l*h*y)+_*(+n*m*x-n*f*M-l*u*x+r*u*M+l*f*y-r*m*y)+v*(-a*f*y-n*h*x+n*f*g+a*u*x-r*u*g+r*h*y)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],y=e[8],x=e[9],g=e[10],M=e[11],E=e[12],b=e[13],_=e[14],v=e[15],D=x*_*m-b*g*m+b*h*M-f*_*M-x*h*v+f*g*v,L=E*g*m-y*_*m-E*h*M+u*_*M+y*h*v-u*g*v,R=y*b*m-E*x*m+E*f*M-u*b*M-y*f*v+u*x*v,G=E*x*h-y*b*h-E*f*g+u*b*g+y*f*_-u*x*_,O=n*D+r*L+a*R+l*G;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/O;return e[0]=D*k,e[1]=(b*g*l-x*_*l-b*a*M+r*_*M+x*a*v-r*g*v)*k,e[2]=(f*_*l-b*h*l+b*a*m-r*_*m-f*a*v+r*h*v)*k,e[3]=(x*h*l-f*g*l-x*a*m+r*g*m+f*a*M-r*h*M)*k,e[4]=L*k,e[5]=(y*_*l-E*g*l+E*a*M-n*_*M-y*a*v+n*g*v)*k,e[6]=(E*h*l-u*_*l-E*a*m+n*_*m+u*a*v-n*h*v)*k,e[7]=(u*g*l-y*h*l+y*a*m-n*g*m-u*a*M+n*h*M)*k,e[8]=R*k,e[9]=(E*x*l-y*b*l-E*r*M+n*b*M+y*r*v-n*x*v)*k,e[10]=(u*b*l-E*f*l+E*r*m-n*b*m-u*r*v+n*f*v)*k,e[11]=(y*f*l-u*x*l-y*r*m+n*x*m+u*r*M-n*f*M)*k,e[12]=G*k,e[13]=(y*b*a-E*x*a+E*r*g-n*b*g-y*r*_+n*x*_)*k,e[14]=(E*f*a-u*b*a-E*r*h+n*b*h+u*r*_-n*f*_)*k,e[15]=(u*x*a-y*f*a+y*r*h-n*x*h-u*r*g+n*f*g)*k,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,u=e.x,f=e.y,h=e.z,m=l*u,y=l*f;return this.set(m*u+r,m*f-a*h,m*h+a*f,0,m*f+a*h,y*f+r,y*h-a*u,0,m*h-a*f,y*h+a*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,u=n._y,f=n._z,h=n._w,m=l+l,y=u+u,x=f+f,g=l*m,M=l*y,E=l*x,b=u*y,_=u*x,v=f*x,D=h*m,L=h*y,R=h*x,G=r.x,O=r.y,k=r.z;return a[0]=(1-(b+v))*G,a[1]=(M+R)*G,a[2]=(E-L)*G,a[3]=0,a[4]=(M-R)*O,a[5]=(1-(g+v))*O,a[6]=(_+D)*O,a[7]=0,a[8]=(E+L)*k,a[9]=(_-D)*k,a[10]=(1-(g+b))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Ds.set(a[0],a[1],a[2]).length();const u=Ds.set(a[4],a[5],a[6]).length(),f=Ds.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],li.copy(this);const m=1/l,y=1/u,x=1/f;return li.elements[0]*=m,li.elements[1]*=m,li.elements[2]*=m,li.elements[4]*=y,li.elements[5]*=y,li.elements[6]*=y,li.elements[8]*=x,li.elements[9]*=x,li.elements[10]*=x,n.setFromRotationMatrix(li),r.x=l,r.y=u,r.z=f,this}makePerspective(e,n,r,a,l,u,f=Hi){const h=this.elements,m=2*l/(n-e),y=2*l/(r-a),x=(n+e)/(n-e),g=(r+a)/(r-a);let M,E;if(f===Hi)M=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(f===kl)M=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=y,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,u,f=Hi){const h=this.elements,m=1/(n-e),y=1/(r-a),x=1/(u-l),g=(n+e)*m,M=(r+a)*y;let E,b;if(f===Hi)E=(u+l)*x,b=-2*x;else if(f===kl)E=l*x,b=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-g,h[1]=0,h[5]=2*y,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=b,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ds=new Z,li=new Vt,Xv=new Z(0,0,0),qv=new Z(1,1,1),mr=new Z,fl=new Z,Vn=new Z,nm=new Vt,im=new Ko;class Si{constructor(e=0,n=0,r=0,a=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],h=a[1],m=a[5],y=a[9],x=a[2],g=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-y,m),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-y,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return im.setFromEuler(this),this.setFromQuaternion(im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class dg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yv=0;const rm=new Z,Ls=new Ko,Ui=new Vt,hl=new Z,Bo=new Z,$v=new Z,Kv=new Ko,sm=new Z(1,0,0),om=new Z(0,1,0),am=new Z(0,0,1),lm={type:"added"},Zv={type:"removed"},Is={type:"childadded",child:null},zu={type:"childremoved",child:null};class hn extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new Z,n=new Si,r=new Ko,a=new Z(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Vt},normalMatrix:{value:new pt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(sm,e)}rotateY(e){return this.rotateOnAxis(om,e)}rotateZ(e){return this.rotateOnAxis(am,e)}translateOnAxis(e,n){return rm.copy(e).applyQuaternion(this.quaternion),this.position.add(rm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(sm,e)}translateY(e){return this.translateOnAxis(om,e)}translateZ(e){return this.translateOnAxis(am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?hl.copy(e):hl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Bo,hl,this.up):Ui.lookAt(hl,Bo,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Ls.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lm),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Zv),zu.child=e,this.dispatchEvent(zu),zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lm),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,$v),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,Kv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,y=h.length;m<y;m++){const x=h[m];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(n){const f=u(e.geometries),h=u(e.materials),m=u(e.textures),y=u(e.images),x=u(e.shapes),g=u(e.skeletons),M=u(e.animations),E=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),y.length>0&&(r.images=y),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=a,r;function u(f){const h=[];for(const m in f){const y=f[m];delete y.metadata,h.push(y)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}hn.DEFAULT_UP=new Z(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new Z,Fi=new Z,Bu=new Z,ki=new Z,Us=new Z,Fs=new Z,cm=new Z,Hu=new Z,Vu=new Z,Gu=new Z,ju=new Dt,Wu=new Dt,Xu=new Dt;class ui{constructor(e=new Z,n=new Z,r=new Z){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ci.subVectors(e,n),a.cross(ci);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){ci.subVectors(a,n),Fi.subVectors(r,n),Bu.subVectors(e,n);const u=ci.dot(ci),f=ci.dot(Fi),h=ci.dot(Bu),m=Fi.dot(Fi),y=Fi.dot(Bu),x=u*m-f*f;if(x===0)return l.set(0,0,0),null;const g=1/x,M=(m*h-f*y)*g,E=(u*y-f*h)*g;return l.set(1-M-E,E,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,n,r,a,l,u,f,h){return this.getBarycoord(e,n,r,a,ki)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,ki.x),h.addScaledVector(u,ki.y),h.addScaledVector(f,ki.z),h)}static getInterpolatedAttribute(e,n,r,a,l,u){return ju.setScalar(0),Wu.setScalar(0),Xu.setScalar(0),ju.fromBufferAttribute(e,n),Wu.fromBufferAttribute(e,r),Xu.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(ju,l.x),u.addScaledVector(Wu,l.y),u.addScaledVector(Xu,l.z),u}static isFrontFacing(e,n,r,a){return ci.subVectors(r,n),Fi.subVectors(e,n),ci.cross(Fi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ci.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return ui.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let u,f;Us.subVectors(a,r),Fs.subVectors(l,r),Hu.subVectors(e,r);const h=Us.dot(Hu),m=Fs.dot(Hu);if(h<=0&&m<=0)return n.copy(r);Vu.subVectors(e,a);const y=Us.dot(Vu),x=Fs.dot(Vu);if(y>=0&&x<=y)return n.copy(a);const g=h*x-y*m;if(g<=0&&h>=0&&y<=0)return u=h/(h-y),n.copy(r).addScaledVector(Us,u);Gu.subVectors(e,l);const M=Us.dot(Gu),E=Fs.dot(Gu);if(E>=0&&M<=E)return n.copy(l);const b=M*m-h*E;if(b<=0&&m>=0&&E<=0)return f=m/(m-E),n.copy(r).addScaledVector(Fs,f);const _=y*E-M*x;if(_<=0&&x-y>=0&&M-E>=0)return cm.subVectors(l,a),f=(x-y)/(x-y+(M-E)),n.copy(a).addScaledVector(cm,f);const v=1/(_+b+g);return u=b*v,f=g*v,n.copy(r).addScaledVector(Us,u).addScaledVector(Fs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},pl={h:0,s:0,l:0};function qu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class gt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Rt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Rt.workingColorSpace){if(e=Iv(e,1),n=Mt(n,0,1),r=Mt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=qu(u,l,e+1/3),this.g=qu(u,l,e),this.b=qu(u,l,e-1/3)}return Rt.toWorkingColorSpace(this,a),this}setStyle(e,n=Qn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const r=fg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return Rt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(Mt(Sn.r*255,0,255))*65536+Math.round(Mt(Sn.g*255,0,255))*256+Math.round(Mt(Sn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.fromWorkingColorSpace(Sn.copy(this),n);const r=Sn.r,a=Sn.g,l=Sn.b,u=Math.max(r,a,l),f=Math.min(r,a,l);let h,m;const y=(f+u)/2;if(f===u)h=0,m=0;else{const x=u-f;switch(m=y<=.5?x/(u+f):x/(2-u-f),u){case r:h=(a-l)/x+(a<l?6:0);break;case a:h=(l-r)/x+2;break;case l:h=(r-a)/x+4;break}h/=6}return e.h=h,e.s=m,e.l=y,e}getRGB(e,n=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(Sn.copy(this),n),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Qn){Rt.fromWorkingColorSpace(Sn.copy(this),e);const n=Sn.r,r=Sn.g,a=Sn.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(pl);const r=Pu(gr.h,pl.h,n),a=Pu(gr.s,pl.s,n),l=Pu(gr.l,pl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new gt;gt.NAMES=fg;let Qv=0;class to extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Vs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ld&&(r.blendSrc=this.blendSrc),this.blendDst!==cd&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$p&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(n){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zs extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Ym,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new Z,ml=new yt;let Jv=0;class Jn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Kp,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ml.fromBufferAttribute(this,n),ml.applyMatrix3(e),this.setXY(n,ml.x,ml.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix3(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ko(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ko(n,this.array)),n}setX(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ko(n,this.array)),n}setY(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ko(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ko(n,this.array)),n}setW(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array),a=Un(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array),a=Un(a,this.array),l=Un(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kp&&(e.usage=this.usage),e}}class hg extends Jn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class pg extends Jn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class en extends Jn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let e_=0;const Zn=new Vt,Yu=new hn,ks=new Z,Gn=new Zo,Ho=new Zo,cn=new Z;class jn extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lg(e)?pg:hg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new pt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,r){return Zn.makeTranslation(e,n,r),this.applyMatrix4(Zn),this}scale(e,n,r){return Zn.makeScale(e,n,r),this.applyMatrix4(Zn),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new en(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];Ho.setFromBufferAttribute(f),this.morphTargetsRelative?(cn.addVectors(Gn.min,Ho.min),Gn.expandByPoint(cn),cn.addVectors(Gn.max,Ho.max),Gn.expandByPoint(cn)):(Gn.expandByPoint(Ho.min),Gn.expandByPoint(Ho.max))}Gn.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)cn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(cn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],h=this.morphTargetsRelative;for(let m=0,y=f.count;m<y;m++)cn.fromBufferAttribute(f,m),h&&(ks.fromBufferAttribute(e,m),cn.add(ks)),a=Math.max(a,r.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let V=0;V<r.count;V++)f[V]=new Z,h[V]=new Z;const m=new Z,y=new Z,x=new Z,g=new yt,M=new yt,E=new yt,b=new Z,_=new Z;function v(V,N,C){m.fromBufferAttribute(r,V),y.fromBufferAttribute(r,N),x.fromBufferAttribute(r,C),g.fromBufferAttribute(l,V),M.fromBufferAttribute(l,N),E.fromBufferAttribute(l,C),y.sub(m),x.sub(m),M.sub(g),E.sub(g);const B=1/(M.x*E.y-E.x*M.y);isFinite(B)&&(b.copy(y).multiplyScalar(E.y).addScaledVector(x,-M.y).multiplyScalar(B),_.copy(x).multiplyScalar(M.x).addScaledVector(y,-E.x).multiplyScalar(B),f[V].add(b),f[N].add(b),f[C].add(b),h[V].add(_),h[N].add(_),h[C].add(_))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let V=0,N=D.length;V<N;++V){const C=D[V],B=C.start,ie=C.count;for(let Q=B,de=B+ie;Q<de;Q+=3)v(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const L=new Z,R=new Z,G=new Z,O=new Z;function k(V){G.fromBufferAttribute(a,V),O.copy(G);const N=f[V];L.copy(N),L.sub(G.multiplyScalar(G.dot(N))).normalize(),R.crossVectors(O,N);const B=R.dot(h[V])<0?-1:1;u.setXYZW(V,L.x,L.y,L.z,B)}for(let V=0,N=D.length;V<N;++V){const C=D[V],B=C.start,ie=C.count;for(let Q=B,de=B+ie;Q<de;Q+=3)k(e.getX(Q+0)),k(e.getX(Q+1)),k(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const a=new Z,l=new Z,u=new Z,f=new Z,h=new Z,m=new Z,y=new Z,x=new Z;if(e)for(let g=0,M=e.count;g<M;g+=3){const E=e.getX(g+0),b=e.getX(g+1),_=e.getX(g+2);a.fromBufferAttribute(n,E),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,_),y.subVectors(u,l),x.subVectors(a,l),y.cross(x),f.fromBufferAttribute(r,E),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,_),f.add(y),h.add(y),m.add(y),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let g=0,M=n.count;g<M;g+=3)a.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),y.subVectors(u,l),x.subVectors(a,l),y.cross(x),r.setXYZ(g+0,y.x,y.y,y.z),r.setXYZ(g+1,y.x,y.y,y.z),r.setXYZ(g+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)cn.fromBufferAttribute(e,n),cn.normalize(),e.setXYZ(n,cn.x,cn.y,cn.z)}toNonIndexed(){function e(f,h){const m=f.array,y=f.itemSize,x=f.normalized,g=new m.constructor(h.length*y);let M=0,E=0;for(let b=0,_=h.length;b<_;b++){f.isInterleavedBufferAttribute?M=h[b]*f.data.stride+f.offset:M=h[b]*y;for(let v=0;v<y;v++)g[E++]=m[M++]}return new Jn(g,y,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jn,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],m=e(h,r);n.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const h=[],m=l[f];for(let y=0,x=m.length;y<x;y++){const g=m[y],M=e(g,r);h.push(M)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],y=[];for(let x=0,g=m.length;x<g;x++){const M=m[x];y.push(M.toJSON(e.data))}y.length>0&&(a[h]=y,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const y=a[m];this.setAttribute(m,y.clone(n))}const l=e.morphAttributes;for(const m in l){const y=[],x=l[m];for(let g=0,M=x.length;g<M;g++)y.push(x[g].clone(n));this.morphAttributes[m]=y}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,y=u.length;m<y;m++){const x=u[m];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const um=new Vt,Br=new ug,gl=new Gl,dm=new Z,xl=new Z,vl=new Z,_l=new Z,$u=new Z,yl=new Z,fm=new Z,Sl=new Z;class Ht extends hn{constructor(e=new jn,n=new Zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){yl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const y=f[h],x=l[h];y!==0&&($u.fromBufferAttribute(x,e),u?yl.addScaledVector($u,y):yl.addScaledVector($u.sub(n),y))}n.add(yl)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gl.copy(r.boundingSphere),gl.applyMatrix4(l),Br.copy(e.ray).recast(e.near),!(gl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(gl,dm)===null||Br.origin.distanceToSquared(dm)>(e.far-e.near)**2))&&(um.copy(l).invert(),Br.copy(e.ray).applyMatrix4(um),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,r){let a;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,m=l.attributes.uv,y=l.attributes.uv1,x=l.attributes.normal,g=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,b=g.length;E<b;E++){const _=g[E],v=u[_.materialIndex],D=Math.max(_.start,M.start),L=Math.min(f.count,Math.min(_.start+_.count,M.start+M.count));for(let R=D,G=L;R<G;R+=3){const O=f.getX(R),k=f.getX(R+1),V=f.getX(R+2);a=Ml(this,v,e,r,m,y,x,O,k,V),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const E=Math.max(0,M.start),b=Math.min(f.count,M.start+M.count);for(let _=E,v=b;_<v;_+=3){const D=f.getX(_),L=f.getX(_+1),R=f.getX(_+2);a=Ml(this,u,e,r,m,y,x,D,L,R),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,b=g.length;E<b;E++){const _=g[E],v=u[_.materialIndex],D=Math.max(_.start,M.start),L=Math.min(h.count,Math.min(_.start+_.count,M.start+M.count));for(let R=D,G=L;R<G;R+=3){const O=R,k=R+1,V=R+2;a=Ml(this,v,e,r,m,y,x,O,k,V),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const E=Math.max(0,M.start),b=Math.min(h.count,M.start+M.count);for(let _=E,v=b;_<v;_+=3){const D=_,L=_+1,R=_+2;a=Ml(this,u,e,r,m,y,x,D,L,R),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function t_(s,e,n,r,a,l,u,f){let h;if(e.side===kn?h=r.intersectTriangle(u,l,a,!0,f):h=r.intersectTriangle(a,l,u,e.side===Mr,f),h===null)return null;Sl.copy(f),Sl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Sl);return m<n.near||m>n.far?null:{distance:m,point:Sl.clone(),object:s}}function Ml(s,e,n,r,a,l,u,f,h,m){s.getVertexPosition(f,xl),s.getVertexPosition(h,vl),s.getVertexPosition(m,_l);const y=t_(s,e,n,r,xl,vl,_l,fm);if(y){const x=new Z;ui.getBarycoord(fm,xl,vl,_l,x),a&&(y.uv=ui.getInterpolatedAttribute(a,f,h,m,x,new yt)),l&&(y.uv1=ui.getInterpolatedAttribute(l,f,h,m,x,new yt)),u&&(y.normal=ui.getInterpolatedAttribute(u,f,h,m,x,new Z),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const g={a:f,b:h,c:m,normal:new Z,materialIndex:0};ui.getNormal(xl,vl,_l,g.normal),y.face=g,y.barycoord=x}return y}class ts extends jn{constructor(e=1,n=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],m=[],y=[],x=[];let g=0,M=0;E("z","y","x",-1,-1,r,n,e,u,l,0),E("z","y","x",1,-1,r,n,-e,u,l,1),E("x","z","y",1,1,e,r,n,a,u,2),E("x","z","y",1,-1,e,r,-n,a,u,3),E("x","y","z",1,-1,e,n,r,a,l,4),E("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new en(m,3)),this.setAttribute("normal",new en(y,3)),this.setAttribute("uv",new en(x,2));function E(b,_,v,D,L,R,G,O,k,V,N){const C=R/k,B=G/V,ie=R/2,Q=G/2,de=O/2,he=k+1,ce=V+1;let me=0,X=0;const pe=new Z;for(let I=0;I<ce;I++){const w=I*B-Q;for(let H=0;H<he;H++){const J=H*C-ie;pe[b]=J*D,pe[_]=w*L,pe[v]=de,m.push(pe.x,pe.y,pe.z),pe[b]=0,pe[_]=0,pe[v]=O>0?1:-1,y.push(pe.x,pe.y,pe.z),x.push(H/k),x.push(1-I/V),me+=1}}for(let I=0;I<V;I++)for(let w=0;w<k;w++){const H=g+w+he*I,J=g+w+he*(I+1),j=g+(w+1)+he*(I+1),ee=g+(w+1)+he*I;h.push(H,J,ee),h.push(J,j,ee),X+=6}f.addGroup(M,X,N),M+=X,g+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function bn(s){const e={};for(let n=0;n<s.length;n++){const r=Qs(s[n]);for(const a in r)e[a]=r[a]}return e}function n_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function mg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const i_={clone:Qs,merge:bn};var r_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r_,this.fragmentShader=s_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=n_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class gg extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new Z,hm=new yt,pm=new yt;class Fn extends gg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qd*2*Math.atan(Math.tan(Ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,hm,pm),n.subVectors(pm,hm)}setViewOffset(e,n,r,a,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ru*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;l+=u.offsetX*a/h,n-=u.offsetY*r/m,a*=u.width/h,r*=u.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Os=-90,zs=1;class o_ extends hn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Fn(Os,zs,e,n);a.layers=this.layers,this.add(a);const l=new Fn(Os,zs,e,n);l.layers=this.layers,this.add(l);const u=new Fn(Os,zs,e,n);u.layers=this.layers,this.add(u);const f=new Fn(Os,zs,e,n);f.layers=this.layers,this.add(f);const h=new Fn(Os,zs,e,n);h.layers=this.layers,this.add(h);const m=new Fn(Os,zs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,u,f,h]=n;for(const m of n)this.remove(m);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===kl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,m,y]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,u),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,a),e.render(n,y),e.setRenderTarget(x,g,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class xg extends An{constructor(e,n,r,a,l,u,f,h,m,y){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,r,a,l,u,f,h,m,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class a_ extends es{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new xg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ts(5,5,5),l=new wr({name:"CubemapFromEquirect",uniforms:Qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:yr});l.uniforms.tEquirect.value=n;const u=new Ht(a,l),f=n.minFilter;return n.minFilter===Zr&&(n.minFilter=yi),new o_(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,a){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(l)}}class Qr extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l_={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,u=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const b of e.hand.values()){const _=n.getJointPose(b,r),v=this._getHandJoint(m,b);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const y=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],g=y.position.distanceTo(x.position),M=.02,E=.005;m.inputState.pinching&&g>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(l_)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Qr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class lf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new gt(e),this.density=n}clone(){return new lf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vg extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zu=new Z,c_=new Z,u_=new pt;class Xr{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Zu.subVectors(r,n).cross(c_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Zu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||u_.getNormalMatrix(e),a=this.coplanarPoint(Zu).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Gl,wl=new Z;class cf{constructor(e=new Xr,n=new Xr,r=new Xr,a=new Xr,l=new Xr,u=new Xr){this.planes=[e,n,r,a,l,u]}set(e,n,r,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Hi){const r=this.planes,a=e.elements,l=a[0],u=a[1],f=a[2],h=a[3],m=a[4],y=a[5],x=a[6],g=a[7],M=a[8],E=a[9],b=a[10],_=a[11],v=a[12],D=a[13],L=a[14],R=a[15];if(r[0].setComponents(h-l,g-m,_-M,R-v).normalize(),r[1].setComponents(h+l,g+m,_+M,R+v).normalize(),r[2].setComponents(h+u,g+y,_+E,R+D).normalize(),r[3].setComponents(h-u,g-y,_-E,R-D).normalize(),r[4].setComponents(h-f,g-x,_-b,R-L).normalize(),n===Hi)r[5].setComponents(h+f,g+x,_+b,R+L).normalize();else if(n===kl)r[5].setComponents(f,x,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(wl.x=a.normal.x>0?e.max.x:e.min.x,wl.y=a.normal.y>0?e.max.y:e.min.y,wl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _g extends to{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mm=new Vt,Yd=new ug,El=new Gl,Tl=new Z;class d_ extends hn{constructor(e=new jn,n=new _g){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),El.copy(r.boundingSphere),El.applyMatrix4(a),El.radius+=l,e.ray.intersectsSphere(El)===!1)return;mm.copy(a).invert(),Yd.copy(e.ray).applyMatrix4(mm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=r.index,x=r.attributes.position;if(m!==null){const g=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let E=g,b=M;E<b;E++){const _=m.getX(E);Tl.fromBufferAttribute(x,_),gm(Tl,_,h,a,e,n,this)}}else{const g=Math.max(0,u.start),M=Math.min(x.count,u.start+u.count);for(let E=g,b=M;E<b;E++)Tl.fromBufferAttribute(x,E),gm(Tl,E,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function gm(s,e,n,r,a,l,u){const f=Yd.distanceSqToPoint(s);if(f<n){const h=new Z;Yd.closestPointToPoint(s,h),h.applyMatrix4(r);const m=a.ray.origin.distanceTo(h);if(m<a.near||m>a.far)return;l.push({distance:m,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class f_ extends An{constructor(e,n,r,a,l,u,f,h,m){super(e,n,r,a,l,u,f,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yg extends An{constructor(e,n,r,a,l,u,f,h,m,y=Gs){if(y!==Gs&&y!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&y===Gs&&(r=Jr),r===void 0&&y===$s&&(r=Ys),super(null,a,l,u,f,h,y,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:fi,this.minFilter=h!==void 0?h:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new af(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class uf extends jn{constructor(e=1,n=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:a},n=Math.max(3,n);const l=[],u=[],f=[],h=[],m=new Z,y=new yt;u.push(0,0,0),f.push(0,0,1),h.push(.5,.5);for(let x=0,g=3;x<=n;x++,g+=3){const M=r+x/n*a;m.x=e*Math.cos(M),m.y=e*Math.sin(M),u.push(m.x,m.y,m.z),f.push(0,0,1),y.x=(u[g]/e+1)/2,y.y=(u[g+1]/e+1)/2,h.push(y.x,y.y)}for(let x=1;x<=n;x++)l.push(x,x+1,0);this.setIndex(l),this.setAttribute("position",new en(u,3)),this.setAttribute("normal",new en(f,3)),this.setAttribute("uv",new en(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vr extends jn{constructor(e=1,n=1,r=1,a=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const m=this;a=Math.floor(a),l=Math.floor(l);const y=[],x=[],g=[],M=[];let E=0;const b=[],_=r/2;let v=0;D(),u===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(y),this.setAttribute("position",new en(x,3)),this.setAttribute("normal",new en(g,3)),this.setAttribute("uv",new en(M,2));function D(){const R=new Z,G=new Z;let O=0;const k=(n-e)/r;for(let V=0;V<=l;V++){const N=[],C=V/l,B=C*(n-e)+e;for(let ie=0;ie<=a;ie++){const Q=ie/a,de=Q*h+f,he=Math.sin(de),ce=Math.cos(de);G.x=B*he,G.y=-C*r+_,G.z=B*ce,x.push(G.x,G.y,G.z),R.set(he,k,ce).normalize(),g.push(R.x,R.y,R.z),M.push(Q,1-C),N.push(E++)}b.push(N)}for(let V=0;V<a;V++)for(let N=0;N<l;N++){const C=b[N][V],B=b[N+1][V],ie=b[N+1][V+1],Q=b[N][V+1];(e>0||N!==0)&&(y.push(C,B,Q),O+=3),(n>0||N!==l-1)&&(y.push(B,ie,Q),O+=3)}m.addGroup(v,O,0),v+=O}function L(R){const G=E,O=new yt,k=new Z;let V=0;const N=R===!0?e:n,C=R===!0?1:-1;for(let ie=1;ie<=a;ie++)x.push(0,_*C,0),g.push(0,C,0),M.push(.5,.5),E++;const B=E;for(let ie=0;ie<=a;ie++){const de=ie/a*h+f,he=Math.cos(de),ce=Math.sin(de);k.x=N*ce,k.y=_*C,k.z=N*he,x.push(k.x,k.y,k.z),g.push(0,C,0),O.x=he*.5+.5,O.y=ce*.5*C+.5,M.push(O.x,O.y),E++}for(let ie=0;ie<a;ie++){const Q=G+ie,de=B+ie;R===!0?y.push(de,de+1,Q):y.push(de+1,de,Q),V+=3}m.addGroup(v,V,R===!0?1:2),v+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class df extends jn{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const l=[],u=[];f(a),m(r),y(),this.setAttribute("position",new en(l,3)),this.setAttribute("normal",new en(l.slice(),3)),this.setAttribute("uv",new en(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(D){const L=new Z,R=new Z,G=new Z;for(let O=0;O<n.length;O+=3)M(n[O+0],L),M(n[O+1],R),M(n[O+2],G),h(L,R,G,D)}function h(D,L,R,G){const O=G+1,k=[];for(let V=0;V<=O;V++){k[V]=[];const N=D.clone().lerp(R,V/O),C=L.clone().lerp(R,V/O),B=O-V;for(let ie=0;ie<=B;ie++)ie===0&&V===O?k[V][ie]=N:k[V][ie]=N.clone().lerp(C,ie/B)}for(let V=0;V<O;V++)for(let N=0;N<2*(O-V)-1;N++){const C=Math.floor(N/2);N%2===0?(g(k[V][C+1]),g(k[V+1][C]),g(k[V][C])):(g(k[V][C+1]),g(k[V+1][C+1]),g(k[V+1][C]))}}function m(D){const L=new Z;for(let R=0;R<l.length;R+=3)L.x=l[R+0],L.y=l[R+1],L.z=l[R+2],L.normalize().multiplyScalar(D),l[R+0]=L.x,l[R+1]=L.y,l[R+2]=L.z}function y(){const D=new Z;for(let L=0;L<l.length;L+=3){D.x=l[L+0],D.y=l[L+1],D.z=l[L+2];const R=_(D)/2/Math.PI+.5,G=v(D)/Math.PI+.5;u.push(R,1-G)}E(),x()}function x(){for(let D=0;D<u.length;D+=6){const L=u[D+0],R=u[D+2],G=u[D+4],O=Math.max(L,R,G),k=Math.min(L,R,G);O>.9&&k<.1&&(L<.2&&(u[D+0]+=1),R<.2&&(u[D+2]+=1),G<.2&&(u[D+4]+=1))}}function g(D){l.push(D.x,D.y,D.z)}function M(D,L){const R=D*3;L.x=e[R+0],L.y=e[R+1],L.z=e[R+2]}function E(){const D=new Z,L=new Z,R=new Z,G=new Z,O=new yt,k=new yt,V=new yt;for(let N=0,C=0;N<l.length;N+=9,C+=6){D.set(l[N+0],l[N+1],l[N+2]),L.set(l[N+3],l[N+4],l[N+5]),R.set(l[N+6],l[N+7],l[N+8]),O.set(u[C+0],u[C+1]),k.set(u[C+2],u[C+3]),V.set(u[C+4],u[C+5]),G.copy(D).add(L).add(R).divideScalar(3);const B=_(G);b(O,C+0,D,B),b(k,C+2,L,B),b(V,C+4,R,B)}}function b(D,L,R,G){G<0&&D.x===1&&(u[L]=D.x-1),R.x===0&&R.z===0&&(u[L]=G/2/Math.PI+.5)}function _(D){return Math.atan2(D.z,-D.x)}function v(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new df(e.vertices,e.indices,e.radius,e.details)}}class zl extends df{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,l,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new zl(e.radius,e.detail)}}class jl extends jn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,u=n/2,f=Math.floor(r),h=Math.floor(a),m=f+1,y=h+1,x=e/f,g=n/h,M=[],E=[],b=[],_=[];for(let v=0;v<y;v++){const D=v*g-u;for(let L=0;L<m;L++){const R=L*x-l;E.push(R,-D,0),b.push(0,0,1),_.push(L/f),_.push(1-v/h)}}for(let v=0;v<h;v++)for(let D=0;D<f;D++){const L=D+m*v,R=D+m*(v+1),G=D+1+m*(v+1),O=D+1+m*v;M.push(L,R,O),M.push(R,G,O)}this.setIndex(M),this.setAttribute("position",new en(E,3)),this.setAttribute("normal",new en(b,3)),this.setAttribute("uv",new en(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xo extends jn{constructor(e=1,n=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const u=[],f=[],h=[],m=[],y=new Z,x=new Z,g=new Z;for(let M=0;M<=r;M++)for(let E=0;E<=a;E++){const b=E/a*l,_=M/r*Math.PI*2;x.x=(e+n*Math.cos(_))*Math.cos(b),x.y=(e+n*Math.cos(_))*Math.sin(b),x.z=n*Math.sin(_),f.push(x.x,x.y,x.z),y.x=e*Math.cos(b),y.y=e*Math.sin(b),g.subVectors(x,y).normalize(),h.push(g.x,g.y,g.z),m.push(E/a),m.push(M/r)}for(let M=1;M<=r;M++)for(let E=1;E<=a;E++){const b=(a+1)*M+E-1,_=(a+1)*(M-1)+E-1,v=(a+1)*(M-1)+E,D=(a+1)*M+E;u.push(b,_,D),u.push(_,v,D)}this.setIndex(u),this.setAttribute("position",new en(f,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Go extends to{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=og,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Il extends Go{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class h_ extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ev,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p_ extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ff extends hn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Qu=new Vt,xm=new Z,vm=new Z;class Sg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cf,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;xm.setFromMatrixPosition(e.matrixWorld),n.position.copy(xm),vm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(vm),n.updateMatrixWorld(),Qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _m=new Vt,Vo=new Z,Ju=new Z;class m_ extends Sg{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Vo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Vo),Ju.copy(r.position),Ju.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(Ju),r.updateMatrixWorld(),a.makeTranslation(-Vo.x,-Vo.y,-Vo.z),_m.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_m)}}class Bl extends ff{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new m_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Mg extends gg{constructor(e=-1,n=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=y*this.view.offsetY,h=f-y*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class g_ extends Sg{constructor(){super(new Mg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class x_ extends ff{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new g_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wg extends ff{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class v_ extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}let __=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ym(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=ym();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}};function ym(){return performance.now()}function Sm(s,e,n,r){const a=y_(r);switch(n){case Jm:return s*e;case tg:return s*e;case ng:return s*e*2;case ig:return s*e/a.components*a.byteLength;case rf:return s*e/a.components*a.byteLength;case rg:return s*e*2/a.components*a.byteLength;case sf:return s*e*2/a.components*a.byteLength;case eg:return s*e*3/a.components*a.byteLength;case di:return s*e*4/a.components*a.byteLength;case of:return s*e*4/a.components*a.byteLength;case Rl:case Pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nl:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Md:case Ed:return Math.max(s,16)*Math.max(e,8)/4;case Sd:case wd:return Math.max(s,8)*Math.max(e,8)/2;case Td:case bd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ad:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Id:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ll:case Vd:case Gd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case sg:case jd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wd:case Xd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function y_(s){switch(s){case Gi:case Km:return{byteLength:1,components:1};case Wo:case Zm:case Yo:return{byteLength:2,components:1};case tf:case nf:return{byteLength:2,components:4};case Jr:case ef:case Bi:return{byteLength:4,components:1};case Qm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Eg(){let s=null,e=!1,n=null,r=null;function a(l,u){n(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function S_(s){const e=new WeakMap;function n(f,h){const m=f.array,y=f.usage,x=m.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,m,y),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,h,m){const y=h.array,x=h.updateRanges;if(s.bindBuffer(m,f),x.length===0)s.bufferSubData(m,0,y);else{x.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<x.length;M++){const E=x[g],b=x[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++g,x[g]=b)}x.length=g+1;for(let M=0,E=x.length;M<E;M++){const b=x[M];s.bufferSubData(m,b.start*y.BYTES_PER_ELEMENT,y,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const y=e.get(f);(!y||y.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:a,remove:l,update:u}}var M_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w_=`#ifdef USE_ALPHAHASH
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
#endif`,E_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C_=`#ifdef USE_AOMAP
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
#endif`,R_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P_=`#ifdef USE_BATCHING
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
#endif`,N_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U_=`#ifdef USE_IRIDESCENCE
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
#endif`,F_=`#ifdef USE_BUMPMAP
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
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,W_=`#define PI 3.141592653589793
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
} // validated`,X_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q_=`vec3 transformedNormal = objectNormal;
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
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q_="gl_FragColor = linearToOutputTexel( gl_FragColor );",J_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ey=`#ifdef USE_ENVMAP
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
#endif`,ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ny=`#ifdef USE_ENVMAP
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
#endif`,iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
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
#endif`,sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cy=`#ifdef USE_GRADIENTMAP
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
}`,uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hy=`uniform bool receiveShadow;
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
#endif`,py=`#ifdef USE_ENVMAP
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
#endif`,my=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_y=`PhysicalMaterial material;
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
#endif`,yy=`struct PhysicalMaterial {
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
}`,Sy=`
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
#endif`,My=`#if defined( RE_IndirectDiffuse )
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
#endif`,wy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ey=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ty=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,by=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ay=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ry=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ny=`#if defined( USE_POINTS_UV )
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
#endif`,Dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ky=`#ifdef USE_MORPHTARGETS
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
#endif`,Oy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,By=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jy=`#ifdef USE_NORMALMAP
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
#endif`,Wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ky=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oS=`float getShadowMask() {
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
}`,aS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lS=`#ifdef USE_SKINNING
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
#endif`,cS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uS=`#ifdef USE_SKINNING
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
#endif`,dS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mS=`#ifdef USE_TRANSMISSION
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
#endif`,gS=`#ifdef USE_TRANSMISSION
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
#endif`,xS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MS=`uniform sampler2D t2D;
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
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ES=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AS=`#include <common>
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
}`,CS=`#if DEPTH_PACKING == 3200
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
}`,RS=`#define DISTANCE
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
}`,PS=`#define DISTANCE
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
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LS=`uniform float scale;
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
}`,IS=`uniform vec3 diffuse;
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
}`,US=`#include <common>
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
}`,FS=`uniform vec3 diffuse;
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
}`,kS=`#define LAMBERT
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
}`,OS=`#define LAMBERT
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
}`,zS=`#define MATCAP
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
}`,BS=`#define MATCAP
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
}`,HS=`#define NORMAL
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
}`,VS=`#define NORMAL
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
}`,GS=`#define PHONG
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
}`,jS=`#define PHONG
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
}`,WS=`#define STANDARD
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
}`,XS=`#define STANDARD
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
}`,qS=`#define TOON
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
}`,YS=`#define TOON
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
}`,$S=`uniform float size;
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
}`,KS=`uniform vec3 diffuse;
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
}`,ZS=`#include <common>
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
}`,QS=`uniform vec3 color;
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
}`,JS=`uniform float rotation;
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
}`,eM=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:M_,alphahash_pars_fragment:w_,alphamap_fragment:E_,alphamap_pars_fragment:T_,alphatest_fragment:b_,alphatest_pars_fragment:A_,aomap_fragment:C_,aomap_pars_fragment:R_,batching_pars_vertex:P_,batching_vertex:N_,begin_vertex:D_,beginnormal_vertex:L_,bsdfs:I_,iridescence_fragment:U_,bumpmap_pars_fragment:F_,clipping_planes_fragment:k_,clipping_planes_pars_fragment:O_,clipping_planes_pars_vertex:z_,clipping_planes_vertex:B_,color_fragment:H_,color_pars_fragment:V_,color_pars_vertex:G_,color_vertex:j_,common:W_,cube_uv_reflection_fragment:X_,defaultnormal_vertex:q_,displacementmap_pars_vertex:Y_,displacementmap_vertex:$_,emissivemap_fragment:K_,emissivemap_pars_fragment:Z_,colorspace_fragment:Q_,colorspace_pars_fragment:J_,envmap_fragment:ey,envmap_common_pars_fragment:ty,envmap_pars_fragment:ny,envmap_pars_vertex:iy,envmap_physical_pars_fragment:py,envmap_vertex:ry,fog_vertex:sy,fog_pars_vertex:oy,fog_fragment:ay,fog_pars_fragment:ly,gradientmap_pars_fragment:cy,lightmap_pars_fragment:uy,lights_lambert_fragment:dy,lights_lambert_pars_fragment:fy,lights_pars_begin:hy,lights_toon_fragment:my,lights_toon_pars_fragment:gy,lights_phong_fragment:xy,lights_phong_pars_fragment:vy,lights_physical_fragment:_y,lights_physical_pars_fragment:yy,lights_fragment_begin:Sy,lights_fragment_maps:My,lights_fragment_end:wy,logdepthbuf_fragment:Ey,logdepthbuf_pars_fragment:Ty,logdepthbuf_pars_vertex:by,logdepthbuf_vertex:Ay,map_fragment:Cy,map_pars_fragment:Ry,map_particle_fragment:Py,map_particle_pars_fragment:Ny,metalnessmap_fragment:Dy,metalnessmap_pars_fragment:Ly,morphinstance_vertex:Iy,morphcolor_vertex:Uy,morphnormal_vertex:Fy,morphtarget_pars_vertex:ky,morphtarget_vertex:Oy,normal_fragment_begin:zy,normal_fragment_maps:By,normal_pars_fragment:Hy,normal_pars_vertex:Vy,normal_vertex:Gy,normalmap_pars_fragment:jy,clearcoat_normal_fragment_begin:Wy,clearcoat_normal_fragment_maps:Xy,clearcoat_pars_fragment:qy,iridescence_pars_fragment:Yy,opaque_fragment:$y,packing:Ky,premultiplied_alpha_fragment:Zy,project_vertex:Qy,dithering_fragment:Jy,dithering_pars_fragment:eS,roughnessmap_fragment:tS,roughnessmap_pars_fragment:nS,shadowmap_pars_fragment:iS,shadowmap_pars_vertex:rS,shadowmap_vertex:sS,shadowmask_pars_fragment:oS,skinbase_vertex:aS,skinning_pars_vertex:lS,skinning_vertex:cS,skinnormal_vertex:uS,specularmap_fragment:dS,specularmap_pars_fragment:fS,tonemapping_fragment:hS,tonemapping_pars_fragment:pS,transmission_fragment:mS,transmission_pars_fragment:gS,uv_pars_fragment:xS,uv_pars_vertex:vS,uv_vertex:_S,worldpos_vertex:yS,background_vert:SS,background_frag:MS,backgroundCube_vert:wS,backgroundCube_frag:ES,cube_vert:TS,cube_frag:bS,depth_vert:AS,depth_frag:CS,distanceRGBA_vert:RS,distanceRGBA_frag:PS,equirect_vert:NS,equirect_frag:DS,linedashed_vert:LS,linedashed_frag:IS,meshbasic_vert:US,meshbasic_frag:FS,meshlambert_vert:kS,meshlambert_frag:OS,meshmatcap_vert:zS,meshmatcap_frag:BS,meshnormal_vert:HS,meshnormal_frag:VS,meshphong_vert:GS,meshphong_frag:jS,meshphysical_vert:WS,meshphysical_frag:XS,meshtoon_vert:qS,meshtoon_frag:YS,points_vert:$S,points_frag:KS,shadow_vert:ZS,shadow_frag:QS,sprite_vert:JS,sprite_frag:eM},Ie={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},_i={basic:{uniforms:bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new gt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:bn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:bn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new gt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:bn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:bn([Ie.points,Ie.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:bn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:bn([Ie.common,Ie.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:bn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:bn([Ie.sprite,Ie.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:bn([Ie.common,Ie.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:bn([Ie.lights,Ie.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};_i.physical={uniforms:bn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const bl={r:0,b:0,g:0},Vr=new Si,tM=new Vt;function nM(s,e,n,r,a,l,u){const f=new gt(0);let h=l===!0?0:1,m,y,x=null,g=0,M=null;function E(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?n:e).get(R)),R}function b(L){let R=!1;const G=E(L);G===null?v(f,h):G&&G.isColor&&(v(G,1),R=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(L,R){const G=E(R);G&&(G.isCubeTexture||G.mapping===Vl)?(y===void 0&&(y=new Ht(new ts(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:Qs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),y.geometry.deleteAttribute("normal"),y.geometry.deleteAttribute("uv"),y.onBeforeRender=function(O,k,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(y.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(y)),Vr.copy(R.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),y.material.uniforms.envMap.value=G,y.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,y.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,y.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,y.material.uniforms.backgroundRotation.value.setFromMatrix4(tM.makeRotationFromEuler(Vr)),y.material.toneMapped=Rt.getTransfer(G.colorSpace)!==Nt,(x!==G||g!==G.version||M!==s.toneMapping)&&(y.material.needsUpdate=!0,x=G,g=G.version,M=s.toneMapping),y.layers.enableAll(),L.unshift(y,y.geometry,y.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new Ht(new jl(2,2),new wr({name:"BackgroundMaterial",uniforms:Qs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(G.colorSpace)!==Nt,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(x!==G||g!==G.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,x=G,g=G.version,M=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function v(L,R){L.getRGB(bl,mg(s)),r.buffers.color.setClear(bl.r,bl.g,bl.b,R,u)}function D(){y!==void 0&&(y.geometry.dispose(),y.material.dispose(),y=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,R=1){f.set(L),h=R,v(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,v(f,h)},render:b,addToRenderList:_,dispose:D}}function iM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=g(null);let l=a,u=!1;function f(C,B,ie,Q,de){let he=!1;const ce=x(Q,ie,B);l!==ce&&(l=ce,m(l.object)),he=M(C,Q,ie,de),he&&E(C,Q,ie,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,R(C,B,ie,Q),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function h(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function y(C){return s.deleteVertexArray(C)}function x(C,B,ie){const Q=ie.wireframe===!0;let de=r[C.id];de===void 0&&(de={},r[C.id]=de);let he=de[B.id];he===void 0&&(he={},de[B.id]=he);let ce=he[Q];return ce===void 0&&(ce=g(h()),he[Q]=ce),ce}function g(C){const B=[],ie=[],Q=[];for(let de=0;de<n;de++)B[de]=0,ie[de]=0,Q[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ie,attributeDivisors:Q,object:C,attributes:{},index:null}}function M(C,B,ie,Q){const de=l.attributes,he=B.attributes;let ce=0;const me=ie.getAttributes();for(const X in me)if(me[X].location>=0){const I=de[X];let w=he[X];if(w===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(w=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(w=C.instanceColor)),I===void 0||I.attribute!==w||w&&I.data!==w.data)return!0;ce++}return l.attributesNum!==ce||l.index!==Q}function E(C,B,ie,Q){const de={},he=B.attributes;let ce=0;const me=ie.getAttributes();for(const X in me)if(me[X].location>=0){let I=he[X];I===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(I=C.instanceColor));const w={};w.attribute=I,I&&I.data&&(w.data=I.data),de[X]=w,ce++}l.attributes=de,l.attributesNum=ce,l.index=Q}function b(){const C=l.newAttributes;for(let B=0,ie=C.length;B<ie;B++)C[B]=0}function _(C){v(C,0)}function v(C,B){const ie=l.newAttributes,Q=l.enabledAttributes,de=l.attributeDivisors;ie[C]=1,Q[C]===0&&(s.enableVertexAttribArray(C),Q[C]=1),de[C]!==B&&(s.vertexAttribDivisor(C,B),de[C]=B)}function D(){const C=l.newAttributes,B=l.enabledAttributes;for(let ie=0,Q=B.length;ie<Q;ie++)B[ie]!==C[ie]&&(s.disableVertexAttribArray(ie),B[ie]=0)}function L(C,B,ie,Q,de,he,ce){ce===!0?s.vertexAttribIPointer(C,B,ie,de,he):s.vertexAttribPointer(C,B,ie,Q,de,he)}function R(C,B,ie,Q){b();const de=Q.attributes,he=ie.getAttributes(),ce=B.defaultAttributeValues;for(const me in he){const X=he[me];if(X.location>=0){let pe=de[me];if(pe===void 0&&(me==="instanceMatrix"&&C.instanceMatrix&&(pe=C.instanceMatrix),me==="instanceColor"&&C.instanceColor&&(pe=C.instanceColor)),pe!==void 0){const I=pe.normalized,w=pe.itemSize,H=e.get(pe);if(H===void 0)continue;const J=H.buffer,j=H.type,ee=H.bytesPerElement,ue=j===s.INT||j===s.UNSIGNED_INT||pe.gpuType===ef;if(pe.isInterleavedBufferAttribute){const oe=pe.data,ge=oe.stride,Ae=pe.offset;if(oe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<X.locationSize;Ce++)v(X.location+Ce,oe.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ce=0;Ce<X.locationSize;Ce++)_(X.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,J);for(let Ce=0;Ce<X.locationSize;Ce++)L(X.location+Ce,w/X.locationSize,j,I,ge*ee,(Ae+w/X.locationSize*Ce)*ee,ue)}else{if(pe.isInstancedBufferAttribute){for(let oe=0;oe<X.locationSize;oe++)v(X.location+oe,pe.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let oe=0;oe<X.locationSize;oe++)_(X.location+oe);s.bindBuffer(s.ARRAY_BUFFER,J);for(let oe=0;oe<X.locationSize;oe++)L(X.location+oe,w/X.locationSize,j,I,w*ee,w/X.locationSize*oe*ee,ue)}}else if(ce!==void 0){const I=ce[me];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(X.location,I);break;case 3:s.vertexAttrib3fv(X.location,I);break;case 4:s.vertexAttrib4fv(X.location,I);break;default:s.vertexAttrib1fv(X.location,I)}}}}D()}function G(){V();for(const C in r){const B=r[C];for(const ie in B){const Q=B[ie];for(const de in Q)y(Q[de].object),delete Q[de];delete B[ie]}delete r[C]}}function O(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const ie in B){const Q=B[ie];for(const de in Q)y(Q[de].object),delete Q[de];delete B[ie]}delete r[C.id]}function k(C){for(const B in r){const ie=r[B];if(ie[C.id]===void 0)continue;const Q=ie[C.id];for(const de in Q)y(Q[de].object),delete Q[de];delete ie[C.id]}}function V(){N(),u=!0,l!==a&&(l=a,m(l.object))}function N(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:V,resetDefaultState:N,dispose:G,releaseStatesOfGeometry:O,releaseStatesOfProgram:k,initAttributes:b,enableAttribute:_,disableUnusedAttributes:D}}function rM(s,e,n){let r;function a(m){r=m}function l(m,y){s.drawArrays(r,m,y),n.update(y,r,1)}function u(m,y,x){x!==0&&(s.drawArraysInstanced(r,m,y,x),n.update(y,r,x))}function f(m,y,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,y,0,x);let M=0;for(let E=0;E<x;E++)M+=y[E];n.update(M,r,1)}function h(m,y,x,g){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)u(m[E],y[E],g[E]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,y,0,g,0,x);let E=0;for(let b=0;b<x;b++)E+=y[b]*g[b];n.update(E,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function sM(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(k){return!(k!==di&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const V=k===Yo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Gi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Bi&&!V)}function h(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const y=h(m);y!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",y,"instead."),m=y);const x=n.logarithmicDepthBuffer===!0,g=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:g,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:G,maxSamples:O}}function oM(s){const e=this;let n=null,r=0,a=!1,l=!1;const u=new Xr,f=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||r!==0||a;return a=g,r=x.length,M},this.beginShadows=function(){l=!0,y(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,g){n=y(x,g,0)},this.setState=function(x,g,M){const E=x.clippingPlanes,b=x.clipIntersection,_=x.clipShadows,v=s.get(x);if(!a||E===null||E.length===0||l&&!_)l?y(null):m();else{const D=l?0:r,L=D*4;let R=v.clippingState||null;h.value=R,R=y(E,g,L,M);for(let G=0;G!==L;++G)R[G]=n[G];v.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=D}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function y(x,g,M,E){const b=x!==null?x.length:0;let _=null;if(b!==0){if(_=h.value,E!==!0||_===null){const v=M+b*4,D=g.matrixWorldInverse;f.getNormalMatrix(D),(_===null||_.length<v)&&(_=new Float32Array(v));for(let L=0,R=M;L!==b;++L,R+=4)u.copy(x[L]).applyMatrix4(D,f),u.normal.toArray(_,R),_[R+3]=u.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,_}}function aM(s){let e=new WeakMap;function n(u,f){return f===xd?u.mapping=Xs:f===vd&&(u.mapping=qs),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===xd||f===vd)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new a_(h.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",a),n(m.texture,u.mapping)}else return null}}return u}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Hs=4,Mm=[.125,.215,.35,.446,.526,.582],$r=20,ed=new Mg,wm=new gt;let td=null,nd=0,id=0,rd=!1;const qr=(1+Math.sqrt(5))/2,Bs=1/qr,Em=[new Z(-qr,Bs,0),new Z(qr,Bs,0),new Z(-Bs,0,qr),new Z(Bs,0,qr),new Z(0,qr,-Bs),new Z(0,qr,Bs),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],lM=new Z;class Tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,l={}){const{size:u=256,position:f=lM}=l;td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,f),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(td,nd,id),this._renderer.xr.enabled=rd,e.scissorTest=!1,Al(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Yo,format:di,colorSpace:Ks,depthBuffer:!1},a=bm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cM(l)),this._blurMaterial=uM(l,e,n)}return a}_compileMaterial(e){const n=new Ht(this._lodPlanes[0],e);this._renderer.compile(n,ed)}_sceneToCubeUV(e,n,r,a,l){const h=new Fn(90,1,n,r),m=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(wm),x.toneMapping=Sr,x.autoClear=!1;const E=new Zs({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),b=new Ht(new ts,E);let _=!1;const v=e.background;v?v.isColor&&(E.color.copy(v),e.background=null,_=!0):(E.color.copy(wm),_=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(h.up.set(0,m[D],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+y[D],l.y,l.z)):L===1?(h.up.set(0,0,m[D]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+y[D],l.z)):(h.up.set(0,m[D],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+y[D]));const R=this._cubeSize;Al(a,L*R,D>2?R:0,R,R),x.setRenderTarget(a),_&&x.render(b,h),x.render(e,h)}b.geometry.dispose(),b.material.dispose(),x.toneMapping=M,x.autoClear=g,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Xs||e.mapping===qs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new Ht(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Al(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,ed)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Em[(a-l-1)%Em.length];this._blur(e,l-1,l,u,f)}n.autoClear=r}_blur(e,n,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,u,f){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const y=3,x=new Ht(this._lodPlanes[a],m),g=m.uniforms,M=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*$r-1),b=l/E,_=isFinite(l)?1+Math.floor(y*b):$r;_>$r&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${$r}`);const v=[];let D=0;for(let k=0;k<$r;++k){const V=k/b,N=Math.exp(-V*V/2);v.push(N),k===0?D+=N:k<_&&(D+=2*N)}for(let k=0;k<v.length;k++)v[k]=v[k]/D;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=v,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:L}=this;g.dTheta.value=E,g.mipInt.value=L-r;const R=this._sizeLods[a],G=3*R*(a>L-Hs?a-L+Hs:0),O=4*(this._cubeSize-R);Al(n,G,O,3*R,2*R),h.setRenderTarget(n),h.render(x,ed)}}function cM(s){const e=[],n=[],r=[];let a=s;const l=s-Hs+1+Mm.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);n.push(f);let h=1/f;u>s-Hs?h=Mm[u-s+Hs-1]:u===0&&(h=0),r.push(h);const m=1/(f-2),y=-m,x=1+m,g=[y,y,x,y,x,x,y,y,x,x,y,x],M=6,E=6,b=3,_=2,v=1,D=new Float32Array(b*E*M),L=new Float32Array(_*E*M),R=new Float32Array(v*E*M);for(let O=0;O<M;O++){const k=O%3*2/3-1,V=O>2?0:-1,N=[k,V,0,k+2/3,V,0,k+2/3,V+1,0,k,V,0,k+2/3,V+1,0,k,V+1,0];D.set(N,b*E*O),L.set(g,_*E*O);const C=[O,O,O,O,O,O];R.set(C,v*E*O)}const G=new jn;G.setAttribute("position",new Jn(D,b)),G.setAttribute("uv",new Jn(L,_)),G.setAttribute("faceIndex",new Jn(R,v)),e.push(G),a>Hs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function bm(s,e,n){const r=new es(s,e,n);return r.texture.mapping=Vl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Al(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function uM(s,e,n){const r=new Float32Array($r),a=new Z(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:hf(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Am(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hf(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Cm(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function hf(){return`

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
	`}function dM(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===xd||h===vd,y=h===Xs||h===qs;if(m||y){let x=e.get(f);const g=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Tm(s)),x=m?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const M=f.image;return m&&M&&M.height>0||y&&M&&a(M)?(n===null&&(n=new Tm(s)),x=m?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",l),x.texture):null}}}return f}function a(f){let h=0;const m=6;for(let y=0;y<m;y++)f[y]!==void 0&&h++;return h===m}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function fM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Wr("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function hM(s,e,n,r){const a={},l=new WeakMap;function u(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete a[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(x,g){return a[g.id]===!0||(g.addEventListener("dispose",u),a[g.id]=!0,n.memory.geometries++),g}function h(x){const g=x.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function m(x){const g=[],M=x.index,E=x.attributes.position;let b=0;if(M!==null){const D=M.array;b=M.version;for(let L=0,R=D.length;L<R;L+=3){const G=D[L+0],O=D[L+1],k=D[L+2];g.push(G,O,O,k,k,G)}}else if(E!==void 0){const D=E.array;b=E.version;for(let L=0,R=D.length/3-1;L<R;L+=3){const G=L+0,O=L+1,k=L+2;g.push(G,O,O,k,k,G)}}else return;const _=new(lg(g)?pg:hg)(g,1);_.version=b;const v=l.get(x);v&&e.remove(v),l.set(x,_)}function y(x){const g=l.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&m(x)}else m(x);return l.get(x)}return{get:f,update:h,getWireframeAttribute:y}}function pM(s,e,n){let r;function a(g){r=g}let l,u;function f(g){l=g.type,u=g.bytesPerElement}function h(g,M){s.drawElements(r,M,l,g*u),n.update(M,r,1)}function m(g,M,E){E!==0&&(s.drawElementsInstanced(r,M,l,g*u,E),n.update(M,r,E))}function y(g,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,g,0,E);let _=0;for(let v=0;v<E;v++)_+=M[v];n.update(_,r,1)}function x(g,M,E,b){if(E===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<g.length;v++)m(g[v]/u,M[v],b[v]);else{_.multiDrawElementsInstancedWEBGL(r,M,0,l,g,0,b,0,E);let v=0;for(let D=0;D<E;D++)v+=M[D]*b[D];n.update(v,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=y,this.renderMultiDrawInstances=x}function mM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function gM(s,e,n){const r=new WeakMap,a=new Dt;function l(u,f,h){const m=u.morphTargetInfluences,y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=y!==void 0?y.length:0;let g=r.get(f);if(g===void 0||g.count!==x){let C=function(){V.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var M=C;g!==void 0&&g.texture.dispose();const E=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let R=0;E===!0&&(R=1),b===!0&&(R=2),_===!0&&(R=3);let G=f.attributes.position.count*R,O=1;G>e.maxTextureSize&&(O=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const k=new Float32Array(G*O*4*x),V=new cg(k,G,O,x);V.type=Bi,V.needsUpdate=!0;const N=R*4;for(let B=0;B<x;B++){const ie=v[B],Q=D[B],de=L[B],he=G*O*4*B;for(let ce=0;ce<ie.count;ce++){const me=ce*N;E===!0&&(a.fromBufferAttribute(ie,ce),k[he+me+0]=a.x,k[he+me+1]=a.y,k[he+me+2]=a.z,k[he+me+3]=0),b===!0&&(a.fromBufferAttribute(Q,ce),k[he+me+4]=a.x,k[he+me+5]=a.y,k[he+me+6]=a.z,k[he+me+7]=0),_===!0&&(a.fromBufferAttribute(de,ce),k[he+me+8]=a.x,k[he+me+9]=a.y,k[he+me+10]=a.z,k[he+me+11]=de.itemSize===4?a.w:1)}}g={count:x,texture:V,size:new yt(G,O)},r.set(f,g),f.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let E=0;for(let _=0;_<m.length;_++)E+=m[_];const b=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",b),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function xM(s,e,n,r){let a=new WeakMap;function l(h){const m=r.render.frame,y=h.geometry,x=e.get(h,y);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const g=h.skeleton;a.get(g)!==m&&(g.update(),a.set(g,m))}return x}function u(){a=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:u}}const Tg=new An,Rm=new yg(1,1),bg=new cg,Ag=new jv,Cg=new xg,Pm=[],Nm=[],Dm=new Float32Array(16),Lm=new Float32Array(9),Im=new Float32Array(4);function no(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=Pm[a];if(l===void 0&&(l=new Float32Array(a),Pm[a]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(l,f)}return l}function tn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function nn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Wl(s,e){let n=Nm[e];n===void 0&&(n=new Int32Array(e),Nm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function vM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function _M(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;s.uniform2fv(this.addr,e),nn(n,e)}}function yM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(tn(n,e))return;s.uniform3fv(this.addr,e),nn(n,e)}}function SM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;s.uniform4fv(this.addr,e),nn(n,e)}}function MM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;Im.set(r),s.uniformMatrix2fv(this.addr,!1,Im),nn(n,r)}}function wM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;Lm.set(r),s.uniformMatrix3fv(this.addr,!1,Lm),nn(n,r)}}function EM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;Dm.set(r),s.uniformMatrix4fv(this.addr,!1,Dm),nn(n,r)}}function TM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function bM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;s.uniform2iv(this.addr,e),nn(n,e)}}function AM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;s.uniform3iv(this.addr,e),nn(n,e)}}function CM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;s.uniform4iv(this.addr,e),nn(n,e)}}function RM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function PM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;s.uniform2uiv(this.addr,e),nn(n,e)}}function NM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;s.uniform3uiv(this.addr,e),nn(n,e)}}function DM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;s.uniform4uiv(this.addr,e),nn(n,e)}}function LM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Rm.compareFunction=ag,l=Rm):l=Tg,n.setTexture2D(e||l,a)}function IM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Ag,a)}function UM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Cg,a)}function FM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||bg,a)}function kM(s){switch(s){case 5126:return vM;case 35664:return _M;case 35665:return yM;case 35666:return SM;case 35674:return MM;case 35675:return wM;case 35676:return EM;case 5124:case 35670:return TM;case 35667:case 35671:return bM;case 35668:case 35672:return AM;case 35669:case 35673:return CM;case 5125:return RM;case 36294:return PM;case 36295:return NM;case 36296:return DM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return UM;case 36289:case 36303:case 36311:case 36292:return FM}}function OM(s,e){s.uniform1fv(this.addr,e)}function zM(s,e){const n=no(e,this.size,2);s.uniform2fv(this.addr,n)}function BM(s,e){const n=no(e,this.size,3);s.uniform3fv(this.addr,n)}function HM(s,e){const n=no(e,this.size,4);s.uniform4fv(this.addr,n)}function VM(s,e){const n=no(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function GM(s,e){const n=no(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function jM(s,e){const n=no(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function WM(s,e){s.uniform1iv(this.addr,e)}function XM(s,e){s.uniform2iv(this.addr,e)}function qM(s,e){s.uniform3iv(this.addr,e)}function YM(s,e){s.uniform4iv(this.addr,e)}function $M(s,e){s.uniform1uiv(this.addr,e)}function KM(s,e){s.uniform2uiv(this.addr,e)}function ZM(s,e){s.uniform3uiv(this.addr,e)}function QM(s,e){s.uniform4uiv(this.addr,e)}function JM(s,e,n){const r=this.cache,a=e.length,l=Wl(n,a);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||Tg,l[u])}function e1(s,e,n){const r=this.cache,a=e.length,l=Wl(n,a);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||Ag,l[u])}function t1(s,e,n){const r=this.cache,a=e.length,l=Wl(n,a);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||Cg,l[u])}function n1(s,e,n){const r=this.cache,a=e.length,l=Wl(n,a);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||bg,l[u])}function i1(s){switch(s){case 5126:return OM;case 35664:return zM;case 35665:return BM;case 35666:return HM;case 35674:return VM;case 35675:return GM;case 35676:return jM;case 5124:case 35670:return WM;case 35667:case 35671:return XM;case 35668:case 35672:return qM;case 35669:case 35673:return YM;case 5125:return $M;case 36294:return KM;case 36295:return ZM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return JM;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return n1}}class r1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=kM(n.type)}}class s1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=i1(n.type)}}class o1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,n[f.id],r)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function Um(s,e){s.seq.push(e),s.map[e.id]=e}function a1(s,e,n){const r=s.name,a=r.length;for(sd.lastIndex=0;;){const l=sd.exec(r),u=sd.lastIndex;let f=l[1];const h=l[2]==="]",m=l[3];if(h&&(f=f|0),m===void 0||m==="["&&u+2===a){Um(n,m===void 0?new r1(f,s,e):new s1(f,s,e));break}else{let x=n.map[f];x===void 0&&(x=new o1(f),Um(n,x)),n=x}}}class Ul{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),u=e.getUniformLocation(n,l.name);a1(l,u,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,u=n.length;l!==u;++l){const f=n[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function Fm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const l1=37297;let c1=0;function u1(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=a;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const km=new pt;function d1(s){Rt._getMatrix(km,Rt.workingColorSpace,s);const e=`mat3( ${km.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(s)){case Fl:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Om(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+u1(s.getShaderSource(e),u)}else return a}function f1(s,e){const n=d1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function h1(s,e){let n;switch(e){case gv:n="Linear";break;case xv:n="Reinhard";break;case vv:n="Cineon";break;case _v:n="ACESFilmic";break;case Sv:n="AgX";break;case Mv:n="Neutral";break;case yv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cl=new Z;function p1(){Rt.getLuminanceCoefficients(Cl);const s=Cl.x.toFixed(4),e=Cl.y.toFixed(4),n=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function g1(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function x1(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function jo(s){return s!==""}function zm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v1=/^[ \t]*#include +<([\w\d./]+)>/gm;function $d(s){return s.replace(v1,y1)}const _1=new Map;function y1(s,e){let n=mt[e];if(n===void 0){const r=_1.get(e);if(r!==void 0)n=mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return $d(n)}const S1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(s){return s.replace(S1,M1)}function M1(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Vm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function w1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===$x?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function E1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xs:case qs:e="ENVMAP_TYPE_CUBE";break;case Vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function b1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ym:e="ENVMAP_BLENDING_MULTIPLY";break;case pv:e="ENVMAP_BLENDING_MIX";break;case mv:e="ENVMAP_BLENDING_ADD";break}return e}function A1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function C1(s,e,n,r){const a=s.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const h=w1(n),m=E1(n),y=T1(n),x=b1(n),g=A1(n),M=m1(n),E=g1(l),b=a.createProgram();let _,v,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(jo).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(jo).join(`
`),v.length>0&&(v+=`
`)):(_=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+y:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),v=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+y:"",n.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Sr?"#define TONE_MAPPING":"",n.toneMapping!==Sr?mt.tonemapping_pars_fragment:"",n.toneMapping!==Sr?h1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,f1("linearToOutputTexel",n.outputColorSpace),p1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(jo).join(`
`)),u=$d(u),u=zm(u,n),u=Bm(u,n),f=$d(f),f=zm(f,n),f=Bm(f,n),u=Hm(u),f=Hm(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,_=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",n.glslVersion===Zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=D+_+u,R=D+v+f,G=Fm(a,a.VERTEX_SHADER,L),O=Fm(a,a.FRAGMENT_SHADER,R);a.attachShader(b,G),a.attachShader(b,O),n.index0AttributeName!==void 0?a.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function k(B){if(s.debug.checkShaderErrors){const ie=a.getProgramInfoLog(b).trim(),Q=a.getShaderInfoLog(G).trim(),de=a.getShaderInfoLog(O).trim();let he=!0,ce=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,b,G,O);else{const me=Om(a,G,"vertex"),X=Om(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ie+`
`+me+`
`+X)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(Q===""||de==="")&&(ce=!1);ce&&(B.diagnostics={runnable:he,programLog:ie,vertexShader:{log:Q,prefix:_},fragmentShader:{log:de,prefix:v}})}a.deleteShader(G),a.deleteShader(O),V=new Ul(a,b),N=x1(a,b)}let V;this.getUniforms=function(){return V===void 0&&k(this),V};let N;this.getAttributes=function(){return N===void 0&&k(this),N};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(b,l1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=c1++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=G,this.fragmentShader=O,this}let R1=0;class P1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new N1(e),n.set(e,r)),r}}class N1{constructor(e){this.id=R1++,this.code=e,this.usedTimes=0}}function D1(s,e,n,r,a,l,u){const f=new dg,h=new P1,m=new Set,y=[],x=a.logarithmicDepthBuffer,g=a.vertexTextures;let M=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(N){return m.add(N),N===0?"uv":`uv${N}`}function _(N,C,B,ie,Q){const de=ie.fog,he=Q.geometry,ce=N.isMeshStandardMaterial?ie.environment:null,me=(N.isMeshStandardMaterial?n:e).get(N.envMap||ce),X=me&&me.mapping===Vl?me.image.height:null,pe=E[N.type];N.precision!==null&&(M=a.getMaxPrecision(N.precision),M!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",M,"instead."));const I=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,w=I!==void 0?I.length:0;let H=0;he.morphAttributes.position!==void 0&&(H=1),he.morphAttributes.normal!==void 0&&(H=2),he.morphAttributes.color!==void 0&&(H=3);let J,j,ee,ue;if(pe){const Tt=_i[pe];J=Tt.vertexShader,j=Tt.fragmentShader}else J=N.vertexShader,j=N.fragmentShader,h.update(N),ee=h.getVertexShaderID(N),ue=h.getFragmentShaderID(N);const oe=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),Ae=Q.isInstancedMesh===!0,Ce=Q.isBatchedMesh===!0,et=!!N.map,Re=!!N.matcap,Ne=!!me,F=!!N.aoMap,ct=!!N.lightMap,Qe=!!N.bumpMap,rt=!!N.normalMap,Ve=!!N.displacementMap,_t=!!N.emissiveMap,ke=!!N.metalnessMap,U=!!N.roughnessMap,A=N.anisotropy>0,se=N.clearcoat>0,_e=N.dispersion>0,ye=N.iridescence>0,xe=N.sheen>0,Ye=N.transmission>0,Pe=A&&!!N.anisotropyMap,Oe=se&&!!N.clearcoatMap,ft=se&&!!N.clearcoatNormalMap,we=se&&!!N.clearcoatRoughnessMap,He=ye&&!!N.iridescenceMap,tt=ye&&!!N.iridescenceThicknessMap,ot=xe&&!!N.sheenColorMap,je=xe&&!!N.sheenRoughnessMap,xt=!!N.specularMap,ut=!!N.specularColorMap,Pt=!!N.specularIntensityMap,Y=Ye&&!!N.transmissionMap,De=Ye&&!!N.thicknessMap,fe=!!N.gradientMap,ve=!!N.alphaMap,Fe=N.alphaTest>0,Ue=!!N.alphaHash,dt=!!N.extensions;let Ft=Sr;N.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const Zt={shaderID:pe,shaderType:N.type,shaderName:N.name,vertexShader:J,fragmentShader:j,defines:N.defines,customVertexShaderID:ee,customFragmentShaderID:ue,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:M,batching:Ce,batchingColor:Ce&&Q._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&Q.instanceColor!==null,instancingMorph:Ae&&Q.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ks,alphaToCoverage:!!N.alphaToCoverage,map:et,matcap:Re,envMap:Ne,envMapMode:Ne&&me.mapping,envMapCubeUVHeight:X,aoMap:F,lightMap:ct,bumpMap:Qe,normalMap:rt,displacementMap:g&&Ve,emissiveMap:_t,normalMapObjectSpace:rt&&N.normalMapType===bv,normalMapTangentSpace:rt&&N.normalMapType===og,metalnessMap:ke,roughnessMap:U,anisotropy:A,anisotropyMap:Pe,clearcoat:se,clearcoatMap:Oe,clearcoatNormalMap:ft,clearcoatRoughnessMap:we,dispersion:_e,iridescence:ye,iridescenceMap:He,iridescenceThicknessMap:tt,sheen:xe,sheenColorMap:ot,sheenRoughnessMap:je,specularMap:xt,specularColorMap:ut,specularIntensityMap:Pt,transmission:Ye,transmissionMap:Y,thicknessMap:De,gradientMap:fe,opaque:N.transparent===!1&&N.blending===Vs&&N.alphaToCoverage===!1,alphaMap:ve,alphaTest:Fe,alphaHash:Ue,combine:N.combine,mapUv:et&&b(N.map.channel),aoMapUv:F&&b(N.aoMap.channel),lightMapUv:ct&&b(N.lightMap.channel),bumpMapUv:Qe&&b(N.bumpMap.channel),normalMapUv:rt&&b(N.normalMap.channel),displacementMapUv:Ve&&b(N.displacementMap.channel),emissiveMapUv:_t&&b(N.emissiveMap.channel),metalnessMapUv:ke&&b(N.metalnessMap.channel),roughnessMapUv:U&&b(N.roughnessMap.channel),anisotropyMapUv:Pe&&b(N.anisotropyMap.channel),clearcoatMapUv:Oe&&b(N.clearcoatMap.channel),clearcoatNormalMapUv:ft&&b(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&b(N.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&b(N.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&b(N.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&b(N.sheenColorMap.channel),sheenRoughnessMapUv:je&&b(N.sheenRoughnessMap.channel),specularMapUv:xt&&b(N.specularMap.channel),specularColorMapUv:ut&&b(N.specularColorMap.channel),specularIntensityMapUv:Pt&&b(N.specularIntensityMap.channel),transmissionMapUv:Y&&b(N.transmissionMap.channel),thicknessMapUv:De&&b(N.thicknessMap.channel),alphaMapUv:ve&&b(N.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(rt||A),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!he.attributes.uv&&(et||ve),fog:!!de,useFog:N.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:ge,skinning:Q.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:H,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:et&&N.map.isVideoTexture===!0&&Rt.getTransfer(N.map.colorSpace)===Nt,decodeVideoTextureEmissive:_t&&N.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(N.emissiveMap.colorSpace)===Nt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===zi,flipSided:N.side===kn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:dt&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&N.extensions.multiDraw===!0||Ce)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Zt.vertexUv1s=m.has(1),Zt.vertexUv2s=m.has(2),Zt.vertexUv3s=m.has(3),m.clear(),Zt}function v(N){const C=[];if(N.shaderID?C.push(N.shaderID):(C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID)),N.defines!==void 0)for(const B in N.defines)C.push(B),C.push(N.defines[B]);return N.isRawShaderMaterial===!1&&(D(C,N),L(C,N),C.push(s.outputColorSpace)),C.push(N.customProgramCacheKey),C.join()}function D(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function L(N,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),N.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),N.push(f.mask)}function R(N){const C=E[N.type];let B;if(C){const ie=_i[C];B=i_.clone(ie.uniforms)}else B=N.uniforms;return B}function G(N,C){let B;for(let ie=0,Q=y.length;ie<Q;ie++){const de=y[ie];if(de.cacheKey===C){B=de,++B.usedTimes;break}}return B===void 0&&(B=new C1(s,C,N,l),y.push(B)),B}function O(N){if(--N.usedTimes===0){const C=y.indexOf(N);y[C]=y[y.length-1],y.pop(),N.destroy()}}function k(N){h.remove(N)}function V(){h.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:R,acquireProgram:G,releaseProgram:O,releaseShaderCache:k,programs:y,dispose:V}}function L1(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function a(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function I1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Gm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function jm(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function u(x,g,M,E,b,_){let v=s[e];return v===void 0?(v={id:x.id,object:x,geometry:g,material:M,groupOrder:E,renderOrder:x.renderOrder,z:b,group:_},s[e]=v):(v.id=x.id,v.object=x,v.geometry=g,v.material=M,v.groupOrder=E,v.renderOrder=x.renderOrder,v.z=b,v.group=_),e++,v}function f(x,g,M,E,b,_){const v=u(x,g,M,E,b,_);M.transmission>0?r.push(v):M.transparent===!0?a.push(v):n.push(v)}function h(x,g,M,E,b,_){const v=u(x,g,M,E,b,_);M.transmission>0?r.unshift(v):M.transparent===!0?a.unshift(v):n.unshift(v)}function m(x,g){n.length>1&&n.sort(x||I1),r.length>1&&r.sort(g||Gm),a.length>1&&a.sort(g||Gm)}function y(){for(let x=e,g=s.length;x<g;x++){const M=s[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:f,unshift:h,finish:y,sort:m}}function U1(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new jm,s.set(r,[u])):a>=l.length?(u=new jm,l.push(u)):u=l[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function F1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new gt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new gt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":n={color:new gt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=n,n}}}function k1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let O1=0;function z1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function B1(s){const e=new F1,n=k1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const a=new Z,l=new Vt,u=new Vt;function f(m){let y=0,x=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,E=0,b=0,_=0,v=0,D=0,L=0,R=0,G=0,O=0,k=0;m.sort(z1);for(let N=0,C=m.length;N<C;N++){const B=m[N],ie=B.color,Q=B.intensity,de=B.distance,he=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)y+=ie.r*Q,x+=ie.g*Q,g+=ie.b*Q;else if(B.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(B.sh.coefficients[ce],Q);k++}else if(B.isDirectionalLight){const ce=e.get(B);if(ce.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const me=B.shadow,X=n.get(B);X.shadowIntensity=me.intensity,X.shadowBias=me.bias,X.shadowNormalBias=me.normalBias,X.shadowRadius=me.radius,X.shadowMapSize=me.mapSize,r.directionalShadow[M]=X,r.directionalShadowMap[M]=he,r.directionalShadowMatrix[M]=B.shadow.matrix,D++}r.directional[M]=ce,M++}else if(B.isSpotLight){const ce=e.get(B);ce.position.setFromMatrixPosition(B.matrixWorld),ce.color.copy(ie).multiplyScalar(Q),ce.distance=de,ce.coneCos=Math.cos(B.angle),ce.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ce.decay=B.decay,r.spot[b]=ce;const me=B.shadow;if(B.map&&(r.spotLightMap[G]=B.map,G++,me.updateMatrices(B),B.castShadow&&O++),r.spotLightMatrix[b]=me.matrix,B.castShadow){const X=n.get(B);X.shadowIntensity=me.intensity,X.shadowBias=me.bias,X.shadowNormalBias=me.normalBias,X.shadowRadius=me.radius,X.shadowMapSize=me.mapSize,r.spotShadow[b]=X,r.spotShadowMap[b]=he,R++}b++}else if(B.isRectAreaLight){const ce=e.get(B);ce.color.copy(ie).multiplyScalar(Q),ce.halfWidth.set(B.width*.5,0,0),ce.halfHeight.set(0,B.height*.5,0),r.rectArea[_]=ce,_++}else if(B.isPointLight){const ce=e.get(B);if(ce.color.copy(B.color).multiplyScalar(B.intensity),ce.distance=B.distance,ce.decay=B.decay,B.castShadow){const me=B.shadow,X=n.get(B);X.shadowIntensity=me.intensity,X.shadowBias=me.bias,X.shadowNormalBias=me.normalBias,X.shadowRadius=me.radius,X.shadowMapSize=me.mapSize,X.shadowCameraNear=me.camera.near,X.shadowCameraFar=me.camera.far,r.pointShadow[E]=X,r.pointShadowMap[E]=he,r.pointShadowMatrix[E]=B.shadow.matrix,L++}r.point[E]=ce,E++}else if(B.isHemisphereLight){const ce=e.get(B);ce.skyColor.copy(B.color).multiplyScalar(Q),ce.groundColor.copy(B.groundColor).multiplyScalar(Q),r.hemi[v]=ce,v++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=x,r.ambient[2]=g;const V=r.hash;(V.directionalLength!==M||V.pointLength!==E||V.spotLength!==b||V.rectAreaLength!==_||V.hemiLength!==v||V.numDirectionalShadows!==D||V.numPointShadows!==L||V.numSpotShadows!==R||V.numSpotMaps!==G||V.numLightProbes!==k)&&(r.directional.length=M,r.spot.length=b,r.rectArea.length=_,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+G-O,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=k,V.directionalLength=M,V.pointLength=E,V.spotLength=b,V.rectAreaLength=_,V.hemiLength=v,V.numDirectionalShadows=D,V.numPointShadows=L,V.numSpotShadows=R,V.numSpotMaps=G,V.numLightProbes=k,r.version=O1++)}function h(m,y){let x=0,g=0,M=0,E=0,b=0;const _=y.matrixWorldInverse;for(let v=0,D=m.length;v<D;v++){const L=m[v];if(L.isDirectionalLight){const R=r.directional[x];R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(_),x++}else if(L.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(_),M++}else if(L.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(_),u.identity(),l.copy(L.matrixWorld),l.premultiply(_),u.extractRotation(l),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(_),g++}else if(L.isHemisphereLight){const R=r.hemi[b];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(_),b++}}}return{setup:f,setupView:h,state:r}}function Wm(s){const e=new B1(s),n=[],r=[];function a(y){m.camera=y,n.length=0,r.length=0}function l(y){n.push(y)}function u(y){r.push(y)}function f(){e.setup(n)}function h(y){e.setupView(n,y)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function H1(s){let e=new WeakMap;function n(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new Wm(s),e.set(a,[f])):l>=u.length?(f=new Wm(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const V1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G1=`uniform sampler2D shadow_pass;
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
}`;function j1(s,e,n){let r=new cf;const a=new yt,l=new yt,u=new Dt,f=new h_({depthPacking:Tv}),h=new p_,m={},y=n.maxTextureSize,x={[Mr]:kn,[kn]:Mr,[zi]:zi},g=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:V1,fragmentShader:G1}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new jn;E.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ht(E,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qm;let v=this.type;this.render=function(O,k,V){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||O.length===0)return;const N=s.getRenderTarget(),C=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(yr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const Q=v!==Oi&&this.type===Oi,de=v===Oi&&this.type!==Oi;for(let he=0,ce=O.length;he<ce;he++){const me=O[he],X=me.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;a.copy(X.mapSize);const pe=X.getFrameExtents();if(a.multiply(pe),l.copy(X.mapSize),(a.x>y||a.y>y)&&(a.x>y&&(l.x=Math.floor(y/pe.x),a.x=l.x*pe.x,X.mapSize.x=l.x),a.y>y&&(l.y=Math.floor(y/pe.y),a.y=l.y*pe.y,X.mapSize.y=l.y)),X.map===null||Q===!0||de===!0){const w=this.type!==Oi?{minFilter:fi,magFilter:fi}:{};X.map!==null&&X.map.dispose(),X.map=new es(a.x,a.y,w),X.map.texture.name=me.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const I=X.getViewportCount();for(let w=0;w<I;w++){const H=X.getViewport(w);u.set(l.x*H.x,l.y*H.y,l.x*H.z,l.y*H.w),ie.viewport(u),X.updateMatrices(me,w),r=X.getFrustum(),R(k,V,X.camera,me,this.type)}X.isPointLightShadow!==!0&&this.type===Oi&&D(X,V),X.needsUpdate=!1}v=this.type,_.needsUpdate=!1,s.setRenderTarget(N,C,B)};function D(O,k){const V=e.update(b);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new es(a.x,a.y)),g.uniforms.shadow_pass.value=O.map.texture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(k,null,V,g,b,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(k,null,V,M,b,null)}function L(O,k,V,N){let C=null;const B=V.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(B!==void 0)C=B;else if(C=V.isPointLight===!0?h:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const ie=C.uuid,Q=k.uuid;let de=m[ie];de===void 0&&(de={},m[ie]=de);let he=de[Q];he===void 0&&(he=C.clone(),de[Q]=he,k.addEventListener("dispose",G)),C=he}if(C.visible=k.visible,C.wireframe=k.wireframe,N===Oi?C.side=k.shadowSide!==null?k.shadowSide:k.side:C.side=k.shadowSide!==null?k.shadowSide:x[k.side],C.alphaMap=k.alphaMap,C.alphaTest=k.alphaTest,C.map=k.map,C.clipShadows=k.clipShadows,C.clippingPlanes=k.clippingPlanes,C.clipIntersection=k.clipIntersection,C.displacementMap=k.displacementMap,C.displacementScale=k.displacementScale,C.displacementBias=k.displacementBias,C.wireframeLinewidth=k.wireframeLinewidth,C.linewidth=k.linewidth,V.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ie=s.properties.get(C);ie.light=V}return C}function R(O,k,V,N,C){if(O.visible===!1)return;if(O.layers.test(k.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===Oi)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,O.matrixWorld);const Q=e.update(O),de=O.material;if(Array.isArray(de)){const he=Q.groups;for(let ce=0,me=he.length;ce<me;ce++){const X=he[ce],pe=de[X.materialIndex];if(pe&&pe.visible){const I=L(O,pe,N,C);O.onBeforeShadow(s,O,k,V,Q,I,X),s.renderBufferDirect(V,null,Q,I,O,X),O.onAfterShadow(s,O,k,V,Q,I,X)}}}else if(de.visible){const he=L(O,de,N,C);O.onBeforeShadow(s,O,k,V,Q,he,null),s.renderBufferDirect(V,null,Q,he,O,null),O.onAfterShadow(s,O,k,V,Q,he,null)}}const ie=O.children;for(let Q=0,de=ie.length;Q<de;Q++)R(ie[Q],k,V,N,C)}function G(O){O.target.removeEventListener("dispose",G);for(const V in m){const N=m[V],C=O.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}const W1={[ud]:dd,[fd]:md,[hd]:gd,[Ws]:pd,[dd]:ud,[md]:fd,[gd]:hd,[pd]:Ws};function X1(s,e){function n(){let Y=!1;const De=new Dt;let fe=null;const ve=new Dt(0,0,0,0);return{setMask:function(Fe){fe!==Fe&&!Y&&(s.colorMask(Fe,Fe,Fe,Fe),fe=Fe)},setLocked:function(Fe){Y=Fe},setClear:function(Fe,Ue,dt,Ft,Zt){Zt===!0&&(Fe*=Ft,Ue*=Ft,dt*=Ft),De.set(Fe,Ue,dt,Ft),ve.equals(De)===!1&&(s.clearColor(Fe,Ue,dt,Ft),ve.copy(De))},reset:function(){Y=!1,fe=null,ve.set(-1,0,0,0)}}}function r(){let Y=!1,De=!1,fe=null,ve=null,Fe=null;return{setReversed:function(Ue){if(De!==Ue){const dt=e.get("EXT_clip_control");De?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT);const Ft=Fe;Fe=null,this.setClear(Ft)}De=Ue},getReversed:function(){return De},setTest:function(Ue){Ue?oe(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(Ue){fe!==Ue&&!Y&&(s.depthMask(Ue),fe=Ue)},setFunc:function(Ue){if(De&&(Ue=W1[Ue]),ve!==Ue){switch(Ue){case ud:s.depthFunc(s.NEVER);break;case dd:s.depthFunc(s.ALWAYS);break;case fd:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case hd:s.depthFunc(s.EQUAL);break;case pd:s.depthFunc(s.GEQUAL);break;case md:s.depthFunc(s.GREATER);break;case gd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=Ue}},setLocked:function(Ue){Y=Ue},setClear:function(Ue){Fe!==Ue&&(De&&(Ue=1-Ue),s.clearDepth(Ue),Fe=Ue)},reset:function(){Y=!1,fe=null,ve=null,Fe=null,De=!1}}}function a(){let Y=!1,De=null,fe=null,ve=null,Fe=null,Ue=null,dt=null,Ft=null,Zt=null;return{setTest:function(Tt){Y||(Tt?oe(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(Tt){De!==Tt&&!Y&&(s.stencilMask(Tt),De=Tt)},setFunc:function(Tt,Cn,Mn){(fe!==Tt||ve!==Cn||Fe!==Mn)&&(s.stencilFunc(Tt,Cn,Mn),fe=Tt,ve=Cn,Fe=Mn)},setOp:function(Tt,Cn,Mn){(Ue!==Tt||dt!==Cn||Ft!==Mn)&&(s.stencilOp(Tt,Cn,Mn),Ue=Tt,dt=Cn,Ft=Mn)},setLocked:function(Tt){Y=Tt},setClear:function(Tt){Zt!==Tt&&(s.clearStencil(Tt),Zt=Tt)},reset:function(){Y=!1,De=null,fe=null,ve=null,Fe=null,Ue=null,dt=null,Ft=null,Zt=null}}}const l=new n,u=new r,f=new a,h=new WeakMap,m=new WeakMap;let y={},x={},g=new WeakMap,M=[],E=null,b=!1,_=null,v=null,D=null,L=null,R=null,G=null,O=null,k=new gt(0,0,0),V=0,N=!1,C=null,B=null,ie=null,Q=null,de=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,me=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(X)[1]),ce=me>=1):X.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ce=me>=2);let pe=null,I={};const w=s.getParameter(s.SCISSOR_BOX),H=s.getParameter(s.VIEWPORT),J=new Dt().fromArray(w),j=new Dt().fromArray(H);function ee(Y,De,fe,ve){const Fe=new Uint8Array(4),Ue=s.createTexture();s.bindTexture(Y,Ue),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<fe;dt++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(De+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return Ue}const ue={};ue[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),ue[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ue[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),oe(s.DEPTH_TEST),u.setFunc(Ws),Qe(!1),rt(Xp),oe(s.CULL_FACE),F(yr);function oe(Y){y[Y]!==!0&&(s.enable(Y),y[Y]=!0)}function ge(Y){y[Y]!==!1&&(s.disable(Y),y[Y]=!1)}function Ae(Y,De){return x[Y]!==De?(s.bindFramebuffer(Y,De),x[Y]=De,Y===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=De),Y===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Ce(Y,De){let fe=M,ve=!1;if(Y){fe=g.get(De),fe===void 0&&(fe=[],g.set(De,fe));const Fe=Y.textures;if(fe.length!==Fe.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let Ue=0,dt=Fe.length;Ue<dt;Ue++)fe[Ue]=s.COLOR_ATTACHMENT0+Ue;fe.length=Fe.length,ve=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,ve=!0);ve&&s.drawBuffers(fe)}function et(Y){return E!==Y?(s.useProgram(Y),E=Y,!0):!1}const Re={[Yr]:s.FUNC_ADD,[Zx]:s.FUNC_SUBTRACT,[Qx]:s.FUNC_REVERSE_SUBTRACT};Re[Jx]=s.MIN,Re[ev]=s.MAX;const Ne={[tv]:s.ZERO,[nv]:s.ONE,[iv]:s.SRC_COLOR,[ld]:s.SRC_ALPHA,[cv]:s.SRC_ALPHA_SATURATE,[av]:s.DST_COLOR,[sv]:s.DST_ALPHA,[rv]:s.ONE_MINUS_SRC_COLOR,[cd]:s.ONE_MINUS_SRC_ALPHA,[lv]:s.ONE_MINUS_DST_COLOR,[ov]:s.ONE_MINUS_DST_ALPHA,[uv]:s.CONSTANT_COLOR,[dv]:s.ONE_MINUS_CONSTANT_COLOR,[fv]:s.CONSTANT_ALPHA,[hv]:s.ONE_MINUS_CONSTANT_ALPHA};function F(Y,De,fe,ve,Fe,Ue,dt,Ft,Zt,Tt){if(Y===yr){b===!0&&(ge(s.BLEND),b=!1);return}if(b===!1&&(oe(s.BLEND),b=!0),Y!==Kx){if(Y!==_||Tt!==N){if((v!==Yr||R!==Yr)&&(s.blendEquation(s.FUNC_ADD),v=Yr,R=Yr),Tt)switch(Y){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ad:s.blendFunc(s.ONE,s.ONE);break;case qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ad:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}D=null,L=null,G=null,O=null,k.set(0,0,0),V=0,_=Y,N=Tt}return}Fe=Fe||De,Ue=Ue||fe,dt=dt||ve,(De!==v||Fe!==R)&&(s.blendEquationSeparate(Re[De],Re[Fe]),v=De,R=Fe),(fe!==D||ve!==L||Ue!==G||dt!==O)&&(s.blendFuncSeparate(Ne[fe],Ne[ve],Ne[Ue],Ne[dt]),D=fe,L=ve,G=Ue,O=dt),(Ft.equals(k)===!1||Zt!==V)&&(s.blendColor(Ft.r,Ft.g,Ft.b,Zt),k.copy(Ft),V=Zt),_=Y,N=!1}function ct(Y,De){Y.side===zi?ge(s.CULL_FACE):oe(s.CULL_FACE);let fe=Y.side===kn;De&&(fe=!fe),Qe(fe),Y.blending===Vs&&Y.transparent===!1?F(yr):F(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const ve=Y.stencilWrite;f.setTest(ve),ve&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),_t(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(Y){C!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),C=Y)}function rt(Y){Y!==qx?(oe(s.CULL_FACE),Y!==B&&(Y===Xp?s.cullFace(s.BACK):Y===Yx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),B=Y}function Ve(Y){Y!==ie&&(ce&&s.lineWidth(Y),ie=Y)}function _t(Y,De,fe){Y?(oe(s.POLYGON_OFFSET_FILL),(Q!==De||de!==fe)&&(s.polygonOffset(De,fe),Q=De,de=fe)):ge(s.POLYGON_OFFSET_FILL)}function ke(Y){Y?oe(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function U(Y){Y===void 0&&(Y=s.TEXTURE0+he-1),pe!==Y&&(s.activeTexture(Y),pe=Y)}function A(Y,De,fe){fe===void 0&&(pe===null?fe=s.TEXTURE0+he-1:fe=pe);let ve=I[fe];ve===void 0&&(ve={type:void 0,texture:void 0},I[fe]=ve),(ve.type!==Y||ve.texture!==De)&&(pe!==fe&&(s.activeTexture(fe),pe=fe),s.bindTexture(Y,De||ue[Y]),ve.type=Y,ve.texture=De)}function se(){const Y=I[pe];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function _e(){try{s.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ye(){try{s.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xe(){try{s.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ye(){try{s.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Pe(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Oe(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ft(){try{s.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function we(){try{s.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function He(){try{s.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function tt(){try{s.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ot(Y){J.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),J.copy(Y))}function je(Y){j.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),j.copy(Y))}function xt(Y,De){let fe=m.get(De);fe===void 0&&(fe=new WeakMap,m.set(De,fe));let ve=fe.get(Y);ve===void 0&&(ve=s.getUniformBlockIndex(De,Y.name),fe.set(Y,ve))}function ut(Y,De){const ve=m.get(De).get(Y);h.get(De)!==ve&&(s.uniformBlockBinding(De,ve,Y.__bindingPointIndex),h.set(De,ve))}function Pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),y={},pe=null,I={},x={},g=new WeakMap,M=[],E=null,b=!1,_=null,v=null,D=null,L=null,R=null,G=null,O=null,k=new gt(0,0,0),V=0,N=!1,C=null,B=null,ie=null,Q=null,de=null,J.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:oe,disable:ge,bindFramebuffer:Ae,drawBuffers:Ce,useProgram:et,setBlending:F,setMaterial:ct,setFlipSided:Qe,setCullFace:rt,setLineWidth:Ve,setPolygonOffset:_t,setScissorTest:ke,activeTexture:U,bindTexture:A,unbindTexture:se,compressedTexImage2D:_e,compressedTexImage3D:ye,texImage2D:He,texImage3D:tt,updateUBOMapping:xt,uniformBlockBinding:ut,texStorage2D:ft,texStorage3D:we,texSubImage2D:xe,texSubImage3D:Ye,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Oe,scissor:ot,viewport:je,reset:Pt}}function q1(s,e,n,r,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new yt,y=new WeakMap;let x;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,A){return M?new OffscreenCanvas(U,A):Ol("canvas")}function b(U,A,se){let _e=1;const ye=ke(U);if((ye.width>se||ye.height>se)&&(_e=se/Math.max(ye.width,ye.height)),_e<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const xe=Math.floor(_e*ye.width),Ye=Math.floor(_e*ye.height);x===void 0&&(x=E(xe,Ye));const Pe=A?E(xe,Ye):x;return Pe.width=xe,Pe.height=Ye,Pe.getContext("2d").drawImage(U,0,0,xe,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+xe+"x"+Ye+")."),Pe}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),U;return U}function _(U){return U.generateMipmaps}function v(U){s.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(U,A,se,_e,ye=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let xe=A;if(A===s.RED&&(se===s.FLOAT&&(xe=s.R32F),se===s.HALF_FLOAT&&(xe=s.R16F),se===s.UNSIGNED_BYTE&&(xe=s.R8)),A===s.RED_INTEGER&&(se===s.UNSIGNED_BYTE&&(xe=s.R8UI),se===s.UNSIGNED_SHORT&&(xe=s.R16UI),se===s.UNSIGNED_INT&&(xe=s.R32UI),se===s.BYTE&&(xe=s.R8I),se===s.SHORT&&(xe=s.R16I),se===s.INT&&(xe=s.R32I)),A===s.RG&&(se===s.FLOAT&&(xe=s.RG32F),se===s.HALF_FLOAT&&(xe=s.RG16F),se===s.UNSIGNED_BYTE&&(xe=s.RG8)),A===s.RG_INTEGER&&(se===s.UNSIGNED_BYTE&&(xe=s.RG8UI),se===s.UNSIGNED_SHORT&&(xe=s.RG16UI),se===s.UNSIGNED_INT&&(xe=s.RG32UI),se===s.BYTE&&(xe=s.RG8I),se===s.SHORT&&(xe=s.RG16I),se===s.INT&&(xe=s.RG32I)),A===s.RGB_INTEGER&&(se===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),se===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),se===s.UNSIGNED_INT&&(xe=s.RGB32UI),se===s.BYTE&&(xe=s.RGB8I),se===s.SHORT&&(xe=s.RGB16I),se===s.INT&&(xe=s.RGB32I)),A===s.RGBA_INTEGER&&(se===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),se===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),se===s.UNSIGNED_INT&&(xe=s.RGBA32UI),se===s.BYTE&&(xe=s.RGBA8I),se===s.SHORT&&(xe=s.RGBA16I),se===s.INT&&(xe=s.RGBA32I)),A===s.RGB&&se===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),A===s.RGBA){const Ye=ye?Fl:Rt.getTransfer(_e);se===s.FLOAT&&(xe=s.RGBA32F),se===s.HALF_FLOAT&&(xe=s.RGBA16F),se===s.UNSIGNED_BYTE&&(xe=Ye===Nt?s.SRGB8_ALPHA8:s.RGBA8),se===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),se===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function R(U,A){let se;return U?A===null||A===Jr||A===Ys?se=s.DEPTH24_STENCIL8:A===Bi?se=s.DEPTH32F_STENCIL8:A===Wo&&(se=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Jr||A===Ys?se=s.DEPTH_COMPONENT24:A===Bi?se=s.DEPTH_COMPONENT32F:A===Wo&&(se=s.DEPTH_COMPONENT16),se}function G(U,A){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==fi&&U.minFilter!==yi?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function O(U){const A=U.target;A.removeEventListener("dispose",O),V(A),A.isVideoTexture&&y.delete(A)}function k(U){const A=U.target;A.removeEventListener("dispose",k),C(A)}function V(U){const A=r.get(U);if(A.__webglInit===void 0)return;const se=U.source,_e=g.get(se);if(_e){const ye=_e[A.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&N(U),Object.keys(_e).length===0&&g.delete(se)}r.remove(U)}function N(U){const A=r.get(U);s.deleteTexture(A.__webglTexture);const se=U.source,_e=g.get(se);delete _e[A.__cacheKey],u.memory.textures--}function C(U){const A=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(A.__webglFramebuffer[_e]))for(let ye=0;ye<A.__webglFramebuffer[_e].length;ye++)s.deleteFramebuffer(A.__webglFramebuffer[_e][ye]);else s.deleteFramebuffer(A.__webglFramebuffer[_e]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[_e])}else{if(Array.isArray(A.__webglFramebuffer))for(let _e=0;_e<A.__webglFramebuffer.length;_e++)s.deleteFramebuffer(A.__webglFramebuffer[_e]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _e=0;_e<A.__webglColorRenderbuffer.length;_e++)A.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[_e]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const se=U.textures;for(let _e=0,ye=se.length;_e<ye;_e++){const xe=r.get(se[_e]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),u.memory.textures--),r.remove(se[_e])}r.remove(U)}let B=0;function ie(){B=0}function Q(){const U=B;return U>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),B+=1,U}function de(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function he(U,A){const se=r.get(U);if(U.isVideoTexture&&Ve(U),U.isRenderTargetTexture===!1&&U.version>0&&se.__version!==U.version){const _e=U.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(se,U,A);return}}n.bindTexture(s.TEXTURE_2D,se.__webglTexture,s.TEXTURE0+A)}function ce(U,A){const se=r.get(U);if(U.version>0&&se.__version!==U.version){j(se,U,A);return}n.bindTexture(s.TEXTURE_2D_ARRAY,se.__webglTexture,s.TEXTURE0+A)}function me(U,A){const se=r.get(U);if(U.version>0&&se.__version!==U.version){j(se,U,A);return}n.bindTexture(s.TEXTURE_3D,se.__webglTexture,s.TEXTURE0+A)}function X(U,A){const se=r.get(U);if(U.version>0&&se.__version!==U.version){ee(se,U,A);return}n.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture,s.TEXTURE0+A)}const pe={[_d]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[yd]:s.MIRRORED_REPEAT},I={[fi]:s.NEAREST,[wv]:s.NEAREST_MIPMAP_NEAREST,[ol]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[Cu]:s.LINEAR_MIPMAP_NEAREST,[Zr]:s.LINEAR_MIPMAP_LINEAR},w={[Av]:s.NEVER,[Lv]:s.ALWAYS,[Cv]:s.LESS,[ag]:s.LEQUAL,[Rv]:s.EQUAL,[Dv]:s.GEQUAL,[Pv]:s.GREATER,[Nv]:s.NOTEQUAL};function H(U,A){if(A.type===Bi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===yi||A.magFilter===Cu||A.magFilter===ol||A.magFilter===Zr||A.minFilter===yi||A.minFilter===Cu||A.minFilter===ol||A.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,pe[A.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,pe[A.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,pe[A.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,I[A.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,I[A.minFilter]),A.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,w[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===fi||A.minFilter!==ol&&A.minFilter!==Zr||A.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function J(U,A){let se=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",O));const _e=A.source;let ye=g.get(_e);ye===void 0&&(ye={},g.set(_e,ye));const xe=de(A);if(xe!==U.__cacheKey){ye[xe]===void 0&&(ye[xe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,se=!0),ye[xe].usedTimes++;const Ye=ye[U.__cacheKey];Ye!==void 0&&(ye[U.__cacheKey].usedTimes--,Ye.usedTimes===0&&N(A)),U.__cacheKey=xe,U.__webglTexture=ye[xe].texture}return se}function j(U,A,se){let _e=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_e=s.TEXTURE_3D);const ye=J(U,A),xe=A.source;n.bindTexture(_e,U.__webglTexture,s.TEXTURE0+se);const Ye=r.get(xe);if(xe.version!==Ye.__version||ye===!0){n.activeTexture(s.TEXTURE0+se);const Pe=Rt.getPrimaries(Rt.workingColorSpace),Oe=A.colorSpace===_r?null:Rt.getPrimaries(A.colorSpace),ft=A.colorSpace===_r||Pe===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let we=b(A.image,!1,a.maxTextureSize);we=_t(A,we);const He=l.convert(A.format,A.colorSpace),tt=l.convert(A.type);let ot=L(A.internalFormat,He,tt,A.colorSpace,A.isVideoTexture);H(_e,A);let je;const xt=A.mipmaps,ut=A.isVideoTexture!==!0,Pt=Ye.__version===void 0||ye===!0,Y=xe.dataReady,De=G(A,we);if(A.isDepthTexture)ot=R(A.format===$s,A.type),Pt&&(ut?n.texStorage2D(s.TEXTURE_2D,1,ot,we.width,we.height):n.texImage2D(s.TEXTURE_2D,0,ot,we.width,we.height,0,He,tt,null));else if(A.isDataTexture)if(xt.length>0){ut&&Pt&&n.texStorage2D(s.TEXTURE_2D,De,ot,xt[0].width,xt[0].height);for(let fe=0,ve=xt.length;fe<ve;fe++)je=xt[fe],ut?Y&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,je.width,je.height,He,tt,je.data):n.texImage2D(s.TEXTURE_2D,fe,ot,je.width,je.height,0,He,tt,je.data);A.generateMipmaps=!1}else ut?(Pt&&n.texStorage2D(s.TEXTURE_2D,De,ot,we.width,we.height),Y&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,we.width,we.height,He,tt,we.data)):n.texImage2D(s.TEXTURE_2D,0,ot,we.width,we.height,0,He,tt,we.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ut&&Pt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,ot,xt[0].width,xt[0].height,we.depth);for(let fe=0,ve=xt.length;fe<ve;fe++)if(je=xt[fe],A.format!==di)if(He!==null)if(ut){if(Y)if(A.layerUpdates.size>0){const Fe=Sm(je.width,je.height,A.format,A.type);for(const Ue of A.layerUpdates){const dt=je.data.subarray(Ue*Fe/je.data.BYTES_PER_ELEMENT,(Ue+1)*Fe/je.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,Ue,je.width,je.height,1,He,dt)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,je.width,je.height,we.depth,He,je.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,ot,je.width,je.height,we.depth,0,je.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?Y&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,je.width,je.height,we.depth,He,tt,je.data):n.texImage3D(s.TEXTURE_2D_ARRAY,fe,ot,je.width,je.height,we.depth,0,He,tt,je.data)}else{ut&&Pt&&n.texStorage2D(s.TEXTURE_2D,De,ot,xt[0].width,xt[0].height);for(let fe=0,ve=xt.length;fe<ve;fe++)je=xt[fe],A.format!==di?He!==null?ut?Y&&n.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,je.width,je.height,He,je.data):n.compressedTexImage2D(s.TEXTURE_2D,fe,ot,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?Y&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,je.width,je.height,He,tt,je.data):n.texImage2D(s.TEXTURE_2D,fe,ot,je.width,je.height,0,He,tt,je.data)}else if(A.isDataArrayTexture)if(ut){if(Pt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,ot,we.width,we.height,we.depth),Y)if(A.layerUpdates.size>0){const fe=Sm(we.width,we.height,A.format,A.type);for(const ve of A.layerUpdates){const Fe=we.data.subarray(ve*fe/we.data.BYTES_PER_ELEMENT,(ve+1)*fe/we.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,we.width,we.height,1,He,tt,Fe)}A.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,He,tt,we.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,ot,we.width,we.height,we.depth,0,He,tt,we.data);else if(A.isData3DTexture)ut?(Pt&&n.texStorage3D(s.TEXTURE_3D,De,ot,we.width,we.height,we.depth),Y&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,He,tt,we.data)):n.texImage3D(s.TEXTURE_3D,0,ot,we.width,we.height,we.depth,0,He,tt,we.data);else if(A.isFramebufferTexture){if(Pt)if(ut)n.texStorage2D(s.TEXTURE_2D,De,ot,we.width,we.height);else{let fe=we.width,ve=we.height;for(let Fe=0;Fe<De;Fe++)n.texImage2D(s.TEXTURE_2D,Fe,ot,fe,ve,0,He,tt,null),fe>>=1,ve>>=1}}else if(xt.length>0){if(ut&&Pt){const fe=ke(xt[0]);n.texStorage2D(s.TEXTURE_2D,De,ot,fe.width,fe.height)}for(let fe=0,ve=xt.length;fe<ve;fe++)je=xt[fe],ut?Y&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,He,tt,je):n.texImage2D(s.TEXTURE_2D,fe,ot,He,tt,je);A.generateMipmaps=!1}else if(ut){if(Pt){const fe=ke(we);n.texStorage2D(s.TEXTURE_2D,De,ot,fe.width,fe.height)}Y&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,He,tt,we)}else n.texImage2D(s.TEXTURE_2D,0,ot,He,tt,we);_(A)&&v(_e),Ye.__version=xe.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ee(U,A,se){if(A.image.length!==6)return;const _e=J(U,A),ye=A.source;n.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+se);const xe=r.get(ye);if(ye.version!==xe.__version||_e===!0){n.activeTexture(s.TEXTURE0+se);const Ye=Rt.getPrimaries(Rt.workingColorSpace),Pe=A.colorSpace===_r?null:Rt.getPrimaries(A.colorSpace),Oe=A.colorSpace===_r||Ye===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ft=A.isCompressedTexture||A.image[0].isCompressedTexture,we=A.image[0]&&A.image[0].isDataTexture,He=[];for(let ve=0;ve<6;ve++)!ft&&!we?He[ve]=b(A.image[ve],!0,a.maxCubemapSize):He[ve]=we?A.image[ve].image:A.image[ve],He[ve]=_t(A,He[ve]);const tt=He[0],ot=l.convert(A.format,A.colorSpace),je=l.convert(A.type),xt=L(A.internalFormat,ot,je,A.colorSpace),ut=A.isVideoTexture!==!0,Pt=xe.__version===void 0||_e===!0,Y=ye.dataReady;let De=G(A,tt);H(s.TEXTURE_CUBE_MAP,A);let fe;if(ft){ut&&Pt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,De,xt,tt.width,tt.height);for(let ve=0;ve<6;ve++){fe=He[ve].mipmaps;for(let Fe=0;Fe<fe.length;Fe++){const Ue=fe[Fe];A.format!==di?ot!==null?ut?Y&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,Ue.width,Ue.height,ot,Ue.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,xt,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,Ue.width,Ue.height,ot,je,Ue.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,xt,Ue.width,Ue.height,0,ot,je,Ue.data)}}}else{if(fe=A.mipmaps,ut&&Pt){fe.length>0&&De++;const ve=ke(He[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,De,xt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(we){ut?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,He[ve].width,He[ve].height,ot,je,He[ve].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,xt,He[ve].width,He[ve].height,0,ot,je,He[ve].data);for(let Fe=0;Fe<fe.length;Fe++){const dt=fe[Fe].image[ve].image;ut?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,dt.width,dt.height,ot,je,dt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,xt,dt.width,dt.height,0,ot,je,dt.data)}}else{ut?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ot,je,He[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,xt,ot,je,He[ve]);for(let Fe=0;Fe<fe.length;Fe++){const Ue=fe[Fe];ut?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,ot,je,Ue.image[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,xt,ot,je,Ue.image[ve])}}}_(A)&&v(s.TEXTURE_CUBE_MAP),xe.__version=ye.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ue(U,A,se,_e,ye,xe){const Ye=l.convert(se.format,se.colorSpace),Pe=l.convert(se.type),Oe=L(se.internalFormat,Ye,Pe,se.colorSpace),ft=r.get(A),we=r.get(se);if(we.__renderTarget=A,!ft.__hasExternalTextures){const He=Math.max(1,A.width>>xe),tt=Math.max(1,A.height>>xe);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?n.texImage3D(ye,xe,Oe,He,tt,A.depth,0,Ye,Pe,null):n.texImage2D(ye,xe,Oe,He,tt,0,Ye,Pe,null)}n.bindFramebuffer(s.FRAMEBUFFER,U),rt(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,ye,we.__webglTexture,0,Qe(A)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,ye,we.__webglTexture,xe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(U,A,se){if(s.bindRenderbuffer(s.RENDERBUFFER,U),A.depthBuffer){const _e=A.depthTexture,ye=_e&&_e.isDepthTexture?_e.type:null,xe=R(A.stencilBuffer,ye),Ye=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=Qe(A);rt(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,xe,A.width,A.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,xe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,xe,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ye,s.RENDERBUFFER,U)}else{const _e=A.textures;for(let ye=0;ye<_e.length;ye++){const xe=_e[ye],Ye=l.convert(xe.format,xe.colorSpace),Pe=l.convert(xe.type),Oe=L(xe.internalFormat,Ye,Pe,xe.colorSpace),ft=Qe(A);se&&rt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Oe,A.width,A.height):rt(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Oe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Oe,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=r.get(A.depthTexture);_e.__renderTarget=A,(!_e.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),he(A.depthTexture,0);const ye=_e.__webglTexture,xe=Qe(A);if(A.depthTexture.format===Gs)rt(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0);else if(A.depthTexture.format===$s)rt(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Ae(U){const A=r.get(U),se=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const _e=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_e){const ye=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_e.removeEventListener("dispose",ye)};_e.addEventListener("dispose",ye),A.__depthDisposeCallback=ye}A.__boundDepthTexture=_e}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");ge(A.__webglFramebuffer,U)}else if(se){A.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[_e]),A.__webglDepthbuffer[_e]===void 0)A.__webglDepthbuffer[_e]=s.createRenderbuffer(),oe(A.__webglDepthbuffer[_e],U,!1);else{const ye=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=A.__webglDepthbuffer[_e];s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,xe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),oe(A.__webglDepthbuffer,U,!1);else{const _e=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,ye)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(U,A,se){const _e=r.get(U);A!==void 0&&ue(_e.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),se!==void 0&&Ae(U)}function et(U){const A=U.texture,se=r.get(U),_e=r.get(A);U.addEventListener("dispose",k);const ye=U.textures,xe=U.isWebGLCubeRenderTarget===!0,Ye=ye.length>1;if(Ye||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=A.version,u.memory.textures++),xe){se.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(A.mipmaps&&A.mipmaps.length>0){se.__webglFramebuffer[Pe]=[];for(let Oe=0;Oe<A.mipmaps.length;Oe++)se.__webglFramebuffer[Pe][Oe]=s.createFramebuffer()}else se.__webglFramebuffer[Pe]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){se.__webglFramebuffer=[];for(let Pe=0;Pe<A.mipmaps.length;Pe++)se.__webglFramebuffer[Pe]=s.createFramebuffer()}else se.__webglFramebuffer=s.createFramebuffer();if(Ye)for(let Pe=0,Oe=ye.length;Pe<Oe;Pe++){const ft=r.get(ye[Pe]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&rt(U)===!1){se.__webglMultisampledFramebuffer=s.createFramebuffer(),se.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let Pe=0;Pe<ye.length;Pe++){const Oe=ye[Pe];se.__webglColorRenderbuffer[Pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,se.__webglColorRenderbuffer[Pe]);const ft=l.convert(Oe.format,Oe.colorSpace),we=l.convert(Oe.type),He=L(Oe.internalFormat,ft,we,Oe.colorSpace,U.isXRRenderTarget===!0),tt=Qe(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,He,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,se.__webglColorRenderbuffer[Pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(se.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(se.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xe){n.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),H(s.TEXTURE_CUBE_MAP,A);for(let Pe=0;Pe<6;Pe++)if(A.mipmaps&&A.mipmaps.length>0)for(let Oe=0;Oe<A.mipmaps.length;Oe++)ue(se.__webglFramebuffer[Pe][Oe],U,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Oe);else ue(se.__webglFramebuffer[Pe],U,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);_(A)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ye){for(let Pe=0,Oe=ye.length;Pe<Oe;Pe++){const ft=ye[Pe],we=r.get(ft);n.bindTexture(s.TEXTURE_2D,we.__webglTexture),H(s.TEXTURE_2D,ft),ue(se.__webglFramebuffer,U,ft,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,0),_(ft)&&v(s.TEXTURE_2D)}n.unbindTexture()}else{let Pe=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Pe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Pe,_e.__webglTexture),H(Pe,A),A.mipmaps&&A.mipmaps.length>0)for(let Oe=0;Oe<A.mipmaps.length;Oe++)ue(se.__webglFramebuffer[Oe],U,A,s.COLOR_ATTACHMENT0,Pe,Oe);else ue(se.__webglFramebuffer,U,A,s.COLOR_ATTACHMENT0,Pe,0);_(A)&&v(Pe),n.unbindTexture()}U.depthBuffer&&Ae(U)}function Re(U){const A=U.textures;for(let se=0,_e=A.length;se<_e;se++){const ye=A[se];if(_(ye)){const xe=D(U),Ye=r.get(ye).__webglTexture;n.bindTexture(xe,Ye),v(xe),n.unbindTexture()}}}const Ne=[],F=[];function ct(U){if(U.samples>0){if(rt(U)===!1){const A=U.textures,se=U.width,_e=U.height;let ye=s.COLOR_BUFFER_BIT;const xe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ye=r.get(U),Pe=A.length>1;if(Pe)for(let Oe=0;Oe<A.length;Oe++)n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Oe=0;Oe<A.length;Oe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[Oe]);const ft=r.get(A[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,se,_e,0,0,se,_e,ye,s.NEAREST),h===!0&&(Ne.length=0,F.length=0,Ne.push(s.COLOR_ATTACHMENT0+Oe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ne.push(xe),F.push(xe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ne))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Pe)for(let Oe=0;Oe<A.length;Oe++){n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[Oe]);const ft=r.get(A[Oe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,ft,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const A=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Qe(U){return Math.min(a.maxSamples,U.samples)}function rt(U){const A=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ve(U){const A=u.render.frame;y.get(U)!==A&&(y.set(U,A),U.update())}function _t(U,A){const se=U.colorSpace,_e=U.format,ye=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||se!==Ks&&se!==_r&&(Rt.getTransfer(se)===Nt?(_e!==di||ye!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),A}function ke(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=Q,this.resetTextureUnits=ie,this.setTexture2D=he,this.setTexture2DArray=ce,this.setTexture3D=me,this.setTextureCube=X,this.rebindTextures=Ce,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=rt}function Y1(s,e){function n(r,a=_r){let l;const u=Rt.getTransfer(a);if(r===Gi)return s.UNSIGNED_BYTE;if(r===tf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===nf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Qm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Km)return s.BYTE;if(r===Zm)return s.SHORT;if(r===Wo)return s.UNSIGNED_SHORT;if(r===ef)return s.INT;if(r===Jr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===Yo)return s.HALF_FLOAT;if(r===Jm)return s.ALPHA;if(r===eg)return s.RGB;if(r===di)return s.RGBA;if(r===tg)return s.LUMINANCE;if(r===ng)return s.LUMINANCE_ALPHA;if(r===Gs)return s.DEPTH_COMPONENT;if(r===$s)return s.DEPTH_STENCIL;if(r===ig)return s.RED;if(r===rf)return s.RED_INTEGER;if(r===rg)return s.RG;if(r===sf)return s.RG_INTEGER;if(r===of)return s.RGBA_INTEGER;if(r===Rl||r===Pl||r===Nl||r===Dl)if(u===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Rl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Rl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sd||r===Md||r===wd||r===Ed)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Sd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Md)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ed)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Td||r===bd||r===Ad)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Td||r===bd)return u===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ad)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Cd||r===Rd||r===Pd||r===Nd||r===Dd||r===Ld||r===Id||r===Ud||r===Fd||r===kd||r===Od||r===zd||r===Bd||r===Hd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Cd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ld)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Id)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ud)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Od)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ll||r===Vd||r===Gd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Ll)return u===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sg||r===jd||r===Wd||r===Xd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ll)return l.COMPRESSED_RED_RGTC1_EXT;if(r===jd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ys?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const $1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K1=`
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

}`;class Z1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new An,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new wr({vertexShader:$1,fragmentShader:K1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ht(new jl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q1 extends eo{constructor(e,n){super();const r=this;let a=null,l=1,u=null,f="local-floor",h=1,m=null,y=null,x=null,g=null,M=null,E=null;const b=new Z1,_=n.getContextAttributes();let v=null,D=null;const L=[],R=[],G=new yt;let O=null;const k=new Fn;k.viewport=new Dt;const V=new Fn;V.viewport=new Dt;const N=[k,V],C=new v_;let B=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=L[j];return ee===void 0&&(ee=new Ku,L[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=L[j];return ee===void 0&&(ee=new Ku,L[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=L[j];return ee===void 0&&(ee=new Ku,L[j]=ee),ee.getHandSpace()};function Q(j){const ee=R.indexOf(j.inputSource);if(ee===-1)return;const ue=L[ee];ue!==void 0&&(ue.update(j.inputSource,j.frame,m||u),ue.dispatchEvent({type:j.type,data:j.inputSource}))}function de(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",de),a.removeEventListener("inputsourceschange",he);for(let j=0;j<L.length;j++){const ee=R[j];ee!==null&&(R[j]=null,L[j].disconnect(ee))}B=null,ie=null,b.reset(),e.setRenderTarget(v),M=null,g=null,x=null,a=null,D=null,J.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){l=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){f=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(j){m=j},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",de),a.addEventListener("inputsourceschange",he),_.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,oe=null,ge=null;_.depth&&(ge=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=_.stencil?$s:Gs,oe=_.stencil?Ys:Jr);const Ae={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:l};x=new XRWebGLBinding(a,n),g=x.createProjectionLayer(Ae),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),D=new es(g.textureWidth,g.textureHeight,{format:di,type:Gi,depthTexture:new yg(g.textureWidth,g.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ue={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,n,ue),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new es(M.framebufferWidth,M.framebufferHeight,{format:di,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await a.requestReferenceSpace(f),J.setContext(a),J.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function he(j){for(let ee=0;ee<j.removed.length;ee++){const ue=j.removed[ee],oe=R.indexOf(ue);oe>=0&&(R[oe]=null,L[oe].disconnect(ue))}for(let ee=0;ee<j.added.length;ee++){const ue=j.added[ee];let oe=R.indexOf(ue);if(oe===-1){for(let Ae=0;Ae<L.length;Ae++)if(Ae>=R.length){R.push(ue),oe=Ae;break}else if(R[Ae]===null){R[Ae]=ue,oe=Ae;break}if(oe===-1)break}const ge=L[oe];ge&&ge.connect(ue)}}const ce=new Z,me=new Z;function X(j,ee,ue){ce.setFromMatrixPosition(ee.matrixWorld),me.setFromMatrixPosition(ue.matrixWorld);const oe=ce.distanceTo(me),ge=ee.projectionMatrix.elements,Ae=ue.projectionMatrix.elements,Ce=ge[14]/(ge[10]-1),et=ge[14]/(ge[10]+1),Re=(ge[9]+1)/ge[5],Ne=(ge[9]-1)/ge[5],F=(ge[8]-1)/ge[0],ct=(Ae[8]+1)/Ae[0],Qe=Ce*F,rt=Ce*ct,Ve=oe/(-F+ct),_t=Ve*-F;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(_t),j.translateZ(Ve),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ge[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const ke=Ce+Ve,U=et+Ve,A=Qe-_t,se=rt+(oe-_t),_e=Re*et/U*ke,ye=Ne*et/U*ke;j.projectionMatrix.makePerspective(A,se,_e,ye,ke,U),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function pe(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let ee=j.near,ue=j.far;b.texture!==null&&(b.depthNear>0&&(ee=b.depthNear),b.depthFar>0&&(ue=b.depthFar)),C.near=V.near=k.near=ee,C.far=V.far=k.far=ue,(B!==C.near||ie!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,ie=C.far),k.layers.mask=j.layers.mask|2,V.layers.mask=j.layers.mask|4,C.layers.mask=k.layers.mask|V.layers.mask;const oe=j.parent,ge=C.cameras;pe(C,oe);for(let Ae=0;Ae<ge.length;Ae++)pe(ge[Ae],oe);ge.length===2?X(C,k,V):C.projectionMatrix.copy(k.projectionMatrix),I(j,C,oe)};function I(j,ee,ue){ue===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(ue.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=qd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(g===null&&M===null))return h},this.setFoveation=function(j){h=j,g!==null&&(g.fixedFoveation=j),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=j)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)};let w=null;function H(j,ee){if(y=ee.getViewerPose(m||u),E=ee,y!==null){const ue=y.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let oe=!1;ue.length!==C.cameras.length&&(C.cameras.length=0,oe=!0);for(let Ce=0;Ce<ue.length;Ce++){const et=ue[Ce];let Re=null;if(M!==null)Re=M.getViewport(et);else{const F=x.getViewSubImage(g,et);Re=F.viewport,Ce===0&&(e.setRenderTargetTextures(D,F.colorTexture,g.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(D))}let Ne=N[Ce];Ne===void 0&&(Ne=new Fn,Ne.layers.enable(Ce),Ne.viewport=new Dt,N[Ce]=Ne),Ne.matrix.fromArray(et.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(et.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Re.x,Re.y,Re.width,Re.height),Ce===0&&(C.matrix.copy(Ne.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),oe===!0&&C.cameras.push(Ne)}const ge=a.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&x){const Ce=x.getDepthInformation(ue[0]);Ce&&Ce.isValid&&Ce.texture&&b.init(e,Ce,a.renderState)}}for(let ue=0;ue<L.length;ue++){const oe=R[ue],ge=L[ue];oe!==null&&ge!==void 0&&ge.update(oe,ee,m||u)}w&&w(j,ee),ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ee}),E=null}const J=new Eg;J.setAnimationLoop(H),this.setAnimationLoop=function(j){w=j},this.dispose=function(){}}}const Gr=new Si,J1=new Vt;function ew(s,e){function n(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function r(_,v){v.color.getRGB(_.fogColor.value,mg(s)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function a(_,v,D,L,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(_,v):v.isMeshToonMaterial?(l(_,v),x(_,v)):v.isMeshPhongMaterial?(l(_,v),y(_,v)):v.isMeshStandardMaterial?(l(_,v),g(_,v),v.isMeshPhysicalMaterial&&M(_,v,R)):v.isMeshMatcapMaterial?(l(_,v),E(_,v)):v.isMeshDepthMaterial?l(_,v):v.isMeshDistanceMaterial?(l(_,v),b(_,v)):v.isMeshNormalMaterial?l(_,v):v.isLineBasicMaterial?(u(_,v),v.isLineDashedMaterial&&f(_,v)):v.isPointsMaterial?h(_,v,D,L):v.isSpriteMaterial?m(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,n(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===kn&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,n(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===kn&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,n(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,n(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const D=e.get(v),L=D.envMap,R=D.envMapRotation;L&&(_.envMap.value=L,Gr.copy(R),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),_.envMapRotation.value.setFromMatrix4(J1.makeRotationFromEuler(Gr)),_.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,_.aoMapTransform))}function u(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform))}function f(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function h(_,v,D,L){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*D,_.scale.value=L*.5,v.map&&(_.map.value=v.map,n(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function m(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function y(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function x(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function g(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function M(_,v,D){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=D.texture,_.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,v){v.matcap&&(_.matcap.value=v.matcap)}function b(_,v){const D=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(D.matrixWorld),_.nearDistance.value=D.shadow.camera.near,_.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function tw(s,e,n,r){let a={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,L){const R=L.program;r.uniformBlockBinding(D,R)}function m(D,L){let R=a[D.id];R===void 0&&(E(D),R=y(D),a[D.id]=R,D.addEventListener("dispose",_));const G=L.program;r.updateUBOMapping(D,G);const O=e.render.frame;l[D.id]!==O&&(g(D),l[D.id]=O)}function y(D){const L=x();D.__bindingPointIndex=L;const R=s.createBuffer(),G=D.__size,O=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,G,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,R),R}function x(){for(let D=0;D<f;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const L=a[D.id],R=D.uniforms,G=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let O=0,k=R.length;O<k;O++){const V=Array.isArray(R[O])?R[O]:[R[O]];for(let N=0,C=V.length;N<C;N++){const B=V[N];if(M(B,O,N,G)===!0){const ie=B.__offset,Q=Array.isArray(B.value)?B.value:[B.value];let de=0;for(let he=0;he<Q.length;he++){const ce=Q[he],me=b(ce);typeof ce=="number"||typeof ce=="boolean"?(B.__data[0]=ce,s.bufferSubData(s.UNIFORM_BUFFER,ie+de,B.__data)):ce.isMatrix3?(B.__data[0]=ce.elements[0],B.__data[1]=ce.elements[1],B.__data[2]=ce.elements[2],B.__data[3]=0,B.__data[4]=ce.elements[3],B.__data[5]=ce.elements[4],B.__data[6]=ce.elements[5],B.__data[7]=0,B.__data[8]=ce.elements[6],B.__data[9]=ce.elements[7],B.__data[10]=ce.elements[8],B.__data[11]=0):(ce.toArray(B.__data,de),de+=me.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ie,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,L,R,G){const O=D.value,k=L+"_"+R;if(G[k]===void 0)return typeof O=="number"||typeof O=="boolean"?G[k]=O:G[k]=O.clone(),!0;{const V=G[k];if(typeof O=="number"||typeof O=="boolean"){if(V!==O)return G[k]=O,!0}else if(V.equals(O)===!1)return V.copy(O),!0}return!1}function E(D){const L=D.uniforms;let R=0;const G=16;for(let k=0,V=L.length;k<V;k++){const N=Array.isArray(L[k])?L[k]:[L[k]];for(let C=0,B=N.length;C<B;C++){const ie=N[C],Q=Array.isArray(ie.value)?ie.value:[ie.value];for(let de=0,he=Q.length;de<he;de++){const ce=Q[de],me=b(ce),X=R%G,pe=X%me.boundary,I=X+pe;R+=pe,I!==0&&G-I<me.storage&&(R+=G-I),ie.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=R,R+=me.storage}}}const O=R%G;return O>0&&(R+=G-O),D.__size=R,D.__cache={},this}function b(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function _(D){const L=D.target;L.removeEventListener("dispose",_);const R=u.indexOf(L.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function v(){for(const D in a)s.deleteBuffer(a[D]);u=[],a={},l={}}return{bind:h,update:m,dispose:v}}class Rg{constructor(e={}){const{canvas:n=Uv(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const E=new Uint32Array(4),b=new Int32Array(4);let _=null,v=null;const D=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=Sr,this.toneMappingExposure=1;const R=this;let G=!1,O=0,k=0,V=null,N=-1,C=null;const B=new Dt,ie=new Dt;let Q=null;const de=new gt(0);let he=0,ce=n.width,me=n.height,X=1,pe=null,I=null;const w=new Dt(0,0,ce,me),H=new Dt(0,0,ce,me);let J=!1;const j=new cf;let ee=!1,ue=!1;this.transmissionResolutionScale=1;const oe=new Vt,ge=new Vt,Ae=new Z,Ce=new Dt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function Ne(){return V===null?X:1}let F=r;function ct(P,$){return n.getContext(P,$)}try{const P={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:y,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jd}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",Ue,!1),F===null){const $="webgl2";if(F=ct($,P),F===null)throw ct($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Qe,rt,Ve,_t,ke,U,A,se,_e,ye,xe,Ye,Pe,Oe,ft,we,He,tt,ot,je,xt,ut,Pt,Y;function De(){Qe=new fM(F),Qe.init(),ut=new Y1(F,Qe),rt=new sM(F,Qe,e,ut),Ve=new X1(F,Qe),rt.reverseDepthBuffer&&g&&Ve.buffers.depth.setReversed(!0),_t=new mM(F),ke=new L1,U=new q1(F,Qe,Ve,ke,rt,ut,_t),A=new aM(R),se=new dM(R),_e=new S_(F),Pt=new iM(F,_e),ye=new hM(F,_e,_t,Pt),xe=new xM(F,ye,_e,_t),ot=new gM(F,rt,U),we=new oM(ke),Ye=new D1(R,A,se,Qe,rt,Pt,we),Pe=new ew(R,ke),Oe=new U1,ft=new H1(Qe),tt=new nM(R,A,se,Ve,xe,M,h),He=new j1(R,xe,rt),Y=new tw(F,_t,rt,Ve),je=new rM(F,Qe,_t),xt=new pM(F,Qe,_t),_t.programs=Ye.programs,R.capabilities=rt,R.extensions=Qe,R.properties=ke,R.renderLists=Oe,R.shadowMap=He,R.state=Ve,R.info=_t}De();const fe=new Q1(R,F);this.xr=fe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const P=Qe.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Qe.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(P){P!==void 0&&(X=P,this.setSize(ce,me,!1))},this.getSize=function(P){return P.set(ce,me)},this.setSize=function(P,$,ae=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=P,me=$,n.width=Math.floor(P*X),n.height=Math.floor($*X),ae===!0&&(n.style.width=P+"px",n.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(ce*X,me*X).floor()},this.setDrawingBufferSize=function(P,$,ae){ce=P,me=$,X=ae,n.width=Math.floor(P*ae),n.height=Math.floor($*ae),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(B)},this.getViewport=function(P){return P.copy(w)},this.setViewport=function(P,$,ae,ne){P.isVector4?w.set(P.x,P.y,P.z,P.w):w.set(P,$,ae,ne),Ve.viewport(B.copy(w).multiplyScalar(X).round())},this.getScissor=function(P){return P.copy(H)},this.setScissor=function(P,$,ae,ne){P.isVector4?H.set(P.x,P.y,P.z,P.w):H.set(P,$,ae,ne),Ve.scissor(ie.copy(H).multiplyScalar(X).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(P){Ve.setScissorTest(J=P)},this.setOpaqueSort=function(P){pe=P},this.setTransparentSort=function(P){I=P},this.getClearColor=function(P){return P.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(P=!0,$=!0,ae=!0){let ne=0;if(P){let K=!1;if(V!==null){const Te=V.texture.format;K=Te===of||Te===sf||Te===rf}if(K){const Te=V.texture.type,Le=Te===Gi||Te===Jr||Te===Wo||Te===Ys||Te===tf||Te===nf,ze=tt.getClearColor(),We=tt.getClearAlpha(),at=ze.r,st=ze.g,qe=ze.b;Le?(E[0]=at,E[1]=st,E[2]=qe,E[3]=We,F.clearBufferuiv(F.COLOR,0,E)):(b[0]=at,b[1]=st,b[2]=qe,b[3]=We,F.clearBufferiv(F.COLOR,0,b))}else ne|=F.COLOR_BUFFER_BIT}$&&(ne|=F.DEPTH_BUFFER_BIT),ae&&(ne|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",Ue,!1),tt.dispose(),Oe.dispose(),ft.dispose(),ke.dispose(),A.dispose(),se.dispose(),xe.dispose(),Pt.dispose(),Y.dispose(),Ye.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",is),fe.removeEventListener("sessionend",ji),Mi.stop()};function ve(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const P=_t.autoReset,$=He.enabled,ae=He.autoUpdate,ne=He.needsUpdate,K=He.type;De(),_t.autoReset=P,He.enabled=$,He.autoUpdate=ae,He.needsUpdate=ne,He.type=K}function Ue(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function dt(P){const $=P.target;$.removeEventListener("dispose",dt),Ft($)}function Ft(P){Zt(P),ke.remove(P)}function Zt(P){const $=ke.get(P).programs;$!==void 0&&($.forEach(function(ae){Ye.releaseProgram(ae)}),P.isShaderMaterial&&Ye.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,ae,ne,K,Te){$===null&&($=et);const Le=K.isMesh&&K.matrixWorld.determinant()<0,ze=ea(P,$,ae,ne,K);Ve.setMaterial(ne,Le);let We=ae.index,at=1;if(ne.wireframe===!0){if(We=ye.getWireframeAttribute(ae),We===void 0)return;at=2}const st=ae.drawRange,qe=ae.attributes.position;let wt=st.start*at,ht=(st.start+st.count)*at;Te!==null&&(wt=Math.max(wt,Te.start*at),ht=Math.min(ht,(Te.start+Te.count)*at)),We!==null?(wt=Math.max(wt,0),ht=Math.min(ht,We.count)):qe!=null&&(wt=Math.max(wt,0),ht=Math.min(ht,qe.count));const Wt=ht-wt;if(Wt<0||Wt===1/0)return;Pt.setup(K,ne,ze,ae,We);let zt,Et=je;if(We!==null&&(zt=_e.get(We),Et=xt,Et.setIndex(zt)),K.isMesh)ne.wireframe===!0?(Ve.setLineWidth(ne.wireframeLinewidth*Ne()),Et.setMode(F.LINES)):Et.setMode(F.TRIANGLES);else if(K.isLine){let Je=ne.linewidth;Je===void 0&&(Je=1),Ve.setLineWidth(Je*Ne()),K.isLineSegments?Et.setMode(F.LINES):K.isLineLoop?Et.setMode(F.LINE_LOOP):Et.setMode(F.LINE_STRIP)}else K.isPoints?Et.setMode(F.POINTS):K.isSprite&&Et.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Wr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))Et.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Je=K._multiDrawStarts,Xt=K._multiDrawCounts,St=K._multiDrawCount,pn=We?_e.get(We).bytesPerElement:1,Xi=ke.get(ne).currentProgram.getUniforms();for(let wn=0;wn<St;wn++)Xi.setValue(F,"_gl_DrawID",wn),Et.render(Je[wn]/pn,Xt[wn])}else if(K.isInstancedMesh)Et.renderInstances(wt,Wt,K.count);else if(ae.isInstancedBufferGeometry){const Je=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Xt=Math.min(ae.instanceCount,Je);Et.renderInstances(wt,Wt,Xt)}else Et.render(wt,Wt)};function Tt(P,$,ae){P.transparent===!0&&P.side===zi&&P.forceSinglePass===!1?(P.side=kn,P.needsUpdate=!0,rs(P,$,ae),P.side=Mr,P.needsUpdate=!0,rs(P,$,ae),P.side=zi):rs(P,$,ae)}this.compile=function(P,$,ae=null){ae===null&&(ae=P),v=ft.get(ae),v.init($),L.push(v),ae.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),P!==ae&&P.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const ne=new Set;return P.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Te=K.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){const ze=Te[Le];Tt(ze,ae,K),ne.add(ze)}else Tt(Te,ae,K),ne.add(Te)}),v=L.pop(),ne},this.compileAsync=function(P,$,ae=null){const ne=this.compile(P,$,ae);return new Promise(K=>{function Te(){if(ne.forEach(function(Le){ke.get(Le).currentProgram.isReady()&&ne.delete(Le)}),ne.size===0){K(P);return}setTimeout(Te,10)}Qe.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Cn=null;function Mn(P){Cn&&Cn(P)}function is(){Mi.stop()}function ji(){Mi.start()}const Mi=new Eg;Mi.setAnimationLoop(Mn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(P){Cn=P,fe.setAnimationLoop(P),P===null?Mi.stop():Mi.start()},fe.addEventListener("sessionstart",is),fe.addEventListener("sessionend",ji),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera($),$=fe.getCamera()),P.isScene===!0&&P.onBeforeRender(R,P,$,V),v=ft.get(P,L.length),v.init($),L.push(v),ge.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),j.setFromProjectionMatrix(ge),ue=this.localClippingEnabled,ee=we.init(this.clippingPlanes,ue),_=Oe.get(P,D.length),_.init(),D.push(_),fe.enabled===!0&&fe.isPresenting===!0){const Te=R.xr.getDepthSensingMesh();Te!==null&&wi(Te,$,-1/0,R.sortObjects)}wi(P,$,0,R.sortObjects),_.finish(),R.sortObjects===!0&&_.sort(pe,I),Re=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Re&&tt.addToRenderList(_,P),this.info.render.frame++,ee===!0&&we.beginShadows();const ae=v.state.shadowsArray;He.render(ae,P,$),ee===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=_.opaque,K=_.transmissive;if(v.setupLights(),$.isArrayCamera){const Te=$.cameras;if(K.length>0)for(let Le=0,ze=Te.length;Le<ze;Le++){const We=Te[Le];Tr(ne,K,P,We)}Re&&tt.render(P);for(let Le=0,ze=Te.length;Le<ze;Le++){const We=Te[Le];Er(_,P,We,We.viewport)}}else K.length>0&&Tr(ne,K,P,$),Re&&tt.render(P),Er(_,P,$);V!==null&&k===0&&(U.updateMultisampleRenderTarget(V),U.updateRenderTargetMipmap(V)),P.isScene===!0&&P.onAfterRender(R,P,$),Pt.resetDefaultState(),N=-1,C=null,L.pop(),L.length>0?(v=L[L.length-1],ee===!0&&we.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,D.pop(),D.length>0?_=D[D.length-1]:_=null};function wi(P,$,ae,ne){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)ae=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)v.pushLight(P),P.castShadow&&v.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||j.intersectsSprite(P)){ne&&Ce.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ge);const Le=xe.update(P),ze=P.material;ze.visible&&_.push(P,Le,ze,ae,Ce.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||j.intersectsObject(P))){const Le=xe.update(P),ze=P.material;if(ne&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ce.copy(P.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ce.copy(Le.boundingSphere.center)),Ce.applyMatrix4(P.matrixWorld).applyMatrix4(ge)),Array.isArray(ze)){const We=Le.groups;for(let at=0,st=We.length;at<st;at++){const qe=We[at],wt=ze[qe.materialIndex];wt&&wt.visible&&_.push(P,Le,wt,ae,Ce.z,qe)}}else ze.visible&&_.push(P,Le,ze,ae,Ce.z,null)}}const Te=P.children;for(let Le=0,ze=Te.length;Le<ze;Le++)wi(Te[Le],$,ae,ne)}function Er(P,$,ae,ne){const K=P.opaque,Te=P.transmissive,Le=P.transparent;v.setupLightsView(ae),ee===!0&&we.setGlobalState(R.clippingPlanes,ae),ne&&Ve.viewport(B.copy(ne)),K.length>0&&Wi(K,$,ae),Te.length>0&&Wi(Te,$,ae),Le.length>0&&Wi(Le,$,ae),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Tr(P,$,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ne.id]===void 0&&(v.state.transmissionRenderTarget[ne.id]=new es(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?Yo:Gi,minFilter:Zr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Te=v.state.transmissionRenderTarget[ne.id],Le=ne.viewport||B;Te.setSize(Le.z*R.transmissionResolutionScale,Le.w*R.transmissionResolutionScale);const ze=R.getRenderTarget();R.setRenderTarget(Te),R.getClearColor(de),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),Re&&tt.render(ae);const We=R.toneMapping;R.toneMapping=Sr;const at=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),v.setupLightsView(ne),ee===!0&&we.setGlobalState(R.clippingPlanes,ne),Wi(P,ae,ne),U.updateMultisampleRenderTarget(Te),U.updateRenderTargetMipmap(Te),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let qe=0,wt=$.length;qe<wt;qe++){const ht=$[qe],Wt=ht.object,zt=ht.geometry,Et=ht.material,Je=ht.group;if(Et.side===zi&&Wt.layers.test(ne.layers)){const Xt=Et.side;Et.side=kn,Et.needsUpdate=!0,Qo(Wt,ae,ne,zt,Et,Je),Et.side=Xt,Et.needsUpdate=!0,st=!0}}st===!0&&(U.updateMultisampleRenderTarget(Te),U.updateRenderTargetMipmap(Te))}R.setRenderTarget(ze),R.setClearColor(de,he),at!==void 0&&(ne.viewport=at),R.toneMapping=We}function Wi(P,$,ae){const ne=$.isScene===!0?$.overrideMaterial:null;for(let K=0,Te=P.length;K<Te;K++){const Le=P[K],ze=Le.object,We=Le.geometry,at=ne===null?Le.material:ne,st=Le.group;ze.layers.test(ae.layers)&&Qo(ze,$,ae,We,at,st)}}function Qo(P,$,ae,ne,K,Te){P.onBeforeRender(R,$,ae,ne,K,Te),P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),K.onBeforeRender(R,$,ae,ne,P,Te),K.transparent===!0&&K.side===zi&&K.forceSinglePass===!1?(K.side=kn,K.needsUpdate=!0,R.renderBufferDirect(ae,$,ne,K,P,Te),K.side=Mr,K.needsUpdate=!0,R.renderBufferDirect(ae,$,ne,K,P,Te),K.side=zi):R.renderBufferDirect(ae,$,ne,K,P,Te),P.onAfterRender(R,$,ae,ne,K,Te)}function rs(P,$,ae){$.isScene!==!0&&($=et);const ne=ke.get(P),K=v.state.lights,Te=v.state.shadowsArray,Le=K.state.version,ze=Ye.getParameters(P,K.state,Te,$,ae),We=Ye.getProgramCacheKey(ze);let at=ne.programs;ne.environment=P.isMeshStandardMaterial?$.environment:null,ne.fog=$.fog,ne.envMap=(P.isMeshStandardMaterial?se:A).get(P.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,at===void 0&&(P.addEventListener("dispose",dt),at=new Map,ne.programs=at);let st=at.get(We);if(st!==void 0){if(ne.currentProgram===st&&ne.lightsStateVersion===Le)return hi(P,ze),st}else ze.uniforms=Ye.getUniforms(P),P.onBeforeCompile(ze,R),st=Ye.acquireProgram(ze,We),at.set(We,st),ne.uniforms=ze.uniforms;const qe=ne.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(qe.clippingPlanes=we.uniform),hi(P,ze),ne.needsLights=Xl(P),ne.lightsStateVersion=Le,ne.needsLights&&(qe.ambientLightColor.value=K.state.ambient,qe.lightProbe.value=K.state.probe,qe.directionalLights.value=K.state.directional,qe.directionalLightShadows.value=K.state.directionalShadow,qe.spotLights.value=K.state.spot,qe.spotLightShadows.value=K.state.spotShadow,qe.rectAreaLights.value=K.state.rectArea,qe.ltc_1.value=K.state.rectAreaLTC1,qe.ltc_2.value=K.state.rectAreaLTC2,qe.pointLights.value=K.state.point,qe.pointLightShadows.value=K.state.pointShadow,qe.hemisphereLights.value=K.state.hemi,qe.directionalShadowMap.value=K.state.directionalShadowMap,qe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qe.spotShadowMap.value=K.state.spotShadowMap,qe.spotLightMatrix.value=K.state.spotLightMatrix,qe.spotLightMap.value=K.state.spotLightMap,qe.pointShadowMap.value=K.state.pointShadowMap,qe.pointShadowMatrix.value=K.state.pointShadowMatrix),ne.currentProgram=st,ne.uniformsList=null,st}function Jo(P){if(P.uniformsList===null){const $=P.currentProgram.getUniforms();P.uniformsList=Ul.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function hi(P,$){const ae=ke.get(P);ae.outputColorSpace=$.outputColorSpace,ae.batching=$.batching,ae.batchingColor=$.batchingColor,ae.instancing=$.instancing,ae.instancingColor=$.instancingColor,ae.instancingMorph=$.instancingMorph,ae.skinning=$.skinning,ae.morphTargets=$.morphTargets,ae.morphNormals=$.morphNormals,ae.morphColors=$.morphColors,ae.morphTargetsCount=$.morphTargetsCount,ae.numClippingPlanes=$.numClippingPlanes,ae.numIntersection=$.numClipIntersection,ae.vertexAlphas=$.vertexAlphas,ae.vertexTangents=$.vertexTangents,ae.toneMapping=$.toneMapping}function ea(P,$,ae,ne,K){$.isScene!==!0&&($=et),U.resetTextureUnits();const Te=$.fog,Le=ne.isMeshStandardMaterial?$.environment:null,ze=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ks,We=(ne.isMeshStandardMaterial?se:A).get(ne.envMap||Le),at=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,st=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),qe=!!ae.morphAttributes.position,wt=!!ae.morphAttributes.normal,ht=!!ae.morphAttributes.color;let Wt=Sr;ne.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Wt=R.toneMapping);const zt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Et=zt!==void 0?zt.length:0,Je=ke.get(ne),Xt=v.state.lights;if(ee===!0&&(ue===!0||P!==C)){const un=P===C&&ne.id===N;we.setState(ne,P,un)}let St=!1;ne.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Xt.state.version||Je.outputColorSpace!==ze||K.isBatchedMesh&&Je.batching===!1||!K.isBatchedMesh&&Je.batching===!0||K.isBatchedMesh&&Je.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Je.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Je.instancing===!1||!K.isInstancedMesh&&Je.instancing===!0||K.isSkinnedMesh&&Je.skinning===!1||!K.isSkinnedMesh&&Je.skinning===!0||K.isInstancedMesh&&Je.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Je.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Je.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Je.instancingMorph===!1&&K.morphTexture!==null||Je.envMap!==We||ne.fog===!0&&Je.fog!==Te||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==we.numPlanes||Je.numIntersection!==we.numIntersection)||Je.vertexAlphas!==at||Je.vertexTangents!==st||Je.morphTargets!==qe||Je.morphNormals!==wt||Je.morphColors!==ht||Je.toneMapping!==Wt||Je.morphTargetsCount!==Et)&&(St=!0):(St=!0,Je.__version=ne.version);let pn=Je.currentProgram;St===!0&&(pn=rs(ne,$,K));let Xi=!1,wn=!1,Ei=!1;const Lt=pn.getUniforms(),mn=Je.uniforms;if(Ve.useProgram(pn.program)&&(Xi=!0,wn=!0,Ei=!0),ne.id!==N&&(N=ne.id,wn=!0),Xi||C!==P){Ve.buffers.depth.getReversed()?(oe.copy(P.projectionMatrix),kv(oe),Ov(oe),Lt.setValue(F,"projectionMatrix",oe)):Lt.setValue(F,"projectionMatrix",P.projectionMatrix),Lt.setValue(F,"viewMatrix",P.matrixWorldInverse);const sn=Lt.map.cameraPosition;sn!==void 0&&sn.setValue(F,Ae.setFromMatrixPosition(P.matrixWorld)),rt.logarithmicDepthBuffer&&Lt.setValue(F,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Lt.setValue(F,"isOrthographic",P.isOrthographicCamera===!0),C!==P&&(C=P,wn=!0,Ei=!0)}if(K.isSkinnedMesh){Lt.setOptional(F,K,"bindMatrix"),Lt.setOptional(F,K,"bindMatrixInverse");const un=K.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Lt.setValue(F,"boneTexture",un.boneTexture,U))}K.isBatchedMesh&&(Lt.setOptional(F,K,"batchingTexture"),Lt.setValue(F,"batchingTexture",K._matricesTexture,U),Lt.setOptional(F,K,"batchingIdTexture"),Lt.setValue(F,"batchingIdTexture",K._indirectTexture,U),Lt.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&Lt.setValue(F,"batchingColorTexture",K._colorsTexture,U));const rn=ae.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&ot.update(K,ae,pn),(wn||Je.receiveShadow!==K.receiveShadow)&&(Je.receiveShadow=K.receiveShadow,Lt.setValue(F,"receiveShadow",K.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(mn.envMap.value=We,mn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&$.environment!==null&&(mn.envMapIntensity.value=$.environmentIntensity),wn&&(Lt.setValue(F,"toneMappingExposure",R.toneMappingExposure),Je.needsLights&&ta(mn,Ei),Te&&ne.fog===!0&&Pe.refreshFogUniforms(mn,Te),Pe.refreshMaterialUniforms(mn,ne,X,me,v.state.transmissionRenderTarget[P.id]),Ul.upload(F,Jo(Je),mn,U)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ul.upload(F,Jo(Je),mn,U),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Lt.setValue(F,"center",K.center),Lt.setValue(F,"modelViewMatrix",K.modelViewMatrix),Lt.setValue(F,"normalMatrix",K.normalMatrix),Lt.setValue(F,"modelMatrix",K.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const un=ne.uniformsGroups;for(let sn=0,bt=un.length;sn<bt;sn++){const pi=un[sn];Y.update(pi,pn),Y.bind(pi,pn)}}return pn}function ta(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function Xl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(P,$,ae){ke.get(P.texture).__webglTexture=$,ke.get(P.depthTexture).__webglTexture=ae;const ne=ke.get(P);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=ae===void 0,ne.__autoAllocateDepthBuffer||Qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,$){const ae=ke.get(P);ae.__webglFramebuffer=$,ae.__useDefaultFramebuffer=$===void 0};const na=F.createFramebuffer();this.setRenderTarget=function(P,$=0,ae=0){V=P,O=$,k=ae;let ne=!0,K=null,Te=!1,Le=!1;if(P){const We=ke.get(P);if(We.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(F.FRAMEBUFFER,null),ne=!1;else if(We.__webglFramebuffer===void 0)U.setupRenderTarget(P);else if(We.__hasExternalTextures)U.rebindTextures(P,ke.get(P.texture).__webglTexture,ke.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const qe=P.depthTexture;if(We.__boundDepthTexture!==qe){if(qe!==null&&ke.has(qe)&&(P.width!==qe.image.width||P.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(P)}}const at=P.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Le=!0);const st=ke.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(st[$])?K=st[$][ae]:K=st[$],Te=!0):P.samples>0&&U.useMultisampledRTT(P)===!1?K=ke.get(P).__webglMultisampledFramebuffer:Array.isArray(st)?K=st[ae]:K=st,B.copy(P.viewport),ie.copy(P.scissor),Q=P.scissorTest}else B.copy(w).multiplyScalar(X).floor(),ie.copy(H).multiplyScalar(X).floor(),Q=J;if(ae!==0&&(K=na),Ve.bindFramebuffer(F.FRAMEBUFFER,K)&&ne&&Ve.drawBuffers(P,K),Ve.viewport(B),Ve.scissor(ie),Ve.setScissorTest(Q),Te){const We=ke.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+$,We.__webglTexture,ae)}else if(Le){const We=ke.get(P.texture),at=$;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,We.__webglTexture,ae,at)}else if(P!==null&&ae!==0){const We=ke.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,We.__webglTexture,ae)}N=-1},this.readRenderTargetPixels=function(P,$,ae,ne,K,Te,Le){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ke.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(ze=ze[Le]),ze){Ve.bindFramebuffer(F.FRAMEBUFFER,ze);try{const We=P.texture,at=We.format,st=We.type;if(!rt.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-ne&&ae>=0&&ae<=P.height-K&&F.readPixels($,ae,ne,K,ut.convert(at),ut.convert(st),Te)}finally{const We=V!==null?ke.get(V).__webglFramebuffer:null;Ve.bindFramebuffer(F.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(P,$,ae,ne,K,Te,Le){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=ke.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(ze=ze[Le]),ze){const We=P.texture,at=We.format,st=We.type;if(!rt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=P.width-ne&&ae>=0&&ae<=P.height-K){Ve.bindFramebuffer(F.FRAMEBUFFER,ze);const qe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,qe),F.bufferData(F.PIXEL_PACK_BUFFER,Te.byteLength,F.STREAM_READ),F.readPixels($,ae,ne,K,ut.convert(at),ut.convert(st),0);const wt=V!==null?ke.get(V).__webglFramebuffer:null;Ve.bindFramebuffer(F.FRAMEBUFFER,wt);const ht=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Fv(F,ht,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,qe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Te),F.deleteBuffer(qe),F.deleteSync(ht),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,$=null,ae=0){P.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1]);const ne=Math.pow(2,-ae),K=Math.floor(P.image.width*ne),Te=Math.floor(P.image.height*ne),Le=$!==null?$.x:0,ze=$!==null?$.y:0;U.setTexture2D(P,0),F.copyTexSubImage2D(F.TEXTURE_2D,ae,0,0,Le,ze,K,Te),Ve.unbindTexture()};const ia=F.createFramebuffer(),ra=F.createFramebuffer();this.copyTextureToTexture=function(P,$,ae=null,ne=null,K=0,Te=null){P.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,P=arguments[1],$=arguments[2],Te=arguments[3]||0,ae=null),Te===null&&(K!==0?(Wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=K,K=0):Te=0);let Le,ze,We,at,st,qe,wt,ht,Wt;const zt=P.isCompressedTexture?P.mipmaps[Te]:P.image;if(ae!==null)Le=ae.max.x-ae.min.x,ze=ae.max.y-ae.min.y,We=ae.isBox3?ae.max.z-ae.min.z:1,at=ae.min.x,st=ae.min.y,qe=ae.isBox3?ae.min.z:0;else{const rn=Math.pow(2,-K);Le=Math.floor(zt.width*rn),ze=Math.floor(zt.height*rn),P.isDataArrayTexture?We=zt.depth:P.isData3DTexture?We=Math.floor(zt.depth*rn):We=1,at=0,st=0,qe=0}ne!==null?(wt=ne.x,ht=ne.y,Wt=ne.z):(wt=0,ht=0,Wt=0);const Et=ut.convert($.format),Je=ut.convert($.type);let Xt;$.isData3DTexture?(U.setTexture3D($,0),Xt=F.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(U.setTexture2DArray($,0),Xt=F.TEXTURE_2D_ARRAY):(U.setTexture2D($,0),Xt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,$.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,$.unpackAlignment);const St=F.getParameter(F.UNPACK_ROW_LENGTH),pn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Xi=F.getParameter(F.UNPACK_SKIP_PIXELS),wn=F.getParameter(F.UNPACK_SKIP_ROWS),Ei=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,zt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,zt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,at),F.pixelStorei(F.UNPACK_SKIP_ROWS,st),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qe);const Lt=P.isDataArrayTexture||P.isData3DTexture,mn=$.isDataArrayTexture||$.isData3DTexture;if(P.isDepthTexture){const rn=ke.get(P),un=ke.get($),sn=ke.get(rn.__renderTarget),bt=ke.get(un.__renderTarget);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,sn.__webglFramebuffer),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let pi=0;pi<We;pi++)Lt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.get(P).__webglTexture,K,qe+pi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.get($).__webglTexture,Te,Wt+pi)),F.blitFramebuffer(at,st,Le,ze,wt,ht,Le,ze,F.DEPTH_BUFFER_BIT,F.NEAREST);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||P.isRenderTargetTexture||ke.has(P)){const rn=ke.get(P),un=ke.get($);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,ia),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,ra);for(let sn=0;sn<We;sn++)Lt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,rn.__webglTexture,K,qe+sn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,rn.__webglTexture,K),mn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,un.__webglTexture,Te,Wt+sn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,un.__webglTexture,Te),K!==0?F.blitFramebuffer(at,st,Le,ze,wt,ht,Le,ze,F.COLOR_BUFFER_BIT,F.NEAREST):mn?F.copyTexSubImage3D(Xt,Te,wt,ht,Wt+sn,at,st,Le,ze):F.copyTexSubImage2D(Xt,Te,wt,ht,at,st,Le,ze);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else mn?P.isDataTexture||P.isData3DTexture?F.texSubImage3D(Xt,Te,wt,ht,Wt,Le,ze,We,Et,Je,zt.data):$.isCompressedArrayTexture?F.compressedTexSubImage3D(Xt,Te,wt,ht,Wt,Le,ze,We,Et,zt.data):F.texSubImage3D(Xt,Te,wt,ht,Wt,Le,ze,We,Et,Je,zt):P.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Te,wt,ht,Le,ze,Et,Je,zt.data):P.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Te,wt,ht,zt.width,zt.height,Et,zt.data):F.texSubImage2D(F.TEXTURE_2D,Te,wt,ht,Le,ze,Et,Je,zt);F.pixelStorei(F.UNPACK_ROW_LENGTH,St),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Xi),F.pixelStorei(F.UNPACK_SKIP_ROWS,wn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ei),Te===0&&$.generateMipmaps&&F.generateMipmap(Xt),Ve.unbindTexture()},this.copyTextureToTexture3D=function(P,$,ae=null,ne=null,K=0){return P.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,ne=arguments[1]||null,P=arguments[2],$=arguments[3],K=arguments[4]||0),Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,$,ae,ne,K)},this.initRenderTarget=function(P){ke.get(P).__webglFramebuffer===void 0&&U.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),Ve.unbindTexture()},this.resetState=function(){O=0,k=0,V=null,Ve.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}}const nw=()=>{const s=Ze.useRef(null);return Ze.useEffect(()=>{if(!s.current)return;const e=new vg;e.fog=new lf(526604,.025);const n=new Fn(60,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=25;const r=new Rg({alpha:!0,antialias:!0,powerPreference:"high-performance"});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.current.appendChild(r.domElement);const a=450,l=new jn,u=new Float32Array(a*3),f=new Float32Array(a*3),h=new gt("#0084FF"),m=new gt("#FFD700"),y=new gt("#4F46E5");for(let H=0;H<a*3;H+=3){u[H]=(Math.random()-.5)*60,u[H+1]=(Math.random()-.5)*40,u[H+2]=(Math.random()-.5)*40;const J=Math.random()>.6?m:Math.random()>.5?h:y;f[H]=J.r,f[H+1]=J.g,f[H+2]=J.b}l.setAttribute("position",new Jn(u,3)),l.setAttribute("color",new Jn(f,3));const x=document.createElement("canvas");x.width=16,x.height=16;const g=x.getContext("2d");if(g){const H=g.createRadialGradient(8,8,0,8,8,8);H.addColorStop(0,"rgba(255,255,255,1)"),H.addColorStop(1,"rgba(255,255,255,0)"),g.fillStyle=H,g.fillRect(0,0,16,16)}const M=new f_(x),E=new _g({size:.6,vertexColors:!0,map:M,transparent:!0,opacity:.7,blending:ad,depthWrite:!1}),b=new d_(l,E);e.add(b);const _=new Qr,v=new zl(1.8,0),D=new zl(2.1,1),L=new Il({color:34047,roughness:.1,metalness:.8,transmission:.6,ior:1.5,transparent:!0,opacity:.45,wireframe:!1}),R=new Zs({color:16766720,wireframe:!0,transparent:!0,opacity:.25}),G=new Ht(v,L);G.position.set(-18,8,-5),_.add(G);const O=new Ht(D,R);O.position.set(19,-6,-8),_.add(O);const k=new Xo(3.2,.08,16,100),V=new Zs({color:62880,transparent:!0,opacity:.35}),N=new Ht(k,V);N.position.set(16,10,-10),_.add(N),e.add(_);const C=new wg(16777215,.8);e.add(C);const B=new Bl(34047,5,50);B.position.set(10,15,10),e.add(B);const ie=new Bl(16766720,3,50);ie.position.set(-15,-10,5),e.add(ie);let Q=0,de=0,he=0,ce=0;const me=H=>{Q=(H.clientX/window.innerWidth-.5)*2,de=(H.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",me);const X=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",X);let pe,I=new __;const w=()=>{pe=requestAnimationFrame(w);const H=I.getElapsedTime();he+=(Q-he)*.03,ce+=(de-ce)*.03,n.position.x=he*3.5,n.position.y=-ce*3.5,n.lookAt(0,0,0),b.rotation.y=H*.03,b.rotation.x=H*.015,G.rotation.x=H*.3,G.rotation.y=H*.4,O.rotation.x=-H*.2,O.rotation.z=H*.25,N.rotation.x=H*.2,N.rotation.y=H*.35,r.render(e,n)};return w(),()=>{cancelAnimationFrame(pe),window.removeEventListener("mousemove",me),window.removeEventListener("resize",X),s.current&&r.domElement&&s.current.removeChild(r.domElement),r.dispose(),l.dispose(),E.dispose()}},[]),S.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-0 overflow-hidden","aria-hidden":"true"})};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function rw(s,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:iw(s),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=s=>{let e="",n=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){n=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=n?r.toUpperCase():r,n=!1}return e};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=s=>{const e=sw(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function od(s){return s!=null}function aw(s,e={}){var g,M;const n=e.attributeNames??{},r=E=>n[E]??E,a=s.size??s.width??jr.width,l=s.size??s.height??jr.height,u=((g=s.aliases)==null?void 0:g.filter(E=>typeof E=="string"&&E.trim()!=="").map(E=>`lucide-${E}`))??[],f=[...s.name?[`lucide-${s.name}`]:[],...u],h=((M=e.className)==null?void 0:M.split(" ").filter(Boolean))??[],m=e.includeDefaultClasses===!1?Kd(...h):Kd("lucide",...f,...h),y=e.absoluteStrokeWidth?Number(e.strokeWidth??jr["stroke-width"])*Number(s.size??s.width??jr.width)/Number(e.size??e.width??jr.width):e.strokeWidth??jr["stroke-width"];return["svg",{...Object.entries(jr).reduce((E,[b,_])=>(E[r(b)]=_,E),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&od(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&od(e.width)&&{[r("width")]:e.width},..."height"in e&&od(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:y,...m&&{[r("class")]:m},[r("viewBox")]:`0 0 ${a} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(E=>{const[b,_,v]=E,D=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",..._}:_;return v?[b,D,v]:[b,D]})]}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function lw(s,e={}){return aw(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},uw=Ze.createContext({}),dw=()=>Ze.useContext(uw),fw=Ze.forwardRef(({color:s,size:e,width:n,height:r,strokeWidth:a,absoluteStrokeWidth:l,nonScalingStroke:u,className:f="",children:h,iconNode:m=[],icon:y={node:m,aliases:[],size:24},...x},g)=>{const{size:M=24,strokeWidth:E=2,absoluteStrokeWidth:b=!1,nonScalingStroke:_=!1,color:v="currentColor",className:D=""}=dw()??{},L=!!h||cw(x),[R,G,O=[]]=lw(y,{color:s??v,width:n??e??M,height:r??e??M,strokeWidth:a??E,absoluteStrokeWidth:l??b,nonScalingStroke:u??_,className:Kd(D,f),hasA11yProp:L,attributes:x});return Ze.createElement(R,{ref:g,...G},[...O.map(([k,V])=>Ze.createElement(k,V)),...Array.isArray(h)?h:[h]])});/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ut(s,e=[],n=[]){const r=typeof s=="string"?rw(s,e,n):s,a=Ze.forwardRef(({className:l,...u},f)=>Ze.createElement(fw,{ref:f,icon:r,className:l,...u}));return r.name&&(a.displayName=ow(r.name)),a}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Pg.node;const Ng=Ut(Pg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};Dg.node;const Hl=Ut(Dg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg={name:"bell-ring",size:24,node:[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]]};Lg.node;const hw=Ut(Lg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig={name:"bell",size:24,node:[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]};Ig.node;const Zd=Ut(Ig);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};Ug.node;const pw=Ut(Ug);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};Fg.node;const mw=Ut(Fg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};kg.node;const gw=Ut(kg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};Og.node;const xw=Ut(Og);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};zg.node;const vw=Ut(zg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};Bg.node;const qo=Ut(Bg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg={name:"dollar-sign",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M17 5H9.5a1 1 0 000 7h5a1 1 0 010 7H6",key:"pwzcbw"}]]};Hg.node;const _w=Ut(Hg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Vg.node;const yw=Ut(Vg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg={name:"heart-handshake",size:24,node:[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]]};Gg.node;const Sw=Ut(Gg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]};jg.node;const Mw=Ut(jg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};Wg.node;const ww=Ut(Wg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};Xg.node;const Ew=Ut(Xg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};qg.node;const Tw=Ut(qg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Yg.node;const bw=Ut(Yg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g={name:"rotate-cw",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]};$g.node;const Aw=Ut($g);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};Kg.node;const pf=Ut(Kg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};Zg.node;const Cw=Ut(Zg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg={name:"sliders-horizontal",size:24,node:[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]]};Qg.node;const Rw=Ut(Qg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Jg.node;const ei=Ut(Jg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0={name:"tag",size:24,node:[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]};e0.node;const Js=Ut(e0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};t0.node;const n0=Ut(t0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};i0.node;const ns=Ut(i0),Pw=({user:s,onOpenSearch:e,onOpenFocus:n,onOpenWatchlist:r,onOpenReminders:a,onOpenUpgrade:l,onOpenAuth:u,onLogout:f,onToggleTier:h,sessionElapsedSeconds:m,dailyLimitMinutes:y,watchlistCount:x,remindersCount:g})=>{const[M,E]=Ze.useState(!1),b=v=>{const D=Math.floor(v/60),L=v%60;return`${D}:${L<10?"0":""}${L}`},_=m>y*60*.8;return S.jsx("header",{className:"sticky top-0 z-40 w-full px-3 sm:px-8 py-3.5 border-b border-white/10 bg-obsidian/75 backdrop-blur-2xl transition-all",children:S.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:"w-10 h-10 rounded-2xl overflow-hidden shadow-lg shadow-electric/25 border border-white/10 hover:scale-105 transition-transform flex items-center justify-center bg-obsidian-light",children:S.jsx("img",{src:"/favicon.svg",alt:"Buy&Sell",className:"w-full h-full object-cover"})}),S.jsxs("div",{children:[S.jsxs("span",{className:"font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-0.5",children:["Buy",S.jsx("span",{className:"text-electric",children:"&"}),S.jsx("span",{className:"text-slate-100",children:"Sell"})]}),S.jsx("span",{className:"hidden sm:block text-[10px] font-mono text-slate-400 tracking-wider",children:"MINDFUL 3D COMMERCE"})]})]}),S.jsxs("button",{onClick:e,className:"hidden md:flex items-center justify-between w-72 lg:w-96 px-4 py-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 text-xs transition-all shadow-inner group",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(pf,{className:"w-4 h-4 text-slate-400 group-hover:text-electric transition-colors"}),S.jsx("span",{children:"Search marketplace deals..."})]}),S.jsx("kbd",{className:"px-1.5 py-0.5 rounded-md bg-white/10 font-mono text-[10px] text-slate-400",children:"⌘K"})]}),S.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2.5",children:[S.jsxs("button",{onClick:n,className:`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all ${_?"bg-amber-500/20 border-amber-500/40 text-amber-300 animate-pulse":"bg-white/5 border-white/10 hover:border-electric/40 text-slate-300 hover:text-white"}`,title:"Open Focus Limit Cockpit",children:[S.jsx(qo,{className:"w-3.5 h-3.5 text-electric"}),S.jsx("span",{children:b(m)})]}),S.jsxs("button",{onClick:r,className:"hidden sm:flex relative p-2 sm:px-3 sm:py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all items-center gap-1.5 text-xs font-semibold",title:"Saved Watchlist",children:[S.jsx(Js,{className:"w-4 h-4 text-liquidGold"}),S.jsx("span",{children:"Watchlist"}),x>0&&S.jsx("span",{className:"px-1.5 py-0.2 rounded-full bg-liquidGold text-black font-extrabold text-[10px]",children:x})]}),S.jsxs("button",{onClick:s.type==="premium"?a:l,className:"hidden sm:flex relative p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all",title:s.type==="premium"?"Price Radars":"Unlock Deal Radars",children:[S.jsx(Zd,{className:"w-4 h-4 text-electric"}),g>0&&S.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-electric animate-ping"})]}),S.jsxs("button",{onClick:h,className:`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 border shadow-sm ${s.type==="premium"?"bg-liquidGold/20 border-liquidGold/40 text-liquidGold shadow-liquidGold/10":"bg-white/5 border-white/10 text-slate-300 hover:text-white"}`,title:"Click to toggle between Free and Pro Tier for demo",children:[S.jsx(Hl,{className:"w-3.5 h-3.5"}),S.jsx("span",{className:"uppercase tracking-wider text-[10px] sm:text-[11px]",children:s.type==="premium"?"Pro":"Free"})]}),s.type==="free"&&S.jsxs("button",{onClick:l,className:"hidden lg:flex items-center gap-1 px-3.5 py-1.5 rounded-xl font-bold text-xs bg-gradient-to-r from-liquidGold to-amber-500 hover:from-amber-400 hover:to-liquidGold text-black shadow-md shadow-liquidGold/20 transition-all",children:[S.jsx(ei,{className:"w-3.5 h-3.5"}),S.jsx("span",{children:"Upgrade"})]}),S.jsxs("div",{className:"relative",children:[S.jsx("button",{onClick:()=>E(!M),className:"p-1 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors flex items-center",children:S.jsx("div",{className:"w-7 h-7 rounded-full bg-gradient-to-tr from-electric to-indigo-600 flex items-center justify-center text-white font-bold text-xs",children:s.name.charAt(0).toUpperCase()})}),M&&S.jsxs("div",{className:"absolute right-0 mt-3 w-56 rounded-2xl glass-panel-elevated p-3 border border-white/15 shadow-2xl z-50 animate-fadeIn",children:[S.jsxs("div",{className:"px-2 py-1.5 border-b border-white/10 mb-2",children:[S.jsx("p",{className:"text-xs font-bold text-white truncate",children:s.name}),S.jsx("p",{className:"text-[11px] text-slate-400 truncate",children:s.email}),S.jsx("span",{className:`inline-block mt-1 text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${s.type==="premium"?"bg-liquidGold/20 text-liquidGold":"bg-white/10 text-slate-400"}`,children:s.type==="premium"?"VIP Unlimited":"Free Tier"})]}),S.jsxs("div",{className:"space-y-1",children:[S.jsxs("button",{onClick:()=>{h(),E(!1)},className:"w-full text-left px-2 py-1.5 rounded-xl text-xs text-slate-300 hover:bg-white/10 transition-colors flex items-center justify-between",children:[S.jsx("span",{children:"Switch Tier Demo"}),S.jsx(Hl,{className:"w-3.5 h-3.5 text-liquidGold"})]}),S.jsxs("button",{onClick:()=>{n(),E(!1)},className:"w-full text-left px-2 py-1.5 rounded-xl text-xs text-slate-300 hover:bg-white/10 transition-colors flex items-center justify-between",children:[S.jsx("span",{children:"Focus Cockpit"}),S.jsx(qo,{className:"w-3.5 h-3.5 text-electric"})]}),s.type==="free"?S.jsxs("button",{onClick:()=>{l(),E(!1)},className:"w-full text-left px-2 py-1.5 rounded-xl text-xs font-bold text-liquidGold hover:bg-liquidGold/10 transition-colors flex items-center justify-between",children:[S.jsx("span",{children:"Upgrade Plan"}),S.jsx(ei,{className:"w-3.5 h-3.5"})]}):null,S.jsx("hr",{className:"my-1 border-white/10"}),S.jsxs("button",{onClick:()=>{f(),E(!1)},className:"w-full text-left px-2 py-1.5 rounded-xl text-xs text-red-400 hover:bg-red-500/10 transition-colors flex items-center justify-between",children:[S.jsx("span",{children:"Sign Out"}),S.jsx(Ew,{className:"w-3.5 h-3.5"})]})]})]})]})]})]})})},Nw=({onOpenFocus:s,onOpenUpgrade:e,isPremium:n,selectedCategory:r,onSelectCategory:a})=>{const l=["All","Apparel","Decor","Electronics","Furniture","Collectibles"];return S.jsxs("section",{className:"relative pt-4 sm:pt-12 pb-6 sm:pb-12 text-center max-w-5xl mx-auto px-3 sm:px-4 z-10",children:[S.jsxs("div",{className:"inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs text-slate-300 backdrop-blur-md mb-3 sm:mb-4 shadow-sm hover:border-electric/40 transition-colors cursor-pointer",children:[S.jsx(ei,{className:"w-3 h-3 sm:w-3.5 sm:h-3.5 text-electric animate-spin",style:{animationDuration:"6s"}}),S.jsx("span",{children:"Buy&Sell 2.0 • 3D Spatial Commerce Engine"}),S.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-aurora animate-pulse"})]}),S.jsxs("h1",{className:"text-3xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-[1.15]",children:["The Mindful Marketplace. ",S.jsx("br",{className:"hidden sm:inline"}),S.jsx("span",{className:"text-gradient-electric",children:"Unplugged from Noise."})]}),S.jsx("p",{className:"mt-2.5 sm:mt-4 text-xs sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed px-2",children:"High-curation peer commerce powered by real-time WebGL 3D inspection, automated price drop radars, and intentional session time limits."}),S.jsxs("div",{className:"mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3",children:[S.jsxs("button",{onClick:s,className:"px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/15 text-white border border-white/15 backdrop-blur-lg transition-all flex items-center gap-2 shadow-lg",children:[S.jsx(qo,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-electric"}),S.jsx("span",{children:"Set Focus Limit"})]}),!n&&S.jsxs("button",{onClick:e,className:"px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-liquidGold via-amber-400 to-yellow-500 hover:from-amber-300 hover:to-liquidGold text-black transition-all flex items-center gap-2 shadow-lg shadow-liquidGold/20",children:[S.jsx(ei,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"}),S.jsx("span",{children:"Unlock VIP Deal Radar"})]})]}),S.jsxs("div",{className:"mt-6 sm:mt-10 grid grid-cols-3 gap-1.5 sm:gap-4 max-w-2xl mx-auto p-2 sm:p-3 rounded-2xl glass-panel border border-white/10",children:[S.jsxs("div",{className:"text-center",children:[S.jsx("p",{className:"text-base sm:text-2xl font-extrabold text-white font-mono",children:"100%"}),S.jsx("p",{className:"text-[9px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold",children:"Peer Deals"})]}),S.jsxs("div",{className:"text-center border-x border-white/10",children:[S.jsx("p",{className:"text-base sm:text-2xl font-extrabold text-electric font-mono",children:"60 FPS"}),S.jsx("p",{className:"text-[9px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold",children:"3D WebGL"})]}),S.jsxs("div",{className:"text-center",children:[S.jsx("p",{className:"text-base sm:text-2xl font-extrabold text-aurora font-mono",children:"< 30m"}),S.jsx("p",{className:"text-[9px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold",children:"Screen Time"})]})]}),S.jsx("div",{className:"mt-6 sm:mt-8 flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 no-scrollbar px-1",children:l.map(u=>S.jsx("button",{onClick:()=>a(u),className:`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap ${r===u?"bg-electric text-white shadow-lg shadow-electric/25 scale-105":"bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"}`,children:u},u))})]})},Dw=({product:s,onSelect:e,onToggleWatchlist:n,isWatchlisted:r,onSetReminder:a,isPremium:l,onTriggerUpgrade:u})=>{const f=Ze.useRef(null),[h,m]=Ze.useState(0),[y,x]=Ze.useState(0),[g,M]=Ze.useState({x:50,y:50}),[E,b]=Ze.useState(!1),_=D=>{if(!f.current)return;const L=f.current.getBoundingClientRect(),R=D.clientX-L.left,G=D.clientY-L.top,O=L.width/2,k=L.height/2,V=(G-k)/k*-12,N=(R-O)/O*12;m(V),x(N),M({x:R/L.width*100,y:G/L.height*100})},v=()=>{m(0),x(0),b(!1)};return S.jsxs("div",{ref:f,onMouseMove:_,onMouseEnter:()=>b(!0),onMouseLeave:v,style:{transform:`perspective(1000px) rotateX(${h}deg) rotateY(${y}deg) ${E?"scale3d(1.025, 1.025, 1.025)":"scale3d(1, 1, 1)"}`,transition:E?"transform 0.08s ease-out":"transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)"},className:"relative rounded-2xl sm:rounded-3xl glass-panel p-2.5 sm:p-4 overflow-hidden group cursor-pointer border border-white/10 hover:border-electric/40 hover:shadow-2xl hover:shadow-electric/15",onClick:()=>e(s),children:[S.jsx("div",{className:"pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl z-10",style:{background:`radial-gradient(circle 260px at ${g.x}% ${g.y}%, rgba(255, 255, 255, 0.12), transparent 70%)`}}),S.jsxs("div",{className:"relative aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden bg-obsidian-light mb-2 sm:mb-3",children:[S.jsx("img",{src:s.image,alt:s.title,className:"w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"}),S.jsxs("div",{className:"absolute top-2 left-2 sm:top-3 sm:left-3 flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-black/60 backdrop-blur-md text-white border border-white/10",children:[S.jsx(pw,{className:"w-3 h-3 sm:w-3.5 sm:h-3.5 text-electric animate-spin",style:{animationDuration:"8s"}}),S.jsx("span",{children:"3D"})]}),S.jsx("button",{onClick:D=>{D.stopPropagation(),n(s)},className:`absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 rounded-full backdrop-blur-md transition-all duration-200 z-20 ${r?"bg-liquidGold text-black shadow-lg shadow-liquidGold/40 scale-105":"bg-black/50 text-white hover:bg-black/80 hover:text-liquidGold border border-white/10"}`,title:"Save to Watchlist",children:S.jsx(Js,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),S.jsx("div",{className:"absolute bottom-2 left-2 sm:bottom-3 sm:left-3 px-1.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium bg-black/60 backdrop-blur-md text-slate-300 border border-white/10 truncate max-w-[80%]",children:s.condition})]}),S.jsxs("div",{className:"space-y-1",children:[S.jsxs("div",{className:"flex items-baseline justify-between gap-1",children:[S.jsxs("div",{className:"flex items-baseline gap-1 sm:gap-2",children:[S.jsxs("span",{className:"text-base sm:text-2xl font-extrabold text-white tracking-tight",children:["$",s.price]}),S.jsxs("span",{className:"text-[10px] sm:text-xs line-through text-slate-500 font-mono",children:["$",s.originalPrice]})]}),S.jsx("span",{className:"text-[9px] sm:text-[11px] font-semibold text-aurora bg-emerald-500/10 px-1.5 sm:px-2 py-0.2 sm:py-0.5 rounded-full border border-emerald-500/20 truncate",children:s.dealRating})]}),S.jsx("h3",{className:"text-xs sm:text-sm font-semibold text-slate-100 line-clamp-1 group-hover:text-electric transition-colors",children:s.title}),S.jsxs("div",{className:"flex items-center justify-between text-[10px] sm:text-xs text-slate-400 pt-1 border-t border-white/5",children:[S.jsx("span",{className:"truncate max-w-[65%]",children:s.location.split("·")[0]}),S.jsx("span",{className:"font-mono text-slate-500",children:s.timeAgo})]})]}),S.jsxs("div",{className:"mt-2 sm:mt-3 pt-1.5 sm:pt-2 flex items-center justify-between gap-1.5 sm:gap-2",children:[S.jsxs("button",{onClick:D=>{D.stopPropagation(),e(s)},className:"flex-1 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold bg-white/5 hover:bg-electric hover:text-white text-slate-300 transition-all border border-white/10 flex items-center justify-center gap-1 sm:gap-1.5",children:[S.jsx(ei,{className:"w-3 h-3 sm:w-3.5 sm:h-3.5"}),S.jsx("span",{children:"Inspect"})]}),S.jsx("button",{onClick:D=>{D.stopPropagation(),l?a(s):u()},className:`p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-xs border transition-all ${l?"bg-white/5 border-white/10 hover:border-electric/40 text-slate-300 hover:text-white":"bg-liquidGold/10 border-liquidGold/30 text-liquidGold hover:bg-liquidGold/20"}`,title:l?"Set Deal Alert":"Unlock Deal Alerts (Premium)",children:S.jsx(ei,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})})]})]})},Lw=({product:s,onClose:e,onSetReminder:n,onToggleWatchlist:r,isWatchlisted:a,isPremium:l,onTriggerUpgrade:u})=>{const f=Ze.useRef(null),[h,m]=Ze.useState("studio"),[y,x]=Ze.useState(!1),[g,M]=Ze.useState(!0),E=Ze.useRef(null),b=Ze.useRef(null),_=Ze.useRef(null);return Ze.useEffect(()=>{if(!f.current)return;const v=f.current.clientWidth,D=f.current.clientHeight,L=new vg;E.current=L;const R=new Fn(45,v/D,.1,100);R.position.set(0,0,7.5);const G=new Rg({antialias:!0,alpha:!0,powerPreference:"high-performance"});G.setSize(v,D),G.setPixelRatio(Math.min(window.devicePixelRatio,2)),G.shadowMap.enabled=!0,f.current.appendChild(G.domElement);const O=new Qr;_.current=O,L.add(O);let k;if(s.geometryType==="mug"){const Re=new vr(1.2,1,2.5,32,1,!0),Ne=new Il({color:14606046,roughness:.35,metalness:.05,clearcoat:.6,clearcoatRoughness:.1});k=new Ht(Re,Ne);const F=new Xo(.8,.18,16,32,Math.PI),ct=new Ht(F,Ne);ct.rotation.z=-Math.PI/2,ct.position.set(1.15,0,0),O.add(ct),O.add(k)}else if(s.geometryType==="glass"){const Re=new vr(1.5,1.5,2.2,32),Ne=new Go({color:2042167,roughness:.2,metalness:.9});k=new Ht(Re,Ne);const F=new vr(1.2,1.2,.2,32),ct=new Il({color:34047,transmission:.9,opacity:1,transparent:!0,roughness:.05,ior:1.52}),Qe=new Ht(F,ct);Qe.position.y=1.15,O.add(Qe),O.add(k)}else if(s.geometryType==="record"){const Re=new vr(2.3,2.3,.05,64),Ne=new Go({color:657930,roughness:.25,metalness:.7});k=new Ht(Re,Ne);const F=new vr(.8,.8,.06,32),ct=new Zs({color:16766720}),Qe=new Ht(F,ct);O.add(Qe),O.add(k)}else if(s.geometryType==="chair"){const Re=new ts(2.2,.2,2),Ne=new Go({color:9584654,roughness:.4,metalness:.1});k=new Ht(Re,Ne);const F=new ts(2.2,1.6,.15),ct=new Ht(F,Ne);ct.position.set(0,.9,-.9),O.add(ct),O.add(k)}else{const Re=new vr(1.4,1,2.8,24),Ne=new Il({color:2365205,roughness:.35,metalness:.25,clearcoat:.4,clearcoatRoughness:.3});k=new Ht(Re,Ne);const F=new Xo(.9,.2,16,32),ct=new Go({color:1576974,roughness:.4}),Qe=new Ht(F,ct);Qe.rotation.x=Math.PI/2,Qe.position.y=1.35,O.add(Qe),O.add(k)}const V=new uf(3.2,32),N=new Zs({color:34047,transparent:!0,opacity:.1}),C=new Ht(V,N);C.rotation.x=-Math.PI/2,C.position.y=-2,L.add(C);const B=new Qr;b.current=B,L.add(B);const ie=new wg(16777215,.6);B.add(ie);const Q=new x_(16777215,2.5);Q.position.set(5,8,6),B.add(Q);const de=new Bl(34047,2,20);de.position.set(-6,-2,4),B.add(de);const he=new Bl(16766720,3,20);he.position.set(0,6,-6),B.add(he);let ce=!1,me=0,X=0;const pe=(Re,Ne)=>{ce=!0,me=Re,X=Ne},I=(Re,Ne)=>{if(!ce||!_.current)return;const F=Re-me,ct=Ne-X;_.current.rotation.y+=F*.01,_.current.rotation.x+=ct*.01,me=Re,X=Ne},w=()=>{ce=!1},H=Re=>pe(Re.clientX,Re.clientY),J=Re=>I(Re.clientX,Re.clientY),j=()=>w(),ee=Re=>{Re.touches.length>0&&pe(Re.touches[0].clientX,Re.touches[0].clientY)},ue=Re=>{Re.touches.length>0&&I(Re.touches[0].clientX,Re.touches[0].clientY)},oe=()=>w(),ge=G.domElement;ge.style.touchAction="none",ge.addEventListener("mousedown",H),window.addEventListener("mousemove",J),window.addEventListener("mouseup",j),ge.addEventListener("touchstart",ee,{passive:!0}),window.addEventListener("touchmove",ue,{passive:!0}),window.addEventListener("touchend",oe);let Ae;const Ce=()=>{Ae=requestAnimationFrame(Ce),g&&!ce&&_.current&&(_.current.rotation.y+=.008),G.render(L,R)};Ce();const et=()=>{if(!f.current)return;const Re=f.current.clientWidth,Ne=f.current.clientHeight;R.aspect=Re/Ne,R.updateProjectionMatrix(),G.setSize(Re,Ne)};return window.addEventListener("resize",et),()=>{cancelAnimationFrame(Ae),ge.removeEventListener("mousedown",H),window.removeEventListener("mousemove",J),window.removeEventListener("mouseup",j),ge.removeEventListener("touchstart",ee),window.removeEventListener("touchmove",ue),window.removeEventListener("touchend",oe),window.removeEventListener("resize",et),f.current&&ge&&f.current.removeChild(ge),G.dispose()}},[s,g]),Ze.useEffect(()=>{_.current&&_.current.traverse(v=>{v instanceof Ht&&v.material&&(Array.isArray(v.material)?v.material.forEach(D=>D.wireframe=y):v.material.wireframe=y)})},[y]),S.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn",children:S.jsxs("div",{className:"relative w-full max-w-5xl h-[92vh] max-h-[850px] glass-panel-elevated rounded-3xl overflow-hidden flex flex-col md:flex-row border border-white/15 shadow-2xl",children:[S.jsx("button",{onClick:e,className:"absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors",title:"Close Inspector",children:S.jsx(ns,{className:"w-5 h-5"})}),S.jsxs("div",{className:"relative flex-1 h-[45%] md:h-full bg-gradient-to-b from-obsidian-light to-obsidian flex flex-col items-center justify-center cursor-grab active:cursor-grabbing",children:[S.jsx("div",{ref:f,className:"w-full h-full"}),S.jsxs("div",{className:"absolute top-4 left-4 flex items-center gap-2 z-10",children:[S.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-semibold bg-electric/20 text-electric border border-electric/30 flex items-center gap-1.5",children:[S.jsx("span",{className:"w-2 h-2 rounded-full bg-electric animate-ping"}),"Live 3D Viewport"]}),S.jsx("span",{className:"hidden sm:inline-block px-2.5 py-1 rounded-full text-xs text-slate-400 bg-white/5 border border-white/10",children:"Drag to Rotate"})]}),S.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-auto",children:[S.jsxs("div",{className:"flex items-center gap-2 bg-black/50 backdrop-blur-md p-1.5 rounded-2xl border border-white/10",children:[S.jsx("button",{onClick:()=>M(!g),className:`p-2 rounded-xl text-xs transition-colors flex items-center gap-1 ${g?"bg-electric text-white":"text-slate-400 hover:text-white"}`,title:"Toggle Auto Spin",children:S.jsx(Aw,{className:"w-4 h-4"})}),S.jsx("button",{onClick:()=>x(!y),className:`p-2 rounded-xl text-xs transition-colors flex items-center gap-1 ${y?"bg-electric text-white":"text-slate-400 hover:text-white"}`,title:"Toggle Mesh Wireframe",children:S.jsx(yw,{className:"w-4 h-4"})})]}),S.jsxs("div",{className:"flex items-center gap-1 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-white/10 text-xs text-slate-300",children:[S.jsx(ei,{className:"w-3.5 h-3.5 text-liquidGold"}),S.jsx("span",{children:"Real-Time PBR Shader"})]})]})]}),S.jsxs("div",{className:"w-full md:w-[420px] h-[55%] md:h-full overflow-y-auto p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 bg-obsidian-light/70 backdrop-blur-2xl",children:[S.jsxs("div",{className:"space-y-4",children:[S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 mb-1.5",children:[S.jsx("span",{className:"uppercase tracking-widest font-mono text-electric",children:s.category}),S.jsx("span",{children:s.location})]}),S.jsx("h2",{className:"text-2xl font-bold text-white tracking-tight leading-snug",children:s.title})]}),S.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between",children:[S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-baseline gap-2",children:[S.jsxs("span",{className:"text-3xl font-extrabold text-white",children:["$",s.price]}),S.jsxs("span",{className:"text-sm line-through text-slate-500",children:["$",s.originalPrice]})]}),S.jsxs("p",{className:"text-xs text-aurora font-medium mt-0.5",children:["Save $",s.originalPrice-s.price," (",(100-s.price/s.originalPrice*100).toFixed(0),"% Off)"]})]}),S.jsx("span",{className:"px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:s.dealRating})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-300",children:[S.jsx("span",{className:"font-semibold text-white",children:"Condition:"}),S.jsx("span",{className:"px-2 py-0.5 rounded-md bg-white/10 text-xs",children:s.condition})]}),S.jsx("p",{className:"text-sm text-slate-400 leading-relaxed",children:s.description})]}),S.jsxs("div",{className:"p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("img",{src:s.seller.avatar,alt:s.seller.name,className:"w-10 h-10 rounded-full object-cover ring-2 ring-electric/40"}),S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsx("p",{className:"text-sm font-semibold text-white",children:s.seller.name}),s.seller.verified&&S.jsx(Cw,{className:"w-4 h-4 text-electric"})]}),S.jsxs("p",{className:"text-xs text-slate-400",children:["★ ",s.seller.rating," · ",s.seller.salesCount," sales"]})]})]}),S.jsx("button",{onClick:()=>alert(`Contacting ${s.seller.name} via encrypted peer session.`),className:"px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors",children:"Message"})]})]}),S.jsxs("div",{className:"pt-4 mt-4 border-t border-white/10 space-y-2.5",children:[S.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[S.jsxs("button",{onClick:()=>r(s),className:`py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border ${a?"bg-liquidGold/20 border-liquidGold text-liquidGold":"bg-white/5 border-white/10 hover:bg-white/10 text-white"}`,children:[S.jsx(Js,{className:"w-4 h-4"}),a?"In Watchlist":"Add to Watchlist"]}),S.jsxs("button",{onClick:()=>{l?n(s):u()},className:"py-3 px-4 rounded-xl text-xs font-bold bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all flex items-center justify-center gap-2",children:[S.jsx(ei,{className:"w-4 h-4 text-electric"}),l?"Set Deal Alert":"Alerts (Pro)"]})]}),S.jsxs("button",{onClick:()=>alert(`Initiating secure direct purchase flow for ${s.title} ($${s.price})`),className:"w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-electric to-blue-600 hover:from-electric-light hover:to-electric text-white shadow-lg shadow-electric/25 transition-all",children:["Express Peer Buy ($",s.price,")"]})]})]})]})})},Iw=({isOpen:s,onClose:e,dailyLimitMinutes:n,setDailyLimitMinutes:r,sessionElapsedSeconds:a,limitType:l,setLimitType:u,onResetSession:f})=>{if(!s)return null;const h=n*60,m=Math.min(a/h,1),y=Math.max(h-a,0),x=_=>{const v=Math.floor(_/60),D=_%60;return`${v}m ${D<10?"0":""}${D}s`},g=78,M=2*Math.PI*g,E=M-m*M,b=l==="daily"?[15,30,45,60]:[120,240,360,480];return S.jsx("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-xl animate-fadeIn",children:S.jsxs("div",{className:"relative w-full max-w-lg max-h-[92vh] overflow-y-auto glass-panel-elevated rounded-t-3xl sm:rounded-3xl p-5 sm:p-8 border border-white/15 shadow-2xl",children:[S.jsx("div",{className:"flex justify-center -mt-2 mb-4 sm:hidden",children:S.jsx("div",{className:"w-12 h-1.5 rounded-full bg-white/20"})}),S.jsx("button",{onClick:e,className:"absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors",children:S.jsx(ns,{className:"w-5 h-5"})}),S.jsxs("div",{className:"text-center space-y-1 mb-6",children:[S.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-electric/20 text-electric border border-electric/30 mb-2",children:[S.jsx(qo,{className:"w-3.5 h-3.5"}),S.jsx("span",{children:"Digital Well-being Architecture"})]}),S.jsx("h2",{className:"text-2xl font-extrabold text-white tracking-tight",children:"Set Focus Limit"}),S.jsx("p",{className:"text-xs text-slate-400 max-w-sm mx-auto",children:"Design intentional commerce habits. Control your screen-time and curb impulsive scrolling."})]}),S.jsxs("div",{className:"flex p-1 rounded-2xl bg-white/5 border border-white/10 mb-6 max-w-xs mx-auto",children:[S.jsx("button",{onClick:()=>u("daily"),className:`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${l==="daily"?"bg-electric text-white shadow-md shadow-electric/20":"text-slate-400 hover:text-white"}`,children:"Daily Budget"}),S.jsx("button",{onClick:()=>u("weekly"),className:`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${l==="weekly"?"bg-electric text-white shadow-md shadow-electric/20":"text-slate-400 hover:text-white"}`,children:"Weekly Horizon"})]}),S.jsx("div",{className:"flex flex-col items-center justify-center my-4 relative",children:S.jsxs("div",{className:"relative w-48 h-48 flex items-center justify-center",children:[S.jsxs("svg",{className:"w-full h-full -rotate-90 transform",viewBox:"0 0 200 200",children:[S.jsx("circle",{cx:"100",cy:"100",r:g,stroke:"currentColor",strokeWidth:"10",className:"text-white/10",fill:"transparent"}),S.jsx("circle",{cx:"100",cy:"100",r:g,stroke:"url(#focusGradient)",strokeWidth:"10",strokeDasharray:M,strokeDashoffset:E,strokeLinecap:"round",className:"transition-all duration-1000 ease-linear",fill:"transparent"}),S.jsx("defs",{children:S.jsxs("linearGradient",{id:"focusGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[S.jsx("stop",{offset:"0%",stopColor:"#0084FF"}),S.jsx("stop",{offset:"50%",stopColor:"#38A2FF"}),S.jsx("stop",{offset:"100%",stopColor:"#00F5A0"})]})})]}),S.jsxs("div",{className:"absolute flex flex-col items-center justify-center text-center",children:[S.jsx("span",{className:"text-3xl font-extrabold text-white tracking-tight font-mono",children:x(y)}),S.jsx("span",{className:"text-[11px] font-medium text-slate-400 uppercase tracking-widest mt-0.5",children:"Remaining Time"}),S.jsxs("span",{className:"text-[10px] text-electric font-semibold mt-1 bg-electric/15 px-2 py-0.5 rounded-full",children:[Math.round(m*100),"% used"]})]})]})}),S.jsxs("div",{className:"space-y-3 mb-6",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-300 block text-center",children:"Choose Time Allocation"}),S.jsx("div",{className:"grid grid-cols-4 gap-2",children:b.map(_=>S.jsxs("button",{onClick:()=>r(_),className:`py-2.5 rounded-xl text-xs font-bold border transition-all ${n===_?"bg-electric/20 border-electric text-electric shadow-lg shadow-electric/15":"bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"}`,children:[_," mins"]},_))}),S.jsxs("div",{className:"pt-2 px-2",children:[S.jsx("input",{type:"range",min:l==="daily"?5:30,max:l==="daily"?120:600,step:5,value:n,onChange:_=>r(Number(_.target.value)),className:"w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-electric"}),S.jsxs("div",{className:"flex justify-between text-[11px] text-slate-500 font-mono mt-1",children:[S.jsx("span",{children:l==="daily"?"5m":"30m"}),S.jsxs("span",{className:"text-electric font-bold",children:[n," minutes target"]}),S.jsx("span",{children:l==="daily"?"2h":"10h"})]})]})]}),S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("button",{onClick:f,className:"p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors",title:"Reset Session Timer",children:S.jsx(bw,{className:"w-5 h-5"})}),S.jsxs("button",{onClick:e,className:"flex-1 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-electric to-blue-600 hover:from-electric-light hover:to-electric text-white shadow-lg shadow-electric/25 transition-all flex items-center justify-center gap-2",children:[S.jsx(vw,{className:"w-4 h-4"}),S.jsx("span",{children:"Lock Focus Protocol"})]})]})]})})},Uw=({isOpen:s,onClose:e,products:n,onSelectProduct:r})=>{const[a,l]=Ze.useState(""),[u,f]=Ze.useState("All"),[h,m]=Ze.useState(200);if(!s)return null;const y=["All","Apparel","Decor","Electronics","Furniture","Collectibles"],x=n.filter(g=>{const M=g.title.toLowerCase().includes(a.toLowerCase())||g.description.toLowerCase().includes(a.toLowerCase())||g.location.toLowerCase().includes(a.toLowerCase()),E=u==="All"||g.category===u,b=g.price<=h;return M&&E&&b});return S.jsx("div",{className:"fixed inset-0 z-50 flex items-start justify-center p-2.5 sm:p-6 pt-8 sm:pt-24 bg-black/80 backdrop-blur-xl animate-fadeIn",children:S.jsxs("div",{className:"relative w-full max-w-2xl glass-panel-elevated rounded-3xl p-4 sm:p-6 border border-white/15 shadow-2xl flex flex-col max-h-[88vh]",children:[S.jsxs("div",{className:"relative flex items-center mb-4",children:[S.jsx(pf,{className:"w-5 h-5 absolute left-4 text-electric pointer-events-none"}),S.jsx("input",{type:"text",value:a,onChange:g=>l(g.target.value),placeholder:"Search verified deals, vintage coats, mechanical cameras...",autoFocus:!0,className:"w-full pl-12 pr-12 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent text-sm font-medium"}),S.jsx("button",{onClick:e,className:"absolute right-3 p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 transition-colors",children:S.jsx(ns,{className:"w-4 h-4"})})]}),S.jsxs("div",{className:"space-y-3 pb-3 border-b border-white/10",children:[S.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar",children:y.map(g=>S.jsx("button",{onClick:()=>f(g),className:`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${u===g?"bg-electric text-white shadow-md shadow-electric/25":"bg-white/5 text-slate-400 hover:text-white border border-white/5"}`,children:g},g))}),S.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 px-1",children:[S.jsxs("span",{className:"flex items-center gap-1.5",children:[S.jsx(Rw,{className:"w-3.5 h-3.5 text-electric"}),"Max Price: ",S.jsxs("strong",{className:"text-white",children:["$",h]})]}),S.jsx("input",{type:"range",min:10,max:300,step:5,value:h,onChange:g=>m(Number(g.target.value)),className:"w-36 h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-electric"})]})]}),S.jsx("div",{className:"overflow-y-auto mt-3 space-y-2 flex-1 pr-1",children:x.length===0?S.jsxs("div",{className:"text-center py-12 text-slate-400",children:[S.jsx("p",{className:"text-sm",children:"No items matching current criteria"}),S.jsx("button",{onClick:()=>{l(""),f("All"),m(300)},className:"mt-2 text-xs text-electric hover:underline",children:"Reset filters"})]}):x.map(g=>S.jsxs("div",{onClick:()=>{r(g),e()},className:"p-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-electric/30 transition-all flex items-center justify-between cursor-pointer group",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("img",{src:g.image,alt:g.title,className:"w-12 h-12 rounded-xl object-cover"}),S.jsxs("div",{children:[S.jsx("h4",{className:"text-xs font-bold text-white group-hover:text-electric transition-colors line-clamp-1",children:g.title}),S.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-slate-400 mt-0.5",children:[S.jsxs("span",{className:"font-bold text-white",children:["$",g.price]}),S.jsx("span",{children:"·"}),S.jsx("span",{children:g.location}),S.jsx("span",{children:"·"}),S.jsx("span",{className:"text-aurora",children:g.dealRating})]})]})]}),S.jsx("div",{className:"p-2 rounded-xl bg-white/5 group-hover:bg-electric text-slate-400 group-hover:text-white transition-all",children:S.jsx(Ng,{className:"w-4 h-4"})})]},g.id))})]})})},Fw=({isOpen:s,onClose:e,product:n,reminders:r,onAddReminder:a,onRemoveReminder:l})=>{const[u,f]=Ze.useState(n?Math.max(n.price-5,5):20),[h,m]=Ze.useState(""),[y,x]=Ze.useState("create"),[g,M]=Ze.useState(!1);if(!s)return null;const E=b=>{if(b.preventDefault(),!n)return;const _={id:`rem-${Date.now()}`,productId:n.id,productTitle:n.title,targetPrice:u,reminderDate:h||"Next 24 hours",createdAt:new Date().toLocaleDateString()};a(_),M(!0),setTimeout(()=>{M(!1),x("list")},1e3)};return S.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn",children:S.jsxs("div",{className:"relative w-full max-w-lg max-h-[90vh] overflow-y-auto glass-panel-elevated rounded-3xl p-5 sm:p-8 border border-white/15 shadow-2xl",children:[S.jsx("button",{onClick:e,className:"absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors",children:S.jsx(ns,{className:"w-5 h-5"})}),S.jsxs("div",{className:"flex p-1 rounded-2xl bg-white/5 border border-white/10 mb-6 max-w-xs mx-auto",children:[S.jsx("button",{onClick:()=>x("create"),className:`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${y==="create"?"bg-electric text-white shadow-md":"text-slate-400 hover:text-white"}`,children:"Create Alert"}),S.jsxs("button",{onClick:()=>x("list"),className:`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${y==="list"?"bg-electric text-white shadow-md":"text-slate-400 hover:text-white"}`,children:["Active Radars (",r.length,")"]})]}),y==="create"?S.jsxs("div",{children:[S.jsxs("div",{className:"text-center mb-6",children:[S.jsx("div",{className:"w-12 h-12 rounded-2xl bg-electric/20 text-electric flex items-center justify-center mx-auto mb-3 border border-electric/30",children:S.jsx(Zd,{className:"w-6 h-6"})}),S.jsx("h3",{className:"text-xl font-bold text-white tracking-tight",children:"Set Price Drop Radar"}),S.jsx("p",{className:"text-xs text-slate-400 mt-1 max-w-xs mx-auto",children:n?`Monitoring: ${n.title}`:"Configure real-time price trigger notification"})]}),g?S.jsxs("div",{className:"py-8 flex flex-col items-center justify-center text-center space-y-2",children:[S.jsx(xw,{className:"w-12 h-12 text-aurora animate-bounce"}),S.jsx("h4",{className:"text-base font-bold text-white",children:"Radar Activated!"}),S.jsx("p",{className:"text-xs text-slate-400",children:"We'll alert you the instant price drops below target."})]}):S.jsxs("form",{onSubmit:E,className:"space-y-4",children:[S.jsxs("div",{children:[S.jsxs("label",{className:"text-xs font-semibold text-slate-300 block mb-1.5 flex items-center gap-1.5",children:[S.jsx(_w,{className:"w-3.5 h-3.5 text-electric"}),"Notify me when price drops below:"]}),S.jsxs("div",{className:"relative",children:[S.jsx("span",{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono font-bold",children:"$"}),S.jsx("input",{type:"number",required:!0,min:1,max:n?n.price:999,value:u,onChange:b=>f(Number(b.target.value)),className:"w-full pl-9 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-mono font-bold text-lg focus:outline-none focus:ring-2 focus:ring-electric"})]}),n&&S.jsxs("p",{className:"text-[11px] text-slate-400 mt-1",children:["Current listed price is ",S.jsxs("strong",{className:"text-white",children:["$",n.price]})]})]}),S.jsxs("div",{children:[S.jsxs("label",{className:"text-xs font-semibold text-slate-300 block mb-1.5 flex items-center gap-1.5",children:[S.jsx(mw,{className:"w-3.5 h-3.5 text-electric"}),"Target Revisit Date:"]}),S.jsx("input",{type:"date",value:h,onChange:b=>m(b.target.value),className:"w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-electric"})]}),S.jsxs("button",{type:"submit",className:"w-full py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-electric to-blue-600 hover:from-electric-light hover:to-electric text-white shadow-lg shadow-electric/25 transition-all flex items-center justify-center gap-2 mt-4",children:[S.jsx(ei,{className:"w-4 h-4"}),S.jsx("span",{children:"Arm Price Radar"})]})]})]}):S.jsxs("div",{children:[S.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:"Your Active Deal Radars"}),r.length===0?S.jsxs("div",{className:"text-center py-8 text-slate-400",children:[S.jsx(Zd,{className:"w-8 h-8 mx-auto mb-2 text-slate-600"}),S.jsx("p",{className:"text-xs",children:"No active alerts set yet."})]}):S.jsx("div",{className:"space-y-2.5 max-h-64 overflow-y-auto pr-1",children:r.map(b=>S.jsxs("div",{className:"p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between",children:[S.jsxs("div",{children:[S.jsx("h5",{className:"text-xs font-bold text-white",children:b.productTitle}),S.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-slate-400 mt-0.5 font-mono",children:[S.jsxs("span",{className:"text-aurora font-bold",children:["Alert at ≤ $",b.targetPrice]}),S.jsx("span",{children:"·"}),S.jsx("span",{children:b.reminderDate})]})]}),S.jsx("button",{onClick:()=>l(b.id),className:"p-2 rounded-xl text-slate-400 hover:text-red-400 hover:bg-white/5 transition-colors",title:"Delete reminder",children:S.jsx(n0,{className:"w-4 h-4"})})]},b.id))})]})]})})},kw=({isOpen:s,onClose:e,watchlist:n,onRemoveFromWatchlist:r,onSelectProduct:a})=>{if(!s)return null;const l=n.reduce((u,f)=>u+f.price,0);return S.jsx("div",{className:"fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-xl animate-fadeIn",children:S.jsxs("div",{className:"w-full max-w-md h-full glass-panel-elevated p-4 sm:p-6 flex flex-col justify-between border-l border-white/10 shadow-2xl",children:[S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("div",{className:"p-2 rounded-xl bg-liquidGold/20 text-liquidGold",children:S.jsx(Js,{className:"w-4 h-4"})}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-lg font-bold text-white",children:"Saved Watchlist"}),S.jsxs("p",{className:"text-xs text-slate-400",children:[n.length," tracked items"]})]})]}),S.jsx("button",{onClick:e,className:"p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors",children:S.jsx(ns,{className:"w-4 h-4"})})]}),S.jsx("div",{className:"mt-4 space-y-3 max-h-[68vh] overflow-y-auto pr-1",children:n.length===0?S.jsxs("div",{className:"text-center py-16 text-slate-400",children:[S.jsx(Js,{className:"w-10 h-10 mx-auto mb-2 text-slate-600"}),S.jsx("p",{className:"text-sm font-semibold text-slate-300",children:"Your Watchlist is empty"}),S.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Tag products on the marketplace to track real-time price trends."})]}):n.map(u=>S.jsxs("div",{className:"p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group hover:border-electric/30 transition-all",children:[S.jsxs("div",{className:"flex items-center gap-3 cursor-pointer flex-1",onClick:()=>{a(u),e()},children:[S.jsx("img",{src:u.image,alt:u.title,className:"w-14 h-14 rounded-xl object-cover"}),S.jsxs("div",{children:[S.jsx("h4",{className:"text-xs font-bold text-white group-hover:text-electric transition-colors line-clamp-1",children:u.title}),S.jsxs("p",{className:"text-sm font-extrabold text-white mt-0.5",children:["$",u.price]}),S.jsx("span",{className:"text-[10px] text-aurora font-mono",children:u.dealRating})]})]}),S.jsx("div",{className:"flex items-center gap-1",children:S.jsx("button",{onClick:()=>r(u.id),className:"p-2 rounded-xl text-slate-400 hover:text-red-400 hover:bg-white/5 transition-colors",title:"Remove from Watchlist",children:S.jsx(n0,{className:"w-4 h-4"})})})]},u.id))})]}),n.length>0&&S.jsxs("div",{className:"pt-4 border-t border-white/10 space-y-3",children:[S.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-300",children:[S.jsx("span",{children:"Total Tracked Portfolio:"}),S.jsxs("span",{className:"text-base font-extrabold text-white font-mono",children:["$",l]})]}),S.jsx("button",{onClick:()=>alert("Exporting portfolio watchlist to PDF / alert digest."),className:"w-full py-3 rounded-xl font-bold text-xs bg-white/10 hover:bg-white/20 text-white transition-colors",children:"Export Price Digest"})]})]})})};var mf={};(function s(e,n,r,a){var l=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",f=(function(){if(!e.OffscreenCanvas)return!1;try{var I=new OffscreenCanvas(1,1),w=I.getContext("2d");w.fillRect(0,0,1,1);var H=I.transferToImageBitmap();w.createPattern(H,"no-repeat")}catch{return!1}return!0})();function h(){}function m(I){var w=n.exports.Promise,H=w!==void 0?w:e.Promise;return typeof H=="function"?new H(I):(I(h,h),null)}var y=(function(I,w){return{transform:function(H){if(I)return H;if(w.has(H))return w.get(H);var J=new OffscreenCanvas(H.width,H.height),j=J.getContext("2d");return j.drawImage(H,0,0),w.set(H,J),J},clear:function(){w.clear()}}})(f,new Map),x=(function(){var I=Math.floor(16.666666666666668),w,H,J={},j=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(w=function(ee){var ue=Math.random();return J[ue]=requestAnimationFrame(function oe(ge){j===ge||j+I-1<ge?(j=ge,delete J[ue],ee()):J[ue]=requestAnimationFrame(oe)}),ue},H=function(ee){J[ee]&&cancelAnimationFrame(J[ee])}):(w=function(ee){return setTimeout(ee,I)},H=function(ee){return clearTimeout(ee)}),{frame:w,cancel:H}})(),g=(function(){var I,w,H={};function J(j){function ee(ue,oe){j.postMessage({options:ue||{},callback:oe})}j.init=function(oe){var ge=oe.transferControlToOffscreen();j.postMessage({canvas:ge},[ge])},j.fire=function(oe,ge,Ae){if(w)return ee(oe,null),w;var Ce=Math.random().toString(36).slice(2);return w=m(function(et){function Re(Ne){Ne.data.callback===Ce&&(delete H[Ce],j.removeEventListener("message",Re),w=null,y.clear(),Ae(),et())}j.addEventListener("message",Re),ee(oe,Ce),H[Ce]=Re.bind(null,{data:{callback:Ce}})}),w},j.reset=function(){j.postMessage({reset:!0});for(var oe in H)H[oe](),delete H[oe]}}return function(){if(I)return I;if(!r&&l){var j=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{I=new Worker(URL.createObjectURL(new Blob([j])))}catch(ee){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ee),null}J(I)}return I}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function E(I,w){return w?w(I):I}function b(I){return I!=null}function _(I,w,H){return E(I&&b(I[w])?I[w]:M[w],H)}function v(I){return I<0?0:Math.floor(I)}function D(I,w){return Math.floor(Math.random()*(w-I))+I}function L(I){return parseInt(I,16)}function R(I){return I.map(G)}function G(I){var w=String(I).replace(/[^0-9a-f]/gi,"");return w.length<6&&(w=w[0]+w[0]+w[1]+w[1]+w[2]+w[2]),{r:L(w.substring(0,2)),g:L(w.substring(2,4)),b:L(w.substring(4,6))}}function O(I){var w=_(I,"origin",Object);return w.x=_(w,"x",Number),w.y=_(w,"y",Number),w}function k(I){I.width=document.documentElement.clientWidth,I.height=document.documentElement.clientHeight}function V(I){var w=I.getBoundingClientRect();I.width=w.width,I.height=w.height}function N(I){var w=document.createElement("canvas");return w.style.position="fixed",w.style.top="0px",w.style.left="0px",w.style.pointerEvents="none",w.style.zIndex=I,w}function C(I,w,H,J,j,ee,ue,oe,ge){I.save(),I.translate(w,H),I.rotate(ee),I.scale(J,j),I.arc(0,0,1,ue,oe,ge),I.restore()}function B(I){var w=I.angle*(Math.PI/180),H=I.spread*(Math.PI/180);return{x:I.x,y:I.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:I.startVelocity*.5+Math.random()*I.startVelocity,angle2D:-w+(.5*H-Math.random()*H),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:I.color,shape:I.shape,tick:0,totalTicks:I.ticks,decay:I.decay,drift:I.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:I.gravity*3,ovalScalar:.6,scalar:I.scalar,flat:I.flat}}function ie(I,w){w.x+=Math.cos(w.angle2D)*w.velocity+w.drift,w.y+=Math.sin(w.angle2D)*w.velocity+w.gravity,w.velocity*=w.decay,w.flat?(w.wobble=0,w.wobbleX=w.x+10*w.scalar,w.wobbleY=w.y+10*w.scalar,w.tiltSin=0,w.tiltCos=0,w.random=1):(w.wobble+=w.wobbleSpeed,w.wobbleX=w.x+10*w.scalar*Math.cos(w.wobble),w.wobbleY=w.y+10*w.scalar*Math.sin(w.wobble),w.tiltAngle+=.1,w.tiltSin=Math.sin(w.tiltAngle),w.tiltCos=Math.cos(w.tiltAngle),w.random=Math.random()+2);var H=w.tick++/w.totalTicks,J=w.x+w.random*w.tiltCos,j=w.y+w.random*w.tiltSin,ee=w.wobbleX+w.random*w.tiltCos,ue=w.wobbleY+w.random*w.tiltSin;if(I.fillStyle="rgba("+w.color.r+", "+w.color.g+", "+w.color.b+", "+(1-H)+")",I.beginPath(),u&&w.shape.type==="path"&&typeof w.shape.path=="string"&&Array.isArray(w.shape.matrix))I.fill(me(w.shape.path,w.shape.matrix,w.x,w.y,Math.abs(ee-J)*.1,Math.abs(ue-j)*.1,Math.PI/10*w.wobble));else if(w.shape.type==="bitmap"){var oe=Math.PI/10*w.wobble,ge=Math.abs(ee-J)*.1,Ae=Math.abs(ue-j)*.1,Ce=w.shape.bitmap.width*w.scalar,et=w.shape.bitmap.height*w.scalar,Re=new DOMMatrix([Math.cos(oe)*ge,Math.sin(oe)*ge,-Math.sin(oe)*Ae,Math.cos(oe)*Ae,w.x,w.y]);Re.multiplySelf(new DOMMatrix(w.shape.matrix));var Ne=I.createPattern(y.transform(w.shape.bitmap),"no-repeat");Ne.setTransform(Re),I.globalAlpha=1-H,I.fillStyle=Ne,I.fillRect(w.x-Ce/2,w.y-et/2,Ce,et),I.globalAlpha=1}else if(w.shape==="circle")I.ellipse?I.ellipse(w.x,w.y,Math.abs(ee-J)*w.ovalScalar,Math.abs(ue-j)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI):C(I,w.x,w.y,Math.abs(ee-J)*w.ovalScalar,Math.abs(ue-j)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI);else if(w.shape==="star")for(var F=Math.PI/2*3,ct=4*w.scalar,Qe=8*w.scalar,rt=w.x,Ve=w.y,_t=5,ke=Math.PI/_t;_t--;)rt=w.x+Math.cos(F)*Qe,Ve=w.y+Math.sin(F)*Qe,I.lineTo(rt,Ve),F+=ke,rt=w.x+Math.cos(F)*ct,Ve=w.y+Math.sin(F)*ct,I.lineTo(rt,Ve),F+=ke;else I.moveTo(Math.floor(w.x),Math.floor(w.y)),I.lineTo(Math.floor(w.wobbleX),Math.floor(j)),I.lineTo(Math.floor(ee),Math.floor(ue)),I.lineTo(Math.floor(J),Math.floor(w.wobbleY));return I.closePath(),I.fill(),w.tick<w.totalTicks}function Q(I,w,H,J,j){var ee=w.slice(),ue=I.getContext("2d"),oe,ge,Ae=m(function(Ce){function et(){oe=ge=null,ue.clearRect(0,0,J.width,J.height),y.clear(),j(),Ce()}function Re(){r&&!(J.width===a.width&&J.height===a.height)&&(J.width=I.width=a.width,J.height=I.height=a.height),!J.width&&!J.height&&(H(I),J.width=I.width,J.height=I.height),ue.clearRect(0,0,J.width,J.height),ee=ee.filter(function(Ne){return ie(ue,Ne)}),ee.length?oe=x.frame(Re):et()}oe=x.frame(Re),ge=et});return{addFettis:function(Ce){return ee=ee.concat(Ce),Ae},canvas:I,promise:Ae,reset:function(){oe&&x.cancel(oe),ge&&ge()}}}function de(I,w){var H=!I,J=!!_(w||{},"resize"),j=!1,ee=_(w,"disableForReducedMotion",Boolean),ue=l&&!!_(w||{},"useWorker"),oe=ue?g():null,ge=H?k:V,Ae=I&&oe?!!I.__confetti_initialized:!1,Ce=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,et;function Re(F,ct,Qe){for(var rt=_(F,"particleCount",v),Ve=_(F,"angle",Number),_t=_(F,"spread",Number),ke=_(F,"startVelocity",Number),U=_(F,"decay",Number),A=_(F,"gravity",Number),se=_(F,"drift",Number),_e=_(F,"colors",R),ye=_(F,"ticks",Number),xe=_(F,"shapes"),Ye=_(F,"scalar"),Pe=!!_(F,"flat"),Oe=O(F),ft=rt,we=[],He=I.width*Oe.x,tt=I.height*Oe.y;ft--;)we.push(B({x:He,y:tt,angle:Ve,spread:_t,startVelocity:ke,color:_e[ft%_e.length],shape:xe[D(0,xe.length)],ticks:ye,decay:U,gravity:A,drift:se,scalar:Ye,flat:Pe}));return et?et.addFettis(we):(et=Q(I,we,ge,ct,Qe),et.promise)}function Ne(F){var ct=ee||_(F,"disableForReducedMotion",Boolean),Qe=_(F,"zIndex",Number);if(ct&&Ce)return m(function(ke){ke()});H&&et?I=et.canvas:H&&!I&&(I=N(Qe),document.body.appendChild(I)),J&&!Ae&&ge(I);var rt={width:I.width,height:I.height};oe&&!Ae&&oe.init(I),Ae=!0,oe&&(I.__confetti_initialized=!0);function Ve(){if(oe){var ke={getBoundingClientRect:function(){if(!H)return I.getBoundingClientRect()}};ge(ke),oe.postMessage({resize:{width:ke.width,height:ke.height}});return}rt.width=rt.height=null}function _t(){et=null,J&&(j=!1,e.removeEventListener("resize",Ve)),H&&I&&(document.body.contains(I)&&document.body.removeChild(I),I=null,Ae=!1)}return J&&!j&&(j=!0,e.addEventListener("resize",Ve,!1)),oe?oe.fire(F,rt,_t):Re(F,rt,_t)}return Ne.reset=function(){oe&&oe.reset(),et&&et.reset()},Ne}var he;function ce(){return he||(he=de(null,{useWorker:!0,resize:!0})),he}function me(I,w,H,J,j,ee,ue){var oe=new Path2D(I),ge=new Path2D;ge.addPath(oe,new DOMMatrix(w));var Ae=new Path2D;return Ae.addPath(ge,new DOMMatrix([Math.cos(ue)*j,Math.sin(ue)*j,-Math.sin(ue)*ee,Math.cos(ue)*ee,H,J])),Ae}function X(I){if(!u)throw new Error("path confetti are not supported in this browser");var w,H;typeof I=="string"?w=I:(w=I.path,H=I.matrix);var J=new Path2D(w),j=document.createElement("canvas"),ee=j.getContext("2d");if(!H){for(var ue=1e3,oe=ue,ge=ue,Ae=0,Ce=0,et,Re,Ne=0;Ne<ue;Ne+=2)for(var F=0;F<ue;F+=2)ee.isPointInPath(J,Ne,F,"nonzero")&&(oe=Math.min(oe,Ne),ge=Math.min(ge,F),Ae=Math.max(Ae,Ne),Ce=Math.max(Ce,F));et=Ae-oe,Re=Ce-ge;var ct=10,Qe=Math.min(ct/et,ct/Re);H=[Qe,0,0,Qe,-Math.round(et/2+oe)*Qe,-Math.round(Re/2+ge)*Qe]}return{type:"path",path:w,matrix:H}}function pe(I){var w,H=1,J="#000000",j='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof I=="string"?w=I:(w=I.text,H="scalar"in I?I.scalar:H,j="fontFamily"in I?I.fontFamily:j,J="color"in I?I.color:J);var ee=10*H,ue=""+ee+"px "+j,oe=new OffscreenCanvas(ee,ee),ge=oe.getContext("2d");ge.font=ue;var Ae=ge.measureText(w),Ce=Math.ceil(Ae.actualBoundingBoxRight+Ae.actualBoundingBoxLeft),et=Math.ceil(Ae.actualBoundingBoxAscent+Ae.actualBoundingBoxDescent),Re=2,Ne=Ae.actualBoundingBoxLeft+Re,F=Ae.actualBoundingBoxAscent+Re;Ce+=Re+Re,et+=Re+Re,oe=new OffscreenCanvas(Ce,et),ge=oe.getContext("2d"),ge.font=ue,ge.fillStyle=J,ge.fillText(w,Ne,F);var ct=1/H;return{type:"bitmap",bitmap:oe.transferToImageBitmap(),matrix:[ct,0,0,ct,-Ce*ct/2,-et*ct/2]}}n.exports=function(){return ce().apply(this,arguments)},n.exports.reset=function(){ce().reset()},n.exports.create=de,n.exports.shapeFromPath=X,n.exports.shapeFromText=pe})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),mf,!1);const Ow=mf.exports;mf.exports.create;const zw=({isOpen:s,onClose:e,onConfirmUpgrade:n})=>{const[r,a]=Ze.useState("yearly"),l=Ze.useRef(null),[u,f]=Ze.useState(0),[h,m]=Ze.useState(0);if(!s)return null;const y=M=>{if(!l.current)return;const E=l.current.getBoundingClientRect(),b=M.clientX-E.left,_=M.clientY-E.top,v=E.width/2,D=E.height/2;f((_-D)/D*-15),m((b-v)/v*15)},x=()=>{f(0),m(0)},g=()=>{Ow({particleCount:80,spread:70,origin:{y:.6},colors:["#FFD700","#0084FF","#00F5A0","#FFFFFF"]}),n(r)};return S.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl animate-fadeIn",children:S.jsxs("div",{className:"relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel-elevated rounded-3xl p-5 sm:p-10 border border-liquidGold/30 shadow-2xl",children:[S.jsx("button",{onClick:e,className:"absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20",children:S.jsx(ns,{className:"w-5 h-5"})}),S.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-liquidGold/15 blur-[90px] pointer-events-none"}),S.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10",children:[S.jsxs("div",{className:"flex flex-col items-center",children:[S.jsxs("div",{ref:l,onMouseMove:y,onMouseLeave:x,style:{transform:`perspective(1000px) rotateX(${u}deg) rotateY(${h}deg) scale3d(1.02, 1.02, 1.02)`,transition:"transform 0.1s ease-out"},className:"w-full max-w-sm aspect-[1.586] rounded-3xl p-6 relative overflow-hidden preserve-3d cursor-pointer shadow-2xl border border-liquidGold/40 bg-gradient-to-br from-amber-500/20 via-obsidian-light to-amber-950/40",children:[S.jsx("div",{className:"absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:16px_16px]"}),S.jsxs("div",{className:"relative z-10 h-full flex flex-col justify-between",children:[S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(Hl,{className:"w-6 h-6 text-liquidGold"}),S.jsx("span",{className:"font-extrabold tracking-widest text-xs uppercase text-liquidGold",children:"Buy&Sell Visionary"})]}),S.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded-full bg-liquidGold/20 text-liquidGold border border-liquidGold/40",children:"VIP TIER"})]}),S.jsxs("div",{className:"space-y-1",children:[S.jsx("p",{className:"text-[11px] font-mono text-slate-400 uppercase tracking-widest",children:"Unlimited Access Token"}),S.jsx("p",{className:"text-xl font-mono tracking-widest text-white font-bold",children:"8842 •••• •••• 2026"})]}),S.jsxs("div",{className:"flex items-end justify-between border-t border-white/10 pt-3",children:[S.jsxs("div",{children:[S.jsx("p",{className:"text-[10px] text-slate-400 uppercase tracking-wider",children:"Status"}),S.jsxs("p",{className:"text-xs font-bold text-aurora flex items-center gap-1",children:[S.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-aurora animate-pulse"}),"Priority Realtime"]})]}),S.jsxs("div",{className:"text-right",children:[S.jsx("p",{className:"text-[10px] text-slate-400 uppercase tracking-wider",children:"Access"}),S.jsx("p",{className:"text-xs font-bold text-white",children:"Full Spectrum"})]})]})]})]}),S.jsxs("p",{className:"text-xs text-slate-400 mt-4 flex items-center gap-1.5 text-center",children:[S.jsx(ei,{className:"w-3.5 h-3.5 text-liquidGold"}),"Hover or tilt to inspect interactive Damascus foil"]})]}),S.jsxs("div",{className:"space-y-6",children:[S.jsxs("div",{children:[S.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-semibold bg-liquidGold/20 text-liquidGold border border-liquidGold/30",children:"Premium Membership"}),S.jsx("h2",{className:"text-3xl font-extrabold text-white tracking-tight mt-2",children:"Unlock Mindful Commerce"}),S.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Gain competitive buyer advantages, instant price drop radars, and screen-time mastery."})]}),S.jsxs("div",{className:"flex p-1 rounded-2xl bg-white/5 border border-white/10 max-w-xs",children:[S.jsx("button",{onClick:()=>a("monthly"),className:`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${r==="monthly"?"bg-liquidGold text-black font-extrabold shadow-md":"text-slate-400 hover:text-white"}`,children:"Monthly ($4.99)"}),S.jsxs("button",{onClick:()=>a("yearly"),className:`flex-1 py-2 rounded-xl text-xs font-bold transition-all relative ${r==="yearly"?"bg-liquidGold text-black font-extrabold shadow-md":"text-slate-400 hover:text-white"}`,children:["Annual ($49.99)",S.jsx("span",{className:"absolute -top-2 -right-1 px-1.5 py-0.5 rounded-full bg-aurora text-[9px] text-black font-extrabold",children:"SAVE 20%"})]})]}),S.jsx("div",{className:"space-y-3",children:[{title:"Full 3D Model Inspector",desc:"Examine texture, stitching & wear in real-time WebGL orbit."},{title:"Sub-Second Deal Alerts",desc:"Instant push & SMS notifications on target price drops."},{title:"Mindful Focus Limiter",desc:"Prevent compulsive buying with customizable session budgets."},{title:"Unlimited Cloud Watchlist",desc:"Track up to 200 items with live price trajectory graphs."},{title:"Direct Encrypted Peer Messaging",desc:"Skip public comments with private seller communication."}].map((M,E)=>S.jsxs("div",{className:"flex items-start gap-3",children:[S.jsx("div",{className:"p-1 rounded-full bg-liquidGold/20 text-liquidGold mt-0.5",children:S.jsx(gw,{className:"w-3.5 h-3.5"})}),S.jsxs("div",{children:[S.jsx("h4",{className:"text-xs font-bold text-white",children:M.title}),S.jsx("p",{className:"text-[11px] text-slate-400",children:M.desc})]})]},E))}),S.jsxs("button",{onClick:g,className:"w-full py-4 rounded-2xl font-extrabold text-sm bg-gradient-to-r from-liquidGold via-amber-400 to-yellow-500 hover:from-amber-300 hover:to-liquidGold text-black shadow-xl shadow-liquidGold/20 transition-all flex items-center justify-center gap-2 group",children:[S.jsx("span",{children:"Activate Premium Membership"}),S.jsx(Ng,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]})]})]})]})})},Bw=({isOpen:s,onClose:e,onLogin:n})=>{const[r,a]=Ze.useState(""),[l,u]=Ze.useState(""),[f,h]=Ze.useState(!1);if(!s)return null;const m=x=>{x.preventDefault(),n(r==="isravel@gmail.com"&&l==="isravel@1234"?{name:"Isravel (Pro)",email:r,type:"premium"}:{name:r.split("@")[0]||"User",email:r||"user@example.com",type:"free"}),e()},y=x=>{n(x==="premium"?{name:"Isravel (Pro)",email:"isravel@gmail.com",type:"premium"}:{name:"Guest Explorer",email:"guest@buysell.io",type:"free"}),e()};return S.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn",children:S.jsxs("div",{className:"relative w-full max-w-md glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl",children:[S.jsx("button",{onClick:e,className:"absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors",children:S.jsx(ns,{className:"w-5 h-5"})}),S.jsxs("div",{className:"text-center mb-6",children:[S.jsx("div",{className:"inline-flex p-3 rounded-2xl bg-electric/20 text-electric mb-3 border border-electric/30",children:S.jsx(ei,{className:"w-6 h-6"})}),S.jsx("h3",{className:"text-2xl font-extrabold text-white tracking-tight",children:f?"Create Free Account":"Welcome to Buy&Sell"}),S.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Mindful commerce with screen-time limits & 3D product inspection."})]}),S.jsxs("div",{className:"space-y-2 mb-4",children:[S.jsxs("button",{onClick:()=>y("premium"),className:"w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2",children:[S.jsx("span",{className:"text-[#4285F4] font-bold text-sm",children:"G"}),S.jsx("span",{children:"Continue with Google"})]}),S.jsxs("button",{onClick:()=>y("premium"),className:"w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2",children:[S.jsx("span",{className:"text-white font-bold text-sm",children:""}),S.jsx("span",{children:"Sign in with Apple"})]})]}),S.jsxs("div",{className:"relative flex items-center justify-center my-4",children:[S.jsx("div",{className:"w-full h-px bg-white/10"}),S.jsx("span",{className:"absolute bg-obsidian-light px-3 text-[11px] font-mono text-slate-500 uppercase",children:"or email credentials"})]}),S.jsxs("form",{onSubmit:m,className:"space-y-3",children:[S.jsx("div",{children:S.jsxs("div",{className:"relative",children:[S.jsx(Tw,{className:"w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),S.jsx("input",{type:"email",required:!0,placeholder:"name@domain.com",value:r,onChange:x=>a(x.target.value),className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electric"})]})}),S.jsx("div",{children:S.jsxs("div",{className:"relative",children:[S.jsx(ww,{className:"w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),S.jsx("input",{type:"password",required:!0,placeholder:"Enter secure password",value:l,onChange:x=>u(x.target.value),className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electric"})]})}),S.jsx("button",{type:"submit",className:"w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-electric to-blue-600 hover:from-electric-light hover:to-electric text-white shadow-lg shadow-electric/25 transition-all mt-2",children:f?"Create Account":"Sign In"})]}),S.jsxs("div",{className:"mt-5 p-3 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1.5",children:[S.jsx("p",{className:"text-[11px] font-semibold text-slate-400",children:"Instant Demo Shortcuts:"}),S.jsxs("div",{className:"flex gap-2",children:[S.jsx("button",{onClick:()=>y("free"),className:"flex-1 py-1.5 rounded-lg text-[11px] font-bold bg-white/10 hover:bg-white/20 text-slate-300",children:"Sign In as Free"}),S.jsx("button",{onClick:()=>y("premium"),className:"flex-1 py-1.5 rounded-lg text-[11px] font-bold bg-liquidGold/20 hover:bg-liquidGold/30 text-liquidGold border border-liquidGold/30",children:"Sign In as Pro (Isravel)"})]})]}),S.jsx("div",{className:"text-center mt-4",children:S.jsx("button",{onClick:()=>h(!f),className:"text-xs text-electric hover:underline",children:f?"Already have an account? Sign In":"Don't have an account? Sign Up"})})]})})},Hw=({onOpenSearch:s,onOpenFocus:e,onOpenWatchlist:n,onOpenUpgrade:r,onScrollToTop:a,watchlistCount:l,isPremium:u,sessionElapsedSeconds:f})=>S.jsx("nav",{className:"md:hidden fixed bottom-3 left-3 right-3 z-40",children:S.jsxs("div",{className:"glass-panel-elevated rounded-2xl p-1.5 border border-white/15 shadow-2xl flex items-center justify-around bg-obsidian-card/90 backdrop-blur-2xl",children:[S.jsxs("button",{onClick:a,className:"flex flex-col items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white transition-colors flex-1",children:[S.jsx(Mw,{className:"w-5 h-5 text-electric"}),S.jsx("span",{className:"text-[10px] font-semibold mt-0.5",children:"Explore"})]}),S.jsxs("button",{onClick:s,className:"flex flex-col items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white transition-colors flex-1",children:[S.jsx(pf,{className:"w-5 h-5"}),S.jsx("span",{className:"text-[10px] font-semibold mt-0.5",children:"Search"})]}),S.jsxs("button",{onClick:e,className:"flex flex-col items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white transition-colors flex-1 relative",children:[S.jsxs("div",{className:"relative",children:[S.jsx(qo,{className:"w-5 h-5 text-aurora"}),S.jsx("span",{className:"absolute -top-1 -right-1 w-2 h-2 rounded-full bg-aurora animate-pulse"})]}),S.jsx("span",{className:"text-[10px] font-semibold mt-0.5",children:"Focus"})]}),S.jsxs("button",{onClick:n,className:"flex flex-col items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white transition-colors flex-1 relative",children:[S.jsxs("div",{className:"relative",children:[S.jsx(Js,{className:"w-5 h-5 text-liquidGold"}),l>0&&S.jsx("span",{className:"absolute -top-1.5 -right-2 px-1 py-0.2 rounded-full bg-liquidGold text-black font-extrabold text-[9px] leading-tight",children:l})]}),S.jsx("span",{className:"text-[10px] font-semibold mt-0.5",children:"Saved"})]}),S.jsxs("button",{onClick:r,className:`flex flex-col items-center justify-center p-2 rounded-xl transition-colors flex-1 ${u?"text-liquidGold":"text-slate-300 hover:text-white"}`,children:[u?S.jsx(Hl,{className:"w-5 h-5 text-liquidGold"}):S.jsx(ei,{className:"w-5 h-5 text-liquidGold"}),S.jsx("span",{className:"text-[10px] font-semibold mt-0.5",children:u?"VIP":"Upgrade"})]})]})});function Vw(){const[s,e]=Ze.useState(()=>{const J=localStorage.getItem("buysell_logged_user");if(J)try{return JSON.parse(J)}catch{}return{name:"Guest Explorer",email:"guest@buysell.io",type:"free"}}),[n,r]=Ze.useState("All"),[a,l]=Ze.useState(null),[u,f]=Ze.useState(null),[h,m]=Ze.useState(!1),[y,x]=Ze.useState(!1),[g,M]=Ze.useState(!1),[E,b]=Ze.useState(!1),[_,v]=Ze.useState(!1),[D,L]=Ze.useState(!1),[R,G]=Ze.useState(()=>{const J=localStorage.getItem("buysell_watchlist");return J?JSON.parse(J):[Fo[0]]}),[O,k]=Ze.useState(()=>{const J=localStorage.getItem("buysell_reminders");return J?JSON.parse(J):[{id:"rem-sample",productId:Fo[0].id,productTitle:Fo[0].title,targetPrice:20,reminderDate:"Next 24h",createdAt:"Today"}]}),[V,N]=Ze.useState(30),[C,B]=Ze.useState("daily"),[ie,Q]=Ze.useState(0),[de,he]=Ze.useState(!1);Ze.useEffect(()=>{const J=j=>{(j.metaKey||j.ctrlKey)&&j.key==="k"&&(j.preventDefault(),x(ee=>!ee))};return window.addEventListener("keydown",J),()=>window.removeEventListener("keydown",J)},[]),Ze.useEffect(()=>{const J=setInterval(()=>{Q(j=>{const ee=j+1;return ee===V*60&&he(!0),ee})},1e3);return()=>clearInterval(J)},[V]),Ze.useEffect(()=>{localStorage.setItem("buysell_watchlist",JSON.stringify(R))},[R]),Ze.useEffect(()=>{localStorage.setItem("buysell_reminders",JSON.stringify(O))},[O]),Ze.useEffect(()=>{localStorage.setItem("buysell_logged_user",JSON.stringify(s))},[s]);const ce=J=>{G(j=>j.some(ue=>ue.id===J.id)?j.filter(ue=>ue.id!==J.id):[...j,J])},me=J=>{G(j=>j.filter(ee=>ee.id!==J))},X=J=>{k(j=>[...j,J])},pe=J=>{k(j=>j.filter(ee=>ee.id!==J))},I=J=>{f(J),M(!0)},w=()=>{e(J=>({...J,type:J.type==="premium"?"free":"premium",name:J.type==="premium"?"Guest Explorer":"Isravel (Pro)"}))},H=Fo.filter(J=>n==="All"||J.category===n);return S.jsxs("div",{className:"relative min-h-screen text-slate-100 flex flex-col selection:bg-electric selection:text-white",children:[S.jsx(nw,{}),de&&S.jsxs("div",{className:"sticky top-0 z-50 w-full bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-black px-4 py-2.5 text-center text-xs font-bold flex items-center justify-center gap-2 shadow-xl animate-fadeIn",children:[S.jsx(hw,{className:"w-4 h-4"}),S.jsxs("span",{children:["Mindful Focus Target Reached (",V," mins). Take a break and step away from the screen!"]}),S.jsx("button",{onClick:()=>he(!1),className:"ml-3 px-2 py-0.5 rounded-md bg-black/20 hover:bg-black/30 text-white text-[10px]",children:"Dismiss"})]}),S.jsx(Pw,{user:s,onOpenSearch:()=>x(!0),onOpenFocus:()=>m(!0),onOpenWatchlist:()=>b(!0),onOpenReminders:()=>{f(null),M(!0)},onOpenUpgrade:()=>v(!0),onOpenAuth:()=>L(!0),onLogout:()=>{e({name:"Guest Explorer",email:"guest@buysell.io",type:"free"})},onToggleTier:w,sessionElapsedSeconds:ie,dailyLimitMinutes:V,watchlistCount:R.length,remindersCount:O.length}),S.jsxs("main",{className:"flex-1 relative z-10 max-w-7xl mx-auto w-full px-3 sm:px-8 pb-28 sm:pb-16",children:[S.jsx(Nw,{onOpenFocus:()=>m(!0),onOpenUpgrade:()=>v(!0),isPremium:s.type==="premium",selectedCategory:n,onSelectCategory:r}),S.jsxs("div",{className:"mt-6",children:[S.jsxs("div",{className:"flex items-center justify-between mb-4 px-1",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("h2",{className:"text-xl font-extrabold text-white tracking-tight",children:"Curated Listings"}),S.jsxs("span",{className:"text-xs font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/10",children:[H.length," verified items"]})]}),S.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-400",children:[S.jsx("span",{className:"hidden sm:inline",children:"Spatial Tilt: Active"}),S.jsx("span",{className:"w-2 h-2 rounded-full bg-aurora animate-pulse"})]})]}),S.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6",children:H.map(J=>S.jsx(Dw,{product:J,onSelect:j=>l(j),onToggleWatchlist:ce,isWatchlisted:R.some(j=>j.id===J.id),onSetReminder:I,isPremium:s.type==="premium",onTriggerUpgrade:()=>v(!0)},J.id))})]}),S.jsxs("section",{className:"mt-20 p-6 sm:p-10 rounded-3xl glass-panel border border-white/10 text-center relative overflow-hidden",children:[S.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-electric/10 via-transparent to-liquidGold/10 pointer-events-none"}),S.jsxs("div",{className:"relative z-10 max-w-2xl mx-auto space-y-3",children:[S.jsx(Sw,{className:"w-8 h-8 mx-auto text-electric"}),S.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"A Platform Engineered for People, Not Addiction"}),S.jsx("p",{className:"text-xs sm:text-sm text-slate-400 leading-relaxed",children:"Buy&Sell does not use infinite algorithmic dopamine loops. You set your time budget, inspect genuine items with real-time 3D PBR accuracy, and directly negotiate peer-to-peer."})]})]})]}),S.jsx("footer",{className:"relative z-10 border-t border-white/10 py-6 px-4 text-center text-xs text-slate-500",children:S.jsx("p",{children:"© 2026 Buy&Sell • High-Fidelity 3D Spatial E-Commerce"})}),a&&S.jsx(Lw,{product:a,onClose:()=>l(null),onSetReminder:I,onToggleWatchlist:ce,isWatchlisted:R.some(J=>J.id===a.id),isPremium:s.type==="premium",onTriggerUpgrade:()=>{l(null),v(!0)}}),S.jsx(Iw,{isOpen:h,onClose:()=>m(!1),dailyLimitMinutes:V,setDailyLimitMinutes:N,sessionElapsedSeconds:ie,limitType:C,setLimitType:B,onResetSession:()=>{Q(0),he(!1)}}),S.jsx(Uw,{isOpen:y,onClose:()=>x(!1),products:Fo,onSelectProduct:J=>l(J)}),S.jsx(Fw,{isOpen:g,onClose:()=>M(!1),product:u,reminders:O,onAddReminder:X,onRemoveReminder:pe}),S.jsx(kw,{isOpen:E,onClose:()=>b(!1),watchlist:R,onRemoveFromWatchlist:me,onSelectProduct:J=>l(J)}),S.jsx(zw,{isOpen:_,onClose:()=>v(!1),onConfirmUpgrade:()=>{e({name:"Isravel (Pro)",email:"isravel@gmail.com",type:"premium"}),v(!1)}}),S.jsx(Bw,{isOpen:D,onClose:()=>L(!1),onLogin:J=>e(J)}),S.jsx(Hw,{onOpenSearch:()=>x(!0),onOpenFocus:()=>m(!0),onOpenWatchlist:()=>b(!0),onOpenUpgrade:()=>v(!0),onScrollToTop:()=>window.scrollTo({top:0,behavior:"smooth"}),watchlistCount:R.length,isPremium:s.type==="premium",sessionElapsedSeconds:ie})]})}Xx.createRoot(document.getElementById("root")).render(S.jsx(zx.StrictMode,{children:S.jsx(Vw,{})}));
