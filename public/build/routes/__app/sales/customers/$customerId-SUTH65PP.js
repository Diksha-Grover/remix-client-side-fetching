import"/build/_shared/chunk-URNZPFSF.js";import{a as I}from"/build/_shared/chunk-XLZYFGVF.js";import{a as p}from"/build/_shared/chunk-O7DBANPF.js";import{n as f}from"/build/_shared/chunk-A7IPQTS3.js";import{e as n,h as d,j as i,q as u,t as l}from"/build/_shared/chunk-KV7DDRWL.js";import{a as g}from"/build/_shared/chunk-FPOB764B.js";import{a as b,b as c}from"/build/_shared/chunk-XBDI323W.js";import{c as r}from"/build/_shared/chunk-Q3IECNXJ.js";var h=r(b());var x=r(I()),N=r(g());var t=r(c());var y="border-t border-gray-100 text-[14px] h-[56px]";function v(){let a=u();if(!("customerInfo"in a))throw new Error("customerInfo is not available");let o=n(),{load:m,...s}=l();return(0,h.useEffect)(()=>{m(`/sales/customers/${o.customerId}?invoiceDetails=true`)},[m,o.customerId]),(0,t.jsxs)("div",{className:"relative p-10",children:[(0,t.jsx)("div",{className:"text-[length:14px] font-bold leading-6",children:a.customerInfo.email}),(0,t.jsx)("div",{className:"text-[length:32px] font-bold leading-[40px]",children:a.customerInfo.name}),(0,t.jsx)("div",{className:"h-4"}),(0,t.jsx)("div",{className:"text-m-h3 font-bold leading-8",children:"Invoices"}),(0,t.jsx)("div",{className:"h-4"}),s.state==="idle"&&s.data?(0,t.jsx)("table",{className:"w-full",children:(0,t.jsx)("tbody",{children:s.data.customerDetails.invoiceDetails.map(e=>(0,t.jsxs)("tr",{className:y,children:[(0,t.jsx)("td",{children:(0,t.jsx)(i,{className:"text-blue-600 underline",to:`../../invoices/${e.id}`,children:e.number})}),(0,t.jsx)("td",{className:"text-center uppercase "+(e.dueStatus==="paid"?"text-green-brand":e.dueStatus==="overdue"?"text-red-brand":""),children:e.dueStatusDisplay}),(0,t.jsx)("td",{className:"text-right",children:p.format(e.totalAmount)})]},e.id))})}):(0,t.jsx)(f,{})]})}function w(){let a=d(),o=n();if(a.status===404)return(0,t.jsxs)("div",{className:"p-12 text-red-500",children:['No customer found with the ID of "',o.customerId,'"']});throw new Error(`Unexpected caught response with status: ${a.status}`)}export{w as CatchBoundary,v as default};
