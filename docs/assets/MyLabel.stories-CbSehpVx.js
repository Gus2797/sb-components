import{j as S}from"./jsx-runtime-CKrituN3.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const s=({label:o,size:g="normal",allCaps:v=!1,color:x,fontColor:_})=>S.jsx("span",{className:`${g} ${x} label`,style:{color:_},children:v?o.toUpperCase():o});try{s.displayName="MyLabel",s.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Capitalize all letters",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"Label color",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"Font color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const z={title:"UI/labels/MyLabel",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic label"}},a={args:{label:"All caps label",allCaps:!0}},r={args:{label:"Secondary label",color:"text-tertiary"}},l={args:{label:"Custom color label",fontColor:"red"}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Basic label'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,u,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'All caps label',
    allCaps: true
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var d,m,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    color: 'text-tertiary'
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var y,f,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Custom color label',
    fontColor: 'red'
  }
}`,...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const V=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,V as __namedExportsOrder,z as default};
