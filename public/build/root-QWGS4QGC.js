import{a as ho,b as D,c as ge,d as Lt}from"/build/_shared/chunk-XKPPRHAL.js";import{a as go}from"/build/_shared/chunk-5XAW6RWB.js";import{b as Bt,c as Mt}from"/build/_shared/chunk-A7IPQTS3.js";import{a as ee,b as St,c as Ct,f as Nt,k as Ft,l as Ot,m as Dt,o as Tt,q as Pt,u as At,w as It}from"/build/_shared/chunk-KV7DDRWL.js";import{a as k,b as _t}from"/build/_shared/chunk-XBDI323W.js";import{b as vo,c as g}from"/build/_shared/chunk-Q3IECNXJ.js";var Qr=vo((uu,Xr)=>{Xr.exports={}});var T=g(k());var w=g(k());var I=g(k());var be=g(k());function he(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var Ut=he()?be.useLayoutEffect:be.useEffect;var ye=g(k());function zt(){var e=(0,ye.useState)(Object.create(null)),t=e[1];return(0,ye.useCallback)(function(){t(Object.create(null))},[])}var Wt=g(go());function bo(e,t){if(e==null)return{};var r={},o=Object.keys(e),n,a;for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}var yo=["unstable_skipInitialRender"],wo=function(t){var r=t.children,o=t.type,n=o===void 0?"reach-portal":o,a=t.containerRef,i=(0,I.useRef)(null),c=(0,I.useRef)(null),u=zt();return Ut(function(){if(!!i.current){var l=i.current.ownerDocument,s=a?.current||l.body;return c.current=l?.createElement(n),s.appendChild(c.current),u(),function(){c.current&&s&&s.removeChild(c.current)}}},[n,u,a]),c.current?(0,Wt.createPortal)(r,c.current):(0,I.createElement)("span",{ref:i})},Vt=function(t){var r=t.unstable_skipInitialRender,o=bo(t,yo),n=(0,I.useState)(!1),a=n[0],i=n[1];return(0,I.useEffect)(function(){r&&i(!0)},[r]),r&&!a?null:(0,I.createElement)(wo,o)};function jt(e){return he()?e?e.ownerDocument:document:null}function Ht(e){return!!(e&&{}.toString.call(e)=="[object Function]")}function we(){}var $n=g(k());function Gt(e){if(!1)var t}var Yt=g(k());function $t(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function xo(e,t){if(!!e){if(typeof e=="string")return $t(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $t(e,t)}}function ko(e,t){var r;if(typeof Symbol>"u"||e[Symbol.iterator]==null){if(Array.isArray(e)||(r=xo(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return r=e[Symbol.iterator](),r.next.bind(r)}function Eo(e,t){if(e!=null)if(Ht(e))e(t);else try{e.current=t}catch{throw new Error('Cannot assign value "'+t+'" to ref "'+e+'"')}}function Zt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,Yt.useCallback)(function(o){for(var n=ko(t),a;!(a=n()).done;){var i=a.value;Eo(i,o)}},t)}function te(e,t){return function(r){if(e&&e(r),!r.defaultPrevented)return t(r)}}function ze(e,t){if(e==null)return{};var r={},o=Object.keys(e),n,a;for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}St();var Te=g(k());St();var h=g(k());var re="data-focus-lock",xe="data-focus-lock-disabled",qt="data-no-focus-lock",Kt="data-autofocus-inside",Xt="data-no-autofocus";function Qt(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var Jt=g(k());function er(e,t){var r=(0,Jt.useState)(function(){return{value:e,callback:t,facade:{get current(){return r.value},set current(o){var n=r.value;n!==o&&(r.value=o,r.callback(o,n))}}}})[0];return r.callback=t,r.facade}function oe(e,t){return er(t||null,function(r){return e.forEach(function(o){return Qt(o,r)})})}var ur=g(k());var j=g(k());var H={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},tr=function(t){var r=t.children;return j.createElement(j.Fragment,null,j.createElement("div",{key:"guard-first","data-focus-guard":!0,"data-focus-auto-guard":!0,style:H}),r,r&&j.createElement("div",{key:"guard-last","data-focus-guard":!0,"data-focus-auto-guard":!0,style:H}))};tr.propTypes={};tr.defaultProps={children:null};function rr(e){return e}function or(e,t){t===void 0&&(t=rr);var r=[],o=!1,n={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(a){var i=t(a,o);return r.push(i),function(){r=r.filter(function(c){return c!==i})}},assignSyncMedium:function(a){for(o=!0;r.length;){var i=r;r=[],i.forEach(a)}r={push:function(c){return a(c)},filter:function(){return r}}},assignMedium:function(a){o=!0;var i=[];if(r.length){var c=r;r=[],c.forEach(a),i=r}var u=function(){var s=i;i=[],s.forEach(a)},l=function(){return Promise.resolve().then(u)};l(),r={push:function(s){i.push(s),l()},filter:function(s){return i=i.filter(s),r}}}};return n}function ne(e,t){return t===void 0&&(t=rr),or(e,t)}function ae(e){e===void 0&&(e={});var t=or(null);return t.options=D({async:!0,ssr:!1},e),t}var nr=g(k()),ar=function(e){var t=e.sideCar,r=ge(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return nr.createElement(o,D({},r))};ar.isSideCarExport=!0;function We(e,t){return e.useMedium(t),ar}var ke=ne({},function(e){var t=e.target,r=e.currentTarget;return{target:t,currentTarget:r}}),Ee=ne(),ir=ne(),cr=ae({async:!0});var So=[],Ve=h.forwardRef(function(t,r){var o,n=h.useState(),a=n[0],i=n[1],c=h.useRef(),u=h.useRef(!1),l=h.useRef(null),s=t.children,f=t.disabled,v=t.noFocusGuards,m=t.persistentFocus,y=t.crossFrame,d=t.autoFocus,p=t.allowTextSelection,x=t.group,S=t.className,C=t.whiteList,N=t.hasPositiveIndices,E=t.shards,B=E===void 0?So:E,A=t.as,_=A===void 0?"div":A,M=t.lockProps,P=M===void 0?{}:M,to=t.sideCar,ve=t.returnFocus,ro=t.focusOptions,Be=t.onActivation,Me=t.onDeactivation,oo=h.useState({}),no=oo[0],ao=h.useCallback(function(){l.current=l.current||document&&document.activeElement,c.current&&Be&&Be(c.current),u.current=!0},[Be]),io=h.useCallback(function(){u.current=!1,Me&&Me(c.current)},[Me]);(0,ur.useEffect)(function(){f||(l.current=null)},[]);var co=h.useCallback(function(U){var J=l.current;if(J&&J.focus){var Ue=typeof ve=="function"?ve(J):ve;if(Ue){var Rt=typeof Ue=="object"?Ue:void 0;l.current=null,U?Promise.resolve().then(function(){return J.focus(Rt)}):J.focus(Rt)}}},[ve]),uo=h.useCallback(function(U){u.current&&ke.useMedium(U)},[]),lo=Ee.useMedium,so=h.useCallback(function(U){c.current!==U&&(c.current=U,i(U))},[]),fo=ee((o={},o[xe]=f&&"disabled",o[re]=x,o),P),Et=v!==!0,po=Et&&v!=="tail",mo=oe([r,so]);return h.createElement(h.Fragment,null,Et&&[h.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:f?-1:0,style:H}),N?h.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:f?-1:1,style:H}):null],!f&&h.createElement(to,{id:no,sideCar:cr,observed:a,disabled:f,persistentFocus:m,crossFrame:y,autoFocus:d,whiteList:C,shards:B,onActivation:ao,onDeactivation:io,returnFocus:co,focusOptions:ro}),h.createElement(_,ee({ref:mo},fo,{className:S,onBlur:lo,onFocus:uo}),s),po&&h.createElement("div",{"data-focus-guard":!0,tabIndex:f?-1:0,style:H}))});Ve.propTypes={};Ve.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};var je=Ve;var Fr=g(k());function ie(e,t){return ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,n){return o.__proto__=n,o},ie(e,t)}function He(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ie(e,t)}function Ge(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Re=g(k());function Co(e,t){function r(o){return o.displayName||o.name||"Component"}return function(n){var a=[],i;function c(){i=e(a.map(function(l){return l.props})),t(i)}var u=function(l){He(s,l);function s(){return l.apply(this,arguments)||this}s.peek=function(){return i};var f=s.prototype;return f.componentDidMount=function(){a.push(this),c()},f.componentDidUpdate=function(){c()},f.componentWillUnmount=function(){var m=a.indexOf(this);a.splice(m,1),c()},f.render=function(){return Re.default.createElement(n,this.props)},s}(Re.PureComponent);return Ge(u,"displayName","SideEffect("+r(n)+")"),u}}var lr=Co;var F=function(e){for(var t=Array(e.length),r=0;r<e.length;++r)t[r]=e[r];return t},ce=function(e){return Array.isArray(e)?e:[e]};var No=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},sr=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},dr=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},Fo=function(e,t){return!e||dr(e)||!No(e)&&t(sr(e))},$e=function(e,t){var r=e.get(t);if(r!==void 0)return r;var o=Fo(t,$e.bind(void 0,e));return e.set(t,o),o},Oo=function(e,t){return e&&!dr(e)?To(e)?t(sr(e)):!1:!0},Ye=function(e,t){var r=e.get(t);if(r!==void 0)return r;var o=Oo(t,Ye.bind(void 0,e));return e.set(t,o),o},Ze=function(e){return e.dataset},Do=function(e){return e.tagName==="BUTTON"},fr=function(e){return e.tagName==="INPUT"},qe=function(e){return fr(e)&&e.type==="radio"},pr=function(e){return!((fr(e)||Do(e))&&(e.type==="hidden"||e.disabled))},To=function(e){var t=e.getAttribute(Xt);return![!0,"true",""].includes(t)},ue=function(e){var t;return Boolean(e&&((t=Ze(e))===null||t===void 0?void 0:t.focusGuard))},G=function(e){return!ue(e)},mr=function(e){return Boolean(e)};var Po=function(e,t){var r=e.tabIndex-t.tabIndex,o=e.index-t.index;if(r){if(!e.tabIndex)return 1;if(!t.tabIndex)return-1}return r||o},Ke=function(e,t,r){return F(e).map(function(o,n){return{node:o,index:n,tabIndex:r&&o.tabIndex===-1?(o.dataset||{}).focusGuard?0:-1:o.tabIndex}}).filter(function(o){return!t||o.tabIndex>=0}).sort(Po)};var vr=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"];var Xe=vr.join(","),Ao="".concat(Xe,", [data-focus-guard]"),gr=function(e,t){var r;return F(((r=e.shadowRoot)===null||r===void 0?void 0:r.children)||e.children).reduce(function(o,n){return o.concat(n.matches(t?Ao:Xe)?[n]:[],gr(n))},[])},Se=function(e,t){return e.reduce(function(r,o){return r.concat(gr(o,t),o.parentNode?F(o.parentNode.querySelectorAll(Xe)).filter(function(n){return n===o}):[])},[])},hr=function(e){var t=e.querySelectorAll("[".concat(Kt,"]"));return F(t).map(function(r){return Se([r])}).reduce(function(r,o){return r.concat(o)},[])};var Qe=function(e,t){return F(e).filter(function(r){return $e(t,r)}).filter(function(r){return pr(r)})},Je=function(e,t){return t===void 0&&(t=new Map),F(e).filter(function(r){return Ye(t,r)})},le=function(e,t,r){return Ke(Qe(Se(e,r),t),!0,r)},et=function(e,t){return Ke(Qe(Se(e),t),!1)},br=function(e,t){return Qe(hr(e),t)},L=function(e,t){return e.shadowRoot?L(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:F(e.children).some(function(r){return L(r,t)})};var Io=function(e){for(var t=new Set,r=e.length,o=0;o<r;o+=1)for(var n=o+1;n<r;n+=1){var a=e[o].compareDocumentPosition(e[n]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(n),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(o)}return e.filter(function(i,c){return!t.has(c)})},yr=function(e){return e.parentNode?yr(e.parentNode):e},$=function(e){var t=ce(e);return t.filter(Boolean).reduce(function(r,o){var n=o.getAttribute(re);return r.push.apply(r,n?Io(F(yr(o).querySelectorAll("[".concat(re,'="').concat(n,'"]:not([').concat(xe,'="disabled"])')))):[o]),r},[])};var wr=function(e){return e.activeElement?e.activeElement.shadowRoot?wr(e.activeElement.shadowRoot):e.activeElement:void 0},Y=function(){return document.activeElement?document.activeElement.shadowRoot?wr(document.activeElement.shadowRoot):document.activeElement:void 0};var _o=function(e){return e===document.activeElement},Lo=function(e){return Boolean(F(e.querySelectorAll("iframe")).some(function(t){return _o(t)}))},Ce=function(e){var t=document&&Y();return!t||t.dataset&&t.dataset.focusGuard?!1:$(e).some(function(r){return L(r,t)||Lo(r)})};var tt=function(){var e=document&&Y();return e?F(document.querySelectorAll("[".concat(qt,"]"))).some(function(t){return L(t,e)}):!1};var Bo=function(e,t){return t.filter(qe).filter(function(r){return r.name===e.name}).filter(function(r){return r.checked})[0]||e},Ne=function(e,t){return qe(e)&&e.name?Bo(e,t):e},xr=function(e){var t=new Set;return e.forEach(function(r){return t.add(Ne(r,e))}),e.filter(function(r){return t.has(r)})};var rt=function(e){return e[0]&&e.length>1?Ne(e[0],e):e[0]},ot=function(e,t){return e.length>1?e.indexOf(Ne(e[t],e)):t};var nt="NEW_FOCUS",kr=function(e,t,r,o){var n=e.length,a=e[0],i=e[n-1],c=ue(r);if(!(r&&e.indexOf(r)>=0)){var u=r!==void 0?t.indexOf(r):-1,l=o?t.indexOf(o):u,s=o?e.indexOf(o):-1,f=u-l,v=t.indexOf(a),m=t.indexOf(i),y=xr(t),d=r!==void 0?y.indexOf(r):-1,p=d-(o?y.indexOf(o):u),x=ot(e,0),S=ot(e,n-1);if(u===-1||s===-1)return nt;if(!f&&s>=0)return s;if(u<=v&&c&&Math.abs(f)>1)return S;if(u>=m&&c&&Math.abs(f)>1)return x;if(f&&Math.abs(p)>1)return s;if(u<=v)return S;if(u>m)return x;if(f)return Math.abs(f)>1?s:(n+s+f)%n}};var Mo=function(e){return function(t){var r,o=(r=Ze(t))===null||r===void 0?void 0:r.autofocus;return t.autofocus||o!==void 0&&o!=="false"||e.indexOf(t)>=0}},Er=function(e,t,r){var o=e.map(function(a){var i=a.node;return i}),n=Je(o.filter(Mo(r)));return n&&n.length?rt(n):rt(Je(t))};var it=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&it(e.parentNode.host||e.parentNode,t),t},at=function(e,t){for(var r=it(e),o=it(t),n=0;n<r.length;n+=1){var a=r[n];if(o.indexOf(a)>=0)return a}return!1},Fe=function(e,t,r){var o=ce(e),n=ce(t),a=o[0],i=!1;return n.filter(Boolean).forEach(function(c){i=at(i||c,c)||i,r.filter(Boolean).forEach(function(u){var l=at(a,u);l&&(!i||L(l,i)?i=l:i=at(l,i))})}),i},Rr=function(e,t){return e.reduce(function(r,o){return r.concat(br(o,t))},[])};var Uo=function(e,t){var r=new Map;return t.forEach(function(o){return r.set(o.node,o)}),e.map(function(o){return r.get(o)}).filter(mr)},Sr=function(e,t){var r=document&&Y(),o=$(e).filter(G),n=Fe(r||e,e,o),a=new Map,i=et(o,a),c=le(o,a).filter(function(m){var y=m.node;return G(y)});if(!(!c[0]&&(c=i,!c[0]))){var u=et([n],a).map(function(m){var y=m.node;return y}),l=Uo(u,c),s=l.map(function(m){var y=m.node;return y}),f=kr(s,u,r,t);if(f===nt){var v=Er(i,s,Rr(o,a));if(v)return{node:v};console.warn("focus-lock: cannot find any node to move focus into");return}return f===void 0?f:l[f]}};var ct=function(e){var t=$(e).filter(G),r=Fe(e,e,t),o=new Map,n=le([r],o,!0),a=le(t,o).filter(function(i){var c=i.node;return G(c)}).map(function(i){var c=i.node;return c});return n.map(function(i){var c=i.node,u=i.index;return{node:c,index:u,lockItem:a.indexOf(c)>=0,guard:ue(c)}})};var zo=function(e,t){"focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},ut=0,lt=!1,Cr=function(e,t,r){r===void 0&&(r={});var o=Sr(e,t);if(!lt&&o){if(ut>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),lt=!0,setTimeout(function(){lt=!1},1);return}ut++,zo(o.node,r.focusOptions),ut--}};var st=Cr;function dt(e){var t=window,r=t.setImmediate;typeof r<"u"?r(e):setTimeout(e,1)}var Wo=function(){return document&&document.activeElement===document.body},Vo=function(){return Wo()||tt()},q=null,Z=null,K=null,se=!1,jo=function(){return!0},Ho=function(t){return(q.whiteList||jo)(t)},Go=function(t,r){K={observerNode:t,portaledElement:r}},$o=function(t){return K&&K.portaledElement===t};function Nr(e,t,r,o){var n=null,a=e;do{var i=o[a];if(i.guard)i.node.dataset.focusAutoGuard&&(n=i);else if(i.lockItem){if(a!==e)return;n=null}else break}while((a+=r)!==t);n&&(n.node.tabIndex=0)}var Yo=function(t){return t&&"current"in t?t.current:t},Zo=function(t){return t?Boolean(se):se==="meanwhile"},qo=function e(t,r,o){return r&&(r.host===t&&(!r.activeElement||o.contains(r.activeElement))||r.parentNode&&e(t,r.parentNode,o))},Ko=function(t,r){return r.some(function(o){return qo(t,o,o)})},Oe=function(){var t=!1;if(q){var r=q,o=r.observed,n=r.persistentFocus,a=r.autoFocus,i=r.shards,c=r.crossFrame,u=r.focusOptions,l=o||K&&K.portaledElement,s=document&&document.activeElement;if(l){var f=[l].concat(i.map(Yo).filter(Boolean));if((!s||Ho(s))&&(n||Zo(c)||!Vo()||!Z&&a)&&(l&&!(Ce(f)||s&&Ko(s,f)||$o(s,l))&&(document&&!Z&&s&&!a?(s.blur&&s.blur(),document.body.focus()):(t=st(f,Z,{focusOptions:u}),K={})),se=!1,Z=document&&document.activeElement),document){var v=document&&document.activeElement,m=ct(f),y=m.map(function(d){var p=d.node;return p}).indexOf(v);y>-1&&(m.filter(function(d){var p=d.guard,x=d.node;return p&&x.dataset.focusAutoGuard}).forEach(function(d){var p=d.node;return p.removeAttribute("tabIndex")}),Nr(y,m.length,1,m),Nr(y,-1,-1,m))}}}return t},Or=function(t){Oe()&&t&&(t.stopPropagation(),t.preventDefault())},De=function(){return dt(Oe)},Dr=function(t){var r=t.target,o=t.currentTarget;o.contains(r)||Go(o,r)},Xo=function(){return null},Qo=function(t){var r=t.children;return Fr.createElement("div",{onBlur:De,onFocus:Dr},r)};Qo.propTypes={};var Tr=function(){se="just",setTimeout(function(){se="meanwhile"},0)},Jo=function(){document.addEventListener("focusin",Or),document.addEventListener("focusout",De),window.addEventListener("blur",Tr)},en=function(){document.removeEventListener("focusin",Or),document.removeEventListener("focusout",De),window.removeEventListener("blur",Tr)};function tn(e){return e.filter(function(t){var r=t.disabled;return!r})}function rn(e){var t=e.slice(-1)[0];t&&!q&&Jo();var r=q,o=r&&t&&t.id===r.id;q=t,r&&!o&&(r.onDeactivation(),e.filter(function(n){var a=n.id;return a===r.id}).length||r.returnFocus(!t)),t?(Z=null,(!o||r.observed!==t.observed)&&t.onActivation(),Oe(!0),dt(Oe)):(en(),Z=null)}ke.assignSyncMedium(Dr);Ee.assignMedium(De);ir.assignMedium(function(e){return e({moveFocusInside:st,focusInside:Ce})});var Pr=lr(tn,rn)(Xo);var Ar=Te.forwardRef(function(t,r){return Te.createElement(je,ee({sideCar:Pr,ref:r},t))}),Ir=je.propTypes||{},Xi=Ir.sideCar,Qi=ze(Ir,["sideCar"]);Ar.propTypes={};var _r=Ar;var Lr=_r;var _e=g(k());var O=g(k());var z="right-scroll-bar-position",W="width-before-scroll-bar",ft="with-scroll-bars-hidden",pt="--removed-body-scroll-bar-size";var Pe=ae();var mt=function(){},de=O.forwardRef(function(e,t){var r=O.useRef(null),o=O.useState({onScrollCapture:mt,onWheelCapture:mt,onTouchMoveCapture:mt}),n=o[0],a=o[1],i=e.forwardProps,c=e.children,u=e.className,l=e.removeScrollBar,s=e.enabled,f=e.shards,v=e.sideCar,m=e.noIsolation,y=e.inert,d=e.allowPinchZoom,p=e.as,x=p===void 0?"div":p,S=ge(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),C=v,N=oe([r,t]),E=D(D({},S),n);return O.createElement(O.Fragment,null,s&&O.createElement(C,{sideCar:Pe,removeScrollBar:l,shards:f,noIsolation:m,inert:y,setCallbacks:a,allowPinchZoom:!!d,lockRef:r}),i?O.cloneElement(O.Children.only(c),D(D({},E),{ref:N})):O.createElement(x,D({},E,{className:u,ref:N}),c))});de.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};de.classNames={fullWidth:W,zeroRight:z};var b=g(k());var Ae=g(k());var Ur=g(k());var Br;var Mr=function(){if(Br)return Br;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function on(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Mr();return t&&e.setAttribute("nonce",t),e}function nn(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function an(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var vt=function(){var e=0,t=null;return{add:function(r){e==0&&(t=on())&&(nn(t,r),an(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var gt=function(){var e=vt();return function(t,r){Ur.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}};var fe=function(){var e=gt(),t=function(r){var o=r.styles,n=r.dynamic;return e(o,n),null};return t};var cn={left:0,top:0,right:0,gap:0},ht=function(e){return parseInt(e||"",10)||0},un=function(e){var t=window.getComputedStyle(document.body),r=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],n=t[e==="padding"?"paddingRight":"marginRight"];return[ht(r),ht(o),ht(n)]},bt=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return cn;var t=un(e),r=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-r+t[2]-t[0])}};var ln=fe(),sn=function(e,t,r,o){var n=e.left,a=e.top,i=e.right,c=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(ft,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(c,"px ").concat(o,`;
  }
  body {
    overflow: hidden `).concat(o,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(o,";"),r==="margin"&&`
    padding-left: `.concat(n,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(o,`;
    `),r==="padding"&&"padding-right: ".concat(c,"px ").concat(o,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(z,` {
    right: `).concat(c,"px ").concat(o,`;
  }
  
  .`).concat(W,` {
    margin-right: `).concat(c,"px ").concat(o,`;
  }
  
  .`).concat(z," .").concat(z,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(W," .").concat(W,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body {
    `).concat(pt,": ").concat(c,`px;
  }
`)},yt=function(e){var t=e.noRelative,r=e.noImportant,o=e.gapMode,n=o===void 0?"margin":o,a=Ae.useMemo(function(){return bt(n)},[n]);return Ae.createElement(ln,{styles:sn(a,!t,n,r?"":"!important")})};var wt=!1;if(typeof window<"u")try{pe=Object.defineProperty({},"passive",{get:function(){return wt=!0,!0}}),window.addEventListener("test",pe,pe),window.removeEventListener("test",pe,pe)}catch{wt=!1}var pe,V=wt?{passive:!1}:!1;var dn=function(e){return e.tagName==="TEXTAREA"},zr=function(e,t){var r=window.getComputedStyle(e);return r[t]!=="hidden"&&!(r.overflowY===r.overflowX&&!dn(e)&&r[t]==="visible")},fn=function(e){return zr(e,"overflowY")},pn=function(e){return zr(e,"overflowX")},xt=function(e,t){var r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=Wr(e,r);if(o){var n=Vr(e,r),a=n[1],i=n[2];if(a>i)return!0}r=r.parentNode}while(r&&r!==document.body);return!1},mn=function(e){var t=e.scrollTop,r=e.scrollHeight,o=e.clientHeight;return[t,r,o]},vn=function(e){var t=e.scrollLeft,r=e.scrollWidth,o=e.clientWidth;return[t,r,o]},Wr=function(e,t){return e==="v"?fn(t):pn(t)},Vr=function(e,t){return e==="v"?mn(t):vn(t)},gn=function(e,t){return e==="h"&&t==="rtl"?-1:1},jr=function(e,t,r,o,n){var a=gn(e,window.getComputedStyle(t).direction),i=a*o,c=r.target,u=t.contains(c),l=!1,s=i>0,f=0,v=0;do{var m=Vr(e,c),y=m[0],d=m[1],p=m[2],x=d-p-a*y;(y||x)&&Wr(e,c)&&(f+=x,v+=y),c=c.parentNode}while(!u&&c!==document.body||u&&(t.contains(c)||t===c));return(s&&(n&&f===0||!n&&i>f)||!s&&(n&&v===0||!n&&-i>v))&&(l=!0),l};var Ie=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Hr=function(e){return[e.deltaX,e.deltaY]},Gr=function(e){return e&&"current"in e?e.current:e},hn=function(e,t){return e[0]===t[0]&&e[1]===t[1]},bn=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},yn=0,X=[];function $r(e){var t=b.useRef([]),r=b.useRef([0,0]),o=b.useRef(),n=b.useState(yn++)[0],a=b.useState(function(){return fe()})[0],i=b.useRef(e);b.useEffect(function(){i.current=e},[e]),b.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(n));var d=Lt([e.lockRef.current],(e.shards||[]).map(Gr),!0).filter(Boolean);return d.forEach(function(p){return p.classList.add("allow-interactivity-".concat(n))}),function(){document.body.classList.remove("block-interactivity-".concat(n)),d.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(n))})}}},[e.inert,e.lockRef.current,e.shards]);var c=b.useCallback(function(d,p){if("touches"in d&&d.touches.length===2)return!i.current.allowPinchZoom;var x=Ie(d),S=r.current,C="deltaX"in d?d.deltaX:S[0]-x[0],N="deltaY"in d?d.deltaY:S[1]-x[1],E,B=d.target,A=Math.abs(C)>Math.abs(N)?"h":"v";if("touches"in d&&A==="h"&&B.type==="range")return!1;var _=xt(A,B);if(!_)return!0;if(_?E=A:(E=A==="v"?"h":"v",_=xt(A,B)),!_)return!1;if(!o.current&&"changedTouches"in d&&(C||N)&&(o.current=E),!E)return!0;var M=o.current||E;return jr(M,p,d,M==="h"?C:N,!0)},[]),u=b.useCallback(function(d){var p=d;if(!(!X.length||X[X.length-1]!==a)){var x="deltaY"in p?Hr(p):Ie(p),S=t.current.filter(function(E){return E.name===p.type&&E.target===p.target&&hn(E.delta,x)})[0];if(S&&S.should){p.cancelable&&p.preventDefault();return}if(!S){var C=(i.current.shards||[]).map(Gr).filter(Boolean).filter(function(E){return E.contains(p.target)}),N=C.length>0?c(p,C[0]):!i.current.noIsolation;N&&p.cancelable&&p.preventDefault()}}},[]),l=b.useCallback(function(d,p,x,S){var C={name:d,delta:p,target:x,should:S};t.current.push(C),setTimeout(function(){t.current=t.current.filter(function(N){return N!==C})},1)},[]),s=b.useCallback(function(d){r.current=Ie(d),o.current=void 0},[]),f=b.useCallback(function(d){l(d.type,Hr(d),d.target,c(d,e.lockRef.current))},[]),v=b.useCallback(function(d){l(d.type,Ie(d),d.target,c(d,e.lockRef.current))},[]);b.useEffect(function(){return X.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",u,V),document.addEventListener("touchmove",u,V),document.addEventListener("touchstart",s,V),function(){X=X.filter(function(d){return d!==a}),document.removeEventListener("wheel",u,V),document.removeEventListener("touchmove",u,V),document.removeEventListener("touchstart",s,V)}},[]);var m=e.removeScrollBar,y=e.inert;return b.createElement(b.Fragment,null,y?b.createElement(a,{styles:bn(n)}):null,m?b.createElement(yt,{gapMode:"margin"}):null)}var Yr=We(Pe,$r);var Zr=_e.forwardRef(function(e,t){return _e.createElement(de,D({},e,{ref:t,sideCar:Yr}))});Zr.classNames=de.classNames;var kt=Zr;var me=g(ho());function Q(){return Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Q.apply(this,arguments)}function Le(e,t){if(e==null)return{};var r={},o=Object.keys(e),n,a;for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}var wn=["as","isOpen"],xn=["allowPinchZoom","as","dangerouslyBypassFocusLock","dangerouslyBypassScrollLock","initialFocusRef","onClick","onDismiss","onKeyDown","onMouseDown","unstable_lockFocusAcrossFrames"],kn=["as","onClick","onKeyDown"],En=["allowPinchZoom","initialFocusRef","isOpen","onDismiss"],au={allowPinchZoom:me.default.bool,dangerouslyBypassFocusLock:me.default.bool,dangerouslyBypassScrollLock:me.default.bool,initialFocusRef:function(){return null},onDismiss:me.default.func},Rn=(0,w.forwardRef)(function(t,r){var o=t.as,n=o===void 0?"div":o,a=t.isOpen,i=a===void 0?!0:a,c=Le(t,wn);return Gt("dialog"),(0,w.useEffect)(function(){i?window.__REACH_DISABLE_TOOLTIPS=!0:window.requestAnimationFrame(function(){window.__REACH_DISABLE_TOOLTIPS=!1})},[i]),i?(0,w.createElement)(Vt,{"data-reach-dialog-wrapper":""},(0,w.createElement)(Sn,Q({ref:r,as:n},c))):null}),Sn=(0,w.forwardRef)(function(t,r){var o=t.allowPinchZoom,n=t.as,a=n===void 0?"div":n,i=t.dangerouslyBypassFocusLock,c=i===void 0?!1:i,u=t.dangerouslyBypassScrollLock,l=u===void 0?!1:u,s=t.initialFocusRef,f=t.onClick,v=t.onDismiss,m=v===void 0?we:v,y=t.onKeyDown,d=t.onMouseDown,p=t.unstable_lockFocusAcrossFrames,x=Le(t,xn),S=p!==void 0,C=(0,w.useRef)(null),N=(0,w.useRef)(null),E=Zt(N,r),B=(0,w.useCallback)(function(){s&&s.current&&s.current.focus()},[s]);function A(P){C.current===P.target&&(P.stopPropagation(),m(P))}function _(P){P.key==="Escape"&&(P.stopPropagation(),m(P))}function M(P){C.current=P.target}return(0,w.useEffect)(function(){return N.current?Nn(N.current):void 0},[]),(0,w.createElement)(Lr,{autoFocus:!0,returnFocus:!0,onActivation:B,disabled:c,crossFrame:p??!0},(0,w.createElement)(kt,{allowPinchZoom:o,enabled:!l},(0,w.createElement)(a,Q({},x,{ref:E,"data-reach-dialog-overlay":"",onClick:te(f,A),onKeyDown:te(y,_),onMouseDown:te(d,M)}))))}),Cn=(0,w.forwardRef)(function(t,r){var o=t.as,n=o===void 0?"div":o,a=t.onClick;t.onKeyDown;var i=Le(t,kn);return(0,w.createElement)(n,Q({"aria-modal":"true",role:"dialog",tabIndex:-1},i,{ref:r,"data-reach-dialog-content":"",onClick:te(a,function(c){c.stopPropagation()})}))}),qr=(0,w.forwardRef)(function(t,r){var o=t.allowPinchZoom,n=o===void 0?!1:o,a=t.initialFocusRef,i=t.isOpen,c=t.onDismiss,u=c===void 0?we:c,l=Le(t,En);return(0,w.createElement)(Rn,{allowPinchZoom:n,initialFocusRef:a,isOpen:i,onDismiss:u},(0,w.createElement)(Cn,Q({ref:r},l)))});function Nn(e){var t=[],r=[],o=jt(e);return e?(Array.prototype.forEach.call(o.querySelectorAll("body > *"),function(n){var a,i,c=(a=e.parentNode)==null||(i=a.parentNode)==null?void 0:i.parentNode;if(n!==c){var u=n.getAttribute("aria-hidden"),l=u!==null&&u!=="false";l||(t.push(u),r.push(n),n.setAttribute("aria-hidden","true"))}}),function(){r.forEach(function(n,a){var i=t[a];i===null?n.removeAttribute("aria-hidden"):n.setAttribute("aria-hidden",i)})}):we}var Kr="/build/_assets/styles-LRLU435A.css";var Dn=g(Qr());var Jr="/build/_assets/tailwind-HP52N675.css";var R=g(_t()),Tn=()=>[{rel:"stylesheet",href:Jr},{rel:"stylesheet",href:Kr}],Pn=()=>({charset:"utf-8",title:"Fakebooks Remix"});function eo(){let{user:e}=Pt();return(0,R.jsxs)("html",{lang:"en",className:"h-full",children:[(0,R.jsxs)("head",{children:[(0,R.jsx)(Ot,{}),(0,R.jsx)(Ft,{})]}),(0,R.jsxs)("body",{className:"h-full",children:[(0,R.jsx)(Nt,{}),e?(0,R.jsx)(An,{}):null,(0,R.jsx)(It,{}),(0,R.jsx)(Dt,{}),(0,R.jsx)(At,{})]})]})}function An(){let[e,t]=(0,T.useState)("idle"),r=Ct(),o=Tt(),n=1e3*60*60*24,a=n-1e3*60*2,i=(0,T.useRef)(),c=(0,T.useRef)(),u=(0,T.useCallback)(()=>{o({redirectTo:r.pathname},{method:"post",action:"/logout"})},[o,r.pathname]),l=(0,T.useCallback)(()=>{clearTimeout(i.current),clearTimeout(c.current)},[]),s=(0,T.useCallback)(()=>{l(),i.current=setTimeout(()=>{t("show-modal")},a),c.current=setTimeout(u,n)},[l,u,n,a]);(0,T.useEffect)(()=>s(),[s,r.key]),(0,T.useEffect)(()=>l,[l]);function f(){t("idle"),s()}return(0,R.jsx)(qr,{"aria-label":"Pending Logout Notification",isOpen:e==="show-modal",onDismiss:f,children:(0,R.jsxs)("div",{children:[(0,R.jsx)("h1",{className:"text-d-h3 mb-4",children:"Are you still there?"}),(0,R.jsx)("p",{children:"You are going to be logged out due to inactivity. Close this modal to stay logged in."}),(0,R.jsx)("div",{className:"h-8"}),(0,R.jsxs)("div",{className:"flex items-end gap-8",children:[(0,R.jsx)("button",{onClick:f,className:Bt,children:"Remain Logged In"}),(0,R.jsx)("button",{onClick:u,className:Mt,children:"Logout"})]})]})})}var In=({submission:e})=>(e==null?void 0:e.action)==="/logout"||(e==null?void 0:e.action)==="/login";export{eo as default,Tn as links,Pn as meta,In as unstable_shouldReload};
