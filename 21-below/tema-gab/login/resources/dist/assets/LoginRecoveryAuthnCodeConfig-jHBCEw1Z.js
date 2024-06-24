import{r as C,j as e}from"./index-CZQagKpW.js";import{g,u as h,c as i}from"./KcPage-Br_yE9qQ.js";function j(a){const{kcContext:s,i18n:c,doUseDefaultCss:r,Template:p,classes:u}=a,{kcClsx:t}=g({doUseDefaultCss:r,classes:u}),{recoveryAuthnCodesConfigBean:d,isAppInitiatedAction:y}=s,{msg:n,msgStr:o}=c,{insertScriptTags:v}=h({componentOrHookName:"LoginRecoveryAuthnCodeConfig",scriptTags:[{type:"text/javascript",textContent:`

                    /* copy recovery codes  */
                    function copyRecoveryCodes() {
                        var tmpTextarea = document.createElement("textarea");
                        var codes = document.getElementById("kc-recovery-codes-list").getElementsByTagName("li");
                        for (i = 0; i < codes.length; i++) {
                            tmpTextarea.value = tmpTextarea.value + codes[i].innerText + "\\n";
                        }
                        document.body.appendChild(tmpTextarea);
                        tmpTextarea.select();
                        document.execCommand("copy");
                        document.body.removeChild(tmpTextarea);
                    }

                    var copyButton = document.getElementById("copyRecoveryCodes");
                    copyButton && copyButton.addEventListener("click", function () {
                        copyRecoveryCodes();
                    });

                    /* download recovery codes  */
                    function formatCurrentDateTime() {
                        var dt = new Date();
                        var options = {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            timeZoneName: 'short'
                        };

                        return dt.toLocaleString('en-US', options);
                    }

                    function parseRecoveryCodeList() {
                        var recoveryCodes = document.querySelectorAll(".kc-recovery-codes-list li");
                        var recoveryCodeList = "";

                        for (var i = 0; i < recoveryCodes.length; i++) {
                            var recoveryCodeLiElement = recoveryCodes[i].innerText;
                            recoveryCodeList += recoveryCodeLiElement + "\\r\\n";
                        }

                        return recoveryCodeList;
                    }

                    function buildDownloadContent() {
                        var recoveryCodeList = parseRecoveryCodeList();
                        var dt = new Date();
                        var options = {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            timeZoneName: 'short'
                        };

                        return fileBodyContent =
                            "${o("recovery-codes-download-file-header")}\\n\\n" +
                            recoveryCodeList + "\\n" +
                            "${o("recovery-codes-download-file-description")}\\n\\n" +
                            "${o("recovery-codes-download-file-date")} " + formatCurrentDateTime();
                    }

                    function setUpDownloadLinkAndDownload(filename, text) {
                        var el = document.createElement('a');
                        el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
                        el.setAttribute('download', filename);
                        el.style.display = 'none';
                        document.body.appendChild(el);
                        el.click();
                        document.body.removeChild(el);
                    }

                    function downloadRecoveryCodes() {
                        setUpDownloadLinkAndDownload('kc-download-recovery-codes.txt', buildDownloadContent());
                    }

                    var downloadButton = document.getElementById("downloadRecoveryCodes");
                    downloadButton && downloadButton.addEventListener("click", downloadRecoveryCodes);

                    /* print recovery codes */
                    function buildPrintContent() {
                        var recoveryCodeListHTML = document.getElementById('kc-recovery-codes-list').innerHTML;
                        var styles =
                            \`@page { size: auto;  margin-top: 0; }
                            body { width: 480px; }
                            div { list-style-type: none; font-family: monospace }
                            p:first-of-type { margin-top: 48px }\`;

                        return printFileContent =
                            "<html><style>" + styles + "</style><body>" +
                            "<title>kc-download-recovery-codes</title>" +
                            "<p>${o("recovery-codes-download-file-header")}</p>" +
                            "<div>" + recoveryCodeListHTML + "</div>" +
                            "<p>${o("recovery-codes-download-file-description")}</p>" +
                            "<p>${o("recovery-codes-download-file-date")} " + formatCurrentDateTime() + "</p>" +
                            "</body></html>";
                    }

                    function printRecoveryCodes() {
                        var w = window.open();
                        w.document.write(buildPrintContent());
                        w.print();
                        w.close();
                    }

                    var printButton = document.getElementById("printRecoveryCodes");
                    printButton && printButton.addEventListener("click", printRecoveryCodes);
                `}]});return C.useEffect(()=>{v()},[]),e.jsxs(p,Object.assign({kcContext:s,i18n:c,doUseDefaultCss:r,classes:u,headerNode:n("recovery-code-config-header")},{children:[e.jsxs("div",Object.assign({className:i("pf-c-alert","pf-m-warning","pf-m-inline",t("kcRecoveryCodesWarning")),"aria-label":"Warning alert"},{children:[e.jsx("div",Object.assign({className:"pf-c-alert__icon"},{children:e.jsx("i",{className:"pficon-warning-triangle-o","aria-hidden":"true"})})),e.jsxs("h4",Object.assign({className:"pf-c-alert__title"},{children:[e.jsx("span",Object.assign({className:"pf-screen-reader"},{children:"Warning alert:"})),n("recovery-code-config-warning-title")]})),e.jsx("div",Object.assign({className:"pf-c-alert__description"},{children:e.jsx("p",{children:n("recovery-code-config-warning-message")})}))]})),e.jsx("ol",Object.assign({id:"kc-recovery-codes-list",className:t("kcRecoveryCodesList")},{children:d.generatedRecoveryAuthnCodesList.map((l,m)=>e.jsxs("li",{children:[e.jsxs("span",{children:[m+1,":"]})," ",l.slice(0,4),"-",l.slice(4,8),"-",l.slice(8)]},m))})),e.jsxs("div",Object.assign({className:t("kcRecoveryCodesActions")},{children:[e.jsxs("button",Object.assign({id:"printRecoveryCodes",className:i("pf-c-button","pf-m-link"),type:"button"},{children:[e.jsx("i",{className:"pficon-print","aria-hidden":"true"})," ",n("recovery-codes-print")]})),e.jsxs("button",Object.assign({id:"downloadRecoveryCodes",className:i("pf-c-button","pf-m-link"),type:"button"},{children:[e.jsx("i",{className:"pficon-save","aria-hidden":"true"})," ",n("recovery-codes-download")]})),e.jsxs("button",Object.assign({id:"copyRecoveryCodes",className:i("pf-c-button","pf-m-link"),type:"button"},{children:[e.jsx("i",{className:"pficon-blueprint","aria-hidden":"true"})," ",n("recovery-codes-copy")]}))]})),e.jsxs("div",Object.assign({className:t("kcFormOptionsClass")},{children:[e.jsx("input",{className:t("kcCheckInputClass"),type:"checkbox",id:"kcRecoveryCodesConfirmationCheck",name:"kcRecoveryCodesConfirmationCheck",onChange:function(){document.getElementById("saveRecoveryAuthnCodesBtn").disabled=!this.checked}}),e.jsx("label",Object.assign({htmlFor:"kcRecoveryCodesConfirmationCheck"},{children:n("recovery-codes-confirmation-message")}))]})),e.jsxs("form",Object.assign({action:s.url.loginAction,className:t("kcFormGroupClass"),id:"kc-recovery-codes-settings-form",method:"post"},{children:[e.jsx("input",{type:"hidden",name:"generatedRecoveryAuthnCodes",value:d.generatedRecoveryAuthnCodesAsString}),e.jsx("input",{type:"hidden",name:"generatedAt",value:d.generatedAt}),e.jsx("input",{type:"hidden",id:"userLabel",name:"userLabel",value:o("recovery-codes-label-default")}),e.jsx(f,{kcClsx:t,i18n:c}),y?e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"submit",className:t("kcButtonClass","kcButtonPrimaryClass","kcButtonLargeClass"),id:"saveRecoveryAuthnCodesBtn",value:o("recovery-codes-action-complete"),disabled:!0}),e.jsx("button",Object.assign({type:"submit",className:t("kcButtonClass","kcButtonDefaultClass","kcButtonLargeClass"),id:"cancelRecoveryAuthnCodesBtn",name:"cancel-aia",value:"true"},{children:n("recovery-codes-action-cancel")}))]}):e.jsx("input",{type:"submit",className:t("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass"),id:"saveRecoveryAuthnCodesBtn",value:o("recovery-codes-action-complete"),disabled:!0})]}))]}))}function f(a){const{kcClsx:s,i18n:c}=a,{msg:r}=c;return e.jsx("div",Object.assign({id:"kc-form-options",className:s("kcFormOptionsClass")},{children:e.jsx("div",Object.assign({className:s("kcFormOptionsWrapperClass")},{children:e.jsx("div",Object.assign({className:"checkbox"},{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",id:"logout-sessions",name:"logout-sessions",value:"on",defaultChecked:!0}),r("logoutOtherSessions")]})}))}))}))}export{j as default};
