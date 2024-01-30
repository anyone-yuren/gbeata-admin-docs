"use strict";(self.webpackChunk_gbeata_admin_docs=self.webpackChunk_gbeata_admin_docs||[]).push([[973],{29115:function(k,g,l){l.r(g),l.d(g,{default:function(){return W}});var b=l(45332),x=l.n(b),j=l(73193),m=l.n(j),p=l(49837),h=l(52983),v=l(97458);function X(e){var t=useRef(null),n=_objectSpread({mass:1,tension:170,friction:26,clamp:!1,precision:.01,velocity:0},e.panelConfig),r=useSpring(function(){return{xys:[0,0,1],config:n}},[n]),s=_slicedToArray(r,2),a=s[0].xys,o=s[1],i=function(){return o.start({xys:[0,0,1]})},d=function(f){var u,y=(u=t.current)===null||u===void 0?void 0:u.getBoundingClientRect();o.start({xys:C(f.clientX,f.clientY,y)})};return _jsx("div",{ref:t,children:_jsxs(animated.div,{className:"border  border-solid ",style:{transform:a.to(R)},onMouseLeave:i,onMouseMove:d,children:[_jsxs("p",{className:"text-sm  flex justify-between border-solid",children:[e.title," ",e.right]}),e.children]})})}var C=function(t,n,r){return[-(n-r.top-r.height/2)/150,(t-r.left-r.width/2)/150,1]},R=function(t,n,r){return"perspective(600px) rotateX(".concat(t,"deg) rotateY(").concat(n,"deg) scale(").concat(r,")")};function $(e){var t=e.children,n=e.direction,r=n===void 0?"left":n,s=e.delay,a=s===void 0?3e3:s,o=e.run,i=o===void 0?!1:o,d=e.config,c=d===void 0?{tension:100,friction:26}:d,f=h.useState(!1),u=x()(f,2),y=u[0],w=u[1];h.useEffect(function(){w(i)},[i]);var T=(0,p.q_)({opacity:y?1:0,transform:y?"".concat(r==="left"?"translateX(0px) scale(1) rotateY(0deg)":"translateY(0px) scale(1) rotateY(0deg)"):"".concat(r==="left"?"translateX(80px) scale(1) rotateY(10deg)":"translateY(80px) scale(0.9) rotateY(10deg)"),delay:a,config:m()({},c),onRest:function(){}});return(0,v.jsx)(p.q.div,{className:e.className,style:m()({},T),children:i&&t})}var _=l(84176),E=null,B=function(t){var n=t.loading,r=n===void 0?!0:n,s=t.delay,a=s===void 0?200:s,o=_objectWithoutProperties(t,E);return _jsx(Translatex,{direction:"top",delay:a,run:!0,children:_jsx(Card,_objectSpread(_objectSpread({hoverable:!0,loading:r},o),{},{children:t.children}))})},D=null,S=l(69341),G=(0,S.kc)(function(){return{"svg-icon":{display:"inline-block",verticalAlign:"-0.15em",fill:"currentColor",overflow:"hidden"}}}),F=null;function L(e){var t=e.name,n=e.prefix,r=n===void 0?"icon":n,s=e.size,a=s===void 0?16:s,o=e.style,i=e.className,d=useStyles(),c=d.styles,f="#".concat(r,"-").concat(t),u=_objectSpread({width:"".concat(a,"px"),height:"".concat(a,"px")},o);return _jsx("svg",{className:"".concat(c["svg-icon"]," ").concat(i),style:u,"aria-hidden":"true",children:_jsx("use",{href:f})})}var H=(0,S.kc)(function(e){var t=e.token;return{"custom-card":{boxShadow:"rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",transition:"box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",".ant-card-body":{padding:t.paddingMD}}}}),Z=null,M=null,N=function(t,n,r,s){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,o=document.createElement("div");return o.style.position="absolute",o.style.left="".concat(r,"px"),o.style.top="".concat(s,"px"),o.style.width="".concat(a,"px"),o.style.height="".concat(a,"px"),o.style.borderRadius="50%",o.style.background=n,o.style.transform="translate(-50%, -50%)",o.style.transition="all 1s ease-out",t.appendChild(o),o},z=function(t){var n=getComputedStyle(t),r=n.borderWidth,s=parseInt(r,10),a=document.createElement("div");return a.style.position="absolute",a.style.inset="-".concat(s,"px"),a.style.borderRadius="inherit",a.style.background="transparent",a.style.zIndex="999",a.style.pointerEvents="none",a.style.overflow="hidden",t.appendChild(a),a},Y=function(t,n){var r=n.event,s=n.component,a=z(t),o=a.getBoundingClientRect(),i=r.clientX-o.left,d=r.clientY-o.top,c=N(a,"rgba(255, 255, 255, 0.65)",i,d);requestAnimationFrame(function(){c.ontransitionend=function(){a.remove()},c.style.width="400px",c.style.height="400px",c.style.opacity="0"})},J=function(t){var n=t.children,r=_objectWithoutProperties(t,M),s=useStyles(),a=s.styles,o=function(){return _jsxs("div",{style:{textAlign:"center"},children:[_jsx(SvgIcon,{name:"ic_content",size:120}),_jsx("p",{children:"Data Not Found"})]})};return _jsx(ConfigProvider,_objectSpread(_objectSpread({wave:{showEffect:Y},card:{className:a["custom-card"]},renderEmpty:o},r),{},{children:n}))},K=null,O=l(14841),A=null;function Q(e){var t=e.sliderConfig,n=e.children,r=_objectWithoutProperties(e,A);return _jsx(Slider,_objectSpread(_objectSpread(_objectSpread({},r),t),{},{children:n}))}var I=l(15188),P=l(13427),W=function(){var e=h.useState(!0),t=x()(e,2),n=t[0],r=t[1];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(P.Z,{checked:n,onChange:function(a){return r(a)}}),(0,v.jsx)(I.Z,{style:{height:"30vh"},children:(0,v.jsx)($,{run:n,delay:100,children:(0,v.jsx)("img",{src:"https://github.com/anyone-yuren/multiway/blob/master/logo.png?raw=true",alt:""})})})]})}}}]);
