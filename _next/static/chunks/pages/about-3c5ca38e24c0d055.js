(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{3284:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(9348)}])},9256:function(e,s,t){"use strict";t.d(s,{A:function(){return b}});var i=t(2322),n=t(2784),l=t(5632),r=t(6634),a=t(3508);let c=e=>{let{icon:s,label:t,active:n=!1,onClick:l,size:r="normal"}=e;return(0,i.jsxs)("button",{onClick:l,className:"\n        ".concat({normal:"w-[70px] h-[70px]",large:"w-[144px] h-[70px]",tall:"w-[70px] h-[144px]"}[r],"\n        rounded-2xl flex flex-col items-center justify-center gap-1\n        ").concat(n?"bg-white/30":"bg-white/10","\n        backdrop-blur-md transition-all duration-200\n        hover:bg-white/40 hover:scale-105\n        border border-white/10\n      "),children:[(0,i.jsx)("span",{className:"text-2xl",children:s}),t&&(0,i.jsx)("span",{className:"text-xs text-white/80 font-medium",children:t})]})},o=e=>{let{icon:s,value:t,onChange:n}=e;return(0,i.jsxs)("div",{className:"flex items-center gap-3 bg-white/10 p-3 rounded-2xl border border-white/10",children:[(0,i.jsx)("span",{className:"text-xl text-white/80",children:s}),(0,i.jsx)("input",{type:"range",value:t,onChange:n,className:"flex-1 h-1 bg-white/20 rounded-full appearance-none cursor-pointer"})]})},d=e=>{let{isOpen:s}=e,[t,l]=(0,n.useState)(!0),[d,x]=(0,n.useState)(!0),[h,u]=(0,n.useState)(!1),[p,m]=(0,n.useState)(!1),[j,b]=(0,n.useState)(80),[v,f]=(0,n.useState)(60);return(0,i.jsx)(r.M,{children:s&&(0,i.jsxs)(a.E.div,{initial:{opacity:0,scale:.95,y:10},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:10},className:"absolute top-8 right-2 w-[360px] p-4 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10",children:[(0,i.jsxs)("div",{className:"grid grid-cols-4 gap-3 mb-3",children:[(0,i.jsx)("div",{className:"col-span-2",children:(0,i.jsx)(c,{icon:"\uD83D\uDCF6",label:"Wi-Fi",active:t,onClick:()=>l(!t),size:"large"})}),(0,i.jsx)(c,{icon:"\uD83D\uDD35",label:"蓝牙",active:d,onClick:()=>x(!d)}),(0,i.jsx)(c,{icon:"✈️",label:"飞行模式",active:h,onClick:()=>u(!h)})]}),(0,i.jsxs)("div",{className:"grid grid-cols-4 gap-3 mb-3",children:[(0,i.jsx)("div",{className:"col-span-2 row-span-2",children:(0,i.jsx)(c,{icon:"\uD83C\uDFB5",label:"正在播放",size:"large",active:!0})}),(0,i.jsx)(c,{icon:"\uD83C\uDF19",label:"专注",active:p,onClick:()=>m(!p)}),(0,i.jsx)(c,{icon:"\uD83C\uDFAE",label:"游戏中心"})]}),(0,i.jsxs)("div",{className:"space-y-3",children:[(0,i.jsx)(o,{icon:"\uD83D\uDD06",value:j,onChange:e=>b(e.target.value)}),(0,i.jsx)(o,{icon:"\uD83D\uDD0A",value:v,onChange:e=>f(e.target.value)})]})]})})};function x(){let[e,s]=(0,n.useState)(!1);return(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("button",{onClick:()=>s(!e),className:"flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-white/10 transition-colors",children:(0,i.jsx)("span",{className:"text-white/80 text-lg",children:e?"✕":""})}),(0,i.jsx)(d,{isOpen:e})]})}function h(){(0,l.useRouter)();let e=new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"});return(0,i.jsx)("div",{className:"fixed top-0 left-0 right-0 h-7 bg-black/30 backdrop-blur-xl z-50",children:(0,i.jsxs)("div",{className:"flex items-center justify-between h-full px-4",children:[(0,i.jsxs)("div",{className:"flex items-center gap-2 text-sm text-white/80",children:[(0,i.jsx)("span",{className:"font-semibold",children:"ICE"}),(0,i.jsx)("span",{className:"cursor-pointer hover:text-white",children:"文件"}),(0,i.jsx)("span",{className:"cursor-pointer hover:text-white",children:"编辑"}),(0,i.jsx)("span",{className:"cursor-pointer hover:text-white",children:"查看"}),(0,i.jsx)("span",{className:"cursor-pointer hover:text-white",children:"窗口"}),(0,i.jsx)("span",{className:"cursor-pointer hover:text-white",children:"帮助"})]}),(0,i.jsx)("div",{className:"flex items-center gap-4 text-sm text-white/80",children:(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)("span",{children:"\uD83D\uDD0B 100%"}),(0,i.jsx)("span",{children:"\uD83D\uDCF6"}),(0,i.jsx)("span",{children:e}),(0,i.jsx)(x,{})]})})]})})}var u=t(9097),p=t.n(u);let m=e=>{let{href:s,icon:t,label:n,isActive:l}=e;return(0,i.jsx)(a.E.div,{className:"group relative",whileHover:{y:-10},transition:{type:"spring",stiffness:400,damping:25},children:(0,i.jsxs)(p(),{href:s,children:[(0,i.jsx)("div",{className:"\n          w-12 h-12 rounded-2xl flex items-center justify-center\n          bg-white/10 backdrop-blur-md border border-white/20\n          ".concat(l?"bg-white/20":"hover:bg-white/15","\n          transition-all duration-300\n        "),children:t}),(0,i.jsx)("div",{className:"absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity",children:(0,i.jsx)("div",{className:"px-3 py-1 rounded-md bg-gray-800 text-white text-sm whitespace-nowrap",children:n})}),l&&(0,i.jsx)("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2",children:(0,i.jsx)("div",{className:"w-1 h-1 rounded-full bg-white"})})]})})};function j(){let e=(0,l.useRouter)();return(0,i.jsx)("div",{className:"fixed bottom-6 left-1/2 -translate-x-1/2",children:(0,i.jsx)("div",{className:" px-4 py-2 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/20 shadow-2xl ",children:(0,i.jsx)("div",{className:"flex items-center gap-3",children:[{href:"/",icon:"\uD83C\uDFE0",label:"主页"},{href:"/blog",icon:"\uD83D\uDCDD",label:"博客"},{href:"/projects",icon:"\uD83D\uDCBB",label:"项目"},{href:"/about",icon:"\uD83D\uDC64",label:"关于"}].map(s=>(0,i.jsx)(m,{...s,isActive:e.pathname===s.href},s.href))})})})}function b(e){let{children:s}=e;return(0,i.jsxs)("div",{className:"min-h-screen desktop-bg",children:[(0,i.jsx)(h,{}),(0,i.jsx)("main",{className:"pt-7 pb-24",children:s}),(0,i.jsx)(j,{})]})}},9348:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return l}});var i=t(2322);t(2784);var n=t(9256);function l(){return(0,i.jsx)(n.A,{children:(0,i.jsxs)("div",{className:"container mx-auto px-4 py-12",children:[(0,i.jsx)("h1",{className:"text-4xl font-bold mb-8",children:"关于我"}),(0,i.jsxs)("div",{className:"prose lg:prose-xl",children:[(0,i.jsx)("p",{children:"这里是关于我的介绍..."}),(0,i.jsx)("h2",{children:"技能"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"前端开发: React, Next.js, TypeScript"}),(0,i.jsx)("li",{children:"后端开发: Node.js, Python"}),(0,i.jsx)("li",{children:"其他技能..."})]}),(0,i.jsx)("h2",{children:"联系方式"}),(0,i.jsxs)("p",{children:["Email: your.email@example.com",(0,i.jsx)("br",{}),"GitHub: ",(0,i.jsx)("a",{href:"https://github.com/yourusername",children:"@yourusername"})]})]})]})})}}},function(e){e.O(0,[375,774,888,179],function(){return e(e.s=3284)}),_N_E=e.O()}]);