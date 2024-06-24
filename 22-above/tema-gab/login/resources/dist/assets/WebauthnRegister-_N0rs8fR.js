import{r as $,j as e}from"./index-CSf31SO4.js";import{g as v,u as w,a as u}from"./KcPage-C4X81u5g.js";function P(n){const{kcContext:s,i18n:r,doUseDefaultCss:i,Template:d,classes:l}=n,{kcClsx:t}=v({doUseDefaultCss:i,classes:l}),{url:a,challenge:p,userid:m,username:h,signatureAlgorithms:b,rpEntityName:g,rpId:y,attestationConveyancePreference:f,authenticatorAttachment:C,requireResidentKey:x,userVerificationRequirement:j,createTimeout:S,excludeCredentialIds:K,isSetRetry:A,isAppInitiatedAction:k}=s,{msg:o,msgStr:c}=r,{insertScriptTags:O}=w({componentOrHookName:"WebauthnRegister",scriptTags:[{type:"text/javascript",src:`${a.resourcesCommonPath}/node_modules/jquery/dist/jquery.min.js`},{type:"text/javascript",src:`${a.resourcesPath}/js/base64url.js`},{type:"text/javascript",textContent:`
                function registerSecurityKey() {

                    // Check if WebAuthn is supported by this browser
                    if (!window.PublicKeyCredential) {
                        $("#error").val("${c("webauthn-unsupported-browser-text")}");
                        $("#register").submit();
                        return;
                    }
    
                    // mandatory parameters
                    let challenge = "${p}";
                    let userid = "${m}";
                    let username = "${h}";
    
                    let signatureAlgorithms =${JSON.stringify(b)};
                    let pubKeyCredParams = getPubKeyCredParams(signatureAlgorithms);
    
                    let rpEntityName = "${g}";
                    let rp = {name: rpEntityName};
    
                    let publicKey = {
                        challenge: base64url.decode(challenge, {loose: true}),
                        rp: rp,
                        user: {
                            id: base64url.decode(userid, {loose: true}),
                            name: username,
                            displayName: username
                        },
                        pubKeyCredParams: pubKeyCredParams,
                    };
    
                    // optional parameters
                    let rpId = "${y}";
                    publicKey.rp.id = rpId;
    
                    let attestationConveyancePreference = "${f}";
                    if (attestationConveyancePreference !== 'not specified') publicKey.attestation = attestationConveyancePreference;
    
                    let authenticatorSelection = {};
                    let isAuthenticatorSelectionSpecified = false;
    
                    let authenticatorAttachment = "${C}";
                    if (authenticatorAttachment !== 'not specified') {
                        authenticatorSelection.authenticatorAttachment = authenticatorAttachment;
                        isAuthenticatorSelectionSpecified = true;
                    }
    
                    let requireResidentKey = "${x}";
                    if (requireResidentKey !== 'not specified') {
                        if (requireResidentKey === 'Yes')
                            authenticatorSelection.requireResidentKey = true;
                        else
                            authenticatorSelection.requireResidentKey = false;
                        isAuthenticatorSelectionSpecified = true;
                    }
    
                    let userVerificationRequirement = "${j}";
                    if (userVerificationRequirement !== 'not specified') {
                        authenticatorSelection.userVerification = userVerificationRequirement;
                        isAuthenticatorSelectionSpecified = true;
                    }
    
                    if (isAuthenticatorSelectionSpecified) publicKey.authenticatorSelection = authenticatorSelection;
    
                    let createTimeout = ${S};
                    if (createTimeout !== 0) publicKey.timeout = createTimeout * 1000;
    
                    let excludeCredentialIds = "${K}";
                    let excludeCredentials = getExcludeCredentials(excludeCredentialIds);
                    if (excludeCredentials.length > 0) publicKey.excludeCredentials = excludeCredentials;
    
                    navigator.credentials.create({publicKey})
                        .then(function (result) {
                            window.result = result;
                            let clientDataJSON = result.response.clientDataJSON;
                            let attestationObject = result.response.attestationObject;
                            let publicKeyCredentialId = result.rawId;
    
                            $("#clientDataJSON").val(base64url.encode(new Uint8Array(clientDataJSON), {pad: false}));
                            $("#attestationObject").val(base64url.encode(new Uint8Array(attestationObject), {pad: false}));
                            $("#publicKeyCredentialId").val(base64url.encode(new Uint8Array(publicKeyCredentialId), {pad: false}));
    
                            if (typeof result.response.getTransports === "function") {
                                let transports = result.response.getTransports();
                                if (transports) {
                                    $("#transports").val(getTransportsAsString(transports));
                                }
                            } else {
                                console.log("Your browser is not able to recognize supported transport media for the authenticator.");
                            }
    
                            let initLabel = "WebAuthn Authenticator (Default Label)";
                            let labelResult = window.prompt("Please input your registered authenticator's label", initLabel);
                            if (labelResult === null) labelResult = initLabel;
                            $("#authenticatorLabel").val(labelResult);
    
                            $("#register").submit();
    
                        })
                        .catch(function (err) {
                            $("#error").val(err);
                            $("#register").submit();
    
                        });
                }
    
                function getPubKeyCredParams(signatureAlgorithmsList) {
                    let pubKeyCredParams = [];
                    if (signatureAlgorithmsList === []) {
                        pubKeyCredParams.push({type: "public-key", alg: -7});
                        return pubKeyCredParams;
                    }
    
                    for (let i = 0; i < signatureAlgorithmsList.length; i++) {
                        pubKeyCredParams.push({
                            type: "public-key",
                            alg: signatureAlgorithmsList[i]
                        });
                    }
                    return pubKeyCredParams;
                }
    
                function getExcludeCredentials(excludeCredentialIds) {
                    let excludeCredentials = [];
                    if (excludeCredentialIds === "") return excludeCredentials;
    
                    let excludeCredentialIdsList = excludeCredentialIds.split(',');
    
                    for (let i = 0; i < excludeCredentialIdsList.length; i++) {
                        excludeCredentials.push({
                            type: "public-key",
                            id: base64url.decode(excludeCredentialIdsList[i],
                            {loose: true})
                        });
                    }
                    return excludeCredentials;
                }
    
                function getTransportsAsString(transportsList) {
                    if (transportsList === '' || transportsList.constructor !== Array) return "";
    
                    let transportsString = "";
    
                    for (let i = 0; i < transportsList.length; i++) {
                        transportsString += transportsList[i] + ",";
                    }
    
                    return transportsString.slice(0, -1);
                }
                `}]});return $.useEffect(()=>{O()},[]),e.jsxs(d,Object.assign({kcContext:s,i18n:r,doUseDefaultCss:i,classes:l,headerNode:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:t("kcWebAuthnKeyIcon")}),o("webauthn-registration-title")]})},{children:[e.jsx("form",Object.assign({id:"register",className:t("kcFormClass"),action:a.loginAction,method:"post"},{children:e.jsxs("div",Object.assign({className:t("kcFormGroupClass")},{children:[e.jsx("input",{type:"hidden",id:"clientDataJSON",name:"clientDataJSON"}),e.jsx("input",{type:"hidden",id:"attestationObject",name:"attestationObject"}),e.jsx("input",{type:"hidden",id:"publicKeyCredentialId",name:"publicKeyCredentialId"}),e.jsx("input",{type:"hidden",id:"authenticatorLabel",name:"authenticatorLabel"}),e.jsx("input",{type:"hidden",id:"transports",name:"transports"}),e.jsx("input",{type:"hidden",id:"error",name:"error"}),e.jsx(I,{kcClsx:t,i18n:r})]}))})),e.jsx("input",{type:"submit",className:t("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass"),id:"registerWebAuthn",value:c("doRegisterSecurityKey"),onClick:()=>{u.assert("registerSecurityKey"in window),u.assert(typeof window.registerSecurityKey=="function"),window.registerSecurityKey()}}),!A&&k&&e.jsx("form",Object.assign({action:a.loginAction,className:t("kcFormClass"),id:"kc-webauthn-settings-form",method:"post"},{children:e.jsx("button",Object.assign({type:"submit",className:t("kcButtonClass","kcButtonDefaultClass","kcButtonBlockClass","kcButtonLargeClass"),id:"cancelWebAuthnAIA",name:"cancel-aia",value:"true"},{children:o("doCancel")}))}))]}))}function I(n){const{kcClsx:s,i18n:r}=n,{msg:i}=r;return e.jsx("div",Object.assign({id:"kc-form-options",className:s("kcFormOptionsClass")},{children:e.jsx("div",Object.assign({className:s("kcFormOptionsWrapperClass")},{children:e.jsx("div",Object.assign({className:"checkbox"},{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",id:"logout-sessions",name:"logout-sessions",value:"on",defaultChecked:!0}),i("logoutOtherSessions")]})}))}))}))}export{P as default};
