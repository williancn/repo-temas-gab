import{r as b,j as s}from"./index-CZQagKpW.js";import{g as f}from"./KcPage-Br_yE9qQ.js";function F(c){const{kcContext:t,i18n:a,doUseDefaultCss:o,Template:n,classes:i,UserProfileFormFields:m,doMakeUserConfirmPassword:d}=c,{kcClsx:e}=f({doUseDefaultCss:o,classes:i}),{messagesPerField:u,url:C,isAppInitiatedAction:l}=t,{msg:r,msgStr:k}=a,[p,x]=b.useState(!1);return s.jsx(n,Object.assign({kcContext:t,i18n:a,doUseDefaultCss:o,classes:i,displayRequiredFields:!0,headerNode:r("loginProfileTitle"),displayMessage:u.exists("global")},{children:s.jsxs("form",Object.assign({id:"kc-update-profile-form",className:e("kcFormClass"),action:C.loginAction,method:"post"},{children:[s.jsx(m,{kcContext:t,i18n:a,kcClsx:e,onIsFormSubmittableValueChange:x,doMakeUserConfirmPassword:d}),s.jsxs("div",Object.assign({className:e("kcFormGroupClass")},{children:[s.jsx("div",Object.assign({id:"kc-form-options",className:e("kcFormOptionsClass")},{children:s.jsx("div",{className:e("kcFormOptionsWrapperClass")})})),s.jsxs("div",Object.assign({id:"kc-form-buttons",className:e("kcFormButtonsClass")},{children:[s.jsx("input",{disabled:!p,className:e("kcButtonClass","kcButtonPrimaryClass",!l&&"kcButtonBlockClass","kcButtonLargeClass"),type:"submit",value:k("doSubmit")}),l&&s.jsx("button",Object.assign({className:e("kcButtonClass","kcButtonDefaultClass","kcButtonLargeClass"),type:"submit",name:"cancel-aia",value:"true",formNoValidate:!0},{children:r("doCancel")}))]}))]}))]}))}))}export{F as default};
