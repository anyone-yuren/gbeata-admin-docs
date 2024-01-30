"use strict";(self.webpackChunk_gbeata_admin_docs=self.webpackChunk_gbeata_admin_docs||[]).push([[262],{49511:function(q,Q,t){var E=t(45332),F=t.n(E),L=t(77453),U=t(14932),M=t(51598),C=t.n(M),W=t(69341),_=t(60282),s=t(39807),K=(0,s.Ue)(function(){return{mode:"oklch"}}),A=t(52983),Z=function(a){var r=chroma(a).get("lab.l"),c=r<50?chroma(a).brighten(2):chroma(a).darken(2);return c.hex()},J=t(97458),N,O,T,w=(0,W.kc)(function(u){var a=u.css;return{title:a(N||(N=C()([`
    height: 32px;
  `]))),palette:a(O||(O=C()([`
    border-radius: 6px;
    overflow: hidden;
  `]))),color:a(T||(T=C()([`
    height: 40px;
    font-family: Monaco, Consolas, 'Courier New', monospace;
  `])))}}),B=function(a){var r=a.color,c=a.index,j=w(),y=j.styles,b=useStore(),f=b.mode,i=useMemo(function(){var n=function(v){return isNaN(v)?"/":v.toFixed(0)};switch(f){case"hex":return r;case"oklch":var e=chroma(r).oklch(),d=_slicedToArray(e,3),m=d[0],o=d[1],g=d[2];return"".concat(n(m*100),",").concat(n(o*100),",").concat(n(g));case"hsl":var x=chroma(r).hsl();return"".concat(n(x[0]),",").concat(n(x[1]*100),"%,").concat(n(x[2]*100),"%");case"hsv":var p=chroma(r).hsv();return"".concat(n(p[0]),",").concat(n(p[1]*100),"%,").concat(n(p[2]*100),"%")}},[f,r]);return _jsxs(Flexbox,{horizontal:!0,align:"center",gap:24,distribution:"space-between",style:{background:r,color:invertColor(r)},className:y.color,width:160,children:[_jsx(Flexbox,{style:{paddingLeft:8},children:c}),_jsx(Flexbox,{style:{paddingRight:12},children:i})]})},V=function(a){var r=a.palette,c=w(),j=c.styles;return _jsx(Flexbox,{horizontal:!0,gap:12,children:r.map(function(y){return _jsxs(Flexbox,{width:160,align:"center",children:[_jsx("div",{className:j.title,style:{color:y.colors[6]},children:y.key}),_jsx(Flexbox,{className:j.palette,children:y.colors.map(function(b,f){return _jsx(B,{index:f,color:b},b)})})]},y.key)})})},X=null,I=Object.entries(U.F).map(function(u){var a=F()(u,2),r=a[0],c=a[1];return{key:r,colors:c}}),G=Object.entries(L.F).map(function(u){var a=F()(u,2),r=a[0],c=a[1];return{key:r,colors:c}}),l=function(){var u=useStore(),a=u.mode;return _jsxs(Flexbox,{children:[_jsxs(Flexbox,{align:"center",horizontal:!0,gap:12,style:{marginBottom:8,alignSelf:"end"},children:["\u8272\u5F69\u6A21\u578B",_jsx(Radio.Group,{value:a,options:[{label:"OKLCH",value:"oklch"},{label:"HEX",value:"hex"},{label:"HSL",value:"hsl"},{label:"HSV",value:"hsv"}],onChange:function(c){useStore.setState({mode:c.target.value})}})]}),_jsx(Center,{padding:24,style:{background:"#fafafa"},children:_jsx(ColorPalette,{palette:I})}),_jsx(Center,{padding:24,style:{background:"#000"},children:_jsx(ColorPalette,{palette:G})})]})}},27180:function(q,Q,t){var E=t(57711),F=t(97458),L=function(){return _jsx(Features,{items:[{title:"\u73B0\u4EE3\u5316\u4E3B\u9898\u98CE\u683C",image:"\u{1F4A0}",description:"\u57FA\u4E8E\u8FD1\u5E74\u6D41\u884C\u7684\u98CE\u683C\u8D8B\u52BF\u7814\u7A76\uFF0C\u672C\u4E3B\u9898\u5305\u91C7\u7528\u4E86\u6D41\u52A8\u8272\u3001\u6BDB\u73BB\u7483\u3001\u5149\u5F71\u8D28\u611F\u3001\u81EA\u7136\u52A8\u6548\u7B49\u73B0\u4EE3\u5316\u7684\u8BBE\u8BA1\u8868\u73B0\u624B\u6CD5\uFF0C\u5C06\u754C\u9762\u4EE5\u66F4\u52A0\u7B80\u7EA6\u3001\u7F8E\u89C2\u7684\u65B9\u5F0F\u5448\u73B0\uFF0C\u4F7F\u5F97\u6587\u6863\u66F4\u52A0\u76F4\u89C2\u3001\u6613\u8BFB\u3001\u6613\u7528"},{title:"\u4EAE\u6697\u8272\u4E3B\u9898\u6A21\u5F0F\u4E00\u952E\u5207\u6362",link:"/guide/theme",description:"\u672C\u6587\u6863\u57FA\u4E8E antd v5 \u81EA\u5B9A\u4E49\u4E86\u4EAE\u8272\u4E0E\u6697\u8272\u4E3B\u9898\u7B97\u6CD5\uFF0C\u9ED8\u8BA4\u63D0\u4F9B\u7F8E\u89C2\u6613\u7528\u7684\u4EAE\u6697\u8272\u4E3B\u9898\u3002\u7528\u6237\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u559C\u597D\u9009\u62E9\u4E3B\u9898\u6A21\u5F0F\uFF0C\u5728\u4E0D\u540C\u7684\u5149\u7EBF\u73AF\u5883\u4E0B\u90FD\u80FD\u83B7\u5F97\u826F\u597D\u7684\u9605\u8BFB\u4F53\u9A8C\u3002",image:"https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*8KE7T7l39J0AAAAAAAAAAAAADoN6AQ/original",imageType:"primary"},{title:"\u57FA\u4E8E Ant Design \u4E0E CSSinJS",description:"\u672C\u4E3B\u9898\u5305\u4F7F\u7528 antd \u4F5C\u4E3A\u57FA\u7840\u7EC4\u4EF6\u5E93\uFF0C\u5E76\u4F7F\u7528\u4E86 CSSinJS \u5B9E\u73B0\u6837\u5F0F\u65B9\u6848\uFF0C\u5E2E\u52A9\u66F4\u597D\u5730\u63A7\u5236\u6837\u5F0F\u7684\u7EC6\u8282\uFF0C\u63D0\u9AD8\u6837\u5F0F\u7684\u590D\u7528\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u3002\u5E95\u5C42\u4F7F\u7528\u4E86 antd-style \u6837\u5F0F\u5E93\uFF0C\u5728\u4E66\u5199\u6837\u5F0F\u4E0A\u66F4\u52A0\u7075\u6D3B\u3001\u53EF\u8BFB\u3001\u6613\u4E8E\u7EF4\u62A4\u3002<quotient>\u672C\u4E3B\u9898\u5305\u7B97\u662F\u5F00\u53D1 antd-style \u65F6\u7684\u4E00\u4E2A\u526F\u4EA7\u7269</quotient>",link:"/guide/style",imageType:"light",image:"https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png",row:9},{title:"\u7CBE\u7F8E\u7684\u8BED\u6CD5\u9AD8\u4EAE",description:"\u672C\u4E3B\u9898\u5305\u63D0\u4F9B\u51C6\u786E\u3001\u7CBE\u7F8E\u7684\u8BED\u6CD5\u9AD8\u4EAE\u7279\u6027\u3002\u5E95\u5C42\u91C7\u7528\u4E86\u73B0\u4EE3\u5316\u7684\u8BED\u6CD5\u9AD8\u4EAE\u5E93 Shiki \u4E0E Prism\uFF0C\u5E76\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u4EE3\u7801\u9AD8\u4EAE\u65B9\u6848\uFF0C\u5E2E\u52A9\u7528\u6237\u66F4\u597D\u5730\u9605\u8BFB\u4EE3\u7801",link:"/guide/syntax-highlighter",image:"https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*9iAFQaSgf8sAAAAAAAAAAAAADoN6AQ/original",imageType:"primary",row:8},{title:"\u7EC4\u4EF6\u7075\u6D3B\u590D\u7528",description:"\u672C\u4E3B\u9898\u5305\u4E3A\u672C\u5730\u4E3B\u9898\u5B9A\u5236\u63D0\u4F9B\u4E86\u5F88\u9AD8\u7684\u7075\u6D3B\u5EA6\uFF0C\u9ED8\u8BA4\u5BFC\u51FA\u4E86\u4E3B\u9898\u5305\u4E2D\u7684\u7CBE\u54C1\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5C06\u7EC4\u4EF6\u4F5C\u4E3A\u72EC\u7ACB\u7684\u6A21\u5757\u8FDB\u884C\u590D\u7528\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u5728 dumi \u672C\u5730\u4E3B\u9898\u5305\u4E2D\u81EA\u7531\u7EC4\u5408\u4F7F\u7528",image:"https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*6sjjRa7lLhAAAAAAAAAAAAAADoN6AQ/original",imageType:"primary",link:"/components",row:8,hero:!0},{title:"\u79FB\u52A8\u7AEF\u9002\u914D\u826F\u597D",description:"\u672C\u4E3B\u9898\u5305\u5BF9\u79FB\u52A8\u7AEF\u9002\u914D\u826F\u597D\uFF0C\u57FA\u4E8E CSSinJS \u7684\u7075\u6D3B\u6837\u5F0F\u65B9\u6848\uFF0C\u591A\u5957\u5E03\u5C40\u5B9E\u73B0\u8F7B\u800C\u6613\u4E3E\u3002\u7528\u6237\u591A\u7AEF\u64CD\u4F5C\u4F53\u9A8C\u4E00\u81F4\u4E14\u987A\u6ED1",image:"\u{1F4F1}",imageType:"light",row:6}]})}},57711:function(q,Q,t){t.d(Q,{Z:function(){return f}});var E=t(73193),F=t.n(E),L=t(2689),U=t(54920),M=t(95545),C=t(15188),W=t(46826),_=t(51598),s=t.n(_),K=t(69341),A=t(81754),Z,J,N,O,T,w,B,V,X,I,G=(0,K.kc)(function(i,n){var e=i.token,d=i.prefixCls,m=i.responsive,o=i.css,g=i.stylish,x=i.isDarkMode,p=i.cx,z=n.rowNum,v=n.hasLink,S="".concat(d,"-features"),H="".concat(S,"-cover"),P="".concat(S,"-description"),D="".concat(S,"-title"),h="".concat(S,"-img"),$=20,R=function(Y){return o(Z||(Z=s()([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),Y,Y,Y*(22/24))},k=o(J||(J=s()([`
      transition: all `," ",`;
    `])),e.motionDurationSlow,e.motionEaseInOutCirc);return{cell:o(N||(N=s()([`
        overflow: hidden;
      `]))),container:o(O||(O=s()([`
        `,`;

        z-index: 1;
        padding: 24px;
        border-radius: 24px;

        background: linear-gradient(
          135deg,
          `,`,
          `,`
        );

        position: relative;

        &:hover {
          scale: 1.03;

          background: linear-gradient(
            135deg,
            `,`,
            `,`
          );

          box-shadow: inset 0 0 0 1px `,`,
            `,`;

          .`,` {
            height: `,`px;
            width: 100%;
            padding: 0;
          }

          .`,` {
            `,`;
          }

          .`,` {
            // position: absolute;
            // visibility: hidden;
            // opacity: 0;
          }

          .`,` {
            font-size: `,`px;
          }
        }
      `])),k,e.colorFillContent,e.colorFillQuaternary,(0,A.$n)(.5,e.colorFillContent),(0,A.$n)(.5,e.colorFillQuaternary),e.colorBorder,e.boxShadowSecondary,H,$*z,h,R(100),P,D,v?14:18),title:p(D,k,o(T||(T=s()([`
          pointer-events: none;
          font-size: 20px;
          line-height: `,`;
          margin: 16px 0;
          color: `,`;
        `])),e.lineHeightHeading3,e.colorText)),desc:p(P,k,o(w||(w=s()([`
          color: `,`;

          pointer-events: none;
          quotient {
            color: `,`;
            display: block;
            margin: 12px 0;
            padding-left: 12px;
            position: relative;
            &:before {
              position: absolute;
              content: '';
              left: 0;
              display: block;
              border-radius: 2px;
              width: 4px;
              height: 100%;
              background: `,`;
            }
          }
        `])),e.colorTextSecondary,e.colorTextDescription,x?e.colorPrimary:e.colorPrimaryBgHover)),imgContainer:p(H,k,o(B||(B=s()([`
          background: `,`;
          border-radius: 8px;
          opacity: 0.8;

          `,`;
          padding: 4px;

          &[image-style='primary'] {
            background: linear-gradient(
              135deg,
              `,`,
              `,`
            );
          }

          &[image-style='light'] {
            background: `,`;
          }

          &[image-style='soon'] {
            opacity: 0.5;
            background: linear-gradient(
              135deg,
              `,`,
              `,` 50%,
              `,`
            );
          }
        `])),e.colorFillContent,R(24),e.gradientColor1,e.gradientColor2,e.colorBgContainer,(0,A.m4)(e.gradientColor2,.3),(0,A.m4)(e.gradientColor2,.3),(0,A.m4)(e.gradientColor1,.3))),img:p(h,k,o(V||(V=s()([`
          `,`;
          color: `,`;
        `])),R(20),e.colorWhite)),link:o(X||(X=s()([`
        `,`;

        margin-top: 24px;

        a {
          `,`;

          color: `,`;
          &:hover {
            color: `,`;
          }
        }
      `])),k,g.resetLinkColor,e.colorTextDescription,e.colorPrimaryHover),blur:o(I||(I=s()([`
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        `,`;
        scale: 2;
        opacity: `,`;
        `,` {
          display: none;
        }
      `])),g.heroBlurBall,x?.05:.08,m.mobile)}}),l=t(97458),u=function(n){var e=n.image,d=n.className,m=n.title,o=/(\.png|\.jpg|\.jpeg|\.gif|\.svg|\.webp)$/;return e.startsWith("http")||o.test(e)?(0,l.jsx)("img",{className:d,src:e,alt:m}):(0,l.jsx)(C.Z,{className:d,children:e})},a=function(n){var e=n.imageType,d=n.row,m=n.column,o=n.hero,g=n.description,x=n.image,p=n.title,z=n.emoji,v=n.link,S=n.imageStyle,H=n.openExternal,P=d||7,D=G({rowNum:P,hasLink:!!v}),h=D.styles,$=D.theme;return(0,l.jsxs)("div",{className:h.container,style:{gridRow:"span ".concat(P),gridColumn:"span ".concat(m||1),cursor:v?"pointer":"default"},onClick:function(){v&&(H?window.open(v):M.m8.push(v))},children:[(0,l.jsxs)("div",{className:h.cell,children:[x&&(0,l.jsx)(C.Z,{"image-style":e,className:h.imgContainer,style:S,children:(0,l.jsx)(u,{className:h.img,image:x,title:p})}),p&&(0,l.jsxs)(W.D,{as:"h3",horizontal:!0,gap:8,align:"center",className:h.title,children:[p," ",z,e==="soon"?(0,l.jsx)(U.Z,{color:$.isDarkMode?"pink-inverse":"cyan-inverse",children:"SOON"}):null]}),g&&(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:g},className:h.desc}),v&&(0,l.jsx)("div",{className:h.link,children:(0,l.jsxs)(M.rU,{to:v,children:["\u7ACB\u5373\u4E86\u89E3 ",(0,l.jsx)(L.Z,{})]})})]}),o&&(0,l.jsx)("div",{className:h.blur})]})},r=a,c,j,y=(0,K.kc)(function(i){var n=i.token,e=i.prefixCls,d=i.responsive,m=i.css,o=i.cx,g="".concat(e,"-features");return{container:o(g,m(c||(c=s()([`
        max-width: `,`px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: row dense;
        grid-auto-rows: 24px;
        gap: 16px;

        `,`
      `])),n.contentMaxWidth,d({mobile:m(j||(j=s()([`
            flex-direction: column;
            display: flex;
          `]))),laptop:{gridTemplateColumns:"repeat(2, 1fr)"}})))}}),b=function(n){var e=n.items,d=n.style,m=y(),o=m.styles;return e!=null&&e.length?(0,l.jsx)("div",{className:o.container,style:d,children:e.map(function(g){return(0,l.jsx)(r,F()({},g),g.title)})}):null},f=b}}]);
