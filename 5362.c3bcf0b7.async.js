(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5362],{64335:function(D,H,l){"use strict";var K=l(67294),L=(0,K.createContext)({});H.Z=L},85224:function(D,H,l){"use strict";var K=l(84305),L=l(69224),C=l(67294),Z=l(94184),W=l.n(Z),re=l(97435),T=l(56264),G=l.n(T),z=l(64335),o=["children","className","extra","style","renderContent"];function N(){return N=Object.assign||function(v){for(var d=1;d<arguments.length;d++){var b=arguments[d];for(var g in b)Object.prototype.hasOwnProperty.call(b,g)&&(v[g]=b[g])}return v},N.apply(this,arguments)}function I(v,d){var b=Object.keys(v);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(v);d&&(g=g.filter(function(w){return Object.getOwnPropertyDescriptor(v,w).enumerable})),b.push.apply(b,g)}return b}function k(v){for(var d=1;d<arguments.length;d++){var b=arguments[d]!=null?arguments[d]:{};d%2?I(Object(b),!0).forEach(function(g){X(v,g,b[g])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(b)):I(Object(b)).forEach(function(g){Object.defineProperty(v,g,Object.getOwnPropertyDescriptor(b,g))})}return v}function X(v,d,b){return d in v?Object.defineProperty(v,d,{value:b,enumerable:!0,configurable:!0,writable:!0}):v[d]=b,v}function A(v,d){if(v==null)return{};var b=Q(v,d),g,w;if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(v);for(w=0;w<U.length;w++)g=U[w],!(d.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(v,g)||(b[g]=v[g]))}return b}function Q(v,d){if(v==null)return{};var b={},g=Object.keys(v),w,U;for(U=0;U<g.length;U++)w=g[U],!(d.indexOf(w)>=0)&&(b[w]=v[w]);return b}var $=function(d){var b=d.children,g=d.className,w=d.extra,U=d.style,ce=d.renderContent,q=A(d,o),xe=(0,C.useContext)(L.ZP.ConfigContext),ve=xe.getPrefixCls,me=d.prefixCls||ve("pro"),ie="".concat(me,"-footer-bar"),E=(0,C.useContext)(z.Z),Y=(0,C.useMemo)(function(){var ae=E.hasSiderMenu,Ce=E.isMobile,se=E.siderWidth;if(!!ae)return se?Ce?"100%":"calc(100% - ".concat(se,"px)"):"100%"},[E.collapsed,E.hasSiderMenu,E.isMobile,E.siderWidth]),ne=C.createElement(C.Fragment,null,C.createElement("div",{className:"".concat(ie,"-left")},w),C.createElement("div",{className:"".concat(ie,"-right")},b));return(0,C.useEffect)(function(){return!E||!(E==null?void 0:E.setHasFooterToolbar)?function(){}:(E==null||E.setHasFooterToolbar(!0),function(){var ae;E==null||(ae=E.setHasFooterToolbar)===null||ae===void 0||ae.call(E,!1)})},[]),C.createElement("div",N({className:W()(g,"".concat(ie)),style:k({width:Y},U)},(0,re.Z)(q,["prefixCls"])),ce?ce(k(k(k({},d),E),{},{leftWidth:Y}),ne):ne)};H.Z=$},21349:function(D,H,l){"use strict";var K=l(84305),L=l(69224),C=l(53645),Z=l.n(C),W=l(67294),re=l(94184),T=l.n(re),G=l(64335),z=function(N){var I=(0,W.useContext)(G.Z),k=N.children,X=N.contentWidth,A=N.className,Q=N.style,$=(0,W.useContext)(L.ZP.ConfigContext),v=$.getPrefixCls,d=N.prefixCls||v("pro"),b=X||I.contentWidth,g="".concat(d,"-grid-content");return W.createElement("div",{className:T()(g,A,{wide:b==="Fixed"}),style:Q},W.createElement("div",{className:"".concat(d,"-grid-content-children")},k))};H.Z=z},75362:function(D,H,l){"use strict";l.d(H,{ZP:function(){return zt}});var K=l(65056),L=l(70883),C=l(22122),Z=l(96156),W=l(6610),re=l(5991),T=l(10379),G=l(60446),z=l(90484),o=l(67294),N=l(94184),I=l.n(N),k=l(98423),X=l(4084),A=l(65632),Q=l(85061),$=l(75164);function v(n){var e,t=function(i){return function(){e=null,n.apply(void 0,(0,Q.Z)(i))}},r=function(){if(e==null){for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];e=(0,$.Z)(t(s))}};return r.cancel=function(){return $.Z.cancel(e)},r}function d(){return function(e,t,r){var a=r.value,i=!1;return{configurable:!0,get:function(){if(i||this===e.prototype||this.hasOwnProperty(t))return a;var c=v(a.bind(this));return i=!0,Object.defineProperty(this,t,{value:c,configurable:!0,writable:!0}),i=!1,c}}}}var b=l(64019);function g(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function w(n,e,t){if(t!==void 0&&e.top>n.top-t)return t+e.top}function U(n,e,t){if(t!==void 0&&e.bottom<n.bottom+t){var r=window.innerHeight-e.bottom;return t+r}}var ce=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],q=[];function xe(){return q}function ve(n,e){if(!!n){var t=q.find(function(r){return r.target===n});t?t.affixList.push(e):(t={target:n,affixList:[e],eventHandlers:{}},q.push(t),ce.forEach(function(r){t.eventHandlers[r]=(0,b.Z)(n,r,function(){t.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function me(n){var e=q.find(function(t){var r=t.affixList.some(function(a){return a===n});return r&&(t.affixList=t.affixList.filter(function(a){return a!==n})),r});e&&e.affixList.length===0&&(q=q.filter(function(t){return t!==e}),ce.forEach(function(t){var r=e.eventHandlers[t];r&&r.remove&&r.remove()}))}var ie=function(n,e,t,r){var a=arguments.length,i=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if((typeof Reflect=="undefined"?"undefined":(0,z.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var c=n.length-1;c>=0;c--)(s=n[c])&&(i=(a<3?s(i):a>3?s(e,t,i):s(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i};function E(){return typeof window!="undefined"?window:null}var Y;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(Y||(Y={}));var ne=function(n){(0,T.Z)(t,n);var e=(0,G.Z)(t);function t(){var r;return(0,W.Z)(this,t),r=e.apply(this,arguments),r.state={status:Y.None,lastAffix:!1,prevTarget:null},r.getOffsetTop=function(){var a=r.props.offsetBottom,i=r.props.offsetTop;return a===void 0&&i===void 0&&(i=0),i},r.getOffsetBottom=function(){return r.props.offsetBottom},r.savePlaceholderNode=function(a){r.placeholderNode=a},r.saveFixedNode=function(a){r.fixedNode=a},r.measure=function(){var a=r.state,i=a.status,s=a.lastAffix,c=r.props.onChange,f=r.getTargetFunc();if(!(i!==Y.Prepare||!r.fixedNode||!r.placeholderNode||!f)){var p=r.getOffsetTop(),h=r.getOffsetBottom(),y=f();if(!!y){var u={status:Y.None},m=g(y),P=g(r.placeholderNode),B=w(P,m,p),x=U(P,m,h);B!==void 0?(u.affixStyle={position:"fixed",top:B,width:P.width,height:P.height},u.placeholderStyle={width:P.width,height:P.height}):x!==void 0&&(u.affixStyle={position:"fixed",bottom:x,width:P.width,height:P.height},u.placeholderStyle={width:P.width,height:P.height}),u.lastAffix=!!u.affixStyle,c&&s!==u.lastAffix&&c(u.lastAffix),r.setState(u)}}},r.prepareMeasure=function(){if(r.setState({status:Y.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},r.render=function(){var a=r.context.getPrefixCls,i=r.state,s=i.affixStyle,c=i.placeholderStyle,f=r.props,p=f.prefixCls,h=f.children,y=I()((0,Z.Z)({},a("affix",p),!!s)),u=(0,k.Z)(r.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return o.createElement(X.Z,{onResize:function(){r.updatePosition()}},o.createElement("div",(0,C.Z)({},u,{ref:r.savePlaceholderNode}),s&&o.createElement("div",{style:c,"aria-hidden":"true"}),o.createElement("div",{className:y,ref:r.saveFixedNode,style:s},o.createElement(X.Z,{onResize:function(){r.updatePosition()}},h))))},r}return(0,re.Z)(t,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,i=this.props.target;return i!==void 0?i:a||E}},{key:"componentDidMount",value:function(){var a=this,i=this.getTargetFunc();i&&(this.timeout=setTimeout(function(){ve(i(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var i=this.state.prevTarget,s=this.getTargetFunc(),c=null;s&&(c=s()||null),i!==c&&(me(this),c&&(ve(c,this),this.updatePosition()),this.setState({prevTarget:c})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),me(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),i=this.state.affixStyle;if(a&&i){var s=this.getOffsetTop(),c=this.getOffsetBottom(),f=a();if(f&&this.placeholderNode){var p=g(f),h=g(this.placeholderNode),y=w(h,p,s),u=U(h,p,c);if(y!==void 0&&i.top===y||u!==void 0&&i.bottom===u)return}}this.prepareMeasure()}}]),t}(o.Component);ne.contextType=A.E_,ie([d()],ne.prototype,"updatePosition",null),ie([d()],ne.prototype,"lazyUpdatePosition",null);var ae=ne,Ce=l(84305),se=l(69224),nr=l(59903),ar=l(81262),or=l(30887),ir=l(59250),lr=l(94233),ke=l(28481),ge=l(28991),Ge={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Xe=Ge,Oe=l(27029),Ee=function(e,t){return o.createElement(Oe.Z,(0,ge.Z)((0,ge.Z)({},e),{},{ref:t,icon:Xe}))};Ee.displayName="ArrowLeftOutlined";var Ye=o.forwardRef(Ee),Ve={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Je=Ve,Re=function(e,t){return o.createElement(Oe.Z,(0,ge.Z)((0,ge.Z)({},e),{},{ref:t,icon:Je}))};Re.displayName="ArrowRightOutlined";var Qe=o.forwardRef(Re),qe=l(50344),et=l(57254),tt=l(81555),rt=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},Ne=function(e){var t=e.prefixCls,r=e.separator,a=r===void 0?"/":r,i=e.children,s=e.overlay,c=e.dropdownProps,f=rt(e,["prefixCls","separator","children","overlay","dropdownProps"]),p=o.useContext(A.E_),h=p.getPrefixCls,y=h("breadcrumb",t),u=function(B){return s?o.createElement(tt.Z,(0,C.Z)({overlay:s,placement:"bottomCenter"},c),o.createElement("span",{className:"".concat(y,"-overlay-link")},B,o.createElement(et.Z,null))):B},m;return"href"in f?m=o.createElement("a",(0,C.Z)({className:"".concat(y,"-link")},f),i):m=o.createElement("span",(0,C.Z)({className:"".concat(y,"-link")},f),i),m=u(m),i?o.createElement("span",null,m,a&&o.createElement("span",{className:"".concat(y,"-separator")},a)):null};Ne.__ANT_BREADCRUMB_ITEM=!0;var Te=Ne,Be=function(e){var t=e.children,r=o.useContext(A.E_),a=r.getPrefixCls,i=a("breadcrumb");return o.createElement("span",{className:"".concat(i,"-separator")},t||"/")};Be.__ANT_BREADCRUMB_SEPARATOR=!0;var nt=Be,De=l(99210),at=l(21687),ot=l(96159),it=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};function lt(n,e){if(!n.breadcrumbName)return null;var t=Object.keys(e).join("|"),r=n.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),function(a,i){return e[i]||a});return r}function ct(n,e,t,r){var a=t.indexOf(n)===t.length-1,i=lt(n,e);return a?o.createElement("span",null,i):o.createElement("a",{href:"#/".concat(r.join("/"))},i)}var Se=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach(function(r){e=e.replace(":".concat(r),t[r])}),e},st=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,a=(0,Q.Z)(e),i=Se(t,r);return i&&a.push(i),a},be=function(e){var t=e.prefixCls,r=e.separator,a=r===void 0?"/":r,i=e.style,s=e.className,c=e.routes,f=e.children,p=e.itemRender,h=p===void 0?ct:p,y=e.params,u=y===void 0?{}:y,m=it(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),P=o.useContext(A.E_),B=P.getPrefixCls,x=P.direction,O,_=B("breadcrumb",t);if(c&&c.length>0){var M=[];O=c.map(function(R){var j=Se(R.path,u);j&&M.push(j);var F;return R.children&&R.children.length&&(F=o.createElement(De.Z,null,R.children.map(function(J){return o.createElement(De.Z.Item,{key:J.path||J.breadcrumbName},h(J,u,c,st(M,J.path,u)))}))),o.createElement(Te,{overlay:F,separator:a,key:j||R.breadcrumbName},h(R,u,c,M))})}else f&&(O=(0,qe.Z)(f).map(function(R,j){return R&&((0,at.Z)(R.type&&(R.type.__ANT_BREADCRUMB_ITEM===!0||R.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,ot.Tm)(R,{separator:a,key:j}))}));var S=I()(_,(0,Z.Z)({},"".concat(_,"-rtl"),x==="rtl"),s);return o.createElement("div",(0,C.Z)({className:S,style:i},m),O)};be.Item=Te,be.Separator=nt;var ft=be,dt=ft,ut=l(51890),vt=l(34952),mt=l(42051),gt=function(e,t,r){return!t||!r?null:o.createElement(mt.Z,{componentName:"PageHeader"},function(a){var i=a.back;return o.createElement("div",{className:"".concat(e,"-back")},o.createElement(vt.Z,{onClick:function(c){r==null||r(c)},className:"".concat(e,"-back-button"),"aria-label":i},t))})},ht=function(e){return o.createElement(dt,e)},pt=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:t==="rtl"?o.createElement(Qe,null):o.createElement(Ye,null)},bt=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=t.title,i=t.avatar,s=t.subTitle,c=t.tags,f=t.extra,p=t.onBack,h="".concat(e,"-heading"),y=a||s||c||f;if(!y)return null;var u=pt(t,r),m=gt(e,u,p),P=m||i||y;return o.createElement("div",{className:h},P&&o.createElement("div",{className:"".concat(h,"-left")},m,i&&o.createElement(ut.C,i),a&&o.createElement("span",{className:"".concat(h,"-title"),title:typeof a=="string"?a:void 0},a),s&&o.createElement("span",{className:"".concat(h,"-sub-title"),title:typeof s=="string"?s:void 0},s),c&&o.createElement("span",{className:"".concat(h,"-tags")},c)),f&&o.createElement("span",{className:"".concat(h,"-extra")},f))},yt=function(e,t){return t?o.createElement("div",{className:"".concat(e,"-footer")},t):null},Pt=function(e,t){return o.createElement("div",{className:"".concat(e,"-content")},t)},xt=function(e){var t=o.useState(!1),r=(0,ke.Z)(t,2),a=r[0],i=r[1],s=function(f){var p=f.width;i(p<768)};return o.createElement(A.C,null,function(c){var f,p=c.getPrefixCls,h=c.pageHeader,y=c.direction,u=e.prefixCls,m=e.style,P=e.footer,B=e.children,x=e.breadcrumb,O=e.breadcrumbRender,_=e.className,M=!0;"ghost"in e?M=e.ghost:h&&"ghost"in h&&(M=h.ghost);var S=p("page-header",u),R=function(){var le;return((le=x)===null||le===void 0?void 0:le.routes)?ht(x):null},j=R(),F=x&&"props"in x,J=(O==null?void 0:O(e,j))||j,fe=F?x:J,pe=I()(S,_,(f={"has-breadcrumb":!!fe,"has-footer":!!P},(0,Z.Z)(f,"".concat(S,"-ghost"),M),(0,Z.Z)(f,"".concat(S,"-rtl"),y==="rtl"),(0,Z.Z)(f,"".concat(S,"-compact"),a),f));return o.createElement(X.Z,{onResize:s},o.createElement("div",{className:pe,style:m},fe,bt(S,e,y),B&&Pt(S,B),yt(S,P)))})},Ct=xt,cr=l(18106),we=l(51752),Me=l(64335),Ot=l(21349),Et=l(85224),sr=l(12395),Rt=l(83832);function Ae(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function Ze(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ae(Object(t),!0).forEach(function(r){Nt(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ae(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Nt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Tt(n,e){return wt(n)||St(n,e)||Dt(n,e)||Bt()}function Bt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dt(n,e){if(!!n){if(typeof n=="string")return je(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return je(n,e)}}function je(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function St(n,e){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,s,c;try{for(t=t.call(n);!(a=(s=t.next()).done)&&(r.push(s.value),!(e&&r.length===e));a=!0);}catch(f){i=!0,c=f}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw c}}return r}}function wt(n){if(Array.isArray(n))return n}var Mt=function(e){if(!e)return 1;var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t},At=function(e){var t=e.children,r=e.style,a=e.className,i=e.markStyle,s=e.markClassName,c=e.zIndex,f=c===void 0?9:c,p=e.gapX,h=p===void 0?212:p,y=e.gapY,u=y===void 0?222:y,m=e.width,P=m===void 0?120:m,B=e.height,x=B===void 0?64:B,O=e.rotate,_=O===void 0?-22:O,M=e.image,S=e.content,R=e.offsetLeft,j=e.offsetTop,F=e.fontStyle,J=F===void 0?"normal":F,fe=e.fontWeight,pe=fe===void 0?"normal":fe,Pe=e.fontColor,le=Pe===void 0?"rgba(0,0,0,.15)":Pe,We=e.fontSize,Ue=We===void 0?16:We,Fe=e.fontFamily,He=Fe===void 0?"sans-serif":Fe,$t=e.prefixCls,_t=(0,o.useContext)(se.ZP.ConfigContext),kt=_t.getPrefixCls,Ke=kt("pro-layout-watermark",$t),Gt=I()("".concat(Ke,"-wrapper"),a),Xt=I()(Ke,s),Yt=(0,o.useState)(""),ze=Tt(Yt,2),Vt=ze[0],$e=ze[1];return(0,o.useEffect)(function(){var de=document.createElement("canvas"),te=de.getContext("2d"),oe=Mt(te),Jt="".concat((h+P)*oe,"px"),Qt="".concat((u+x)*oe,"px"),qt=R||h/2,er=j||u/2;if(de.setAttribute("width",Jt),de.setAttribute("height",Qt),te){te.translate(qt*oe,er*oe),te.rotate(Math.PI/180*Number(_));var tr=P*oe,_e=x*oe;if(M){var ue=new Image;ue.crossOrigin="anonymous",ue.referrerPolicy="no-referrer",ue.src=M,ue.onload=function(){te.drawImage(ue,0,0,tr,_e),$e(de.toDataURL())}}else if(S){var rr=Number(Ue)*oe;te.font="".concat(J," normal ").concat(pe," ").concat(rr,"px/").concat(_e,"px ").concat(He),te.fillStyle=le,te.fillText(S,0,0),$e(de.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[h,u,R,j,_,J,pe,P,x,He,le,M,S,Ue]),o.createElement("div",{style:Ze({position:"relative"},r),className:Gt},t,o.createElement("div",{className:Xt,style:Ze({zIndex:f,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(h+P,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(Vt,"')")},i)}))},Zt=At,jt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],It=["children","loading","className","style","footer","affixProps","ghost","fixedHeader"];function Ie(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function V(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ie(Object(t),!0).forEach(function(r){ye(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ie(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function ye(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Le(n,e){if(n==null)return{};var t=Lt(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,r)||(t[r]=n[r]))}return t}function Lt(n,e){if(n==null)return{};var t={},r=Object.keys(n),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(t[a]=n[a]);return t}function ee(){return ee=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ee.apply(this,arguments)}function he(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?he=function(t){return typeof t}:he=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},he(n)}function Wt(n){return he(n)==="object"?n:{spinning:n}}var Ut=function(e){var t=e.tabList,r=e.tabActiveKey,a=e.onTabChange,i=e.tabBarExtraContent,s=e.tabProps,c=e.prefixedClassName;return t&&t.length||i?o.createElement(we.Z,ee({className:"".concat(c,"-tabs"),activeKey:r,onChange:function(p){a&&a(p)},tabBarExtraContent:i},s),t==null?void 0:t.map(function(f,p){return o.createElement(we.Z.TabPane,ee({},f,{tab:f.tab,key:f.key||p}))})):null},Ft=function(e,t,r){return!e&&!t?null:o.createElement("div",{className:"".concat(r,"-detail")},o.createElement("div",{className:"".concat(r,"-main")},o.createElement("div",{className:"".concat(r,"-row")},e&&o.createElement("div",{className:"".concat(r,"-content")},e),t&&o.createElement("div",{className:"".concat(r,"-extraContent")},t))))},fr=function(e){var t=useContext(RouteContext);return React.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},React.createElement(_Breadcrumb,ee({},t==null?void 0:t.breadcrumb,t==null?void 0:t.breadcrumbProps,e)))},Ht=function(e){var t,r=(0,o.useContext)(Me.Z),a=e.title,i=e.content,s=e.pageHeaderRender,c=e.header,f=e.prefixedClassName,p=e.extraContent,h=e.style,y=e.prefixCls,u=e.breadcrumbRender,m=Le(e,jt),P=(0,o.useMemo)(function(){if(!!u)return u},[u]);if(s===!1)return null;if(s)return o.createElement(o.Fragment,null," ",s(V(V({},e),r)));var B=a;!a&&a!==!1&&(B=r.title);var x=V(V(V({},r),{},{title:B},m),{},{footer:Ut(V(V({},m),{},{breadcrumbRender:u,prefixedClassName:f}))},c),O=x.breadcrumb,_=(!O||!(O==null?void 0:O.itemRender)&&!(O==null||(t=O.routes)===null||t===void 0?void 0:t.length))&&!u;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(M){return!x[M]})&&_&&!i&&!p?null:o.createElement("div",{className:"".concat(f,"-warp")},o.createElement(Ct,ee({},x,{breadcrumb:u===!1?void 0:V(V({},x.breadcrumb),r.breadcrumbProps),breadcrumbRender:P,prefixCls:y}),(c==null?void 0:c.children)||Ft(i,p,f)))},Kt=function(e){var t,r=e.children,a=e.loading,i=a===void 0?!1:a,s=e.className,c=e.style,f=e.footer,p=e.affixProps,h=e.ghost,y=e.fixedHeader,u=Le(e,It),m=(0,o.useContext)(Me.Z),P=(0,o.useContext)(se.ZP.ConfigContext),B=P.getPrefixCls,x=e.prefixCls||B("pro"),O="".concat(x,"-page-container"),_=I()(O,s,(t={},ye(t,"".concat(x,"-page-container-ghost"),h),ye(t,"".concat(x,"-page-container-with-footer"),f),t)),M=(0,o.useMemo)(function(){return r?o.createElement(o.Fragment,null,o.createElement("div",{className:"".concat(O,"-children-content")},r),m.hasFooterToolbar&&o.createElement("div",{style:{height:48,marginTop:24}})):null},[r,O,m.hasFooterToolbar]),S=o.createElement(Ht,ee({},u,{ghost:h,prefixCls:void 0,prefixedClassName:O})),R=(0,o.useMemo)(function(){if(o.isValidElement(i))return i;if(typeof i=="boolean"&&!i)return null;var F=Wt(i);return o.createElement(Rt.Z,F)},[i]),j=(0,o.useMemo)(function(){var F=R||M;return e.waterMarkProps||m.waterMarkProps?o.createElement(Zt,e.waterMarkProps||m.waterMarkProps,F):F},[e.waterMarkProps,m.waterMarkProps,R,M]);return o.createElement("div",{style:c,className:_},y&&S?o.createElement(ae,ee({offsetTop:m.hasHeader&&m.fixedHeader?m.headerHeight:0},p),S):S,j&&o.createElement(Ot.Z,null,j),f&&o.createElement(Et.Z,{prefixCls:x},f))},zt=Kt},56264:function(D){D.exports={"ant-pro-footer-bar":"ant-pro-footer-bar","ant-pro-footer-bar-left":"ant-pro-footer-bar-left","ant-pro-footer-bar-right":"ant-pro-footer-bar-right"}},53645:function(D){D.exports={"ant-pro-grid-content":"ant-pro-grid-content",wide:"wide"}},12395:function(D){D.exports={"ant-pro-page-container-children-content":"ant-pro-page-container-children-content","ant-pro-page-container-warp":"ant-pro-page-container-warp","ant-tabs-nav":"ant-tabs-nav","ant-pro-page-container-ghost":"ant-pro-page-container-ghost","ant-pro-page-container-main":"ant-pro-page-container-main","ant-pro-page-container-detail":"ant-pro-page-container-detail","ant-pro-page-container-row":"ant-pro-page-container-row","ant-pro-page-container-title-content":"ant-pro-page-container-title-content","ant-pro-page-container-title":"ant-pro-page-container-title","ant-pro-page-container-content":"ant-pro-page-container-content","ant-pro-page-container-extraContent":"ant-pro-page-container-extraContent","ant-pro-page-container-logo":"ant-pro-page-container-logo","ant-pro-page-container-action":"ant-pro-page-container-action"}},70883:function(D){D.exports={"ant-affix":"ant-affix"}},81262:function(D){D.exports={"ant-breadcrumb":"ant-breadcrumb",anticon:"anticon","ant-breadcrumb-separator":"ant-breadcrumb-separator","ant-breadcrumb-link":"ant-breadcrumb-link","ant-breadcrumb-overlay-link":"ant-breadcrumb-overlay-link","ant-breadcrumb-rtl":"ant-breadcrumb-rtl"}},59903:function(D){D.exports={"ant-page-header":"ant-page-header","ant-page-header-ghost":"ant-page-header-ghost","has-breadcrumb":"has-breadcrumb","has-footer":"has-footer","ant-page-header-back":"ant-page-header-back","ant-page-header-back-button":"ant-page-header-back-button","ant-divider-vertical":"ant-divider-vertical","ant-breadcrumb":"ant-breadcrumb","ant-page-header-heading":"ant-page-header-heading","ant-page-header-heading-left":"ant-page-header-heading-left","ant-page-header-heading-title":"ant-page-header-heading-title","ant-avatar":"ant-avatar","ant-page-header-heading-sub-title":"ant-page-header-heading-sub-title","ant-page-header-heading-extra":"ant-page-header-heading-extra","ant-page-header-content":"ant-page-header-content","ant-page-header-footer":"ant-page-header-footer","ant-tabs":"ant-tabs","ant-tabs-nav":"ant-tabs-nav","ant-tabs-tab":"ant-tabs-tab","ant-page-header-compact":"ant-page-header-compact","ant-page-header-rtl":"ant-page-header-rtl","ant-page-header-heading-tags":"ant-page-header-heading-tags","ant-tabs-bar":"ant-tabs-bar"}},34952:function(D,H,l){"use strict";var K=l(22122),L=l(67294),C=l(15105),Z=function(T,G){var z={};for(var o in T)Object.prototype.hasOwnProperty.call(T,o)&&G.indexOf(o)<0&&(z[o]=T[o]);if(T!=null&&typeof Object.getOwnPropertySymbols=="function")for(var N=0,o=Object.getOwnPropertySymbols(T);N<o.length;N++)G.indexOf(o[N])<0&&Object.prototype.propertyIsEnumerable.call(T,o[N])&&(z[o[N]]=T[o[N]]);return z},W={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},re=L.forwardRef(function(T,G){var z=function($){var v=$.keyCode;v===C.Z.ENTER&&$.preventDefault()},o=function($){var v=$.keyCode,d=T.onClick;v===C.Z.ENTER&&d&&d()},N=T.style,I=T.noStyle,k=T.disabled,X=Z(T,["style","noStyle","disabled"]),A={};return I||(A=(0,K.Z)({},W)),k&&(A.pointerEvents="none"),A=(0,K.Z)((0,K.Z)({},A),N),L.createElement("div",(0,K.Z)({role:"button",tabIndex:0,ref:G},X,{onKeyDown:z,onKeyUp:o,style:A}))});H.Z=re},97435:function(D,H){"use strict";function l(K,L){for(var C=Object.assign({},K),Z=0;Z<L.length;Z+=1){var W=L[Z];delete C[W]}return C}H.Z=l}}]);