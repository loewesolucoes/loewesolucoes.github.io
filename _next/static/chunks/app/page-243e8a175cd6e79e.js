(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2962:function(e,t,a){Promise.resolve().then(a.bind(a,4257))},4257:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return el}});var n,o,r,s,l,c,i,f,m,p,h,d,u,v,g,q,x,b,j,E,w,y,_,O,z,C,N,S=a(7437),D=a(2265);a(4612);var k=a(9079);let{version:M}=a(5640),L=(0,D.createContext)({isDev:!1,logLevel:"info",version:""});function U(e){let[t,a]=(0,D.useState)(!1),[n,o]=(0,D.useState)("info"),[r,s]=(0,D.useState)(M);return(0,D.useEffect)(()=>{a(!1),o(k.env.LOG_LEVEL+""),s(M)},[k.env]),(0,S.jsx)(L.Provider,{value:{isDev:t,logLevel:n,version:r},...e})}let P=()=>D.useContext(L),H=(0,D.createContext)({logger:{}}),V={...console};function G(e){let{logLevel:t}=P(),[a,n]=(0,D.useState)();async function o(){let e={...V};e.log=r("log"),e.info=r("info"),e.error=r("error"),e.warn=r("warn"),e.debug=function(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];"debug"===t&&(V.debug(...a),JSON.stringify(a))},n(e)}function r(e){return function(){for(var t=arguments.length,a=Array(t),n=0;n<t;n++)a[n]=arguments[n];V[e](...a)}}return(0,D.useEffect)(()=>{o()},[]),(0,D.useEffect)(()=>{Object.keys(a||{}).length>0&&(window.console.log=a.log,window.console.info=a.info,window.console.debug=a.debug,window.console.error=a.error,window.console.warn=a.warn)},[a]),(0,S.jsx)(H.Provider,{value:{logger:a},...e})}function A(e){let{children:t}=e;return(0,S.jsx)(U,{children:(0,S.jsx)(G,{children:t})})}(n=o||(o={})).log="log",n.info="info",n.error="error",n.warn="warn",n.debug="debug";var J=a(2846);function I(){return(I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var R=function(e){return J.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 1024 1024"},e),r||(r=J.createElement("path",{fill:"#fff",d:"M1024 512c0 282.77-229.23 512-512 512S0 794.77 0 512 229.23 0 512 0s512 229.23 512 512"})),s||(s=J.createElement("path",{fill:"#132431",d:"M224.992 809.104c0-7.169 5.811-12.98 12.98-12.98h550.941c7.168 0 12.98 5.811 12.98 12.98s-5.812 12.981-12.98 12.981H237.972c-7.169 0-12.98-5.812-12.98-12.981M285.566 863.91c0-7.169 5.812-12.98 12.98-12.98h426.908c7.168 0 12.98 5.811 12.98 12.98s-5.812 12.98-12.98 12.98H298.546c-7.168 0-12.98-5.811-12.98-12.98M340.372 918.716c0-7.169 5.811-12.981 12.98-12.981h317.296c7.169 0 12.98 5.812 12.98 12.981s-5.811 12.98-12.98 12.98H353.352c-7.169 0-12.98-5.812-12.98-12.98"})),l||(l=J.createElement("path",{fill:"url(#logo_svg__a)",d:"m477.293 277.723 41.028-31.323 91.632 131.136-33.052 37.56z"})),c||(c=J.createElement("path",{fill:"#fff",d:"m463.897 264.618 52.128-10.92 27.384 150.478-52.128 10.92z"})),i||(i=J.createElement("path",{fill:"url(#logo_svg__b)",d:"m337.971 396.751 41.028-31.323 63.417 90.101-18.074 51.314z"})),f||(f=J.createElement("path",{fill:"#fff",d:"m324.576 383.646 52.127-10.92 27.385 150.478-52.128 10.92z"})),m||(m=J.createElement("path",{fill:"url(#logo_svg__c)",d:"m590.467 392.654 38.972-30.235 244.066 314.592-38.972 30.235z"})),p||(p=J.createElement("path",{fill:"#fff",d:"m576.901 381.042 50.557-11.825 32.191 137.626-50.557 11.825z"})),h||(h=J.createElement("path",{fill:"#132431",d:"m378.348 320.908-237.007 308.4 29.626 42.701 207.381-290.607 48.587 64.052h-37.922l-210.174 292.98h104.706l186.051-306.028-27.18-33.212 79.322-115.057 50.956 67.611h-37.921l-27.256 37.957 24.886 51.005-184.866 297.724h515.491L649.721 464.433 629.576 492.9l-36.736-52.19 36.736-59.308L868.953 685.07l16.591-36.784-255.968-319.075-13.036 22.537-100.728-120.987-100.576 135.221zM556.71 118.265c0 23.896-19.372 43.267-43.268 43.267s-43.267-19.371-43.267-43.267 19.371-43.268 43.267-43.268 43.268 19.372 43.268 43.268"})),d||(d=J.createElement("defs",null,J.createElement("linearGradient",{id:"logo_svg__a",x1:512,x2:512,y1:0,y2:1024,gradientUnits:"userSpaceOnUse"},J.createElement("stop",{offset:.038,stopColor:"#122432"}),J.createElement("stop",{offset:1,stopColor:"#D1D2D6",stopOpacity:.5}),J.createElement("stop",{offset:1,stopColor:"#122432",stopOpacity:.3})),J.createElement("linearGradient",{id:"logo_svg__b",x1:512,x2:512,y1:0,y2:1024,gradientUnits:"userSpaceOnUse"},J.createElement("stop",{offset:.038,stopColor:"#122432"}),J.createElement("stop",{offset:1,stopColor:"#D1D2D6",stopOpacity:.5}),J.createElement("stop",{offset:1,stopColor:"#122432",stopOpacity:.3})),J.createElement("linearGradient",{id:"logo_svg__c",x1:512,x2:512,y1:0,y2:1024,gradientUnits:"userSpaceOnUse"},J.createElement("stop",{offset:.038,stopColor:"#122432"}),J.createElement("stop",{offset:1,stopColor:"#D1D2D6",stopOpacity:.5}),J.createElement("stop",{offset:1,stopColor:"#122432",stopOpacity:.3})))))},B=a(8792),F=a(7907);let T=[{name:"Inicio",path:"/"},{name:"Sobre",path:"/#sobre"},{name:"Entre em contato",path:"/#contato"}];function Y(){let[e,t]=(0,D.useState)(!1),a=(0,F.usePathname)();return(0,S.jsx)("header",{className:"navbar navbar-expand-lg","data-bs-theme":"dark",children:(0,S.jsxs)("div",{className:"container-fluid",children:[(0,S.jsx)(B.default,{href:"/",rel:"noopener noreferrer",className:"navbar-brand logo-link d-flex align-items-center",children:(0,S.jsx)(R,{className:"d-inline-block align-text-top"})}),(0,S.jsx)("button",{className:"navbar-toggler",type:"button","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:a=>t(!e),children:(0,S.jsx)("span",{className:"navbar-toggler-icon"})}),(0,S.jsx)("div",{className:"collapse navbar-collapse justify-content-end ".concat(e&&"show"),id:"navbarSupportedContent",children:(0,S.jsx)("ul",{className:"navbar-nav",children:T.map(e=>(0,S.jsx)("li",{className:"nav-item",children:(0,S.jsx)(B.default,{className:"nav-link ".concat(a==e.path?"active":""),href:e.path,children:e.name})},e.path))})})]})})}function K(){return(K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var Q=function(e){return J.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",width:361,height:117,fill:"none"},e),u||(u=J.createElement("path",{fill:"#fff",d:"M117 58.5c0 32.309-26.191 58.5-58.5 58.5S0 90.809 0 58.5 26.191 0 58.5 0 117 26.191 117 58.5"})),v||(v=J.createElement("path",{fill:"#132431",d:"M25.707 92.447c0-.82.664-1.484 1.483-1.484h62.95a1.483 1.483 0 1 1 0 2.967H27.19c-.819 0-1.483-.664-1.483-1.484M32.628 98.709c0-.82.664-1.484 1.483-1.484H82.89a1.483 1.483 0 0 1 0 2.967H34.11c-.819 0-1.483-.664-1.483-1.483M38.89 104.97c0-.819.664-1.483 1.483-1.483h36.254a1.483 1.483 0 1 1 0 2.967H40.373c-.819 0-1.483-.664-1.483-1.484"})),g||(g=J.createElement("path",{fill:"url(#logo-footer_svg__a)",d:"m54.535 31.732 4.687-3.579 10.47 14.984-3.776 4.291z"})),q||(q=J.createElement("path",{fill:"#fff",d:"m53.004 30.235 5.956-1.248 3.129 17.193-5.956 1.248z"})),x||(x=J.createElement("path",{fill:"url(#logo-footer_svg__b)",d:"m38.616 45.332 4.688-3.579 7.246 10.295-2.066 5.863z"})),b||(b=J.createElement("path",{fill:"#fff",d:"m37.085 43.835 5.956-1.248 3.13 17.193-5.957 1.248z"})),j||(j=J.createElement("path",{fill:"url(#logo-footer_svg__c)",d:"m67.466 44.864 4.452-3.455 27.887 35.945-4.453 3.454z"})),E||(E=J.createElement("path",{fill:"#fff",d:"m65.916 43.537 5.776-1.351L75.37 57.91l-5.776 1.35z"})),w||(w=J.createElement("path",{fill:"#132431",d:"M43.23 36.666 16.15 71.903l3.384 4.88L43.23 43.577l5.552 7.319h-4.333L20.434 84.372h11.963l21.258-34.966-3.105-3.795 9.063-13.146 5.822 7.725h-4.333l-3.114 4.337 2.843 5.828L39.71 84.372h58.899L74.236 53.065l-2.302 3.253-4.197-5.963 4.197-6.777 27.35 34.697 1.896-4.203-29.246-36.457-1.49 2.575-11.508-13.824-11.492 15.45zM63.609 13.513a4.944 4.944 0 1 1-9.888 0 4.944 4.944 0 0 1 9.888 0"})),y||(y=J.createElement("path",{fill:"#fff",d:"M148.299 30.6h10.8v26.8h11.95V65h-22.75zm42.725 35.2q-5.4 0-9.6-2.3-4.15-2.3-6.5-6.35-2.3-4.1-2.3-9.3 0-5.25 2.3-9.35 2.35-4.1 6.5-6.35 4.2-2.3 9.6-2.3t9.55 2.3q4.2 2.25 6.5 6.35 2.35 4.05 2.35 9.35 0 5.2-2.35 9.3-2.3 4.05-6.5 6.35t-9.55 2.3m0-9.1q3.15 0 5.15-2.45 2.05-2.45 2.05-6.45 0-2.65-.95-4.7-.9-2.1-2.55-3.25-1.65-1.2-3.75-1.2-2.05 0-3.7 1.2-1.65 1.15-2.55 3.25-.9 2.05-.9 4.7 0 4 2 6.45t5.2 2.45m23.193-26.1h24.15v7.6h-12v6.25h10.95v6.3h-10.95v6.65h12V65h-24.15zm27.536 0h11.25l3.25 21.95 3.35-16.1h11.65l3.4 16.1 3.25-21.95h11.25l-7.8 34.4h-11.65l-4.25-18.5-4.25 18.5h-11.65zm51.712 0h24.15v7.6h-12v6.25h10.95v6.3h-10.95v6.65h12V65h-24.15zM150.894 101.32q-2.82 0-4.76-1.04l1-3.1q2.06.74 3.68.74.88 0 1.28-.2.42-.22.42-.64a.63.63 0 0 0-.22-.48q-.22-.22-.88-.48t-1.98-.64q-1.62-.48-2.52-1.56-.9-1.1-.9-2.52 0-2.2 1.44-3.32 1.46-1.14 3.92-1.14 1.28 0 2.52.28 1.24.26 2.2.78l-1.08 3.02a15 15 0 0 0-1.96-.54 7.5 7.5 0 0 0-1.6-.18q-1.32 0-1.32.72 0 .36.42.62.44.24 1.78.62 2.1.56 3.18 1.72 1.08 1.14 1.08 2.74 0 2.22-1.44 3.42-1.44 1.18-4.26 1.18m12.536-.16q-1.68 0-3-.66-1.3-.66-2.04-1.82-.72-1.18-.72-2.7t.74-2.68a4.9 4.9 0 0 1 2.04-1.82q1.32-.64 3-.64 1.7 0 3 .66 1.32.64 2.04 1.8t.72 2.68q0 1.54-.74 2.72-.72 1.16-2.04 1.82-1.3.64-3 .64m.04-3q.82 0 1.34-.6.54-.62.54-1.58t-.54-1.56a1.67 1.67 0 0 0-1.34-.62q-.82 0-1.36.62-.52.6-.52 1.56t.52 1.58q.54.6 1.36.6m10.759 3q-1.7 0-2.64-1.06-.92-1.08-.92-2.94v-9.34l4.22-.62v9.66q0 .56.26.82.28.24.96.24.5 0 .98-.24l.14 2.8q-1.34.68-3 .68m9.359 0q-1.581 0-2.82-.56-1.22-.56-1.9-1.58t-.68-2.32v-5.72h4.12v5.66q0 .66.36 1.04.38.36.94.36.54 0 .88-.36.36-.38.36-1.04v-5.66h4.04v5.72q0 1.32-.68 2.34-.66 1-1.86 1.56t-2.76.56m15.198-.64a5.5 5.5 0 0 1-1.38.48q-.68.16-1.56.16l-.24.74q.94.24 1.36.7.44.48.44 1.2 0 .98-.74 1.56-.74.6-2 .6-1.04 0-1.82-.36l.02-1.14q.48.16.94.16.54 0 .84-.24t.3-.7a.74.74 0 0 0-.32-.62q-.32-.24-.84-.32l.58-1.72q-1.839-.4-2.94-1.74-1.1-1.36-1.1-3.28 0-1.44.72-2.62a5.16 5.16 0 0 1 1.96-1.86q1.24-.68 2.76-.68 1.941 0 3.06.8l-.38 2.66q-1.14-.34-1.88-.34-.96 0-1.52.56-.56.54-.56 1.48t.56 1.5 1.48.56q.8 0 1.88-.34zm6.617.64q-1.68 0-3-.66-1.3-.66-2.04-1.82-.72-1.18-.72-2.7t.74-2.68a4.9 4.9 0 0 1 2.04-1.82q1.32-.64 3-.64 1.7 0 3 .66 1.32.64 2.04 1.8t.72 2.68q0 1.54-.74 2.72-.72 1.16-2.04 1.82-1.3.64-3 .64m.04-3q.82 0 1.34-.6.54-.62.54-1.58t-.54-1.56a1.67 1.67 0 0 0-1.34-.62q-.82 0-1.36.62-.52.6-.52 1.56t.52 1.58q.54.6 1.36.6m-4.88-9.68q.56-1.56 1.44-2.34.9-.8 2-.8.42 0 .78.14.36.12.82.38.42.22.7.34.3.1.62.1.3 0 .56-.24.28-.24.62-.74l2.16.94q-.56 1.56-1.46 2.36-.88.8-1.98.8-.42 0-.78-.12a6.4 6.4 0 0 1-.82-.4 5 5 0 0 0-.72-.32 1.5 1.5 0 0 0-.6-.12q-.3 0-.58.24-.261.24-.6.74zm17.299 12.68q-1.66 0-2.96-.66-1.28-.68-2-1.84-.72-1.18-.72-2.66 0-1.52.74-2.7a4.97 4.97 0 0 1 2-1.82q1.26-.64 2.8-.64 1.479 0 2.52.66a3.97 3.97 0 0 1 1.58 1.76q.52 1.1.52 2.48 0 .36-.04.52l-6 .78q.24.7.78 1.02.54.3 1.42.3 1.359 0 2.94-.7l.5 2.68q-1.86.82-4.08.82m1.38-6.64q-.32-1.26-1.52-1.26-.72 0-1.14.54t-.44 1.4zm8.013 6.64q-2.1 0-3.68-.62l.46-2.38q1.44.52 2.8.52 1 0 1-.56 0-.28-.3-.46-.28-.18-1.08-.32-1.66-.32-2.4-1.08-.72-.76-.72-2.16.08-1.58 1.26-2.42t3.22-.84q1.04 0 1.78.14.76.12 1.38.42l-.42 2.38a7 7 0 0 0-1.28-.34 7 7 0 0 0-1.14-.12q-.68 0-.94.14t-.26.38q0 .44 1 .62 1.82.32 2.72 1.12t.9 2.18q0 1.58-1.12 2.5-1.1.9-3.18.9m14.689 0q-1.66 0-2.96-.66-1.28-.68-2-1.84-.72-1.18-.72-2.66 0-1.52.74-2.7a4.97 4.97 0 0 1 2-1.82q1.26-.64 2.8-.64 1.479 0 2.52.66a3.97 3.97 0 0 1 1.58 1.76q.52 1.1.52 2.48 0 .36-.04.52l-6 .78q.24.7.78 1.02.54.3 1.42.3 1.359 0 2.94-.7l.5 2.68q-1.86.82-4.08.82m1.38-6.64q-.32-1.26-1.52-1.26-.72 0-1.14.54t-.44 1.4zm4.553-3.4h4.02v2.04q.68-1.18 1.54-1.74.88-.58 2.08-.58 1.18 0 2.04.6a3.56 3.56 0 0 1 1.32 1.58q1.28-2.18 3.72-2.18 1.16 0 2.02.62.88.62 1.36 1.8.48 1.16.48 2.74v5h-4.22v-5q0-1.02-.36-1.54a1.08 1.08 0 0 0-.96-.52q-.68 0-1.18.58-.48.58-.48 1.4V101h-4.18v-5q0-1.02-.36-1.54-.34-.52-.98-.52-.68 0-1.16.58t-.48 1.4V101h-4.22zm27.718 10.04q-2.1 0-3.68-.62l.46-2.38q1.44.52 2.8.52 1 0 1-.56 0-.28-.3-.46-.28-.18-1.08-.32-1.66-.32-2.4-1.08-.72-.76-.72-2.16.08-1.58 1.26-2.42t3.22-.84q1.04 0 1.78.14.759.12 1.38.42l-.42 2.38a7 7 0 0 0-1.28-.34 7 7 0 0 0-1.14-.12q-.68 0-.94.14t-.26.38q0 .44 1 .62 1.82.32 2.72 1.12t.9 2.18q0 1.58-1.12 2.5-1.101.9-3.18.9m11.038 0q-1.68 0-3-.66-1.3-.66-2.04-1.82-.72-1.18-.72-2.7t.74-2.68a4.9 4.9 0 0 1 2.04-1.82q1.32-.64 3-.64 1.7 0 3 .66 1.32.64 2.04 1.8t.72 2.68q0 1.54-.74 2.72-.72 1.16-2.04 1.82-1.3.64-3 .64m.04-3q.82 0 1.34-.6.54-.62.54-1.58t-.54-1.56a1.67 1.67 0 0 0-1.34-.62q-.82 0-1.36.62-.52.6-.52 1.56t.52 1.58q.54.6 1.36.6m7.862-4.7h-1.26v-2.48h1.26v-.84q0-2.22 1.06-3.36 1.08-1.14 3-1.14 1.54 0 2.86.78l-.14 2.7q-1.16-.46-1.94-.46-.6 0-.92.3-.32.28-.32.82 0 .52.34 1.2h2.8v2.48h-2.52V101h-4.22zm12.312 7.7q-1.76 0-2.74-1-.98-1.02-.98-2.8v-3.9h-1.28v-2.48h1.58l1.86-3.78h2.02v3.78h2.32v2.48h-2.32v3.4q0 .5.32.78t.9.28q.54 0 .98-.24l.16 2.8q-.5.3-1.3.5-.78.18-1.52.18m3.711-10.18h4.08l1.14 6.5 1.38-6.5h3.44l1.4 6.66 1.14-6.66h3.28l-2.08 10.02h-4.78l-1.12-5.3-1.06 5.3h-4.62zm21.563 10.18q-1.3 0-2.44-.68a5.3 5.3 0 0 1-1.8-1.88q-.68-1.2-.68-2.66 0-1.44.68-2.6a4.9 4.9 0 0 1 1.82-1.84q1.14-.66 2.42-.66 1.041 0 1.92.58.9.58 1.36 1.74v-2.32h4.2V101h-4.2v-1.86q-1 2.02-3.28 2.02m1.3-3.16a1.85 1.85 0 0 0 1.36-.56q.58-.58.62-1.36v-.16a1.93 1.93 0 0 0-.64-1.36q-.58-.56-1.34-.56-.84 0-1.44.6a1.9 1.9 0 0 0-.58 1.4q0 .84.6 1.42t1.42.58m8.206-6.88h4.22v2.04q.46-1.18 1.24-1.74.8-.58 1.86-.58l.58 3.26q-1.9 0-2.8.42-.88.4-.88 1.28v5.2h-4.22zm14.106 10.04q-1.66 0-2.96-.66-1.28-.68-2-1.84-.72-1.18-.72-2.66 0-1.52.74-2.7a4.97 4.97 0 0 1 2-1.82q1.26-.64 2.8-.64 1.479 0 2.52.66a3.97 3.97 0 0 1 1.58 1.76q.52 1.1.52 2.48 0 .36-.04.52l-6 .78q.24.7.78 1.02.54.3 1.42.3 1.359 0 2.94-.7l.5 2.68q-1.86.82-4.08.82m1.38-6.64q-.32-1.26-1.52-1.26-.72 0-1.14.54t-.44 1.4z"})),_||(_=J.createElement("defs",null,J.createElement("linearGradient",{id:"logo-footer_svg__a",x1:58.5,x2:58.5,y1:0,y2:117,gradientUnits:"userSpaceOnUse"},J.createElement("stop",{offset:.038,stopColor:"#122432"}),J.createElement("stop",{offset:1,stopColor:"#D1D2D6",stopOpacity:.5}),J.createElement("stop",{offset:1,stopColor:"#122432",stopOpacity:.3})),J.createElement("linearGradient",{id:"logo-footer_svg__b",x1:58.5,x2:58.5,y1:0,y2:117,gradientUnits:"userSpaceOnUse"},J.createElement("stop",{offset:.038,stopColor:"#122432"}),J.createElement("stop",{offset:1,stopColor:"#D1D2D6",stopOpacity:.5}),J.createElement("stop",{offset:1,stopColor:"#122432",stopOpacity:.3})),J.createElement("linearGradient",{id:"logo-footer_svg__c",x1:58.5,x2:58.5,y1:0,y2:117,gradientUnits:"userSpaceOnUse"},J.createElement("stop",{offset:.038,stopColor:"#122432"}),J.createElement("stop",{offset:1,stopColor:"#D1D2D6",stopOpacity:.5}),J.createElement("stop",{offset:1,stopColor:"#122432",stopOpacity:.3})))))};function W(){return(W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var X=function(e){return J.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",width:48,height:48,fill:"none"},e),O||(O=J.createElement("path",{fill:"#fff",d:"m0 48 3.374-12.326A23.73 23.73 0 0 1 .2 23.782C.206 10.67 10.876 0 23.986 0c6.362.002 12.334 2.48 16.826 6.976a23.65 23.65 0 0 1 6.96 16.828c-.006 13.114-10.676 23.784-23.786 23.784a23.8 23.8 0 0 1-11.376-2.896zm13.194-7.614c3.352 1.99 6.552 3.182 10.784 3.184 10.896 0 19.772-8.868 19.778-19.77.004-10.924-8.83-19.78-19.762-19.784-10.904 0-19.774 8.868-19.778 19.768-.002 4.45 1.302 7.782 3.492 11.268L5.71 42.348zm22.774-10.928c-.148-.248-.544-.396-1.14-.694-.594-.298-3.516-1.736-4.062-1.934-.544-.198-.94-.298-1.338.298-.396.594-1.536 1.934-1.882 2.33s-.694.446-1.288.148-2.51-.924-4.78-2.95c-1.766-1.576-2.96-3.522-3.306-4.118-.346-.594-.036-.916.26-1.212.268-.266.594-.694.892-1.042.302-.344.4-.592.6-.99.198-.396.1-.744-.05-1.042-.15-.296-1.338-3.222-1.832-4.412-.484-1.158-.974-1.002-1.338-1.02l-1.14-.02c-.396 0-1.04.148-1.584.744s-2.08 2.032-2.08 4.958 2.13 5.752 2.426 6.148c.298.396 4.19 6.4 10.152 8.974 1.418.612 2.526.978 3.388 1.252 1.424.452 2.72.388 3.744.236 1.142-.17 3.516-1.438 4.012-2.826.496-1.39.496-2.58.346-2.828"})))};function Z(){return(Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var $=function(e){return J.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",width:48,height:40,fill:"none"},e),z||(z=J.createElement("path",{fill:"#fff",d:"M48 13.24a15.8 15.8 0 0 1-2.679 2.353c-4.473 3.055-8.973 6.137-13.339 9.328-2.25 1.676-5.036 3.731-7.955 3.731h-.054c-2.92 0-5.705-2.055-7.955-3.731-4.366-3.218-8.866-6.273-13.313-9.328A15 15 0 0 1 0 13.24v21.468c0 2.379 1.929 4.325 4.286 4.325h39.428c2.357 0 4.286-1.946 4.286-4.325zm0-7.948c0-2.38-1.955-4.326-4.286-4.326H4.286C1.42.966 0 3.236 0 5.886c0 2.46 2.705 5.516 4.607 6.814 4.152 2.92 8.357 5.84 12.51 8.787 1.74 1.217 4.687 3.704 6.856 3.704h.054c2.17 0 5.116-2.487 6.857-3.704C35.036 18.54 39.24 15.62 43.42 12.7 45.777 11.05 48 8.32 48 5.292"})))};function ee(){return(ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var et=function(e){return J.createElement("svg",ee({xmlns:"http://www.w3.org/2000/svg",width:48,height:48,fill:"none"},e),C||(C=J.createElement("g",{clipPath:"url(#github_svg__a)"},J.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M24.02 0C10.738 0 0 10.817 0 24.198 0 34.895 6.88 43.95 16.424 47.154c1.193.241 1.63-.52 1.63-1.161 0-.561-.039-2.484-.039-4.488-6.682 1.443-8.073-2.884-8.073-2.884-1.074-2.805-2.665-3.525-2.665-3.525-2.187-1.483.16-1.483.16-1.483 2.425.16 3.698 2.484 3.698 2.484 2.147 3.686 5.607 2.644 7 2.003.198-1.562.834-2.644 1.51-3.245-5.329-.56-10.936-2.644-10.936-11.939 0-2.644.954-4.807 2.466-6.49-.239-.6-1.074-3.085.239-6.41 0 0 2.028-.641 6.6 2.484 1.959-.53 3.978-.8 6.006-.802 2.028 0 4.095.281 6.005.802 4.573-3.125 6.601-2.484 6.601-2.484 1.313 3.325.477 5.81.239 6.41 1.55 1.683 2.465 3.846 2.465 6.49 0 9.295-5.607 11.338-10.976 11.94.876.76 1.63 2.202 1.63 4.486 0 3.245-.039 5.85-.039 6.65 0 .642.438 1.403 1.63 1.163C41.12 43.949 48 34.895 48 24.198 48.04 10.817 37.262 0 24.02 0",clipRule:"evenodd"}))),N||(N=J.createElement("defs",null,J.createElement("clipPath",{id:"github_svg__a"},J.createElement("path",{fill:"#fff",d:"M0 0h48v48H0z"})))))};function ea(){return(0,S.jsxs)("footer",{children:[(0,S.jsx)(Q,{className:"logo",src:"".concat("","/logo-footer.svg")}),(0,S.jsxs)("div",{className:"social-links",children:[(0,S.jsx)("a",{href:"https://wa.me/+5551995142689",target:"_blank",rel:"noopener noreferrer",children:(0,S.jsx)(X,{className:"social-icon",src:"".concat("","/whats.svg")})}),(0,S.jsx)("a",{href:"mailto:ericoloewe@gmail.com",target:"_blank",rel:"noopener noreferrer",children:(0,S.jsx)($,{className:"social-icon",src:"".concat("","/email.svg")})}),(0,S.jsx)("a",{href:"https://github.com/loewesolucoes",target:"_blank",rel:"noopener noreferrer",children:(0,S.jsx)(et,{className:"social-icon",src:"".concat("","/github.svg")})})]})]})}function en(e){let{children:t}=e;return(0,S.jsxs)(A,{children:[(0,S.jsx)(Y,{}),t,(0,S.jsx)(ea,{})]})}var eo=a(6943);function er(){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(es,{}),(0,S.jsxs)("article",{children:[(0,S.jsx)("div",{className:"welcome",children:(0,S.jsxs)("section",{className:"welcome-info",children:[(0,S.jsx)("h1",{children:"Inova\xe7\xe3o e tecnologia ao seu alcance"}),(0,S.jsx)("hr",{}),(0,S.jsx)("p",{children:"Com uma abordagem centrada no cliente, oferecemos ferramentas personalizadas que otimizam processos, aumentam a efici\xeancia e impulsionam o crescimento sustent\xe1vel"}),(0,S.jsx)("button",{type:"button",className:"btn btn-sm btn-info",children:"Conhe\xe7a nossos servi\xe7os"})]})}),(0,S.jsx)("div",{className:"about",children:(0,S.jsxs)("section",{children:[(0,S.jsx)("h2",{children:"Sobre nosso trabalho"}),(0,S.jsx)("hr",{}),(0,S.jsx)("p",{children:"Na Loewe Solu\xe7\xf5es em Software, n\xf3s nos dedicamos a desenvolver aplica\xe7\xf5es inovadoras para a gest\xe3o de neg\xf3cios. Nossa equipe \xe9 composta por profissionais altamente qualificados e apaixonados por tecnologia, comprometidos em entregar solu\xe7\xf5es que transformam a maneira como as empresas operam. Com uma abordagem centrada no cliente, oferecemos ferramentas personalizadas que otimizam processos, aumentam a efici\xeancia e impulsionam o crescimento sustent\xe1vel. Junte-se a n\xf3s e leve seu neg\xf3cio ao pr\xf3ximo n\xedvel com intelig\xeancia e tecnologia."})]})})]})]})}function es(){return(0,D.useEffect)(()=>{document.querySelectorAll(".parallax .scene").forEach(e=>{let t=e.getAttribute("data-modifier");eo.create({elem:e,from:0,to:519,direct:!0,props:{"--translateY":{from:"0",to:"".concat(10*t,"px")}}}).start()})},[]),(0,S.jsxs)("div",{className:"parallax",children:[(0,S.jsx)("img",{className:"scene","data-modifier":"30",src:"".concat("","/sky.webp")}),(0,S.jsx)("img",{className:"scene","data-modifier":"20",src:"".concat("","/mountain.webp")}),(0,S.jsx)("img",{className:"scene","data-modifier":"18",src:"".concat("","/man.webp")})]})}function el(){return(0,S.jsx)("main",{children:(0,S.jsx)(en,{children:(0,S.jsx)(er,{})})})}},4612:function(){},5640:function(e){"use strict";e.exports=JSON.parse('{"name":"gestao-construcao","version":"0.1.0","private":true,"scripts":{"dev":"next dev","predeploy":"echo . > ./out/.nojekyll","deploy":"gh-pages -d out --dotfiles","build":"next build","start":"next start","lint":"next lint","test":"jest","dev-test":"jest --watch"},"dependencies":{"basicscroll":"3.0.4","bootstrap":"5.3.3","gh-pages":"6.1.1","moment":"2.30.1","next":"14.1.4","react":"18.2.0","react-dom":"18.2.0"},"devDependencies":{"@svgr/webpack":"8.1.0","@testing-library/jest-dom":"6.4.2","@testing-library/react":"14.2.2","@types/basicscroll":"3.0.4","@types/jest":"29.5.12","@types/node":"20.11.30","@types/react":"18.2.67","@types/react-dom":"18.2.22","autoprefixer":"10.4.19","eslint":"8.57.0","eslint-config-next":"14.1.4","jest":"29.7.0","jest-environment-jsdom":"29.7.0","sass":"1.72.0","typescript":"5.4.3"}}')}},function(e){e.O(0,[230,971,69,744],function(){return e(e.s=2962)}),_N_E=e.O()}]);