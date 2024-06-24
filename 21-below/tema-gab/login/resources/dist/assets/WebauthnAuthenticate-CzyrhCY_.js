import{r as b,j as e}from"./index-CZQagKpW.js";import{g as _,u as F,c as j,a as g}from"./KcPage-Br_yE9qQ.js";function T(x){const{kcContext:u,i18n:o,doUseDefaultCss:d,Template:f,classes:h}=x,{kcClsx:t}=_({doUseDefaultCss:d,classes:h}),{url:i,isUserIdentified:w,challenge:k,userVerification:C,rpId:A,createTimeout:y,messagesPerField:v,realm:p,registrationDisabled:N,authenticators:r,shouldDisplayAuthenticators:I}=u,{msg:n,msgStr:m,advancedMsg:O}=o,{insertScriptTags:D}=F({componentOrHookName:"WebauthnAuthenticate",scriptTags:[{type:"text/javascript",src:`${i.resourcesCommonPath}/node_modules/jquery/dist/jquery.min.js`},{type:"text/javascript",src:`${i.resourcesPath}/js/base64url.js`},{type:"text/javascript",textContent:`

                    function webAuthnAuthenticate() {
                        let isUserIdentified = ${w};
                        if (!isUserIdentified) {
                            doAuthenticate([]);
                            return;
                        }
                        checkAllowCredentials();
                    }

                    function checkAllowCredentials() {
                        let allowCredentials = [];
                        let authn_use = document.forms['authn_select'].authn_use_chk;
                    
                        if (authn_use !== undefined) {
                            if (authn_use.length === undefined) {
                                allowCredentials.push({
                                    id: base64url.decode(authn_use.value, {loose: true}),
                                    type: 'public-key',
                                });
                            } else {
                                for (let i = 0; i < authn_use.length; i++) {
                                    allowCredentials.push({
                                        id: base64url.decode(authn_use[i].value, {loose: true}),
                                        type: 'public-key',
                                    });
                                }
                            }
                        }
                        doAuthenticate(allowCredentials);
                    }


                    function doAuthenticate(allowCredentials) {
                    
                        // Check if WebAuthn is supported by this browser
                        if (!window.PublicKeyCredential) {
                            $("#error").val("${m("webauthn-unsupported-browser-text")}");
                            $("#webauth").submit();
                            return;
                        }
                    
                        let challenge = "${k}";
                        let userVerification = "${C}";
                        let rpId = "${A}";
                        let publicKey = {
                            rpId : rpId,
                            challenge: base64url.decode(challenge, { loose: true })
                        };
                    
                        let createTimeout = ${y};
                        if (createTimeout !== 0) publicKey.timeout = createTimeout * 1000;
                    
                        if (allowCredentials.length) {
                            publicKey.allowCredentials = allowCredentials;
                        }
                    
                        if (userVerification !== 'not specified') publicKey.userVerification = userVerification;
                    
                        navigator.credentials.get({publicKey})
                            .then((result) => {
                                window.result = result;
                            
                                let clientDataJSON = result.response.clientDataJSON;
                                let authenticatorData = result.response.authenticatorData;
                                let signature = result.response.signature;
                            
                                $("#clientDataJSON").val(base64url.encode(new Uint8Array(clientDataJSON), { pad: false }));
                                $("#authenticatorData").val(base64url.encode(new Uint8Array(authenticatorData), { pad: false }));
                                $("#signature").val(base64url.encode(new Uint8Array(signature), { pad: false }));
                                $("#credentialId").val(result.id);
                                if(result.response.userHandle) {
                                    $("#userHandle").val(base64url.encode(new Uint8Array(result.response.userHandle), { pad: false }));
                                }
                                $("#webauth").submit();
                            })
                            .catch((err) => {
                                $("#error").val(err);
                                $("#webauth").submit();
                            })
                        ;
                    }

                `}]});return b.useEffect(()=>{D()},[]),e.jsx(f,Object.assign({kcContext:u,i18n:o,doUseDefaultCss:d,classes:h,displayMessage:!v.existsError("username"),displayInfo:p.password&&p.registrationAllowed&&!N,infoNode:e.jsx("div",Object.assign({id:"kc-registration"},{children:e.jsxs("span",{children:[n("noAccount")," ",e.jsx("a",Object.assign({tabIndex:6,href:i.registrationUrl},{children:n("doRegister")}))]})})),headerNode:n("webauthn-login-title")},{children:e.jsxs("div",Object.assign({id:"kc-form-webauthn",className:t("kcFormClass")},{children:[e.jsxs("form",Object.assign({id:"webauth",action:i.loginAction,method:"post"},{children:[e.jsx("input",{type:"hidden",id:"clientDataJSON",name:"clientDataJSON"}),e.jsx("input",{type:"hidden",id:"authenticatorData",name:"authenticatorData"}),e.jsx("input",{type:"hidden",id:"signature",name:"signature"}),e.jsx("input",{type:"hidden",id:"credentialId",name:"credentialId"}),e.jsx("input",{type:"hidden",id:"userHandle",name:"userHandle"}),e.jsx("input",{type:"hidden",id:"error",name:"error"})]})),e.jsxs("div",Object.assign({className:j(t("kcFormGroupClass"),"no-bottom-margin")},{children:[r&&e.jsxs(e.Fragment,{children:[e.jsx("form",Object.assign({id:"authn_select",className:t("kcFormClass")},{children:r.authenticators.map(s=>e.jsx("input",{type:"hidden",name:"authn_use_chk",value:s.credentialId}))})),I&&e.jsxs(e.Fragment,{children:[r.authenticators.length>1&&e.jsx("p",Object.assign({className:t("kcSelectAuthListItemTitle")},{children:n("webauthn-available-authenticators")})),e.jsx("div",Object.assign({className:t("kcFormOptionsClass")},{children:r.authenticators.map((s,S)=>{var l;return e.jsxs("div",Object.assign({id:"kc-webauthn-authenticator",className:t("kcSelectAuthListItemClass")},{children:[e.jsx("div",Object.assign({className:t("kcSelectAuthListItemIconClass")},{children:e.jsx("i",{className:j((()=>{const a=t(s.transports.iconClass);return a===s.transports.iconClass?t("kcWebAuthnDefaultIcon"):a})(),t("kcSelectAuthListItemIconPropertyClass"))})})),e.jsxs("div",Object.assign({className:t("kcSelectAuthListItemArrowIconClass")},{children:[e.jsx("div",Object.assign({id:"kc-webauthn-authenticator-label",className:t("kcSelectAuthListItemHeadingClass")},{children:O(s.label)})),((l=s.transports.displayNameProperties)===null||l===void 0?void 0:l.length)&&e.jsx("div",Object.assign({id:"kc-webauthn-authenticator-transport",className:t("kcSelectAuthListItemDescriptionClass")},{children:s.transports.displayNameProperties.map((a,c,$)=>({nameProperty:a,hasNext:c!==$.length-1})).map(({nameProperty:a,hasNext:c})=>e.jsxs(b.Fragment,{children:[e.jsx("span",{children:n(a)}),c&&e.jsx("span",{children:", "})]},a))})),e.jsxs("div",Object.assign({className:t("kcSelectAuthListItemDescriptionClass")},{children:[e.jsx("span",Object.assign({id:"kc-webauthn-authenticator-created-label"},{children:n("webauthn-createdAt-label")})),e.jsx("span",Object.assign({id:"kc-webauthn-authenticator-created"},{children:s.createdAt}))]})),e.jsx("div",{className:t("kcSelectAuthListItemFillClass")})]}))]}),S)})}))]})]}),e.jsx("div",Object.assign({id:"kc-form-buttons",className:t("kcFormButtonsClass")},{children:e.jsx("input",{id:"authenticateWebAuthnButton",type:"button",onClick:()=>{g.assert("webAuthnAuthenticate"in window),g.assert(typeof window.webAuthnAuthenticate=="function"),window.webAuthnAuthenticate()},autoFocus:!0,value:m("webauthn-doAuthenticate"),className:t("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass")})}))]}))]}))}))}export{T as default};
