"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[90],{3053:function(e,a,s){var i=s(1413),r=s(5987),l=s(1694),t=s.n(l),o=s(2791),n=s(323),c=s(162),d=s(3329),f=["bsPrefix","className","children","controlId","label"],v=o.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.children,v=e.controlId,m=e.label,u=(0,r.Z)(e,f);return s=(0,c.vE)(s,"form-floating"),(0,d.jsxs)(n.Z,(0,i.Z)((0,i.Z)({ref:a,className:t()(l,s),controlId:v},u),{},{children:[o,(0,d.jsx)("label",{htmlFor:v,children:m})]}))}));v.displayName="FloatingLabel",a.Z=v},3090:function(e,a,s){s.d(a,{Z:function(){return ae}});var i=s(1413),r=s(5987),l=s(1694),t=s.n(l),o=s(2007),n=s.n(o),c=s(2791),d=s(3329),f=["as","className","type","tooltip"],v={type:n().string,tooltip:n().bool,as:n().elementType},m=c.forwardRef((function(e,a){var s=e.as,l=void 0===s?"div":s,o=e.className,n=e.type,c=void 0===n?"valid":n,v=e.tooltip,m=void 0!==v&&v,u=(0,r.Z)(e,f);return(0,d.jsx)(l,(0,i.Z)((0,i.Z)({},u),{},{ref:a,className:t()(o,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v;var u=m,p=s(4934),b=s(162),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],Z=c.forwardRef((function(e,a){var s=e.id,l=e.bsPrefix,o=e.className,n=e.type,f=void 0===n?"checkbox":n,v=e.isValid,m=void 0!==v&&v,u=e.isInvalid,Z=void 0!==u&&u,h=e.as,N=void 0===h?"input":h,y=(0,r.Z)(e,x),j=(0,c.useContext)(p.Z).controlId;return l=(0,b.vE)(l,"form-check-input"),(0,d.jsx)(N,(0,i.Z)((0,i.Z)({},y),{},{ref:a,type:f,id:s||j,className:t()(o,l,m&&"is-valid",Z&&"is-invalid")}))}));Z.displayName="FormCheckInput";var h=Z,N=["bsPrefix","className","htmlFor"],y=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.htmlFor,n=(0,r.Z)(e,N),f=(0,c.useContext)(p.Z).controlId;return s=(0,b.vE)(s,"form-check-label"),(0,d.jsx)("label",(0,i.Z)((0,i.Z)({},n),{},{ref:a,htmlFor:o||f,className:t()(l,s)}))}));y.displayName="FormCheckLabel";var j=y;var w=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],I=c.forwardRef((function(e,a){var s=e.id,l=e.bsPrefix,o=e.bsSwitchPrefix,n=e.inline,f=void 0!==n&&n,v=e.reverse,m=void 0!==v&&v,x=e.disabled,Z=void 0!==x&&x,N=e.isValid,y=void 0!==N&&N,I=e.isInvalid,P=void 0!==I&&I,k=e.feedbackTooltip,F=void 0!==k&&k,C=e.feedback,g=e.feedbackType,R=e.className,E=e.style,z=e.title,S=void 0===z?"":z,T=e.type,V=void 0===T?"checkbox":T,L=e.label,O=e.children,_=e.as,G=void 0===_?"input":_,H=(0,r.Z)(e,w);l=(0,b.vE)(l,"form-check"),o=(0,b.vE)(o,"form-switch");var M=(0,c.useContext)(p.Z).controlId,A=(0,c.useMemo)((function(){return{controlId:s||M}}),[M,s]),q=!O&&null!=L&&!1!==L||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(O,j),B=(0,d.jsx)(h,(0,i.Z)((0,i.Z)({},H),{},{type:"switch"===V?"checkbox":V,ref:a,isValid:y,isInvalid:P,disabled:Z,as:G}));return(0,d.jsx)(p.Z.Provider,{value:A,children:(0,d.jsx)("div",{style:E,className:t()(R,q&&l,f&&"".concat(l,"-inline"),m&&"".concat(l,"-reverse"),"switch"===V&&o),children:O||(0,d.jsxs)(d.Fragment,{children:[B,q&&(0,d.jsx)(j,{title:S,children:L}),C&&(0,d.jsx)(u,{type:g,tooltip:F,children:C})]})})})}));I.displayName="FormCheck";var P=Object.assign(I,{Input:h,Label:j}),k=s(4942),F=(s(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),C=c.forwardRef((function(e,a){var s,l,o=e.bsPrefix,n=e.type,f=e.size,v=e.htmlSize,m=e.id,u=e.className,x=e.isValid,Z=void 0!==x&&x,h=e.isInvalid,N=void 0!==h&&h,y=e.plaintext,j=e.readOnly,w=e.as,I=void 0===w?"input":w,P=(0,r.Z)(e,F),C=(0,c.useContext)(p.Z).controlId;(o=(0,b.vE)(o,"form-control"),y)?s=(0,k.Z)({},"".concat(o,"-plaintext"),!0):(l={},(0,k.Z)(l,o,!0),(0,k.Z)(l,"".concat(o,"-").concat(f),f),s=l);return(0,d.jsx)(I,(0,i.Z)((0,i.Z)({},P),{},{type:n,size:v,ref:a,readOnly:j,id:m||C,className:t()(u,s,Z&&"is-valid",N&&"is-invalid","color"===n&&"".concat(o,"-color"))}))}));C.displayName="FormControl";var g=Object.assign(C,{Feedback:u}),R=(0,s(6543).Z)("form-floating"),E=s(323),z=s(885),S=["as","bsPrefix","className"],T=["className"];var V=c.forwardRef((function(e,a){var s=function(e){var a=e.as,s=e.bsPrefix,l=e.className,o=(0,r.Z)(e,S);s=(0,b.vE)(s,"col");var n=(0,b.pi)(),c=(0,b.zG)(),d=[],f=[];return n.forEach((function(e){var a,i,r,l=o[e];delete o[e],"object"===typeof l&&null!=l?(a=l.span,i=l.offset,r=l.order):a=l;var t=e!==c?"-".concat(e):"";a&&d.push(!0===a?"".concat(s).concat(t):"".concat(s).concat(t,"-").concat(a)),null!=r&&f.push("order".concat(t,"-").concat(r)),null!=i&&f.push("offset".concat(t,"-").concat(i))})),[(0,i.Z)((0,i.Z)({},o),{},{className:t().apply(void 0,[l].concat(d,f))}),{as:a,bsPrefix:s,spans:d}]}(e),l=(0,z.Z)(s,2),o=l[0],n=o.className,c=(0,r.Z)(o,T),f=l[1],v=f.as,m=void 0===v?"div":v,u=f.bsPrefix,p=f.spans;return(0,d.jsx)(m,(0,i.Z)((0,i.Z)({},c),{},{ref:a,className:t()(n,!p.length&&u)}))}));V.displayName="Col";var L=V,O=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],_=c.forwardRef((function(e,a){var s=e.as,l=void 0===s?"label":s,o=e.bsPrefix,n=e.column,f=e.visuallyHidden,v=e.className,m=e.htmlFor,u=(0,r.Z)(e,O),x=(0,c.useContext)(p.Z).controlId;o=(0,b.vE)(o,"form-label");var Z="col-form-label";"string"===typeof n&&(Z="".concat(Z," ").concat(Z,"-").concat(n));var h=t()(v,o,f&&"visually-hidden",n&&Z);return m=m||x,n?(0,d.jsx)(L,(0,i.Z)({ref:a,as:"label",className:h,htmlFor:m},u)):(0,d.jsx)(l,(0,i.Z)({ref:a,className:h,htmlFor:m},u))}));_.displayName="FormLabel",_.defaultProps={column:!1,visuallyHidden:!1};var G=_,H=["bsPrefix","className","id"],M=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.id,n=(0,r.Z)(e,H),f=(0,c.useContext)(p.Z).controlId;return s=(0,b.vE)(s,"form-range"),(0,d.jsx)("input",(0,i.Z)((0,i.Z)({},n),{},{type:"range",ref:a,className:t()(l,s),id:o||f}))}));M.displayName="FormRange";var A=M,q=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],B=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.size,o=e.htmlSize,n=e.className,f=e.isValid,v=void 0!==f&&f,m=e.isInvalid,u=void 0!==m&&m,x=e.id,Z=(0,r.Z)(e,q),h=(0,c.useContext)(p.Z).controlId;return s=(0,b.vE)(s,"form-select"),(0,d.jsx)("select",(0,i.Z)((0,i.Z)({},Z),{},{size:o,ref:a,className:t()(n,s,l&&"".concat(s,"-").concat(l),v&&"is-valid",u&&"is-invalid"),id:x||h}))}));B.displayName="FormSelect";var D=B,J=["bsPrefix","className","as","muted"],K=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.as,n=void 0===o?"small":o,c=e.muted,f=(0,r.Z)(e,J);return s=(0,b.vE)(s,"form-text"),(0,d.jsx)(n,(0,i.Z)((0,i.Z)({},f),{},{ref:a,className:t()(l,s,c&&"text-muted")}))}));K.displayName="FormText";var Q=K,U=c.forwardRef((function(e,a){return(0,d.jsx)(P,(0,i.Z)((0,i.Z)({},e),{},{ref:a,type:"switch"}))}));U.displayName="Switch";var W=Object.assign(U,{Input:P.Input,Label:P.Label}),X=s(3053),Y=["className","validated","as"],$={_ref:n().any,validated:n().bool,as:n().elementType},ee=c.forwardRef((function(e,a){var s=e.className,l=e.validated,o=e.as,n=void 0===o?"form":o,c=(0,r.Z)(e,Y);return(0,d.jsx)(n,(0,i.Z)((0,i.Z)({},c),{},{ref:a,className:t()(s,l&&"was-validated")}))}));ee.displayName="Form",ee.propTypes=$;var ae=Object.assign(ee,{Group:E.Z,Control:g,Floating:R,Check:P,Switch:W,Label:G,Text:Q,Range:A,Select:D,FloatingLabel:X.Z})},4934:function(e,a,s){var i=s(2791).createContext({});a.Z=i},323:function(e,a,s){var i=s(1413),r=s(5987),l=s(2791),t=s(4934),o=s(3329),n=["controlId","as"],c=l.forwardRef((function(e,a){var s=e.controlId,c=e.as,d=void 0===c?"div":c,f=(0,r.Z)(e,n),v=(0,l.useMemo)((function(){return{controlId:s}}),[s]);return(0,o.jsx)(t.Z.Provider,{value:v,children:(0,o.jsx)(d,(0,i.Z)((0,i.Z)({},f),{},{ref:a}))})}));c.displayName="FormGroup",a.Z=c},2391:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=90.3cca4107.chunk.js.map