(self.webpackChunk_gbeata_admin_docs=self.webpackChunk_gbeata_admin_docs||[]).push([[367],{95936:function(Je,on,s){"use strict";s.d(on,{Z:function(){return tn}});var rn=s(10864),x=s.n(rn),yn=s(89712),D=s(37057),u=s(30025),an=s(10525),jn=s(504),kn=s(28322),T=s.n(kn),nn=s(78784),G=s(82733),ln,sn,K,cn,dn,pn,en,un,mn,hn,Z=(0,nn.kc)(function(d,y){var m=d.token,O=d.prefixCls,c=d.responsive,h=d.css,N=d.stylish,E=d.isDarkMode,L=d.cx,$=y.rowNum,F=y.hasLink,n="".concat(O,"-features"),J="".concat(n,"-cover"),X="".concat(n,"-description"),V="".concat(n,"-title"),B="".concat(n,"-img"),Q=20,q=function(U){return h(ln||(ln=T()([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),U,U,U*(22/24))},R=h(sn||(sn=T()([`
      transition: all `," ",`;
    `])),m.motionDurationSlow,m.motionEaseInOutCirc);return{cell:h(K||(K=T()([`
        overflow: hidden;
      `]))),container:h(cn||(cn=T()([`
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
      `])),R,m.colorFillContent,m.colorFillQuaternary,(0,G.$n)(.5,m.colorFillContent),(0,G.$n)(.5,m.colorFillQuaternary),m.colorBorder,m.boxShadowSecondary,J,Q*$,B,q(100),X,V,F?14:18),title:L(V,R,h(dn||(dn=T()([`
          pointer-events: none;
          font-size: 20px;
          line-height: `,`;
          margin: 16px 0;
          color: `,`;
        `])),m.lineHeightHeading3,m.colorText)),desc:L(X,R,h(pn||(pn=T()([`
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
        `])),m.colorTextSecondary,m.colorTextDescription,E?m.colorPrimary:m.colorPrimaryBgHover)),imgContainer:L(J,R,h(en||(en=T()([`
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
        `])),m.colorFillContent,q(24),m.gradientColor1,m.gradientColor2,m.colorBgContainer,(0,G.m4)(m.gradientColor2,.3),(0,G.m4)(m.gradientColor2,.3),(0,G.m4)(m.gradientColor1,.3))),img:L(B,R,h(un||(un=T()([`
          `,`;
          color: `,`;
        `])),q(20),m.colorWhite)),link:h(mn||(mn=T()([`
        `,`;

        margin-top: 24px;

        a {
          `,`;

          color: `,`;
          &:hover {
            color: `,`;
          }
        }
      `])),R,N.resetLinkColor,m.colorTextDescription,m.colorPrimaryHover),blur:h(hn||(hn=T()([`
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
      `])),N.heroBlurBall,E?.05:.08,c.mobile)}}),C=s(52822),Sn=function(y){var m=y.image,O=y.className,c=y.title,h=/(\.png|\.jpg|\.jpeg|\.gif|\.svg|\.webp)$/;return m.startsWith("http")||h.test(m)?(0,C.jsx)("img",{className:O,src:m,alt:c}):(0,C.jsx)(an.Z,{className:O,children:m})},wn=function(y){var m=y.imageType,O=y.row,c=y.column,h=y.hero,N=y.description,E=y.image,L=y.title,$=y.emoji,F=y.link,n=y.imageStyle,J=y.openExternal,X=O||7,V=Z({rowNum:X,hasLink:!!F}),B=V.styles,Q=V.theme;return(0,C.jsxs)("div",{className:B.container,style:{gridRow:"span ".concat(X),gridColumn:"span ".concat(c||1),cursor:F?"pointer":"default"},onClick:function(){F&&(J?window.open(F):u.m8.push(F))},children:[(0,C.jsxs)("div",{className:B.cell,children:[E&&(0,C.jsx)(an.Z,{"image-style":m,className:B.imgContainer,style:n,children:(0,C.jsx)(Sn,{className:B.img,image:E,title:L})}),L&&(0,C.jsxs)(jn.D,{as:"h3",horizontal:!0,gap:8,align:"center",className:B.title,children:[L," ",$,m==="soon"?(0,C.jsx)(D.Z,{color:Q.isDarkMode?"pink-inverse":"cyan-inverse",children:"SOON"}):null]}),N&&(0,C.jsx)("p",{dangerouslySetInnerHTML:{__html:N},className:B.desc}),F&&(0,C.jsx)("div",{className:B.link,children:(0,C.jsxs)(u.rU,{to:F,children:["\u7ACB\u5373\u4E86\u89E3 ",(0,C.jsx)(yn.Z,{})]})})]}),h&&(0,C.jsx)("div",{className:B.blur})]})},P=wn,f,I,Cn=(0,nn.kc)(function(d){var y=d.token,m=d.prefixCls,O=d.responsive,c=d.css,h=d.cx,N="".concat(m,"-features");return{container:h(N,c(f||(f=T()([`
        max-width: `,`px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: row dense;
        grid-auto-rows: 24px;
        gap: 16px;

        `,`
      `])),y.contentMaxWidth,O({mobile:c(I||(I=T()([`
            flex-direction: column;
            display: flex;
          `]))),laptop:{gridTemplateColumns:"repeat(2, 1fr)"}})))}}),Hn=function(y){var m=y.items,O=y.style,c=Cn(),h=c.styles;return m!=null&&m.length?(0,C.jsx)("div",{className:h.container,style:O,children:m.map(function(N){return(0,C.jsx)(P,x()({},N),N.title)})}):null},tn=Hn},35242:function(Je,on,s){"use strict";s.r(on),s.d(on,{default:function(){return Bo}});var rn=s(1383),x=s(30025),yn=s(65414),D=s.n(yn),u=s(53585),an=s(78290),jn=s(33397),kn=s.n(jn),T=s(52323),nn=s.n(T),G=s(65106),ln=s.n(G),sn=s(58642),K=s(44880),cn=["setLoading"],dn=["setLoading"],pn=typeof window!="undefined",en={},un=function(e,t){(0,u.useEffect)(function(){u.startTransition(function(){e()})},t)},mn=function(e,t){(0,sn.Z)(function(){e()},t,{wait:32,maxWait:96})},hn=typeof u.startTransition=="function"?un:mn,Z=function(e,t,o){var a=(0,K.AC)(),l=o||function(i,p){return a.setState(ln()({},i,p))};!pn&&!en[e]&&(l(e,t),en[e]=!0),hn(function(){l(e,t)},[t])},C={"zh-CN":"\u9996\u9875","en-US":"Home"},Sn=function(e){return{title:C[e],link:"/",activePath:"/"}},wn=(0,u.memo)(function(){var r=(0,x.WF)(),e=(0,x.tx)(),t=(0,x.eL)(),o=(0,x.zh)(),a=(0,x.OK)(),l=(0,x.TH)(),i=(0,x.bU)(),p=(0,K.AC)();return Z("siteData",r,function(){var g=r.setLoading,v=nn()(r,cn),j=p.getState(),S=j.siteData,b=S.setLoading,w=nn()(S,dn);D()(v,w)||p.setState({siteData:r})}),Z("sidebar",e),Z("routeMeta",t),Z("location",l),Z("tabMeta",o),Z("locale",i),Z("navData",a,function(){var g=r.themeConfig.hideHomeNav?a:[Sn(i.id)].concat(kn()(a));p.setState({navData:g})}),null}),P=s(29660),f=s(504),I=s(10525),Cn=s(39360),Hn=s(10864),tn=s.n(Hn),d=s(33306),y=s(85469),m=s(89712),O=s(28322),c=s.n(O),h=s(78784),N,E,L,$,F=(0,h.kc)(function(r){var e=r.token,t=r.css;return{container:t(N||(N=c()([`
    background: `,`;
    padding: 16px 24px;
    border-radius: 8px;
    cursor: pointer;

    min-width: 250px;
    &:hover {
      background: `,`;
    }
  `])),e.colorBgContainer,e.colorFillTertiary),nav:t(E||(E=c()([`
    color: `,`;
    font-size: 12px;
  `])),e.colorTextTertiary),title:t(L||(L=c()([`
    font-size: 16px;
  `]))),alignmentEnd:t($||($=c()([`
    justify-content: flex-end;
  `])))}}),n=s(52822),J=function(e){var t=e.title,o=e.link,a=e.type,l=F(),i=l.styles,p=l.cx,g=(0,x.YB)(),v=(0,u.useMemo)(function(){switch(a){case"prev":return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.Z,{})," ",g.formatMessage({id:"content.footer.actions.previous"})]});case"next":return(0,n.jsxs)(n.Fragment,{children:[g.formatMessage({id:"content.footer.actions.next"})," ",(0,n.jsx)(m.Z,{})]})}},[a]);return(0,n.jsx)(x.rU,{to:o,children:(0,n.jsxs)(f.D,{className:i.container,gap:8,children:[(0,n.jsx)(f.D,{horizontal:!0,gap:4,className:p(i.nav,a==="next"&&i.alignmentEnd),children:v}),(0,n.jsx)(f.D,{horizontal:!0,className:p(i.title,a==="next"&&i.alignmentEnd),children:t})]})})},X=(0,u.memo)(J),V=function(){var e=(0,d.HX)(d.e9,D()),t=e.prev,o=e.next,a=(0,P.F)(),l=a.mobile;return(0,n.jsxs)(f.D,{horizontal:!l,gap:l?12:0,distribution:"space-between",style:{margin:l?12:0},children:[t?(0,n.jsx)(X,tn()({type:"prev"},t)):(0,n.jsx)("div",{}),o?(0,n.jsx)(X,tn()({type:"next"},o)):(0,n.jsx)("div",{})]})},B=(0,u.memo)(V),Q,q=(0,h.kc)(function(r){var e=r.token,t=r.responsive,o=r.isDarkMode,a=r.css;return{content:a(Q||(Q=c()([`
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
  `])),e.colorBgContainer,e.boxShadowTertiary,t.mobile,o?e.colorTextSecondary:e.colorText,e.colorText,e.colorLink,e.colorLinkHover,e.colorLinkActive,o?.8:1,o?e["cyan-7"]:e.colorPrimaryText,o?e["cyan-1"]:e.colorPrimaryBg,e.colorFillTertiary,e.colorBorderSecondary,e.colorTextDescription,e.colorBorder,e.colorText,e.colorTextTertiary)}}),R=function(e){var t=e.children,o=(0,d.HX)(function(v){return v.siteData.loading}),a=q(),l=a.styles,i=a.cx,p=(0,P.F)(),g=p.mobile;return(0,n.jsxs)(f.D,{width:"100%",gap:g?0:24,children:[(0,n.jsxs)("div",{className:i("dumi-antd-style-content",l.content),children:[(0,n.jsx)(Cn.Z,{active:!0,paragraph:!0,loading:o}),(0,n.jsx)("div",{style:{display:o?"none":void 0},children:t})]}),(0,n.jsx)(B,{})]})},On=(0,u.memo)(R),U=s(51798),Ln,Fn,Qe=(0,h.kc)(function(r){var e=r.css,t=r.responsive,o=r.token,a="rc-footer";return{container:e(Ln||(Ln=c()([`
      grid-area: footer;
      border-top: 1px solid `,`;
      color: `,`;
      text-align: center;
      align-self: stretch;

      `,` {
        border: none;
        flex-direction: column;
      }
    `])),o.colorSplit,o.colorTextDescription,t.mobile),footer:e(Fn||(Fn=c()([`
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
    `])),o.colorTextSecondary,o.colorBgLayout,a,o.colorTextTertiary,o.colorLinkHover,a,o.contentMaxWidth,o.colorText,o.colorBorderSecondary,t.mobile,a)}}),qe=s(7772),Mn,An,_e=(0,h.kc)(function(r,e){var t=r.css,o=r.responsive,a=r.token,l="rc-footer";return{container:t(Mn||(Mn=c()([`
      grid-area: footer;
      border-top: 1px solid `,`;
      color: `,`;
      text-align: center;
      align-self: stretch;

      `,` {
        border: none;
        flex-direction: column;
      }
    `])),a.colorSplit,a.colorTextDescription,o.mobile),footer:t(An||(An=c()([`
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
          padding: `,`;
        }

        &-columns {
          display: flex;
          justify-content: space-around;
        }

        &-column {
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
    `])),a.colorTextSecondary,a.colorBgLayout,l,a.colorTextTertiary,a.colorLinkHover,l,a.contentMaxWidth,e?"0":"60px 0 20px",a.colorText,e?"transparent":a.colorBorderSecondary,o.mobile,l)}}),nt=function(e){var t=e.columns,o=e.bottom,a=e.theme,l=!t||(t==null?void 0:t.length)===0,i=_e(l),p=i.styles;return(0,n.jsx)("div",{className:p.container,children:(0,n.jsx)(qe.Z,{theme:a,className:p.footer,columns:t,bottom:o})})},et=nt,tt=function(){var e=Qe(),t=e.styles,o=e.theme,a=(0,d.HX)(function(p){return p.siteData}),l=a.themeConfig,i=a.pkg;return console.log(l),(0,n.jsx)(et,{bottom:(0,n.jsxs)(I.Z,{horizontal:!0,children:[(0,n.jsx)(U.Z,{type:"vertical"}),(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:l.footer}})]})})},Zn=tt,ot=s(1840),Y=s.n(ot),xn=s(56687),rt=s(97973);function gn(r){var e=r.pathname,t=r.current,o=r.target,a="base"in t?e.replace(t.base.replace(/\/$/,""),"")||"/":e.replace(new RegExp("".concat(t.suffix,"$")),"");return"base"in o?"".concat(o.base.replace(/\/$/,"")).concat(a).replace(/([^/])\/$/,"$1"):"".concat(a).concat(o.suffix)}var at={"zh-CN":"\u{1F1E8}\u{1F1F3}","en-US":"\u{1F1FA}\u{1F1F8}","jp-JP":"\u{1F1EF}\u{1F1F5}","ko-KR":"\u{1F1F0}\u{1F1F7}","ru-RU":"\u{1F1F7}\u{1F1FA}","es-ES":"\u{1F1EA}\u{1F1F8}","fr-FR":"\u{1F1EB}\u{1F1F7}","de-DE":"\u{1F1E9}\u{1F1EA}","pt-BR":"\u{1F1E7}\u{1F1F7}","it-IT":"\u{1F1EE}\u{1F1F9}","tr-TR":"\u{1F1F9}\u{1F1F7}","vi-VN":"\u{1F1FB}\u{1F1F3}"},Pn={"zh-CN":"\u4E2D","en-US":"EN"},it=function(e){var t=e.locale,o=e.current,a=(0,x.TH)(),l=a.pathname,i=(0,u.useState)(function(){return gn({pathname:l,current:o,target:t})}),p=Y()(i,2),g=p[0],v=p[1];return(0,u.useEffect)(function(){v(gn({pathname:l,current:o,target:t}))},[l,o.id,t.id]),(0,n.jsx)(x.rU,{to:g,children:(0,n.jsx)(xn.ZP,{style:{minWidth:34,padding:0,display:"flex",alignItems:"center",justifyContent:"center"},children:Pn[t.id]})})},lt=function(){var e=(0,d.HX)(function(o){return o.siteData.locales}),t=(0,d.HX)(function(o){return o.locale});return e.length<=1?null:e.length>2?(0,n.jsx)(rt.Z,{value:e.findIndex(function(o){return o.id===t.id}),onChange:function(a){console.log(gn({pathname:location.pathname,current:t,target:e[a]})),x.m8.push(gn({pathname:location.pathname,current:t,target:e[a]}))},options:e.map(function(o){return{value:o.id,label:Pn[o.id]}}),renderItem:function(a,l){return"".concat(at[e[l].id]," ").concat(e[l].name)},style:{height:32,minWidth:32,padding:0,display:"flex",alignItems:"center",justifyContent:"center"}}):(0,n.jsx)(it,{locale:e.find(function(o){var a=o.id;return a!==t.id}),current:t})},st=(0,u.memo)(lt),Tn=s(3991),In,ct=(0,h.kc)(function(r){var e=r.css,t=r.responsive,o=r.token;return e(In||(In=c()([`
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
  `])),o.fontFamily,o.colorText,t.mobile)}),dt=function(){var e=(0,d.HX)(function(p){return p.siteData.themeConfig},D()),t=(0,d.HX)(function(p){return p.locale},D()),o=(0,d.HX)(d.b8.logo,Tn.X),a=ct(),l=a.styles,i=a.cx;return e&&(0,n.jsxs)(x.rU,{className:i(l),to:"base"in t?t.base:"/",children:[!!o&&(0,n.jsx)("img",{src:o,alt:e.name,height:32}),e.name]})},En=(0,u.memo)(dt),pt=s(57054),ut=s(25577),Xn,Rn,mt=(0,h.kc)(function(r){var e=r.css,t=r.responsive,o=r.token,a=r.stylish,l=r.prefixCls,i=".".concat(l,"-tabs"),p=16,g=6;return{tabs:e(Xn||(Xn=c()([`
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
    `])),i,i,p,i,o.colorTextSecondary,p,p,g,o.colorText,o.colorFillTertiary,o.borderRadius,i,t.mobile),link:e(Rn||(Rn=c()([`
      `,`
    `])),a.resetLinkColor)}}),ht=function(){var e=mt(),t=e.styles,o=/^(\w+:)\/\/|^(mailto|tel):/,a=(0,d.HX)(function(i){return i.navData},Tn.X),l=(0,d.HX)(d.K1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(pt.Z,{onChange:function(p){var g,v=(g=a.find(function(j){return j.activePath===p||j.link===p}))===null||g===void 0?void 0:g.link;!v||o.test(v)||x.m8.push(v)},activeKey:l,className:t.tabs,items:a.map(function(i){return{label:o.test(i.link||"")?(0,n.jsx)("a",{href:i.link,className:t.link,target:"_blank",rel:"noreferrer",children:i.title}):(0,n.jsx)(x.rU,{className:t.link,to:i.link,children:i.title}),key:i.activePath||i.link}})}),(0,n.jsx)(ut.Z,{})]})},xt=(0,u.memo)(ht),Un=s(55871),Wn=s(73510),Gn=(0,u.forwardRef)(function(r,e){var t=(0,x.YB)(),o=(0,u.useRef)(!1),a=(0,u.useRef)(null);return(0,u.useImperativeHandle)(e,function(){return a.current}),(0,n.jsx)("input",{className:r.className,onCompositionStart:function(){return o.current=!0},onCompositionEnd:function(i){o.current=!1,r.onChange(i.currentTarget.value)},onFocus:r.onFocus,onBlur:r.onBlur,onKeyDown:function(i){["ArrowDown","ArrowUp"].includes(i.key)&&i.preventDefault(),i.key==="Escape"&&!o.current&&i.currentTarget.blur()},onChange:function(i){setTimeout(function(){o.current||r.onChange(i.target.value)},1)},placeholder:t.formatMessage({id:"header.search.placeholder"}),ref:a})}),Kn,Vn,Yn,gt=(0,h.kc)(function(r){var e=r.token,t=r.css;return{modal:t(Kn||(Kn=c()([`
      position: fixed;
      top: 0;
      inset-inline-start: 0;
      z-index: 1000;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
    `]))),mask:t(Vn||(Vn=c()([`
      background-color: `,`;
      width: 100%;
      height: 100%;
    `])),e.colorBgMask),content:t(Yn||(Yn=c()([`
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
    `])),e.colorBgElevated)}}),vt=function(e){var t=gt(),o=t.styles;return(0,u.useEffect)(function(){if(e.visible)document.body.style.overflow="hidden";else{var a;document.body.style.overflow="",(a=e.onClose)===null||a===void 0||a.call(e)}},[e.visible]),e.visible?(0,n.jsxs)("div",{className:o.modal,children:[(0,n.jsx)("div",{className:o.mask,onClick:e.onMaskClick}),(0,n.jsx)("div",{className:o.content,children:e.children})]}):null},$n,Jn,Qn,qn,_n,ft=(0,h.kc)(function(r){var e=r.token,t=r.responsive,o=r.css,a=r.cx;return{container:o($n||($n=c()([`
      position: relative;

      // TODO: support search for mobile devices
      `,` {
        display: none;
      }
    `])),t.mobile),shortcut:a("site-header-shortcut",o(Jn||(Jn=c()([`
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
      `])),e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,t.mobile)),popover:o(Qn||(Qn=c()([`
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
    `])),e.colorBgElevated),svg:a(o(qn||(qn=c()([`
        position: absolute;
        top: 50%;
        margin-top: 1px;
        inset-inline-start: 16px;
        width: 16px;
        color: `,`;
        transform: translateY(-50%);
      `])),e.colorTextPlaceholder)),input:o(_n||(_n=c()([`
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
    `])),e.controlHeightLG,e.colorTextSecondary,e.colorBorder,e.colorBorderSecondary,e.colorBgElevated,e.colorTextPlaceholder)}}),Nn,ne=/(mac|iphone|ipod|ipad)/i.test(typeof navigator!="undefined"?(Nn=navigator)===null||Nn===void 0?void 0:Nn.platform:""),bt=function(e){return["TEXTAREA","INPUT"].includes(e.tagName)||e.contentEditable==="true"},yt=function(){var e=ft(),t=e.styles,o=(0,u.useState)(!1),a=Y()(o,2),l=a[0],i=a[1],p=(0,u.useRef)(null),g=(0,u.useRef)(null),v=(0,u.useState)("\u2318"),j=Y()(v,2),S=j[0],b=j[1],w=(0,x.OO)(),z=w.keywords,H=w.setKeywords,k=w.result,M=w.loading,zo=(0,u.useState)(!1),Ye=Y()(zo,2),$e=Ye[0],vn=Ye[1];return(0,u.useEffect)(function(){ne||b("Ctrl");var A=function(W){if(((ne?W.metaKey:W.ctrlKey)&&W.key==="k"||W.key==="/"&&!bt(W.target))&&(W.preventDefault(),p.current)){var bn=p.current.getBoundingClientRect(),Do=bn.top,Oo=bn.bottom,Lo=bn.left,Fo=bn.right,Mo=Do>=0&&Lo>=0&&Oo<=window.innerHeight&&Fo<=window.innerWidth;Mo?p.current.focus():(H(""),vn(!0),setTimeout(function(){var Dn;(Dn=g.current)===null||Dn===void 0||Dn.focus()}))}W.key==="Escape"&&(W.preventDefault(),vn(!1))};return document.addEventListener("keydown",A),function(){return document.removeEventListener("keydown",A)}},[]),(0,n.jsxs)("div",{className:t.container,children:[(0,n.jsx)(Un.Z,{className:t.svg}),(0,n.jsx)(Gn,{onFocus:function(){return i(!0)},onBlur:function(){setTimeout(function(){i(!1)},1)},onChange:function(fn){return H(fn)},ref:p,className:t.input}),(0,n.jsxs)("span",{className:t.shortcut,children:[S," K"]}),z.trim()&&l&&(k.length||!M)&&!$e&&(0,n.jsx)("div",{className:t.popover,children:(0,n.jsx)("section",{children:(0,n.jsx)(Wn.Z,{data:k,loading:M})})}),(0,n.jsxs)(vt,{visible:$e,onMaskClick:function(){vn(!1)},onClose:function(){return H("")},children:[(0,n.jsxs)("div",{style:{position:"relative"},children:[(0,n.jsx)(Un.Z,{className:t.svg}),(0,n.jsx)(Gn,{className:t.input,onFocus:function(){return i(!0)},onBlur:function(){setTimeout(function(){i(!1)},1)},onChange:function(fn){return H(fn)},ref:g})]}),(0,n.jsx)(Wn.Z,{data:k,loading:M,onItemSelect:function(){vn(!1)}})]})]})},jt=yt,kt=s(40189),St=s(50754),wt=s(80607),_=s(82733),ee,te,oe,re,ae,ie,le,Ct=(0,h.kc)(function(r){var e=r.token,t=r.prefixCls,o=r.cx,a=r.css,l=6;return{rect:a(ee||(ee=c()([`
      background: `,`;

      width: 100%;
    `])),(0,_.m4)(e.colorBgContainer,.8)),icon:o("site-burger-icon",a(te||(te=c()([`
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
      `])),e.colorTextSecondary,l,l)),active:a(oe||(oe=c()([`
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
    `])),e.colorText),container:a(re||(re=c()([`
      width: `,`px;
      height: `,`px;
      border-radius: `,`px;
      cursor: pointer;
    `])),e.controlHeight,e.controlHeight,e.borderRadius),drawerRoot:a(ae||(ae=c()([`
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
    `])),e.headerHeight+1,t,(0,_.m4)(e.colorBgBase,.5)),drawer:a(ie||(ie=c()([`
      &.`,`-drawer-content {
        background: transparent;
      }

      .`,`-drawer-body {
        display: flex;
        flex-direction: column;
      }
    `])),t,t),menu:a(le||(le=c()([`
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
    `])),t,t,(0,_.m4)(e.colorBgContainer,.8),e.borderRadius,t,t,(0,_.m4)(e.colorBgContainer,.2))}}),Ht=function(){var e=(0,u.useState)(!1),t=Y()(e,2),o=t[0],a=t[1],l=Ct(),i=l.styles,p=l.cx,g=(0,d.HX)(function(b){return b.navData},D()),v=(0,d.HX)(function(b){return b.sidebar},D()),j=(0,d.HX)(d.K1),S=(0,d.HX)(function(b){return b.location.pathname});return(0,n.jsxs)(I.Z,{className:i.container,onClick:function(){a(!o)},children:[(0,n.jsx)("div",{className:p(i.icon,o?i.active:"")}),(0,n.jsxs)(kt.Z,{open:o,placement:"left",closeIcon:null,rootClassName:i.drawerRoot,className:i.drawer,width:"100vw",headerStyle:{display:"none"},bodyStyle:{padding:0},children:[(0,n.jsx)("div",{style:{height:24},className:i.rect}),(0,n.jsx)(St.Z,{mode:"inline",selectedKeys:(0,wt.uniq)([j,"s-".concat(S)]),openKeys:[j],className:i.menu,items:g.map(function(b){return{label:(0,n.jsx)(x.rU,{to:b.link,children:b.title}),key:b.activePath||b.link,children:(b.activePath||b.link)===j&&(v==null?void 0:v.map(function(w){return!w.link&&{label:w.title,type:"group",children:w.children.map(function(z){return{label:(0,n.jsx)(x.rU,{to:z.link,onClick:function(){a(!1)},children:z.title}),key:"s-".concat(z.link)}})}}))}})}),(0,n.jsx)("div",{style:{flex:1},className:i.rect})]})]})},Tt=Ht,se=s(71706),ce=s(69584),Nt=function(){var e=(0,d.HX)(d.BB);return e?(0,n.jsx)(ce.Z,{arrow:!1,title:"Github",children:(0,n.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:(0,n.jsx)(xn.ZP,{icon:(0,n.jsx)(se.Z,{})})})}):null},Bt=(0,u.memo)(Nt),zt=s(81751),de=s(50786),pe,ue,me,he,Dt=(0,h.kc)(function(r){var e=r.css,t=r.responsive,o=r.token;return{header:e(pe||(pe=c()([`
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
  `])),o.zIndexPopupBase-50,o.colorSplit,t.mobile,o.colorBgContainer),content:e(ue||(ue=c()([`
    padding: 0 24px;
    height: 64px;

    `,` {
      padding: 0 12px;
    }
  `])),t.mobile),left:e(me||(me=c()([""]))),right:e(he||(he=c()([`
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
  `])),t.mobile,o.colorBorder)}}),xe=function(){var e=(0,de.f)(function(l){return l.themeMode}),t=(0,x.OI)(),o=Y()(t,3),a=o[2];return(0,u.useEffect)(function(){return a(e)},[e]),(0,n.jsx)(zt.Z,{value:e,onChange:function(i){de.f.setState({themeMode:i})}})},Ot=function(){var e=(0,K.HX)(function(i){return!!i.routeMeta.frontmatter}),t=(0,P.F)(),o=t.mobile,a=Dt(),l=a.styles;return e?(0,n.jsx)("div",{className:l.header,children:(0,n.jsx)(f.D,{horizontal:!0,distribution:"space-between",align:"center",width:"auto",className:l.content,children:o?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.D,{children:(0,n.jsx)(Tt,{})}),(0,n.jsx)(f.D,{horizontal:!0,className:l.left,children:(0,n.jsx)(En,{})}),(0,n.jsx)(f.D,{children:(0,n.jsx)(xe,{})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.D,{horizontal:!0,className:l.left,children:(0,n.jsx)(En,{})}),(0,n.jsx)(f.D,{style:{marginLeft:48,alignSelf:"end"},children:(0,n.jsx)(xt,{})}),(0,n.jsxs)("section",{className:l.right,children:[(0,n.jsx)("div",{}),(0,n.jsxs)(f.D,{gap:16,horizontal:!0,align:"center",className:"dumi-default-header-right-aside",children:[(0,n.jsx)(jt,{}),(0,n.jsx)(st,{}),(0,n.jsx)(Bt,{}),(0,n.jsx)(xe,{})]})]})]})})}):null},ge=(0,u.memo)(Ot),ve,Lt=(0,h.kc)(function(r){var e=r.css,t=r.token;return{sidebar:e(ve||(ve=c()([`
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
  `])),t.headerHeight,t.headerHeight,t.colorSplit,t.colorText,t.fontSize,t.lineHeight,t.colorTextSecondary,t.colorText,t.colorFillTertiary,t.colorPrimaryText,t.colorPrimaryBg,t.colorPrimaryTextHover,t.colorPrimaryBgHover,t.colorBorder)}}),Ft=function(){var e=(0,K.HX)(function(l){return l.sidebar},D()),t=Lt(),o=t.styles,a=!e||e.length===0;return a?null:(0,n.jsx)("div",{className:o.sidebar,children:e.map(function(l,i){return(0,n.jsxs)("dl",{children:[l.title&&(0,n.jsx)("dt",{children:l.title}),l.children.map(function(p){return(0,n.jsx)("dd",{children:(0,n.jsx)(x.OL,{to:p.link,title:p.title,end:!0,children:p.title})},p.link)})]},String(i))})})},Mt=(0,u.memo)(Ft),At=s(61921),Zt=s(90985),Bn=s(82055),fe=s(74278),be=s(779),Pt=s(65271),ye,je,ke,Se,It=(0,h.kc)(function(r){var e=r.token,t=r.stylish,o=r.prefixCls,a=r.responsive,l=r.css,i=36;return{container:l(ye||(ye=c()([`
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
    `])),e.tocWidth,a.mobile,e.headerHeight+1,e.colorTextDescription),mobileCtn:l(je||(je=c()([`
      position: sticky;
      top: `,`px;

      height: `,`px;
      width: 100%;
      z-index: 200;
      background: transparent;
      background: `,`;
    `])),e.headerHeight+1,i,(0,_.m4)(e.colorBgContainer,.8)),expand:l(ke||(ke=c()([`
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
    `])),e.colorSplit,e.boxShadowSecondary,(0,_.m4)(e.colorBgContainer,.8),o),anchor:l(Se||(Se=c()([`
      `,`
    `])),t.blur)}}),Et=(0,u.memo)(function(r){var e=r.items,t=r.activeKey,o=r.onChange,a=(0,Pt.Z)("",{value:t,onChange:o}),l=Y()(a,2),i=l[0],p=l[1],g=It(),v=g.styles,j=(0,P.F)(),S=j.mobile,b=(0,h.Fg)(),w=e.find(function(H){return H.id===i}),z=(0,u.useMemo)(function(){return e.map(function(H){var k;return{href:"#".concat(H.id),title:H.title,key:H.id,children:(k=H.children)===null||k===void 0?void 0:k.map(function(M){return{href:"#".concat(M.id),title:M==null?void 0:M.title,key:M.id}})}})},[e]);return((e==null?void 0:e.length)===0?null:S?(0,n.jsx)(Bn.ZP,{theme:{token:{fontSize:12,sizeStep:3}},children:(0,n.jsx)("div",{className:v.mobileCtn,children:(0,n.jsx)(fe.Z,{bordered:!1,ghost:!0,expandIconPosition:"end",expandIcon:function(k){var M=k.isActive;return M?(0,n.jsx)(At.Z,{}):(0,n.jsx)(Zt.Z,{})},className:v.expand,children:(0,n.jsx)(fe.Z.Panel,{forceRender:!0,header:w?w.title:"\u76EE\u5F55",children:(0,n.jsx)(Bn.ZP,{theme:{token:{fontSize:14,sizeStep:4}},children:(0,n.jsx)(be.Z,{onChange:function(k){p(k.replace("#",""))},targetOffset:b.headerHeight+12,items:z})})},"toc")})})}):(0,n.jsxs)("div",{className:v.container,children:[(0,n.jsx)("h4",{children:"Table of Contents"}),(0,n.jsx)(be.Z,{items:z,className:v.anchor,targetOffset:b.headerHeight+12})]}))||null}),Xt=Et,Rt=(0,u.memo)(function(){var r=(0,d.HX)(d.TL,D());return(0,n.jsx)(Xt,{items:r})}),Ut=Rt,Wt=s(15814),zn=s(90701),we=s(27136),Gt=s(67834),Kt=s(13173),Vt=s.n(Kt),Yt=s(72253),Ce=s(46320),$t=s(81055),He,Jt=(0,h.kc)(function(r){var e=r.css,t=r.token;return e(He||(He=c()([`
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
    `])),t.colorFillSecondary)}),Qt=function(e){var t=e.children,o=Jt(),a=o.styles,l=o.theme,i=(0,P.F)(),p=i.mobile,g=(0,$t.M)(),v=g.copied,j=g.setCopied;return(0,n.jsx)(ce.Z,{placement:p?void 0:"right",title:v?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Gt.Z,{style:{color:l.colorSuccess}})," \u590D\u5236\u6210\u529F"]}):"\u590D\u5236",children:(0,n.jsx)("div",{className:a,onClick:function(){Vt()(t),j()},children:(0,n.jsx)(Yt.oP,{background:!1,type:"prism",copyable:!1,syntaxThemes:{prism:{dark:Ce.YC,light:Ce.vs}},language:"js",children:t})})})},qt=Qt,Te,Ne,Be,ze,De,_t=(0,h.kc)(function(r){var e=r.css,t=r.token,o=r.responsive,a=r.stylish;return{title:e(Te||(Te=c()([`
    font-family: monospace;
    `,` {
      margin-block: 0;
      font-size: 32px !important;
    }
  `])),o.mobile),label:e(Ne||(Ne=c()([`
    width: 80px;
  `]))),desc:e(Be||(Be=c()([`
    font-size: `,`px;
    line-height: `,`px;
  `])),t.fontSizeLG,t.lineHeightLG),text:e(ze||(ze=c()([`
    `,`
  `])),a.clickableText),meta:e(De||(De=c()([""])))}}),no=(0,u.memo)(function(r){var e=r.title,t=r.componentName,o=r.description,a=r.defaultImport,l=r.pkg,i=r.sourceUrl,p=r.docUrl,g=r.serviceList,v=g===void 0?[]:g,j=_t(),S=j.styles,b=(0,P.F)(),w=b.mobile,z=[i&&{icon:(0,n.jsx)(se.Z,{}),children:"\u67E5\u770B\u6E90\u7801",url:i},p&&{icon:(0,n.jsx)(Wt.Z,{}),children:"\u7F16\u8F91\u6587\u6863",url:p}].filter(function(k){return k}),H=a?"import ".concat(t," from '").concat(l,"';"):"import { ".concat(t," } from '").concat(l,"';");return(0,n.jsxs)(f.D,{children:[(0,n.jsx)(zn.Z.Title,{className:S.title,children:e}),o&&(0,n.jsx)("div",{children:(0,n.jsx)(zn.Z.Text,{type:"secondary",className:S.desc,children:o})}),(0,n.jsxs)(f.D,{style:{marginTop:16},gap:w?16:24,children:[(0,n.jsxs)(f.D,{horizontal:!w,gap:w?12:0,children:[(0,n.jsx)(zn.Z.Text,{className:S.label,type:"secondary",style:{display:"flex",alignItems:"center"},children:"\u5F15\u5165\u65B9\u6CD5"}),(0,n.jsx)(qt,{children:H})]}),(0,n.jsx)(U.Z,{dashed:!0,style:{margin:"2px 0"}}),(0,n.jsxs)(f.D,{horizontal:!w,gap:w?24:0,distribution:"space-between",children:[(0,n.jsx)(we.Z,{split:(0,n.jsx)(U.Z,{type:"vertical"}),wrap:!0,children:v.map(function(k){return(0,n.jsx)("a",{href:k.url,target:"_blank",rel:"noreferrer",title:k.label,children:(0,n.jsxs)(f.D,{horizontal:!0,align:"center",gap:8,className:S.text,children:[(0,n.jsx)(n.Fragment,{children:k.icon}),(0,n.jsx)(n.Fragment,{children:k.children})]})},k.label)})}),(0,n.jsx)(we.Z,{split:(0,n.jsx)(U.Z,{type:"vertical"}),className:S.meta,children:z.map(function(k){return(0,n.jsx)("a",{href:k.url,target:"_blank",rel:"noreferrer",children:(0,n.jsxs)(f.D,{horizontal:!0,align:"center",gap:8,className:S.text,children:[(0,n.jsx)(n.Fragment,{children:k.icon}),(0,n.jsx)(n.Fragment,{children:k.children})]})},k.url)})})]})]})]})}),eo=(0,u.memo)(function(){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"64 64 896 896",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M503.783 64 960 263.576V761.46L521.625 955.734V473.5h-17.5v486.351l-.342.149L64 761.46V263.576L503.783 64Zm.13 19.158L84.37 273.548 512 466.131 939.386 273.66l-435.473-190.5Z"})})}),to=(0,u.memo)(function(){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",children:(0,n.jsx)("path",{d:"M14.051 2.751l4.935 2.85a2.144 2.144 0 013.409.4 2.146 2.146 0 01-1.354 3.151v5.699a2.132 2.132 0 011.348 3.15 2.143 2.143 0 01-3.453.353l-4.905 2.832a2.14 2.14 0 11-4.171.678c0-.205.029-.41.088-.609l-4.936-2.847a2.14 2.14 0 11-2.052-3.559l.001-5.699A2.141 2.141 0 011.604 6a2.143 2.143 0 013.407-.405l4.938-2.85A2.138 2.138 0 0112 0a2.137 2.137 0 012.051 2.751zm-.515.877a.793.793 0 01-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146a2.135 2.135 0 01-1.558-2.588l.019-.072-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852a2.136 2.136 0 01-1.461 2.645l-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838a1.748 1.748 0 01-.038-.142H5.542l-.021.083 4.939 2.852a2.126 2.126 0 011.54-.653c.627 0 1.19.269 1.583.698z"})})}),oo=(0,u.memo)(function(){return(0,n.jsx)("svg",{width:"14px",height:"14px",viewBox:"0 0 14 14",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,n.jsx)("path",{d:"M13,0 C13.5522847,-1.01453063e-16 14,0.44771525 14,1 L14,13 C14,13.5522847 13.5522847,14 13,14 L1,14 C0.44771525,14 -4.87476137e-16,13.5522847 0,13 L0,1 C-6.76353751e-17,0.44771525 0.44771525,-4.5365845e-16 1,0 L13,0 Z M11.375,2.625 L2.625,2.625 L2.625,11.375 L7,11.375 L7,4.375 L9.625,4.375 L9.625,11.375 L11.375,11.375 L11.375,2.625 Z",fill:"#C12127"})})}),ro=(0,u.memo)(function(){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 108 108",children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"main",children:[(0,n.jsx)("stop",{offset:"0",stopColor:"#006838"}),(0,n.jsx)("stop",{offset:"1",stopColor:"#32de85"})]})}),(0,n.jsx)("path",{fill:"url(#main)",d:"M21.667 73.809V33.867l28.33-16.188 28.337 16.188V66.13L49.997 82.321 35 73.75V41.604l14.997-8.57L65 41.604v16.788l-15.003 8.571-1.663-.95v-16.67l8.382-4.792-6.719-3.838-8.33 4.763V69.88l8.33 4.762 21.67-12.383V37.737l-21.67-12.379-21.663 12.379v39.88L49.997 90 85 70V30L49.997 10 15 30v40z",transform:"matrix(1.25 0 0 1.25 -8.75 -7.5)"})]})}),ao=(0,u.memo)(function(){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",children:(0,n.jsx)("path",{d:"M16.509 16.845c.148-.507.091-.97-.155-1.315-.225-.317-.605-.5-1.062-.521l-8.659-.113a.155.155 0 01-.134-.071.194.194 0 01-.02-.155.239.239 0 01.203-.156l8.736-.113c1.034-.048 2.16-.886 2.554-1.913l.5-1.301a.28.28 0 00.013-.168 5.69 5.69 0 00-10.938-.584 2.585 2.585 0 00-1.793-.5 2.561 2.561 0 00-2.223 3.18 3.634 3.634 0 00-3.53 3.636c0 .176.013.352.034.528a.174.174 0 00.169.148h15.981a.22.22 0 00.204-.155zm2.757-5.564c-.077 0-.162 0-.24.011-.055 0-.105.042-.126.098l-.337 1.175c-.148.506-.092.97.154 1.315.226.317.605.5 1.063.52l1.843.114c.056 0 .105.026.133.07a.2.2 0 01.021.156.238.238 0 01-.204.155l-1.92.113c-1.041.049-2.16.887-2.553 1.914l-.141.358c-.028.071.02.141.098.141h6.598a.173.173 0 00.17-.125 4.81 4.81 0 00.175-1.28 4.739 4.739 0 00-4.734-4.727"})})}),io=(0,u.memo)(function(){var r=(0,d.HX)(d.UQ),e=r.pkg,t=(0,u.useMemo)(function(){return[{label:"NPM",icon:(0,n.jsx)(oo,{}),children:"NPM",url:"https://www.npmjs.com/package/".concat(e)},{label:"\u9884\u89C8\u4EA7\u7269",icon:(0,n.jsx)(ao,{}),children:"UNPKG",url:"https://unpkg.com/browse/".concat(e,"/")},{label:"\u67E5\u9605\u4EA7\u7269\u4F53\u79EF",icon:(0,n.jsx)(eo,{}),children:"BundlePhobia",url:"https://bundlephobia.com/package/".concat(e)},{label:"\u67E5\u9605\u5B89\u88C5\u5305\u4F53\u79EF",icon:(0,n.jsx)(ro,{}),children:"PackagePhobia",url:"https://packagephobia.com/result?p=".concat(e)},{label:"\u5206\u6790\u4F9D\u8D56\u56FE",icon:(0,n.jsx)(to,{}),children:"Anvaka Graph",url:"https://npm.anvaka.com/#/view/2d/".concat(e)}]},[e]);return(0,n.jsx)(no,tn()({serviceList:t},r))}),lo=io,Oe,Le,Fe,so=(0,h.kc)(function(r,e){var t=r.css,o=r.cx,a=r.responsive,l=r.token,i=e.hideToc,p=e.hideSidebar;return{layout:t(Oe||(Oe=c()([`
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
    `])),l.colorBgLayout,l.colorBgContainer,l.sidebarWidth,i?"":"".concat(l.tocWidth+24,"px"),l.headerHeight,p?"title":"sidebar",i?"title":".",p?"main":"sidebar",i?"main":"toc",p?"footer":"sidebar",a.mobile),toc:t(Le||(Le=c()([`
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
    `])),l.tocWidth,a.mobile,l.headerHeight+1,l.colorTextDescription),content:o(t(Fe||(Fe=c()([`
        max-width: 960px;
        width: 100%;
        margin: 0 24px;
      `]))),t(a({desktop:{maxWidth:l.contentMaxWidth},mobile:{margin:0}})))}}),co=(0,u.memo)(function(){var r=(0,x.pC)(),e=(0,P.F)(),t=e.mobile,o=(0,d.HX)(function(b){return b.routeMeta.frontmatter},D()),a=(0,d.HX)(d.Yo),l=(0,d.HX)(d.TG),i=(0,d.HX)(function(b){return(0,d.TL)(b).length===0}),p=o.sidebar===!1,g=o.toc===!1||i,v=so({hideToc:g,hideSidebar:p}),j=v.styles,S=v.theme;return(0,n.jsxs)("div",{className:j.layout,children:[(0,n.jsx)(x.ql,{children:o.title&&(0,n.jsxs)("title",{children:[o.title," - ",l]})}),(0,n.jsx)(ge,{}),g?null:(0,n.jsx)(Ut,{}),t||p?null:(0,n.jsx)(Mt,{}),a?(0,n.jsx)(f.D,{style:{gridArea:"title",paddingBlock:t?24:void 0},children:(0,n.jsx)(I.Z,{children:(0,n.jsx)(f.D,{style:{maxWidth:S.contentMaxWidth,width:"100%"},children:(0,n.jsx)(f.D,{style:{paddingBlock:0,paddingInline:t?16:48},children:(0,n.jsx)(lo,{})})})})}):null,(0,n.jsx)(f.D,{style:{zIndex:10,gridArea:"main",margin:t?0:24,marginBottom:t?0:48},children:(0,n.jsx)(I.Z,{width:"100%",children:(0,n.jsx)(f.D,{className:j.content,children:(0,n.jsx)(f.D,{horizontal:!0,children:(0,n.jsx)(On,{children:r})})})})}),(0,n.jsx)(Zn,{})]})}),po=co,uo=s(95936),mo=function(){var e=(0,d.HX)(d.SL,Tn.X);return e!=null&&e.length?(0,n.jsx)(uo.Z,{items:e,style:{margin:"0 16px"}}):null},ho=mo,Me,xo=(0,h.kc)(function(r){var e=r.css,t=r.stylish;return{button:e(Me||(Me=c()([`
      border: none;

      `,`
      `,`

      background-size: 200% 100%;

      &:hover {
        animation: none;
      }
    `])),t.heroButtonGradient,t.heroGradientFlow)}}),go=function(e){var t=e.children,o=xo(),a=o.styles;return(0,n.jsx)(xn.ZP,{size:"large",shape:"round",type:"primary",className:a.button,children:t})},vo=go,Ae,Ze,Pe,Ie,Ee,Xe,Re,Ue,We,Ge,Ke,fo=(0,h.kc)(function(r){var e=r.css,t=r.responsive,o=r.token,a=r.stylish,l=r.isDarkMode;return{container:e(Ae||(Ae=c()([`
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
    `])),o.colorTextSecondary,t({mobile:{fontSize:16}})),titleContainer:e(Ze||(Ze=c()([`
      position: relative;
    `]))),title:e(Pe||(Pe=c()([`
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
    `])),o.fontFamily,t({mobile:{fontSize:40}}),a.heroGradient,a.heroGradientFlow),titleShadow:e(Ie||(Ie=c()([`
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
    `])),l?o.colorWhite:o.colorTextBase,o.fontFamily,t({mobile:{fontSize:40}}),a.heroTextShadow),desc:e(Ee||(Ee=c()([`
      font-size: `,`px;
      color: `,`;

      `,` {
        font-size: `,`px;
        margin: 24px 16px;
      }
    `])),o.fontSizeHeading3,o.colorTextSecondary,t.mobile,o.fontSizeHeading5),actions:e(Xe||(Xe=c()([`
      margin-top: 48px;
      display: flex;
      justify-content: center;

      `,`
    `])),t({mobile:{marginTop:24}})),canvas:e(Re||(Re=c()([`
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -6;
      overflow: hidden;
      inset: 0;
      width: 100%;
      perspective: 1000px;
      transition: perspective 3s `,` 0s;
    `])),o.motionEaseInOutCirc),canvasInner:e(Ue||(Ue=c()([`
      background: linear-gradient(to top, rgba(0, 0, 0, 0) 0px, #f8f8fa 70%);
      --gradient-stop-2: 50%;
      --gradient-stop-1: 0px;
      z-index: 100;
      position: absolute;
      --geist-foreground: #fff;
      inset: 0;
    `]))),bmask:e(We||(We=c()([`
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
    `]))),canvasInnerDark:e(Ge||(Ge=c()([`
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
    `]))),canvasInnerDarkInner:e(Ke||(Ke=c()([`
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
    `])))}}),bo=function(e){var t=e.title,o=e.description,a=e.actions,l=fo(),i=l.styles,p=l.cx;return(0,n.jsxs)(f.D,{horizontal:!0,distribution:"center",className:i.container,children:[(0,n.jsxs)("div",{className:i.canvas,children:[(0,n.jsx)("div",{className:i.canvasInner}),(0,n.jsx)("div",{className:i.canvasInnerDark,children:(0,n.jsx)("div",{className:i.canvasInnerDarkInner})}),(0,n.jsx)("div",{className:i.bmask})]}),(0,n.jsxs)(I.Z,{children:[t&&(0,n.jsxs)("div",{className:i.titleContainer,children:[(0,n.jsx)("h1",{className:i.title,dangerouslySetInnerHTML:{__html:t}}),(0,n.jsx)("div",{className:p(i.titleShadow),dangerouslySetInnerHTML:{__html:t}})]}),o&&(0,n.jsx)("p",{className:i.desc,dangerouslySetInnerHTML:{__html:o}}),!!(a!=null&&a.length)&&(0,n.jsx)(Bn.ZP,{theme:{token:{fontSize:16,controlHeight:40}},children:(0,n.jsx)(f.D,{horizontal:!0,gap:24,className:i.actions,children:a.map(function(g,v){var j=g.text,S=g.link,b=g.openExternal,w=/^(https?:)?\/\//i.test(S),z=v===0?(0,n.jsx)(vo,{children:j}):(0,n.jsx)(xn.ZP,{size:"large",shape:"round",type:"default",children:j});return w?(0,n.jsx)("a",{href:S,target:"_blank",rel:"noopener noreferrer",children:z},"".concat(j,"-").concat(v)):(0,n.jsx)(x.rU,{to:S,target:b?"_blank":void 0,rel:"noreferrer",children:z},j)})})})]})]})},yo=bo,jo=function(){var e=(0,d.HX)(d.aH),t=(0,d.HX)(d.S2),o=(0,d.HX)(d.Vd);return(0,n.jsx)(yo,{title:e,actions:o,description:t})},ko=jo,So=(0,u.memo)(function(){var r=(0,d.HX)(d.TG);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.ql,{children:(0,n.jsx)("title",{children:r})}),(0,n.jsxs)(f.D,{align:"center",gap:80,children:[(0,n.jsx)(ge,{}),(0,n.jsx)(ko,{}),(0,n.jsx)(ho,{}),(0,n.jsx)(Zn,{})]})]})}),wo=So,Ve,Co=(0,h.vJ)(Ve||(Ve=c()([`
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
`])),function(r){return r.theme.colorBgLayout},function(r){var e=r.theme;return e.colorFill}),Ho=(0,u.memo)(function(){var r=(0,x.YB)(),e=(0,x.TH)(),t=e.hash,o=(0,d.HX)(function(i){return i.routeMeta.frontmatter}),a=(0,d.HX)(d.D$),l=(0,d.HX)(function(i){return i.siteData.loading});return(0,u.useEffect)(function(){var i=t.replace("#","");i&&setTimeout(function(){var p=document.getElementById(decodeURIComponent(i));p&&(p.scrollIntoView(),window.scrollBy({top:-80}))},1)},[l,t]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(x.ql,{children:[(0,n.jsx)("html",{lang:r.locale.replace(/-.+$/,"")}),o.title&&(0,n.jsx)("meta",{property:"og:title",content:o.title}),o.description&&(0,n.jsx)("meta",{name:"description",content:o.description}),o.description&&(0,n.jsx)("meta",{property:"og:description",content:o.description}),o.keywords&&(0,n.jsx)("meta",{name:"keywords",content:o.keywords.join(",")}),o.keywords&&(0,n.jsx)("meta",{property:"og:keywords",content:o.keywords.join(",")})]}),a?(0,n.jsx)(wo,{}):(0,n.jsx)(po,{})]})});s.g.__ANTD_CACHE__=rn.Y.cache;var To=function(e){var t=e.children,o=(0,d.HX)(d.HU,D());return(0,n.jsx)(an.Z,{cache:rn.Y.cache,token:o,children:t})},No=(0,u.memo)(function(r){var e=r.initState;return(0,n.jsxs)(d.zt,{createStore:function(){return(0,d.MT)(e)},children:[(0,n.jsx)(wn,{}),(0,n.jsxs)(To,{children:[(0,n.jsx)(Co,{}),(0,n.jsx)(Ho,{})]})]})}),Bo=function(){var r=(0,x.WF)(),e=(0,x.tx)(),t=(0,x.eL)(),o=(0,x.zh)(),a=(0,x.OK)(),l=(0,x.TH)(),i=(0,x.bU)(),p=(0,u.useMemo)(function(){return{siteData:r,navData:a,locale:i,location:l,routeMeta:t,tabMeta:o,sidebar:e}},[]);return(0,n.jsx)(No,{initState:p})}},9788:function(){},93511:function(){}}]);
