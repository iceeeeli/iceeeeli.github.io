(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5356:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(8954)}])},9256:function(e,t,s){"use strict";s.d(t,{A:function(){return w}});var i=s(2322),n=s(2784),a=s(5632),l=s(6634),c=s(3508);let r=e=>{let{icon:t,label:s,active:n=!1,onClick:a,size:l="normal"}=e;return(0,i.jsxs)("button",{onClick:a,className:"\n        ".concat({normal:"w-[70px] h-[70px]",large:"w-[144px] h-[70px]",tall:"w-[70px] h-[144px]"}[l],"\n        rounded-2xl flex flex-col items-center justify-center gap-1\n        ").concat(n?"bg-white/30":"bg-white/10","\n        backdrop-blur-md transition-all duration-200\n        hover:bg-white/40 hover:scale-105\n        border border-white/10\n      "),children:[(0,i.jsx)("span",{className:"text-2xl",children:t}),s&&(0,i.jsx)("span",{className:"text-xs text-white/80 font-medium",children:s})]})},o=e=>{let{icon:t,value:s,onChange:n}=e;return(0,i.jsxs)("div",{className:"flex items-center gap-3 bg-white/10 p-3 rounded-2xl border border-white/10",children:[(0,i.jsx)("span",{className:"text-xl text-white/80",children:t}),(0,i.jsx)("input",{type:"range",value:s,onChange:n,className:"flex-1 h-1 bg-white/20 rounded-full appearance-none cursor-pointer"})]})},d=e=>{let{isOpen:t}=e,[s,a]=(0,n.useState)(!0),[d,x]=(0,n.useState)(!0),[h,u]=(0,n.useState)(!1),[m,p]=(0,n.useState)(!1),[j,w]=(0,n.useState)(80),[b,v]=(0,n.useState)(60);return(0,i.jsx)(l.M,{children:t&&(0,i.jsxs)(c.E.div,{initial:{opacity:0,scale:.95,y:10},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:10},className:"absolute top-8 right-2 w-[360px] p-4 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10",children:[(0,i.jsxs)("div",{className:"grid grid-cols-4 gap-3 mb-3",children:[(0,i.jsx)("div",{className:"col-span-2",children:(0,i.jsx)(r,{icon:"\uD83D\uDCF6",label:"Wi-Fi",active:s,onClick:()=>a(!s),size:"large"})}),(0,i.jsx)(r,{icon:"\uD83D\uDD35",label:"蓝牙",active:d,onClick:()=>x(!d)}),(0,i.jsx)(r,{icon:"✈️",label:"飞行模式",active:h,onClick:()=>u(!h)})]}),(0,i.jsxs)("div",{className:"grid grid-cols-4 gap-3 mb-3",children:[(0,i.jsx)("div",{className:"col-span-2 row-span-2",children:(0,i.jsx)(r,{icon:"\uD83C\uDFB5",label:"正在播放",size:"large",active:!0})}),(0,i.jsx)(r,{icon:"\uD83C\uDF19",label:"专注",active:m,onClick:()=>p(!m)}),(0,i.jsx)(r,{icon:"\uD83C\uDFAE",label:"游戏中心"})]}),(0,i.jsxs)("div",{className:"space-y-3",children:[(0,i.jsx)(o,{icon:"\uD83D\uDD06",value:j,onChange:e=>w(e.target.value)}),(0,i.jsx)(o,{icon:"\uD83D\uDD0A",value:b,onChange:e=>v(e.target.value)})]})]})})};function x(){let[e,t]=(0,n.useState)(!1);return(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("button",{onClick:()=>t(!e),className:"flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-white/10 transition-colors",children:(0,i.jsx)("span",{className:"text-white/80 text-lg",children:e?"✕":""})}),(0,i.jsx)(d,{isOpen:e})]})}function h(){(0,a.useRouter)();let e=new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"});return(0,i.jsx)("div",{className:"fixed top-0 left-0 right-0 h-7 bg-black/30 backdrop-blur-xl z-50",children:(0,i.jsxs)("div",{className:"flex items-center justify-between h-full px-4",children:[(0,i.jsxs)("div",{className:"flex items-center gap-2 text-sm text-white/80",children:[(0,i.jsx)("span",{className:"font-semibold",children:"ICE"}),(0,i.jsx)("span",{className:"cursor-pointer hover:text-white",children:"文件"}),(0,i.jsx)("span",{className:"cursor-pointer hover:text-white",children:"编辑"}),(0,i.jsx)("span",{className:"cursor-pointer hover:text-white",children:"查看"}),(0,i.jsx)("span",{className:"cursor-pointer hover:text-white",children:"窗口"}),(0,i.jsx)("span",{className:"cursor-pointer hover:text-white",children:"帮助"})]}),(0,i.jsx)("div",{className:"flex items-center gap-4 text-sm text-white/80",children:(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)("span",{children:"\uD83D\uDD0B 100%"}),(0,i.jsx)("span",{children:"\uD83D\uDCF6"}),(0,i.jsx)("span",{children:e}),(0,i.jsx)(x,{})]})})]})})}var u=s(9097),m=s.n(u);let p=e=>{let{href:t,icon:s,label:n,isActive:a}=e;return(0,i.jsx)(c.E.div,{className:"group relative",whileHover:{y:-10},transition:{type:"spring",stiffness:400,damping:25},children:(0,i.jsxs)(m(),{href:t,children:[(0,i.jsx)("div",{className:"\n          w-12 h-12 rounded-2xl flex items-center justify-center\n          bg-white/10 backdrop-blur-md border border-white/20\n          ".concat(a?"bg-white/20":"hover:bg-white/15","\n          transition-all duration-300\n        "),children:s}),(0,i.jsx)("div",{className:"absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity",children:(0,i.jsx)("div",{className:"px-3 py-1 rounded-md bg-gray-800 text-white text-sm whitespace-nowrap",children:n})}),a&&(0,i.jsx)("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2",children:(0,i.jsx)("div",{className:"w-1 h-1 rounded-full bg-white"})})]})})};function j(){let e=(0,a.useRouter)();return(0,i.jsx)("div",{className:"fixed bottom-6 left-1/2 -translate-x-1/2",children:(0,i.jsx)("div",{className:" px-4 py-2 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/20 shadow-2xl ",children:(0,i.jsx)("div",{className:"flex items-center gap-3",children:[{href:"/",icon:"\uD83C\uDFE0",label:"主页"},{href:"/blog",icon:"\uD83D\uDCDD",label:"博客"},{href:"/projects",icon:"\uD83D\uDCBB",label:"项目"},{href:"/about",icon:"\uD83D\uDC64",label:"关于"}].map(t=>(0,i.jsx)(p,{...t,isActive:e.pathname===t.href},t.href))})})})}function w(e){let{children:t}=e;return(0,i.jsxs)("div",{className:"min-h-screen desktop-bg",children:[(0,i.jsx)(h,{}),(0,i.jsx)("main",{className:"pt-7 pb-24",children:t}),(0,i.jsx)(j,{})]})}},1757:function(e,t,s){"use strict";s.d(t,{$:function(){return c}});var i=s(2322),n=s(2784),a=s(3508),l=s(8316);function c(e){let{children:t,className:s="",onClose:c}=e,[r,o]=(0,n.useState)(!1),[d,x]=(0,n.useState)(!1),[h,u]=(0,n.useState)(!1),[m,p]=(0,n.useState)(!1);if(m)return null;let j=(0,i.jsxs)(a.E.div,{layout:!0,initial:{opacity:0,y:20},animate:{opacity:h?0:1,y:0,scale:d?.1:1},className:"\n        window-card rounded-lg overflow-hidden transition-all duration-300\n        ".concat(r?"window-maximized":"","\n        ").concat(d?"window-minimized":"","\n        ").concat(s,"\n      "),style:{...r?{height:"calc(100vh - 47px)",top:"7px"}:{}},children:[(0,i.jsx)(a.E.div,{className:"window-titlebar h-8 flex items-center",layout:"position",children:(0,i.jsxs)("div",{className:"window-controls",children:[(0,i.jsx)("button",{className:"window-control window-close",onClick:()=>{u(!0),setTimeout(()=>{p(!0),c&&c()},300)},title:"关闭"}),(0,i.jsx)("button",{className:"window-control window-minimize",onClick:()=>{x(!0)},title:"最小化"}),(0,i.jsx)("button",{className:"window-control window-maximize",onClick:()=>{o(!r)},title:"最大化"})]})}),(0,i.jsx)(a.E.div,{className:"p-6 overflow-auto",layout:"position",style:{maxHeight:r?"calc(100vh - 87px)":void 0},children:t})]}),w=d&&!m&&(0,i.jsx)(a.E.div,{initial:{scale:.5,y:100},animate:{scale:1,y:0},exit:{scale:.5,y:100},onClick:()=>{x(!1),u(!1)},className:"cursor-pointer",children:(0,i.jsx)("div",{className:"w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center",children:"\uD83D\uDCC4"})});return(0,i.jsxs)(i.Fragment,{children:[!d&&j,w&&(0,l.createPortal)((0,i.jsx)("div",{className:"fixed bottom-20 right-6",children:w}),document.body)]})}},9434:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var i=s(2784);function n(){let[e,t]=(0,i.useState)([]),[s,n]=(0,i.useState)(!0),[a,l]=(0,i.useState)(null);return(0,i.useEffect)(()=>{fetch("".concat("","/api/projects")).then(e=>e.json()).then(e=>{t(e),n(!1)}).catch(e=>{l(e),n(!1)})},[]),{projects:e,loading:s,error:a}}},8954:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var i=s(2322),n=s(2784),a=s(3508),l=s(9256),c=s(1757),r=s(9434);function o(){let{posts:e,loading:t}=function(){let[e,t]=(0,n.useState)([]),[s,i]=(0,n.useState)(!0),[a,l]=(0,n.useState)(null);return(0,n.useEffect)(()=>{fetch("".concat("","/api/posts")).then(e=>e.json()).then(e=>{t(e),i(!1)}).catch(e=>{l(e),i(!1)})},[]),{posts:e,loading:s,error:a}}(),{projects:s,loading:o}=(0,r.Z)();return(0,i.jsx)(l.A,{children:(0,i.jsx)("div",{className:"gradient-bg min-h-screen",children:(0,i.jsxs)("div",{className:"container mx-auto px-4 py-12",children:[(0,i.jsx)(a.E.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"text-5xl font-bold mb-12 gradient-text text-center",children:"欢迎来到我的个人网站"}),(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,i.jsxs)("div",{className:"space-y-6",children:[(0,i.jsx)("h2",{className:"text-3xl font-semibold mb-6 glow-text",children:"最新博客"}),t?(0,i.jsx)("div",{className:"text-white/60",children:"加载中..."}):e.length>0?(0,i.jsx)(a.E.div,{className:"space-y-6",variants:{show:{transition:{staggerChildren:.1}}},initial:"hidden",animate:"show",children:e.slice(0,3).map(e=>(0,i.jsxs)(c.$,{children:[(0,i.jsx)("h3",{className:"text-xl font-medium text-white mb-2",children:e.title}),(0,i.jsxs)("p",{className:"text-white/60",children:[e.content.slice(0,100),"..."]})]},e.id))}):(0,i.jsx)("div",{className:"text-white/60",children:"暂无博客文章"})]}),(0,i.jsxs)("div",{className:"space-y-6",children:[(0,i.jsx)("h2",{className:"text-3xl font-semibold mb-6 glow-text",children:"项目展示"}),o?(0,i.jsx)("div",{className:"text-white/60",children:"加载中..."}):s.length>0?(0,i.jsx)(a.E.div,{className:"space-y-6",variants:{show:{transition:{staggerChildren:.1}}},initial:"hidden",animate:"show",children:s.slice(0,3).map(e=>(0,i.jsxs)(c.$,{children:[(0,i.jsx)("h3",{className:"text-xl font-medium text-white mb-2",children:e.name}),(0,i.jsx)("p",{className:"text-white/60",children:e.description})]},e.id))}):(0,i.jsx)("div",{className:"text-white/60",children:"暂无项目"})]})]})]})})})}}},function(e){e.O(0,[375,774,888,179],function(){return e(e.s=5356)}),_N_E=e.O()}]);