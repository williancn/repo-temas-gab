import{j as t}from"./index-CZQagKpW.js";import{g as m}from"./KcPage-Br_yE9qQ.js";function x(r){const{kcContext:s,i18n:n,doUseDefaultCss:a,Template:l,classes:o}=r,{url:c,isAppInitiatedAction:u}=s,{msg:d,msgStr:i}=n,{kcClsx:e}=m({doUseDefaultCss:a,classes:o});return t.jsxs(l,Object.assign({kcContext:s,i18n:n,doUseDefaultCss:a,classes:o,displayMessage:!0,headerNode:d("webauthn-error-title")},{children:[t.jsxs("form",Object.assign({id:"kc-error-credential-form",className:e("kcFormClass"),action:c.loginAction,method:"post"},{children:[t.jsx("input",{type:"hidden",id:"executionValue",name:"authenticationExecution"}),t.jsx("input",{type:"hidden",id:"isSetRetry",name:"isSetRetry"})]})),t.jsx("input",{tabIndex:4,onClick:()=>{document.getElementById("isSetRetry").value="retry",document.getElementById("executionValue").value="${execution}",document.getElementById("kc-error-credential-form").submit()},type:"button",className:e("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass"),name:"try-again",id:"kc-try-again",value:i("doTryAgain")}),u&&t.jsx("form",Object.assign({action:c.loginAction,className:e("kcFormClass"),id:"kc-webauthn-settings-form",method:"post"},{children:t.jsx("button",Object.assign({type:"submit",className:e("kcButtonClass","kcButtonDefaultClass","kcButtonBlockClass","kcButtonLargeClass"),id:"cancelWebAuthnAIA",name:"cancel-aia",value:"true"},{children:i("doCancel")}))}))]}))}export{x as default};
