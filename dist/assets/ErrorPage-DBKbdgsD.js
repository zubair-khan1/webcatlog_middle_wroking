import{j as e}from"./vendor-motion-Dl8lXUsH.js";import{B as a}from"./index-76QHltB_.js";import{aC as l,aD as o,aE as n}from"./vendor-icons-BBHJ0ezg.js";import"./vendor-react-Ojr5pEEK.js";import"./vendor-supabase-CIvuJI4W.js";import"./vendor-date-BvD7TL1z.js";const u=({type:r,onRetry:t,onHome:i})=>{const s=r==="offline";return e.jsxs("div",{className:"min-h-screen bg-[#030303] flex flex-col items-center justify-center p-6 relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"}),e.jsx("div",{className:"relative w-[400px] h-[300px] mb-8",children:e.jsxs("svg",{viewBox:"0 0 400 300",className:"w-full h-full",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"canSide",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"#27272A"}),e.jsx("stop",{offset:"40%",stopColor:"#52525B"}),e.jsx("stop",{offset:"60%",stopColor:"#71717A"}),e.jsx("stop",{offset:"100%",stopColor:"#27272A"})]}),e.jsxs("linearGradient",{id:"canInside",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#09090B"}),e.jsx("stop",{offset:"100%",stopColor:"#18181B"})]}),e.jsxs("linearGradient",{id:"liquidGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#D1F25E"}),e.jsx("stop",{offset:"100%",stopColor:"#B8D64D"})]}),e.jsxs("filter",{id:"glow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[e.jsx("feGaussianBlur",{stdDeviation:"5",result:"blur"}),e.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),e.jsx("style",{children:`
              /* Overall Container Scale */
              .scene {
                transform-origin: center center;
              }

              /* 1. Can Tipping Animation */
              .can-container {
                transform-origin: 200px 180px;
                animation: tipCan 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
              }

              /* 2. Liquid Bulging (Enlarging at rim) */
              .liquid-bulge {
                transform-origin: 200px 180px; /* Center of can opening roughly */
                transform: scale(0);
                opacity: 1;
                animation: bulgeLiquid 1s ease-out 1.2s forwards;
              }

              /* 3. Liquid Spilling (Slow Motion Drop) */
              .liquid-spill-path {
                stroke-dasharray: 400;
                stroke-dashoffset: 400;
                animation: spillLiquid 2s ease-in-out 2s forwards;
              }
              
              /* 4. Puddle Expansion */
              .puddle {
                transform-origin: 200px 260px;
                transform: scale(0);
                opacity: 0;
                animation: expandPuddle 2s ease-out 2.8s forwards;
              }
              
              /* Text Slide In */
              .text-4 {
                 opacity: 0;
                 transform: translateX(0);
                 animation: slideInText 1s ease-out 0.5s forwards;
              }

              @keyframes tipCan {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(-70deg) translateX(-20px) translateY(10px); }
              }

              @keyframes bulgeLiquid {
                0% { transform: scale(0); }
                50% { transform: scale(1.2); }
                100% { transform: scale(1); }
              }

              @keyframes spillLiquid {
                0% { stroke-dashoffset: 400; opacity: 1;}
                100% { stroke-dashoffset: 0; opacity: 1;}
              }

              @keyframes expandPuddle {
                 0% { transform: scale(0); opacity: 0; }
                 100% { transform: scale(1); opacity: 1; }
              }

              @keyframes slideInText {
                 0% { opacity: 0; transform: translateY(20px); }
                 100% { opacity: 1; transform: translateY(0); }
              }
            `}),e.jsx("text",{x:"60",y:"180",fontSize:"180",fontWeight:"bold",fill:"#3F3F46",opacity:"0.5",className:"text-4",style:{transformOrigin:"center"},children:"4"}),e.jsx("text",{x:"280",y:"180",fontSize:"180",fontWeight:"bold",fill:"#3F3F46",opacity:"0.5",className:"text-4",style:{animationDelay:"0.7s",transformOrigin:"center"},children:"4"}),e.jsx("ellipse",{cx:"200",cy:"270",rx:"120",ry:"15",fill:"#D1F25E",className:"puddle",filter:"url(#glow)"}),e.jsxs("g",{className:"can-container",children:[e.jsx("path",{d:"M160 80 L160 200 A 40 20 0 0 0 240 200 L240 80",fill:"url(#canSide)"}),e.jsx("ellipse",{cx:"200",cy:"200",rx:"40",ry:"20",fill:"#27272A"}),e.jsxs("g",{children:[e.jsx("ellipse",{cx:"200",cy:"80",rx:"40",ry:"20",fill:"#E4E4E7"}),e.jsx("ellipse",{cx:"200",cy:"80",rx:"36",ry:"18",fill:"url(#canInside)"})]}),e.jsx("circle",{cx:"200",cy:"80",r:"34",fill:"#D1F25E",className:"liquid-bulge",filter:"url(#glow)"}),e.jsxs("g",{transform:"translate(180, 130) rotate(90)",children:[e.jsx("circle",{cx:"0",cy:"0",r:"4",fill:"#18181B",opacity:"0.6"}),e.jsx("circle",{cx:"0",cy:"20",r:"4",fill:"#18181B",opacity:"0.6"}),e.jsx("rect",{x:"10",y:"5",width:"4",height:"10",rx:"2",fill:"#18181B",opacity:"0.6"})]})]}),e.jsx("g",{style:{filter:"url(#glow)"},children:e.jsx("path",{d:"M165 150 Q 160 200 180 220 T 200 270",fill:"none",stroke:"#D1F25E",strokeWidth:"30",strokeLinecap:"round",className:"liquid-spill-path",opacity:"0"})})]})}),e.jsxs("div",{className:"text-center z-10 animate-fade-in",style:{animationDelay:"0.5s"},children:[e.jsx("h1",{className:"text-5xl font-display font-bold text-white mb-4 tracking-tight",children:"Oops!"}),e.jsxs("p",{className:"text-xl text-white/80 font-medium mb-2",children:["Who spilled the ",s?"wifi":"paint","?"]}),e.jsx("p",{className:"text-textMuted text-sm mb-10 max-w-md mx-auto leading-relaxed",children:s?"Your internet connection seems to have dropped. Check your cables and try again.":"The page you are looking for has spilled into the void or never existed."}),e.jsxs("div",{className:"flex gap-4 justify-center",children:[t&&e.jsx(a,{onClick:t,icon:e.jsx(l,{size:16}),size:"lg",className:"shadow-[0_0_20px_-5px_rgba(209,242,94,0.4)]",children:s?"Retry Connection":"Refresh Page"}),i&&e.jsx(a,{variant:"outline",onClick:i,icon:e.jsx(o,{size:16}),size:"lg",children:"Back Home"})]})]}),e.jsx("div",{className:"absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent"}),s&&e.jsx("div",{className:"absolute top-10 right-10 p-4 rounded-full bg-white/5 border border-white/10 animate-pulse",children:e.jsx(n,{className:"text-textMuted"})})]})};export{u as default};
