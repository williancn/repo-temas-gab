import{r as x,j as s}from"./index-C1swb0FA.js";import{g as f}from"./KcPage-C3DXFsxa.js";function j(l){const{kcContext:t,i18n:o,doUseDefaultCss:a,Template:r,classes:i,UserProfileFormFields:c,doMakeUserConfirmPassword:n}=l,{kcClsx:e}=f({doUseDefaultCss:a,classes:i}),{msg:m,msgStr:d}=o,{url:u,messagesPerField:p}=t,[k,C]=x.useState(!1);return s.jsx(r,Object.assign({kcContext:t,i18n:o,doUseDefaultCss:a,classes:i,displayMessage:p.exists("global"),displayRequiredFields:!0,headerNode:m("loginIdpReviewProfileTitle")},{children:s.jsxs("form",Object.assign({id:"kc-idp-review-profile-form",className:e("kcFormClass"),action:u.loginAction,method:"post"},{children:[s.jsx(c,{kcContext:t,i18n:o,onIsFormSubmittableValueChange:C,kcClsx:e,doMakeUserConfirmPassword:n}),s.jsxs("div",Object.assign({className:e("kcFormGroupClass")},{children:[s.jsx("div",Object.assign({id:"kc-form-options",className:e("kcFormOptionsClass")},{children:s.jsx("div",{className:e("kcFormOptionsWrapperClass")})})),s.jsx("div",Object.assign({id:"kc-form-buttons",className:e("kcFormButtonsClass")},{children:s.jsx("input",{className:e("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass"),type:"submit",value:d("doSubmit"),disabled:!k})}))]}))]}))}))}export{j as default};