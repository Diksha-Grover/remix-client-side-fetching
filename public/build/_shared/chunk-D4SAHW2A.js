import{a as m}from"/build/_shared/chunk-XBDI323W.js";import{b as E}from"/build/_shared/chunk-Q3IECNXJ.js";var d=E((c,a)=>{(function(e,t){typeof c=="object"&&typeof a<"u"?t(c,m()):typeof define=="function"&&define.amd?define(["exports","react"],t):(e=e||self,t(e.spinDelay={},e.react))})(c,function(e,t){let D={delay:500,minDuration:200};function s(r,u){u=Object.assign({},D,u);let[n,i]=t.useState("IDLE"),f=t.useRef(null);return t.useEffect(()=>{r&&n==="IDLE"&&(clearTimeout(f.current),f.current=setTimeout(()=>{if(!r)return i("IDLE");f.current=setTimeout(()=>{i("EXPIRE")},u.minDuration),i("DISPLAY")},u.delay),i("DELAY")),!r&&n!=="DISPLAY"&&(clearTimeout(f.current),i("IDLE"))},[r,n,u.delay,u.minDuration]),t.useEffect(()=>()=>clearTimeout(f.current),[]),n==="DISPLAY"||n==="EXPIRE"}e.default=s,e.defaultOptions=D,e.useSpinDelay=s})});export{d as a};
