"use strict";(self.webpackChunkwood_crafts=self.webpackChunkwood_crafts||[]).push([[758],{3758:(e,r,a)=>{a.r(r),a.d(r,{default:()=>N});var t=a(2791),o=a(403),s=a(4554),n=a(3366),i=a(7462),l=a(3733),c=a(4419),d=a(6934),m=a(1402),u=a(9201),p=a(3329);const h=(0,u.Z)((0,p.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var x=a(5878),f=a(1217);function v(e){return(0,f.Z)("MuiAvatar",e)}(0,x.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Z=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,d.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,r[a.variant],a.colorDefault&&r.colorDefault]}})((e=>{let{theme:r,ownerState:a}=e;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===a.variant&&{borderRadius:(r.vars||r).shape.borderRadius},"square"===a.variant&&{borderRadius:0},a.colorDefault&&(0,i.Z)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),j=(0,d.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,d.ZP)(h,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"});const w=t.forwardRef((function(e,r){const a=(0,m.Z)({props:e,name:"MuiAvatar"}),{alt:o,children:s,className:d,component:u="div",imgProps:h,sizes:x,src:f,srcSet:w,variant:y="circular"}=a,S=(0,n.Z)(a,Z);let k=null;const P=function(e){let{crossOrigin:r,referrerPolicy:a,src:o,srcSet:s}=e;const[n,i]=t.useState(!1);return t.useEffect((()=>{if(!o&&!s)return;i(!1);let e=!0;const t=new Image;return t.onload=()=>{e&&i("loaded")},t.onerror=()=>{e&&i("error")},t.crossOrigin=r,t.referrerPolicy=a,t.src=o,s&&(t.srcset=s),()=>{e=!1}}),[r,a,o,s]),n}((0,i.Z)({},h,{src:f,srcSet:w})),C=f||w,D=C&&"error"!==P,A=(0,i.Z)({},a,{colorDefault:!D,component:u,variant:y}),N=(e=>{const{classes:r,variant:a,colorDefault:t}=e,o={root:["root",a,t&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,c.Z)(o,v,r)})(A);return k=D?(0,p.jsx)(j,(0,i.Z)({alt:o,srcSet:w,src:f,sizes:x,ownerState:A,className:N.img},h)):null!=s?s:C&&o?o[0]:(0,p.jsx)(b,{ownerState:A,className:N.fallback}),(0,p.jsx)(g,(0,i.Z)({as:u,ownerState:A,className:(0,l.Z)(N.root,d),ref:r},S,{children:k}))}));var y=a(890),S=a(7391),k=a(4989),P=a(9174),C=a(4294),D=a(1889),A=a(7689);function N(){const[e,r]=t.useState(!0),a=(0,A.s0)(),n=e=>{e.preventDefault();const r=new FormData(e.currentTarget);console.log({email:r.get("email"),password:r.get("password")})};return(0,p.jsx)(s.Z,{sx:{marginTop:"180px"},children:e?(0,p.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,p.jsx)(w,{sx:{m:1,bgcolor:"secondary.main"},children:(0,p.jsx)(o.Z,{})}),(0,p.jsx)(y.Z,{component:"h1",variant:"h5",children:"Sign in"}),(0,p.jsxs)(s.Z,{component:"form",onSubmit:n,noValidate:!0,sx:{mt:1},children:[(0,p.jsx)(S.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),(0,p.jsx)(S.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),(0,p.jsx)(k.Z,{control:(0,p.jsx)(P.Z,{value:"remember",color:"primary"}),label:"Remember me"}),(0,p.jsx)(C.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},onClick:()=>a("/admin/products"),children:"Sign In"}),(0,p.jsx)(D.ZP,{container:!0,children:(0,p.jsx)(D.ZP,{item:!0,children:(0,p.jsx)(C.Z,{onClick:()=>r(!1),variant:"body2",children:"Don't have an account? Sign Up"})})})]})]}):(0,p.jsxs)(s.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,p.jsx)(w,{sx:{m:1,bgcolor:"secondary.main"},children:(0,p.jsx)(o.Z,{})}),(0,p.jsx)(y.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,p.jsxs)(s.Z,{component:"form",noValidate:!0,onSubmit:n,sx:{mt:3},children:[(0,p.jsxs)(D.ZP,{container:!0,spacing:2,children:[(0,p.jsx)(D.ZP,{item:!0,xs:12,sm:6,children:(0,p.jsx)(S.Z,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),(0,p.jsx)(D.ZP,{item:!0,xs:12,sm:6,children:(0,p.jsx)(S.Z,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name"})}),(0,p.jsx)(D.ZP,{item:!0,xs:12,children:(0,p.jsx)(S.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,p.jsx)(D.ZP,{item:!0,xs:12,children:(0,p.jsx)(S.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})}),(0,p.jsx)(D.ZP,{item:!0,xs:12,children:(0,p.jsx)(k.Z,{control:(0,p.jsx)(P.Z,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),(0,p.jsx)(C.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},onClick:()=>a("/admin/products"),children:"Sign Up"}),(0,p.jsx)(D.ZP,{container:!0,justifyContent:"flex-end",children:(0,p.jsx)(D.ZP,{item:!0,children:(0,p.jsx)(C.Z,{onClick:()=>r(!0),variant:"body2",children:"Already have an account? Sign in"})})})]})]})})}},403:(e,r,a)=>{var t=a(4836);r.Z=void 0;var o=t(a(5649)),s=a(3329),n=(0,o.default)((0,s.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");r.Z=n}}]);
//# sourceMappingURL=758.7fef0713.chunk.js.map