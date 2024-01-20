(self.webpackChunk_gbeata_admin_docs=self.webpackChunk_gbeata_admin_docs||[]).push([[367],{95936:function(Ye,rn,l){"use strict";l.d(rn,{Z:function(){return _}});var on=l(10864),h=l.n(on),yn=l(89712),O=l(37057),p=l(30025),an=l(10525),jn=l(504),kn=l(28322),T=l.n(kn),Q=l(78784),U=l(82733),sn,ln,W,cn,dn,un,q,pn,mn,hn,P=(0,Q.kc)(function(d,j){var m=d.token,z=d.prefixCls,c=d.responsive,x=d.css,N=d.stylish,I=d.isDarkMode,F=d.cx,L=j.rowNum,nn=j.hasLink,n="".concat(z,"-features"),K="".concat(n,"-cover"),E="".concat(n,"-description"),B="".concat(n,"-title"),Y="".concat(n,"-img"),en=20,tn=function($){return x(sn||(sn=T()([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),$,$,$*(22/24))},X=x(ln||(ln=T()([`
      transition: all `," ",`;
    `])),m.motionDurationSlow,m.motionEaseInOutCirc);return{cell:x(W||(W=T()([`
        overflow: hidden;
      `]))),container:x(cn||(cn=T()([`
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

          box-shadow: inset 0 0 0 1px `,", ",`;

          .`,` {
            height: `,`px;
            width: 100%;
            padding: 0;
          }

          .`,` {
            `,`;
          }

          .`,` {
            position: absolute;
            visibility: hidden;
            opacity: 0;
          }

          .`,` {
            font-size: `,`px;
          }
        }
      `])),X,m.colorFillContent,m.colorFillQuaternary,(0,U.$n)(.5,m.colorFillContent),(0,U.$n)(.5,m.colorFillQuaternary),m.colorBorder,m.boxShadowSecondary,K,en*L,Y,tn(100),E,B,nn?14:20),title:F(B,X,x(dn||(dn=T()([`
          pointer-events: none;
          font-size: 20px;
          line-height: `,`;
          margin: 16px 0;
          color: `,`;
        `])),m.lineHeightHeading3,m.colorText)),desc:F(E,X,x(un||(un=T()([`
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
        `])),m.colorTextSecondary,m.colorTextDescription,I?m.colorPrimary:m.colorPrimaryBgHover)),imgContainer:F(K,X,x(q||(q=T()([`
          background: `,`;
          border-radius: 8px;
          opacity: 0.8;

          `,`;
          padding: 4px;

          &[image-style='primary'] {
            background: linear-gradient(135deg, `,", ",`);
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
        `])),m.colorFillContent,tn(24),m.gradientColor1,m.gradientColor2,m.colorBgContainer,(0,U.m4)(m.gradientColor2,.3),(0,U.m4)(m.gradientColor2,.3),(0,U.m4)(m.gradientColor1,.3))),img:F(Y,X,x(pn||(pn=T()([`
          `,`;
          color: `,`;
        `])),tn(20),m.colorWhite)),link:x(mn||(mn=T()([`
        `,`;

        margin-top: 24px;

        a {
          `,`;

          color: `,`;
          &:hover {
            color: `,`;
          }
        }
      `])),X,N.resetLinkColor,m.colorTextDescription,m.colorPrimaryHover),blur:x(hn||(hn=T()([`
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
      `])),N.heroBlurBall,I?.05:.08,c.mobile)}}),C=l(52822),Sn=function(j){var m=j.image,z=j.className,c=j.title,x=/(\.png|\.jpg|\.jpeg|\.gif|\.svg|\.webp)$/;return m.startsWith("http")||x.test(m)?(0,C.jsx)("img",{className:z,src:m,alt:c}):(0,C.jsx)(an.Z,{className:z,children:m})},wn=function(j){var m=j.imageType,z=j.row,c=j.column,x=j.hero,N=j.description,I=j.image,F=j.title,L=j.link,nn=j.imageStyle,n=j.openExternal,K=z||7,E=P({rowNum:K,hasLink:!!L}),B=E.styles,Y=E.theme;return(0,C.jsxs)("div",{className:B.container,style:{gridRow:"span ".concat(K),gridColumn:"span ".concat(c||1),cursor:L?"pointer":"default"},onClick:function(){L&&(n?window.open(L):p.m8.push(L))},children:[(0,C.jsxs)("div",{className:B.cell,children:[I&&(0,C.jsx)(an.Z,{"image-style":m,className:B.imgContainer,style:nn,children:(0,C.jsx)(Sn,{className:B.img,image:I,title:F})}),F&&(0,C.jsxs)(jn.D,{as:"h3",horizontal:!0,gap:8,align:"center",className:B.title,children:[F,m==="soon"?(0,C.jsx)(O.Z,{color:Y.isDarkMode?"pink-inverse":"cyan-inverse",children:"SOON"}):null]}),N&&(0,C.jsx)("p",{dangerouslySetInnerHTML:{__html:N},className:B.desc}),L&&(0,C.jsx)("div",{className:B.link,children:(0,C.jsxs)(p.rU,{to:L,children:["\u7ACB\u5373\u4E86\u89E3 ",(0,C.jsx)(yn.Z,{})]})})]}),x&&(0,C.jsx)("div",{className:B.blur})]})},Z=wn,f,G,Cn=(0,Q.kc)(function(d){var j=d.token,m=d.prefixCls,z=d.responsive,c=d.css,x=d.cx,N="".concat(m,"-features");return{container:x(N,c(f||(f=T()([`
        max-width: `,`px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: row dense;
        grid-auto-rows: 24px;
        gap: 16px;

        `,`
      `])),j.contentMaxWidth,z({mobile:c(G||(G=T()([`
            flex-direction: column;
            display: flex;
          `]))),laptop:{gridTemplateColumns:"repeat(2, 1fr)"}})))}}),Hn=function(j){var m=j.items,z=j.style,c=Cn(),x=c.styles;return m!=null&&m.length?(0,C.jsx)("div",{className:x.container,style:z,children:m.map(function(N){return(0,C.jsx)(Z,h()({},N),N.title)})}):null},_=Hn},4959:function(Ye,rn,l){"use strict";l.r(rn),l.d(rn,{default:function(){return kr}});var on=l(1383),h=l(30025),yn=l(65414),O=l.n(yn),p=l(53585),an=l(78290),jn=l(33397),kn=l.n(jn),T=l(52323),Q=l.n(T),U=l(65106),sn=l.n(U),ln=l(58642),W=l(44880),cn=["setLoading"],dn=["setLoading"],un=typeof window!="undefined",q={},pn=function(e,t){(0,p.useEffect)(function(){p.startTransition(function(){e()})},t)},mn=function(e,t){(0,ln.Z)(function(){e()},t,{wait:32,maxWait:96})},hn=typeof p.startTransition=="function"?pn:mn,P=function(e,t,r){var a=(0,W.AC)(),s=r||function(i,u){return a.setState(sn()({},i,u))};!un&&!q[e]&&(s(e,t),q[e]=!0),hn(function(){s(e,t)},[t])},C={"zh-CN":"\u9996\u9875","en-US":"Home"},Sn=function(e){return{title:C[e],link:"/",activePath:"/"}},wn=(0,p.memo)(function(){var o=(0,h.WF)(),e=(0,h.tx)(),t=(0,h.eL)(),r=(0,h.zh)(),a=(0,h.OK)(),s=(0,h.TH)(),i=(0,h.bU)(),u=(0,W.AC)();return P("siteData",o,function(){var v=o.setLoading,g=Q()(o,cn),y=u.getState(),S=y.siteData,b=S.setLoading,w=Q()(S,dn);O()(g,w)||u.setState({siteData:o})}),P("sidebar",e),P("routeMeta",t),P("location",s),P("tabMeta",r),P("locale",i),P("navData",a,function(){var v=o.themeConfig.hideHomeNav?a:[Sn(i.id)].concat(kn()(a));u.setState({navData:v})}),null}),Z=l(29660),f=l(504),G=l(10525),Cn=l(39360),Hn=l(10864),_=l.n(Hn),d=l(33306),j=l(85469),m=l(89712),z=l(28322),c=l.n(z),x=l(78784),N,I,F,L,nn=(0,x.kc)(function(o){var e=o.token,t=o.css;return{container:t(N||(N=c()([`
    background: `,`;
    padding: 16px 24px;
    border-radius: 8px;
    cursor: pointer;

    min-width: 250px;
    &:hover {
      background: `,`;
    }
  `])),e.colorBgContainer,e.colorFillTertiary),nav:t(I||(I=c()([`
    color: `,`;
    font-size: 12px;
  `])),e.colorTextTertiary),title:t(F||(F=c()([`
    font-size: 16px;
  `]))),alignmentEnd:t(L||(L=c()([`
    justify-content: flex-end;
  `])))}}),n=l(52822),K=function(e){var t=e.title,r=e.link,a=e.type,s=nn(),i=s.styles,u=s.cx,v=(0,h.YB)(),g=(0,p.useMemo)(function(){switch(a){case"prev":return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j.Z,{})," ",v.formatMessage({id:"content.footer.actions.previous"})]});case"next":return(0,n.jsxs)(n.Fragment,{children:[v.formatMessage({id:"content.footer.actions.next"})," ",(0,n.jsx)(m.Z,{})]})}},[a]);return(0,n.jsx)(h.rU,{to:r,children:(0,n.jsxs)(f.D,{className:i.container,gap:8,children:[(0,n.jsx)(f.D,{horizontal:!0,gap:4,className:u(i.nav,a==="next"&&i.alignmentEnd),children:g}),(0,n.jsx)(f.D,{horizontal:!0,className:u(i.title,a==="next"&&i.alignmentEnd),children:t})]})})},E=(0,p.memo)(K),B=function(){var e=(0,d.HX)(d.e9,O()),t=e.prev,r=e.next,a=(0,Z.F)(),s=a.mobile;return(0,n.jsxs)(f.D,{horizontal:!s,gap:s?12:0,distribution:"space-between",style:{margin:s?12:0},children:[t?(0,n.jsx)(E,_()({type:"prev"},t)):(0,n.jsx)("div",{}),r?(0,n.jsx)(E,_()({type:"next"},r)):(0,n.jsx)("div",{})]})},Y=(0,p.memo)(B),en,tn=(0,x.kc)(function(o){var e=o.token,t=o.responsive,r=o.isDarkMode,a=o.css;return{content:a(en||(en=c()([`
    min-height: 400px;
    flex: 1;
    width: 100%;
    box-sizing: border-box;

    padding: 24px 48px;
    border-radius: 10px;
    background-color: `,`;
    box-shadow: `,`;

    &:has([data-page-tabs='true']) {
      padding-top: 8px;
    }

    `,` {
      padding: 8px 16px;
      border-radius: 0;
    }

    .markdown {
      color: `,`;

      h1,
      h2,
      h3 {
        color: `,`;
      }
      p {
        line-height: 1.8;
      }

      // hyperlink
      a {
        color: `,`;

        &:hover {
          color: `,`;
        }

        &:active {
          color: `,`;
        }
      }

      img {
        max-width: 100%;

        opacity: `,`;
      }

      > [data-code-type='highlighter'] {
        pre {
          margin: 8px 0 !important;
        }
      }
      // inline code
      > :not([data-code-type='highlighter']) code {
        padding: 2px 6px;

        //FIXME: \u7B49\u4E0B\u4E00\u7248 token \u4F18\u5316\u5347\u7EA7
        color: `,`;
        background: `,`;
        border-radius: 4px;
      }

      // pre tag
      pre {
        font-size: 14px;
        padding-left: 24px;
        padding-right: 24px;
      }

      // table
      table {
        width: 100%;
        border-spacing: 1px;
      }

      th {
        background: `,`;
      }

      tr {
      }
      th,
      td {
        padding-block-start: 10px;
        padding-block-end: 10px;
        padding-inline-start: 16px;
        padding-inline-end: 16px;
        border-bottom: 1px solid `,`;
      }

      // blockquote
      blockquote {
        font-style: italic;

        margin: 16px 0;
        padding: 0 12px;
        color: `,`;
        border-left: 3px solid `,`;
      }

      // list
      ul li {
        line-height: 1.8;
      }

      // anchor of headings
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          margin-inline-start: -24px;
          color: `,`;
          // hide phantom blank node
          font-size: 0;
          text-align: right;
          line-height: inherit;

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            content: '#';
            color: `,`;
            font-size: 20px;
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    }
  `])),e.colorBgContainer,e.boxShadowTertiary,t.mobile,r?e.colorTextSecondary:e.colorText,e.colorText,e.colorLink,e.colorLinkHover,e.colorLinkActive,r?.8:1,r?e["cyan-7"]:e.colorPrimaryText,r?e["cyan-1"]:e.colorPrimaryBg,e.colorFillTertiary,e.colorBorderSecondary,e.colorTextDescription,e.colorBorder,e.colorText,e.colorTextTertiary)}}),X=function(e){var t=e.children,r=(0,d.HX)(function(g){return g.siteData.loading}),a=tn(),s=a.styles,i=a.cx,u=(0,Z.F)(),v=u.mobile;return(0,n.jsxs)(f.D,{width:"100%",gap:v?0:24,children:[(0,n.jsxs)("div",{className:i("dumi-antd-style-content",s.content),children:[(0,n.jsx)(Cn.Z,{active:!0,paragraph:!0,loading:r}),(0,n.jsx)("div",{style:{display:r?"none":void 0},children:t})]}),(0,n.jsx)(Y,{})]})},Ln=(0,p.memo)(X),$,Fn,$e=(0,x.kc)(function(o){var e=o.css,t=o.responsive,r=o.token,a="rc-footer";return{container:e($||($=c()([`
      grid-area: footer;
      border-top: 1px solid `,`;
      color: `,`;
      text-align: center;
      align-self: stretch;

      `,` {
        border: none;
        flex-direction: column;
      }
    `])),r.colorSplit,r.colorTextDescription,t.mobile),footer:e(Fn||(Fn=c()([`
      color: `,`;
      font-size: 14px;
      line-height: 1.5;
      background-color: `,`;

      &.`,` {
        a {
          color: `,`;
          text-decoration: none;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }

      .`,` {
        &-container {
          width: 100%;
          max-width: `,`px;
          margin: auto;
          padding: 60px 0 20px;
        }

        &-columns {
          display: flex;
          justify-content: space-around;
        }

        &-column {
          //margin-bottom: 60px;

          h2 {
            position: relative;
            margin: 0 auto;
            color: `,`;
            font-weight: 500;
            font-size: 16px;
          }

          &-icon {
            position: relative;
            top: -1px;
            display: inline-block;
            width: 22px;
            text-align: center;
            vertical-align: middle;
            margin-inline-end: 0.5em;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }
        }

        &-item {
          margin: 12px 0;

          &-icon {
            position: relative;
            top: -1px;
            display: inline-block;
            width: 16px;
            text-align: center;
            vertical-align: middle;
            margin-inline-end: 0.4em;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }

          &-separator {
            margin: 0 0.3em;
          }
        }

        &-bottom {
          &-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 16px 0;
            font-size: 16px;
            line-height: 32px;
            text-align: center;
            border-top: 1px solid `,`;
          }
        }

        &-light {
          color: rgba(0, 0, 0, 0.85);
          background-color: transparent;

          h2,
          a {
            color: rgba(0, 0, 0, 0.85);
          }
        }

        &-light &-bottom-container {
          border-top-color: #e8e8e8;
        }

        &-light &-item-separator,
        &-light &-item-description {
          color: rgba(0, 0, 0, 0.45);
        }
      }

      `,` {
        .`,` {
          text-align: center;

          &-container {
            padding: 40px 0;
          }

          &-columns {
            display: block;
          }

          &-column {
            display: block;
            margin-bottom: 40px;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    `])),r.colorTextSecondary,r.colorBgLayout,a,r.colorTextTertiary,r.colorLinkHover,a,r.contentMaxWidth,r.colorText,r.colorBorderSecondary,t.mobile,a)}}),Je=function(){var e=$e(),t=e.styles,r=e.theme;return(0,n.jsx)(n.Fragment,{children:"1212"})},Mn=Je,Qe=l(1840),V=l.n(Qe),xn=l(56687),qe=l(97973);function vn(o){var e=o.pathname,t=o.current,r=o.target,a="base"in t?e.replace(t.base.replace(/\/$/,""),"")||"/":e.replace(new RegExp("".concat(t.suffix,"$")),"");return"base"in r?"".concat(r.base.replace(/\/$/,"")).concat(a).replace(/([^/])\/$/,"$1"):"".concat(a).concat(r.suffix)}var _e={"zh-CN":"\u{1F1E8}\u{1F1F3}","en-US":"\u{1F1FA}\u{1F1F8}","jp-JP":"\u{1F1EF}\u{1F1F5}","ko-KR":"\u{1F1F0}\u{1F1F7}","ru-RU":"\u{1F1F7}\u{1F1FA}","es-ES":"\u{1F1EA}\u{1F1F8}","fr-FR":"\u{1F1EB}\u{1F1F7}","de-DE":"\u{1F1E9}\u{1F1EA}","pt-BR":"\u{1F1E7}\u{1F1F7}","it-IT":"\u{1F1EE}\u{1F1F9}","tr-TR":"\u{1F1F9}\u{1F1F7}","vi-VN":"\u{1F1FB}\u{1F1F3}"},An={"zh-CN":"\u4E2D","en-US":"EN"},nt=function(e){var t=e.locale,r=e.current,a=(0,h.TH)(),s=a.pathname,i=(0,p.useState)(function(){return vn({pathname:s,current:r,target:t})}),u=V()(i,2),v=u[0],g=u[1];return(0,p.useEffect)(function(){g(vn({pathname:s,current:r,target:t}))},[s,r.id,t.id]),(0,n.jsx)(h.rU,{to:v,children:(0,n.jsx)(xn.ZP,{style:{minWidth:34,padding:0,display:"flex",alignItems:"center",justifyContent:"center"},children:An[t.id]})})},et=function(){var e=(0,d.HX)(function(r){return r.siteData.locales}),t=(0,d.HX)(function(r){return r.locale});return e.length<=1?null:e.length>2?(0,n.jsx)(qe.Z,{value:e.findIndex(function(r){return r.id===t.id}),onChange:function(a){console.log(vn({pathname:location.pathname,current:t,target:e[a]})),h.m8.push(vn({pathname:location.pathname,current:t,target:e[a]}))},options:e.map(function(r){return{value:r.id,label:An[r.id]}}),renderItem:function(a,s){return"".concat(_e[e[s].id]," ").concat(e[s].name)},style:{height:32,minWidth:32,padding:0,display:"flex",alignItems:"center",justifyContent:"center"}}):(0,n.jsx)(nt,{locale:e.find(function(r){var a=r.id;return a!==t.id}),current:t})},tt=(0,p.memo)(et),Tn=l(3991),Pn,rt=(0,x.kc)(function(o){var e=o.css,t=o.responsive,r=o.token;return e(Pn||(Pn=c()([`
    display: inline-flex;
    align-items: center;
    font-family: AliPuHui, `,`;
    color: `,`;
    font-size: 22px;
    line-height: 1;
    font-weight: 500;
    text-decoration: none;

    `,` {
      font-size: 18px;
    }

    img {
      margin-inline-end: 10px;
    }
  `])),r.fontFamily,r.colorText,t.mobile)}),ot=function(){var e=(0,d.HX)(function(u){return u.siteData.themeConfig},O()),t=(0,d.HX)(function(u){return u.locale},O()),r=(0,d.HX)(d.b8.logo,Tn.X),a=rt(),s=a.styles,i=a.cx;return e&&(0,n.jsxs)(h.rU,{className:i(s),to:"base"in t?t.base:"/",children:[!!r&&(0,n.jsx)("img",{src:r,alt:e.name,height:32}),e.name]})},Zn=(0,p.memo)(ot),at=l(57054),it=l(25577),In,En,st=(0,x.kc)(function(o){var e=o.css,t=o.responsive,r=o.token,a=o.stylish,s=o.prefixCls,i=".".concat(s,"-tabs"),u=16,v=6;return{tabs:e(In||(In=c()([`
      `,"-tab + ",`-tab {
        margin: `,`px 4px !important;
        padding: 0 12px !important;
      }

      `,`-tab {
        color: `,`;
        transition: background-color 100ms ease-out;

        &:first-child {
          margin: `,"px 4px ",`px 0;
          padding: `,`px 12px !important;
        }

        &:hover {
          color: `,` !important;
          background: `,`;
          border-radius: `,`px;
        }
      }

      `,`-nav {
        margin-bottom: 0;
      }

      `,` {
        display: none;
      }
    `])),i,i,u,i,r.colorTextSecondary,u,u,v,r.colorText,r.colorFillTertiary,r.borderRadius,i,t.mobile),link:e(En||(En=c()([`
      `,`
    `])),a.resetLinkColor)}}),lt=function(){var e=st(),t=e.styles,r=/^(\w+:)\/\/|^(mailto|tel):/,a=(0,d.HX)(function(i){return i.navData},Tn.X),s=(0,d.HX)(d.K1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(at.Z,{onChange:function(u){var v,g=(v=a.find(function(y){return y.activePath===u||y.link===u}))===null||v===void 0?void 0:v.link;!g||r.test(g)||h.m8.push(g)},activeKey:s,className:t.tabs,items:a.map(function(i){return{label:r.test(i.link||"")?(0,n.jsx)("a",{href:i.link,className:t.link,target:"_blank",rel:"noreferrer",children:i.title}):(0,n.jsx)(h.rU,{className:t.link,to:i.link,children:i.title}),key:i.activePath||i.link}})}),(0,n.jsx)(it.Z,{})]})},ct=(0,p.memo)(lt),Xn=l(55871),Rn=l(73510),Un=(0,p.forwardRef)(function(o,e){var t=(0,h.YB)(),r=(0,p.useRef)(!1),a=(0,p.useRef)(null);return(0,p.useImperativeHandle)(e,function(){return a.current}),(0,n.jsx)("input",{className:o.className,onCompositionStart:function(){return r.current=!0},onCompositionEnd:function(i){r.current=!1,o.onChange(i.currentTarget.value)},onFocus:o.onFocus,onBlur:o.onBlur,onKeyDown:function(i){["ArrowDown","ArrowUp"].includes(i.key)&&i.preventDefault(),i.key==="Escape"&&!r.current&&i.currentTarget.blur()},onChange:function(i){setTimeout(function(){r.current||o.onChange(i.target.value)},1)},placeholder:t.formatMessage({id:"header.search.placeholder"}),ref:a})}),Wn,Gn,Kn,dt=(0,x.kc)(function(o){var e=o.token,t=o.css;return{modal:t(Wn||(Wn=c()([`
      position: fixed;
      top: 0;
      inset-inline-start: 0;
      z-index: 1000;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
    `]))),mask:t(Gn||(Gn=c()([`
      background-color: `,`;
      width: 100%;
      height: 100%;
    `])),e.colorBgMask),content:t(Kn||(Kn=c()([`
      position: absolute;
      top: 60px;
      background-color: `,`;
      width: 500px;
      padding: 12px;
      box-sizing: border-box;
      box-shadow: inset 1px 1px 0 0 hsla(0deg, 0%, 100%, 50%), 0 3px 8px 0 #555a64;
      border-radius: 8px;
      max-height: calc(100% - 120px);
      display: flex;
      flex-direction: column;
    `])),e.colorBgElevated)}}),ut=function(e){var t=dt(),r=t.styles;return(0,p.useEffect)(function(){if(e.visible)document.body.style.overflow="hidden";else{var a;document.body.style.overflow="",(a=e.onClose)===null||a===void 0||a.call(e)}},[e.visible]),e.visible?(0,n.jsxs)("div",{className:r.modal,children:[(0,n.jsx)("div",{className:r.mask,onClick:e.onMaskClick}),(0,n.jsx)("div",{className:r.content,children:e.children})]}):null},Vn,Yn,$n,Jn,Qn,pt=(0,x.kc)(function(o){var e=o.token,t=o.responsive,r=o.css,a=o.cx;return{container:r(Vn||(Vn=c()([`
      position: relative;

      // TODO: support search for mobile devices
      `,` {
        display: none;
      }
    `])),t.mobile),shortcut:a("site-header-shortcut",r(Yn||(Yn=c()([`
        position: absolute;
        top: 50%;
        inset-inline-end: 11px;
        display: inline-block;
        padding: 4px 8px;
        color: `,`;
        font-size: 12px;
        line-height: 1;
        white-space: nowrap;
        background-color: `,`;
        border-radius: 11px;
        border: 1px solid `,`;
        transform: translateY(-50%);
        transition: all 0.3s;
        pointer-events: none;

        `,` {
          display: none;
        }
      `])),e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,t.mobile)),popover:r($n||($n=c()([`
      position: absolute;
      top: 100%;
      inset-inline-end: 0;
      display: flex;
      flex-direction: column;
      width: 540px;
      max-height: 460px;
      margin-top: 18px;
      background-color: `,`;
      border-radius: 8px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 20%);

      &::before {
        content: '';
        position: absolute;
        bottom: 100%;
        inset-inline-end: 100px;
        display: inline-block;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-bottom-color: #fff;
      }

      > section {
        flex: 1;
        min-height: 60px;
        overflow: auto;
        overscroll-behavior: contain;
        -webkit-overflow-scrolling: touch;
        border-radius: inherit;
      }
    `])),e.colorBgElevated),svg:a(r(Jn||(Jn=c()([`
        position: absolute;
        top: 50%;
        margin-top: 1px;
        inset-inline-start: 16px;
        width: 16px;
        color: `,`;
        transform: translateY(-50%);
      `])),e.colorTextPlaceholder)),input:r(Qn||(Qn=c()([`
      width: 280px;
      height: `,`px;
      padding: 0;
      padding-inline-start: 40px;
      padding-inline-end: 12px;
      color: `,`;
      font-size: 14px;
      border: 1px solid `,`;
      border-radius: 20px;
      box-sizing: border-box;
      outline: none;
      transition: all 0.3s;
      background-color: transparent;

      &:focus {
        border-color: `,`;
        background: `,`;

        ~ .site-header-shortcut {
          opacity: 0;
        }
      }

      &::-webkit-input-placeholder {
        color: `,`;
      }
    `])),e.controlHeightLG,e.colorTextSecondary,e.colorBorder,e.colorBorderSecondary,e.colorBgElevated,e.colorTextPlaceholder)}}),Nn,qn=/(mac|iphone|ipod|ipad)/i.test(typeof navigator!="undefined"?(Nn=navigator)===null||Nn===void 0?void 0:Nn.platform:""),mt=function(e){return["TEXTAREA","INPUT"].includes(e.tagName)||e.contentEditable==="true"},ht=function(){var e=pt(),t=e.styles,r=(0,p.useState)(!1),a=V()(r,2),s=a[0],i=a[1],u=(0,p.useRef)(null),v=(0,p.useRef)(null),g=(0,p.useState)("\u2318"),y=V()(g,2),S=y[0],b=y[1],w=(0,h.OO)(),D=w.keywords,H=w.setKeywords,k=w.result,M=w.loading,Sr=(0,p.useState)(!1),Ke=V()(Sr,2),Ve=Ke[0],gn=Ke[1];return(0,p.useEffect)(function(){qn||b("Ctrl");var A=function(R){if(((qn?R.metaKey:R.ctrlKey)&&R.key==="k"||R.key==="/"&&!mt(R.target))&&(R.preventDefault(),u.current)){var bn=u.current.getBoundingClientRect(),wr=bn.top,Cr=bn.bottom,Hr=bn.left,Tr=bn.right,Nr=wr>=0&&Hr>=0&&Cr<=window.innerHeight&&Tr<=window.innerWidth;Nr?u.current.focus():(H(""),gn(!0),setTimeout(function(){var zn;(zn=v.current)===null||zn===void 0||zn.focus()}))}R.key==="Escape"&&(R.preventDefault(),gn(!1))};return document.addEventListener("keydown",A),function(){return document.removeEventListener("keydown",A)}},[]),(0,n.jsxs)("div",{className:t.container,children:[(0,n.jsx)(Xn.Z,{className:t.svg}),(0,n.jsx)(Un,{onFocus:function(){return i(!0)},onBlur:function(){setTimeout(function(){i(!1)},1)},onChange:function(fn){return H(fn)},ref:u,className:t.input}),(0,n.jsxs)("span",{className:t.shortcut,children:[S," K"]}),D.trim()&&s&&(k.length||!M)&&!Ve&&(0,n.jsx)("div",{className:t.popover,children:(0,n.jsx)("section",{children:(0,n.jsx)(Rn.Z,{data:k,loading:M})})}),(0,n.jsxs)(ut,{visible:Ve,onMaskClick:function(){gn(!1)},onClose:function(){return H("")},children:[(0,n.jsxs)("div",{style:{position:"relative"},children:[(0,n.jsx)(Xn.Z,{className:t.svg}),(0,n.jsx)(Un,{className:t.input,onFocus:function(){return i(!0)},onBlur:function(){setTimeout(function(){i(!1)},1)},onChange:function(fn){return H(fn)},ref:v})]}),(0,n.jsx)(Rn.Z,{data:k,loading:M,onItemSelect:function(){gn(!1)}})]})]})},xt=ht,vt=l(40189),gt=l(50754),ft=l(80607),J=l(82733),_n,ne,ee,te,re,oe,ae,bt=(0,x.kc)(function(o){var e=o.token,t=o.prefixCls,r=o.cx,a=o.css,s=6;return{rect:a(_n||(_n=c()([`
      background: `,`;

      width: 100%;
    `])),(0,J.m4)(e.colorBgContainer,.8)),icon:r("site-burger-icon",a(ne||(ne=c()([`
        position: relative;

        &,
        &::before,
        &::after {
          display: inline-block;
          height: 2px;
          background: `,`;

          width: 16px;

          transition: all 150ms ease;
        }

        &::before,
        &::after {
          position: absolute;
          left: 0;

          content: '';
        }

        &::before {
          top: `,`px;
        }

        &::after {
          top: -`,`px;
        }
      `])),e.colorTextSecondary,s,s)),active:a(ee||(ee=c()([`
      &::before,
      &::after {
        background: `,`;
      }
      & {
        background: transparent;
      }

      &::before {
        top: 0;
        transform: rotate(-135deg);
      }

      &::after {
        top: 0;
        transform: rotate(135deg);
      }
    `])),e.colorText),container:a(te||(te=c()([`
      width: `,`px;
      height: `,`px;
      border-radius: `,`px;
      cursor: pointer;
    `])),e.controlHeight,e.controlHeight,e.borderRadius),drawerRoot:a(re||(re=c()([`
      top: `,`px;

      :focus-visible {
        outline: none;
      }

      .`,`-drawer {
        &-mask {
          background: transparent;
          backdrop-filter: blur(7px);
          background: `,`;
        }

        &-content-wrapper {
          box-shadow: none;
        }
      }
    `])),e.headerHeight+1,t,(0,J.m4)(e.colorBgBase,.5)),drawer:a(oe||(oe=c()([`
      &.`,`-drawer-content {
        background: transparent;
      }

      .`,`-drawer-body {
        display: flex;
        flex-direction: column;
      }
    `])),t,t),menu:a(ae||(ae=c()([`
      background: transparent;
      border-inline-end: transparent !important;

      > .`,"-menu-item-only-child,.",`-menu-submenu-title {
        background: `,`;
        border-radius: 0;
        margin: 0;
        width: 100%;
        &:active {
          margin-inline: 4px;
          border-radius: `,`px;
        }
      }

      .`,"-menu-sub.",`-menu-inline {
        //background: transparent !important;
        background: `,` !important;
      }
    `])),t,t,(0,J.m4)(e.colorBgContainer,.8),e.borderRadius,t,t,(0,J.m4)(e.colorBgContainer,.2))}}),yt=function(){var e=(0,p.useState)(!1),t=V()(e,2),r=t[0],a=t[1],s=bt(),i=s.styles,u=s.cx,v=(0,d.HX)(function(b){return b.navData},O()),g=(0,d.HX)(function(b){return b.sidebar},O()),y=(0,d.HX)(d.K1),S=(0,d.HX)(function(b){return b.location.pathname});return(0,n.jsxs)(G.Z,{className:i.container,onClick:function(){a(!r)},children:[(0,n.jsx)("div",{className:u(i.icon,r?i.active:"")}),(0,n.jsxs)(vt.Z,{open:r,placement:"left",closeIcon:null,rootClassName:i.drawerRoot,className:i.drawer,width:"100vw",headerStyle:{display:"none"},bodyStyle:{padding:0},children:[(0,n.jsx)("div",{style:{height:24},className:i.rect}),(0,n.jsx)(gt.Z,{mode:"inline",selectedKeys:(0,ft.uniq)([y,"s-".concat(S)]),openKeys:[y],className:i.menu,items:v.map(function(b){return{label:(0,n.jsx)(h.rU,{to:b.link,children:b.title}),key:b.activePath||b.link,children:(b.activePath||b.link)===y&&(g==null?void 0:g.map(function(w){return!w.link&&{label:w.title,type:"group",children:w.children.map(function(D){return{label:(0,n.jsx)(h.rU,{to:D.link,onClick:function(){a(!1)},children:D.title}),key:"s-".concat(D.link)}})}}))}})}),(0,n.jsx)("div",{style:{flex:1},className:i.rect})]})]})},jt=yt,ie=l(71706),se=l(69584),kt=function(){var e=(0,d.HX)(d.BB);return e?(0,n.jsx)(se.Z,{arrow:!1,title:"Github",children:(0,n.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:(0,n.jsx)(xn.ZP,{icon:(0,n.jsx)(ie.Z,{})})})}):null},St=(0,p.memo)(kt),wt=l(81751),le=l(50786),ce,de,ue,pe,Ct=(0,x.kc)(function(o){var e=o.css,t=o.responsive,r=o.token;return{header:e(ce||(ce=c()([`
    top: 0;
    position: sticky;
    background-color: transparent;
    backdrop-filter: blur(6px);
    z-index: `,`;
    border-bottom: 1px solid `,`;

    grid-area: head;
    align-self: stretch;

    `,` {
      background: `,`;
    }
  `])),r.zIndexPopupBase-50,r.colorSplit,t.mobile,r.colorBgContainer),content:e(de||(de=c()([`
    padding: 0 24px;
    height: 64px;

    `,` {
      padding: 0 12px;
    }
  `])),t.mobile),left:e(ue||(ue=c()([""]))),right:e(pe||(pe=c()([`
    flex: 1;
    display: flex;
    justify-content: space-between;

    &-aside {
      display: flex;
      align-items: center;

      `,` {
        margin: 8px 16px;
        padding-top: 24px;
        justify-content: center;
        border-top: 1px solid `,`;
      }
    }
  `])),t.mobile,r.colorBorder)}}),me=function(){var e=(0,le.f)(function(s){return s.themeMode}),t=(0,h.OI)(),r=V()(t,3),a=r[2];return(0,p.useEffect)(function(){return a(e)},[e]),(0,n.jsx)(wt.Z,{value:e,onChange:function(i){le.f.setState({themeMode:i})}})},Ht=function(){var e=(0,W.HX)(function(i){return!!i.routeMeta.frontmatter}),t=(0,Z.F)(),r=t.mobile,a=Ct(),s=a.styles;return e?(0,n.jsx)("div",{className:s.header,children:(0,n.jsx)(f.D,{horizontal:!0,distribution:"space-between",align:"center",width:"auto",className:s.content,children:r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.D,{children:(0,n.jsx)(jt,{})}),(0,n.jsx)(f.D,{horizontal:!0,className:s.left,children:(0,n.jsx)(Zn,{})}),(0,n.jsx)(f.D,{children:(0,n.jsx)(me,{})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.D,{horizontal:!0,className:s.left,children:(0,n.jsx)(Zn,{})}),(0,n.jsx)(f.D,{style:{marginLeft:48,alignSelf:"end"},children:(0,n.jsx)(ct,{})}),(0,n.jsxs)("section",{className:s.right,children:[(0,n.jsx)("div",{}),(0,n.jsxs)(f.D,{gap:16,horizontal:!0,align:"center",className:"dumi-default-header-right-aside",children:[(0,n.jsx)(xt,{}),(0,n.jsx)(tt,{}),(0,n.jsx)(St,{}),(0,n.jsx)(me,{})]})]})]})})}):null},he=(0,p.memo)(Ht),xe,Tt=(0,x.kc)(function(o){var e=o.css,t=o.token;return{sidebar:e(xe||(xe=c()([`
    grid-area: sidebar;
    overflow: auto;
    position: sticky;
    top: `,`px;
    max-height: calc(100vh - `,`px);
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 24px;
    padding-inline: 16px;
    border-right: 1px solid `,`;

    > dl {
      margin: 0;
      padding: 0;
      line-height: 1;

      > dt {
        margin: 8px 0;
        color: `,`;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: uppercase;
      }

      > dd {
        margin: 0;
        padding: 2px 0;

        > a {
          padding: 6px 12px;
          border-radius: 6px;
          display: block;
          font-size: `,`px;
          line-height: `,`;
          text-decoration: none;
          transition: all 0.1s;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          color: `,`;

          &:hover {
            color: `,`;
            background: `,`;
          }

          &.active {
            color: `,`;
            background: `,`;

            &:hover {
              color: `,`;
              background: `,`;
            }
          }
        }
      }

      // divider line & gap
      + dl {
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px dashed `,`;
      }
    }
  `])),t.headerHeight,t.headerHeight,t.colorSplit,t.colorText,t.fontSize,t.lineHeight,t.colorTextSecondary,t.colorText,t.colorFillTertiary,t.colorPrimaryText,t.colorPrimaryBg,t.colorPrimaryTextHover,t.colorPrimaryBgHover,t.colorBorder)}}),Nt=function(){var e=(0,W.HX)(function(s){return s.sidebar},O()),t=Tt(),r=t.styles,a=!e||e.length===0;return a?null:(0,n.jsx)("div",{className:r.sidebar,children:e.map(function(s,i){return(0,n.jsxs)("dl",{children:[s.title&&(0,n.jsx)("dt",{children:s.title}),s.children.map(function(u){return(0,n.jsx)("dd",{children:(0,n.jsx)(h.OL,{to:u.link,title:u.title,end:!0,children:u.title})},u.link)})]},String(i))})})},Bt=(0,p.memo)(Nt),Dt=l(61921),Ot=l(90985),Bn=l(82055),ve=l(74278),ge=l(779),zt=l(65271),fe,be,ye,je,Lt=(0,x.kc)(function(o){var e=o.token,t=o.stylish,r=o.prefixCls,a=o.responsive,s=o.css,i=36;return{container:s(fe||(fe=c()([`
      grid-area: toc;
      position: sticky;
      top: 100px;
      width: `,`px;
      margin-inline-end: 24px;
      max-height: 80vh;
      overflow: auto;
      margin-top: 48px;
      z-index: 10;
      border-radius: 8px;

      `,` {
        z-index: 300;
        top: `,`px;
        margin-top: 0;
        width: 100%;
      }

      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;

      > h4 {
        margin: 0 0 8px;
        color: `,`;
        font-size: 12px;
        line-height: 1;
      }
    `])),e.tocWidth,a.mobile,e.headerHeight+1,e.colorTextDescription),mobileCtn:s(be||(be=c()([`
      position: sticky;
      top: `,`px;

      height: `,`px;
      width: 100%;
      z-index: 200;
      background: transparent;
      background: `,`;
    `])),e.headerHeight+1,i,(0,J.m4)(e.colorBgContainer,.8)),expand:s(ye||(ye=c()([`
      backdrop-filter: blur(6px);
      border-radius: 0;
      border-bottom: 1px solid `,`;

      box-shadow: `,`;
      width: 100%;
      z-index: 201;
      background: `,`;

      .`,`-collapse-header {
        padding: 8px 16px !important;
      }
    `])),e.colorSplit,e.boxShadowSecondary,(0,J.m4)(e.colorBgContainer,.8),r),anchor:s(je||(je=c()([`
      `,`
    `])),t.blur)}}),Ft=(0,p.memo)(function(o){var e=o.items,t=o.activeKey,r=o.onChange,a=(0,zt.Z)("",{value:t,onChange:r}),s=V()(a,2),i=s[0],u=s[1],v=Lt(),g=v.styles,y=(0,Z.F)(),S=y.mobile,b=(0,x.Fg)(),w=e.find(function(H){return H.id===i}),D=(0,p.useMemo)(function(){return e.map(function(H){var k;return{href:"#".concat(H.id),title:H.title,key:H.id,children:(k=H.children)===null||k===void 0?void 0:k.map(function(M){return{href:"#".concat(M.id),title:M==null?void 0:M.title,key:M.id}})}})},[e]);return((e==null?void 0:e.length)===0?null:S?(0,n.jsx)(Bn.ZP,{theme:{token:{fontSize:12,sizeStep:3}},children:(0,n.jsx)("div",{className:g.mobileCtn,children:(0,n.jsx)(ve.Z,{bordered:!1,ghost:!0,expandIconPosition:"end",expandIcon:function(k){var M=k.isActive;return M?(0,n.jsx)(Dt.Z,{}):(0,n.jsx)(Ot.Z,{})},className:g.expand,children:(0,n.jsx)(ve.Z.Panel,{forceRender:!0,header:w?w.title:"\u76EE\u5F55",children:(0,n.jsx)(Bn.ZP,{theme:{token:{fontSize:14,sizeStep:4}},children:(0,n.jsx)(ge.Z,{onChange:function(k){u(k.replace("#",""))},targetOffset:b.headerHeight+12,items:D})})},"toc")})})}):(0,n.jsxs)("div",{className:g.container,children:[(0,n.jsx)("h4",{children:"Table of Contents"}),(0,n.jsx)(ge.Z,{items:D,className:g.anchor,targetOffset:b.headerHeight+12})]}))||null}),Mt=Ft,At=(0,p.memo)(function(){var o=(0,d.HX)(d.TL,O());return(0,n.jsx)(Mt,{items:o})}),Pt=At,Zt=l(15814),Dn=l(90701),On=l(51798),ke=l(27136),It=l(67834),Et=l(13173),Xt=l.n(Et),Rt=l(72253),Se=l(46320),Ut=l(81055),we,Wt=(0,x.kc)(function(o){var e=o.css,t=o.token;return e(we||(we=c()([`
      cursor: pointer;
      &:hover {
        background: `,`;
        border-radius: 4px;
      }
      pre {
        background: none !important;
        padding: 2px 8px !important;
        margin: 0;
      }
      code[class*='language-'] {
        background: none !important;
      }
    `])),t.colorFillSecondary)}),Gt=function(e){var t=e.children,r=Wt(),a=r.styles,s=r.theme,i=(0,Z.F)(),u=i.mobile,v=(0,Ut.M)(),g=v.copied,y=v.setCopied;return(0,n.jsx)(se.Z,{placement:u?void 0:"right",title:g?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(It.Z,{style:{color:s.colorSuccess}})," \u590D\u5236\u6210\u529F"]}):"\u590D\u5236",children:(0,n.jsx)("div",{className:a,onClick:function(){Xt()(t),y()},children:(0,n.jsx)(Rt.oP,{background:!1,type:"prism",copyable:!1,syntaxThemes:{prism:{dark:Se.YC,light:Se.vs}},language:"js",children:t})})})},Kt=Gt,Ce,He,Te,Ne,Be,Vt=(0,x.kc)(function(o){var e=o.css,t=o.token,r=o.responsive,a=o.stylish;return{title:e(Ce||(Ce=c()([`
    font-family: monospace;
    `,` {
      margin-block: 0;
      font-size: 32px !important;
    }
  `])),r.mobile),label:e(He||(He=c()([`
    width: 80px;
  `]))),desc:e(Te||(Te=c()([`
    font-size: `,`px;
    line-height: `,`px;
  `])),t.fontSizeLG,t.lineHeightLG),text:e(Ne||(Ne=c()([`
    `,`
  `])),a.clickableText),meta:e(Be||(Be=c()([""])))}}),Yt=(0,p.memo)(function(o){var e=o.title,t=o.componentName,r=o.description,a=o.defaultImport,s=o.pkg,i=o.sourceUrl,u=o.docUrl,v=o.serviceList,g=v===void 0?[]:v,y=Vt(),S=y.styles,b=(0,Z.F)(),w=b.mobile,D=[i&&{icon:(0,n.jsx)(ie.Z,{}),children:"\u67E5\u770B\u6E90\u7801",url:i},u&&{icon:(0,n.jsx)(Zt.Z,{}),children:"\u7F16\u8F91\u6587\u6863",url:u}].filter(function(k){return k}),H=a?"import ".concat(t," from '").concat(s,"';"):"import { ".concat(t," } from '").concat(s,"';");return(0,n.jsxs)(f.D,{children:[(0,n.jsx)(Dn.Z.Title,{className:S.title,children:e}),r&&(0,n.jsx)("div",{children:(0,n.jsx)(Dn.Z.Text,{type:"secondary",className:S.desc,children:r})}),(0,n.jsxs)(f.D,{style:{marginTop:16},gap:w?16:24,children:[(0,n.jsxs)(f.D,{horizontal:!w,gap:w?12:0,children:[(0,n.jsx)(Dn.Z.Text,{className:S.label,type:"secondary",style:{display:"flex",alignItems:"center"},children:"\u5F15\u5165\u65B9\u6CD5"}),(0,n.jsx)(Kt,{children:H})]}),(0,n.jsx)(On.Z,{dashed:!0,style:{margin:"2px 0"}}),(0,n.jsxs)(f.D,{horizontal:!w,gap:w?24:0,distribution:"space-between",children:[(0,n.jsx)(ke.Z,{split:(0,n.jsx)(On.Z,{type:"vertical"}),wrap:!0,children:g.map(function(k){return(0,n.jsx)("a",{href:k.url,target:"_blank",rel:"noreferrer",title:k.label,children:(0,n.jsxs)(f.D,{horizontal:!0,align:"center",gap:8,className:S.text,children:[(0,n.jsx)(n.Fragment,{children:k.icon}),(0,n.jsx)(n.Fragment,{children:k.children})]})},k.label)})}),(0,n.jsx)(ke.Z,{split:(0,n.jsx)(On.Z,{type:"vertical"}),className:S.meta,children:D.map(function(k){return(0,n.jsx)("a",{href:k.url,target:"_blank",rel:"noreferrer",children:(0,n.jsxs)(f.D,{horizontal:!0,align:"center",gap:8,className:S.text,children:[(0,n.jsx)(n.Fragment,{children:k.icon}),(0,n.jsx)(n.Fragment,{children:k.children})]})},k.url)})})]})]})]})}),$t=(0,p.memo)(function(){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"64 64 896 896",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M503.783 64 960 263.576V761.46L521.625 955.734V473.5h-17.5v486.351l-.342.149L64 761.46V263.576L503.783 64Zm.13 19.158L84.37 273.548 512 466.131 939.386 273.66l-435.473-190.5Z"})})}),Jt=(0,p.memo)(function(){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",children:(0,n.jsx)("path",{d:"M14.051 2.751l4.935 2.85a2.144 2.144 0 013.409.4 2.146 2.146 0 01-1.354 3.151v5.699a2.132 2.132 0 011.348 3.15 2.143 2.143 0 01-3.453.353l-4.905 2.832a2.14 2.14 0 11-4.171.678c0-.205.029-.41.088-.609l-4.936-2.847a2.14 2.14 0 11-2.052-3.559l.001-5.699A2.141 2.141 0 011.604 6a2.143 2.143 0 013.407-.405l4.938-2.85A2.138 2.138 0 0112 0a2.137 2.137 0 012.051 2.751zm-.515.877a.793.793 0 01-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146a2.135 2.135 0 01-1.558-2.588l.019-.072-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852a2.136 2.136 0 01-1.461 2.645l-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838a1.748 1.748 0 01-.038-.142H5.542l-.021.083 4.939 2.852a2.126 2.126 0 011.54-.653c.627 0 1.19.269 1.583.698z"})})}),Qt=(0,p.memo)(function(){return(0,n.jsx)("svg",{width:"14px",height:"14px",viewBox:"0 0 14 14",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,n.jsx)("path",{d:"M13,0 C13.5522847,-1.01453063e-16 14,0.44771525 14,1 L14,13 C14,13.5522847 13.5522847,14 13,14 L1,14 C0.44771525,14 -4.87476137e-16,13.5522847 0,13 L0,1 C-6.76353751e-17,0.44771525 0.44771525,-4.5365845e-16 1,0 L13,0 Z M11.375,2.625 L2.625,2.625 L2.625,11.375 L7,11.375 L7,4.375 L9.625,4.375 L9.625,11.375 L11.375,11.375 L11.375,2.625 Z",fill:"#C12127"})})}),qt=(0,p.memo)(function(){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 108 108",children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"main",children:[(0,n.jsx)("stop",{offset:"0",stopColor:"#006838"}),(0,n.jsx)("stop",{offset:"1",stopColor:"#32de85"})]})}),(0,n.jsx)("path",{fill:"url(#main)",d:"M21.667 73.809V33.867l28.33-16.188 28.337 16.188V66.13L49.997 82.321 35 73.75V41.604l14.997-8.57L65 41.604v16.788l-15.003 8.571-1.663-.95v-16.67l8.382-4.792-6.719-3.838-8.33 4.763V69.88l8.33 4.762 21.67-12.383V37.737l-21.67-12.379-21.663 12.379v39.88L49.997 90 85 70V30L49.997 10 15 30v40z",transform:"matrix(1.25 0 0 1.25 -8.75 -7.5)"})]})}),_t=(0,p.memo)(function(){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",children:(0,n.jsx)("path",{d:"M16.509 16.845c.148-.507.091-.97-.155-1.315-.225-.317-.605-.5-1.062-.521l-8.659-.113a.155.155 0 01-.134-.071.194.194 0 01-.02-.155.239.239 0 01.203-.156l8.736-.113c1.034-.048 2.16-.886 2.554-1.913l.5-1.301a.28.28 0 00.013-.168 5.69 5.69 0 00-10.938-.584 2.585 2.585 0 00-1.793-.5 2.561 2.561 0 00-2.223 3.18 3.634 3.634 0 00-3.53 3.636c0 .176.013.352.034.528a.174.174 0 00.169.148h15.981a.22.22 0 00.204-.155zm2.757-5.564c-.077 0-.162 0-.24.011-.055 0-.105.042-.126.098l-.337 1.175c-.148.506-.092.97.154 1.315.226.317.605.5 1.063.52l1.843.114c.056 0 .105.026.133.07a.2.2 0 01.021.156.238.238 0 01-.204.155l-1.92.113c-1.041.049-2.16.887-2.553 1.914l-.141.358c-.028.071.02.141.098.141h6.598a.173.173 0 00.17-.125 4.81 4.81 0 00.175-1.28 4.739 4.739 0 00-4.734-4.727"})})}),nr=(0,p.memo)(function(){var o=(0,d.HX)(d.UQ),e=o.pkg,t=(0,p.useMemo)(function(){return[{label:"NPM",icon:(0,n.jsx)(Qt,{}),children:"NPM",url:"https://www.npmjs.com/package/".concat(e)},{label:"\u9884\u89C8\u4EA7\u7269",icon:(0,n.jsx)(_t,{}),children:"UNPKG",url:"https://unpkg.com/browse/".concat(e,"/")},{label:"\u67E5\u9605\u4EA7\u7269\u4F53\u79EF",icon:(0,n.jsx)($t,{}),children:"BundlePhobia",url:"https://bundlephobia.com/package/".concat(e)},{label:"\u67E5\u9605\u5B89\u88C5\u5305\u4F53\u79EF",icon:(0,n.jsx)(qt,{}),children:"PackagePhobia",url:"https://packagephobia.com/result?p=".concat(e)},{label:"\u5206\u6790\u4F9D\u8D56\u56FE",icon:(0,n.jsx)(Jt,{}),children:"Anvaka Graph",url:"https://npm.anvaka.com/#/view/2d/".concat(e)}]},[e]);return(0,n.jsx)(Yt,_()({serviceList:t},o))}),er=nr,De,Oe,ze,tr=(0,x.kc)(function(o,e){var t=o.css,r=o.cx,a=o.responsive,s=o.token,i=e.hideToc,u=e.hideSidebar;return{layout:t(De||(De=c()([`
      background-color: `,`;
      background-image: linear-gradient(
        180deg,
        `,` 0%,
        rgba(255, 255, 255, 0) 10%
      );
      display: grid;
      grid-template-columns: `,"px 1fr ",`;
      grid-template-rows: `,`px auto 1fr auto;
      grid-template-areas:
        'head head head'
        '`," title ",`'
        '`," main ",`'
        '`,` footer footer';
      min-height: 100vh;

      `,` {
        display: flex;
        flex-direction: column;
      }
    `])),s.colorBgLayout,s.colorBgContainer,s.sidebarWidth,i?"":"".concat(s.tocWidth+24,"px"),s.headerHeight,u?"title":"sidebar",i?"title":".",u?"main":"sidebar",i?"main":"toc",u?"footer":"sidebar",a.mobile),toc:t(Oe||(Oe=c()([`
      position: sticky;
      top: 100px;
      width: `,`px;
      margin-inline-end: 24px;
      max-height: 80vh;
      overflow: auto;
      margin-top: 48px;

      `,` {
        z-index: 300;
        top: `,`px;
        margin-top: 0;
        width: 100%;
      }

      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;

      > h4 {
        margin: 0 0 8px;
        color: `,`;
        font-size: 12px;
        line-height: 1;
      }
    `])),s.tocWidth,a.mobile,s.headerHeight+1,s.colorTextDescription),content:r(t(ze||(ze=c()([`
        max-width: 960px;
        width: 100%;
        margin: 0 24px;
      `]))),t(a({desktop:{maxWidth:s.contentMaxWidth},mobile:{margin:0}})))}}),rr=(0,p.memo)(function(){var o=(0,h.pC)(),e=(0,Z.F)(),t=e.mobile,r=(0,d.HX)(function(b){return b.routeMeta.frontmatter},O()),a=(0,d.HX)(d.Yo),s=(0,d.HX)(d.TG),i=(0,d.HX)(function(b){return(0,d.TL)(b).length===0}),u=r.sidebar===!1,v=r.toc===!1||i,g=tr({hideToc:v,hideSidebar:u}),y=g.styles,S=g.theme;return(0,n.jsxs)("div",{className:y.layout,children:[(0,n.jsx)(h.ql,{children:r.title&&(0,n.jsxs)("title",{children:[r.title," - ",s]})}),(0,n.jsx)(he,{}),v?null:(0,n.jsx)(Pt,{}),t||u?null:(0,n.jsx)(Bt,{}),a?(0,n.jsx)(f.D,{style:{gridArea:"title",paddingBlock:t?24:void 0},children:(0,n.jsx)(G.Z,{children:(0,n.jsx)(f.D,{style:{maxWidth:S.contentMaxWidth,width:"100%"},children:(0,n.jsx)(f.D,{style:{paddingBlock:0,paddingInline:t?16:48},children:(0,n.jsx)(er,{})})})})}):null,(0,n.jsx)(f.D,{style:{zIndex:10,gridArea:"main",margin:t?0:24,marginBottom:t?0:48},children:(0,n.jsx)(G.Z,{width:"100%",children:(0,n.jsx)(f.D,{className:y.content,children:(0,n.jsx)(f.D,{horizontal:!0,children:(0,n.jsx)(Ln,{children:o})})})})}),(0,n.jsx)(Mn,{})]})}),or=rr,ar=l(95936),ir=function(){var e=(0,d.HX)(d.SL,Tn.X);return e!=null&&e.length?(0,n.jsx)(ar.Z,{items:e,style:{margin:"0 16px"}}):null},sr=ir,Le,lr=(0,x.kc)(function(o){var e=o.css,t=o.stylish;return{button:e(Le||(Le=c()([`
      border: none;

      `,`
      `,`

      background-size: 200% 100%;

      &:hover {
        animation: none;
      }
    `])),t.heroButtonGradient,t.heroGradientFlow)}}),cr=function(e){var t=e.children,r=lr(),a=r.styles;return(0,n.jsx)(xn.ZP,{size:"large",shape:"round",type:"primary",className:a.button,children:t})},dr=cr,Fe,Me,Ae,Pe,Ze,Ie,Ee,Xe,Re,Ue,We,ur=(0,x.kc)(function(o){var e=o.css,t=o.responsive,r=o.token,a=o.stylish,s=o.isDarkMode;return{container:e(Fe||(Fe=c()([`
      position: relative;
      text-align: center;
      box-sizing: border-box;
      width: 100%;

      + * {
        position: relative;
      }

      > p {
        margin: 32px;
        color: `,`;
        font-size: 20px;
        line-height: 1.6;

        `,`
      }
    `])),r.colorTextSecondary,t({mobile:{fontSize:16}})),titleContainer:e(Me||(Me=c()([`
      position: relative;
    `]))),title:e(Ae||(Ae=c()([`
      font-size: 68px;
      z-index: 10;
      color: transparent;
      margin: 0;
      font-family: AliPuHui, `,`;

      `,`

      b {
        position: relative;
        z-index: 5;
        `,`;
        `,`

        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `])),r.fontFamily,t({mobile:{fontSize:40}}),a.heroGradient,a.heroGradientFlow),titleShadow:e(Pe||(Pe=c()([`
      position: absolute;
      z-index: 0;
      color: `,`;

      top: 0;
      left: 0;
      font-size: 68px;
      font-family: AliPuHui, `,`;
      font-weight: bold;
      `,`

      `,`

    b {
        color: transparent;
      }
    `])),s?r.colorWhite:r.colorTextBase,r.fontFamily,t({mobile:{fontSize:40}}),a.heroTextShadow),desc:e(Ze||(Ze=c()([`
      font-size: `,`px;
      color: `,`;

      `,` {
        font-size: `,`px;
        margin: 24px 16px;
      }
    `])),r.fontSizeHeading3,r.colorTextSecondary,t.mobile,r.fontSizeHeading5),actions:e(Ie||(Ie=c()([`
      margin-top: 48px;
      display: flex;
      justify-content: center;

      `,`
    `])),t({mobile:{marginTop:24}})),canvas:e(Ee||(Ee=c()([`
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -6;
      overflow: hidden;
      inset: 0;
      width: 100%;
      perspective: 1000px;
      transition: perspective 3s `,` 0s;
    `])),r.motionEaseInOutCirc),canvasInner:e(Xe||(Xe=c()([`
      background: linear-gradient(to top, rgba(0, 0, 0, 0) 0px, #f8f8fa 70%);
      --gradient-stop-2: 50%;
      --gradient-stop-1: 0px;
      z-index: 100;
      position: absolute;
      --geist-foreground: #fff;
      inset: 0;
    `]))),bmask:e(Re||(Re=c()([`
      background: rgb(254, 254, 254);
      background: linear-gradient(
        0deg,
        rgb(248 248 250) 0%,
        rgba(255, 255, 255, 0) 30%,
        rgba(255, 255, 255, 0) 100%
      );
      width: 100%;
      height: 12rem;
      left: 0;
      bottom: 0;
      position: absolute;
      --gradient-stop-2: 120px;
      --gradient-stop-1: 0px;
      --geist-foreground: #fff;
    `]))),canvasInnerDark:e(Ue||(Ue=c()([`
      transform: rotateX(75deg);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 0 solid #e5e7eb;
      --gradient-stop-2: 120px;
      --gradient-stop-1: 0px;
      --geist-foreground: #fff;
    `]))),canvasInnerDarkInner:e(We||(We=c()([`
      animation-duration: 30s;
      mask-size: 80px 80px;
      --right: #f8cde8;
      --left: #00a76f;
      position: absolute;
      width: 200vw;
      margin-left: -50%;
      transform: translateY(0);
      background-image: linear-gradient(
        to right,
        var(--left) 45%,
        transparent 50%,
        var(--right) 55%
      );
      -webkit-mask-image: linear-gradient(90deg, #000 2px, transparent 0),
        linear-gradient(180deg, #000 2px, transparent 0);
      mask-image: linear-gradient(90deg, #000 2px, transparent 0),
        linear-gradient(180deg, #000 2px, transparent 0);
      -webkit-mask-size: 60px 60px;
      mask-size: 60px 60px;
      overflow: hidden;
      -webkit-mask-repeat: repeat;
      mask-repeat: repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      inset: -100% 0;
      background-position-y: 100%;
      -webkit-mask-position: 50% 0;
      mask-position: 50% 0;
      animation: gradient 10s linear infinite;

      @keyframes gradient {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(calc(50% + 28px));
        }
      }
    `])))}}),pr=function(e){var t=e.title,r=e.description,a=e.actions,s=ur(),i=s.styles,u=s.cx;return(0,n.jsxs)(f.D,{horizontal:!0,distribution:"center",className:i.container,children:[(0,n.jsxs)("div",{className:i.canvas,children:[(0,n.jsx)("div",{className:i.canvasInner}),(0,n.jsx)("div",{className:i.canvasInnerDark,children:(0,n.jsx)("div",{className:i.canvasInnerDarkInner})}),(0,n.jsx)("div",{className:i.bmask})]}),(0,n.jsxs)(G.Z,{children:[t&&(0,n.jsxs)("div",{className:i.titleContainer,children:[(0,n.jsx)("h1",{className:i.title,dangerouslySetInnerHTML:{__html:t}}),(0,n.jsx)("div",{className:u(i.titleShadow),dangerouslySetInnerHTML:{__html:t}})]}),r&&(0,n.jsx)("p",{className:i.desc,dangerouslySetInnerHTML:{__html:r}}),!!(a!=null&&a.length)&&(0,n.jsx)(Bn.ZP,{theme:{token:{fontSize:16,controlHeight:40}},children:(0,n.jsx)(f.D,{horizontal:!0,gap:24,className:i.actions,children:a.map(function(v,g){var y=v.text,S=v.link,b=v.openExternal,w=/^(https?:)?\/\//i.test(S),D=g===0?(0,n.jsx)(dr,{children:y}):(0,n.jsx)(xn.ZP,{size:"large",shape:"round",type:"default",children:y});return w?(0,n.jsx)("a",{href:S,target:"_blank",rel:"noopener noreferrer",children:D},"".concat(y,"-").concat(g)):(0,n.jsx)(h.rU,{to:S,target:b?"_blank":void 0,rel:"noreferrer",children:D},y)})})})]})]})},mr=pr,hr=function(){var e=(0,d.HX)(d.aH),t=(0,d.HX)(d.S2),r=(0,d.HX)(d.Vd);return(0,n.jsx)(mr,{title:e,actions:r,description:t})},xr=hr,vr=(0,p.memo)(function(){var o=(0,d.HX)(d.TG);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.ql,{children:(0,n.jsx)("title",{children:o})}),(0,n.jsxs)(f.D,{align:"center",gap:80,children:[(0,n.jsx)(he,{}),(0,n.jsx)(xr,{}),(0,n.jsx)(sr,{}),(0,n.jsx)(Mn,{})]})]})}),gr=vr,Ge,fr=(0,x.vJ)(Ge||(Ge=c()([`
  body {
    margin: 0;
    padding: 0;
    background-color: `,`;
  }

  @font-face {
    font-family: AliPuHui;
    font-weight: normal;
    src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
    url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
    url('//at.alicdn.com/t/webfont_exesdog9toj.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: AliPuHui;
    font-weight: bold;
    src: url('https://at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2') format('woff2'),
    url('https://at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
    font-display: swap;
  }

  /* \u5B9A\u4E49\u6EDA\u52A8\u69FD\u7684\u6837\u5F0F */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    margin-right: 4px;
    background-color: transparent; // \u5B9A\u4E49\u6EDA\u52A8\u69FD\u7684\u80CC\u666F\u8272

    &-thumb {
      background-color: `,`; // \u5B9A\u4E49\u6EDA\u52A8\u5757\u7684\u80CC\u666F\u8272
      border-radius: 4px; // \u5B9A\u4E49\u6EDA\u52A8\u5757\u7684\u5706\u89D2\u534A\u5F84
    }

    &-corner {
      display: none;
    }
  }
`])),function(o){return o.theme.colorBgLayout},function(o){var e=o.theme;return e.colorFill}),br=(0,p.memo)(function(){var o=(0,h.YB)(),e=(0,h.TH)(),t=e.hash,r=(0,d.HX)(function(i){return i.routeMeta.frontmatter}),a=(0,d.HX)(d.D$),s=(0,d.HX)(function(i){return i.siteData.loading});return(0,p.useEffect)(function(){var i=t.replace("#","");i&&setTimeout(function(){var u=document.getElementById(decodeURIComponent(i));u&&(u.scrollIntoView(),window.scrollBy({top:-80}))},1)},[s,t]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(h.ql,{children:[(0,n.jsx)("html",{lang:o.locale.replace(/-.+$/,"")}),r.title&&(0,n.jsx)("meta",{property:"og:title",content:r.title}),r.description&&(0,n.jsx)("meta",{name:"description",content:r.description}),r.description&&(0,n.jsx)("meta",{property:"og:description",content:r.description}),r.keywords&&(0,n.jsx)("meta",{name:"keywords",content:r.keywords.join(",")}),r.keywords&&(0,n.jsx)("meta",{property:"og:keywords",content:r.keywords.join(",")})]}),a?(0,n.jsx)(gr,{}):(0,n.jsx)(or,{})]})});l.g.__ANTD_CACHE__=on.Y.cache;var yr=function(e){var t=e.children,r=(0,d.HX)(d.HU,O());return(0,n.jsx)(an.Z,{cache:on.Y.cache,token:r,children:t})},jr=(0,p.memo)(function(o){var e=o.initState;return(0,n.jsxs)(d.zt,{createStore:function(){return(0,d.MT)(e)},children:[(0,n.jsx)(wn,{}),(0,n.jsxs)(yr,{children:[(0,n.jsx)(fr,{}),(0,n.jsx)(br,{})]})]})}),kr=function(){var o=(0,h.WF)(),e=(0,h.tx)(),t=(0,h.eL)(),r=(0,h.zh)(),a=(0,h.OK)(),s=(0,h.TH)(),i=(0,h.bU)(),u=(0,p.useMemo)(function(){return{siteData:o,navData:a,locale:i,location:s,routeMeta:t,tabMeta:r,sidebar:e}},[]);return(0,n.jsx)(jr,{initState:u})}},9788:function(){},93511:function(){}}]);
