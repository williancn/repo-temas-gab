import{r as C,j as s}from"./index-CZQagKpW.js";import{g as h}from"./KcPage-Br_yE9qQ.js";function v(i){const{kcContext:c,i18n:e,doUseDefaultCss:t,Template:r,classes:l,UserProfileFormFields:m,doMakeUserConfirmPassword:p}=i,{kcClsx:a}=h({doUseDefaultCss:t,classes:l}),{url:n,messagesPerField:o,recaptchaRequired:g,recaptchaSiteKey:j,termsAcceptanceRequired:x}=c,{msg:d,msgStr:u}=e,[b,k]=C.useState(!1);return s.jsx(r,Object.assign({kcContext:c,i18n:e,doUseDefaultCss:t,classes:l,headerNode:d("registerTitle"),displayMessage:o.exists("global"),displayRequiredFields:!0},{children:s.jsxs("form",Object.assign({id:"kc-register-form",className:a("kcFormClass"),action:n.registrationAction,method:"post"},{children:[s.jsx(m,{kcContext:c,i18n:e,kcClsx:a,onIsFormSubmittableValueChange:k,doMakeUserConfirmPassword:p}),x&&s.jsx(f,{i18n:e,kcClsx:a,messagesPerField:o}),g&&s.jsx("div",Object.assign({className:"form-group"},{children:s.jsx("div",Object.assign({className:a("kcInputWrapperClass")},{children:s.jsx("div",{className:"g-recaptcha","data-size":"compact","data-sitekey":j})}))})),s.jsxs("div",Object.assign({className:a("kcFormGroupClass")},{children:[s.jsx("div",Object.assign({id:"kc-form-options",className:a("kcFormOptionsClass")},{children:s.jsx("div",Object.assign({className:a("kcFormOptionsWrapperClass")},{children:s.jsx("span",{children:s.jsx("a",Object.assign({href:n.loginUrl},{children:d("backToLogin")}))})}))})),s.jsx("div",Object.assign({id:"kc-form-buttons",className:a("kcFormButtonsClass")},{children:s.jsx("input",{disabled:!b,className:a("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass"),type:"submit",value:u("doRegister")})}))]}))]}))}))}function f(i){const{i18n:c,kcClsx:e,messagesPerField:t}=i,{msg:r}=c;return s.jsxs(s.Fragment,{children:[s.jsx("div",Object.assign({className:"form-group"},{children:s.jsxs("div",Object.assign({className:e("kcInputWrapperClass")},{children:[r("termsTitle"),s.jsx("div",Object.assign({id:"kc-registration-terms-text"},{children:r("termsText")}))]}))})),s.jsxs("div",Object.assign({className:"form-group"},{children:[s.jsxs("div",Object.assign({className:e("kcLabelWrapperClass")},{children:[s.jsx("input",{type:"checkbox",id:"termsAccepted",name:"termsAccepted",className:e("kcCheckboxInputClass"),"aria-invalid":t.existsError("termsAccepted")}),s.jsx("label",Object.assign({htmlFor:"termsAccepted",className:e("kcLabelClass")},{children:r("acceptTerms")}))]})),t.existsError("termsAccepted")&&s.jsx("div",Object.assign({className:e("kcLabelWrapperClass")},{children:s.jsx("span",Object.assign({id:"input-error-terms-accepted",className:e("kcInputErrorMessageClass"),"aria-live":"polite"},{children:t.get("termsAccepted")}))}))]}))]})}export{v as default};
