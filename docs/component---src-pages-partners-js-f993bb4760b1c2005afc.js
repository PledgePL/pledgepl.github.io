(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(142),i=a(2),s=a(10),o=a(147),c=a.n(o),m=a(50),p=a.n(m),d=a(13),u=a(23),f=a(145),h=a(143);const g=({theme:e,name:t,url:a,policyUrl:n,fluid:l})=>{const o=c()(e.colors.gamma+"dd",{format:"array"}).toString();return r.a.createElement(h.a,{as:"a",href:a,padding:!1,css:{position:"relative","&:hover":{transitionDelay:"0.15s"},"&:hover .overlay":{opacity:1},"&:hover .name":{opacity:1}}},r.a.createElement(i.a,{p:4},r.a.createElement(p.a,{fluid:l,fadeIn:!0,critical:!1,alt:t,imgStyle:{objectFit:"contain"}})),r.a.createElement(i.a,{css:{position:"absolute",left:0,top:0,width:"100%"}},r.a.createElement(f.a,{mx:"auto",className:"overlay",css:{transitionDelay:"0.15s",transitionTimingFunction:"cubic-bezier(.39,.575,.565,1)",transitionProperty:"opacity",transitionDuration:"0.35s",backgroundColor:"rgba("+o+")",opacity:0}},t&&r.a.createElement(i.b,{flexDirection:"column",alignItems:"center",justifyContent:"space-around",width:"100%",height:"100%",className:"name",css:{position:"relative"}},r.a.createElement(i.b,{flex:"1 1 100%",alignItems:"center"},r.a.createElement(s.a,{color:"beta",fontSize:"beta",fontFamily:"beta",as:"h3",textAlign:"center"},t)),r.a.createElement(i.c,{gridTemplateColumns:["1fr",a&&n?"1fr 1fr":"1fr"],gridGap:[4],css:{position:"absolute",bottom:0},pb:[3,2],mx:"auto"},a&&r.a.createElement(u.a,{href:a,size:"xsmall",type:"gamma",mx:"auto",css:{width:"100%"}},"Website"),n&&r.a.createElement(u.a,{href:n,size:"xsmall",type:"gamma",css:{width:"100%"},mx:"auto"},"Policy"))))))};g.defaultProps={name:null,src:null,url:null};var b=Object(d.b)(g);const y=({partners:e,title:t,description:a})=>r.a.createElement(i.a,{bg:"beta",py:[6,7],px:[4,5],as:"section"},r.a.createElement(i.a,{mb:7},t&&r.a.createElement(s.a,{color:"theta",fontSize:"alpha",fontFamily:"beta",textAlign:"center",css:{maxWidth:800},mx:"auto",as:"h2"},t),a&&r.a.createElement(s.a,{color:"theta",as:"p",textAlign:"center",mx:"auto",css:{maxWidth:800}},a)),r.a.createElement(i.c,{gridTemplateColumns:["1fr 1fr","1fr 1fr 1fr","1fr 1fr 1fr","1fr 1fr 1fr 1fr"],gridGap:[4,5],mx:"auto",css:{maxWidth:"1160px"}},e&&e.map(({partnerName:e,url:t,policyUrl:a,fluid:n})=>r.a.createElement(b,{name:e,fluid:n,url:t,policyUrl:a,key:e}))));y.defaultProps={partners:[],title:"Partnet List",description:null};var E=y;a.d(t,"query",function(){return x});t.default=(({data:e})=>{const t=e.foundingPartners?e.foundingPartners.edges.map(e=>e.node):null,a=e.partners?e.partners.edges.map(e=>e.node):null,n=e.supportingPartners?e.supportingPartners.edges.map(e=>e.node):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:"Companies who really care"},"Thanks to them, thousands of employees and their families have a bright and healthy future. Meet our partners who have helped make the Pledge Parental Leave movement a reality."),r.a.createElement(E,{partners:t,title:"Founding Partners",description:"These companies came together to start Pledge Parental Leave"}),r.a.createElement(E,{partners:a,title:"Partners",description:"Since our launch, these companies have joined our ranks."}),r.a.createElement(E,{partners:n,title:"Supporting Partners",description:"Helping us every step of the way."}))});const x="2412658444"},142:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2),i=a(10);const s=({title:e,children:t})=>r.a.createElement(l.a,{bg:"gamma",py:[6,7],px:[6,7]},r.a.createElement(l.a,{css:{maxWidth:1e3},mx:"auto"},e&&r.a.createElement(i.a,{color:"beta",mb:3,fontSize:"alpha",fontFamily:"beta",as:"h1",textAlign:"center"},e),t&&r.a.createElement(i.a,{color:"beta",as:"p",textAlign:"center",mb:5},t)));s.defaultProps={title:null,children:null},t.a=s},143:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2),i=a(13);const s=({theme:e,padding:t,children:a,css:n={},...i})=>a?r.a.createElement(l.a,Object.assign({bg:"beta",py:t?[5,6]:0,px:t?[4,5]:0,css:{...n,borderWidth:"1px",borderColor:e.colors.gamma,borderStyle:"solid"}},i),a):null;s.defaultProps={padding:!0,children:null},t.a=Object(i.b)(s)},145:function(e,t,a){"use strict";var n=a(6),r=a(0),l=a.n(r),i=a(2);const s=Object(n.default)(i.a,{target:"e3rld0d0"})("\n    height: 0;\n    overflow: hidden;\n    position: relative;\n    flex: 1 1 auto;\n    "),o=Object(n.default)(i.a,{target:"e3rld0d1"})("\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    "),c=({ratio:e,children:t,css:a={},...n})=>l.a.createElement(s,Object.assign({},n,{css:{...a,paddingTop:"calc("+e+" * 100%)"}}),l.a.createElement(o,null,t));c.defaultProps={ratio:1,children:null},t.a=c},147:function(e,t,a){"use strict";const n=new RegExp("[^#a-f\\d]","gi"),r=new RegExp("^#?[a-f\\d]{3}[a-f\\d]?$|^#?[a-f\\d]{6}([a-f\\d]{2})?$","i");e.exports=((e,t={})=>{if("string"!=typeof e||n.test(e)||!r.test(e))throw new TypeError("Expected a valid hex string");let a=1;8===(e=e.replace(/^#/,"")).length&&(a=parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),4===e.length&&(a=parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);const l=parseInt(e,16),i=l>>16,s=l>>8&255,o=255&l;return"array"===t.format?[i,s,o,a]:{red:i,green:s,blue:o,alpha:a}})}}]);