"use strict";(self.webpackChunk_gbeata_admin_docs=self.webpackChunk_gbeata_admin_docs||[]).push([[646],{71039:function(ke,B,o){o.r(B),o.d(B,{default:function(){return Se}});var Le=o(15910),we=o(96211),i=o(53585),R=o(94781),W=o(16700),X=o(77700),G=o(11585),V=o(11904),U=o(84233),N=o.n(U),Y=o(82859),J=o(20852),K=o(44979),Q=o(52595),D=o(57395),q=o(72281),_=o(69442);const $=(t,e,s,a,r)=>({background:t,border:`${(0,D.bf)(a.lineWidth)} ${a.lineType} ${e}`,[`${r}-icon`]:{color:s}}),ee=t=>{const{componentCls:e,motionDurationSlow:s,marginXS:a,marginSM:r,fontSize:l,fontSizeLG:d,lineHeight:c,borderRadiusLG:h,motionEaseInOutCirc:m,withDescriptionIconSize:v,colorText:g,colorTextHeading:p,withDescriptionPadding:x,defaultPadding:j}=t;return{[e]:Object.assign(Object.assign({},(0,q.Wf)(t)),{position:"relative",display:"flex",alignItems:"center",padding:j,wordWrap:"break-word",borderRadius:h,[`&${e}-rtl`]:{direction:"rtl"},[`${e}-content`]:{flex:1,minWidth:0},[`${e}-icon`]:{marginInlineEnd:a,lineHeight:0},["&-description"]:{display:"none",fontSize:l,lineHeight:c},"&-message":{color:p},[`&${e}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${s} ${m}, opacity ${s} ${m},
        padding-top ${s} ${m}, padding-bottom ${s} ${m},
        margin-bottom ${s} ${m}`},[`&${e}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${e}-with-description`]:{alignItems:"flex-start",padding:x,[`${e}-icon`]:{marginInlineEnd:r,fontSize:v,lineHeight:0},[`${e}-message`]:{display:"block",marginBottom:a,color:p,fontSize:d},[`${e}-description`]:{display:"block",color:g}},[`${e}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},ne=t=>{const{componentCls:e,colorSuccess:s,colorSuccessBorder:a,colorSuccessBg:r,colorWarning:l,colorWarningBorder:d,colorWarningBg:c,colorError:h,colorErrorBorder:m,colorErrorBg:v,colorInfo:g,colorInfoBorder:p,colorInfoBg:x}=t;return{[e]:{"&-success":$(r,a,s,t,e),"&-info":$(x,p,g,t,e),"&-warning":$(c,d,l,t,e),"&-error":Object.assign(Object.assign({},$(v,m,h,t,e)),{[`${e}-description > pre`]:{margin:0,padding:0}})}}},te=t=>{const{componentCls:e,iconCls:s,motionDurationMid:a,marginXS:r,fontSizeIcon:l,colorIcon:d,colorIconHover:c}=t;return{[e]:{["&-action"]:{marginInlineStart:r},[`${e}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:l,lineHeight:(0,D.bf)(l),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${s}-close`]:{color:d,transition:`color ${a}`,"&:hover":{color:c}}},"&-close-text":{color:d,transition:`color ${a}`,"&:hover":{color:c}}}}},ae=t=>({withDescriptionIconSize:t.fontSizeHeading3,defaultPadding:`${t.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${t.paddingMD}px ${t.paddingContentHorizontalLG}px`});var se=(0,_.I$)("Alert",t=>[ee(t),ne(t),te(t)],ae),re=function(t,e){var s={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(s[a[r]]=t[a[r]]);return s};const oe={success:R.Z,info:V.Z,error:W.Z,warning:G.Z},le=t=>{const{icon:e,prefixCls:s,type:a}=t,r=oe[a]||null;return e?(0,K.wm)(e,i.createElement("span",{className:`${s}-icon`},e),()=>({className:N()(`${s}-icon`,{[e.props.className]:e.props.className})})):i.createElement(r,{className:`${s}-icon`})},ie=t=>{const{isClosable:e,prefixCls:s,closeIcon:a,handleClose:r}=t,l=a===!0||a===void 0?i.createElement(X.Z,null):a;return e?i.createElement("button",{type:"button",onClick:r,className:`${s}-close-icon`,tabIndex:0},l):null};var O=t=>{const{description:e,prefixCls:s,message:a,banner:r,className:l,rootClassName:d,style:c,onMouseEnter:h,onMouseLeave:m,onClick:v,afterClose:g,showIcon:p,closable:x,closeText:j,closeIcon:C,action:P}=t,Ne=re(t,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),[k,Ie]=i.useState(!1),Be=i.useRef(null),{getPrefixCls:De,direction:Oe,alert:f}=i.useContext(Q.E_),u=De("alert",s),[Fe,Ae,Te]=se(u),Ze=y=>{var E;Ie(!0),(E=t.onClose)===null||E===void 0||E.call(t,y)},L=i.useMemo(()=>t.type!==void 0?t.type:r?"warning":"info",[t.type,r]),ze=i.useMemo(()=>j?!0:typeof x=="boolean"?x:C!==!1&&C!==null&&C!==void 0,[j,C,x]),w=r&&p===void 0?!0:p,He=N()(u,`${u}-${L}`,{[`${u}-with-description`]:!!e,[`${u}-no-icon`]:!w,[`${u}-banner`]:!!r,[`${u}-rtl`]:Oe==="rtl"},f==null?void 0:f.className,l,d,Te,Ae),Me=(0,J.Z)(Ne,{aria:!0,data:!0});return Fe(i.createElement(Y.ZP,{visible:!k,motionName:`${u}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:y=>({maxHeight:y.offsetHeight}),onLeaveEnd:g},y=>{let{className:E,style:Pe}=y;return i.createElement("div",Object.assign({ref:Be,"data-show":!k,className:N()(He,E),style:Object.assign(Object.assign(Object.assign({},f==null?void 0:f.style),c),Pe),onMouseEnter:h,onMouseLeave:m,onClick:v,role:"alert"},Me),w?i.createElement(le,{description:e,icon:t.icon,prefixCls:u,type:L}):null,i.createElement("div",{className:`${u}-content`},a?i.createElement("div",{className:`${u}-message`},a):null,e?i.createElement("div",{className:`${u}-description`},e):null),P?i.createElement("div",{className:`${u}-action`},P):null,i.createElement(ie,{isClosable:ze,prefixCls:u,closeIcon:j||C,handleClose:Ze}))}))},ce=o(78478),de=o(92262),ue=o(73995),he=o(23296),F=o(56411),me=o(84863);function ve(t,e,s){return e=(0,F.Z)(e),(0,ue.Z)(t,(0,he.Z)()?Reflect.construct(e,s||[],(0,F.Z)(t).constructor):e.apply(t,s))}var pe=function(t){(0,me.Z)(e,t);function e(){var s;return(0,ce.Z)(this,e),s=ve(this,e,arguments),s.state={error:void 0,info:{componentStack:""}},s}return(0,de.Z)(e,[{key:"componentDidCatch",value:function(a,r){this.setState({error:a,info:r})}},{key:"render",value:function(){const{message:a,description:r,children:l}=this.props,{error:d,info:c}=this.state,h=c&&c.componentStack?c.componentStack:null,m=typeof a=="undefined"?(d||"").toString():a,v=typeof r=="undefined"?h:r;return d?i.createElement(O,{type:"error",message:m,description:i.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},v)}):l}}]),e}(i.Component);const A=O;A.ErrorBoundary=pe;var xe=A,b=o(43201),fe=o(78784),T,Z,z,H,ge=(0,fe.kc)(function(t){var e=t.token,s=t.prefixCls,a=t.css,r=function(c){return c.replace(/( |^)[a-z]/g,function(h){return h.toUpperCase()})},l=function(c){var h={background:e["color".concat(r(c),"Bg")],text:e["color".concat(r(c),"Text")]};return a(T||(T=(0,b.Z)([`
      .`,"-alert-",` {
        background: `,`;

        .`,`-alert-message {
          color: `,`;
          font-weight: bold;
        }

        .`,`-alert-description {
          .markdown {
            color: `,`;
          }
        }
      }
    `])),s,c,h.background,s,h.text,s,h.text)};return{container:a(Z||(Z=(0,b.Z)([`
      margin: 8px 0;

      `,`

      `,`

      `,`

      `,`
    `])),l("info"),l("warning"),l("success"),l("error")),alert:a(z||(z=(0,b.Z)([`
      border: none;

      .`,`-alert-message {
        font-weight: bold;
      }
    `])),s),desc:a(H||(H=(0,b.Z)([`
      p {
        margin: 0;
      }
    `])))}}),n=o(52822),je=function(e){var s=e.type,a=e.title,r=e.children,l=ge(),d=l.styles,c=l.cx;return(0,n.jsx)("div",{"data-type":s,className:d.container,children:(0,n.jsx)(xe,{showIcon:!0,type:s,message:a||s.toUpperCase(),description:(0,n.jsx)("div",{className:c(d.desc,"markdown"),children:r}),className:d.alert})})},I=je,Ce=o(6722),ye=o(74231),Ee=o(66520),$e=function(e){var s=e.children,a=e.lang,r=(0,Ee.HX)(function(l){return l.siteData.themeConfig.syntaxTheme});return(0,n.jsx)(Ce.f,{children:(0,n.jsx)(ye.oP,{syntaxThemes:r,language:a,children:s})})},S=$e,Xe=o(77987),Ge=o(39738),M=o(54647);function be(){var t=(0,M.eL)(),e=t.texts;return(0,n.jsx)(M.dY,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"\u5F00\u59CB",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5F00\u59CB",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u5F00\u59CB"]}),(0,n.jsx)("p",{children:e[0].value}),(0,n.jsxs)("h2",{id:"\u524D\u8A00",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u524D\u8A00",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u524D\u8A00"]})]}),(0,n.jsx)(I,{type:"info",title:"\u5173\u4E8E\u7EC4\u4EF6",children:(0,n.jsxs)("p",{children:[e[1].value,(0,n.jsx)("code",{children:e[2].value}),e[3].value,(0,n.jsx)("a",{href:"https://github.com/anyone-yuren/react-antd-admin-pnpm/tree/master/packages/gbeata",children:e[4].value}),e[5].value]})}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u73AF\u5883\u51C6\u5907",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u73AF\u5883\u51C6\u5907",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u73AF\u5883\u51C6\u5907"]}),(0,n.jsxs)("p",{children:[e[6].value,(0,n.jsx)("a",{href:"https://pnpm.io/",children:e[7].value}),e[8].value,(0,n.jsx)("a",{href:"http://nodejs.org/",children:e[9].value}),e[10].value,(0,n.jsx)("a",{href:"https://git-scm.com/",children:e[11].value})]})]}),(0,n.jsx)(I,{type:"warning",title:"\u6CE8\u610F",children:(0,n.jsxs)("p",{children:[e[12].value,(0,n.jsx)("a",{href:"https://pnpm.io/",children:e[13].value}),e[14].value,(0,n.jsx)("a",{href:"http://nodejs.org/",children:e[15].value}),e[16].value,(0,n.jsx)("code",{children:e[17].value}),e[18].value,(0,n.jsx)("code",{children:e[19].value}),e[20].value,(0,n.jsx)("a",{href:"https://github.com/nvm-sh/nvm/tree/master",children:e[21].value}),e[22].value,(0,n.jsx)("code",{children:e[23].value}),e[24].value]})}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u5DE5\u5177\u914D\u7F6E",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5DE5\u5177\u914D\u7F6E",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u5DE5\u5177\u914D\u7F6E"]}),(0,n.jsxs)("p",{children:[e[25].value,(0,n.jsx)("a",{href:"https://code.visualstudio.com/",children:e[26].value}),e[27].value]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:[(0,n.jsx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=antfu.iconify",children:e[28].value}),e[29].value]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:[(0,n.jsx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally",children:e[30].value}),e[31].value]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:[(0,n.jsx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",children:e[32].value}),e[33].value]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:[(0,n.jsx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",children:e[34].value}),e[35].value]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:[(0,n.jsx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint",children:e[36].value}),e[37].value]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:[(0,n.jsx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv",children:e[38].value}),e[39].value]})})]}),(0,n.jsxs)("p",{children:[e[40].value,(0,n.jsx)("code",{children:e[41].value}),e[42].value,(0,n.jsx)("code",{children:e[43].value}),e[44].value]}),(0,n.jsxs)("h2",{id:"\u4EE3\u7801\u83B7\u53D6",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u83B7\u53D6",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u83B7\u53D6"]}),(0,n.jsx)(S,{lang:"bash",children:e[45].value}),(0,n.jsxs)("h3",{id:"\u5B89\u88C5\u4F9D\u8D56",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5B89\u88C5\u4F9D\u8D56",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u5B89\u88C5\u4F9D\u8D56"]}),(0,n.jsxs)("h4",{id:"pnpm-\u5B89\u88C5",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#pnpm-\u5B89\u88C5",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"pnpm \u5B89\u88C5"]}),(0,n.jsxs)("p",{children:[e[46].value,(0,n.jsx)("a",{href:"https://pnpm.io/",children:e[47].value}),e[48].value]}),(0,n.jsxs)("p",{children:[e[49].value,(0,n.jsx)("code",{children:e[50].value}),e[51].value]}),(0,n.jsx)(S,{lang:"bash",children:e[52].value}),(0,n.jsxs)("h4",{id:"\u4F9D\u8D56\u5B89\u88C5\u547D\u4EE4",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F9D\u8D56\u5B89\u88C5\u547D\u4EE4",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4F9D\u8D56\u5B89\u88C5\u547D\u4EE4"]}),(0,n.jsx)("p",{children:e[53].value}),(0,n.jsx)(S,{lang:"bash",children:e[54].value})]}),(0,n.jsx)(I,{type:"warning",children:(0,n.jsxs)("p",{children:[e[55].value,(0,n.jsx)("code",{children:e[56].value}),e[57].value,(0,n.jsx)("code",{children:e[58].value}),e[59].value,(0,n.jsx)("code",{children:e[60].value}),e[61].value,(0,n.jsx)("code",{children:e[62].value}),e[63].value]})}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h3",{id:"\u542F\u52A8\u9879\u76EE",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u542F\u52A8\u9879\u76EE",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u542F\u52A8\u9879\u76EE"]}),(0,n.jsx)("p",{children:e[64].value}),(0,n.jsx)(S,{lang:"bash",children:e[65].value})]})]})})}var Se=be}}]);
