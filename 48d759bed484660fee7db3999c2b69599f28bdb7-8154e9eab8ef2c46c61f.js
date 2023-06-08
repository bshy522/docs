"use strict";(self.webpackChunkopensumi_doc=self.webpackChunkopensumi_doc||[]).push([[588],{7009:function(e,t,n){var r=(0,n(7294).createContext)({});t.Z=r},8547:function(e,t,n){n(3176)},8239:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(7462),a=n(4942),o=n(1002),l=n(9439),c=n(9931),i=n.n(c),s=n(7294),u=n(8152),d=n(4729),f=["xxl","xl","lg","md","sm","xs"],p={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},v=new Map,m=-1,h={},y={matchHandlers:{},dispatch:function(e){return h=e,v.forEach((function(e){return e(h)})),v.size>=1},subscribe:function(e){return v.size||this.register(),m+=1,v.set(m,e),e(h),m},unsubscribe:function(e){v.delete(e),v.size||this.unregister()},unregister:function(){var e=this;Object.keys(p).forEach((function(t){var n=p[t],r=e.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)})),v.clear()},register:function(){var e=this;Object.keys(p).forEach((function(t){var n=p[t],o=function(n){var o=n.matches;e.dispatch((0,r.Z)((0,r.Z)({},h),(0,a.Z)({},t,o)))},l=window.matchMedia(n);l.addListener(o),e.matchHandlers[n]={mql:l,listener:o},o(l)}))}},b=n(4728),g=n(7009),C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};(0,b.b)("top","middle","bottom","stretch"),(0,b.b)("start","end","center","space-around","space-between","space-evenly");function x(e,t){var n=s.useState("string"==typeof e?e:""),r=(0,l.Z)(n,2),a=r[0],c=r[1];return s.useEffect((function(){!function(){if("string"==typeof e&&c(e),"object"===(0,o.Z)(e))for(var n=0;n<f.length;n++){var r=f[n];if(t[r]){var a=e[r];if(void 0!==a)return void c(a)}}}()}),[JSON.stringify(e),t]),a}var Z=s.forwardRef((function(e,t){var n,c=e.prefixCls,p=e.justify,v=e.align,m=e.className,h=e.style,b=e.children,Z=e.gutter,w=void 0===Z?0:Z,E=e.wrap,k=C(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),O=s.useContext(u.E_),j=O.getPrefixCls,R=O.direction,N=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),P=(0,l.Z)(N,2),S=P[0],T=P[1],M=s.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),Q=(0,l.Z)(M,2),D=Q[0],_=Q[1],A=x(v,D),L=x(p,D),B=(0,d.Z)(),I=s.useRef(w);s.useEffect((function(){var e=y.subscribe((function(e){_(e);var t=I.current||0;(!Array.isArray(t)&&"object"===(0,o.Z)(t)||Array.isArray(t)&&("object"===(0,o.Z)(t[0])||"object"===(0,o.Z)(t[1])))&&T(e)}));return function(){return y.unsubscribe(e)}}),[]);var W,z=j("row",c),F=(W=[void 0,void 0],(Array.isArray(w)?w:[w,void 0]).forEach((function(e,t){if("object"===(0,o.Z)(e))for(var n=0;n<f.length;n++){var r=f[n];if(S[r]&&void 0!==e[r]){W[t]=e[r];break}}else W[t]=e})),W),G=i()(z,(n={},(0,a.Z)(n,"".concat(z,"-no-wrap"),!1===E),(0,a.Z)(n,"".concat(z,"-").concat(L),L),(0,a.Z)(n,"".concat(z,"-").concat(A),A),(0,a.Z)(n,"".concat(z,"-rtl"),"rtl"===R),n),m),H={},q=null!=F[0]&&F[0]>0?F[0]/-2:void 0,J=null!=F[1]&&F[1]>0?F[1]/-2:void 0;if(q&&(H.marginLeft=q,H.marginRight=q),B){var V=(0,l.Z)(F,2);H.rowGap=V[1]}else J&&(H.marginTop=J,H.marginBottom=J);var K=(0,l.Z)(F,2),U=K[0],X=K[1],Y=s.useMemo((function(){return{gutter:[U,X],wrap:E,supportFlexGap:B}}),[U,X,E,B]);return s.createElement(g.Z.Provider,{value:Y},s.createElement("div",(0,r.Z)({},k,{className:G,style:(0,r.Z)((0,r.Z)({},H),h),ref:t}),b))}));var w=Z},4567:function(e,t,n){n(3176),n(8547)},7833:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var r=n(7294),a=n(1082),o=(n(4567),n(8239)),l=(n(3176),n(7462)),c=n(4942),i=n(9439),s=n(9931),u=n.n(s),d=n(7325),f=n(8152),p=n(2397),v=n(9851),m=r.createContext(null),h=m.Provider,y=m,b=r.createContext(null),g=b.Provider,C=n(1413),x=n(5987),Z=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],w=(0,r.forwardRef)((function(e,t){var n,a=e.prefixCls,o=void 0===a?"rc-checkbox":a,s=e.className,f=e.style,p=e.checked,v=e.disabled,m=e.defaultChecked,h=void 0!==m&&m,y=e.type,b=void 0===y?"checkbox":y,g=e.onChange,w=(0,x.Z)(e,Z),E=(0,r.useRef)(null),k=(0,d.Z)(h,{value:p}),O=(0,i.Z)(k,2),j=O[0],R=O[1];(0,r.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===(e=E.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=E.current)||void 0===e||e.blur()},input:E.current}}));var N=u()(o,s,(n={},(0,c.Z)(n,"".concat(o,"-checked"),j),(0,c.Z)(n,"".concat(o,"-disabled"),v),n));return r.createElement("span",{className:N,style:f},r.createElement("input",(0,l.Z)({},w,{className:"".concat(o,"-input"),ref:E,onChange:function(t){v||("checked"in e||R(t.target.checked),null==g||g({target:(0,C.Z)((0,C.Z)({},e),{},{type:b,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:v,checked:!!j,type:b})),r.createElement("span",{className:"".concat(o,"-inner")}))})),E=w,k=n(784),O=n(673),j=(n(8496),r.createContext({})),R=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},N=function(e,t){var n,a=r.useContext(y),o=r.useContext(b),i=r.useContext(f.E_),s=i.getPrefixCls,d=i.direction,p=r.useRef(),v=(0,k.sQ)(t,p),m=(0,r.useContext)(j).isFormItemInput,h=e.prefixCls,g=e.className,C=e.children,x=e.style,Z=e.disabled,w=R(e,["prefixCls","className","children","style","disabled"]),N=s("radio",h),P="button"===((null==a?void 0:a.optionType)||o)?"".concat(N,"-button"):N,S=(0,l.Z)({},w),T=r.useContext(O.Z);S.disabled=Z||T,a&&(S.name=a.name,S.onChange=function(t){var n,r;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(r=null==a?void 0:a.onChange)||void 0===r||r.call(a,t)},S.checked=e.value===a.value,S.disabled=S.disabled||a.disabled);var M=u()("".concat(P,"-wrapper"),(n={},(0,c.Z)(n,"".concat(P,"-wrapper-checked"),S.checked),(0,c.Z)(n,"".concat(P,"-wrapper-disabled"),S.disabled),(0,c.Z)(n,"".concat(P,"-wrapper-rtl"),"rtl"===d),(0,c.Z)(n,"".concat(P,"-wrapper-in-form-item"),m),n),g);return r.createElement("label",{className:M,style:x,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},r.createElement(E,(0,l.Z)({},S,{type:"radio",prefixCls:P,ref:v})),void 0!==C?r.createElement("span",null,C):null)};var P=r.forwardRef(N),S=r.forwardRef((function(e,t){var n,a=r.useContext(f.E_),o=a.getPrefixCls,s=a.direction,m=r.useContext(p.Z),y=(0,d.Z)(e.defaultValue,{value:e.value}),b=(0,i.Z)(y,2),g=b[0],C=b[1],x=e.prefixCls,Z=e.className,w=void 0===Z?"":Z,E=e.options,k=e.buttonStyle,O=void 0===k?"outline":k,j=e.disabled,R=e.children,N=e.size,S=e.style,T=e.id,M=e.onMouseEnter,Q=e.onMouseLeave,D=e.onFocus,_=e.onBlur,A=o("radio",x),L="".concat(A,"-group"),B=R;E&&E.length>0&&(B=E.map((function(e){return"string"==typeof e||"number"==typeof e?r.createElement(P,{key:e.toString(),prefixCls:A,disabled:j,value:e,checked:g===e},e):r.createElement(P,{key:"radio-group-value-options-".concat(e.value),prefixCls:A,disabled:e.disabled||j,value:e.value,checked:g===e.value,style:e.style},e.label)})));var I=N||m,W=u()(L,"".concat(L,"-").concat(O),(n={},(0,c.Z)(n,"".concat(L,"-").concat(I),I),(0,c.Z)(n,"".concat(L,"-rtl"),"rtl"===s),n),w);return r.createElement("div",(0,l.Z)({},(0,v.Z)(e),{className:W,style:S,onMouseEnter:M,onMouseLeave:Q,onFocus:D,onBlur:_,id:T,ref:t}),r.createElement(h,{value:{onChange:function(t){var n=g,r=t.target.value;"value"in e||C(r);var a=e.onChange;a&&r!==n&&a(t)},value:g,disabled:e.disabled,name:e.name,optionType:e.optionType}},B))})),T=r.memo(S),M=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},Q=function(e,t){var n=r.useContext(f.E_).getPrefixCls,a=e.prefixCls,o=M(e,["prefixCls"]),c=n("radio",a);return r.createElement(g,{value:"button"},r.createElement(P,(0,l.Z)({prefixCls:c},o,{type:"radio",ref:t})))},D=r.forwardRef(Q),_=P;_.Button=D,_.Group=T,_.__ANT_RADIO=!0;var A=_,L=n(1786),B=n(7230),I=function(e){return e.WeChat="wechat",e.Dingtalk="dingtalk",e}({}),W=function(e){var t=e.weChatQRCode,n=e.dingTalkQRCode,a=e.className,l=e.style,c=(0,r.useState)(I.Dingtalk),i=c[0],s=c[1],d=(0,r.useCallback)((function(e){s(e.target.value)}),[i]);return r.createElement("div",{className:u()("Communities-module--wrapper--59db5",a),style:l},r.createElement(o.Z,{justify:"center"},r.createElement(A.Group,{onChange:d,value:i,style:{marginBottom:8}},r.createElement(A.Button,{value:I.Dingtalk},r.createElement(L.Z,null)," DingTalk"),r.createElement(A.Button,{value:I.WeChat},r.createElement(B.Z,null)," WeChat"))),r.createElement(o.Z,{justify:"center",style:{marginTop:20}},r.createElement("img",{src:i===I.Dingtalk?n:t,alt:""})),r.createElement(o.Z,{justify:"center",style:{marginTop:20}},r.createElement("p",{className:"Communities-module--text--1a53a"},"长按保存图片到本地后，使用",i===I.Dingtalk?"钉钉":"微信"," “扫一扫”")))},z=function(){var e=(0,a.useStaticQuery)("232018349").site.siteMetadata,t=e.showDingTalkQRCode,n=e.showWeChatQRCode,o=e.weChatQRCode,l=e.dingTalkQRCode;return r.createElement(W,{showDingTalkQRCode:t,showWeChatQRCode:n,weChatQRCode:o,dingTalkQRCode:l})};z.noLayout=!0;var F=z}}]);