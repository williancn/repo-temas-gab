import{j as s}from"./index-CSf31SO4.js";import{g as x}from"./KcPage-C4X81u5g.js";function h(m){const{kcContext:t,i18n:i,doUseDefaultCss:n,Template:d,classes:o}=m,{kcClsx:e}=x({doUseDefaultCss:n,classes:o}),{url:c,realm:l,auth:u,messagesPerField:r}=t,{msg:a,msgStr:p}=i;return s.jsx(d,{kcContext:t,i18n:i,doUseDefaultCss:n,classes:o,displayInfo:!0,displayMessage:!r.existsError("username"),infoNode:l.duplicateEmailsAllowed?a("emailInstructionUsername"):a("emailInstruction"),headerNode:a("emailForgotTitle"),children:s.jsxs("form",{id:"kc-reset-password-form",className:e("kcFormClass"),action:c.loginAction,method:"post",children:[s.jsxs("div",{className:e("kcFormGroupClass"),children:[s.jsx("div",{className:e("kcLabelWrapperClass"),children:s.jsx("label",{htmlFor:"username",className:e("kcLabelClass"),children:l.loginWithEmailAllowed?l.registrationEmailAsUsername?a("email"):a("usernameOrEmail"):a("username")})}),s.jsxs("div",{className:e("kcInputWrapperClass"),children:[s.jsx("input",{type:"text",id:"username",name:"username",className:e("kcInputClass"),autoFocus:!0,defaultValue:u.attemptedUsername??"","aria-invalid":r.existsError("username")}),r.existsError("username")&&s.jsx("span",{id:"input-error-username",className:e("kcInputErrorMessageClass"),"aria-live":"polite",children:r.get("username")})]})]}),s.jsx("div",{id:"kc-form-buttons",className:e("kcFormButtonsClass"),children:s.jsx("input",{className:e("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass"),type:"submit",value:p("doSubmit")})}),s.jsx("div",{className:e("kcFormGroupClass","kcFormSettingClass"),children:s.jsx("div",{id:"kc-form-options",className:e("kcFormOptionsClass"),children:s.jsx("div",{className:e("kcFormOptionsWrapperClass"),children:s.jsx("span",{children:s.jsx("a",{href:c.loginUrl,children:a("backToLogin")})})})})})]})})}export{h as default};