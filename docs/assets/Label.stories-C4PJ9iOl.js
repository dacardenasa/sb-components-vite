import{j as v}from"./jsx-runtime-QvZ8i92b.js";import"./index-uubelm5h.js";const C=({label:o,size:x="normal",allCaps:F=!1,color:f="text-primary",backgroundColor:L="#FFFFFF"})=>v.jsx("span",{className:`${x} ${f}`,style:{backgroundColor:L},children:F?o.toUpperCase():o});C.__docgenInfo={description:"",methods:[],displayName:"Label",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"Text size",defaultValue:{value:'"normal"',computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Text capitalized",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:"Text color",defaultValue:{value:'"text-primary"',computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"Label background color",defaultValue:{value:'"#FFFFFF"',computed:!1}}}};const S={title:"Example/Label",component:C,tags:["autodocs"],argTypes:{allCaps:{control:"boolean"},size:{control:"inline-radio"},color:{control:"inline-radio"},backgroundColor:{control:"color"}},parameters:{layout:"centered"}},e={args:{label:"Basic Label"}},a={args:{label:"AllCaps Label",allCaps:!0}},r={args:{label:"Secondary Label",color:"text-secondary"}},l={args:{label:"CustomColor Label",backgroundColor:"#FFF000"}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "Basic Label"
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "AllCaps Label",
    allCaps: true
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,m,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Secondary Label",
    color: "text-secondary"
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var b,y,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "CustomColor Label",
    backgroundColor: "#FFF000"
  }
}`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const k=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,k as __namedExportsOrder,S as default};
